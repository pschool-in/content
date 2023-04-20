export default {
  id: 'conjunction-7',
  label: 'Conjunctions',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'conjunction',
      data: {
        title: 'Conjunctions',
        text: [
          `Conjunctions are used to join words, two sentences or two clauses. `,
          {
            type: 'html',
            text: `Some commonly used conjunction are: <b>and</b>, <b>but</b>, <b>or</b>, <b>for</b>, <b>so</b>, etc.`
          },
          `A subordinating conjunction is a word used to combine an independent clause and a dependent clause in a sentence. They help in forming complex sentences.`,
          {
            type: 'html',
            text: `Some subordinating conjunctions are <b>as long as</b>, <b>because</b>, <b>even if</b>, <b>if</b>, <b>unless</b>, <b>before</b>, <b>since</b>, <b>though</b>, etc.<br>
  Examples: <b>Unless</b> you submit all the supporting documents, your application will not be processed.<br>
  I was not able to go to the hospital <b>because</b> it was raining heavily.<br>
  <b>When</b> I reached the railway station, I found out that the train had already left.<br>
  <b>Although</b> we had parked in the parking lot, the traffic police issued us a parking ticket.<br>
  It is better to keep everything packed <b>as</b> you are not sure when you would be asked to come to Bangalore.`
          },
          `# Rules
  1. Subordinating conjunctions can be used at the beginning or middle of a sentence according to the position of the dependent clause.
  2. When the subordinating conjunction appears at the beginning of a complex sentence, a comma is used after the dependent clause.
  3. When a subordinating conjunction is used in the middle of a sentence, there is no need for a comma to be used.
  4. A dependent clause with a subordinating conjunction cannot stand by itself as it does not make sense.`
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-sub-conj',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What is a subordinating conjunction used for in a sentence?`,
            options: `To combine an independent clause and a dependent clause, To separate two independent clauses, To modify a noun or pronoun`
          },
          {
            qText: `Which of the following is NOT an example of a subordinating conjunction?`,
            options: `And, Because, Unless, Before`
          },
          {
            qText: `In which position of a sentence can subordinating conjunctions be used?`,
            options: `Both at the beginning and in the middle of a sentence, Only at the beginning of a sentence, Only in the middle of a sentence`
          },
          {
            qText: `When a subordinating conjunction appears at the beginning of a complex sentence, what punctuation mark should be used?`,
            options: `A comma, A period, A question mark`
          },
          {
            qText: `Can a dependent clause with a subordinating conjunction stand by itself as a sentence?`,
            options: `never, always, Only if it is a long and complex clause, Only if it is a short and simple clause`
          }
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Subordinating Conjunction',
      id: 'select-sub',
      lockAfter: 1,
      commonData: {
        title: 'Identify the subordinating conjunction.',
        multiSelect: true
      },
      data: [
        `I will drink the milk *after* my brother drinks it.
  *If* you work hard you will pass.
  *Though* he is poor, he is honest.
  *If only*, I would be a Prime Minister.
  We eat *in order that* we may live.
  You will not pass *unless* you study.
  She will not stop crying *unless* she meets her father.
  She walked faster *in order that* she could get the bus.`,

        `*Though* she was intelligent, she failed.
  Wait here *till* I come.
  I was reading *while* eating breakfast.
  She told me *that* she was a poet.
  They know *that* you can be handy.
  She was talking on the phone *while* crossing the road.`,

        `*Once* she was in England, she became arrogant.
  I drink tea *once* a day.
  *As* I left my home, I found a purse at the door.
  He talks to me *as if* he were my boss.
  She behaves *as if* she were a dictator.
  He practiced for the exams *till* late.
  *Although* they are good at basketball, they made mistakes.`,

        `You could go and play *after* you have finished your homework.
  *Now that* India is in the semifinal, we are celebrating.
  Do not go *until* I come.
  I know the time *when* she was born.
  I can give you this book *on condition that* you will keep it safe.`,

        `You may go on leave *provided* the project is finished on time.
  They are not ready to pay *until* they get the house.
  He showed anger *as though* he was the victim of it.
  *Whenever* I went to meet him, he walked past me.`,

        `I will eat a roti *because* I am hungry.
  I would live in Delhi *rather than* in London.
  She cared for the baby *as though* she were her mother.
  *As long as* electricity is supplied, the machine will run.`
      ]
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fillup-drag-sub',
      lockAfter: 1,
      commonData: {
        title: 'Fill in the blanks with the most appropriate conjunction.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `*As soon as* Deepa reached home, she called to let me know.
  *If* you do not find it interesting, it is okay.
  *Unless* she finishes the work given, she cannot go home.
  *While* I was walking across the street, I saw that the shops were closed.`,

        `*Even though* she had paid all the bills, the system showed that she had some due payments.
  *Before* you make a decision, just take a second opinion.
  *Though* he was tired, he agreed to help me out.`,

        `She knew that there was a nationwide lockdown today only *after* I told her about it.
  *When* you are done with the work, let me know.
  I think this place will not feel the same ever again *since* they demolished the football gallery.`,

        `I will eat a pastry *because* I am hungry.
  I would live in Delhi *rather than* in London.
  She cared for the baby *as though* she were her mother`,

        `You could go and play *after* you have finished your homework.
  *As long as* electricity is supplied, the machine will run.        
  I drink tea *once* a day.`
      ]
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage-coord',
      data: {
        title: 'Coordinating Conjunctions',
        text: [
          `The coordinating conjunctions are used to connect words, phrases and clauses of equal ranks. The coordinating conjunctions include: and, but, or, nor, for, yet, so, etc.
  1. And: It is used to combine two words, sentences or ideas.`,
          {
            type: 'html',
            text: `<b>Examples</b> - I like to drink tea <b>and</b> coffee.`
          },
          `2. But: It is used to connect to contrast ideas.`,
          {
            type: 'html',
            text: `<b>Examples</b> - I love dancing, <b>but</b> she likes singing.`
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
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-conj',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `Which type of conjunction is used to connect words, phrases, and clauses of equal ranks?`,
            options: `Coordinating conjunctions, Subordinating conjunctions, Correlative conjunctions, Conjunctive adverbs`
          },
          {
            qText: `Which coordinating conjunction is used to combine two contrasting ideas?`,
            options: `But, And, Or, So`
          },
          {
            qText: `Which coordinating conjunction is used to express a choice between two things?`,
            options: `Or, And, But, So`
          },
          {
            qText: `Which coordinating conjunction is used to combine two words or ideas, both of which are to be negated?`,
            options: `Nor, But, Or, So`
          },
          {
            qText: `Which coordinating conjunction is used as a conjunction of purpose or reason?`,
            options: `For, Or, But, And`
          },
          {
            qText: `Which coordinating conjunction is used to express that something has not happened, but you expect it to happen?`,
            options: `Yet, But, Or, So`
          },
          {
            qText: `Which coordinating conjunction is used as a conjunction of result or consequence?`,
            options: `So, Or, But, And`
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fillup-drag-conj',
      lockAfter: 1,
      commonData: {
        title: 'Drag and drop the words at appropriate places',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `Joshua is intelligent *and* smart.
  Jake plays baseball well, *yet* his favorite sport is football.
  Jay is rich *but* stingy.
  Today is my birthday, *so* I want a new dress.`,

        `Do you want admission to Poland, *or* do you want to study in Canada?
  Sunoo *and* Jungwon planned to have lunch at the convenience store.
  My sister did not collect the clothes from the dry cleaner *nor* did she buy the items on the grocery list.`,

        `Niki had a lot of sweets to an extent that he could become sick, *yet* he says he can have more.
  The teacher did not ask for Mahira *but* Mahir.
  I met my friend at Old Street, *and* from there, we went to the lighthouse together.`,

        `I want to go to the beach, *but* it looks like it might rain.
  She wanted to buy the blue dress, *so* she asked the sales associate for a smaller size.
  He enjoys hiking, camping, *and* fishing in the mountains.`,

        `She studied hard for the exam, *yet* she still didn't do well.
  We can go to the park *or* the museum for our field trip.
  The concert tickets are sold out, *and* we can't find any online either.`
      ]
    },
    {
      id: 'fillup-cord',
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
  Meera reached home late from work, *yet* she looked very energetic.
  Do you like black olives *or* green olives?
  Jay is sure that he locked the door, *but* he cannot remember if he took the keys.`,

        `Vernon neither replied to my message *nor* called me back.
  I am very tired *for* I have been working all day.
  He not only bought us a drink *but* also gave us a lift in his car.
  They not only looted the shop *but* also set fire to it.
  Ritwik owns both a car *and* a motorbike.`,

        `Meenu was ill *so* he did not go to school.
  You should pay your fee before the due date *or* else you will have to pay the fine.
  There is no demand *for* this kind of mobile, *so* we can't place an order now.
  He was angry, *yet* he said nothing.
  We can either walk *or* take a bus.`,

        `I want to go to the beach, *and* also visit the museum.
  She likes to hike, *but* she hates camping.
  You can have cake *or* ice cream for dessert.
  I neither like *nor* dislike spicy food.
  He is studying hard, *for* he wants to get into a good college.`,

        `It was raining, *so* we stayed inside all day.
  She is smart *yet* humble.
  I need to go grocery shopping, *and* have to do laundry too.
  He didn't study for the exam, *so* he failed.
  She doesn't have a lot of experience, *yet* she's very confident.`
      ]
    }
  ]
};
