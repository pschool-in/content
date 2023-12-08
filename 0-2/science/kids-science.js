export default {
  label: 'Science for Kids',
  id: 'kids-science',
  lockAfter: 2,
  list: [
    {
      label: 'Domestic vs Wild Animals',
      type: 'group',
      id: 'domestic-wild',
      data: {
        title: 'Domestic vs Wild Animals',
        imageType: 'animals',
        types: [
          {
            name: 'Domestic',
            text: 'cat, dog, goat, horse, pig, sheep'
          },
          {
            name: 'Wild Animals',
            text: 'elephant, lion, monkey, rhino, tiger, zebra'
          }
        ]
      }
    },
    {
      type: 'dragAndDrop',
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
      },
      id: 'plant'
    },
    {
      type: 'dragAndDrop',
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
      },
      id: 'dog'
    },
    {
      type: 'dragAndDrop',
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
      },
      id: 'face'
    },
    {
      type: 'dragAndDrop',
      label: 'Parts of Human Being',
      id: 'human',
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
      type: 'match',
      label: 'Animals and Houses',
      data: {
        title: 'Match animals with their houses.',
        text: `Cow, Shed
Monkey, Tree
Dog, Kennel
Bee, Hive
Spider, Web
Bird, Nest`
      },
      id: 'animal-houses'
    },
    {
      type: 'dragAndDrop',
      label: 'Parts of Computer',
      id: 'computer',
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
      label: 'Living vs Non-living things',
      type: 'group',
      data: {
        title: 'Living vs Non-living things',
        types: [
          {
            name: 'Living',
            text: ' parrot, tree, girl, fox, lion, owl'
          },
          {
            name: 'Non-living',
            text: 'pen, ring, stone, toy, paper, box'
          }
        ]
      },
      id: 'living'
    },
    {
      label: 'Vegetables - Below or Above ground',
      type: 'group',
      data: {
        title: 'Vegetables - Below or Above ground',
        types: [
          {
            name: 'Below ground',
            text: 'carrot, beetroot, potato, onion, radish'
          },
          {
            name: 'Above ground',
            text: 'tomato, cucumber, ladies finger, brinjal, cabbage'
          }
        ]
      },
      id: 'vegetables'
    },
    {
      label: 'Healthy vs Unhealthy foods',
      type: 'group',
      data: {
        title: 'Healthy vs Unhealthy foods',
        types: [
          {
            name: 'Healthy',
            text: 'milk, egg, banana, grapes, cabbage, cashew nuts, rice '
          },
          {
            name: 'Unhealthy',
            text: 'burger, pizza, potato chips, french fries, soda'
          }
        ]
      },
      id: 'healthy'
    },
    {
      label: 'The Five Senses',
      type: 'matchByDragDrop',
      data: {
        dashWidth: 50,
        text: `We *smell* with our nose.
We *see* with our eyes.
We *hear* with our ears.
We *taste* with our tongue.
We *touch* with our hands.`
      },
      id: 'senses'
    },
    {
      type: 'match',
      label: 'Regions and animals',
      data: {
        title: 'Match animals with their dwelling regions.',
        text: `Desert, Camel
Farm, Cow
Ocean, Whale
Pond, Fish
Forest, Lion
Iceland, Penguin`
      },
      id: 'regions-animals'
    },
    {
      label: 'Natural vs Man-made',
      type: 'group',
      data: {
        title: 'Classify the below as Natural and Man-made',
        types: [
          {
            name: 'Natural',
            text: 'Tree, Stone, Rain, Fruits, Pet Dog'
          },
          {
            name: 'Man-made',
            text: 'House, Ice-cream, Flower Vase, Candy, Notebook'
          }
        ]
      },
      id: 'classify'
    },
    {
      label: 'Lighter vs Heavier',
      type: 'group',
      data: {
        title: 'Lighter vs Heavier',
        types: [
          {
            name: 'Lighter',
            text: 'leaves, plastic ball, butterfly, balloon, coffee cup, feather, pencil '
          },
          {
            name: 'Heavier',
            text: 'tree, bat, cycle, house, car, elephant'
          }
        ]
      },
      id: 'classify-2'
    },
    {
      label: 'Day vs Night',
      type: 'group',
      id: 'day-vs-night',
      data: {
        title:
          'Classify the activities based on the time of day they are done.',
        types: [
          {
            name: 'Day',
            text: 'breakfast, read, play in the garden'
          },
          {
            name: 'Night',
            text: 'star watching, sleeping, eating dinner'
          }
        ]
      }
    }
  ]
};
