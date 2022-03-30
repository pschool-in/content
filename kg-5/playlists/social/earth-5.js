export default {
  id: 'earth-5',
  label: 'Earth',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Our Earth - Reading',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Earth',
        text: `Millions of years ago an explosion called 'The Big Bang' occurred. Numerous stars and celestial bodies came into existence by that massive explosion. These celestial bodies together called the Universe or Cosmos. 
1. Universe: The Universe is a vast expanse of space. The Universe consists of billions of galaxies, stars, planets, comets, asteroids, meteoroids and natural satellites.
2. Galaxy: Galaxy has a huge cluster of stars. Our galaxy is called ‘Milky way’. There are billions of galaxies in the Universe.
3. Solar System : It consists of the sun, the planets, their moons, dwarf planets,asteroids and comets. These objects are bound by Earth's gravitational force.
# Movement of Earth 
The Earth rotates on its axis and also revolves around the Sun. Day and night are caused due to the Earth’s rotation whereas the Earth's revolution is responsible for seasons. Life is possible on Earth because of the presence of land, air and water.
# Planets 
There are 8 planets in our solar system. 
1. Gaseous planets: They are Jupiter, Saturn, Uranus and Neptune. 
2. Terrestrial planets: They are Mercury, Venus, Earth, and Mars.
3. Frozen planets: They are Uranus and Neptune. 
# Earth
We live on the surface of the Earth. It is called the Blue Planet. It is made up of 7 continents and 5 oceans.    
1. Continents: The 7 continents are Asia, Africa, North America, South America, Antarctica, Europe, and Australia. The Asian continent where we live is the biggest of all. And Australia is the smallest one. The Antarctica is the continent full of snow.
2. Oceans: The 5 oceans are Pacific Ocean, Atlantic Ocean, Indian Ocean, Arctic Ocean and Southern Ocean. Around 97 percent of the planet’s water is in the Ocean. Around 71 percent of our Earth is covered by salt water and that is called as Ocean. Only 2.5 percent of water is fresh and 1 percent of it is easily accessible.`
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The planets nearer to the sun are very *hot*. 
The planets away from the sun are very *cold*.  
Venus is called Earth’s *twin*. 
Mars is described as the *Red* planet. 
Earth is called the *Blue* planet.`
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
            text: `The Universe is a vast expanse of space.
There are billions of galaxies in the Universe.
The earth rotates on its axis.`
          },
          {
            name: 'False',
            text: `Day and night are due to Earth’s revolution.
Milky way is our Universe.
There are 5 continents and 7 oceans.`
          }
        ]
      }
    },
    {
      label: 'Name the Planet',
      type: 'matchByDragDrop',
      id: 'match',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Red planet - *Mars*
Blue planet - *Earth*
Ringed planet - *Saturn*
Smallest planet - *Mercury*
Hottest planet - *Venus*
Largest planet - *Jupiter*`
      }
    },
    {
      label: 'Name the Continents',
      type: 'matchByDragDrop',
      id: 'match-2',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Smallest continent - *Australia*
Largest continent - *Asia*
Snow covered continent - *Antarctica*
Second largest continent - *Africa*`
      }
    },
    {
      label: 'Choose the best Answer ',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'The distance between the earth and the sun is ______.',
            options: '150 million kilometre, 50 km, 1500 km'
          },
          {
            qText: '______ is caused due to revolution of the Earth.',
            options: 'Season, Day, Night'
          },
          {
            qText: 'The continent which is covered by ice is _______.',
            options: 'Antarctica, Australia, Asia'
          },
          {
            qText: 'The biggest continent is _______.',
            options: 'Asia, Africa, Australia'
          },
          {
            qText: '_______ is described as Red Planet. ',
            options: 'Mars, Venus, Mercury'
          },
          {
            qText: '_____ Percentage of our earth is covered by salt water ',
            options: ' 71 %, 97 %, 81 %'
          }
        ]
      }
    },
    {
      label: 'Solar System',
      type: 'sorting',
      data: {
        title:
          'Sort the planets based on its distance from sun. (Nearest planet at top)',
        text: 'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune'
      },
      id: 'sort-planets'
    },
    {
      label: 'Continents',
      type: 'sorting',
      data: {
        title:
          'Arrange the continents based on their size. (Start from largest continent)',
        text:
          'Asia, Africa, N.America, S.America, Antarctica, Europe, Australia'
      },
      id: 'sorting-2'
    },
    {
      label: 'Earth - Reading',
      type: 'passage',
      id: 'reading-2',
      data: {
        title: 'More about our World',
        text: `# Asia
1. It is the largest continent.
2. China and India has the highest population both in Asia and the World.
3. Highest point on earth is in Asia
4. Asia is the birth place of many great ancient civilization.
5. Major countries in Asia: India, Japan,Singapore, Malaysia, Saudi Arabia, Sri Lanka, Nepal, Pakistan, Maldives,Philippines, Afghanistan, Thailand and Indonesia.
# India
1. Land of unity in diversity.
2. India has several historical monuments.
3. It has 29 states and 7 union territories.
4. Monuments in India:  India Gate in Delhi, Sanchi Stuba near Bhopal, Gateway of India in Mumbai, St George Fort and Taj Mahal in Agra.
# Africa
1. Africa is the second largest continent.
2. The world's longest river, the Nile and the world's largest desert, the Sahara, are in Africa.
3. More than 50% of the world's gold and diamond come from this mineral rich continent.
4. Also called the Dark Continent.
# North America
1. North America is the third largest continent by area.
2. The largest fresh water lake, Lake Superior is located in this continent.
3. The Mississippi - Missouri, is one of the longest river located in North America.
4. The United States of America (USA) is a part of North America.
5. Major countries in North America: Canada, Mexico, Nicaragua, Honduras, Cuba, Guatemala, Panama and Costa Rica.
# South America
1. The world's largest river is in South America.
2. Brazil, a country in South America is one of the largest coffee producers in the world.
3. The Andes is one of the longest mountain range in South America.
4. One of the highest volcanoes of the world, Mt. Cotopaxi is found in this continent.
5. Major countries in South America: Argentina, Bolivia, Brazil, Colombia, Ecuador, Paraguay, Peru, Uruguay and Venezuela.
# Antarctica
1. Antarctica is the coldest continent on Earth.
2. It is also called the White Continent or the Frozen Continent.
3. Penguins are found in Antarctica.
# Europe
1. Europe is separated from Asia by the Ural mountains and the Caspian Sea.
2. The world's smallest country, the Vatican City, is in Europe.
3. The Volga is one of the longest rivers in Europe.
4. Finland, in Europe, is called the 'Land of Lakes'.
5. Major countries in Europe: France, Spain, United Kingdom, Germany, Norway, Austria, Greece, Spain, Portugal and Italy.
# Australia
1. Australia is an Island continent covered with unique landscapes and natural wonders.
2. The Great Barrier Reef, the pride and joy of Australia is made up of nearly 2,500 individual reefs and visible from space.
3. Australia includes the islands of Tasmania and numerous small islands.
# Important terms
1. Civilization : A society in an advanced state of social development.
2. Island : A piece of land surrounded by water.
3. Monument : A building that is of historical importance and preserved as public property.`
      }
    },
    {
      id: 'match-3',
      label: 'Continents and Countries',
      type: 'match',
      data: {
        text: `Asia, India
Africa, Cape Town
N.America, Mexico
S.America, Brazil
Europe, Vatican City
Australia, Tasmania `,
        title: 'Match the following'
      }
    },
    {
      id: 'match-4',
      label: 'Wonders of the World',
      type: 'match',
      data: {
        text: `Taj Mahal, India
The Great Wall, China
Petra, Jordan
Machu Picchu, Peru
Colosseum, Rome`,
        title: 'Match the following'
      }
    },
    {
      label: 'True or False',
      id: 'true-false-3',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `The Amazon rainforest covers most of the South America.
There are only permanent research stations from different countries in Antarctica.
Europe and Asia are parts of the same major landmass.`
          },
          {
            name: 'False',
            text: `India is the world largest coffee producer.
Caspian sea is the largest sea.
Lake Superior is in Africa.`
          }
        ]
      }
    },
    {
      label: 'Fill up',
      type: 'matchByDragDrop',
      id: 'drag-drop-4',
      data: {
        fontSize: '1rem',
        text: `The Great Wall of *China* is the man made structure that can be seen from space.
Seven continents of the world were joined together as a single huge landmass called *Pangaea*.
Taj Mahal is situated in Agra on the banks of river *Yamuna*.
More than *50%* of the world's gold and *diamonds* come from the mineral rich continent of Africa.
The world's smallest country, the *Vatican City*, is in Europe.`
      }
    },
    {
      label: 'Name the following.',
      type: 'matchByDragDrop',
      id: 'drag-drop-5',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Highest volcano - *Mt. Cotopaxi*
Smallest country - *Vatican City*
White continent - *Antarctica*
World's largest coffee producer - *Brazil*
Only continent to have all climatic types - *N.America*
World's longest river - *Nile*
World's largest desert - *Sahara*`
      }
    },
    {
      label: 'Choose the best Answer',
      id: 'mcq-3',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'The continent which is covered by ice is _______.',
            options: 'Antarctica, Australia, Asia'
          },
          {
            qText: 'The biggest continent is ______________.',
            options: 'Asia, Africa, Australia'
          },
          {
            qText: 'There are________ continents in the world.',
            options: '7, 5, 9'
          },
          {
            qText: '____________ is the longest river in the world.',
            options: 'Nile, Amazon, Kaveri, Ganga'
          },
          {
            qText: 'Penguins are found in __________',
            options: 'Antarctica, Africa, Asia'
          }
        ]
      }
    }
  ]
};
