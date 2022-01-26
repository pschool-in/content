const dragdrop = {
  label: 'Drag & Drop',
  id: 'dragdrop',
  img: 'dragDrop',
  alt: 'Drag & Drop  activities icon',
  desc: 'Mark the parts of plants, animals, and other images.',
  list: [
    {
      label: 'Domestic vs Wild Animals',
      type: 'group',
      id: 'domestic-wild-animals',
      data: {
        title: 'Drag and drop the animals in the right boxes.',
        imageType: 'animals',
        types: [
          {
            name: 'Domestic',
            text: `cat, dog, goat, horse, pig, sheep`
          },
          {
            name: 'Wild Animals',
            text: `elephant, lion, monkey, rhino, tiger, zebra`
          }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'parts-plant',
      label: 'Parts of Plant',
      data: { type: 'plant', fontSize: '1.2rem' }
    },
    {
      type: 'dragAndDrop',
      id: 'parts-dog',
      label: 'Parts of Dog',
      data: { type: 'dog', fontSize: '1.2rem' }
    },
    {
      type: 'dragAndDrop',
      id: 'parts-face',
      label: 'Parts of Face',
      data: { type: 'face', fontSize: '1.2rem' }
    },
    {
      type: 'dragAndDrop',
      id: 'parts-body',
      label: 'Parts of Human',
      data: { type: 'human', fontSize: '1.2rem' }
    },
    {
      type: 'dragAndDrop',
      id: 'parts-computer',
      label: 'Parts of Computer',
      data: { type: 'computer', fontSize: '1.2rem' }
    },
    {
      id: 'tree',
      label: 'Parts of Tree',
      type: 'dragAndDrop',
      data: {
        img: 'tree.jpg',
        title: 'Parts of Tree',
        width: 320,
        height: 396,
        wordWidth: 50,
        fontSize: '1.2rem',
        words: [
          {
            word: 'leaf',
            x: 20,
            y: 30
          },
          {
            word: 'branch',
            x: 190,
            y: 230
          },
          {
            word: 'twig',
            x: 20,
            y: 220
          },
          {
            word: 'fruit',
            x: 210,
            y: 5
          },
          {
            word: 'flower',
            x: 240,
            y: 35
          },
          {
            word: 'trunk',
            x: 70,
            y: 240
          },
          {
            word: 'root',
            x: 40,
            y: 280
          },
          {
            word: 'roothairs',
            x: 260,
            y: 360
          }
        ]
      }
    },
    {
      id: 'water-cyle',
      label: 'Water Cycle',
      type: 'dragAndDrop',
      data: {
        img: 'water-cycle.jpg',
        title: 'Water Cycle',
        width: 400,
        height: 218,
        wordWidth: 80,
        fontSize: '1.2rem',
        words: [
          {
            word: 'collection',
            x: 20,
            y: 190
          },
          {
            word: 'precipitation',
            x: 10,
            y: 80
          },
          {
            word: 'evaporation',
            x: 300,
            y: 100
          },
          {
            word: 'condensation',
            x: 160,
            y: 5
          }
        ]
      }
    },
    {
      id: 'fish',
      label: 'Parts of a Fish',
      type: 'dragAndDrop',
      data: {
        img: 'fish.jpg',
        title: 'Parts of a Fish',
        width: 380,
        height: 280,
        wordWidth: 50,
        fontSize: '1.2rem',
        words: [
          {
            word: 'mouth',
            x: 10,
            y: 190
          },
          {
            word: 'eye',
            x: 10,
            y: 70
          },
          {
            word: 'gills',
            x: 30,
            y: 20
          },
          {
            word: 'scales',
            x: 150,
            y: 30
          },
          {
            word: 'fin',
            x: 210,
            y: 250
          },
          {
            word: 'tail',
            x: 280,
            y: 40
          }
        ]
      }
    },
    {
      id: 'flower',
      label: 'Parts of a Flower',
      type: 'dragAndDrop',
      data: {
        img: 'flower.jpg',
        title: 'Parts of a Flower',
        width: 380,
        height: 336,
        wordWidth: 50,
        fontSize: '1.2rem',
        words: [
          {
            word: 'petal',
            x: 30,
            y: 100
          },
          {
            word: 'stigma',
            x: 50,
            y: 40
          },
          {
            word: 'style',
            x: 30,
            y: 170
          },
          {
            word: 'sepal',
            x: 40,
            y: 250
          },
          {
            word: 'ovary',
            x: 100,
            y: 300
          },
          {
            word: 'receptacle',
            x: 280,
            y: 290
          },
          {
            word: 'anther',
            x: 280,
            y: 20
          },
          {
            word: 'filament',
            x: 320,
            y: 200
          }
        ]
      }
    },
    {
      id: 'skeleton',
      label: 'Skeletal System',
      type: 'dragAndDrop',
      data: {
        img: 'skeleton.jpg',
        title: 'Skeletal System',
        width: 350,
        height: 448,
        wordWidth: 70,
        fontSize: '1.2rem',
        words: [
          {
            word: 'vertebrae',
            x: 70,
            y: 160
          },
          {
            word: 'pelvis',
            x: 70,
            y: 200
          },
          {
            word: 'skull',
            x: 60,
            y: 30
          },
          {
            word: 'ribs',
            x: 60,
            y: 110
          },
          {
            word: 'femur',
            x: 70,
            y: 300
          }
        ]
      }
    },
    {
      id: 'organs',
      label: 'Organs',
      type: 'dragAndDrop',
      data: {
        img: 'organs.jpg',
        title: 'Match the Organs',
        width: 304,
        height: 354,
        wordWidth: 60,
        fontSize: '1.2rem',
        words: [
          {
            word: 'heart',
            x: 230,
            y: 140
          },
          {
            word: 'liver',
            x: 10,
            y: 160
          },
          {
            word: 'brain',
            x: 50,
            y: 10
          },
          {
            word: 'lungs',
            x: 230,
            y: 70
          },
          {
            word: 'kidney',
            x: 0,
            y: 210
          },
          {
            word: 'stomach',
            x: 220,
            y: 220
          },
          {
            word: 'small-intestine',
            x: 0,
            y: 250
          },
          {
            word: 'large-intestine',
            x: 210,
            y: 270
          }
        ]
      }
    },
    {
      id: 'bicycle',
      label: 'Parts of a Bicycle',
      type: 'dragAndDrop',
      data: {
        img: 'bicycle.jpg',
        title: 'Parts of a Bicycle',
        width: 380,
        height: 276,
        wordWidth: 60,
        fontSize: '1.2rem',
        words: [
          {
            word: 'seat',
            x: 40,
            y: 30
          },
          {
            word: 'crossbar',
            x: 160,
            y: 40
          },
          {
            word: 'handlebar',
            x: 170,
            y: 10
          },
          {
            word: 'brake-lever',
            x: 290,
            y: 40
          },
          {
            word: 'tyre',
            x: 0,
            y: 70
          },
          {
            word: 'wheel',
            x: 300,
            y: 70
          },
          {
            word: 'hub',
            x: 340,
            y: 100
          },
          {
            word: 'chain',
            x: 130,
            y: 240
          },
          {
            word: 'pedal',
            x: 200,
            y: 230
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Number Names',
      id: 'match-numbers',
      data: {
        title: 'Match Number names',
        text: `1, One
          2, Two
          3, Three
          4, Four
          5, Five
          6, Six`
      }
    },
    {
      type: 'dragDropImgLabel',
      label: 'Drag and Drop',
      id: 'dragDropImgLabel',
      data: {
        title: 'Drag the names and drop on the images.',
        text: `apple | Apple
        orange | Orange
        pineapple | Pineapple
        papaya | Papaya
        mango | Mango
        grapes | Grapes`
      }
    } /*
    {
      id: 'multiply',
      type: 'quickArithmetic',
      label: 'Multiply',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Multiply'
      },
      data: [
        {
          type: 'misc~x0*6'
        },
        {
          type: 'misc~x0*x+x'
        },
        {
          type: 'misc~x0*x-x'
        },
        {
          type: 'misc~x*x+x-x'
        },
        {
          type: 'misc~xx/x+6'
        }
      ]
    }*/
  ]
};

export default dragdrop;
