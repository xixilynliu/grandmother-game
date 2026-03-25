import { ChapterData } from '../../types/game';

export const chapter7: ChapterData = {
  id: 7,
  title: '情感纠葛',
  scenes: [
    {
      id: '7-1',
      background: 'moonlit_garden',
      characters: ['rongyu', 'jizhiyuan'],
      dialog: [
        {
          character: 'narrator',
          text: '月色如水的芙蓉庄园后花园，纪止渊似乎专程在此等候。'
        },
        {
          character: 'jizhiyuan',
          text: '容遇，最近和你相处，我发现自己对你产生了...一些特殊的感觉。',
          expression: 'conflicted'
        },
        {
          character: 'rongyu',
          text: '止渊哥哥，你这话是什么意思？',
          expression: 'surprised'
        },
        {
          character: 'jizhiyuan',
          text: '我知道这很荒谬。你是舜英的儿媳，按辈分是我的侄媳。但你的智慧、你的气质...让我无法忽视。',
          expression: 'sincere'
        },
        {
          character: 'narrator',
          text: '他的眼神炽热而真挚，完全不像那个冷静理智的商界精英。'
        },
        {
          character: 'jizhiyuan',
          text: '也许是我疯了，但我想知道...你对我有什么感觉？',
          expression: 'vulnerable'
        },
        {
          character: 'rongyu',
          text: '（这是我前世的儿子啊...但现在这副18岁的身体，这颗重生的心...）',
          expression: 'conflicted'
        }
      ],
      choices: [
        {
          id: 'c7-1a',
          text: '[明确拒绝] \'止渊哥哥，我们之间不可能，这违背伦理\'',
          effects: {
            stats: { modernity: 5, wisdom: 3 },
            relationships: { jiZhiyuan: -20 },
            nextScene: '7-2'
          }
        },
        {
          id: 'c7-1b',
          text: '[回避问题] \'我们还是不要谈论这些，专注于事业吧\'',
          effects: {
            stats: { modernity: 3 },
            relationships: { jiZhiyuan: -10 },
            nextScene: '7-2'
          }
        },
        {
          id: 'c7-1c',
          text: '[坦诚内心] \'我也有些混乱...我们需要时间思考\'',
          requirements: { stats: { charisma: 70, wisdom: 65 } },
          effects: {
            stats: { charisma: 10, wisdom: 5 },
            relationships: { jiZhiyuan: 15 },
            unlock: ['emotional_ambiguity'],
            nextScene: '7-2'
          }
        },
        {
          id: 'c7-1d',
          text: '[哲学思考] \'时空重组，身份重构，也许传统伦理需要重新审视\'',
          requirements: { stats: { wisdom: 80, charisma: 75 } },
          effects: {
            stats: { wisdom: 15, charisma: 12 },
            relationships: { jiZhiyuan: 25 },
            unlock: ['philosophical_romance', 'zhiyuan_romance_path'],
            nextScene: '7-2'
          }
        }
      ]
    },
    {
      id: '7-2',
      background: 'university_campus',
      characters: ['rongyu', 'jizhouye', 'classmates'],
      dialog: [
        {
          character: 'narrator',
          text: '大学校园，纪舟野等在教学楼下。他似乎在等你。'
        },
        {
          character: 'jizhouye',
          text: '容遇，我观察你很久了。你和其他女孩都不一样。',
          expression: 'shy'
        },
        {
          character: 'rongyu',
          text: '舟野，你...',
          expression: 'gentle'
        },
        {
          character: 'jizhouye',
          text: '我知道按辈分你是我母亲，但那只是形式。你只比我大几岁，我们明明是同龄人。',
          expression: 'earnest'
        },
        {
          character: 'narrator',
          text: '他的眼神纯净而执着，带着年轻人特有的勇气。'
        },
        {
          character: 'jizhouye',
          text: '容遇，我想追求你。不是作为儿子，而是作为一个喜欢你的男人。',
          expression: 'determined'
        },
        {
          character: 'rongyu',
          text: '（前世的孙子...现在却说要追求我。这世界真是荒诞...）',
          expression: 'complex'
        }
      ],
      choices: [
        {
          id: 'c7-2a',
          text: '[温柔拒绝] \'舟野，我们的身份注定了不可能\'',
          effects: {
            stats: { modernity: 5 },
            relationships: { jiZhouye: -15 },
            nextScene: '7-3'
          }
        },
        {
          id: 'c7-2b',
          text: '[保持距离] \'我们还是保持现在的关系就好\'',
          effects: {
            stats: { modernity: 3 },
            relationships: { jiZhouye: -8 },
            nextScene: '7-3'
          }
        },
        {
          id: 'c7-2c',
          text: '[给予希望] \'也许...我们可以先做朋友，慢慢了解彼此\'',
          requirements: { stats: { charisma: 65 } },
          effects: {
            stats: { charisma: 8, modernity: 8 },
            relationships: { jiZhouye: 20 },
            unlock: ['zhouye_romance_potential'],
            nextScene: '7-3'
          }
        },
        {
          id: 'c7-2d',
          text: '[理性分析] \'辈分是社会建构，真实的感情才是本质\'',
          requirements: { stats: { wisdom: 75, modernity: 60 } },
          effects: {
            stats: { wisdom: 10, modernity: 12, charisma: 10 },
            relationships: { jiZhouye: 25 },
            unlock: ['modern_love_philosophy', 'zhouye_romance_path'],
            nextScene: '7-3'
          }
        }
      ]
    },
    {
      id: '7-3',
      background: 'rongyu_apartment',
      characters: ['rongyu', 'rongmeiyan'],
      dialog: [
        {
          character: 'narrator',
          text: '深夜，容美艳来访，神色凝重。'
        },
        {
          character: 'rongmeiyan',
          text: '小遇，我今天听到了一些传闻...关于你和纪家的年轻一辈。',
          expression: 'worried'
        },
        {
          character: 'rongyu',
          text: '妈妈，你听到了什么？',
          expression: 'cautious'
        },
        {
          character: 'rongmeiyan',
          text: '有人说你和纪止渊走得很近，也有人说纪舟野对你有意思。小遇，你要清醒啊！',
          expression: 'anxious'
        },
        {
          character: 'narrator',
          text: '母亲的担忧不无道理。这种错综复杂的关系一旦曝光，后果不堪设想。'
        },
        {
          character: 'rongmeiyan',
          text: '我知道你聪明，但感情的事...妈妈过来人，这种局面太危险了。',
          expression: 'concerned'
        },
        {
          character: 'rongyu',
          text: '（母亲说得对，我必须对这些情感纠葛有清晰的定位...）',
          expression: 'reflective'
        }
      ],
      choices: [
        {
          id: 'c7-3a',
          text: '[承诺母亲] \'妈，我会保持距离，专注学业和事业\'',
          effects: {
            stats: { modernity: 8, wisdom: 5 },
            relationships: { jiZhiyuan: -10, jiZhouye: -10 },
            nextScene: '7-4'
          }
        },
        {
          id: 'c7-3b',
          text: '[坦诚迷茫] \'妈，我现在也很困惑，给我时间想清楚\'',
          effects: {
            stats: { wisdom: 5 },
            nextScene: '7-4'
          }
        },
        {
          id: 'c7-3c',
          text: '[解释处境] \'我在利用这些关系获取纪家的信任和资源\'',
          requirements: { stats: { charisma: 70, wisdom: 70 } },
          effects: {
            stats: { charisma: 10, wisdom: 8 },
            unlock: ['strategic_emotional_manipulation'],
            nextScene: '7-4'
          }
        },
        {
          id: 'c7-3d',
          text: '[哲学对话] \'妈，如果灵魂重生，原有的伦理框架还适用吗？\'',
          requirements: { stats: { wisdom: 85, modernity: 65 } },
          effects: {
            stats: { wisdom: 15, modernity: 10 },
            unlock: ['existential_reflection', 'mother_philosophical_bond'],
            nextScene: '7-4'
          }
        }
      ]
    },
    {
      id: '7-4',
      background: 'high_society_party',
      characters: ['rongyu', 'jizhiyuan', 'jizhouye', 'lanrouxue', 'elites'],
      dialog: [
        {
          character: 'narrator',
          text: '上流社会慈善晚宴，纪家核心成员悉数到场。'
        },
        {
          character: 'lanrouxue',
          text: '哟，这不是容遇小姐吗？今晚打扮得真漂亮，是要给谁看呢？',
          expression: 'mocking'
        },
        {
          character: 'narrator',
          text: '她的目光在纪止渊和纪舟野之间来回扫视，带着意味深长的笑容。'
        },
        {
          character: 'lanrouxue',
          text: '都说容遇小姐聪明伶俐，看来是很懂得利用自己的优势啊。',
          expression: 'sarcastic'
        },
        {
          character: 'elite_lady',
          text: '是啊，年轻就是好，在纪家左右逢源。',
          expression: 'gossiping'
        },
        {
          character: 'narrator',
          text: '周围的窃窃私语越来越多。纪止渊和纪舟野同时向你走来，气氛瞬间紧张。'
        },
        {
          character: 'rongyu',
          text: '（这是一个关键时刻，我的态度会影响三方关系...）',
          expression: 'composed'
        }
      ],
      choices: [
        {
          id: 'c7-4a',
          text: '[主动回避] 以身体不适为由提前离场',
          effects: {
            stats: { modernity: 3 },
            relationships: { jiZhiyuan: -5, jiZhouye: -5 },
            nextScene: 'chapter_7_end'
          }
        },
        {
          id: 'c7-4b',
          text: '[正面回应] \'我和纪家的关系清清白白，不需要向任何人解释\'',
          requirements: { stats: { charisma: 70 } },
          effects: {
            stats: { charisma: 12, modernity: 8 },
            unlock: ['public_declaration'],
            nextScene: 'chapter_7_end'
          }
        },
        {
          id: 'c7-4c',
          text: '[智慧化解] 借机谈论慈善项目，转移话题焦点',
          requirements: { stats: { wisdom: 75, charisma: 75 } },
          effects: {
            stats: { wisdom: 10, charisma: 15 },
            relationships: { jiZhiyuan: 10, jiZhouye: 10 },
            unlock: ['social_master'],
            nextScene: 'chapter_7_end'
          }
        },
        {
          id: 'c7-4d',
          text: '[反击蓝柔雪] 揭露她的虚伪和算计，赢得在场支持',
          requirements: { stats: { charisma: 80, wisdom: 80 } },
          effects: {
            stats: { charisma: 20, wisdom: 10, modernity: 10 },
            relationships: { jiZhiyuan: 20, jiZhouye: 15 },
            unlock: ['social_warfare_expert', 'lanrouxue_enemy_deepened'],
            nextScene: 'chapter_7_end'
          }
        }
      ]
    }
  ]
};