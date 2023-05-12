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
          `A pronoun is defined as a word or phrase that is used as a substitution for a noun or a noun phrase. Pronouns are short words and can do everything that nouns can do and are one of the building blocks of a sentence. A pronoun can act as a subject, direct object or indirect object. It takes the place of any person, place, animal or thing.
# Types of Pronouns
1. Personal Pronouns: Personal pronouns are used in place of the person or people that we are talking about.`,
          {
            type: 'html',
            text: `Eg: <i>I</i> like ice cream.<br>
<i>We</i> eat ice cream frequently `
          },
          `2. Reflexive and Emphatic Pronouns: Reflexive pronouns act as objects and usually show that the person who does the action of the verb is also the person who receives the action.
When reflexive pronouns are used for emphasis, they are called emphatic pronouns.`,
          {
            type: 'html',
            text: `Eg: I <i>myself</i> cut my hair.<br> 
They <i>themselves</i> suggested this restaurant.`
          },
          `3. Possessive Pronouns: Possessive pronouns are used to show possession of an item.`,
          {
            type: 'html',
            text: `Eg: These are <i>my</i> spectacles. => These spectacles are <i>mine</i>.<br>
Those are <i>your</i> slippers. => Those slippers are <i>yours</i>.`
          },
          `4. Relative Pronouns: Relative pronoun relates a clause to a noun used earlier. The clause is usually a subordinate clause and it is introduced by the relative pronoun.`,
          {
            type: 'html',
            text: `Eg: I like rasgulla, <i>which</i> is a popular sweet.<br>
We are looking for a teacher <i>who</i> speaks Marathi.`
          },
          `5. Interrogative Pronouns: Interrogative pronouns are used to ask questions.`,
          {
            type: 'html',
            text: `Eg: <i>Who</i> is the culprit?<br>
<i>Whom</i> should I ask?`
          },
          `6. Indefinite Pronouns: Indefinite pronouns stand in place of an undefined person or thing.`,
          {
            type: 'html',
            text: `Eg: <i>anybody</i>, <i>something</i>, <i>no one</i>, <i>somebody</i>, <i>anyone</i>, <i>few</i>, <i>many</i>, <i>nobody</i>.`
          },
          `7. Distributive Pronouns: Distributive pronouns refer to one thing at a time. They are always singular`,
          {
            type: 'html',
            text: `Eg: <i>each</i>, <i>either</i>, <i>neither</i>.`
          },
          `8. Demonstrative Pronouns: Demonstrative pronouns are used to point out things they refer to.`,
          {
            type: 'html',
            text: `Eg: <i>this</i>, <i>that</i>, <i>these</i>, <i>those</i>.`
          },
          `# Pronoun Rules
There are a few important rules for using pronouns.
1. Subject pronouns may be used to begin sentences.
Eg: We did a great job.
2. Subject pronouns may also be used to rename the subject.
Eg: It was she who decided we should go to Hawaii.
3. Indefinite pronouns are capable of standing on their own without referring to a specific noun.
Eg: No one likes the sound of fingernails on a chalkboard.
4. Object pronouns are used as direct objects, indirect objects, and objects of prepositions. These include you, me, him, her, us, them, and it.
5. Possessive pronouns show ownership. They do not need apostrophes.
Eg: yours, his, ours, theirs, hers, mine`
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
            qText: `Which of the following pronouns can be used to begin a sentence?`,
            options: `Subject pronouns, Object pronouns, Possessive pronouns, Indefinite pronouns  `
          },
          {
            qText: `Which of the following is an example of an indefinite pronoun?`,
            options: `no one, he, she, they`
          },
          {
            qText: `Which of the following is an example of a possessive pronoun?`,
            options: `hers, his, them, we`
          },
          {
            qText: `Which pronoun is capable of standing on its own without an antecedent?`,
            options: `Indefinite pronouns, Subject pronouns, Possessive pronouns, Object pronouns`
          },
          {
            qText: `Do possessive pronouns require apostrophes?`,
            options: `No, Yes, Sometimes, Always`
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
            text: `Personal pronouns replace specific nouns in a sentence. 
The pronoun "I" is always capitalized.
The pronoun "you" can be used to refer to a single person or a group of people.
The pronoun "it" can also be used to refer to a baby whose gender is unknown.`
          },
          {
            name: 'False',
            text: `The pronoun "it" is always used to refer to a non-living thing.
The pronoun "they" is only used to refer to a group of people.
The pronoun "it" can never be used to refer to a living thing.
The pronoun "who" is only used to refer to people.`
          }
        ]
      }
    },
    {
      label: 'Possessive or Reflexive',
      type: 'classifySentence',
      id: 'possessive-reflexive',
      data: {
        title: 'Classify the underlined pronoun as Possessive or Reflexive',
        types: [
          {
            name: 'Possessive',
            text: `That toy on the shelf is *mine*.
All of the houses in our neighborhood look the same, but *ours* is the only one with a satellite dish.
Wendy and Ronald separated the french fries into two piles: the left one was *hers* and the right one was *his*.`
          },
          {
            name: 'Reflexive',
            text: `Ken looked at *himself* in the mirror.
I like to cheer *myself* up with desserts.
The silly clowns made fools of *themselves*.
Are you talking to *yourself*?`
          }
        ]
      }
    },
    {
      label: 'Relative or Demonstrative',
      type: 'classifySentence',
      id: 'relative-demonstrative',
      data: {
        title: 'Classify the underlined pronoun as Relative or Demonstrative',
        types: [
          {
            name: 'Relative',
            text: `I need to find a person *who* can read Swedish.
She doesn't want to eat a meal *that* is too spicy.
This book, *which* ends on a cliffhanger, is really exciting.
The man *who* first saw the comet reported it as a UFO`
          },
          {
            name: 'Demonstrative',
            text: `*This* is my favorite shirt.
I don't know what *that* is, but it definitely isn't friendly.
I need you to fix *these*.
*This* is the one I left in the car.
Shall I take *those*?`
          }
        ]
      }
    },
    {
      label: 'Interrogative or Indefinite',
      type: 'classifySentence',
      id: 'interrogative-indefinite',
      data: {
        title: 'Classify the underlined pronoun as Interrogative or Indefinite',
        types: [
          {
            name: 'Interrogative',
            text: `*Who* wrote this letter?
*What* is an amphibian?
*Which* is the correct answer?
*Who* told you to do that?`
          },
          {
            name: 'Indefinite',
            text: `This note could have been written by *anybody*.
*Someone* ate my lunch.
The water splashed *everywhere*.
*Somebody* must have seen the driver leave.
I have *nothing* to declare except my genius.`
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
*Which (When)* dress are you buying?
*Whose (How)* cycle is that?
*Whom (Whose)* has the team selected as their captain.
*Which (Whose)* is your favorite comic?
*Where (What)* is the Statue of Liberty situated?
*Whom (Whose)* did you invite for dinner?
*What (When)* has mom cooked for snacks?
*When (What)* is your brother returning from Singapore?
*How (What)* are you feeling today?`
      }
    },
    {
      id: 'fillup-2',
      label: 'Fill in the blanks - 2',
      type: 'fillup',
      data: {
        noOptions: true,
        title: 'Fill in the blanks with pronouns',
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
      label: 'Indefinite Pronoun - Identify',
      type: 'selectWord',
      id: 'select-word',
      data: {
        title: `Identify indefinite pronouns from the following sentences`,
        text: `*Someone* left their umbrella in the office.
Is there *anyone* who doesn't like ice cream?
*Nobody* wants to be left behind.
Can *everyone* sit down, please?
*Anything* is possible if you put your mind to it.
I found *everything* I was looking for.
*Everyone* should have the opportunity to succeed.
Allison had invited all of her cousins, but *none* had come yet.
*Each* of us has a unique perspective on life.
Could *someone* tell me where to find a doctor?`
      }
    },
    {
      id: 'fillup-3',
      label: 'Fill in the blanks - 3',
      type: 'matchByDragDrop',
      commonData: {
        title: 'Fill in the blanks with suitable pronouns'
      },
      lockAfter: 2,
      data: [
        `*She* is the girl I was talking to you about. 
This is the place *where* I found my missing bag. 
John and Susan went to the party, but *they* didn't stay long.
The cat is hungry, so *it* is meowing loudly.
Has *everyone* completed the work that was assigned for today?`,

        `The designer *who* made your dress is waiting outside.
The teacher handed out the assignments, and *they* are due next week.
The assault victim had nobody to *whom* to turn for help.
I saw the dog *which* ate the cake.
We did not know the tune *that* had been played.`,

        `I saw Jane yesterday, and *she* looked great.
The package arrived this morning, and *it* was in good condition.
Did you do it *yourself*?
We always help each *other* out. 
The students finished their exams, and *they* all did well.`,

        `The car broke down on the highway, and *it* had to be towed.
I gave my friend Riya some advice, and *she* found it helpful.
The flowers in the garden are beautiful, and *they* smell so sweet.
The man *whose* bike was stolen has filed an FIR.
The restaurant is busy tonight, and *it's* taking a while to get our food.`,

        `I called my parents this morning, and *they* were happy to hear from me.
The concert is sold out, so *it* will be a packed house tonight.
I don't know *anything* about music.
The movie is starting soon, so *we* should hurry to get our seats.
Tommy and Jane hate each *other*.`,

        `I found my book in the garden, but I couldn't find *yours*.
Mary has made this wall hanging *herself*.
My brother and I went to the game, but *he* left early because he wasn't feeling well.
The children are playing in the park, and *they* seem to be having a lot of fun.
The dog is barking at the mailman, but *it* is friendly.`,

        `The music in the club is too loud, and *it* is hard to hear anything.
Everything is funny as long as it is happening to *somebody* else.
The waiter brought the menu, and *he* took our drink order.
Michel sent *himself* a copy of e-mail.
I'm going on vacation next week, and *I* can't wait to relax.`
      ]
    },
    {
      label: 'Fill in the blanks - 4',
      type: 'fillup',
      id: 'drag-drop',
      lockAfter: 1,
      commonData: {
        noOptions: true,
        title: 'Fill in the blanks using Interrogative Pronouns'
      },
      data: [
        `*Who* is the new CEO of the company?
*Which* color do you prefer, red or blue?
*Why* did you decide to quit your job?
Do you know *who* won the election?
Can you tell me *which* train goes to the city center?`,

        `Can you explain *why* you are late for the meeting?
Can you tell me *who* is in charge of this project?
I can't decide *which* book to read first.
I'm not sure *why* he didn't show up for the party.
I wonder *who* is going to be the keynote speaker at the conference.`,

        `*Which* team do you think will win the championship this year?
*Why* do you think the company's sales have been declining?
*Who* do you think will be the next President?
The doctor recommended two treatments, but I'm not sure *which* one to choose.
The teacher asked us to write an essay about "*Why* education is important"`,

        `The police are looking for someone *who* witnessed the crime.
The store offers two sizes, small and large. *Which* one would you like to buy?
*Why* didn't you tell me about the change in plans earlier?
*Who* do you think is the most talented musician of our time?
*Which* of these paintings do you think is the most valuable?`,

        `*Why* did you choose this restaurant over the other options?
Can you guess *who* wrote this novel?
I'm considering two schools. One is in New York and the other is in San Francisco. *Which* one should I choose?
I don't understand *why* she is so upset about the situation.
I'm trying to remember *who* recommended this restaurant to us.`,

        `The movie theater is showing two films tonight. *Which* one do you want to see?
Can you tell me *why* the project deadline was pushed back?
*Who* was that person who just walked in the door?
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
            qText: 'Possessive pronouns do not need apostrophes. True or False',
            options: `True, False`
          }
        ]
      }
    }
  ]
};
