export default {
  label: '4 Letter Words',
  id: '4-letter-words',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Words List',
        text: [
          `Find below some basic four-letter words. Get familiar with them.`,
          {
            type: 'sitewords',
            text: `able, also, area, away, baby, back, ball, band, bank, base, bath, bear, beat, bell, belt, best, bike, bird, blow, blue, boat, body, bomb, bone, card, care, cash, cell, chat, chip, city, coat, cold, come, cook, deal, dear, deep, deny, desk, dial, diet, done, door, down, draw, duck, even, evil, exit, face, fact, fail, fall, farm, fast, fear, feel, fish, food, foot, fort, four, free, from, fuel, full, fund, gain, game, goat, gold, grow, hair, half, hall, hand, hard, harm, hate, have, head, hear, home, hurt, idea, inch, join, jump, just, keep, kick, kind, king, know, lake, lion, list, logo, long, look, lost, love, luck, made, main, make, many, milk, neck, news, next, nine, nose, only, open, page, pain, park, path, risk, road, rock, roof, room, root, rose, rush, safe, salt, same, star, wire, wise, wish, with, wood, word, year, your`,
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
        'home, road, kind, gold, lion, goat, milk, bike, love, duck, hate | heat',
        'star, fish, hand, bird, bath, bear, beat, wire, wise, wish, care | race',
        'able, also, area, away, baby, back, ball, band, bank, base',
        'card,  even, food, grow, hurt, list | silt | slit, neck, risk, your',
        'bell,  evil | live, foot, hair, idea, logo, news, with, salt | last',
        'belt, cash, deep, exit, fort, half,  long, next, rock | cork',
        'best, cell, deny, face, four, hall, join, look, nine, roof, from | form',
        'chat, desk, fact, free | reef, jump, lost, nose, room, wood, word',
        'blow, chip, dial | laid, fail, hard, just, only, root, year, lake | leak',
        'blue, city, diet | tied, fall, fuel, harm, keep | peek, luck, open | peon, rose | sore',
        'boat, coat, done, farm, full, kick, made | dame, page, rush, inch | chin',
        'body, cold, door, fast, fund, have, main, pain, safe, deal | lead',
        'bomb, come, down, fear, gain, head, king, make, park, dear | read | dare',
        'bone, cook, draw | ward, feel, game, hear, know, many, path, same'
      ]
    },
    // doubt: too advanced
    {
      type: 'completeWord',
      id: 'complete-word-cmp',
      label: 'Complete Word ',
      commonData: {
        title: `Fill in the blanks with suitable words.`
      },
      data: [
        `The ____ chef prepared a delicious meal for the guests.|ABLE
The cat sat on the windowsill, gazing at the ____ beyond.|AREA
After a tiring day, she decided to step ____ from her desk and take a short walk.|AWAY
The playground was filled with laughter as children played with a colorful ____.|BALL
The music ____ played a lively tune at the outdoor concert.|BAND`,

        `We decided to explore the ____ of the river and enjoy the scenic view.|BANK
The cat curled up on the warm ____ of the bed for a nap.|BASE
The warm water in the tub was perfect for a relaxing ____.|BATH
The teddy bear hugged tightly brought comfort to the crying ____.|BABY
As the sun set, they walked ____ to the car after a day at the beach.|BACK`,

        `The magician pulled a rabbit out of his ____ .|HAT
The rhythmic ____ of the drums echoed through the room.|BEAT
The Christmas ____ rang, signaling the start of the festive celebration.|BELL
She tightened her ____ before embarking on the challenging hike.|BELT
Their teamwork was the ____ part of the escape room challenge.|BEST`,

        `Riding a ____ is a fun and healthy way to commute.|BIKE
The colorful ____ was singing a melodious tune.|BIRD
A gentle breeze threatened to ____ away the fallen leaves.|BLOW
The sky turned a beautiful shade of ____.|BLUE
They rowed the ____ across the calm lake on a sunny afternoon.|BOAT`
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
            text: `book, both, burn, bush, busy, call, calm, came, camp, cool, copy, cost, crop, dark, data, date, dawn, dead, drop, dust, duty, each, earn, east, easy, edge, else, file, fill, find, fine, fire, five, flat, flow, gate, gear, gift, girl, give, glad, goal, good, hero, high, hill, hole, hope, hour, huge, hunt, lady, land, last, late, left, less, life, like, line, meat, meet, mind, moon, more, move, name, near, plan, play, poor, race, rain, read, rest, rice, ring, sand, save, seed, sell, shop, show, sick, side, size, skin, slow, snow, soft, soil, some, song, soon, sure, take, talk, tall, tank, tape, task, team, tell, test, than, that, them, then, they, thin, this, time, tour, town, tree, true, twin, type, user, very, wait, walk, wall, warm, wash, wave, weak, week, went, west, what, when, whom, wide, wife, wild, will, wind, wing, zero`,
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
        'book, cool, drop | prod, file | life, gate, hero, lady, plan, sand',
        'both, copy, dust, fill, gear, high, land, meet, play, save | vase',
        'burn, cost, duty, find, gift, hill, last | salt, poor, seed, zero',
        'bush, crop, each, fine, girl, hole, late | tale, mind, race | care, sell',
        'busy, dark, earn | near, fire, give, left | felt, moon, rain, shop | posh, went',
        'call, data, glad, hope, less, more, show, will, wide, sure | user',
        'calm, date, easy, five, goal, hour, life | file, move, rest, sick',
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
