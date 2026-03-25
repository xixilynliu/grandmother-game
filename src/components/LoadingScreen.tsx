import React from 'react';
import { motion } from 'framer-motion';
import { LoadProgress } from '../utils/assetLoader';

interface LoadingScreenProps {
  progress: LoadProgress;
  message?: string;
}

/**
 * 加载屏幕组件
 * 显示资源加载进度
 */
const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  progress, 
  message = '加载中...' 
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900">
      <div className="text-center space-y-8 px-8">
        {/* Logo或标题 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            十八岁太奶奶
          </h1>
          <p className="text-xl text-gray-300">
            互动叙事游戏
          </p>
        </motion.div>

        {/* 进度条 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="w-full max-w-md mx-auto"
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-full h-4 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress.percentage}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>

          {/* 进度文字 */}
          <div className="mt-4 space-y-2">
            <div className="text-white text-lg font-medium">
              {message}
            </div>
            <div className="text-gray-300 text-sm">
              {progress.loaded} / {progress.total} ({progress.percentage}%)
            </div>
            {progress.currentAsset && (
              <div className="text-gray-400 text-xs truncate max-w-md">
                {progress.currentAsset}
              </div>
            )}
          </div>
        </motion.div>

        {/* 装饰动画 */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex justify-center space-x-2"
        >
          <div className="w-3 h-3 bg-white rounded-full" />
          <div className="w-3 h-3 bg-white rounded-full" />
          <div className="w-3 h-3 bg-white rounded-full" />
        </motion.div>
      </div>
    </div>
  );
};

/**
 * 简单加载指示器
 */
export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} border-purple-600 border-t-transparent rounded-full animate-spin`}
      />
    </div>
  );
};

export default LoadingScreen;