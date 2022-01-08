export default {
  id: 'pronoun-2',
  label: 'Personal Pronouns',
  pdf: '',
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Personal Pronouns',
        text: [
          `Pronouns used in the position of name, place, or thing is called personal pronoun.
# First Person:`,
          {
            type: 'hilight',
            text: `singular: I, me
plural: we, us`
          },
          '# Second Person:',
          {
            type: 'hilight',
            text: `singular: you
plural: you`
          },
          '# Third Person:',
          {
            type: 'hilight',
            text: `singular: he, she, it, him, her
plural: they, them`
          },
          {
            type: 'html',
            text: `<b>He</b> eats grapes.<br>
<b>She</b> likes pear.<br>
<b>You</b> can have <b>it</b>.<br>
<b>They</b> are playing outside.`
          },
          'Personal pronouns can be divided into two types:',
          '# Subject Pronoun',
          {
            type: 'hilight',
            text: `I, we, you, she, he, it, they`
          },
          '# Object Pronoun',
          {
            type: 'hilight',
            text: `me, us, you, her, him, it, them`
          }
        ]
      }
    },
    {
      type: 'group',
      label: 'Pronoun or Not',
      id: 'pronoun-or-not',
      commonData: {
        title: 'Drag and drop the given words in the right boxes.',
        types: ['Pronoun', 'Not a Pronoun']
      },
      data: [
        [`He, She, It, They`, `Sleep, Walk, Run, Sit`],
        [`I, You, Them, Us`, `Stand, Talk, Jump, Bump`],
        [`Him, Her, We, Them`, `Drive, Car, Jam, Dog`]
      ]
    },
    {
      type: 'selectWord',
      label: 'Select the Pronoun',
      id: '800',
      commonData: {
        title: 'Select the pronoun in the below sentence.',
        printTitle: 'Underline the pronouns in the below sentences.'
      },
      data: [
        `*He* wants to buy a new cycle.
The teacher told everyone that *her* name is Meera.
On Wednesday, *they* will go to the market.
Meera thinks that *she* is very intelligent.
*They* are studying together.
*He* is teaching science in the school.
Priya was shy at first but *she* is running very fast.
Did *you* water the plants?
*She* likes to dance.
My brother would like *those*, please.`,

        `*He* puts the book on the table.
The children play with *it*.
My mom told my sister that *they* have a lot of toys.
Ram told everyone that *it* is the best book.
*She* is playing outside.
My mother likes *her* very much.
*His* father scolds everyone in the house.
The book belongs to *me*.
*I* am never late for class.
Mrs. Sakshi is giving *them* chocolates.`,

        `*They* play in the park.
Samir is *her* brother.
*She* is a good girl.
Maya takes *me* to the canteen every day.
*We* like to play football.
*He* is good at sports.
The house belongs to *them*.
Shenna blamed *us* for lying.
*We* will have dinner outside.
*I* go to sleep early.`,

        `*This* idea is amazing.
Is *that* your book?
Eat *these* chocolates after lunch.
*Those* are my clothes.
*This* is my mother's saree.
Could you help me move *these*?
*That* looks like a rat.
Throw *those* rolls away.
*These* are nice flowers.
Raju told everyone *that* the party is tomorrow.
*This* is crazy!`
      ]
    },
    // the below activity consist of possessive pronouns. It can't be about singular and plural.
    {
      type: 'group',
      label: 'Personal Pronouns or Not',
      id: 'group-personal-pronoun',
      data: {
        title: 'Drag and drop the given words in the right boxes.',
        types: [
          {
            name: 'Personal Pronoun',
            text: 'He, She, Me, I, It, We, Us'
          },
          {
            name: 'Not A Personal Pronoun',
            text: 'Hers, Mine, Yours, Ours, Theirs'
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the pairs',
      type: 'match',
      commonData: {
        title: 'Match the naming words with the correct pronoun.'
      },
      data: [
        `Reena, She
Rahul, He
Book, It
Children, They
Siya and Me, We`,

        `Pencil, It
Ram and Shaam, They
Richa, She
Rony, He
Me and Raj, Us`,

        `Pen, It
Priya, Her
Rahul, Him
Rena and Sen, Them
I, Me`,

        `Pintu and I, We
Jashwanth, He
Rakhi, She
The big bus, It
Kishore and Lalith, They`,

        `A bike, It
This boy, He
The girls, They
You and Ram, You
You and I, We`
      ]
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      commonData: {
        title: 'True or False: The below sentences have personal pronoun.',
        types: ['True', 'False']
      },
      data: [
        [
          `She is a good girl.
It is a good book.
They are in the park.
It is on the table.
Sakshi has kept it safely.`,

          `Karan is playing.
Sakshi is a good student.
Anya and Avi are very smart.
The eraser is used to correct mistakes.
The dress is purple.`
        ],
        [
          `He is sleeping.
The book belongs to her.
The house belongs to his dad.
I am a good writer.
Maya is his cousin.`,

          `Racing cars are very fast.
Naman is my cousin.
Karan is my brother.
Anisha is my niece.
My mom is very sweet.`
        ],
        [
          `The laptop belongs to us.
They own black bikes.
They go to the movies.
He likes cake.
She is going to school.`,

          `My dad is a good person.
The phone fell down.
Ravi is eating.
The phone is ringing.
The girls are sleeping.`
        ]
      ]
    },
    {
      label: 'True or False',
      id: 'true-false-2',
      type: 'classifySentence',
      commonData: {
        title: 'True or False: The below sentence has a demonstrative pronoun.',
        types: ['True', 'False']
      },
      data: [
        [
          `These are very yummy.
This is the most comfortable pillow.
Those belong to Sakshi.`,

          `It is a flower.
She has my book.
My name is Rani.`
        ],
        [
          `Do you like this?
These are my friends.
My mom gifted me that.`,

          `My father is very good.
The teacher went to school.
I forgot to eat.`
        ]
      ]
    },
    {
      id: 'fill-up-1',
      label: 'I and Me',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks with 'I' or 'me' to complete the sentence.`,
        printTitle: 'I vs Me',
        options: 'I, me'
      },
      data: [
        `*I (Me)* went to the library. 
*I (Me)* really want that ice cream. 
You and *I* are good friends.
Is that present for *me*?
Will you play with *me* tomorrow?
*I (Me)* am going to the movie tonight.
My mom and *I* love burgers.
This is a photo of *me* and my sister.
Parish invited Abhi and *me* for his birthday party.
Please have breakfast with *me*.`,

        `Can *I* have chocolate?
Everybody is happy for *me*.
Will you help *me* with my homework? 
Dad dropped *me* at school today.
*I (Me)* bought a new dress.
She asked *me* a question.
She walks to the park with *me*.
My dad makes *me* laugh.
Savitha and *I* eat lunch together.
*Me (I)* and my brother play together on the ground.`,

        `Could you pass *me* the salt?
*I (Me)* don't want to go out now.
Vinoth and *I* are going to the movies.
Am *I* invited?
She gave *me* some coins.`
      ]
    },
    {
      id: 'fill-up-2',
      label: 'We and Us',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks with 'we' or 'us' to complete the sentence.`,
        options: 'we, us',
        printTitle: 'We vs Us'
      },
      data: [
        `*We (Us)* are going to Delhi on Friday.
Can *we* go to the park tomorrow?
The movie really scared *us*. 
*We (Us)* live in a big house.
The dog is barking at *us*.
She cannot come with *us* to the school today.
Can you drop *us* at the station?
After *we* eat, let's go for a walk.
*We (Us)* had ice cream after dinner.
All of *us* will go for a picnic tomorrow.`,

        `Mother cooked biryani for *us*.
*We (Us)* will go shopping tomorrow.
*We (Us)* are riding our bicycles.
Let *us* go to a museum tomorrow. 
He taught *us* Maths.
My grandmother made *us* a delicious jalebi.
My teacher asked all of *us* to assemble in the hall.
*We (Us)* can visit the Botanical garden on Sunday.
My grandfather told *us* an interesting story.
*We (Us)* went to see the circus yesterday.`,

        `Let *us* cross the road.
Can *we* all go to the swimming pool tomorrow?
*We (Us)* were talking to the principal.
Thank you for driving *us* to the market.
The teacher asked *us* to form a circle.`
      ]
    },
    {
      id: 'he-him',
      label: 'He vs Him',
      type: 'fillup',
      data: {
        title: "Fill in the blanks with 'he' or 'him'.",
        printTitle: 'He vs Him',
        text: `If you see David, give *him* these books.
Does *he* want some coffee?
*He (Him)* is a wise man.
Did Mohan get the promotion *he* wanted?
I didn't recognize *him*.`,
        options: 'he, him'
      }
    },
    {
      id: 'she-her',
      label: 'She vs Her',
      type: 'fillup',
      data: {
        title: "Fill in the blanks with 'she' or 'her'.",
        printTitle: 'She vs Her',
        text: `I gave *her* the books.
*She (Her)* doesn't have a pen.
*She (Her)* is so clever.
If I tell Roshima, *she* might tell Sunitha.
I will talk to *her* about this issue.`,
        options: 'she, her'
      }
    },
    {
      id: 'they-them',
      label: 'They vs Them',
      type: 'fillup',
      data: {
        title: "Fill in the blanks with 'they' or 'them'.",
        printTitle: 'They vs Them',
        text: `We asked *them* to keep the door open.
If you build it, *they* will come.
*They (Them)* are very nice people.
What do *they* want?
I have lost my keys. I can't find *them* anywhere.`,
        options: 'they, them'
      }
    },
    {
      label: 'Demonstrative Pronouns',
      type: 'passage',
      id: 'notes-2',
      data: {
        title: 'Demonstrative Pronouns',
        text: [
          `They are used to point specific things.
Eg: this, that, these, those, none, neither`,
          {
            type: 'html',
            text: `<b>This</b> is great.<br>
Is <b>that</b> yours?<br>
Eat <b>these</b> quickly.<br>
Throw <b>those</b> away.`
          }
        ]
      }
    },
    {
      id: 'fillup-demonstrative',
      label: 'Fill up',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with the correct pronoun.',
        text: `I bought *that (these, those)* tool yesterday.
I like *these (this, that)* books.
*That (Those, These)* is my mom's phone.
None of *these (such, this) * answers are correct.
*This (These, Those)* was my father's ring.
*This (These, Such)* is mine.
There is no end to *this (them, such)*.
Are *those (them, this)* your books?
*These (Them, Such)* are looking nice.
*That (Them, Those)* was such a good experience.`
      }
    }
  ]
};
