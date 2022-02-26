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
        text: [
          `A modal is a helping verb that express certain conditions such as a possibility, ncessity, and permission. Some of the common modals are:
        can, could, may, shall, should, must, may, might, ought`,
          {
            type: 'html',
            text: `She <b>can</b> swim well.<br>
<b>Could</b> I borrow your bicycle?<br>
I <b>will</b> go to my grandma's house.<br>
<b>Would</b> you like to read my speech?<br>
When <b>shall</b> we see you again?<br>
We <b>should</b> respect our elders.<br>
We <b>must</b> wake up early.<br>
She <b>might</b> like the new play.<br>
This book <b>ought</b> to be very useful.`
          }
        ]
      }
    },
    {
      id: 'jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        title: 'Connect these letters to form a modal verb',
        printTitle: 'Find the modal verbs',
        text: 'Can, Could, May, Might, Must, Shall, Should, Will, Ought, Would'
      }
    },
    {
      id: 'fillup',
      label: 'Fill up with options',
      type: 'fillup',
      commonData: {
        title: `Click on each blank for options.`
      },
      data: [
        `*May (Might)* I come in?
I *can (may)* swim. I learned it from my brother.
It *may (can)* rain tomorrow.
He *may (can)* be at home.
They *can (may)* speak English.
He *cannot (couldn't)* ride a bike.
*May (Can)* God bess you!`,

        `I *can (may)* dance well.
You *must (can)* bring your book. Otherwise we cannot do it.
I *may (can)* be absent on Tuesday.
I *cannot (may not)* dance well.
I *must (shall)* go now as my mom is waiting.
*Can (Must)* I borrow your pen?`
        /*
        `I *can (may)* swim across the river.

*Can (May)* you lift this box?
*May (Can)* I come in?
He *can (may)* work late.

I *cannot (cann't)* go to the party.
She *may not (mayn't)* be able to come.
We *cannot (cann't)* dance without the teacher's permission.
Books *may not (mayn't)* be available at the store.`,

        `
*May (Can)* you have a joyful weekend.
How *may (May)* I help you?
We *may not (cannot)* have to leave.

Susan *may (can)* be upset because she fell down.

He *can (may)* write 50 words in a minute.`,

        `She *can (may)* eat 2 apples at a time.
I *may (can)* be absent on Tuesday.
*May (Can)* I borrow your pen?
He *can (may)* keep this phone in his pocket.
I *can (may)* not eat almonds because I'm allergic.`
*/
      ]
    },
    {
      label: 'Select the word',
      type: 'selectWord',
      id: 'select-word-1',
      commonData: {
        title: `Tap on the modal verb in the below sentences.`,
        printTitle: `Read the below text and underline the modal verbs.`
      },
      data: [
        `I *can* speak three languages.
*May* I ask what you're doing?
I *may* not be able to come to the party.
I *cannot* go to the party.
She *may* not come.
He *can* swim very fast.
You *must* study today.
She *will* not come.  
You *may* came first if you try hard.
My parents *may* not come to the meeting.`,

        `The Prime Minister *will* hoist the flag.
I *would* like to have some chocolate.
*Shall* I close the door?
All the children *should* go to bed early.
*May* God bless you.
I *might* go to the party.
*May* I borrow your water bottle?
We *may* go to Udaipur this summer.
I *can* sleep in just 5 minutes.
My mom *may* tell me stories.`,

        `I *can* ride my bicycle without support wheels.
He *may* be angry with me.
My dad *may* gave me a surprise.
*Can* I borrow your notebook?
If we had more chocolates, we *could* eat more.
We *must* not steal from anyone.
We *ought* to practice more.
My mom *can* cook chinese.
All of my friends *can* ride bicycles.
Reena *can* sing very well.`,

        `I *can* play cricket well.
*May* I go to the bathroom?
I *ought* to go out today.
He *can* be very annoying sometimes.
Raj *may* take an half day leave today.
Mihir *can* stand on one leg for 10 minutes.
Boys *cannot* have long hair in school.
Girls *may* form a separate team.`,

        `I *might* fall asleep in maths class.
There *shall* be showers of blessings.
We *should* respect our elders.
*Would* you like to watch a movie?
*May* I have your attention, please?
The girls *will* participate in racing.
He *can* run 200 meters in just 2 minutes.
We *shall* go to play in the evening.
We *should* go to school everday.
*Shall* I open the door?`
      ]
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
      data: [
        `The box is heavy. You *cannot* lift it.
I *will* help you if I can.
You *shall* leave now.
I give permission. You *may* go to the party.
You *should* bring your book without fail.`,

        `*Shall* we go to the party?
*Will* you listen to me?
*May* I come in?
*Would* you like to have some coffee?`
      ]
    }
  ]
};
