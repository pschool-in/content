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
      id: 'fillup',
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
      id: 'fillup-2',
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
