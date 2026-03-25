import { ChapterData } from '../../types/game';

export const chapter2: ChapterData = {
  id: 2,
  title: "校园生活初体验",
  scenes: [
    {
      id: "2-1",
      background: "school_office",
      characters: ["rongyu", "teacher_zhang"],
      dialog: [
        {
          character: "teacher_zhang",
          text: "容遇同学，根据你的入学测试成绩，校方建议你转到理科重点班。",
          expression: "serious"
        },
        {
          character: "teacher_zhang",
          text: "那个班的学生都是全省顶尖的，竞争很激烈，你要考虑清楚。",
          expression: "concern"
        },
        {
          character: "rongyu",
          text: "（这具身体的基础教育还算不错，但理科班...会遇到纪舟野）",
          expression: "think"
        }
      ],
      choices: [
        {
          id: "c2-1a",
          text: "[接受] \"我愿意尝试，请帮我办理转班手续\"",
          effects: {
            stats: { wisdom: 5, modernity: 3 },
            relationships: { jiZhouye: 5 },
            unlock: ["academic_route"],
            nextScene: "2-2"
          }
        },
        {
          id: "c2-1b",
          text: "[谨慎] \"我想先适应一段时间再决定\"",
          effects: {
            stats: { wisdom: 2 },
            nextScene: "2-2"
          }
        },
        {
          id: "c2-1c",
          text: "[自信] \"理科班？我会证明自己的实力\"",
          requirements: { stats: { charisma: 35 } },
          effects: {
            stats: { charisma: 5, wisdom: 3 },
            relationships: { jiZhouye: 3 },
            unlock: ["academic_route"],
            nextScene: "2-2"
          }
        }
      ]
    },
    {
      id: "2-2",
      background: "classroom_science",
      characters: ["rongyu", "teacher_wang", "jizhou ye", "classmates"],
      dialog: [
        {
          character: "teacher_wang",
          text: "今天我们来讲一道数学竞赛题，这道题涉及微积分的应用。",
          expression: "teaching"
        },
        {
          character: "narrator",
          text: "黑板上的题目让全班陷入沉思，这是一道超纲的难题。"
        },
        {
          character: "jizhouye",
          text: "（轻蔑地看向容遇）农村来的还敢坐理科班？",
          expression: "mock"
        },
        {
          character: "teacher_wang",
          text: "有谁愿意上来试试？容遇同学，你要不要试试？",
          expression: "encourage"
        }
      ],
      choices: [
        {
          id: "c2-2a",
          text: "[展现实力] 上台完美解答，并讲解三种方法",
          requirements: { stats: { wisdom: 55 } },
          effects: {
            stats: { wisdom: 8, charisma: 5, teaching: 5 },
            relationships: { jiZhouye: -10, jiZhiyuan: 5 },
            unlock: ["math_genius"],
            nextScene: "2-3"
          }
        },
        {
          id: "c2-2b",
          text: "[低调] \"抱歉老师，我还需要时间思考\"",
          effects: {
            stats: { wisdom: 1 },
            relationships: { jiZhouye: 5 },
            nextScene: "2-3"
          }
        },
        {
          id: "c2-2c",
          text: "[适度展现] 解出答案但不过分张扬",
          requirements: { stats: { wisdom: 50 } },
          effects: {
            stats: { wisdom: 5, modernity: 2 },
            relationships: { jiZhouye: -5 },
            nextScene: "2-3"
          }
        },
        {
          id: "c2-2d",
          text: "[古代智慧] 用古代数学方法解题",
          requirements: { stats: { wisdom: 60, teaching: 45 } },
          effects: {
            stats: { wisdom: 10, teaching: 8 },
            relationships: { jiZhiyuan: 8 },
            unlock: ["ancient_wisdom"],
            nextScene: "2-3"
          }
        }
      ]
    },
    {
      id: "2-3",
      background: "school_corridor",
      characters: ["rongyu", "jizhouye", "classmates"],
      dialog: [
        {
          character: "jizhouye",
          text: "站住！你以为在课堂上出风头就很了不起？",
          expression: "angry"
        },
        {
          character: "narrator",
          text: "纪舟野带着几个同学堵在走廊，眼神充满敌意。"
        },
        {
          character: "jizhouye",
          text: "我最讨厌你这种装腔作势的人，给我老实点！",
          expression: "threat"
        },
        {
          character: "rongyu",
          text: "（这孩子...和纪舜英长得真像，但性格完全不同）",
          expression: "think"
        }
      ],
      choices: [
        {
          id: "c2-3a",
          text: "[忍让] \"对不起，我不是故意的\"",
          effects: {
            stats: { charisma: -5 },
            relationships: { jiZhouye: 5 },
            nextScene: "2-4"
          }
        },
        {
          id: "c2-3b",
          text: "[强硬] \"你凭什么对我这样说话？\"",
          requirements: { stats: { charisma: 40 } },
          effects: {
            stats: { charisma: 5 },
            relationships: { jiZhouye: -15 },
            nextScene: "2-4"
          }
        },
        {
          id: "c2-3c",
          text: "[智慧化解] \"你担心我抢了你的风头？其实我们可以合作\"",
          requirements: { stats: { wisdom: 55, charisma: 35 } },
          effects: {
            stats: { wisdom: 3, charisma: 5 },
            relationships: { jiZhouye: 10 },
            unlock: ["jizhouye_route"],
            nextScene: "2-4"
          }
        },
        {
          id: "c2-3d",
          text: "[温柔] \"你和纪舜英长得真像...对不起，我想起了一些事\"",
          requirements: { stats: { medical: 65 } },
          effects: {
            relationships: { jiZhouye: 8, jiShunying: 5 },
            unlock: ["family_connection"],
            nextScene: "2-4"
          }
        }
      ]
    },
    {
      id: "2-4",
      background: "school_gate",
      characters: ["rongyu", "jizhouye"],
      dialog: [
        {
          character: "narrator",
          text: "放学后，纪舟野独自等在校门口。"
        },
        {
          character: "jizhouye",
          text: "你...你刚才说我和谁长得像？",
          expression: "curious"
        },
        {
          character: "jizhouye",
          text: "纪舜英...那是我妈妈。她已经昏迷两年了。",
          expression: "sad"
        },
        {
          character: "rongyu",
          text: "（原来如此...这孩子内心其实很脆弱）",
          expression: "understand"
        }
      ],
      choices: [
        {
          id: "c2-4a",
          text: "[安慰] \"她一定会醒来的，我相信\"",
          effects: {
            relationships: { jiZhouye: 10, jiShunying: 3 },
            nextScene: "chapter_end"
          }
        },
        {
          id: "c2-4b",
          text: "[专业] \"昏迷两年...我可能有办法帮她\"",
          requirements: { stats: { medical: 65 } },
          effects: {
            stats: { medical: 5 },
            relationships: { jiZhouye: 15, jiZhiyuan: 10 },
            unlock: ["medical_route"],
            nextScene: "chapter_end"
          }
        },
        {
          id: "c2-4c",
          text: "[保持距离] \"节哀顺变，希望奇迹发生\"",
          effects: {
            relationships: { jiZhouye: 3 },
            nextScene: "chapter_end"
          }
        },
        {
          id: "c2-4d",
          text: "[承诺] \"我会尽全力帮你妈妈，但需要你的配合\"",
          requirements: { stats: { medical: 70, charisma: 40 } },
          effects: {
            stats: { medical: 8, teaching: 5 },
            relationships: { jiZhouye: 20, jiShunying: 8 },
            unlock: ["medical_route", "jizhouye_trust"],
            nextScene: "chapter_end"
          }
        }
      ]
    }
  ]
};
