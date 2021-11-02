export default {
    id: 'modals-1',
    label: 'Modals-1',
    pdf: '',
    list: [
      {
        label: 'Modals-1',
        type: 'passage',
        id: 'modals-1-reading',
        data: {
          title: 'Modals-1',
          text: `A modal is a verb that combines with another verb. It indicates mood or tense. For example, 'can' and 'may' are modals. They can be used in a sentence as;
I can write a letter without making any mistakes.
He can run 100 meters in one go.
You may a bit late on Saturday.
We may have a holiday on Tuesday.`
        }
      },
      {
      id: 'fillup',
      label: 'Fill up with options',
      type: 'fillupOptions',
      data: {
        title: 'Tap on each blank for options.',
        text: `I *can (may)* swim across the river.
It *may (can)* rain tomorrow.
*Can (May)* you lift this box?
*May (Can)* I come in?
He *can (may)* work late.
He *may (can)* be at home.`
      }
    },
    {
        label: 'Fill in the blanks (fill up by drag)',
        type: 'matchByDragDrop',
        id: 'drag-and-drop-1',
        commonData: {
          isPractice: false,
          title: 'Drag the correct option to each blank.',
          styles: {
            fontSize: '1rem',
            dashWidth: 80
          }
        },
        data: [
          `I *cannot* go to the party.
          She *may not* be able to come.
          We *cannot* dance without the teachre's permission.
          Books *may not* be available at the store.`,

`They *can* speak English.
He *cannot* ride a bike.
*May* you have a joyful weekend.
How *may* I help you?
We *may not* have to leave.`
        ]
      },
      {
        label: 'Select the word',
        type: 'selectWord',
        id: 'select-word-1',
        data: {
            title: `Tap on the modal verb in the below sentences.`,
            text: `I *can* speak 3 different languages.
            *May* I ask what you're doing?
            I told my sister that she *cannot* sleep without brushing her teeth.
            I *may not* be able to come to the party.`
        }
      },
      {
        label: 'Modals-2',
        type: 'passage',
        id: 'modals-2-reading',
        data: {
          title: 'Modals-2',
          text: `The verbs can, could, may, might, will, would, shall, should, must and ought are called modal verbs, or simply modals. A few examples are;
1. She can swim very well.
2. Could I borrow your bicycle?
3. I will go to my gramdma's place tomorrow.
4. Would you like to read my speech?
5. When shall we see you again?
6. We should respect our elders.
7. We must wake up early.
8. She might like the new play.
9. This book ought to be very useful`
        }
      },
      {
        type: 'group',
        label: 'Classify',
        id: 'classify-modal-not-a-modal',
        commonData: {
          title: 'Identify which of these verbs are modals.',
          types: ['Modal', 'Not a modal']
        },
        data: [
          [
            `Shall, Must, Could, Might`,
            `Have, Am, Are, Is`
          ],
          [
            'Can, May, Will, Would',
            'If, She, They, It'
          ]
        ]
      },
      {
        label: 'Fill in the blanks',
        type: 'matchByDragDrop',
        id: 'drag-and-drop-2',
        commonData: {
          isPractice: false,
          title: 'Drag the correct answer in each blank.',
          styles: {
            fontSize: '1rem',
            dashWidth: 80
          }
        },
        data: [
          `*Can* you lift this box?
          He said I *could* go.
          *May* I go?
          It *might* rain tomorrow.`,

`*Shall* we go to the party?
We *should* obey our parents.
I *will* sleep in the evening.
You *must* improve your spellings.`
        ]
      },
      {
        id: 'Jumbled-words',
        type: 'sequence',
        label: 'Jumbled Words',
        commonData: {
            title: 'Identify these modals.'
          },
        data: [
            'Can, Could, May, Might, Must',
    'Shall, Should, Will, Ought, Would'
              ]
        },
        {
        type: 'selectWord',
        label: 'Select Word',
        id: 'select-word-2',
        commonData: {
        title: 'Tap on the modal verbs in the below sentences.'
            },
            data: [
              `The Prime Minister *will* hoist the flag.
              I *would* like to have some chocolate.
              *Shall* I close the door?
              All the children *should* go to bed early.
              *May* God bless you.`,

`I *might* go to the party.
*Can* I borrow your notebook?
If we had more chocolates, we *could* eat more.
We *must* not steal from anyone.
We *ought* to practice more.`
            ]
          },
        ]
      };
