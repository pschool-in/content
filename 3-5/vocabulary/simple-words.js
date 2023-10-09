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
    },
    {
      type: 'completeWord',
      id: 'complete-word',
      label: 'What am I?',
      data: [
        `I'm something you use to write a note, With ink, I help you write. What am I?| PEN
I'm a furry friend who likes to purr, I chase mice and might be a little fur. What am I?|CAT
I'm worn on your head, for a walk or run, I protect your face and head from the hot sun. What am I?| HAT
I'm a small insect that buzzes around, I can give you quite a painful sting, I'm found. What am I?| BEE
I'm a color that's bright and warm, Often associated with a fire's charm. What am I?| RED`,

        `I'm a beverage that's brewed with care, Many enjoy me in the morning, I'm quite rare. What am I?|TEA
I'm a bird that sings a morning song, My feathers are red, and I don't stay long. What am I? | JAY
I'm a tool with teeth that can cut and bite, Used for fixing things, I'm quite a sight. What am I?| SAW
I'm a tiny insect in the air, Some say I bring illness, so beware. What am I?| FLY
I'm a body part that helps you hear, Tiny bones, like a little gear. What am I?| EAR`,

        `I'm a small rodent, I like to hide, In tunnels underground, where I reside. What am I?| RAT
I'm a tool with a sharp edge used for cutting. What am I?| AXE
I'm a large body of water that separates continents. What am I?| SEA
I'm what you do when you're tired. What am I?| NAP
I'm a young human. What am I?| KID`,

        `I'm a part of your face above your nose. What am I?|LIP
        I'm an insect, tiny and black, I can give you a painful attack. What am I?|ANT
I'm what you find on your feet and the bottom of a chair. What am I?|LEG
I'm a tool, I turn and screw, Handy in fixing things, it's true. What am I? |NUT
I'm a furry pet, with a wagging tail, Love to fetch, and I'll never fail. What am I?|DOG`
      ]
    }
  ]
};
