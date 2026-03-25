import { GameState } from '../types/game';

export interface EndingResult {
  endingId: string;
  endingName: string;
  endingType: 'perfect' | 'excellent' | 'good' | 'normal';
  description: string;
  achievementRate: number;
}

/**
 * 结局判定系统
 * 根据玩家的属性、关系、解锁成就来判定最终结局
 */
export class EndingChecker {
  /**
   * 检查并返回玩家的结局
   */
  static checkEnding(gameState: GameState): EndingResult {
    const { stats, relationships, unlockedAchievements } = gameState;

    // 按优先级检查结局（从最难到最容易）
    
    // 1. 完美人生 - 究极圆满结局
    if (this.checkPerfectEnding(stats, relationships, unlockedAchievements)) {
      return {
        endingId: 'ending_15',
        endingName: '完美人生 - 究极圆满',
        endingType: 'perfect',
        description: '达成所有可能的成就，实现了重生的全部价值',
        achievementRate: 100
      };
    }

    // 2. 传奇人生 - 百年不朽
    if (this.checkLegendaryEnding(stats, unlockedAchievements)) {
      return {
        endingId: 'ending_14',
        endingName: '传奇人生 - 百年不朽',
        endingType: 'perfect',
        description: '你的一生成为传奇，影响深远',
        achievementRate: 95
      };
    }

    // 3. 全能女神 - 多领域成就
    if (this.checkOmnipotentEnding(stats)) {
      return {
        endingId: 'ending_13',
        endingName: '全能女神 - 多领域成就',
        endingType: 'excellent',
        description: '在多个领域都取得顶尖成就',
        achievementRate: 90
      };
    }

    // 4. 学术至尊 - 数学女皇
    if (this.checkAcademicEnding(stats, unlockedAchievements)) {
      return {
        endingId: 'ending_1',
        endingName: '学术至尊 - 数学女皇',
        endingType: 'excellent',
        description: '成为21世纪最伟大的数学家',
        achievementRate: 85
      };
    }

    // 5. 商业帝国 - 女企业家
    if (this.checkBusinessEnding(stats, unlockedAchievements)) {
      return {
        endingId: 'ending_2',
        endingName: '商业帝国 - 女企业家',
        endingType: 'excellent',
        description: '建立全球商业帝国',
        achievementRate: 85
      };
    }

    // 6. 教育先驱 - 教育改革家
    if (this.checkEducationEnding(stats, unlockedAchievements)) {
      return {
        endingId: 'ending_3',
        endingName: '教育先驱 - 教育改革家',
        endingType: 'excellent',
        description: '改革教育体系，惠及百万学生',
        achievementRate: 85
      };
    }

    // 7. 权力之巅 - 家族女皇
    if (this.checkPowerEnding(stats, relationships, unlockedAchievements)) {
      return {
        endingId: 'ending_4',
        endingName: '权力之巅 - 家族女皇',
        endingType: 'excellent',
        description: '成为家族史上最有权势的女性',
        achievementRate: 85
      };
    }

    // 8. 智慧传承 - 哲学导师
    if (this.checkPhilosophyEnding(stats, unlockedAchievements)) {
      return {
        endingId: 'ending_8',
        endingName: '智慧传承 - 哲学导师',
        endingType: 'excellent',
        description: '成为当代最伟大的思想家',
        achievementRate: 85
      };
    }

    // 9. 科技革命 - 未来建筑师
    if (this.checkTechEnding(stats, unlockedAchievements)) {
      return {
        endingId: 'ending_9',
        endingName: '科技革命 - 未来建筑师',
        endingType: 'excellent',
        description: '领导科技革命，改变人类社会',
        achievementRate: 85
      };
    }

    // 10. 社会改革 - 慈善女王
    if (this.checkCharityEnding(stats, unlockedAchievements)) {
      return {
        endingId: 'ending_10',
        endingName: '社会改革 - 慈善女王',
        endingType: 'excellent',
        description: '帮助数百万人，改善无数生命',
        achievementRate: 80
      };
    }

    // 11. 医学奇迹 - 医学突破
    if (this.checkMedicalEnding(stats, unlockedAchievements)) {
      return {
        endingId: 'ending_11',
        endingName: '医学奇迹 - 医学突破',
        endingType: 'good',
        description: '在医学领域取得重大突破',
        achievementRate: 75
      };
    }

    // 12. 完美和解 - 母子重逢圆满
    if (this.checkFamilyEnding(relationships, unlockedAchievements)) {
      return {
        endingId: 'ending_7',
        endingName: '完美和解 - 母子重逢圆满',
        endingType: 'good',
        description: '与纪舜英的母子关系圆满',
        achievementRate: 80
      };
    }

    // 13. 忘年之恋 - 与纪止渊的爱情
    if (this.checkZhiyuanRomanceEnding(relationships, unlockedAchievements)) {
      return {
        endingId: 'ending_5',
        endingName: '忘年之恋 - 与纪止渊的爱情',
        endingType: 'good',
        description: '冲破世俗枷锁，获得真爱',
        achievementRate: 75
      };
    }

    // 14. 隔代情缘 - 与纪舟野的爱情
    if (this.checkZhouyeRomanceEnding(relationships, unlockedAchievements)) {
      return {
        endingId: 'ending_6',
        endingName: '隔代情缘 - 与纪舟野的爱情',
        endingType: 'good',
        description: '跨越辈分，追求真实感情',
        achievementRate: 75
      };
    }

    // 15. 独立女性 - 事业至上
    if (this.checkIndependentEnding(stats, unlockedAchievements)) {
      return {
        endingId: 'ending_12',
        endingName: '独立女性 - 事业至上',
        endingType: 'good',
        description: '专注事业，成为独立女性典范',
        achievementRate: 70
      };
    }

    // 普通结局
    return {
      endingId: 'ending_normal',
      endingName: '普通结局 - 平凡而充实',
      endingType: 'normal',
      description: '过上了充实而幸福的平凡生活',
      achievementRate: 50
    };
  }

  // 各结局的检查函数
  private static checkPerfectEnding(
    stats: any,
    relationships: any,
    achievements: string[]
  ): boolean {
    return (
      stats.wisdom >= 130 &&
      stats.charisma >= 120 &&
      stats.education >= 115 &&
      stats.modernity >= 100 &&
      relationships.jiShunying >= 100 &&
      relationships.jiZhiyuan >= 90 &&
      relationships.jiZhouye >= 80 &&
      achievements.includes('life_master') &&
      achievements.includes('complete_triumph') &&
      achievements.includes('perfect_scholar')
    );
  }

  private static checkLegendaryEnding(stats: any, achievements: string[]): boolean {
    return (
      stats.wisdom >= 120 &&
      stats.charisma >= 115 &&
      stats.education >= 110 &&
      achievements.includes('immortal_legacy') &&
      achievements.includes('humanity_teacher')
    );
  }

  private static checkOmnipotentEnding(stats: any): boolean {
    return (
      stats.wisdom >= 115 &&
      stats.charisma >= 110 &&
      stats.education >= 105 &&
      stats.modernity >= 95
    );
  }

  private static checkAcademicEnding(stats: any, achievements: string[]): boolean {
    return (
      stats.wisdom >= 110 &&
      stats.education >= 100 &&
      achievements.includes('mathematics_revolution') &&
      achievements.includes('perfect_scholar')
    );
  }

  private static checkBusinessEnding(stats: any, achievements: string[]): boolean {
    return (
      stats.wisdom >= 100 &&
      stats.charisma >= 100 &&
      stats.modernity >= 90 &&
      achievements.includes('power_consolidation_complete') &&
      achievements.includes('business_genius')
    );
  }

  private static checkEducationEnding(stats: any, achievements: string[]): boolean {
    return (
      stats.education >= 110 &&
      stats.wisdom >= 95 &&
      stats.charisma >= 90 &&
      achievements.includes('education_empire_begin') &&
      achievements.includes('foundation_founder')
    );
  }

  private static checkPowerEnding(
    stats: any,
    relationships: any,
    achievements: string[]
  ): boolean {
    return (
      stats.charisma >= 110 &&
      stats.wisdom >= 105 &&
      relationships.jiShunying >= 90 &&
      relationships.jiZhiyuan >= 80 &&
      achievements.includes('matriarch_coronation') &&
      achievements.includes('dynasty_founder')
    );
  }

  private static checkPhilosophyEnding(stats: any, achievements: string[]): boolean {
    return (
      stats.wisdom >= 120 &&
      stats.education >= 100 &&
      stats.charisma >= 90 &&
      achievements.includes('sage_of_the_century') &&
      achievements.includes('wisdom_legend')
    );
  }

  private static checkTechEnding(stats: any, achievements: string[]): boolean {
    return (
      stats.wisdom >= 110 &&
      stats.modernity >= 100 &&
      stats.education >= 95 &&
      achievements.includes('future_architect') &&
      achievements.includes('innovation_ecosystem')
    );
  }

  private static checkCharityEnding(stats: any, achievements: string[]): boolean {
    return (
      stats.charisma >= 105 &&
      stats.education >= 100 &&
      achievements.includes('philanthropist') &&
      achievements.includes('social_reformer')
    );
  }

  private static checkMedicalEnding(stats: any, achievements: string[]): boolean {
    return (
      stats.medical >= 90 &&
      stats.wisdom >= 100 &&
      achievements.includes('medical_genius') &&
      achievements.includes('shunying_awakening_accelerated')
    );
  }

  private static checkFamilyEnding(
    relationships: any,
    achievements: string[]
  ): boolean {
    return (
      relationships.jiShunying >= 100 &&
      achievements.includes('mother_son_reunion') &&
      achievements.includes('complete_acceptance')
    );
  }

  private static checkZhiyuanRomanceEnding(
    relationships: any,
    achievements: string[]
  ): boolean {
    return (
      relationships.jiZhiyuan >= 100 &&
      achievements.includes('zhiyuan_ending_confirmed')
    );
  }

  private static checkZhouyeRomanceEnding(
    relationships: any,
    achievements: string[]
  ): boolean {
    return (
      relationships.jiZhouye >= 100 &&
      achievements.includes('zhouye_ending_confirmed')
    );
  }

  private static checkIndependentEnding(stats: any, achievements: string[]): boolean {
    return (
      stats.modernity >= 100 &&
      stats.wisdom >= 95 &&
      stats.charisma >= 90 &&
      achievements.includes('career_focus_ending_path')
    );
  }

  /**
   * 获取所有可能的结局列表
   */
  static getAllEndings(): Array<{
    id: string;
    name: string;
    description: string;
    difficulty: string;
  }> {
    return [
      {
        id: 'ending_15',
        name: '完美人生 - 究极圆满',
        description: '达成所有成就的完美结局',
        difficulty: '★★★★★'
      },
      {
        id: 'ending_14',
        name: '传奇人生 - 百年不朽',
        description: '影响人类文明进程',
        difficulty: '★★★★★'
      },
      {
        id: 'ending_13',
        name: '全能女神 - 多领域成就',
        description: '多领域顶尖成就',
        difficulty: '★★★★☆'
      },
      {
        id: 'ending_1',
        name: '学术至尊 - 数学女皇',
        description: '成为最伟大的数学家',
        difficulty: '★★★★☆'
      },
      {
        id: 'ending_2',
        name: '商业帝国 - 女企业家',
        description: '建立全球商业帝国',
        difficulty: '★★★★☆'
      },
      {
        id: 'ending_3',
        name: '教育先驱 - 教育改革家',
        description: '改革教育体系',
        difficulty: '★★★★☆'
      },
      {
        id: 'ending_4',
        name: '权力之巅 - 家族女皇',
        description: '掌控家族权力',
        difficulty: '★★★★☆'
      },
      {
        id: 'ending_5',
        name: '忘年之恋 - 与纪止渊',
        description: '冲破世俗的爱情',
        difficulty: '★★★☆☆'
      },
      {
        id: 'ending_6',
        name: '隔代情缘 - 与纪舟野',
        description: '跨越辈分的感情',
        difficulty: '★★★☆☆'
      },
      {
        id: 'ending_7',
        name: '完美和解 - 母子重逢',
        description: '圆满的母子关系',
        difficulty: '★★★★☆'
      },
      {
        id: 'ending_8',
        name: '智慧传承 - 哲学导师',
        description: '成为思想家',
        difficulty: '★★★★☆'
      },
      {
        id: 'ending_9',
        name: '科技革命 - 未来建筑师',
        description: '领导科技革命',
        difficulty: '★★★★☆'
      },
      {
        id: 'ending_10',
        name: '社会改革 - 慈善女王',
        description: '改善无数生命',
        difficulty: '★★★☆☆'
      },
      {
        id: 'ending_11',
        name: '医学奇迹 - 医学突破',
        description: '攻克医学难题',
        difficulty: '★★★☆☆'
      },
      {
        id: 'ending_12',
        name: '独立女性 - 事业至上',
        description: '独立女性典范',
        difficulty: '★★★☆☆'
      },
      {
        id: 'ending_normal',
        name: '普通结局 - 平凡幸福',
        description: '平凡而充实的生活',
        difficulty: '★☆☆☆☆'
      }
    ];
  }
}