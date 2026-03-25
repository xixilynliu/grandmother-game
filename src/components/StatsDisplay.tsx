import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayerStats, Relationships } from '../types/game';
import { audioManager } from '../utils/audioManager';

interface StatsDisplayProps {
  stats: PlayerStats;
  relationships?: Relationships;
}

interface StatBarProps {
  label: string;
  value: number;
  max?: number;
  color?: string;
}

const StatBar: React.FC<StatBarProps> = ({ 
  label, 
  value, 
  max = 100,
  color = 'from-blue-400 to-purple-500',
}) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [change, setChange] = useState<number>(0);
  const prevValueRef = useRef(value);

  useEffect(() => {
    const diff = value - prevValueRef.current;
    
    if (diff !== 0) {
      setChange(diff);
      
      // 播放属性变化音效
      if (diff > 0) {
        audioManager.playSFX('/assets/audio/sfx/stat-increase.mp3', 0.4);
      } else {
        audioManager.playSFX('/assets/audio/sfx/stat-decrease.mp3', 0.4);
      }
      
      // 数值动画
      const duration = 500;
      const steps = 20;
      const stepValue = diff / steps;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        setDisplayValue(prevValueRef.current + stepValue * currentStep);
        
        if (currentStep >= steps) {
          clearInterval(interval);
          setDisplayValue(value);
          // 延迟隐藏变化提示
          setTimeout(() => setChange(0), 1000);
        }
      }, stepDuration);

      prevValueRef.current = value;

      return () => clearInterval(interval);
    }
  }, [value]);

  const percentage = (displayValue / max) * 100;
  
  return (
    <div className="mb-4 relative">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-purple-600">
            {Math.round(displayValue)}/{max}
          </span>
          
          {/* 变化提示 */}
          <AnimatePresence>
            {change !== 0 && (
              <motion.span
                initial={{ opacity: 0, y: 10, scale: 0.5 }}
                animate={{ opacity: 1, y: -10, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                className={`text-xs font-bold ${
                  change > 0 ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {change > 0 ? '+' : ''}{change}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div 
          className={`h-3 rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats, relationships }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* 角色属性 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-300 flex items-center">
          <span className="mr-2">📊</span>
          角色属性
        </h3>
        <StatBar label="智慧值" value={stats.wisdom} color="from-blue-400 to-blue-600" />
        <StatBar label="气场值" value={stats.charisma} color="from-purple-400 to-purple-600" />
        <StatBar label="现代化适应" value={stats.modernity} color="from-pink-400 to-pink-600" />
        <StatBar label="教导能力" value={stats.teaching} color="from-green-400 to-green-600" />
        <StatBar label="医疗知识" value={stats.medical} color="from-red-400 to-red-600" />
      </div>

      {/* 关系网络 */}
      {relationships && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-300 flex items-center">
            <span className="mr-2">💕</span>
            人际关系
          </h3>
          <StatBar 
            label="纪止渊好感" 
            value={relationships.jiZhiyuan} 
            color="from-rose-400 to-rose-600" 
          />
          <StatBar 
            label="纪舟野好感" 
            value={relationships.jiZhouye} 
            color="from-orange-400 to-orange-600" 
          />
          <StatBar 
            label="纪舜英情感" 
            value={relationships.jiShunying} 
            color="from-cyan-400 to-cyan-600" 
          />
          <StatBar 
            label="容若瑶敌意" 
            value={relationships.rongRuoya} 
            color="from-gray-400 to-gray-600" 
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default StatsDisplay;