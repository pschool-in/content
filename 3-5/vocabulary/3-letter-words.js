export default {
  label: '3 Letter Words',
  id: '3-letter-words',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Words List',
        text: [
          `Find below some basic four letter words. Get familiar with them.`,
          {
            type: 'sitewords',
            text: `act, add, age, ago, aim, air, and, ant, bag, bed, big, box, boy, can, car, cat, cow, dam, den, die, dim, dip, ear, eat, egg, ego, end, fan, far, fat, fin, fox, gas, gem, had, has, hat, hen, her, his, hit, ice, ink, jam, jar, jaw, joy, jug, key, kid, lay, leg, lip, log, low, man, map, mat, may, mud, net, nil, nut, oak, oar, off, oil, one, our, out, owl, own, pad, pay, pen, pet, pig, put, rag, ran, rat, red, rib, rip, row, rug, run, sad, say, sea, see, she, sit, sky, spy, sun, tag, two, van, war, web, who, why, win, yak, yes, you`,
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
        title: 'Connect the blocks to form meaningful word.',
        printTitle: 'Form the word using the letters.'
      },
      data: [
        'ice, air, fan, pen, his, lip, jar, ant, rat, hit',
        'jam, man, den, van, fat, age, red, end, can, win',
        'pay, pig, yes, map, two, egg, box, hen, war, fin',
        'boy, sun, ink, see, cow, oil, big, run, pet, cat',
        'far, act, jaw, aim, rib, log, her, dim, why, and',
        'key, joy, web, say, you, car, ago, fox, nut, sky',
        'add, nil, lay, kid, had, rug, tag, yak, sea, mud',
        'oak, off, put, die, spy, hat, sit, mat, ego, one',
        'dip, gas, ego, rag, jug, bag, may, out, she, oar',
        'sad, ran, our, row, gem, pad, bed, rip'
      ]
      //lake - leak, deal - lead, dear-read, inch - chin, from - form, hate - heat, care - race
    }
  ]
};
