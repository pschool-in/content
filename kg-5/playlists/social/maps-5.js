export default {
  id: 'maps-5',
  label: 'Maps',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Signs and Symbols',
      type: 'passage',
      id: 'landforms',
      data: {
        title: 'Signs and Symbols',
        text: [
          `Most of the maps have direction, scale and index`,
          { type: 'img', src: 'social/map-index-scale.jpg' },
          `# Direction
Usually north comes at the top in a map.
# Scale
Maps are miniatures of real places. The scale shows, how much real ground is covered in 1 cm on paper.
# Index
It lists the different symbols used in the map and their labels.`,
          { type: 'img', src: 'social/map-symbols.jpg' },
          `To make the map easy to read, standard signs and symbols are utilised.  The Signs which are used to depict various objects on a map as per convention are called conventional signs. These can be letters or mathematical shapes such as lines, circles, triangles, dots, and so on.          
The symbols which are used to depict various objects as per convention are called conventional symbols. These symbols can be miniature signs of temples, mosques, forts, etc.`
        ]
      }
    },
    {
      id: 'match',
      label: 'Match Maps & Uses',
      type: 'match',
      data: {
        title: 'Match Maps & Uses.',
        text: `Road Map, Travelling
Mountain Map, Trekking
World Map, Student
Political Map, Governance
Geographical Map, Study of Nature`
      }
    },
    {
      type: 'dragDropImgLabel',
      label: 'Road Signs',
      id: 'road-signs',
      lockAfter: 1,
      commonData: {
        title: 'Drag the names and drop on the images.',
        image: 'social/map-symbols.jpg',
        imgWidth: 60,
        imgHeight: 60
      },
      data: [
        `4,0 | Airport
0,0 | Bus
3,0| Ship
1,0| Taxi
2,0| Train
0,1| Petrol Station
1,1 | Factory
2,1| Library
3,1| Museum`,

        `4,1| Fire Station
0,2| Police
1, 2| Post Office
2, 2 | Apartment
3,2| Church
4,2| Mosque
0,3| Temple
1,3| School
2,3| Hospital`,

        `3,3 | Public Toilet
4,3| Court
0,4| Play Area
1,4| Swimming Pool
2,4 | Cinema
0,5 | Food Court
4,4 | Shopping Mall
3,4 | Fast Food`
      ]
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Digital elevation in map is possible because of ________.',
            options: 'computers, signs and symbols, contour line map'
          },
          {
            qText:
              'The real distance between places on map is given in _______.',
            options: 'scale, index, direction, symbols'
          },
          {
            qText: 'The signs are usually represented by ______.',
            options: 'mathematical shapes, miniature drawing, varying colors'
          },
          {
            qText: 'Which of the following is not true?',
            options: `Maps don't show moving objects.
Maps don't show distance between places.
Maps don't show direction.
Maps don't show religious places.`
          }
        ]
      }
    },
    {
      label: 'Sign vs Symbol',
      id: 'signsymbol',
      type: 'group',
      data: {
        title:
          'Classify the following on basis of conventional signs and conventional symbols',
        types: [
          {
            name: 'Sign',
            text: 'Post office, Hospital, Library, Police'
          },
          {
            name: 'Symbol',
            text: 'Factory, Fort, Church, School, Taxi'
          }
        ]
      }
    },
    {
      label: 'Representing heights',
      type: 'passage',
      id: 'representing-height',
      data: {
        title: 'Representing heights',
        text: [
          `Maps usually don't show heights. But there are certain methods to represent height in a map.
# Contour Line
On a map, this method shows the unevenness of landforms. Land height is measured from sea level. Then we find spots of the same height. Their location is pinpointed on the map. A line connects these points. Such lines are called contour lines. It helps us to understand the land's slope and height.`,
          { type: 'img', src: 'social/contour-line-map.jpg' },
          `# Layer Tinting
The spaces between contour lines are coloured in this method. Each colour represents a height.
# Digital Elevation
In this way, we use computers to convey data from man-made satellites to show on a map.          
Physical maps can be utilised in military operations, tourism, mountaineering route planning, and regional development.`
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'landformsfilldrag',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `*Contour line* method shows the unevenness of landfroms.
Conventional *symbols* are miniature signs of temples, mosques etc.
In modern method, *computers* are used to convey data from man-made satellites.
Conventional *signs* can be letters or geometricals shapes such as lines, circle, etc.`
      }
    },
    {
      label: 'Himsagar Express',
      type: 'passage',
      id: 'himsagar',
      data: {
        title: 'Himsagar Express',
        text: [
          `India is a big country. Indian Railways helps us to travel between different places. There are many long distance trains.
Himsagar Express runs between Kanyakumari, present at the Southern end of India and Jamu Tawi, present at the north of India.
The train travels 3789 km covering 12 states and 65 stations. It takes 68 hours and travels at an average speed of 56 km/hr. The train travels through the following stations: Kanyakumari, Thrissur, Coimbatore, Tirupathi, Vijayawada, Nagpur, Bhopal, Jhansi, Agra, New Delhi, Jalandhar, Jammu Tawi.`
        ]
      }
    },
    {
      id: 'himsagar-match',
      label: 'Match the Numbers',
      type: 'match',
      data: {
        title: 'Match the Numbers - Himsagar Express',
        text: `3789 km, Total Distance
52 km per hr, Average Speed
12, States
68, Total Hours
65, No of Stations`
      }
    },
    {
      id: 'drag-drop',
      label: 'Route Map',
      type: 'dragAndDrop',
      data: {
        img: 'himsagar_express.jpg',
        title: 'Himsagar Express - Route Map',
        width: 350,
        height: 408,
        wordWidth: 80,
        words: [
          {
            word: 'Kanyakumari',
            x: 130,
            y: 390
          },
          {
            word: 'Thrissur',
            x: 15,
            y: 350
          },
          {
            word: 'Coimbatore',
            x: 120,
            y: 350
          },
          {
            word: 'Tirupathi',
            x: 150,
            y: 310
          },
          {
            word: 'Vijayawada',
            x: 170,
            y: 270
          },
          {
            word: 'Nagpur',
            x: 150,
            y: 220
          },
          {
            word: 'Bhopal',
            x: 60,
            y: 190
          },
          {
            word: 'Jhansi',
            x: 140,
            y: 160
          },
          {
            word: 'Agra',
            x: 130,
            y: 135
          },
          {
            word: 'New Delhi',
            x: 120,
            y: 110
          },
          {
            word: 'Jalandhar',
            x: 110,
            y: 80
          },
          {
            word: 'Jammu Tawi',
            x: 70,
            y: 40
          }
        ]
      }
    }
  ]
};
