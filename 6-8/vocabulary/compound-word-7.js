export default {
  id: 'compound-word-7',
  label: 'Compound Words',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'word-formn',
      data: {
        title: 'Word Formation',
        text: [
          `Compound words are formed by combining two or more words to create a new word that has a different meaning. Compound words are mainly of three types.
1. Closed Compounds: These are compound words that are written as one word without any space or hyphens.`,
          {
            type: 'sitewords',
            text: 'anybody, everybody, nobody, somebody, anyone, everyone, someone, anything, everything, nothing, something, anywhere, everywhere, nowhere, somewhere, babysit, background, barefoot, baseball, basketball, football, bathroom, bedroom, blackberry, blueberry, breakfast, cannot, checkout, cowboy, daylight, desktop, fingerprint, firefly, forever, gentleman, grandmother, grandfather, granddaughter, grapefruit, grasshopper, headquarters, handshake, inside, keyboard, lipstick, mailbox, nevertheless, nonetheless, notebook, outside, payday, railroad, rainbow, raincoat, skateboard, smartphone, snowball, sometimes, sunflower, toothbrush, turntable, undercover, upstream, waterfall, watermelon, weekend, within, without',
            width: 120
          },
          `2. Open Compounds: These are compound words that are written as two separate words.`,
          {
            type: 'sitewords',
            text: 'book store, black eye, cell phone, close call, common sense, cotton candy, dining room, first aid, full moon, French fry, heart attack, high school, hot dog, ice cream, life jacket, living room, no one, peanut butter, post office, prime minister, real estate, remote control, report card, rib cage, role model, roller coaster, salad dressing, search engine, slam dunk, sleeping bag, time capsule, vacuum cleaner, vending machine, video game, waiting room, washing machine, web page',
            width: 120
          },
          `3. Hyphenated Compounds: These are compound words that are written with a hyphen in between the words.`,
          {
            type: 'sitewords',
            text: 'check-in, clean-cut, editor-in-chief, empty-handed, far-fetched, father-in-law, mother-in-law, sister-in-law, free-for-all, know-how, know-it-all, life-size, merry-go-round, long-distance, long-term, mind-blowing, nitty-gritty, one-sided, one-dimensional, two-dimensional, over-the-counter, run-in, runner-up, strong-arm, topsy-turvy, toss-up, up-to-date, well-being, word-of-mouth',
            width: 120
          },
          `=> Compounds words can also be classified as the following:
1. Compound nouns: These are nouns formed by combining two or more words.
Eg: toothbrush, sunglasses, teapot, birthday.
2. Compound adjectives: These are adjectives formed by combining two or more words.
Eg: red-hot, well-known, high-speed, open-minded.
3. Compound verbs: These are verbs formed by combining two or more words.
Eg: drive-in, break up, turn off, pick up.
4. Compound prepositions: These are prepositions formed by combining two or more words.
Eg: according to, because of, in spite of, out of.`
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'complete-word-cmp',
      label: 'Complete Word - Compound Words',
      commonData: {
        title: `Answer the riddles with compound words.`
      },
      data: [
        `I can be high or low, but I'm always full of energy. What am I? |Power surge| P____ surge
I'm something you can hold in your hand, but I'm not solid. What am I?| Air pocket| A__ pocket
I'm a tool that can be used to cut, but I'm not a knife. What am I?| Wire cutter| W___ cutter
I'm something you can wear on your head, but I'm not a hat. What am I?| Headband| H___band
I'm something you can use to light up a room, but I'm not a lamp. What am I? |Light bulb| L____ bulb
I'm something you can use to clean your teeth, but I'm not toothpaste. What am I? |Dental floss| D_____ floss
I'm a machine that can be used to lift heavy objects, but I'm not a crane. What am I? |Hydraulic jack| H________ jack
I'm something you use to hold two things together, but I'm not glue. What am I? |Paperclip| P____clip
I'm a container that you can carry around, but I'm not a bag. What am I? |Lunchbox| L____box
I'm something you use to make a call, but I'm not a mobile. What am I? |Telephone| T___phone`,

        `I'm something you can use to write, but I'm not a pen. What am I? |Chalkboard| C____board
I'm a machine that can be used to cook food, but I'm not an oven. What am I? |Microwave| M____wave
I'm a tool that can be used to cut down trees, but I'm not an ax. What am I? |Chainsaw| C____saw
I'm something you can use to make coffee, but I'm not a coffee maker. What am I? |Coffee grounds| C_____ grounds
I can be opened and closed, and I keep your food fresh. What am I? |Ziplock| Z__lock
I'm something you use to write on a chalkboard. What am I? |Chalk stick| C____ stick
I'm something you tie before you go outside. What am I? |Shoe lace| S___ lace
I'm the type of ball that you bounce. What am I? |Rubber ball| R_____ ball
I'm something you use to clean the dishes. What am I? |Dish soap| D___ soap
I'm something you wear on your head to keep warm. What am I? |Winter hat| W_____ hat`,

        `I'm a type of cheese that is yellow and has holes in it. What am I? |Swiss cheese| S____ cheese
I'm something you use to brush your hair. What am I? |Hair brush| H___ brush
I'm something you wear on your feet to go swimming. What am I? |Swim fin| S___ fin
I'm something you use to clean your teeth, but I'm not toothpaste. What am I? |Toothbrush| T____brush
I'm something you use to carry your things, but I'm not a backpack. What am I? |Handbag| H___bag
I'm something you use to keep food fresh, but I'm not a fridge. What am I? |Tupperware| T_____ware
I'm something you can use to clean the floor, but I'm not a broom. What am I? |Dustpan| D___pan`
      ]
    },
    {
      type: 'rightOne',
      label: 'Correct Form',
      id: 'biggest',
      commonData: {
        title: `Pick the correct form of the given words.`,
        printTitle: 'Circle the correct form of thegiven words.',
        fontSize: '1.3rem'
      },
      data: [
        `anybody, any body, any-body
everybody, every body, every-body
nobody, no body, no-body
check-in, checkin, check in
clean-cut, cleancut, clean cut  
somebody, some body, some-body
anyone, any one, any-one
book store, book-store, bookstore
black eye, blackeye, black-eye
cell phone, cellphone, cell-phone`,

        `everyone, every one, every-one
someone, some one, some-one
anything, any thing, any-thing
editor-in-chief, editorinchief, editor in chief
empty-handed, empty handed, emptyhanded
everything, every thing, every-thing
nothing, no thing, no-thing
close call, closecall, close-call
common sense, commonsense, common-sense
cotton candy, cottoncandy, cotton-candy`,

        `something, some thing, some-thing
anywhere, any where, any-where
everywhere, every where, every-where
nowhere, no where, no-where,
somewhere, some where, some-where
strong-arm, strongarm, strong arm
topsy-turvy, topsyturvy, topsy turvy
dining room, dining-room, diningroom
first aid, first-aid, firstaid
full moon, full-moon, fullmoon`,

        `babysit, baby sit, baby-sit
background, back ground, back-ground
barefoot, bare foot, bare-foot
far-fetched, farfetched, far fetched
father-in-law, fatherinlaw, father in law 
baseball, base ball, base-ball
basketball, basket ball, basket-ball
French fry, Frenchfry, French-fry,
heart attack, heartattack, heart-attack,
high school, highschool, high-school`,

        `football, foot ball, foot-ball
bathroom, bath room, bath-room
bedroom, bed room, bed-room
mother-in-law, motherinlaw, mother in law
sister-in-law, sisterinlaw, sister in law
blackberry, black berry, black-berry
blueberry, blue berry, blue-berry
hot dog, hotdog, hot-dog
ice cream, icecream, ice-cream
life jacket, lifejacket, life-jacket`,

        `breakfast, break fast, break-fast
cannot, can not, can-not
checkout, check out, check-out
free-for-all, freeforall, free for all
know-how, know how, knowhow
cowboy, cow boy, cow-boy
daylight, day light, day-light
living room, living-room, livingroom
no one, no-one, noone
peanut butter, peanutbutter, peanut-butter`,

        `desktop, desk top, desk-top
fingerprint, finger print, finger-print
firefly, fire-fly, fire fly
know-it-all, know it all, knowitall
life-size, lifesize, life size
forever, for ever, for-ever
gentleman, gentle man gentle-man
post office, postoffice, post-office
prime minister, prime-minister, primeminister
real estate, realestate, real-estate`,

        `grandmother, grand mother, grand-mother
grandfather, grand father, grand-father
granddaughter, grand daughter, grand-daughter
merry-go-round, merry go round, merrygoround
long-distance, longdistance, long distance
grapefruit, grape fruit, grape-fruit
grasshopper, grass hopper, grass-hopper
remote control, remote-control, remotecontrol
report card, reportcard, report-card
rib cage, rib-cage, ribcage`,

        `headquarters, head quarters, head-quarters
handshake, hand shake, hand-shake
inside, in-side, in side
keyboard, key-board, key board
long-term, longterm, long term
mind-blowing, mindblowing, mind blowing
lipstick, lip stick, lip-stick
role model, role-model, rolemodel
roller coaster, roller-coaster, rollercoaster
salad dressing, saladdressing, salad-dressing`,

        `mailbox, mail-box, mail box
nevertheless, never the less, never-the-less
nonetheless, none the less, none-the-less
notebook, note book, note-book
nitty-gritty, nitty gritty, nittygritty
one-sided, onesided, one sided
outside, out side, out-side
search engine, search-engine, searchengine
slam dunk, slamdunk, slam-dunk
sleeping bag, sleeping-bag, sleepingbag `,

        `payday, pay day, pay-day
railroad, rail road, rail-road
rainbow, rain bow, rain-bow
one-dimensional, onedimensional, one dimensional
two-dimensional, twodimensional, two dimensional
raincoat, rain coat, rain-coat
skateboard, skate board, skate-board
time capsule, time-capsule, timecapsule
vacuum cleaner, vacuumcleaner, vacuum-cleaner
vending machine, vending-machine, vendingmachine`,

        `smartphone, smart phone, smart-phone
snowball, snow-ball, snow ball
sometimes, some times, some-times
over-the-counter, overthecounter, over the counter
run-in, runin, run in  
sunflower, sun flower, sun-flower
toothbrush, tooth brush, tooth-brush
video game, videogame,  video-game
waiting room, waitingroom, waiting-room
washing machine, washingmachine, washing-machine
web page, web-page, webpage`,

        `runner-up, runnerup, runner up
toss-up, tossup, toss up
up-to-date, uptodate, up to date
well-being, wellbeing, well being 
word-of-mouth, wordofmouth, word of mouth `
      ]
    },
    {
      label: 'Noun or Adjective',
      type: 'group',
      id: 'noun-adj',
      data: {
        title: 'Classify the following as compound noun or compound adjective.',
        types: [
          {
            name: 'Noun',
            text: 'anybody, everybody, nobody, somebody, anyone'
          },
          {
            name: 'Adjective',
            text: 'red-hot, well-known, high-speed, open-minded'
          }
        ]
      }
    },
    {
      label: 'Verb or Preposition',
      type: 'group',
      id: 'verb-pre',
      data: {
        title:
          'Classify the following as compound verb or compound preposition.',
        types: [
          {
            name: 'Verb',
            text: 'drive-in, break up, turn off, pick up'
          },
          {
            name: 'Preposition',
            text: 'according to, because of, in spite of, out of'
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      lockAfter: 1,
      commonData: {
        title: 'Fill in the blanks using suitable compound words.'
      },
      data: [
        `The ladybug crawled up the *sunflower* stem.
The soccer team practiced on the *grassy field*. 
The *bookshelf* in the corner was filled with novels.
The *ice cream* truck drove slowly down the neighborhood street.
The *chocolate chip* cookie was delicious.`,

        `The *skyscraper* was a marvel of modern engineering.
She wore a brightly colored *sunflower-print* dress to the party.
The football team practiced on the *well-manicured* turf field.
The movie theater was showing a *science-fiction* thriller.
He drove his car through the busy downtown *intersection*.`,

        `The campers gathered around the crackling *campfire*.
The chef prepared a mouth-watering *three-course* meal.
The bookstore had a vast selection of *best-selling* novels.
The babysitter read the bedtime story to the *wide-eyed* children.
The fireman used a *high-pressure* water hose to extinguish the flames.`,

        `The *lifeguard* watched the swimmers from the poolside chair.
The *birthday* cake was decorated with colorful frosting and candles.
The doctor prescribed a *high-dose* pain medication for the patient.
The soccer players kicked the ball back and forth on the *grassy field*.
The wedding reception was held in a beautifully decorated *banquet hall*.`,

        `The *snowstorm* caused widespread power outages across the city.
The *pet store* sold a variety of furry and scaly creatures.
The construction workers used *heavy-duty* equipment to excavate the site.
The *fashion designer* created a stunning haute couture collection.
The *police officer* apprehended the suspect and put him in handcuffs.`
      ]
    }
  ]
};
