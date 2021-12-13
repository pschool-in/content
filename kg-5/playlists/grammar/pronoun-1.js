export default {
  label: 'Pronoun - Introduction',
  id: 'pronoun-1',
  lockAfter: 4,
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Pronouns',
        text: [
          `Pronouns are words used in the place of nouns, to avoid repetition of nouns.
Eg: I, he, she, we, me, us, her, him, they, them`,
          '# Personal Pronouns',
          `They are used to indicate a specific or group of people or things.`,
          `A personal pronoun can be used as subject or object in a sentence. In the below word pairs, the first one is used as subject and the second one is used as object.`,
          {
            type: 'hilight',
            text: `I , me
we, us
she, her
he, him
they, them`
          },
          `'You' is used both subject and object.`,
          '# Possesive Pronouns',
          `They are used to show ownership or possession. eg: mine, yours, his, hers, ours, theirs`,
          `# Demonstrative Pronouns`,
          `They are used to point at something. eg: this, that, these, those, their`,
          '# Reflexive Pronouns',
          `It is used as an object that refers back to the subject. eg: myself, yourself, herself, himself, itself`,
          {
            type: 'hilight',
            text: `He cuts himself while chopping the vegetables.
I don't trust myself in tough times.`
          },
          `# Emphatic Pronouns`,
          `They are used to put emphasis on the subject. So usually they follow the subject.`,
          {
            type: 'hilight',
            text: `She herself cooked the food.
I myself saw him.
He himself cut the cake.`
          }
        ]
      }
    },
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillup',
      commonData: {
        options: 'He, She, It, They'
      },
      data: [
        `Peter is a cook. *He* cooks well.
Selvi sells flowers. *She* makes bouquets too.
The doll is on the shelf. *It* is pretty.
Tommy is my pet dog. *It* plays with a ball.
Rohit and Mohit are two brothers. *They* live together.
The cars are there. *They* need cleaning.`,

        `Tim is a good boy. *He* always works hard.
Ravi is my friend. *He* is a bright young man.
Mrs Durga makes dresses. *She* makes doll dresses too.
My mom and my brother love cooking. *They* cook tasty food.
Mango is my favourite fruit. *It* is very tasty.
I have a squirrel. *It* eats nuts.`,

        {
          options: 'I, We, You',
          text: `*I* am a good singer.
*You* can do your work tomorrow.
*I* love my family.
*We* love our school.
*You* must bring your book daily.
*We* have many books in our class.`
        },
        {
          options: 'I, We, You',
          text: `*I* play with my elder brother.
*We* enjoyed our picnic.
Congratulations! *You* are such a good dancer.
*We* have to finish our work soon.
*I* like my city.
*You* can go back to your seat.`
        }
      ]
    },
    {
      type: 'selectWord',
      label: 'Select the Pronoun',
      id: 'select-word',
      commonData: {
        title: 'Select the pronoun in the below sentence.'
      },
      data: [
        `*I* am very happy.
*She* is going home.
*He* is playing.
*They* are nice people.
Ravi is playing with *him*.
Do not touch the water. *It* is hot.
*I* am waiting for the train.
The teacher thinks that *he* is a smart boy.
My mom told my brother that *she* is a good dancer.`,

        `Please give the pen to *me*.
*I* am sitting on the chair.
The guests arrived while *we* were watching the cricket match.
Are *you* from Hyderabad?
*It* is an amazing movie.`
      ]
    },
    {
      label: 'Choose the correct answer',
      type: 'mcq',
      id: 'mcq',
      data: {
        title: 'Choose the correct answer.',
        questions: [
          {
            qText: 'Are you a cousin of Meera?',
            options: `Yes, I am.
Yes, she is.`
          },
          {
            qText: 'Do you both play together?',
            options: `Yes, we do.
Yes, they do.`
          },
          {
            qText: 'How many pets does Shiva have?',
            options: `He has two parrots.
They have two parrots.`
          },
          {
            qText: 'Are the parrots kept in the cage?',
            options: `Yes, they are in a big cage.
Yes, we are in a big cage.`
          },
          {
            qText: 'Would you like to have a pet?',
            options: `Yes, I will take care of it.
Yes, we will take care of it.`
          },
          {
            qText: `Your parent's permission is required.`,
            options: `Have you taken permission from them?
Have they taken permission from them?`
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match the Pairs',
      id: 'match-pair',
      data: {
        lang: 'en',
        title: 'Match the pronouns that have same meaning.',
        text: `I, Me
He, Him
She, Her
They, Them
We, Us`
      }
    },
    {
      label: 'This, That, These, Those',
      type: 'passage',
      id: 'this-that-these-those',
      data: {
        title: 'This, That, These, Those',
        text: `These are words that help to show where things are.
We use 'this' when pointing to one person, place, animal or thing (singular) that is near the speaker.
We use 'these' when pointing to more than one person, place, animal or thing (plural) that are near the speaker.
We use 'that' when pointing to one person, place, animal or thing (singular) that is far from the speaker.
We use 'those' when pointing to more than one person, place, animal or thing (plural) that are near the speaker. `
      }
    },
    {
      id: 'fillup-2',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        options: 'This, That, These, Those',
        title: 'Fill in the blacks by using the clue given in the bracket.',
        text: `*This* is my younger brother. (near)
*That* is our school. (far)
*Those* children are playing happily. (far)
*Those* plastic bottles are old. (far)
*These* are old newspapers. (near)
*Those* are giraffes. (far)
*This* is my cat. (near)
*This* is my gift. (near)`
      }
    },
    {
      type: 'selectWord',
      label: 'Select the Pronoun',
      id: 'select-word-2',
      data: {
        title: 'Select all the pronouns present in the below text.',
        multiSelect: true,
        text: `*It* is *her* pen.
Please give *it* to *me*.
*It* was raining and *I* got wet.
The principal told *us* that *she* is *our* new teacher.`
      }
    }
  ]
};
