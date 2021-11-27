export default {
    id: 'adjective-5',
    label: 'Adjective-5',
    pdf: '',
    list: [
      {
        label: 'Degrees of Comparison',
        type: 'passage',
        id: 'adjectives-5-reading',
        data: {
          title: 'Degrees of Comparison',
text: `Adjectives are the words that modify or describe nouns or pronouns. They are also known as modifiers as they modify the noun and tell us about what a noun is in a particular context. For example:
1. Lotus is a "beautiful" flower. ( we can simply say, lotus is a flower, but here we are describing how it looks like)
2. Poornima is a "good" girl.
3. I bought a pair of "colorful" shoes.
# Kinds of adjectives
Adjective of Quality: These adjectives provide information about the quality of person/s, things or places. They can describe the "age", "size", "shape", "colors", "feelings", etc.
For example:
1. Ram is an "honest" boy.
2. Rose is a "beautiful" flower.
3. This is a "large" house.
Adjectives of Quantity: They provide information about the quantity of things or people.
For example : 
1."Many" people gathered near an accident. 
2."Few" people attended the meeting.
Adjectives of Number: They describe the number of people, things or places spoken of. For example:
1. I bought "two" shirts for Diwali.
2. I saw "three" parrots on the branch.
Interrogative adjectives: These are used before the nouns to ask questions. Words like - "which", "what", "whose", etc are called as interrogative adjectives.
Demonstrative adjectives: Words like "this", "that", "these", "those" are used to describe a particular person or a thing. For example:
1. "These" mangoes are sweet.
2. "That" car is yours.
Possessive Adjectives: They tell us about to whom something or someone belongs to. For example:
1. "their" room
2. "my" uncle
3. "our" farm
# Degrees of Comparison
Degrees of Comparison are adjectives that change form and are used to compare one thing or person to another.
Three types of Degrees of Comparison:
1. Positive Degree: When we want to describe a person or a thing but there is no comparison, we use the positive degree. Example - Lakshman is a "strong" man.
2. Comparative Degree: When we want to compare two persons or things, we use a comparative degree.
Example - Bheem is "stronger" than Lakshman. 
We use "more" & "than" for a comparative degree of adjectives and also "-er" is added to the positive adjective.
3. Superlative Degree: When we want to compare more than two persons or things, we use the superlative degree. 
Example - Ram is the "strongest" of the three.
We use "the" before the superlative degree of adjective and also "-est" at the end of an adjective.
Positive: rich, small, ugly, fast, few, bright, big, fat, hot, thin, sad, wealthy, lucky, early
Comparative: richer, smaller, uglier, faster, fewer, brighter, bigger, hotter, fatter, thinner, sadder, wealthier, luckier, earlier
Superlative: Richest, smallest, ugliest, fastest, fewest, brightest, biggest, fastest, hottest, thinnest, saddest, wealthiest, luckiest, earliest`
  }
},
{
    label: 'Choose the correct adjective',
    type: 'matchByDragDrop',
    id: '100',
    commonData: {
      isPractice: false,
      title:
        'Drag and drop the correct adjective to complete the sentence.',
      styles: {
        fontSize: '1rem',
        dashWidth: 80
      }
    },
    data: [
      `Kavitha answers all the questions correctly. She is an *intelligent* girl. 
These are *costly* chairs made of teak wood.
A cow gives us milk. It is a *useful* animal. 
Rahul doesn't eat well. So, he is *thin*.
Our school has a *big* auditorium when compared to other schools.`,

      `The *careless* watchman forgot to close the gate of the building.
My grandmother is a *wise* lady in our family. 
Manish lives in a *large* house located near the park.
We cooked *enough* food for our guests who arrived in the evening.
I bought *twelve* oranges from the supermarket yesterday.`,

      `We learned a *new* recipe in the cooking class today.
Aditya has *four* books on his shelf which he borrowed from the library.
Bhavya wore a *traditional* dress for Diwali celebrations in the society.
Mahesh was very *gentle* while cleaning his laptop.
Mihira is a *naughty* girl in her class.`
    ]
  },
  {
    label: 'Classify as True or False',
    id: '200',
    type: 'classifySentence',
    commonData: {
      title:
        'Classify the following statement as true or false.',
      types: ['True', 'False']
    },
    data: [
      [
        `Adjectives are called modifiers.
        Age and size are called the adjectives of quality.
        Adjectives of quantity use words like few and many.`,

        `Demonstrative adjectives use words like who, what.
       "This" and "that" are called interrogative adjectives.`
      ],
      [
        `"Than" is used in the comparative degree of adjectives.
"The" is used before the superlative degree of adjective.`,

        `Positive degree of an adjective is used to compare qualities of two persons or things.
        Comparative degree of an adjective is used to compare more than two things or people.`
      ]
    ]
  },
  {
    id: '300',
    label: 'Add the correct adjective of quantity',
    type: 'fillup',
    commonData: {
      title: `Use the correct adjective of quantity to complete the sentence.`
    },
    data: [
`I saw *many (much)* animals in the zoo.
I have *many (much)* friends.
How *many (much)* chocolates do you have?
There isn't *much (many)* sugar in my milk.
How *much (many)* water is used for boiling rice?`,

`There are *few (little)* chairs in the hall.
I bought *few (little)* tomatoes from the market.
There is *some (any)* juice left in the fridge.
Do you want *some (any)* tea?
I can give you *some (many)* money if you need it.`,

`Don't eat so *many (some)* sweets, it's not good for your health.
I have *little (any)* interest in dancing.
There was *little (few)* traffic near the school.
There is *little (few)* space left in the car.
I have *less (fewer)* than an hour to complete my homework.`
    ]
  },
  {
    id: '400',
    label: 'Add-demonstrative adjective',
    type: 'fillup',
    commonData: {
      title: `Choose the correct demonstrative adjective in the sentence.`
    },
    data: [
`*Those (This)* sheep are running away.
*This (These)* is the last ticket.
*These (That)* dancers are very talented.
*This (These)* fruit is very sour.
*Those (This)* farmers are using biofertilizers for farming.`,

`What was *that (these)* noise?
*This (Those)* shirt does not fit me now.
*Those (That)* children were playing in the park.
We will clean *this (those)* room.
Who completed *this (those)* science project?`
    ]
  },
  {
    id: '500',
    label: 'Classify the adjective-1',
    type: 'classifySentence',
    data: {
      title: 'Identify the underlined adjective and state its kind.',
      types: [
        {
          name: 'Adjective of quality',
          text: `This boy has a *sweet* voice.
          That is a *big* ground.
          I like *yellow* roses.
          I like *raw* mangoes. `
        },
        {
          name: 'Adjective of quantity',
          text: `I ate *some* fried rice today.
          We have *enough* time for completion of homework.
          I know very *little* about folk songs.
          Add *some* sugar to the tea.`
        }
      ]
    }
  },
  {
    id: '600',
    label: 'Classify the adjective-2',
    type: 'classifySentence',
    data: {
      title: 'Identify the underlined adjective and state its kind.',
      types: [
        {
          name: 'Demonstrative adjective',
          text: `What is the cost of *these* books?
          Give me *that* pen.
          *This* is my last performance on stage.
          *These* shoes are too expensive.`
        },
        {
          name: 'Possessive adjective',
          text: `Mihir is driving in *his* new red sports car.
          Samanvi has got a new car. *Her* car is very nice.
          Mahesh, where is *your* mother?
          This is my sister. *Her* name is Tanvi.`
        }
      ]
    }
  },
  {
    type: 'selectWord',
    label: 'Identify - degrees of comparison-1',
    id: '700',
    commonData: {
      title: 'Identify the comparative degree of adjective in the sentence.'
    },
    data: [
`My house is *bigger than* yours.
I am *smarter than* my brother. 
The summer is *warmer than* winter.
Tortoises live *longer than* cats.
My sister is *more intelligent than* my brother.`,

`Iceland is *colder than* Spain. 
I drive *more carefully than* my father. 
English is *easier than* Japanese. 
My son is *taller than* his father.
An elephant is *stronger than* Kangaroo.`
    ]
  },
  {
    type: 'selectWord',
    label: 'Identify - degrees of comparison-2',
    id: '800',
    commonData: {
      title: 'Identify the superlative degree of adjective in the sentence.'
    },
    data: [
`Cheetah is *the fastest* animal in the world.  
May is *the hottest* month of the year. 
Which mountain is *the highest* in the world?
Dhruv is *the noisiest* student in the school. 
This is *the best* book I have read.`,

`Friday is *the busiest* day of the week.
Mrs. Sunita is *the most polite* teacher I have ever met. 
Madan is *the slowest* runner in our class. 
Hyderabad is *the most beautiful* city in Telangana. 
February is *the shortest* month of the year.`
]
  },
  {
    label: 'Multiple choice questions',
    id: '900',
    type: 'mcq',
    commonData: {
      title: 'Identify the correct degrees of comparison for the sentence.'
    },
    data: [
      {
        questions: [
          {
            qText: 'The pen is light.',
            options: 'positive, comparative, superlative'
          },
          {
            qText: 'She is very beautiful.',
            options: 'positive, comparative, superlative'
          },
          {
            qText: `London is the largest city in England.`,
            options: 'superlative, comparative, positive'
          },
          {
            qText: `Whales are the biggest animals.`,
            options: 'superlative, comparative, positive'
          },
          {
            qText: `A school  is noisier than a hospital.`,
            options: 'comparative, superlative, positive'
          }
        ]
      },
      {
        questions: [
          {
            qText: `Meera's work is better than Ram's.`,
            options: 'comparative, positive, superlative'
          },
          {
            qText: 'Athletes are usually more famous than scientists.',
            options: 'comparative, superlative, positive'
          },
          {
            qText: `Poornima's hair is longer than yours.`,
            options: 'comparative, superlative, positive'
          },
          {
            qText: 'Arjun is a strong boy.',
            options: 'positive, comparative, superlative'
          },
          {
            qText: 'India is a democratic country.',
            options: 'positive, comparative, superlative'
          }
        ]
      },
       {
        questions: [
          {
            qText: 'Mango is sweet.',
            options: 'positive, comparative, superlative'
          },
          {
            qText: 'This is the most interesting book I have read.',
            options: 'superlative, comparative, positive'
          },
          {
            qText: 'The Himalayas are a mountain range in Asia.',
            options: 'positive, comparative, superlative'
          },
          {
            qText: 'Mount Everest is the highest peak.',
            options: 'superlative, comparative, positive'
          }
        ]
      }
    ]
  },
  {
    label: 'Identify - the kind of adjective',
    type: 'mcq',
    id: '1000',
    data: {
      title: 'See the underlined adjective and identify the kind of adjective.',
      questions: [
        {
          qText: `Asha has got *five* pencils.`,
          options: `adjective of number, adjective of quality, adjective of quantity`
        },
        {
          qText: `Who gave you *that* box?`,
          options: `demonstrative adjective, possessive adjective, interrogative adjective`
        },
        {
          qText: `A week has *seven* days.`,
          options: `adjective of number, adjective of quantity, adjective of quality`
        },
        {
          qText: `There are *few* chairs in the hall.`,
          options: `adjecitve of quantity, adjective of number, adjective of quality`
        },
        {
          qText: `*Which* is your bag?`,
          options: `interrogative adjective, possessive adjecitve, demonstartive adjective`
        },
        {
          qText: `My dad is an *excellent* cook.`,
          options: `adjective of quality, adjective of quantity, adjective of number`
        },
        {
          qText: `*Many* students attended the exam.`,
          options: `adjective of quantity, adjective of quality, demonstrative adjective`
        },
        {
            qText: `Pavithra is a *beautiful* girl.`,
            options: `adjective of quality, demonstrative adjective, interrogative adjective`
        }
      ]
    }
  },
  {
    label: 'Classify the statement-1',
    id: '1100',
    type: 'classifySentence',
    commonData: {
      title:
        'Identify the degree of comparison for the below sentence.',
      types: ['Positive', 'Comparative']
    },
    data: [
      [
        `This book is long.
        The airport is far.
        My mom is a good cook.`,

        `This house is bigger than that one. 
        This rose is more beautiful than others.
        He is taller than Mr.Das.`
      ],
      [
        `Her hair is short.
        She walks slow.`,

        `My job is worse than yours. 
        The earth is larger than moon.
        You are more polite than meera.`
      ]
    ]
  },
  {
    id: '1200',
    label: 'Classify the statement-2',
    type: 'classifySentence',
    data: {
      title: 'Identify the degree of comparison for the below sentence.',
      types: [
        {
          name: 'Comparative',
          text: `A car is faster than a bicycle.
          She is older than me.
          China is larger than India. 
          In Canada, January is colder than March.`
        },
        {
          name: 'Superlative',
          text: `This is the smallest box I have ever seen.
          Jupiter is the biggest planet in our solar system.
          I am the shortest person in my family.
          Sam is the most handsome boy in the whole school.`
        }
      ]
    }
  },
]
};
