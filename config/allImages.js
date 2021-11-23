const allImages = {
  animals: [
    'cat',
    'dog',
    'goat',
    'sheep',
    'horse',
    'pig',
    'elephant',
    'lion',
    'monkey',
    'tiger',
    'hippo',
    'rhino',
    'fox',
    'crocodile',
    'zebra',
    'bear',
    'camel',
    'shark',
    'whale',
    'dolphin',
    'dragonfly',
    'fish',
    'frog',
    'crab',
    'snake',
    'squirrel',
    'tortoise',
    'rat',
    'winged-termites',
    'ant',
    'fly',
    'bat',
    'buffalo',
    'butterfly',
    'cheetah',
    'cow',
    'donkey',
    'giraffe',
    'kangaroo',
    'leopard',
    'mongoose',
    'mosquito',
    'octopus',
    'wolf',
    'cockroach',
    'garden-lizard',
    'lizard',
    'rabbit',
    'alligator',
    'boar',
    'cricket',
    'hyena',
    'polarbear',
    'antelope',
    'bug',
    'jackal',
    'prawn',
    'baboon',
    'bull',
    'dinosaur',
    'python',
    'bison',
    'chameleon',
    'pocupine',
    'bee',
    'goldfish',
    'jellyfish',
    'tigerfish',
    'ladybug',
    'seahorse',
    'hamster',
    'mole',
    'spider',
    'caterpillar',
    'panda',
    'starfish',
    'earthworm',
    'hedgehog',
    'stingray'
  ],

  birds: [
    'crow',
    'dove',
    'duck',
    'hen',
    'parrot',
    'peacock',
    'penguin',
    'sparrow',
    'chick',
    'crane',
    'eagle',
    'flamingo',
    'kingfisher',
    'myna',
    'ostrich',
    'owl',
    'rooster',
    'vulture',
    'woodpecker',
    'hornbill',
    'koel',
    'cuckoo',
    'pheasant',
    'falcon',
    'swan',
    'bulbul',
    'spotted-dove',
    'felican',
    'humming-bird',
    'robin',
    'swallow',
    'blue-jay',
    'seagull',
    'canary',
    'goose',
    'turkey',
    'hawk',
    'cardinal',
    'parakeet'
  ],
  fruits: [
    'apple',
    'grapes',
    'banana',
    'cherry',
    'avocado',
    'strawberry',
    'guava',
    'jackfruit',
    'mango',
    'orange',
    'papaya',
    'pineapple',
    'pomegranate',
    'watermelon',
    'fig',
    'custard-apple',
    'plum',
    'dates',
    'muskmelon',
    'star-fruit',
    'dragon-fruit',
    'passion-fruit',
    'sugarcane',
    'peach',
    'sweet-potato',
    'jamun',
    'pear',
    'water-chesnut',
    'jujube',
    'sapotta',
    'tapioca',
    'blueberry'
  ],
  vegetables: [
    'carrot',
    'beetroot',
    'onion',
    'tomato',
    'potato',
    'cabbage',
    'cauliflower',
    'corn',
    'cucumber',
    'garlic',
    'ginger',
    'pumpkin',
    'almond',
    'beans',
    'bitter-gourd',
    'brinjal',
    'capsicum',
    'cashewnut',
    'chilli',
    'coconut',
    'corianderleaf',
    'curryleaf',
    'drumstick',
    'greenpeas',
    'ladies-finger',
    'mintleaf',
    'peanut',
    'raddish',
    'spinach',
    'chickpea',
    'mustard-greens',
    'turmeric',
    'turnip',
    'fenugreek',
    'tamarind',
    'elephant-yam',
    'ashgourd',
    'broad-beans',
    'snake-gourd',
    'banana-flower',
    'cluster-beans',
    'kohlrabi',
    'spring-onion',
    'banana-stem',
    'drumstick-leaves',
    'raw-banana',
    'tulsi',
    'bottlegourd',
    'ivygourd',
    'ridgegourd',
    'vegetables'
  ],

  flowers: [
    'rose',
    'lotus',
    'sunflower',
    'marigold',
    'hibiscus',
    'mogra',
    'tulip',
    'zinnia',
    'daffodil',
    'gulmohar',
    'lily',
    'pansy',
    'poppy',
    'daisy',
    'jasmine',
    'magnolia',
    'periwinkle',
    'water-lily'
  ],
  vehicles: [
    'aeroplane',
    'boat',
    'bus',
    'car',
    'cycle',
    'helicoptor',
    'motorbike',
    'ship',
    'tractor',
    'train',
    'ambulance',
    'auto',
    'cart',
    'excavator',
    'fire-engine',
    'lorry',
    'van',
    'bulldozer',
    'rocket',
    'submarine'
  ],
  house: [
    'house',
    'table',
    'bed',
    'candle',
    'chair',
    'shelf',
    'baby',
    'boy',
    'girl',
    'man',
    'woman',
    'grandfather',
    'ball',
    'coat',
    'glasses',
    'clock',
    'watch',
    'flower-pot',
    'umbrella',
    'door',
    'broom',
    'window',
    'air-conditioner',
    'sofa',
    'bucket',
    'toilet',
    'soap',
    'washing-machine',
    'backpack',
    'pillow',
    'shoe',
    'sock',
    'boots',
    'basket',
    'dustbin',
    'pyjama',
    'bed-lamp',
    'gloves',
    'scarf',
    'sweater',
    'bib',
    'handbag',
    'shirt',
    'jacket',
    'hat',
    'trousers',
    'dress'
  ],

  school: [
    'eraser',
    'pen',
    'pencil',
    'ruler',
    'schoolbag',
    'scissors',
    'sharpener',
    'waterbottle',
    'calculator',
    'book',
    'color-pencils',
    'crayons',
    'ink'
  ],
  kitchen: [
    'stove',
    'fork',
    'knife',
    'pan',
    'spoon',
    'pot',
    'butter',
    'plate',
    'tap',
    'lid',
    'blender',
    'cheese',
    'fridge',
    'lollipop',
    'salad',
    'sugar',
    'bowl',
    'chicken',
    'ice-cream',
    'meat',
    'salt',
    'sweets',
    'bread',
    'cup',
    'juice',
    'mushroom',
    'sandwich',
    'cake',
    'flour',
    'lentils',
    'rice',
    'soup'
  ],
  gadgets: [
    'camera',
    'headphone',
    'pendrive',
    'remote',
    'smartphone',
    'speaker',
    'tablet',
    'torch',
    'web-camera'
  ],
  bodyParts: ['ear', 'eye', 'foot', 'hair', 'hand', 'mouth', 'nose', 'tooth'],
  tools: [
    'axe',
    'balance',
    'blackboard',
    'hose',
    'microscope',
    'needle',
    'oven',
    'plier',
    'plough',
    'saw',
    'spade',
    'stethoscope',
    'telescope',
    'testtube',
    'thermometer',
    'trowel',
    'walkie-talkie',
    'awl',
    'compass',
    'easel',
    'hacksaw',
    'scalpel',
    'screw',
    'screwdriver',
    'flute',
    'piano',
    'tabla',
    'violin',
    'guitar',
    'saxophone',
    'trumpet',
    'xylophone'
  ],
  jobs: [
    'astronaut',
    'clown',
    'fisherman',
    'postman',
    'teacher',
    'blacksmith',
    'cobbler',
    'goldsmith',
    'potter',
    'weaver',
    'carpenter',
    'diver',
    'nurse',
    'sailor',
    'chef',
    'doctor',
    'police',
    'soldier',
    'barber',
    'washerman'
  ],
  nature: [
    'sun',
    'moon',
    'rain',
    'star',
    'milk',
    'fruits',
    'leaf',
    'world',
    'nest',
    'water-drop',
    'waterfall',
    'rainbow'
  ],
  others: [
    'ring',
    'brush',
    'bone',
    'auvai',
    'bell',
    'bird',
    'conch',
    'drums',
    'five',
    'food',
    'king',
    'kite',
    'ladder',
    'ladoo',
    'rishi',
    'wheel',
    'whistle',
    'yazl',
    'bullock-cart',
    'warrior',
    'knight',
    'chariot',
    'park',
    'garden',
    'horse-carriage',
    'touch-me-not',
    'yagna',
    'yarn-ball',
    'bow',
    'arrow',
    'fountain',
    'pouch',
    'top',
    'hexagon',
    'trident',
    'damaru',
    'trolley',
    'stick',
    'twig',
    'dhol',
    'palanquin',
    'medicine',

    'balloon',
    'radio',
    'toothbrush',
    'chocolate',
    'toothpaste',
    'box',
    'coin'
  ]
};

export default allImages;

/*
  traceAllImages();
  
  function traceAllImages() {
    let imgs = [];
    for (let i = 0; i < allImages.length; i++) {
      for (let j = 0; j < allImages[i].list.length; j++) {
        imgs.push({ url: allImages[i].list[j].img, revision: null });
      }
    }
  }
  */
