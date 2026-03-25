import { ChapterData } from '../../types/game';

export const chapter15: ChapterData = {
  id: 15,
  title: '最终对决',
  scenes: [
    {
      id: '15-1',
      background: 'ji_corporation_crisis',
      characters: ['rongyu', 'lanrouxue', 'rongruoya', 'board_members'],
      dialog: [
        {
          character: 'narrator',
          text: '纪氏集团董事会。蓝柔雪和容若瑶联手发动最后的反扑。'
        },
        {
          character: 'lanrouxue',
          text: '各位董事，我提议罢免容遇的所有职务。她的改革太激进，危及公司根基！',
          expression: 'aggressive'
        },
        {
          character: 'rongruoya',
          text: '而且她的身份本来就可疑。什么灵魂重生？简直是神棍！',
          expression: 'mocking'
        },
        {
          character: 'board_member_1',
          text: '蓝总说得有道理，最近股价确实波动很大...',
          expression: 'worried'
        },
        {
          character: 'narrator',
          text: '她们显然准备充分，拿出了一系列不利于你的证据。'
        },
        {
          character: 'lanrouxue',
          text: '容遇，你已经走投无路了。识相的话，自己辞职吧。',
          expression: 'triumphant'
        },
        {
          character: 'rongyu',
          text: '（这是最后的权力斗争...我必须赢！）',
          expression: 'determined'
        }
      ],
      choices: [
        {
          id: 'c15-1a',
          text: '[选择妥协] \'我愿意暂时退出管理层\'',
          effects: {
            stats: { modernity: 5 },
            relationships: { jiZhiyuan: -30, jiShunying: -30 },
            nextScene: '15-2'
          }
        },
        {
          id: 'c15-1b',
          text: '[据理力争] 用数据证明改革的成效',
          requirements: { stats: { wisdom: 95, charisma: 90 } },
          effects: {
            stats: { wisdom: 35, charisma: 30 },
            unlock: ['strategic_defense'],
            nextScene: '15-2'
          }
        },
        {
          id: 'c15-1c',
          text: '[反击揭露] 公开蓝柔雪和容若瑶的违规行为',
          requirements: { stats: { wisdom: 100, charisma: 95 } },
          effects: {
            stats: { wisdom: 50, charisma: 45 },
            unlock: ['counterattack_master', 'evidence_revealed'],
            nextScene: '15-2'
          }
        },
        {
          id: 'c15-1d',
          text: '[完美布局] 展示早已准备好的完整反制方案',
          requirements: { stats: { wisdom: 110, charisma: 105 } },
          effects: {
            stats: { wisdom: 80, charisma: 70 },
            unlock: ['chess_master', 'total_victory', 'enemy_crushed'],
            nextScene: '15-2'
          }
        }
      ]
    },
    {
      id: '15-2',
      background: 'media_conference',
      characters: ['rongyu', 'lanrouxue', 'media', 'public'],
      dialog: [
        {
          character: 'narrator',
          text: '危机升级，媒体曝光内部斗争。新闻发布会上，各方对峙。'
        },
        {
          character: 'reporter_1',
          text: '容博士，有人质疑您的改革导致公司动荡，您如何回应？',
          expression: 'pressing'
        },
        {
          character: 'lanrouxue',
          text: '事实胜于雄辩。容遇的所谓改革只是纸上谈兵！',
          expression: 'attacking'
        },
        {
          character: 'narrator',
          text: '直播观众数千万，这是决定性的公关战。'
        },
        {
          character: 'rongruoya',
          text: '她凭什么指手画脚？不过是个学生而已！',
          expression: 'sneering'
        },
        {
          character: 'rongyu',
          text: '（全世界都在看...我必须一锤定音...）',
          expression: 'focused'
        }
      ],
      choices: [
        {
          id: 'c15-2a',
          text: '[防守回应] 解释改革的必要性',
          effects: {
            stats: { charisma: 15 },
            nextScene: '15-3'
          }
        },
        {
          id: 'c15-2b',
          text: '[展示成果] 公布改革带来的实际成效数据',
          requirements: { stats: { wisdom: 95, charisma: 90 } },
          effects: {
            stats: { wisdom: 40, charisma: 35 },
            unlock: ['public_vindication'],
            nextScene: '15-3'
          }
        },
        {
          id: 'c15-2c',
          text: '[情感攻势] 讲述纪家的历史使命和未来愿景',
          requirements: { stats: { charisma: 100, wisdom: 95 } },
          effects: {
            stats: { charisma: 60, wisdom: 45 },
            unlock: ['public_support', 'media_darling'],
            nextScene: '15-3'
          }
        },
        {
          id: 'c15-2d',
          text: '[惊天演说] 发表改变商业伦理的历史性演讲',
          requirements: { stats: { charisma: 110, wisdom: 105 } },
          effects: {
            stats: { charisma: 90, wisdom: 70 },
            unlock: ['legendary_speech', 'national_hero', 'business_revolution'],
            nextScene: '15-3'
          }
        }
      ]
    },
    {
      id: '15-3',
      background: 'ji_family_compound',
      characters: ['rongyu', 'jishunying', 'jizhiyuan', 'jizhouye', 'family'],
      dialog: [
        {
          character: 'narrator',
          text: '纪家庄园，家族最终裁决。纪舜英将做出决定。'
        },
        {
          character: 'jishunying',
          text: '这段时间，我看清了很多事情。容遇确实给纪家带来了翻天覆地的变化。',
          expression: 'solemn'
        },
        {
          character: 'jizhiyuan',
          text: '父亲，我完全支持容遇。她是纪家的未来。',
          expression: 'supportive'
        },
        {
          character: 'jizhouye',
          text: '容遇改变了我的人生。她是最好的老师和引路人。',
          expression: 'emotional'
        },
        {
          character: 'ji_elder_1',
          text: '但传统不能丢...改革要慎重...',
          expression: 'hesitant'
        },
        {
          character: 'jishunying',
          text: '容遇，你有什么想说的吗？',
          expression: 'expectant'
        },
        {
          character: 'rongyu',
          text: '（这是最终时刻...）',
          expression: 'serene'
        }
      ],
      choices: [
        {
          id: 'c15-3a',
          text: '[请求支持] \'希望家族能给我机会完成改革\'',
          effects: {
            stats: { charisma: 20 },
            relationships: { jiShunying: 40, jiZhiyuan: 40 },
            nextScene: '15-4'
          }
        },
        {
          id: 'c15-3b',
          text: '[展现决心] \'我会用事实证明一切\'',
          requirements: { stats: { wisdom: 95, charisma: 90 } },
          effects: {
            stats: { wisdom: 45, charisma: 40 },
            relationships: { jiShunying: 60, jiZhiyuan: 60 },
            unlock: ['family_trust_earned'],
            nextScene: '15-4'
          }
        },
        {
          id: 'c15-3c',
          text: '[情感告白] 表达对纪家的深厚感情和责任',
          requirements: { stats: { charisma: 105, wisdom: 100 } },
          effects: {
            stats: { charisma: 70, wisdom: 55 },
            relationships: { jiShunying: 90, jiZhiyuan: 80, jiZhouye: 70 },
            unlock: ['family_unity', 'unconditional_support'],
            nextScene: '15-4'
          }
        },
        {
          id: 'c15-3d',
          text: '[传承宣言] 阐述跨越时空的家族使命',
          requirements: { stats: { wisdom: 115, charisma: 110 } },
          effects: {
            stats: { wisdom: 100, charisma: 90 },
            relationships: { jiShunying: 100, jiZhiyuan: 100, jiZhouye: 90 },
            unlock: ['matriarch_coronation', 'family_legend', 'dynasty_founder'],
            nextScene: '15-4'
          }
        }
      ]
    },
    {
      id: '15-4',
      background: 'victory_celebration',
      characters: ['rongyu', 'all_allies', 'family', 'friends'],
      dialog: [
        {
          character: 'narrator',
          text: '最终，正义战胜了阴谋。蓝柔雪和容若瑶被彻底击败。'
        },
        {
          character: 'jishunying',
          text: '容遇，从今天起，你是纪家的核心决策者。家族的未来交给你了。',
          expression: 'proud'
        },
        {
          character: 'jizhiyuan',
          text: '恭喜你，容遇。你赢得了所有人的尊重。',
          expression: 'admiring'
        },
        {
          character: 'jizhouye',
          text: '容遇，你是我心中永远的英雄。',
          expression: 'adoring'
        },
        {
          character: 'narrator',
          text: '庆祝晚宴上，所有人都在为你欢呼。但你知道，真正的旅程才刚刚开始。'
        },
        {
          character: 'rongyu',
          text: '（从重生到现在，我终于走到了这一步...）',
          expression: 'fulfilled'
        }
      ],
      choices: [
        {
          id: 'c15-4a',
          text: '[谦虚感谢] \'这是大家共同努力的结果\'',
          effects: {
            stats: { charisma: 25 },
            nextScene: 'chapter_15_end'
          }
        },
        {
          id: 'c15-4b',
          text: '[展望未来] 描绘纪家和社会的美好未来',
          requirements: { stats: { wisdom: 100, charisma: 95 } },
          effects: {
            stats: { wisdom: 60, charisma: 50 },
            unlock: ['visionary_leader'],
            nextScene: 'chapter_15_end'
          }
        },
        {
          id: 'c15-4c',
          text: '[传承智慧] 宣布建立教育和慈善基金',
          requirements: { stats: { wisdom: 110, education: 100, charisma: 100 } },
          effects: {
            stats: { wisdom: 80, education: 70, charisma: 70 },
            unlock: ['philanthropist', 'social_reformer'],
            nextScene: 'chapter_15_end'
          }
        },
        {
          id: 'c15-4d',
          text: '[圆满宣言] 总结人生哲学，为最终章做准备',
          requirements: { stats: { wisdom: 120, charisma: 115, education: 110 } },
          effects: {
            stats: { wisdom: 120, charisma: 100, education: 90 },
            unlock: ['life_master', 'complete_triumph', 'ready_for_ending'],
            nextScene: 'chapter_15_end'
          }
        }
      ]
    }
  ]
};