export default {
  label: 'Adverb',
  id: 'adverb',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Notes',
      data: {
        title: 'Adverb',
        text: [
          `An adverb is a word that adds more meaning to a verb or adjective or another adverb.`,
          {
            type: 'html',
            text: `eg: (modifying verb) <br>
John speaks <b>loudly</b>. <br>
Rohan left <b>immediately</b>.`
          },
          {
            type: 'html',
            text: `eg: (modifying adjective) <br>
He is <b>really</b> handsome. <br>
The story was <b>very</b> interesting.`
          },
          {
            type: 'html',
            text: `eg: (modifying another adverb) <br>
Sara drives <b>very</b> slowly. <br>
Deepa is reading <b>so</b> quickly.`
          },
          `# Types of Adverbs`,
          `Abverbs are classified based on 'what type' of information it adds.`,
          `# Adverb of Manner`,
          `It tells 'how' something happens.`,
          {
            type: 'html',
            text: `I <b>strongly</b> agree with you.<br>
He jumped <b>high</b> in the air.`
          },
          `# Adverb of Time`,
          `It tells 'when' something happens.`,
          {
            type: 'html',
            text: `I will see you <b>tomorrow</b>.<br>
I need some water <b> later</b>.`
          },
          `# Adverb of Place`,
          `It tells 'where' something happens.`,
          {
            type: 'html',
            text: `Please come <b>in</b>.<br>
The kids are <b>downstairs</b>.`
          },
          `# Adverb of Frequency`,
          `It tells 'how often' something happens.`,
          {
            type: 'html',
            text: `I <b>always</b> wake up at 6 o'clock.<br>
I <b>rarely</b> watch TV.`
          },
          `# Adverb of Degree`,
          `It tells 'how much' or 'to what extent'.`,
          {
            type: 'html',
            text: `I <b>totally</b> agree with you.<br>
I was <b>really</b> excited.`
          }
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Identify the Adverb',
      id: 'select-adverb',
      commonData: {
        title: 'Select the adverb in the below sentence.',
        printTitle: 'Underline the adverb in the below sentences.'
      },
      data: [
        `Anu swims *well.*
Hari ran *fast.*
Sheela spoke *softly.*
Ram plays the flute *beautifully.*
Siva ate the chocolate cake *eagerly.*
The town grew *quickly* after 1997.
Muthu waited *patiently* for his mother to arrive.
Vino swam *well* despite being tired.
The rain fell *hard* during the storm.
They speak English *fluently.*`,

        `We must go *now.*
The tortoise moves *slowly.*
It is *very* cold at night.
James coughed *loudly.*
Kamal answered all the questions *correctly.*
The cat walked *calmly* along the fence.
They are working *hard* in the sun.
The poor man's hut was *badly* damaged in the rain.
I *eagerly* wait to go home.
Pooja forgot her lunch *yesterday.*`,

        `We have holiday *tomorrow.*
I am happy *today.*
Is Kamala *still* sleeping?
Please come *forward* and answer.
He answered all questions *correctly.*
I brush my teeth *twice.*
Our teacher is *always* punctual.
Dheena is *often* late for the Maths class.
I *always* read comic books.
Please come *forward* and answer.`
      ]
    },
    {
      label: 'Classify Adverb Type',
      type: 'classifySentence',
      id: 'classify',
      commonData: {
        title: 'Classify the type of adverb present in the below sentence.',
        types: ['Manner', 'Time', 'Place']
      },
      data: [
        [
          `Anu swims well. 
Hari ran quickly. 
Sheela spoke softly.`,

          `We must go now.
I will call you later.
The fight is not over yet. 
The train is coming late.`,

          `Henry walked towards the car. 
My son ran towards me. 
The balloon went up.`
        ],
        [
          `He always keeps himself busy.
The child ran towards his mother happily.
Gopi calmly explained his point of view.`,

          ` Pooja forgot her lunch yesterday.
Rohan decided to leave immediately.
You must reach there by tomorrow.`,

          ` Water always flows downhill.
She took the child outside.
Maya looked upwards to the sky.`
        ],
        [
          `They speak English fluently.
The tortoise moves slowly.
He answered all questions correctly.`,

          `Is Kamala still sleeping?
We have holiday tomorrow.
I am happy today.`,

          `The balloon drifted upwards.
My uncle is standing nearby.
Please come forward and answer.`
        ]
      ]
    },
    {
      label: 'Classify Adverb Type',
      type: 'classifySentence',
      id: 'classify2',
      commonData: {
        title: 'Classify the type of adverb present in the below sentence.',
        types: ['Frequency', 'Degree']
      },
      data: [
        [
          `I brush my teeth twice.
Our teacher is always punctual. 
The spider tried again and again to catch the fly. 
He is often late for the Maths class.
I always read comic books.`,

          `We have almost finished our homework.   
Our office is fully furnished. 
This job is quite interesting. 
Her dress was too small for me. 
Latha likes Italy very much.`
        ],
        [
          `I seldom go to the library.
We occasionally eat out.
We often spend weekends with friends.
I usually do the homework after dinner.`,

          `Your dinner is *almost* ready.
Our class teacher has an *extremely* busy schedule.
Our store room is *fully* loaded.
This job is *quite* interesting.`
        ]
      ]
    },
    {
      label: 'Classify Modifier',
      type: 'classifySentence',
      id: 'classify3',
      commonData: {
        title: 'What does the underlined adverb modifies?',
        types: ['Verb', 'Adjective', 'Adverb']
      },
      data: [
        [
          `They speak English *fluently.*
We must go *now.*
Pooja forgot her lunch *yesterday.*`,

          `It is *very* cold at night.
I am happy *today.*
He is *really* funny.`,

          `Helen drives *extremely* fast.
I get up *very* early sometimes.
I have seen her *only* once.`
        ],
        [
          `Please come *forward* and answer.
The tortoise moves *slowly.*
He answered all questions *correctly.*`,

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
      id: 'sort',
      label: 'Adverb of Frequency',
      type: 'sorting',
      data: {
        title:
          'Rearrange the adverbs of frequencies from the most probable to the least probable.',
        text: `Always, Usually, Sometimes, Rarely, Never`
      }
    }
  ]
};
