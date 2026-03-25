// 章节数据索引文件
import { ChapterData } from '../../types/game';
import { chapter1 } from './chapter1';
import { chapter2 } from './chapter2';
import { chapter3 } from './chapter3';
import { chapter4 } from './chapter4';
import { chapter5 } from './chapter5';
import { chapter6 } from './chapter6';
import { chapter7 } from './chapter7';
import { chapter8 } from './chapter8';
import { chapter9 } from './chapter9';
import { chapter10 } from './chapter10';
import { chapter11 } from './chapter11';
import { chapter12 } from './chapter12';
import { chapter13 } from './chapter13';
import { chapter14 } from './chapter14';
import { chapter15 } from './chapter15';
import { chapter16 } from './chapter16';

export const chapters: Record<number, ChapterData> = {
  1: chapter1,
  2: chapter2,
  3: chapter3,
  4: chapter4,
  5: chapter5,
  6: chapter6,
  7: chapter7,
  8: chapter8,
  9: chapter9,
  10: chapter10,
  11: chapter11,
  12: chapter12,
  13: chapter13,
  14: chapter14,
  15: chapter15,
  16: chapter16
};

// 获取指定章节
export const getChapter = (chapterId: number): ChapterData | undefined => {
  return chapters[chapterId];
};

// 获取指定场景
export const getScene = (chapterId: number, sceneId: string) => {
  const chapter = chapters[chapterId];
  if (!chapter) return undefined;
  return chapter.scenes.find(scene => scene.id === sceneId);
};

// 获取所有章节列表
export const getAllChapters = (): ChapterData[] => {
  return Object.values(chapters).sort((a, b) => a.id - b.id);
};

// 获取章节总数
export const getTotalChapters = (): number => {
  return Object.keys(chapters).length;
};