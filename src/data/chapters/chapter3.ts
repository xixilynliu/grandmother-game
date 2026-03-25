import { ChapterData } from '../../types/game';

export const chapter3: ChapterData = {
  id: 3,
  title: "家族深入接触",
  scenes: [
    {
      id: "3-1",
      background: "furong_manor_gate",
      characters: ["rongyu", "jizhiyuan", "butler"],
      dialog: [
        {
          character: "narrator",
          text: "芙蓉庄园，纪氏家族的私人庄园，占地百亩，极尽奢华。"
        },
        {
          character: "jizhiyuan",
          text: "欢迎来到芙蓉庄园，容小姐。听舟野说，你对医学很有研究？",
          expression: "serious"
        },
        {
          character: "rongyu",
          text: "（这个男人...气场强大，但眼神深处有掩藏不住的疲惫）",
          expression: "observe"
        },
        {
          character: "jizhiyuan",
          text: "如果你真的有办法，我愿意付出任何代价。",
          expression: "desperate"
        }
      ],
      choices: [
        {
          id: "c3-1a",
          text: "[谦虚] \"我只是略懂皮毛，不敢妄言\"",
          effects: {
            relationships: { jiZhiyuan: 3 },
            nextScene: "3-2"
          }
        },
        {
          id: "c3-1b",
          text: "[自信] \"我需要先检查病人的情况才能判断\"",
          requirements: { stats: { medical: 70 } },
          effects: {
            stats: { medical: 3, charisma: 5 },
            relationships: { jiZhiyuan: 10 },
            nextScene: "3-2"
          }
        },
        {
          id: "c3-1c",
          text: "[商业思维] \"纪总，我们可以先谈谈条件\"",
          requirements: { stats: { modernity: 25, charisma: 45 } },
          effects: {
            stats: { modernity: 5 },
            relationships: { jiZhiyuan: 5, rongRuoya: 10 },
            unlock: ["business_minded"],
            nextScene: "3-2"
          }
        },
        {
          id: "c3-1d",
          text: "[真诚] \"我和纪夫人有缘，我会尽力的\"",
          requirements: { stats: { medical: 68 } },
          effects: {
            relationships: { jiZhiyuan: 15, jiShunying: 10 },
            unlock: ["destined_healer"],
            nextScene: "3-2"
          }
        }
      ]
    },
    {
      id: "3-2",
      background: "manor_medical_room",
      characters: ["rongyu", "jizhiyuan", "jishu nying"],
      dialog: [
        {
          character: "narrator",
          text: "医疗室内，纪舜英静静躺在特制的医疗床上，各种仪器围绕着她。"
        },
        {
          character: "rongyu",
          text: "（这是...舜英！虽然容颜憔悴，但还是那张熟悉的脸）",
          expression: "shock"
        },
        {
          character: "jizhiyuan",
          text: "两年了，最好的医生都看过，都说只能维持生命体征。",
          expression: "pain"
        },
        {
          character: "rongyu",
          text: "（我仔细检查了她的脉象...不对，这不是简单的昏迷）",
          expression: "think"
        },
        {
          character: "narrator",
          text: "容遇的手指轻轻搭在纪舜英的手腕上，闭目诊脉。"
        }
      ],
      choices: [
        {
          id: "c3-2a",
          text: "[诊断] \"这是神经损伤加药物残留，我有治疗思路\"",
          requirements: { stats: { medical: 75 } },
          effects: {
            stats: { medical: 10, wisdom: 5 },
            relationships: { jiZhiyuan: 20, jiShunying: 15 },
            unlock: ["treatment_plan"],
            nextScene: "3-3"
          }
        },
        {
          id: "c3-2b",
          text: "[保守] \"病情复杂，我需要更多时间研究\"",
          effects: {
            stats: { wisdom: 3 },
            relationships: { jiZhiyuan: 5 },
            nextScene: "3-3"
          }
        },
        {
          id: "c3-2c",
          text: "[古法] \"用古代医书中的针灸之法，或许有转机\"",
          requirements: { stats: { medical: 80, wisdom: 60 } },
          effects: {
            stats: { medical: 15, wisdom: 8 },
            relationships: { jiZhiyuan: 25, jiShunying: 20 },
            unlock: ["ancient_medicine", "treatment_plan"],
            nextScene: "3-3"
          }
        },
        {
          id: "c3-2d",
          text: "[情感] 握住她的手：\"舜英，是我...我来救你了\"",
          requirements: { stats: { medical: 72 } },
          effects: {
            relationships: { jiShunying: 25, jiZhiyuan: 10 },
            unlock: ["deep_connection"],
            nextScene: "3-3"
          }
        }
      ]
    },
    {
      id: "3-3",
      background: "manor_study",
      characters: ["rongyu", "jizhiyuan"],
      dialog: [
        {
          character: "jizhiyuan",
          text: "容小姐，我想听听你对纪氏集团的看法。",
          expression: "business"
        },
        {
          character: "narrator",
          text: "书房里，纪止渊展开了一份商业计划书。"
        },
        {
          character: "jizhiyuan",
          text: "舜英昏迷后，集团内部一直不太稳定。如果她能醒来...",
          expression: "serious"
        },
        {
          character: "rongyu",
          text: "（他在试探我的能力和立场）",
          expression: "think"
        }
      ],
      choices: [
        {
          id: "c3-3a",
          text: "[避谈] \"我不懂商业，只专注医术\"",
          effects: {
            relationships: { jiZhiyuan: 2 },
            nextScene: "3-4"
          }
        },
        {
          id: "c3-3b",
          text: "[分析] 指出计划书中的问题和机遇",
          requirements: { stats: { wisdom: 65, modernity: 30 } },
          effects: {
            stats: { wisdom: 8, modernity: 5 },
            relationships: { jiZhiyuan: 15 },
            unlock: ["business_ally"],
            nextScene: "3-4"
          }
        },
        {
          id: "c3-3c",
          text: "[古今结合] \"现代商业可借鉴古代治国理政之道\"",
          requirements: { stats: { wisdom: 70, teaching: 50 } },
          effects: {
            stats: { wisdom: 10, teaching: 8, modernity: 3 },
            relationships: { jiZhiyuan: 20 },
            unlock: ["strategic_advisor"],
            nextScene: "3-4"
          }
        },
        {
          id: "c3-3d",
          text: "[直言] \"纪总，你需要的不是商业建议，而是家人醒来\"",
          requirements: { stats: { charisma: 50 } },
          effects: {
            stats: { charisma: 5 },
            relationships: { jiZhiyuan: 12, jiShunying: 8 },
            nextScene: "3-4"
          }
        }
      ]
    },
    {
      id: "3-4",
      background: "manor_garden",
      characters: ["rongyu", "rongruoya", "guests"],
      dialog: [
        {
          character: "rongruoya",
          text: "姐姐，没想到你这么快就攀上纪家了呢。",
          expression: "jealous"
        },
        {
          character: "narrator",
          text: "花园派对上，容若瑶端着红酒走来，眼神充满敌意。"
        },
        {
          character: "rongruoya",
          text: "不过纪总身边从来不缺女人，姐姐可要小心哦。",
          expression: "mock"
        },
        {
          character: "narrator",
          text: "说着，容若瑶故意将红酒泼向容遇的方向。"
        }
      ],
      choices: [
        {
          id: "c3-4a",
          text: "[闪避] 优雅地侧身躲开",
          requirements: { stats: { charisma: 45 } },
          effects: {
            stats: { charisma: 5 },
            relationships: { rongRuoya: 5, jiZhiyuan: 8 },
            nextScene: "chapter_end"
          }
        },
        {
          id: "c3-4b",
          text: "[反击] \"若瑶，你的嫉妒太明显了\"",
          requirements: { stats: { charisma: 50 } },
          effects: {
            stats: { charisma: 8 },
            relationships: { rongRuoya: 20, jiZhiyuan: 5 },
            nextScene: "chapter_end"
          }
        },
        {
          id: "c3-4c",
          text: "[忍耐] 任由红酒洒在衣服上",
          effects: {
            stats: { charisma: -5 },
            relationships: { rongRuoya: -5, jiZhiyuan: -3 },
            nextScene: "chapter_end"
          }
        },
        {
          id: "c3-4d",
          text: "[智慧化解] \"这酒不错，谢谢妹妹的品鉴推荐\"",
          requirements: { stats: { wisdom: 60, charisma: 48 } },
          effects: {
            stats: { wisdom: 5, charisma: 8, modernity: 3 },
            relationships: { rongRuoya: 15, jiZhiyuan: 12 },
            unlock: ["social_master"],
            nextScene: "chapter_end"
          }
        }
      ]
    }
  ]
};