export default {
  id: 'rock-3',
  label: 'Rock',
  lockAfter: 4,
  list: [
    {
      id: 'notes',
      label: 'Rock',
      type: 'passage',
      data: {
        text: `# Rock 
The earth was full of rocks when life started on earth. These rocks were heated up by the sun and then cooled down by the rain. This process when continued over thousands of years, broke down the big rocks into smaller ones. These smaller rocks were broken down by natural processes to form tiny particles of soil. Rocks are made of small grains called minerals. Some rocks are made from a single mineral, while others are formed from a mixture of minerals. Rocks can be hard or brittle. Granite is an example of hard rock. Diamond is the hardest rock found on the surface of the earth. Chalk and coal are not so hard and break easily.
# Types of Rocks
There are mainly three types of rocks.
1. Metamorphic Rocks: Metamorphic rocks are formed by great heat and pressure. They are generally found inside the Earth's crust where there is enough heat and pressure to form the rocks. Metamorphic rocks are often made from other types of rock. For example, the sedimentary rock can be changed into a metamorphic rock such as slate or gneiss. Examples of metamorphic rocks include marble, anthracite, soapstone, and schist.
2.  Igneous Rocks: Igneous rocks are formed by volcanoes. When a volcano erupts, molten rock called magma or lava comes out. Eventually, the magma will cool down and harden. This hardened magma or lava is called igneous rock. Examples of igneous rocks include basalt and granite. 
3.  Sedimentary Rocks: Sedimentary rocks are formed by years and years of sediment compacting together and becoming hard. Generally, something like a stream or river will carry lots of small pieces of rocks and minerals to a larger body of water. These pieces will settle at the bottom and over a really long time, they will form into solid rock. Some examples of sedimentary rocks are shale, limestone, and sandstone. 
# The Rock Cycle 
Rocks are constantly changing. It takes millions of years for rocks to change. 
1. Melted rock or magma is sent to the earth's surface by a volcano. It cools and forms igneous rock. 
2. Next the weather and other natural forces will slowly break up this rock into small pieces of sediment. 
3. As sediment builds up and hardens over years, sedimentary rock is formed. 
4. Slowly this sediment rock will get covered with other rocks and end up deep in the Earth's crust. 
5. When the pressure and heat get high enough, the sedimentary rock will metamorphose into a metamorphic rock and the cycle will start over again. 
# Soil
The natural forces and weather changes break the rocks on the earth's surface into small particles that form the soil. When plants and animals die they decompose and become humus. Humus is dark brown in color and helps plants to grow well. Humus is a part of the soil. The soil in different places has different colors and they also feel different. It is because they are formed from different rocks.
# Types of Soil
Soil that contains clay is called clayey soil. It has only small rock particles and is very smooth to touch. It is used by potters to make earthen pots. Clayey soil is very sticky and has the capacity to hold water. Sandy soil is very loose and rough to touch. It is found on beaches. It has large particles which are loosely packed. They cannot hold much water and very few plants grow in them. Loam is a mixture of sand and clay. It can hold both water and air. It contains humus therefore, plants grow well in loam.
# Importance of Soil
Soil is required to grow plants. Soil provides plants with water and minerals that are required for their proper growth. Different plants require different types of soil for their proper growth. For example, rice grows well in clayey soil whereas bajra grows well in sandy soil. Many plants grow well in a loamy soil. We can make the soil fertile by adding manures and fertilizers to the soil. So, there will not be any food for us if there is no soil.`,
        title: 'Rock and Soil'
      }
    },
    {
      id: 'classify',
      label: 'Metamorphic vs Sedimentary',
      type: 'group',
      data: {
        title: 'Classify based on the type of rock.',
        types: [
          {
            name: 'Metamorphic',
            text: 'marble, anthracite, soapstone, schist'
          },
          {
            name: 'Sedimentary',
            text: 'shale, limestone, sandstone'
          }
        ]
      }
    },
    {
      id: 'classify-2',
      label: 'Sedimentary vs Igneous',
      type: 'group',
      data: {
        title: 'Classify based on the type of rock.',
        types: [
          {
            name: 'Igneous',
            text: 'basalt, granite'
          },
          {
            name: 'Sedimentary',
            text: 'shale, limestone, sandstone'
          }
        ]
      }
    },
    {
      label: 'Rock Cycle',
      type: 'sorting',
      data: {
        title: 'Arrange the events in the correct order.',
        text:
          'volcanic eruption, the magma cools down, igneous rock formed, sedimentation, sedimentary rock formed, change to metamorphic rock'
      },
      id: 'rock-cycle'
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'What type of rock is formed by great heat and pressure?',
            options: `metamorphic, sedimentary, igneous`
          },
          {
            qText: 'What comes out when a volcanic eruption occurs?',
            options: `lava, fire, rocks`
          },
          {
            qText: 'Which rock is formed from magma?',
            options: `basalt, limestone, marble`
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        text: `*Diamond* is the hardest rock.
Rotten plants and animals are called *humus*.
Potter uses *clayey* soil to make pots.
*Loam* is a mixture of sand and clay.
*Manure* and fertilizers are added to soil to make the soil rich and fertile.`
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `*Sandy (Clay)* soil cannot hold much water.
The tiny grains that makeup rocks are called *minerals (sand)*.
*Chalk (Granite)* is a soft rock that breaks easily.
When rocks break up, *soil (minerals)* is formed.
*Clayey (Loamy)* soil is very sticky.`,
        title: 'Fill in the blanks.'
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
            text: `Plants take water and mineral salts from the soil.
Plants cannot grow properly in clayey soil.
Soil is formed when rocks break up.
Sandy soil holds air but not water.`
          },
          {
            name: 'False',
            text: `Earthen pots are made from sandy soil.
Granite is the hardest rock.
Humus is not good for the growth of plants.
Rice grows well in sandy soil.`
          }
        ]
      }
    }
  ]
};
