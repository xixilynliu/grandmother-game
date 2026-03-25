import { ChapterData } from '../../types/game';

export const chapter14: ChapterData = {
  id: 14,
  title: '学术巅峰',
  scenes: [
    {
      id: '14-1',
      background: 'international_math_conference',
      characters: ['rongyu', 'world_mathematicians', 'media'],
      dialog: [
        {
          character: 'narrator',
          text: '国际数学大会，你将发表关于黎曼猜想的突破性研究。'
        },
        {
          character: 'fields_medalist',
          text: '女士们先生们，今天我们见证历史。容遇博士将展示她对黎曼猜想的革命性证明。',
          expression: 'excited'
        },
        {
          character: 'narrator',
          text: '全场数千名顶尖数学家屏息以待。'
        },
        {
          character: 'rongyu',
          text: '各位，我将展示一个全新的数学框架，它连接了代数几何、量子物理和数论...',
          expression: 'confident'
        },
        {
          character: 'narrator',
          text: '你开始在巨大的屏幕上展示推导过程，每一步都精妙绝伦。'
        },
        {
          character: 'mathematician_1',
          text: '不可思议...这个方法...太优雅了...',
          expression: 'amazed'
        },
        {
          character: 'rongyu',
          text: '（前世百年的数学积累，在此刻绽放...）',
          expression: 'fulfilled'
        }
      ],
      choices: [
        {
          id: 'c14-1a',
          text: '[保守发表] 只展示部分证明，保留核心思想',
          effects: {
            stats: { wisdom: 15, education: 10 },
            unlock: ['cautious_scholar'],
            nextScene: '14-2'
          }
        },
        {
          id: 'c14-1b',
          text: '[完整证明] 公开全部证明过程',
          requirements: { stats: { wisdom: 90, education: 85 } },
          effects: {
            stats: { wisdom: 35, education: 30 },
            unlock: ['mathematics_breakthrough', 'nobel_candidate'],
            nextScene: '14-2'
          }
        },
        {
          id: 'c14-1c',
          text: '[开创新领域] 不仅证明猜想，还提出新的数学分支',
          requirements: { stats: { wisdom: 100, education: 95 } },
          effects: {
            stats: { wisdom: 50, education: 45, charisma: 30 },
            unlock: ['mathematics_revolution', 'new_field_founder'],
            nextScene: '14-2'
          }
        },
        {
          id: 'c14-1d',
          text: '[历史性演讲] 阐述数学对人类未来的深远意义',
          requirements: { stats: { wisdom: 105, education: 100, charisma: 95 } },
          effects: {
            stats: { wisdom: 70, education: 60, charisma: 50 },
            unlock: ['mathematics_prophet', 'century_genius', 'humanity_guide'],
            nextScene: '14-2'
          }
        }
      ]
    },
    {
      id: '14-2',
      background: 'nobel_ceremony',
      characters: ['rongyu', 'nobel_committee', 'world_leaders', 'media'],
      dialog: [
        {
          character: 'narrator',
          text: '诺贝尔奖颁奖典礼。虽然数学没有诺贝尔奖，但你因跨学科贡献获得物理学奖提名。'
        },
        {
          character: 'nobel_chairman',
          text: '容遇博士的工作不仅解决了百年数学难题，还为量子计算开辟了新道路。',
          expression: 'respectful'
        },
        {
          character: 'narrator',
          text: '全球媒体直播，数十亿人观看这一历史时刻。'
        },
        {
          character: 'reporter',
          text: '容博士，您年仅20多岁就取得如此成就，有什么秘诀吗？',
          expression: 'curious'
        },
        {
          character: 'rongyu',
          text: '（我该如何回答？暗示重生的真相，还是保持神秘？）',
          expression: 'thoughtful'
        }
      ],
      choices: [
        {
          id: 'c14-2a',
          text: '[谦虚回应] \'只是运气好，站在巨人的肩膀上\'',
          effects: {
            stats: { wisdom: 10, education: 10 },
            nextScene: '14-3'
          }
        },
        {
          id: 'c14-2b',
          text: '[强调努力] \'天才是1%的灵感加99%的汗水\'',
          requirements: { stats: { charisma: 85 } },
          effects: {
            stats: { charisma: 20, education: 15 },
            unlock: ['inspirational_figure'],
            nextScene: '14-3'
          }
        },
        {
          id: 'c14-2c',
          text: '[教育理念] 阐述全人教育和跨学科思维的重要性',
          requirements: { stats: { wisdom: 95, education: 90 } },
          effects: {
            stats: { wisdom: 35, education: 35, charisma: 25 },
            unlock: ['education_visionary', 'global_influence'],
            nextScene: '14-3'
          }
        },
        {
          id: 'c14-2d',
          text: '[哲学演说] 探讨时间、存在和知识传承的本质',
          requirements: { stats: { wisdom: 105, charisma: 100 } },
          effects: {
            stats: { wisdom: 60, charisma: 50, education: 40 },
            unlock: ['philosophical_icon', 'wisdom_legend', 'reincarnation_hint'],
            nextScene: '14-3'
          }
        }
      ]
    },
    {
      id: '14-3',
      background: 'rongyu_research_institute',
      characters: ['rongyu', 'research_team', 'investors', 'government'],
      dialog: [
        {
          character: 'narrator',
          text: '你决定创办研究所，整合教育、科研和产业。'
        },
        {
          character: 'investor',
          text: '容博士，我们愿意投资100亿建立世界顶级研究中心。',
          expression: 'eager'
        },
        {
          character: 'government_official',
          text: '国家全力支持。这将是中国的骄傲。',
          expression: 'supportive'
        },
        {
          character: 'research_student',
          text: '老师，能跟随您学习是我一生的荣幸！',
          expression: 'admiring'
        },
        {
          character: 'narrator',
          text: '你站在研究所大楼前，思考着如何传承前世的智慧。'
        },
        {
          character: 'rongyu',
          text: '（我要建立的不仅是研究所，而是一个新的教育和科研生态...）',
          expression: 'visionary'
        }
      ],
      choices: [
        {
          id: 'c14-3a',
          text: '[专注学术] 纯粹的基础研究机构',
          effects: {
            stats: { wisdom: 20, education: 15 },
            unlock: ['pure_research_path'],
            nextScene: '14-4'
          }
        },
        {
          id: 'c14-3b',
          text: '[产学研结合] 连接学术界和产业界',
          requirements: { stats: { wisdom: 90, education: 85 } },
          effects: {
            stats: { wisdom: 30, education: 30, modernity: 20 },
            unlock: ['innovation_ecosystem'],
            nextScene: '14-4'
          }
        },
        {
          id: 'c14-3c',
          text: '[全球网络] 建立国际化的研究和教育网络',
          requirements: { stats: { wisdom: 100, education: 95, charisma: 90 } },
          effects: {
            stats: { wisdom: 50, education: 50, charisma: 35 },
            unlock: ['global_education_empire', 'world_influence'],
            nextScene: '14-4'
          }
        },
        {
          id: 'c14-3d',
          text: '[人类未来] 设计面向未来100年的教育和科技体系',
          requirements: { stats: { wisdom: 110, education: 105, charisma: 100, modernity: 90 } },
          effects: {
            stats: { wisdom: 80, education: 70, charisma: 60, modernity: 40 },
            unlock: ['future_architect', 'humanity_legacy', 'immortal_wisdom'],
            nextScene: '14-4'
          }
        }
      ]
    },
    {
      id: '14-4',
      background: 'lecture_hall_packed',
      characters: ['rongyu', 'students', 'scholars', 'public'],
      dialog: [
        {
          character: 'narrator',
          text: '你的最后一堂公开课，全球数百万人在线观看。'
        },
        {
          character: 'rongyu',
          text: '各位，今天我想谈的不是数学公式，而是知识的意义。',
          expression: 'profound'
        },
        {
          character: 'student_1',
          text: '老师，您如何看待天才和努力的关系？',
          expression: 'curious'
        },
        {
          character: 'rongyu',
          text: '真正的天才不是天生的，而是通过无数次的思考、失败和坚持锻造出来的。',
          expression: 'wise'
        },
        {
          character: 'scholar',
          text: '容博士，您的智慧深度超越了年龄...这背后有什么秘密吗？',
          expression: 'probing'
        },
        {
          character: 'narrator',
          text: '全场安静下来，所有人都在等待你的回答。'
        },
        {
          character: 'rongyu',
          text: '（这是传递终极智慧的时刻...）',
          expression: 'serene'
        }
      ],
      choices: [
        {
          id: 'c14-4a',
          text: '[保持神秘] \'每个人都有自己的路要走\'',
          effects: {
            stats: { wisdom: 15, education: 10 },
            nextScene: 'chapter_14_end'
          }
        },
        {
          id: 'c14-4b',
          text: '[教育哲学] 详细阐述终身学习的重要性',
          requirements: { stats: { wisdom: 95, education: 90 } },
          effects: {
            stats: { wisdom: 40, education: 40, charisma: 30 },
            unlock: ['master_educator'],
            nextScene: 'chapter_14_end'
          }
        },
        {
          id: 'c14-4c',
          text: '[暗示真相] \'如果你有机会重新活一次，你会如何度过？\'',
          requirements: { stats: { wisdom: 105, charisma: 95 } },
          effects: {
            stats: { wisdom: 60, charisma: 50, education: 45 },
            unlock: ['wisdom_keeper', 'truth_revealer'],
            nextScene: 'chapter_14_end'
          }
        },
        {
          id: 'c14-4d',
          text: '[传世演讲] 留下改变人类文明进程的思想遗产',
          requirements: { stats: { wisdom: 115, education: 110, charisma: 105 } },
          effects: {
            stats: { wisdom: 100, education: 90, charisma: 80 },
            unlock: ['sage_of_the_century', 'immortal_legacy', 'humanity_teacher', 'perfect_scholar'],
            nextScene: 'chapter_14_end'
          }
        }
      ]
    }
  ]
};