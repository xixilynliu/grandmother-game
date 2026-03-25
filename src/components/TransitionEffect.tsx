import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TransitionEffectProps {
  show: boolean;
  type?: 'fade' | 'slide' | 'zoom' | 'curtain';
  duration?: number;
  text?: string;
  onComplete?: () => void;
}

/**
 * 场景转场效果组件
 * 支持多种转场动画类型
 */
const TransitionEffect: React.FC<TransitionEffectProps> = ({
  show,
  type = 'fade',
  duration = 0.8,
  text,
  onComplete,
}) => {
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slide: {
      initial: { x: '100%' },
      animate: { x: 0 },
      exit: { x: '-100%' },
    },
    zoom: {
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 2, opacity: 0 },
    },
    curtain: {
      initial: { scaleY: 0, transformOrigin: 'top' },
      animate: { scaleY: 1, transformOrigin: 'top' },
      exit: { scaleY: 0, transformOrigin: 'bottom' },
    },
  };

  const selectedVariant = variants[type];

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {show && (
        <motion.div
          initial={selectedVariant.initial}
          animate={selectedVariant.animate}
          exit={selectedVariant.exit}
          transition={{ duration, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          {text && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white text-4xl font-bold text-center px-8"
            >
              {text}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/**
 * 章节转场组件
 * 专门用于章节切换的特殊转场效果
 */
export const ChapterTransition: React.FC<{
  show: boolean;
  chapterNumber: number;
  chapterTitle: string;
  onComplete?: () => void;
}> = ({ show, chapterNumber, chapterTitle, onComplete }) => {
  return (
    <AnimatePresence onExitComplete={onComplete}>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900"
        >
          <div className="text-center space-y-6">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'backOut' }}
              className="text-white"
            >
              <div className="text-2xl font-light mb-4 tracking-widest">
                第 {chapterNumber} 章
              </div>
              <div className="text-5xl font-bold">{chapterTitle}</div>
            </motion.div>

            {/* 装饰性线条 */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto max-w-md"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TransitionEffect;