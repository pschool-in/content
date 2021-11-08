export default {
    id: 'pronoun-2',
    label: 'Pronoun-2',
    pdf: '',
    list: [
      {
        label: 'Personal Pronouns',
        type: 'passage',
        id: 'personal-pronouns-reading',
        data: {
          title: 'Personal Pronouns',
          text: `The pronouns that refer to people, places, things directly are called as personal pronouns. Personal pronouns can be divided into two categories
1. Subject pronoun - I, we, you, she, he, it, they
2. Object pronoun - me, us, you, her, him, it, them

A personal pronoun describes a person or a thing in the following ways:

1. The pronouns I, we, me, denotes the 1st person that means the person who speaks.
2. The pronoun you refers to the 2nd person, which means the person who is spoken to.
3. The pronoun he, she, they, it refers to 3rd person, that means a person or a thing which is spoken about.

Examples of personal pronouns:

1. She is very beautiful.
2. It is very cold today.
3. They are going to the park.
4. We wanted some grapes.
5. Reena gave me a letter.`
        }
      },
      {
        id: 'match',
        label: 'Match the following',
        type: 'match',
        commonData: {
            title: 'Match the word or group of words given with the corresponding pronoun'
        },
       data: [
         `Pintu and I, we
Jashwanth, he
Rakhi, she
The big bus, it 
Kishore and Lalith, they`,
         
`A bike, it
This boy, he
The girls, they
You and Ram, you
You and I, we`,
             ]
           },
           {
        id: 'fill-up-1',
        label: 'I and Me',
        type: 'fillup',
        commonData: {
          title: `Fill in the blanks with I and me to make a complete sentence.`
        },
        data: [
          `*I(me)* went to library. 
*I(me)* really want that ice-cream. 
You and *I(me)* are good friends.
Is that present for *me(I)*?
Will you play with *me(I)* tomorrow?`,

          `Can *I(me)* have a chocolate?
Everybody is happy for *me(I)*.
Will you help *me(I)* with my homework. 
Dad dropped *me(I)* to school today.
*I(me)* bought a new dress.`,
        ]
      },
       {
        id: 'fill-up-2',
        label: 'We and Us',
        type: 'fillup',
        commonData: {
          title: `Fill in the blanks with we and us to make a complete sentence.`
        },
        data: [
          `*We (us)* are going to Delhi on Friday.
Can *we(us)* go to the park tomorrow?
The movie really scared *us(we)*. 
*We (us)* live in a big house.
The dog is barking at *us(we)*.`,

          `Mother cooked biryani for *us(we)*.
*We(us)* will go shopping tomorrow.
*We(us)* are riding our bicycles.
Let *us(we)* go to a museum tomorrow. 
He taught *us(we)*.`,
        ]
      },
      {
        type: 'selectWord',
        label: 'Find Me',
        id: 'select-word',
        commonData: {
        title: 'Select the personal pronouns in the following sentence.'
                      },
                      data: [
        `*I* am waiting for the train. 
        *He* is a smart boy.
        *She* is a good dancer.
        *I* am very happy.
        This is my pen, give it to *me*.`,
          
          `*She* is our teacher.
          *He* wants to buy a new cycle.
          *Her* name is Meera.
          *They* are going to the market.
          *She* is very intelligent.`,
       ]
      }
    ]
  };
