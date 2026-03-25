import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TextAnimatorProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  animated?: boolean;
  className?: string;
}

const TextAnimator: React.FC<TextAnimatorProps> = ({
  text,
  speed = 3,
  onComplete,
  animated = true,
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const timeoutRef = useRef<number>();

  const getDelay = (speed: number): number => {
    const delays: Record<number, number> = {
      1: 150,
      2: 100,
      3: 60,
      4: 30,
      5: 10,
    };
    return delays[speed] || 60;
  };

  useEffect(() => {
    if (!animated) {
      setDisplayedText(text);
      setIsComplete(true);
      onComplete?.();
      return;
    }

    setDisplayedText('');
    setIsComplete(false);
    let currentIndex = 0;

    const delay = getDelay(speed);

    const typeNextChar = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
        timeoutRef.current = window.setTimeout(typeNextChar, delay);
      } else {
        setIsComplete(true);
        onComplete?.();
      }
    };

    timeoutRef.current = window.setTimeout(typeNextChar, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, speed, animated, onComplete]);

  const handleClick = () => {
    if (!isComplete && animated) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setDisplayedText(text);
      setIsComplete(true);
      onComplete?.();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {displayedText}
      {!isComplete && animated && (
        <span className="inline-block w-2 h-5 ml-1 bg-current animate-pulse" />
      )}
    </motion.div>
  );
};

export default TextAnimator;