export default {
  label: 'Pronoun - Introduction',
  id: 'pronoun-1',
  lockAfter: 4,
  list: [
    // Need to add a simple Passage
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillupOptions',
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
      label: 'This, That, These, Those',
      type: 'passage',
      id: 'this-that-these-those',
      data: {
        title: 'This, That, These, Those',
        text: `These are words that help to show where things are.
We use 'this' when pointing to one person, place, animal or thing (singular) that is near the speaker.We use 'these' when pointing to more than one person, place, animal or thing (plural) that are near the speaker.
We use 'that' when pointing to one person, place, animal or thing (singular) that is far from the speaker.
We use 'those' when pointing to more than one person, place, animal or thing (plural) that are near the speaker. `
      }
    },
    {
      id: 'fillup-2',
      label: 'Fill Up',
      type: 'fillupOptions',
      data: {
        options: 'This, That, These, Those',
        title: 'Fill in the blacks by using the clue given in the bracket.',
        text: `*This* is my younger brother. (near)
*That* is our school. (far)
*Those* children are playing happily. (far)
*Those* plastic bottles are old. (far)
*These* are old newspaper. (near)
*Those* are giraffes. (far)
*This* is my cat. (near)
*This* is my gift. (near)`
      }
    }
  ]
};
