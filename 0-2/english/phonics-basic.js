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
          text: 'am, an, as, at, be, he, we, me, in, if'
        },
        {
          audioOffset: 10,
          text: 'is, it, of, on, or, ox, no, go, so, to'
        },
        {
          audioOffset: 20,
          text: 'do, up, us, by, my'
        }
      ]
    },
    {
      label: 'Three Letter Words',
      type: 'phonics',
      id: 'phonics-2',
      commonData: {
        type: 'words',
        audioWidth: 1,
        wordsAudio: 'kg-5/phonics/basic-phonics-9.mp3',
        audioWidth: 1
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
          text: 'sap, tap, bag, gag, rag, tag, wag, bar|b-ar, car|c-ar, far|f-ar',
          audioOffset: 30
        },
        {
          text: 'jar|j-ar, bin, fin, pin, tin, sin, win, big, dig, fig',
          audioOffset: 40
        },
        {
          text: 'pig, wig, bid, hid, did, kid|k-i-d, lid, rid, bib, nib',
          audioOffset: 50
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
          text: 'bat, cat, mat, fat, hat, rat, sat, ban, can, man'
        },
        {
          audioOffset: 10,
          text: 'fan, pan, ran, van, dam, ram, ham, jam, bad, dad'
        },
        {
          audioOffset: 20,
          text: 'fad, had, mad, lad, pad, sad, cap, lap, map, rap'
        },
        {
          audioOffset: 30,
          text: 'sap, tap, bag, gag, rag, tag, wag, bar, car, far'
        },
        {
          audioOffset: 40,
          text: 'jar, bin, fin, pin, tin, sin, win, big, dig, fig'
        },
        {
          audioOffset: 50,
          text: 'pig, wig, bid, hid, did, kid, lid, rid, bib, nib'
        }
      ]
    },
    {
      label: 'Three Letter Words 2',
      type: 'phonics',
      id: 'phonics-2-1',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-10.mp3',
        audioWidth: 1
      },
      data: [
        {
          text: 'rib, bit, fit, kit, lit, pit, sit, fix, mix, six',
          audioOffset: 0
        },
        {
          text: 'god, nod, pod, cod, rod, dog, fog, hog, log, cot',
          audioOffset: 10
        },
        {
          text: 'dot, got, hot, lot, pot, not, rot, job, box, fox',
          audioOffset: 20
        },
        {
          text: 'cub, dub, rub, tub, hub, bug, dug, hug, rug, tug',
          audioOffset: 30
        },
        {
          text: 'jug, sun, fun, gun, run, but, cut, hut, nut, mud',
          audioOffset: 40
        },
        {
          text: 'bud, pup, fed, bed, led, red, wed, den, hen, men',
          audioOffset: 50
        },
        {
          text: 'pen, ten, beg, leg, peg, bet, get, pet, let, wet',
          audioOffset: 60
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
          text: 'rib, bit, fit, kit, lit, pit, sit, fix, mix, six'
        },
        {
          audioOffset: 10,
          text: 'god, nod, pod, cod, rod, dog, fog, hog, log, cot'
        },
        {
          audioOffset: 20,
          text: 'dot, got, hot, lot, pot, not, rot, job, box, fox'
        },
        {
          audioOffset: 30,
          text: 'cub, dub, rub, tub, hub, bug, dug, hug, rug, tug'
        },
        {
          audioOffset: 40,
          text: 'jug, sun, fun, gun, run, but, cut, hut, nut, mud'
        },
        {
          audioOffset: 50,
          text: 'bud, pup, fed, bed, led, red, wed, den, hen, men'
        },
        {
          audioOffset: 60,
          text: 'pen, ten, beg, leg, peg, bet, get, pet, let, wet'
        }
      ]
    },
    {
      label: 'R with AEIOU',
      type: 'phonics',
      id: 'phonics-3',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-11.mp3',
        audioWidth: 1
      },
      data: [
        {
          microLabel: 'er',
          text: 'after|a-f-t-er, greater|g-r-e-a-t-er, person|p-er-s-o-n, her|h-er, utter|u-t-t-er|u-h-t-er, river|r-i-v-er, faster|f-a-s-t-er, ferry| f-er-r-y, herd|h-er-d, term|t-er-m',
          audioOffset: 0
        },
        {
          microLabel: 'ir',
          text: 'bird|b-ir-d, dirt|d-ir-t, shirt|sh-ir-t, skirt|s-c-ir-t, sir|s-ir, first|f-ir-s-t, stir|s-t-ir, circle|c-ir-c-l-e, girl|g-ir-l, circus|c-ir-c-u-s',
          audioOffset: 10
        },
        {
          microLabel: 'or',
          text: 'worm|w-or-m, work|w-or-k, worship|w-or-sh-i-p, world|w-or-l-d, story|s-t-or-y|s-t-or-ee, born|b-or-n, corn|c-or-n, sore|s-or-e, torch|t-or-ch, actor|a-c-t-or',
          audioOffset: 20
        },
        {
          microLabel: 'ur',
          text: 'burn|b-ur-n, church|ch-ur-ch, hurt|h-ur-t, turn|t-ur-n, nurse|n-ur-s, curb|c-ur-b, fur|f-ur, surf|s-ur-f, curl|c-ur-l, lurk|l-ur-c',
          audioOffset: 30
        },
        {
          microLabel: 'ar',
          text: 'arm|ar-m, barn|b-ar-n, car|c-ar, dart|d-ar-t, jar|j-ar, far|f-ar, part|p-ar-t, hard|h-ar-d, near|n-e-ar, care|c-ar-e',
          audioOffset: 40
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
          text: 'after, greater, person, her, utter, river, faster, ferry, herd, term'
        },
        {
          audioOffset: 10,
          text: 'bird, dirt, shirt, skirt, sir, first, stir, circle, girl, circus'
        },
        {
          audioOffset: 20,
          text: 'worm, work, worship, world, story, born, corn, sore, torch, actor'
        },
        {
          audioOffset: 30,
          text: 'burn, church, hurt, turn, nurse, curb, fur, surf, curl, lurk'
        },
        {
          audioOffset: 40,
          text: 'arm, barn, car, dart, jar, far, part, hard, near, care'
        }
      ]
    },
    {
      label: 'Recognising AY and OY',
      type: 'phonics',
      id: 'phonics-4',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-12.mp3',
        audioWidth: 1
      },
      data: [
        {
          microLabel: 'ay',
          text: 'bay|b-ay, day|d-ay, hay|h-ay, may|m-ay, pay|p-ay, lay|l-ay, ray|r-ay, say|s-ay, way|w-ay, play|p-l-ay',
          audioOffset: 0
        },
        {
          microLabel: 'oy',
          text: 'boy|b-oy, toy|t-oy, joy|j-oy, enjoy|e-n-j-oy, annoy|a-n-n-oy, employ|e-m-p-l-oy, loyal|l-oy-a-l, royal|r-oy-a-al, alloy|a-l-l-oy, deploy|d-e-p-l-oy',
          audioOffset: 10
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
          text: 'bay, day, hay, may, pay, lay, ray, say, way, play'
        },
        {
          audioOffset: 10,
          text: 'boy, toy, joy, enjoy, annoy, employ, loyal, royal, alloy, deploy'
        }
      ]
    },
    {
      label: 'Recognising AW and OW Sounds',
      type: 'phonics',
      id: 'phonics-5',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-13.mp3',
        audioWidth: 1
      },
      data: [
        {
          microLabel: 'aw',
          text: 'jaw|j-aw, paw|p-aw, law|l-aw, raw|r-aw, saw|s-aw, hawk|h-aw-k, dawn|d-aw-n, draw|d-r-aw, lawn|l-aw-n, straw|s-t-r-aw',
          audioOffset: 0
        },
        {
          microLabel: 'ow',
          words:
            'cow|c-ow, now|n-ow, down|d-ow-n, gown|g-ow-n, town|t-ow-n, mow|m-ow, row|r-ow, crow|c-r-ow, grow|g-r-ow, snow|s-n-ow',
          audioOffset: 10
        },
        {
          microLabel: 'ow',
          words: 'glow|g-l-ow, frown|f-r-ow-n, town|t-ow-n, crown|c-r-ow-n',
          audioOffset: 20
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
          words: 'jaw, paw, law, raw, saw, hawk, dawn, draw, lawn, straw '
        },
        {
          audioOffset: 10,
          text: 'cow, now, down, gown, town, mow, row, crow, grow, snow'
        },
        {
          audioOffset: 20,
          text: 'glow, frown, town, crown'
        }
      ]
    }
  ]
};
