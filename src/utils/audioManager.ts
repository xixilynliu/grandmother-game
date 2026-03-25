/**
 * 音频管理器
 * 负责管理背景音乐、音效和配音的播放、切换和音量控制
 */

import { AudioSettings } from '../types/game';

class AudioManager {
  private bgmInstance: HTMLAudioElement | null = null;
  private voiceInstance: HTMLAudioElement | null = null;
  private currentBGM: string = '';
  private sfxPool: Map<string, HTMLAudioElement[]> = new Map();
  private settings: AudioSettings;

  constructor() {
    this.settings = {
      bgmVolume: 0.5,
      sfxVolume: 0.7,
      voiceVolume: 0.8,
      bgmEnabled: true,
      sfxEnabled: true,
      voiceEnabled: true,
      autoPlay: true,
    };
  }

  /**
   * 更新音频设置
   */
  updateSettings(newSettings: Partial<AudioSettings>): void {
    this.settings = { ...this.settings, ...newSettings };
    
    if (this.bgmInstance) {
      this.bgmInstance.volume = this.settings.bgmEnabled ? this.settings.bgmVolume : 0;
    }
    if (this.voiceInstance) {
      this.voiceInstance.volume = this.settings.voiceEnabled ? this.settings.voiceVolume : 0;
    }
  }

  /**
   * 获取当前设置
   */
  getSettings(): AudioSettings {
    return { ...this.settings };
  }

  /**
   * 播放背景音乐（带淡入淡出效果）
   */
  async playBGM(src: string, fadeInDuration: number = 1000): Promise<void> {
    if (!this.settings.bgmEnabled || !src) return;

    if (this.currentBGM === src && this.bgmInstance && !this.bgmInstance.paused) {
      return;
    }

    if (this.bgmInstance && !this.bgmInstance.paused) {
      await this.fadeOut(this.bgmInstance, 800);
      this.bgmInstance.pause();
      this.bgmInstance.currentTime = 0;
    }

    const newBGM = new Audio(src);
    newBGM.loop = true;
    newBGM.volume = 0;
    
    try {
      await newBGM.play();
      this.bgmInstance = newBGM;
      this.currentBGM = src;
      await this.fadeIn(newBGM, this.settings.bgmVolume, fadeInDuration);
    } catch (error) {
      // 静默处理，资源不存在时不报错
    }
  }

  /**
   * 停止背景音乐
   */
  async stopBGM(fadeOutDuration: number = 800): Promise<void> {
    if (this.bgmInstance) {
      await this.fadeOut(this.bgmInstance, fadeOutDuration);
      this.bgmInstance.pause();
      this.bgmInstance.currentTime = 0;
      this.bgmInstance = null;
      this.currentBGM = '';
    }
  }

  /**
   * 暂停背景音乐
   */
  pauseBGM(): void {
    if (this.bgmInstance) {
      this.bgmInstance.pause();
    }
  }

  /**
   * 恢复背景音乐
   */
  resumeBGM(): void {
    if (this.bgmInstance && this.settings.bgmEnabled) {
      this.bgmInstance.play().catch(() => {});
    }
  }

  /**
   * 播放音效
   */
  playSFX(src: string, volume?: number): void {
    if (!this.settings.sfxEnabled || !src) return;

    let sfxArray = this.sfxPool.get(src);
    if (!sfxArray) {
      sfxArray = [];
      this.sfxPool.set(src, sfxArray);
    }

    let sfx = sfxArray.find(audio => audio.paused || audio.ended);
    
    if (!sfx) {
      if (sfxArray.length < 5) {
        sfx = new Audio(src);
        sfxArray.push(sfx);
      } else {
        sfx = sfxArray[0];
        sfx.currentTime = 0;
      }
    }

    sfx.volume = volume ?? this.settings.sfxVolume;
    sfx.play().catch(() => {});
  }

  /**
   * 播放配音
   */
  async playVoice(src: string, onEnd?: () => void): Promise<void> {
    if (!this.settings.voiceEnabled || !src) {
      onEnd?.();
      return;
    }

    if (this.voiceInstance) {
      this.voiceInstance.pause();
      this.voiceInstance.currentTime = 0;
    }

    const voice = new Audio(src);
    voice.volume = this.settings.voiceVolume;
    
    voice.onended = () => {
      onEnd?.();
    };

    voice.onerror = () => {
      onEnd?.();
    };

    try {
      await voice.play();
      this.voiceInstance = voice;
    } catch (error) {
      onEnd?.();
    }
  }

  /**
   * 停止配音
   */
  stopVoice(): void {
    if (this.voiceInstance) {
      this.voiceInstance.pause();
      this.voiceInstance.currentTime = 0;
      this.voiceInstance = null;
    }
  }

  /**
   * 淡入效果
   */
  private fadeIn(audio: HTMLAudioElement, targetVolume: number, duration: number): Promise<void> {
    return new Promise((resolve) => {
      const steps = 20;
      const stepDuration = duration / steps;
      const volumeStep = targetVolume / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        audio.volume = Math.min(volumeStep * currentStep, targetVolume);

        if (currentStep >= steps) {
          clearInterval(interval);
          resolve();
        }
      }, stepDuration);
    });
  }

  /**
   * 淡出效果
   */
  private fadeOut(audio: HTMLAudioElement, duration: number): Promise<void> {
    return new Promise((resolve) => {
      const startVolume = audio.volume;
      const steps = 20;
      const stepDuration = duration / steps;
      const volumeStep = startVolume / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        audio.volume = Math.max(startVolume - volumeStep * currentStep, 0);

        if (currentStep >= steps) {
          clearInterval(interval);
          resolve();
        }
      }, stepDuration);
    });
  }

  /**
   * 停止所有音频
   */
  stopAll(): void {
    this.stopBGM();
    this.stopVoice();
    
    this.sfxPool.forEach(sfxArray => {
      sfxArray.forEach(sfx => {
        sfx.pause();
        sfx.currentTime = 0;
      });
    });
  }

  /**
   * 清理资源
   */
  dispose(): void {
    this.stopAll();
    this.sfxPool.clear();
  }
}

// 导出单例
export const audioManager = new AudioManager();