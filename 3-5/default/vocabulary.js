export default {
  label: 'Vocabulary',
  id: 'vocabulary',
  img: 'vocabulary',
  grade: '0-2',
  list: [
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
        `Birds fly
Fishes swim
Frogs leap
Monkeys swing
Dogs Run`,

        `Ducks waddle
Eagles swoop
Snakes slither
Snails	Crawl
Horses	Gallop`
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
