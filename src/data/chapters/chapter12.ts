import { ChapterData } from '../../types/game';

export const chapter12: ChapterData = {
  id: 12,
  title: '权力重组',
  scenes: [
    {
      id: '12-1',
      background: 'ji_boardroom',
      characters: ['rongyu', 'jizhiyuan', 'jishunying', 'ji_elders', 'lanrouxue'],
      dialog: [
        {
          character: 'narrator',
          text: '身份揭露后的第一次董事会。权力格局面临重新洗牌。'
        },
        {
          character: 'lanrouxue',
          text: '即使容遇的身份特殊，她毕竟没有商业管理经验。纪家需要的是实干家。',
          expression: 'challenging'
        },
        {
          character: 'ji_elder_1',
          text: '蓝总说得有道理。家族企业不是儿戏。',
          expression: 'skeptical'
        },
        {
          character: 'jizhiyuan',
          text: '容遇的战略眼光有目共睹。她提出的建议都被证明是正确的。',
          expression: 'supportive'
        },
        {
          character: 'jishunying',
          text: '我提议，让容遇担任家族战略顾问，参与核心决策。',
          expression: 'determined'
        },
        {
          character: 'narrator',
          text: '此话一出，会议室陷入争论。你需要证明自己的价值。'
        }
      ],
      choices: [
        {
          id: 'c12-1a',
          text: '[谦虚拒绝] \'我还需要更多学习和历练\'',
          effects: {
            stats: { modernity: 5 },
            relationships: { jiZhiyuan: -10, jiShunying: -10 },
            nextScene: '12-2'
          }
        },
        {
          id: 'c12-1b',
          text: '[接受但保守] \'我接受顾问职位，但不参与日常管理\'',
          requirements: { stats: { wisdom: 80 } },
          effects: {
            stats: { wisdom: 15, charisma: 10 },
            relationships: { jiZhiyuan: 20, jiShunying: 20 },
            unlock: ['strategic_advisor_role'],
            nextScene: '12-2'
          }
        },
        {
          id: 'c12-1c',
          text: '[展示能力] 当场分析当前商业格局并提出战略建议',
          requirements: { stats: { wisdom: 90, charisma: 85 } },
          effects: {
            stats: { wisdom: 30, charisma: 25 },
            relationships: { jiZhiyuan: 40, jiShunying: 40 },
            unlock: ['strategic_mastermind_proven'],
            nextScene: '12-2'
          }
        },
        {
          id: 'c12-1d',
          text: '[主动出击] 提出全面改革方案并要求实权',
          requirements: { stats: { wisdom: 95, charisma: 90 } },
          effects: {
            stats: { wisdom: 40, charisma: 35, modernity: 20 },
            relationships: { jiZhiyuan: 50, jiShunying: 60 },
            unlock: ['power_player', 'reform_leader'],
            nextScene: '12-2'
          }
        }
      ]
    },
    {
      id: '12-2',
      background: 'ji_office',
      characters: ['rongyu', 'jizhiyuan'],
      dialog: [
        {
          character: 'narrator',
          text: '会后，纪止渊单独找你谈话。'
        },
        {
          character: 'jizhiyuan',
          text: '容遇，我需要和你坦诚谈谈我们的关系。',
          expression: 'serious'
        },
        {
          character: 'rongyu',
          text: '止渊哥哥...',
          expression: 'nervous'
        },
        {
          character: 'jizhiyuan',
          text: '知道你的真实身份后，我更加确定了一件事——我对你的感情是真实的。',
          expression: 'sincere'
        },
        {
          character: 'narrator',
          text: '他走近一步，眼神炽热。'
        },
        {
          character: 'jizhiyuan',
          text: '无论你是谁，我爱的都是现在的你。辈分只是世俗的枷锁，我不在乎。',
          expression: 'passionate'
        },
        {
          character: 'rongyu',
          text: '（他...他还是执着于这份感情...）',
          expression: 'conflicted'
        }
      ],
      choices: [
        {
          id: 'c12-2a',
          text: '[坚决拒绝] \'止渊，我们不可能，请尊重我的决定\'',
          effects: {
            stats: { modernity: 10 },
            relationships: { jiZhiyuan: -30 },
            nextScene: '12-3'
          }
        },
        {
          id: 'c12-2b',
          text: '[温和拒绝] \'我们是家人，这样的感情不合适\'',
          requirements: { stats: { charisma: 80 } },
          effects: {
            stats: { charisma: 12, modernity: 8 },
            relationships: { jiZhiyuan: -15 },
            nextScene: '12-3'
          }
        },
        {
          id: 'c12-2c',
          text: '[给予希望] \'我需要时间...这一切太复杂了\'',
          requirements: { stats: { charisma: 85, wisdom: 85 } },
          effects: {
            stats: { charisma: 18, wisdom: 15 },
            relationships: { jiZhiyuan: 20 },
            unlock: ['zhiyuan_romance_ongoing'],
            nextScene: '12-3'
          }
        },
        {
          id: 'c12-2d',
          text: '[接受感情] \'也许...我们可以超越世俗的束缚\'',
          requirements: { stats: { charisma: 90, wisdom: 85 } },
          effects: {
            stats: { charisma: 30, wisdom: 20 },
            relationships: { jiZhiyuan: 60 },
            unlock: ['zhiyuan_romance_confirmed', 'forbidden_love'],
            nextScene: '12-3'
          }
        }
      ]
    },
    {
      id: '12-3',
      background: 'business_district',
      characters: ['rongyu', 'lanrouxue', 'business_partners'],
      dialog: [
        {
          character: 'narrator',
          text: '商业谈判现场。蓝柔雪试图在重要合作项目上架空你。'
        },
        {
          character: 'lanrouxue',
          text: '各位合作伙伴，这个项目由我全权负责。容遇小姐虽然是顾问，但缺乏实战经验。',
          expression: 'dismissive'
        },
        {
          character: 'business_partner_1',
          text: '蓝总的经验确实更丰富...',
          expression: 'hesitant'
        },
        {
          character: 'narrator',
          text: '对方明显倾向于相信蓝柔雪。这是证明你商业能力的关键时刻。'
        },
        {
          character: 'lanrouxue',
          text: '容遇小姐，不如你回去继续做你的学术研究？商场不适合你。',
          expression: 'mocking'
        },
        {
          character: 'rongyu',
          text: '（她在逼我表态...我要反击吗？）',
          expression: 'calm'
        }
      ],
      choices: [
        {
          id: 'c12-3a',
          text: '[选择退让] \'蓝总经验丰富，我尊重她的决定\'',
          effects: {
            stats: { modernity: 5 },
            relationships: { jiZhiyuan: -15 },
            nextScene: '12-4'
          }
        },
        {
          id: 'c12-3b',
          text: '[保留意见] \'我会提供我的建议，供大家参考\'',
          requirements: { stats: { charisma: 80 } },
          effects: {
            stats: { charisma: 12 },
            relationships: { jiZhiyuan: 10 },
            nextScene: '12-4'
          }
        },
        {
          id: 'c12-3c',
          text: '[展示实力] 详细分析项目风险和机遇，指出蓝柔雪方案的漏洞',
          requirements: { stats: { wisdom: 90, charisma: 85 } },
          effects: {
            stats: { wisdom: 30, charisma: 25 },
            relationships: { jiZhiyuan: 40 },
            unlock: ['business_expert', 'lanrouxue_defeated'],
            nextScene: '12-4'
          }
        },
        {
          id: 'c12-3d',
          text: '[全面反击] 提出更优方案，当场赢得合作方信任',
          requirements: { stats: { wisdom: 95, charisma: 90 } },
          effects: {
            stats: { wisdom: 40, charisma: 35 },
            relationships: { jiZhiyuan: 60 },
            unlock: ['business_genius', 'power_victory', 'lanrouxue_humiliated'],
            nextScene: '12-4'
          }
        }
      ]
    },
    {
      id: '12-4',
      background: 'ji_mansion_study',
      characters: ['rongyu', 'jishunying', 'jizhiyuan'],
      dialog: [
        {
          character: 'narrator',
          text: '深夜，纪舜英和纪止渊一起找你商议家族未来。'
        },
        {
          character: 'jishunying',
          text: '容遇，纪家到了关键转折点。我需要你帮我做个决定。',
          expression: 'serious'
        },
        {
          character: 'jizhiyuan',
          text: '父亲想要进行大规模改革，但会触动很多人的利益。',
          expression: 'concerned'
        },
        {
          character: 'jishunying',
          text: '如果我们要建立现代企业制度，必然要削减一些家族长辈的权力。',
          expression: 'determined'
        },
        {
          character: 'narrator',
          text: '他拿出一份改革方案，内容激进而全面。'
        },
        {
          character: 'jishunying',
          text: '容遇，你觉得应该怎么做？激进改革还是温和过渡？',
          expression: 'seeking'
        },
        {
          character: 'rongyu',
          text: '（这个决定将塑造纪家未来几十年的格局...）',
          expression: 'thoughtful'
        }
      ],
      choices: [
        {
          id: 'c12-4a',
          text: '[保守建议] \'稳妥为上，不要激进改革\'',
          effects: {
            stats: { wisdom: 10 },
            relationships: { jiShunying: 10, jiZhiyuan: 5 },
            nextScene: 'chapter_12_end'
          }
        },
        {
          id: 'c12-4b',
          text: '[温和改革] \'分阶段推进，给大家适应时间\'',
          requirements: { stats: { wisdom: 85 } },
          effects: {
            stats: { wisdom: 20, charisma: 15 },
            relationships: { jiShunying: 30, jiZhiyuan: 30 },
            unlock: ['reform_strategist'],
            nextScene: 'chapter_12_end'
          }
        },
        {
          id: 'c12-4c',
          text: '[支持激进] \'改革必须彻底，不能妥协\'',
          requirements: { stats: { wisdom: 90, charisma: 85 } },
          effects: {
            stats: { wisdom: 35, charisma: 25, modernity: 20 },
            relationships: { jiShunying: 50, jiZhiyuan: 50 },
            unlock: ['revolutionary_leader'],
            nextScene: 'chapter_12_end'
          }
        },
        {
          id: 'c12-4d',
          text: '[制定蓝图] 设计完整的三年改革路线图',
          requirements: { stats: { wisdom: 95, charisma: 90 } },
          effects: {
            stats: { wisdom: 50, charisma: 40, modernity: 30 },
            relationships: { jiShunying: 80, jiZhiyuan: 70 },
            unlock: ['grand_architect', 'power_consolidation_complete', 'new_era_founder'],
            nextScene: 'chapter_12_end'
          }
        }
      ]
    }
  ]
};