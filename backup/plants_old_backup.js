export default {
  id: 'plants',
  label: 'Plants',
  list: [
    {
      label: 'Cold climate vs Hot climate',
      id: 'classify-6',
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
      label: 'Plants - Reading',
      type: 'passage',
      id: 'reading-2',
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
      label: 'Terrestrial vs Aquatic-1',
      id: 'terrestrial-aquatic',
      type: 'group',
      data: {
        title: 'Classify the below plants based on the habitat they belong',
        types: [
          {
            name: 'Terrestrial',
            text: 'sunflower, rose, daffodils, poison ivy'
          },
          {
            name: 'Aquatic',
            text: 'lotus, water lily, duckweed, watercress'
          }
        ]
      }
    },
    {
      label: ' Weak vs Strong',
      id: 'classify-9',
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
      id: 'match-4',
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
      id: 'plant-fillup',
      label: 'Plants - Fill in the Blanks ',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `*Fibrous (tap)* roots are developed from the base of the stem.
  Avecinnia plants have roots *above (below)* the ground.
  Trees such as peepal and banyan have very strong and thick stem called *trunk (wood)*.
  The loss of water in the form of gas happens through the tiny pores in the leaves is called *transpiration (evaporation)*.`
      }
    },
    {
      id: 'plant-fillup-2',
      label: 'Plants - Fill in the Blanks ',
      type: 'fillup',
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
      id: 'true-false-5',
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
      id: 'words',
      type: 'sequence',
      label: 'Words related to plants',
      commonData: {
        title: 'connect the letter to create word'
      },
      data: [`Plant, leaf, bud, flower, root, desert, mountain, seed`]
    },
    {
      type: 'rightOne',
      id: 'odd-one',
      label: 'Odd one out',
      data: {
        title: 'Odd one out',
        fontSize: '1.3rem',
        noCaps: true,
        text: `Tomato, Carrot, Radish, Beetroot
  Turmeric,Cabbage,  Greens,  Spinach
  Neem,  Aloe vera,  Datepalm,  Opuntia
  Mango, Apple, Orange, Papaya
  Opuntia, Hydrilla,  Water hyacinth, Vallisneria`
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
          }
        ]
      }
    }
    //plants-4
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
      },
      //old plant-5
      {
        label: 'Gynoecium vs Androceium',
        id: 'group',
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
        id: 'group-3',
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
        id: 'group-4',
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
        id: 'group-5',
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
        id: 'group-6',
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
        id: 'group-7',
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
        id: 'match',
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
        id: 'fillup',
        label: 'Plants - Fill in the Blanks ',
        type: 'fillup',
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
        id: 'drag-drop',
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
        label: 'Plants - Choose the best Answer',
        id: 'mcq',
        type: 'mcq',
        data: {
          title: 'Multiple Choice Questions',
          questions: [
            {
              qText: ' Which places do insectivorous plants grow most?',
              options:
                'nitrogen deficient, oxygen deficient, phophorous deficient'
            },
            {
              qText: 'How does insectivorus plants attract insects?',
              options: 'nectar, bright colours, certain odours, *all'
            },
            {
              qText: ' Which of the following is not an exotic plant?',
              options: 'lotus, tulip, orchid, lily'
            },
            {
              qText: 'Which of the following is not an exotic animal?',
              options: 'rhinocerous, red panda, black buck'
            }
          ]
        }
      },
      {
        id: 'fillup-plants',
        label: 'Plants - Fill up ',
        type: 'matchByDragDrop',
        data: {
          title: 'Click the blanks and fill it with the right word.',
          text: `*Insectivorous* plants are insect eating plants. 
  Exotic *plants* are the plants that have been introduced to a region or ecosystem where they are foreign or non-native.
  Exotic *animals* are those animal species that is non-native and has been introduced into an area where it does not occur naturally.`
        }
      },
      {
        id: 'drag-drop-2',
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
        id: 'match-3',
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
        id: 'match-4',
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
        id: 'mcq-3',
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
        label: 'Structure of seed- Reading',
        type: 'passage',
        id: 'passage',
        data: {
          title: 'Structure of seed',
          text: `# Seed
  Most plants grow from seeds. Seeds are usually found on inside the fruit. Often new plants grow when seeds from a plant fall on the soil.
  # Structure of seed
  A thick outer covering called a seed coat protects the seed. The scar on the seed is where it was attached to the fruit. On top of the scar you will find a small hole. This hole allows water to enter the seed.Carefully remove the seed coat. You will see two seed leaves. Between the seed leaves is the baby plant. It has a baby shoot and a baby root. The seed leaves store food for the baby plant. It has a baby shoot and a baby root. The seed leaves store food for the baby plant. They also protect the baby plant. All seeds do not have two seed leaves. Some such as corn, have only one seed leaf. When seeds get enough water, air and warmth they grow into new plants. They do not grow if any one of these is missing. Seeds use the food stored  in seed leaves to grow. The growth of a baby plant from a seed is called germination. The growing baby plant is known as a seedling. The roots of the young plant start growing from the seed down into the soil. Then the shoot starts appearing and grows upwards. The seed leaves are present till leaves start growing on the plant. Once green leaves grow, the plant is able to make its own food.`
        }
      },
      {
        id: 'match-9',
        label: 'Match the following',
        type: 'match',
        data: {
          text: `seed coat, protect
  seed leaf, food
  corn, 1 seed leaf
  scar, attached to fruit`,
          title: 'Match the following'
        }
      },
      {
        label: 'Germination',
        type: 'sorting',
        data: {
          title: 'Arrange in the correct order.',
          text:
            'seed falls on soil, enough water and air, root grow into soil, shoot appears, grow upwards, leaves appear.'
        },
        id: 'germination'
      },
      {
        id: 'drag-drop-seed',
        label: 'Seed - Fill in the blanks',
        type: 'matchByDragDrop',
        data: {
          title: 'Click the blanks and fill it with the right word.',
          text: `A thick outer covering called a *seed coat* protects the seed. 
  The *scar* on the seed is where it was attached to the fruit. 
  On top of the scar you will find a small hole. This hole allows *water* to enter the seed.
  Between the *seed leaves* is the baby plant.
  The seed leaves store *food* for the baby plant.`
        }
      }
  ]
};
