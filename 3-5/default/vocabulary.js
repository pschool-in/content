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
tree | The tree has _____ leaves. | green, brown
cat | The cat has _____ fur. | soft, hard
car | The car has _____ wheels. | three, four
morning | The sun is _____ in the sky. | shining, hidden
rose | The flower has _____ petals. | red, pink
mountain | The mountain is _____. | tall, short
pencil | The pencil has a _____ tip. | sharp, blunt

teapot| The teapot is ____ in colour.| red, orange
literature| There are ______ books.|many, few
sing| The _____ is singing.|girl, boy
sick| The boy is ____.|sick, happy
bat| The bat can ____.|fly, swim
fish | The fish swims in the _____ . | water, air
night | The moon is in the _____ . | sky, ocean
nest| The nest has ____ eggs.| three, four
frog | The frog has a _____ skin. | green, brown
horse| This is a _____.|horse, donkey

cap| The ____ is blue in colour.|cap, hat
tie| This is a ___.|tie, bow
torch| This is a _____.|torch, lamp
chin| This is my ____.|chin, cheeck
sheep| The sheep has _____ fur.|white, black
lemon| A lemon is _____ in taste.|sour, sweet
window| The window is ______.|open, closed
ball | The ball is _____ in shape. | round, square
tortoise| The tortoise is very ______.|slow, fast
umbrella | The umbrella protects us from ______. | rain, cold

//make better sentences for below

cat | The cat says "__." | meow, woof
shoe | A shoe is worn on the _____. | foot, head
banana | A banana is ____ when it's ripe. | yellow, purple
rose | The flower is ____ and smells nice. | colorful, black
sun | The sun gives us light and _____. | heat, cold
pig | The pig says "______" | oink, quack
chair | I ___ on a chair. | sit, jump
tree | The tree provides _____. | shade, water
dog | The dog _____ loudly. | barks, purrs
key | A ____ unlocks a door. | key, lock

elephant | The elephant has a long ____. | trunk, tail
book | I love to ___ a good book. | read, eat
moon | The moon is bright in the _____. | night, morning
ocean | The ocean is full of _____. | water, sand
kite | A kite flies high in the ____. | sky, water
guitar | A guitar has strings and makes _____. | music, noise
camera | I take pictures with my ____. | camera, binoculars
phone | I talk on the ____ with friends. | phone, TV
sweater | I wear a sweater in ___ weather. | cold, hot
star | The star shines in the _____ sky. | night, morning`,

        // todo:
        // 50 sentences (set of 10) for 3rd to 5th
        `rain | It is _______. | raining, shining
bat2 | This is a ______ bat. | cricket, tennis
cake | It is a __________ cake. | chocolate, vanilla
dog | This is a ______ dog. | brown, white
elephant | It is a ____ animal. | big, small
ice-cream | It is __________. | cold, hot
sun | It is __________. | shining, hiding
spider | This is a ______ spider. | creepy, cute
rainbow | Rainbow is __________. | colorful, dull
star | It is __________. | twinkling, dim
apple | An apple a day keeps the _____ away. | doctor, teacher

key | We can't enter the house if the ____ is lost. | key, lock
toy | I got this toy scooter as a ____. | gift, lift


//make better sentences for below

baby| The baby is __________.|crawling, walking
riding| I ____ my bicycle to school everyday.|ride, take
sunflower | The sunflower follows the ____. | sun, moon
lion | The lion is known as the "____ of the jungle." | king, queen
clock | The clock has hands that show the hours and _______. | minutes, seconds
rocket | Astronauts travel to ______ in a rocket. | space, ocean
cloud | A cloud is a collection of tiny _____ droplets. | water, dust
rain | The rain makes everything __________. | wet, dry

bee | Bees collect nectar from flower to make ______. | honey, wax
sun | The sun provides light and ______ to the Earth. | warmth, shade
rain | Rain is essential for ______ to grow. | plants, man
literature | Reading is a good ______. | habit, job
raincoat | Wear a raincoat when it _____. | rains, warms
ocean | The ocean is home to many ___ creatures. | sea, land
flag | Every _______ has its own flag. | country, street
train | The train travels on ______. | tracks, road
glasses | Wear glasses to ____ better. | see, hear
spade | Use a spade to ____ in the sand. | dig, rake

river | The water in the river is __________. | clear, muddy
penguin | The penguin is a bird that cannot ___. | fly, walk
valley | Cows, chickens, and pigs live on a _____. | farm, mountain
candle | A candle _____ in the dark. | glows, dims
forest | Lions, tigers, and elephants live in the _____. | forest, zoo
hat | Wear a hat to protect yourself from the ____. | sun, cold
scarf | Wear a scarf to protect yourself from the ____. | cold, sun
hockey| Hockey is the national game of _______.|India, China
map | We can use a map to find our ____. | way, lost toy
hand| Wash your hands to keep them ______.|clean, dirty


tiger | The tiger is a majestic wild ____.| cat, dog
cheetah| The cheetah is the _______ animal.|fastest, slowest
ladder| The boy is _______ the ladder.| climbing, clinging
ostrich| The ostrich runs _______.|fast, slow
mango| Mango has _____ seed.| one, no
egg| ______ lays eggs.|Hen, Rooster
lotus| Lotus grows in _____.|water, soil
running| The boy is ________.|running, walking
cough| Cover your _____ when you cough.|mouth, eyes
seesaw| Kids are _______ on the seesaw.| playing, swinging`
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
