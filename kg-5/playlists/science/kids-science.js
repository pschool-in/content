export default {
  label: 'Science for Kids',
  id: 'kids-science',
  list: [
    {
      label: 'Domestic vs Wild Animals',
      type: 'group',
      id: '100',
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
        type: 'plant',
        isPractice: false
      },
      id: '200'
    },
    {
      type: 'dragAndDrop',
      label: 'Parts of Dog',
      data: {
        type: 'dog'
      },
      id: '300'
    },
    {
      type: 'dragAndDrop',
      label: 'Parts of Face',
      data: {
        type: 'face'
      },
      id: '400'
    },
    {
      type: 'dragAndDrop',
      label: 'Parts of Human Being',
      data: {
        type: 'human'
      },
      id: '500'
    },
    {
      type: 'match',
      label: 'Animals and Houses',
      data: {
        title: 'Match Animals with their house.',
        text:
          'Cow, Shed\n  Monkey, Tree\n  Dog, Kennel\n  Bee, Hive\n Spider, Web\nBird, Nest'
      },
      id: '600'
    },
    {
      type: 'dragAndDrop',
      label: 'Parts of Computer',
      data: {
        type: 'computer'
      },
      id: '700'
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
            text: 'pen, ring, stone,toy, paper,box'
          }
        ]
      },
      id: '800'
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
      id: '900'
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
      id: '1000'
    },
    {
      label: 'The Five Senses',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'Drag and drop to complete the below sentences.',
        styles: {
          fontSize: '1rem',
          dashWidth: 50
        },
        text:
          'We *smell* with our nose. \n We *see* with our eyes. \n  We *hear* with our ears. \n  We *taste* with our tongue. \n  We *touch* with our hands.'
      },
      id: '1100'
    },
    {
      type: 'match',
      label: 'Regions and animals',
      data: {
        title: 'Match Animals with their dwelling regions.',
        text:
          'Desert, Camel \n Farm, Cow \n Ocean, Whale \n Pond, Fish \n Forest, Lion \n Iceland, Penguin'
      },
      id: '1200'
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
      id: '1300'
    },
    {
      label: 'Lighter vs Heavier',
      type: 'group',
      slug: '3-lighter-heavier',
      data: {
        title: 'Lighter vs Heavier',
        types: [
          {
            name: 'Lighter',
            text:
              'leaves, plastic ball, butterfly, balloon, coffee cup, feather, pencil '
          },
          {
            name: 'Heavier',
            text: 'tree, bat, cycle, house, car, elephant'
          }
        ]
      },
      id: '1400'
    }
  ]
};
