export default {
    id: 'maps-5',
    label: 'Maps-5',
    pdf: '',
    lockAfter: 4,
    list: [
      {
        label: 'Methods of showing landforms on a map - Reading',
        type: 'passage',
        id: 'landforms',
        data: {
          title: 'Methods of showing landforms on a map',
          text: `Contour line method- On a map, this method shows the unevenness of landforms. Land height is measured from sea level. Then we find spots of the same height. Their location is pinpointed on the map. A line connects these points. Such lines are called contour lines. It helps us to understand the land's slope and height.
          Layer tinting method- The spaces between contour lines are coloured in this method. Each colour represents a height.          
          Digital elevation method- In this way, we use computers to convey data from man-made satellites to show on a map.          
          Physical maps can be utilised in military operations, tourism, mountaineering route planning, and regional development planning, among other things.          
          To make the map easy to read, standard signs and symbols are utilised. For specified components, these symbols and signs are universally used.          
          The Signs which are used to depict various objects on a map as per convention are called conventional signs. These can be letters or mathematical shapes such as lines, circles, triangles, dots, and so on.          
          The symbols which are used to depict various objects as per convention are called conventional symbols. These symbols can be miniature signs of temples, mosques, forts, etc.`
        }
      },
      {
        label: 'Sign vs symbol',
        id: 'signsymbol',
        type: 'group',
        data: {
          title: 'Classify the following on basis of signs and symbols',
          types: [
            {
              name: 'Sign',
              text: 'Post office, Railway, Well, Spring'
            },
            {
              name: 'Symbol',
              text: 'Lighthouse, Fort, Battlefield'
            }
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
          Conventional symbols are *miniature* signs of temples, mosques etc.
          In modern method, *computers* are used to convey data from man-made satellites.
          *Conventional symbols* can be letters or geometricals shapes such as lines, circle, etc.
          The spaces between contour lines are *coloured* in layer tinting method.`
      }
    },
    {
        id: 'landformsmatch',
        label: 'Match the following',
        type: 'match',
        data: {
          text: `1380-3660, Orange
          Less than 150, Light blue
          More than 4880, White
          0-75, Green
          3660-4880, Red`,
          title: 'Match on the basis of heights and their colours'
        }
      },
      {
        label: 'True or False',
        id: 'landformsTF',
        type: 'classifySentence',
        data: {
          title: 'Classify the below sentences as true and false',
          types: [
            {
              name: 'True',
              text: `Previously, relief was shown using the ‘hill shading’ technique.
              The ‘Survey of India’ is the foremost mapmaking institute in India.
              standard signs and symbols are used to make the map easy to read.`
            },
            {
              name: 'False',
              text: `The height and depth of landforms can be shown easily.
              Political maps are used in military operation.`
            }
          ]
        }
      },
      {
        label: 'Getting to know India - Reading',
        type: 'passage',
        id: 'gettingtoknowindia',
        data: {
          title: 'Getting to know India',
          text: `Rivers, mountains, plateaus, plains, islands, and other features can be found across our country. On three sides, the Indian subcontinent is surrounded by water, which narrows as it moves south. This area is known as Indian Peninsula.
          The majestic Himalayan mountains form our northern border.          
          Forests, plains, and deserts can be found across our land.          
          Our country has a big area to cover. The height above sea level varies and can reach 8000 metres or more.          
          In our country, there are people from many classes, tribes, and religions.          
          It is possible to hear a variety of languages. In addition, different regions have diverse food, clothes, festivals, and celebrations.          
          Wheat is a major crop in the northern states. In the south and along the coast, rice is a major crop. In central India, jowar is grown on a big scale.          
          New Delhi is India's capital. Rajasthan is India's largest state in terms of land area. Madhya Pradesh comes in second. The state of Maharashtra is ranked third. Goa is the smallest state in India.`
        }
      },
      {
        label: 'Fill in the blanks -1',
        type: 'matchByDragDrop',
        id: 'gettingtoknowindiafilldrag-1',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `*Diversity* has a significant effect on our lifestyle, traditions and culture.
          Historical forts are also known as *sea forts*.
          Landforms, water bodies, forests are *geographical* features.
          The *Lakshadweep* islands are situated in Arabian sea.
          There are *twenty eight* states in India.
          `
      }
    },
    {
        id: 'gettingtoknowindiamatch-1',
        label: 'Match the following',
        type: 'match',
        data: {
          text: `Northern region, Wheat
          Southern region, Rice
          Central region, Jowar
          India's capital, New Delhi
          Union territories, Eight`,
          title: 'Match the following'
        }
      },
      {
        label: 'Fill in the blanks -2',
        type: 'matchByDragDrop',
        id: 'gettingtoknowindiafilldrag-2',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `Largest state. *Rajasthan*
          State born in 2014. *Telangana*
          The state in which apples are grown. *Jammu and Kashmir*
          The part which is surrounded by the water on three sides. *Indian Peninsula*
          Fifth largest state. *Gujarat*`
      }
    },
    ]
  };
