import { ChapterData } from '../../types/game';

export const chapter6: ChapterData = {
  id: 6,
  title: "权力游戏启动",
  scenes: [
    {
      id: "6-1",
      background: "ji_family_meeting_room",
      characters: ["rongyu", "jizhiyuan", "ji_elders", "lanrouxue"],
      dialog: [
        {
          character: "narrator",
          text: "纪氏家族季度会议，这是容遇第一次以纪舜英儿媳身份参加核心决策会议。"
        },
        {
          character: "ji_elder_1",
          text: "今日议题是南方三个城市的地产项目投资方案。各位请看材料。",
          expression: "serious"
        },
        {
          character: "lanrouxue",
          text: "容遇小姐也来旁听了？这可是涉及数亿资金的决策，不是过家家。",
          expression: "mocking"
        },
        {
          character: "jizhiyuan",
          text: "容遇的数学和分析能力有目共睹，她的意见或许很有价值。",
          expression: "supportive"
        },
        {
          character: "narrator",
          text: "会议资料显示三个项目的风险收益模型。凭借前世对经济规律的理解，你隐约看出了一些端倪..."
        },
        {
          character: "rongyu",
          text: "（这些数据背后藏着更深层的市场趋势，我该如何表态？）",
          expression: "analytical"
        }
      ],
      choices: [
        {
          id: "c6-1a",
          text: "[沉默观察] 安静旁听，暗中记录要点分析",
          effects: {
            stats: { wisdom: 3, modernity: 2 },
            nextScene: "6-2"
          }
        },
        {
          id: "c6-1b",
          text: "[礼貌发言] '我只是学生，不敢妄议商业决策'",
          effects: {
            stats: { modernity: 3 },
            relationships: { jiZhiyuan: -5 },
            nextScene: "6-2"
          }
        },
        {
          id: "c6-1c",
          text: "[数据分析] 用数学模型指出方案中的风险漏洞",
          requirements: { stats: { wisdom: 75, modernity: 50 } },
          effects: {
            stats: { wisdom: 10, charisma: 8, modernity: 5 },
            relationships: { jiZhiyuan: 20 },
            unlock: ["business_insight"],
            nextScene: "6-2"
          }
        },
        {
          id: "c6-1d",
          text: "[前瞻建议] 基于宏观经济趋势提出战略性建议",
          requirements: { stats: { wisdom: 85, charisma: 65 } },
          effects: {
            stats: { wisdom: 15, charisma: 12, modernity: 8 },
            relationships: { jiZhiyuan: 30 },
            unlock: ["strategic_advisor", "power_path_unlock"],
            nextScene: "6-2"
          }
        }
      ]
    },
    {
      id: "6-2",
      background: "ji_office",
      characters: ["rongyu", "jizhiyuan"],
      dialog: [
        {
          character: "narrator",
          text: "会议结束后，纪止渊单独留下了你。"
        },
        {
          character: "jizhiyuan",
          text: "容遇，今天你的表现让我刮目相看。你对市场的理解远超同龄人。",
          expression: "impressed"
        },
        {
          character: "rongyu",
          text: "只是恰好读过一些经济学书籍...",
          expression: "modest"
        },
        {
          character: "jizhiyuan",
          text: "不，这不仅仅是理论知识。你有一种...难以言喻的洞察力。",
          expression: "curious"
        },
        {
          character: "narrator",
          text: "他走近几步，眼神中透着探究。'我想邀请你定期参与家族商业决策。你愿意吗？'"
        },
        {
          character: "rongyu",
          text: "（这是深度介入纪家事务的契机，但也可能引起更多关注...）",
          expression: "thoughtful"
        }
      ],
      choices: [
        {
          id: "c6-2a",
          text: "[婉拒] '我还是学生，应该把精力放在学业上'",
          effects: {
            stats: { modernity: 5 },
            relationships: { jiZhiyuan: -10 },
            nextScene: "6-3"
          }
        },
        {
          id: "c6-2b",
          text: "[有条件接受] '可以，但我只提供分析建议，不参与决策'",
          requirements: { stats: { wisdom: 70 } },
          effects: {
            stats: { wisdom: 8, charisma: 5 },
            relationships: { jiZhiyuan: 15 },
            unlock: ["consultant_role"],
            nextScene: "6-3"
          }
        },
        {
          id: "c6-2c",
          text: "[全力投入] '我很荣幸能为纪家贡献力量'",
          requirements: { stats: { charisma: 60, modernity: 45 } },
          effects: {
            stats: { charisma: 10, modernity: 10, wisdom: 5 },
            relationships: { jiZhiyuan: 25 },
            unlock: ["power_core_member"],
            nextScene: "6-3"
          }
        },
        {
          id: "c6-2d",
          text: "[提出条件] '我想要更多接触家族核心信息的权限'",
          requirements: { stats: { charisma: 70, wisdom: 75 } },
          effects: {
            stats: { charisma: 15, wisdom: 8 },
            relationships: { jiZhiyuan: 20 },
            unlock: ["information_access", "power_negotiator"],
            nextScene: "6-3"
          }
        }
      ]
    },
    {
      id: "6-3",
      background: "luxury_restaurant",
      characters: ["rongyu", "lanrouxue", "business_partners"],
      dialog: [
        {
          character: "narrator",
          text: "几天后，在一次商务晚宴上，蓝柔雪主动找上门来。"
        },
        {
          character: "lanrouxue",
          text: "容遇小姐，听说你最近在家族会议上很活跃？年轻人有冲劲是好事。",
          expression: "fake_smile"
        },
        {
          character: "narrator",
          text: "她的话语中暗含挑衅，周围几位商界人士都在观察你的反应。"
        },
        {
          character: "lanrouxue",
          text: "不过商场如战场，单凭课本知识可不够。我当年也是从基层一步步摸爬滚打上来的。",
          expression: "condescending"
        },
        {
          character: "business_partner",
          text: "蓝总说得对，实战经验才是最宝贵的。",
          expression: "echoing"
        },
        {
          character: "narrator",
          text: "这是一次公开的软性挑战，你的应对方式会影响在商界的声誉。"
        },
        {
          character: "rongyu",
          text: "（她在试探我的底线，也在打压我在纪家的影响力...）",
          expression: "calm"
        }
      ],
      choices: [
        {
          id: "c6-3a",
          text: "[谦逊回应] '蓝总说得对，我还有很多要学习的'",
          effects: {
            stats: { modernity: 3 },
            relationships: { jiZhiyuan: -5 },
            nextScene: "6-4"
          }
        },
        {
          id: "c6-3b",
          text: "[巧妙反击] '理论与实践结合才能创新，守旧只会被时代淘汰'",
          requirements: { stats: { charisma: 65, wisdom: 70 } },
          effects: {
            stats: { charisma: 12, wisdom: 5 },
            relationships: { jiZhiyuan: 15 },
            unlock: ["verbal_combat_expert"],
            nextScene: "6-4"
          }
        },
        {
          id: "c6-3c",
          text: "[展示实力] 当场分析最近市场动态，预测未来趋势",
          requirements: { stats: { wisdom: 80, charisma: 70 } },
          effects: {
            stats: { wisdom: 15, charisma: 15, modernity: 8 },
            relationships: { jiZhiyuan: 25 },
            unlock: ["market_prophet", "business_elite"],
            nextScene: "6-4"
          }
        },
        {
          id: "c6-3d",
          text: "[以柔克刚] '每个时代都有新的机遇，我相信年轻人的视角'",
          requirements: { stats: { charisma: 60 } },
          effects: {
            stats: { charisma: 10, modernity: 5 },
            relationships: { jiZhiyuan: 18 },
            nextScene: "6-4"
          }
        }
      ]
    },
    {
      id: "6-4",
      background: "ji_family_study",
      characters: ["rongyu", "jizhiyuan"],
      dialog: [
        {
          character: "narrator",
          text: "深夜，纪止渊书房。他正在处理一份重要的家族内部文件。"
        },
        {
          character: "jizhiyuan",
          text: "容遇，你来得正好。我需要一个值得信任的人帮我分析一些情况。",
          expression: "serious"
        },
        {
          character: "narrator",
          text: "他递过来一份机密报告，内容涉及家族内部的派系分歧。"
        },
        {
          character: "jizhiyuan",
          text: "长辈们在新项目方向上产生了严重分歧。保守派主张稳健，激进派要求快速扩张。",
          expression: "troubled"
        },
        {
          character: "rongyu",
          text: "而你夹在中间...",
          expression: "understanding"
        },
        {
          character: "jizhiyuan",
          text: "是的。蓝柔雪暗中联络了激进派，她想借此扩大自己的势力。容遇，你站在哪一边？",
          expression: "direct"
        },
        {
          character: "narrator",
          text: "这是一个关键的站队时刻，会深刻影响你在纪家的地位和未来发展方向。"
        }
      ],
      choices: [
        {
          id: "c6-4a",
          text: "[保持中立] '我只是学生，不应该介入家族内部纷争'",
          effects: {
            stats: { modernity: 5 },
            relationships: { jiZhiyuan: -15 },
            nextScene: "chapter_6_end"
          }
        },
        {
          id: "c6-4b",
          text: "[支持保守派] '稳健发展才是长久之计，激进扩张风险太大'",
          requirements: { stats: { wisdom: 75 } },
          effects: {
            stats: { wisdom: 10, charisma: 5 },
            relationships: { jiZhiyuan: 20 },
            unlock: ["conservative_supporter"],
            nextScene: "chapter_6_end"
          }
        },
        {
          id: "c6-4c",
          text: "[支持激进派] '时代在变化，纪家需要更大胆的战略'",
          requirements: { stats: { modernity: 55, charisma: 65 } },
          effects: {
            stats: { modernity: 12, charisma: 10 },
            relationships: { jiZhiyuan: 15 },
            unlock: ["reformist_supporter"],
            nextScene: "chapter_6_end"
          }
        },
        {
          id: "c6-4d",
          text: "[提出第三方案] 基于前世经验设计平衡性战略",
          requirements: { stats: { wisdom: 85, charisma: 75 } },
          effects: {
            stats: { wisdom: 18, charisma: 18, modernity: 10 },
            relationships: { jiZhiyuan: 35 },
            unlock: ["strategic_mastermind", "zhiyuan_trust_deepened"],
            nextScene: "chapter_6_end"
          }
        }
      ]
    }
  ]
};