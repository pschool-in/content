export default {
  label: 'Phonics 2',
  id: 'phonics-2',
  lockAfter: 2,
  list: [
    {
      label: 'All Words',
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
        text: `black, blow, blanket, blue, block, blur, blog
bless, blame, blind, climb, clean, clock, clip
cloud, clap, club, clown, close, click, flower
flag, flute, fly, floor, flight, flame, flash
flat, flood, globe, glass, glad, glue, glitter
glow, glare, glove, glide, gloss, plant, pluck
plug, play, planet, plenty, plane, plus, plan 
place, sleep, sled, slip, slipper, slam, sleeve
slide, slow, slate, slug`
      }
    },
    {
      label: 'Blending Words (Initial Blends)',
      type: 'phonics',
      id: 'phonics-6',
      commonData: {
        type: 'words',
        wordsAudio: 'kg-5/phonics/basic-phonics-14.mp3',
        breakWord: false,
        audioWidth: 1
      },
      data: [
        {
          microLabel: 'bl',
          text: 'black, blow, blanket, blue, block, blur, blog, bless, blame, blind',
          audioOffset: 0
        },
        {
          microLabel: 'cl',
          text: 'climb, clean, clock, clip, cloud, clap, club, clown, close, click',
          audioOffset: 10
        },
        {
          microLabel: 'fl',
          text: 'flower, flag, flute, fly, floor, flight, flame, flash, flat, flood',
          audioOffset: 20
        },
        {
          microLabel: 'gl',
          text: 'globe, glass, glad, glue, glitter, glow, glare, glove, glide, gloss',
          audioOffset: 30
        },
        {
          microLabel: 'pl',
          text: 'plant, pluck, plug, play, planet, plenty, plane, plus, plan, place',
          audioOffset: 40
        },
        {
          microLabel: 'sl',
          text: 'sleep, sled, slip, slipper, slam, sleeve, slide, slow, slate, slug',
          audioOffset: 50
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
          text: 'black, blow, blanket, blue, block, blur, blog, bless, blame, blind'
        },
        {
          audioOffset: 10,
          text: 'climb, clean, clock, clip, cloud, clap, club, clown, close, click'
        },
        {
          audioOffset: 20,
          text: 'flower, flag, flute, fly, floor, flight, flame, flash, flat, flood'
        },
        {
          audioOffset: 30,
          text: 'globe, glass, glad, glue, glitter, glow, glare, glove, glide, gloss'
        },
        {
          audioOffset: 40,
          text: 'plant, pluck, plug, play, planet, plenty, plane, plus, plan, place'
        },
        {
          audioOffset: 50,
          text: 'sleep, sled, slip, slipper, slam, sleeve, slide, slow, slate, slug'
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
        breakWord: false,
        audioWidth: 1
      },
      data: [
        {
          microLabel: 'br',
          text: 'broom, bride, bridge, brave, brother, brick, breathe, brake, brown, brag',
          audioOffset: 0
        },
        {
          microLabel: 'cr',
          text: 'crab, crop, crown, cricket, cry, crayon, crawl, crane, crash, crowd',
          audioOffset: 10
        },
        {
          microLabel: 'dr',
          text: 'drum, drop, draw, dress, dream, dry, drink, drill, drain, drag',
          audioOffset: 20
        },
        {
          microLabel: 'fr',
          text: 'frog, friend, free, fry, from, friday, front, frame, fresh, freeze',
          audioOffset: 30
        },
        {
          microLabel: 'gr',
          text: 'grass, grow, green, grey, grandma, great, grab, grill, grape, graph',
          audioOffset: 40
        },
        {
          microLabel: 'pr',
          text: 'prince, prize, present, proud, promise, pray, price, proper, print, press',
          audioOffset: 50
        },
        {
          microLabel: 'tr',
          text: 'truck, train, tree, trick, trip, trap, tricycle, try, track, trash',
          audioOffset: 60
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
          text: 'broom, bride, bridge, brave, brother, brick, breathe, brake, brown, brag'
        },
        {
          audioOffset: 10,
          text: 'crab, crop, crown, cricket, cry, crayon, crawl, crane, crash, crowd'
        },
        {
          audioOffset: 20,
          text: 'drum, drop, draw, dress, dream, dry, drink, drill, drain, drag'
        },
        {
          audioOffset: 30,
          text: 'frog, friend, free, fry, from, friday, front, frame, fresh, freeze'
        },
        {
          audioOffset: 40,
          text: 'grass, grow, green, grey, grandma, great, grab, grill, grape, graph'
        },
        {
          audioOffset: 50,
          text: 'prince, prize, present, proud, promise, pray, price, proper, print, press'
        },
        {
          audioOffset: 60,
          text: 'truck, train, tree, trick, trip, trap, tricycle, try, track, trash'
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
        breakWord: false,
        audioWidth: 1
      },
      data: [
        {
          microLabel: 'tw',
          text: 'twig, twin, twenty, twist, twelve, tweet, twirl, twice, twitch, twine',
          audioOffset: 0
        },
        {
          microLabel: 'sc',
          text: 'scarf, scan, scrub, scooter, scream, scale, scoop, scout, scare, scar',
          audioOffset: 10
        },
        {
          microLabel: 'sk',
          text: 'sky, skirt, skip, sketch, skin, skill, skate, skull, skunk, skim',
          audioOffset: 20
        },
        {
          microLabel: 'sm',
          text: 'small, smell, smash, smile, smoke, smart, smooth, smear, smog, smirk',
          audioOffset: 30
        },
        {
          microLabel: 'sn',
          text: 'snail, snake, snap, snore, sneak, snag, sneeze, snip, sniff, snow',
          audioOffset: 40
        },
        {
          microLabel: 'sp',
          text: 'spot, space, spin, sport, span, spoon, spare, spill, spiral, spy',
          audioOffset: 50
        },
        {
          microLabel: 'st',
          text: 'star, stamp, stem, stick, stool, stone, step, stop, stork, stump',
          audioOffset: 60
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
          text: 'twig, twin, twenty, twist, twelve, tweet, twirl, twice, twitch, twine'
        },
        {
          audioOffset: 10,
          text: 'scarf, scan, scrub, scooter, scream, scale, scoop, scout, scare, scar'
        },
        {
          audioOffset: 20,
          text: 'sky, skirt, skip, sketch, skin, skill, skate, skull, skunk, skim'
        },
        {
          audioOffset: 30,
          text: 'small, smell, smash, smile, smoke, smart, smooth, smear, smog, smirk'
        },
        {
          audioOffset: 40,
          text: 'snail, snake, snap, snore, sneak, snag, sneeze, snip, sniff, snow'
        },
        {
          audioOffset: 50,
          text: 'spot, space, spin, sport, span, spoon, spare, spill, spiral, spy'
        },
        {
          audioOffset: 60,
          text: 'star, stamp, stem, stick, stool, stone, step, stop, stork, stump'
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
        breakWord: false,
        audioWidth: 1
      },
      data: [
        {
          microLabel: 'sw',
          text: 'sweet, swim, swan, swing, sweep, sweater, swirl, swoop, sway, switch',
          audioOffset: 0
        },
        {
          microLabel: 'ch',
          text: 'chair, chalk, chin, child, chat, chase, chain, church, chick, change',
          audioOffset: 10
        },
        {
          microLabel: 'sh',
          text: 'she, shark, ship, shirt, shell, shore, sheep, short, shout, shape',
          audioOffset: 20
        },
        {
          microLabel: 'Th',
          text: 'the, this, that, them, they, than, then, these, though, those',
          audioOffset: 30
        },
        {
          microLabel: 'th',
          text: 'thumb, thread, thirty, theater, throne, think, thing, thin, thank, thesis',
          audioOffset: 40
        },
        {
          microLabel: 'wh',
          text: 'wheat, white, wheel, whale, whistle, what, where, when, which, whip',
          audioOffset: 50
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
          text: 'sweet, swim, swan, swing, sweep, sweater, swirl, swoop, sway, switch'
        },
        {
          audioOffset: 10,
          text: 'chair, chalk, chin, child, chat, chase, chain, church, chick, change'
        },
        {
          audioOffset: 20,
          text: 'she, shark, ship, shirt, shell, shore, sheep, short, shout, shape'
        },
        {
          audioOffset: 30,
          text: 'the, this, that, them, they, than, then, these, though, those'
        },
        {
          audioOffset: 40,
          text: 'thumb, thread, thirty, theater, throne, think, thing, thin, thank, thesis'
        },
        {
          audioOffset: 50,
          text: 'wheat, white, wheel, whale, whistle, what, where, when, which, whip'
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
        breakWord: false,
        audioWidth: 1
      },
      data: [
        {
          microLabel: 'nd',
          text: 'hand, land, wind, band, send, bend, pond, mend, and, sand',
          audioOffset: 0
        },
        {
          microLabel: 'mp',
          text: 'lamp, pump, hump, dump, bump, camp, damp, jump, pump, ramp',
          audioOffset: 10
        },
        {
          microLabel: 'sk',
          text: 'ask, risk, desk, task, mask, disk, tusk, bask, husk, dusk',
          audioOffset: 20
        },
        {
          microLabel: 'st',
          text: 'nest, fast, last, vest, rest, best, past, must, pest, test',
          audioOffset: 30
        },
        {
          microLabel: 'nt',
          text: 'tent, dent, sent, rent, bent, bunt, hint, hunt, lent, lint',
          audioOffset: 40
        },
        {
          microLabel: 'ft',
          text: 'lift, gift, draft, soft, shift, left, loft, raft, rift, sift',
          audioOffset: 50
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
          text: 'hand, land, wind, band, send, bend, pond, mend, and, sand'
        },
        {
          audioOffset: 10,
          text: 'lamp, pump, hump, dump, bump, camp, damp, jump, pump, ramp'
        },
        {
          audioOffset: 20,
          text: 'ask, risk, desk, task, mask, disk, tusk, bask, husk, dusk'
        },
        {
          audioOffset: 30,
          text: 'nest, fast, last, vest, rest, best, past, must, pest, test'
        },
        {
          audioOffset: 40,
          text: 'tent, dent, sent, rent, bent, bunt, hint, hunt, lent, lint'
        },
        {
          audioOffset: 50,
          text: 'lift, gift, draft, soft, shift, left, loft, raft, rift, sift'
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
        breakWord: false,
        audioWidth: 1
      },
      data: [
        {
          microLabel: 'lt',
          text: 'belt, hilt, bolt, melt, salt, cult, felt, pelt, quilt, silt',
          audioOffset: 0
        },
        {
          microLabel: 'nk',
          text: 'bank, sink, rank, blink, tank, monk, bunk, dunk, honk, junk',
          audioOffset: 10
        },
        {
          microLabel: 'ch',
          text: ' lunch, munch, fetch, crunch, match, ditch, catch, touch, such, hutch',
          audioOffset: 20
        },
        {
          microLabel: 'th',
          text: 'teeth, month, mouth, bath, cloth, faith, math, truth, filth, forth',
          audioOffset: 30
        },
        {
          microLabel: 'sh',
          text: 'dish, fish, smash, flash, wash, ash, mash, fresh, rush, hush',
          audioOffset: 40
        },
        {
          microLabel: 'lk',
          text: 'milk, silk, bulk, sulk',
          audioOffset: 50
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
          text: 'belt, hilt, bolt, melt, salt, cult, felt, pelt, quilt, silt'
        },
        {
          audioOffset: 10,
          text: 'bank, sink, rank, blink, tank, monk, bunk, dunk, honk, junk'
        },
        {
          audioOffset: 20,
          text: 'lunch, munch, fetch, crunch, match, ditch, catch, touch, such, hutch'
        },
        {
          audioOffset: 30,
          text: 'teeth, month, mouth, bath, cloth, faith, math, truth, filth, forth'
        },
        {
          audioOffset: 40,
          text: 'dish, fish, smash, flash, wash, ash, mash, fresh, rush, hush'
        },
        {
          audioOffset: 50,
          text: 'milk, silk, bulk, sulk'
        }
      ]
    }
  ]
};
