import { ChapterData } from '../../types/game';

export const chapter4: ChapterData = {
  id: 4,
  title: "医疗突破线",
  scenes: [
    {
      id: "4-1",
      background: "manor_medical_room",
      characters: ["rongyu", "jizhiyuan", "doctor_chen"],
      dialog: [
        {
          character: "doctor_chen",
          text: "纪总，这位小姐的治疗方案...恕我直言，太过大胆了。",
          expression: "doubt"
        },
        {
          character: "rongyu",
          text: "陈医生，现代医学已经束手无策两年了，为何不试试其他方法？",
          expression: "confident"
        },
        {
          character: "narrator",
          text: "容遇展开了一份详细的治疗计划，结合古代针灸和现代神经学。"
        },
        {
          character: "jizhiyuan",
          text: "容小姐，如果治疗出现意外，你能承担责任吗？",
          expression: "serious"
        }
      ],
      choices: [
        {
          id: "c4-1a",
          text: "[承诺] \"我以性命担保，一定能唤醒她\"",
          requirements: { stats: { medical: 80, charisma: 55 } },
          effects: {
            stats: { medical: 10, charisma: 8 },
            relationships: { jiZhiyuan: 25, jiShunying: 20 },
            unlock: ["high_stakes_treatment"],
            nextScene: "4-2"
          }
        },
        {
          id: "c4-1b",
          text: "[理性] \"医学没有百分百，但我有八成把握\"",
          requirements: { stats: { medical: 78 } },
          effects: {
            stats: { medical: 8, wisdom: 5 },
            relationships: { jiZhiyuan: 18 },
            nextScene: "4-2"
          }
        },
        {
          id: "c4-1c",
          text: "[保守] \"那我们继续观察，等更成熟的时机\"",
          effects: {
            stats: { wisdom: 3 },
            relationships: { jiZhiyuan: 5 },
            nextScene: "4-2"
          }
        },
        {
          id: "c4-1d",
          text: "[详细解释] 用现代医学术语解释治疗原理",
          requirements: { stats: { medical: 85, modernity: 35 } },
          effects: {
            stats: { medical: 12, modernity: 8, teaching: 5 },
            relationships: { jiZhiyuan: 22 },
            unlock: ["medical_authority"],
            nextScene: "4-2"
          }
        }
      ]
    },
    {
      id: "4-2",
      background: "traditional_medicine_shop",
      characters: ["rongyu", "jizhouye", "shopkeeper"],
      dialog: [
        {
          character: "narrator",
          text: "为了配制特殊药方，容遇来到城中最古老的中药铺。"
        },
        {
          character: "shopkeeper",
          text: "姑娘，你要的这几味药材很罕见，尤其是百年雪莲和血龙木。",
          expression: "serious"
        },
        {
          character: "jizhouye",
          text: "我跟你一起去找，妈妈的事，我也要出力。",
          expression: "determined"
        },
        {
          character: "rongyu",
          text: "（这孩子...开始对我敞开心扉了）",
          expression: "smile"
        }
      ],
      choices: [
        {
          id: "c4-2a",
          text: "[独自行动] \"太危险了，我一个人去就好\"",
          effects: {
            stats: { medical: 3 },
            relationships: { jiZhouye: -5 },
            nextScene: "4-3"
          }
        },
        {
          id: "c4-2b",
          text: "[接受] \"好，我们一起去，正好教你识药\"",
          requirements: { stats: { teaching: 45 } },
          effects: {
            stats: { teaching: 8, medical: 5 },
            relationships: { jiZhouye: 15 },
            unlock: ["teaching_bond"],
            nextScene: "4-3"
          }
        },
        {
          id: "c4-2c",
          text: "[替代方案] \"这些药材太难找，我改用其他配方\"",
          requirements: { stats: { medical: 80, wisdom: 65 } },
          effects: {
            stats: { medical: 10, wisdom: 5 },
            relationships: { jiZhouye: 8 },
            nextScene: "4-3"
          }
        },
        {
          id: "c4-2d",
          text: "[现代方法] \"我们可以用现代提取技术代替部分药材\"",
          requirements: { stats: { medical: 82, modernity: 40 } },
          effects: {
            stats: { medical: 12, modernity: 8 },
            relationships: { jiZhouye: 12, jiZhiyuan: 10 },
            unlock: ["modern_medicine_blend"],
            nextScene: "4-3"
          }
        }
      ]
    },
    {
      id: "4-3",
      background: "manor_medical_room_night",
      characters: ["rongyu", "jishu nying"],
      dialog: [
        {
          character: "narrator",
          text: "深夜，医疗室内只有仪器的滴答声。容遇开始实施治疗方案。"
        },
        {
          character: "rongyu",
          text: "舜英，你一定要醒来...我还有很多话想对你说。",
          expression: "emotional"
        },
        {
          character: "narrator",
          text: "银针刺入特定穴位，配合药物缓缓注入，容遇全神贯注。"
        },
        {
          character: "rongyu",
          text: "（她的脉象...开始有微弱的变化了！）",
          expression: "hopeful"
        }
      ],
      choices: [
        {
          id: "c4-3a",
          text: "[继续施针] 按照计划完成全部疗程",
          requirements: { stats: { medical: 85 } },
          effects: {
            stats: { medical: 15 },
            relationships: { jiShunying: 25 },
            unlock: ["treatment_success"],
            nextScene: "4-4"
          }
        },
        {
          id: "c4-3b",
          text: "[谨慎调整] 根据反应微调治疗方案",
          requirements: { stats: { medical: 88, wisdom: 68 } },
          effects: {
            stats: { medical: 18, wisdom: 8 },
            relationships: { jiShunying: 30, jiZhiyuan: 15 },
            unlock: ["perfect_treatment"],
            nextScene: "4-4"
          }
        },
        {
          id: "c4-3c",
          text: "[停止治疗] 反应不对，先暂停观察",
          effects: {
            stats: { wisdom: 5 },
            relationships: { jiZhiyuan: 3 },
            nextScene: "4-4"
          }
        },
        {
          id: "c4-3d",
          text: "[情感呼唤] 边治疗边诉说往事，用情感唤醒",
          requirements: { stats: { medical: 85 } },
          effects: {
            stats: { medical: 15 },
            relationships: { jiShunying: 35, jiZhiyuan: 10 },
            unlock: ["emotional_breakthrough"],
            nextScene: "4-4"
          }
        }
      ]
    },
    {
      id: "4-4",
      background: "manor_medical_room_dawn",
      characters: ["rongyu", "jizhiyuan", "jizhouye", "doctor_chen", "jishu nying"],
      dialog: [
        {
          character: "narrator",
          text: "清晨，阳光透过窗帘洒进医疗室。"
        },
        {
          character: "doctor_chen",
          text: "不可思议！病人的脑电波出现了明显的活跃迹象！",
          expression: "shock"
        },
        {
          character: "jizhiyuan",
          text: "容小姐...你真的做到了。",
          expression: "grateful"
        },
        {
          character: "narrator",
          text: "纪舜英的手指轻微地动了一下，虽然还未完全清醒，但这是两年来第一次自主反应。"
        },
        {
          character: "jizhouye",
          text: "妈妈...妈妈她动了！",
          expression: "cry_happy"
        }
      ],
      choices: [
        {
          id: "c4-4a",
          text: "[冷静] \"这只是第一步，还需要持续治疗\"",
          effects: {
            stats: { wisdom: 5, medical: 5 },
            relationships: { jiZhiyuan: 15 },
            nextScene: "chapter_end"
          }
        },
        {
          id: "c4-4b",
          text: "[欣喜] \"舜英，我就知道你不会放弃\"",
          requirements: { stats: { medical: 85 } },
          effects: {
            stats: { medical: 10 },
            relationships: { jiShunying: 30, jiZhiyuan: 20, jiZhouye: 20 },
            unlock: ["miracle_healer"],
            nextScene: "chapter_end"
          }
        },
        {
          id: "c4-4c",
          text: "[专业] 详细说明后续治疗计划和注意事项",
          requirements: { stats: { medical: 90, teaching: 50 } },
          effects: {
            stats: { medical: 15, teaching: 10 },
            relationships: { jiZhiyuan: 25, jiZhouye: 15 },
            unlock: ["medical_expert"],
            nextScene: "chapter_end"
          }
        },
        {
          id: "c4-4d",
          text: "[谦虚] \"这是古代医术的功劳，我只是继承者\"",
          requirements: { stats: { wisdom: 70 } },
          effects: {
            stats: { wisdom: 8, teaching: 5 },
            relationships: { jiZhiyuan: 18, jiZhouye: 12 },
            unlock: ["ancient_wisdom_bearer"],
            nextScene: "chapter_end"
          }
        }
      ]
    }
  ]
};