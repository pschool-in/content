export default {
  id: 'pronoun-4',
  label: 'Reflexive and Emphatic Pronoun',
  pdf: '',
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Reflexive Pronounoun',
        text: [
          {
            type: 'html',
            text: `The words ending in <i>-self</i> and <i>-selves</i> are usually called reflexive pronouns. They tell us, the <b>doer</b> and the <b>receiver</b> of the action are the same person. Eg:`
          },
          {
            type: 'hilight',
            text: `Singular: yourself, himself, herself, itself, myself
Plural: yourselves, ourselves, themselves`
          },
          {
            type: 'html',
            text: `They are doing the homework by <b>themselves</b>.<br>
Don't hurt <b>yourselves</b> while playing.<br>
Rekha cleaned her room by <b>herself</b>.<br>
He went to the market by <b>himself</b>.`
          }
        ]
      }
    },
    {
      label: 'Reflexive Pronoun or Not ',
      id: 'drag-and-drop',
      type: 'group',
      data: {
        title: 'Drag and drop the given words in the right boxes.',
        types: [
          {
            name: 'Reflexive pronoun',
            text: 'Myself, Herself, Itself, Himself, Yourselves, Themselves'
          },
          {
            name: 'Non-reflexive pronoun',
            text: 'He, Mine, She, Her, Them, They, Me, Him'
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      commonData: {
        title: 'Match the pronouns with the correct reflexive pronouns.'
      },
      data: [
        `I, myself
she, herself
we, ourselves
you, yourself
it, itself`,

        `them, themselves
us, ourselves
her, herself
him, himself
me, myself`
      ]
    },
    {
      type: 'selectWord',
      label: 'Select the reflexive pronoun',
      id: 'select-word',
      commonData: {
        title: 'Select the reflexive pronoun in the sentence.'
      },
      data: [
        `I will do the job *myself*.
Did you write the poem *yourself*?
I carried the heavy box by *myself*.
My brother and I looked at *ourselves* in the mirror.
I introduced *myself* to my neighbors.
Let's clean the room *ourselves*.
Can you tell me about *yourself*?
Amrita baked this cake *herself*.
We bought *ourselves* a new car.
I went to the bank by *myself*.`,

        `My sister dressed *herself* without any help.
Amit hurt *himself* while playing.
Meena and Mahesh did the project all by *themselves*.
She went to the park by *herself*.
I love *myself*.
Harish lives in a big house by *himself*.
I don't like eating by *myself*.
Let's complete this work *ourselves*.
The AC is turned off by *itself*.
We will build the treehouse by *ourselves*.`,

        `I cannot do it *myself*.
Rudra can paint the picture *himself* because he is good at painting.
Suhaani, did you make the kheer *yourself*?
Manisha made a video about gardening *herself*.
We enjoyed *ourselves* very much at the party.
She poured *herself* some milk.
I dressed *myself* for the party.
I made lunch all by *myself*.
She hurt *herself* while using the fork.
Did you learn French *yourself*?`
      ]
    },
    {
      label: 'Emphatic Pronoun',
      type: 'passage',
      id: 'notes-2',
      data: {
        title: 'Emphatic Pronouns',
        text: [
          `They are used to put emphasis on the subject. So usually they follow the subject.
This is very similar to reflexive pronoun. But the difference is, if we remove the emphatic pronoun, the sentence will still be meaningful.`,
          {
            type: 'html',
            text: `She <b>herself</b> cooked the food.<br>
I <b>myself</b> saw him.<br>
He <b>himself</b> cut the cake.`
          }
        ]
      }
    },
    {
      id: 'fill-up',
      label: 'Fill Up',
      type: 'fillup',
      commonData: {
        title: `Click on the blanks and choose the correct reflexive pronoun.`
      },
      data: [
        `She never talks about *herself (itself)*.
He did all the paintings by *himself (themselves)*.
The dog hurt *itself (himself)*.
Shaanvi sang quietly to *herself (itself)*.
Shiva hurt *himself (ourselves)* while climbing the ladder.
Rajeev was proud of *himself (herself)*.
He went trekking by *himself (itself)*.
Subrat and Shiv cleaned the room by *themselves (ourselves)*.
I carried the rice bag *myself (itself)*.
Did you clean the dishes *yourself (themselves)*?`,

        `The children drew by *themselves(ourselves)*.
I repaired my car *myself(itself)*.
I planted the roses *myself(herself)*.
He made the breakfast *himself(themselves)*.
Aditya and Teja can take care of *themselves(ourselves)*.
You must take care of *yourself (herself)*.
She bought *herself (himself)* a new dress.
They are doing the homework *themselves (ourselves)*.
Don't hurt *yourself (itself)* while cooking.
We cooked biryani *ourselves (themselves)* for the guests.`
      ]
    },
    {
      label: 'Correct Usage',
      id: 'tf',
      type: 'classifySentence',
      commonData: {
        title: 'Check whether the below sentence is correct.',
        types: ['Correct', 'Incorrect']
      },
      data: [
        [
          `Why don't you cut your nails yourself?
Look at yourself in the mirror.
Pooja and Indu! Please behave yourselves.
Can you do your homework by yourself?
I can walk to the school by myself.`,

          `Grandma cut himself.
Why don't you clean the balcony ourself?
Dad can cook food by herself.
I can walk to the school by himself.
Can you do your homework by ourself?`
        ],
        [
          `Dad can cook food by himself.
They do their projects by themselves.
We can make this model by ourselves.
You ride your bike by yourself.`,

          `They do their projects by ourselves.
We can make this model by myselves.
You ride your bike by herself.`
        ]
      ]
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      commonData: {
        isPractice: false,
        title:
          'Fill in the blanks by dragging the options given at the bottom.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        }
      },
      data: [
        `He ordered *himself* a sandwich.
She bought *herself* a watch.
We found *ourselves* lost in the street.
Do your homework *yourself*.
I made this cake *myself*!`,

        `The children ate their snacks by *themselves*.
I drove the car *myself*.
We made chocolate cookies *ourselves*.
Lohit finished the project by *himself*.
The dog let *itself* into our room.`
      ]
    },
    {
      type: 'selectWord',
      label: 'Identify the Pronouns',
      id: 'multi-select-pronoun-4',
      commonData: {
        title: 'Select all the pronouns present in the below text.',
        multiSelect: true
      },
      data: [
        `*This* book is *mine*. *I* read the whole book all by *myself*. *I* like *this* book.
*That* is my father. *This* car is *his*. *I* washed *it* all by *myself*.
My dad gave *me* *this* map. *He* told *me* *it* was *his*. *I* need to find directions by *myself*.
*He* wanted to impress the teacher. So, *he* baked the cake by *himself*. The recipe was *mine*.
*Those* bags are *hers*. *She* goes shopping all by *herself*.`,

        `*We* don't like to go out for dinner. *We* cook dinner by *ourselves*.
*This* brush is *mine*. *I* stare at *myself* in the mirror while brushing.
*This* garage is *mine*. *Me* and my dad painted *it* *ourselves*.
The children love holidays. *They* buy all the new things for *themselves*. *That* time is *their* favourite.
Prateek is very lazy. *He* copied *his* friend's project instead of doing *it* *himself*.`
      ]
    }
  ]
};
