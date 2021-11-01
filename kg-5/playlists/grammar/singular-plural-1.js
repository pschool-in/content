export default {
    id: 'singular-plural-1',
    label: 'Singular-Plural-1',
    pdf: '',
    list: [
      {
        label: 'Singular-Plural - Reading',
        type: 'passage',
        id: 'singular-plural-reading',
        data: {
          title: 'Singular-Plural',
          text: `In simple words, singular means only one. Plural means more than one. We generally add 's' at the end of the nouns to make them plural. Some examples are:
1. The plural for an ant will be *ants*.
2. The plural for a cat will be *cats*
3. The plural for a bird will be *birds*.

Some nouns use different words as plural. Some examples are:
1. The plural for a child is *children*.
2. The plural for a tooth is *teeth*.
3. The plural for a foot is *feet*.`
        }
      },
      {
      type: 'group',
      label: 'Drag and Drop',
      id: 'classify-singular-plural',
      commonData: {
        title: 'Identify the singular and plural words.',
        types: ['Singular', 'Plural']
      },
      data: [
        [
          `Snake, Bat, Bear, Duck`,
          `Feet, Children, Teeth, Mice`
        ],
        [
          'School, Pencil, Doctor, Market',
          'Teachers, Windows, Lamps, Bosses'
        ],
        [
          'Box, Wish, Plate, Berry',
          'Skies, Tomatoes, Heroes'
        ]
      ]
    },
    {
    id: 'match',
    label: 'Match the following',
    type: 'match',
    commonData: {
        title: 'Match the singular words with their plurals'
    },
   
    data: [
     `Child, Children
     Foot, Feet
     Tooth, Teeth
     Shelf, Shelves
     Knife, Knives`,

     `Mouse, Mice
     Man, Men
     Plate, Plates
     Chef, Chefs
     Safe, Safes`,
      ]
    },
    {
        id: 'fill-up',
        label: 'Fill up with options',
        type: 'fillup',
        commonData: {
          title: `Choose the correct plurals. (title)`
        },
        data: [
          `My friend has 2 *puppies (puppys)* in his house.
          My mom bought 1 packet of *cherries (cheerys)*.
          I love eating french *fries (frys)*.
          I like *cats (caties)*.
          Dogs have 4 *legs (leges)*.`,
  
          `My aunt doesn't like *babies (babys)*.
          *Monkeys (Monkeies)* climb trees very fast.
          *Flies (Flys)* are very common insects.
          There are a lot of *apples (appless)* in the tree.
          Bees live in *hives (hivies)*.`
        ]
      }
    ]
  };
        
