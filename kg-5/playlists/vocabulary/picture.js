export default {
  label: 'Picture Words',
  id: 'picture',
  lockAfter: 4,
  list: [
    {
      type: 'completeWord',
      id: 'animals',
      label: 'Animals',
      commonData: {
        images: 'animals'
      },
      data: [
        `cat |CAT |_AT
dog|DOG |_OG
goat|GOAT |_OAT
sheep|SHEEP |_HEEP
horse|HORSE |_ORSE
pig|PIG |_IG
elephant|ELEPHANT |_LEPHANT
lion |LION |_ION
monkey|MONKEY |_ONKEY
tiger|TIGER |_IGER`,

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

        `dragonfly |DRAGON FLY |_RAGON FLY
fish|FISH |_ISH
frog|FROG |_ROG
crab|CRAB |_RAB
snake|SNAKE |_NAKE
squirrel|SQUIRREL |_QUIRREL
tortoise|TORTOISE |_ORTOISE
rat|RAT |_AT
ant|ANT |_NT`,

        `fly|HOUSEFLY |_OUSEFLY
bat| BAT| _AT
buffalo| BUFFALO | _UFFALO
butterfly| BUTTERFLY | _UTTERFLY
cheetah| CHEETAH | _HEETAH
cow| COW | _OW
donkey| DONKEY | _ONKEY
giraffe| GIRAFFE | _IRAFFE
kangaroo| KANGAROO | _ANGAROO
leopard| LEOPARD | _EOPARD`,

        `mongoose| MONGOOSE| _ONGOOSE
mosquito| MOSQUITO | _OSQUITO
octopus| OCTOPUS | _CTOPUS
wolf| WOLF | _OLF
lizard| LIZARD | _IZARD
cockroach| COCKROACH | _OCKROACH
garden-lizard| GARDEN LIZARD | _ARDEN LIZARD 
rabbit| RABBIT | _ABBIT`
      ]
    },
    {
      type: 'completeWord',
      id: 'birds',
      label: 'Birds',
      commonData: {
        images: 'birds'
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
      hornbill | HORNBILL | _ORNBILL`
      ]
    },
    {
      type: 'completeWord',
      id: 'fruits',
      label: 'Fruits',
      commonData: {
        images: 'fruits'
      },
      data: [
        `apple | APPLE | _PPLE 
grapes | GRAPES | _RAPES
banana | BANANA | _ANANA
cherry | CHERRY | _HERRY
avocado | AVOCADO | _VOCADO
strawberry | STRAWBERRY | _TRAW_ERRY
guava | GUAVA | _UAVA
jackfruit | JACKFRUIT | _ACK_RUIT
mango | MANGO | _ANGO
orange | ORANGE | _RANGE`,

        `papaya | PAPAYA | _APAYA
pineapple | PINEAPPLE | _INE_PPLE
watermelon | WATERMELON | _ATER_ELON
pomegranate| POMEGRANATE | _OMEGRANATE
fig| FIG | _IG
custard-apple| CUSTARD APPLE | _USTARD APPLE
plum| PLUM | _LUM
dates| DATES | _ATES
muskmelon| MUSKMELON | _USKMELON`
      ]
    },
    {
      type: 'completeWord',
      id: 'vegetables',
      label: 'Vegetables',
      commonData: {
        images: 'vegetables'
      },
      data: [
        `carrot | CARROT | _ARROT
        beetroot | BEETROOT | _EET_OOT
        onion | ONION | _NION
        tomato | TOMATO | _OMATO
        potato | POTATO | _OTATO
        cabbage | CABBAGE | _ABBAGE
        corn | CORN | _ORN
        cucumber |CUCUMBER |_UCUMBER
        garlic|GARLIC |_ARLIC
        ginger|GINGER |_INGER`,

        `cauliflower| CAULIFLOWER | _AULIFLOWER
pumpkin| PUMPKIN | _UMPKIN
almond| ALMOND | _LMOND
beans| BEANS | _EANS
bitter-gourd| BITTER GOURD | _ITTER GOURD
brinjal| BRINJAL | _RINJAL
capsicum| CAPSICUM | _APSICUM
cashewnut| CASHEWNUT | _ASHEWNUT
chilli| CHILLI | _HILLI
coconut | COCONUT | _OCONUT`,

        `corianderleaf | CORIANDER LEAF | _ORIANDER LEAF
curryleaf | CURRY LEAF | _URRY LEAF
drumstick| DRUMSTICK | _RUMSTICK
greenpeas| GREEN PEAS |  _REEN PEAS
ladies-finger | LADIES FINGER | _ADIES FINGER
mintleaf| MINT LEAF | _INT LEAF
peanut| PEANUT | _EANUT
raddish| RADDISH | _ADDISH
spinach | SPINACH | _PINACH`
      ]
    }
  ]
};
