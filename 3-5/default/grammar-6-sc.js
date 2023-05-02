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
      onlyBigScreen: true,
      data: {
        title: 'Match Subjects and Predicates.',
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
    },
    {
      type: 'makeSentence',
      label: 'Convert to Passive Voice',
      id: 'make-sentence',
      commonData: {
        title:
          'Convert the Active Voice to Passive Voice. Drag & Drop the words from the bottom and construct the sentence.',
        extras: 'is because of an the them us'
      },
      data: [
        `Jim wrote a letter. |  a letter was written by Jim
Lata sings lovely songs. | lovely songs are sung by Lata
Tom is building a house. | a house is being built by Tom
They will run a race. | a race will be run by them 
I am writing a letter. | a letter was being written by me`,

        `He ate an apple. | an apple was eaten by him
He is eating an apple. | an apple is being eaten by him
He eats an apple. | an apple is eaten by him
He helps me. | I am helped by him
He is helping me. | I am being helped by him`,

        `Mr John teaches poor people. | poor people are taught by Mr John
The doctor was examining him. | he was being examined by the doctor
Sita is planting new trees. | new trees are being planted by Sita
Our dog chased the cat. | the cat was chased by our dog
The company released a new product. | a new product was released by the company `
      ]
    },
    {
      type: 'makeSentence',
      label: 'Convert Direct Sentences to Indirect Sentences',
      id: 'convert-direct',
      commonData: {
        title:
          'Convert the given Direct Sentence to Indirect Sentence. Drag & Drop the words from the bottom and construct the sentence.',
        extras: 'is because of an the them us'
      },
      data: [
        `"I am going to the store", said John. |  John said that he was going to the store
"I love ice-cream", exclaimed Sarah. | Sarah exclaimed that she loved ice-cream
"The concert starts at 7 PM," announced the event organizer. | the event organizer announced that the concert will start at 7PM
"I enjoy reading books," confessed Ruby. | Ruby confessed that she enjoyed reading books.
"I will be there on time," promised Emily. | Emily promised that she would be there on time`,

        `"I am sorry for being late," apologized Mike. | Mike apologized for being late
"I don't like carrot," declared Mark. | Mark declared that he didn't like carrot
"What's your favorite color?" asked Sita. | Sita asked what our favorite color was
"I'm really tired," said Peter. | Peter said that he was really tired
"I liked the movie," said Ravi. | Ravi said that he liked the movie`,

        `"I'll phone you tomorrow," he said. | he said he'd phone me the next day
"My father works in a bank," Priya said. | Priya said that her father worked in a bank
"The baby's sleeping!", she said. | She told that the baby is sleeping.
"I've hurt my leg", he said. | He said that she'd hurt her leg.
"It was raining all day", she said. | She told me it had been raining all day`
      ]
    }
  ]
};
