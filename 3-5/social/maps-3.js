export default {
  id: 'maps-3',
  label: 'Directions and Maps ',
  pdf: '',
  lockAfter: 2,
  list: [
    {
      label: 'Directions and Maps - Reading',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Directions and maps',
        text: [
          `How to find the directions?
There are four main directions: East, West, North and South.
The direction in which sun rises is east.
The direction in which sun sets is west.
East and west are opposite to each other.
When we face east, the north is to our left and the south is to our right.
Do you know, because the sun rises and sets every day, it is used to determine directions.
# Apart for the four main direction, there are another four directions which lie between. They are north-east, north-west, south-east, south-west.
# Use of directions in maps
Directions are mostly shown in a map. They are indicated with an arrow pointing north. Before reading the map, make sure the directions on the map match the directions on the ground. This method will help you to read the maps.
# Different types of Maps
1. World Map
2. Country Map
3. State Map
4. City Map
5. Street Map
If you look at the India map, we can see
1. Jammu and Kashmir is present in the north
2. Tamil Nadu is present in the south
3. Gujarat is present in the west
4. Assam is present in the east.
Do you know?
The model of our Earth is called Globe.`,
          { type: 'img', src: 'globe' },
          `# Colors
We use different colors in map.
Water bodies like ocean, sea, lakes, rivers are represented in green.
Mountains are represented in brown.`
        ]
      }
    },
    {
      label: 'Drag and drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: [
        `*South* direction is opposite to north direction.
The land on the earth is divided into seven *Continent*.
Sun rises in the *East* and sets in the *West*.
*Ocean* is the part of earth's surface occupied by salt water.
*Index* helps us to understand map through symbols and signs.`,

        `In maps, forests are represented in *green*, oceans in *blue*, and mountains in *brown*.
If you look at India map, we can see Punjab is present in the *north*, Assam is present in the *east*, Gujarat is present in the *west* and Tamil Nadu is present in the *south*.`
      ]
    },
    {
      id: 'direction',
      label: 'Four Directions',
      type: 'dragAndDrop',
      data: {
        width: 300,
        height: 300,
        wordWidth: 70,
        title: 'Four Directions',
        svg: {
          props: {
            stroke: 'purple',
            fill: 'none',
            strokeWidth: 3,
            strokeLinejoin: 'round'
          },
          paths: [
            'M 150 50 L 150 250 L 160 240 M 150 250 L 140 240 M 160 60 L 150 50 140 60',
            'M 100 150 L 200 150 L 190 160 M 200 150 L 190 140 M 110 160 L 100 150 L 110 140'
          ]
        },
        words: [
          {
            word: 'East',
            x: 210,
            y: 140
          },
          {
            word: 'West',
            x: 20,
            y: 140
          },
          {
            word: 'North',
            x: 120,
            y: 20
          },
          {
            word: 'South',
            x: 120,
            y: 260
          }
        ]
      }
    },
    {
      id: 'direction-2',
      label: 'Eight Directions',
      type: 'dragAndDrop',
      data: {
        width: 300,
        height: 300,
        wordWidth: 70,
        title: 'Eight Directions',
        svg: {
          props: {
            stroke: 'purple',
            fill: 'none',
            strokeWidth: 3,
            strokeLinejoin: 'round'
          },
          paths: [
            'M 150 50 L 150 250 L 160 240 M 150 250 L 140 240 M 160 60 L 150 50 140 60',
            'M 100 150 L 200 150 L 190 160 M 200 150 L 190 140 M 110 160 L 100 150 L 110 140',
            'M 111 104 L 187 193 L 188 181 M 187 193 L 176 194 M 123 104 L 111 104 L 111 115',
            'M 188 103 L 112 192 L 124 191 M 112 192 L 109 181 M 190 115 L 188 103 L 177 105'
          ]
        },
        words: [
          {
            word: 'East',
            x: 210,
            y: 140
          },
          {
            word: 'West',
            x: 20,
            y: 140
          },
          {
            word: 'North',
            x: 120,
            y: 20
          },
          {
            word: 'South',
            x: 120,
            y: 260
          },
          {
            word: 'North-East',
            x: 180,
            y: 70
          },
          {
            word: 'North-West',
            x: 50,
            y: 70
          },
          {
            word: 'South-East',
            x: 180,
            y: 200
          },
          {
            word: 'South-West',
            x: 50,
            y: 200
          }
        ]
      }
    },
    {
      label: 'Choose the best Answer - Maps',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' What is the name of the country we live in?',
            options: 'India, Spain, Earth, United States'
          },
          {
            qText: 'Earth is also known as ___________.',
            options: 'World, Ocean, Continent, State'
          },
          {
            qText: 'Which direction is to our left when we face east?',
            options: 'North, South, East, West'
          },
          {
            qText: 'How many basic directions are there?',
            options: 'four, six, eight, two'
          },
          {
            qText: 'Which direction does the magnetic needle points?',
            options: 'North, South, East, West'
          }
        ]
      }
    },
    {
      label: 'Classify',
      id: 'classify',
      type: 'group',
      data: {
        title: 'Classify whether the below directions are shown in map.',
        types: [
          {
            name: 'Shown',
            text: 'North, South, East, West'
          },
          {
            name: `Doesn't Shown`,
            text: 'Up, Down, Left, Right'
          }
        ]
      }
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Globe is the model of our world.
Plains and mountains are shown in different colour.`
          },
          {
            name: 'False',
            text: `Maps are drawn in real size.
In maps, directions are not mentioned.
There are three main directions east, west and south.`
          }
        ]
      }
    }
  ]
};
