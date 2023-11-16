export default {
  label: 'Reproduction in Plants',
  id: 'plants-5',
  lockAfter: 2,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Reproduction in Plants',
        text: `Reproduction is the process by which new individuals of the same species are produced. Both plants and animals reproduce. Two kinds of reproduction take place in plants. They are sexual reproduction and asexual reproduction. In asexual reproduction, new plants are produced from roots, leaves, stems and buds. In sexual reproduction, new plants emerge from seeds.
# Flower 
The flower is the reproductive part of a plant. Flowers have four important parts. They are:
# Sepal
It is the outer part of the flower. Usually, it is small and green in color. It protects the bud in the early stage.
# Petal
It is often colorful and it attracts insects.
# Androecium
It is the male reproductive part of the flower. It is composed of stamens. Each stamen consists of a stalk called filament and a small bag-like structure called anther at the tip. The pollen grains are produced in the anther within the pollen sacs.
# Gynoecium
It is a female part of the flower. It has three parts. They are ovary, style and stigma. The ovary contains the ovules. 
The flowers which contain either androecium or gynoecium are called unisexual flowers. Eg: corn, papaya, cucumber. The flowers which contain both androecium and gynoecium are called bisexual flowers. Eg: mustard, rose.
To attract pollinators (insects) flowers are bright in color and produce smell. Plants that are pollinated by honey bees and butterflies have sweet scents and bigger colorful petals. Eg: sunflower, pumpkin. Pigments present in petals give them different colors. 
Plants that are pollinated by moths and bats release their fragrance mostly at night and have colorless petals. Eg: mango, banana, guava, jasmine etc.
# Pollination
The transfer of pollen grains from the anther to the stigma of a flower is called pollination. Pollination is the first important event in the development of fruit and seed. Pollination is followed by fertilization. Two types of pollination take place in the flowering plants. They are self-pollination and cross-pollination.
The transfer of pollen grains from the anther of a flower to the stigma of the same flower is called self-pollination. The transfer of pollen grains of a flower to the stigma of another flower of a different plant of the same species is called cross-pollination.
In self-pollination, seeds produce weak plants and new varieties of plants cannot be produced. In cross-pollination, seeds produce good plants and new varieties of plants can be produced. Pollination takes place through different agents.
# Pollination by Wind
The flowers pollinated by wind are mostly small in size and do not have any attractive color, smell or nectar. The pollen grains are non-sticky, dry, light and powdery. Hence, they are easily carried by the wind. Eg: grass, maize, pine.
# Pollination by Water
The flowers of water plants are not colorful and they have no nectar. Pollen grains of these plants have mucilaginous covering to protect them from getting wet. They float in water and reach the other plant. Eg: vallisneria, hydrilla
# Pollination by Insects
This is the most common type of pollination in plants like sunflower, lady finger, brinjal and pumpkin. Some flowers are large and they have a sweet smell. Some of these flowers produce nectar. They attract insects like butterflies and honey bees.
# Fertilization
The process of fusion of male (pollen grains) and female (stigma) gametes is called fertilization. The cell that results after fusion of the gametes is called a zygote. The zygote develops into an embryo.
# Fruits and Seed Formation
After fertilization, the ovary grows into a fruit and other parts of the flower fall off. The seeds develop from the ovules. The seed contains an embryo enclosed in a protective seed coat.`
      }
    },
    {
      id: 'drag-drop',
      label: 'Fill up by drag and drop',
      type: 'matchByDragDrop',
      lockAfter: 2,
      data: [
        `New plants coming from seed is *sexual* reproduction. New plants coming from roots are *asexual* reproduction. 
        *Sepal* is usually green in color.
        *Petal* is often colorful and it attracts insects.
        *Androecium* is the male reproductive part of the flower.
        *Gynoecium* is the female reproductive part of the flower.`,

        `*Papaya* has unisexual flower.
        *Rose* has a bisexual flower.
        *Pigment* present in petals gives them different colors.
        *Pollination* is the transfer of pollen grains from the anther to the stigma.
        In self pollination, seeds produce *weak* plants and in cross-pollination, seeds produce *good* plants.`,

        `The process of *fusion* of male and female gametes is called fertilization. The cell that results after fusion of the *gametes* is called a *zygote*.
        After fertilization, the *ovary* grows into a fruit and other parts of the flower fall off. The seeds develop from the *ovules*. The seed contains an *embryo* enclosed in a protective seed coat.`
      ]
    },
    {
      id: 'flower',
      label: 'Parts of a Flower',
      type: 'dragAndDrop',
      data: {
        img: 'flower.jpg',
        title: 'Parts of a Flower',
        width: 380,
        height: 336,
        wordWidth: 50,
        fontSize: '1.2rem',
        words: [
          {
            word: 'petal',
            x: 30,
            y: 100
          },
          {
            word: 'stigma',
            x: 50,
            y: 40
          },
          {
            word: 'style',
            x: 30,
            y: 170
          },
          {
            word: 'sepal',
            x: 40,
            y: 250
          },
          {
            word: 'ovary',
            x: 100,
            y: 300
          },
          {
            word: 'receptacle',
            x: 280,
            y: 290
          },
          {
            word: 'anther',
            x: 280,
            y: 20
          },
          {
            word: 'filament',
            x: 320,
            y: 200
          }
        ]
      }
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `Insects are known as pollinators.
            Pollination can happen both at day and night.
            The process of fusion of male and female gametes is called fertilization.`
          },
          {
            name: 'False',
            text: `Not every living thing reproduces.
            The gynoecium is the male part of the flower.`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      id: 'flowers-mcq',
      type: 'mcq',
      data: {
        questions: [
          {
            qText: 'Pollination cannot happen by _______.',
            options: 'sunlight, wind, water, insects'
          },
          {
            qText:
              'Which of the following is usually not pollinated by insects?',
            options: 'grass, brinjal, sunflower, lady finger'
          },
          {
            qText: 'Which of the following has a protective coat?',
            options: 'Seed, Sepal, Petal'
          },
          {
            qText: 'After fertilization, the ovary grows into a ____.',
            options: 'fruit, leaf, seed'
          },
          {
            qText: 'Which of the following is usually green in color?',
            options: 'Sepal, Filament, Pollen grains, Petal'
          }
        ]
      }
    },
    {
      label: 'Life Cycle of a Flowering Plant',
      type: 'passage',
      id: 'lifecycle-notes',
      data: {
        title: 'Life Cycle of a Flowering Plant',
        text: `The major stages of the flowering plants are the germination of seed, growth, flowering, re-production (pollination), seed formation and seed spreading. Every seed has a minute plant called the embryo. Under favorable conditions like sunlight, water and soil, the embryo is grown into a new plant. This new plant bears fruits with seeds and multiplies. This cycle continues forming the life cycle of flowering plants.
        # Dispersal of Seeds
        Spreading of seeds from one place to another with the help of agents like air, water, animals and birds is known as dispersal of seeds. A single plant produces a large number of seeds. If all these seeds fall directly below the parent plant, the seedlings would have to compete for space, water, oxygen, minerals and sunlight. When the seedlings are grouped in one place, they can easily be destroyed by grazing animals. But, by nature, the seeds and fruits of plants are distributed far and wide through various agencies.
        # Dispersal by Wind
        The seeds which are smaller, lighter and tiny float in the air over a long distance. Some of them proceed with hairs and membranous wing-like structures and so they are carried away easily. Eg: cotton seed, drumstick
        # Dispersal by Water
        Fruits that are dispersed by water have outer coats modified to enable them to float. The mesocarp (middle layer) of coconut is fibrous and is easily carried away by water. They reach different places and grow into new plants. Eg: lotus, coconut
        # Dispersal by Animals
        Some fruits have hooks, spines, bristles, stiff hair etc, on their outer coat. These fruits stick on the furry coats or skins of some animals and are carried from one place to another.
        # Dispersal by Birds
        While eating fruits like tomato and guava, birds eat seeds along with the edible portion and they are passed out in the excreta later. These types of seeds are protected from the digestive juices by their seed coat.
        # Self Dispersal Method 
        Some fruits disperse their seeds in the wind through an explosive mechanism and spread them. Eg: lady finger, balsam
        Note: Man is also responsible for the dispersal of many fruits and seeds. Useful plants like cinchona, rubber and eucalyptus have been successfully introduced by man, to the new surroundings far away from their original habitat.
        # Germination of Seeds
        The seed is a fertilized ovule. It consists of embryos, and food materials which are protected by the seed coat. During favorable conditions, the seed germinates and gives rise to a new seedling. During the early stages of germination, the seedlings get the food required for their growth from the cotyledons. After the food stored in the cotyledons has been used up, the seedling gets its food from the soil. The seedling absorbs water and nutrients from the soil with the help of its roots. It develops leaves and grows into a plant.`
      }
    },
    {
      id: 'life-cycle-drag-drop',
      label: 'Fill up by drag and drop',
      type: 'matchByDragDrop',
      data: [
        `Every seed has a minute plant called the *embryo*. Under *favorable* conditions like sunlight, water and *soil*, the embryo is grown into a new plant. This new plant bears fruits with seeds and *multiplies*. This cycle continues forming the life cycle of *flowering* plants.`,
        `The seed is a fertilized *ovule*. It consists of *embryo*, food materials which are protected by the seed coat. During *favorable* conditions, the seed *germinates* and gives rise to a new *seedling*. During the early stages of germination, the seedlings get the food required for their growth from the *cotyledons*.`
      ]
    },
    {
      label: 'True or False',
      id: 'life-cycle-true-false',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `Small seeds are usually dispersed by wind.
            The fibrous middle layer of coconut allows it to float in water.
            Man is also responsible for the dispersal of many fruits and seeds.`
          },
          {
            name: 'False',
            text: `It is safe for the young plants to grow very near to the parent plant.
            When birds and animals eat the fruits, the seeds will be easily digested.`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      id: 'reproduction-mcq',
      type: 'mcq',
      data: {
        questions: [
          {
            qText:
              'During germination, initially, the seed gets its food from _____.',
            options: 'cotyledons, soil, water'
          },
          {
            qText: 'Which plants have a life cycle?',
            options: `All plants
            Flowering plants
            Non-flowering plants`
          },
          {
            qText: 'The life cycle of a plant starts with a ______.',
            options: 'seed, flower, fruit, bud'
          },
          {
            qText: 'Drumstick seeds are usually dispersed through ____.',
            options: 'wind, water, animals, birds'
          },
          {
            qText: 'Which of the following is incorrect?',
            options: `Bees and insects are attracted by the smell of lotus flower.
            The seed coat protects the seed for a long time.
            Useful plants are dispersed by human beings.
            The seeds of some plants stick to the skin of some animals.`
          }
        ]
      }
    },
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `The seedling absorbs water and nutrients from the soil with the help of its *roots (seeds, embryo)*.
        Every seed has a minute plant called the *embryo (seedling, cotyledons)*.
        Some fruits disperse their seeds in the wind through an *explosive (firework)* mechanism and spread them.
        During *favorable (unfavorable)* conditions, the seed germinates and gives rise to a new seedling.
        Man is *also (not)* responsible for the dispersal of many fruits and seeds.`
      }
    },
    {
      id: 'match',
      label: 'Match - Dispersal Mode',
      type: 'match',
      data: {
        text: `Wind, Cotton Seed
        Water, Coconut
        Birds, Guava
        Self dispersal, Balsam
        Man, Rubber`,
        title: 'Match the seeds with the common dispersal mode.'
      }
    },
    {
      label: 'Agriculture',
      type: 'passage',
      id: 'agri-notes',
      data: {
        title: 'Agriculture',
        text: `Man started practicing agriculture thousands of years back. This was one of the developments of civilization. In the modern days agriculture is practiced on a large scale due to the advancement of science and technology. The application of modern technologies like plant breeding and the usage of chemicals like fertilizers and pesticides have increased the yield. Major agricultural products are cereals, vegetables, fruits and oil seeds. They are cultivated not only for our basic needs but also for commercial purposes.
        # Soil
        Soil is one of the most important natural resources. It is essential for agriculture. It supports the growth of plants by holding the roots and supplying water and nutrients. It is the home for many organisms. Soil is formed by the breaking of rocks by the action of wind, water and climate. The mixture of rock particles and humus is called the soil. The soil is classified based on the proportion of various sizes.
        # Sandy soil
        It contains a greater proportion of big particles. They cannot fit closely together. Water can drain quickly through the spaces between the sand particles. So, sandy soils tend to be light, well-aerated and dry.
        # Clay soil
        It contains a greater proportion of fine particles, packed tightly together, leaving little space for air. It can retain a lot of water in the tiny gaps between the particles. Plants like paddy grow well in this soil.
        # Loamy soil
        It contains large and fine particles in almost the same proportion. The best topsoil for growing plants is loam. It is a mixture of sand, clay and another type of soil particle known as silt. Silt occurs as a deposit in river beds. It has the right water-holding capacity for the growth of plants. Clay and loamy soil are suitable for growing wheat, gram and paddy.
        # Friends of Farmer
        Insects are generally considered to be harmful. But, many of them are helpful to us in many ways. Earthworms, honeybees and dragonflies are useful to plants and farmers.
        # Earthworm
        Earthworms help to increase the amount of air and water that gets into the soil. They break down organic matter like leaves and grass into smaller particles that plants can use. When they eat them, they leave behind castings that are a type of fertilizer. The process of decomposing bio-degradable wastes by earthworms is known as vermicompost.
        # Honey bee
        Honey bees are helpful for cross-pollination in flowers. They are attracted by the color and smell of the flowers. They convert the pollen which is the only natural protein source for them into honey. Honey is used as food and also for medicinal purposes. Bees also produce wax, which is used for making candles.
        # Dragon fly
        It destroys the egg and larva of harmful insects and mosquitoes and prevents the spreading of diseases. It is also helpful in cross-fertilization.`
      }
    },
    {
      label: 'Multiple Choice Questions',
      id: 'soil-mcq',
      type: 'mcq',
      data: {
        questions: [
          {
            qText: 'Which of the following is not a soil type?',
            options: 'rocky soil, sandy soil, clay soil, loamy soil'
          },
          {
            qText: 'Which is not a friend of farmers?',
            options: 'Rat, Dragon fly, Earthworm, Honey bee'
          },
          {
            qText: 'Which of the following helps in vermicompost?',
            options: 'Earthworm, Honey bee, Dragonfly'
          },
          {
            qText: 'Dried leaves decompose into _____.',
            options: 'humus, vermicompost, slit, loamy soil'
          },
          {
            qText: 'Which of the following is not a chemical?',
            options: 'vermicompost, fertilizer, pesticide'
          }
        ]
      }
    },
    {
      id: 'agri-drag-drop',
      label: 'Fill up by drag and drop',
      type: 'matchByDragDrop',
      data: {
        text: `Earthworm, honeybee and dragonfly are useful to plants and *farmers*.
        *Earthworms* help to increase the amount of air and water that gets into the soil. They break down *organic* matters like leaves and grass into smaller *particles* that plants can use. This process of *decomposing* bio-degradable wastes is known as *vermicompost*.`
      }
    },
    {
      id: 'agri-match',
      label: 'Match the following',
      type: 'match',
      data: [
        `well aerated, sandy soil
loamy soil, mixture
clay soil, tightly packed
earthworm, vermicompost
honey bee, wax`,

        `river, sandy soil
paddy field, clay soil
silt deposit, loamy soil
dried leaves, humus
honey bee, pollination`
      ]
    }
  ]
};
