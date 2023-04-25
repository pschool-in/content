export default {
  label: '5 Letter Words',
  id: '5-letter-words',
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
            text: `about,actor,again,ahead,alert,apple,argue,audio,award,beach,begin,below,bench,black,brain,break,bring,brown,build,buyer,carry,catch,chain,chair,cheap,clear,close,cover,cream,crowd,cycle,doing,dream,drink,early,earth,empty,enjoy,enter,equal,error,every,faith,false,fiber,fifty,fight,first,floor,force,forty,fresh,great,group,happy,heavy,horse,human,large,laugh,level,limit,lower,lunch,maker,march,match,metal,mixed,model,month,moral,mount,mouse,never,noise,ocean,order,paint,party,place,plant,price,print,proof,queen,right,rough,scene,sense,seven,sharp,shock,since,sixth,sixty,skill,sleep,slide,small,smart,smile,smoke,solve,south,speak,sport,stone,storm,style,super,teach,think,three,tiger,title,total,train,treat,truck,twice,upper,value,voice,watch,water,whole,write,wrong,young`,
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
        'about, write, apple, actor, again, ahead, alert | alter | later, paint, right | girth, small | malls',
        'argue, brown, cream, empty, forty, human, party, rough, solve | loves, smile | limes| miles',
        'beach, buyer, crowd, enter, fresh, level, mount, place, scene, south',
        'bench, carry, cycle, error, great | grate, limit, plant, sense, speak, dream | armed',
        'black, chain | china, doing, faith, group, lower | rowel, never | nerve, price, sharp | harps, sport | ports',
        'brain, clear, fiber | brief, happy, maker, noise, print, shock, stone | notes | onset | tones, month',
        'break | baker | brake, close, drink, fifty, heavy, match, ocean, proof, sixth, three',
        'bring, cover, earth | hater | heart, first | rifts, horse | shore, mixed, order, queen, skill | kills | silks, title',
        'storm, style, super | purse, teach | cheat, think, total, train, truck, voice, tiger',
        'water, build, false, march, sixty, treat, audio, early, large, seven | evens',
        'whole, catch, fight, model, sleep | peels, twice, award, enjoy, laugh, since',
        'wrong | grown, chair, floor, moral, smart, upper, begin | being, equal, lunch, slide',
        'young, cheap | peach, force, mouse, smoke, value, below | bowel | elbow, every, metal, watch'
      ]
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
            text: `above,admit,adult,after,agree,alarm,alone,among,anger,angry,apply,avoid,basic,birth,blame,blind,blood,bread,check,child,class,clean,clock,count,court,crime,cross,daily,dance,death,delay,doubt,drama,dress,drive,eight,event,fifth,final,giant,glass,globe,grade,grass,green,guest,guide,heart,hotel,house,image,judge,label,later,learn,leave,logic,lucky,magic,money,mouth,movie,music,night,north,nurse,other,paper,peace,phone,point,power,press,prize,proud,prove,quick,river,round,scale,score,shape,solid,sorry,sound,space,speed,stand,start,story,sugar,sweet,table,taste,teeth,their,there,thing,third,those,today,topic,touch,trade,trust,under,usage,video,visit,waste,wheel,where,which,while,whose,woman,world,worry,yield,youth`,
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
        'above, class, glass, music, sorry, visit, birth, fifth, money, solid',
        'adult, count, green | genre, north | thorn, space, waste | sweat, blind, final, mouth, sound',
        'alarm, crime, guest, nurse, speed, wheel, bread | beard | bared | debar, giant, night | thing, start | tarts',
        'alone, daily, hotel, other, stand, while, check, globe, paper, table',
        'among, delay, label, peace, story, whose, child, grade | raged, point, there | three',
        'angry, doubt, later | alert | alter, phone, sugar, world, clean, grass, press, those',
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
