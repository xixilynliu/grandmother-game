import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assetLoader } from '../utils/assetLoader';

interface CharacterSpriteProps {
  character: string;
  expression: string;
  position?: 'left' | 'center' | 'right';
  scale?: number;
  zIndex?: number;
  show?: boolean;
}

/**
 * 角色立绘组件
 * 支持表情切换、位置动画和淡入淡出效果
 */
const CharacterSprite: React.FC<CharacterSpriteProps> = ({
  character,
  expression,
  position = 'center',
  scale = 1,
  zIndex = 10,
  show = true,
}) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);

  // 根据位置计算X偏移
  const getPositionX = () => {
    switch (position) {
      case 'left':
        return '-30%';
      case 'right':
        return '30%';
      case 'center':
      default:
        return '0%';
    }
  };

  useEffect(() => {
    const loadSprite = async () => {
      if (!character || !expression) {
        setIsLoaded(false);
        return;
      }

      // 构建立绘路径
      const spritePath = `/assets/images/characters/${character}/${expression}.png`;
      
      setIsLoaded(false);
      
      // 检查资源加载状态
      if (assetLoader.isLoaded(spritePath)) {
        setImageSrc(spritePath);
        setIsLoaded(true);
      } else if (assetLoader.hasFailed(spritePath)) {
        console.warn(`角色立绘加载失败: ${character} - ${expression}`);
        setImageSrc('');
        setIsLoaded(false);
      } else {
        // 加载资源
        try {
          await assetLoader.loadAsset(spritePath, 'image');
          setImageSrc(spritePath);
          setIsLoaded(true);
        } catch (error) {
          console.error('角色立绘加载失败:', error);
          setImageSrc('');
          setIsLoaded(false);
        }
      }
    };

    loadSprite();
  }, [character, expression]);

  // 如果没有图片或不显示，返回null
  if (!show || !imageSrc || !isLoaded) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        key={`${character}-${expression}`}
        initial={{ opacity: 0, x: getPositionX(), scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          x: getPositionX(), 
          scale: scale 
        }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ 
          duration: 0.5,
          ease: 'easeOut'
        }}
        className="absolute bottom-0"
        style={{
          left: position === 'left' ? '10%' : position === 'right' ? 'auto' : '50%',
          right: position === 'right' ? '10%' : 'auto',
          transform: position === 'center' ? 'translateX(-50%)' : 'none',
          zIndex,
          maxHeight: '80vh',
          pointerEvents: 'none',
        }}
      >
        <img
          src={imageSrc}
          alt={`${character} - ${expression}`}
          className="h-auto max-h-[80vh] w-auto object-contain drop-shadow-2xl"
          style={{
            filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))',
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default CharacterSprite;