export default {
  label: 'Phonics 2',
  id: 'phonics-2',
  lockAfter: 2,
  list: [
    {
      label: 'All characters ',
      type: 'phonics',
      id: 'all-row',
      onlyBigScreen: true,
      data: {
        audio: 'kg-5/phonics/basic-phonics-14.mp3',
        audioWidth: 1,
        audioOffset: 0,
        padding: '0px',
        fontSize: '1rem',
        width: '100px',
        //title: 'எழுத்துக்களை தொட்டு ஓசையை கேளுங்கள்.',
        text: `black, blow, blanket, blue, block, blur, blog, bless, blame, blind
climb, clean, clock, clip, cloud, clap, club, clown, close, click
flower, flag, flute, fly, floor, flight, flame, flash, flat, flood
globe, glass, glad, glue, glitter, glow, glare, glove, glide, gloss
plant, pluck, plug, play, planet, plenty, plane, plus, plan, place
sleep, sled, slip, slipper, slam, sleeve, slide, slow, slate, slug`
      }
    },
    {
      label: 'Blending Words (Initial Blends)',
      type: 'phonics',
      id: 'phonics-6',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-14.mp3',
        breakWord: false
      },
      data: [
        {
          microLabel: 'bl',
          words:
            'black, blow, blanket, blue, block, blur, blog, bless, blame, blind',
          pos: 0
        },
        {
          microLabel: 'cl',
          words:
            'climb, clean, clock, clip, cloud, clap, club, clown, close, click',
          pos: 10
        },
        {
          microLabel: 'fl',
          words:
            'flower, flag, flute, fly, floor, flight, flame, flash, flat, flood',
          pos: 20
        },
        {
          microLabel: 'gl',
          words:
            'globe, glass, glad, glue, glitter, glow, glare, glove, glide, gloss',
          pos: 30
        },
        {
          microLabel: 'pl',
          words:
            'plant, pluck, plug, play, planet, plenty, plane, plus, plan, place',
          pos: 40
        },
        {
          microLabel: 'sl',
          words:
            'sleep, sled, slip, slipper, slam, sleeve, slide, slow, slate, slug',
          pos: 50
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Blending Words (Initial Blends)',
      id: 'dictation',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/phonics/basic-phonics-14.mp3',
        audioWidth: 1
      },
      data: [
        {
          audioOffset: 0,
          words:
            'black, blow, blanket, blue, block, blur, blog, bless, blame, blind'
        },
        {
          audioOffset: 10,
          words:
            'climb, clean, clock, clip, cloud, clap, club, clown, close, click'
        },
        {
          audioOffset: 20,
          words:
            'flower, flag, flute, fly, floor, flight, flame, flash, flat, flood'
        },
        {
          audioOffset: 30,
          words:
            'globe, glass, glad, glue, glitter, glow, glare, glove, glide, gloss'
        },
        {
          audioOffset: 40,
          words:
            'plant, pluck, plug, play, planet, plenty, plane, plus, plan, place'
        },
        {
          audioOffset: 50,
          words:
            'sleep, sled, slip, slipper, slam, sleeve, slide, slow, slate, slug'
        }
      ]
    },
    {
      label: 'Blending Words (Initial Blends) 2',
      type: 'phonics',
      id: 'phonics-7',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-15.mp3',
        breakWord: false
      },
      data: [
        {
          microLabel: 'br',
          words:
            'broom, bride, bridge, brave, brother, brick, breathe, brake, brown, brag',
          pos: 0
        },
        {
          microLabel: 'cr',
          words:
            'crab, crop, crown, cricket, cry, crayon, crawl, crane, crash, crowd',
          pos: 10
        },
        {
          microLabel: 'dr',
          words:
            'drum, drop, draw, dress, dream, dry, drink, drill, drain, drag',
          pos: 20
        },
        {
          microLabel: 'fr',
          words:
            'frog, friend, free, fry, from, friday, front, frame, fresh, freeze',
          pos: 30
        },
        {
          microLabel: 'gr',
          words:
            'grass, grow, green, grey, grandma, great, grab, grill, grape, graph',
          pos: 40
        },
        {
          microLabel: 'pr',
          words:
            'prince, prize, present, proud, promise, pray, price, proper, print, press',
          pos: 50
        },
        {
          microLabel: 'tr',
          words:
            'truck, train, tree, trick, trip, trap, tricycle, try, track, trash',
          pos: 60
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Blending Words (Initial Blends) 2',
      id: 'dictation-2',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/phonics/basic-phonics-15.mp3',
        audioWidth: 1
      },
      data: [
        {
          audioOffset: 0,
          words:
            'broom, bride, bridge, brave, brother, brick, breathe, brake, brown, brag'
        },
        {
          audioOffset: 10,
          words:
            'crab, crop, crown, cricket, cry, crayon, crawl, crane, crash, crowd'
        },
        {
          audioOffset: 20,
          words:
            'drum, drop, draw, dress, dream, dry, drink, drill, drain, drag'
        },
        {
          audioOffset: 30,
          words:
            'frog, friend, free, fry, from, friday, front, frame, fresh, freeze'
        },
        {
          audioOffset: 40,
          words:
            'grass, grow, green, grey, grandma, great, grab, grill, grape, graph'
        },
        {
          audioOffset: 50,
          words:
            'prince, prize, present, proud, promise, pray, price, proper, print, press'
        },
        {
          audioOffset: 60,
          words:
            'truck, train, tree, trick, trip, trap, tricycle, try, track, trash'
        }
      ]
    },
    {
      label: 'Blending Words (Initial Blends) 3',
      type: 'phonics',
      id: 'phonics-8',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-16.mp3',
        breakWord: false
      },
      data: [
        {
          microLabel: 'tw',
          words:
            'twig, twin, twenty, twist, twelve, tweet, twirl, twice, twitch, twine',
          pos: 0
        },
        {
          microLabel: 'sc',
          words:
            'scarf, scan, scrub, scooter, scream, scale, scoop, scout, scare, scar',
          pos: 10
        },
        {
          microLabel: 'sk',
          words:
            'sky, skirt, skip, sketch, skin, skill, skate, skull, skunk, skim',
          pos: 20
        },
        {
          microLabel: 'sm',
          words:
            'small, smell, smash, smile, smoke, smart, smooth, smear, smog, smirk',
          pos: 30
        },
        {
          microLabel: 'sn',
          words:
            'snail, snake, snap, snore, sneak, snag, sneeze, snip, sniff, snow',
          pos: 40
        },
        {
          microLabel: 'sp',
          words:
            'spot, space, spin, sport, span, spoon, spare, spill, spiral, spy',
          pos: 50
        },
        {
          microLabel: 'st',
          words:
            'star, stamp, stem, stick, stool, stone, step, stop, stork, stump',
          pos: 60
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Blending Words (Initial Blends) 3',
      id: 'dictation-3',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/phonics/basic-phonics-16.mp3',
        audioWidth: 1
      },
      data: [
        {
          audioOffset: 0,
          words:
            'twig, twin, twenty, twist, twelve, tweet, twirl, twice, twitch, twine'
        },
        {
          audioOffset: 10,
          words:
            'scarf, scan, scrub, scooter, scream, scale, scoop, scout, scare, scar'
        },
        {
          audioOffset: 20,
          words:
            'sky, skirt, skip, sketch, skin, skill, skate, skull, skunk, skim'
        },
        {
          audioOffset: 30,
          words:
            'small, smell, smash, smile, smoke, smart, smooth, smear, smog, smirk'
        },
        {
          audioOffset: 40,
          words:
            'snail, snake, snap, snore, sneak, snag, sneeze, snip, sniff, snow'
        },
        {
          audioOffset: 50,
          words:
            'spot, space, spin, sport, span, spoon, spare, spill, spiral, spy'
        },
        {
          audioOffset: 60,
          words:
            'star, stamp, stem, stick, stool, stone, step, stop, stork, stump'
        }
      ]
    },
    {
      label: 'Blending Words (Initial Blends) 4',
      type: 'phonics',
      id: 'phonics-9',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-17.mp3',
        breakWord: false
      },
      data: [
        {
          microLabel: 'sw',
          words:
            'sweet, swim, swan, swing, sweep, sweater, swirl, swoop, sway, switch',
          pos: 0
        },
        {
          microLabel: 'ch',
          words:
            'chair, chalk, chin, child, chat, chase, chain, church, chick, change',
          pos: 10
        },
        {
          microLabel: 'sh',
          words:
            'she, shark, ship, shirt, shell, shore, sheep, short, shout, shape',
          pos: 20
        },
        {
          microLabel: 'Th',
          words:
            'the, this, that, them, they, than, then, these, though, those',
          pos: 30
        },
        {
          microLabel: 'th',
          words:
            'thumb, thread, thirty, theater, throne, think, thing, thin, thank, thesis',
          pos: 40
        },
        {
          microLabel: 'wh',
          words:
            'wheat, white, wheel, whale, whistle, what, where, when, which, whip',
          pos: 50
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Blending Words (Initial Blends) 4',
      id: 'dictation-4',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/phonics/basic-phonics-17.mp3',
        audioWidth: 1
      },
      data: [
        {
          audioOffset: 0,
          words:
            'sweet, swim, swan, swing, sweep, sweater, swirl, swoop, sway, switch'
        },
        {
          audioOffset: 10,
          words:
            'chair, chalk, chin, child, chat, chase, chain, church, chick, change'
        },
        {
          audioOffset: 20,
          words:
            'she, shark, ship, shirt, shell, shore, sheep, short, shout, shape'
        },
        {
          audioOffset: 30,
          words: 'the, this, that, them, they, than, then, these, though, those'
        },
        {
          audioOffset: 40,
          words:
            'thumb, thread, thirty, theater, throne, think, thing, thin, thank, thesis'
        },
        {
          audioOffset: 50,
          words:
            'wheat, white, wheel, whale, whistle, what, where, when, which, whip'
        }
      ]
    },
    {
      label: 'Blending Words (Terminal Blends)',
      type: 'phonics',
      id: 'phonics-10',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-18.mp3',
        breakWord: false
      },
      data: [
        {
          microLabel: 'nd',
          words: 'hand, land, wind, band, send, bend, pond, mend, and, sand',
          pos: 0
        },
        {
          microLabel: 'mp',
          words: 'lamp, pump, hump, dump, bump, camp, damp, jump, pump, ramp',
          pos: 10
        },
        {
          microLabel: 'sk',
          words: 'ask, risk, desk, task, mask, disk, tusk, bask, husk, dusk',
          pos: 20
        },
        {
          microLabel: 'st',
          words: 'nest, fast, last, vest, rest, best, past, must, pest, test',
          pos: 30
        },
        {
          microLabel: 'nt',
          words: 'tent, dent, sent, rent, bent, bunt, hint, hunt, lent, lint',
          pos: 40
        },
        {
          microLabel: 'ft',
          words: 'lift, gift, draft, soft, shift, left, loft, raft, rift, sift',
          pos: 50
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Blending Words (Terminal Blends)',
      id: 'dictation-5',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/phonics/basic-phonics-18.mp3',
        audioWidth: 1
      },
      data: [
        {
          audioOffset: 0,
          words: 'hand, land, wind, band, send, bend, pond, mend, and, sand'
        },
        {
          audioOffset: 10,
          words: 'lamp, pump, hump, dump, bump, camp, damp, jump, pump, ramp'
        },
        {
          audioOffset: 20,
          words: 'ask, risk, desk, task, mask, disk, tusk, bask, husk, dusk'
        },
        {
          audioOffset: 30,
          words: 'nest, fast, last, vest, rest, best, past, must, pest, test'
        },
        {
          audioOffset: 40,
          words: 'tent, dent, sent, rent, bent, bunt, hint, hunt, lent, lint'
        },
        {
          audioOffset: 50,
          words: 'lift, gift, draft, soft, shift, left, loft, raft, rift, sift'
        }
      ]
    },
    {
      label: 'Blending Words (Terminal Blends) 2',
      type: 'phonics',
      id: 'phonics-11',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-19.mp3',
        breakWord: false
      },
      data: [
        {
          microLabel: 'lt',
          words: 'belt, hilt, bolt, melt, salt, cult, felt, pelt, quilt, silt',
          pos: 0
        },
        {
          microLabel: 'nk',
          words: 'bank, sink, rank, blink, tank, monk, bunk, dunk, honk, junk',
          pos: 10
        },
        {
          microLabel: 'ch',
          words:
            ' lunch, munch, fetch, crunch, match, ditch, catch, touch, such, hutch',
          pos: 20
        },
        {
          microLabel: 'th',
          words:
            'teeth, month, mouth, bath, cloth, faith, math, truth, filth, forth',
          pos: 30
        },
        {
          microLabel: 'sh',
          words: 'dish, fish, smash, flash, wash, ash, mash, fresh, rush, hush',
          pos: 40
        },
        {
          microLabel: 'lk',
          words: 'milk, silk, bulk, sulk',
          pos: 50
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Blending Words (Terminal Blends) 2',
      id: 'dictation-6',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/phonics/basic-phonics-19.mp3',
        audioWidth: 1
      },
      data: [
        {
          audioOffset: 0,
          words: 'belt, hilt, bolt, melt, salt, cult, felt, pelt, quilt, silt'
        },
        {
          audioOffset: 10,
          words: 'bank, sink, rank, blink, tank, monk, bunk, dunk, honk, junk'
        },
        {
          audioOffset: 20,
          words:
            'lunch, munch, fetch, crunch, match, ditch, catch, touch, such, hutch'
        },
        {
          audioOffset: 30,
          words:
            'teeth, month, mouth, bath, cloth, faith, math, truth, filth, forth'
        },
        {
          audioOffset: 40,
          words: 'dish, fish, smash, flash, wash, ash, mash, fresh, rush, hush'
        },
        {
          audioOffset: 50,
          words: 'milk, silk, bulk, sulk'
        }
      ]
    }
  ]
};
