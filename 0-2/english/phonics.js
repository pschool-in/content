export default {
  label: 'Phonics',
  id: 'phonics',
  lockAfter: 2,
  list: [
    {
      label: 'Phonics Collection - 1',
      type: 'phonics',
      id: 'phonics-all',
      data: {}
    },
    {
      label: 'Phonics Sound',
      type: 'phonics',
      id: 'phonics-1',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-1.mp3'
      },
      data: [
        {
          microLabel: 's',
          words: 'sun, us, set, sum, sit, sir, six, soft, small, seven',
          pos: 0
        },
        {
          microLabel: 'a',
          words: 'at, an, am, and, act, ask, axe, ant, art, also',
          pos: 10
        },
        {
          microLabel: 't',
          words:
            'to, too|t-oo, ton, ten, top, tall, tail|t-ai-l, tank, toy, tub',
          pos: 20
        },
        {
          microLabel: 'i',
          words: 'it, if, in, ink, idea, icon, index, item, india, intro',
          pos: 30
        },
        {
          microLabel: 'p',
          words: 'pen, pet, put, pin, pig, pan, pain, park, perk, pink',
          pos: 40
        },
        {
          microLabel: 'n',
          words:
            'net, not, nil, nib, nut, nest, next, nano, neem|n-ee-m, noon|n-oo-n',
          pos: 50
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Phonics Sound',
      id: 'dictation',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/phonics/basic-phonics-1.mp3',
        audioWidth: 1
      },
      data: [
        {
          audioOffset: 0,
          words: 'sun, us, set, sum, sit, sir, six, soft, small, seven'
        },
        {
          audioOffset: 10,
          words: 'at, an, am, and, act, ask, axe, ant, art, also'
        },
        {
          audioOffset: 20,
          words: 'to, too, ton, ten, top, tall, tail|t-ai-l, tank, toy, tub'
        },
        {
          audioOffset: 30,
          words: 'it, if, in, ink, idea, icon, index, item, india, intro'
        },
        {
          audioOffset: 40,
          words: 'pen, pet, put, pin, pig, pan, pain, park, perk, pink'
        },
        {
          audioOffset: 50,
          words: 'net, not, nil, nib, nut, nest, next, nano, neem, noon'
        }
      ]
    },
    {
      label: 'Phonics Collection - 2',
      type: 'phonics',
      id: 'phonics-2',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-2.mp3'
      },
      data: [
        {
          microLabel: 'c',
          words:
            'cat, cut, cup, cap, can, car, cow, come, care|c-ar-e, card|c-ar-d',
          pos: 0
        },
        {
          microLabel: 'e',
          words: 'eat, end, ear, egg, easy, earn, else, emit, exam, exit',
          pos: 10
        },
        {
          microLabel: 'h',
          words:
            'hot, hat, hen, her, his, hit, hip, hand, hard|h-ar-d, harm|h-ar-m',
          pos: 20
        },
        {
          microLabel: 'r',
          words:
            'rat, red, rod, rip, run, ran, roar|r-oa-r, road|r-oa-d, rest, rent',
          pos: 30
        },
        {
          microLabel: 'm',
          words: 'mat, mad, man, men, mix, met, map,  mug, milk, mail|m-ai-l',
          pos: 40
        },
        {
          microLabel: 'd',
          words: 'dog, dot, dad, dam, dark, den, desk, data, don, did',
          pos: 50
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Phonics Collection - 2',
      id: 'dictation-2',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/phonics/basic-phonics-2.mp3',
        audioWidth: 1
      },
      data: [
        {
          audioOffset: 0,
          words: 'cat, cut, cup, cap, can, car, cow, come, care, card'
        },
        {
          audioOffset: 10,
          words: 'eat, end, ear, egg, easy, earn, else, emit, exam, exit'
        },
        {
          audioOffset: 20,
          words: 'hot, hat, hen, her, his, hit, hip, hand, hard, harm'
        },
        {
          audioOffset: 30,
          words: 'rat, red, rod, rip, run, ran, roar, road, rest, rent'
        },
        {
          audioOffset: 40,
          words: 'mat, mad, man, men, mix, met, map,  mug, milk, mail'
        },
        {
          audioOffset: 50,
          words: 'dog, dot, dad, dam, dark, den, desk, data, don, did'
        }
      ]
    },
    {
      label: 'Phonics Collection - 3',
      type: 'phonics',
      id: 'phonics-3',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-3.mp3'
      },
      data: [
        {
          microLabel: 'g',
          text: 'go, get, got, gun, gap, grow, goat|g-oa-t, green|g-r-ee-n, give, gave',
          words: 0
        },
        {
          microLabel: 'o',
          text: 'on, ox, one, old, open, of, over, only, oral, oval',
          words: 10
        },
        {
          microLabel: 'u',
          text: 'up, us, upon, use, ugly, uber, unit, undo, user, ultra',
          words: 20
        },
        {
          microLabel: 'l',
          text: 'lot, leg, lap, let, lay, log, lie|l-ie, lake, lady, land',
          words: 30
        },
        {
          microLabel: 'f',
          text: 'fat, fan, far, for, few, fast, fox, fact, face, fail|f-ai-l',
          words: 40
        },
        {
          microLabel: 'b',
          text: 'bat, bad, bag, ban, box, bun, but, bed, bet, best',
          pos: 50
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Phonics Collection - 3',
      id: 'dictation-3',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/phonics/basic-phonics-3.mp3',
        audioWidth: 1
      },
      data: [
        {
          audioOffset: 0,
          words: 'go, get, got, gun, gap, grow, goat, green, give, gave'
        },
        {
          audioOffset: 10,
          words: 'on, ox, one, old, open, of, over, only, oral, oval'
        },
        {
          audioOffset: 20,
          words: 'up, us, upon, use, ugly, uber, unit, undo, user, ultra'
        },
        {
          audioOffset: 30,
          words: 'lot, leg, lap, let, lay, log, lie|l-ie, lake, lady, land'
        },
        {
          audioOffset: 40,
          words: 'fat, fan, far, for, few, fast, fox, fact, face, fail'
        },
        {
          audioOffset: 50,
          words: 'bat, bad, bag, ban, box, bun, but, bed, bet, best'
        }
      ]
    },
    {
      label: 'Phonics Collection - 4',
      type: 'phonics',
      id: 'phonics-4',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-4.mp3'
      },
      data: [
        {
          microLabel: 'ai',
          words:
            'aim|ai-m, pain|p-ai-n, rain|r-ai-n, grain|g-r-ai-n, tail|t-ai-l, fail|f-ai-l, sail|s-ai-l, paid|p-ai-d, said|s-ai-d, maid|m-ai-d',
          pos: 0
        },
        {
          microLabel: 'j',
          words:
            'jam, jug, jar, jet, jump, jail|j-ai-l, jaw, junk, joke, jeep|j-ee-p',
          pos: 10
        },
        {
          microLabel: 'oa',
          words:
            'coat|c-oa-t, boat|b-oa-t, oat|oa-t, goat|g-oa-t, goal|g-oa-l, roar|r-oa-r, load|l-oa-d, loaf|l-oa-f, loan|l-oa-n, soap|s-oa-p',
          pos: 20
        },
        {
          microLabel: 'ie',
          words:
            'tie|t-ie, die|d-ie, lie|l-ie, pie|p-ie, alien|a-l-ie-n, chief|ch-ie-f, brief|b-r-ie-f, field|f-ie-l-d, niece|n-ie-c-e, movie|m-o-v-ie',
          pos: 30
        },
        {
          microLabel: 'ee',
          words:
            'see|s-ee, bee|b-ee, free|f-r-ee, tree|t-r-ee, seed|s-ee-d, need|n-ee-d, feed|f-ee-d, meet|m-ee-t, feet|f-ee-t, feel|f-ee-l',
          pos: 40
        },
        {
          microLabel: 'or',
          words:
            'for|f-or, more|m-or-e, born|b-or-n, horn|h-or-n, corn|c-or-n, sort|s-or-t, port|p-or-t, form|f-or-m, fork|f-or-k, force|f-or-c-e',
          pos: 50
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Phonics Collection - 4',
      id: 'dictation-4',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/phonics/basic-phonics-4.mp3',
        audioWidth: 1
      },
      data: [
        {
          audioOffset: 0,
          words: 'aim, pain, rain, grain, tail, fail, sail, paid, said, maid'
        },
        {
          audioOffset: 10,
          words: 'jam, jug, jar, jet, jump, jail, jaw, junk, joke, jeep'
        },
        {
          audioOffset: 20,
          words: 'coat, boat, oat, goat, goal, roar, load, loaf, loan, soap'
        },
        {
          audioOffset: 30,
          words: 'tie, die, lie, pie, alien, chief, brief, field, niece, movie'
        },
        {
          audioOffset: 40,
          words: 'see, bee, free, tree, seed, need, feed, meet, feet, feel'
        },
        {
          audioOffset: 50,
          words: 'for, more, born, horn, corn, sort, port, form, fork, force'
        }
      ]
    },
    {
      label: 'Phonics Collection - 5',
      type: 'phonics',
      id: 'phonics-5',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-5.mp3'
      },
      data: [
        {
          microLabel: 'z',
          words:
            'zoo|z-oo, zip, zone, zoom|z-OO-m, zen, zero, maze, crazy, eazy, lazy',
          pos: 0
        },
        {
          microLabel: 'w',
          words:
            'wet, win, was, worm|w-or-m, work|w-or-k, web, world|w-or-l-d, wage, wake, water|w-a-t-er',
          pos: 10
        },
        {
          microLabel: 'ng',
          words:
            'ring|r-i-ng, sing|s-i-ng, king|k-i-ng, wing|w-i-ng, wrong|w-r-o-ng, lung|l-u-ng, song|s-o-ng, angry|a-ng-r-y, angle|a-ng-l-e, long|l-o-ng',
          pos: 20
        },
        {
          microLabel: 'v',
          words:
            'van, very|v-er-y, vote, vase, vast, verb|v-er-b, view|v-ie-w, virus, value|v-a-l-ue, video',
          pos: 30
        },
        {
          microLabel: 'oo',
          words:
            'book|b-oo-k, took|t-oo-k, look|l-oo-k, good|g-oo-d, food|f-oo-d, wool|w-oo-l, cook|c-oo-k, foot|f-oo-t, blood|b-l-oo-d, flood|f-l-oo-d',
          pos: 40
        },
        {
          microLabel: 'OO',
          words:
            'pool|p-OO-l, tool|t-OO-l, tooth|t-OO-th, moon|m-OO-n, proof|p-r-OO-f,  bloom|b-l-OO-m, broom|b-r-OO-m, fool|f-OO-l, room|r-OO-m, root|r-OO-t',
          pos: 50
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Phonics Collection - 5',
      id: 'dictation-5',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/phonics/basic-phonics-5.mp3',
        audioWidth: 1
      },
      data: [
        {
          audioOffset: 0,
          words: 'zoo, zip, zone, zoom, zen, zero, maze, crazy, eazy, lazy'
        },
        {
          audioOffset: 10,
          words: 'wet, win, was, worm, work, web, world, wage, wake, water'
        },
        {
          audioOffset: 20,
          words: 'ring, sing, king, wing, wrong, lung, song, angry, angle, long'
        },
        {
          audioOffset: 30,
          words: 'van, very, vote, vase, vast, verb, view, virus, value, video'
        },
        {
          audioOffset: 40,
          words: 'book, took, look, good, food, wool, cook, foot, blood, flood'
        },
        {
          audioOffset: 50,
          words:
            'pool, tool, tooth, moon, proof,  bloom, broom, fool, room, root'
        }
      ]
    },
    {
      label: 'Phonics Collection - 6',
      type: 'phonics',
      id: 'phonics-6',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-6.mp3'
      },
      data: [
        {
          microLabel: 'y',
          words:
            'you, yes, youth|y-ou-th, year|y-ea-r, yoga, yield|y-ie-l-d, your|y-ou-r, yummy, yamuna, yell',
          pos: 0
        },
        {
          microLabel: 'x',
          words: 'ox, six, mix, fix, tax, wax, box, hoax|h-oa-x, axe, fox',
          pos: 10
        },
        {
          microLabel: 'ch',
          words:
            'chop|ch-o-p, chest|ch-e-s-t, chain|ch-ai-n, chip|ch-i-p, chat|ch-a-t, chin|ch-i-n, teach|t-e-a-ch, rich|r-i-ch, inch|i-n-ch, each|e-a-ch',
          pos: 20
        },
        {
          microLabel: 'sh',
          words:
            'she|sh-e, ship|sh-i-p, shed|sh-e-d, show|sh-o-w, shout|sh-ou-t, shut|sh-u-t, shop|sh-o-p, shake|sh-a-k-e, shark|sh-a-r-k, sharp|sh-a-r-p',
          pos: 30
        },
        {
          microLabel: 'th',
          words:
            'thin|th-i-n, think|th-i-n-k, thank|th-a-n-k, bath|b-a-th, path|p-a-th, myth|m-y-th, third|th-i-r-d, thief|th-ie-f, cloth|c-l-o-th, health|h-e-a-l-th',
          pos: 40
        },
        {
          microLabel: 'TH',
          words:
            'that|TH-a-t, they|TH-e-y, then|TH-e-n, them|TH-e-m, their|TH-e-i-r, these|TH-e-s-e, those|TH-o-s-e, throw|TH-r-o-w, birth|b-i-r-TH,faith|f-a-i-TH',
          pos: 50
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Phonics Collection - 6',
      id: 'dictation-6',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/phonics/basic-phonics-6.mp3',
        audioWidth: 1
      },
      data: [
        {
          audioOffset: 0,
          words: 'you, yes, youth, year, yoga, yield, your, yummy, yamuna, yell'
        },
        {
          audioOffset: 10,
          words: 'ox, six, mix, fix, tax, wax, box, hoax, axe, fox'
        },
        {
          audioOffset: 20,
          words: 'chop, chest, chain, chip, chat, chin, teach, rich, inch, each'
        },
        {
          audioOffset: 30,
          words: 'she, ship, shed, show, shout, shut, shop, shake, shark, sharp'
        },
        {
          audioOffset: 40,
          words:
            'thin, think, thank, bath, path, myth, third, thief, cloth, health'
        },
        {
          audioOffset: 50,
          words:
            'that, they, then, them, their, these, those, throw, birth, faith'
        }
      ]
    },
    {
      label: 'Phonics Collection - 7',
      type: 'phonics',
      id: 'phonics-7',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-7.mp3'
      },
      data: [
        {
          microLabel: 'qu',
          words:
            'quiz|qu-i-z, quick|qu-i-c-k, quiet|qu-ie-t, queen|qu-ee-n, quest|qu-e-s-t, quack|qu-a-c-k, quilt|qu-i-l-t, square|s-qu-ar-e, equal|e-qu-a-l, liquid|l-i-qu-i-d  ',
          pos: 0
        },
        {
          microLabel: 'ou',
          words:
            'our|ou-r, hour|h-ou-r, loud|l-ou-d, noun|n-ou-n, four|f-ou-r, foul|f-ou-l, soup|s-ou-p, about|a-b-ou-t, found|f-ou-n-d, count|c-ou-n-t',
          pos: 10
        },
        {
          microLabel: 'oi',
          words:
            'oil|oi-l, boil|b-oi-l, soil|s-oi-l, coil|c-oi-l, coin|c-oi-n, join|j-oi-n, point|p-oi-n-t, noise|n-oi-s-e, voice|v-oi-c-e, moist|m-oi-s-t',
          pos: 20
        },
        {
          microLabel: 'ue',
          words:
            'blue|b-l-ue, true|t-r-ue, clue|c-l-ue, fuel|f-ue-l, glue|g-l-ue, argue|a-r-g-ue, cruel|c-r-ue-l, guest|g-ue-s-t, quest|qu-e-s-t, value|v-a-l-ue',
          pos: 30
        },
        {
          microLabel: 'er',
          words:
            'her|h-er, herd|h-er-d, herb|h-er-b, verb|v-er-b, germ|g-er-m,  lier|l-i-er, over|o-v-er, very|v-er-y, term|t-er-m, user|u-s-er',
          pos: 40
        },
        {
          microLabel: 'ar',
          words:
            'car|c-ar, jar|j-ar, bar|b-ar, far|f-ar, war|w-ar, harm|h-ar-m, arm|ar-m, art|ar-t, part|p-ar-t, park|p-ar-k ',
          pos: 50
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Phonics Collection - 7',
      id: 'dictation-7',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/phonics/basic-phonics-7.mp3',
        audioWidth: 1
      },
      data: [
        {
          audioOffset: 0,
          words:
            'quiz, quick, quiet, queen, quest, quack, quilt, square, equal, liquid'
        },
        {
          audioOffset: 10,
          words: 'our, hour, loud, noun, four, foul, soup, about, found, count'
        },
        {
          audioOffset: 20,
          words: 'oil, boil, soil, coil, coin, join, point, noise, voice, moist'
        },
        {
          audioOffset: 30,
          words:
            'blue, true, clue, fuel, glue, argue, cruel, guest, quest, value'
        },
        {
          audioOffset: 40,
          words: 'her, herd, herb, verb, germ, lier, over, very, term, user'
        },
        {
          audioOffset: 50,
          words: 'car, jar, bar, far, war, harm, arm, art, part, park '
        }
      ]
    }
  ]
};
