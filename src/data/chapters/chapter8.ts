import { ChapterData } from '../../types/game';

export const chapter8: ChapterData = {
  id: 8,
  title: '纪舜英的苏醒征兆',
  scenes: [
    {
      id: '8-1',
      background: 'hospital_vip_ward',
      characters: ['rongyu', 'doctor_chen', 'jizhiyuan'],
      dialog: [
        {
          character: 'narrator',
          text: '医院VIP病房，陈医生带来了令人振奋的消息。'
        },
        {
          character: 'doctor_chen',
          text: '各位，纪舜英先生的脑部扫描显示出了积极信号。某些区域开始出现活跃迹象。',
          expression: 'excited'
        },
        {
          character: 'jizhiyuan',
          text: '这意味着什么？父亲有可能苏醒？',
          expression: 'hopeful'
        },
        {
          character: 'doctor_chen',
          text: '有可能，但需要新的治疗方案。我想听听容遇小姐的意见，她之前的建议都很有见地。',
          expression: 'respectful'
        },
        {
          character: 'narrator',
          text: '医生展示了几个治疗方案的对比数据，每个方案都有不同的风险收益比。'
        },
        {
          character: 'rongyu',
          text: '（这是关键时刻，我前世的医学知识现在派上用场了...）',
          expression: 'focused'
        }
      ],
      choices: [
        {
          id: 'c8-1a',
          text: '[保守疗法] \'建议继续观察，不要冒险使用激进疗法\'',
          effects: {
            stats: { medical: 5 },
            relationships: { jiZhiyuan: 5 },
            nextScene: '8-2'
          }
        },
        {
          id: 'c8-1b',
          text: '[标准方案] \'按照医学指南推荐的标准疗法进行\'',
          requirements: { stats: { medical: 65 } },
          effects: {
            stats: { medical: 10, wisdom: 5 },
            relationships: { jiZhiyuan: 10 },
            nextScene: '8-2'
          }
        },
        {
          id: 'c8-1c',
          text: '[创新结合] 结合现代医学与传统康复理念',
          requirements: { stats: { medical: 75, wisdom: 70 } },
          effects: {
            stats: { medical: 15, wisdom: 10 },
            relationships: { jiZhiyuan: 20, jiShunying: 20 },
            unlock: ['medical_innovation'],
            nextScene: '8-2'
          }
        },
        {
          id: 'c8-1d',
          text: '[前瞻性方案] 基于前世经验提出超前的综合治疗方案',
          requirements: { stats: { medical: 85, wisdom: 80 } },
          effects: {
            stats: { medical: 25, wisdom: 15 },
            relationships: { jiZhiyuan: 30, jiShunying: 30 },
            unlock: ['medical_genius', 'shunying_awakening_accelerated'],
            nextScene: '8-2'
          }
        }
      ]
    },
    {
      id: '8-2',
      background: 'hospital_ward_night',
      characters: ['rongyu', 'jishunying'],
      dialog: [
        {
          character: 'narrator',
          text: '深夜，你独自守在纪舜英的病床前。新的治疗方案刚刚实施。'
        },
        {
          character: 'rongyu',
          text: '英宝...妈妈在这里。你能听到吗？',
          expression: 'tender'
        },
        {
          character: 'narrator',
          text: '你轻声唤着那个只有母子间才知道的昵称，握着他冰凉的手。'
        },
        {
          character: 'rongyu',
          text: '（前世我临终前，你也是这样握着我的手...现在轮到我守护你了）',
          expression: 'emotional'
        },
        {
          character: 'narrator',
          text: '突然，监护仪的数值开始轻微波动，纪舜英的手指似乎动了一下！'
        },
        {
          character: 'rongyu',
          text: '英宝？你听到我说话了吗？',
          expression: 'excited'
        },
        {
          character: 'narrator',
          text: '他的眼球在眼皮下快速转动，像是在做梦，或是在努力苏醒...'
        }
      ],
      choices: [
        {
          id: 'c8-2a',
          text: '[继续呼唤] 温柔地继续呼唤他的名字',
          effects: {
            stats: { medical: 5 },
            relationships: { jiShunying: 15 },
            nextScene: '8-3'
          }
        },
        {
          id: 'c8-2b',
          text: '[回忆往事] 讲述他小时候的故事',
          requirements: { stats: { medical: 70 } },
          effects: {
            stats: { medical: 10 },
            relationships: { jiShunying: 25 },
            unlock: ['memory_connection'],
            nextScene: '8-3'
          }
        },
        {
          id: 'c8-2c',
          text: '[血脉呼唤] 用只有母子知道的秘密暗语',
          requirements: { stats: { medical: 75, wisdom: 75 } },
          effects: {
            stats: { medical: 15, wisdom: 10 },
            relationships: { jiShunying: 35 },
            unlock: ['blood_bond_awakened', 'secret_revealed'],
            nextScene: '8-3'
          }
        },
        {
          id: 'c8-2d',
          text: '[医学配合] 同时进行科学的感官刺激',
          requirements: { stats: { medical: 80 } },
          effects: {
            stats: { medical: 20, wisdom: 8 },
            relationships: { jiShunying: 30 },
            unlock: ['medical_expertise_proven'],
            nextScene: '8-3'
          }
        }
      ]
    },
    {
      id: '8-3',
      background: 'hospital_ward_dawn',
      characters: ['rongyu', 'jishunying', 'jizhiyuan', 'doctor_chen'],
      dialog: [
        {
          character: 'narrator',
          text: '黎明时分，纪舜英的生命体征出现了更明显的变化。'
        },
        {
          character: 'doctor_chen',
          text: '不可思议！他的脑电波显示出清醒前的典型模式！',
          expression: 'amazed'
        },
        {
          character: 'jizhiyuan',
          text: '父亲...真的要醒了吗？容遇，你昨晚做了什么？',
          expression: 'shocked'
        },
        {
          character: 'rongyu',
          text: '我只是...和他说话。也许他一直都能听见。',
          expression: 'modest'
        },
        {
          character: 'narrator',
          text: '纪舜英的手指开始有规律地抽动，眼皮在颤动，像是在努力睁开眼睛。'
        },
        {
          character: 'doctor_chen',
          text: '快！继续和他交流，这种刺激对他很重要！',
          expression: 'urgent'
        },
        {
          character: 'narrator',
          text: '这是关键时刻，你的话语可能成为唤醒他的最后推动力。'
        }
      ],
      choices: [
        {
          id: 'c8-3a',
          text: '[温和鼓励] \'纪先生，大家都在等你醒来\'',
          effects: {
            stats: { medical: 5 },
            relationships: { jiShunying: 10, jiZhiyuan: 5 },
            nextScene: '8-4'
          }
        },
        {
          id: 'c8-3b',
          text: '[家人身份] \'舜英，止渊很想你，家里需要你\'',
          requirements: { stats: { medical: 70 } },
          effects: {
            stats: { medical: 10 },
            relationships: { jiShunying: 20, jiZhiyuan: 10 },
            nextScene: '8-4'
          }
        },
        {
          id: 'c8-3c',
          text: '[母子暗语] 用只有母子才知道的特殊话语',
          requirements: { stats: { medical: 80, wisdom: 75 } },
          effects: {
            stats: { medical: 18, wisdom: 12 },
            relationships: { jiShunying: 40, jiZhiyuan: 15 },
            unlock: ['mother_son_recognition_beginning'],
            nextScene: '8-4'
          }
        },
        {
          id: 'c8-3d',
          text: '[情感冲击] \'英宝，妈妈来找你了，快睁开眼睛\'',
          requirements: { stats: { medical: 85, charisma: 70 } },
          effects: {
            stats: { medical: 25, charisma: 15, wisdom: 10 },
            relationships: { jiShunying: 50, jiZhiyuan: 20 },
            unlock: ['awakening_miracle', 'identity_crisis_triggered'],
            nextScene: '8-4'
          }
        }
      ]
    },
    {
      id: '8-4',
      background: 'hospital_ward',
      characters: ['rongyu', 'jishunying', 'jizhiyuan', 'doctor_chen', 'nurses'],
      dialog: [
        {
          character: 'narrator',
          text: '奇迹发生了！纪舜英的眼睛缓缓睁开，虽然还很虚弱，但意识明显在恢复。'
        },
        {
          character: 'jishunying',
          text: '我...这是...哪里？',
          expression: 'weak'
        },
        {
          character: 'jizhiyuan',
          text: '父亲！你终于醒了！',
          expression: 'crying_with_joy'
        },
        {
          character: 'doctor_chen',
          text: '纪先生，你昏迷了很长时间。现在慢慢来，不要急。',
          expression: 'professional'
        },
        {
          character: 'narrator',
          text: '纪舜英的目光在病房里扫视，当看到容遇时，眼神停留了更久...'
        },
        {
          character: 'jishunying',
          text: '你是...你的眼神...好熟悉...',
          expression: 'confused'
        },
        {
          character: 'narrator',
          text: '他虽然意识还模糊，但似乎在某种深层次上感应到了什么。你需要决定如何应对这个微妙时刻。'
        }
      ],
      choices: [
        {
          id: 'c8-4a',
          text: '[保持距离] 退后让医生和家人处理',
          effects: {
            stats: { modernity: 5 },
            relationships: { jiShunying: 5, jiZhiyuan: 5 },
            nextScene: 'chapter_8_end'
          }
        },
        {
          id: 'c8-4b',
          text: '[正式介绍] \'我是容遇，您儿媳的远房亲戚\'',
          requirements: { stats: { charisma: 65 } },
          effects: {
            stats: { charisma: 8, modernity: 5 },
            relationships: { jiShunying: 15, jiZhiyuan: 10 },
            nextScene: 'chapter_8_end'
          }
        },
        {
          id: 'c8-4c',
          text: '[温柔回应] \'您好好休息，我会一直陪着您\'',
          requirements: { stats: { medical: 75, charisma: 70 } },
          effects: {
            stats: { medical: 15, charisma: 10 },
            relationships: { jiShunying: 30, jiZhiyuan: 15 },
            unlock: ['guardian_angel'],
            nextScene: 'chapter_8_end'
          }
        },
        {
          id: 'c8-4d',
          text: '[眼神交流] 用眼神传递只有母子才懂的讯息',
          requirements: { stats: { medical: 85, wisdom: 80 } },
          effects: {
            stats: { medical: 20, wisdom: 15, charisma: 12 },
            relationships: { jiShunying: 45, jiZhiyuan: 18 },
            unlock: ['silent_recognition', 'awakening_complete', 'identity_reveal_imminent'],
            nextScene: 'chapter_8_end'
          }
        }
      ]
    }
  ]
};