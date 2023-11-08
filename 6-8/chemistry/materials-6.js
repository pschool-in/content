export default {
  id: 'materials-6',
  label: 'Materials',
  lockAfter: 4,
  list: [
    {
      id: 'notes',
      label: 'Sorting Materials into Groups - Reading',
      type: 'passage',
      data: {
        text: `# Objects Around us.
If we take a look around us we may find a large variety of objects. These objects are made up of a variety of materials. A given material could be used to make a large number of objects. It is also possible that an object could be made of a single material or of many different types of materials. These materials may be glass, metal, plastics, wood, cotton, paper, mud or soil.
# Properties of Materials.
1. Appearance: Some materials have luster-like metals and are shiny in appearance while some are dull.
2. Hardness: Materials that are easily compressed are called soft while others that are difficult to compress are called hard.
3. Solubility: Some materials readily dissolve in water. These are said to be soluble. Other materials that do not mix with water are said to be insoluble.
4. Float or Sink: Some materials float on the surface of the water while others sink to the bottom.
5. Transparency: Some materials such as glass, are transparent and some others such as wood and metals are opaque. The materials through which objects can be seen, but not clearly, are known as translucent.
Materials are grouped together based on similarities and differences in their properties. Things are grouped together for convenience and to study their properties.`,
        title: 'Sorting Materials into Groups'
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
        text: `Metals have *lustre* while fabric is *dull*.
Diamond is *hard* but chalk is *soft*.
Sugar is *soluble* in water while oil is *insoluble*.
Glass is *transparent* but wood is *opaque*.
Leaf *floats* on the surface of the water while a coin *sinks* to the bottom.`
      }
    },
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Materials that are easily compressed are called *soft (hard)* while others which are difficult to compress are called *hard (soft)*.
Some materials readily dissolve in water. These are said to be *soluble (insoluble)*. 
Materials that do not mix with water are said to be *insoluble (soluble)*.
Some materials such as glass, are *transparent (translucent)* and some others such as wood and metals are *opaque (transparent)*. 
The materials through which objects can be seen, but not clearly, are known as *translucent (trasparent)*.`
      }
    },
    {
      id: 'shiny-dull',
      label: 'Shiny or Dull',
      type: 'classifySentence',
      data: {
        title: 'Classify the given materials based on their appearance.',
        types: [
          {
            name: 'Shiny',
            text: `Glass bowl
Steel spoon 
Gold ring `
          },
          {
            name: 'Dull',
            text: `Plastic toy
Cotton shirt
Wooden chair`
          }
        ]
      }
    },
    {
      id: 'hard-soft',
      label: 'Hard or Soft',
      type: 'classifySentence',
      data: {
        title: 'Classify the given materials based on their compressiblity.',
        types: [
          {
            name: 'Hard',
            text: `Wood
Metal
Stone
Brick
Diamond`
          },
          {
            name: 'Soft',
            text: `Fabric
Wool
Leather
Cotton
Paper`
          }
        ]
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
            text: `Chalk dissolves in water 
Sand settles down in the water
Vinegar dissolves in water.
A piece of wood floats on water.`
          },
          {
            name: 'False',
            text: ` Stone is transparent, while glass is opaque 
A notebook has luster while an eraser does not.
Sugar does not dissolve in water.
Oil mixes with water.`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Book, Paper
Tumbler, Glass
Chair, Wood
Toy, Plastic
Shoes, Leather
Nail, Steel`,
        title: 'Match the objects with the materials they are made from.'
      }
    },
    {
      type: 'rightOne',
      id: 'odd-one',
      label: 'Odd One Out',
      data: {
        title: 'Pick the odd one out.',
        text: `Sand, Sugar, Salt, Copper sulphate
Baby, Chair, Bed, Table, Cupboard
Boat, Rose, Jasmine, Marigold, Lotus
Sand, Aluminium, Iron, Copper, Silver`
      }
    },
    {
      id: 'float-sink',
      label: 'Float or Sink',
      type: 'classifySentence',
      data: {
        title:
          'Classify the given materials based on whether they float or sink in water.',
        types: [
          {
            name: 'Float',
            text: `Rubber
Wax
Plastic
Thermocol `
          },
          {
            name: 'Sink',
            text: `Metal
Copper
Silver
Gold`
          }
        ]
      }
    },
    {
      id: 'soluble-insoluble',
      label: 'Soluble or Insoluble',
      type: 'classifySentence',
      data: {
        title: 'Classify the materials based on solubility',
        types: [
          {
            name: 'Soluble',
            text: `Sugar
Sodium chloride
Alcohol
Vinegar`
          },
          {
            name: 'Insoluble',
            text: ` Sand
Gravel
Chalk powder
Sawdust`
          }
        ]
      }
    },
    {
      id: 'round-other',
      label: 'Round or Other',
      type: 'classifySentence',
      data: {
        title: 'Classify the objects based on their shape.',
        types: [
          {
            name: 'Round',
            text: `Basketball
Orange
Globe
Apple`
          },
          {
            name: 'Other',
            text: ` Water
Television
Keyboard
Matchbox`
          }
        ]
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
            qText: 'Which of the following is a tranparent material?',
            options: `Glass, Wood, Metal`
          },
          {
            qText: 'Which of the following is transclusent?',
            options: `Plastic bag, Glass, Silver`
          },
          {
            qText: 'Which is not soluble in water?',
            options: `Sand, Sugar, Salt`
          },
          {
            qText: 'What are materials that are easily compressed called?',
            options: `Opaque, Transparent, Transclusent`
          },
          {
            qText:
              'Which of the following materials is not normally used in making a pen?',
            options: `Wood, Plastic, Metal`
          },
          {
            qText:
              'Which of the following is the most suitable material for making a chair?',
            options: `Wood, Glass, Leather`
          }
        ]
      }
    }
  ]
};
