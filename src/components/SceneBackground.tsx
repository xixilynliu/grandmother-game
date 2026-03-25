import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assetLoader } from '../utils/assetLoader';

interface SceneBackgroundProps {
  backgroundSrc: string;
  transitionDuration?: number;
  overlay?: boolean;
  overlayOpacity?: number;
}

/**
 * 场景背景组件
 * 支持背景图片切换动画和预加载
 */
const SceneBackground: React.FC<SceneBackgroundProps> = ({
  backgroundSrc,
  transitionDuration = 0.8,
  overlay = true,
  overlayOpacity = 0.3,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    const loadBackground = async () => {
      setIsLoaded(false);
      
      // 检查资源是否已加载
      if (assetLoader.isLoaded(backgroundSrc)) {
        setImageSrc(backgroundSrc);
        setIsLoaded(true);
      } else if (assetLoader.hasFailed(backgroundSrc)) {
        // 加载失败，使用占位符
        console.warn(`背景图片加载失败，使用占位符: ${backgroundSrc}`);
        setImageSrc(''); // 纯色背景
        setIsLoaded(true);
      } else {
        // 加载资源
        try {
          await assetLoader.loadAsset(backgroundSrc, 'image');
          setImageSrc(backgroundSrc);
          setIsLoaded(true);
        } catch (error) {
          console.error('背景图片加载失败:', error);
          setImageSrc('');
          setIsLoaded(true);
        }
      }
    };

    loadBackground();
  }, [backgroundSrc]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoaded && (
          <motion.div
            key={imageSrc || 'fallback'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: transitionDuration }}
            className="absolute inset-0 w-full h-full"
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="场景背景"
                className="w-full h-full object-cover"
              />
            ) : (
              // 降级方案：渐变背景
              <div className="w-full h-full bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100" />
            )}
            
            {/* 遮罩层，增强文字可读性 */}
            {overlay && (
              <div
                className="absolute inset-0 bg-black"
                style={{ opacity: overlayOpacity }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 加载指示器 */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="animate-pulse text-white text-lg">加载中...</div>
        </div>
      )}
    </div>
  );
};

export default SceneBackground;