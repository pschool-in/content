export default {
  label: 'Sentence Pattern',
  id: 'sentence-pattern',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Notes',
      data: {
        title: 'Sentence Pattern',
        text: [
          `We use words to construct sentences. All meaningful sentences have a pattern. It
is mainly made up of five components.`,
          {
            type: 'html',
            text: `Subject (S)<br>
Verb (V)<br>
Object (O)<br>
Complement (C)<br>
Adverbial (A)`
          },
          `The most simple sentence has a subject and verb (S+V) component.`,
          {
            type: 'html',
            text: `Baby is crying.<br>
Dogs bark.`
          },
          `A complement (C) is used to complete a sentence. Check the highlighted words in
the below examples.`,
          {
            type: 'html',
            text: `John is <b>tall</b>.<br>
Ram is <b>a pilot</b>.`
          },
          `An object (O) is the receiver of an action.`,
          {
            type: 'html',
            text: `I read <b>newspaper</b>.<br>
Sarah ate <b>cake</b>.`
          },
          `In some sentences, there can be two objects: Direct (DO) and Indirect (IO).`,
          {
            type: 'html',
            text: `They sent me a gift.<br>
me - IO, gift - DO<br><br>
Can you tell our friends the story.<br>
friends - IO, story - DO`
          },
          `An adverbial (A) component gives more meaning to the verb (V) component.`,
          {
            type: 'html',
            text: `He was <b>at school</b>.<br>
She got <b>into the car</b>.`
          }
        ]
      }
    },
    {
      label: 'Classify Component',
      type: 'classifySentence',
      id: 'classify',
      commonData: {
        title: `Classify the underlined word as 'subject', 'verb' or 'object'.`,
        types: ['Subject', 'Verb', 'Object']
      },
      data: [
        [
          `*Ravi* is reading.
*She* is singing.
*We* are eating.
*Birds* are flying.`,

          `The bell *is ringing*.
They *are working*.
Sheela *is listening*.`,

          `Radha makes *a doll*.
Hema eats *banana*.
The man rides *the horse*.`
        ],
        [
          `*The boy* reads a magazine.
*Many students* watched the play.
*She* prayed for everyone's health.`,

          `The man *rides* the horse.
She *sings* well.
We *received* the parcel.`,

          `They completed *their project*.
I  want *one of these books*.
The police arrested *the thief*.`
        ]
      ]
    },
    {
      label: 'Classify Pattern',
      type: 'classifySentence',
      id: 'classify2',
      commonData: {
        title: 'Classify the sentence pattern.',
        types: ['S + V', 'S + V + O', 'S + V + C']
      },
      data: [
        [
          `Birds are flying.
The child is playing.
Ravi is reading.`,
          `The boy reads a magazine.
Many students watched the play.
She prayed for everyone's health.`,
          `They are players.
Her father is a doctor.
I am an Indian.
The class became noisy.`
        ],
        [
          `They are working.
The bell is ringing.
We are still planning.`,

          `The man rides the horse.
We received the parcel.
They did a lot of work.`,

          `My uncle is a farmer.
She sings well.
The milk is getting cold.
They worked hard.`
        ]
      ]
    },
    {
      label: 'Classify Pattern',
      type: 'classifySentence',
      id: 'classify3',
      commonData: {
        title: 'Classify the sentence pattern.',
        types: ['S+V+O+C', 'S+V+O+A', 'S+V+IO+DO']
      },
      data: [
        [
          `They made me captain.
The baby made everyone happy.
Hema learned music last year.
The long ship journey made the people sick.`,

          `The boy kicked the ball with force.
He wrote the letter from Chennai.
They want money immediately.`,

          `My dad presented me a watch.
The doctor gave her medicine.
The child gave me a hug.`
        ],
        [
          `Rosy got her shoes wet.
He painted the wall white.
He made his son a doctor`,

          `They played the match yesterday.
Sathya invited the guests last week.
The manager threw the old chair away.`,

          `The judge sent the thief to the prison.
The teacher gave me some candies.
Grandma told me a story.
My uncle showed us the city.`
        ]
      ]
    }
  ]
};
