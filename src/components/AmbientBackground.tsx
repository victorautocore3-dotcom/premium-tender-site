import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div
      id="ambient-chromatic-halo-container"
      className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[850px] pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Blurry, multi-colored chromatic ring/halo with conic gradient */}
      <div
        id="ambient-chromatic-halo"
        className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] lg:w-[1100px] h-[700px] sm:h-[900px] lg:h-[1100px] rounded-full opacity-40 blur-3xl animate-spin-slow"
        style={{
          background:
            'conic-gradient(from 0deg at 50% 50%, #9B51E0 0deg, #F59E0B 90deg, #00F2FE 180deg, #EA580C 270deg, #9B51E0 360deg)',
          maskImage:
            'radial-gradient(circle at center, transparent 35%, black 65%, transparent 85%)',
          WebkitMaskImage:
            'radial-gradient(circle at center, transparent 35%, black 65%, transparent 85%)'
        }}
      />

      {/* Secondary soft center diffusion glow */}
      <div
        className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full bg-gradient-to-tr from-cyan-500/15 via-purple-600/20 to-amber-500/15 blur-[120px] opacity-35 pointer-events-none animate-pulse-glow"
      />

      {/* Subtle fine grid overlay to ground the aesthetic */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />
    </div>
  );
};
