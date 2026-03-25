import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { audioManager } from '../utils/audioManager';

interface ChoiceButtonProps {
  choiceId: string;
  text: string;
  onClick: (choiceId: string) => void;
  disabled?: boolean;
  locked?: boolean;
  unlockHint?: string;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({ 
  choiceId, 
  text, 
  onClick, 
  disabled = false,
  locked = false,
  unlockHint,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    if (disabled || locked) {
      // 播放锁定音效
      audioManager.playSFX('/assets/audio/sfx/locked.mp3');
      return;
    }

    // 播放选择音效
    audioManager.playSFX('/assets/audio/sfx/select.mp3');
    onClick(choiceId);
  };

  const handleHover = () => {
    if (!disabled && !locked) {
      // 播放悬停音效
      audioManager.playSFX('/assets/audio/sfx/hover.mp3', 0.3);
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={!disabled && !locked ? { scale: 1.02, x: 5 } : {}}
      whileTap={!disabled && !locked ? { scale: 0.98 } : { scale: 1, rotate: [0, -2, 2, -2, 0] }}
      transition={{ duration: 0.2 }}
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      disabled={disabled}
      className={`
        relative w-full p-4 text-left rounded-lg border-2 transition-all duration-200 overflow-hidden
        ${locked 
          ? 'bg-gray-200 border-gray-400 text-gray-500 cursor-not-allowed' 
          : disabled 
          ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed' 
          : 'bg-white border-purple-200 text-gray-800 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:border-purple-400 hover:shadow-lg cursor-pointer'
        }
      `}
      title={locked ? unlockHint : undefined}
    >
      {/* 波纹效果背景 */}
      {isPressed && !disabled && !locked && (
        <motion.div
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-purple-400 rounded-lg"
        />
      )}

      {/* 图标和文字 */}
      <div className="relative z-10 flex items-start gap-3">
        <span className={`text-xl flex-shrink-0 ${locked ? 'text-gray-400' : disabled ? 'text-gray-400' : 'text-purple-600'}`}>
          {locked ? '🔒' : disabled ? '⏸️' : '▶️'}
        </span>
        <div className="flex-1">
          <div className="text-base leading-relaxed">{text}</div>
          {locked && unlockHint && (
            <div className="text-xs text-gray-400 mt-1 italic">
              {unlockHint}
            </div>
          )}
        </div>
      </div>

      {/* 解锁提示闪烁动画 */}
      {locked && (
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-2 right-2"
        >
          <span className="text-xs text-gray-400">🔐</span>
        </motion.div>
      )}

      {/* 选中高亮边框 */}
      {!disabled && !locked && (
        <motion.div
          className="absolute inset-0 border-2 border-purple-400 rounded-lg opacity-0 pointer-events-none"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.button>
  );
};

export default ChoiceButton;