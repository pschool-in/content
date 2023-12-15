export default {
  label: '6 Letter Words',
  id: '6-letter-words',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Words List',
        text: [
          `Find below some basic six-letter words. Get familiar with them.`,
          {
            type: 'sitewords',
            text: `active, afraid, amount, animal, answer, anyone, appear, attack, attend, author, battle, become, bottle, bottom, branch, bright, burden, camera, charge, circle, coffee, course, damage, danger, degree, demand, device, direct, driver, eleven, energy, enough, export, family, famous, female, follow, forget, future, health, lesson, listen, manner, market, matter`,
            width: 100
          }
        ]
      }
    },
    {
      id: 'jumble',
      type: 'sequence',
      label: 'Form Words',
      commonData: {
        title: 'Connect the blocks to form a meaningful word.'
      },
      data: [
        'active, forget, silver | livers, degree, remain | marine | airmen, bottle, minute, update, middle, twenty',
        'afraid, future, single, device, repair, branch, mother, volume, recent | centre | center, author',
        'animal | lamina | manila, health, speech, direct | credit, report | porter, bright, myself, window, select, damage',
        'anyone, lesson, street | tester, driver, result | rustle | luster, burden | burned, normal, member, talent | latent, follow',
        'appear | rapper, listen | enlist | silent | tinsel, system, eleven, reward | drawer, camera, number, course, prison, attack'
      ]
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'word',
      data: {
        text: `I can be strong or weak, a measure you seek. In ounces or grams, what am I ?|WEIGHT
I'm not a word, but I often speak; I have a presence, but no physique. In a courtroom or class, I take a seat. What am I? |VOICE
I'm a numeric wonder, counting each day, from sunrise to sunset, never going astray. What am I?|NUMBER
I'm a vessel without sails, holding liquid tales. Pour me out to quench your thirst. What am I?|BOTTLE
I'm a moment in time, less than an hour, more than a blink, what am I?|MINUTE
I'm a shining metal, not gold but still bold. In the Olympic games, I'm proudly displayed. What am I?|SILVER
I'm the result of effort, the fruit of labor; you earn me in a job or with a favor. What am I?|SALARY`
      }
    },
    {
      id: 'reading-2',
      type: 'passage',
      label: 'Words List - 2',
      data: {
        title: 'Words List',
        text: [
          `Find below more six-letter words. Get familiar with them.`,
          {
            type: 'sitewords',
            text: `, member, memory, middle, minute, mirror, mother, museum, myself, normal, number, office, online, option, output, please, prison, recent, remain, repair, report, result, reward, salary, school, screen, season, second, select, silver, simple, single, speech, street, strong, summer, system, talent, twenty, update, useful, volume, weight, window, winner, wonder`,
            width: 100
          }
        ]
      }
    },
    {
      id: 'jumble-2',
      type: 'sequence',
      label: 'Form Words - 2',
      commonData: {
        title: 'Connect the blocks to form a meaningful word.'
      },
      data: [
        'attend, manner, useful, energy, salary, charge, office, summer, family, season',
        'battle | tablet, memory, weight, enough, screen, coffee, option, online, answer, matter',
        'become, mirror, winner, famous, second, danger, output, export, school, circle | cleric',
        'bottom, museum, wonder, female, simple, demand, please | asleep, amount, market, strong'
      ]
    }
  ]
};
