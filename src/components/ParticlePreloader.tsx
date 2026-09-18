import React, { useEffect, useRef, useState, useCallback } from 'react';

interface ParticlePreloaderProps {
  onLoaded?: () => void;
  forceShow?: boolean;
  onClose?: () => void;
}

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  burstVx: number;
  burstVy: number;
}

export const ParticlePreloader: React.FC<ParticlePreloaderProps> = ({
  onLoaded,
  forceShow = false,
  onClose
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [containerOpacity, setContainerOpacity] = useState(1);
  const [pointerEventsNone, setPointerEventsNone] = useState(false);
  const animFrameIdRef = useRef<number | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false
  });

  const handleSkip = useCallback(() => {
    setContainerOpacity(0);
    setPointerEventsNone(true);
    setTimeout(() => {
      setIsCompleted(true);
      if (onLoaded) onLoaded();
      if (onClose) onClose();
    }, 400);
  }, [onLoaded, onClose]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Color gradient palette: Vibrant Cyan (#00F2FE), Electric Purple (#9B51E0), Hot Pink (#FF2A85)
    const colorStops = [
      { r: 0, g: 242, b: 254 },   // #00F2FE Cyan
      { r: 155, g: 81, b: 224 },  // #9B51E0 Electric Purple
      { r: 255, g: 42, b: 133 }   // #FF2A85 Hot Pink
    ];

    const interpolateColor = (t: number) => {
      const clamped = Math.max(0, Math.min(1, t));
      if (clamped <= 0.5) {
        const factor = clamped * 2;
        const r = Math.round(colorStops[0].r + (colorStops[1].r - colorStops[0].r) * factor);
        const g = Math.round(colorStops[0].g + (colorStops[1].g - colorStops[0].g) * factor);
        const b = Math.round(colorStops[0].b + (colorStops[1].b - colorStops[0].b) * factor);
        return `rgb(${r}, ${g}, ${b})`;
      } else {
        const factor = (clamped - 0.5) * 2;
        const r = Math.round(colorStops[1].r + (colorStops[2].r - colorStops[1].r) * factor);
        const g = Math.round(colorStops[1].g + (colorStops[2].g - colorStops[1].g) * factor);
        const b = Math.round(colorStops[1].b + (colorStops[2].b - colorStops[1].b) * factor);
        return `rgb(${r}, ${g}, ${b})`;
      }
    };

    let particles: Particle[] = [];
    const PARTICLE_COUNT = 950; // Between 800 - 1,200 as specified

    // Generate targets forming the letter "C"
    const generateCTargets = (): { x: number; y: number; progress: number }[] => {
      const targets: { x: number; y: number; progress: number }[] = [];
      const centerX = width / 2;
      const centerY = height / 2;
      const baseRadius = Math.min(width, height) * 0.18; // responsive sizing
      const thickness = baseRadius * 0.48;

      // Draw arc for "C": start from ~48 deg to ~312 deg (leaving right side open)
      const startAngle = 0.85; // radians (~48 deg)
      const endAngle = Math.PI * 2 - 0.85; // (~312 deg)
      const angleSpan = endAngle - startAngle;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        // Distribute along the arc with thickness
        const t = Math.random();
        const angle = startAngle + t * angleSpan;
        const radialOffset = (Math.random() - 0.5) * thickness;
        const r = baseRadius + radialOffset;

        let px = centerX + Math.cos(angle) * r;
        let py = centerY + Math.sin(angle) * r;

        // Add rounded cap terminals at top & bottom
        if (Math.random() < 0.14) {
          const isTop = Math.random() < 0.5;
          const capAngle = isTop ? startAngle : endAngle;
          const capCenterX = centerX + Math.cos(capAngle) * baseRadius;
          const capCenterY = centerY + Math.sin(capAngle) * baseRadius;
          const capR = (Math.random() * thickness) / 2;
          const randomTheta = Math.random() * Math.PI * 2;
          px = capCenterX + Math.cos(randomTheta) * capR;
          py = capCenterY + Math.sin(randomTheta) * capR;
        }

        // Add subtle organic dispersion
        px += (Math.random() - 0.5) * 6;
        py += (Math.random() - 0.5) * 6;

        // Progress 0..1 based on angle around the C
        const progress = t;
        targets.push({ x: px, y: py, progress });
      }

      return targets;
    };

    const initParticles = () => {
      const targets = generateCTargets();
      const centerX = width / 2;
      const centerY = height / 2;

      particles = targets.map((t, idx) => {
        // Start randomized across the screen or radiating from center
        const startDist = Math.random() * Math.max(width, height) * 0.6;
        const startAngle = Math.random() * Math.PI * 2;
        const startX = centerX + Math.cos(startAngle) * startDist;
        const startY = centerY + Math.sin(startAngle) * startDist;

        // Dispersal burst vector radiating outward from center
        const burstAngle = Math.atan2(t.y - centerY, t.x - centerX) + (Math.random() - 0.5) * 0.8;
        const burstSpeed = 8 + Math.random() * 18;

        return {
          x: startX,
          y: startY,
          originX: startX,
          originY: startY,
          targetX: t.x,
          targetY: t.y,
          vx: 0,
          vy: 0,
          size: 1.1 + Math.random() * 1.8,
          color: interpolateColor(t.progress),
          baseAlpha: 0.6 + Math.random() * 0.4,
          alpha: 0.6,
          twinkleSpeed: 1.5 + Math.random() * 3,
          twinklePhase: Math.random() * Math.PI * 2,
          burstVx: Math.cos(burstAngle) * burstSpeed,
          burstVy: Math.sin(burstAngle) * burstSpeed
        };
      });
    };

    initParticles();

    const startTime = performance.now();
    let dispersed = false;
    let unlocked = false;

    const animate = (now: number) => {
      const elapsed = (now - startTime) / 1000; // in seconds

      // Background clearing with slight trail
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const repelDist = 90;
      const repelDistSq = repelDist * repelDist;

      // Phase timing:
      // 0s - 1.8s: Assembly into "C", Brownian motion, Twinkling (0.4 to 1.0), Mouse repel
      // 2.0s: Cluster bursts/disperses outward, container fades out, onLoaded unlocks page
      const isAssembly = elapsed <= 1.8;
      const isBurst = elapsed >= 2.0;

      if (isBurst && !dispersed) {
        dispersed = true;
        setContainerOpacity(0);
        setPointerEventsNone(true);
      }

      if (elapsed >= 2.4 && !unlocked) {
        unlocked = true;
        setIsCompleted(true);
        if (onLoaded) onLoaded();
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!isBurst) {
          // 0 to 1.8s: Spring towards target
          // Interpolation factor increases as elapsed goes from 0 to 1.0s
          const assembleProgress = Math.min(1, elapsed / 1.0);
          const ease = assembleProgress * (2 - assembleProgress); // ease-out

          // Target position with Brownian micro-fluctuation
          const brownianAngle = now * 0.002 + p.twinklePhase;
          const brownianAmp = 1.6;
          const currentTargetX = p.targetX + Math.cos(brownianAngle) * brownianAmp;
          const currentTargetY = p.targetY + Math.sin(brownianAngle) * brownianAmp;

          // Spring physics
          const dx = currentTargetX - p.x;
          const dy = currentTargetY - p.y;
          const springStrength = 0.08 * ease;
          p.vx += dx * springStrength;
          p.vy += dy * springStrength;

          // Mouse repel interaction
          if (mouse.active) {
            const mdx = p.x - mouse.x;
            const mdy = p.y - mouse.y;
            const distSq = mdx * mdx + mdy * mdy;

            if (distSq < repelDistSq && distSq > 0) {
              const dist = Math.sqrt(distSq);
              const force = (1 - dist / repelDist) * 14;
              p.vx += (mdx / dist) * force;
              p.vy += (mdy / dist) * force;
            }
          }

          // Damping
          p.vx *= 0.82;
          p.vy *= 0.82;

          p.x += p.vx;
          p.y += p.vy;

          // Twinkling opacity between 0.4 and 1.0
          const twinkle = Math.sin(now * 0.003 * p.twinkleSpeed + p.twinklePhase);
          p.alpha = 0.4 + 0.6 * ((twinkle + 1) / 2);
        } else {
          // Burst phase (2.0s+)
          p.x += p.burstVx;
          p.y += p.burstVy;
          p.burstVx *= 0.96;
          p.burstVy *= 0.96;
          p.alpha = Math.max(0, p.alpha - 0.035);
        }

        // Draw particle
        if (p.alpha > 0.01) {
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;

          // Particle core
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();

          // Subtle glow for larger particles
          if (p.size > 1.8 && !isBurst) {
            ctx.globalAlpha = p.alpha * 0.3;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 2.4, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }
      }

      // Draw subtle centered brand text below during preloader
      if (elapsed < 1.9 && containerOpacity > 0.1) {
        ctx.save();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Percentage progress
        const loadPct = Math.min(100, Math.round((elapsed / 2.0) * 100));
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.font = '500 11px Inter, sans-serif';
        ctx.fillText(`INITIALIZING BRAND SYSTEMS  ${loadPct}%`, width / 2, height / 2 + Math.min(width, height) * 0.22);

        ctx.restore();
      }

      if (!unlocked || elapsed < 2.6) {
        animFrameIdRef.current = requestAnimationFrame(animate);
      }
    };

    animFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [onLoaded, containerOpacity]);

  if (isCompleted && !forceShow) {
    return null;
  }

  return (
    <div
      id="preloader-overlay"
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-500 ease-out"
      style={{
        opacity: containerOpacity,
        pointerEvents: pointerEventsNone ? 'none' : 'auto'
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Interactive Skip Pill */}
      <div className="absolute bottom-8 right-8 z-10 flex items-center gap-3">
        <button
          id="skip-preloader-btn"
          onClick={handleSkip}
          type="button"
          className="px-4 py-2 rounded-full text-xs uppercase tracking-widest bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white border border-white/15 backdrop-blur-md transition-all duration-200 shadow-lg cursor-pointer"
        >
          Skip Intro ↗
        </button>
      </div>

      {/* Subtle hint */}
      <div className="absolute bottom-8 left-8 z-10 hidden sm:flex items-center gap-2 text-xs text-neutral-500 tracking-wider font-mono">
        <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        Interactive Particle System • Hover to repel
      </div>
    </div>
  );
};
