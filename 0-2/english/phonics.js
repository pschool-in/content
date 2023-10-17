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
        wordsAudio: 'kg-5/phonics/basic-phonics-1.mp3',
        audioWidth: 1
      },
      data: [
        {
          microLabel: 's',
          text: 'sun, us, set, sum, sit, sir, six, soft, small, seven',
          audioOffset: 0
        },
        {
          microLabel: 'a',
          text: 'at, an, am, and, act, ask, axe, ant, art, also',
          audioOffset: 10
        },
        {
          microLabel: 't',
          text: 'to, too|t-oo, ton, ten, top, tall, tail|t-ai-l, tank, toy, tub',
          audioOffset: 20
        },
        {
          microLabel: 'i',
          text: 'it, if, in, ink, idea, icon, index, item, india, intro',
          audioOffset: 30
        },
        {
          microLabel: 'p',
          text: 'pen, pet, put, pin, pig, pan, pain, park, perk, pink',
          audioOffset: 40
        },
        {
          microLabel: 'n',
          text: 'net, not, nil, nib, nut, nest, next, nano, neem|n-ee-m, noon|n-oo-n',
          audioOffset: 50
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
          text: 'sun, us, set, sum, sit, sir, six, soft, small, seven'
        },
        {
          audioOffset: 10,
          text: 'at, an, am, and, act, ask, axe, ant, art, also'
        },
        {
          audioOffset: 20,
          text: 'to, too, ton, ten, top, tall, tail|t-ai-l, tank, toy, tub'
        },
        {
          audioOffset: 30,
          text: 'it, if, in, ink, idea, icon, index, item, india, intro'
        },
        {
          audioOffset: 40,
          text: 'pen, pet, put, pin, pig, pan, pain, park, perk, pink'
        },
        {
          audioOffset: 50,
          text: 'net, not, nil, nib, nut, nest, next, nano, neem, noon'
        }
      ]
    },
    {
      label: 'Phonics Collection - 2',
      type: 'phonics',
      id: 'phonics-2',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-2.mp3',
        audioWidth: 1
      },
      data: [
        {
          microLabel: 'c',
          text: 'cat, cut, cup, cap, can, car, cow, come, care|c-ar-e, card|c-ar-d',
          audioOffset: 0
        },
        {
          microLabel: 'e',
          text: 'eat, end, ear, egg, easy, earn, else, emit, exam, exit',
          audioOffset: 10
        },
        {
          microLabel: 'h',
          text: 'hot, hat, hen, her, his, hit, hip, hand, hard|h-ar-d, harm|h-ar-m',
          audioOffset: 20
        },
        {
          microLabel: 'r',
          text: 'rat, red, rod, rip, run, ran, roar|r-oa-r, road|r-oa-d, rest, rent',
          audioOffset: 30
        },
        {
          microLabel: 'm',
          text: 'mat, mad, man, men, mix, met, map,  mug, milk, mail|m-ai-l',
          audioOffset: 40
        },
        {
          microLabel: 'd',
          text: 'dog, dot, dad, dam, dark, den, desk, data, don, did',
          audioOffset: 50
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
          text: 'cat, cut, cup, cap, can, car, cow, come, care, card'
        },
        {
          audioOffset: 10,
          text: 'eat, end, ear, egg, easy, earn, else, emit, exam, exit'
        },
        {
          audioOffset: 20,
          text: 'hot, hat, hen, her, his, hit, hip, hand, hard, harm'
        },
        {
          audioOffset: 30,
          text: 'rat, red, rod, rip, run, ran, roar, road, rest, rent'
        },
        {
          audioOffset: 40,
          text: 'mat, mad, man, men, mix, met, map,  mug, milk, mail'
        },
        {
          audioOffset: 50,
          text: 'dog, dot, dad, dam, dark, den, desk, data, don, did'
        }
      ]
    },
    {
      label: 'Phonics Collection - 3',
      type: 'phonics',
      id: 'phonics-3',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-3.mp3',
        audioWidth: 1
      },
      data: [
        {
          microLabel: 'g',
          text: 'go, get, got, gun, gap, grow, goat|g-oa-t, green|g-r-ee-n, give, gave',
          audioOffset: 0
        },
        {
          microLabel: 'o',
          text: 'on, ox, one, old, open, of, over, only, oral, oval',
          audioOffset: 10
        },
        {
          microLabel: 'u',
          text: 'up, us, upon, use, ugly, uber, unit, undo, user, ultra',
          audioOffset: 20
        },
        {
          microLabel: 'l',
          text: 'lot, leg, lap, let, lay, log, lie|l-ie, lake, lady, land',
          audioOffset: 30
        },
        {
          microLabel: 'f',
          text: 'fat, fan, far, for, few, fast, fox, fact, face, fail|f-ai-l',
          audioOffset: 40
        },
        {
          microLabel: 'b',
          text: 'bat, bad, bag, ban, box, bun, but, bed, bet, best',
          audioOffset: 50
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
          text: 'go, get, got, gun, gap, grow, goat, green, give, gave'
        },
        {
          audioOffset: 10,
          text: 'on, ox, one, old, open, of, over, only, oral, oval'
        },
        {
          audioOffset: 20,
          text: 'up, us, upon, use, ugly, uber, unit, undo, user, ultra'
        },
        {
          audioOffset: 30,
          text: 'lot, leg, lap, let, lay, log, lie|l-ie, lake, lady, land'
        },
        {
          audioOffset: 40,
          text: 'fat, fan, far, for, few, fast, fox, fact, face, fail'
        },
        {
          audioOffset: 50,
          text: 'bat, bad, bag, ban, box, bun, but, bed, bet, best'
        }
      ]
    },
    {
      label: 'Phonics Collection - 4',
      type: 'phonics',
      id: 'phonics-4',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-4.mp3',
        audioWidth: 1
      },
      data: [
        {
          microLabel: 'ai',
          text: 'aim|ai-m, pain|p-ai-n, rain|r-ai-n, grain|g-r-ai-n, tail|t-ai-l, fail|f-ai-l, sail|s-ai-l, paid|p-ai-d, said|s-ai-d, maid|m-ai-d',
          audioOffset: 0
        },
        {
          microLabel: 'j',
          text: 'jam, jug, jar, jet, jump, jail|j-ai-l, jaw, junk, joke, jeep|j-ee-p',
          audioOffset: 10
        },
        {
          microLabel: 'oa',
          text: 'coat|c-oa-t, boat|b-oa-t, oat|oa-t, goat|g-oa-t, goal|g-oa-l, roar|r-oa-r, load|l-oa-d, loaf|l-oa-f, loan|l-oa-n, soap|s-oa-p',
          audioOffset: 20
        },
        {
          microLabel: 'ie',
          text: 'tie|t-ie, die|d-ie, lie|l-ie, pie|p-ie, alien|a-l-ie-n, chief|ch-ie-f, brief|b-r-ie-f, field|f-ie-l-d, niece|n-ie-c-e, movie|m-o-v-ie',
          audioOffset: 30
        },
        {
          microLabel: 'ee',
          text: 'see|s-ee, bee|b-ee, free|f-r-ee, tree|t-r-ee, seed|s-ee-d, need|n-ee-d, feed|f-ee-d, meet|m-ee-t, feet|f-ee-t, feel|f-ee-l',
          audioOffset: 40
        },
        {
          microLabel: 'or',
          text: 'for|f-or, more|m-or-e, born|b-or-n, horn|h-or-n, corn|c-or-n, sort|s-or-t, port|p-or-t, form|f-or-m, fork|f-or-k, force|f-or-c-e',
          audioOffset: 50
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
          text: 'aim, pain, rain, grain, tail, fail, sail, paid, said, maid'
        },
        {
          audioOffset: 10,
          text: 'jam, jug, jar, jet, jump, jail, jaw, junk, joke, jeep'
        },
        {
          audioOffset: 20,
          text: 'coat, boat, oat, goat, goal, roar, load, loaf, loan, soap'
        },
        {
          audioOffset: 30,
          text: 'tie, die, lie, pie, alien, chief, brief, field, niece, movie'
        },
        {
          audioOffset: 40,
          text: 'see, bee, free, tree, seed, need, feed, meet, feet, feel'
        },
        {
          audioOffset: 50,
          text: 'for, more, born, horn, corn, sort, port, form, fork, force'
        }
      ]
    },
    {
      label: 'Phonics Collection - 5',
      type: 'phonics',
      id: 'phonics-5',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-5.mp3',
        audioWidth: 1
      },
      data: [
        {
          microLabel: 'z',
          text: 'zoo|z-oo, zip, zone, zoom|z-OO-m, zen, zero, maze, crazy, eazy, lazy',
          audioOffset: 0
        },
        {
          microLabel: 'w',
          text: 'wet, win, was, worm|w-or-m, work|w-or-k, web, world|w-or-l-d, wage, wake, water|w-a-t-er',
          audioOffset: 10
        },
        {
          microLabel: 'ng',
          text: 'ring|r-i-ng, sing|s-i-ng, king|k-i-ng, wing|w-i-ng, wrong|w-r-o-ng, lung|l-u-ng, song|s-o-ng, angry|a-ng-r-y, angle|a-ng-l-e, long|l-o-ng',
          audioOffset: 20
        },
        {
          microLabel: 'v',
          text: 'van, very|v-er-y, vote, vase, vast, verb|v-er-b, view|v-ie-w, virus, value|v-a-l-ue, video',
          audioOffset: 30
        },
        {
          microLabel: 'oo',
          text: 'book|b-oo-k, took|t-oo-k, look|l-oo-k, good|g-oo-d, food|f-oo-d, wool|w-oo-l, cook|c-oo-k, foot|f-oo-t, blood|b-l-oo-d, flood|f-l-oo-d',
          audioOffset: 40
        },
        {
          microLabel: 'OO',
          text: 'pool|p-OO-l, tool|t-OO-l, tooth|t-OO-th, moon|m-OO-n, proof|p-r-OO-f,  bloom|b-l-OO-m, broom|b-r-OO-m, fool|f-OO-l, room|r-OO-m, root|r-OO-t',
          audioOffset: 50
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
          text: 'zoo, zip, zone, zoom, zen, zero, maze, crazy, eazy, lazy'
        },
        {
          audioOffset: 10,
          text: 'wet, win, was, worm, work, web, world, wage, wake, water'
        },
        {
          audioOffset: 20,
          text: 'ring, sing, king, wing, wrong, lung, song, angry, angle, long'
        },
        {
          audioOffset: 30,
          text: 'van, very, vote, vase, vast, verb, view, virus, value, video'
        },
        {
          audioOffset: 40,
          text: 'book, took, look, good, food, wool, cook, foot, blood, flood'
        },
        {
          audioOffset: 50,
          text: 'pool, tool, tooth, moon, proof,  bloom, broom, fool, room, root'
        }
      ]
    },
    {
      label: 'Phonics Collection - 6',
      type: 'phonics',
      id: 'phonics-6',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-6.mp3',
        audioWidth: 1
      },
      data: [
        {
          microLabel: 'y',
          text: 'you, yes, youth|y-ou-th, year|y-ea-r, yoga, yield|y-ie-l-d, your|y-ou-r, yummy, yamuna, yell',
          audioOffset: 0
        },
        {
          microLabel: 'x',
          text: 'ox, six, mix, fix, tax, wax, box, hoax|h-oa-x, axe, fox',
          audioOffset: 10
        },
        {
          microLabel: 'ch',
          text: 'chop|ch-o-p, chest|ch-e-s-t, chain|ch-ai-n, chip|ch-i-p, chat|ch-a-t, chin|ch-i-n, teach|t-e-a-ch, rich|r-i-ch, inch|i-n-ch, each|e-a-ch',
          audioOffset: 20
        },
        {
          microLabel: 'sh',
          text: 'she|sh-e, ship|sh-i-p, shed|sh-e-d, show|sh-o-w, shout|sh-ou-t, shut|sh-u-t, shop|sh-o-p, shake|sh-a-k-e, shark|sh-a-r-k, sharp|sh-a-r-p',
          audioOffset: 30
        },
        {
          microLabel: 'th',
          text: 'thin|th-i-n, think|th-i-n-k, thank|th-a-n-k, bath|b-a-th, path|p-a-th, myth|m-y-th, third|th-i-r-d, thief|th-ie-f, cloth|c-l-o-th, health|h-e-a-l-th',
          audioOffset: 40
        },
        {
          microLabel: 'TH',
          text: 'that|TH-a-t, they|TH-e-y, then|TH-e-n, them|TH-e-m, their|TH-e-i-r, these|TH-e-s-e, those|TH-o-s-e, throw|TH-r-o-w, birth|b-i-r-TH,faith|f-a-i-TH',
          audioOffset: 50
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
          text: 'you, yes, youth, year, yoga, yield, your, yummy, yamuna, yell'
        },
        {
          audioOffset: 10,
          text: 'ox, six, mix, fix, tax, wax, box, hoax, axe, fox'
        },
        {
          audioOffset: 20,
          text: 'chop, chest, chain, chip, chat, chin, teach, rich, inch, each'
        },
        {
          audioOffset: 30,
          text: 'she, ship, shed, show, shout, shut, shop, shake, shark, sharp'
        },
        {
          audioOffset: 40,
          text: 'thin, think, thank, bath, path, myth, third, thief, cloth, health'
        },
        {
          audioOffset: 50,
          text: 'that, they, then, them, their, these, those, throw, birth, faith'
        }
      ]
    },
    {
      label: 'Phonics Collection - 7',
      type: 'phonics',
      id: 'phonics-7',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-7.mp3',
        audioWidth: 1
      },
      data: [
        {
          microLabel: 'qu',
          text: 'quiz|qu-i-z, quick|qu-i-c-k, quiet|qu-ie-t, queen|qu-ee-n, quest|qu-e-s-t, quack|qu-a-c-k, quilt|qu-i-l-t, square|s-qu-ar-e, equal|e-qu-a-l, liquid|l-i-qu-i-d  ',
          audioOffset: 0
        },
        {
          microLabel: 'ou',
          text: 'our|ou-r, hour|h-ou-r, loud|l-ou-d, noun|n-ou-n, four|f-ou-r, foul|f-ou-l, soup|s-ou-p, about|a-b-ou-t, found|f-ou-n-d, count|c-ou-n-t',
          audioOffset: 10
        },
        {
          microLabel: 'oi',
          text: 'oil|oi-l, boil|b-oi-l, soil|s-oi-l, coil|c-oi-l, coin|c-oi-n, join|j-oi-n, point|p-oi-n-t, noise|n-oi-s-e, voice|v-oi-c-e, moist|m-oi-s-t',
          audioOffset: 20
        },
        {
          microLabel: 'ue',
          text: 'blue|b-l-ue, true|t-r-ue, clue|c-l-ue, fuel|f-ue-l, glue|g-l-ue, argue|a-r-g-ue, cruel|c-r-ue-l, guest|g-ue-s-t, quest|qu-e-s-t, value|v-a-l-ue',
          audioOffset: 30
        },
        {
          microLabel: 'er',
          text: 'her|h-er, herd|h-er-d, herb|h-er-b, verb|v-er-b, germ|g-er-m,  lier|l-i-er, over|o-v-er, very|v-er-y, term|t-er-m, user|u-s-er',
          audioOffset: 40
        },
        {
          microLabel: 'ar',
          text: 'car|c-ar, jar|j-ar, bar|b-ar, far|f-ar, war|w-ar, harm|h-ar-m, arm|ar-m, art|ar-t, part|p-ar-t, park|p-ar-k ',
          audioOffset: 50
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
          text: 'quiz, quick, quiet, queen, quest, quack, quilt, square, equal, liquid'
        },
        {
          audioOffset: 10,
          text: 'our, hour, loud, noun, four, foul, soup, about, found, count'
        },
        {
          audioOffset: 20,
          text: 'oil, boil, soil, coil, coin, join, point, noise, voice, moist'
        },
        {
          audioOffset: 30,
          text: 'blue, true, clue, fuel, glue, argue, cruel, guest, quest, value'
        },
        {
          audioOffset: 40,
          text: 'her, herd, herb, verb, germ, lier, over, very, term, user'
        },
        {
          audioOffset: 50,
          text: 'car, jar, bar, far, war, harm, arm, art, part, park '
        }
      ]
    }
  ]
};
