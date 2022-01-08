export default {
  label: 'Animals and Birds',
  id: 'picture',
  list: [
    {
      type: 'completeWord',
      id: 'animals',
      label: 'Animals',
      lockAfter: 2,
      commonData: {
        images: 'animals',
        title: 'Find the missing letter and complete the word'
      },
      data: [
        `cat |CAT |_AT
dog|DOG |_OG
goat|GOAT |_OAT
cow| COW | _OW
donkey| DONKEY | _ONKEY
horse|HORSE |_ORSE
pig|PIG |_IG
elephant|ELEPHANT |_LEPHANT
lion |LION |_ION
monkey|MONKEY |_ONKEY`,

        `hippo|HIPPO |_IPPO
rhino|RHINO |_HINO
fox|FOX |_OX
crocodile|CROCODILE |_ROCODILE
zebra|ZEBRA |_EBRA
bear|BEAR |_EAR
camel|CAMEL |_AMEL
shark|SHARK |_HARK
whale|WHALE |_HALE
dolphin|DOLPHIN |_OLPHIN `,

        `tiger|TIGER |_IGER
sheep|SHEEP |_HEEP
fish|FISH |_ISH
frog|FROG |_ROG
crab|CRAB |_RAB
snake|SNAKE |_NAKE
bull | BULL | _ULL
tortoise|TORTOISE |_ORTOISE
rat|RAT |_AT
ant|ANT |_NT`,

        `bat| BAT| _AT
buffalo| BUFFALO | _UFFALO
butterfly| BUTTERFLY | _UTTERFLY
cheetah| CHEETAH | _HEETAH
bee | BEE | _EE
goldfish | GOLD FISH | _OLD FISH
spider | SPIDER | _PIDER
panda | PANDA | _ANDA
giraffe| GIRAFFE | _IRAFFE
kangaroo| KANGAROO | _ANGAROO`
      ]
    },
    {
      type: 'completeWord',
      id: 'birds',
      label: 'Birds',
      lockAfter: 1,
      commonData: {
        images: 'birds',
        title: 'Find the missing letter and complete the word'
      },
      data: [
        `crow|CROW |_ROW
dove|DOVE |_OVE
duck|DUCK |_UCK
hen|HEN |_EN
chick| CHICK | _HICK
parrot|PARROT |_ARROT
peacock|PEACOCK |_EACOCK
penguin|PENGUIN |_ENGUIN
sparrow|SPARROW |_PARROW
crane| CRANE | _RANE`,

        `eagle| EAGLE | _AGLE
flamingo| FLAMINGO | _LAMINGO
kingfisher| KINGFISHER | _INGFISHER
myna| MYNA | _YNA
ostrich| OSTRICH | _STRICH
owl| OWL | _WL
rooster| ROOSTER | _OOSTER
vulture| VULTURE | _ULTURE
woodpecker| WOODPECKER | _OODPECKER
koel | KOEL | _OEL`
      ]
    },
    {
      type: 'match',
      id: 'match-animals',
      label: 'Match Animals',
      lockAfter: 4,
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `C, cat
D, dog
G, goat
S, sheep
H, horse
P, pig`,

        `L, lion
M, monkey
T, tiger
C, camel
H, hippo
R, rhino`,

        `F, fox
C, crocodile
Z, zebra
B, bear
E, elephant
S, shark`,

        `W, whale
D, dolphin
F, frog
C, crab
S, snake
B, buffalo`,

        `F, fish
B, butterfly
S, squirrel
T, tortoise
R, rat`,

        `H, fly
B, bat
A, ant
R, rabbit
C, cheetah
L, leopard`,

        ` C, cow
D, donkey
G, giraffe
K, kangaroo
M, mongoose`,

        `M, mosquito
O, octopus
W, wolf
L, lizard
C, cockroach
G, garden-lizard`
      ]
    },
    {
      type: 'match',
      id: 'match-birds',
      label: 'Match Birds',
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `C, crow
D, dove
S, sparrow
H, hen
P, parrot`,

        `P, peacock
D, duck
E, eagle
F, flamingo
C, crane`,

        `K, kingfisher
M, myna
P, penguin
C, chick
O, ostrich`,

        `O, owl
R, rooster
V, vulture
W, woodpecker
K, koel`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Animals - Drag & Drop',
      id: 'dragDrop-animal',
      commonData: {
        title: 'Drag and Drop the name on the images.'
      },
      data: [
        `cat | Cat
dog | Dog
goat| Goat
cow| Cow
donkey| Donkey
horse| Horse`,

        `pig| Pig
elephant| Elephant
lion | Lion
monkey| Monkey
hippo| Hippo
rhino| Rhino`,

        `fox| Fox
crocodile| Crocodile
zebra| Zebra
bear| Bear
camel| Camel
shark| Shark`,

        `whale| Whale
dolphin| Dolphin
tiger| Tiger
sheep| Sheep
fish| Fish
frog| Frog`,

        `crab| Crab
snake| Snake
bull | Bull
tortoise| Tortoise
rat| Rat
ant| Ant`,

        `bat| Bat
buffalo| Buffalo
butterfly| Butterfly
cheetah| Cheetah
bee | Bee
goldfish | Goldfish`,

        `spider | Spider
panda | Panda
giraffe| Giraffe
kangaroo| Kangaroo`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Birds - Drag & Drop',
      id: 'dragDrop-birds',
      commonData: {
        title: 'Drag and Drop the name on the images.'
      },
      data: [
        `crow|Crow
dove|Dove
duck|Duck
hen|Hen
chick| Chick
parrot|Parrot`,

        `peacock|Peacock
penguin|Penguin
sparrow|Sparrow
crane| Crane`,

        `eagle| Eagle
flamingo| Flamingo
kingfisher| Kingfisher
myna| Myna
ostrich| Ostrich
owl| Owl`,

        `rooster| Rooster
vulture| Vulture
woodpecker| Woodpecker
koel | Koel`
      ]
    }
  ]
};
