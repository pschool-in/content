export default {
  label: 'Plants 4',
  id: 'plants-4',
  lockAfter: 4,
  list: [
    {
      label: 'Plants-2 - Reading',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Some more details on Plants',
        text: `All living things need food. Photosynthesis is a process by which plants make their food using chlorophyll, water, carbon dioxide in the presence of sunlight.Plants are also referred as primary producers since they prepare food for themselves. Stems and branches of the plant take the prepared food from the leaves to other parts of the plants. Extra food is stored as starch in roots, stems, leaves ,fruits and in flowers.
Plants are classiﬁed in many ways based on stems, life span, seeds, ﬂower and colour. Based on the production of flowers, plants are classified into flowering and nonflowering plants. Based on the period of life cycle plants are classified into Annuals, Biennials and Perennials.
Based on the colour present in the plant, they are classified into Green and Nongreen plants.`
      }
    },
    {
      label: ' Flowering vs Non flowering',
      id: 'classify',
      type: 'group',
      data: {
        title:
          'Classify the below plants based on whether they produce flowers',
        types: [
          {
            name: 'Flowering',
            text:
              'sunflower, rose, daffodils, tulip, cactus, neem, paddy, mango'
          },
          {
            name: 'Non-flowering',
            text: 'algae, fungi, ferns, moses'
          }
        ]
      }
    },
    {
      label: 'Green vs Non green',
      id: 'classify-2',
      type: 'group',
      data: {
        title: 'Classify the below plants based on colour',
        types: [
          {
            name: 'Green',
            text: 'paddy, rice, grass, moss, conifer, algae'
          },
          {
            name: 'Non-Green',
            text: 'mushroom, moulds, bracket fungi, yeast'
          }
        ]
      }
    },
    {
      label: 'Winter vs Summer',
      id: 'winter-summer',
      type: 'group',
      data: {
        title: 'Classify the below flowers based on the season they bloom',
        types: [
          {
            name: 'Winter',
            text: 'december, winter jasmine, tuberose, pansy'
          },
          {
            name: 'Summer',
            text: 'jasmine, sunflower, rose, marigold, bougainvillea, daisy'
          }
        ]
      }
    },
    {
      label: 'Autumn vs Spring',
      id: 'classify-3',
      type: 'group',
      data: {
        title: 'Classify the below flowers based on the season they bloom',
        types: [
          {
            name: 'Autumn',
            text: 'dahlia, saffron, hibiscus, chrysanthemum'
          },
          {
            name: 'Spring',
            text: 'tulip, pansy, daffodil, prime rose'
          }
        ]
      }
    },
    {
      label: 'Root vs Stem',
      id: 'classify-4',
      type: 'group',
      data: {
        title: 'Classify the below plants based on their edible part',
        types: [
          {
            name: 'Root',
            text: 'carrot, beetroot, tapioca'
          },
          {
            name: 'Stem',
            text: 'onion, turmeric, sugarcane'
          }
        ]
      }
    },
    {
      label: 'Leaf vs Flower',
      id: 'classify-5',
      type: 'group',
      data: {
        title: 'Classify the below plants based on their edible part',
        types: [
          {
            name: 'Leaf',
            text: 'coriander, cabbage, moringa'
          },
          {
            name: 'Flower',
            text: 'banana flower, cauliflower, cloves'
          }
        ]
      }
    },
    {
      label: 'Fruits vs Grains',
      id: 'classify-6',
      type: 'group',
      data: {
        title: 'Classify the below plants based on their edible part',
        types: [
          {
            name: 'Fruits',
            text: 'watermelon, grapes, pumpkin, tomato, mango'
          },
          {
            name: 'Grains',
            text: 'rice, pulses, fenugreek'
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Pine, 400 years
Banyan, 300 years
Oak, 1500 years
Apple, 30 years`,
        title: 'Match the trees with their life span'
      }
    },
    {
      id: 'fillup',
      label: 'Plants - Fill in the Blanks ',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `*Veins (lamina)* are branch out from the midrib.
*Petiole (sepal)*joins the leaf to the main stem.
*Stomata (leaf)* are used to exchange gases.
*Chlorophyll (anthocyanin)* is the green pigment in plants`
      }
    },
    {
      type: 'rightOne',
      id: 'odd-one',
      label: 'Odd one out',
      data: {
        title: 'Odd one out',
        fontSize: '1.3rem',
        noCaps: true,
        text: `Tulip, December, Tuberose 
Rose,Saffron, Dahlia 
Rose, Boat lily, Crotons`
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
            text: `Plants bearing flowers are flowering plants.
Tomato is a fruit.
Cycas is an exotic plant`
          },
          {
            name: 'False',
            text: `Rose is an autumn flower.
Cauliflower is an edible leaf`
          }
        ]
      }
    },
    {
      id: 'drag-drop',
      label: 'Plants - Answer in one word ',
      type: 'matchByDragDrop',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Green pigment in plant that help in tapping light - *chlorophyll*
Process by which plants make food - *photosynthesis*
Part of plant that helps in exchange of gases - *stomata*
Leaves loose water by this process - *transpiration*`
      }
    },
    {
      label: 'Flower vs Leaf',
      id: 'flower-leaf',
      type: 'group',
      data: {
        title: 'Identify whether the mentioned parts belong to flower or leaf',
        types: [
          {
            name: 'Leaf',
            text: 'apex, veins, midrib, blade, petiole'
          },
          {
            name: 'Flower',
            text: 'petal, stalk, sepal, pistil, stamen'
          }
        ]
      }
    },
    {
      id: 'match-2',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Roots, Beetroot
Flowers, Clove
Fruits, Banana
Grains, Rice
Leaves, Cabbage
Stem, Sugarcane`,
        title: 'Match parts and their food'
      }
    },
    {
      label: 'Plants - Choose the best Answer',
      id: 'mcq-plants',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' ______ are the food factories of the plants',
            options: 'Leaves, Stem, Roots'
          },
          {
            qText:
              'The presence of a substance called ______ makes a leaf green.',
            options: 'chlorophyll, stomata, veins'
          },
          {
            qText:
              ' The ______ on the leaf take water from the stem and pass it to all parts of the leaf.',
            options: 'veins, nodes, petiole'
          },
          {
            qText:
              ' Process of making own food by the plants is called as _____',
            options: 'Photosynthesis, Reproduction, Development'
          },
          {
            qText: 'The excess of food formed is stored as _____',
            options: 'starch, sugar, salt'
          },
          {
            qText:
              'The region of the stem where leaves are born are called ______ ',
            options: 'nodes, internodes, midrib'
          },
          {
            qText: 'The non-flowering plants are also called as the ______.',
            options: 'gymnosperms, angiosperms, heterotrophs'
          },
          {
            qText:
              '______ are leaves that protect the ﬂower while it is still a bud.',
            options: 'Sepals, Petals, Pistils'
          }
        ]
      }
    }
  ]
};
