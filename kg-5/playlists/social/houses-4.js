export default {
  id: 'houses-4',
  label: 'Houses ',
  pdf: '',
  lockAfter: 2,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'House',
        text: [
          `A  house is the dwelling place for human beings. Ancient men lived in caves. The caves protected them from wild animals, air, sun, rain and cold weather. As we got developed, we built our own houses. While travelling, we had seen different types of houses. Some houses are big and some are small. Some houses are old and some are new. 
        Food, water, clothing, and shelter are more important basic things for human beings. The shelter is needed for every living thing. 
        Normally houses are build using bricks, cement, sand, iron, wood, water, glass, tiles etc.`
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: [
        `A house is the *dwelling* place for us. There are *different* types of houses. Ancient men lived in *caves*.
        Houses protect us from the *rain* during monsoon, and from the *sun* during summer.`,
        `Houses are build using *bricks*. Strong pillars are made using *iron*. Bricks are kept together by *cement*. Flooring is done with *tiles*. Cement is usualy mixed with water and *sand*. Windows are usually made of *wood*.`
      ]
    },
    {
      label: 'Types of  Houses - Reading',
      type: 'passage',
      id: 'notes-2',
      data: {
        title: 'Types of  Houses',
        text: [
          `People build houses to suit the climate of their region, using the natural resources that are available. Differences in the construction and building materials give rise to the different types of houses.
        House structure varies in plains, marshy areas, heavy rainfall regions, mountains, deserts, cold region, earthquake prone area etc.
# Igloo
Igloos are snow houses that can be found in Arctic parts. Here the temperate remains below -40 deg C throughout the year. Igloos look like a shell of tortoise.`,
          { type: 'img', src: 'social/house/igloo.jpg' },
          `# Bamboo houses
This type of houses are mainly found in earthquake prone places. They are mainly found in Indonesia, Japan and Andaman Islands. People will not get injured during earthquake due to the light weight of these houses.`,
          { type: 'img', src: 'social/house/bamboo-house.jpg' },
          `# Tents
They are temporary houses. They are built using cloth, ropes and nylon. The soldiers, scouts, NCC students make these type of houses for their stay during camps. They are also called mobile houses.`,
          { type: 'img', src: 'social/house/tent-house.jpg' },
          `# Tree house
These houses are built by the people in jungles to protect them from wild animals. They are built on trees. A platform is first constructed on the tree at the required height. The trunk of the tree itself becomes the pillar for the platform. The light-weight wood is used for building the rest of the house. A ladder is used to enter the house. During the night, the ladder is removed to protect from animals.`,
          { type: 'img', src: 'social/house/tree-house.jpg' },
          `# Apartment
Many families can reside together in this type of houses. These are concrete houses with many floors.  They are built on strong foundation. Pillars are raised from the foundation and the building will stand on the strength of pillars. This type of houses are usually found in cities where there is large population and less space. Some buildings have too many floors and they are called skyscrapers.`,
          { type: 'img', src: 'social/house/apartment.jpg' },
          `# Do you know?
The tallest building in the world is in Dubai and it is known as Burj khalifa.  The height of this building is 828 meters. It has got 160 floors.`
        ]
      }
    },
    {
      type: 'dragDropImgLabel',
      label: 'Houses',
      id: 'drag-img-houses',
      data: {
        path: 'img/social/house',
        imgWidth: 110,
        imgHeight: 110,
        text: `apartment | Apartment
        bamboo-house | Bamboo House
        hut | Hut
        igloo | Igloo
        tent-house | Tent House
        tree-house | Tree House`
      }
    },
    {
      label: 'Types of  Houses - MCQ',
      type: 'mcq',
      id: 'mcq',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText: 'Which is not a factor while building a house?',
            options:
              'Type of government, Climate, Money required, Raw materials available'
          },
          {
            qText: "The world's tallest building is present in _________.",
            options: 'Dubai, New York, London'
          },
          {
            qText: 'Which of the following is a temporary house?',
            options: 'tent, bamboo house, hut'
          },
          {
            qText: 'Which type of house is usually build in jungle?',
            options: 'tree house, tent, bamboo house'
          },
          {
            qText:
              'Which type of house is usually build in earth-quake prone regions?',
            options: 'bamboo house, hut, tent, apartment'
          },
          {
            qText:
              'Which type of house is build in regions where there is high population? ',
            options: 'apartment, tent, tree house'
          },
          {
            qText: '____________ is made from silica sand.',
            options: 'Glass, Cement, Brick, Tile'
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        text: `In forests, we can find a *tree house*.
        Eskimo lives in *igloo*.
        While camping, we build a *tent house*.
        Poor people live in a *hut*.
        In highly populated cities, people live in *apartment*.
        In earthquake prone regions people build houses using *bamboo*.`
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
            text: `Tents are made up of nylon or canvas.
House helps us to protect from the anti-social elements.
Ventilation is more important in a house.`
          },
          {
            name: 'False',
            text: `People living in villages build apartment.
            Cement is mixed with clay and water.`
          }
        ]
      }
    }
  ]
};
