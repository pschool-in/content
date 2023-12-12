export default {
  label: '5 Letter Words 2',
  id: '5-letter-words-2',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Words List',
        text: [
          `Find below some basic five-letter words. Get familiar with them.`,
          {
            type: 'sitewords',
            text: `above,admit,adult,after,agree,alarm,alone,among,anger,angry,apply,avoid,basic,birth,blame,blind,blood,bread,check,child,class,clean,clock,count,court,crime,cross,daily,dance,death,delay,doubt,drama,dress,drive,eight,event,fifth,final,giant,glass,globe,grade,grass,green,guest,guide,heart,hotel,house,image,judge,label,later,learn,leave,logic,lucky,magic,money`,
            width: 90
          }
        ]
      }
    },
    {
      id: 'jumble',
      type: 'sequence',
      label: 'Form Words',
      commonData: {
        title: 'Connect the blocks to form a meaningful word.',
        printTitle: 'Form the word using the letters.'
      },
      data: [
        'above, class, glass, music, sorry, visit, birth, fifth, money, solid',
        'adult, count, green | genre, north | thorn, space, waste | sweat, blind, final, mouth, sound',
        'alarm, crime, guest, nurse, speed, wheel, bread | beard | bared | debar, giant, night | thing, start | tarts',
        'alone, daily, hotel, other, stand, while, check, globe, paper, table',
        'among, delay, label, peace, story, whose, child, grade | raged, point, there | three',
        'angry, doubt, later | alert | alter, phone, sugar, world, clean, grass, press, those'
      ]
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'word',
      data: {
        text: `I'm a confession, a truth laid bare; acknowledging a fault, a burden to share. What am I?|ADMIT
I'm a stage of growth, no longer a youth; mature and responsible, seeking the truth. What am I?|ADULT
I'm a signal of danger, a loud alert; waking you up, disrupting the inert. What am I? |ALARM
I'm a state of solitude, no one around; on my own, in silence profound. What am I?|ALONE
I'm a life force, coursing through veins; a crimson river, immune to stains. What am I? |BLOOD
I'm a baked creation, a staple to eat; a doughy delight, a daily treat. What am I? |BREAD
I'm a youthful being, a student in class; gaining knowledge, attending the mass. What am I? |CHILD`
      }
    },
    {
      id: 'reading-2',
      type: 'passage',
      label: 'Words List - 2',
      data: {
        title: 'Words List',
        text: [
          `Find below more five-letter words. Get familiar with them.`,
          {
            type: 'sitewords',
            text: `mouth,movie,music,night,north,nurse,other,paper,peace,phone,point,power,press,prize,proud,prove,quick,river,round,scale,score,shape,solid,sorry,sound,space,speed,stand,start,story,sugar,sweet,table,taste,teeth,their,there,thing,third,those,today,topic,touch,trade,trust,under,usage,video,visit,waste,wheel,where,which,while,whose,woman,world,worry,yield,youth`,
            width: 90
          }
        ]
      }
    },
    {
      id: 'jumble-2',
      type: 'sequence',
      label: 'Form Words - 2',
      commonData: {
        title: 'Connect the blocks to form a meaningful word.',
        printTitle: 'Form the word using the letters.'
      },
      data: [
        'apply, drama, learn | renal, power, sweet, youth, clock, guide, prize, topic',
        'avoid, dress, leave, proud, taste | state, admit, court, heart | earth | hater, prove, trade',
        'basic, drive | diver, logic, quick, teeth, after | fater, cross, house, river, trust | strut',
        'blame | amble, eight, lucky, round, today, agree | eager, dance | caned, image, scale, under',
        'blood, event, magic, shape | phase | heaps, touch, anger | range, death | hated, judge, score | corse, video',
        'where, woman, worry, yield, movie, their, which, third, usage, thing | night'
      ]
    }
  ]
};
