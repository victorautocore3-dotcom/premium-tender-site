/**
 * Web Audio Ambient Synthesizer
 * Generates delicate, warm ethereal ambient chords and interactive chime feedback
 */
class AmbientAudioController {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private ambientInterval: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggle(): boolean {
    this.initContext();
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public playChime(freq = 528) {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      noteGain.gain.setValueAtTime(0, this.ctx.currentTime);
      noteGain.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + 0.05);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);

      osc.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 1.2);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  private start() {
    this.isPlaying = true;
    // Play warm introductory chord: C - E - G - B (Major 7th)
    const chord = [261.63, 329.63, 392.0, 493.88];
    chord.forEach((freq, idx) => {
      setTimeout(() => {
        if (this.isPlaying) this.playTone(freq, 3.5, 0.04);
      }, idx * 160);
    });

    // Ambient ongoing gentle loop
    this.ambientInterval = window.setInterval(() => {
      if (!this.isPlaying) return;
      const notes = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25];
      const randomNote = notes[Math.floor(Math.random() * notes.length)];
      this.playTone(randomNote, 4.0, 0.03);
    }, 3800);
  }

  private playTone(freq: number, duration: number, volume: number) {
    if (!this.ctx || !this.masterGain) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(volume, now + duration * 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(now + duration);
    } catch {
      // safe ignore
    }
  }

  private stop() {
    this.isPlaying = false;
    if (this.ambientInterval) {
      clearInterval(this.ambientInterval);
      this.ambientInterval = null;
    }
  }
}

export const ambientAudio = new AmbientAudioController();
