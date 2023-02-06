export default {
  id: 'environment-3',
  label: 'Environment',
  lockAfter: 3,
  list: [
    {
      id: 'notes',
      label: 'Environmental Factors',
      type: 'passage',
      data: {
        title: 'Environmental Factors',
        text: `Everything present around us is part of our environment. We are surrounded by living things like plants and animals and non-living things like water bodies, sunlight, air and land.
        The living and non-living things in our environment interact with one another. Our environment has two main factors: biotic and abiotic factors
        # Biotic Factors
        Living organisms in our environment are called biotic factors. Eg: lion, plantain, dove, human beings etc.
        # Abiotic Factors
        Non-living things in our environment are called abiotic factors. Eg: air, soil, water, sunlight, temperature etc.
        All biotic factors depend upon abiotic factors for their living. Biotic and abiotic factors are linked to each other by the flow of energy through food. Plants are the most important among all the living organisms. Because they only can make food from abiotic factors like air, soil, water and sunlight.
        # Environmentalist
        A person who protects the environment. As an environmentalist, you can volunteer to protect plants and animals.`
      }
    },
    {
      id: 'true-false-2',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `Biotic factors cannot live without abiotic factors.
            Animals cannot live without plants.`
          },
          {
            name: 'False',
            text: `Abiotic factors cannot live without biotic factors.
            Plants cannot live without animals.
            Environmentalist is a person who creates the environment.`
          }
        ]
      }
    },
    {
      id: 'classify',
      label: 'Nature vs Man-made',
      type: 'group',
      commonData: {
        title: 'Classify the below as nature or manmade',
        types: ['Nature', 'Man-made']
      },
      data: [
        [
          'river, coconut tree, jasmine flower, hill, cloud',
          'dam, building, silver vessel, cell phone, temple, cake'
        ],
        [
          'air, sun, water, sunflower, crocodile',
          'ship, pencil, book, doll, football, aeroplane'
        ]
      ]
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        text: `All *biotic* factors depend upon *abiotic* factors for their living. Only plants can make food from abiotic factors like air, soil, water and *sunlight*.
        Biotic and abiotic factors are *linked* to each other by the flow of *energy* through *food*.`
      }
    },
    {
      id: 'ecosystem-notes',
      label: 'Balanced Ecosystem',
      type: 'passage',
      data: {
        title: 'Balanced Ecosystem',
        text: `Imagine an environment where there are only plants, deer and lions.
        1. What will happen to the deer if we remove all the lions?
        2. What will happen to the plants if there are no lions to eat the deer?
        3. If all the plants are eaten, what will happen to the deer?
        It is important for the food chain to exist in any ecosystem to make sure that the energy flows between the biotic and abiotic factors. A balanced ecosystem supports animals, plants and micro organisms to grow in their environment. An ecosystem is balanced, when the biotic and abiotic factors are able to cycle the energy and food as per their need. The biotic factors in an ecosystem includes producers, consumers and decomposers.
        # Producers
        The living things that can prepare their own food are called producers. Green plants are the producers. They make their own food by the process of photosynthesis. Hence, they are called primary producers. Humans and animals depend on plants for their food.
        A few plants do not produce their food and they depend on other plants. They are called parasitic plants. Eg: cuscuta
        # Consumers
        The living things that eat the food prepared by the producers are called consumers. Most of the living things depend directly or indirectly on producers for their food. Consumers can be divided into three types based on their food as herbivores (plant eating animal), carnivores (flesh eating animal), omnivores (both plant and flesh eating animal).
        # Decomposers
        Organisms that feed on the wastes, dead plants and animals are called decomposers. They return the nutrients to the soil. Eg: bacteria, fungi. Mushroom is a type of fungus.`
      }
    },
    {
      id: 'drag-drop-2',
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      data: [
        `The living things that can prepare their own food are called *producers*. Animals are usually called *consumers*. Plant eating animals are called *primary* consumers. Meat eating animals are called *seconary* consumers. Organisms that consume dead plant and animals are called *decomposers*.`,

        `*Parasitic* plants are dependent on other plants for their food.
*Energy* flows between the biotic and abiotic factors.
*Balanced* ecosystem is important for the life cycle of all living things.
*Plants* alone can prepare their own food.
*Sunlight*, air, water are abiotic factors.`
      ]
    },
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        text: `Sparrows grow by eating *insects (stone)* and *food grains (paper)*.
        Plants and animals are *living things (non-living things)*.
        Plants utilize *sunlight (moonlight)* to prepare their food.
        Birds build their nest using *twigs (bricks) *.
        Papers, rock and bag are *non-living (living)* things.`
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
            text: `Dead animals will decay in the soil and turn the soil fertile.
Living things and non-living things depend upon each other in the environment.
Plants cannot move from one place to another place by their own.`
          },
          {
            name: 'False',
            text: `Train can move from one place to another. So, train is a living thing.
Wooden chairs and tables are made from the trees. So, they are living things.`
          }
        ]
      }
    },
    {
      id: 'mcq-4',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        questions: [
          {
            qText: '_______ are classified as decomposers.',
            options: `Fungi, Lotus, Tomato, Lentils`
          },
          {
            qText: 'Human beings are  ________. ',
            options: `omnivores, carnivores, herbivores`
          },
          {
            qText: '_______ are known as producers.',
            options: `Plants, Animals, Insects, Human beings`
          },
          {
            qText: 'Choose a correct food chain sequence',
            options: `Plant ---> Deer ---> Lion
Lion ---> Bacteria ---> Human
Human ---> plant ---> Tiger
Fox ---> Fungi ---> Human`
          },
          {
            qText: 'Mushroom is a type of ______.',
            options: `fungus, bacteria, micro organism`
          },
          {
            qText: 'Mushroom is a ______.',
            options: `decomposer, producer, consumer`
          }
        ]
      }
    },
    {
      id: 'classify-4',
      label: 'Plant vs Animal Based Food ',
      type: 'group',
      data: {
        title: 'Classify the below food items as plant based or animal based.',
        types: [
          {
            name: 'Plant Based',
            text: 'Ketchup, Popcorn, Lettuce, French fries'
          },
          {
            name: 'Animal Based',
            text: 'Milk, Cheese, Eggs, Ice cream'
          }
        ]
      }
    },
    {
      id: 'match-4',
      label: 'Match the Following',
      type: 'match',
      data: [
        `Stone, Abiotic factor
Bacteria, Decomposer
Plants, Producers
Buffalo, Consumer
Sapling, Young plant`,
        `Wood, Furniture
Wind Energy, Electricity
Leather, Bag
Sheep, Wool
Farmer, Food`
      ]
    }
  ]
};
