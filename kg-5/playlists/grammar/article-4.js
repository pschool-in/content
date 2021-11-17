export default {
  id: 'article-4',
  label: 'Article-4',
  pdf: '',
  list: [
    {
      label: 'Article - Reading - 1',
      type: 'passage',
      id: 'article-reading',
      data: {
        title: 'Article',
        text: `Articles "a", "an" and "the" are commonly used before nouns.
Articles "a/an" are called indefinite article and "the" is known as definite article.
"a" is used before singular nouns beginning with consonant sounds.
"an" is used before the nouns starting with sounds "a,e,i,o,u".
"the" is used before the singular and plural nouns and it is used when people speak of a person, a place or a thing already mentioned, or things or persons in a situation.
Quantifiers: The words that are used before nouns to imply the quantity of a noun are called quantifiers. Examples are some, any, many, much, plenty of, a lot of and a few. These can be used for both countable and uncountable nouns.
Zero articles: In some situations, we do not use any articles at all, such a situation is called a "zero article". When we are talking about something in general or when we mention a city or country, we do not use articles.`
      }
    },
    {
      id: '100',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Select the correct article to complete the sentence.`
      },
      data: [
        `I met *a (the, an)* friend in the store. 
    He ate *an (a, the)* orange for his breakfast.
    I have *a (an, the)* pet cat.
    I bought *an (a, the)* iPad yesterday.
    Kiran's mother is *the (a, an)* principal of our college.
    *The(a,an)* Ganges flows from *the (a, an)* Himalayas.`,

        `It is better to tell *the (a, an)* truth.
    India is *a (an, the)* country.
    Lakshadweep is *an (a, the)* island.
    He arrived *an (a, the)* hour later.
    Which bike do you like? *The (a, an)* blue one?`,

        `He is *an (a, the)* honest man.
    His wife is *an (a, the)* American.
    My brother acted in *a (an, the)* movie.
    *The (a, an)* laptop that I bought is not very expensive.
    Rohit bought *a (an, the)* cup of tea.`,

        `Reading is *a (an, the)* good habit.
    *The (a, an)* school will remain closed for two days.
    My sister is *an (a, the)* English teacher.
    She bought *an (a, the)* orange dress.
    My husband is *a (an, the)* doctor.`
      ]
    },
    {
      type: 'selectWord',
      label: 'Identify',
      id: '200',
      commonData: {
        title: 'Select the article in the sentence.'
      },
      data: [
        `There is *a* snake. 
Mahi wants *an* iPad.
Tia has *a* cat.
I can see *a* blue car.
This is *an* easy question.`,

        `I had *an* egg for breakfast.
My son wants to be *an* architect.
*The* British drink too much tea.
There is *an* orange in the fridge.
Did you read *the* book I gave you?`,

        `That's *an* easy question.
She is *a* pretty girl. 
Neil Armstrong was *an* American astronaut.
This is exactly *the* shirt I was looking for.
Mr.Iyer is *an* honorary member of our council.`
      ]
    },
    {
      label: 'Yes or No',
      id: '300',
      type: 'classifySentence',
      data: {
        title: 'Identify whether the sentences have articles or not.',
        types: [
          {
            name: 'Yes',
            text: `I would like to have an orange.
              Donkey is an animal.
              I bought an umbrella.`
          },
          {
            name: 'No',
            text: `Orange is fruit.
              Donkey is animal.
              Umbrella is useful thing.`
          }
        ]
      }
    },
    {
      id: '400',
      label: 'Complete the letter',
      type: 'fillupOptions',
      data: {
        text: `Dear Neha, 
          I am fine and hope to hear the same from you. Our entire class went to *a (an, the)* picnic to *the (a, an)*beach.
          I was left alone. So, I went to *the (a, an)* sandy corner and sat down. 
          My mother packed me *an (a, the)* egg, cake and *a (an, the)* chocolate. 
          At that time, *a (an, the)* large sandy Lobster crawled out of *the (a, an)*sea water. 
          All *the (a, an)* sea animals tried to shake hands with me. 
          But, they pricked me till I was black and blue. 
          They taught me *a (an, the)* lesson not to hurt anyone. 
          Vishnu`,
        title: 'Fill in the correct article and complete the letter'
      }
    },
    {
      label: 'Fill up',
      type: 'matchByDragDrop',
      id: '500',
      commonData: {
        isPractice: false,
        title:
          'Drag and drop the suitable quantifiers to make a meaningful sentence.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        }
      },
      data: [
        `I have *many* friends in my life.
*Few* people know as much about video games as Jeevan does.
Are there *any* sweets?
I want to drink *some* coffee.
There is *a lot of* gold in the bag.`,

        `I don't eat *much* seafood.
There are *few* bananas in the bowl.
Do you have *little* time to help me with my homework?
How *many* coins do you have?
I didn't have *any* breakfast today.`
      ]
    },
    {
      label: 'Article - Reading - 2',
      type: 'passage',
      id: 'article-reading-2',
      data: {
        title: 'Article',
        text: `Use of "a/an"
It's understood that "a" is used for words beginning with consonant sound while "an" is used before the nouns beginning with vowel sounds. But for certain words like univeristy, unicorn, European, union, etc we use the article "a" as they sound as "you" i.e. they begin with a consonant sound and not with vowel sound.
Similarly for words like hour, honest, heir, MBA, FIR, etc article "an" is used as they begin with a vowel sound, even though they start with consonants.
Use of "the"
"the" is also used for things like - the sun, the moon, the sky, etc.
"the" is also used for proper nouns like names of monuments, rivers, oceans, etc.
"the" is also used for superlatives as the strongest, the longest, the smallest, etc.
"the" is also used for number positions like the first, the fifth, the second, the third, etc.
Omission of Article or No article:
We do not use articles in the following cases:
Names of the persons - Mahita is my best friend (not The Mahita).
Common nouns in the plural number - Birds live in trees (not The birds) Cows give milk (not The cows)
Names of the days/Months- Saturday is a week off. (not The Saturday)
Names of materials- We wear clothes made of cotton ( not the cotton)`
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: '600',
      commonData: {
        isPractice: false,
        title: 'Drag and drop the appropriate word to complete the sentence.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        }
      },
      data: [
        `What's *the* capital of your country?
I always have an *egg* for breakfast.
I read *an* interesting story.
I saw *a* rainbow in the sky. 
My friend has a *sore throat* due to a cold.`,

        `My grandmother told me *a* story.
Can you Pass me a *slice* of bread?
There was *an* elephant in the field.
Mahesh has an *interest* in painting.
We saw a tiger in *the* zoo.`
      ]
    },
    {
      id: '700',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Select the appropriate word to complete the sentence.`
      },
      data: [
        `Do you know how to play *the keyboard (keyboard)*?
This is my best friend *Vamshi (the vamshi)*.
My mother is *a doctor (the doctor)*. 
My brother is *an author (a author)*. 
Cow is *a domestic (an domestic)* animal.`,

        `*The sun(A sun)* shines brightly.
One of my cousins is *an engineer(a engineer)*.
My son wants to be *a scientist (an scientist)*.
Do you have *a passport (an passport)*?
My grandmother is as wise an *an owl(a owl)*.`,

        `There is a spider on *the roof(a roof)*.
Karthik can play *the guitar (a guitar)*.
*The AC (An AC)* has stopped working.
Please open *the window(a window)*.
She is *an architect(a architect)*.`
      ]
    },
    {
      id: '800',
      label: 'Complete the conversation',
      type: 'fillupOptions',
      data: {
        text: `Krishna: Let's make some snacks for our family.
    Radha: I think we should make *a (an)* cake.
    Krishna: Yes, it's *a (the)* good idea! I have got *an (a)* egg and some oranges. Let's make *an(a)* orange cake.
    Radha: To finish it, we can add *the (a)* chocolate icing on top of *the(a)* cake. 
    Krishna: okay. I hope our family is going to like *the(a)* cake we make.`,
        title:
          'Add the correct article to complete the conversation between two friends.'
      }
    },
    {
      label: 'Identify',
      id: '900',
      type: 'classifySentence',
      commonData: {
        title:
          'Select whether the sentence has a definite/indefinite/no article.',
        types: ['Definite Article', 'Indefinite article', 'No article']
      },
      data: [
        [
          `I wake up at 6 0'clock in the morning.
      The Arabian sea lies to the west of India.
      It is better to tell the truth.`,

          `Mihir wants a pair of jeans.
      She is an hour late.
      I just read an interesting novel.`,

          `Please keep quiet! Don't make noise!
      We love to eat Indian food.`
        ],
        [
          `The cow gives us milk.
      Can you switch off the light?
      There is someone at the door.`,

          `He has a daughter.
      It is a good bike.
      Tia wants an ink pen.`,

          `Milk is good for you.
      Men are always fond of cricket.`
        ]
      ]
    }
  ]
};
