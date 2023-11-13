export default {
  label: 'Vocabulary',
  id: 'vocabulary',
  img: 'vocabulary',
  grade: '0-2',
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
        // 50 sentences (set of 10) for kg to 2nd
        `pull | _____ the door. | Pull, Push
giraffe | Giraffe has a _____ neck. | long, short
pillow | The pillow is _____ in color. | blue, red
book | The book has a _____ cover. | hard, soft
tree | The tree has _____ leaves. | green, brown
car | The car has _____ wheels. | three, four
cat | The cat has _____ fur. | soft, hard
morning | The sun is _____ in the sky. | shining, hidden
rose | The flower has _____ petals. | red, pink
mountain | The mountain is _____ in height. | tall, short`,

        `door | The door has a _____ handle. | long, round
computer | The computer is _____ in weight. | heavy, light
umbrella | The umbrella is _____ when open. | large, small
pencil | The pencil has a _____ tip. | sharp, blunt
cloud | The cloud is _____. | soft, hard
backpack| The bag is _____ in size. | big, small
cake | The cake is _____ in taste. | sweet, sour
mintleaf | The plant has _____ leaves. | green, brown
hat | The hat has a _____ ribbon. | black, blue
balloon | The balloon is _____ in shape. | round, square`,

        `butterfly | The butterfly has _____ wings. | colorful, plain
juice | The juice is _____ in taste. | sweet, bitter
ball | The ball is _____ in shape. | round, square
tortoise| The tortoise is very ______.|slow, fast
chocolate| The chocolate is _____ in taste.|sweet, sour
ship| The ship is _____ in size.| big, small
teapot| The teapot is ____ in colour.| red, orange
mirror| The mirror is _____.|tall, short
literature| There are ______ books.|many, few
sing| The _____ is singing.|girl, boy`,

        `sick| The boy is ____.|sick, happy
bat| The bat can ____.|fly, swim
fish | The fish swims in the _____ . | water, air
night | The moon is in the _____ . | sky, ocean
nest| The nest has ____ eggs.| three, four
frog | The frog has a _____ skin. | green, brown
house | The house is _____. | big, cold
duck | The duck has a _____ beak. | yellow, green
apple | The apple is _____. | sweet, sour
car | The car is _____ in color. | red, purple`,

        `horse| This is a _____.|horse, donkey
cap| The ____ is blue in colour.|cap, hat
tie| This is a ___.|tie, bow
torch| This is a _____.|torch, lamp
chin| This is my ____.|chin, cheeck
sheep| The sheep has _____ fur.|white, black
lemon| A lemon is _____ in taste.|sour, sweet
banana| The bananas are long and ______.|yellow, green
window| The window is ______.|open, closed
cup| The cup is ______ in colour.|yellow, orange`// 50 sentences (set of 10) for 3rd to 5th
        `rain | It is _______. | raining, shining
        bat2 | This is a ______ bat. | cricket, tennis`
      ]
    },
    {
      type: 'sequence',
      id: '3-letter-word',
      label: 'Three Letter Words',
      data: [
        'ice, air, fan, pen, his, lip, jar, ant, pet, hit',
        'jam, man, cat, van, fat, age, red, can, win, pig',
        'pay, yes, map, egg, box, hen, fin, boy, sun, see',
        'cow, oil, big, run'
      ]
    },
    {
      type: 'sequence',
      id: '4-letter-word',
      label: 'Four Letter Words',
      data: [
        'baby, dear, duck, long, look, four, fish, hand, bird',
        'love, luck, made, same, star, wire, wise, blue, from',
        'wish, with, wood, word, year, your, nine, fast, park',
        'book, fire, five, salt, boat, head, home, page, pain'
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
        `dog, dogs, doges
cat, cats, cates
tiger, tigers, tigeres
girl, girls, girles
fan, fans, fanes`,

        `story, stories, storys
city, cities, citys
fox, foxes, foxs
dress, dresses, dress
bench, benches, benchs`,

        `leaf, leaves, leafs
man, men, mans
mango, mangoes, mangos
potato, potatoes, potatos
child, children, childs`
      ]
    },
    {
      type: 'completeWord',
      id: 'complete-word',
      label: 'Complete Word - Hint',
      data: [
        `A small vehicle that moves in water | BOAT | B__T
The tool of a wood cutter | AXE | A_E
The liquid food we get from cows | MILK | ___K
A flower that flots in water | LOTUS | ____S
A living thing that can fly | BIRD | B__D`,

        `The place we live in | HOUSE | H____
A device that shows time | CLOCK | C___K
A big fruit whose outside is green and inside is yellow. | JACKFRUIT | ____FRU__
A wild animal with stripes | TIGER | _I_E_
The only home for man | EARTH | E_R_H`,

        `An animal that lives in trees. | MONKEY | M____Y
A bird that flies high. | EAGLE | __G_E
We need this to make sweets. | SUGAR | S____
A big fruit whose inside is red. | WATERMELON | _____M___N
The tall animal | GIRAFFE | G______`
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
        `cat, kat
dog, dag
goat, gote
sheep, sheap
cow, cov
fox, fex, focx
fly, fli
apple, aple
box, bok
can, caan`,

        `ball, bal
egg, eg
grapes,graps
home,hom
ice,icc
zebra,zibra
class, clas
cold, kold, colt
sugar, suger
water, watar`,

        `why, whi
train, trein
bus, bas
orange, arange
boat, bot
cycle, cicle
call, cal
first, farst
many, mani
write, rite`
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
        `bat, cat, *rat*
face, place, *race*
hot, not, *pot*
soon, moon, *noon*
all, ball, *call*
cook, look, *book*`,

        `boat, coat, *goat*
park, dark, *shark*
hand, band, *stand*
bright, right, *light*
gave, cave, *save*
face, race, *place*`,

        `cub, club, *rub*
cap, map, *tap*
bun, run, *sun*
but, nut, *hut*
cook, look, *book*
right, bright, *light*`
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
        `yes, no
you, I
yesterday, tomorrow
young, old
early, late
cry, laugh`,

        `fail, pass
many, few
poor, rich
speed, slow
cruel, kind
above, below`,

        `left, right
always, never
bottom, top
careful, careless
warm, cool
east, west`
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
        `huge, large
quick, fast
ill, sick
friendly, kind
silent, quiet
speak, talk`,

        `bad, evil
difficult, hard
begin, start
come, arrive
end, finish
wrong, incorrect`,

        `below, under
money, cash
child, kid
chill, cool
leave, exit
cost,price`
      ]
    },
    {
      type: 'match',
      label: 'Animals and Movements',
      id: 'match-move',
      lockAfter: 1,
      commonData: {
        title: 'Match animals and how them move.',
        fontSize: '1.2rem'
      },
      data: [
        `Birds, fly
Fishes, swim
Frogs, leap
Monkeys, swing
Dogs, Run`,

        `Ducks, waddle
Eagles, swoop
Snakes, slither
Snails,	Crawl
Horses,	Gallop`
      ]
    },
    {
      id: 'confusing-words',
      label: 'Confusing Words',
      type: 'fillup',
      data: [
        {
          title: 'To, Two, and Too',
          text: `It is never *too* late to learn.
I am going *to* read a story.
Suresh ran *two* kilometers.
This gift is *too* expensive.
Can I have *two* tickets?
Sita started *to* laugh.`,
          options: 'to, two, too'
        },
        {
          title: 'By, Buy, and Bye',
          text: `*Bye* for now! I will catch you later.
Where can I *buy* a ticket?
This book is written *by* an Indian author.
Should I *buy* a black car or a white car?
The bike was driven *by* Smith.
*Bye*, see you tomorrow.`,
          options: 'by, buy, bye'
        },
        {
          title: 'Here vs Hear',
          text: `There is no one *here*.
Can you *hear* the dog barking?
When your uncle gets *here*, tell him to wait.
The bears won't *hear* us if we're quiet.
Kids, where are you? We're *here*.
Who put the keys *here* ?
I can't *hear* you. You're mumbling.`,
          options: 'here, hear'
        }
      ]
    }
  ]
};
