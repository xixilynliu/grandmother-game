import { ChapterData } from '../../types/game';

export const chapter16: ChapterData = {
  id: 16,
  title: '圆满结局',
  scenes: [
    {
      id: '16-1',
      background: 'time_reflection_space',
      characters: ['rongyu'],
      dialog: [
        {
          character: 'narrator',
          text: '时光荏苒，你的重生之旅即将迎来终章。回首这段旅程，每一个选择都塑造了不同的命运。'
        },
        {
          character: 'rongyu',
          text: '从18岁重生到现在，我经历了太多...权力、学术、爱情、家族...',
          expression: 'reflective'
        },
        {
          character: 'narrator',
          text: '你坐在芙蓉庄园的湖边，夕阳西下，波光粼粼。'
        },
        {
          character: 'rongyu',
          text: '我实现了前世的遗憾吗？我找到了真正的幸福吗？',
          expression: 'contemplative'
        },
        {
          character: 'narrator',
          text: '根据你的选择，命运之书即将揭晓你的结局...'
        }
      ],
      choices: [
        {
          id: 'c16-1a',
          text: '[回顾人生] 静静回忆这段旅程',
          effects: {
            nextScene: '16-2'
          }
        }
      ]
    },
    {
      id: '16-2',
      background: 'achievement_hall',
      characters: ['rongyu', 'all_characters'],
      dialog: [
        {
          character: 'narrator',
          text: '这是你的人生成就展示厅。让我们看看你达成了什么...'
        },
        {
          character: 'rongyu',
          text: '（根据我的属性、关系和解锁的成就，我的结局会是...）',
          expression: 'anticipating'
        }
      ],
      choices: [
        {
          id: 'c16-2a',
          text: '[查看结局] 揭晓命运',
          effects: {
            nextScene: '16-3'
          }
        }
      ]
    },
    {
      id: '16-3',
      background: 'ending_determination',
      characters: ['rongyu'],
      dialog: [
        {
          character: 'narrator',
          text: '根据你的选择，你的结局是...'
        }
      ],
      choices: [
        {
          id: 'c16-3-ending1',
          text: '【学术至尊】数学女皇结局',
          requirements: { 
            stats: { wisdom: 110, education: 100 },
            unlocked: ['mathematics_revolution', 'perfect_scholar']
          },
          effects: {
            nextScene: 'ending_1'
          }
        },
        {
          id: 'c16-3-ending2',
          text: '【商业帝国】女企业家结局',
          requirements: { 
            stats: { wisdom: 100, charisma: 100, modernity: 90 },
            unlocked: ['power_consolidation_complete', 'business_genius']
          },
          effects: {
            nextScene: 'ending_2'
          }
        },
        {
          id: 'c16-3-ending3',
          text: '【教育先驱】教育改革家结局',
          requirements: { 
            stats: { education: 110, wisdom: 95, charisma: 90 },
            unlocked: ['education_empire_begin', 'foundation_founder']
          },
          effects: {
            nextScene: 'ending_3'
          }
        },
        {
          id: 'c16-3-ending4',
          text: '【权力之巅】家族女皇结局',
          requirements: { 
            stats: { charisma: 110, wisdom: 105 },
            unlocked: ['matriarch_coronation', 'dynasty_founder'],
            relationships: { jiShunying: 90, jiZhiyuan: 80 }
          },
          effects: {
            nextScene: 'ending_4'
          }
        },
        {
          id: 'c16-3-ending5',
          text: '【忘年之恋】与纪止渊的爱情结局',
          requirements: { 
            stats: { charisma: 100, wisdom: 95 },
            unlocked: ['zhiyuan_ending_confirmed'],
            relationships: { jiZhiyuan: 100 }
          },
          effects: {
            nextScene: 'ending_5'
          }
        },
        {
          id: 'c16-3-ending6',
          text: '【隔代情缘】与纪舟野的爱情结局',
          requirements: { 
            stats: { charisma: 100, modernity: 95 },
            unlocked: ['zhouye_ending_confirmed'],
            relationships: { jiZhouye: 100 }
          },
          effects: {
            nextScene: 'ending_6'
          }
        },
        {
          id: 'c16-3-ending7',
          text: '【完美和解】母子重逢圆满结局',
          requirements: { 
            stats: { wisdom: 100, charisma: 95 },
            unlocked: ['mother_son_reunion', 'complete_acceptance'],
            relationships: { jiShunying: 100 }
          },
          effects: {
            nextScene: 'ending_7'
          }
        },
        {
          id: 'c16-3-ending8',
          text: '【智慧传承】哲学导师结局',
          requirements: { 
            stats: { wisdom: 120, education: 100, charisma: 90 },
            unlocked: ['sage_of_the_century', 'wisdom_legend']
          },
          effects: {
            nextScene: 'ending_8'
          }
        },
        {
          id: 'c16-3-ending9',
          text: '【科技革命】未来建筑师结局',
          requirements: { 
            stats: { wisdom: 110, modernity: 100, education: 95 },
            unlocked: ['future_architect', 'innovation_ecosystem']
          },
          effects: {
            nextScene: 'ending_9'
          }
        },
        {
          id: 'c16-3-ending10',
          text: '【社会改革】慈善女王结局',
          requirements: { 
            stats: { charisma: 105, education: 100 },
            unlocked: ['philanthropist', 'social_reformer']
          },
          effects: {
            nextScene: 'ending_10'
          }
        },
        {
          id: 'c16-3-ending11',
          text: '【医学奇迹】医学突破结局',
          requirements: { 
            stats: { medical: 90, wisdom: 100 },
            unlocked: ['medical_genius', 'shunying_awakening_accelerated']
          },
          effects: {
            nextScene: 'ending_11'
          }
        },
        {
          id: 'c16-3-ending12',
          text: '【独立女性】事业至上结局',
          requirements: { 
            stats: { modernity: 100, wisdom: 95, charisma: 90 },
            unlocked: ['career_focus_ending_path']
          },
          effects: {
            nextScene: 'ending_12'
          }
        },
        {
          id: 'c16-3-ending13',
          text: '【全能女神】多领域成就结局',
          requirements: { 
            stats: { wisdom: 115, charisma: 110, education: 105, modernity: 95 }
          },
          effects: {
            nextScene: 'ending_13'
          }
        },
        {
          id: 'c16-3-ending14',
          text: '【传奇人生】百年不朽结局',
          requirements: { 
            stats: { wisdom: 120, charisma: 115, education: 110 },
            unlocked: ['immortal_legacy', 'humanity_teacher']
          },
          effects: {
            nextScene: 'ending_14'
          }
        },
        {
          id: 'c16-3-ending15',
          text: '【完美人生】究极圆满结局',
          requirements: { 
            stats: { wisdom: 130, charisma: 120, education: 115, modernity: 100 },
            unlocked: ['life_master', 'complete_triumph', 'perfect_scholar'],
            relationships: { jiShunying: 100, jiZhiyuan: 90, jiZhouye: 80 }
          },
          effects: {
            nextScene: 'ending_15'
          }
        },
        {
          id: 'c16-3-normal',
          text: '【普通结局】平凡而充实的人生',
          effects: {
            nextScene: 'ending_normal'
          }
        }
      ]
    },
    {
      id: 'ending_1',
      background: 'nobel_stage',
      characters: ['rongyu', 'world_leaders'],
      dialog: [
        {
          character: 'narrator',
          text: '【学术至尊 - 数学女皇】'
        },
        {
          character: 'narrator',
          text: '你成为了21世纪最伟大的数学家，解决了多个世纪难题，创立了新的数学分支。'
        },
        {
          character: 'narrator',
          text: '你的研究所培养出无数顶尖学者，你的理论改变了人类对宇宙的认知。'
        },
        {
          character: 'rongyu',
          text: '数学是宇宙的语言，我只是翻译者。',
          expression: 'serene'
        },
        {
          character: 'narrator',
          text: '在你百岁生日那天，全世界数学家齐聚，称你为\'数学女皇\'。你的智慧将照耀千年。'
        },
        {
          character: 'narrator',
          text: '游戏结束。感谢游玩！'
        }
      ],
      choices: []
    },
    {
      id: 'ending_2',
      background: 'global_empire',
      characters: ['rongyu', 'business_empire'],
      dialog: [
        {
          character: 'narrator',
          text: '【商业帝国 - 女企业家】'
        },
        {
          character: 'narrator',
          text: '纪家在你的领导下成为全球十大财团之一，业务遍布六大洲。'
        },
        {
          character: 'narrator',
          text: '你被《福布斯》评为\'最具影响力女企业家\'，你的商业理念成为商学院必修课。'
        },
        {
          character: 'rongyu',
          text: '商业不只是赚钱，更是创造价值、改变世界。',
          expression: 'confident'
        },
        {
          character: 'narrator',
          text: '你建立的商业帝国持续影响世界，成为现代企业治理的典范。'
        },
        {
          character: 'narrator',
          text: '游戏结束。感谢游玩！'
        }
      ],
      choices: []
    },
    {
      id: 'ending_3',
      background: 'education_kingdom',
      characters: ['rongyu', 'students_worldwide'],
      dialog: [
        {
          character: 'narrator',
          text: '【教育先驱 - 教育改革家】'
        },
        {
          character: 'narrator',
          text: '你创办的教育体系惠及百万学生，培养出无数改变世界的人才。'
        },
        {
          character: 'narrator',
          text: '纪舟野成为教育部长，在全国推广你的教育理念。'
        },
        {
          character: 'rongyu',
          text: '教育是唯一可以改变命运的途径，我要让每个孩子都有机会。',
          expression: 'passionate'
        },
        {
          character: 'narrator',
          text: '五十年后，你的教育改革被写入历史，被誉为\'中国教育之母\'。'
        },
        {
          character: 'narrator',
          text: '游戏结束。感谢游玩！'
        }
      ],
      choices: []
    },
    {
      id: 'ending_4',
      background: 'family_throne',
      characters: ['rongyu', 'ji_family_generations'],
      dialog: [
        {
          character: 'narrator',
          text: '【权力之巅 - 家族女皇】'
        },
        {
          character: 'narrator',
          text: '你完全掌控纪家，成为家族史上最有权势的女性。'
        },
        {
          character: 'narrator',
          text: '纪舜英在你的指导下重振家业，纪止渊成为你最得力的副手。'
        },
        {
          character: 'rongyu',
          text: '权力不是目的，是守护家族和实现理想的工具。',
          expression: 'majestic'
        },
        {
          character: 'narrator',
          text: '纪家在你的治理下成为百年望族，你被家族后代尊称为\'太祖母\'。'
        },
        {
          character: 'narrator',
          text: '游戏结束。感谢游玩！'
        }
      ],
      choices: []
    },
    {
      id: 'ending_5',
      background: 'romantic_sunset',
      characters: ['rongyu', 'jizhiyuan'],
      dialog: [
        {
          character: 'narrator',
          text: '【忘年之恋 - 与纪止渊的爱情】'
        },
        {
          character: 'narrator',
          text: '你和纪止渊冲破世俗枷锁，在一起。这段感情成为传奇。'
        },
        {
          character: 'jizhiyuan',
          text: '我从未后悔爱上你。你是我今生唯一的挚爱。',
          expression: 'loving'
        },
        {
          character: 'rongyu',
          text: '也许这就是重生的意义——有勇气追求真爱。',
          expression: 'content'
        },
        {
          character: 'narrator',
          text: '你们共同管理纪家，相濡以沫五十载。人们说，这是跨越时空的真爱。'
        },
        {
          character: 'narrator',
          text: '游戏结束。感谢游玩！'
        }
      ],
      choices: []
    },
    {
      id: 'ending_6',
      background: 'youth_love',
      characters: ['rongyu', 'jizhouye'],
      dialog: [
        {
          character: 'narrator',
          text: '【隔代情缘 - 与纪舟野的爱情】'
        },
        {
          character: 'narrator',
          text: '你和纪舟野在一起，这段跨越辈分的感情震惊了所有人。'
        },
        {
          character: 'jizhouye',
          text: '是你给了我新生，我愿用一生守护你。',
          expression: 'devoted'
        },
        {
          character: 'rongyu',
          text: '年龄和辈分都是假象，真正的感情无关这些。',
          expression: 'happy'
        },
        {
          character: 'narrator',
          text: '纪舟野成为优秀学者，你们的故事成为现代爱情的新典范。'
        },
        {
          character: 'narrator',
          text: '游戏结束。感谢游玩！'
        }
      ],
      choices: []
    },
    {
      id: 'ending_7',
      background: 'family_reunion',
      characters: ['rongyu', 'jishunying', 'family'],
      dialog: [
        {
          character: 'narrator',
          text: '【完美和解 - 母子重逢圆满】'
        },
        {
          character: 'narrator',
          text: '你和纪舜英的母子真相被家族接受，你们的关系成为佳话。'
        },
        {
          character: 'jishunying',
          text: '妈，感谢您重生回来，弥补了我人生最大的遗憾。',
          expression: 'emotional'
        },
        {
          character: 'rongyu',
          text: '英宝，妈妈这次不会再离开了。',
          expression: 'loving'
        },
        {
          character: 'narrator',
          text: '你们共同守护家族，成为传奇。人们说，这是爱超越生死的证明。'
        },
        {
          character: 'narrator',
          text: '游戏结束。感谢游玩！'
        }
      ],
      choices: []
    },
    {
      id: 'ending_8',
      background: 'philosophy_temple',
      characters: ['rongyu', 'seekers'],
      dialog: [
        {
          character: 'narrator',
          text: '【智慧传承 - 哲学导师】'
        },
        {
          character: 'narrator',
          text: '你成为当代最伟大的哲学家和思想家，你的著作影响数亿人。'
        },
        {
          character: 'narrator',
          text: '你提出的\'重生伦理学\'和\'时空哲学\'成为新的学术领域。'
        },
        {
          character: 'rongyu',
          text: '智慧不是知识的累积，而是对生命本质的洞察。',
          expression: 'enlightened'
        },
        {
          character: 'narrator',
          text: '你被誉为\'21世纪的苏格拉底\'，你的思想将照耀人类文明。'
        },
        {
          character: 'narrator',
          text: '游戏结束。感谢游玩！'
        }
      ],
      choices: []
    },
    {
      id: 'ending_9',
      background: 'future_city',
      characters: ['rongyu', 'technology'],
      dialog: [
        {
          character: 'narrator',
          text: '【科技革命 - 未来建筑师】'
        },
        {
          character: 'narrator',
          text: '你领导的科技革命改变了人类社会，人工智能、量子计算、生物科技全面突破。'
        },
        {
          character: 'narrator',
          text: '你建立的研究网络成为全球创新中心，推动人类进入新纪元。'
        },
        {
          character: 'rongyu',
          text: '科技应该服务人类，让每个人都能过上更好的生活。',
          expression: 'visionary'
        },
        {
          character: 'narrator',
          text: '历史学家将这个时代称为\'容遇时代\'，你是人类进步的引领者。'
        },
        {
          character: 'narrator',
          text: '游戏结束。感谢游玩！'
        }
      ],
      choices: []
    },
    {
      id: 'ending_10',
      background: 'charity_world',
      characters: ['rongyu', 'beneficiaries'],
      dialog: [
        {
          character: 'narrator',
          text: '【社会改革 - 慈善女王】'
        },
        {
          character: 'narrator',
          text: '你创办的慈善基金会帮助了数百万人，改善了无数生命。'
        },
        {
          character: 'narrator',
          text: '你推动的社会改革让更多人获得教育和医疗资源。'
        },
        {
          character: 'rongyu',
          text: '每个生命都值得被尊重，我要让世界变得更公平。',
          expression: 'compassionate'
        },
        {
          character: 'narrator',
          text: '联合国授予你\'人道主义杰出贡献奖\'，你的善行将被永远铭记。'
        },
        {
          character: 'narrator',
          text: '游戏结束。感谢游玩！'
        }
      ],
      choices: []
    },
    {
      id: 'ending_11',
      background: 'medical_breakthrough',
      characters: ['rongyu', 'patients'],
      dialog: [
        {
          character: 'narrator',
          text: '【医学奇迹 - 医学突破】'
        },
        {
          character: 'narrator',
          text: '你在医学领域取得重大突破，攻克了多种疑难杂症。'
        },
        {
          character: 'narrator',
          text: '你的治疗方法拯救了数百万生命，包括纪舜英的康复奇迹。'
        },
        {
          character: 'rongyu',
          text: '医学不只是治病，更是给人希望和新生。',
          expression: 'caring'
        },
        {
          character: 'narrator',
          text: '你获得诺贝尔医学奖，被誉为\'生命的守护天使\'。'
        },
        {
          character: 'narrator',
          text: '游戏结束。感谢游玩！'
        }
      ],
      choices: []
    },
    {
      id: 'ending_12',
      background: 'independent_summit',
      characters: ['rongyu'],
      dialog: [
        {
          character: 'narrator',
          text: '【独立女性 - 事业至上】'
        },
        {
          character: 'narrator',
          text: '你专注事业，不被感情束缚，成为新时代独立女性的典范。'
        },
        {
          character: 'narrator',
          text: '你在多个领域取得成就，用行动证明女性的无限可能。'
        },
        {
          character: 'rongyu',
          text: '幸福有很多种定义，我选择为理想而活。',
          expression: 'proud'
        },
        {
          character: 'narrator',
          text: '你成为全球女性楷模，激励数百万女性追求独立和成功。'
        },
        {
          character: 'narrator',
          text: '游戏结束。感谢游玩！'
        }
      ],
      choices: []
    },
    {
      id: 'ending_13',
      background: 'multi_achievement',
      characters: ['rongyu', 'various_fields'],
      dialog: [
        {
          character: 'narrator',
          text: '【全能女神 - 多领域成就】'
        },
        {
          character: 'narrator',
          text: '你在学术、商业、教育、慈善等多个领域都取得顶尖成就。'
        },
        {
          character: 'narrator',
          text: '人们称你为\'文艺复兴式的全才\'，你的多元成就前无古人。'
        },
        {
          character: 'rongyu',
          text: '人生短暂，为何不尝试所有可能？',
          expression: 'ambitious'
        },
        {
          character: 'narrator',
          text: '你的传奇人生成为教科书案例，激励无数后来者。'
        },
        {
          character: 'narrator',
          text: '游戏结束。感谢游玩！'
        }
      ],
      choices: []
    },
    {
      id: 'ending_14',
      background: 'immortal_monument',
      characters: ['rongyu', 'history'],
      dialog: [
        {
          character: 'narrator',
          text: '【传奇人生 - 百年不朽】'
        },
        {
          character: 'narrator',
          text: '你的一生成为传奇，百年后仍被后人传颂。'
        },
        {
          character: 'narrator',
          text: '你的思想、理论、成就深刻影响了人类文明的进程。'
        },
        {
          character: 'rongyu',
          text: '我只是想不留遗憾地活一次，没想到能走到这一步。',
          expression: 'humble'
        },
        {
          character: 'narrator',
          text: '历史将你与孔子、柏拉图、达芬奇并列，你的智慧永垂不朽。'
        },
        {
          character: 'narrator',
          text: '游戏结束。感谢游玩！'
        }
      ],
      choices: []
    },
    {
      id: 'ending_15',
      background: 'perfect_paradise',
      characters: ['rongyu', 'everyone'],
      dialog: [
        {
          character: 'narrator',
          text: '【完美人生 - 究极圆满】'
        },
        {
          character: 'narrator',
          text: '你达成了所有可能的成就：学术巅峰、商业帝国、教育革命、家族和谐、爱情圆满。'
        },
        {
          character: 'jishunying',
          text: '妈，您用重生证明了生命的无限可能。',
          expression: 'proud'
        },
        {
          character: 'jizhiyuan',
          text: '容遇，你是我见过最完美的人。',
          expression: 'admiring'
        },
        {
          character: 'jizhouye',
          text: '老师，您改变了我，也改变了世界。',
          expression: 'grateful'
        },
        {
          character: 'rongyu',
          text: '重生给了我第二次机会，我没有浪费。这一生，无憾。',
          expression: 'fulfilled'
        },
        {
          character: 'narrator',
          text: '你的名字被镌刻在人类文明的丰碑上，与日月同辉，永世流传。'
        },
        {
          character: 'narrator',
          text: '恭喜你达成完美结局！游戏结束。感谢游玩！'
        }
      ],
      choices: []
    },
    {
      id: 'ending_normal',
      background: 'ordinary_life',
      characters: ['rongyu'],
      dialog: [
        {
          character: 'narrator',
          text: '【普通结局 - 平凡而充实】'
        },
        {
          character: 'narrator',
          text: '你没有取得惊天动地的成就，但过上了充实而幸福的生活。'
        },
        {
          character: 'rongyu',
          text: '不是每个人都要成为英雄，平凡也是一种幸福。',
          expression: 'content'
        },
        {
          character: 'narrator',
          text: '你在纪家找到了归属，在学业上有所成就，生活平静美好。'
        },
        {
          character: 'narrator',
          text: '重生的意义，也许就是珍惜平凡的每一天。'
        },
        {
          character: 'narrator',
          text: '游戏结束。感谢游玩！'
        }
      ],
      choices: []
    }
  ]
};