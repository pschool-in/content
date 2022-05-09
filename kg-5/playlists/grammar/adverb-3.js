export default {
  id: 'adverb-3',
  label: 'Introduction to Adverb',
  pdf: '',
  list: [
    {
      label: 'Adverb Reading',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Adverb',
        text: [
          `An adverb is a word that adds more meaning to a verb or adjective or another adverb.
# Modifying Verb`,
          {
            type: 'html',
            text: `John speaks <b>loudly</b>.<br>
Rohan left <b>immediately</b>.`
          },
          `# Modifying Adjective`,
          {
            type: 'html',
            text: `He is <b>really</b> handsome.<br>
The story was <b>very</b> interesting.`
          },
          `# Modifying Another Adverb`,
          {
            type: 'html',
            text: `Sara drives <b>very</b> slowly.<br>
Deepa is reading <b>so</b> quickly.`
          }
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Select the Adverb',
      id: 'select-word',
      lockAfter: 1,
      commonData: {
        title: 'Click on the adverb in the below sentence.',
        printTitle: 'Underline the adverb in the below sentences.'
      },
      data: [
        `Anu swims *well*.
Hari ran *fast*.
Sheela spoke *softly*.
Ram plays the flute *beautifully*.
Siva ate the chocolate cake *eagerly*.
The town grew *quickly* after 1997.
Muthu waited *patiently* for his mother to arrive.
Vino swam *well* despite being tired.
The rain fell *hard* during the storm.
They speak English *fluently*.`,

        `We must go *now*.
The tortoise moves *slowly*.
It is *very* cold at night.
James coughed *loudly*.
Kamal answered all the questions *correctly*.
The cat walked *calmly* along the fence.
They are working *hard* in the sun.
The poor man's hut was *badly* damaged in the rain.
I *eagerly* wait to go home.
Pooja forgot her lunch *yesterday*.`,

        `We have a holiday *tomorrow*.
I am happy *today*.
Is Kamala *still* sleeping?
Please come *forward* and answer.
He answered all questions *correctly*.
I brush my teeth *twice*.
Our teacher is *always* punctual.
Dheena is *often* late for the Maths class.
I *always* read comic books.
Please come *forward* and answer.`
      ]
    },
    {
      label: 'Classify Modifier',
      type: 'classifySentence',
      id: 'classify3',
      lockAfter: 1,
      commonData: {
        title: 'What does the underlined adverb modify?',
        types: ['Verb', 'Adjective', 'Adverb']
      },
      data: [
        [
          `They speak English *fluently*.
We must go *now*.
Pooja forgot her lunch *yesterday*.`,

          `It is *very* cold at night.
I am happy *today*.
He is *really* funny.`,

          `Helen drives *extremely* fast.
I get up *very* early sometimes.
I have seen her *only* once.`
        ],
        [
          `Please come *forward* and answer.
The tortoise moves *slowly*.
He answered all questions *correctly*.`,

          `The water is hot *enough* to prepare tea.
You have to be *more* careful.
He is a *very* kind person.`,

          `She talks *too* much.
Why did you go *so* far?
He is *not* always busy.`
        ],
        [
          `We must go *now.*
I will call you *later.*
The train is coming *late.*`,

          `The answer is *completely* wrong.
I am *very* hungry.
The cat is brave *enough* to chase the dogs.`,

          `He answered the question *more* quickly than I did.
She slept *too* late.
He writes *quite* slowly.`
        ]
      ]
    },
    {
      type: 'group',
      label: 'Adverb vs Adjective',
      id: 'drag-and-drop',
      lockAfter: 1,
      commonData: {
        title: 'Classify the below words.',
        types: ['Adjective', 'Adverb']
      },
      data: [
        [`Quick, Polite, Careful, Hard`, `Loudly, Rudely, Softly, Quietly`],
        [`Noisy, Sudden, Good, Fast`, `Happily, Slowly, Badly, Nicely`],
        [`Smart, Loud, Big, Huge`, `Really, Suddenly, Tightly, Tearfully`],
        [
          `Red, Brown, Green, Yellow`,
          `Heavily, Tightly, Attentively, Hurriedly`
        ],
        [
          `Soft, Beautiful, Normal, Personal`,
          `Softly, Beautifully, Normally, Personally`
        ]
      ]
    },
    {
      type: 'completeWord',
      label: 'Complete the word',
      id: 'complete-2',
      lockAfter: 1,
      commonData: {
        title: 'Form the adverb from the root word.'
      },
      data: [
        `Bad | BADLY | BA___
Noisy | NOISILY | NOI____
Beautiful | BEAUTIFULLY | BEAUTI_____
Easy | EASILY | EAS___
Careful | CAREFULLY | CAREF____
Quick | QUICKLY | QUIC___
Tight | TIGHTLY | TIGH___
Quiet | QUIETLY | QUIE___`,

        `Near | NEARLY | NEA___
Greed | GREEDILY | GREE____
Gentle | GENTLY | GEN___
Fluent | FLUENTLY | FLUEN___
Hard | HARDLY | HAR___
Rapid | RAPIDLY | RAPI___
Brief | BRIEFLY | BRIE___
Careless | CARELESSLY | CARELE____`,

        `Loud | LOUDLY | LO____
Most | MOSTLY | MOS___
Eager | EAGERLY | EAGE___
Awkward | AWKWARDLY | AWKWAR___
Bright | BRIGHTLY | BRIGH___
Busy | BUSILY | BUS___
Clear | CLEARLY | CLEA___`
      ]
    }
  ]
};
