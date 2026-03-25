import { ChapterData } from '../../types/game';

export const chapter13: ChapterData = {
  id: 13,
  title: '情感抉择',
  scenes: [
    {
      id: '13-1',
      background: 'moonlit_terrace',
      characters: ['rongyu', 'jizhiyuan'],
      dialog: [
        {
          character: 'narrator',
          text: '月光露台，纪止渊准备了精心的晚餐，正式向你表白。'
        },
        {
          character: 'jizhiyuan',
          text: '容遇，这段时间我想了很多。关于我们的关系，关于所谓的伦理。',
          expression: 'sincere'
        },
        {
          character: 'rongyu',
          text: '止渊...',
          expression: 'conflicted'
        },
        {
          character: 'jizhiyuan',
          text: '你重生了，拥有了新的身体、新的人生。按照你现在的年龄，我们是同辈。',
          expression: 'earnest'
        },
        {
          character: 'narrator',
          text: '他单膝跪下，拿出一枚戒指。'
        },
        {
          character: 'jizhiyuan',
          text: '我爱你，容遇。不是因为你的前世身份，而是因为现在的你——聪慧、勇敢、善良。',
          expression: 'passionate'
        },
        {
          character: 'rongyu',
          text: '（这是前世的儿子...但他说得对，我现在是容遇...）',
          expression: 'torn'
        }
      ],
      choices: [
        {
          id: 'c13-1a',
          text: '[坚决拒绝] \'对不起，我无法接受这份感情\'',
          effects: {
            stats: { modernity: 10 },
            relationships: { jiZhiyuan: -40 },
            nextScene: '13-2'
          }
        },
        {
          id: 'c13-1b',
          text: '[温柔拒绝] \'止渊，我们可以是亲人、战友，但不能是恋人\'',
          requirements: { stats: { charisma: 85 } },
          effects: {
            stats: { charisma: 15, wisdom: 10 },
            relationships: { jiZhiyuan: -20 },
            unlock: ['friend_zone'],
            nextScene: '13-2'
          }
        },
        {
          id: 'c13-1c',
          text: '[给予希望] \'让我再想想...我需要时间\'',
          requirements: { stats: { charisma: 90, wisdom: 85 } },
          effects: {
            stats: { charisma: 20, wisdom: 15 },
            relationships: { jiZhiyuan: 10 },
            unlock: ['romance_pending'],
            nextScene: '13-2'
          }
        },
        {
          id: 'c13-1d',
          text: '[接受求婚] \'也许你说得对...我们可以创造新的未来\'',
          requirements: { stats: { charisma: 95, wisdom: 90, modernity: 80 } },
          effects: {
            stats: { charisma: 40, wisdom: 25, modernity: 20 },
            relationships: { jiZhiyuan: 100 },
            unlock: ['zhiyuan_engagement', 'forbidden_love_ending_path'],
            nextScene: '13-2'
          }
        }
      ]
    },
    {
      id: '13-2',
      background: 'university_garden',
      characters: ['rongyu', 'jizhouye'],
      dialog: [
        {
          character: 'narrator',
          text: '大学校园，纪舟野拦住了你的去路。'
        },
        {
          character: 'jizhouye',
          text: '容遇，我听说叔叔向你求婚了。',
          expression: 'anxious'
        },
        {
          character: 'rongyu',
          text: '舟野...',
          expression: 'gentle'
        },
        {
          character: 'jizhouye',
          text: '在你告诉我真相之前，我就已经爱上你了。知道真相后，我更加确定了。',
          expression: 'determined'
        },
        {
          character: 'narrator',
          text: '他紧紧握住你的手，眼神炽热而真挚。'
        },
        {
          character: 'jizhouye',
          text: '我不在乎辈分，不在乎世俗眼光。你教会我成长，给了我新生。我想用一生来报答你。',
          expression: 'sincere'
        },
        {
          character: 'rongyu',
          text: '（重孙也对我表白...这个世界真是荒诞...）',
          expression: 'overwhelmed'
        }
      ],
      choices: [
        {
          id: 'c13-2a',
          text: '[温柔拒绝] \'舟野，我永远是你的长辈，你该找同龄人\'',
          effects: {
            stats: { modernity: 10 },
            relationships: { jiZhouye: -30 },
            nextScene: '13-3'
          }
        },
        {
          id: 'c13-2b',
          text: '[保持界限] \'我们的感情不能超越师长和晚辈的关系\'',
          requirements: { stats: { charisma: 85 } },
          effects: {
            stats: { charisma: 15 },
            relationships: { jiZhouye: -15 },
            nextScene: '13-3'
          }
        },
        {
          id: 'c13-2c',
          text: '[理性分析] \'舟野，你现在的感情可能是依赖和感激\'',
          requirements: { stats: { wisdom: 90, charisma: 85 } },
          effects: {
            stats: { wisdom: 20, charisma: 15 },
            relationships: { jiZhouye: 5 },
            unlock: ['rational_boundary'],
            nextScene: '13-3'
          }
        },
        {
          id: 'c13-2d',
          text: '[接受感情] \'舟野...也许我们可以尝试...\'',
          requirements: { stats: { charisma: 95, wisdom: 85, modernity: 85 } },
          effects: {
            stats: { charisma: 35, wisdom: 20, modernity: 25 },
            relationships: { jiZhouye: 100 },
            unlock: ['zhouye_romance_confirmed', 'generational_love_path'],
            nextScene: '13-3'
          }
        }
      ]
    },
    {
      id: '13-3',
      background: 'philosophy_lecture_hall',
      characters: ['rongyu', 'professor_ethics', 'students'],
      dialog: [
        {
          character: 'narrator',
          text: '伦理学课堂上，教授正在讨论重生与伦理的哲学问题。'
        },
        {
          character: 'professor_ethics',
          text: '如果一个人的灵魂进入新的身体，她还是原来的她吗？',
          expression: 'philosophical'
        },
        {
          character: 'student_1',
          text: '这涉及身份同一性问题...肉体和灵魂哪个决定身份？',
          expression: 'thoughtful'
        },
        {
          character: 'professor_ethics',
          text: '更重要的是，如果身份重构，原有的社会关系和伦理约束是否还适用？',
          expression: 'probing'
        },
        {
          character: 'narrator',
          text: '教授的目光落在你身上，似乎知道些什么。'
        },
        {
          character: 'professor_ethics',
          text: '容遇同学，你有什么看法？',
          expression: 'expectant'
        },
        {
          character: 'rongyu',
          text: '（这个问题...直指我的困境核心...）',
          expression: 'reflective'
        }
      ],
      choices: [
        {
          id: 'c13-3a',
          text: '[传统观点] \'伦理规范是社会基石，不能轻易改变\'',
          effects: {
            stats: { wisdom: 10, modernity: -5 },
            nextScene: '13-4'
          }
        },
        {
          id: 'c13-3b',
          text: '[中立立场] \'这是个复杂的哲学难题，没有标准答案\'',
          requirements: { stats: { wisdom: 85 } },
          effects: {
            stats: { wisdom: 15 },
            nextScene: '13-4'
          }
        },
        {
          id: 'c13-3c',
          text: '[深度分析] 从存在主义角度阐述身份重构理论',
          requirements: { stats: { wisdom: 95, charisma: 90 } },
          effects: {
            stats: { wisdom: 35, charisma: 25 },
            unlock: ['philosophical_breakthrough'],
            nextScene: '13-4'
          }
        },
        {
          id: 'c13-3d',
          text: '[革新理论] 提出重生伦理学新框架',
          requirements: { stats: { wisdom: 100, charisma: 95 } },
          effects: {
            stats: { wisdom: 50, charisma: 40, modernity: 30 },
            unlock: ['ethics_innovator', 'academic_revolution', 'new_ethics_founder'],
            nextScene: '13-4'
          }
        }
      ]
    },
    {
      id: '13-4',
      background: 'rongyu_apartment',
      characters: ['rongyu', 'rongmeiyan'],
      dialog: [
        {
          character: 'narrator',
          text: '深夜，母亲容美艳来访，神色凝重。'
        },
        {
          character: 'rongmeiyan',
          text: '小遇，我听说了...纪止渊和纪舟野都对你表白了？',
          expression: 'worried'
        },
        {
          character: 'rongyu',
          text: '妈妈...',
          expression: 'helpless'
        },
        {
          character: 'rongmeiyan',
          text: '孩子，妈妈知道你的处境很特殊。但无论如何，你要为自己的幸福负责。',
          expression: 'caring'
        },
        {
          character: 'narrator',
          text: '她握住你的手，眼神温柔而坚定。'
        },
        {
          character: 'rongmeiyan',
          text: '你已经活过一世了。这一世，按你自己的心意去选择。妈妈永远支持你。',
          expression: 'supportive'
        },
        {
          character: 'rongyu',
          text: '（妈妈的话让我想起了什么才是最重要的...）',
          expression: 'enlightened'
        }
      ],
      choices: [
        {
          id: 'c13-4a',
          text: '[决定单身] \'我选择专注事业，不谈感情\'',
          effects: {
            stats: { wisdom: 20, modernity: 15 },
            unlock: ['career_focus_ending_path'],
            nextScene: 'chapter_13_end'
          }
        },
        {
          id: 'c13-4b',
          text: '[选择纪止渊] \'我决定和止渊在一起\'',
          requirements: { 
            stats: { charisma: 95, wisdom: 90 },
            unlocked: ['zhiyuan_engagement']
          },
          effects: {
            stats: { charisma: 40, wisdom: 25 },
            relationships: { jiZhiyuan: 100, jiZhouye: -50 },
            unlock: ['zhiyuan_ending_confirmed'],
            nextScene: 'chapter_13_end'
          }
        },
        {
          id: 'c13-4c',
          text: '[选择纪舟野] \'我决定和舟野在一起\'',
          requirements: { 
            stats: { charisma: 95, modernity: 90 },
            unlocked: ['zhouye_romance_confirmed']
          },
          effects: {
            stats: { charisma: 40, modernity: 30 },
            relationships: { jiZhouye: 100, jiZhiyuan: -50 },
            unlock: ['zhouye_ending_confirmed'],
            nextScene: 'chapter_13_end'
          }
        },
        {
          id: 'c13-4d',
          text: '[重新定义关系] \'我选择超越传统的情感模式\'',
          requirements: { stats: { wisdom: 100, charisma: 100, modernity: 95 } },
          effects: {
            stats: { wisdom: 60, charisma: 50, modernity: 40 },
            unlock: ['transcendent_love', 'new_relationship_paradigm'],
            nextScene: 'chapter_13_end'
          }
        }
      ]
    }
  ]
};