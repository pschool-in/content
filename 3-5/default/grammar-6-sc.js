export default {
  label: 'Grammar',
  id: 'grammar-6-sc',
  img: 'grammar',
  grade: '6-8',
  list: [
    {
      label: 'Choose Right Prefix',
      id: 'complete-prefix',
      type: 'completePuzzle',
      commonData: {
        type: 'leftOpen',
        title: 'Drag and drop the correct prefix.',
        printTitle: 'Underline the right option.',
        leftWidth: 90,
        rightWidth: 210
      },
      data: [
        `visible, in, un
organised, dis, mis
polite, im, in
patient, im, un
responsible, ir, dis
common, un, in
cooked, un, non-
distinct, in, non-
final, semi-, half-
ordinary, extra, great`,

        `well, un, in
legal, il, un
satisfactory, un, in
accurate, in, un
possible, im, mis
polite, im, un
dependent, in, un
use, mis, un
prove, im, in
joint, dis, un`,

        `fold, un, dis
door, in, mis
balance, im, in
happy, un, in
literate, il, un
fit, mis, im
appear, dis, un
human, in, dis
spell, mis, dis
pure, im, mis`
      ]
    },
    {
      type: 'fillup',
      label: 'Homonyms',
      id: 'homonyms',
      data: {
        text: `I am not *allowed (aloud) * to drink soda. 
My *aunt (ant) * bought me a new bike! 
I was so hungry. I *ate (eight) * my entire dinner. 
I got a new bat and *ball (bowl) * last week. 
What do you want to *be (bee)*  when you grow up? 
Eat that last green *bean (been)* on your plate. 
I *beat (beet) * you in the race. I was first. 
I have a teddy *bear (bare)* at home. 
I was stung by a *bee (be) *. 
Where have you *been (bean) * all this time? `
      }
    },
    {
      type: 'fillup',
      label: 'Prepositions',
      id: 'prepositions',
      data: {
        text: `The key is *on (near, by) * the table. 
The fish is *inside  (outside, on) * the bowl.
I gave a present *to (for, by) * my mother. 
The cat is sitting *under (over, inside) * the table. 
Pick the flowers *from  ( to, by) * the plant.
Arrange your books *in (on, by) * your book shelf. 
The lion lives *in (on, near) * the forest. 
We go to school *by (on, to) * bus. 
The sun is *above (below, over) * the clouds. 
Be careful *with (in, on) * the glasses.`
      }
    },
    {
      type: 'match',
      label: 'Match Subjects and Predicates',
      id: 'subject-predicate',
      data: {
        title: 'Match Subjects and Predicates.',
        onlyBigScreen: true,
        text: `The two year old girl, cried when her mom took her toy.
The baby calf, mooed at its mother.
The crank old man, fussed at the bus driver.
The large Christmas tree, was decorated with ornaments.
The tiny wooden sailboat, rocked back and forth in the water.
The playful chimpanzee, swung from the jungle vines.
The cheerful pilot, welcomed passengers onto the plane.
The humongous spider, spun its web by my back door.
The patient teacher, taught her students how to multiply.`
      }
    },
    {
      type: 'classifySentence',
      label: 'Active and Passive Voice',
      id: 'classify-voice',
      data: {
        title: 'Classify the Voice of the sentence.',
        types: [
          {
            name: 'Active',
            text: `She helps me.
He teaches us.
She respects us.
He cut trees.
Someone has stolen my purse.`
          },
          {
            name: 'Passive',
            text: `I am helped by her.
We are taught by him.
We are respected by her.
Trees were cut by him.
My purse has been stolen.`
          }
        ]
      }
    }
  ]
};
