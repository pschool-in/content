export default {
  label: '4 Letter Words 2',
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
    }
  ]
};
