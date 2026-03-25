/**
 * 资源加载器
 * 负责预加载和管理游戏资源（图片、音频）
 */

export interface LoadProgress {
  loaded: number;
  total: number;
  percentage: number;
  currentAsset?: string;
}

export type LoadCallback = (progress: LoadProgress) => void;

class AssetLoader {
  private loadedAssets: Map<string, HTMLImageElement | HTMLAudioElement> = new Map();
  private loadingPromises: Map<string, Promise<any>> = new Map();
  private failedAssets: Set<string> = new Set();

  /**
   * 预加载图片
   */
  private loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      
      img.onload = () => {
        this.loadedAssets.set(src, img);
        resolve(img);
      };
      
      img.onerror = () => {
        console.warn(`图片加载失败: ${src}`);
        this.failedAssets.add(src);
        reject(new Error(`Failed to load image: ${src}`));
      };
      
      img.src = src;
    });
  }

  /**
   * 预加载音频
   */
  private loadAudio(src: string): Promise<HTMLAudioElement> {
    return new Promise((resolve, reject) => {
      const audio = new Audio();
      
      audio.oncanplaythrough = () => {
        this.loadedAssets.set(src, audio);
        resolve(audio);
      };
      
      audio.onerror = () => {
        console.warn(`音频加载失败: ${src}`);
        this.failedAssets.add(src);
        reject(new Error(`Failed to load audio: ${src}`));
      };
      
      audio.src = src;
      audio.load();
    });
  }

  /**
   * 加载单个资源
   */
  async loadAsset(src: string, type: 'image' | 'audio'): Promise<void> {
    // 已加载或加载失败，跳过
    if (this.loadedAssets.has(src) || this.failedAssets.has(src)) {
      return;
    }

    // 正在加载，返回现有Promise
    if (this.loadingPromises.has(src)) {
      return this.loadingPromises.get(src);
    }

    // 开始加载
    const promise = type === 'image' 
      ? this.loadImage(src)
      : this.loadAudio(src);

    this.loadingPromises.set(src, promise);

    try {
      await promise;
    } catch (error) {
      // 错误已经记录，继续执行
    } finally {
      this.loadingPromises.delete(src);
    }
  }

  /**
   * 批量加载资源
   */
  async loadAssets(
    assets: { src: string; type: 'image' | 'audio' }[],
    onProgress?: LoadCallback
  ): Promise<void> {
    const total = assets.length;
    let loaded = 0;

    const updateProgress = (currentAsset?: string) => {
      loaded++;
      const percentage = Math.round((loaded / total) * 100);
      onProgress?.({ loaded, total, percentage, currentAsset });
    };

    // 并发加载（限制并发数）
    const concurrency = 5;
    const queue = [...assets];
    const executing: Promise<void>[] = [];

    while (queue.length > 0 || executing.length > 0) {
      // 填充执行队列
      while (executing.length < concurrency && queue.length > 0) {
        const asset = queue.shift()!;
        const promise = this.loadAsset(asset.src, asset.type)
          .then(() => updateProgress(asset.src))
          .catch(() => updateProgress(asset.src));
        
        executing.push(promise);
        
        // 执行完成后从队列移除
        promise.finally(() => {
          const index = executing.indexOf(promise);
          if (index > -1) executing.splice(index, 1);
        });
      }

      // 等待至少一个完成
      if (executing.length > 0) {
        await Promise.race(executing);
      }
    }
  }

  /**
   * 预加载章节资源
   */
  async preloadChapter(
    chapterNumber: number,
    backgrounds: string[],
    characters: string[],
    bgm: string[],
    onProgress?: LoadCallback
  ): Promise<void> {
    const assets: { src: string; type: 'image' | 'audio' }[] = [
      ...backgrounds.map(src => ({ src, type: 'image' as const })),
      ...characters.map(src => ({ src, type: 'image' as const })),
      ...bgm.map(src => ({ src, type: 'audio' as const })),
    ];

    await this.loadAssets(assets, onProgress);
  }

  /**
   * 检查资源是否已加载
   */
  isLoaded(src: string): boolean {
    return this.loadedAssets.has(src);
  }

  /**
   * 检查资源是否加载失败
   */
  hasFailed(src: string): boolean {
    return this.failedAssets.has(src);
  }

  /**
   * 获取已加载的资源
   */
  getAsset(src: string): HTMLImageElement | HTMLAudioElement | undefined {
    return this.loadedAssets.get(src);
  }

  /**
   * 清除指定资源
   */
  unload(src: string): void {
    this.loadedAssets.delete(src);
    this.failedAssets.delete(src);
  }

  /**
   * 清除所有资源
   */
  clear(): void {
    this.loadedAssets.clear();
    this.loadingPromises.clear();
    this.failedAssets.clear();
  }

  /**
   * 获取加载统计
   */
  getStats() {
    return {
      loaded: this.loadedAssets.size,
      failed: this.failedAssets.size,
      loading: this.loadingPromises.size,
    };
  }
}

// 导出单例
export const assetLoader = new AssetLoader();