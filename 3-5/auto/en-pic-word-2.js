export default {
  label: 'Fruits and Vegetables',
  id: 'en-pic-word-2',
  lang: 'en',
  list: [
    {
      type: 'rightOne',
      label: 'Pick Word: Fruits',
      id: 'pick-fruits',
      commonData: {
        type: 'words',
        fontSize: '1.5rem',
        title: 'Listen to the sound and pick the right word.',
        audio: 'en/en-fruits.mp3'
      },
      data: [
        {
          words:
            'Apple,Grapes,Banana,Cherry,Avocado,Strawberry,Guava,Jackfruit,Mango,Orange',
          audioOffset: 0
        },
        {
          words:
            'Papaya,Pineapple,Watermelon,Pomegranate,Fig,Custard Apple,Plum,Dates,Muskmelon',
          audioOffset: 20
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Pick Word: Vegetables',
      id: 'pick-vegetables',
      commonData: {
        type: 'words',
        fontSize: '1.5rem',
        title: 'Listen to the sound and pick the right word.',
        audio: 'en/en-vegetables.mp3'
      },
      data: [
        {
          words:
            'Carrot,Beetroot,Onion,Tomato,Potato,Cabbage,Corn,Cucumber,Garlic,Ginger',
          audioOffset: 0
        },
        {
          words:
            'Cauliflower,Pumpkin,Almond,Beans,Bitter Gourd,Brinjal,Capsicum,Cashewnut,Chilli,Coconut',
          audioOffset: 20
        },
        {
          words:
            'Lemon,Coriander Leaf,Curry Leaf,Drumstick,Green Peas,Ladies Finger,Mintleaf',
          audioOffset: 40
        },
        { words: 'Peanut,Radish,Spinach,Vegetables', audioOffset: 54 }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Fruits',
      id: 'write-fruits',
      commonDate: {},
      commonData: {
        title: 'Listen to the sound and write the word.',
        lang: 'en',
        audio: 'en/en-fruits.mp3'
      },
      data: [
        {
          words:
            'Apple,Grapes,Banana,Cherry,Avocado,Strawberry,Guava,Jackfruit,Mango,Orange',
          audioOffset: 0
        },
        {
          words:
            'Papaya,Pineapple,Watermelon,Pomegranate,Fig,Custard Apple,Plum,Dates,Muskmelon',
          audioOffset: 20
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Vegetables',
      id: 'write-vegetables',
      commonDate: {},
      commonData: {
        title: 'Listen to the sound and write the word.',
        lang: 'en',
        audio: 'en/en-vegetables.mp3'
      },
      data: [
        {
          words:
            'Carrot,Beetroot,Onion,Tomato,Potato,Cabbage,Corn,Cucumber,Garlic,Ginger',
          audioOffset: 0
        },
        {
          words:
            'Cauliflower,Pumpkin,Almond,Beans,Bitter Gourd,Brinjal,Capsicum,Cashewnut,Chilli,Coconut',
          audioOffset: 20
        },
        {
          words:
            'Lemon,Coriander Leaf,Curry Leaf,Drumstick,Green Peas,Ladies Finger,Mintleaf',
          audioOffset: 40
        },
        { words: 'Peanut,Radish,Spinach,Vegetables', audioOffset: 54 }
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: Fruits',
      id: 'fill-fruits',
      commonData: { images: 'stockImgs', title: 'Write the word.', lang: 'en' },
      data: [
        'apple|Apple\ngrapes|Grapes\nbanana|Banana\ncherry|Cherry\navocado|Avocado\nstrawberry|Strawberry\nguava|Guava\njackfruit|Jackfruit\nmango|Mango\norange|Orange',
        'papaya|Papaya\npineapple|Pineapple\nwatermelon|Watermelon\npomegranate|Pomegranate\nfig|Fig\ncustard-apple|Custard Apple\nplum|Plum\ndates|Dates\nmuskmelon|Muskmelon'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: Vegetables',
      id: 'fill-vegetables',
      commonData: { images: 'stockImgs', title: 'Write the word.', lang: 'en' },
      data: [
        'carrot|Carrot\nbeetroot|Beetroot\nonion|Onion\ntomato|Tomato\npotato|Potato\ncabbage|Cabbage\ncorn|Corn\ncucumber|Cucumber\ngarlic|Garlic\nginger|Ginger',
        'cauliflower|Cauliflower\npumpkin|Pumpkin\nalmond|Almond\nbeans|Beans\nbitter-gourd|Bitter Gourd\nbrinjal|Brinjal\ncapsicum|Capsicum\ncashewnut|Cashewnut\nchilli|Chilli\ncoconut|Coconut',
        'lemon|Lemon\ncorianderleaf|Coriander Leaf\ncurryleaf|Curry Leaf\ndrumstick|Drumstick\ngreenpeas|Green Peas\nladies-finger|Ladies Finger\nmintleaf|Mintleaf',
        'peanut|Peanut\nradish|Radish\nspinach|Spinach\nvegetables|Vegetables'
      ]
    },
    {
      type: 'connectLetters',
      label: 'Connect: Fruits',
      id: 'connect-fruits',
      commonData: {
        type: 'image',
        fontSize: '1rem',
        title: 'Connect letters and form the word.',
        lang: 'en'
      },
      data: [
        'apple,Apple\ngrapes,Grapes\nbanana,Banana\ncherry,Cherry\navocado,Avocado\nstrawberry,Strawberry\nguava,Guava\njackfruit,Jackfruit\nmango,Mango\norange,Orange',
        'papaya,Papaya\npineapple,Pineapple\nwatermelon,Watermelon\npomegranate,Pomegranate\nfig,Fig\ncustard-apple,Custard Apple\nplum,Plum\ndates,Dates\nmuskmelon,Muskmelon'
      ]
    },
    {
      type: 'connectLetters',
      label: 'Connect: Vegetables',
      id: 'connect-vegetables',
      commonData: {
        type: 'image',
        fontSize: '1rem',
        title: 'Connect letters and form the word.',
        lang: 'en'
      },
      data: [
        'carrot,Carrot\nbeetroot,Beetroot\nonion,Onion\ntomato,Tomato\npotato,Potato\ncabbage,Cabbage\ncorn,Corn\ncucumber,Cucumber\ngarlic,Garlic\nginger,Ginger',
        'cauliflower,Cauliflower\npumpkin,Pumpkin\nalmond,Almond\nbeans,Beans\nbitter-gourd,Bitter Gourd\nbrinjal,Brinjal\ncapsicum,Capsicum\ncashewnut,Cashewnut\nchilli,Chilli\ncoconut,Coconut',
        'lemon,Lemon\ncorianderleaf,Coriander Leaf\ncurryleaf,Curry Leaf\ndrumstick,Drumstick\ngreenpeas,Green Peas\nladies-finger,Ladies Finger\nmintleaf,Mintleaf',
        'peanut,Peanut\nradish,Radish\nspinach,Spinach\nvegetables,Vegetables'
      ]
    }
  ]
};
