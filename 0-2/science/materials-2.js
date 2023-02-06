export default {
  id: 'materials-2',
  label: 'Materials',
  lockAfter: 2,
  list: [
    {
      label: 'Choose the best Answer',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        optionImages: true,
        questions: [
          {
            qText: ' Which of the following is made of wood?',
            options: 'door, dustbin, backpack, spoon'
          },
          {
            qText: 'Which of the following is made of metal?',
            options: 'tap, shirt, ruler, chair'
          },
          {
            qText: 'Which of the following is not a stone?',
            options: 'axe, pebbles, stone, stone-grinder'
          },
          {
            qText: 'Which of the following is made from clay?',
            options: 'pot, stone-grinder, wheel, ladder'
          },
          {
            qText: 'Which of the following is not made from clay?',
            options: 'box, rooftile, clay-lamp, brick'
          }
        ]
      }
    },
    {
      label: 'Wood vs Clay',
      type: 'group',
      id: 'wood-clay',
      data: {
        title: 'Drag and drop the images in the right boxes.',
        imageType: 'custom',
        types: [
          {
            name: 'Wood',
            text: `pencil, window, chair, cart, boat`
          },
          {
            name: 'Clay',
            text: `brick, clay-lamp, clay-stove, rooftile, pot`
          }
        ]
      }
    },
    {
      label: 'Metal vs Stone',
      type: 'group',
      id: 'metal-stone',
      data: {
        title: 'Drag and drop the images in the right boxes.',
        imageType: 'custom',
        types: [
          {
            name: 'Metal',
            text: `spoon, stove, tap, car, pan`
          },
          {
            name: 'Stone',
            text: `stone, sculpture, stone-grinder, pebbles`
          }
        ]
      }
    },
    {
      label: 'Plastic vs Rubber',
      type: 'group',
      id: 'plastic-rubber',
      data: {
        title: 'Drag and drop the images in the right boxes.',
        imageType: 'custom',
        types: [
          {
            name: 'Plastic',
            text: `toothbrush, whistle, plate, bucket, sharpener, dustbin`
          },
          {
            name: 'Rubber',
            text: `eraser, balloon, gloves, boots`
          }
        ]
      }
    },
    {
      label: 'Choose the best Answer',
      id: 'mcq-2',
      type: 'mcq',
      data: [
        {
          title: 'Multiple Choice Questions',
          questions: [
            {
              qText: 'Usually coins are made of ______.',
              qImg: 'coin',
              options: 'metal, rubber, stone, plastic, wood'
            },
            {
              qText: 'Usually balloons are made of ______.',
              qImg: 'balloon',
              options: 'rubber, metal, stone, plastic, wood'
            },
            {
              qText: 'The brick used to build houses is made of _____.',
              qImg: 'brick',
              options: 'clay, stone, wood, metal'
            },
            {
              qText: 'The major parts of a TV remote is made of _____.',
              qImg: 'remote',
              options: 'plastic, wood, cotton, metal'
            },
            {
              qText: 'Axe is made of _____.',
              qImg: 'axe',
              options: 'wood and metal, wood and clay, wood, plastic'
            }
          ]
        },
        {
          title: 'Multiple Choice Questions',
          questions: [
            {
              qText: 'The above wheel is made of ______.',
              qImg: 'wheel',
              options: 'wood, metal, rubber, stone, plastic'
            },
            {
              qText: 'The above tap is made of ______.',
              qImg: 'tap',
              options: 'metal, rubber, stone, plastic, wood'
            },
            {
              qText: 'In olden days, people used a _____ grinder.',
              qImg: 'stone-grinder',
              options: 'stone, metal, wood, clay'
            },
            {
              qText: 'The above dustbin is made of _____.',
              qImg: 'dustbin',
              options: 'plastic, wood, cotton, metal'
            },
            {
              qText: 'Boat is usually made of _____.',
              qImg: 'boat',
              options: 'wood, plastic, metal, clay'
            }
          ]
        }
      ]
    },
    {
      label: 'Materials - Reading',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Materials',
        text: `We can see lot of materials around us. They can be made of wood, plastic, metal, rubber etc.
        By looking at it, and by touching it, we can easily guess the material.
        # Wood
        Wood is a material we get from trees. We make many things like chair, toy, pencil, ladder, bat, matchstick, door, window, bookshelf. 
        # Clay
        Clay is a type of soil. Clay is a natural material. It is sticky and has the ability to absorb water. When mixed with water, it becomes soft. It hardens as it dries; so, pots, bricks and other things can be made from it. A potter uses his tool to make clay pots.
        # Glass
        Glass is used to make windows, bottles, mirrors.`
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        text: `*Clay* is a type of soil and it is a *natural* material.
        *Glass* is used to make bottles.
        *Wood* is got from trees. It is used in making *pencil*.
        Clay *absorbs* water, and become *soft*. It *hardens* when it is heated.`
      }
    },
    {
      label: 'Fibre - Notes',
      type: 'passage',
      id: 'fibre-notes',
      data: {
        title: 'Fibre',
        text: `Fibre is a material obtained from both plants and animals. Cotton and jute are the fibres got from plants. Wool and silk are fibres got from animals. Fibre from the coconut tree is called coir. Many things are made from it.
        The jute fibre is long, shiny and strong. Silk is the strongest natural fibre. We make many things like bags, mats and sarees from these fibres. Wool keeps us warm; so sweaters, caps and socks are knitted using it. Leather is flexible; so belts, watch straps and bags are made from it.`
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        text: `Rubber is made from the *sap* of the rubber tree.
        Fibre from the coconut tree  is called *coir*.
        Silk is the *strongest* natural fibre.
        Wool keeps us *warm*.
        Leather is *flexible*.`
      }
    },
    {
      label: 'Rubber - Notes',
      type: 'passage',
      id: 'rubber-notes',
      data: {
        title: 'Rubber',
        text: `Rubber is made from the sap (a milky substance) of the rubber tree. Rubber is elastic; so rubber bands are made from it. It is also waterproof; so hand gloves and boots are made from it.
        It is also used in making ball, tyre, eraser, slipper.
        # Elastic
        It means, the material comes back to its original shape after being stretched.
        # Waterproof
        It means, it does not allow water to enter inside and it doesn't get wet or absorbs water.`
      }
    },
    {
      label: 'Metals - Notes',
      type: 'passage',
      id: 'metals-notes',
      data: {
        title: 'Metals',
        text: `Metals are materials got from metal ores that lies in the ground. eg: iron, copper, gold, silver.
        Metals are strong and hard. It is used in making vehicles, gates, cooking vessels. Metals are shiny.
        When heated, metals can be shaped into any form - small paper clips or a huge aeroplane.`
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: [
        `rubber, eraser
        wood, pencil
        metal, cooking vessel
        leather, belt,
        plastic, bucket
        glass, bottle`,

        `metal, lock and key
        wood, small boat
        leather, purse
        plastic, cover
        glass, mirror
        clay, pot`,

        `metal, spoon
wood, chair
leather, shoes
fabric, dress
clay, brick
plastic, plates`
      ]
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
            text: `An object can be made from more than one raw material.
Clay become soft when mixed with water.
`
          },
          {
            name: 'False',
            text: `Shoes are made from steel.
Doors can be made from cardboard.
Metals are elastic materials.`
          }
        ]
      }
    },

    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'mixed-drag-drop',
      data: [
        `Meera is colouring with a *pencil*.
        Grand father is sitting in a *chair*.
        Vimal is playing with a *doll*.
        Books are arranged in a *bookshelf*.`,

        `Clothes are made of *fabric*.
Knives and spoons are made from *steel*.
Bags, bottles and toys are made from *plastic*.
Shoes are made from *leather*.
Tables, chairs and pencils are made from *wood*.`,

        {
          title:
            'Drag and drop the words to the right group based on the material they are made up of.',
          text: `belt, purse, *shoes*
cotton, coir, *jute*
tyre, gloves, *eraser*
pot, lamp, *brick*
table, window, *chair*`
        },

        `Metals are made from *ores*. Metals are *shiny*.
        Rubber is *elastic*, so it is used in making rubber bands.
        When *heated*, metals can be shaped into any form.
By seeing and *touching*, we can easily guess the material.`
      ]
    },
    {
      label: 'Choose the best Answer',
      id: 'mcq-3',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' Which material is used to make windows?',
            options: 'glass, leather, fabric'
          },
          {
            qText: 'What can be used to make a table?',
            options: 'wood, fabric, ceramic'
          },
          {
            qText: 'Which of these are made from steel?',
            options: 'spoon, table cloth, shoes'
          },
          {
            qText: 'What do we get from the skins of animals?',
            options: 'Leather, Wool, Fibre, Jute'
          },
          {
            qText: 'Which of the following is the strongest?',
            options: 'Metal, Wood, Plastic, Leather'
          }
        ]
      }
    }
  ]
};
