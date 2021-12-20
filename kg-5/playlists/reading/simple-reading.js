export default {
  label: 'Simple Reading',
  id: 'simple-reading',
  lockAfter: 3,
  list: [
    {
      id: 'sandwich',
      type: 'passage',
      label: 'Sandwich',
      data: {
        title: 'Sandwich',
        text: `First, keep all the ingredients ready. Now, begin by arranging two slices of bread on a plate. Spread butter on both slices. Then, add cheese, tomatoes, cucumbers, salt, and pepper. Next, cover the arrangement with the other slice of bread. Lastly, toast the sandwich on medium flame until it is slightly brown.`
      }
    },
    {
      label: 'Recipe fillup',
      type: 'matchByDragDrop',
      id: 'sandwich-fillup',
      data: {
        title: 'Drag and drop the words at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        },
        text:
          'First, keep all the *ingredients* ready. Now, begin by arranging two slices of *bread* on a plate. Spread *butter* on both slices. Then, add *cheese*, tomatoes, cucumbers, salt, and pepper. Next, *cover* the arrangement with the other slice of bread. Lastly, toast the *sandwich* on medium flame until it is slightly brown.'
      }
    },
    {
      label: 'Recipe - Sorting',
      type: 'sorting',
      data: {
        title: 'Sort the sentences in the right order.',
        text:
          'First, keep all the ingredients ready. \nNow, begin by arranging two slices of bread on a plate.\nSpread butter on both the slices. \nThen, add cheese, tomatoes, cucumbers, salt, and pepper. \nNext, cover the arrangement with the other slice of bread. \nLastly, toast the sandwich on medium flame until it is slightly brown.'
      },
      id: 'sandwich-sort'
    },
    {
      id: 'elephants',
      type: 'passage',
      label: 'Elephants',
      data: {
        title: 'Elephants',
        text: [
          { type: 'img', src: 'elephant.jpg' },
          `Elephants are the largest animals that live on land. They are usually found in the forests of Africa and Asia. They have a long trunk. It is used to gather food, drink water and bathe. They flap their ears to cool down. They love to eat leaves, grass, and bark. They are really big so they need to eat a lot of food. They can strike with huge force, which can topple even a truck.`
        ]
      }
    },
    {
      id: 'zebras',
      type: 'passage',
      label: 'Zebras',
      data: {
        title: 'Zebras',
        text: [
          { type: 'img', src: 'zebra.jpg' },
          `Zebras have black and white stripes. It helps them to hide from other animals/predators. No two zebras have the same stripes - they are all different.
Zebras move quickly and can run faster than lions. If they are being chased by another animal, they run from side to side. Zebras also sleep standing up and they mostly eat grass.
A baby zebra is called a foal and it can run within an hour after being born.`
        ]
      }
    },
    {
      id: 'giraffes',
      type: 'passage',
      label: 'Giraffes',
      data: {
        title: 'Giraffes',
        text: [
          { type: 'img', src: 'giraffe.jpg' },
          `Giraffes are the tallest animals on land. Their long necks help them to eat leaves from tall trees. Giraffes also have small horns on top of their head. These horns help to protect their head in a fight.`
        ]
      }
    },
    {
      id: 'camels',
      type: 'passage',
      label: 'Camels',
      data: {
        title: 'Camels',
        text: [
          { type: 'img', src: 'camel.jpg' },
          `Camels live in the deserts of Africa and Asia. All camels have one or two humps. Camel's hump consists of stored fat. Camels are herbivores, which means they do not eat meat. They eat a lot of leaves, thorns, and bushes. Camels can go without water for a long time. They like to stay together in groups called herds.  `
        ]
      }
    }
  ]
};
