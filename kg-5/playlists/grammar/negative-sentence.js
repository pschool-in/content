export default {
  label: 'Negative Sentence',
  id: 'negative-sentence',
  lockAfter: 3,
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Negative and Positive sentences',
        text: [
          `A negative sentence usually has any of the below words in it.`,
          {
            type: 'hilight',
            text: "not, never, no, no one, nobody, none, isn't, can't, won't"
          },
          `If a sentence does not have any of the above words, then it is a positive sentence. A sentence can be created in two ways. For example, the below two sentences have the same meaning.`,
          {
            type: 'hilight',
            text: `The jug has no water.
The jug is empty.`
          },
          `The first sentence is known as a negative sentence and the second sentence is known as a positive sentence.
# some vs any
We use 'some' in positive statements and 'any' in negative statements.
We use 'some' when we request for something or offer something.`,
          {
            type: 'hilight',
            text: `Can I borrow some money?
Would you like some tea?`
          },
          `We use 'any' when asking a question.`,
          { type: 'hilight', text: 'Do you have any pens?' },
          `# Contractions
In everyday speech and informal writing we use contractions.
"are not" becomes "aren't"
"is not" becomes "isn't"
"I am" becomes "I'm"
"We are" becomes "We're"`
        ]
      }
    },
    {
      label: 'Classify Positive and Negative sentences',
      type: 'classifySentence',

      data: {
        title:
          'Classify the below sentences as Positive or Negative sentences.',
        types: [
          {
            name: 'Positive',
            text: `John is running.
We should always speak the truth.
Everyone is present in the garden.
The fridge is empty.
It is very cloudy.`
          },
          {
            name: 'Negative',
            text: `Gopal is not walking.
We should never tell lies.
There is no one in the house.
There is nothing in the fridge.
It isn't sunny.`
          }
        ]
      },
      id: 'classify-1'
    },

    {
      label: 'Negative word',
      type: 'group',
      id: 'classify-2',
      data: {
        title: 'Classify the below words as negative and non negative.',
        types: [
          {
            name: 'Negative',
            text: "not, never, no, nobody, none, isn't, can't, won't"
          },
          {
            name: 'Non-negative',
            text: 'done, wait, lot, bad, quick, lazy'
          }
        ]
      }
    },
    {
      id: 'fillup',
      label: 'any vs some',
      type: 'fillup',
      data: {
        title: `Fill in the blanks with 'any' or 'some'`,
        text: `He hasn't got *any* friends.
There is *some* milk in the glass.
There aren't *any* apples in the basket.
Do you have *any* brothers?
There is *some* juice in the fridge.
I want to wash my hair. Is there *any* shampoo?
He has *some* money in his wallet.
Today, we don't have *any* homework.
I have *some* fruits.
She doesn't have *any* brothers.`,
        options: 'any, some'
      }
    },
    {
      id: 'fillup-2',
      label: 'any vs some - 2',
      type: 'fillup',
      data: {
        title: `Fill in the blanks with 'any' or 'some'`,
        text: `There are *some* letters on the floor.
Are there *any* computers in the library?
There are *some* ducks in the pond.
There weren't *any* chairs in the poor man's hut.
There are *some* books in the cupboard.
Add *some* sugar to the milk.
Can I have *some* water, please?
There isn't *any* water in the bottle.
Sorry, there aren't *any* seats left on the bus.
There are *some* people waiting for the bus.
Are there *any* messages for me?`,
        options: 'any, some'
      }
    },
    {
      label: 'Equivalent sentence',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Pick the sentence which has the same meaning',
        questions: [
          {
            qText: 'John is running.',
            options: `John is not walking.
John is not sleeping.
John is not eating.`
          },
          {
            qText: 'We should never tell lies.',
            options: `We should always speak the truth.
We should always keep our mouths shut.
We should always tell lies.`
          },
          {
            qText: 'The glass is empty.',
            options: `There is no water in the glass.
There is no glass on the table.
The glass is not empty.`
          },
          {
            qText: 'It is not raining heavily.',
            options: `It is drizzling.
It is snowing.
It is night.`
          },
          {
            qText: "Today, we don't have any homework.",
            options: `Today, we are free from homework.
Today, we have some homework.
Today, we have school.`
          }
        ]
      }
    },
    {
      label: 'Classify',
      type: 'classifySentence',

      data: {
        title: 'Classify the below sentences as Correct or Incorrect.',
        types: [
          {
            name: 'Correct',
            text: `I have nothing to say.
Do you have some money?
Do you have any money?
Can I have some water?
He's not going anywhere.
I won't bake any cake.`
          },
          {
            name: 'Incorrect',
            text: `He's not going nowhere.
I won't bake no cake.
I have anything to say.
Can I have any water?`
          }
        ]
      },
      id: 'classify-3'
    },
    {
      id: 'negative-contraction',
      label: 'Negative Contraction',
      type: 'fillup',
      data: {
        title: 'Click on the blanks and pick the correct negative contraction.',
        text: `We *aren't* teachers.
He *isn't* a doctor.
I *'m not* angry.
It *isn't* a cat.
She *isn't* happy.
You *aren't* a doctor.
There *aren't*  any seats left.
We *aren't* going to the party.`,
        options: "aren't, isn't, 'm not"
      }
    }
  ]
};
