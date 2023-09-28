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
        wordsAudio: 'kg-5/phonics/basic-phonics-8.mp3'
      },
      data: [
        {
          words:
            'am|a-m, an|a-n, as|a-s, at|a-t, be|b-e, he|h-e, me|m-e, we|w-e, if|i-f, in|i-n',
          pos: 0
        },
        {
          words:
            'is|i-s, it|i-t, hi|h-i, of|o-f, on|o-n, or|o-r, ox|o-x, no|n-o, go|g-o, so|s-o',
          pos: 10
        },
        {
          words: 'to|t-o, do|d-o, up|u-p, us|u-s, by|b-y, my|m-y',
          pos: 20
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
          words:
            'bat|b-a-t, cat|c-a-t, mat|m-a-t, fat|f-a-t, hat|h-a-t, rat|r-a-t, sat|s-a-t, ban|b-a-n, can|c-a-n, man|m-a-n',
          pos: 0
        },
        {
          words:
            'fan|f-a-n, pan|p-a-n, ran|r-a-n, van|v-a-n, dam|d-a-m, ram|r-a-m, ham|h-a-m, jam|j-a-m, bad|b-a-d, dad|d-a-d',
          pos: 10
        },
        {
          words:
            'fad|f-a-d, had|h-a-d, mad|m-a-d, lad|l-a-d, pad|p-a-d, sad|s-a-d, cap|c-a-p, lap|l-a-p, map|m-a-p, rap|r-a-p',
          pos: 20
        },
        {
          words:
            'sap|s-a-p, tap|t-a-p, bag|b-a-g, gag|-a-g, rag|r-a-g, tag|t-a-g, wag|w-a-g, bar|b-ar, car|c-ar, far|f-ar',
          pos: 30
        },
        {
          words:
            'jar|j-ar, bin|b-i-n, fin|f-i-n, pin|p-i-n, tin|t-i-n, sin|s-i-n, win|w-i-n, big|b-i-g, dig|d-i-g, fig|f-i-g',
          pos: 40
        },
        {
          words:
            'pig|p-i-g, wig|w-i-g, bid|b-i-d, hid|h-i-d, did|d-i-d, kid|k-i-d, lid|l-i-d, rid|r-i-d, bib|b-i-b, nib|n-i-b',
          pos: 50
        },
        {
          words:
            'rib|r-i-b, bit|b-i-t, fit|f-i-t, kit|k-i-t, lit|l-i-t, pit|p-i-t, sit|s-i-t, fix|f-i-x, mix|m-i-x, six|s-i-x',
          pos: 0
        },
        {
          words:
            'god|g-o-d, nod|n-o-d, pod|p-o-d, cod|c-o-d, rod|r-o-d, dog|d-o-g, fog|f-o-g, hog|h-o-g, log|l-o-g, cot|c-o-t',
          pos: 10
        },
        {
          words:
            'dot|d-o-t, got|g-o-t, hot|h-o-t, lot|l-o-t, pot|p-o-t, not|n-o-t, rot|r-o-t, job|j-o-b, box|b-o-x, fox|f-o-x',
          pos: 20
        },
        {
          words:
            'cub|c-u-b, dub|d-u-b, rub|r-u-b, tub|t-u-b, hub|h-u-b, bug|b-u-g, dug|d-u-g, hug|h-u-g, rug|r-u-g, tug|t-u-g',
          pos: 30
        },
        {
          words:
            'jug|j-u-g, sun|s-u-n, fun|f-u-n, gun|g-u-n, run|r-u-n, but|b-u-t, cut|c-u-t, hut|h-u-t, nut|n-u-t, mud|m-u-d',
          pos: 40
        },
        {
          words:
            'bud|b-u-d, pup|p-u-p, fed|f-e-d, bed|b-e-d, led|l-e-d, red|r-e-d, wed|w-e-d, den|d-e-n, hen|h-e-n, men|m-e-n',
          pos: 50
        },
        {
          words:
            'pen|p-e-n, ten|t-e-n, beg|b-a-g, leg|l-e-g, peg|p-e-g bet|b-e-t, get|g-e-t, pet|p-e-t, let|l-e-t, wet|w-e-t',
          pos: 50
        }
      ]
    },
    {
      label: 'R with AEIOU',
      type: 'phonics',
      id: 'phonics-3',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-10.mp3'
      },
      data: [
        {
          microLabel: 'er',
          text: 'after|af-ter, greater|gr-ea-ter, person|p-er-son, her|h-er, utter|uh-t-er',
          words: 0
        },
        {
          microLabel: 'ir',
          text: 'bird|b-ir-d, dirt|d-ir-t, shirt|sh-ir-t, skirt|sk-ir-t',
          words: 10
        },
        {
          microLabel: 'or',
          text: 'worm|w-or-m, work|w-or-k, worship|w-or-ship, world|w-or-l-d, story|s-t-or-ee',
          words: 20
        },
        {
          microLabel: 'ur',
          text: 'burn|b-ur-n, church|ch-ur-ch, hurt|h-ur-t, turn|t-ur-n, nurse|n-ur-s, curb|c-ur-b, fur|f-ur',
          words: 30
        },
        {
          microLabel: 'ar',
          text: 'arm|ar-m, barn|b-ar-n, car|c-ar, dart|d-ar-t, jar|j-ar',
          words: 40
        }
      ]
    },
    {
      label: 'Recognising AY and OY',
      type: 'phonics',
      id: 'phonics-4',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-11.mp3'
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
          pos: 10
        }
      ]
    },
    {
      label: 'Recognising AW and OW Sounds',
      type: 'phonics',
      id: 'phonics-5',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-12.mp3'
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
          pos: 10
        },
        {
          microLabel: 'ow',
          words: 'glow|gl-ow, frown|fr-ow-n, town|t-ow-n, crown|cr-ow-n',
          pos: 20
        }
      ]
    }
  ]
};
