export default {
  label: 'Science for Kids',
  id: 'kids-science',
  lockAfter: 4,
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
        type: 'plant',
        isPractice: false
      },
      id: 'plant'
    },
    {
      type: 'dragAndDrop',
      label: 'Parts of Dog',
      data: {
        type: 'dog'
      },
      id: 'dog'
    },
    {
      type: 'dragAndDrop',
      label: 'Parts of Face',
      data: {
        type: 'face'
      },
      id: 'face'
    },
    {
      type: 'dragAndDrop',
      label: 'Parts of Human Being',
      data: {
        type: 'human'
      },
      id: 'human'
    },
    {
      type: 'match',
      label: 'Animals and Houses',
      data: {
        title: 'Match Animals with their house.',
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
      data: {
        type: 'computer'
      },
      id: 'computer'
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
        isPractice: false,
        title: 'Drag and drop to complete the below sentences.',
        styles: {
          fontSize: '1rem',
          dashWidth: 50
        },
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
        title: 'Match Animals with their dwelling regions.',
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
            text:
              'leaves, plastic ball, butterfly, balloon, coffee cup, feather, pencil '
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
            text: 'stargazing, sleeping, eating dinner'
          }
        ]
      }
    },
    {
      id: 'day-night',
      label: 'Day or Night',
      type: 'classifySentence',
      data: {
        title:
          'Classify the activities based on the time of day they are done.',
        types: [
          {
            name: 'Day',
            text: `Having breakfast.
Going to school.
Reading.`
          },
          {
            name: 'Night',
            text: `Going to bed.
Having dinner.
Stargazing.`
          }
        ]
      }
    }
  ]
};
