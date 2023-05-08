export default {
  id: 'determiner-7',
  label: 'Different types of Determiners',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'determiner',
      data: {
        title: 'Determiner',
        text: [
          `Determiners are words that introduce nouns. They tell us whether the noun phrase is specific or general. Determiners can be either specific or general.
1. The specific determiners include =>`,
          {
            type: 'html',
            text: `a) the definite article: <i>the</i><br>
b) possessives: <i>my</i>, <i>your</i>, <i>his</i>, <i>her</i>, <i>its</i>, <i>our</i>, <i>their</i>, <i>whose</i><br>
c) demonstratives: <i>this</i>, <i>that</i>, <i>these</i>, <i>those</i><br>
d) interrogatives: <i>which</i>`
          },
          `We use a specific determiner when we believe the listener/reader knows exactly what we are referring to.
2. The general determiners include =>`,
          {
            type: 'html',
            text: `<i>a</i>, <i>an</i>, <i>any</i>, <i>another</i>, <i>other</i>, <i>what</i>.`
          },
          ` We use a general determiner when we are talking about things in general and the listener/reader does not know exactly what we are referring to.
a) We can use a singular noun with the indefinite article 'a' or 'an'.`,
          {
            type: 'html',
            text: `Eg: <i>A</i> woman was lifted to safety by <i>a</i> helicopter.<br>
<i>A</i> man climbing nearby saw the accident.`
          },
          `b) We use the general determiner 'any' with a singular noun or an uncountable noun when we are talking about all of those people or things.`,
          {
            type: 'html',
            text: `Eg: It's very easy. <i>Any</i> child can do it.<br>
With a full license, you are allowed to drive <i>any</i> car.<br>
I like beef, lamb, pork - <i>any</i> meat.`
          },
          `c) We use the general determiner 'another' to talk about an additional person or thing.`,
          {
            type: 'html',
            text: `Eg: Would you like <i>another</i> glass of wine?`
          },
          `The plural form of another is other.`,
          {
            type: 'html',
            text: `I spoke to John, Helen and a few <i>other</i> friends.`
          },
          `# Rules
The grammar rules for determiners are:
1. They always come before a noun.
2. They come before any modifiers used before the noun.
3. They are required before a singular noun.
4. They are optional before plural nouns.`
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-det',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `Which of the following is a specific determiner?`,
            options: `this, a, any, another`
          },
          {
            qText: `Which determiner is used to introduce a singular noun when we are talking about things in general?`,
            options: `a, an, the, any`
          },
          {
            qText: `Which determiner is used to talk about an additional person or thing?`,
            options: `another, other, any, which`
          },
          {
            qText: `Which type of determiner is used to identify or point to a particular person, event, or object?`,
            options: `demonstratives, articles, quantifiers, possessive adjectives`
          },
          {
            qText: `Which type of determiner is used to refer to a group or individual members of the group?`,
            options: `distributives, demonstratives, articles, quantifiers`
          }
        ]
      }
    },
    {
      id: 'fill-up-12',
      label: 'Complete the Paragraph',
      type: 'fillup',
      commonData: {
        title: `Write a, an or the where needed. Put X where none of them are needed.`
      },
      data: [
        `Sam, Harry, Patrick and Henry are in *a (an, the)* beautiful city in Saudi Arabia. *The (A, An)* city is called Abha. They plan to take *a (an, the)* taxi from *the (a, an)* city to visit *the (a, an)* Red Sea. On their way, they will spend *an (a, the)* afternoon at Abha Palace Hotel.`,

        `Their tour guide tells them, “It is *an (a,the)* ideal place for *a (an, the)* trek through *the (a, an)* Green Mountain. We can spot magnificent purple Jacaranda trees. It is *a (an, the)* place where artists from all over *the (a, an)* country catch up to share their creativity. *The (A, An)* street is decorated with colorful pieces of art and is illuminated at night to offer *a (the, an)* serene ambiance.`,

        `*x (the, a)* Dudhsagar Falls is *a (an, the)* four-tiered waterfall located on *the (a, x)* Mandovi River in *the (an, x)* Indian state of *x (a, the)* Goa. It is 60 km from Panaji by road and is located on *the (a, an)* Belgavi-Vasco Da Gama rail route about 46 km east of Madgaon and 80 km south of Belgavi. Dudhsagar Falls is amongst *x (the, an)* India's tallest waterfalls with *a (an, the)* height of 310 m and *an (a, x)* average width of 30 metres.`,

        `*The (A, x)* falls are located in *the (x, a)* Bhagwan Mahaveer Sanctuary and Mollem National Park among *the (x, a)* Western Ghats. *The (x, a)* falls are a punctuation mark in *the (a, x)* journey of *the (a, x)* Mandovi River from *the (a, x)* Western Ghats to *x (the, a)* Panjim where it meets *the (a, x)* Arabian sea.`,

        `*The (x, an)* area is surrounded by deciduous forests with rich biodiversity. This waterfall is also known as *x (the, a)* Tambdi Surla to some of the local people. *The (a, x)* falls are not particularly spectacular during *the (a, x)* dry season but during *the (x, a)* monsoon season, however, *the (a, x)* falls are fed by rains and form *a (x, an)* huge force of water.`
      ]
    },
    {
      id: 'fillup-5',
      label: 'Complete the Conversation',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Complete the conversation, using appropriate determiners.'
      },
      lockAfter: 2,
      data: [
        `Ricky: Is this *your* first visit to *the* city?
Ben: No, it is *my* second trip. I was here a few years ago.
Ricky: Do you like *the* city?
Ben: It's all right for *a* short visit but I wouldn't want to live here. I don't like big cities.
Ricky: I think you're right. Life in *a* big city is always hard.
Ben: My brother says *the* same thing. He has been living in *the* city for a long time now.
Ricky: In which part of *the* city does your brother live?
Ben: He lives near *the* International Airport.`,

        `Reem: *Why* did you reach so late? You were supposed to reach here *an* hour ago.
Riya: *The* bus broke down in *an* isolated area, so we had trouble finding help.
Reem: I was so worried. *Why* were you unreachable?
Riya: *The* place *where* we got stranded had no network coverage.
Ashly: Do you have *any* money on you, Tom?
Tom: I have *some* money. What do you want to buy?
Ashly: I want to buy *some* souvenirs from that shop.
Tom: Here are *some* coins. Will these be enough?`
      ]
    },
    {
      id: 'fillup-7',
      label: 'Fillup - Paragraph',
      type: 'fillup',
      commonData: {
        title: 'Fill in the blanks using determiners.'
      },
      lockAfter: 1,
      data: [
        `*What (Which)* kind of pencil do you use? Do you use *a (the)* pencil made of wood? Have you wondered why *most (some)* pencils have six sides and a *few (some)* pencils are rounded? *Most (Many)* pencils are made of wood. They can make *more (some)* six-sided pencils out of one piece of wood than rounded pencils.`,

        `It is convenient for *the (x)* users as well. The chances of *a (the)* six-sided pencil rolling off *a (the)* desk or *a (the)* table are fewer. So *such (some)* pencils break less as compared to rounded ones. *This (That)* way, *all (every)* six-sided pencil scores over *the (a)* rounded one.`,

        `*The (x)* sun was shining brightly in *the (a)* clear blue sky. *The (x)* birds were chirping merrily as they flew from tree to tree. *The (x)* trees were swaying gently in *the (a)* breeze, casting dappled shadows on *the (a)* ground. It was *a (the)* perfect day for *a (x)* picnic.`,

        `A *few (little)* people have gathered around *the (an)* entrance to *the (a)* museum, waiting for it to open. They chatted excitedly amongst themselves, discussing *what (which)* exhibits they wanted to see first. As *the (a)*doors opened, they eagerly filed inside, ready to explore.`,

        `All of *the (x)* guests at *the (a)* party were having *a (the)* great time. They mingled and laughed, enjoying *the (x)* delicious food and drinks. *The (x)* music was playing and *the (x)* atmosphere was festive.`
      ]
    },
    {
      id: 'fillup-8',
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      commonData: {
        title: 'Drag and drop the words at proper places.'
      },
      lockAfter: 1,
      data: [
        `There are *a few* girls who have not brought their costumes for the play.
Ritika danced with *every* celebrity present at the function.
Can you sing *a* song for me?
*This* story is really intriguing.
Nobody understood anything *the* teacher taught.`,

        `There are *some* books on the table that do not have names written on them.
Do you have *any* food left?
Does Reem have *a* pet dog?
*That* story you told me about the blind puppy was very moving.
Mihika forgot to bring *her* spectacles to work.`,

        `I just had *an* apple and some orange juice.
*A* cat is sleeping on the couch.
A *few* people were waiting in line.
A car drove past us on *the* highway.
*Some* of the students in the class were confused.`,

        `*Every* morning, I have a cup of coffee with breakfast.
*A* dog barked loudly in the middle of the night.
*Any* child can learn to play an instrument if they practice.
*An* apple a day keeps the doctor away.
*The* sun is shining brightly today.`,

        `A cat crossed my path on *the* way home.
A *few* people were waiting in line at the ticket counter.
*Some* of the students in the class were absent today.
*Every* time I hear that song, it brings back memories.`
      ]
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'determiner-2',
      data: {
        title: 'Types of Determiners',
        text: [
          `1. Articles: Articles can be definite articles (the) or indefinite (a or an). 'The' is used when the speaker thinks that the listener already knows what is being referred to. Otherwise, 'a' (before consonants) or 'an' (before vowels) is used.`,
          {
            type: 'html',
            text: `Eg: I bought <i>a</i> nice present for my uncle.<br>
There's <i>an</i> otter over there.<br>
<i>The</i> beaches in Goa are beautiful.<br>
I'll give you <i>an</i> example of <i>the</i> essay question.`
          },
          `2. Demonstratives: Demonstrative determiners are used to identify or point to a particular person, event, or object. 'This' and 'that' is singular. 'These' and 'those' are plural.`,
          {
            type: 'html',
            text: `Eg: I like <i>this</i> kind of biscuit.<br>
Why don't you buy <i>that</i> book instead of this one?<br>
<i>Those</i> children outside are being too noisy for this time of night.`
          },
          `3. Possessive Adjectives: Possessive adjective determiners function as adjectives rather than pronouns. As they are adjectives, they appear before the noun that they are modifying.`,
          {
            type: 'html',
            text: `Eg: Do you like <i>my</i> new dress?<br>
I prefer <i>my</i> uniform to <i>yours<i>.<br>
Take <i>your</i> phone out of <i>your</i> pocket.`
          },
          `4. Quantifiers: Quantifiers provide approximate or specific answers to the questions "How many?" and "How much?"`,
          {
            type: 'html',
            text: `Eg: I only take <i>a little</i> bit of milk with my tea.<br>
Quite <i>a few</i> people should be coming to the party.<br>
I didn't take <i>many</i> holidays last year.<br>
I haven't brought <i>much</i> money with me.<br>
Do you think <i>a lot of</i> people believe what he says?<br>
<i>Most</i> students work hard to pass their exams.<br>
Have you got <i>any</i> proof that he committed the crime?<br>
It takes <i>some</i> effort for me to do exercise.<br>
Do we have <i>enough</i> rice to last the week?`
          },
          ` 5. Numbers: Numbers are either cardinal (one, two, three, etc.), which are adjectives referring to quantity, or ordinal (first, second, third, etc.) referring to distribution.`,
          {
            type: 'html',
            text: `Eg: <i>Two</i> cars are enough for most families.<br>
There are about <i>twenty-five</i> people in my office.<br>
It's my uncle's <i>fortieth</i> birthday next week.<br>
That is the <i>second</i> time you've done that!`
          },
          `6. Distributives: Distributive determiners are used to refer to a group or individual members of the group. They reveal more about how people or things are distributed, shared, or divided.`,
          {
            type: 'html',
            text: `Eg: <i>Both</i> countries need to discuss the issues and find a solution.<br>
<i>All</i> pet dogs need plenty of attention.<br>
<i>Half</i> the people decided not to vote.<br>
<i>Neither</i> house is suitable for our needs.<br>
We can eat at <i>either</i> 7 pm or 8 pm.`
          },
          `7. Interrogatives: Interrogatives are used to ask questions. 
=> 'Which' as a determiner is used to ask about a specific group of people or things. 
=> 'What' as a determiner is used when we are asking a general question. 
=> 'Whose' is used to ask a question about possession.`,
          {
            type: 'html',
            text: `Eg: <i>Which</i> restaurant did you like best?<br>
<i>What</i> time will you come?<br>
<i>Whose</i> pencil is this?`
          }
        ]
      }
    },
    {
      id: 'demonstrative',
      label: 'Fillup - Demonstratives',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Fill in the blanks using demonstrative determiners. Use the context of the sentence to help you decide whether the noun being referred to is near or further away.'
      },
      lockAfter: 2,
      data: [
        `*Those* kids in the house over the road are being really noisy.
*This* ring looks really good now that I'm wearing it.
I want *that* book that's on the top shelf but I can't reach it.
*This* headache I've had all day is really annoying me.
Can you please go and take down *that* horrible picture that's hanging on the kitchen wall.`,

        `Can you see all *those* beautiful horses out in the fields?
*These* gloves don't seem to fit me properly.
I'm fed up with *this* phone as I just can't get the alarm to work.
Everyone seems to have a social media account *these* days.
The house we looked at today was better than *those* three we saw last week.`,

        `*This* is the book that I was telling you about earlier.
Can you hand me *those* scissors on the table?
I like *these* shoes, they are so comfortable.
*That* movie we watched last night was really good.
*Those* cupcakes over there look delicious, I think I'll have one.`,

        `We belong to this city. *This* is our ancestral home.
I want to buy *this* necklace for my sister.
All the presents are here. I will ask Aleema to pack *these* gifts quickly.
The boys were very noisy. She wanted *those* boys to go away.
There is a tea shop across the street. Arya likes *that* tea shop.`
      ]
    },
    {
      label: 'Choose the Correct Answer',
      id: 'mcq-possessive',
      type: 'mcq',
      commonData: {
        title: 'Choose the correct possessive adjective to go in the gap.'
      },
      data: [
        {
          questions: [
            {
              qText:
                'It would be good if you could help me with _______ homework.',
              options: 'my, your, her, his'
            },
            {
              qText:
                'My sister really enjoys _______ days off work. She usually goes to town.',
              options: 'her, our, his, your'
            },
            {
              qText: 'We are thinking of buying ______ own home.',
              options: 'our, my, their, your'
            },
            {
              qText: `I like my local swimming pool but _______ opening hours aren't great.`,
              options: 'its, her, your, our'
            },
            {
              qText: `They went on holiday but didn't take _______ dogs.`,
              options: 'their, its, your, her'
            }
          ]
        },
        {
          questions: [
            {
              qText: `I've lost _________ wallet.`,
              options: 'my, her, our, their'
            },
            {
              qText: 'We like making _______ own bread.',
              options: 'our, their, his, whose'
            },
            {
              qText: '_______ car is that over there?',
              options: 'whose, his, their, our'
            },
            {
              qText: 'A leopard never changes _______ spots.',
              options: 'its, her, his, their'
            },
            {
              qText: 'Have you changed _______ mind again?',
              options: 'your, whose, their, his'
            }
          ]
        }
      ]
    },
    {
      id: 'fillup',
      label: 'Fillup - Quantifiers',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks using the most appropriate quantifier.',
        text: `Petrol prices go up *each (every)* year.
I can speak a *little (some)* Hindi, but I am not very fluent.
*Most (Many)* children start school at the age of five.
She doesn't have *many (much)* books so she visits the library often.
*All (Every)* the students are advised to wear their ID cards on all days.
We don't have *much (many)* money left after paying the school fees.
Ravi spent the *whole (full)* of last summer trying to fix his uncle's old bike.
I think there is *enough (much)* food for all our guests.
This bakery is very popular, *most (many)* of the cookies are sold by lunchtime.
*All (Each)* of our questions about the mystery were answered at the end of the play.`
      }
    },
    {
      type: 'completeWord',
      id: 'complete-word',
      label: 'Complete Word',
      commonData: {
        title: 'Complete the ordinal forms of the numbers given below.'
      },
      data: [
        `one| first
two| second
three| third
four| fourth
five| fifth`,

        `eleven|	eleventh
twelve|	twelfth
thirteen| thirteenth
sixteen| sixteenth
seventeen| seventeenth`,

        `eighteen| eighteenth
ninteen| ninetieth
twenty|	twentieth
twenty four| twenty fourth
twenty five| twenty fifth`,

        `twenty nine| twenty ninth
thirty|	thirtieth
thirty one|	thirty first
forty| fortieth
fifty| fiftieth`,

        `sixty| sixtieth
seventy| seventieth
eighty|	eightieth
ninety|	ninetieth
hundred| hundredth`
      ]
    },
    /*
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
text: `Eg: <i>the</i>, <i>this</i>, <i>that</i>, <i>these</i>, <i>those</i>, <i>my</i>, <i>our</i>, <i>your</i>, <i>his</i>, <i>her</i>, <i>its</i>, <i>their<i>`
},
`We cannot use more than one specific determiner before a noun.
General determiners are used to talk about people or things in a general or indefinite way.`,
{
type: 'html',
text: `Eg: <i>a</i>, <i>an</i>, <i>one</i>, <i>every</i>, <i>many</i>, <i>more</i>, <i>most</i>, <i>much</i>, <i>little</i>, <i>few</i>, <i>either</i>, <i>neither</i>, <i>no</i>, <i>other</i>, <i>each</i>, <i>some</i>, <i>both</i>, <i>any</i>, <i>enough</i>, <i>all</i>, <i>another</i>, <i>several</i>`
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
(explained in detail in class 7 determiner notes)*/
    {
      id: 'fillup-1',
      label: 'Fillup - Possessive Adjectives',
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
I said to Mahira, 'I think this is *your* pencil.' (Mahira's)
Please don't take those. Those are *my* colored pencils, not yours. (I)`,

        `This is *his* car, isn't it? (Arman's)
The Mehta brothers are wealthy. This is *their* estate. (Mehta brothers)
They have finished *their* meeting yesterday.(Mehta brothers)
I have lost *her* phone in the market. (Mahira's)
We bought this piece of land ten years ago. This is *our* plot. (we)`,

        `*My* car is parked in the garage. (I)
*Her* dog always greets me at the door. (Mahira's)
*Our* house has a big backyard. (My and my brothers)
*His* backpack is filled with textbooks and notebooks. (Arman's)
*Their* children are always well-behaved. (Mrs and Mr Mehta's)`,

        `*Your* phone is ringing, can you answer it?
*His* guitar playing is always impressive. (Arman's)
*Our* team won the championship game last night. (My and my brothers)
*Her* new dress is so beautiful. (Mahira's)
*My* sister's cat is very friendly. (I)`,

        `*Their* company is expanding to new markets. (Mrs and Mr Mehta's)
*Your* laptop is running out of battery, you should charge it.
*His* sister's wedding is next weekend. (Arman's)
*Our* parents always support us in our dreams and aspirations. (My and my brothers)
*Their* vacation photos are absolutely stunning. (Mrs and Mr Mehta's)`
      ]
    },
    {
      id: 'fillup-4',
      label: 'Fillup - Question words',
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
*Which* color do you like the most?`,

        `*How* many baskets of mangoes did you collect from the grove?
*Whose* bag is that blue one?
*What* language books she was reading in the library?
*Whose* family has a house near the cinema?
*How* much water do you drink a day?`,

        `*Which* country does the football star Son Heungmin play for?
*Whose* mother is she?
*What* ice cream do you like better, chocolate or mint choco?
*Which* book are you reading now?
*How* much noodles should we cook?`,

        `*Whose* diamond ring was stolen?
*Where* is your classroom?
*Which* book do you think is the most interesting?
*What* product do you use?
*Which* restaurant did you go to?`,

        `I don't know *what* non-fiction books he was reading.
I wonder *whose* dog that is.
*Whose* bag is this?
*What* should I do with the new laptop?
*Which* of these books is new?`
      ]
    },
    {
      id: 'fillup-9',
      label: 'Complete the Paragraph',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Fill in the blanks with determiners'
      },
      lockAfter: 1,
      data: [
        `I went to *the* grocery store to buy *some* ingredients for dinner. When I arrived, I realized that I only had *a few* items left on my shopping list. I quickly picked up *a few* tomatoes, *a* head of lettuce, and *some* garlic.`,

        `As I was browsing *the* aisles, I noticed that the *few* cans of soup that were left on *the* shelf were dented, so I decided not to buy them. Instead, I grabbed *a little* carton of chicken broth to use in my recipe. I also picked up the *little* bag of flour I needed to make bread. Although I didn't need much, I was grateful to have found everything on my list.`,

        `Only *a few* villages have remained the same with *the* arrival of the Internet. But *little* change has come to my village in *the* past decade, even with the arrival of *the* Internet. Most of *the* time there is no electricity.`,

        `Very *few* villages have *the* facilities that *the* cities or towns have. The *few* villages with better road connectivity have facilities like running water and electricity. Only *a few* of those villages have access to *the* Internet.`
      ]
    }
  ]
};
