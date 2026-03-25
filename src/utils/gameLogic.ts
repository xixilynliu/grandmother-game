import { GameState, ChoiceOption } from '../types/game';

export class ChoiceEngine {
  /**
   * 根据当前状态筛选可用的选择
   */
  static evaluateChoices(choices: ChoiceOption[], state: GameState): ChoiceOption[] {
    return choices.filter(choice => {
      // 检查属性要求
      if (choice.requirements?.stats) {
        for (const [key, requiredValue] of Object.entries(choice.requirements.stats)) {
          const currentValue = state.playerStats[key as keyof typeof state.playerStats];
          if (currentValue < (requiredValue as number)) {
            return false;
          }
        }
      }
      
      // 检查关系要求
      if (choice.requirements?.relationships) {
        for (const [key, requiredValue] of Object.entries(choice.requirements.relationships)) {
          const currentValue = state.relationships[key as keyof typeof state.relationships];
          if (currentValue < (requiredValue as number)) {
            return false;
          }
        }
      }
      
      // 检查前置选择要求
      if (choice.requirements?.previousChoices) {
        for (const requiredChoice of choice.requirements.previousChoices) {
          if (!state.choiceHistory.includes(requiredChoice)) {
            return false;
          }
        }
      }
      
      return true;
    });
  }

  /**
   * 检查结局条件
   */
  static checkEndingConditions(state: GameState): string | null {
    // 第一章简易结局检测
    if (state.choiceHistory.includes("c1-4a") && state.playerStats.modernity >= 30) {
      return "适应新生";
    }
    
    if (state.relationships.rongRuoya >= 50) {
      return "家族冲突加剧";
    }
    
    if (state.relationships.jiZhiyuan >= 40) {
      return "初识潜力";
    }
    
    return null;
  }

  /**
   * 获取当前场景
   */
  static getCurrentScene(chapterId: number, sceneId: string, chapters: any) {
    const chapter = chapters.find((c: any) => c.id === chapterId);
    if (!chapter) return null;
    
    return chapter.scenes.find((s: any) => s.id === sceneId);
  }

  /**
   * 计算游戏进度百分比
   */
  static calculateProgress(state: GameState, totalChapters: number): number {
    const chapterProgress = ((state.currentChapter - 1) / totalChapters) * 70;
    const choiceProgress = (state.choiceHistory.length / 50) * 30; // 假设总共50个选择
    return Math.min(100, chapterProgress + choiceProgress);
  }
}