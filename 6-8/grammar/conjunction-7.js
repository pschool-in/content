export default {
  id: 'conjunction-7',
  label: 'Conjunctions',
  lockAfter: 3,
  list: [
    {
      label: 'Subordinating Conjunctions',
      type: 'passage',
      id: 'conjunction',
      data: {
        title: 'Conjunctions',
        text: [
          `Conjunctions are used to join words, two sentences or two clauses. `,
          {
            type: 'html',
            text: `Some commonly used conjunction are: <i>and</i>, <i>but</i>, <i>or</i>, <i>for</i>, <i>so</i>, etc.`
          },
          `A subordinating conjunction is a word used to combine an independent clause and a dependent clause in a sentence. They help in forming complex sentences.`,
          {
            type: 'html',
            text: `Some subordinating conjunctions are <i>as long as</i>, <i>because</i>, <i>even if</i>, <i>if</i>, <i>unless</i>, <i>before</i>, <i>since</i>, <i>though</i><br><br>
Eg: <i>Unless</i> you submit all the supporting documents, your application will not be processed.<br>
I was not able to go to the hospital <i>because</i> it was raining heavily.<br>
<i>When</i> I reached the railway station, I found out that the train had already left.<br>
<i>Although</i> we had parked in the parking lot, the traffic police issued us a parking ticket.<br>
It is better to keep everything packed <i>as</i> you are not sure when you would be asked to come to Bangalore.`
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
            options: `*never, always, Only if it is a long and complex clause, Only if it is a short and simple clause`
          }
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Identify: Subordinating Conjunction',
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
She walked faster *in order that* she could get the bus.
*Though* she was intelligent, she failed.
Wait here *till* I come.`,

        `I was reading *while* eating breakfast.
She told me *that* she was a poet.
They know *that* you can be handy.
She was talking on the phone *while* crossing the road.
*Once* she was in England, she became arrogant.
I drink tea *once* a day.
*As* I left my home, I found a purse at the door.
He talks to me *as if* he were my boss.
She behaves *as if* she were a dictator.
He practiced for the exams *till* late.`,

        `*Although* they are good at basketball, they made mistakes.
You could go and play *after* you have finished your homework.
*Now that* India is in the semifinal, we are celebrating.
Do not go *until* I come.
I know the time *when* she was born.
I can give you this book *on condition that* you will keep it safe.
You may go on leave *provided* the project is finished on time.
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
*While* I was walking across the street, I saw that the shops were closed.
*Even though* she had paid all the bills, the system showed that she had some due payments.`,

        `*Before* you make a decision, just take a second opinion.
*Though* he was tired, he agreed to help me out.
She knew that there was a nationwide lockdown today only *after* I told her about it.
*When* you are done with the work, let me know.
I think this place will not feel the same ever again *since* they demolished the football gallery.`,

        `I will eat a pastry *because* I am hungry.
I would live in Delhi *rather than* in London.
She cared for the baby *as though* she were her mother
You could go and play *after* you have finished your homework.
*As long as* electricity is supplied, the machine will run.        
I drink tea *once* a day.`
      ]
    },
    {
      label: 'Coordinating Conjunctions',
      type: 'passage',
      id: 'passage-coord',
      data: {
        title: 'Coordinating Conjunctions',
        text: [
          `The coordinating conjunctions are used to connect words, phrases and clauses of equal ranks. The coordinating conjunctions include: and, but, or, nor, for, yet, so, etc.
1. And: It is used to combine two words, sentences or ideas.`,
          {
            type: 'html',
            text: `Eg - I like to drink tea <i>and</i> coffee.`
          },
          `2. But: It is used to connect to contrast ideas.`,
          {
            type: 'html',
            text: `Eg - I love dancing, <i>but</i> she likes singing.`
          },
          `3. Or: It is used to express a choice between two things.`,
          {
            type: 'html',
            text: `Eg - You can eat it with a fork <i>or</i> a spoon.`
          },
          `4. Nor: It is used to combine two words or ideas both of which are to be negated.`,
          {
            type: 'html',
            text: `Eg -  Roy is drinking neither tea <i>nor</i> coffee.`
          },
          `6. Yet: It is used to express that something has not happened but you expect it to happen.`,
          {
            type: 'html',
            text: `Eg - I am not very comfortable doing it <i>yet</i> I will try doing it.`
          },
          `7. So: It is used as a conjunction of result or consequence.`,
          {
            type: 'html',
            text: `Eg - All the rooms in the hotel were occupied, <i>so</i> I had to shift here.`
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
      label: 'True or False',
      type: 'classifySentence',
      id: 'true-false',
      data: {
        title: 'Classify the following sentences as True or False',
        types: [
          {
            name: 'True',
            text: `Coordinating conjunctions are used to show the relationship between two ideas. 
Subordinating conjunctions are used to show the relationship between a dependent clause and an independent clause. 
Coordinating conjunctions can be used to connect more than two clauses.
The coordinating conjunctions are: and, but, or, nor, for, yet, and so. `
          },
          {
            name: 'False',
            text: `Subordinating conjunctions can only connect one dependent clause to one independent clause. 
Subordinating conjunctions cannot be used to introduce noun clauses. 
Coordinating conjunctions always come at the beginning of a sentence. 
Subordinating conjunctions always come at the beginning of a sentence.`
          }
        ]
      }
    },
    {
      id: 'fillup-cord',
      label: 'Fillup: Coordinating Conjunctions',
      type: 'fillup',
      commonData: {
        title:
          'Fill in the blanks using an appropriate coordinating conjunction.'
      },
      lockAfter: 2,
      data: [
        `Me *and (for, but)* my friend Sita had dinner at the Ramees Hotel, *for (and, so)* it was the last day before she moved to Dubai.
See to it that you leave home early *so (for, yet)* you can reach the exam center in time.
Meera reached home late from work, *yet (so, for)* she looked very energetic.
Do you like black olives *or (but, and)* green olives?
John is sure that he locked the door, *but (nor, yet)* he cannot remember if he took the keys.
Peter neither replied to my message *nor (yet, but)* called me back.
I am very tired *for (so, and)* I have been working all day.
He not only bought us a drink *but (yet, nor)* also gave us a lift in his car.
They not only looted the shop *but (and, so)* also set fire to it.
Abdul owns both a car *and (for, nor)* a motorbike.`,

        `Ravi was ill *so (and, but)* he did not go to school.
You should pay your fee before the due date *or (so, yet)* else you will have to pay the fine.
There is no demand *for (so, nor)* this kind of mobile, *so (for, but)* we can't place an order now.
He was angry, *yet (but, and)* he said nothing.
We can either walk *or (nor, so)* take a bus.
I want to go to the beach, *and (but, yet)* also visit the museum.
She likes to hike, *but (and, so)* she hates camping.
You can have cake *or (nor, yet)* ice cream for dessert.
I neither like *nor (but, or)* dislike spicy food.
He is studying hard, *for (or, so)* he wants to get into a good college.`,

        `It was raining, *so (for, or)* we stayed inside all day.
She is smart *yet (nor, or)* humble.
I need to go grocery shopping, *and (so, but)* have to do laundry too.
He didn't study for the exam, *so (for, nor)* he failed.
She doesn't have a lot of experience, *yet (but, so)* she's very confident.
I want to go to the beach, *but (yet, so)* it looks like it might rain.
She wanted to buy the blue dress, *so (or, but)* she asked the sales associate for a smaller size.
He enjoys hiking, camping, *and (nor, but)* fishing in the mountains.
She studied hard for the exam, *yet (and, so)* she still didn't do well.
The concert tickets are sold out, *and (so, or)* we can't find any online either.`,

        `Arjun is intelligent *and (but, so)* smart.
Gopal plays baseball well, *yet (so, or)* his favorite sport is football.
Ashok is rich *but (and, so)* stingy.
Today is my birthday, *so (for, or)* I want a new dress.
Do you want admission to Poland, *or (nor, yet)* do you want to study in Canada?
Rahim *and (yet, but)* Peter planned to have lunch at the convenience store.
My sister did not collect the clothes from the dry cleaner *nor (or, so)* did she buy the items on the grocery list.
Ravi had a lot of sweets to the extent that he could become sick, *yet (but, so)* he says he can have more.
The teacher did not ask for Mahira *but (and, yet)* Mahir.
We can go to the park *or (nor, for)* the museum for our field trip.`
      ]
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fillup-drag-co',
      lockAfter: 1,
      commonData: {
        title: 'Fill in the blanks with the most appropriate conjunction.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `I want to go to the park, *but* it's raining outside.
She likes to swim, *and* he enjoys playing soccer.
I studied hard *for* the exam, yet I still failed.
You can have the cake *either* now or later.
She is *neither* tall nor short.`,

        `He is tall *and* athletic.
I can lend you some money *as long as* you pay me back.
We can go to the beach, *provided* that the weather is good.
I'll have the salad, *whereas* my friend will order samosas.
I went to the store *because* I needed to buy some groceries.`,

        `He likes to swim, *whereas* she prefers to hike.
She stayed at home *since* she wasn't feeling well.
We should leave early *in order to* avoid traffic.
I can help you with your homework *whenever* you need assistance.
He is not only intelligent *but* also kind-hearted.`,

        `I couldn't go to the party *since* I had to work late.
We can go to the movies *or* stay home and watch a film.
She didn't eat the cake, *nor* did she have any ice cream.
I will call you *when* I arrive at the airport.
He bought the book, *yet* he never read it.`,

        `We can go to the concert, *or* we can stay home and relax.
I didn't study for the test, *so* I failed.
She plays both the piano *and* the guitar.
I'll go to the gym, *provided* that I finish my work on time.
He didn't like the movie *because* it was too long.`,

        `We can go hiking *as soon as* the rain stops.
I'm tired, *but* I still need to finish my work.
She is allergic to peanuts, *yet* she accidentally ate some.
We can go to the beach, *or* we can go to the amusement park.
He can choose *either* the blue shirt or the red one.`
      ]
    }
  ]
};
