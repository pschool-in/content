export default {
  id: 'determiner-8',
  label: 'Determiner',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Determiner',
        text: [
          `# Determiner
A word that determines or limits a noun or a noun phrase is a determiner. Determiners can be divided into two broad categories: specific and general.
Specific determiners are used in noun phrases to talk about or indicate specific people or things.`,
          {
            type: 'html',
            text: `Examples: <b>the</b>, <b>this</b>, <b>that</b>, <b>these</b>, <b>those</b>, <b>my</b>, <b>our</b>, <b>your</b>, <b>his</b>, <b>her</b>, <b>its</b>, <b>their<b>`
          },
          `We cannot use more than one specific determiner before a noun.
General determiners are used to talk about people or things in a general or indefinite way.`,
          {
            type: 'html',
            text: `Examples: <b>a</b>, <b>an</b>, <b>one</b>, <b>every</b>, <b>many</b>, <b>more</b>, <b>most</b>, <b>much</b>, <b>little</b>, <b>few</b>, <b>either</b>, <b>neither</b>, <b>no</b>, <b>other</b>, <b>each</b>, <b>some</b>, <b>both</b>, <b>any</b>, <b>enough</b>, <b>all</b>, <b>another</b>, <b>several</b>`
          },
          `Determiners are divided into three main groups: 
1. central determiners (the articles and other words such as my, this, and some that also function as pronouns)
2. predeterminers (all, both, twice, such)
3. post determiners ( many, few, several).
Determiners include the following:
1. articles: Definite (The), Indefinite (A and An), Zero Article
2. possessive adjectives (my, our, your, his, her, their)
3. demonstrative adjectives (this, that, these, those)
4. distributives (each, every, either, neither)
5. quantifiers (a few, a little, much, more, some, etc.) and numbers (one, two, forty, second, twenty-fourth, etc.)
6. interrogative adjectives (what, whose, which)`
        ]
      }
    },
    {
      id: 'fill-up-12',
      label: 'Complete the Paragraph',
      type: 'fillup',
      commonData: {
        title: `Read the short paragraph. Fill in the blanks with a, an or the.`
      },
      data: [
        `Sam, Harry, Patrick and Henry are in *a (an, the)* beautiful city in Saudi Arabia. *The (A, An)* city is called Abha. They plan to take *a (an, the)* taxi from *the (a, an)* city to visit *the (a, an)* Red Sea. On their way, they will spend *an (a, the)* afternoon at Abha Palace Hotel.`,

        `Their tour guide tells them, “It is *an (a,the)* ideal place for *a (an, the)* trek through *the (a, an)* Green Mountain. We can spot magnificent purple jacaranda trees. It is *a (an, the)* place where artists from all over *the (a, an)* country catch up to share their creativity. *The (A, An)* street is decorated with colorful peices of art and is illuminated at night to offer *a (the, an)* serene ambiance.`
      ]
    },
    {
      id: 'fill-up-11',
      label: 'Articles as Determiners',
      type: 'fillup',
      commonData: {
        title: `Write a, an or the where needed. Put X where none of them are needed.`
      },
      data: [
        `*x (the, a)* Dudhsagar Falls is *a (an, the)* four-tiered waterfall located on *the (a, x)* Mandovi River in *the (an, x)* Indian state of *x (a, the)* Goa. It is 60 km from Panaji by road and is located on *the (a, an)* Belgavi–Vasco Da Gama rail route about 46 km east of Madgaon and 80 km south of Belgavi. Dudhsagar Falls is amongst *x (the, an)* India's tallest waterfalls with *a (an, the)* height of 310 m and *an (a, x)* average width of 30 metres.`,

        `*The (A, x)* falls are located in *the (x, a)* Bhagwan Mahaveer Sanctuary and Mollem National Park among *the (x, a)* Western Ghats. *The (x, a)* falls are a punctuation mark in *the (a, x)* journey of *the (a, x)* Mandovi River from *the (a, x)* Western Ghats to *x (the, a)* Panjim where it meets *the (a, x)* Arabian sea.`,

        `*The (x, an)* area is surrounded by deciduous forests with rich biodiversity. This waterfall is also known as *x (the, a)* Tambdi Surla to some of the local people. *The (a, x)* falls are not particularly spectacular during *the (a, x)* dry season but during *the (x, a)* monsoon season, however, *the (a, x)* falls are fed by rains and form *a (x, an)* huge force of water.`
      ]
    },
    {
      id: 'fill-up-10',
      label: 'Demonstrative Determiners',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks with the correct alternative.`
      },
      data: [
        `We belong to this city. This is *our (his)* ancestral home.
I want to buy *this (its)* necklace for my sister.
All the presents are here. I will ask Aleema to pack *these (those)* gifts quickly.
Neha is in Assam. I ran into *her (his)* cousin at the market yesterday and he told me.
Who is that young woman? She is *your (its)* assistant, I presume.`,

        `The boys were very noisy. She wanted *those (them)* boys to go away.
There is a tea shop across the street. Arya likes *that (this)* tea shop.
I don't know where Sruthy and Abishek live. Let's ask Kiara. She knows *their (your)* address.
I lost *my (their)* pet dog, Holly. Have you seen it? It has a scar on *its (his)* right ear.`
      ]
    },
    {
      id: 'fillup-1',
      label: 'Possessive Adjectives',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Fill in the blanks using suitable possessive adjectives. Some nouns have been given in brackets for reference.'
      },
      lockAfter: 1,
      data: [
        `This is *their* house. (Mrs and Mr Mehta's)
I thought *my* water bottle was Lost. (I)
The college is famous for *its* education and placement. (College)
I said to Maira, 'I think *this* is your pencil.' (Mahira's)
Please don't take those. Those are *my* color pencils, not yours. (I)`,

        `This is *his* car, isn't it? (Arman's)
The Mehta brothers are wealthy. This is *their* estate. (Mehta brothers)
They have finished *their* meeting yesterday.(Mehta brothers)
I have lost *her* phone in the market. (Mahira's)
We bought this piece of land ten years ago. This is *our* plot. (we)`
      ]
    },
    {
      label: 'Quantifiers',
      type: 'matchByDragDrop',
      title: `Fill in the blanks using the appropriate quantifier.`,
      id: 'fillup-drag-drop-3',
      data: {
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `Ravi spent *the whole of* last summer trying to fix his uncle’s old bike.
I think there is *enough* food for all our guests.
This bakery is very popular, *most of* the cookies are sold by lunchtime.
*All of* our questions about the mystery were answered at the end of the play.
There was *a good deal of* moisture in the room.`
      }
    },
    {
      id: 'fillup-2',
      label: 'Few or Little',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Fill in the blanks using a few, very few or little.'
      },
      lockAfter: 1,
      data: [
        `Only *a few* villages have remained the same with the arrival of the internet. But *little* change has come to my village in the past decade, even with the arrival of the internet. Most of the time there is no electricity.`,

        `*Very few* villages have the facilities that the cities or towns have. The *few* villages with better road connectivity have facilities like running water and electricity. Only *a few* of those villages have access to the internet.`
      ]
    },
    {
      id: 'fillup-3',
      label: 'Some or Any',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Fill in the blanks using some or any.'
      },
      data: [
        `Ashly: Do you have *any* money on you, Tom?
Tom: I have *some* money. What do you want to buy?
Ashly: I want to buy *some* souvenirs from that shop.
Tom: Here are *some* coins. Will these be enough?`,

        `Neeraj: Did you have *any* trouble finding my house?
Pavithra: No, not at all.`
      ]
    },
    {
      id: 'fillup-4',
      label: 'Question words',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Fill in the blanks with appropriate question words.'
      },
      lockAfter: 2,
      data: [
        `*Which* party won the Indian parliamentary elections in 1994?
*How* many sandwiches did you have for lunch?
*Which* book do you think is more interesting?
*What* filling do you want in your sandwich?
*Which* color do you like the most five?`,

        `*How* many baskets of mangoes did you collect from the grove?
*Whose* bag is that blue one?
*What* language books she was reading in the library?
*Whose* family has a house near the cinema?
*How* much water do you drink a day?`,

        `*Which* country does the football star Son Heungmin play for?
*Whose* mother is she?
*What* ice cream do you like better, chocolate or mintchoco?
*Which* book are you reading now?
*How* much noodles should we cook?`
      ]
    },
    {
      id: 'fillup-5',
      label: 'Fill up using Determiners',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Read the short messages given below. Expand them into complete sentences, using appropriate determiners.'
      },
      lockAfter: 2,
      data: [
        `Interview postponed.
New date not finalized yet. *The* interview for selection to *the* Officer category has been postponed. The new date for *the* interview has not yet been finalized.`,

        `Exam starts on Monday. Five Admit Cards missing. Send immediately.
*The* board examinations for Class X are scheduled to start on Monday. *The* admit cards of five of *the* students are missing. Please send *the* admit cards immediately.`,

        `Shortage of essential medicines. Send immediately.
As there is *a* shortage of essential medicines, please send them immediately to the dispensary.`
      ]
    },
    {
      id: 'fillup-6',
      label: 'Conversation',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Use suitable determiners and fill in the blanks.'
      },
      lockAfter: 1,
      data: [
        `Ricky: Is this *your* first visit to *the* city?
Ben: No, it is *my* second trip. I was here a few years ago.
Ricky: Do you like *the* city?
Ben: It's all right for *a* short visit but I wouldn't want to live here. I don't like big cities.`,

        `Ricky: I think you're right. Life in *a* big city is always hard.
Ben: My brother says *the* same thing. He has been living in *the* city for a long time now.
Ricky: In which part of *the* city does your brother live?
Ben: He lives near *the* International Airport.`
      ]
    },
    {
      id: 'fillup-7',
      label: 'Fillup - Paragraph',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Fill in the blanks using the following determiners. (the, a, more, few, most, some, all, such, this, what)'
      },
      lockAfter: 1,
      data: [
        `*What* kind of pencil do you use? Do you use *a* pencil made of wood? Have you wondered why *most* pencils have six sides and a *few* pencils are rounded? *Most* pencils are made of wood. They can make *more* six-sided pencils out of one piece of wood than rounded pencils.`,

        `It is convenient for *the* users as well. The chances of *a* six-sided pencil rolling off *a* desk or *a* table are fewer. So *such* pencils break less as compared to rounded ones. *This* way, *all* six-sided pencil scores over *the* rounded one.`
      ]
    },
    {
      id: 'fillup-8',
      label: 'Fill up',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Fill in the blanks using the following determiners. (the, this, a, that, a few, a, some, every, the, any, an,)'
      },
      lockAfter: 1,
      data: [
        `There are *a few* girls who have not brought their costumes for the play.
We have *every* document you asked for.
Ritika danced with *every* celebrity present in the function.
Can you sing *a* song for me?
*This* story is really intriguing.
Nobody understood anything *the* teacher taught.`,

        `There are *some* books in the class.
I just had *an* apple and *some* orange juice.
Do you have *any* food left?
Does Reem have *a* pet dog?
*That* story you told me was very moving.
Mihika forgot to bring *her* spectacles to work.`
      ]
    },
    {
      id: 'fillup-9',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          "Fill in the blanks with 'few, a few, the few, little, a little, the little'"
      },
      lockAfter: 1,
      data: [
        `He has only *a few* friends.
*The few* friends he has are really faithful to him.
A poor man has *little* money to waste.
There is *a little* work left to complete.
*The little* work left yesterday has been completed.`,

        `It is the end of the month, but I still have *a few* rupees left.
We have *a few* trees in our school.
He is very busy. He has *little* time to watch TV.
The lady has *a few* ornaments to give.
We dropped the idea to visit Delhi as we had *little* money.`
      ]
    }
  ]
};
