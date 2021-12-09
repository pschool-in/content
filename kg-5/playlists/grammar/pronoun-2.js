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
      label: 'Pronoun or Not',
      id: 'pronoun-or-not',
      commonData: {
        title: 'Drag the given words and put it in the right boxes.',
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
        title: 'Select the pronoun in the below sentence.'
      },
      data: [
        `*He* wants to buy a new cycle.
The teacher told everyone that *her* name is Meera.
On Wednesday, *they* will go to the market.
Meera thinks that *she* is very intelligent.
*They* are studying together.
*He* is teaching science in our school.
Priya was shy at first but *she* is running very fast.
Did *you* water the plants?
*She* likes to dance.`,

        `*He* puts the book on the table.
The children play with *it*.
My mom told me that *they* have a lot of toys.
I told everyone that *it* is my favorite book.
*She* is playing outside.
My mother likes *her* very much.
*His* father scolds him.
The book belongs to *me*.
*I* am never late for class.
Mrs. Sakshi is giving *them* chocolates.`,

        `*They* play in the park.
Samir is *her* brother.
*She* is a good girl.
Maya takes *me* to her house every day.
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
*This* is my mother’s saree.
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
      id: '900',
      label: 'Match the pairs',
      type: 'match',
      commonData: {
        title: 'Match the subject with the correct pronoun.'
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
      id: '1000',
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
          She has kept it safely.`,

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
      id: '1000',
      type: 'classifySentence',
      commonData: {
        title: 'True or False: The below sentence has demonstrative pronoun.',
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
      id: 'she-her',
      label: 'She vs Her',
      type: 'fillup',
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
      type: 'fillup',
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
      type: 'fillup',
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
*Me (I)* and my brother play together in ground.`,

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
*We (Us)* went to see the circus yesterday.`,

        `Let *us* cross the road.
  Can *we* all go to the swimming pool tomorrow?
  *We (Us)* were talking to the principal.
  Thank you for driving *us* to the market.
  The teacher asked *us* to form a circle.`
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
      id: 'fillup-demonstrative',
      label: 'Fill up',
      type: 'fillup',
      data: {
        title: "Fill in the blanks with 'he' and 'him'.",
        text: `I bought *that (those)* tool yesterday.
I like *these(this)* books.
*That (Those)* is my mom's phone.
None of *these (this) * answers are correct.
*This, (These)* was my father's ring.
This (These, Such) is mine.
There is no end to *this (them, such)*.
Are *those(them, this)* your books?
*These (Them, Such)* are looking nice.
*That (Them, Those)* was such a good experience.`
      }
    }
  ]
};
