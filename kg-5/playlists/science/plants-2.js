export default {
    id: 'plant-2',
    label: 'Plant-2',
    pdf: '',
    lockAfter: 4,
    list: [
        {
            label: 'Plants - Reading',
            type: 'passage',
            id: '100',
            data: {
              title: 'Plants',
              text: [`Like our body a plant also has many parts. The main parts of a plant include root, stem, leaf, flower, fruit and seed. Each part has a set of jobs to do to keep the plant healthy.`,
              `Roots are found below the soil and it holds the plant firmly in its position. It absorbs the water and minerals from the soil. Sometimes it also stores food. Roots are of two main types: tap root and ﬁbrous root.`,              
              `The stem is the part that stays above the ground. A stem usually bears leaves, flowers and fruits. It distributes the water and minerals from the root to the leaves and flowers. The stem is the support system of the plant.`,              
              `The leaves grow out of the side of the stem. Their main function is to make food for the plant by the process known as photosynthesis. Also they help in removing any excess water via stomata and this process is known as transpiration.`,              
              `Flowers are the reproductive part of a plant. The flower has both female parts, called the pistil, and male parts, called the staemens. They work together to fertilize the plant and produce seeds.`,              
              `The fruit is a fleshy or dry ripened part of a plant, enclosing the seed or seeds.
              The hard part inside the fruit is called seed. Most plants grow from seeds.`,
                
              ]
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
                  text:'sunflower, rose, daffodils, poison ivy, tulip, cactus, papaya, pineapple, apricot'
                },
                {
                  name: 'Aquatic',
                  text: 'lotus, water lily, duckweed, watercress, water hyacinth, hydrilla, vallisneria'
                }
              ]
            }
          },
          {
            label: 'Free floating vs Fixed rooted vs Submerged',
            id: '300',
            type: 'group',
            data: {
              title: 'Classify the below plants into their respective type',
              types: [
                {
                  name: 'Free floating',
                  text:'duckweed, mosquito fern, water hyacinth, pistia'
                },
                {
                  name: 'Fixed rooted',
                  text: 'lotus, watershield, lotus, water lily'
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
                  text:'opuntia, aloe vera, cactus, date palm'
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
                  text:'beet, carrot, turnip, radish, kale, spinach, pea, onion, lettuce, potatoes'
                },
                {
                  name: 'Hot climate',
                  text: 'lily, rose, chrysanthemum, bougainvillea, brinjal, chilli, cucumber, tomato'
                },
              ]
            }
          },
          {
            label: 'One seed vs Many seeds vs Seedless',
            id: '600',
            type: 'group',
            data: {
              title: 'Classify the below fruits based on the number of seeds they produce',
              types: [
                {
                  name: 'One seed',
                  text:'avocado, mango, cherry, apricot'
                },
                {
                  name: 'Many seeds',
                  text: 'guava, watermelon, strawberry, figs, jackfruit, tomato, pomegranate'
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
              title: 'Classify the below plants based on the type of root system the contain.',
              types: [
                {
                  name: 'Tap root',
                  text:'beet root, carrot, parsnip, parsley'
                },
                {
                  name: 'Fibrous root',
                  text: 'rice, wheat, barley, oats, rye, millet'
                },

              ]
            }
          },
          {
            label: ' Weak vs Strong',
            id: '800',
            type: 'group',
            data: {
              title: 'Classify the below plants based on the type of stem the contain',
              types: [
                {
                  name: 'Weak',
                  text:'watermelon, grapes, pumpkin, bean, cucumber'
                },
                {
                  name: 'Strong',
                  text: 'neem, banyan, mango, deodar'
                },

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
              title: 'Match the things with their place in the environment'
            }
          },
          {
            id: '1000',
            label: 'Plants - Fill in the Blanks ',
            type: 'fillupOptions',
            data: {
              title: `*Fibrous (tap)* roots are developed from the base of the stem.
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
              title: `The soft and brightly colored part of a flower is called *petal (tepal)*.
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
              title: 'connect the letter to create word',
              lang: 'bn'
            },
            data: [
                `Plant, leaf, bud, flower, root, dessert, mountain, seed`,

            ]
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
                  qText: ' Which part of the plant absorbs water and nutrients for the plants?',
                  options: 'Roots, Leaves, Stem'
                },
                {
                    qText: ' Which part of the plant transports food from leaf and water from root to various parts of the plant?',
                    options: 'Stem, Flower, Fruit'
                  },
                  {
                    qText: ' The plant that grows in deserts and needs very little water is called ______',
                    options: 'Cactus, Rose, Marigold'
                  },
                  {
                    qText: ' ______ are the colourful part of a flower which attracts insects and birds.',
                    options: 'Petals, Pistils, Stamens'
                  },
                  {
                    qText: ' The leaves carries out transpiration through tiny pores called ______.',
                    options: 'stomata, petiole, lamina'
                  },
                  {
                    qText: ' Primary function of the ______ is to hold up buds, flowers, leaves, and fruits to the plant.',
                    options: 'stem, root, branch'
                  },
                  {
                    qText: ' Which of the following fruits that do not have seeds?',
                    options: 'Pineapple, Papaya, Apricot'
                  },
                  {
                    qText: 'The plants that grow in water bodies like ponds and lakes are called ______ plants.',
                    options: 'aquatic, terrestrial, coastal'
                  },
                
                
              ]
            },
        },
        {
            label: 'Plants-2 - Reading',
            type: 'passage',
            id: '1600',
            data: {
              title: 'Some more details on Plants',
              text: [`All living things need food. Photosynthesis is a process by which plants make their food using chlorophyll, water, carbon dioxide in the presence of sunlight.Plants are also referred as primary producers since they prepare food for themselves. Stems and branches of the plant take the prepared food from the leaves to other parts of the plants. Extra food is stored as starch in roots, stems, leaves ,fruits and in flowers.`,
              `Plants are classiﬁed in many ways based on stems, life span, seeds, ﬂower and colour. Based on the production of flowers, plants are classified into flowering and nonflowering plants. Based on the period of life cycle plants are classified into Annuals, Biennials and Perennials.`,
              `Based on the colour present in the plant, they are classified into Green and Nongreen plants.`
                
              ]
            }
          },
          {
            label: ' Flowering vs Non flowering',
            id: '1700',
            type: 'group',
            data: {
              title: 'Classify the below plants based on whether they produce flowers',
              types: [
                {
                  name: 'Flowering',
                  text:'sunflower, rose, daffodils, tulip, cactus, neem, paddy, mango'
                },
                {
                  name: 'Non-flowering',
                  text: 'algae, fungi, ferns, moses'
                },

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
                  text:'paddy, rice, grass, moss, conifer, algae'
                },
                {
                  name: 'Non-Green',
                  text: 'mushroom, moulds, bracket fungi, yeast'
                },

              ]
            }
          },
          {
            label: 'Winter vs Summer',
            id: '1800',
            type: 'group',
            data: {
              title: 'Classify the below flowers based on the season they bloom',
              types: [
                {
                  name: 'Winter',
                  text:'december, winter jasmine, tuberose, pansy'
                },
                {
                  name: 'Summer',
                  text: 'jasmine, sunflower, rose, marigold, bougainvillea, daisy'
                },

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
                  text:'dahlia, saffron, hibiscus, chrysanthemum'
                },
                {
                  name: 'Spring',
                  text: 'tulip, pansy, daffodil, prime rose'
                },

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
                  text:'carrot, beetroot, tapioca'
                },
                {
                  name: 'Stem',
                  text: 'onion, turmeric, sugarcane'
                },

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
                  text:'coriander, cabbage, moringa'
                },
                {
                  name: 'Flower',
                  text: 'banana flower, cauliflower, cloves'
                },

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
                  text:'watermelon, grapes, pumpkin, tomato, mango'
                },
                {
                  name: 'Grains',
                  text: 'rice, pulses, fenugreek'
                },

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
              title: `*Veins (lamina)* are branch out from the midrib.
              *Petiole (sepal)*joins the leaf to the main stem.
              *Stomata (leaf)* are used to exchange gases.
              *Chlorophyll (anthocyanin)* is the green pigment in plants`
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
            type: 'fillupOptions',
            data: {
              title: `Green pigment in plant that help in tapping light - *chlorophyll*
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
                  text:'apex, veins, midrib, blade, petiole'
                },
                {
                  name: 'Flower',
                  text: 'petal, stalk, sepal, pistil, stamen'
                },
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
                    qText: 'The presence of a substance called ______ makes a leaf green.',
                    options: 'chlorophyll, stomata, veins'
                  },
                  {
                    qText: ' The ______ on the leaf take water from the stem and pass it to all parts of the leaf.',
                    options: 'veins, nodes, petiole'
                  },
                  {
                    qText: ' Process of making own food by the plants is called as _____',
                    options: 'Photosynthesis, Reproduction, Development'
                  },
                  {
                    qText: 'The excess of food formed is stored as _____',
                    options: 'starch, sugar, salt'
                  },
                  {
                    qText: 'The region of the stem where leaves are born are called ______ ',
                    options: 'nodes, internodes, midrib'
                  },
                  {
                    qText: 'The non-flowering plants are also called as the ______.',
                    options: 'gymnosperms, angiosperms, heterotrophs'
                  },
                  {
                    qText: '______ are leaves that protect the ﬂower while it is still a bud.',
                    options: 'Sepals, Petals, Pistils'
                  },
                
                
              ]
            },
        },
        {
            label: 'Reproduction in Plants- Reading',
            type: 'passage',
            id: '3000',
            data: {
              title: 'Reproduction in Plants',
              text: [
              `#REPRODUCTION IN PLANTS`,              
              `Reproduction is the process by which living things make young ones. There are two kinds of reproduction that take place in plants. They are sexual reproduction (reproduction through seeds) and asexual reproduction (reproduction through different parts of plants).`,              
              `The main stages involved in sexual reproduction are as follows. Pollination- The transfer of pollen grains from the anther to stigma of a flower. Fertilization- When pollination is successful, the pollen joins the egg present in the ovary. The cell which results after fusion is called a zygote. Seed formation- After fertilization, the ovary swells and changes into a fruit. The seeds develop from the ovules.`,              
              `Flowers are not required for asexual reproduction method. It occurs through budding, fragmentation, vegetative propagation, and spore formation.`,              
              `#AGRICULTURE`,              
              `Agriculture or farming is one of the main sources of the livelihood. It is the practice of farming to grow crops and produce food. Major agricultural products are cereals, vegetables, fruits and oil seeds. They are cultivated not only for our basic needs but also for commercial purpose. In agriculture, there are certain parameters to be considered such as the type of crop, properties of soil, climate etc.`,              
              `Soil is one of the most important natural resources and is essential for agriculture. The organic and inorganic material on the surface of the earth that provides the medium for plant growth is called the soil. The soil is classified on the basis of the proportion of various sizes.`,              
              `Soil is one of the most important natural resources. It is essential for agriculture. It supports the growth of plants by holding the roots and supplying water and nutrients. It is the home for many organisms. Soil is formed by the breaking of rocks by the action of wind, water and climate. The mixture of rock particles and humus is called the soil. The soil is classified on the basis of the proportion of various sizes.`
                
              ]
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
                  text:'stamen, stalk, filament, anther, pollen'
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
            id: '3100',
            type: 'group',
            data: {
              title: 'Classify the below plants into their respective type',
              types: [
                {
                  name: 'Unisexual',
                  text:'Coconut flowers, Papaya, Watermelon, Cucumber, Maize'
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
                  text:'Maize,  melon, Snake gourd, Bitter gourd, Tapioca'
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
                  text:'wheat, rice, corn, barley, oats'
                },
                {
                  name: 'Hydrophily',
                  text: 'hydrilla, zostera, vallisneria'
                },
                {
                    name: 'Entamophily',
                    text: 'sunflower, orchids'
                  },
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
                  text:'grass, palm,. orchid, lily, banana, wheat, rice'
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
              title: 'Classify the below plants based on their mode of seed dispersal',
              types: [
                {
                  name: 'Anemochory',
                  text:'cotton, dandelion, drumstick'
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
                  text:'xanthium, acyranthus'
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
              title: `Neelakurinji that blossoms once in *12 (15)* years.
              To attract the *insects (moth)* plants are bright in colour and produce smell in their flowers.
              Plants which are pollinated by the moth and bats release their fragrance mostly at *night (noon)* and have colourless petals.
              Pollination by *birds (bats)* is known as Ornithophily.
              Earthworms help to *increase (decrease)* the amount of air and water that gets into the soil.
              *Dragonfly (butterfly)* destroys the egg and larva of harmful insects and mosquitoes and prevents the spreading of diseases.`
            }
          },
          {
            label: 'True or False',
            id: '3800',
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
            id: '3900',
            type: 'sequence',
            label: 'Words related to plants',
            commonData: {
              title: 'connect the letter to create word',
            },
            data: [
                `Androecium, Gynoecium, Anemochory, Hydrochory, Zoochory`,
                `Autochory, Anemophily, Hydrophily, Entamophily`
            ]
          },
          {
            id: '4000',
            label: 'Plants - Answer in one word ',
            type: 'fillupOptions',
            data: {
              title: `Female reproductive organ - *gynoecium*
              Male reproductive organ - *androceium*
              Pollination through air - *anemophily*
              Pollination through water - *hydrophily*
              Pollination through animals - *entamophily*`
            }
          },
          {
            id: '4100',
            label: 'Plants - Answer in one word -2 ',
            type: 'fillupOptions',
            data: {
              title: `Seed with single cotyledon - *monocotyledon*
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
                  qText: ' Which plants require two years to complete their life cycle?',
                  options: 'Biennials, Annuals, Perennials'
                },
                {
                    qText: 'Which plants are long-lived and require more than two years to complete their life cycle?',
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
                    qText: 'The process by which seed grows into a seedling is called _____.',
                    options: 'germination, pollination, fertilization'
                  },
                  {
                    qText: 'After fertilization, ovary develops into fruit and ovules develop into _____.',
                    options: 'seeds, buds, zygote'
                  },
                  {
                    qText: '______ is the male reproductive part of the flower.',
                    options: 'Androecium, Gynoecium, Anthocyanin'
                  },
                  {
                    qText: 'The flowers which contain both androecium and gynoecium are called ______ flowers.',
                    options: 'bisexual, unisexual, asexual'
                  },
                
                
              ]
            },
        },
    ]
};
