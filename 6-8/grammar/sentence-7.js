export default {
  id: 'sentence-7',
  label: 'Sentence Analysis',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Sentence',
        text: [
          `A sentence is a group of words that expresses a complete thought or idea. It must have a subject (who or what the sentence is about) and a predicate (what the subject is doing).
=> Sentences can be classified based on their structure. There are four types of sentences: simple, compound, complex, and compound-complex.
1. Simple Sentence: A simple sentence consists of one independent clause, which has a subject and a predicate.
Example: John is reading a book.
2. Compound Sentence: A compound sentence consists of two or more independent clauses joined together with a coordinating conjunction (such as "and," "but," or "or").
Example: I wanted to go to the party, but I had to study for my exam.
3. Complex Sentence: A complex sentence consists of one independent clause and one or more dependent clauses. A dependent clause cannot stand alone as a sentence and depends on the independent clause to make sense.
Example: Because it was raining, we stayed inside.
4. Compound-Complex Sentence: A compound-complex sentence consists of two or more independent clauses and one or more dependent clauses.
Example: I wanted to go to the park, but it was raining, so I stayed home and read a book.
=> Sentences can also be classified based on their function. There are four types of sentences based on function: declarative, interrogative, imperative, and exclamatory.
5. Declarative Sentence: A declarative sentence makes a statement and ends with a period.
Example: She is a talented musician.
6. Interrogative Sentence: An interrogative sentence asks a question and ends with a question mark.
Example: Have you finished your homework yet?
7. Imperative Sentence: An imperative sentence gives a command or makes a request and can end with a period or an exclamation mark.
Example: Don't forget to bring your passport.
8. Exclamatory Sentence: An exclamatory sentence expresses strong emotion and ends with an exclamation mark.
Example: Wow, what a beautiful sunset!`
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
        `The *dog* barked loudly.
*She* danced gracefully.
*My mom* is a doctor.
*They* went to the beach.
*The sun* sets in the west.`,

        `*I* love to read books.
*The cat* chased the mouse.
*John and Sarah* are friends.
*The bird* sings sweetly.
*The cake* smells delicious.`,

        `*She* plays the piano beautifully.
*The car* ran out of gas.
*They* ate pizza for dinner.
*The teacher* graded the tests.
*The flowers* bloomed in the spring.`,

        `*He* ran a marathon.
*The children* played in the park.
*My favorite color* is blue.
*She* wrote a letter to her friend.
*The movie* was very entertaining.`,

        `*They* built a sandcastle on the beach.
*The storm* caused damage to the house.
*The baby* slept soundly.
*She* cooked a delicious meal.
*The book* was very interesting.`
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
The sun *sets in the west*.`,

        `I *love to read books*.
The cat *chased the mouse*.
John and Sarah *are friends*.
The bird *sings sweetly*.
The cake *smells delicious*.`,

        `She *plays the piano beautifully*.
The car *ran out of gas*.
They *ate pizza for dinner*.
The teacher *graded the tests*.
The flowers *bloomed in the spring*.`,

        `He *ran a marathon*.
The children *played in the park*.
My favorite color *is blue*.
She *wrote a letter to her friend*.
The movie *was very entertaining*.`,

        `They *built a sandcastle on the beach*.
The storm *caused damage to the house*.
The baby *slept soundly*.
She *cooked a delicious meal*.
The book *was very interesting*.`
      ]
    },
    {
      id: 'fillup-2',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Complete the following sentences by inserting a suitable subject'
      },
      lockAfter: 2,
      data: [
        `*Dogs* bark at night.
*The sun* sets in the west.
*The cow* gives us milk.
*It* is cloudy today.`,

        `*Birds* fly in the air.
*I* am in a hurry.
*The Earth* orbits around the sun.
*The capital* of Italy is Rome.`,

        `*Water* freezes at 0 degrees Celsius.
*The human body* has 206 bones.
*The tallest mountain* in the world is Mount Everest.
*The first person* to walk on the moon was Neil Armstrong.`,

        `*The heart* pumps blood throughout the body.
*The Pacific* Ocean is the largest ocean in the world.
*The human eye* can distinguish approximately 10 million different colors.
*The Sahara Desert* is the largest hot desert in the world.`,

        `*The Earth* is the third planet from the sun.
*The moon* orbits around the Earth.
*The capital* of France is Paris.
*The Nile River* is the longest river in the world.`
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
The pizza tastes delicious.`
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
      label: 'Compound Sentences',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Complete the following compound sentences using appropriate conjunctions.'
      },
      lockAfter: 2,
      data: [
        `I love to swim, *but* I hate getting water in my eyes.
She studies hard for her exams, *so* she always gets good grades.
He was tired from working all day, *yet* he still went to the gym.
They went to the beach for the weekend, *and* they had a great time.
I want to go to the concert, *but* I don't have any money.`,

        `She loves to read books, *and* she has a huge collection at home.
The dog barked all night, *so* the neighbors complained.
She was feeling sick, *but* she still went to work.
He ate too much at dinner, *yet* he still wanted dessert.
I can't decide what to wear, *so* I'm going to ask my friend for advice.`,

        `The sun was shining, *but* it was still a little chilly outside.
She likes to cook, *and* she makes amazing Italian food.
He was tired and hungry, *so* he decided to stop at a diner.
I need to buy groceries, *but* I also need to do laundry.
They went for a walk in the park, *and* they saw a lot of birds.`,

        `She was running late, *but* she still managed to catch the train.
He loves to play basketball, *and* he's on the school team.
I want to go to the party, *but* I have to work early tomorrow.
She was cold, *so* she put on a sweater and a scarf.
They went to the museum, *and* they learned a lot about history.`,

        `He didn't like the movie, *but* his friends thought it was great.
She loves to dance, *so* she takes ballet classes twice a week.
He wanted to go skiing, *but* there wasn't enough snow on the mountain.
I like to drink coffee, *but* I always drink too much and can't sleep.
She is studying Spanish, *and* she hopes to travel to Spain someday.`
      ]
    },
    {
      id: 'complex',
      label: 'Complex Sentences',
      type: 'fillup',
      commonData: {
        noOptions: true,
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
      label: 'Compound-Complex Sentences',
      type: 'sorting',
      commonData: {
        title:
          'Arrange the following sentences in the correct order to form compound-complex sentences'
      },
      lockAfter: 1,
      data: [
        `Although she had a lot of work to do,
she decided to go to the gym,
and she felt better afterwards.`,

        `While the teacher was giving the lecture,
the students were taking notes,
but some were still confused about the topic.`,

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
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'subject-verb',
      data: {
        title: 'Subject-Verb Agreement',
        text: [
          `Subject-verb agreement tells us about the ways a subject will agree to its verb. Generally, rules of tense are in the category of subject-verb agreement, but apart from these rules, there are some other rules by which a subject agrees to the verb.
# Rules for Subject-Verb Agreement
1. Two nouns or pronouns when joined by 'and' takes a plural verb.
Example: You and I have done this.
2. When 'one of' is used with a plural noun, the verb after it is always singular,
Example: One of my friends is sick.
3. Nouns that are connected by 'each' and 'every' takes a singular verb with them.
Examples: Each boy was given a prize.
Every day is a battle here.
4. If two nouns are connected by 'and' but are meant for one person or one idea then the verb becomes singular.
Example: Time and tide waits for no one.
5. When two subjects are joined by 'as well as, along with, together with, in addition to' then the verb agrees to the first subject.
Examples: She as well as her friends is very pleasing.
The boys together with the coach were practicing for the match.
6. When two or more subjects are connected by 'or, nor, either or, neither nor' then the verb is singular.
Example: Neither Ram nor Sham has eaten.
7. If a sentence starts with introducing 'there' then the verb agrees to the number of the noun that comes after 'there'.
Examples: There is a pen.
There were big rivers.
8. Nouns, though plural but refer to the name of a book, country or province then the verb used is ‘singular’.
Example: The United States is a powerful country.
9. When plural nouns refer to a whole then it is taken to be singular and the verb is also singular.
Example: Two thousand rupees is not a small amount.
10. The phrase 'a number of' takes a plural verb but the phrase 'the number of' takes a singular verb.
Examples: A number of boys were absent.
The number of people there is not much.
11. Few, a few, many, several/both are plural in form and they take plural verbs with them.
Example: Few books are available to me.
12. If two subjects with different numbers are joined by 'not only, but also, either or, neither nor' then the verb agrees to the subject nearer to it.
Examples: Neither they nor that man goes to the park.
Either he or his friends were the culprit. `
        ]
      }
    },
    {
      label: 'Correct or Incorrect',
      type: 'classifySentence',
      id: 'correct-incorrect',
      commonData: {
        title: 'Classify the sentences as correct or incorrect.',
        types: ['Correct', 'Incorrect']
      },
      data: [
        [
          `Birds are taking rest on the tree.
Maya does not get up in the morning.
The group of students are planning a trip.`,

          `One of my sisters live in Ranchi.
The group of students is planning a trip.`
        ],
        [
          `She loves chocolates very much.
The players has stopped shouting.
The dogs run in the park.`,

          `Chennai and Kolkata is beautiful cities.
The dogs runs in the park.`
        ],
        [
          `Mr Singh who was a poet and singer is no more.
You and not me are the wrong doer.
The book on the table is interesting.`,

          `Every player and every coach are present.
The book on the table are interesting.`
        ],
        [
          `The robber with his friends was arrested.
Neither he nor his father has appeared.
The cat and the dog are sleeping.`,

          `Geeta or Reeta have brought this candle.
The cat and the dog is sleeping.`
        ],
        [
          `There were many people around the temple.
One of my favorite bands is playing tonight.`,

          `West Indies are a group of islands.
Ten kilometres are a long distance by foot.
One of my favorite bands are playing tonight.`
        ]
      ]
    },
    {
      label: 'Fillup',
      type: 'fillup',
      id: 'verb',

      data: {
        noOptions: true,
        title: `Fill in the blanks in compliance with subject-verb agreement.`,
        text: `Many forms *have* been received.
One of the thieves *has* been caught.
Ramu and Shyamu *are* playing chess.
Each man and each woman *was* rejoicing.
The horse and cart *are* lost.
Mahi as well as her teachers *is* very much concerned.
My brothers along with my friend *were* coming to my house.
Either of the two *is* suitable.
Neither of the two girls *is* going to win the competition.
A number of migratory birds *are* coming to India during winter.`
      }
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'sentence-o-v',
      data: {
        title: 'Sentence Analysis',
        text: [
          `# The Object of a Verb
When we use a verb transitively, we need an object to make the meaning of the sentence complete. Transitive verbs need an object to complete their meaning. When an object consists of more than one word, we have the object word and its attributes just like we have attributes for the subject word.`,
          {
            type: 'html',
            text: `<b>Example</b> -  The mother scolded the naughty <b>child</b>. (Here the <b>child</b> is the object word, and <b>naughty</b> are its attributes.)`
          },
          `# Direct and Indirect Objects
Very often, we require two objects with a transitive verb.`,
          {
            type: 'html',
            text: `<b>Example</b> - Priya gave <b>Reem</b> a <b>book</b>.`
          },
          `Here we have two objects of the verb gave. When we ask the question 'Priya gave what?' we get the answer a book, which is called the direct object of the verb. Now if we ask whom the book was given to, we get the answer, Reem. `,
          {
            type: 'html',
            text: `The word <b>Reem</b> is then the indirect object of the verb '<b>gave</b>'.`
          },
          `# The Complement 
Sometimes, the verb in the predicate is an intransitive verb, but it is incomplete by itself. It requires a noun, a pronoun, an adjective, etc. to complete the predicate. The word or group of words required to complete the predicate is called a complement. The complement of an intransitive verb describes the subject. It is therefore called the subject complement.`,
          {
            type: 'html',
            text: `<b>Example</b> - Mother seems <b>agitated</b>.`
          },
          {
            type: 'html',
            text: `<b>Example</b> - Jake appeared <b>unhappy</b>.`
          }
        ]
      }
    },
    {
      id: 'direct-indirect',
      label: 'Direct or Indirect',
      type: 'classifySentence',
      data: {
        title:
          'Classify the given sentences based on the presence of direct or indirect objects.',
        types: [
          {
            name: 'Direct',
            text: `Sally will help *you* with your housework. 
I need *your help*. 
He offered her *a flower*. 
John sold me *his car*`
          },
          {
            name: 'Indirect',
            text: `She sent *her friend* an email.
He gave *them* a bag full of money.
My father bought *us* a new TV set.
I wish *you* good luck.`
          }
        ]
      }
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'complemet',
      data: {
        title: 'Complements',
        text: [
          `A complement is a word or word group that completes the predicate in a sentence. Subject complements follow a linking verb and provide additional information about the subject of the sentence. The subject complement is normally a noun or an adjective that defines or renames the subject in some way. Object complements follow and modify a direct object and provide additional information about it. An object complement can be a noun or adjective or any word acting as a noun or adjective.
Subject complements and object complements fill out and complete our sentences. Object complements provide more detail about the object of a sentence, while subject complements provide information about the subject of a sentence.`
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Identify Complement',
      id: 'select-comp',
      lockAfter: 1,
      commonData: {
        title: 'Identify the complements from the following sentences.',
        multiSelect: true
      },
      data: [
        `Priya is extremely *intelligent*.
Shyla eventually became my best *friend*. 
Our neighbor's dogs are very *dangerous*. 
Meena's hair dye turned the water *pink*. `,

        `After our disagreement on the first day of school, James became my friend* for life. 
We painted the ceiling *blue*. 
You are making me *sad*. 
Preethi is a good *dancer*. 
Dina named her parakeet *Odi*.`,

        `The gift Kareena gave her brother was a *hamster*. 
Buck grew up in Oman and became an expert *horse rider* before reaching his 18th birthday. 
I once considered Neena my fiercest *enemy*. 
After reviewing the details of the case, the court pronounced the boy *not guilty*. 
By the second month of the drought, the river had run *dry*.`
      ]
    },
    {
      id: 'subject-object',
      label: 'Subject or Object Complement',
      type: 'classifySentence',
      data: {
        title:
          'Classify the sentence based on the presence of subject or object complement.',
        types: [
          {
            name: 'Subject',
            text: `Today is Monday.
Preethi is a student.
Your bike is amazing.
She seems nice.
We were exhausted after a day of tiring work.
The chief guest was late to the meeting.
I am irritated.`
          },
          {
            name: 'Object',
            text: `Mihika made her mom happy.
I painted my nails pink.
The company designated Tony the employee of the month.
Making handmade gifts makes my mind stress-free.
This makes the problem even more complicated.
Leela and Naksh named their daughter Naitra. 
What I said made my uncle angry.`
          }
        ]
      }
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'clause-phrase',
      data: {
        title: 'Clauses',
        text: [
          `# Clauses
A group of words containing a subject and a finite verb is called a clause. It is formed when a subject and a predicate are combined to communicate an idea. 
# Features of a clause
1. A clause has a subject and a predicate.
2. A clause has a finite verb.
3. The subject may be both implicit and explicit.
# Subordinate Clause 
Subordinate clauses are introduced by a subordinating conjunction (because, though, however, before) or relative pronouns (who, what, which) that function as subordinating conjunctions. They are mainly of four types.
1. Noun/Nominal Clause: When a subordinate clause performs the function of a standard noun in a sentence, it is known as a noun clause or nominal clause. It can be the subject or the object of a transitive verb, subject complements, delayed subjects or appositives.`,
          {
            type: 'html',
            text: `<b>Example</b> - Rahima said <b>that she wanted to become an author</b>.`
          },
          `2. Adjective/Relative Clause: An adjective clause does the work of an adjective and modifies the noun, pronoun, or noun equivalent in a main clause or a dependent clause.`,
          {
            type: 'html',
            text: `<b>Example</b> - Nisha, <b>who is my neighbor</b>, is an actress`
          },
          `3. Adverb Clause: When a verb is modified in the main clause and made to do the work of an adverb, it is called an adverb clause.`,
          {
            type: 'html',
            text: `<b>Example</b> - Hari <b>came to meet me at the station</b> as I was leaving.`
          },
          `Adverb clauses can be of various kinds, depending on their functions. (Adverb clause of time, place, reason, result, condition, concession, manner and degree)
4. Conditional/If Clause: They are used
a) to express cause-effect relationships for physical conditions.
b) to suggest habitual actions.
c) to show real conditions.
d) to show actions when certain conditions are fulfilled.
e) to show willingness and likelihood/probability.
f) for unreal conditions.
g) for imaginary conditions.`,
          {
            type: 'html',
            text: `<b>Example</b> - <b>If you see dark clouds in the sky</b>, you can expect rain.<br>
<b>Unless you tell me your problems</b>, I cannot help.<br>
<b>If I had come to the party</b>, I could have met my friend.`
          },
          `A phrase, on the other hand, is a group of words that does not contain a subject and a predicate, and it does not express a complete thought. Phrases can function as nouns, adjectives, or adverbs in a sentence.
A noun phrase functions as a noun in a sentence. For example: "The big red ball."
An adjective phrase functions as an adjective in a sentence. For example: "The girl with the curly hair."
An adverb phrase functions as an adverb in a sentence. For example: "He drove the car very slowly."`
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Identify Subordinate Clause',
      id: 'select-subordinate',
      lockAfter: 1,
      commonData: {
        title: 'Identify the subordinate clauses in the sentences given below.',
        multiSelect: true
      },
      data: [
        `The director is the person *to whom you should write*.
Marina did not make the same mistakes *that her sister did*.
*If you want the minister to inaugurate the function*, you must plan early.
I know the student *who stood first*.
*Before I leave for London*, I want to meet you.
*If I had enough money*, I would have bought that house.`,

        `*Whenever you may settle down*, do not forget your roots.
I was not able to attend the function *because I was ill*.
He always acts as *if he knows everything*.
*What I need now* is a cup of coffee.
No one knew that *he was planning to resign*.
*That he is the only boy in the group* does not qualify him to be the leader.`,

        `The bus *that you have been waiting for* has arrived.
I know the person *who wrote that article*.
This is the reason *why I don't like traveling*.
*If you see dark clouds in the sky*, you can expect rain.`,

        `*Unless you tell me your problems*, I cannot help.
*If I had come to the party*, I could have met my friend.
*If you exercise daily*, you will reduce weight faster.`
      ]
    },
    {
      id: 'adjective-conditional',
      label: 'Adjective or Conditional',
      type: 'classifySentence',
      data: {
        title:
          'Classify the following sentences as an Adjective Clause or Conditional Clause.',
        types: [
          {
            name: 'Adjective',
            text: ` The director is the person to whom you should write.
The bus that you have been waiting for has arrived.
I know the person who wrote that article.
This is the reason why I don't like traveling.`
          },
          {
            name: 'Conditional',
            text: `If you see dark clouds in the sky, you can expect rain.
Unless you tell me your problems, I cannot help.
If I had come to the party, I could have met my friend.
If you exercise daily, you will reduce weight faster.`
          }
        ]
      }
    },
    {
      id: 'adverb-noun',
      label: 'Adverb or Noun',
      type: 'classifySentence',
      data: {
        title:
          'Classify the following sentences as Adverb Clause or Noun Clause.',
        types: [
          {
            name: 'Adverb',
            text: `Before I leave for London, I want to meet you.
Whenever you may settle down, do not forget your roots.
I was not able to attend the function because I was ill.
He always acts as if he knows everything.`
          },
          {
            name: 'Noun',
            text: `What I need now is a cup of coffee.
No one knew that he was planning to resign.
That he is the only boy in the group does not qualify him to be the leader.
The researcher said that he had found the chemical compound.`
          }
        ]
      }
    },
    {
      id: 'mcq-clause',
      label: 'Choose the correct alternative',
      type: 'mcq',
      data: {
        title: 'Complete the sentences using appropriate clauses.',
        questions: [
          {
            qText: 'Sangitha sang _________________.',
            options: `like a professional, as a professional, thinking as a professional`
          },
          {
            qText: 'Akash hid the box ___________________.',
            options: `under the table, at under the table, in the table`
          },
          {
            qText: 'Kartika left the office _______________.',
            options: `after finishing her work, finishing her work, at finishng her work`
          },
          {
            qText: 'Parvathi is a girl ______________________.',
            options: `who is good at dance, is good at dance, good at dance`
          },
          {
            qText: '____________________, we can go home together.',
            options: `If we meet after class, We meet after class, Meet after class`
          }
        ]
      }
    },
    {
      label: 'Clause or Phrase',
      type: 'classifySentence',
      id: 'clause-phrase',
      lockAfter: 1,
      commonData: {
        title: 'Classify the following as a clause or phrase.',
        types: ['Clause', 'Phrase']
      },
      data: [
        [
          `She sang a song.
If it rains, we'll stay inside.
He ate his lunch quickly.`,

          `The tall building
Walking in the park
A beautiful sunset`
        ],
        [
          `Because he was late, he missed the bus.
The book that she was reading was very interesting.
They will go to the beach if the weather is nice.`,

          `By the river
Singing a song
A boy with red hair`
        ],
        [
          `I like to play soccer when I have free time.
After the movie ended, we went home.
She runs every morning before work.`,

          `Running fast
The girl in the red dress
To the store`
        ],
        [
          `Since he is allergic to peanuts, he cannot eat them.
My sister, who is a doctor, gave me some medical advice.
Unless you study, you won't pass the test.`,

          `A cup of coffee
Sleeping soundly
On the table`
        ],
        [
          `The teacher explained the lesson clearly.
When the bell rang, the students went to their classes.
She is going to the store to buy some milk.`,

          `The woman with the long hair
A very tall building
Laughing out loud`
        ]
      ]
    },
    {
      label: 'Noun, Adjective or Adverb',
      type: 'classifySentence',
      id: 'noun-adj-adv',
      lockAfter: 1,
      commonData: {
        title:
          'Classify the following phrases as noun, adjective or adverb phrases',
        types: ['Noun', 'Adjective', 'Adverb']
      },
      data: [
        [
          `The red bicycle
Running late for class`,

          `The man with the hat
Running quickly to catch the bus`,

          `He walked slowly down the street
She spoke very quietly to avoid waking up the baby`
        ],
        [
          `A glass of water
My favorite movie of all time`,

          `The house on the hill
The tall, dark, and handsome man`,

          `The bird chirped loudly in the morning
The car drove through the tunnel quickly`
        ],
        [
          `The book on the shelf
Playing with her toy car`,

          `The woman in the red dress
The cute and cuddly puppy`,

          `She danced gracefully across the stage
The athlete ran tirelessly for hours`
        ],
        [
          `The sound of the waves crashing on the shore
A trip to the beach`,

          `The book with the torn cover
A delicious slice of pizza`,

          `He ate the pizza hungrily after his long day at work
The sun set peacefully over the horizon`
        ],
        [
          `The girl with the curly hair
The smell of freshly baked cookies`,

          `The girl with the bright smile
The warm and cozy blanket`,

          `The cat slept soundly on the bed
He played the guitar beautifully`
        ]
      ]
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq-phrase',
      data: {
        title:
          'Classify the underlined part of the following sentences as a clause or phrase.',
        questions: [
          {
            qText: `*I completed my project*, but I was not satisfied with it.`,
            options: `Clause, Phrase`
          },
          {
            qText: `Jacob knew about it; *however he kept asking everyone about it*.`,
            options: `Clause, Phrase`
          },
          {
            qText: `I was waiting *at the park*.`,
            options: `Phrase, Clause`
          },
          {
            qText: `They all sang *extremely well*.`,
            options: `Phrase, Clause`
          },
          {
            qText: `*The girls in the black dresses are the ones* who won the competition last year.`,
            options: `Clause, Phrase`
          },
          {
            qText: `*In the meantime*, I will help you with your domestic chores.`,
            options: `Phrase, Clause`
          },
          {
            qText: `*Santana and Brittany are good dancers*.`,
            options: `Clause, Phrase`
          },
          {
            qText: `When we reach home, *we will call you*.`,
            options: `Clause, Phrase`
          },
          {
            qText: `*We were planning our summer vacation*.`,
            options: `Clause, Phrase`
          },
          {
            qText: `*She finally agreed to come with us* to the slumber party.`,
            options: `Clause, Phrase`
          }
        ]
      }
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'relative-clause',
      data: {
        title: 'Relative Clauses',
        text: [
          `Relative clauses are non-essential parts of a sentence. They may add meaning, but if they are removed, the sentence will still function grammatically.
1. A defining clause tells us which specific person or thing we are talking about in a larger group of people or things.`,
          {
            type: 'html',
            text: `<b>Example</b> - The woman <b>who visited me in the hospital</b> was very kind.`
          },
          `2. A non-defining clause gives us more information about the person or thing we are talking about.`,
          {
            type: 'html',
            text: `<b>Example</b> - The farmer, <b>whose name was Ram</b>, sold us five pounds of cherries.`
          }
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Identify Relative Clause',
      id: 'select-relative-clause',
      data: {
        title: `Identify the relative clauses from the following sentences.`,
        multiSelect: true,
        text: `The woman *who visited me in the hospital* was very kind.
The umbrella *that I bought last week* is already broken.
The man *who stole my backpack* has been arrested.
The weather *that we had this summer* was beautiful.
The farmer, *whose name was Ram*, sold us five pounds of cherries.
Elephants, *which are the largest land mammals*, live in herds of ten or more.
The author, *who graduated from the same university as I did*, gave a wonderful motivation speech.
My mother, *who is fifty*, lives in Dubai.`
      }
    },
    {
      id: 'defining-non-defining',
      label: 'Defining or Non-defining',
      type: 'classifySentence',
      data: {
        title:
          'Classify the following sentences based on the type of relative clause used.',
        types: [
          {
            name: 'Defining',
            text: ` The woman who visited me in the hospital was very kind.
The umbrella that I bought last week is already broken.
The man who stole my backpack has been arrested.
The weather that we had this summer was beautiful.`
          },
          {
            name: 'Non-defining',
            text: `The farmer, whose name was Ram, sold us five pounds of cherries.
Elephants, which are the largest land mammals, live in herds of ten or more.
The author, who graduated from the same university as I did, gave a wonderful motivation speech.
My mother, who is fifty, lives in Dubai.`
          }
        ]
      }
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'conditional-notes',
      data: {
        title: 'Conditionals',
        text: [
          `Conditional sentences express conditions that are required to be followed in order to achieve the desired results. 
1. Conditional Clauses: Conditional clauses begin with if or unless and express a condition.`,
          {
            type: 'html',
            text: `<b>Examples</b> - <b>If you would have studied well</b>, you could have passed the examination easily.`
          },
          `2. Zero Conditionals: A zero conditional sentence refers to a general truth. It denotes situations in which a particular thing or action always results in the other.`,
          {
            type: 'html',
            text: `<b>Examples</b> - <b>If you don't water the plants</b>, they die.`
          },
          {
            type: 'html',
            text: `Babies cry <b>when they are hungry and sick</b>.`
          },
          `3. First Conditionals: First conditional sentences are those sentences that express a situation in which the result would be the one to most likely happen. This, however, is not the guaranteed outcome.`,
          {
            type: 'html',
            text: `<b>Examples</b> - <b>If you take some medicines</b>, you will feel better.`
          },
          {
            type: 'html',
            text: `<b>If you go out now</b>, you will get wet in the rain.`
          },
          `4. Second Conditionals: Second conditional sentences are sentences in which hypothetical situations or unrealistic events that are not likely to ever happen are mentioned.`,
          {
            type: 'html',
            text: `<b>Examples</b> - <b>If I knew animation graphics</b>, I would create real-life animated characters.`
          },
          {
            type: 'html',
            text: `<b>If I had a time travel machine</b>, I could go back to my past and change a few things.`
          },
          `5. Third Conditionals: Third conditional sentences express alternate circumstances in the present. This is used to indicate that the outcome would have been different if there was a change in the past event mentioned in the dependent clause.`,
          {
            type: 'html',
            text: `<b>Examples</b> - <b>If you had not fought with me</b>, everything would have been fine.`
          },
          {
            type: 'html',
            text: `<b>If the teacher had informed us earlier</b>, we could have finished it in time.`
          }
        ]
      }
    },
    {
      id: 'zero-first',
      label: 'Zero or First Conditional',
      type: 'classifySentence',
      data: {
        title:
          'Classify the sentences based on the type of conditional clause used.',
        types: [
          {
            name: 'Zero',
            text: `If you eat fast food every day, you get sick.
When you smoke, your lungs are affected.
The lawn gets wet when it rains.
Babies cry when they are hungry and sick.`
          },
          {
            name: 'First',
            text: `If you are focussed, you will achieve your goal.
If you take some medicines, you will feel better.
If you go out now, you will get wet in the rain.
If you like animated movies, you will like Inside out.`
          }
        ]
      }
    },
    {
      id: 'second-third',
      label: 'Second or Third Conditional',
      type: 'classifySentence',
      data: {
        title:
          'Classify the sentences based on the type of conditional clause used.',
        types: [
          {
            name: 'Second',
            text: `If I won the lottery, I would buy all the famous super cars.
If I had a choice, I would never marry at all.
If I had magical powers, I could change the world. 
If I were a bird, I would happily fly around the world.`
          },
          {
            name: 'Third',
            text: `If my parents had not consented to the surgery, my life would have been different.
If she had not gone home, she would have been happier.
If I had been there, I would have surely helped you in one way or another.
If Amrit had been with me, he would have known how to make me feel better.`
          }
        ]
      }
    },
    {
      id: 'conditional',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Fill in the missing blanks and complete the conditionals.'
      },
      lockAfter: 2,
      data: [
        `If I were the Prime Minister, I *would* start community kitchens all over the country.
If I were you, I *would* not marry him.
I *would* not have failed, if I had studied harder.
If you do not stop smoking, you *will* develop cancer.
If I were a doctor, I *would* treat poor people for free.`,

        `If he had asked me, I *would* have told him.
If I were a millionaire, I *would* help the poor and the needy.
If they had brought him in time, he *could* have been saved.
If he behaved more politely, he *would* not be in trouble.
If she earned a handsome salary, she *could* lead a better life.`,

        `If it rains, I *will* wear a raincoat.
You *will* not get good marks unless you study hard for the examination.
The dog *will* bite you if you keep teasing it.
If Alexander Bell had not been an inventor, today we *would* not be using telephones.
If Wellington had lost the battle of Waterloo, Napolean Bonaparte *would* have been the president of France.`,

        `Neil Armstrong *would* not have walked upon the moon unless the Americans had not developed space flight.
The other team *will* win if we lose hope.
If you find problems difficult, you *should* keep trying and never give up.
If Samar does not have an umbrella, he *will* get wet in the rain.
If John Kennedy had not gone to Dallas, he *would* not have been assassinated.`,

        `If Madame Curie had been a housewife, she *would* not have discovered radium.
If I won a million rupees, I *would* buy a bungalow and a car.
If I were accidentally locked out of my house, I *would* call my friend for help.
If the poles of two magnets are opposite, they *will* repel each other.
The ice *will* melt if one places it in the sun.`,

        `I *would* not ask any question unless I could ask the president of America the secret of his success.
If the world were to end in five minutes, I *would* pray to God for mercy.
If I found a diamond on the street, I *would* search for the owner of it.
If a cat is fed, it *will* not kill rats.
In old age, if people had no fire, they *would* eat their meat raw.`
      ]
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Punctuation',
        text: [
          `1. Hyphen: Depicted by '-' is used between two words that are parts of a name or a compound word.`,
          {
            type: 'html',
            text: `For example, long<b>-</b>term, get<b>-</b>together`
          },
          `2. Dash: A dash (—) is a punctuation mark that resembles a hyphen, but is longer. A dash is used to separate parts of a sentence and indicate a break. It indicates a longer pause than a comma and a semicolon.
# Examples of hyphenated compound words
check-in; clean-cut
editor-in-chief; empty-handed; far-fetched
father-in-law, mother-in-law, sister-in-law,etc.
free-for-all; know-how; know-it-all
life-size; merry-go-round
long-distance; long-term
mind-blowing; nitty-gritty
one-sided; one-dimensional, two-dimensional, etc.
over-the-counter
run-in; runner-up
strong-arm
topsy-turvy; toss-up
up-to-date
well-being
word-of-mouth
# Examples of open compound words
black eye; cell phone; close call
common sense; cotton candy
dining room; first aid
full moon; French fry
heart attack; high school; hot dog
ice cream; life jacket; living room
no one; peanut butter; post office
prime minister; real estate; remote control
report card; rib cage; role model
roller coaster; salad dressing; search engine
slam dunk; sleeping bag; time capsule
vacuum cleaner; vending machine; video game
waiting room; washing machine; web page`
        ]
      }
    },
    {
      id: 'fill-up',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks in the following sentences with suitable Punctuations.`
      },
      data: [
        `One*- (—)*fourth of the students in the class have parents from another country.
My work timings are from 8*— (-)*5.
The trek will be organised from May 12*— (-)*15.
We will have a get*- (—)*together next weekend to celebrate your birthday.
The game started out as an organized game of tag, but it ended up a free*- (—)*for*- (—)*all.`,

        `We know one thing for sure *— (-)* something unexpected is coming our way.
Many children *— (-)* living in orphanages *— (-)* do not know what love feels like.
She wore a charcoal*- (—)*gray rain jacket.
People *— (-)* both young and old *— (-)* were advised to take vaccinations at the earliest.`,

        `The mathematician*— (-)*philosopher has won the Nobel Prize this year.
I like vanilla*- (—)*flavored ice cream.
Molotov*— (-)*Ribbentrop Pact was officially declared null in 1941.
A lot has changed since last year *— (-)* probably for the better.`,

        `Teresa preferred the red*- (-)*embroidered lace dress.
The Chennai*— (-)*Mumbai flight will leave at 10:00 a.m.
Dinesh *— (-)* the boy from Thanjavur *— (-)* has arrived.
The majority of you scored between eighty*- (—)*eight and ninety*- (—)*nine percent on the test.`
      ]
    },
    {
      label: 'Pick the Right Word',
      id: 'complete-2',
      type: 'completePuzzle',
      lockAfter: 1,
      commonData: {
        type: 'rightOpen',
        title: 'Drag and drop the right word to match the article.',
        printTitle: 'Pick the right word that goes with the article.',
        leftWidth: 75,
        rightWidth: 245
      },
      data: [
        `check-, in, ing
clean- cut, er
editor-in-, chief, charge
empty-, handed, space
far-, fetched, away
know-, how, where`,

        ` life-, size, like
merry-go-, round, around
long-, distance, life
long-, term, time
one-, sided, time
one-, dimensional, ce`,

        `over-the-, counter, horizon
run-, in, ning
strong-, arm, chair
toss-, up, coin
up-to-, date, me
well-, being, done
word-of-, mouth, devil`
      ]
    },
    {
      label: 'Correct or Incorrect',
      id: 'correct-incorrect',
      type: 'classifySentence',
      title:
        'Classify the below sentences based on the correct usage of punctuation.',
      data: {
        types: [
          {
            name: 'Correct',
            text: `We know one thing for sure — something unexpected is coming our way.
Many children — living in orphanages — do not know what love feels like.
She wore a charcoal-gray rain jacket.
People — both young and old — were advised to take vaccinations at the earliest.`
          },
          {
            name: 'Incorrect',
            text: `Teresa preferred the red — embroidered lace dress.
The Chennai-Mumbai flight will leave at 10:00 a.m.
Dinesh-the boy from Thanjavur-has arrived.
The majority of you scored between eighty — eight and ninety — nine percent on the test.`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `The first word of every word is _________.`,
            options: `capitalized, small case, noun`
          },
          {
            qText: `A _______ will be used to separate two sentences`,
            options: `comma, full stop, apostrophe`
          },
          {
            qText: `We use a __________ to make short form`,
            options: `apostrophe, question mark, dash`
          },
          {
            qText: `_______ is used to end an assertive sentence.`,
            options: `Full Stop, Comma, Exclamation mark`
          },
          {
            qText: `A ____ indicates a longer pause than a comma and a semicolon.`,
            options: `dash, hyphen, colon`
          }
        ]
      }
    }
  ]
};
