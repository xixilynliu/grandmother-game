import { ChapterData } from '../../types/game';

export const chapter1: ChapterData = {
  id: 1,
  title: "重生宴会",
  scenes: [
    {
      id: "1-1",
      background: "banquet_hall",
      characters: ["rongyu", "rongruoya"],
      dialog: [
        {
          character: "rongruoya",
          text: "姐姐，原来你在这啊，姐姐你快尝尝啊。",
          expression: "smile"
        },
        {
          character: "rongruoya", 
          text: "诶，手滑了，不过这么好的红酒，姐姐你在乡下长大反正也喝不惯吧。",
          expression: "mock"
        }
      ],
      choices: [
        {
          id: "c1-1a",
          text: "[忍耐] \"没关系，我确实不太懂红酒\"",
          effects: {
            stats: { charisma: -3 },
            relationships: { rongRuoya: -5, jiZhiyuan: -3 },
            nextScene: "1-2"
          }
        },
        {
          id: "c1-1b",
          text: "[反击] 反泼回去：\"我也手滑\"",
          requirements: { stats: { charisma: 20 } },
          effects: {
            stats: { charisma: 5 },
            relationships: { jiZhiyuan: 5, rongRuoya: 10 },
            nextScene: "1-2"
          }
        },
        {
          id: "c1-1c",
          text: "[智慧] 学术点评：\"这酒产自法国波尔多...\"",
          requirements: { stats: { wisdom: 40 } },
          effects: {
            stats: { wisdom: 3, modernity: 2 },
            relationships: { jiZhiyuan: 8 },
            nextScene: "1-2"
          }
        }
      ]
    },
    {
      id: "1-2",
      background: "banquet_stairs",
      characters: ["rongyu", "rongruoya", "jizhiyuan"],
      dialog: [
        {
          character: "rongyu",
          text: "这人好像......有种熟悉的感觉。",
          expression: "think"
        },
        {
          character: "narrator",
          text: "纪止渊带着一群人从楼下的大门走进大厅。"
        }
      ],
      choices: [
        {
          id: "c1-2a",
          text: "[观察] 先在人群中观察情况",
          effects: {
            stats: { wisdom: 2 },
            nextScene: "1-3"
          }
        },
        {
          id: "c1-2b", 
          text: "[主动] 直接上前询问纪止渊",
          effects: {
            stats: { charisma: 3 },
            relationships: { jiZhiyuan: 5 },
            nextScene: "1-3"
          }
        }
      ]
    },
    {
      id: "1-3",
      background: "banquet_main",
      characters: ["rongyu", "jizhiyuan", "rongwangtian"],
      dialog: [
        {
          character: "rongyu",
          text: "你和纪舜英是什么关系？",
          expression: "serious"
        },
        {
          character: "rongwangtian",
          text: "纪总，不好意思啊。她是我的女儿，从小在农村长大，不懂规矩。",
          expression: "panic"
        }
      ],
      choices: [
        {
          id: "c1-3a",
          text: "[追问] \"纪舜英还活着吗？\"",
          effects: {
            relationships: { jiZhiyuan: 8, rongRuoya: 5 },
            nextScene: "1-4"
          }
        },
        {
          id: "c1-3b",
          text: "[保守] \"抱歉，我认错人了\"",
          effects: {
            stats: { wisdom: 2 },
            nextScene: "1-4" 
          }
        }
      ]
    },
    {
      id: "1-4",
      background: "rongyu_room",
      characters: ["rongyu"],
      dialog: [
        {
          character: "rongyu",
          text: "看来还是没完全习惯这具身体...这个身体的记忆力有个能知晓万物的东西叫手机。",
          expression: "think"
        },
        {
          character: "narrator", 
          text: "容遇用手机查询纪舜英的信息，发现了惊人的真相。"
        }
      ],
      choices: [
        {
          id: "c1-4a",
          text: "[查询] 深入搜索纪氏家族信息",
          effects: {
            stats: { modernity: 5, wisdom: 3 },
            unlock: ["family_research"],
            nextScene: "chapter_end"
          }
        },
        {
          id: "c1-4b",
          text: "[休息] 先适应新环境",
          effects: {
            stats: { modernity: 3 },
            nextScene: "chapter_end"
          }
        }
      ]
    }
  ]
};