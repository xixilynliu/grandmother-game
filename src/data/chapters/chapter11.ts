import { ChapterData } from '../../types/game';

export const chapter11: ChapterData = {
  id: 11,
  title: '真相浮现',
  scenes: [
    {
      id: '11-1',
      background: 'hospital_private_room',
      characters: ['rongyu', 'jishunying'],
      dialog: [
        {
          character: 'narrator',
          text: '纪舜英康复顺利，意识完全恢复。这天，他单独约你见面。'
        },
        {
          character: 'jishunying',
          text: '容遇，我有些话想单独和你说。',
          expression: 'serious'
        },
        {
          character: 'rongyu',
          text: '舜英先生，您想说什么？',
          expression: 'nervous'
        },
        {
          character: 'jishunying',
          text: '昏迷期间，我做了很多梦...或者说，回忆起了一些不可思议的事情。',
          expression: 'contemplative'
        },
        {
          character: 'narrator',
          text: '他的眼神变得深邃，仿佛看穿了时空的迷雾。'
        },
        {
          character: 'jishunying',
          text: '容遇...你的眼神、你的语气、你看我的方式...都和一个人一模一样。',
          expression: 'emotional'
        },
        {
          character: 'rongyu',
          text: '（他...他想起来了？）',
          expression: 'shocked'
        },
        {
          character: 'jishunying',
          text: '你...是不是我的母亲？',
          expression: 'trembling'
        }
      ],
      choices: [
        {
          id: 'c11-1a',
          text: '[否认] \'舜英先生，您一定是还没完全康复\'',
          effects: {
            stats: { modernity: 5 },
            relationships: { jiShunying: -20 },
            nextScene: '11-2'
          }
        },
        {
          id: 'c11-1b',
          text: '[回避] \'这个世界有太多不可思议的事情\'',
          requirements: { stats: { wisdom: 75 } },
          effects: {
            stats: { wisdom: 10 },
            relationships: { jiShunying: 5 },
            nextScene: '11-2'
          }
        },
        {
          id: 'c11-1c',
          text: '[暗示承认] \'如果灵魂真的可以重生...\'',
          requirements: { stats: { wisdom: 85, charisma: 80 } },
          effects: {
            stats: { wisdom: 20, charisma: 15 },
            relationships: { jiShunying: 40 },
            unlock: ['truth_hint'],
            nextScene: '11-2'
          }
        },
        {
          id: 'c11-1d',
          text: '[完全坦白] \'英宝...妈妈真的回来了\'',
          requirements: { stats: { wisdom: 90, charisma: 85 } },
          effects: {
            stats: { wisdom: 30, charisma: 25 },
            relationships: { jiShunying: 80 },
            unlock: ['mother_son_reunion', 'identity_revealed'],
            nextScene: '11-2'
          }
        }
      ]
    },
    {
      id: '11-2',
      background: 'hospital_balcony',
      characters: ['rongyu', 'jishunying'],
      dialog: [
        {
          character: 'narrator',
          text: '医院天台，夕阳西下。如果你坦白了真相，这将是最私密的母子对话。'
        },
        {
          character: 'jishunying',
          text: '这些年...我一直在想，如果您还在，该有多好。',
          expression: 'emotional'
        },
        {
          character: 'rongyu',
          text: '妈妈从未离开，只是换了一种方式陪在你身边。',
          expression: 'tender'
        },
        {
          character: 'jishunying',
          text: '可是...现在的情况太复杂了。您是舟野名义上的母亲，是止渊的...',
          expression: 'troubled'
        },
        {
          character: 'narrator',
          text: '他意识到了这层关系的荒诞和困境。'
        },
        {
          character: 'jishunying',
          text: '妈，我们该怎么办？要不要公开这个秘密？',
          expression: 'confused'
        },
        {
          character: 'rongyu',
          text: '（这是个艰难的决定...）',
          expression: 'thoughtful'
        }
      ],
      choices: [
        {
          id: 'c11-2a',
          text: '[永远保密] \'这个秘密只有我们知道就好\'',
          effects: {
            stats: { wisdom: 10 },
            relationships: { jiShunying: 30 },
            unlock: ['secret_pact'],
            nextScene: '11-3'
          }
        },
        {
          id: 'c11-2b',
          text: '[有选择公开] \'只告诉止渊，不告诉其他人\'',
          requirements: { stats: { wisdom: 80, charisma: 75 } },
          effects: {
            stats: { wisdom: 15, charisma: 12 },
            relationships: { jiShunying: 40 },
            unlock: ['selective_disclosure'],
            nextScene: '11-3'
          }
        },
        {
          id: 'c11-2c',
          text: '[家族公开] \'告诉纪家核心成员真相\'',
          requirements: { stats: { wisdom: 85, charisma: 85 } },
          effects: {
            stats: { wisdom: 25, charisma: 20 },
            relationships: { jiShunying: 50 },
            unlock: ['family_revelation'],
            nextScene: '11-3'
          }
        },
        {
          id: 'c11-2d',
          text: '[完全公开] \'让世界知道灵魂重生的真相\'',
          requirements: { stats: { wisdom: 90, charisma: 90 } },
          effects: {
            stats: { wisdom: 35, charisma: 30 },
            relationships: { jiShunying: 60 },
            unlock: ['public_revelation', 'media_storm'],
            nextScene: '11-3'
          }
        }
      ]
    },
    {
      id: '11-3',
      background: 'ji_family_meeting_room',
      characters: ['rongyu', 'jishunying', 'jizhiyuan', 'ji_elders'],
      dialog: [
        {
          character: 'narrator',
          text: '家族会议。根据你的选择，真相可能会在此揭晓。'
        },
        {
          character: 'jizhiyuan',
          text: '父亲恢复得很好，这都要感谢容遇的照顾。',
          expression: 'grateful'
        },
        {
          character: 'ji_elder_1',
          text: '容遇小姐确实对我们纪家贡献良多。',
          expression: 'approving'
        },
        {
          character: 'jishunying',
          text: '各位，我有件重要的事情要宣布...',
          expression: 'determined'
        },
        {
          character: 'narrator',
          text: '气氛突然变得凝重。所有人都看向纪舜英。'
        },
        {
          character: 'jishunying',
          text: '关于容遇的身份，我想...',
          expression: 'serious'
        },
        {
          character: 'rongyu',
          text: '（他要说什么？）',
          expression: 'tense'
        }
      ],
      choices: [
        {
          id: 'c11-3a',
          text: '[阻止他] 用眼神示意他不要说',
          effects: {
            stats: { wisdom: 8 },
            relationships: { jiShunying: 20, jiZhiyuan: 10 },
            nextScene: '11-4'
          }
        },
        {
          id: 'c11-3b',
          text: '[让他决定] 静静等待他的宣布',
          requirements: { stats: { wisdom: 80 } },
          effects: {
            stats: { wisdom: 15 },
            relationships: { jiShunying: 35 },
            nextScene: '11-4'
          }
        },
        {
          id: 'c11-3c',
          text: '[主动发言] \'我来说吧\'',
          requirements: { stats: { charisma: 85, wisdom: 85 } },
          effects: {
            stats: { charisma: 20, wisdom: 18 },
            relationships: { jiShunying: 45, jiZhiyuan: 30 },
            unlock: ['brave_confession'],
            nextScene: '11-4'
          }
        },
        {
          id: 'c11-3d',
          text: '[共同宣布] 和纪舜英一起揭示真相',
          requirements: { stats: { charisma: 90, wisdom: 90 } },
          effects: {
            stats: { charisma: 30, wisdom: 25 },
            relationships: { jiShunying: 70, jiZhiyuan: 40 },
            unlock: ['united_revelation', 'family_震撼'],
            nextScene: '11-4'
          }
        }
      ]
    },
    {
      id: '11-4',
      background: 'ji_mansion_hall',
      characters: ['rongyu', 'jishunying', 'jizhiyuan', 'jizhouye', 'ji_family'],
      dialog: [
        {
          character: 'narrator',
          text: '根据你的选择，家族成员的反应各不相同。'
        },
        {
          character: 'jizhiyuan',
          text: '这...怎么可能？灵魂重生？',
          expression: 'shocked'
        },
        {
          character: 'jizhouye',
          text: '所以...容遇一直都...难怪她对我那么好...',
          expression: 'enlightened'
        },
        {
          character: 'ji_elder_1',
          text: '如果这是真的，那纪家的辈分关系...',
          expression: 'troubled'
        },
        {
          character: 'ji_elder_2',
          text: '但容遇确实展现出了不可思议的能力和智慧。',
          expression: 'thoughtful'
        },
        {
          character: 'narrator',
          text: '家族陷入了前所未有的震动和讨论中。'
        },
        {
          character: 'rongyu',
          text: '（无论他们信不信，真相已经揭开了...）',
          expression: 'relieved'
        }
      ],
      choices: [
        {
          id: 'c11-4a',
          text: '[请求理解] \'希望大家能理解这个特殊情况\'',
          effects: {
            stats: { charisma: 15 },
            relationships: { jiShunying: 35, jiZhiyuan: 25, jiZhouye: 25 },
            nextScene: 'chapter_11_end'
          }
        },
        {
          id: 'c11-4b',
          text: '[保持尊严] \'我的身份不变，仍是容遇\'',
          requirements: { stats: { charisma: 85 } },
          effects: {
            stats: { charisma: 25, wisdom: 15 },
            relationships: { jiShunying: 45, jiZhiyuan: 35, jiZhouye: 30 },
            unlock: ['dual_identity_acceptance'],
            nextScene: 'chapter_11_end'
          }
        },
        {
          id: 'c11-4c',
          text: '[智慧解释] 阐述身份重构的哲学意义',
          requirements: { stats: { wisdom: 90, charisma: 85 } },
          effects: {
            stats: { wisdom: 30, charisma: 25 },
            relationships: { jiShunying: 60, jiZhiyuan: 45, jiZhouye: 40 },
            unlock: ['philosophical_acceptance', 'family_unity'],
            nextScene: 'chapter_11_end'
          }
        },
        {
          id: 'c11-4d',
          text: '[重新定位] \'我是纪家的守护者，这是新的使命\'',
          requirements: { stats: { wisdom: 95, charisma: 90 } },
          effects: {
            stats: { wisdom: 40, charisma: 35 },
            relationships: { jiShunying: 80, jiZhiyuan: 60, jiZhouye: 50 },
            unlock: ['family_guardian', 'new_era_leader', 'complete_acceptance'],
            nextScene: 'chapter_11_end'
          }
        }
      ]
    }
  ]
};