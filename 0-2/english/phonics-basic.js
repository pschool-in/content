export default {
  label: 'Phonics Basic',
  id: 'phonics-basic',
  lockAfter: 2,
  list: [
    {
      label: 'Two Letter Words',
      type: 'phonics',
      id: 'phonics-1',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-8.mp3',
        audioWidth: 1
      },
      data: [
        {
          words: 'am, an, as, at, be, he, me, we, in, if',
          pos: 0
        },
        {
          words: 'is, it, of, on, or, ox, no, go, so, to',
          pos: 10
        },
        {
          words: 'do, up, us, by, my',
          pos: 20
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Two Letter Words',
      id: 'dictation-two',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/phonics/basic-phonics-8.mp3',
        audioWidth: 1
      },
      data: [
        {
          audioOffset: 0,
          words: 'am, an, as, at, be, he, we, me, in, if'
        },
        {
          audioOffset: 10,
          words: 'is, it, of, on, or, ox, no, go, so, to'
        },
        {
          audioOffset: 20,
          words: 'do, up, us, by, my'
        }
      ]
    },
    {
      label: 'Three Letter Words',
      type: 'phonics',
      id: 'phonics-2',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-9.mp3'
      },
      data: [
        {
          words: 'bat, cat, mat, fat, hat, rat, sat, ban, can, man',
          pos: 0
        },
        {
          words: 'fan, pan, ran, van, dam, ram, ham, jam, bad, dad',
          pos: 10
        },
        {
          words: 'fad, had, mad, lad, pad, sad, cap, lap, map, rap',
          pos: 20
        },
        {
          words:
            'sap, tap, bag, gag, rag, tag, wag, bar|b-ar, car|c-ar, far|f-ar',
          pos: 30
        },
        {
          words: 'jar|j-ar, bin, fin, pin, tin, sin, win, big, dig, fig',
          pos: 40
        },
        {
          words: 'pig, wig, bid, hid, did, kid|k-i-d, lid, rid, bib, nib',
          pos: 50
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Three Letter Words',
      id: 'dictation-3',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/phonics/basic-phonics-9.mp3',
        audioWidth: 1
      },
      data: [
        {
          audioOffset: 0,
          words: 'bat, cat, mat, fat, hat, rat, sat, ban, can, man'
        },
        {
          audioOffset: 10,
          words: 'fan, pan, ran, van, dam, ram, ham, jam, bad, dad'
        },
        {
          audioOffset: 20,
          words: 'fad, had, mad, lad, pad, sad, cap, lap, map, rap'
        },
        {
          audioOffset: 30,
          words: 'sap, tap, bag, gag, rag, tag, wag, bar, car, far'
        },
        {
          audioOffset: 40,
          words: 'jar, bin, fin, pin, tin, sin, win, big, dig, fig'
        },
        {
          audioOffset: 50,
          words: 'pig, wig, bid, hid, did, kid, lid, rid, bib, nib'
        }
      ]
    },
    {
      label: 'Three Letter Words 2',
      type: 'phonics',
      id: 'phonics-2-1',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-10.mp3'
      },
      data: [
        {
          words: 'rib, bit, fit, kit, lit, pit, sit, fix, mix, six',
          pos: 0
        },
        {
          words: 'god, nod, pod, cod, rod, dog, fog, hog, log, cot',
          pos: 10
        },
        {
          words: 'dot, got, hot, lot, pot, not, rot, job, box, fox',
          pos: 20
        },
        {
          words: 'cub, dub, rub, tub, hub, bug, dug, hug, rug, tug',
          pos: 30
        },
        {
          words: 'jug, sun, fun, gun, run, but, cut, hut, nut, mud',
          pos: 40
        },
        {
          words: 'bud, pup, fed, bed, led, red, wed, den, hen, men',
          pos: 50
        },
        {
          words: 'pen, ten, beg, leg, peg, bet, get, pet, let, wet',
          pos: 60
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Three Letter Words 2',
      id: 'dictation-4',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/phonics/basic-phonics-10.mp3',
        audioWidth: 1
      },
      data: [
        {
          audioOffset: 0,
          words: 'rib, bit, fit, kit, lit, pit, sit, fix, mix, six'
        },
        {
          audioOffset: 10,
          words: 'god, nod, pod, cod, rod, dog, fog, hog, log, cot'
        },
        {
          audioOffset: 20,
          words: 'dot, got, hot, lot, pot, not, rot, job, box, fox'
        },
        {
          audioOffset: 30,
          words: 'cub, dub, rub, tub, hub, bug, dug, hug, rug, tug'
        },
        {
          audioOffset: 40,
          words: 'jug, sun, fun, gun, run, but, cut, hut, nut, mud'
        },
        {
          audioOffset: 50,
          words: 'bud, pup, fed, bed, led, red, wed, den, hen, men'
        },
        {
          audioOffset: 60,
          words: 'pen, ten, beg, leg, peg, bet, get, pet, let, wet'
        }
      ]
    },
    {
      label: 'R with AEIOU',
      type: 'phonics',
      id: 'phonics-3',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-11.mp3'
      },
      data: [
        {
          microLabel: 'er',
          words:
            'after|a-f-t-er, greater|g-r-e-a-t-er, person|p-er-s-o-n, her|h-er, utter|u-t-t-er',
          pos: 0
        },
        {
          microLabel: 'ir',
          words: 'bird|b-ir-d, dirt|d-ir-t, shirt|sh-ir-t, skirt|s-c-ir-t',
          pos: 5
        },
        {
          microLabel: 'or',
          words:
            'worm|w-or-m, work|w-or-k, worship|w-or-sh-i-p, world|w-or-l-d, story|s-t-or-y',
          pos: 9
        },
        {
          microLabel: 'ur',
          words:
            'burn|b-ur-n, church|ch-ur-ch, hurt|h-ur-t, turn|t-ur-n, nurse|n-ur-s, curb|c-ur-b, fur|f-ur',
          pos: 14
        },
        {
          microLabel: 'ar',
          words: 'arm|ar-m, barn|b-ar-n, car|c-ar, dart|d-ar-t, jar|j-ar',
          pos: 21
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: R with AEIOU',
      id: 'dictation-5',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/phonics/basic-phonics-11.mp3',
        audioWidth: 1
      },
      data: [
        {
          audioOffset: 0,
          words:
            'after, greater, person, her, utter, bird, dirt, shirt, skirt, worm'
        },
        {
          audioOffset: 10,
          words:
            'work, worship, world, story, burn, church, hurt, turn, nurse, curb'
        },
        {
          audioOffset: 20,
          words: 'fur, arm, barn, car, dart, jar'
        }
      ]
    },
    {
      label: 'Recognising AY and OY',
      type: 'phonics',
      id: 'phonics-4',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-12.mp3'
      },
      data: [
        {
          microLabel: 'ay',
          words:
            'bay|b-ay, day|d-ay, hay|h-ay, may|m-ay, pay|p-ay, lay|l-ay, ray|r-ay, say|s-ay, way|w-ay',
          pos: 0
        },
        {
          microLabel: 'oy',
          words: 'boy|b-oy, toy|t-oy, joy|j-oy',
          pos: 9
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Recognising AY and OY',
      id: 'dictation-6',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/phonics/basic-phonics-12.mp3',
        audioWidth: 1
      },
      data: [
        {
          audioOffset: 0,
          words: 'bay, day, hay, may, pay, lay, ray, say, way'
        },
        {
          audioOffset: 9,
          words: 'boy, toy, joy'
        }
      ]
    },
    {
      label: 'Recognising AW and OW Sounds',
      type: 'phonics',
      id: 'phonics-5',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-13.mp3'
      },
      data: [
        {
          microLabel: 'aw',
          words:
            'jaw|j-aw, paw|p-aw, law|l-aw, raw|r-aw, saw|s-aw, hawk|h-aw-k',
          pos: 0
        },
        {
          microLabel: 'ow',
          words:
            'cow|c-ow, now|n-ow, down|d-ow-n, gown|g-ow-n, town|t-ow-n, mow|m-ow, row|r-ow, crow|cr-ow, grow|gr-ow, snow|s-n-ow',
          pos: 7
        },
        {
          microLabel: 'ow',
          words: 'glow|gl-ow, frown|fr-ow-n, town|t-ow-n, crown|cr-ow-n',
          pos: 17
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Recognising AW and OW Sounds',
      id: 'dictation-7',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/phonics/basic-phonics-13.mp3',
        audioWidth: 1
      },
      data: [
        {
          audioOffset: 0,
          words: 'jaw, paw, law, raw, saw, hawk, cow, now, down, gown'
        },
        {
          audioOffset: 10,
          words: 'town, mow, row, crow, grow, snow, glow, frown, town, crown'
        }
      ]
    }
  ]
};
