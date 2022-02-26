export default {
  label: 'Living Things',
  id: 'living-things',
  list: [
    {
      label: 'Living Things - Reading',
      type: 'passage',
      data: {
        title: 'Living Things',
        text: `# Living and Non-living things.
If we look around in our surroundings we find two types of things, living things and non-living things. Living things can eat, breathe, grow, move and can give birth to young ones. Non-living things cannot grow, eat or move.
# Features of living things
1. They can move from one place to another.
2. They can grow with time.
3. They need food.
4. They breathe.
5. They can give birth to young ones.
# Features of non-living things.
1. They can not move on their own.
2. They do not grow with time.
3. They can not eat.
4. They do not breathe.
5. They can not give birth to young ones.
# Basic needs of a living thing
The basic needs of living things are air, water, food and shelter.
1. They need air to breathe.
2. They need water to drink.
3. They need food to eat and grow.
4. They need shelter to protect themselves from heat and rain.`
      },
      id: 'passage'
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
    }
  ]
};
