import { ChapterData } from '../../types/game';

export const chapter5: ChapterData = {
  id: 5,
  title: "学术声名鹊起",
  scenes: [
    {
      id: "5-1",
      background: "school_office",
      characters: ["rongyu", "principal", "teacher_wang"],
      dialog: [
        {
          character: "principal",
          text: "容遇同学，省数学竞赛组委会向我们学校发来了特别邀请。",
          expression: "excited"
        },
        {
          character: "teacher_wang",
          text: "这次竞赛汇集了全省最顶尖的高中生，是展现实力的绝佳机会。",
          expression: "encourage"
        },
        {
          character: "narrator",
          text: "邀请函上，赫然写着'特邀选手'四个字。"
        },
        {
          character: "rongyu",
          text: "（现代教育体系中的竞赛...倒是可以借此提升影响力）",
          expression: "think"
        }
      ],
      choices: [
        {
          id: "c5-1a",
          text: "[接受] \"感谢学校的信任，我会全力以赴\"",
          effects: {
            stats: { wisdom: 5, charisma: 3 },
            unlock: ["competition_route"],
            nextScene: "5-2"
          }
        },
        {
          id: "c5-1b",
          text: "[犹豫] \"我需要时间准备，压力有点大\"",
          effects: {
            stats: { modernity: 2 },
            nextScene: "5-2"
          }
        },
        {
          id: "c5-1c",
          text: "[自信] \"这是我展现古代数学智慧的机会\"",
          requirements: { stats: { wisdom: 70, teaching: 55 } },
          effects: {
            stats: { wisdom: 8, teaching: 8, charisma: 5 },
            unlock: ["ancient_modern_bridge"],
            nextScene: "5-2"
          }
        },
        {
          id: "c5-1d",
          text: "[谦逊] \"我只是想为学校争光，不求个人荣誉\"",
          requirements: { stats: { charisma: 50 } },
          effects: {
            stats: { charisma: 8, wisdom: 3 },
            relationships: { jiZhiyuan: 10 },
            nextScene: "5-2"
          }
        }
      ]
    },
    {
      id: "5-2",
      background: "competition_hall",
      characters: ["rongyu", "jizhouye", "competitors", "judges"],
      dialog: [
        {
          character: "narrator",
          text: "省会大礼堂，数百名顶尖学生齐聚一堂。"
        },
        {
          character: "jizhouye",
          text: "容遇，我们一起加油！这次我要证明自己不比任何人差。",
          expression: "determined"
        },
        {
          character: "narrator",
          text: "竞赛题目公布：一道结合微积分、概率论和数论的综合难题。"
        },
        {
          character: "rongyu",
          text: "（这道题...可以用古代'天元术'的思想来解）",
          expression: "confident"
        }
      ],
      choices: [
        {
          id: "c5-2a",
          text: "[常规解法] 使用标准现代数学方法解题",
          requirements: { stats: { wisdom: 75 } },
          effects: {
            stats: { wisdom: 8, modernity: 5 },
            nextScene: "5-3"
          }
        },
        {
          id: "c5-2b",
          text: "[创新解法] 结合古代数学思想的独特解法",
          requirements: { stats: { wisdom: 85, teaching: 60 } },
          effects: {
            stats: { wisdom: 15, teaching: 10 },
            unlock: ["mathematics_genius"],
            nextScene: "5-3"
          }
        },
        {
          id: "c5-2c",
          text: "[多解法展示] 同时给出三种不同的解题思路",
          requirements: { stats: { wisdom: 90, charisma: 55 } },
          effects: {
            stats: { wisdom: 20, charisma: 10, teaching: 8 },
            unlock: ["master_mathematician"],
            nextScene: "5-3"
          }
        },
        {
          id: "c5-2d",
          text: "[帮助他人] 先帮纪舟野理清思路",
          requirements: { stats: { teaching: 55 } },
          effects: {
            stats: { teaching: 10, wisdom: 5 },
            relationships: { jiZhouye: 25 },
            unlock: ["mentor_path"],
            nextScene: "5-3"
          }
        }
      ]
    },
    {
      id: "5-3",
      background: "competition_hall_stage",
      characters: ["rongyu", "judges", "audience", "media"],
      dialog: [
        {
          character: "narrator",
          text: "颁奖典礼上，容遇的名字响彻全场。"
        },
        {
          character: "judge_professor",
          text: "容遇同学的解法令人耳目一新，将古代数学智慧与现代理论完美结合。",
          expression: "amazed"
        },
        {
          character: "narrator",
          text: "台下，多位大学教授和学术机构的人纷纷递来名片。"
        },
        {
          character: "media_reporter",
          text: "容同学，你如何看待'数学天才少女'这个称号？",
          expression: "curious"
        }
      ],
      choices: [
        {
          id: "c5-3a",
          text: "[谦虚] \"我只是站在巨人的肩膀上\"",
          effects: {
            stats: { charisma: 5, wisdom: 3 },
            relationships: { jiZhiyuan: 12 },
            nextScene: "5-4"
          }
        },
        {
          id: "c5-3b",
          text: "[自信] \"这只是开始，我还有更多想法要实现\"",
          requirements: { stats: { charisma: 60 } },
          effects: {
            stats: { charisma: 10, wisdom: 5 },
            unlock: ["public_figure"],
            nextScene: "5-4"
          }
        },
        {
          id: "c5-3c",
          text: "[传承者] \"我希望能让更多人了解古代数学的魅力\"",
          requirements: { stats: { teaching: 65, wisdom: 80 } },
          effects: {
            stats: { teaching: 15, wisdom: 8, charisma: 8 },
            unlock: ["cultural_ambassador"],
            nextScene: "5-4"
          }
        },
        {
          id: "c5-3d",
          text: "[低调] \"谢谢大家，我更关注学术本身\"",
          requirements: { stats: { modernity: 35 } },
          effects: {
            stats: { wisdom: 8, modernity: 5 },
            relationships: { jiZhiyuan: 15 },
            nextScene: "5-4"
          }
        }
      ]
    },
    {
      id: "5-4",
      background: "manor_study",
      characters: ["rongyu", "jizhiyuan"],
      dialog: [
        {
          character: "jizhiyuan",
          text: "恭喜你，容小姐。现在全省都知道你的名字了。",
          expression: "smile"
        },
        {
          character: "narrator",
          text: "纪止渊的书房里，摆放着今天的所有报纸，头版都是容遇的照片。"
        },
        {
          character: "jizhiyuan",
          text: "舜英如果醒来，看到你的成就，一定会很欣慰。",
          expression: "gentle"
        },
        {
          character: "jizhiyuan",
          text: "容小姐，我想正式邀请你担任纪氏教育基金的学术顾问。",
          expression: "serious"
        }
      ],
      choices: [
        {
          id: "c5-4a",
          text: "[接受] \"我很荣幸，会尽全力帮助更多学生\"",
          effects: {
            stats: { teaching: 10, modernity: 5, charisma: 5 },
            relationships: { jiZhiyuan: 25, jiZhouye: 15 },
            unlock: ["education_advisor"],
            nextScene: "chapter_end"
          }
        },
        {
          id: "c5-4b",
          text: "[条件] \"可以，但我希望能推广古代教育理念\"",
          requirements: { stats: { teaching: 70, charisma: 58 } },
          effects: {
            stats: { teaching: 15, wisdom: 8, charisma: 8 },
            relationships: { jiZhiyuan: 30 },
            unlock: ["ancient_education_reform"],
            nextScene: "chapter_end"
          }
        },
        {
          id: "c5-4c",
          text: "[婉拒] \"我还是想专注学业和医术\"",
          effects: {
            stats: { wisdom: 5, medical: 3 },
            relationships: { jiZhiyuan: 10 },
            nextScene: "chapter_end"
          }
        },
        {
          id: "c5-4d",
          text: "[深层] \"纪总，其实我更在意的是纪夫人何时能完全清醒\"",
          requirements: { stats: { medical: 88 } },
          effects: {
            stats: { medical: 10 },
            relationships: { jiZhiyuan: 35, jiShunying: 25 },
            unlock: ["priority_clarity"],
            nextScene: "chapter_end"
          }
        }
      ]
    }
  ]
};