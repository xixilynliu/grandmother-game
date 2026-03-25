import { ChapterData } from '../../types/game';

export const chapter10: ChapterData = {
  id: 10,
  title: '家族选秀大会',
  scenes: [
    {
      id: '10-1',
      background: 'ji_mansion_hall',
      characters: ['rongyu', 'jizhiyuan', 'ji_elders', 'lanrouxue', 'rongruoya'],
      dialog: [
        {
          character: 'narrator',
          text: '纪氏家族决定举办一场复古选秀大会，以展现家族文化底蕴。'
        },
        {
          character: 'ji_grandmother',
          text: '这次选秀不仅是才艺展示，更是考察年轻一代的综合素养。优胜者将获得重要的家族事务参与权。',
          expression: 'authoritative'
        },
        {
          character: 'lanrouxue',
          text: '这是纪家的传统，每一代都会通过这种方式选拔优秀的家族成员。',
          expression: 'confident'
        },
        {
          character: 'rongruoya',
          text: '我已经准备了三个月，这次一定要拿第一名！',
          expression: 'determined'
        },
        {
          character: 'jizhiyuan',
          text: '容遇，你会参加吗？以你的才华，应该很有竞争力。',
          expression: 'encouraging'
        },
        {
          character: 'narrator',
          text: '这是一个关键决策节点，你的选择将深刻影响在纪家的地位和未来走向。'
        },
        {
          character: 'rongyu',
          text: '（这场选秀背后牵涉复杂的权力角逐...我该如何应对？）',
          expression: 'thoughtful'
        }
      ],
      choices: [
        {
          id: 'c10-1a',
          text: '[直接拒绝] \'我对这种形式主义不感兴趣\'',
          effects: {
            stats: { modernity: 5 },
            relationships: { jiZhiyuan: -10 },
            nextScene: '10-2'
          }
        },
        {
          id: 'c10-1b',
          text: '[礼貌婉拒] \'我只是旁系，不适合参加\'',
          effects: {
            stats: { modernity: 3 },
            relationships: { jiZhiyuan: -5 },
            nextScene: '10-2'
          }
        },
        {
          id: 'c10-1c',
          text: '[接受挑战] \'既然是家族传统，我愿意参加\'',
          requirements: { stats: { charisma: 70 } },
          effects: {
            stats: { charisma: 15, modernity: 10 },
            relationships: { jiZhiyuan: 20 },
            unlock: ['competition_participant'],
            nextScene: '10-2'
          }
        },
        {
          id: 'c10-1d',
          text: '[战略参与] \'我参加，并希望借此推动家族现代化\'',
          requirements: { stats: { charisma: 75, wisdom: 75 } },
          effects: {
            stats: { charisma: 20, wisdom: 15, modernity: 15 },
            relationships: { jiZhiyuan: 30 },
            unlock: ['reformist_champion', 'power_game_master'],
            nextScene: '10-2'
          }
        }
      ]
    },
    {
      id: '10-2',
      background: 'preparation_room',
      characters: ['rongyu', 'rongruoya', 'other_contestants'],
      dialog: [
        {
          character: 'narrator',
          text: '选秀准备室，各位参赛者都在做最后准备。'
        },
        {
          character: 'rongruoya',
          text: '容遇表姐，没想到你也来了。不过这次我一定不会输给你。',
          expression: 'competitive'
        },
        {
          character: 'contestant_1',
          text: '容遇小姐的才华大家都知道，我们哪里比得上。',
          expression: 'admiring'
        },
        {
          character: 'rongruoya',
          text: '才华？选秀比的是综合素养！琴棋书画、诗词歌赋，还有家族礼仪！',
          expression: 'defiant'
        },
        {
          character: 'narrator',
          text: '容若瑶显然下了功夫，她的信心不是空穴来风。'
        },
        {
          character: 'rongyu',
          text: '（前世我精通的是现代知识，古典才艺反而不如她...）',
          expression: 'concerned'
        }
      ],
      choices: [
        {
          id: 'c10-2a',
          text: '[谦虚回应] \'若瑶准备充分，我向你学习\'',
          effects: {
            stats: { modernity: 3 },
            relationships: { rongRuoya: 5 },
            nextScene: '10-3'
          }
        },
        {
          id: 'c10-2b',
          text: '[平静应对] \'各凭本事，公平竞争\'',
          requirements: { stats: { charisma: 70 } },
          effects: {
            stats: { charisma: 8 },
            nextScene: '10-3'
          }
        },
        {
          id: 'c10-2c',
          text: '[展现自信] \'真正的素养不仅在形式，更在内涵\'',
          requirements: { stats: { charisma: 75, wisdom: 70 } },
          effects: {
            stats: { charisma: 15, wisdom: 10 },
            unlock: ['philosophical_competitor'],
            nextScene: '10-3'
          }
        },
        {
          id: 'c10-2d',
          text: '[暗中准备] 快速制定应对各项比试的策略',
          requirements: { stats: { wisdom: 80, charisma: 75 } },
          effects: {
            stats: { wisdom: 18, charisma: 12 },
            unlock: ['strategic_genius', 'quick_adaptation'],
            nextScene: '10-3'
          }
        }
      ]
    },
    {
      id: '10-3',
      background: 'competition_stage',
      characters: ['rongyu', 'rongruoya', 'judges', 'ji_family_members'],
      dialog: [
        {
          character: 'narrator',
          text: '选秀正式开始。第一轮：琴艺。'
        },
        {
          character: 'judge_elder',
          text: '请各位参赛者依次演奏。评分标准：技巧、情感、创新。',
          expression: 'serious'
        },
        {
          character: 'narrator',
          text: '容若瑶演奏了一首传统古曲，技巧娴熟，赢得满堂喝彩。'
        },
        {
          character: 'rongruoya',
          text: '这是我苦练三年的《高山流水》，请各位长辈指教。',
          expression: 'proud'
        },
        {
          character: 'narrator',
          text: '轮到你了。你会如何应对这个挑战？'
        },
        {
          character: 'rongyu',
          text: '（传统古曲我不精通，但我可以...）',
          expression: 'determined'
        }
      ],
      choices: [
        {
          id: 'c10-3a',
          text: '[放弃这轮] \'我对古琴不够精通，这轮弃权\'',
          effects: {
            stats: { modernity: 5 },
            nextScene: '10-4'
          }
        },
        {
          id: 'c10-3b',
          text: '[勉强尝试] 演奏一首简单的曲目',
          effects: {
            stats: { charisma: 3 },
            nextScene: '10-4'
          }
        },
        {
          id: 'c10-3c',
          text: '[创新演绎] 用古琴演奏现代改编曲目',
          requirements: { stats: { charisma: 75, modernity: 70 } },
          effects: {
            stats: { charisma: 18, modernity: 15 },
            unlock: ['artistic_innovation'],
            nextScene: '10-4'
          }
        },
        {
          id: 'c10-3d',
          text: '[惊艳全场] 即兴创作融合中西的全新曲目',
          requirements: { stats: { charisma: 85, wisdom: 80, modernity: 75 } },
          effects: {
            stats: { charisma: 30, wisdom: 20, modernity: 20 },
            unlock: ['musical_genius', 'cultural_bridge'],
            nextScene: '10-4'
          }
        }
      ]
    },
    {
      id: '10-4',
      background: 'competition_final',
      characters: ['rongyu', 'rongruoya', 'lanrouxue', 'ji_elders', 'jizhiyuan'],
      dialog: [
        {
          character: 'narrator',
          text: '经过多轮比试，你和容若瑶并列第一，进入最终对决：即席演讲。'
        },
        {
          character: 'ji_grandmother',
          text: '题目是：如何看待传统与现代的关系？请两位阐述自己的见解。',
          expression: 'expectant'
        },
        {
          character: 'rongruoya',
          text: '传统是根基，必须坚守。现代化不能以抛弃传统为代价！',
          expression: 'passionate'
        },
        {
          character: 'narrator',
          text: '她的发言获得了保守派长辈的赞赏。现在轮到你了。'
        },
        {
          character: 'lanrouxue',
          text: '（看你怎么说，说错一句话就会得罪人）',
          expression: 'mocking'
        },
        {
          character: 'rongyu',
          text: '（这是关键时刻，我的回答将决定胜负和未来在纪家的地位...）',
          expression: 'focused'
        }
      ],
      choices: [
        {
          id: 'c10-4a',
          text: '[附和传统] \'我同意若瑶的观点，传统至上\'',
          effects: {
            stats: { modernity: -5 },
            nextScene: 'chapter_10_end'
          }
        },
        {
          id: 'c10-4b',
          text: '[中庸之道] \'传统和现代应该平衡发展\'',
          requirements: { stats: { wisdom: 75 } },
          effects: {
            stats: { wisdom: 15, charisma: 10 },
            nextScene: 'chapter_10_end'
          }
        },
        {
          id: 'c10-4c',
          text: '[辩证分析] 深入阐述传统与现代的辩证关系',
          requirements: { stats: { wisdom: 85, charisma: 80 } },
          effects: {
            stats: { wisdom: 25, charisma: 20, modernity: 15 },
            relationships: { jiZhiyuan: 30 },
            unlock: ['philosophical_orator', 'intellectual_leader'],
            nextScene: 'chapter_10_end'
          }
        },
        {
          id: 'c10-4d',
          text: '[惊世演说] 提出创造性转化、创新性发展的理念',
          requirements: { stats: { wisdom: 90, charisma: 90, modernity: 80 } },
          effects: {
            stats: { wisdom: 35, charisma: 35, modernity: 25 },
            relationships: { jiZhiyuan: 50, jiShunying: 40 },
            unlock: ['visionary_leader', 'family_reformer', 'competition_champion', 'power_consolidation'],
            nextScene: 'chapter_10_end'
          }
        }
      ]
    }
  ]
};