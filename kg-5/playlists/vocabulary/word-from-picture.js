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
        text: `# Fruits
            {"type": "sitewords", "text": "apple, grapes, banana, cherry, avocado, strawberry, guava, jackfruit, mango, orange, papaya, pineapple, pomegranate, watermelon", "width": 120 }
            # Vegetables
            {"type": "sitewords", "text": "carrot, beetroot, onion, tomato, potato, cabbage, cauliflower, corn, cucumber, garlic, ginger", "width": 120 }
            # Flowers
            {"type": "sitewords", "text": "rose, lotus, sunflower, marigold, hibiscus, jasmine", "width": 120 }
            # Vehicles
            {"type": "sitewords", "text": "aeroplane, boat, bus, car, cycle, helicoptor, motorbike, ship, tractor, train", "width": 120 }
            # House
            {"type": "sitewords", "text": "house, table, bed, candle, chair, shelf, boy, girl, man, woman, ball, coat, glasses", "width": 120 }
            # School
            {"type": "sitewords", "text": "eraser, pen, pencil, ruler, schoolbag, scissors, sharpener, waterbottle", "width": 120 }
            # Kitchen
            {"type": "sitewords", "text": "stove, fork, knife, pan, spoon, pot, butter", "width": 120 }
            # Gadgets
            {"type": "sitewords", "text": "camera, headphone, pendrive, remote, smartphone, speaker, tablet, torch", "width": 120 }
            # Animals
            {"type": "sitewords", "text": "cat, dog, goat, sheep, horse, pig, camel, lion, monkey, tiger, hippo, rhino, fox, elephant, crocodile, zebra, bear,  shark, whale, dolphin, dragonfly, fish, frog, crab, snake, squirrel, tortoise, rat,ant,house fly", "width": 120 }
            # Birds
            {"type": "sitewords", "text": "crow, dove, duck, hen, parrot, peacock, penquin, sparrow", "width": 120 }
            # Body Parts
            {"type": "sitewords", "text": "ear, eye, foot, hair, hand, mouth, nose, tooth", "width": 120 }
            # Nature
            {"type": "sitewords", "text": "sun, rain, star, milk, bird, fruits, leaf,  world", "width": 120 }
            # Objects
            {"type": "sitewords", "text": "bell, drums, food, king, kite, ladder, ring, brush, bone, wheel, whistle", "width": 120 }
            `
      }
    },
    {
      type: 'completeWord',
      id: 'fruits',
      label: 'Complete Word - Fruits',
      data: {
        images: 'fruits',
        text: `apple |APPLE |____E
grapes|GRAPES |_____S
banana|BANANA |_____A
cherry|CHERRY |_____Y
avocado|AVOCADO |_VO____
strawberry|STRAWBERRY |____W____Y
guava|GUAVA |_UA__
jackfruit|JACKFRUIT |___K____T
mango|MANGO |____O
orange|ORANGE |_____E
papaya|PAPAYA |_____A
pineapple|PINEAPPLE |___E____E
watermelon|WATERMELON |____R____N`
      }
    },
    {
      type: 'completeWord',
      id: 'vehicles',
      label: 'Complete Word - Vehicles',
      data: {
        images: 'vehicles',
        text: `aeroplane | AEROPLANE | A___P____
boat | BOAT | ___T
bus | BUS | __S
car|CAR |__R
cycle|CYCLE |____E
helicoptor|HELICOPTOR |____C____R
motorbike|MOTORBIKE |M____B___
ship|SHIP |___P
tractor|TRACTOR |____T_R
train|TRAIN |____N`
      }
    },
    {
      type: 'completeWord',
      id: 'flowers',
      label: 'Complete Word - Flowers',
      data: {
        images: 'flowers',
        text: `rose |ROSE |___E
lotus|LOTUS |____S
sunflower|SUNFLOWER |___F____R
marigold|MARIGOLD |____G___
hibiscus|HIBISCUS |____S__S
jasmine|JASMINE |______E`
      }
    },
    {
      type: 'completeWord',
      id: 'vegetables',
      label: 'Complete Word - Vegetables',
      data: {
        images: 'vegetables',
        text: `carrot |CARROT |_____T
beetroot|BEETROOT |___T___T
onion|ONION |____N
tomato|TOMATO |_____O
potato|POTATO |_____O
cabbage|CABBAGE |______E
corn|CORN |___N
cucumber|CUCUMBER |____M__R
garlic|GARLIC |_____C
ginger|GINGER |_____R`
      }
    },
    {
      type: 'completeWord',
      id: 'house',
      label: 'Complete Word - House',
      data: {
        images: 'house',
        text: `man |MAN |__N
woman |WOMAN |____N
boy|BOY |__Y
girl|GIRL |___L
house|HOUSE |____E
table|TABLE |____E
bed|BED |__D
candle|CANDLE |_____E
chair|CHAIR |____R
shelf|SHELF |____F
ball|BALL |___L
coat|COAT |___T
glasses|GLASSES |______S`
      }
    },
    {
      type: 'completeWord',
      id: 'kitchen',
      label: 'Complete Word - Kitchen',
      data: {
        images: 'kitchen',
        text: `stove |STOVE |____E
fork|FORK |___K
knife|KNIFE |____E
pan|PAN |__N
spoon|SPOON |____N
pot|POT |__T
butter|BUTTER |_____R`
      }
    },
    {
      type: 'completeWord',
      id: 'birds',
      label: 'Complete Word - Birds',
      data: {
        images: 'birds',
        text: `crow |CROW |___W
dove|DOVE |___E
duck|DUCK |___K
hen|HEN |__N
parrot|PARROT |_____T
peacock|PEACOCK |______K
penguin|PENGUIN |______N
sparrow|SPARROW |______W`
      }
    },
    {
      type: 'completeWord',
      id: 'parts-body',
      label: 'Complete Word - Body Parts',
      data: {
        images: 'bodyParts',
        text: `ear |EAR |__R
eye|EYE |___
foot|FOOT |__OT
hair|HAIR |___R
hand|HAND |___D
mouth|MOUTH |M____
nose|NOSE |___E
tooth|TOOTH |TO___`
      }
    },
    {
      type: 'completeWord',
      id: 'nature',
      label: 'Complete Word - Nature',
      data: {
        images: 'others',
        text: `sun |SUN |___
rain|RAIN |____
star|STAR |____
milk|MILK |___K
bird|BIRD |___D
fruits|FRUITS |____TS
leaf|LEAF |___F
world|WORLD |____D`
      }
    },
    {
      type: 'completeWord',
      id: 'objects',
      label: 'Complete Word - Objects',
      data: {
        images: 'custom',
        text: `pen |PEN |__N
pencil|PENCIL |_____L
ruler|RULER |____R
eraser|ERASER |_____R
scissors|SCISSORS |______RS
sharpener|SHARPENER |____P___R
bell|BELL |___L
whistle|WHISTLE |_____LE`
      }
    },
    {
      type: 'completeWord',
      id: 'objects-2',
      label: 'Complete Word - Objects - 2',
      data: {
        images: 'others',
        text: `ring |RING |___G
brush|BRUSH |____H
bone|BONE |___E
drums|DRUMS |___MS
food|FOOD |___D
king|KING |___G
kite|KITE |___E
ladder|LADDER |_____R
wheel|WHEEL |____L`
      }
    },

    {
      type: 'completeWord',
      id: 'animals',
      label: 'Complete Word - Domestic Animals',
      data: {
        images: 'animals',
        text: `cat |CAT |___
        dog|DOG |___
        goat|GOAT |___T
        sheep|SHEEP |____P
        horse|HORSE |____E
        pig|PIG |___
        camel|CAMEL |____L`
      }
    },
    {
      type: 'completeWord',
      id: 'animals-2',
      label: 'Complete Word - Wild Animals',
      data: {
        images: 'animals',
        text: `lion |LION |___N
monkey|MONKEY |_____Y
tiger|TIGER |____R
hippo|HIPPO |____O
rhino|RHINO |____O
fox|FOX |___
elephant|ELEPHANT |____H__T
crocodile|CROCODILE |___C____E
zebra|ZEBRA |____A
bear|BEAR |___R
shark|SHARK |____K
whale|WHALE |____E
dolphin|DOLPHIN |______N`
      }
    },
    {
      type: 'completeWord',
      id: 'animals-3',
      label: 'Complete Word - Small Animals',
      data: {
        images: 'animals',
        text: `dragonfly |DRAGONFLY |_____N__Y
fish|FISH |___H
frog|FROG |___G
crab|CRAB |___B
snake|SNAKE |____E
squirrel|SQUIRREL |_______L
tortoise|TORTOISE |___T___E
rat|RAT |___
ant|ANT |___
fly|HOUSEFLY |____E__Y`
      }
    },
    {
      type: 'completeWord',
      id: 'gadgets',
      label: 'Complete Word - Gadgets',
      data: {
        images: 'gadgets',
        text: `camera |CAMERA |_____A
headphone |HEADPHONE |___D____E
pendrive|PENDRIVE |__N____E
remote|REMOTE |_____E
smartphone|SMARTPHONE |____T____E
speaker|SPEAKER |______R
tablet|TABLET |_____T
torch|TORCH |____H`
      }
    }
  ]
};
