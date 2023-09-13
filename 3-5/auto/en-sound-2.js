export default {
  label: 'Fruits and Vegetables',
  id: 'en-sound-2',
  lang: 'en',
  list: [
    {
      type: 'slides',
      label: 'Fruits',
      id: 'fruits',
      commonData: {
        title: 'Listen to the sound and watch the image and name.',
        audio: 'en/en-fruits.mp3'
      },
      data: [
        {
          text: 'apple|Apple\ngrapes|Grapes\nbanana|Banana\ncherry|Cherry\navocado|Avocado\nstrawberry|Strawberry\nguava|Guava\njackfruit|Jackfruit\nmango|Mango\norange|Orange',
          audioOffset: 0
        },
        {
          text: 'papaya|Papaya\npineapple|Pineapple\nwatermelon|Watermelon\npomegranate|Pomegranate\nfig|Fig\ncustard-apple|Custard Apple\nplum|Plum\ndates|Dates\nmuskmelon|Muskmelon',
          audioOffset: 20
        }
      ]
    },
    {
      type: 'slides',
      label: 'Vegetables',
      id: 'vegetables',
      commonData: {
        title: 'Listen to the sound and watch the image and name.',
        audio: 'en/en-vegetables.mp3'
      },
      data: [
        {
          text: 'carrot|Carrot\nbeetroot|Beetroot\nonion|Onion\ntomato|Tomato\npotato|Potato\ncabbage|Cabbage\ncorn|Corn\ncucumber|Cucumber\ngarlic|Garlic\nginger|Ginger',
          audioOffset: 0
        },
        {
          text: 'cauliflower|Cauliflower\npumpkin|Pumpkin\nalmond|Almond\nbeans|Beans\nbitter-gourd|Bitter Gourd\nbrinjal|Brinjal\ncapsicum|Capsicum\ncashewnut|Cashewnut\nchilli|Chilli\ncoconut|Coconut',
          audioOffset: 20
        },
        {
          text: 'lemon|Lemon\ncorianderleaf|Coriander Leaf\ncurryleaf|Curry Leaf\ndrumstick|Drumstick\ngreenpeas|Green Peas\nladies-finger|Ladies Finger',
          audioOffset: 40
        },
        {
          text: 'mintleaf|Mintleaf\npeanut|Peanut\nradish|Radish\nspinach|Spinach\nvegetables|Vegetables',
          audioOffset: 52
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Select: Fruits',
      id: 'find-fruits',
      commonData: {
        type: 'image',
        title: 'Listen to the sound and click on the image.',
        audio: 'en/en-fruits.mp3'
      },
      data: [
        {
          words:
            'apple,grapes,banana,cherry,avocado,strawberry,guava,jackfruit,mango,orange',
          audioOffset: 0
        },
        {
          words:
            'papaya,pineapple,watermelon,pomegranate,fig,custard-apple,plum,dates,muskmelon',
          audioOffset: 20
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Select: Vegetables',
      id: 'find-vegetables',
      commonData: {
        type: 'image',
        title: 'Listen to the sound and click on the image.',
        audio: 'en/en-vegetables.mp3'
      },
      data: [
        {
          words:
            'carrot,beetroot,onion,tomato,potato,cabbage,corn,cucumber,garlic,ginger',
          audioOffset: 0
        },
        {
          words:
            'cauliflower,pumpkin,almond,beans,bitter-gourd,brinjal,capsicum,cashewnut,chilli,coconut',
          audioOffset: 20
        },
        {
          words:
            'lemon,corianderleaf,curryleaf,drumstick,greenpeas,ladies-finger,mintleaf',
          audioOffset: 40
        },
        { words: 'peanut,radish,spinach,vegetables', audioOffset: 54 }
      ]
    }
  ]
};