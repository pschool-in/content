export default {
    label: 'House and Other 2',
    id: 'word-sound-4',
    list: [
      {
        type: 'rightOne',
        label: 'Identify House',
        id: 'sound-house',
        lockAfter: 2,
        commonData: {
          title: 'Listen to the sound and click on the household item.',
          type: 'words',
          audio: 'kg-5/house-dress-1.mp3'
        },
        data: [
          {
            audioOffset: 0,
            words: 'man, woman, boy, girl, baby, house, table, bed, candle, chair'
          },
          {
            audioOffset: 18,
            words:
              'shelf, coat, glasses, clock, watch, flower pot, umbrella, door, broom'
          },
          {
            audioOffset: 38,
            words: 'window, sofa, bucket, toilet, soap, backpack'
          },
          {
            audioOffset: 50,
            words:
              'pillow, basket, dustbin, bed lamp, handbag, air conditioner, washing machine'
          }
        ]
      },
      {
        type: 'rightOne',
        label: 'Identify Dress',
        id: 'sound-dress',
        lockAfter: 2,
        commonData: {
          title: 'Listen to the sound and click on the clothing item.',
          type: 'words',
          audio: 'kg-5/house-dress-1.mp3'
        },
        data: [
          {
            audioOffset: 64,
            words: 'dress, coat, shoe, sock, boots, pyjama, gloves, scarf'
          },
          {
            audioOffset: 80,
            words: 'sweater, bib, shirt, jacket, hat, trousers'
          }
        ]
      },
      {
        type: 'rightOne',
        label: 'Identify School',
        id: 'sound-school',
        lockAfter: 2,
        commonData: {
          title: 'Listen to the sound and click on the word.',
          type: 'words',
          audio: 'kg-5/school-kitchen-1.mp3'
        },
        data: [
          {
            audioOffset: 0,
            words: 'pen, pencil, ruler, eraser, scissors, sharpener, calculator'
          },
          {
            audioOffset: 14,
            words: 'book, ink, schoolbag, waterbottle, color pencils, crayons'
          }
        ]
      },
      {
        type: 'rightOne',
        label: 'Identify Kitchen',
        id: 'sound-kitchen',
        lockAfter: 2,
        commonData: {
          title: 'Listen to the sound and click on the word.',
          type: 'words',
          audio: 'kg-5/school-kitchen-1.mp3'
        },
        data: [
          {
            audioOffset: 26,
            words: 'stove, fork, knife, pan, spoon, pot, butter'
          },
          {
            audioOffset: 40,
            words:
              'plate, tap, lid, blender, cheese, fridge, lollipop, salad, sugar, bowl'
          },
          {
            audioOffset: 60,
            words:
              'chicken, ice cream, meat, salt, sweets, bread, cup, juice, mushroom, sandwich'
          },
          {
            audioOffset: 80,
            words: 'cake, flour, lentils, rice, soup'
          }
        ]
      },
      {
        type: 'dictation',
        label: 'Dictation-House',
        id: 'dictation-house',
        lockAfter: 2,
        commonData: {
          title: 'Listen to the sound and type the word.',
          audio: 'kg-5/house-dress-1.mp3'
        },
        data: [
          {
            audioOffset: 0,
            words: 'man, woman, boy, girl, baby, house, table, bed, candle, chair'
          },
          {
            audioOffset: 18,
            words:
              'shelf, coat, glasses, clock, watch, flower pot, umbrella, door, broom'
          },
          {
            audioOffset: 38,
            words: 'window, sofa, bucket, toilet, soap, backpack'
          },
          {
            audioOffset: 50,
            words:
              'pillow, basket, dustbin, bed lamp, handbag, air conditioner, washing machine'
          }
        ]
      },
      {
        type: 'dictation',
        label: 'Dictation Dress',
        id: 'dictation-dress',
        lockAfter: 2,
        commonData: {
          title: 'Listen to the sound and type the word.',
          audio: 'kg-5/house-dress-1.mp3'
        },
        data: [
          {
            audioOffset: 64,
            words: 'dress, coat, shoe, sock, boots, pyjama, gloves, scarf'
          },
          {
            audioOffset: 80,
            words: 'sweater, bib, shirt, jacket, hat, trousers'
          }
        ]
      },
      {
        type: 'dictation',
        label: 'Dictation School',
        id: 'dictation-school',
        lockAfter: 2,
        commonData: {
          title: 'Listen to the sound and type the word.',
          audio: 'kg-5/school-kitchen-1.mp3'
        },
        data: [
          {
            audioOffset: 0,
            words: 'pen, pencil, ruler, eraser, scissors, sharpener, calculator'
          },
          {
            audioOffset: 14,
            words: 'book, ink, schoolbag, waterbottle, color pencils, crayons'
          }
        ]
      },
      {
        type: 'dictation',
        label: 'Dictation Kitchen',
        id: 'dictation-kitchen',
        lockAfter: 2,
        commonData: {
          title: 'Listen to the sound and type the word.',
          audio: 'kg-5/school-kitchen-1.mp3'
        },
        data: [
          {
            audioOffset: 26,
            words: 'stove, fork, knife, pan, spoon, pot, butter'
          },
          {
            audioOffset: 40,
            words:
              'plate, tap, lid, blender, cheese, fridge, lollipop, salad, sugar, bowl'
          },
          {
            audioOffset: 60,
            words:
              'chicken, ice cream, meat, salt, sweets, bread, cup, juice, mushroom, sandwich'
          },
          {
            audioOffset: 80,
            words: 'cake, flour, lentils, rice, soup'
          }
        ]
      }
    ]
  };
  