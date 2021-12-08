export default {
    id: 'rock-5',
    label: 'Rock 2',
    lockAfter: 4,
    list: [
      {
        id: 'notes',
        label: 'Rocks and Minerals',
        type: 'passage',
        data: {
          text: `# Types of Rocks
The type of rock depends on the quantity, type and arrangement of minerals in it. The earths crust is made of three main type of rocks. Each one of them is found in a different way.
# Types of Igneous Rocks
They are categorized based on the kind of minerals the magma contains and the size of the mineral particles present. 
Granite: They are white, grey, pink, red or black depending on the mixture of mineral it contains. The three main minerals in granite are quartz, feldspar and mica. It is polished and used in flooring, making buildings or statues, making fountation for buildings and for paving roads.
Pumice: Pumice is formed when frothy lava cools quickly on the earths surface. As it cools the gases in froth remains trapped inside. Therefore, pumice has many holes. It is grey or cream coloured. It is used by dentist for polishing our teeth. It is also used to pilish furniture and floors.
Basalt: Basalt is a fine grained and glassy igneous rock.
# Types of Sedimentary Rocks
Sandstone: Sandstone is made from particles of sand that get cemented together. It consists of the mineral quartz. It may be yellow, brown, red or pink in colour. It is used to make buildings. Red fort is made of red sandstone.
Limestone: Limestone is made of mineral calcite that was formed from animal shells. It is mostly grey or white. It is used to make cement.
# Types of Metamorphic Rocks
Marble: Marble is formed from limestone. It is polished and used to make statues and buildings. Taj Mahal is made of white marble.
Slate: Slate is shiny and is easily split into thin sheets. It is used to make blackboards and roof of buildings.
# Minerals
Minerals are underground natural resources. They can be metallic or non-mettalic. Metalic minerals are obtained from ores. Examples of metalic minerals are aluminium, copper, zinc, etc. Precious metals like gold, silver and platinum are used to make jewellery. Non-metalic minerals like coal and petroleum are valuable underground resources.
# Gemstones 
Many minerals are formed in the form of crystals. They are very hard and can be cut and polished into beautiful stones called gemstones. Rubies, diamond, sapphires and emerald are examples of gemstones that are used to make jewellery.`,
          title: 'Rock and Minerals'
        }
      },
      {
        label: 'Metalic vs Non-metalic',
        type: 'group',
        id: 'metalic-nonmetalic',
        data: {
          title: 'Classify the minerals as metalic or non-metalic.',
          types: [
            {
                name: 'Metalic',
                text: 'aluminium, copper, zinc, gold, silver'
              },
              {
                name: 'Non-metalic',
                text: 'coal, petroleum'
              }
          ]
        }
      },
      {
        id: 'mcq',
        label: 'Multiple Choice Questions - MCQ',
        type: 'mcq',
        data: {
          title: 'Multiple Choice Questions',
          questions: [
            {
              qText: 'Which of the following is a igneous rock?',
              options: `granite, sandstone, marble`
            },
            {
              qText: 'Which rock is formed from limestone?',
              options: `marble, basalt, slate`
            },
            {
              qText: 'Which of the following is a use of gemstones?',
              options: `make jewellery, petroleum, fuel`
            },
            {
                qText: 'Which of the following is a precious metal?',
                options: `gold, zinc, copper`
              },
              {
                qText: 'Which rock was used to build Taj Mahal?',
                options: `white marble, slate, sandstone`
              },
              {
                qText: 'Which material was used to build Red Fort?',
                options: `red sandstone, red marble, red granite`
              }
          ]
        }
      },
      {
        label: 'Fill in the blanks',
        type: 'matchByDragDrop',
        id: 'drag-drop',
        data: {
          isPractice: false,
          title: 'Drag and drop the words at proper place.',
          styles: {
            fontSize: '1rem',
            dashWidth: 80
          },
          text: `*Basalt* is a fine grained and glassy igneous rock.
*Minerals* are underground natural resources.
Precious metals like gold, silver and platinum are used to make *jewellery*.
*Sandstone* is made from particles of sand that get cemented together.
*Slate* is shiny and is easily split into thin sheets.`
        }
      },  
      {
        id: 'true-false',
        label: 'True or False',
        type: 'classifySentence',
        data: {
          title: 'True or False',
          types: [
            {
              name: 'True',
              text: `Diamond is the hardest rock.
Limestone is used to make cement.`
            },
            {
              name: 'False',
              text: `Red fort is made of marble.
Slate can not be drawn into sheets.
Gemstones are useless.`
            }
          ]
        }
      },
      {
        id: 'match',
        label: 'Match the following',
        type: 'match',
        data: {
          text: `igneous, granite
sedimentary, limestone
metamorphic, marble
metalic, zinc
ruby, gemstone`,
          title: 'Match with appropriate choice'
        }
      }
    ]
  };
  