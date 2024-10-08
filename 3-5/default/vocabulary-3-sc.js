export default {
  label: 'Vocabulary',
  id: 'vocabulary-3-sc',
  img: 'vocabulary',
  grade: '3-5',
  lockAfter: 100,
  list: [
    {
      type: 'classifySentence',
      label: 'Pick the right option',
      id: 'tense',
      commonData: {
        title: 'Pick the right option that fills the blank',
        variableOptions: true,
        imageType: 'stockimg'
      },
      data: [
        `apple | An apple a day keeps the _____ away. | doctor, teacher
        key | We can't enter the house if the ____ is lost. | key, lock
        toy | I got this toy scooter as a ____. | gift, lift
        rain | It is _______. | raining, shining
bat2 | This is a ______ bat. | cricket, tennis
cake | It is a __________ cake. | chocolate, vanilla
pencil | The pencil has a _____ tip. | sharp, blunt
sun | It is __________. | shining, hiding
spider | This is ______ spider. | an unpleasant, a cute
star | It is __________. | twinkling, dim`,

        `baby| The baby is __________.|crawling, walking
riding| I ____ my bicycle to school everyday.|ride, take
sunflower | The sunflower follows the ____. | sun, moon
lion | The lion is known as the "____ of the jungle." | king, queen
clock | The clock has hands that show the hours and _______. | minutes, seconds
rocket | Astronauts travel to ______ in a rocket. | space, ocean
cloud | A cloud is a collection of tiny _____ droplets. | water, dust
rain | The rain makes everything __________. | wet, dry
bee | Bees collect nectar from flower to make ______. | honey, wax
sun | The sun provides light and ______ to the Earth. | warmth, shade`,

        `rain | Rain is essential for ______ to grow. | plants, man
literature | Reading is a good ______. | habit, job
raincoat | Wear a raincoat when it _____. | rains, warms
ocean | The ocean is home to many ___ creatures. | sea, land
flag | Every _______ has its own flag. | country, street
train | The train travels on ______. | track, road
glasses | Wear glasses to ____ better. | see, hear
spade | Use a spade to ____ in the sand. | dig, rake
river | The water in the river is __________. | clear, muddy
penguin | The penguin is a bird that cannot ___. | fly, walk`,

        `valley | Cows, chickens, and pigs live on a _____. | farm, mountain
candle | A candle _____ in the dark. | glows, dims
forest | Lions, tigers, and elephants live in the _____. | forest, village
hat | Wear a hat to protect yourself from the ____. | sun, cold
scarf | Wear a scarf to protect yourself from the ____. | cold, sun
hockey| Hockey is the national game of _______.|India, China
map | We can use a map to find our ____. | way, lost toy
hand| Wash your hands to keep them ______.|clean, dirty
tiger | The tiger is a majestic wild ____.| cat, dog
cheetah| The cheetah is the _______ animal.|fastest, slowest`,

        `ladder| The boy is _______ the ladder.| climbing, clinging
ostrich| The ostrich runs _______.|fast, slow
egg| ______ lays eggs.|Hen, Rooster
lotus| Lotus grows in _____.|water, soil
running| The boy is ________.|running, walking
cough| Cover your _____ when you cough.|mouth, eyes
seesaw| Kids are _______ on the seesaw.| playing, swinging`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Emotions',
      id: 'drag-emotions',
      lockAfter: 2,
      commonData: {
        title: 'Drag the labels and drop on the images.',
        path: 'img/vocabulary'
      },
      data: [
        `happy | Happy
mad | Mad
sad| Sad
shy| Shy
tired| Tired
sleepy| Sleepy`,

        `confident | Confident
confused | Confused
disappointed | Disappointed
disgusted | Disgusted
embarrassed| Embarrassed
frightened| Frightened`,

        `guilty | Guilty
stunned | Stunned
surprised | Surprised
suspicious | Suspicious`
      ]
    },
    {
      type: 'sequence',
      id: '4-letter-word',
      label: 'Four Letter Words',
      data: [
        'bush, hero, plan, play, rest, drop, dust, duty, each',
        'high, hill, poor, hour, east, easy, hurt, many, milk',
        'hole, hope, rice, ring | grin, edge, earn | near, hear, lake, lion',
        'rain, tell, test, else, idea | aide, inch | chin, join'
      ]
    },
    {
      label: 'Plural Form',
      id: 'plural',
      type: 'completePuzzle',
      commonData: {
        type: 'rightOpen',
        title: 'Drag and drop the correct plural form.'
      },
      data: [
        `woman, women, womans
ox, oxen, oxes
tomato, tomatoes, tomatos
onion, onions,	oniones
boy, boys,	boies`,

        ` story, stories,	storys
key, keys,	keies
party, parties, partys
mouse, mice, mouses
house, houses, home`,

        `half, halves, halfs
knife, knives, knifes
hero, heroes, heros
radio, radios, radioes
tooth, teeth, tooths`
      ]
    },
    {
      type: 'completeWord',
      id: 'complete-word',
      label: 'Complete Word - Hint',
      data: [
        `A desert fruit | DATES | D____
A small model of our Earth. | GLOBE |   
A wearable device  that shows time | WATCH | ____H
Water moving from a mountain to sea. | RIVER | ____R
The biggest water body in the Earth. | OCEAN | O____`,

        `People go to work to earn their daily _____. | BREAD | B____
A desert animal | CAMEL | C____
A thing used to clean the floor | BROOM | B____
What lets the breeze to enter our house | WINDOW | W_____
This is used to give light in the dark | TORCH | T____ `,

        `Device used to measure temparature | THERMOMETER | ______METER
Rotating part of a vehicle | WHEEL | ____L
A tool used to climb heights | LADDER | __DD__
A doctor gives this to cure us. | MEDICINE | M_______ 
Our respiratory organ. | LUNGS | L___S`
      ]
    },
    {
      label: 'Rhyming Words',
      type: 'matchByDragDrop',
      id: 'rhyme',
      commonData: {
        fontSize: '1.3rem',
        dashWidth: 100
      },
      data: [
        `seed, feed, *weed*
well, sell, *tell*
fun, bun, *gun*
box, fox, *ox*
grade, blade, *fade*
float, goat, *boat*`,

        `candle, handle, *sandal*
frog, log, *jog*
date, great, *wait*
dust, crust, *adjust*
arm, harm, *charm*
grapes, apes, *shapes*`,

        `garden, pardon, *harden*
throat, float, *wrote*
use, goose, *juice*
been, queen, *screen*
teen, seen, *lean*
ice, twice, *thrice*  `
      ]
    },
    {
      type: 'match',
      label: 'Match Antonyms',
      id: 'antonyms',
      commonData: {
        title: 'Match words with opposite meaning.'
      },
      data: [
        `foolish, wise
forget, remember
glad, sad
angel, devil
battle, peace
beautiful, ugly`,

        `behind, ahead
best, worst
common, rare
complex, simple
difficult, easy
dream, reality`,

        `accept, refuse
awake, asleep
bless,curse
downwards,upwards
fresh,stale
hinder,help`
      ]
    },
    {
      type: 'match',
      label: 'Match Synonyms',
      id: 'synonyms',
      commonData: {
        title: 'Match words with same meaning.'
      },
      data: [
        `raw, uncooked
thief, burglar
mix,blend
middle, center
listen, hear
award, reward`,

        `writer, author
yearly, annually
nearly, almost
gather, collect
close, nearby
buy, purchase`,

        `alike, same
fast, rapid
change, alter
brief, short
value, worth
soon, shortly`
      ]
    },
    {
      label: 'Select the Correct Prefix',
      id: 'prefix',
      type: 'completePuzzle',
      commonData: {
        type: 'leftOpen',
        title: 'Drag and drop the correct prefix.'
      },
      data: [
        `kind, un, dis
appear, dis, un
agree, dis, un
fit, un, dis
obey, dis, un`,

        `fair, un, dis
honest, dis, un
loyal, dis, un
happy, un, dis
well, un, dis`,

        `door, in, mis
balance, im, in
happy, un, in
literate, il, un
fit, mis, im`
      ]
    },
    {
      id: '200',
      label: 'Fill up',
      type: 'fillup',
      data: {
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
    {
      type: 'sequence',
      id: '5-letter-word',
      label: 'Five Letter Words',
      data: [
        'about, write, apple, actor, again, ahead, alert | alter | later, paint, right, small',
        'argue, brown, cream, empty, forty, human, party, rough, solve, smile',
        'beach, buyer, crowd, enter, fresh, level, mount, place, scene, south | shout',
        'bench, carry, cycle, error, great, limit, plant, sense, speak, dream'
      ]
    },
    {
      type: 'selectWord',
      label: 'Select the silent letter in a word.',
      id: 'silent-letter',
      lockAfter: 2,
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
    },
    {
      id: 'confusing-words',
      label: 'Confusing Words',
      type: 'fillup',
      data: [
        {
          title: 'dear vs deer',
          text: `We saw a herd of *deer* today.
He is a very *dear* friend.
The dogs went after the wounded *deer*.
My son is very *dear* to me.
The hunter hit at a *deer* with his gun.`,
          options: 'dear, deer'
        },
        {
          title: 'Fill in the blanks with either allowed or aloud.',
          printTitle: 'allowed vs aloud',
          text: `Please read this story *aloud*.
He was not *allowed* to write the exam.
Smoking is not *allowed* in the park.
The pain made him cry *aloud*.
Swimming is not *allowed* at this beach.`,
          options: 'allowed, aloud'
        },
        {
          title: 'Fill in the blanks with either desert or dessert.',
          printTitle: 'desert vs dessert',
          text: `Plants in the *desert* do not need a lot of water.
We had chocolate cake for *dessert*.
Nobody likes to live in the *desert*.
They were lost in the *desert* for two days.
My favorite kind of *dessert* is Strawberry ice cream.`,
          options: 'desert, dessert'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Pick Correct Spelling',
      id: 'correct-spelling',
      commonData: {
        title: 'Identify the correct spelling.'
      },
      data: [
        `absence, abcense, absense
queue, que, qu
column, colum, colunm
extreme, extreem, exstream
almost, allmost
beginning, begining, begening
surprise, suprise, surprize
calendar, calender,calander
vehicle, vehical
difference, diffrence`,

        `friend,freind
great, grate
awesome, ausom
giraffe, girafee
meaning, meening
address, adress, addrass
achieve, acheive, acchive
because, becuase, becase
believe, beleive, bilieve
business, buisness, bisness`,

        `chief, cheif, cheef
coming, comming, camming
bomb, bom
ghost, gost
listen, lisen
disappoint, dissapoint
separate, seperate
similar, similer
skilful, skilfull
speech, speach`
      ]
    }
  ]
};
