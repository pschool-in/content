export default {
  id: 'pronoun-7',
  label: 'Pronoun',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Pronoun',
        text: [
          `A pronoun is defined as a word or phrase that is used as a substitution for a noun or noun phrase. Pronouns are short words and can do everything that nouns can do and are one of the building blocks of a sentence. Common pronouns are he, she, you, me, I, we, us, this, them, that, etc. A pronoun can act as a subject, direct object, indirect object, object of the preposition, etc. It takes the place of any person, place, animal or thing.
# Types of Pronouns
1. Pronouns of Place: These pronouns are used to indicate the place or position of a person, object, or thing.`,
          {
            type: 'html',
            text: `Examples: <b>here</b>, <b>there</b>, <b>where</b>, <b>everywhere</b>, <b>nowhere</b>, <b>somewhere</b>, etc.`
          },
          `2. Pronouns of Time: These pronouns are used to indicate the time or duration of an action or event.`,
          {
            type: 'html',
            text: `Examples: <b>now</b>, <b>then</b>, <b>soon</b>, <b>later</b>, <b>yesterday</b>, <b>today</b>, <b>tomorrow</b>, etc.`
          },
          `3. Pronouns of Direction: These pronouns are used to indicate the direction of movement of a person or thing.`,
          {
            type: 'html',
            text: `Examples: <b>up</b>, <b>down</b>, <b>forward</b>, <b>backward</b>, <b>left</b>, <b>right</b>, etc.`
          },
          `4. Pronouns of Cause: These pronouns are used to indicate the cause or reason behind an action or event.`,
          {
            type: 'html',
            text: `Examples: <b>because</b>, <b>since</b>, <b>as</b>, etc.`
          },
          `5. Pronouns of Purpose: These pronouns are used to indicate the purpose or intention behind an action or event.`,
          {
            type: 'html',
            text: `Examples: <b>to</b>, <b>in order to</b>, <b>so as to</b>, etc.`
          },
          `6. Pronouns of Source: These pronouns are used to indicate the source or origin of a person or thing.`,
          {
            type: 'html',
            text: `Examples: <b>from</b>, <b>of</b>, <b>by</b>, etc.`
          },
          `# Pronoun Rules
There are a few important rules for using pronouns.
1. Subject pronouns may be used to begin sentences.
Example: We did a great job.
2. Subject pronouns may also be used to rename the subject.
Example: It was she who decided we should go to Hawaii.
3. Indefinite pronouns don't have antecedents. They are capable of standing on their own.
Example: No one likes the sound of fingernails on a chalkboard.
4. Object pronouns are used as direct objects, indirect objects, and objects of prepositions. These include you, me, him, her, us, them, and it.
Example: David talked to her about the mistakes she made.
5. Possessive pronouns show ownership. They do not need apostrophes.
Example: The cat washed its tail by licking it.`
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-pro',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `Which of the following is NOT a type of pronoun?`,
            options: `Pronouns of Verb, Pronouns of Place, Pronouns of Time, Pronouns of Purpose `
          },
          {
            qText: `Which of the following is an example of an indefinite pronoun?`,
            options: `no one, he, she, they`
          },
          {
            qText: `Which of the following is an example of a possessive pronoun?`,
            options: `hers, his, them, we`
          }
        ]
      }
    },
    {
      label: 'True or False',
      type: 'classifySentence',
      id: 'true-false',
      commonData: {
        title: 'Classify the following sentences as True or False',
        types: ['True', 'False']
      },
      data: [
        [
          `"I" is a first-person singular pronoun. 
"She" is a third-person singular feminine pronoun. 
"They" is a third-person plural pronoun. `,

          `"He" is a first-person plural pronoun.
"We" is a third-person plural pronoun. `
        ],
        [
          `"You" is a second-person singular and plural pronoun.
"Me" is an object pronoun.`,

          `"It" is a first-person singular pronoun.
"Them" is a possessive pronoun.
"Her" is a third-person singular masculine pronoun. `
        ],
        [
          `"Him" is a third-person singular masculine pronoun.
"Them" is a third-person plural pronoun.
"He" is a subjective pronoun. `,

          `"Us" is a third-person plural pronoun.
"She" is an object pronoun. `
        ],
        [
          `"They" is a gender-neutral pronoun.`,

          `"It" is a possessive pronoun.
"You" is an indefinite pronoun.
"Me" is a subjective pronoun.
"Them" is a reflexive pronoun.`
        ],
        [
          `"Her" is a possessive pronoun.
"Him" is an object pronoun.
"Them" is an objective pronoun.`,

          `"Us" is a possessive pronoun.
"She" is a possessive pronoun. `
        ],
        [
          `Personal pronouns replace specific nouns in a sentence. `,

          `"She" is a possessive pronoun.
"He" is a reflexive pronoun.
"They" is an indefinite pronoun.
"It" is a subjective pronoun. `
        ],
        [
          `"She" is a subjective pronoun.`,

          `"You" is a reflexive pronoun.
"Me" is a possessive pronoun.
"Them" is a subjective pronoun.
"Her" is a reflexive pronoun.`
        ],
        [
          `The pronoun "I" is always capitalized.
The pronoun "we" is always capitalized. 
The pronoun "you" can be used to refer to a single person or a group of people.`,

          `The pronoun "it" is always used to refer to a non-living thing.
The pronoun "they" is only used to refer to a group of people. `
        ],
        [
          `The pronoun "who" is always a subject pronoun.
The pronoun "whom" is always an object pronoun.
The pronoun "it" can be used as both a subject and an object pronoun. 
The pronoun "them" can be used to refer to both people and things.`,

          `The pronoun "me" can also be used as a subject pronoun.`
        ],
        [
          `The pronoun "it" can also be used to refer to a baby whose gender is unknown. 
The pronoun "he" can also be used as an object pronoun. 
The pronoun "she" can also be used as a subject pronoun. `,

          `The pronoun "it" can never be used to refer to a living thing.
The pronoun "who" is only used to refer to people. `
        ]
      ]
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `*What (Whose)* is your favorite color?
*Which (What)* dress are you buying?
*Whose (What)* cycle is that?
*Whom (Whose)* has the team selected as their captain.
*Which (Whose)* is your favorite comic?
*Where (What)* is the Statue of Liberty situated?
*Whom (Whose)* did you invite for dinner?
*What (When)* has mom cooked for snacks?
*When (How)* is your brother returning from Singapore?
*How (What)* are you feeling today?`
      }
    },
    {
      id: 'fillup-2',
      label: 'Pronouns of Place',
      type: 'fillup',
      noOptions: true,
      data: {
        title: 'Fill in the blanks with pronouns of place',
        text: `She left her phone on the table. *It* is still there.
I was born in New York, and *there* is a lot to do there.
The movie theater is next to the park. *There* is a playground in the park.
The bookstore is across the street from the coffee shop. *It* has a great selection of books.
We went to the beach yesterday. *There* were a lot of people there.
The museum is downtown. *It* has a new exhibit.
He grew up in a small town. *There* was only one school there.
I lost my keys somewhere in the house. *They* could be anywhere.
The concert is at the stadium. *It* can hold thousands of people.
She lives in a remote village. *There* are no stores or restaurants there.`
      }
    },
    {
      label: 'Pronouns of Time - Identify',
      type: 'selectWord',
      id: 'select-word',
      multiSelect: true,
      data: {
        title: `Identify pronouns of time from the following sentences`,
        text: `*Yesterday* was a busy day for me.
*Tomorrow* is my best friend's birthday.
I have a doctor's appointment *next week*.
I can't meet you for lunch *today*. I have to work.
We're going on vacation *next month*.
I'll finish the project *soon*.
The store is closed *now*. It opens at 9 am.
I woke up *early* this morning.
*Last year* was a difficult year for everyone.
I'll call you *later* tonight.`
      }
    },
    {
      id: 'fillup-3',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Fill in the blanks with suitable pronouns'
      },
      lockAfter: 2,
      data: [
        `I saw Jane yesterday, and *she* looked great.
The package arrived this morning, and *it* was in good condition.
John and Susan went to the party, but *they* didn't stay long.
The cat is hungry, so *it* is meowing loudly.
The students finished their exams, and *they* all did well.`,

        `The car broke down on the highway, and *it* had to be towed.
I gave my friend some advice, and *she* found it helpful.
The flowers in the garden are beautiful, and *they* smell so sweet.
The teacher handed out the assignments, and *they* are due next week.
The restaurant is busy tonight, and *it* is taking a while to get our food.`,

        `I called my parents this morning, and *they* were happy to hear from me.
The concert is sold out, so *it* will be a packed house tonight.
The children are playing in the park, and *they* seem to be having a lot of fun.
The movie is starting soon, so *we* should hurry to get our seats.
I received a letter in the mail, and *it* was from an old friend.`,

        `The weather is nice today, so *it* is a great day to go for a walk.
The book I'm reading is interesting, and *it* is hard to put down.
My brother and I went to the game, but *he* left early because he wasn't feeling well.
The store is having a sale, and *it* is a great opportunity to save money.
The dog is barking at the mailman, but *it* is friendly.`,

        `The music in the club is too loud, and *it* is hard to hear anything.
I bought a new phone, and *it* has a lot of great features.
The waiter brought the menu, and *he* took our drink order.
The city is crowded during rush hour, and *it* can be difficult to drive.
I'm going on vacation next week, and *I* can't wait to relax.`
      ]
    },
    {
      label: 'Who, Which or Why',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      lockAfter: 1,
      commonData: {
        title: 'Fill in the blanks using prepositions (Who, Which or Why).'
      },
      data: [
        `*Who* is the new CEO of the company?
*Which* color do you prefer, red or blue?
*Why* did you decide to quit your job?`,

        `Do you know *who* won the election?
Can you tell me *which* train goes to the city center?
Can you explain *why* you are late for the meeting?`,

        `Can you tell me *who* is in charge of this project?
I can't decide *which* book to read first.
I'm not sure *why* he didn't show up for the party.`,

        `I wonder *who* is going to be the keynote speaker at the conference.
*Which* team do you think will win the championship this year?
*Why* do you think the company's sales have been declining?`,

        `*Who* do you think will be the next President?
The doctor recommended two treatments, but I'm not sure *which* one to choose.
The teacher asked us to write an essay about "*Why* education is important".`,

        `The police are looking for someone *who* witnessed the crime.
The store offers two sizes, small and large. *Which* one would you like to buy?
*Why* didn't you tell me about the change in plans earlier?`,

        `*Who* do you think is the most talented musician of our time?
*Which* of these paintings do you think is the most valuable?
*Why* did you choose this restaurant over the other options?`,

        `Can you guess *who* wrote this novel?
I'm considering two job offers. One is in New York and the other is in San Francisco. *Which* one should I take?
I don't understand *why* she is so upset about the situation.`,

        `I'm trying to remember *who* recommended this restaurant to us.
The movie theater is showing two films tonight. *Which* one do you want to see?
Can you tell me *why* the project deadline was pushed back?`,

        `*Who* was that person who just walked in the door?
I have a few questions about the proposal. *Which* section should I focus on?
*Why* do some people prefer to work from home rather than in an office?`
      ]
    },
    {
      id: 'mcq-adjective',
      label: 'Multiple Choice Questions ',
      type: 'mcq',
      data: {
        title: 'Choose the correct alternative',
        questions: [
          {
            qText: '__________ pronouns may be used to begin sentences.',
            options: `Subject, Object, Possessive`
          },
          {
            qText: 'Subject pronouns may also be used to rename the ________.',
            options: `subject, object, noun`
          },
          {
            qText:
              '____________ pronouns don`t have antecedents. They are capable of standing on their own.',
            options: `Indefinite, Subject, Possessive`
          },
          {
            qText:
              'Object pronouns are used as direct objects, indirect objects, and objects of _____________.',
            options: `prepositions, adverbs, nouns, verbs`
          },
          {
            qText:
              'Possessive pronouns show ownership. They do not need ___________.',
            options: `apostrophes, commas, semicolons`
          }
        ]
      }
    }
  ]
};
