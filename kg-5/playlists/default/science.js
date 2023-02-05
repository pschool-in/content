export default {
  label: 'Science',
  id: 'science',
  img: 'science',
  grade: '0-2',
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
      data: {
        img: 'parts_plant.jpg',
        fontSize: '1.2rem',
        width: 249,
        height: 235,
        wordWidth: 50,
        words: [
          { word: 'roots', x: 4, y: 139 },
          { word: 'stem', x: 190, y: 10 },
          { word: 'leaves', x: 197, y: 78 },
          { word: 'flower', x: 18, y: 16 },
          { word: 'bud', x: 4, y: 88 }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'parts-dog',
      label: 'Parts of Dog',
      data: {
        img: 'parts_dog.jpg',
        fontSize: '1.2rem',
        width: 250,
        height: 271,
        wordWidth: 50,
        words: [
          { word: 'tail', x: 190, y: 70 },
          { word: 'ear', x: 5, y: 6 },
          { word: 'eye', x: 60, y: 8 },
          { word: 'nose', x: 10, y: 140 },
          { word: 'leg', x: 140, y: 238 },
          { word: 'back', x: 146, y: 106 },
          { word: 'paw', x: 50, y: 236 }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'parts-face',
      label: 'Parts of Face',
      data: {
        img: 'parts_face.jpg',
        fontSize: '1.2rem',
        width: 250,
        height: 296,
        wordWidth: 50,
        words: [
          { word: 'mouth', x: 13, y: 242 },
          { word: 'ear', x: 190, y: 18 },
          { word: 'hair', x: 29, y: 18 },
          { word: 'nose', x: 190, y: 231 },
          { word: 'eye', x: 16, y: 188 }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'parts-body',
      label: 'Parts of Human',
      data: {
        img: 'parts_boy.jpg',
        fontSize: '1.2rem',
        width: 250,
        height: 354,
        wordWidth: 70,
        words: [
          { word: 'hand', x: 12, y: 173 },
          { word: 'leg', x: 24, y: 220 },
          { word: 'head', x: 177, y: 70 },
          { word: 'shoulder', x: 39, y: 78 },
          { word: 'knee', x: 25, y: 261 },
          { word: 'arm', x: 24, y: 124 },
          { word: 'chest', x: 193, y: 111 },
          { word: 'foot', x: 28, y: 295 }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'parts-computer',
      label: 'Parts of Computer',
      data: {
        img: 'computer.jpg',
        fontSize: '1.2rem',
        width: 299,
        height: 270,
        wordWidth: 70,
        words: [
          { word: 'monitor', x: 70, y: 20 },
          { word: 'CPU', x: 210, y: 25 },
          { word: 'mouse', x: 30, y: 215 },
          { word: 'keyboard', x: 140, y: 230 },
          { word: 'printer', x: 225, y: 72 }
        ]
      }
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
      type: 'dragAndDrop',
      id: 'rainbow',
      label: 'Rainbow',
      data: {
        img: 'rainbow.jpg',
        fontSize: '1.4rem',
        title: 'Match the colors of a rainbow.',
        width: 350,
        height: 350,
        wordWidth: 80,
        words: [
          { word: 'red', x: 50, y: 40 },
          { word: 'orange', x: 35, y: 320 },
          { word: 'yellow', x: 240, y: 30 },
          { word: 'green', x: 250, y: 140 },
          { word: 'blue', x: 250, y: 180 },
          { word: 'indigo', x: 250, y: 230 },
          { word: 'violet', x: 250, y: 300 }
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
      label: 'Lighter vs Heavier',
      type: 'group',
      id: '3-lighter-heavier',
      data: {
        title: 'Lighter vs Heavier',
        types: [
          {
            name: 'Lighter',
            text: `leaves, plastic ball, butterfly, balloon, coffee cup, feather, pencil `
          },
          {
            name: 'Heavier',
            text: `tree, bat, cycle, house, car, elephant`
          }
        ]
      }
    },

    {
      label: 'Planets',
      type: 'sorting',
      id: '3-planets-order',
      data: {
        title:
          'Sort the planets based on its distance from sun. (Nearest planet at top)',
        text: `Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune`
      }
    },
    {
      label: 'Healthy vs Unhealthy Foods',
      type: 'group',
      id: 'healthy-unhealthy',
      lockAfter: 1,
      commonData: {
        title: 'Drag and drop the foods in the right boxes.',
        imageType: 'custom',
        types: ['Healthy', 'Unhealthy']
      },
      data: [
        [
          'almond, carrot, apple, mushroom, cucumber,spinach',
          'ice-cream, lollipop, cake, chocolate'
        ],
        [
          'salad, juice, cashewnut, corn, beetroot, banana',
          'pizza, burger, soft-drink, french-fry'
        ]
      ]
    },
    {
      id: 'slides-healthy-food',
      type: 'slides2',
      label: `Healthy Food Habits`,
      data: {
        title: `Healthy Food Habits`,
        displayType: 'steps',
        images: 'img/science/healthy-eating-habits',
        steps: [
          `Wash hands before and after eating.
Sit together to eat.
Do not talk while eating.
Chew your food well.
Do not spill food while eating.
Avoid watching TV and using mobile phones while eating.
Do not overeat. It can make you ill.
Rinse your mouth after every meal.
Do not waste food.
Always wash fruits and vegetables before eating or cooking.
Stale food makes you sick. Avoid it.
Avoid uncovered food as it may contain dust and germs.`
        ]
      }
    },
    {
      label: 'Drag and Drop',
      id: 'drag-drop',
      type: 'matchByDragDrop',
      lockAfter: 1,
      data: [
        `Wash *hands* before and after eating.
Sit *together* to eat.
Do not *talk* while eating.
Chew your *food* well.
Do not *spill* food while eating.
Avoid *watching* TV and using mobile phones while eating.`,

        `Do not *overeat*. It can make you ill.
Rinse your mouth *after* every meal.
Do not *waste* food.
Always *wash* fruits and vegetables before eating or cooking.
Stale food makes you *sick*. Avoid it.
Avoid uncovered food as it may contain dust and *germs*.`
      ]
    }
  ]
};
