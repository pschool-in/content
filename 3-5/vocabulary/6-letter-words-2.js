export default {
  label: '6 Letter Words 2',
  id: '6-letter-words-2',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List ',
      data: {
        title: 'Words List',
        text: [
          `Find below more six-letter words. Get familiar with them.`,
          {
            type: 'sitewords',
            text: `accept, action, advice, always, august, beauty, before, better, border, breath, bridge, button, cannot, center, change, choice, common, corner, create, decide, define, depend, design, detail, dinner, doctor, eighth, engine, escape, expand, expert, finger, finish, forest, friend, garden, global, ground, height, honest, income, inside, leader, length, letter`,
            width: 100
          }
        ]
      }
    },
    {
      id: 'jumble',
      type: 'sequence',
      label: 'Form Words',
      commonData: {
        title: 'Connect the blocks to form a meaningful word.'
      },
      data: [
        'breath, narrow, writer, finger | fringe, sister | resist, detail | dilate | tailed, police, replay, change, nation',
        'choice, nature, accept, garden | danger | gander | ranged, social, doctor, profit, margin | arming, square, expand',
        'common, object, always, ground, source | course, eighth | height, public, center | centre, mobile, advice',
        'corner, orange, august, height | eighth, status, expert, reason, silent | enlist | listen | tinsel, escape, remove',
        'create, parent | entrap, beauty, honest, thirty, finish, record, master | stream, action, manage'
      ]
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'word',
      data: {
        text: `I'm not a sibling, but I share a name; I capture moments and reflect the same. What am I? |MIRROR
          I'm a unit of heat, brewing in a cup; a morning necessity, waking you up. What am I?|COFFEE
          I'm a season of heat, where days are long; I bring warmth and nature's song. What am I? |SUMMER
          I'm a silent observer, capturing scenes; a rectangular frame of moments serene. What am I? |CAMERA
          I'm a network of roads, a bustling maze; cars and people in a hectic daze. What am I? |STREET
          I'm a place for learning, a knowledge store; with teachers and books, I open the door. What am I?|SCHOOL
          I'm a window to the world, letting light in; a barrier from storms, where stories begin. What am I?|WINDOW`
      }
    },
    {
      id: 'reading-2',
      type: 'passage',
      label: 'Words List - 2',
      data: {
        title: 'Words List',
        text: [
          `Find below more six-letter words. Get familiar with them.`,
          {
            type: 'sitewords',
            text: `liquid, little, manage, margin, master, mobile, narrow, nation, nature, object, orange, parent, people, person, planet, plenty, police, profit, proper, public, reader, reason, record, remote, remove, repeat, replay, sample, search, secret, silent, sister, social, source, square, status, thirty, travel, trying, unique, wealth, winter, worker, writer, yellow`,
            width: 100
          }
        ]
      }
    },
    {
      id: 'jumble-2',
      type: 'sequence',
      label: 'Form Words - 2',
      commonData: {
        title: 'Connect the blocks to form a meaningful word.'
      },
      data: [
        'decide, people, before, income, travel, forest | softer | foster, remote, engine, reader | dearer, cannot',
        'define, person, better, inside, wealth, friend | finder | refind, repeat, yellow, liquid, secret',
        'depend, planet, border, leader | dealer, winter, global, sample, proper, button, little',
        'design | signed, plenty, bridge, letter, worker | rework, length, search | chaser | arches, dinner, unique, trying'
      ]
    }
  ]
};
