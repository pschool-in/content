export default {
  id: 'modal',
  label: 'Modals',
  pdf: '',
  list: [
    {
      label: 'Modals-1',
      type: 'passage',
      id: 'modals-1-reading',
      data: {
        title: 'Modals-1',
        text: `A modal is a verb that combines with another verb. It indicates mood or tense. For example, 'can' and 'may' are modals. They can be used in a sentence as;
1. I can write a letter without making any mistakes.
2. He can run 100 meters in one go.
3. I may be a bit late on Saturday.
4. We may have a holiday on Tuesday.`
      }
    },
      {
    id: 'fillup',
    label: 'Fill up with options',
    type: 'fillup',
    commonData: {
      title: `Tap on each blank for options.`
    },
    data: [
`I *can (may)* swim across the river.
It *may (can)* rain tomorrow.
*Can (May)* you lift this box?
*May (Can)* I come in?
He *can (may)* work late.
He *may (can)* be at home.`,

`I *cannot (cann't)* go to the party.
She *may not (mayn't)* be able to come.
We *cannot (cann't)* dance without the teacher's permission.
Books *may not (mayn't)* be available at the store.`,

`They *can (may)* speak English.
He *cannot (cann't)* ride a bike.
*May (Can)* you have a joyful weekend.
How *may (May)* I help you?
We *may not (cannot)* have to leave.`,
      
`*May (Can)* I come in?
*May (Can)* God bess you!
Susan *may (can)* be upset because she fell down.
I *can (may)* dance well.
He *can (may)* write 50 words in a minute.`,
     
`She *can (may)* eat 2 apples at a time.
I *may (can)* be absent on Tuesday.
*May (Can)* I borrow your pen?
He *can (may)* keep this phone in his pocket.
I *can (may)* not eat almonds because I'm allergic.`,
    ]
  },
    {
      label: 'Select the word',
      type: 'selectWord',
      id: 'select-word-1',
      commonData: {
        title: `Tap on the modal verb in the below sentences.`,
      },
      data : [
`I *can* speak 3 different languages.
*May* I ask what you're doing?
I told my sister that she *cannot* sleep without brushing her teeth.
I *may not* be able to come to the party.`,
      
`I *cannot* go to the party.
She *may* not come.
He *can* swim very fast.
You *may* came first if you try hard.
My parents *may* not come to the meeting.`,
      
`I *can* ride my bicycle without support wheels.
He *may* be angry with me.
My dad *may* give me a surprise.
My mom *can* cook chinese food.
All of my friends *can* ride bicycles.`,
      
`Reena *can* sing very well.
*May* I borrow your water bottle?
We *may* go to Udaipur this summer.
I *can* sleep in just 5 minutes.
My mom *may* tell me stories.`,
      
`He *can* be very annoying sometimes.
Raj *may* take a half day leave today.
Mihir *can* stand on one leg for 10 minutes.
Boys *cannot* have long hair in school.
Girls *may* form a separate team.`,
      ]
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
        [`Shall, Must, Could, Might`, `Have, Am, Are, Is`],
        [`Can, May, Will, Would`, `If, She, They, It`]
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
You *must* improve your spellings.`,
      ]
    },
    {
      id: 'jumbled-words',
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
We *ought* to practice more.`,
        
`I *might* fall asleep in maths class.
There *shall* be showers of blessings.
We *should* respect our elders.
*Would* you like to watch a movie?
*May* I have your attention, please?`,
        
`
The girls *will* participate in racing.
He *can* run 200 meters in just 2 minutes.
We *shall* go to play in the evening.
We *should* go to school everday.
*Shall* I open the door?`,
        
`I *can* play cricket well.
*May* I go to the bathroom?
You *must* study today.
She *will* not come.
I *ought* to go out today.`
      ]
    }
  ]
};
