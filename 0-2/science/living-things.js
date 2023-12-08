export default {
  label: 'Living Things',
  id: 'living-things',
  lockAfter: 2,
  list: [
    {
      label: 'Living Things - Reading',
      type: 'passage',
      data: {
        title: 'Living Things',
        id: 'passage',
        text: [
          `Living things 
1. eat
2. grow
3. move
4. breathe
5. feel
6. have young ones
If we look around at our surroundings we find two types of things, living things and non-living things. Living things can eat, breathe, grow, move and give birth to young ones. Non-living things cannot grow, eat or move.`,
          {
            type: 'table',
            title: ['living things', 'non-living things'],
            text: [
              `They can move from one place to another.
They can grow.
They need food.
They breathe.
They can give birth to young ones.`,

              `They can not move on their own.
They do not grow with time.
They can not eat.
They do not breathe.
They can not give birth to young ones.`
            ]
          },
          `# Basic needs of a living thing
The basic needs of living things are air, water, food and shelter.
1. They need air to breathe.
2. They need water to drink.
3. They need food to eat and grow.
4. They need shelter to protect themselves from heat and rain.`
        ]
      }
    },
    {
      label: 'Living vs Non-living',
      type: 'group',
      id: 'living-vs-nonliving',
      data: {
        title: 'Classify the things as living or non-living',
        types: [
          {
            name: 'Living',
            text: 'fish, tree, man, baby, cat'
          },
          {
            name: 'Non-living',
            text: 'chair, table, pencil, bottle'
          }
        ]
      }
    },
    {
      id: 'living-nonliving',
      label: 'Living or Non-living',
      type: 'classifySentence',
      data: {
        title:
          'Classify the points as features of living or non-living things.',
        types: [
          {
            name: 'Living',
            text: `They can breathe.
They can eat.
They can give birth to young ones.`
          },
          {
            name: 'Non-living',
            text: `They can not move on their own.
They do not grow with time.`
          }
        ]
      }
    },
    {
      label: 'Basic needs - Fillup',
      id: 'fillup-drag',
      type: 'matchByDragDrop',
      data: {
        text: `Living things need *air* to breathe.
Living things need *water* to drink.
Living things need *food* to eat and grow.
Living things need *shelter* to protect themselves from heat and rain.`
      }
    },
    {
      id: 'drag-drop-image',
      label: 'Five Fingers',
      type: 'dragAndDrop',
      data: {
        img: 'fingers.jpg',
        title: 'Five Fingers',
        width: 168,
        height: 208,
        wordWidth: 100,
        fontSize: '0.9rem',
        words: [
          {
            word: 'Little Finger',
            x: -70,
            y: 75
          },
          {
            word: 'Ring Finger',
            x: -70,
            y: 30
          },
          {
            word: 'Middle Finger',
            x: 150,
            y: 15
          },
          {
            word: 'Index Finger',
            x: 150,
            y: 55
          },
          {
            word: 'Thumb',
            x: 150,
            y: 100
          }
        ]
      }
    },
    {
      label: 'Sounds We Hear',
      id: 'sounds-fillup',
      type: 'matchByDragDrop',
      data: {
        text: `The *cawing* of a crow.
The *ringing* of a bell.
The *ticking* of a clock.
The sound of a *moving* train.
The sound of a water *drop*.`
      }
    }
  ]
};
