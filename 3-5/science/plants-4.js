export default {
  label: 'Plants Habitat',
  id: 'plants-4',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Habitat',
        text: `Plants grow almost everywhere on the Earth. They grow both in land and water. The plants adapt to their surroundings and hence have special characteristics based on their habitat. The natural home of a plant is called its habitat. Plants make suitable adjustment with their surroundings to meet their requirements. This is known as adaptation.
        # Terrestrial Plants
        The plants that grow on the land are called terrestrial plants. Landforms can be further divided into desert, plain, mountain and forest.
        # Desert Plants
        These plants grow in hot, dry and sandy places. Deserts get very little rainfall and experience high temperatures. Hence, water is scarce. 
        1. Leaves are changed to spines to reduce the loss of water.
        2. The stem is green and fleshy. They store water and produce food.
        3. These plants have a long root that goes deep into the soil.
        4. Eg: Catcus, Opuntia, Date Palm and Aloe vera
        # Plants on Mountain
        These plants grow in cold and freezing places.
        1. These trees are conical in shape. This shape allows snow to slide from the trees easily.
        2. Needle-like leaves help them to survive in cold conditions like snow.
        3. These trees do not shed leaves.
        4. They have cones instead of flowers. These cones protect the seeds during harsh winter. Eg: Pine tree, Redwood tree
        # Plants in Plains
        Plants in plains need to adapt to both dry conditions and extreme temperatures.
        1. They grow in warmer climates and usually shed their leaves in winter to protect themselves from cold.
        2. They have flat and broad leaves.
        3. They have thick and woody stems. Eg: Mango, Banyan, Teak.
        # Do you know?
        Banyan, Peepal and Tamarind trees live for more than a hundred years.
        # Plants in Coastal Areas
        1. They are tall and mostly straight.
        2. The leaves are called fronds.
        3. The fronds look like feathers meant for protection from wind.
        4. These plants are tolerant to saline (salt) water. E.g., Coconut tree, Casuarina`
      }
    },
    {
      label: 'Desert vs Plain',
      id: 'desert-plain',
      type: 'group',
      data: {
        types: [
          {
            name: 'Desert',
            text: 'Aloe Vera, Cactus, Date Palm'
          },
          {
            name: 'Plain',
            text: 'Mango, Banyan, Teak'
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
            text: `Plants in coastal areas are tolerant to saline water.
            Trees in cold places do not shed leaves in autumn.
            Mountains are much colder than plains.
            Banyan tree can live for more than 100 years.`
          },
          {
            name: 'False',
            text: `Teak is an example of a desert plant.
            A desert plant can easily survive in a mountain.
            The banana tree can live for more than 100 years.`
          }
        ]
      }
    },
    {
      label: 'Aquatic Plants - Notes',
      type: 'passage',
      id: 'aquatic-notes',
      data: {
        title: 'Aquatic Plants',
        text: `The plants that grow in water bodies like ponds, lakes and sea are called water plants or aquatic plants. They are classified into three types.
        # Free floating plants
        These are found on the surface of the water. They freely float with the help of a spongy body filled with air. They have poorly developed roots. Eg: Water hyacinth, Pistia.
        # Fixed rooted plants
        These plants have roots that are fixed in the bottom of the water bodies. These plants have air tubes in their stem to help them float. Their leaves are broad and coated with wax to make them waterproof. Eg: Water Lily, Lotus.
        # Submerged plants
        These plants are completely submerged in the water. Their stem is thin and leaves are very small. There is no opening on the leaf surface. They breathe through the stem. Eg: Vallisneria, Hydrilla.`
      }
    },
    {
      label: 'Terrestrial vs Aquatic',
      id: 'aquatic-group',
      type: 'group',
      data: {
        types: [
          {
            name: 'Terrestrial',
            text: ' Tulip, Rose, Papaya, Pineapple, Tulsi'
          },
          {
            name: 'Aquatic',
            text: 'Lotus, Water Lily,  Water Hyacinth, Pistia, Vallisneria, Hydrilla'
          }
        ]
      }
    },
    {
      label: 'Plants - Choose the best Answer',
      id: 'habitat-mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              'The plants that grow in water bodies like ponds and lakes are called ______ plants.',
            options: 'aquatic, terrestrial, coastal'
          },
          {
            qText:
              'Plants make suitable adjustments according to their surroundings to meet their requirements. It is known as ________.',
            options: 'adaptation, habitat, photosynthesis'
          },
          {
            qText: 'Trees like teak, banyan and mango usually grow in ______.',
            options: 'plains, deserts, coastal areas, mountains'
          },
          {
            qText: 'Which habitat has varying climate?',
            options: 'Plain, Mountain, Desert, Coastal'
          },
          {
            qText: 'Which habitat gets strong winds?',
            options: 'Coastal, Mountain, Plain, Desert'
          },
          {
            qText: 'Which aquatic plant breathes through stem?',
            options:
              'Submerged plants, Free-floating plants, fixed rooted plants'
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
        text: `Mountain plants have *cones (cylinders)* instead of flowers. Their needle-like leaves help them to survive in *cold (hot, rainy)* conditions.
        Banyan trees can live for more than *100 (1000)* years. 
        The trees in *plains (deserts, mountains)* shed their leaves once a year.
        Potato is a food stored in the *stem (root)* of the plant.
        The trees in cold regions are *conical (spherical, cylindrical)* in shape. This shape allows snow to *slide(stay) *.
        The free-floating plants have a *spongy (rigid, rough)* body filled with *air (water, minerals)*.
        In fixed rooted plants, the leaves are *broad (narrow)* and coated with *wax (gum, paste)* to make them waterproof.`
      }
    },
    {
      id: 'drag-drop',
      label: 'Fill up by drag and drop',
      type: 'matchByDragDrop',
      data: [
        `Plants *adapt* to their surroundings and hence have special characteristics based on their *habitat*.
        Deserts get very little *rainfall* and experience high *temperatures*. Hence, there is *scarcity* of water.`,

        `The leaves of coastal areas are called *frond* and they protect from *wind*. These plants can grow in *saline* conditions.
        Usually the trees in plains have *broad* leaves and *thick* stem.`,

        `*Pistia* is an example of free-floating plant. They have poorly developed *roots*.
        *Lotus* is an example of fixed rooted plant. They have a long *stem*.
        *Hydrilla* is an example of a submerged plant. They *breathe* through the stem.`
      ]
    },
    {
      id: 'match-habitat',
      label: 'Match Plants and Habitat',
      type: 'match',
      commonData: {
        title: 'Match plants with their habitat.'
      },
      data: [
        `Desert, Cactus
        Mountain, Pine
        Plain, Teak
        Coastal, Coconut
        Aquatic, Lotus`,

        ` Plain, Neem
        Coastal, Casuarina
        Aquatic, Pistia
        Desert, Date Palm
        Mountain, Redwood Tree`,

        `Submerged in water, Hydrilla
        Fixed rooted, Lotus
        Floating plant, Water hyacinth
        Needle-like leaves, Pine
        Desert, Aloe vera`
      ]
    },
    {
      label: 'Leaf - Notes',
      type: 'passage',
      id: 'leaf-parts-notes',
      data: {
        title: 'Parts of a Leaf',
        text: `Leaves are of different shapes and sizes and have different parts.
        The broad flat part of the leaf is called a blade. The tip of the leaf is called the apex. The midrib runs along the center of the leaf. Veins branch out from the midrib. They are the framework of hollow tubes that carry water and minerals. Petiole joins the leaf to the main stem.
        Stomata are tiny openings or pores mostly found at the base of the leaves. Air enters and leaves the plant through these openings. Stomata helps the plants to breathe. Stomata are used to exchange gases.`
      }
    },
    {
      id: 'parts-of-leaf',
      label: 'Parts of a Leaf',
      type: 'dragAndDrop',
      data: {
        img: 'parts-of-leaf.jpg',
        title: 'Parts of a Leaf',
        width: 350,
        height: 333,
        wordWidth: 60,
        fontSize: '1.2rem',
        words: [
          {
            word: 'apex',
            x: 270,
            y: 20
          },
          {
            word: 'veins',
            x: 270,
            y: 70
          },
          {
            word: 'midrib',
            x: 270,
            y: 120
          },
          {
            word: 'blade',
            x: 270,
            y: 170
          },
          {
            word: 'petiole',
            x: 100,
            y: 285
          }
        ]
      }
    },
    {
      id: 'drag-drop-leaf',
      label: 'Fill up by drag and drop',
      type: 'matchByDragDrop',
      data: {
        text: `The broad flat part of the leaf is called *blade*. The tip of the leaf is called *apex*. The *midrib* runs along the center of the leaf. From the midrib we can see lot of branches called *veins*.They are the framework of hollow tubes that carry water and *minerals*. The leaf is joint to the main stem through *petiole*.`
      }
    },
    {
      label: 'Exotic Plants - Notes',
      type: 'passage',
      id: 'exotic-plants-notes',
      data: {
        title: 'Exotic Plants',
        text: `The plants that are growing outside their native area either purposefully or accidentally are called exotic plants.
        Most of these plants are brought to new areas for decoration purposes.
        Eg: Crotons, Fern, Cycas, Travelers palm, Boat lily, Aloevera`
      }
    },
    {
      label: 'Food Factory - Notes',
      type: 'passage',
      id: 'food-factory-notes',
      data: {
        title: 'Food Factory',
        text: `Plants produce their food with the help of chlorophyll, a pigment present in leaves. Humans and animals depend on plants for their food either directly or indirectly.
        Most of the plants can make their food through a process called photosynthesis. 'Photo' means 'light'. 'synthesis' means 'to make'.
        Photosynthesis is a process by which plants make their food using chlorophyll, water, and carbon dioxide in the presence of sunlight.
        Water is absorbed by the roots and is passed to the leaves through the tubes. Carbon dioxide in the air passes through small pores in the leaves.
        A green pigment in the leaves helps them to trap sunlight. This pigment is called chlorophyll. Most leaves are green in color because of this green pigment.
        Through photosynthesis, plants produce food and release oxygen into the air.
        As plants prepare food for themselves and also for other living things, they are called primary producers.
        Without primary producers, living things that are not capable of producing their food will not be able to live.
        Plants like cactus do not have leaves. Their food is made in their green stems.`
      }
    },
    {
      id: 'leaf-fillup',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Plants are called *primary (secondary)* producers.
        'Photo' means *light (sound, water)*.
        Plants like cactus do not have *leaf (stem, root)*.
        *Petiole (Apex)* joins the leaf to the main stem.
        In the cactus plant, food is made by green *stem (leaf)*.
        *Stomata (Petiole)* are tiny openings or pores mostly found at the *base (top, corner)* of the leaves.`
      }
    },
    {
      label: 'Multiple Choice Questions',
      id: 'mcq-leaf',
      type: 'mcq',
      data: {
        questions: [
          {
            qText: 'Leaves are green in color due to _______.',
            options: 'chlorophyll, photosynthesis, sunlight'
          },
          {
            qText: 'What is one of the effects of photosynthesis?',
            options: `Carbon dioxide is converted to oxygen.
            Oxygen is converted to carbon dioxide.
            Oxygen is converted to nitrogen.`
          },
          {
            qText:
              'What will be the effect if there are no plants on the Earth?',
            options: `Animal life doesn't exist.
            Animal life will be very difficult.
           Only meat-eating animals will live.`
          },
          {
            qText:
              'Which of the following is not an ingredient in photosynthesis?',
            options: `nitrogen, water, carbon dioxide, sunlight`
          },
          {
            qText: 'When does photosynthesis happen?',
            options: `Only during day time. 
            Both day and night.
            Only during the night.
            Only in the evening.`
          }
        ]
      }
    },
    {
      id: 'match-leaf',
      label: 'Match the Following',
      type: 'match',
      data: {
        fontSize: '1rem',
        text: `green pigment, chlorophyll
        plants, primary producers
        food preparation, photosynthesis
        stomata, plants breathe
        tip of leaf, apex`
      }
    },
    {
      label: 'Non-Green Plants - Notes',
      type: 'passage',
      id: 'non-green-notes',
      data: {
        title: 'Non-Green Plants',
        text: `Plant that lacks chlorophyll pigment and are not green are called non-green plants. They cannot prepare their food. These plants depend on other organisms for their food and living places.
         Eg: mushroom, bread molds, bracket fungi`
      }
    }
  ]
};
