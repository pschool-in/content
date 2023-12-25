export default {
  label: '4 Letter Words - 2',
  id: '4-letter-words-2',
  list: [
    {
      id: 'reading-',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Words List',
        text: [
          `Find below more four-letter words. Get familiar with them.`,
          {
            type: 'sitewords',
            text: `book, both, burn, bush, busy, call, calm, came, camp, cool, copy, cost, crop, dark, data, date, dawn, dead, drop, dust, duty, each, earn, east, easy, edge, else, file, fill, find, fine, fire, five, flat, flow, gate, gear, gift, girl, give, glad, goal, good, hero, high, hill, hole, hope, hour, huge, hunt, lady, land, last, late, left, less, life, like, line, meat, meet, mind, moon, more, move, name, near, plan, play`,
            width: 90
          }
        ]
      }
    },
    {
      id: 'jumble',
      type: 'sequence',
      label: 'Form Words',
      commonData: {
        title: 'Connect the blocks to form a meaningful word.',
        printTitle: 'Form the word using the letters.'
      },
      data: [
        'book, cool, drop | prod, file | life, gate, hero, lady, plan, sand',
        'both, copy, dust, fill, gear, high, land, meet, play, save | vase',
        'burn, cost, duty, find, gift, hill, last | salt, poor, seed, zero',
        'bush, crop, each, fine, girl, hole, late | tale, mind, race | care, sell',
        'busy, dark, earn | near, fire, give, left | felt, moon, rain, shop | posh, went',
        'call, data, glad, hope, less, more, show, will, wide, sure | user',
        'calm, date, easy, five, goal, hour, life | file, move, rest, sick'
      ]
    },
    {
      type: 'completeWord',
      id: 'complete-word-cmp',
      label: 'Complete Word ',
      commonData: {
        title: `Fill in the blanks with suitable words.`
      },
      data: [
        `The _____ on the shelf is both interesting and informative.|BOOK
Don't ____ the toast; just make another slice.|BURN
The ____near the camp is full of colorful flowers.|BUSH
I'm too ____ to call right now; can we talk later?|BUSY
Stay ____ and focused during times of stress.|CALM`,

        `He ____ to the camp at dawn and set up his tent.|CAME
The ____ breeze at the edge of the lake was refreshing.|COOL
Can you ____ this document for me before the meeting?|COPY
The ____ of the new car is higher than I expected.|COST
The ____ in the field is ready for harvest.|CROP`,

        `It's ____ outside; don't forget to turn on the lights.|DARK
The ____ in the report is accurate and well-researched.|DATA
Let's schedule a ____ to meet and discuss the project.|DATE
The dawn of a new day brings ____ and possibilities.|HOPE
The ____ leaves on the ground create a crunchy sound.|DEAD`,

        `Please ____ the package off at the post office.|DROP
It's my ____ to ensure everyone's safety during the event.|DUTY
____ person has a unique perspective on life.|EACH
I ____ a living by working as a writer.|EARN`
      ]
    },
    {
      id: 'reading-2',
      type: 'passage',
      label: 'Words List - 2',
      data: {
        title: 'Words List',
        text: [
          `Find below more four-letter words. Get familiar with them.`,
          {
            type: 'sitewords',
            text: `poor, race, rain, read, rest, rice, ring, sand, save, seed, sell, shop, show, sick, side, size, skin, slow, snow, soft, soil, some, song, soon, sure, take, talk, tall, tank, tape, task, team, tell, test, than, that, them, then, they, thin, this, time, tour, town, tree, true, twin, type, user, very, wait, walk, wall, warm, wash, wave, weak, week, went, west, what, when, whom, wide, wife, wild, will, wind, wing, zero`,
            width: 90
          }
        ]
      }
    },
    {
      id: 'jumble-2',
      type: 'sequence',
      label: 'Form Words - 2',
      commonData: {
        title: 'Connect the blocks to form a meaningful word.',
        printTitle: 'Form the word using the letters.'
      },
      data: [
        'came, dawn, edge, flat, huge, like, name | mane, rice, side, twin',
        'camp, dead, else, flow, good, hunt, line, ring, size, east | seat',
        'skin, some, take, team | meat, them, time | mite, type, wall, week, user | sure',
        'slow, song, talk, tell, then, tour, warm, west, wife, read | dear | dare',
        'snow, soon, tall, test, they, town, very, wash, what, wild, meat | team',
        'soft, tank, than, thin, tree, wait, wave, when, wind, task, near | earn'
      ]
    },
    {
      type: 'completeWord',
      id: 'complete-word-cmp-2',
      label: 'Complete Word ',
      commonData: {
        title: `Fill in the blanks with suitable rhyming words words.`
      },
      data: [
        `Shook|BOOK
Turn|BURN
Lush|BUSH
Cake|BAKE
Palm|CALM`,

        `Shame|CAME
Fool|COOL
Poppy|COPY
Lost|COST
Drop|CROP`,

        `Park|DARK
Date|FATE
Hate|DATE
Rope |HOPE
Bed|DEAD`,

        `Crop|DROP
Leak|PEAK
Peach|EACH
Learn |EARN`
      ]
    }
  ]
};
