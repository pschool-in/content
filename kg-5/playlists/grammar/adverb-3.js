export default {
  id: 'adverb-3',
  label: 'Adverb-3',
  pdf: '',
  list: [
    {
      label: 'Adverbs-3',
      type: 'passage',
      id: 'adverb-3-reading',
      data: {
        title: 'Adverb of Manners',
        text: `We know that adverbs tell us about the verb, adjective or another adverb. Adverbs of manner tells us how an action is done. In simple words, it answers the question 'how'. 

These adverbs generally end with '-ly'. Some examples are:
1. The turtle moves slowly.
2. The dog runs quickly.
3. The girl walked smartly.

We can also convert some adjectives into adverbs by simply adding '-ly' in the end. For example;
1. safe- safely
2. gentle- gently
3. possible- possibly
4. correct- correctly
5. sad- sadly
6. angry- angrily
7. happy- happily

Some more examples of adverb of manners are:

1. Richa completed her homework independently.
2. The old lady feeds kindly to the street animals.
3. The teacher clearly explained the topic.`
      }
    },
    {
    type: 'group',
    label: 'Drag and Drop',
    id: 'drag-and-drop',
    commonData: {
      title: 'Identify which are adverbs of manner and which are adjectives.',
      types: ['Adjective', 'Adverb']
    },
    data: [
      [
        `Quick, Polite, Careful, Hard`,
        `Loudly, Rudely, Softly, Quietly`
      ],
      [
        `Noisy, Sudden, Good, Fast`,
        `Happily, Slowly, Badly, Nicely`
      ]
    ]
  },
  {
    id: 'match',
    label: 'Match the following',
    type: 'match',
    data: {
      text: `Bad, Badly
      Noisy, Noisily
      Beautiful, Beautifully
      Easy, Easily
      Hard, Hardly
      Careful, Carefully
      Good, Well`,
      title: 'Match the adjectives and their adverbs.'
    }
  },
  {
    id: 'fill-up',
    label: 'Fill up with options',
    type: 'fillup',
    commonData: {
      title: `Fill in the blank with the correct option.`
    },
    data: [
`They dance *beautifully (beautiful, beautifuly)*.
Richa doesn't work *hard (hardly, hardily)*.
She knows the road *well (good, goodly)*.
We have to get up *early (earlily, soon)*.
Our teacher arrives *late (lately, soonly)* for class.
He ate his meal *quickly (quick, quickily)*.
He is very *talented (talent, talents)*.
They missed the bus, *unfortunately (unfortunate, fortunately)*.
They waited *patiently (patient, patience)* until 1 pm.
She tried on her new dress *happily (happyly, happy)*.`,

`He drives too *fast (well, fastly)*.
She speaks very *quietly (quiet, quitely)*.
He plays the guitar *terribly (terrible, terribily)*.
She walked *happily (happy, happly)* to the school.
He planned the trip *nicely (nice, nicily)*.
She spoke *softly (softness, soft)*.
James shouted *loudly (loud, louds)* to call her.
He swims *well (good, medium)*.
She *angrily (angryly, angry)* shut the door.
She is very *greedy (greedily, greed)*.`
    ]
  },
  {
    type: 'rightOne',
    label: 'Correct Spelling',
    id: 'correct-spelling',
    data: {
      title: 'Identify the correct spelling for these adverb of manners.',
      text: `Safely, Safily
      Noisily, Noisly
      Godly, Godily
      Angrily, Angrys
      Sadly, Sads
      Hopefully, Hopefuly
      Gently, Gentley
      Possibly, Possibley`
    }
  },
  {
    label: 'Right match-1',
    id: 'complete-1',
    type: 'completePuzzle',
    data: {
      type: 'rightOpen',
      title: 'Identify the correct adverb of manner for these adjectives.',
      printNoOptions: true,
      text: `Smart, Smartly, Smartily
      Possible, Possibly, Possibley
      Pleasant, Pleasantly, Pleasantary
      Happy, Happily, Happilie
      Bad, Badly, Badley`
      }
    },
    {
        label: 'Right match-2',
        id: 'complete-2',
        type: 'completePuzzle',
        data: {
          type: 'rightOpen',
          title: 'Identify the correct adverb of manner for these adjectives.',
          printNoOptions: true,
          text: `Quick, Quickly, Quickey
          Slow, Slowly, Slowey
          Fast, Fastly, Fastily
          Gentle, Gently, Gentley
          Correct, Correctly, Corrects`
          }
        }
      ]
    };
