const vocabulary = {
  label: 'Vocabulary',
  id: 'vocabulary',
  img: 'vocabulary',
  list: [
    {
      type: 'sequence',
      id: '3-letter-word',
      label: 'Three Letter Words',
      data: {
        text: `COW, KEY, BED, FAT, SAD, SUN, MAP, PAY, RUN, PEN, MAY, HIT, ANT, BAG, SIT`
      }
    },
    {
      type: 'sequence',
      id: '4-letter-word',
      label: 'Four Letter Words',
      data: {
        text: `HOME, TIME, ROAD, KIND, GOLD, LION, GOAT, MILK, BIKE, LOVE, DUCK, STAR, FISH, HAND, BIRD`
      }
    },
    {
      label: 'Plural Form',
      id: 'plural',
      type: 'completePuzzle',
      data: {
        type: 'rightOpen',
        title: 'Drag and drop the correct plural form.',
        text: `woman, women, womans
        ox, oxen, oxes
        tomato, tomatoes, tomatos
        onion, onions,	oniones
        boy, boys,	boies
        story, stories,	storys
        key, keys,	keies
        party, parties, partys
        mouse, mice, mouses
        house, houses, home`
      }
    },
    {
      label: 'Prefix: dis- vs un-',
      id: 'prefix',
      type: 'completePuzzle',
      data: {
        type: 'leftOpen',
        title: 'Drag and drop the correct prefix.',
        text: `kind, un, dis
        appear, dis, un
        agree, dis, un
        fit, un, dis
        obey, dis, un
        fair, un, dis
        honest, dis, un
        loyal, dis, un
        happy, un, dis
        well, un, dis`
      }
    },
    {
      id: '200',
      label: 'Fill up',
      type: 'fillup',
      data: {
        editable: true,
        title: 'Click on the blanks and fill it with the right word.',
        text: `Students have *access (excess)* to the library on holidays.
          My friends eat to *excess(access)*.
          In the forest, I saw a small house *among (between)* the trees.
          There was a big stone *between(among)* the two wheels.
          His hair was so soft. It was just *like (as)* silk.
          She is working *as (like)* a doctor.
          They got a set of 12 *knives (knifes)* and forks for their wedding.`
      }
    },
    /* {
      type: "sequence",
      id: "order-5-letter-words",
      label: "Order Word (5 letter words)",
      data: {
        text: `SMILE, DREAM, SUGAR, WORLD, MONTH, MUSIC, WATER, MOUTH, LAUGH, TIGER, MOVIE, MONEY, HOUSE,WOMAN, AFTER`,
      },
    },*/
    {
      type: 'sequence',
      id: 'order-6-letter-words',
      label: 'Order Word (6 letter words)',
      data: {
        text: `MOTHER, ADJUST, ADVICE, ACTION, FATHER, SIMPLE, GROUND, BRIDGE, DESIGN, SINGLE`
      }
    },
    {
      type: 'completeWord',
      id: 'complete-word-fruits',
      label: 'Complete Word - Fruits',
      data: {
        images: 'fruits',
        title: 'Fill in the missing letters.',
        text: `apple | APPLE | A_P_E
grapes | GRAPES | _R_P_S
banana | BANANA | _A_A_A
cherry | CHERRY | C_E_R_
avocado | AVOCADO | A_O_A_O
strawberry | STRAWBERRY | S_RA_B_R_Y`
      }
    },
    {
      type: 'completeWord',
      id: 'complete-word-animals',
      label: 'Complete Word - Animals',
      data: {
        images: 'animals',
        text: `cat | CAT | C__
dog | DOG | __G
elephant | ELEPHANT | E_E_H_N_
goat | GOAT | ___T
horse | HORSE | _O__E
lion | LION | ___N
monkey | MONKEY | M__K__
pig | PIG | __G
rhino | RHINO | R___O
tiger | TIGER | _I_E_`
      }
    },
    {
      type: 'completeWord',
      id: 'complete-word',
      label: 'Complete Word - Hint',
      data: {
        text: `A small vehicle that moves in water | BOAT | B__T
The tool of a wood cutter | AXE | A_E
A living thing that can fly | BIRD | B__D
A wild animal with stripes | TIGER | _I_E_
The only home for man | EARTH | E_R_H`
      }
    },
    {
      type: 'rightOne',
      label: 'Pick Correct Spelling',
      id: 'correct-spelling',
      data: {
        text: `CAT, KAT
APPLE, APLE
BOX, BOK
CAN, CAAN
BALL, BAL
EGG, EG
GRAPES,	GRAPS
HOME,	HOM
ICE,	ICC
ZEBRA,	ZIBRA`
      }
    },
    {
      type: 'rightOne',
      label: 'Odd one out',
      id: 'odd-one-out',
      data: {
        title: `Pick the word that does not rhyme with others.`,
        text: `ball, bat, cat, rat
fan, face, place, race
pet, hot, not, pot
sun, soon, moon, noon
bat, all, ball, call
pick, cook, look, book
week, seed, feed, weed
send, well, sell, tell
fan, fun, bun, gun`,
        noCaps: true
      }
    },
    {
      type: 'rightOne',
      label: 'Pick Correct Spelling - 2',
      id: 'correct-spelling-2',
      data: {
        text: `class, clas 
cold, kold
memory, memary 
butter, buter
sugar, suger
water, watar
once, onse
cattle, catle
wheat, wheet
meals, meels`
      }
    },
    {
      type: 'rightOne',
      label: 'Pick Correct Spelling - 3',
      id: 'correct-spelling-3',
      data: {
        text: `absence, abcense
queue, que
column, colum
extreme, extreem
almost, allmost
beginning, begining
surprise, suprise
calendar, calender
vehicle, vehical
difference, diffrence`
      }
    },
    {
      type: 'match',
      label: 'Match Antonyms',
      id: 'antonyms',
      data: {
        title: 'Match words with opposite meaning.',
        text: `yes, no
you, I
yesterday, tomorrow
young, old
early, late 
cry, laugh `
      }
    },
    {
      type: 'match',
      label: 'Match Synonyms',
      id: 'synonyms',
      data: {
        title: 'Match words with same meaning.',
        text: `huge, large
quick, fast
ill, sick
friendly, kind
silent, quiet
speak, talk
rest, relax`
      }
    },
    {
      type: 'connectLetters',
      label: 'Connect Letters to form word',
      id: 'connect-letters',
      data: {
        title: 'Connect the blocks from left to right to form meaningful word.',
        printTitle: 'Form the word using the letters.',
        type: 'image',
        text:
          'train, house, table, chair, candle, shelf, apple, grapes, banana, cherry'
      }
    },
    {
      type: 'selectWord',
      label: 'Select the silent letter in a word.',
      id: 'silent-letter',
      commonData: {
        title: `Select the silent letter in the given words.`,
        type: 'word'
      },
      data: [
        `clim*b*, dou*b*t, lis*t*en, ma*t*ch, *h*our, sc*h*ool, *k*nee, *k*now, ans*w*er, t*w*o`,
        `com*b*, dum*b*, of*t*en, wa*t*ch, w*h*at, w*h*en, *k*nife, *k*night, *w*rite, s*w*ord`,
        `lam*b*, lim*b*, cas*t*le, bu*t*cher, w*h*ere, g*h*ost,  *k*nob, *k*nock,  *w*hole, *w*rap`,
        `bom*b*, num*b*, fas*t*en, *h*onest, w*h*y,  *k*not,  *w*rist, *w*rinkle, wa*l*k, pa*l*m`,
        `de*b*t, thum*b*, r*h*ythm, sc*h*eme,  *w*reck, ec*h*o, cou*l*d, ha*l*f,  s*c*ience, s*c*issors`,
        `lik*e*, lov*e*,  b*u*ild, g*u*ess, ta*l*k, ca*l*m, autum*n*, colum*n*, i*s*land, han*d*some`,
        `mak*e*, ag*e*, g*u*est, g*u*ide, ali*g*n, si*g*n,  mus*c*le,  a*l*mond,  hym*n*, fri*d*ge`,
        `chang*e*, breath*e*, g*u*itar, whis*t*le, *w*rong, plum*b*er, su*b*tle, wom*b*,  g*u*ard, shou*l*d`,
        `hat*e*, cloth*e*s, forei*g*n, resi*g*n, fo*l*k, cha*l*k, bri*d*ge, e*d*ge, anc*h*or, ca*l*f`,
        `assi*g*n, desi*g*n, s*c*ene, s*c*ent, ba*d*ge, ju*d*ge, wou*l*d, c*h*aos, c*h*orus, tom*b*`
      ]
    }
  ]
};

export default vocabulary;
