export default {
  label: 'Simple Words',
  id: 'simple-words',
  pdf: 'simple-words.pdf',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: '2 Letter Words',
      data: {
        title: '2 Letter Words',
        text: [
          {
            type: 'sitewords',
            text: 'am, an, as, at, be, he, me, we, in, if, is, it, of, on, or, ox, no, go, so, to, do, up, us, by, my',
            width: 60
          }
        ]
      }
    },
    {
      label: 'Two Letter Words',
      type: 'phonics',
      id: 'phonics-1',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-8.mp3',
        lang: 'basic',
        audioWidth: 1
      },
      data: [
        {
          text: 'am, an, as, at, be, he, me, we, in, if',
          audioOffset: 0
        },
        {
          text: 'is, it, of, on, or, ox, no, go, so, to',
          audioOffset: 10
        },
        {
          text: 'do, up, us, by, my',
          audioOffset: 20
        }
      ]
    },
    {
      id: 'jumble',
      type: 'sequence',
      label: 'Connect Letters',
      commonData: {
        title: 'Connect Letters.',
        printTitle: 'Form the word using the letters.'
      },
      data: [
        'am, an, as, at, be, he, me, we, in, if',
        'is, it, of, on|no, or, ox, go, so, to',
        'do, up, us, by, my'
      ]
    },
    {
      id: 'reading-2',
      type: 'passage',
      label: '3 Letter Words',
      data: {
        title: '3 Letter Words',
        text: [
          'Find below some three-letter words. Get familiar with them.',
          {
            type: 'sitewords',
            text: 'bat, cat, mat, fat, hat, rat, sat, ban, can, man, fan, pan, ran, van, dam, ram, ham, jam, bad, dad, fad, had, mad, lad, pad, sad, cap, lap, map, rap, sap, tap, bag, gag, rag, tag, wag, bar, car, far, jar, bin, fin, pin, tin, sin, win, big, dig, fig, pig, wig, bid, hid, did, kid, lid, rid, bib, nib, fly, bed, fox, jug, end, red, run, cow, may, met, men, the, and, hug, she, bit, let, son, hen, day, sit, one, joy, hit, two, cry, old, sun, hut, try, use, oil, bun, few, nut, has, him, ice, jet, dry, dip, aim, spy, you, her, pen, axe, set, key, for, ape, cot, law, gun, ant, sky, ask, pay, wet, fur, lot, log, rug, pet, den, dim, war, raw',
            width: 90
          }
        ]
      }
    },
    {
      label: 'Three Letter Words',
      type: 'phonics',
      id: 'phonics-2',
      commonData: {
        type: 'words',
        lang: 'basic',
        audioWidth: 1,
        wordsAudio: 'kg-5/phonics/basic-phonics-9.mp3'
      },
      data: [
        {
          text: 'bat, cat, mat, fat, hat, rat, sat, ban, can, man',
          audioOffset: 0
        },
        {
          text: 'fan, pan, ran, van, dam, ram, ham, jam, bad, dad',
          audioOffset: 10
        },
        {
          text: 'fad, had, mad, lad, pad, sad, cap, lap, map, rap',
          audioOffset: 20
        },
        {
          text: 'sap, tap, bag, gag, rag, tag, wag, bar, car, far',
          audioOffset: 30
        },
        {
          text: 'jar, bin, fin, pin, tin, sin, win, big, dig, fig',
          audioOffset: 40
        },
        {
          text: 'pig, wig, bid, hid, did, kid, lid, rid, bib, nib',
          audioOffset: 50
        }
      ]
    },
    {
      id: 'jumble-2',
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
        'joy, hit, cat | act, mat, two, cry, old, sun, bad, hut',
        'tin, try, use | sue, van, oil, bun, few, nut, has | ash, jar',
        'dig, him, ice, jam, jet, ran, fan, fat, dry, dip',
        'aim, spy, you, pin, her, pen, axe, set, key, sin',
        'for, can, ape | pea, cot, law | awl, gun, had, ant | tan, sky, ask',
        'end | den, lap, pay, wet, wig, fur, lot, log, rug, pet'
      ]
    },
    //ref:
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
    },
    {
      type: 'completeWord',
      id: 'complete-word-2',
      label: 'What am I?',
      data: [
        `I help you write and I rhyme with den. What am I?| PEN
I am a pet animal and I rhyme with bat. What am I?|CAT
I am worn on your head and I rhyme with cat. What am I?| HAT
I am an insect and I rhyme with see. What am I?| BEE
I am colour and I rhyme with bed. What am I?| RED`,

        `I am a drink and I rhyme with sea. What am I?|TEA
I am a young human and I rhymee with lid. What am I?| KID
I am a part of your face above your nose. What am I?|LIP
I am a tool and I rhyme with hut. What am I? |NUT
I am a pet and I rhyme with log. What am I?|DOG`
      ]
    }
  ]
};
