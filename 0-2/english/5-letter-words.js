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
            text: `about,actor,again,ahead,alert,apple,argue,audio,award,beach,begin,below,bench,black,brain,break,bring,brown,build,buyer,carry,catch,chain,chair,cheap,clear,close,cover,cream,crowd,cycle,doing,dream,drink,early,earth,empty,enjoy,enter,equal,error,every,faith,false,fiber,fifty,fight,first,floor,force,forty,fresh,great,group,happy,heavy,horse,human,large,laugh,level,limit,lower,lunch,maker`,
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
        'beach, buyer, crowd, enter, fresh, level, mount, place, scene, south | shout',
        'bench, carry, cycle, error, great | grate, limit, plant, sense, speak, dream | armed',
        'black, chain | china, doing, faith, group, lower | rowel, never | nerve, price, sharp | harps, sport | ports',
        'brain, clear, fiber | brief, happy, maker, noise, print, shock, stone | notes | onset | tones, month',
        'break | baker | brake, close, drink, fifty, heavy, match, ocean, proof, sixth, three'
      ]
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'word',
      data: {
        text: `I'm a recognition, a prize of merit; an acknowledgment received, a success spirit. What am I? |AWARD
I'm a sandy shore, where land meets sea; waves crashing gently, a serene glee. What am I? |BEACH
I'm a shade in the spectrum, a color so dark; absorbing all light, a visual mark. What am I? |BLACK
I'm the command center, the thinking core; processing thoughts, learning more. What am I? |BRAIN
I'm a physical action, a load to bear; lifting a weight, an effort rare. What am I? |CARRY
I'm a seating object, a support to sit; found at a table, a resting fit. What am I?|CHAIR
I'm a mode of transport, a two-wheel glide; pedaling forward, a cycling ride. What am I? |CYCLE`
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
            text: `march,match,metal,mixed,model,month,moral,mount,mouse,never,noise,ocean,order,paint,party,place,plant,price,print,proof,queen,right,rough,scene,sense,seven,sharp,shock,since,sixth,sixty,skill,sleep,slide,small,smart,smile,smoke,solve,south,speak,sport,stone,storm,style,super,teach,think,three,tiger,title,total,train,treat,truck,twice,upper,value,voice,watch,water,whole,write,wrong,young`,
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
        'bring, cover, earth | hater | heart, first | rifts, horse | shore, mixed, order, queen, skill | kills | silks, title',
        'storm, style, super | purse, teach | cheat, think, total, train, truck, voice, tiger',
        'water, build, false, march, sixty, treat, audio, early, large, seven | evens',
        'whole, catch, fight, model, sleep | peels, twice, award, enjoy, laugh, since',
        'wrong | grown, chair, floor, moral, smart, upper, begin | being, equal, lunch, slide',
        'young, cheap | peach, force, mouse, smoke, value, below | bowel | elbow, every, metal, watch'
      ]
    }
  ]
};
