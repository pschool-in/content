export default {
  id: 'subject-verb-7',
  label: 'Sentence Analysis',
  lockAfter: 3,
  list: [
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
Eg: You and I have done this.
2. When 'one of' is used with a plural noun, the verb after it is always singular,
Eg: One of my friends is sick.
3. Nouns that are connected by 'each' and 'every' takes a singular verb with them.
Eg: Each boy was given a prize.
Every day is a battle here.
4. If two nouns are connected by 'and' but are meant for one person or one idea then the verb becomes singular.
Eg: Time and tide wait for no one.
5. When two subjects are joined by 'as well as, along with, together with, in addition to' then the verb agrees to the first subject.
Eg: She as well as her friends is very pleasing.
The boys together with the coach were practicing for the match.
6. When two or more subjects are connected by 'or, nor, either or, neither nor' then the verb is singular.
Eg: Neither Ram nor Sham has eaten.
7. If a sentence starts with introducing 'there' then the verb agrees to the number of the noun that comes after 'there'.
Eg: There is a pen.
There were big rivers.
8. Nouns, though plural but refer to the name of a book, country or province then the verb used is ‘singular’.
Eg: The United States is a powerful country.
9. When plural nouns refer to a whole then it is taken to be singular and the verb is also singular.
Eg: Two thousand rupees is not a small amount.
10. The phrase 'a number of' takes a plural verb but the phrase 'the number of' takes a singular verb.
Eg: A number of boys were absent.
The number of people there is not much.
11. Few, a few, many, several/both are plural in form and they take plural verbs with them.
Eg: Few books are available to me.
12. If two subjects with different numbers are joined by 'not only, but also, either or, neither nor' then the verb agrees to the subject nearer to it.
Eg: Neither they nor that man goes to the park.
Either he or his friends were the culprit. `
        ]
      }
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `In English, the subject and verb in a sentence must always agree in number. 
Singular subjects take singular verbs, and plural subjects take plural verbs.
When the subject and verb are separated by a phrase or clause, it is important to remember to match the verb to the subject, not the object of the phrase or clause.`
          },
          {
            name: 'False',
            text: `The verb always agrees with the first noun in a compound subject.
Collective nouns, such as "team" or "family," always take singular verbs.`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-sub-vrb',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `Which of the following rules for subject-verb agreement is incorrect?`,
            options: `Nouns connected by 'each' and 'every' takes a plural verb with them.
If a sentence starts with introducing 'there' then the verb agrees to the number of the noun that comes after 'there'.
Two nouns or pronouns joined by 'and' takes a plural verb.
When 'one of' is used with a plural noun, the verb after it is always singular`
          },
          {
            qText: `Which of the following sentences has a subject-verb agreement error?`,
            options: `Time and tide waits for no one
Every student in the class has their own book
There is many different types of fruit at the market
Neither the boys nor the girl are going to the party.`
          },
          {
            qText: `Which of the following is NOT a coordinating conjunction?`,
            options: `although, and, but, for`
          },
          {
            qText: `Choose the correct verb form to complete the sentence:
Every day, the students ___________ to school on time.`,
            options: `come, comes, came, coming`
          },
          {
            qText: `Which of the following sentences has a subject-verb agreement error?`,
            options: `The cat and the dog is playing in the backyard.
Several students from our class has passed the exam.
Neither the teacher nor the students were happy with the test results.`
          }
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
The group of students is planning a trip.`,

          `One of my sisters live in Ranchi.
The group of students are planning a trip.`
        ],
        [
          `She loves chocolates very much.
The players have stopped shouting.
The dogs run in the park.`,

          `Chennai and Kolkata is beautiful cities.
The dogs runs in the park.`
        ],
        [
          `Mr. Singh who was a poet and singer is no more.
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
        title: `Fill in the blanks in compliance with subject-verb agreement.`,
        text: `Many forms *have (has)* been received.
One of the thieves *has (have)* been caught.
Ramu and Shyamu *are (is)* playing chess.
Each man and each woman *was (were)* rejoicing.
The horse and cart *are (is)* lost.
Mahi as well as her teachers *is (are)* very much concerned.
My brothers along with my friend *were (was)* coming to my house.
Either of the two *is (are)* suitable.
Neither of the two girls *is (are)* going to win the competition.
A number of migratory birds *are (is)* coming to India during winter.`
      }
    },
    {
      id: 'fill-up-option-para',
      label: 'Complete: Story',
      type: 'fillup',
      commonData: {
        title: `Complete the short story in accordance with subject-verb agreement.`
      },
      data: [
        `Once upon a time in the quaint village of Verboten, there *lived (lives)* a clever fox named Felix. Felix *was (were)* renowned for his cunning ways and loved to play tricks on the other *animals (animal)* in the forest. One sunny day, Felix decided to *organize (organized)* a game of hide-and-seek. He gathered all the *animals (animal)* and explained the rules.
"The game *is (are)* simple," Felix said with a mischievous grin. "I will count to ten, and all of you will *find (found)* a hiding spot. Then, I will seek you out!"`,

        `Excitement filled the air as the *animals (animal)* scurried off to find the perfect hiding place. Felix *closed (close)* his eyes and *began (begin)* to count, "One, two, three..." He made sure to enunciate each number clearly, so there *was (were)* no confusion.       
Meanwhile, the *animals (animal)* frantically searched for hiding *spots (spot)*. The *rabbits (rabbit)* hopped into burrows, the birds flew high up into the *trees (tree)*, and the squirrels dashed behind *bushes (bush)*. They all *wanted (want)* to be the last one *found (find)* by Felix.`,

        `As Felix *reached (reach)* the count of ten, he *opened (open)* his *eyes (eye)* and began his search. He *moved (move)* stealthily through the forest, his eyes darting from one hiding *spot (spots)* to another. The *animals (animal)* held their breath, trying to remain as still as possible.
Felix found the *rabbits (rabbit)* first. Their twitching *noses (nose)* gave them away, and Felix *pounced (pounce)* on them with a triumphant laugh. "Gotcha!"`,

        `Next, he spotted the *birds (bird)* perched on branches. Their *feathers (feather)* ruffled with nervousness, but Felix was quick to catch them too. "Found you!"
Lastly, he *approached (approaches)* the *bushes (bush)* where the squirrels hid. He could hear their tiny *hearts (heart)* beating rapidly. Felix lunged forward, but the *squirrels (squirrel)* managed to scamper away just in time. "Oh no, you got away!" Felix exclaimed, slightly disappointed.
The squirrels *giggled (giggle)* and shouted, "You almost caught us, Felix, but we're too fast for you!"`,

        `Felix chuckled and *admitted (admits)* defeat. "Indeed, you are swift little *creatures (creature)*. Well done!"
The *animals (animal)* emerged from their hiding spots, feeling both *relieved (relieve)* and exhilarated. They congratulated each *other (others)* on their clever hiding *places (place)* and thanked Felix for organizing such a thrilling game.
And so, in the village of Verboten, the memory of *Felix's (felix)* hide-and-seek game lingered for *years (year)* to come. The *animals (animal)* learned that even though Felix was a formidable seeker, their *teamwork (teamworks)* and agility could outsmart him.`
      ]
    },
    {
      label: 'Object and Complement',
      type: 'passage',
      id: 'sentence-o-v',
      data: {
        title: 'Sentence Analysis',
        text: [
          `# The Object of a Verb
When we use a verb transitively, we need an object to make the meaning of the sentence complete. Transitive verbs need an object to complete their meaning. When an object consists of more than one word, we have the object word and its attributes just like we have attributes for the subject word.`,
          {
            type: 'html',
            text: `Eg -  The mother scolded the naughty <i>child<i>. (Here the <i>child<i> is the object word, and <i>naughty<i> are its attributes.)`
          },
          `# Direct and Indirect Objects
Very often, we require two objects with a transitive verb.`,
          {
            type: 'html',
            text: `Eg - Priya gave <i>Reem<i> a <i>book<i>.`
          },
          `Here we have two objects of the verb gave. When we ask the question 'Priya gave what?' we get the answer a book, which is called the direct object of the verb. Now if we ask whom the book was given to, we get the answer, Reem. `,
          {
            type: 'html',
            text: `The word <i>Reem<i> is then the indirect object of the verb '<i>gave<i>'.`
          },
          `# The Complement 
Sometimes, the verb in the predicate is an intransitive verb, but it is incomplete by itself. It requires a noun, a pronoun, an adjective, etc. to complete the predicate. The word or group of words required to complete the predicate is called a complement. The complement of an intransitive verb describes the subject. It is therefore called the subject complement.`,
          {
            type: 'html',
            text: `Eg - Mother seems <i>agitated<i>.<br>
Jake appeared <i>unhappy<i>.`
          },
          `Object complements provide more detail about the object of a sentence, while subject complements provide information about the subject of a sentence.`
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-sub-o-v',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What is the purpose of an object in a sentence?`,
            options: `To complete the meaning of a transitive verb, To complete the meaning of an intransitive verb, To describe the subject of the sentence`
          },
          {
            qText: `What is the difference between a direct object and an indirect object?`,
            options: `A direct object receives the action of the verb, while an indirect object indicates to whom or for whom the action is done, A direct object indicates to whom or for whom the action is done, while an indirect object receives the action of the verb`
          },
          {
            qText: `What is a complement in a sentence?`,
            options: `A word or group of words required to complete the predicate of an intransitive verb, A verb that does not require an object to complete its meaning`
          },
          {
            qText: `What is a subject complement?`,
            options: `A word or word group that defines or renames the subject in some way, A word or word group that completes the subject in a sentence`
          },
          {
            qText: `What is an object complement?`,
            options: `A word or word group that modifies the object in a sentence, A word or word group that modifies the verb in a sentence`
          },
          {
            qText: `Which of the following is a subject complement?`,
            options: `The sun is shining.
The teacher gave her students a quiz.
The children are playing in the park.
She painted the room blue.`
          },
          {
            qText: `Choose the correct complement to complete the sentence:
He seems _________ today.`,
            options: `happy, happily, happiness, happiest`
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
Meena's hair dye turned the water *pink*. 
We painted the ceiling *blue*. 
You are making me *sad*. 
Preethi is a good *dancer*. 
Dina named her parakeet *Odi*.
The gift Kareena gave her brother was a *hamster*. 
Buck grew up in Oman and became an expert *horse rider* before reaching his 18th birthday.`,

        `I once considered Neena my fiercest *enemy*.
After reviewing the details of the case, the court pronounced the boy *not guilty*. 
By the second month of the drought, the river had run *dry*.
The doctor declared her *healthy*. 
He seemed *nervous* before the interview.
The teacher found the essay *well-written*. 
I think the party will be *a success*. 
She made him feel *welcome*. 
The chef deemed the dish *too salty*.`
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
            text: `Today is *Monday*.
Preethi is a *student*.
Your bike is *amazing*.
She seems *nice*.
We were *exhausted* after a day of tiring work.
The chief guest was *late to the meeting*.
I am *irritated*.`
          },
          {
            name: 'Object',
            text: `Mihika made her mom *happy*.
I painted my nails *pink*.
The company designated Tony the *employee of the month*.
Making handmade gifts makes my mind *stress-free*.
This makes the problem even *more complicated*.
Leela and Naksh named their daughter *Naitra*. 
What I said made my uncle *angry*.`
          }
        ]
      }
    },
    {
      label: 'Punctuation',
      type: 'passage',
      id: 'passage-punctuation',
      data: {
        title: 'Punctuation',
        text: [
          `1. Hyphen: Depicted by '-' is used between two words that are parts of a name or a compound word.`,
          {
            type: 'html',
            text: `For example, long<b>-</b>term, get<b>-</b>together`
          },
          `2. Dash: A dash (—) is a punctuation mark that resembles a hyphen, but is longer. A dash is used to separate parts of a sentence and indicate a break. It indicates a longer pause than a comma and a semicolon.
# Examples of hyphenated compound words`,
          {
            type: 'sitewords',
            text: `check-in, clean-cut, editor-in-chief, empty-handed, far-fetched, father-in-law, mother-in-law, sister-in-law, free-for-all, know-how, know-it-all, life-size, merry-go-round, long-distance, long-term, mind-blowing, nitty-gritty, one-sided, one-dimensional, two-dimensional, over-the-counter, run-in, runner-up, strong-arm, topsy-turvy, toss-up, up-to-date, well-being, word-of-mouth`,
            width: 90
          },
          `# Examples of open compound words`,
          {
            type: 'sitewords',
            text: `black eye, cell phone, close call, common sense, cotton candy, dining room, first aid, full moon, French fry, heart attack, high school, hot dog, ice cream, life jacket, living room, no one, peanut butter, post office, prime minister, real estate, remote control, report card, rib cage, role model, roller coaster, salad dressing, search engine, slam dunk, sleeping bag, time capsule, vacuum cleaner, vending machine, video game, waiting room, washing machine, web page`,
            width: 90
          }
        ]
      }
    },
    {
      id: 'true-false-2',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Commas are used to separate items in a list or series.
Semicolons are used to separate independent clauses in a sentence.
The exclamation point is used to indicate emphasis or strong feeling in a sentence.
The colon is used to introduce a list, explanation, or example.`
          },
          {
            name: 'False',
            text: `The period is used to indicate a question in a sentence. `
          }
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
        `We know one thing for sure *— (-)* something unexpected is coming our way.
Many children *— (-)* living in orphanages *— (-)* do not know what love feels like.
She wore a charcoal*- (—)*gray rain jacket.
People *— (-)* both young and old *— (-)* were advised to take vaccinations at the earliest.
The mathematician*— (-)*philosopher has won the Nobel Prize this year.
I like vanilla*- (—)*flavored ice cream.
Molotov*— (-)*Ribbentrop Pact was officially declared null in 1941.
A lot has changed since last year *— (-)* probably for the better.
Teresa preferred the red*- (-)*embroidered lace dress.
The Chennai*— (-)*Mumbai flight will leave at 10:00 a.m.`,

        `Dinesh *— (-)* the boy from Thanjavur *— (-)* has arrived.
The majority of you scored between eighty*- (—)*eight and ninety*- (—)*nine percent on the test.
One*- (—)*fourth of the students in the class have parents from another country.
My work timings are from 8*— (-)*5.
The trek will be organized from May 12*— (-)*15.
We will have a get*- (—)*together next weekend to celebrate your birthday.
The game started out as an organized game of tag, but it ended up a free*- (—)*for*- (—)*all.`
      ]
    },
    {
      label: 'Pick the Right Word',
      id: 'complete-2',
      type: 'completePuzzle',
      lockAfter: 1,
      commonData: {
        type: 'rightOpen',
        title:
          'Drag and drop the right word to form a hyphenated compound word.',
        printTitle: 'Pick the right word to form a hyphenated compound word.',
        leftWidth: 75,
        rightWidth: 245
      },
      data: [
        `check-, in, ing
clean-, cut, er
editor-in-, chief, charge
empty-, handed, space
far-, fetched, away
know-, how, where
life-, size, like
merry-go-, round, around
long-, distance, life
long-, term, time`,

        `one-, sided, time
one-, dimensional, ce
over-the-, counter, horizon
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
      id: 'correct-incorrect-2',
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
      id: 'mcq-last',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `The first word of every word is _________.`,
            options: `capitalized, small case, noun`
          },
          {
            qText: `A _______ will be used to separate two sentences`,
            options: `comma, hyphen, apostrophe`
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
    },
    {
      id: 'fill-up-option',
      label: 'Complete: Story',
      type: 'fillup',
      commonData: {
        title: `Complete the short story using punctuation.`
      },
      data: [
        `*Once (once)* upon a time*, (.)* in the bustling town of Punctuationville*, (.)* there lived a group of peculiar characters: Period*, (.)* Question Mark*, (.)* Exclamation Point*, (.)* Comma*, (.)* and Semicolon. Each had their own unique role in the town*, (.)* ensuring that sentences were properly constructed and communication flowed smoothly*. (?)*
Period*, (.)* being the eldest and most respected*, (.)* was considered the leader of the town*. (?)* With a calm and steady demeanor*, (.)* Period brought a sense of closure to every sentence*. (?)* Whenever someone needed to end a thought or express a statement*, (.)* they would turn to Period for guidance.`,

        `Question Mark*, (.)* on the other hand*, (.)* was known for their curiosity. *They (they)* constantly sought knowledge and encouraged others to do the same. Whenever someone had a burning question*, (.)* they would seek out Question Mark*, (.)* who would provide the necessary punctuation to make it clear*. (?)*
Exclamation Point was the life of the party. With their vibrant and energetic personality*, (.)* they brought excitement and enthusiasm to any sentence they encountered. Whenever someone wanted to express joy*, (.)* surprise*, (.)* or intense emotions*, (.)* Exclamation Point was there to add a punch of exclamation.`,

        `Comma was a master of organization. *They (they)* loved to separate and connect various elements within a sentence*. (?)* Whenever someone needed to list items*, (.)* create pauses*, (.)* or clarify relationships between words or phrases*, (.)* Comma was the go-to punctuation mark.
Semicolon was an elusive and enigmatic character. They existed to connect two closely related independent clauses*. (?)* Whenever someone wanted to join two thoughts together without using a conjunction*, (.)* Semicolon would gracefully bridge the gap.`,

        `The town of Punctuationville functioned harmoniously for years*, (.)* with each character fulfilling their role with precision and care*. (?)* The townspeople valued their punctuations and sought their guidance in times of communication uncertainty.
One day*, (.)* a newcomer arrived in Punctuationville. This character called themselves *" (,,)*Ellipsis*" (,,)* and had a mysterious aura surrounding them. Ellipsis was a series of three dots*, (.)* representing an omission or a trailing thought*. (?)* The residents of Punctuationville were both intrigued and wary of this new punctuation mark.`,

        `Ellipsis didn't fit into the established order of the town*, (.)* as their purpose was often to create suspense or indicate a pause. They introduced an element of ambiguity that had not been experienced before. Some residents found Ellipsis to be fascinating*, (.)* while others feared the disruption it could bring*. (?)*
Period*, (.)* being the wise and impartial leader*, (.)* called for a town meeting to discuss the addition of Ellipsis to the community. Each punctuation mark had the opportunity to voice their thoughts and concerns. Period emphasized the importance of embracing change and adapting to new forms of expression.`,

        `In the end*, (.)* the townspeople of Punctuationville decided to welcome Ellipsis into their community. They recognized that language and communication were constantly evolving*, (.)* and they needed to adapt to stay relevant. Ellipsis found its place among the other punctuations*, (.)* complementing their existing roles and adding a touch of intrigue to their sentences.
And so*, (.)* Punctuationville continued to thrive*, (.)* with Period*, (.)* Question Mark*, (.)* Exclamation Point*, (.)* Comma*, (.)* Semicolon*, (.)* and Ellipsis working together to ensure effective communication for all. The residents of the town learned that punctuation was not just a set of rules but a way to convey meaning*, (.)* emotion*, (.)* and creativity. Together*, (.)* they celebrated the power of punctuation in shaping their stories and connecting their words.`
      ]
    }
  ]
};
