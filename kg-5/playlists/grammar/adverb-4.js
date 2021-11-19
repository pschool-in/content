export default {
    id: 'adverb-4',
    label: 'Adverb-4',
    pdf: '',
    list: [
      {
        label: 'Adverb of degree',
        type: 'passage',
        id: 'adverb-of-degree',
        data: {
          title: 'Adverb of degree',
          text: `Adverb of degree tells us to what extent the action has been done. In simple words, it answers the question 'how much?' For example: 
          The girl was very beautiful. 
          In this sentence, the word very tells us how much beautiful is the girl.
          
Some more examples are:
1. Ram can run so quickly.
2. I totally enjoyed the ride.

Other common adverbs of degree are almost, quite, nearly, extremely, too, just, enough, hardly, almost, etc.

There are three types of adverb of degrees:
1. Positive
"The toy plane is big." 
This sentence talks about the toy plane. Here, the toy plane is not compared to anything else. Therefore, big is a positive degree of comparison.

2. Comparative
"The doll is bigger than the plane." 
In this sentence, the doll is compared to a plane. Therefore, faster is the comparative degree of comparison.

3. Superlative
"The teddy bear is the biggest of all."
In this sentence, the teddy bear, doll and toy plane are compared with each other. Teddy bear is superior to all. Therefore, biggest is the superlative degree of comparison.`
}
      },
      {
        label: 'Classify-1',
        type: 'classifySentence',
        id: 'classify-sentence-1',
        data: {
        title: 'Identify if these adverbs are positive, comparative or superlative.',
          types: [
            {
              name: 'Positive',
              text: `Big
                     Happy
                     Quick`
            },
            {
                name: 'Comparative',
                text: `Smaller
                       Quicker
                       Faster`
              },
            {
              name: 'Superlative',
              text: `Happiest
                     Bravest
                     Biggest`
            }
          ]
        }
      },
      {
        label: 'Classify-2',
        type: 'classifySentence',
        id: 'classify-sentence-2',
        data: {
        title: 'Identify if these adverbs are positive, comparative or superlative.',
          types: [
            {
              name: 'Positive',
              text: `Tall
                     Good
                     Pretty`
            },
            {
                name: 'Comparative',
                text: `Better
                       Heavier
                       Taller`
              },
            {
              name: 'Superlative',
              text: `Best
                     Prettiest
                     Bravest`
            }
          ]
        }
      },
      {
        label: 'True or False',
        id: 'truefalse',
        type: 'classifySentence',
        commonData: {
          title: 'State whether the following statements are true or false.',
          types: ['True', 'False']
        },
        data: [
          [
            `Superlative degree of adverb means that the object is superior (on top).
            Comparative degree talks about comparison between two words.`,
  
            `A positive degree talks about positive qualities only.
            All adverbs of degree have the same meaning.`
          ],
          [
            ` Adverb of degree answers the question "how much."
            'Very' is an adverb of degree.`,
  
            `Adverb of degree answers the question "how."
            'Extremely' is an adverb of manner.`
          ]
        ]
      },
      {
        id: 'fill-up',
        label: 'Fill up with options',
        type: 'fillup',
        commonData: {
          title: `Tap on each blank for options.`
        },
        data: [
`I *really (very)* enjoyed the ride.
She *never (so)* completes her homework on time.
He *almost (utmost)* gave up.
Richa danced *extremely (politely)* well on the stage.
That book is *very (never)* nice.`,

`You *hardly (smartly)* tried.
He is walking *too (much)* slowly.
She has *almost (utmosst)* finished her work.
You are running fast *enough (much)*.
You are walking *very (much)* slowly.`
        ]
      },
      {
        type: 'selectWord',
        label: 'Select the Word',
        id: 'select-word',
        commonData: {
        title: 'Tap on the adverb of degree in each sentence.'
            },
            data: [
`The food was *extremely* hot.
The book is *quite* interesting.
She was *just* playing.
Reena is *almost* done.
That boy was *very* smart.`,

`My bag isn't big *enough*.
Can I eat the chocolate *too*?
She worked *quickly*.
I *almost* stumbled on the rock.
She reached on the top *so* quickly.`
            ]
          }
        ]
      };
