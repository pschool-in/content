export default {
  id: 'conjunction-8',
  label: 'Conjunctions',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Conjunctions',
        text: [
          `# Conjunctions
Conjunctions are used to join words, two sentences or two clauses. `,
          {
            type: 'html',
            text: `Some commonly used conjunction are: <b>and</b>, <b>but</b>, <b>or</b>, <b>for</b>, <b>so</b>, etc.`
          },
          `# Coordinating Conjunctions
The coordinating conjunctions are used to connect words, phrases and clauses of equal ranks. The coordinating conjunctions include: and, but, or, nor, for, yet, so, etc.
1. And: It is used to combine two words, sentences or ideas.`,
          {
            type: 'html',
            text: `<b>Examples</b> - I like to drink tea <b>and</b> coffee.`
          },
          `2. But: It is used to connect to contrast ideas.`,
          {
            type: 'html',
            text: `<b>Examples</b> - I am dancing, <b>but</b> she is singing.`
          },
          `3. Or: It is used to express a choice between two things.`,
          {
            type: 'html',
            text: `<b>Examples</b> - You can eat it with a fork <b>or</b> a spoon.`
          },
          `4. Nor: It is used to combine two words or ideas both of which are to be negated.`,
          {
            type: 'html',
            text: `<b>Examples</b> -  Roy is drinking neither tea <b>nor</b> coffee.`
          },
          `6. Yet: It is used to express that something has not happened but you expect it to happen.`,
          {
            type: 'html',
            text: `<b>Examples</b> - I am not very comfortable doing it <b>yet</b> I will try doing it.`
          },
          `7. So: It is used as a conjunction of result or consequence.`,
          {
            type: 'html',
            text: `<b>Examples</b> - All the rooms in the hotel were occupied, <b>so</b> I had to shift here.`
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fillup-drag',
      lockAfter: 1,
      commonData: {
        title: 'Drag and drop the words at appropriate places',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `Joshua is intelligent *and* Jun is stupid.
Jake plays baseball well, *yet* his favorite sport is football.
Jay is rich *but* stingy.
Today is my birthday, *so* I want a new dress.`,

        `Do you want admission to Poland, *or* do you want to study in Canada?
Sunoo *and* Jungwon planned to have lunch at the convineince store.
My sister did not collect the clothes from the dry cleaner *nor* did she buy the items on the grocery list.`,

        `Niki had a lot of sweets to an extent that he could become sick, *yet* he says he can have more.
The teacher did not ask for Mahira *but* Mahir.
I met my friend at old street, *and* from there, we went to the light house together.`
      ]
    },
    {
      id: 'fillup-1',
      label: 'Coordinating Conjunctions',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Fill in the blanks using an appropriate coordinating conjunction.'
      },
      lockAfter: 2,
      data: [
        `Me *and* my friend Alka had dinner at the Ramees Hotel, *for* it was the last day before she moved to Dubai.
See to it that you leave home early *so* you can reach the exam center in time.
Meera reached home late, *yet* she looked very energetic.
Do you like black olives *or* green olives?
Jay is sure that he locked the door, *but* he cannot remember if he took the keys.`,

        `Vernon neither replied to my message *nor* called me back.
I am very tired *for* I have been working all day.
He not only bought us a drink *but* also gave us a lift in his car.
They not only looted the shop *but* also set fire to it.
Ritwik owns both a car *and* a motorbike.`,

        `Meenu was ill *so* he did not go to school.
You should pay your fee before the due date *or* else you will have to pay the fine.
There is no demand *for* this kind of mobiles, *so* we can't place an order now.
He was angry, *yet* he said nothing.
We can either walk *or* take a bus.`
      ]
    }
  ]
};
