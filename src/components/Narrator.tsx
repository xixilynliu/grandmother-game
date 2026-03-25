import React from 'react';
import { motion } from 'framer-motion';
import TextAnimator from './TextAnimator';

interface NarratorProps {
  text: string;
  textSpeed?: number;
  animated?: boolean;
  onComplete?: () => void;
}

/**
 * 旁白组件
 * 与角色对话有明显的视觉区分
 */
const Narrator: React.FC<NarratorProps> = ({
  text,
  textSpeed = 3,
  animated = true,
  onComplete,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="relative mx-auto max-w-4xl"
    >
      <div className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-lg p-6 shadow-2xl border border-gray-700">
        {/* 装饰性引号 */}
        <div className="absolute -top-4 left-8 text-6xl text-gray-600 opacity-50">
          "
        </div>
        
        {/* 旁白文字 */}
        <div className="relative z-10">
          <TextAnimator
            text={text}
            speed={textSpeed}
            animated={animated}
            onComplete={onComplete}
            className="text-gray-100 text-lg leading-relaxed font-serif italic"
          />
        </div>

        {/* 装饰性线条 */}
        <div className="mt-4 flex items-center justify-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
        </div>
      </div>

      {/* 提示文字 */}
      {animated && (
        <div className="text-center mt-2 text-gray-400 text-sm opacity-70">
          点击任意处跳过动画
        </div>
      )}
    </motion.div>
  );
};

export default Narrator;