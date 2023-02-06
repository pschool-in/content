export default {
  label: 'Simple Words',
  id: 'simple-words',
  pdf: 'simple-words.pdf',
  list: [
    {
      id: 'reading-2',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Words List',
        text: [
          'Find below some three-letter words. Get familiar with them.',
          {
            type: 'sitewords',
            text:
              'rat, fly, bed, fox, hat, jug, big, map, red, run, man, cow, may, sad, bag, met, men, the, and, hug, pig, she, bit, let, son, hen, day, cap, sit, one, joy, hit, cat, mat, two, cry, old, sun, bad, hut, tin, try, use, van, oil, bun, few, nut, has, jar, dig, him, ice, jam, jet, ran, fan, fat, dry, dip, aim, spy, you, pin, her, pen, axe, set, key, sin, for, can, ape, cot, law, gun, had, ant, sky, ask, lap, pay, wet, wig, fur, lot, log, rug, run, pet',
            width: 90
          }
        ]
      }
    },
    {
      id: 'jumble',
      type: 'sequence',
      label: '3 letter word',
      commonData: {
        title: 'Connect the blocks to form meaningful word.',
        printTitle: 'Form the word using the letters.'
      },
      data: [
        'rat, fly, bed, fox, hat, jug, big, map, red, run',
        'man, cow, may, sad, bag, met, men, the, and, hug',
        'pig, she, bit, let, son, hen, day, cap, sit, one',
        'joy, hit, cat, mat, two, cry, old, sun, bad, hut',
        'tin, try, use, van, oil, bun, few, nut, has, jar',
        'dig, him, ice, jam, jet, ran, fan, fat, dry, dip',
        'aim, spy, you, pin, her, pen, axe, set, key, sin',
        'for, can, ape, cot, law, gun, had, ant, sky, ask',
        'lap, pay, wet, wig, fur, lot, log, rug, run, pet'
      ]
    }
  ]
};
