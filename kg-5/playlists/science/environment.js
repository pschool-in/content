export default {
  id: 'environment',
  label: 'Environment',
  lockAfter: 4,
  list: [
    {
      id: 'notes',
      label: 'Environment',
      type: 'passage',
      data: {
        text: `All the living and non-living things surrounding us together forms the environment. These things are plants, animals, human beings, insects, soil, stone, mountain, microbes etc. All these thing adapt and interact to form a healthy environment.
          # Living thing and Non-living thing
          Living things live, breathe, consume, grow, die and reproduce. For example Human beings, animals, plants, trees, bacteria, fungus, plants, trees etc. Non-living things do not breathe, live, eat, reproduce, etc. For example Stone, chair, house, etc.
          # Relationship of all things in the environment
          1. Living things and non-living things interact in the environment.For example, birds live in a nest. To build the nest, they need twigs, cotton, threads, etc.
          2. Living things also keep the environment healthy. For example, seeds scatter in the soil/ ground by the wind and grow as new plants that help the environment.
          3. Living things bring changes even in non-living things. Some types of animals hunt and eat. The remaining part of the dead animals will start to decay in the soil and that will turn into manure. Thus, all living things and non-living things are dependent upon each other.`,
        title: 'What is an Environment?'
      }
    },
    {
      id: 'classify',
      label: 'Living vs Non-living',
      type: 'group',
      data: {
        title: 'Classify the below as living and non-living things.',
        types: [
          {
            name: 'living',
            text: 'mango tree, squirrel, fox, lotus,'
          },
          {
            name: 'non-living',
            text: 'stone, water, chair, bread'
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match',
      type: 'match',
      data: {
        title: 'Match the related ones.',
        fontSize: '1rem',
        text: `Birds, Nest
          Silk, Clothes
          Wooden chair, Tree
          Soil Fertile, Decay of dead animals and plants
          Pollution, Environment`
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
            qText: 'Animals can  __________',
            options: `eat food
              move one place to another
              reproduce the little ones
              *All the above`
          },
          {
            qText: 'Houses are built using ___________',
            options: `Bricks and cement
              Steel and glasses
              Wood
              *All the above`
          },
          {
            qText: 'Environment is made up of __________.',
            options: `living things and non-living things
              animals and plants
             human beings and animals
             earth and sky`
          },
          {
            qText:
              'Human used to make many things like _____, ______ from the environment.',
            options: `paper, baskets
              water, soil
              stone, plants
              mountain, land`
          },
          {
            qText: 'Seeds of the plants are scattered by _________.',
            options: 'wind, animals, insects , *All the above'
          }
        ]
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper place.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `Living things bring changes in *non-living things* too.
        Living things need *food* to grow.
        Humans used to weave *clothes* using cotton, silk, wool.
        Some animals used to hunt and eat other *animal's flesh*
        For survival, living things take their needs from the *environment*.`
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        text: `Sparrows grow by eating *insects (stone)* and *food grains (paper)*.
          Plants and animals will come under *living (non-living)* things.
          Plants utilize *sunlight (moonlight)* to prepare their food.
          Birds will build their nest using *twigs (bricks) *.
          Papers, rock and bag will come under *non-living (living)* things .`,
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
            text: `Dead animals will decay in the soil and turn the soil as fertile.
            Living things and non-living things depend upon each other in the environment.
            Plants will not move from one place to another place by their own.`
          },
          {
            name: 'False',
            text: `Train can move from one place to another. So, train is a living things.
            Wooden chairs and tables are made from the trees. So, they are living things.`
          }
        ]
      }
    },

    {
      id: 'notes-2',
      label: 'So many kinds of animals',
      type: 'passage',
      data: {
        title: 'Different types of Animals, Insects, and Birds',
        text: `Our planet is full of diversity. Moreover, every type has its unique characteristics. Some animals live on land; some in water; some live both in water and land; birds in land and air; some birds in water. Mammals are one of the most important ones. They usually give the milk to their young ones like cows, goats, pigs, rats, dogs, etc. They have mammary glands and hair on their body.
          # Different Sizes
          Body size of all the animals vary. For example elephants and giraffes are big size animals; dogs and goats are medium-sized animals; squirrels and rats are small-sized animals. Insects are the tiny ones with unique characteristics.
          # Different Colors
         Different animals, birds, and insects will have different color patterns in their body. For example, peacock has colorful feathers; five-colored parrot Brett; tiger is found in both orange and white; crows in black and pigeons in grey.
          # Different ways of the Birds
          Birds have two legs and two wings. Their body is covered with feathers. Every bird can fly, with a few exceptions like penguins. For example, an eagle will fly higher whereas pigeons will not be able to fly high.
          # Different ways of the Animals
         Animals have four legs and each animals move in a different way. Some run very fast, some move very slowly. For example, cheetah is the fastest land animal and the tortoise is the slowest. Some reptiles move at normal speed and some very fast. Most of the reptiles crawl and have scales on their body. For example, snakes move much faster when compared to crocodiles on land. Moreover, some have short legs and some have no legs at all. For example, snakes don't have legs, and lizards have small legs.
          # Different ways of the Insects
          Some fly in the air, as well as they move on land. There are variety of insects with different characteristics. Insects also have wings. Examples are mosquitoes, houseflies, butterflies, etc. Usually, most insects have six legs but some have eight.
          # Different ways of the Fish
          Fishes live in water. They are of different types. They have fins and scales in their body to move in the water; use gills to breathe. They cannot survive on land. Some unique fishes can survive on moist-land, for example, the mud-fish.
          Interesting facts - Bats have wings in their body, but they no feathers. Bats are not birds and are classified under the cold-blooded animal.
          # Domestic animals and Wild animals:
 Animals and birds can be categorized into two types; domestic and wild. Domestic animals can be tamed and don't harm, but wild animals harm us. Wild animals like lions, foxes, bears, tigers, etc., can be seen in forests, zoos. Domestic animals always support humans and help us in many ways. For example, cows, goats, buffalo. There are some types of animals and insects which enter our house, but are of no use to us like rats, mice, bed bugs, spiders etc.`
      }
    },
    {
      id: 'classify-2',
      label: 'Domestic vs Wild Animals',
      type: 'group',
      data: {
        title: 'Classify the below as domestic and wild animals.',
        types: [
          {
            name: 'Domestic',
            text: 'cow, dog, goat, pig'
          },
          {
            name: 'Wild',
            text: 'lion, tiger, bear, fox'
          }
        ]
      }
    },
    {
      id: 'match-2',
      label: 'Match-2',
      type: 'match',
      data: {
        title: 'Match the following',
        fontSize: '1rem',
        text: `Spider, Web
          Fish, Water
          Sheep, Wool
          Dog, Bark
          Snake, Crawl`
      }
    },
    {
      id: 'mcq-2',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: '_______ will crawl from one place to another place.',
            options: `Snake, Elephant, Bat, Horse`
          },
          {
            qText: 'Butterflies have ______ legs.',
            options: `six, seven, eight, nine`
          },
          {
            qText: '_______ has mane in their body.',
            options: `Horse, Cow, Elephant, Deer`
          },
          {
            qText: '_______ have different types of colors in their body.',
            options: `Peacock, Crow, Eagle, Dove`
          },
          {
            qText: '_________ grows in stagnant water.',
            options: `Mosquito, Housefly, Cockroach, Fruitfly`
          }
        ]
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper place.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `Crocodiles are *reptile*.
          *Elephants* have a trunk.
          *Snake* is a cold-blooded animal.
          *Chameleon* can change its skin color.
          *Monkey* is a warm-blooded animal.`
      }
    },

    {
      id: 'fillup-2',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        text: `Birds have *two (three)* wings.
        *Ox (Dog)* is used as a draft animal.
        Rats and mice will *trouble (help)* us.
        Bedbugs will suck *blood (sweat)* from our body
        *Kangaroos (Monkey)* have a special pouch in their body, to carry their young ones.`,
        title: 'Fill in the blanks.'
      }
    },
    {
      id: 'true-false-2',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Fishes have fins, scales in their body.
              Eagle flies higher than the pigeon.
              Spiders are insects with eight legs.`
          },
          {
            name: 'False',
            text: `Dogs will have scales in their body.
              Bat is a bird.`
          }
        ]
      }
    },
    {
      id: 'notes-3',
      label: 'The Inter-relationships Between Living Things',
      type: 'passage',
      data: {
        title: '',
        text: `Living things take their necessary things from the environment. All living things need food, water, air for survival and it is fulfilled in the environment. Moreover, there will be more differences in needs for every living organism. The necessity will change from one to another living things. You can find the living things in their suitable place, where its necessary things are getting fulfilled. For example; a Lemon tree lives in the land, but it will not survive in a pond or lake or ocean or sea.
          # Animal's Need
          Animals need is fulfilled in the environment. Animals can live in the area where it is getting supported by the environment. Fish lives in water, but it is very difficult to survive in the land. Tiger has stripes on its body and it will hide in tall grasses to hunt its prey. Those stripes will help the tiger camouflage so that its prey cannot able to find the tiger. Tiger is dependent upon its prey animals like deer, wild pigs, buffalo, etc. Moreover, they are dependent upon the waterhole, dense vegetation, and also need caves or dens for their shelter. Similarly, many animals will depend upon the plants, animals, and other surroundings in the environment. Some animals will come under herbivores, some will come under carnivores and some animals will come under omnivores.
          # Animals and trees support each other
          Some animals live on trees as well as on land. For example, animals like monkeys, squirrels, etc., will live on both trees and land. In this case, both trees and animals help each other. Trees will give fruits, vegetables to these animals. Sometimes monkeys can use the tress to defend themselves from their enemies. Suck kind of animals are called Arboreal (living in trees). Even birds build their nest in the tree. Moreover, unknowingly these animals support the trees. These animals will move and roam in the surroundings and spread the seeds unknowingly. While roaming, these kinds of animals and birds spread the seeds in the land and it will help in growing the new plants.
          # Human’s Need
          Animals and plants give us abundantly and they are satisfying our needs. Similar to other living things, we humans also take care of some animals for our domestic use. Those animals will be called domestic animals. We used to feed, give shelter, and taking care of those animals. These animals will give their products like milk, meat, eggs, etc. Moreover, some animals help us in transportation, agriculture, etc. Besides, we use the excreta of domestic animals. For example, cattle dung will be made into dung cakes. They are combustible and used as fuel. In addition, cattle dung are used as manure for agriculture and it is used for plastering the mud houses. We need plants, animals to fulfill our needs. Plants give us vegetables, fruits, flowers, seeds, and many products for our daily use. For example, from cotton wool plants, we will get the cotton to weave our clothes. Moreover, many plants have more medicinal values and their extraction is used as medicines. So, we do take care of the plants, domestic animals and we are giving protection for them too.
          # Seasons
          We have four seasons and they are summer, winter, spring, autumn, or fall. Every season we will have changes in the environment. For example, during the summer season, there will be sunny and we used to wear cotton clothes. During the winter season, there will be cold and we wear woolen or warm clothes to shield ourselves from the cold. It will give changes to other living things too. For example, the animals which have fur will become much thicker during the winter season. During the spring seasons, fresh buds will start to bloom and it is the season of new beginnings. During the autumn (fall) seasons, trees leave changing color and some trees will lose their leaves. Not only trees, change in seasons will affect all living things.
          `
      }
    },
    {
      id: 'classify-3',
      label: 'Carnivores Vs. Omnivores',
      type: 'group',
      data: {
        title: 'Classify the below animals based on their food habits.',
        types: [
          {
            name: 'Carnivores',
            text: 'Shark, Hyena, Polar Bear, Snake'
          },
          {
            name: 'Omnivores',
            text: 'Fox, Dog, Human, Bear'
          }
        ]
      }
    },
    {
      id: 'match-3',
      label: 'Match',
      type: 'match',
      data: {
        title: 'Match the related ones.',
        fontSize: '1rem',
        text: `Summer, Heatwaves
          Winter, Cold and frost
          Spring, a new beginning 
          Autumn, fall season
          Monsoon, Overflow of river`
      }
    },
    {
      id: 'mcq-3',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Mangoes are available in the ________ season',
            options: `Summer, Winter, Autumn, Spring`
          },
          {
            qText: '__________ is an arboreal animal.',
            options: `Primate, Alligator, Lion, Pig`
          },
          {
            qText: '_______ is a root vegetable.',
            options: `Garlic, Tomato, Brinjal, Cauliflower`
          },
          {
            qText: '_________ lives on land.',
            options: `Panda, Seals, Penguins, Walrus`
          },
          {
            qText: '__________ is a reptile',
            options: `Turtles
              Gila monster
              Alligator
              *All the above`
          }
        ]
      }
    },
    {
      id: 'fillup-3',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        text: `Cow dung is used for the *production of biogas*.
          Plants in *marshes* are called mangroves.
          *Sheep pellets* can be used as manure for plants.
          *Roots* of the plant grow under the soil.
          Silk is obtained from the cocoon of the larvae of *silkworm*.`,
        title: 'Fill in the blanks.'
      }
    },
    {
      id: 'fillup-options-3',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        text: `Cattle dung is used in *plastering (constructing)* the mud houses.
          Change in season will affect * living things (non-living things)*.
          Plants prepare their food by *photosynthesis (Absorption)*.
          We depend upon *Agriculture (Weaving)* for our food.
          The *Shearing (Ginning)* process involved in obtaining the wool from sheep.`,
        title: 'Fill in the blanks.'
      }
    },
    {
      id: 'true-false-3',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Monkey is an arboreal animal.
              Deer is an herbivore.
              Kangaroo is a wild animal.`
          },
          {
            name: 'False',
            text: `Frogs will be active during wintertime.
              During the autumn season, fresh buds will bloom, and the new beginning of life starts.`
          }
        ]
      }
    },
    {
      id: 'notes-4',
      label: 'Biotic Factors',
      type: 'passage',
      data: {
        title: '',
        text: `# Biotic Factors
          Biotic factors are the living organisms in our environment. For example; Trees and Plants, Animals, Birds, Human beings, etc.
          # Abiotic factors
Abiotic factors are the non-living organisms in our environment. For example; Temperature, Water, air, stone, mountain, etc.
# Difference between Biotic and Abiotic factors
Biotic factors are also called living things and abiotic factors are also called non-living things. Biotic factors can feel, breathe and grow. They need food for living and they will give birth to young ones. Abiotic factors do not grow and breathe. They cannot feel and food is not necessary for them. Besides, they do not give birth to young ones. Moreover, all abiotic and biotic factors are linked together in the environment by the flow of energy via food. Living things and non-living things interact with one another in the environment. Moreover, plants are not able to move from one place to another, but they will be able to grow and also their branches will develop well. Plants can make prepare their food by using abiotic factors like soil, water, air, sunlight, etc. Every biotic factor depends on other things for food in the environment.
# Balanced – Ecosystem
The food chain plays a more important role in every biotic/ living thing in the environment. Living things are dependent on both living things and non-living things for food, survival in this ecosystem. Based on consumption of food, living things/ biotic factors are categorized into three types. They are Producers, Consumers, and Decomposers. Our ecosystem supports living things such as plants, animals, human beings, and also micro-organisms to grow in the environment.
# Producers
Some types of living things can able to prepare their food by themselves and they are called producers. For example, Plants & trees are classified under producers. Plants will prepare the food by the process called photosynthesis. Plants are also called primary producers. Moreover, humans and animals depend upon plants for their food. Some types of plants do not prepare their food by themselves and they will depend upon other plants for food. These types of plants are called parasitic plants. For example, Cuscuta.
# Consumers
Some types of living things are not able to produce food on their own and it is dependent for food on plants and animals for its survival. They are called Consumers and they can be classified into three categories. They are Herbivores, Carnivores and Omnivores. When living things are dependent fully on plants for their food and they are called Herbivores. When living things eats only flesh animals for their food and they are called Carnivores. When living things are dependent fully on plants and animal's flesh (meat) for their food and they are called Omnivores.
# Decomposers
Microorganisms that feed on the decaying waste such as dead plants and animals for their survival and are called decomposers. Those micro-organisms support the environment by giving nutrients to the soil. So soil turns more fertile and this helps to grow the plants and trees well. For example; Bacteria, fungi, etc.`
      }
    },
    {
      id: 'classify-4',
      label: 'Living vs Non-living',
      type: 'group',
      data: {
        title: 'Classify the below things as plant-based or animal-based.',
        types: [
          {
            name: 'Plant based',
            text: 'Ketchup, Popcorn, Lettuce, French fries'
          },
          {
            name: 'Animal based',
            text: 'Milk, Cheese, Eggs, Ice cream'
          }
        ]
      }
    },
    {
      id: 'match-4',
      label: 'Match',
      type: 'match',
      data: {
        title: 'Match the related ones.',
        fontSize: '1rem',
        text: `Wood, Furniture
          Wind Energy, Electricity
          Leather, Bag
          Sheep, Wool
          Farmer, Food`
      }
    },
    {
      id: 'mcq-4',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: '_______ is classified as decomposers.',
            options: `Fungi, Lotus, Tomato, Lentils`
          },
          {
            qText: 'Humans are classified under ________. ',
            options: `Omnivores, Carnivores, Herbivores`
          },
          {
            qText: '_______ are also called as primary producers.',
            options: `Plants, Animals, Insects, Human beings`
          },
          {
            qText: 'Van Mahotsav means ____________.',
            options: `festival of forests, festival of animals, festival of human beings`
          },
          {
            qText:
              'Choose a correct food chain sequence from the following orders',
            options: `Plant – Deer- Lion
              Lion- Bacteria – Humans
              Humans – plants – Tiger
              Fox – Fungi - Humans`
          },
          {
            label: 'Drag and Drop',
            type: 'matchByDragDrop',
            id: 'drag-drop-4',
            data: {
              isPractice: false,
              title: 'Drag and drop the words at proper place.',
              styles: {
                fontSize: '1rem',
                dashWidth: 80
              },
              text: `Amoeba is a *unicellular* organism.
              *Ecology* is the science that deals with the relationship between biotic factors and their physical environment.
              Plants prepare their own food and the process is called *photosynthesis*.
              *Parasitic* plants are dependent on other plants for their food.
              Carnivores are *flesh* eating animals.`
            }
          },
          {
            id: 'fillup-4',
            label: 'Fill in the blanks',
            type: 'fillupOptions',
            data: {
              text: `*Decomposers (Producers)* get food from the decay of animals and plants.
              Trees give *Oxygen (Carbon-dioxide)* during day time.
              *Lentils (Insects)* grows in the fertile soil.
              *Cats (Hens)* gives birth to kittens. 
              *Tree (Sapling)*provides both shelter and food to other living things.`,
              title: 'Fill in the blanks.'
            }
          },
          {
            id: 'true-false-4',
            label: 'True or False',
            type: 'classifySentence',
            data: {
              title: 'True or False',
              types: [
                {
                  name: 'True',
                  text: `Fungi is a micro-organism.
                  The young plant is called a sapling.
                  Stones are an abiotic factor`
                },
                {
                  name: 'False',
                  text: `An elephant is an omnivore animal.
                  Soil is a consumer.`
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
