export default {
  label: 'Picture Words',
  id: 'word-from-picture',
  lockAfter: 4,
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Words from Picture',
        text: [
          '# Animals',
          {
            type: 'sitewords',
            text:
              'cat, dog, goat, sheep, horse, pig, camel, lion, monkey, tiger, hippo, rhino, fox, elephant, crocodile, zebra, bear,  shark, whale, dolphin, dragonfly, fish, frog, crab, snake, squirrel, tortoise, rat, ant, house fly, bat, buffalo, butterfly, cheetah, cow, donkey, giraffe, kangaroo, leopard, mongoose, mosquito, octopus, wolf, cockroach, garden lizard, lizard, rabbit',
            width: 120
          },
          '# Birds',
          {
            type: 'sitewords',
            text:
              'crow, dove, duck, hen, parrot, peacock, penguin, sparrow, chick, crane, eagle, flamingo, kingfisher, myna, ostrich, owl, rooster, vulture, woodpecker, hornbill',
            width: 120
          },
          '# Fruits',
          {
            type: 'sitewords',
            text:
              'apple, grapes, banana, cherry, avocado, strawberry, guava, jackfruit, mango, orange, papaya, pineapple, pomegranate, watermelon, fig, custard-apple, plum, dates, muskmelon',
            width: 120
          },
          '# Vegetables',
          {
            type: 'sitewords',
            text:
              'carrot, beetroot, onion, tomato, potato, cabbage, cauliflower, corn, cucumber, garlic, ginger, pumpkin, almond, beans, bitter gourd, brinjal, capsicum, cashew nut, chilli, coconut, coriander leaf, curry leaf, drumstick, green peas, ladies finger, mint leaf, peanut, radish, spinach',
            width: 120
          }
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'animals',
      label: 'Animals',
      commonData: {
        images: 'animals'
      },
      data: [
        `cat |CAT
dog|DOG
goat|GOAT
sheep|SHEEP
horse|HORSE
pig|PIG |___
elephant|ELEPHANT
lion |LION 
monkey|MONKEY
tiger|TIGER`,

        `hippo|HIPPO
rhino|RHINO
fox|FOX 
crocodile|CROCODILE
zebra|ZEBRA 
bear|BEAR
camel|CAMEL
shark|SHARK
whale|WHALE
dolphin|DOLPHIN`,

        `dragonfly |DRAGON FLY |D_____ ___
fish|FISH
frog|FROG
crab|CRAB
snake|SNAKE
squirrel|SQUIRREL
tortoise|TORTOISE
rat|RAT |___
ant|ANT |___`,

        `fly|HOUSE FLY |H____ ___
bat| BAT| ___
buffalo| BUFFALO 
butterfly| BUTTERFLY
cheetah| CHEETAH
cow| COW | ___
donkey| DONKEY
giraffe| GIRAFFE
kangaroo| KANGAROO
leopard| LEOPARD `,

        `mongoose| MONGOOSE
mosquito| MOSQUITO
octopus| OCTOPUS
wolf| WOLF
lizard| LIZARD
cockroach| COCKROACH
garden-lizard| GARDEN LIZARD | G_____ L_____
rabbit| RABBIT`
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
        `crow|CROW
dove|DOVE
duck|DUCK
hen|HEN |___
chick| CHICK
parrot|PARROT
peacock|PEACOCK
penguin|PENGUIN
sparrow|SPARROW
crane| CRANE`,

        `eagle| EAGLE
flamingo| FLAMINGO
kingfisher| KINGFISHER
myna| MYNA
ostrich| OSTRICH
owl| OWL
rooster| ROOSTER
vulture| VULTURE
woodpecker| WOODPECKER
hornbill | HORNBILL`
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
        `apple | APPLE
grapes | GRAPES
banana | BANANA
cherry | CHERRY
avocado | AVOCADO
strawberry | STRAWBERRY
guava | GUAVA
jackfruit | JACKFRUIT
mango | MANGO
orange | ORANGE`,

        `papaya | PAPAYA
pineapple | PINEAPPLE
watermelon | WATERMELON
pomegranate| POMEGRANATE
fig| FIG | ___
custard-apple| CUSTARD APPLE | C______ _____
plum| PLUM
dates| DATES
muskmelon| MUSKMELON`
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
        `carrot | CARROT
beetroot | BEETROOT
onion | ONION
tomato | TOMATO
potato | POTATO
cabbage | CABBAGE
corn | CORN
cucumber |CUCUMBER
garlic|GARLIC
ginger|GINGER`,

        `cauliflower| CAULIFLOWER
pumpkin| PUMPKIN
almond| ALMOND
beans| BEANS
bitter-gourd| BITTER GOURD | B_____ _____
brinjal| BRINJAL
capsicum| CAPSICUM
cashewnut| CASHEWNUT
chilli| CHILLI
coconut | COCONUT`,

        `corianderleaf | CORIANDER LEAF | C________ ____
curryleaf | CURRY LEAF | C____ ____
drumstick| DRUMSTICK
greenpeas| GREEN PEAS | G____ ____
ladies-finger | LADIES FINGER | L_____ ______
mintleaf| MINT LEAF | M___ ____
peanut| PEANUT
raddish| RADDISH
spinach | SPINACH`
      ]
    }
  ]
};
