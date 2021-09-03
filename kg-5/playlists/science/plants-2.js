export default {
  id: 'plants-2',
  label: 'Plants 2',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Plants - Reading',
      type: 'passage',
      id: '100',
      data: {
        title: 'Plants',
        text: `Like our body a plant also has many parts. The main parts of a plant include root, stem, leaf, flower, fruit and seed. Each part has a set of jobs to do to keep the plant healthy.
Roots are found below the soil and it holds the plant firmly in its position. It absorbs the water and minerals from the soil. Sometimes it also stores food. Roots are of two main types: tap root and ﬁbrous root.
The stem is the part that stays above the ground. A stem usually bears leaves, flowers and fruits. It distributes the water and minerals from the root to the leaves and flowers. The stem is the support system of the plant.
The leaves grow out of the side of the stem. Their main function is to make food for the plant by the process known as photosynthesis. Also they help in removing any excess water via stomata and this process is known as transpiration.
Flowers are the reproductive part of a plant. The flower has both female parts, called the pistil, and male parts, called the staemens. They work together to fertilize the plant and produce seeds.
The fruit is a fleshy or dry ripened part of a plant, enclosing the seed or seeds.
The hard part inside the fruit is called seed. Most plants grow from seeds.`
      }
    },
    {
      label: 'Terrestrial vs Aquatic',
      id: '200',
      type: 'group',
      data: {
        title: 'Classify the below plants based on the habitat they belong',
        types: [
          {
            name: 'Terrestrial',
            text:
              'sunflower, rose, daffodils, poison ivy, tulip, cactus, papaya, pineapple, apricot'
          },
          {
            name: 'Aquatic',
            text:
              'lotus, water lily, duckweed, watercress, water hyacinth, hydrilla, vallisneria'
          }
        ]
      }
    },
    {
      label: 'Free floating vs Fixed rooted',
      id: '300',
      type: 'group',
      data: {
        title: 'Classify the below plants into their respective type',
        types: [
          {
            name: 'Free floating',
            text: 'duckweed, mosquito fern, water hyacinth, pistia'
          },
          {
            name: 'Fixed rooted',
            text: 'lotus, watershield, water lily'
          }
        ]
      }
    },
    {
      label: 'Fixed rooted vs Submerged',
      id: '301',
      type: 'group',
      data: {
        title: 'Classify the below plants into their respective type',
        types: [
          {
            name: 'Fixed rooted',
            text: 'lotus, watershield, water lily'
          },
          {
            name: 'Submerged',
            text: 'vallisneria, hydrilla, pondweed'
          }
        ]
      }
    },
    {
      label: 'Dessert vs Mountain vs Plain',
      id: '400',
      type: 'group',
      data: {
        title: 'Classify the below plants into their respective type',
        types: [
          {
            name: 'Dessert',
            text: 'opuntia, aloe vera, cactus, date palm'
          },
          {
            name: 'Mountain',
            text: 'pine, maple, cedar, oak, deodar'
          },
          {
            name: 'Plain',
            text: 'mango, banyan, teak'
          }
        ]
      }
    },
    {
      label: 'Cold climate vs Hot climate',
      id: '500',
      type: 'group',
      data: {
        title: 'Classify the below plants based on the climate they grow in',
        types: [
          {
            name: 'Cold climate',
            text:
              'beet, carrot, turnip, radish, kale, spinach, pea, onion, lettuce, potatoes'
          },
          {
            name: 'Hot climate',
            text:
              'lily, rose, chrysanthemum, bougainvillea, brinjal, chilli, cucumber, tomato'
          }
        ]
      }
    },
    {
      label: 'One seed vs Many seeds vs Seedless',
      id: '600',
      type: 'group',
      data: {
        title:
          'Classify the below fruits based on the number of seeds they produce',
        types: [
          {
            name: 'One seed',
            text: 'avocado, mango, cherry, apricot'
          },
          {
            name: 'Many seeds',
            text:
              'guava, watermelon, strawberry, figs, jackfruit, tomato, pomegranate'
          },
          {
            name: 'Seedless',
            text: 'pineapple, banana'
          }
        ]
      }
    },
    {
      label: ' Tap root vs Fibrous root',
      id: '700',
      type: 'group',
      data: {
        title:
          'Classify the below plants based on the type of root system the contain.',
        types: [
          {
            name: 'Tap root',
            text: 'beet root, carrot, parsnip, parsley'
          },
          {
            name: 'Fibrous root',
            text: 'rice, wheat, barley, oats, rye, millet'
          }
        ]
      }
    },
    {
      label: ' Weak vs Strong',
      id: '800',
      type: 'group',
      data: {
        title:
          'Classify the below plants based on the type of stem the contain',
        types: [
          {
            name: 'Weak',
            text: 'watermelon, grapes, pumpkin, bean, cucumber'
          },
          {
            name: 'Strong',
            text: 'neem, banyan, mango, deodar'
          }
        ]
      }
    },
    {
      id: '900',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Root, Absorption
                Stem, Support
                Leaf, Photosynthesis
                Flower, Reproduction
                Seed, Germination`,
        title: 'Match the plant parts with their function'
      }
    },
    {
      id: '1000',
      label: 'Plants - Fill in the Blanks ',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `*Fibrous (tap)* roots are developed from the base of the stem.
                Avecinnia plants have roots *above (below)* the ground.
                Trees such as peepal and banyan have very strong and thick stem called *trunk (wood)*.
                The loss of water in the form of gas happens through the tiny pores in the leaves is called *transpiration (evaporation)*.`
      }
    },
    {
      id: '1100',
      label: 'Plants - Fill in the Blanks ',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `The soft and brightly colored part of a flower is called *petal (tepal)*.
                The green part that lies under the petal and supports it is called *sepal (petal)*.
                The middle of the flower has two parts called the *stamen (style)* and pistil.
                The natural home of a plant is called its *habitat (niche)*.
                Plants make suitable adjustment with their surroundings to meet their requirements. This is known as *adaptation (evolution)*.`
      }
    },
    {
      label: 'True or False',
      id: '1200',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Deserts get very less rainfall and experience high temperature.
                    Leaves are changed to spines to reduce the loss of water.
                    Needle like leaves help them to survive in cold conditions like snow.
                    Plants in plains need to adapt to both dry conditions and extreme temperatures`
          },
          {
            name: 'False',
            text: `Banyan, Peepal and Tamarind trees live less than hundred years.
                    Mountain trees leaves are called frond`
          }
        ]
      }
    },
    {
      id: '1300',
      type: 'sequence',
      label: 'Words related to plants',
      commonData: {
        title: 'connect the letter to create word'
      },
      data: [`Plant, leaf, bud, flower, root, dessert, mountain, seed`]
    },
    {
      type: 'rightOne',
      id: '1301',
      label: 'Odd one out',
      data: {
        title: 'Odd one out',
        fontSize: '1.3rem',
        noCaps: true,
        text: `Tomato, Carrot, Radish, Beetroot
            Turmeric,Cabbage,  Greens,  Spinach
            Neem,  Aloe vera,  Datepalm,  Opuntia
            Mango, Apple, Orange, Papaya.
            Opuntia, Hydrilla,  Water hyacinth, Vallisneria`
      }
    },
    {
      id: '1400',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Deserts, Cactus
                Mountains, Pine
                Plains, Teak
                Coastal areas, Coconut
                Trees, Neem`,
        title: 'Match plants to the parts we eat'
      }
    },
    {
      label: 'Plants - Choose the best Answer',
      id: '1500',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              ' Which part of the plant absorbs water and nutrients for the plants?',
            options: 'Roots, Leaves, Stem'
          },
          {
            qText:
              ' Which part of the plant transports food from leaf and water from root to various parts of the plant?',
            options: 'Stem, Flower, Fruit'
          },
          {
            qText:
              ' The plant that grows in deserts and needs very little water is called ______',
            options: 'Cactus, Rose, Marigold'
          },
          {
            qText:
              ' ______ are the colourful part of a flower which attracts insects and birds.',
            options: 'Petals, Pistils, Stamens'
          },
          {
            qText:
              ' The leaves carries out transpiration through tiny pores called ______.',
            options: 'stomata, petiole, lamina'
          },
          {
            qText:
              ' Primary function of the ______ is to hold up buds, flowers, leaves, and fruits to the plant.',
            options: 'stem, root, branch'
          },
          {
            qText: ' Which of the following fruits that do not have seeds?',
            options: 'Pineapple, Papaya, Apricot'
          },
          {
            qText:
              'The plants that grow in water bodies like ponds and lakes are called ______ plants.',
            options: 'aquatic, terrestrial, coastal'
          }
        ]
      }
    },
    {
      label: 'Plants-2 - Reading',
      type: 'passage',
      id: '1600',
      data: {
        title: 'Some more details on Plants',
        text: `All living things need food. Photosynthesis is a process by which plants make their food using chlorophyll, water, carbon dioxide in the presence of sunlight.Plants are also referred as primary producers since they prepare food for themselves. Stems and branches of the plant take the prepared food from the leaves to other parts of the plants. Extra food is stored as starch in roots, stems, leaves ,fruits and in flowers.
Plants are classiﬁed in many ways based on stems, life span, seeds, ﬂower and colour. Based on the production of flowers, plants are classified into flowering and nonflowering plants. Based on the period of life cycle plants are classified into Annuals, Biennials and Perennials.
Based on the colour present in the plant, they are classified into Green and Nongreen plants.`
      }
    },
    {
      label: ' Flowering vs Non flowering',
      id: '1700',
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
      id: '1800',
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
      id: '1900',
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
      id: '2000',
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
      id: '2100',
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
      id: '2200',
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
      id: '2300',
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
      id: '2400',
      label: 'Plants - Fill in the Blanks ',
      type: 'fillupOptions',
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
      id: '2401',
      label: 'Odd one out',
      data: {
        title: 'Odd one out',
        fontSize: '1.3rem',
        noCaps: true,
        text: `Tulip, December, Tuberose. 
            Rose,Saffron, Dahlia. 
            Rose, Boat lily, Crotons. `
      }
    },
    {
      label: 'True or False',
      id: '2500',
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
      id: '2600',
      label: 'Plants - Answer in one word ',
      type: 'matchByDragDrop',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Green pigment in plant that help in tapping light - *chlorophyll*
                Process by which plants make food - *photosynthesis*
                Part of plant that helps in exchange of gases - *stomata*
                Leaves loose water by this process - *traspiration*`
      }
    },
    {
      label: 'Flower vs Leaf',
      id: '2700',
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
      id: '2800',
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
      id: '2900',
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
    },
    {
      label: 'Reproduction in Plants- Reading',
      type: 'passage',
      id: '3000',
      data: {
        title: 'Reproduction in Plants',
        text: `#REPRODUCTION IN PLANTS
Reproduction is the process by which living things make young ones. There are two kinds of reproduction that take place in plants. They are sexual reproduction (reproduction through seeds) and asexual reproduction (reproduction through different parts of plants).
The main stages involved in sexual reproduction are as follows. Pollination- The transfer of pollen grains from the anther to stigma of a flower. Fertilization- When pollination is successful, the pollen joins the egg present in the ovary. The cell which results after fusion is called a zygote. Seed formation- After fertilization, the ovary swells and changes into a fruit. The seeds develop from the ovules.
Flowers are not required for asexual reproduction method. It occurs through budding, fragmentation, vegetative propagation, and spore formation.
#AGRICULTURE
Agriculture or farming is one of the main sources of the livelihood. It is the practice of farming to grow crops and produce food. Major agricultural products are cereals, vegetables, fruits and oil seeds. They are cultivated not only for our basic needs but also for commercial purpose. In agriculture, there are certain parameters to be considered such as the type of crop, properties of soil, climate etc.
Soil is one of the most important natural resources and is essential for agriculture. The organic and inorganic material on the surface of the earth that provides the medium for plant growth is called the soil. The soil is classified on the basis of the proportion of various sizes.
Soil is one of the most important natural resources. It is essential for agriculture. It supports the growth of plants by holding the roots and supplying water and nutrients. It is the home for many organisms. Soil is formed by the breaking of rocks by the action of wind, water and climate. The mixture of rock particles and humus is called the soil. The soil is classified on the basis of the proportion of various sizes.`
      }
    },
    {
      label: 'Gynoecium vs Androceium',
      id: '3100',
      type: 'group',
      data: {
        title: 'Classify the below parts based on where they belong',
        types: [
          {
            name: 'Gynoecium',
            text: 'stamen, stalk, filament, anther, pollen'
          },
          {
            name: 'Androceium',
            text: 'ovary, style, stigma, ovules'
          }
        ]
      }
    },
    {
      label: 'Unisexual vs Bisexual',
      id: 'group-2',
      type: 'group',
      data: {
        title: 'Classify the below plants into their respective type',
        types: [
          {
            name: 'Unisexual',
            text: 'Coconut flowers, Papaya, Watermelon, Cucumber, Maize'
          },
          {
            name: 'Bisexual',
            text: 'Lily, Rose, Sunflower, Tulip, Daffodil, Mustard'
          }
        ]
      }
    },
    {
      label: 'Unisexual vs Bisexual -2',
      id: '3200',
      type: 'group',
      data: {
        title: 'Classify the below parts based on where they belong',
        types: [
          {
            name: 'Unisexual',
            text: 'Maize,  melon, Snake gourd, Bitter gourd, Tapioca'
          },
          {
            name: 'Bisexual',
            text: 'Brinjal, Hibiscus, Tomato, Long bean, Chille, mango'
          }
        ]
      }
    },
    {
      label: 'Anemophily vs Hydrophily vs Entamophily',
      id: '3300',
      type: 'group',
      data: {
        title: 'Classify the below plants based on their mode of pollination',
        types: [
          {
            name: 'Anemophily',
            text: 'wheat, rice, corn, barley, oats'
          },
          {
            name: 'Hydrophily',
            text: 'hydrilla, zostera, vallisneria'
          },
          {
            name: 'Entamophily',
            text: 'sunflower, orchids'
          }
        ]
      }
    },
    {
      label: 'Monocotyledon vs Dicotyledon',
      id: '3400',
      type: 'group',
      data: {
        title: 'Classify the below plants based on their type of seed',
        types: [
          {
            name: 'Monocotyledon',
            text: 'grass, palm, orchid, lily, banana, wheat, rice'
          },
          {
            name: 'Dicotyledon',
            text: 'bean, castor, pea'
          }
        ]
      }
    },
    {
      label: 'Anemochory vs Hydrochory',
      id: '3500',
      type: 'group',
      data: {
        title:
          'Classify the below plants based on their mode of seed dispersal',
        types: [
          {
            name: 'Anemochory',
            text: 'cotton, dandelion, drumstick'
          },
          {
            name: 'Hydrochory',
            text: 'lotus, coconut, salix'
          }
        ]
      }
    },
    {
      label: 'Zoochory vs Autochory',
      id: '3600',
      type: 'group',
      data: {
        title: 'Classify the below plants based on the type seed dispersal',
        types: [
          {
            name: 'Zoochory',
            text: 'xanthium, acyranthus'
          },
          {
            name: 'Autochory',
            text: 'ladies finger, balsam'
          }
        ]
      }
    },
    {
      id: '3700',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Anthocyanin, Purple
                Carotenoid, Orange
                Chlorophyll, Green
                Astaxanthin, Blood red`,
        title: 'Match the pigments with their respective colour'
      }
    },
    {
      id: '3800',
      label: 'Plants - Fill in the Blanks ',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Neelakurinji that blossoms once in *12 (15)* years.
                To attract the *insects (moth)* plants are bright in colour and produce smell in their flowers.
                Plants which are pollinated by the moth and bats release their fragrance mostly at *night (noon)* and have colourless petals.
                Pollination by *birds (bats)* is known as Ornithophily.
                Earthworms help to *increase (decrease)* the amount of air and water that gets into the soil.
                *Dragonfly (butterfly)* destroys the egg and larva of harmful insects and mosquitoes and prevents the spreading of diseases.`
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
            text: `Man is also responsible for the dispersal of many fruits and seeds.
                    Every seed has minute plant called the embryo.
                    After fertilization, the ovary grows into a fruit and other parts of the flower fall off.
                    The cell which results after fusion of the gametes is called a zygote`
          },
          {
            name: 'False',
            text: `The embryo forms into a zygote.
                    Androecium is the female reproductive part`
          }
        ]
      }
    },
    {
      id: '4000',
      label: 'Plants - Answer in one word ',
      type: 'matchByDragDrop',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Female reproductive organ - *gynoecium*
                Male reproductive organ - *androceium*
                Pollination through air - *anemophily*
                Pollination through water - *hydrophily*
                Pollination through animals - *entamophily*`
      }
    },
    {
      id: '4100',
      label: 'Plants - Answer in one word -2 ',
      type: 'matchByDragDrop',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Seed with single cotyledon - *monocotyledon*
                Seed with two cotyledons - *dicotyledon*
                Seed dispersal by wind - *anemochory*
                Seed dispersal by water - *hydrochory*
                Seed dispersal by animals - *zoochory*
                Self dispersal of seeds - *autochory*`
      }
    },
    {
      id: '4200',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Earthworm, Vermicompost
                Birds, Ornithophily
                Coconut, Dispersal by water
                Bee, Honey
                Dragonfly, Destroys larvae`,
        title: 'Match the following'
      }
    },
    {
      id: '4300',
      label: 'Match the following -2',
      type: 'match',
      data: {
        text: `Roots, anchoring
                Flowers, reproduction
                Fruits, production of seeds
                Leaves, food factory
                Stem, support`,
        title: 'Match the following'
      }
    },
    {
      label: 'Plants - Choose the best Answer',
      id: '4400',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              ' Which plants require two years to complete their life cycle?',
            options: 'Biennials, Annuals, Perennials'
          },
          {
            qText:
              'Which plants are long-lived and require more than two years to complete their life cycle?',
            options: 'Perennials, Annuals, Biennials'
          },
          {
            qText: ' Rice, wheat and corn are a few examples of ______ plants.',
            options: 'annual, perennial, biennial'
          },
          {
            qText: '______ are plants that the seeds are exposed.',
            options: 'Gymnosperms, Angiosperms, Filament'
          },
          {
            qText:
              'The process by which seed grows into a seedling is called _____.',
            options: 'germination, pollination, fertilization'
          },
          {
            qText:
              'After fertilization, ovary develops into fruit and ovules develop into _____.',
            options: 'seeds, buds, zygote'
          },
          {
            qText: '______ is the male reproductive part of the flower.',
            options: 'Androecium, Gynoecium, Anthocyanin'
          },
          {
            qText:
              'The flowers which contain both androecium and gynoecium are called ______ flowers.',
            options: 'bisexual, unisexual, asexual'
          }
        ]
      }
    },
    {
      id: 'wordsearch-1',
      type: 'wordsearch',
      label: 'Exotic Plants',
      data: {
        title: 'Find the exotic plants from the table.',
        words: [
          {
            word: ['C', 'Y', 'C', 'A', 'S'],
            marker: [0, 0, 4, 0]
          },
          {
            word: ['F', 'E', 'R', 'N'],
            marker: [0, 1, 0, 4]
          },
          {
            word: ['C', 'R', 'O', 'T', 'O', 'N'],
            marker: [2, 0, 2, 5]
          },
          {
            word: ['A', 'L', 'O', 'E', 'V', 'E', 'R', 'A'],
            marker: [3, 0, 3, 7]
          },
          {
            word: ['P', 'L', 'U', 'M', 'E', 'R', 'I', 'A'],
            marker: [5, 0, 5, 7]
          }
        ],
        table: [
          ['C', 'Y', 'C', 'A', 'S', 'P'],
          ['F', 'J', 'R', 'L', 'H', 'L'],
          ['E', 'Z', 'O', 'O', 'B', 'U'],
          ['R', 'S', 'T', 'E', 'T', 'M'],
          ['N', 'J', 'O', 'V', 'T', 'E'],
          ['Q', 'D', 'N', 'E', 'M', 'R'],
          ['I', 'W', 'T', 'R', 'P', 'I'],
          ['E', 'R', 'D', 'A', 'N', 'A']
        ],
        lang: 'en',
        showWords: true
      }
    },
    {
      id: 'crossword-1',
      type: 'crossword',
      label: 'Crossword 1',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'androceium',
            marker: {
              x: 3,
              y: 0
            },
            hint: 'male reproductive organ in plants',
            direction: 'down'
          },
          {
            word: 'gynoecium',
            marker: {
              x: 0,
              y: 4
            },
            hint: 'female reproductive organ in plants',
            direction: 'across'
          },
          {
            word: 'zoochory',
            marker: {
              x: 5,
              y: 1
            },
            hint: 'seed dispersal by animals',
            direction: 'down'
          },
          {
            word: 'petal',
            marker: {
              x: 4,
              y: 3
            },
            hint: 'colorful part of flower ',
            direction: 'down'
          },
          {
            word: 'ovary',
            marker: {
              x: 5,
              y: 3
            },
            hint: 'contain ovules',
            direction: 'across'
          },
          {
            word: 'anther',
            marker: {
              x: 3,
              y: 0
            },
            hint: 'contain pollen',
            direction: 'across'
          },
          {
            word: 'pollen',
            marker: {
              x: 2,
              y: 9
            },
            hint: 'seen within pollen sac',
            direction: 'down2'
          },
          {
            word: 'stalk',
            marker: {
              x: 6,
              y: 5
            },
            hint: 'part of stamen',
            direction: 'down'
          },
          {
            word: 'stamen',
            marker: {
              x: 9,
              y: 4
            },
            hint: 'androceium',
            direction: 'down'
          },
          {
            word: 'style',
            marker: {
              x: 1,
              y: 2
            },
            hint: 'gynoecium',
            direction: 'down'
          },
          {
            word: 'stigma',
            marker: {
              x: 0,
              y: 1
            },
            hint: 'seen in female flower',
            direction: 'down'
          },
          {
            word: 'ovule',
            marker: {
              x: 5,
              y: 2
            },
            hint: 'seen in ovary',
            direction: 'across'
          }
        ],
        table: [
          ['', '', '', 'A', 'N', 'T', 'H', 'E', 'R', ''],
          ['S', '', '', 'N', '', 'Z', '', '', '', ''],
          ['T', 'S', '', 'D', '', 'O', 'V', 'U', 'L', 'E'],
          ['I', 'T', '', 'R', 'P', 'O', 'V', 'A', 'R', 'Y'],
          ['G', 'Y', 'N', 'O', 'E', 'C', 'I', 'U', 'M', 'S'],
          ['M', 'L', 'E', 'C', 'T', 'H', 'S', '', '', 'T'],
          ['A', 'E', 'L', 'E', 'A', 'O', 'T', '', '', 'A'],
          ['', '', 'L', 'I', 'L', 'R', 'A', '', '', 'M'],
          ['', '', 'O', 'U', '', 'Y', 'L', '', '', 'E'],
          ['', '', 'P', 'M', '', '', 'K', '', '', 'N']
        ],
        lang: 'en'
      }
    },
    {
      id: 'wordsearch-2',
      editable: true,
      type: 'wordsearch',
      label: 'Parts of flower',
      data: {
        title: 'Find the parts of flower',
        words: [
          {
            word: ['S', 'E', 'P', 'A', 'L'],
            marker: [0, 0, 0, 4]
          },
          {
            word: ['P', 'E', 'T', 'A', 'L'],
            marker: [4, 4, 0, 4]
          },
          {
            word: ['S', 'T', 'I', 'G', 'M', 'A'],
            marker: [0, 0, 5, 0]
          },
          {
            word: ['S', 'T', 'Y', 'L', 'E'],
            marker: [2, 3, 2, 7]
          },
          {
            word: ['O', 'V', 'A', 'R', 'Y'],
            marker: [6, 5, 2, 5]
          },
          {
            word: ['O', 'V', 'U', 'L', 'E'],
            marker: [5, 6, 5, 2]
          },
          {
            word: ['P', 'O', 'L', 'L', 'E', 'N'],
            marker: [6, 7, 1, 7]
          },
          {
            word: ['S', 'T', 'A', 'L', 'K'],
            marker: [1, 2, 1, 6]
          },
          {
            word: ['A', 'N', 'T', 'H', 'E', 'R'],
            marker: [1, 1, 6, 1]
          },
          {
            word: ['F', 'I', 'L', 'A', 'M', 'E', 'N', 'T'],
            marker: [7, 0, 7, 7]
          }
        ],
        table: [
          ['S', 'T', 'I', 'G', 'M', 'A', 'O', 'F'],
          ['E', 'A', 'N', 'T', 'H', 'E', 'R', 'I'],
          ['P', 'S', 'G', 'Q', 'S', 'E', 'K', 'L'],
          ['A', 'T', 'S', 'M', 'A', 'L', 'V', 'A'],
          ['L', 'A', 'T', 'E', 'P', 'U', 'P', 'M'],
          ['C', 'L', 'Y', 'R', 'A', 'V', 'O', 'E'],
          ['O', 'K', 'L', 'X', 'S', 'O', 'H', 'N'],
          ['K', 'N', 'E', 'L', 'L', 'O', 'P', 'T']
        ],
        lang: 'en',
        showWords: false
      }
    },
    {
      id: 'wordsearch-3',
      type: 'wordsearch',
      label: 'Flowering Plants',
      data: {
        title: 'Find the flowering plants from the table.',
        words: [
          {
            word: ['O', 'R', 'C', 'H', 'I', 'D', 'S'],
            marker: [0, 4, 6, 4]
          },
          {
            word: ['R', 'O', 'S', 'E'],
            marker: [1, 4, 1, 7]
          },
          {
            word: ['D', 'A', 'H', 'L', 'I', 'A'],
            marker: [5, 4, 5, 9]
          },
          {
            word: ['M', 'A', 'R', 'I', 'G', 'O', 'L', 'D'],
            marker: [4, 1, 4, 8]
          },
          {
            word: ['L', 'O', 'T', 'U', 'S'],
            marker: [0, 3, 0, 7]
          },
          {
            word: ['J', 'A', 'S', 'M', 'I', 'N', 'E'],
            marker: [6, 2, 6, 8]
          },
          {
            word: ['L', 'I', 'L', 'Y'],
            marker: [6, 0, 9, 0]
          },
          {
            word: ['I', 'R', 'I', 'S'],
            marker: [6, 1, 9, 1]
          },
          {
            word: ['B', 'A', 'L', 'S', 'A', 'M'],
            marker: [7, 2, 7, 7]
          },
          {
            word: ['T', 'U', 'L', 'I', 'P', 'S'],
            marker: [9, 6, 9, 1]
          },
          {
            word: ['H', 'Y', 'D', 'R', 'A', 'N', 'G', 'E', 'A'],
            marker: [1, 9, 9, 9]
          },
          {
            word: ['D', 'I', 'A', 'S', 'Y'],
            marker: [4, 8, 0, 8]
          },
          {
            word: ['O', 'A', 'K'],
            marker: [1, 5, 3, 5]
          },
          {
            word: ['V', 'I', 'O', 'L', 'E', 'T'],
            marker: [0, 0, 5, 0]
          },
          {
            word: ['P', 'O', 'P', 'Y'],
            marker: [0, 1, 3, 1]
          },
          {
            word: ['A', 'S', 'T', 'E', 'R'],
            marker: [8, 2, 8, 6]
          }
        ],
        table: [
          ['V', 'I', 'O', 'L', 'E', 'T', 'L', 'I', 'L', 'Y'],
          ['P', 'O', 'P', 'Y', 'M', 'T', 'I', 'R', 'I', 'S'],
          ['H', 'K', 'O', 'X', 'A', 'K', 'J', 'B', 'A', 'P'],
          ['L', 'N', 'G', 'F', 'R', 'F', 'A', 'A', 'S', 'I'],
          ['O', 'R', 'C', 'H', 'I', 'D', 'S', 'L', 'T', 'L'],
          ['T', 'O', 'A', 'K', 'G', 'A', 'M', 'S', 'E', 'U'],
          ['U', 'S', 'S', 'Z', 'O', 'H', 'I', 'A', 'R', 'T'],
          ['S', 'E', 'G', 'V', 'L', 'L', 'N', 'M', 'P', 'E'],
          ['Y', 'S', 'A', 'I', 'D', 'I', 'E', 'W', 'E', 'X'],
          ['L', 'H', 'Y', 'D', 'R', 'A', 'N', 'G', 'E', 'A']
        ],
        lang: 'en',
        showWords: true
      }
    },
    {
      id: 'wordsearch-4',
      type: 'wordsearch',
      label: 'Non Flowering Plants',
      data: {
        title: 'Find the non flowering plants from the table.',
        words: [
          {
            word: ['F', 'E', 'R', 'N'],
            marker: [0, 0, 3, 0]
          },
          {
            word: ['C', 'O', 'N', 'I', 'F', 'E', 'R'],
            marker: [2, 6, 2, 0]
          },
          {
            word: ['C', 'Y', 'C', 'A', 'D'],
            marker: [1, 1, 1, 5]
          },
          {
            word: ['H', 'O', 'R', 'S', 'E', 'T', 'A', 'I', 'L'],
            marker: [4, 0, 4, 8]
          },
          {
            word: ['G', 'I', 'N', 'G', 'O'],
            marker: [3, 1, 3, 5]
          },
          {
            word: ['A', 'L', 'G', 'A', 'E'],
            marker: [0, 1, 0, 5]
          },
          {
            word: ['M', 'O', 'S', 'E'],
            marker: [0, 7, 3, 7]
          },
          {
            word: ['F', 'I', 'R', 'S'],
            marker: [0, 8, 3, 8]
          },
          {
            word: ['P', 'I', 'N', 'E'],
            marker: [5, 0, 5, 3]
          },
          {
            word: ['Y', 'E', 'W', 'S'],
            marker: [5, 8, 5, 5]
          }
        ],
        table: [
          ['F', 'E', 'R', 'N', 'H', 'P'],
          ['A', 'C', 'E', 'G', 'O', 'I'],
          ['L', 'Y', 'F', 'I', 'R', 'N'],
          ['G', 'C', 'I', 'N', 'S', 'E'],
          ['A', 'A', 'N', 'G', 'E', 'H'],
          ['E', 'D', 'O', 'O', 'T', 'S'],
          ['K', 'S', 'C', 'C', 'A', 'W'],
          ['M', 'O', 'S', 'E', 'I', 'E'],
          ['F', 'I', 'R', 'S', 'L', 'Y']
        ],
        lang: 'en',
        showWords: true
      }
    },
    {
      id: 'crossword-2',
      type: 'crossword',
      label: 'Crossword 2',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'opuntia',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'dessert plant',
            direction: 'across'
          },
          {
            word: 'teak',
            marker: {
              x: 4,
              y: 0
            },
            hint: 'seen in plains',
            direction: 'down'
          },
          {
            word: 'pistia',
            marker: {
              x: 1,
              y: 0
            },
            hint: 'free floating plant',
            direction: 'down'
          },
          {
            word: 'pine',
            marker: {
              x: 7,
              y: 1
            },
            hint: 'mountain tree',
            direction: 'across2'
          },
          {
            word: 'mango',
            marker: {
              x: 0,
              y: 4
            },
            hint: 'single seeded fruit',
            direction: 'down2'
          },
          {
            word: 'banana',
            marker: {
              x: 0,
              y: 5
            },
            hint: 'seedless fruit',
            direction: 'across'
          },
          {
            word: 'sepal',
            marker: {
              x: 1,
              y: 2
            },
            hint: 'green part under petal',
            direction: 'across'
          },
          {
            word: 'pistil',
            marker: {
              x: 7,
              y: 1
            },
            hint: 'part of flower',
            direction: 'down'
          },
          {
            word: 'apex',
            marker: {
              x: 3,
              y: 1
            },
            hint: 'narrow end of leaf',
            direction: 'down'
          },
          {
            word: 'lamina',
            marker: {
              x: 7,
              y: 6
            },
            hint: 'branch from midrib',
            direction: 'across2'
          },
          {
            word: 'trunk',
            marker: {
              x: 0,
              y: 7
            },
            hint: 'thick and strong stem',
            direction: 'across'
          },
          {
            word: 'grass',
            marker: {
              x: 6,
              y: 8
            },
            hint: 'fibrous root',
            direction: 'down2'
          },
          {
            word: 'guava',
            marker: {
              x: 6,
              y: 8
            },
            hint: 'multiple seeds',
            direction: 'across2'
          }
        ],
        table: [
          ['O', 'P', 'U', 'N', 'T', 'I', 'A', ''],
          ['G', 'I', '', 'A', 'E', 'N', 'I', 'P'],
          ['N', 'S', 'E', 'P', 'A', 'L', '', 'I'],
          ['A', 'T', '', 'E', 'K', '', '', 'S'],
          ['M', 'I', '', 'X', '', '', 'S', 'T'],
          ['B', 'A', 'N', 'A', 'N', 'A', 'S', 'I'],
          ['', '', 'A', 'N', 'I', 'M', 'A', 'L'],
          ['T', 'R', 'U', 'N', 'K', '', 'R', ''],
          ['', '', 'A', 'V', 'A', 'U', 'G', '']
        ],
        lang: 'en'
      }
    },
    {
      id: 'wordsearch-5',
      type: 'wordsearch',
      label: 'Friends of Farmer',
      data: {
        title: 'Find the friends of farmer from the table.',
        words: [
          {
            word: ['E', 'A', 'R', 'T', 'H', 'W', 'O', 'R', 'M'],
            marker: [0, 0, 0, 8]
          },
          {
            word: ['L', 'A', 'D', 'Y', 'B', 'I', 'R', 'D'],
            marker: [1, 8, 1, 1]
          },
          {
            word: ['D', 'R', 'A', 'G', 'O', 'N', 'F', 'L', 'Y'],
            marker: [2, 0, 2, 8]
          },
          {
            word: ['E', 'A', 'R', 'W', 'I', 'G'],
            marker: [7, 3, 2, 3]
          },
          {
            word: ['S', 'P', 'I', 'D', 'E', 'R'],
            marker: [7, 1, 2, 1]
          },
          {
            word: ['B', 'E', 'E', 'T', 'L', 'E'],
            marker: [7, 8, 7, 3]
          },
          {
            word: ['B', 'E', 'E'],
            marker: [3, 0, 3, 2]
          },
          {
            word: ['B', 'U', 'L', 'L'],
            marker: [5, 7, 2, 7]
          },
          {
            word: ['M', 'U', 'N', 'I', 'A', 'S'],
            marker: [6, 7, 6, 2]
          },
          {
            word: ['D', 'O', 'V', 'E'],
            marker: [3, 8, 6, 8]
          }
        ],
        table: [
          ['E', 'W', 'D', 'B', 'O', 'D', 'D', 'W'],
          ['A', 'D', 'R', 'E', 'D', 'I', 'P', 'S'],
          ['R', 'R', 'A', 'E', 'V', 'B', 'S', 'V'],
          ['T', 'I', 'G', 'I', 'W', 'R', 'A', 'E'],
          ['H', 'B', 'O', 'R', 'D', 'Y', 'I', 'L'],
          ['W', 'Y', 'N', 'H', 'V', 'P', 'N', 'T'],
          ['O', 'D', 'F', 'Y', 'R', 'O', 'U', 'E'],
          ['R', 'A', 'L', 'L', 'U', 'B', 'M', 'E'],
          ['M', 'L', 'Y', 'D', 'O', 'V', 'E', 'B']
        ],
        lang: 'en',
        showWords: true
      }
    }
  ]
};
