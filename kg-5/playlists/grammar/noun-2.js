export default {
  label: 'Noun - 2',
  id: 'noun-2',
  list: [
    {
      id: 'jumble',
      type: 'sequence',
      label: 'Connect the Collection',
      lockAfter: 1,
      commonData: {
        title: 'Based on the below clue, connect letters and form the word.',
        printTitle: 'Form the word using the letters.',
        type: 'clue'
      },
      data: [
        ` a ______ of sheep | flock
a ______ of fish | school
a ______ of dancers | troupe
a ______ of thieves | gang
a ______ of singers | choir
a ______ of sailors | crew
a ______ of lions | pride
a ______ of ships | fleet
a ______ of bananas | bunch
a ______ of books | library `,

        `a ______ of flowers | bouquet
a ______ of sticks | bundle
a ______ of trees | forest
a ______ of bees | swarm
an ______ of soldiers | army
a ______ of grapes | bunch
a ______ of pupils | class
a ______ of cards | pack
a ______ of players | team
a ______ of keys | bunch`
      ]
      //lake - leak, deal - lead, dear-read, inch - chin, from - form, hate - heat, care - race
    },
    {
      type: 'group',
      label: 'Gender Bender! ',
      id: 'group',
      lockAfter: 1,
      commonData: {
        title: 'Drag and drop the below words in the respective boxes.',
        printTitle:
          'Rewrite the words given at the bottom at approprate boxes.',
        types: ['Masculine', 'Feminine']
      },
      data: [
        [
          `ram, gander, boy, bull, prince, waiter`,
          `czarina, spinster, hen, wife, queen`
        ],
        ['son, sir, actor, colt, priest', 'filly, princess, heroine, lady'],
        ['tiger, duke, man, master, monk', 'niece, aunt, bride, sister']
      ]
    },
    {
      type: 'match',
      label: 'Match the Gender Pair',
      lockAfter: 1,
      id: 'match',
      commonData: {
        title: 'Match'
      },
      data: [
        `stewardess, steward
stallion, filly
giant, giantess
grandson, granddaughter
Count, Countess`,

        `peacock, peahen
landlord, landlady
emperor, empress
milkman, milkmaid
tiger, tigress`,

        `host , hostess
goddess, god
stepson, stepdaughter
maidservant, manservant
ram, ewe`,

        `nun, monk
stag, hind
rooster, hen
washerman, washerwoman
gentleman, lady`
      ]
    },
    {
      label: 'Same Basket',
      type: 'matchByDragDrop',
      id: 'same-basket',
      lockAfter: 1,
      commonData: {
        title: 'Drag and drop words, so that nouns of same group are together.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `drumstick, capsicum, *cauliflower*
chess, snakes and ladder, *scrabble*
father, brother, *son*
elephant, boar, *zebra*
mango, apple, *orange*`,

        `oxygen, hydrogen, *nitrogen*
rooster, peacock, *falcon*
mother, sister, *daughter*
pencil, pen, *eraser*
snow, rain, *sunshine*`,

        `carrot, cabbage, *beetroot*
monopoly, checkers,  *carrom*
uncle, nephew, *grandfather*
giraffe, chimpanzee, *bison*
grapes, banana,  *kiwi*`,

        `turkey,  eagle, *vulture*
aunt, niece, *grandmother*
sharpener, ruler, *pencil box*
gale, snow, *storm*
hen, crow, *duck*`
      ]
    },
    {
      type: 'rightOne',
      label: 'Outsider',
      id: 'odd-one-out',
      data: {
        title: `Find the odd one out. `,
        text: `friend, mother, father, cousin, niece
dinner, tea, lemonade, milk, coffee
office, house, palace, mansion, flat
table, chair, sofa, stool, seat
caravan, school, bank, hospital, theatre
bicycle, bus, train, car, truck
chicken, calf, puppy, kitten, piglet
plates, hammers, axes, screwdrivers, pliers  
ten o’clock, evening, night, afternoon, noon
salesman, grocer, butcher, florist, stationer`,
        noCaps: true
      }
    }
  ]
};
