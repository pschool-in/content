export default {
  id: 'sentence-7',
  label: 'Sentence Analysis',
  lockAfter: 3,
  list: [
    {
      label: 'Types of Sentences',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Sentence',
        text: [
          `A sentence is a group of words that expresses a complete thought or idea. It must have a subject and a predicate.
⇒ Sentences can be classified based on their structure. There are four types of sentences: simple, compound, complex, and compound-complex.
1. Simple Sentence: A simple sentence consists of one independent clause, which has a subject and a predicate.
Eg: John is reading a book.
2. Compound Sentence: A compound sentence consists of two or more independent clauses joined together with a coordinating conjunction.
Eg: I wanted to go to the party, but I had to study for my exam.
3. Complex Sentence: A complex sentence consists of one independent clause and one or more dependent clauses. A dependent clause cannot stand alone as a sentence and depends on the independent clause to make sense.
Eg: Because it was raining, we stayed inside.
4. Compound-Complex Sentence: A compound-complex sentence consists of two or more independent clauses and one or more dependent clauses.
Eg: I wanted to go to the park, but it was raining, so I stayed home and read a book.
⇒ Sentences can also be classified based on their function. There are four types of sentences based on function: declarative, interrogative, imperative, and exclamatory.
1. Declarative Sentence: A declarative sentence makes a statement and ends with a period.
Eg: She is a talented musician.
2. Interrogative Sentence: An interrogative sentence asks a question and ends with a question mark.
Eg: Have you finished your homework yet?
3. Imperative Sentence: An imperative sentence gives a command or makes a request and can end with a period or an exclamation mark.
Eg: Don't forget to bring your passport.
4. Exclamatory Sentence: An exclamatory sentence expresses strong emotion and ends with an exclamation mark.
Eg: Wow, what a beautiful sunset!`
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-sen',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `Which type of sentence consists of one independent clause with a subject and predicate?`,
            options: `Simple sentence, Compound sentence, Complex sentence, Compound-complex sentence`
          },
          {
            qText: `Which type of sentence consists of two or more independent clauses joined by a coordinating conjunction?`,
            options: `Compound sentence, Complex sentence, Compound-complex sentence`
          },
          {
            qText: `Which type of sentence consists of one independent clause and one or more dependent clauses?`,
            options: `Complex sentence, Compound-complex sentence, Simple sentence`
          },
          {
            qText: `Which type of sentence consists of two or more independent clauses and one or more dependent clauses?`,
            options: `Compound-complex sentence, Simple sentence, Complex sentence`
          },
          {
            qText: `Which type of sentence makes a statement and ends with a period?`,
            options: `Declarative sentence, Interrogative sentence, Imperative sentence, Exclamatory sentence`
          },
          {
            qText: `Which type of sentence asks a question and ends with a question mark?`,
            options: `Interrogative sentence, Imperative sentence, Exclamatory sentence`
          },
          {
            qText: `Which type of sentence gives a command or makes a request and can end with a period or an exclamation mark?`,
            options: `Imperative sentence, Interrogative sentence, Exclamatory sentence`
          },
          {
            qText: `Which type of sentence expresses strong emotion and ends with an exclamation mark?`,
            options: `Exclamatory sentence, Declarative sentence, Interrogative sentence, Imperative sentence`
          }
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Identify - Subject',
      id: 'select-word-1',
      lockAfter: 1,
      commonData: {
        title: 'Identify the subject from the following sentences.',
        multiSelect: true
      },
      data: [
        `*The dog* barked loudly.
*She* danced gracefully.
*My mom* is a doctor.
*They* went to the beach.
*The sun* sets in the west.
*I* love to read books.
*The cat* chased the mouse.
*John and Sarah* are friends.
*The bird* sings sweetly.
*The cake* smells delicious.`,

        `*She* plays the piano beautifully.
*The car* ran out of gas.
*They* ate dosa for dinner.
*The teacher* graded the tests.
*The flowers* bloomed in the spring.
*He* ran a marathon.
*The children* played in the park.
*My favorite color* is blue.
*She* wrote a letter to her friend.
*The movie* was very entertaining.`,

        `*They* built a sandcastle on the beach.
*The storm* caused damage to the house.
*The baby* slept soundly.
*She* cooked a delicious meal.
*The book* was very interesting.
*Sarah* loves to read.
*The cat* jumped on the table.
*We* are going to the park.
*The sun* shines brightly.
*John and Emily* play tennis every weekend.
*The car* needs a new battery.`
      ]
    },
    {
      type: 'selectWord',
      label: 'Identify - Predicate',
      id: 'select-word-2',
      lockAfter: 1,
      commonData: {
        title: 'Identify the predicate from the following sentences.',
        multiSelect: true
      },
      data: [
        `The dog *barked loudly*.
She *danced gracefully*.
My mom *is a doctor*.
They *went to the beach*.
The sun *sets in the west*.
I *love to read books*.
The cat *chased the mouse*.
John and Sarah *are friends*.
The bird *sings sweetly*.
The cake *smells delicious*.`,

        `She *plays the piano beautifully*.
The car *ran out of gas*.
They *ate dosa for dinner*.
The teacher *graded the tests*.
The flowers *bloomed in the spring*.
He *ran a marathon*.
The children *played in the park*.
My favorite color *is blue*.
She *wrote a letter to her friend*.
The movie *was very entertaining*.`,

        `They *built a sandcastle on the beach*.
The storm *caused damage to the house*.
The baby *slept soundly*.
She *cooked a delicious meal*.
The book *was very interesting*.
The car *needs a new battery*.
The teacher *explained the lesson clearly*.
The flowers *bloom in the spring*.
My brother *is studying medicine*.
The movie *received positive reviews.*`
      ]
    },
    {
      id: 'fillup-2',
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      commonData: {
        title:
          'Complete the following sentences by inserting a suitable subject'
      },
      lockAfter: 2,
      data: [
        `*Water* freezes at 0 degrees Celsius.
The *human* body has 206 bones.
The tallest *mountain* in the world is Mount Everest.
The first *person* to walk on the moon was Neil Armstrong.
The *heart* pumps blood throughout the body.`,

        `The *Pacific* Ocean is the largest ocean in the world.
The human *eye* can distinguish approximately 10 million different colors.
The Sahara *Desert* is the largest hot desert in the world.
The *Earth* is the third planet from the sun.
The *moon* orbits around the Earth.`,

        `The *capital* of France is Paris.
The Nile *River* is the longest river in the world.
*Dogs* bark at night.
The *sun* sets in the west.
The *cow* gives us milk.`,

        `*It* is cloudy today.
*Birds* fly in the air.
*I* am in a hurry.
The *Earth* orbits around the sun.
The *capital* of Italy is Rome.`
      ]
    },
    {
      label: 'Declarative or Imperative',
      type: 'classifySentence',
      id: 'classify-1',

      data: {
        title:
          'Classify the following sentences as declarative or imperative sentences.',
        types: [
          {
            name: 'Declarative',
            text: `The movie starts at 7 PM.
She is a talented musician.
The samosa tastes delicious.`
          },
          {
            name: 'Imperative',
            text: `Please turn off the lights.
Don't forget to bring your passport.
Let's go to the park.`
          }
        ]
      }
    },
    {
      label: 'Interrogative or Exclamatory',
      type: 'classifySentence',
      id: 'classify-2',

      data: {
        title:
          'Classify the following sentences as interrogative or exclamatory sentences.',
        types: [
          {
            name: 'Interrogative',
            text: `What time is the meeting?
Have you finished your homework yet?
Where did you go for vacation last year?`
          },
          {
            name: 'Exclamatory',
            text: `Wow, what a beautiful sunset!
Ouch, that hurt!
Congratulations, you got the job!`
          }
        ]
      }
    },
    {
      id: 'compound',
      label: 'Fillup: Compound Sentences',
      type: 'fillup',
      commonData: {
        title:
          'Complete the following compound sentences using appropriate conjunctions.'
      },
      lockAfter: 2,
      data: [
        `I love to swim, *but (so, and, yet)* I hate getting water in my eyes.
She studies hard for her exams, *so (but, and, yet)* she always gets good grades.
He was tired from working all day, *yet (and, but, so)* he still went to the gym.
They went to the beach for the weekend, *and (yet, but, so)* they had a great time.
I want to go to the concert, *but (so, and, yet)* I don't have any money.
She loves to read books, *and (yet, but, so)* she has a huge collection at home.
The dog barked all night, *so (but, and, yet)* the neighbors complained.
She was feeling sick, *but (so, and, yet)* she still went to work.
He ate too much at dinner, *yet (and, but, so)* he still wanted dessert.
I can't decide what to wear, *so (but, and, yet)* I'm going to ask my friend for advice.`,

        `The sun was shining, *but (so, and, yet)* it was still a little chilly outside.
She likes to cook, *and (yet, but, so)* she makes amazing Italian food.
He was tired and hungry, *so (but, and, yet)* he decided to stop at a diner.
I need to buy groceries, *but (so, and, yet)* also need to do laundry.
They went for a walk in the park, *and (yet, but, so)* they saw a lot of birds.
She was running late, *but (so, and, yet)* she still managed to catch the train.
He loves to play basketball, *and (yet, but, so)* he's on the school team.
I want to go to the party, *but (so, and, yet)* I have to work early tomorrow.
She was cold, *so (but, and, yet)* she put on a sweater and a scarf.
They went to the museum, *and (yet, but, so)* they learned a lot about history.`,

        `He didn't like the movie, *but (so, and, yet)* his friends thought it was great.
She loves to dance, *so (but, and, yet)* she takes ballet classes twice a week.
He wanted to go skiing, *but (so, and, yet)* there wasn't enough snow on the mountain.
I like to drink coffee, *but (so, and, yet)* I always drink too much and can't sleep.
She is studying Spanish, *and (yet, but, so)* she hopes to travel to Spain someday.`
      ]
    },
    {
      id: 'complex',
      label: 'Fillup: Complex Sentences',
      type: 'matchByDragDrop',
      commonData: {
        title:
          'Complete the following complex sentences using appropriate conjunctions.'
      },
      lockAfter: 2,
      data: [
        `*Although* it was raining, we decided to go for a walk.
*Since* I don't have a car, I take the bus to work every day.
*While* I was studying for my exam, my roommate was watching TV.
*Because* he forgot his wallet, he couldn't buy anything at the store.
*Even* though it was late, she continued to work on her project.`,

        `*After* she finished her homework, she went for a run.
*Since* it was a beautiful day, we decided to have a picnic in the park.
*Although* he was tired, he didn't want to go to bed yet.
*While* she was cooking dinner, she listened to music on the radio.
*Because* they missed their flight, they had to book a new one.`,

        `*Even* though she doesn't like spicy food, she tried the new Thai restaurant.
*After* he graduated from college, he moved to a new city to start his career.
*Since* it was her birthday, she decided to treat herself to a spa day.
*Although* it was expensive, she bought the designer dress she had been eyeing.
*While* he was on vacation, he visited several different countries.`,

        `*Because* she was running late, she had to skip breakfast.
*Even* though it was crowded, they still managed to find a seat in the restaurant.
*After* they finished their meal, they ordered dessert.
*Since* he was feeling sick, he decided to stay home from work.
*Although* she was nervous, she gave a great speech at the conference.`,

        `*While* they were hiking in the mountains, they saw a family of bears.
*Because* it was a long weekend, they decided to take a road trip.
*Even* though it was late, they stayed up to finish the movie.
*After* she lost her job, she started her own business.
*Since* they had never been to Europe before, they decided to take a guided tour.`
      ]
    },
    {
      id: 'sorting',
      label: 'Arrange in the correct order',
      type: 'sorting',
      commonData: {
        title:
          'Arrange the following sentences in the correct order to form compound-complex sentences'
      },
      lockAfter: 1,
      data: [
        `Because he wanted to save money,
he decided to cook at home,
and he invited his friends over to enjoy the meal,
but they ended up bringing their own food.`,

        `Although she was feeling tired,
she wanted to finish her project,
so she drank some coffee,
but it didn't help her stay awake.`,

        `While the children were playing outside,
the parents were watching them,
but they got distracted by a loud noise,
and they went to investigate.`,

        `Because the car broke down on the highway,
they had to call a tow truck,
and they waited for over an hour,
but eventually,
they made it to their destination.`,

        `Although he had studied for the test,
he still felt nervous,
so he reviewed his notes,
and he ended up getting an A.`,

        `While the band was performing on stage,
the audience was singing along,
but some people were talking loudly,
and the band asked them to be quiet.`,

        `Because it was a beautiful day,
they decided to go for a hike,
and they brought a picnic lunch,
but they forgot the utensils,
so they had to use their hands.`,

        `Although she was a beginner,
she signed up for the dance class,
and she struggled at first,
but with practice,
she improved,
and she eventually performed in a recital.`
      ]
    }
  ]
};
