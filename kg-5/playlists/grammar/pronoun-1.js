export default {
  label: 'Introduction to Pronoun',
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
          `Priyanka is a good girl. Priyaka lives near our school. Priyanka comes to school walking.
In the above paragraph, the word 'Priyanka' is repeated multiple times. To avoid repeating the noun, we use pronoun.
Priyanka is a good girl. She lives near our school. She comes to school walking. Pronouns are used in the place of noun. Some of the commonly used pronouns are:`,
          {
            type: 'sitewords',
            text:
              'I, me, he, she, it, we, us, they, them, these, those, you, your',
            width: 50
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
The cars are there. *They* need cleaning.
Tim is a good boy. *He* always works hard.
Ravi is my friend. *He* is a bright young man.
Mrs. Durga makes dresses. *She* makes doll dresses too.
My mom and my brother love cooking. *They* cook tasty food.
Mango is my favorite fruit. *It* is very tasty.
I have a squirrel. *It* eats nuts.`,

        {
          options: 'I, We, You',
          text: `My father thinks *I* am a good singer.
*I* love my family.
The teacher said that *you* can do your work tomorrow.
*We* love our school.
In the school library, *we* have many books.
*You* must bring your book daily.
On Sundays, *I* play with my elder brother.
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
        title: 'Select the pronoun in the below sentence.',
        multiSelect: true
      },
      data: [
        `*I* am very happy for *her*.
*She* is going to *her* friend's home.
Raj is playing with *his* sister.
*They* are very nice to *me*.
Ravi is playing with *him* and *his* brother.
Do not touch the water. *It* is hot.
*I* am waiting for the train. *It* is running late.
*I* think that *he* is a smart boy.
*She* told my brother that *she* is a good dancer.`,

        `Please give the pen to *me*. *It* belongs to *me*.
*I* am sitting on the chair. *It* is very comfortable.
The guests arrived while *we* were watching the cricket match. *They* brought gifts.
Is *he* from Hyderabad? *I* might know *him*.
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
            qText: 'How many pets do Shiva have?',
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
We use 'this' when pointing to one person, place, animal, or thing (singular) that is near the speaker.
We use 'these' when pointing to more than one person, place, animal, or thing (plural) that are near the speaker.
We use 'that' when pointing to one person, place, animal, or thing (singular) that is far from the speaker.
We use 'those' when pointing to more than one person, place, animal, or thing (plural) that are near the speaker. `
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
