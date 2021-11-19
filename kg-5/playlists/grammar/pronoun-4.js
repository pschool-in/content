export default {
    id: 'pronoun-4',
    label: 'Pronoun-4',
    pdf: '',
    list: [
    {
    label: 'Reflexive Pronoun',
    type: 'passage',
    id: 'reflexive-pronoun-reading',
    data: {
    title: 'Reflexive Pronounoun',
    text: `The words ending in -self(singular) and -selves (plural) that are used when the subject and the object of the sentence are the same are called reflexive pronouns. They tell us the doer and the receiver of the action is the same person.
In simple terms, reflexive pronouns tell us that someone is doing something on his/her own.
Here in this sentence - she(doer) made herself(receiver) a cup of tea, the reflexive pronoun herself refers back to she. That means a person who does the action and receives it is the same.
Examples of reflexive pronouns in singular and plural forms are:
Singular: yourself, himself, herself, itself, myself
Plural: yourselves, ourselves(we), themselves(they)
Sentence based examples of reflexive pronouns:
1. She bought herself a new dress.
2. They are doing the homework by themselves.
3. Don't hurt yourselves while playing.
4. Rekha cleaned her room by herself.
5. He went to the market byhimself.`
        }
      },
      {
        label: 'Identify ',
        id: 'drag-and-drop',
        type: 'group',
        data: {
        title:
            'Drag and drop the reflexive and non-reflexive pronouns in the appropriate boxes.',
        types: [
            {
              name: 'Reflexive pronoun',
              text: 'myself, herself, itself, himself, yourselves, themselves'
            },
            {
              name: 'Non-reflexive pronoun',
              text: 'he, mine, she, her, them, they, me, him'
            }
          ]
        }
      },
      {
        id: 'match',
        label: 'Match the following',
        type: 'match',
        commonData: {
            title: 'Match the pronouns to the reflexive pronouns'
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
me, myself`,
             ]
           },
           {
            type: 'selectWord',
            label: 'Identify-Reflexive pronoun',
            id: 'select-word',
            commonData: {
            title: 'Select the reflexive pronoun in the sentence.'
                          },
            data: [
`I will do the job *myself*.
Did you write the poem *yourself*?
I carried the heavy box by *myself*.
My brother and I looked at *ourselves* in the mirror.
I introduced *myself* to my neighbours.
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
Lets complete this work *ourselves*.
The AC turned-off *itself*.
We will build the tree house by *ourselves*.`,

`I cannot do it *myself*.
Rudra can paint the picture *himself* because he is good at painting.
Suhaani, did you make the kheer *yourself*?
Manisha made a video about gardening *herself*.
We enjoyed *ourselves* very much at the party.
She poured *herself* some milk.
I dressed *myself* for the party.
I made lunch all by *myself*.
She hurt *herself* while stitching the frok.
Did you learn French *yourself*?`,
           ]
          },
          {
            id: 'fill-up',
            label: 'Fill Up',
            type: 'fillup',
            commonData: {
            title: `Click on the blanks and choose the correct reflexive pronoun.`
            },
            data: [
`She never talks about *herself(itself)*. 
He did all the paintings by *himself(themselves)*.
The dog hurt *itself(himself)*. 
Shaanvi sang quietly to *herself(itself)*.
Shiva hurt *himself(ourselves)* while climbing the ladder.
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
We cooked biryani *ourselves (themselves)* for the guests.`,
            ]
          },
      {
        label: 'True or False',
        id: 'tf',
        type: 'classifySentence',
        data: {
        title: 'Identify whether the sentence has the correct reflexive pronoun.',
        types: [
        {
            name: 'True',
            text: `Why don't you cut your nails yourself?
            Look at yourself in the mirror.
            Pooja and Indu! Please behave yourselves.`
        },
        {
            name: 'False',
            text: `Grandma cut himself.
            Why don't you clean the balcony ourself?`
        }
        ]
      }
    },
      {
        label: 'Drag and Drop',
        type: 'matchByDragDrop',
        id: 'drag-and-drop-1',
        commonData: {
        isPractice: false,
        title: 'Pick up the correct word and place it appropriately in the sentence.',
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
      }
    ]
  };
        

