export default {
  id: 'pronoun-2',
  label: 'Pronoun-2',
  pdf: '',
  list: [
    {
      label: 'Personal Pronouns',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Personal Pronouns',
        text: [
          `A personal pronoun is a word that takes place of naming words. Personal pronouns are he, she, it and they. 
For example: 
Rahul is a good boy. 
'Rahul' is a noun in this sentence. So, it can be replaced with the personal pronoun 'he'. So this sentence can also be written as, 
He is a good boy.
Some more examples of personal pronouns are:`,
          {
            type: 'html',
            text: `<b>He</b> eats grapes.<br>
  <b>She</b> likes pear.<br>
  <b>You</b> can have it.<br>
  <b>They</b> like fruits.<br>
  <b>He</b> runs fast.<br>
  <b>She</b> jumps high.<br>
  <b>They</b> are playing outside.<br>
Aman likes <b>it</b>.`
          }
        ]
      }
    },
    {
      type: 'group',
      label: 'Drag and Drop',
      id: '700',
      commonData: {
        title: 'Identify which of these words are pronouns and which are not.',
        types: ['Pronouns', 'Not Pronouns']
      },
      data: [
        [`He, She, It, They`, `Sleep, Walk, Run, Sit`],
        [`I, You, Them, Us`, `Stand, Talk, Jump, Bump`],
        [`Him, Her, We, Them`, `Drive, Car, Jam, Dog`]
      ]
    },
    {
      type: 'selectWord',
      label: 'Select word',
      id: '800',
      commonData: {
        title: 'Tap on the pronouns in each sentence.'
      },
      data: [
        `*He* puts the book on the table.
        The children play with *it*.
        My mom told me that *they* have a lot of toys.
        I told everyone that *it* is my favorite book.
        *She* is playing outside.`,

        `My mother likes *her* very much.
          *His* father scolds him.
          The book belongs to *me*.
          *I* am never late for class.
          Mrs. Sakshi is gives *them* chocolates.`,

        `*They* play in the park.
          Samir is *her* brother.
          *She* is a good girl.
          Maya takes *me* to her house everyday.
          *We* like to play football.`,

        `*He* is good at sports.
          The house belongs to *them*.
          Shenna blamed *us* for lying.
          *We* will have dinner outside.
          *I* go to sleep early.`
      ]
    },
    {
      id: '900',
      label: 'Match the following',
      type: 'match',
      commonData: {
        title: 'Match the pairs.'
      },
      data: [
        `Reena, She
       Rahul, He
       Book, It
       Children, They`,

        `Pencil, It
       Priya, Her
       Rahul, Him
       Rena and Sen, Them
       I, Me`,

        `Pen, It
Ram and Shaam, They
Richa, She
Rony, He`
      ]
    },
    {
      label: 'Classify',
      id: '1000',
      type: 'classifySentence',
      commonData: {
        title: 'Identify if these sentences have personal pronouns or not.',
        types: ['Yes', 'No']
      },
      data: [
        [
          `She is a good girl.
              It is a good book.
              They are in the park.`,

          `Karan is playing.
              Sakshi is a good student.
              Anya and Avi are very smart.`
        ],
        [
          `It is on the table.
              She has kept it safely.
              He is sleeping.`,

          `The eraser is used to correct mistakes.
              The dress is purple.
              Racing cars are very fast.`
        ],
        [
          `The book belongs to her.
          The house belongs to his dad.
          I am a good writer.`,

          `Naman is my cousin.
          Karan is my brother.
          Anisha is my niece.`
        ],
        [
          `Maya is his cousin.
            The laptop belongs to us.
            They own black bikes.`,

          `My mom is very sweet.
            My dad is a good person.
            The phone fell down.`
        ],
        [
          `They go to the movies.
                He likes cake.
                She is going to school.`,

          `Ravi is eating.
                The phone is ringing.
                The girls are sleeping.`
        ]
      ]
    },
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
      type: 'match',
      label: 'Match Related Pronouns',
      id: 'complete-word',
      data: {
        lang: 'en',
        title: 'Match the pronouns that have similar meaning.',
        text: `I, Me
          He, Him
          She, Her
          They, Them
          We, Us`
      }
    },
    {
      id: 'i-me',
      label: 'I vs Me',
      type: 'fillupOptions',
      data: {
        title: "Fill in the blanks with 'I' and 'me'.",
        text: `Could you pass *me* the salt?
  *I (Me)* don't want to go out now.
  Vinoth and *I* are going to the movies.
  Am *I* invited?
  She gave *me* some coins.`,
        options: 'I, me'
      }
    },
    {
      id: 'we-us',
      label: 'We vs Us',
      type: 'fillupOptions',
      data: {
        title: "Fill in the blanks with 'we' and 'us'.",
        text: `Let *us* cross the road.
  Can *we* all go to the swimming pool tomorrow?
  *We (Us)* were talking to the principal.
  Thank you for driving *us* to the market.
  The teacher asked *us* to form a circle.`,
        options: 'we, us'
      }
    },
    {
      id: 'she-her',
      label: 'She vs Her',
      type: 'fillupOptions',
      data: {
        title: "Fill in the blanks with 'she' and 'her'.",
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
      type: 'fillupOptions',
      data: {
        title: "Fill in the blanks with 'they' and 'them'.",
        text: `We asked *them* to keep the door open.
  If you build it, *they* will come.
  *They* are very nice people.
  What do *they* want?
  I have lost my keys. I can't find *them* anywhere.`,
        options: 'they, them'
      }
    },
    {
      id: 'he-him',
      label: 'He vs Him',
      type: 'fillupOptions',
      data: {
        title: "Fill in the blanks with 'he' and 'him'.",
        text: `If you see David, give *him* these books.
  Does *he* want some coffee?
  *He* is a wise man.
  Did Mohan get the promotion *he* wanted?
  I didn't recognize *him*.`,
        options: 'he, him'
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      commonData: {
        title:
          'Match the word or group of words given with the corresponding pronoun.'
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
You and I, we`
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
        `*I (Me)* went to library. 
*I (Me)* really want that ice-cream. 
You and *I* are good friends.
Is that present for *me*?
Will you play with *me* tomorrow?
*I (Me)* am going to the movie tonight.
My mom and *I* love burger.
This is a photo of *me* and my sister.
Pranish invited Abhi and *me* for his birthday party.
Please have breakfast with *me*.`,

        `Can *I* have a chocolate?
Everybody is happy for *me*.
Will you help *me* with my homework. 
Dad dropped *me* to school today.
*I (Me)* bought a new dress.
She asked *me* a question.
She walks to park with *me*.
My dad makes *me* laugh.
Savitha and *I* eat lunch together.
*Me (I)* and my brother play together in ground.`
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
        `*We (Us)* are going to Delhi on Friday.
Can *we* go to the park tomorrow?
The movie really scared *us*. 
*We (Us)* live in a big house.
The dog is barking at *us*.
She cannot come with *us* to the school today.
Can you drop *us* at the station?
After *we* eat, let's go for a walk.
*We (Us)* had an ice-cream after dinner.
All of *us* will go for a picnic tomorrow.`,

        `Mother cooked biryani for *us*.
*We (Us)* will go shopping tomorrow.
*We (Us)* are riding our bicycles.
Let *us* go to a museum tomorrow. 
He taught *us* Maths.
My grandmother made *us* a delicious jalebi.
My teacher asked all of *us* to assemble in the hall.
*We (Us)* can visit the Botanical garden on sunday.
My grandfather told *us* an interesting story.
*We (Us)* went to see the circus yesterday.`
      ]
    },
    {
      label: 'Demonstrative Pronouns',
      type: 'passage',
      id: 'demonstrative-pronouns-reading',
      data: {
        title: 'Demonstrative Pronouns',
        text: `Demonstrative pronouns represent nouns. It expresses the position and the time. It can be both singular and plural. These pronouns include this, that, these and those. Some examples are;
1. This is great.
2. Is that yours?
3. Eat these quickly.
4. Throw those away.`
      }
    },
    {
      id: '100',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        title: 'Identify these demonstrative pronouns.',
        text: 'This, That, These, Those'
      }
    },
    {
      type: 'selectWord',
      label: 'Identify',
      id: '200',
      commonData: {
        title: 'Tap the demonstrative pronouns in these sentences.'
      },
      data: [
        `*This* idea is amazing.
        Is *that* your book?
        Eat *these* chocolates after lunch.
        *Those* are my clothes.`,

        `*This* is my mother’s saree.
        Could you help me move *these*?
        *That* looks like a rat.
        Throw *those* rolls away.`,

        `I would like *those*, please.
        *These* are nice flowers.
        I am not sure *that* is how you do it.
        *This* is crazy!`
      ]
    },
    {
      label: 'Classify-1',
      id: '300',
      type: 'classifySentence',
      commonData: {
        title:
          'Identify whether these sentences have demonstrative pronouns or not.',
        types: ['Yes', 'No']
      },
      data: [
        [
          `These are very yummy.
          This is the most comfortable.
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
      label: 'Classify-2',
      id: '400',
      type: 'classifySentence',
      data: {
        title: 'Identify whether these pronouns are singular or plural.',
        types: [
          {
            name: 'Singular',
            text: `This
                   That`
          },
          {
            name: 'Plural',
            text: `These
                   Those`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      id: '600',
      type: 'mcq',
      commonData: {
        title: 'Select the correct demonstrative pronoun for each sentence.'
      },
      data: [
        {
          questions: [
            {
              qText: 'I bought______tool yesterday.',
              options: `that, those`
            },
            {
              qText: 'I like______books.',
              options: `these, this`
            },
            {
              qText: '______is my moms phone.',
              options: `That, Those`
            },
            {
              qText: 'None of______answers are correct.',
              options: `these, this`
            },
            {
              qText: '______was my fathers ring.',
              options: `This, These`
            }
          ]
        },
        {
          questions: [
            {
              qText: '______is mine.',
              options: `This, These, Such`
            },
            {
              qText: 'There is no end to______.',
              options: `this, them, such`
            },
            {
              qText: 'Are______your books?',
              options: `those, them, this`
            },
            {
              qText: '_______are looking nice.',
              options: `These, Them, Such`
            },
            {
              qText: '_______was such a good experience.',
              options: `That, Them, Those`
            }
          ]
        }
      ]
    }
  ]
};
