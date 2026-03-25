import { ChapterData } from '../../types/game';

export const chapter9: ChapterData = {
  id: 9,
  title: '教育成果显现',
  scenes: [
    {
      id: '9-1',
      background: 'school_classroom',
      characters: ['rongyu', 'jizhouye', 'teacher_wang', 'classmates'],
      dialog: [
        {
          character: 'narrator',
          text: '期末考试成绩公布，全班都被一个名字震惊了。'
        },
        {
          character: 'teacher_wang',
          text: '纪舟野同学，年级第八名！这是你入学以来最好的成绩！',
          expression: 'amazed'
        },
        {
          character: 'classmate_1',
          text: '不可能吧？那个校霸纪舟野？他不是只会打架吗？',
          expression: 'shocked'
        },
        {
          character: 'jizhouye',
          text: '多亏了容遇...她教会我学习不是为了别人，而是为了自己。',
          expression: 'grateful'
        },
        {
          character: 'narrator',
          text: '纪舟野走到你面前，眼神中满是真诚。'
        },
        {
          character: 'jizhouye',
          text: '容遇，我一直想问你...你为什么愿意帮我？你明明知道我以前是什么样的人。',
          expression: 'serious'
        },
        {
          character: 'rongyu',
          text: '（因为你是我的重孙...但我现在该怎么说？）',
          expression: 'tender'
        }
      ],
      choices: [
        {
          id: 'c9-1a',
          text: '[简单回答] \'因为我看到了你的潜力\'',
          effects: {
            stats: { charisma: 5, education: 5 },
            relationships: { jiZhouye: 10 },
            nextScene: '9-2'
          }
        },
        {
          id: 'c9-1b',
          text: '[教育理念] \'每个人都值得第二次机会\'',
          requirements: { stats: { education: 70 } },
          effects: {
            stats: { education: 12, charisma: 8 },
            relationships: { jiZhouye: 20 },
            unlock: ['education_philosophy'],
            nextScene: '9-2'
          }
        },
        {
          id: 'c9-1c',
          text: '[真诚告白] \'因为我相信你本质上是个好孩子\'',
          requirements: { stats: { charisma: 70, education: 65 } },
          effects: {
            stats: { charisma: 15, education: 10 },
            relationships: { jiZhouye: 30 },
            unlock: ['zhouye_deep_trust'],
            nextScene: '9-2'
          }
        },
        {
          id: 'c9-1d',
          text: '[隐含深意] \'因为...我对你有特殊的感情\'',
          requirements: { stats: { charisma: 75, education: 70 } },
          effects: {
            stats: { charisma: 20, education: 12 },
            relationships: { jiZhouye: 40 },
            unlock: ['zhouye_emotional_confession', 'romance_deepened'],
            nextScene: '9-2'
          }
        }
      ]
    },
    {
      id: '9-2',
      background: 'university_lecture_hall',
      characters: ['rongyu', 'professor_liu', 'students'],
      dialog: [
        {
          character: 'narrator',
          text: '大学教学楼，你的教育理念引起了教育学教授的注意。'
        },
        {
          character: 'professor_liu',
          text: '容遇同学，我听说了你对纪舟野的教育转化案例。你的方法很独特。',
          expression: 'interested'
        },
        {
          character: 'rongyu',
          text: '谢谢教授。我只是觉得传统教育过于注重结果，忽略了学生的心理成长。',
          expression: 'thoughtful'
        },
        {
          character: 'professor_liu',
          text: '能否详细谈谈你的教育理念？我想邀请你在下周的教育论坛上分享。',
          expression: 'earnest'
        },
        {
          character: 'narrator',
          text: '这是一个展示你教育思想的机会，也可能引起教育界的关注。'
        }
      ],
      choices: [
        {
          id: 'c9-2a',
          text: '[谦虚拒绝] \'我还是学生，经验不足\'',
          effects: {
            stats: { modernity: 5 },
            nextScene: '9-3'
          }
        },
        {
          id: 'c9-2b',
          text: '[接受邀请] \'我愿意分享，希望能帮助更多人\'',
          requirements: { stats: { education: 70 } },
          effects: {
            stats: { education: 15, charisma: 10 },
            unlock: ['education_speaker'],
            nextScene: '9-3'
          }
        },
        {
          id: 'c9-2c',
          text: '[系统阐述] 详细解释你的全人教育理念',
          requirements: { stats: { education: 80, wisdom: 75 } },
          effects: {
            stats: { education: 25, wisdom: 15, charisma: 15 },
            unlock: ['education_theorist', 'academic_influence'],
            nextScene: '9-3'
          }
        },
        {
          id: 'c9-2d',
          text: '[前瞻提议] 建议创办实验性教育项目',
          requirements: { stats: { education: 85, charisma: 80 } },
          effects: {
            stats: { education: 30, charisma: 20, modernity: 15 },
            unlock: ['education_reformer', 'project_founder'],
            nextScene: '9-3'
          }
        }
      ]
    },
    {
      id: '9-3',
      background: 'ji_family_study',
      characters: ['rongyu', 'jishunying', 'jizhiyuan'],
      dialog: [
        {
          character: 'narrator',
          text: '纪舜英康复后第一次正式接见你，纪止渊也在场。'
        },
        {
          character: 'jishunying',
          text: '容遇，我听说了你对舟野的教育。这孩子变化很大。',
          expression: 'impressed'
        },
        {
          character: 'jizhiyuan',
          text: '不只是舟野，容遇在很多方面都展现出了非凡的能力。',
          expression: 'proud'
        },
        {
          character: 'jishunying',
          text: '容遇...我总觉得你很熟悉，就像...很久以前就认识你一样。',
          expression: 'puzzled'
        },
        {
          character: 'narrator',
          text: '他的眼神带着探究，仿佛在试图唤起某些深埋的记忆。'
        },
        {
          character: 'rongyu',
          text: '（他在潜意识里感应到了什么...我该如何应对？）',
          expression: 'nervous'
        }
      ],
      choices: [
        {
          id: 'c9-3a',
          text: '[转移话题] \'可能是因为我们都关心舟野吧\'',
          effects: {
            stats: { modernity: 5 },
            relationships: { jiShunying: 5 },
            nextScene: '9-4'
          }
        },
        {
          id: 'c9-3b',
          text: '[模糊回应] \'也许人与人之间真的有缘分\'',
          requirements: { stats: { charisma: 70 } },
          effects: {
            stats: { charisma: 10 },
            relationships: { jiShunying: 15 },
            nextScene: '9-4'
          }
        },
        {
          id: 'c9-3c',
          text: '[暗示真相] \'有些羁绊超越了时空...\'',
          requirements: { stats: { wisdom: 75, charisma: 75 } },
          effects: {
            stats: { wisdom: 15, charisma: 12 },
            relationships: { jiShunying: 30 },
            unlock: ['spiritual_connection_hinted'],
            nextScene: '9-4'
          }
        },
        {
          id: 'c9-3d',
          text: '[眼神交流] 用眼神传递母子间的默契',
          requirements: { stats: { wisdom: 80, charisma: 80 } },
          effects: {
            stats: { wisdom: 20, charisma: 18 },
            relationships: { jiShunying: 45 },
            unlock: ['silent_recognition_deepened', 'identity_reveal_approaching'],
            nextScene: '9-4'
          }
        }
      ]
    },
    {
      id: '9-4',
      background: 'charity_gala',
      characters: ['rongyu', 'jizhouye', 'jizhiyuan', 'lanrouxue', 'media'],
      dialog: [
        {
          character: 'narrator',
          text: '纪家慈善晚宴，你作为教育顾问出席。'
        },
        {
          character: 'media_reporter',
          text: '容遇小姐，听说您将创办教育改革项目？',
          expression: 'curious'
        },
        {
          character: 'lanrouxue',
          text: '年轻人有想法是好事，但教育可不是玩票的。',
          expression: 'dismissive'
        },
        {
          character: 'jizhouye',
          text: '容遇是最好的老师！她改变了我的人生！',
          expression: 'defending'
        },
        {
          character: 'jizhiyuan',
          text: '纪家全力支持容遇的教育事业。',
          expression: 'supportive'
        },
        {
          character: 'narrator',
          text: '所有人的目光都聚焦在你身上，这是展现你教育理念和获得支持的关键时刻。'
        }
      ],
      choices: [
        {
          id: 'c9-4a',
          text: '[低调回应] \'我只是尽自己的一份力\'',
          effects: {
            stats: { modernity: 5 },
            relationships: { jiZhouye: 5, jiZhiyuan: 5 },
            nextScene: 'chapter_9_end'
          }
        },
        {
          id: 'c9-4b',
          text: '[阐述愿景] 详细说明教育改革的目标和计划',
          requirements: { stats: { education: 80, charisma: 70 } },
          effects: {
            stats: { education: 20, charisma: 15 },
            relationships: { jiZhouye: 20, jiZhiyuan: 20 },
            unlock: ['public_educator'],
            nextScene: 'chapter_9_end'
          }
        },
        {
          id: 'c9-4c',
          text: '[激情演说] 发表关于教育未来的演讲',
          requirements: { stats: { education: 85, charisma: 80 } },
          effects: {
            stats: { education: 30, charisma: 25, modernity: 15 },
            relationships: { jiZhouye: 30, jiZhiyuan: 30 },
            unlock: ['education_visionary', 'media_attention'],
            nextScene: 'chapter_9_end'
          }
        },
        {
          id: 'c9-4d',
          text: '[宣布计划] 当场宣布启动纪家教育基金会',
          requirements: { stats: { education: 90, charisma: 85, wisdom: 80 } },
          effects: {
            stats: { education: 40, charisma: 30, wisdom: 20 },
            relationships: { jiZhouye: 40, jiZhiyuan: 40, jiShunying: 30 },
            unlock: ['foundation_founder', 'education_empire_begin', 'national_influence'],
            nextScene: 'chapter_9_end'
          }
        }
      ]
    }
  ]
};