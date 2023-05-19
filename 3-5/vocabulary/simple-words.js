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
            text: 'rat, fly, bed, fox, hat, jug, big, map, end, red, run, man, cow, may, sad, bag, met, men, the, and, hug, pig, she, bit, let, son, hen, day, cap, sit, one, joy, hit, cat, mat, two, cry, old, sun, bad, hut, tin, try, use, van, oil, bun, few, nut, has, jar, dig, him, ice, jam, jet, ran, fan, fat, dry, dip, aim, spy, you, pin, her, pen, axe, set, key, sin, for, can, ape, cot, law, gun, had, ant, sky, ask, lap, pay, wet, wig, fur, lot, log, rug, run, pet, den, dim, war, raw',
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
        title: 'Connect the blocks to form a meaningful word.',
        printTitle: 'Form the word using the letters.'
      },
      data: [
        'rat | art , fly, bed, fox, hat, jug, big, map, red, run, dim | mid,',
        'man, cow, may | yam, sad, bag, met, men, the, and, hug, war | raw, ',
        'pig, she, bit, let, son, hen, day, cap, sit, one',
        'joy, hit, cat, mat, two, cry, old, sun, bad, hut',
        'tin, try, use | sue, van, oil, bun, few, nut, has | ash, jar',
        'dig, him, ice, jam, jet, ran, fan, fat, dry, dip',
        'aim, spy, you, pin, her, pen, axe, set, key, sin',
        'for, can, ape | pea, cot, law | awl, gun, had, ant | tan, sky, ask',
        'end | den, lap, pay, wet, wig, fur, lot, log, rug, pet'
      ]
    }
  ]
};
