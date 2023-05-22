export default {
  id: 'plants-6',
  label: 'Plants',
  lockAfter: 4,
  list: [
    {
      id: 'notes',
      label: 'Getting to know plants - Reading',
      type: 'passage',
      data: {
        text: `# Herbs, Shrubs and Trees
The plants that we see around us can be classified into herbs, shrubs or trees based on the height of the plant, the nature of the stem and based on the point of branching. The plants which are short with green and tender stems are catergorized as herbs.They may not have many branches. Trees are very tall with thick and hard stem. For trees the branching points appear higher up on the thick and hardened stem. Shrubs have moderate height with a hard stem but branching points appear at the base of the stem.

# Stem
Stem supports a plant and bear leaves, branches, buds, flowers and fruits.Plants with weak stems that cannot stand upright but spread on the ground are called creepers, while those that take support and climb up are called climbers. Stem helps in upward movement of water. The water and minerals go to the leaves and other plant parts attached to the stem.

# Leaf
Leaves are attached to the stem by a structure called petiole. The broad green part of the leaf is called lamina. The lines on a leaf are called veins. The prominent line in the middle of the leaf is a midrib. The design made by the veins in a leaf is called the leaf venation. If the design is net like on both sides of the midrib then the venation is said to be reticulate. If the design is parallel to one another as in grass, then the venation is called parallel venation. Water comes out of eaves in the form of vapour by a process called transpiration. Leaves prepare their food in the presence of sunlight and a green coloured substance present in them. For this, they also use water and carbon dioxide. This process is called photosynthesis. Oxygen is given out in this process. The food prepared by leaves ultimately gets stored in different parts of plant.

# Root
Roots act as an anchor that hold the plant firmly to the soil. Different types of plants have different structure for roots as well. The two main type of roots are tap root and fibrous root. In a tap root system the main root is called tap root and the smaller roots are called lateral roots. In fibrous root system the plant lacks a main root and the roots seem similar. These are called fibrous roots. Roots of some plants such as carrot, radish, sweet potato, turnip and tapioca are edible.

# Flower
The most prominent and colourful part of a flower are called petals. The small leaf like structures that are seen on a flower are called sepals. The innermost part of a flower is called the pistil. Stamens usually surround the pistil. Pistil contains the ovary, style and stigma. The ovary contains ovules. `,
        title: 'Getting to know plants'
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'match-drag-drop-1',
      data: {
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `The prominent line in the middle of the leaf is called *midrib*.
If the venation is a netlike design in both sides of midrib, then it is called *reticulate* venation.
The main root of the plant is called *tap root*.
The smaller roots seen on a plant is called *fibrous root*.`
      }
    },
    {
      label: 'Name the following',
      type: 'matchByDragDrop',
      id: 'match-drag-drop-2',
      data: {
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `The process by which plants loose water - *transpiration*
The process by which plants make food - *photosysnthesis*
The part of leaf that attaches it to the stem - *petiole*
The part of pistil that contains ovules - *ovary*
The prominent line in the leaf - *midrib*`
      }
    },
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `The *stem (root)* holds the plant upright.
The *stem (branch)* bears leaves, flowers and fruits.
Leaf usually has a *petiole (sepal)* and lamina.
The pattern of veins on the leaf is called *venation (veins)*. 
Plants having leaves with reticulate venation have *tap (fibrous)* roots.
Plants having leaves with parallel venation have *fibrous (tap)* roots.`
      }
    },
    {
      label: 'Match the following',
      type: 'matchByDragDrop',
      title: `Drag and drop to match parts and their food`,
      id: 'match-drag-drop-3',
      data: {
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `Roots → *Carrot*
Flowers → *Cauliflower*
Fruits → *Mango*
Grains → *Wheat*
Leaves→ *Spinach*
Stem → *Sugarcane*`
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
            text: ` The leaves, seeds and flower of mustard is edible.
Tomato is a fruit.
Carrot is a root.`
          },
          {
            name: 'False',
            text: `Potato is an edible fruit
Cauliflower is an edible leaf. 
Clove is an edible seed.`
          }
        ]
      }
    },
    {
      id: 'fillup-2',
      label: 'Parts of a Plant',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `*Veins (lamina)* are branch out from the midrib.
*Petiole (sepal)*joins the leaf to the main stem.
*Stomata (leaf)* are used to exchange gases.
*Chlorophyll (anthocyanin)* is the green pigment in plants.
The lines on a leaf are called *veins (lamina)*. 
The prominent line in the middle of the leaf is a *midrib (vein)*.
The design made by the veins in a leaf is called the leaf *venation (veination)*.`
      }
    },
    {
      id: 'mcq-1',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              'Which of the following is not a criteria used to distinguish between herbs, shrubs and trees?',
            options: `Colour, Branches, Nature of stem`
          },
          {
            qText:
              'What are plants with weak stem that spread on the ground called?',
            options: `Creepers, Climbers, Shrubs`
          },
          {
            qText:
              'What is the part of the leaf that is attached to the stem called?',
            options: `Petiole, Lamina, Midrib`
          },
          {
            qText: 'What is the broad, green part of the leaf called?',
            options: `Lamina, Veins, Buds `
          },
          {
            qText: 'What is the design made by veins in the leaf called?',
            options: `Leaf venation, Leaf petiole, Veins`
          }
        ]
      }
    },
    {
      label: 'Leaf',
      type: 'matchByDragDrop',
      id: 'match-drag-drop-4',
      data: {
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `Leaves are attached to the stem by a structure called *petiole*. 
The broad green part of the leaf is called *lamina*. 
The lines on a leaf are called *veins*. 
The prominent line in the middle of the leaf is a *midrib*.
The design made by the veins in a leaf is called the leaf *venation*.
Water comes out of eaves in the form of vapour by a process called *transpiration*.`
      }
    },
    {
      type: 'completeWord',
      id: 'complete-word',
      label: 'Plants',

      data: {
        title: 'Find the word',
        questions: [
          {
            word: 'TRANSPIRATION',
            display: 'T___S________',
            hint: 'The process by which plants loose water'
          },
          {
            word: 'PHOTOSYNTHESIS',
            display: 'P____S_____S__',
            hint: 'The process by which plants make food'
          },
          {
            word: 'PETIOLE',
            display: 'P______',
            hint: 'The part of leaf that attaches it to the stem'
          },
          {
            word: 'STEM',
            display: 'S___',
            hint: 'The part that holds the plant upright'
          },
          {
            word: 'VEINS',
            display: '___N_',
            hint: 'The lines on a leaf'
          }
        ]
      }
    },
    {
      id: 'stem-root',
      label: 'Stem or Root',
      type: 'classifySentence',
      data: {
        title: 'Classify based on the functions performed by the plant part.',
        types: [
          {
            name: 'Stem',
            text: `Holds the plant upright.
Bears leaves, branches, buds, flowers and fruits.
Conduct water to the leaves.`
          },
          {
            name: 'Root',
            text: `Absorbs water and minerals.
Anchors the plant into the soil.`
          }
        ]
      }
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
    }
  ]
};
