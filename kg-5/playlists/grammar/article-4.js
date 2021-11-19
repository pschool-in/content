export default {
    id: 'article-4',
    label: 'Article-4',
    pdf: '',
    list: [
    {
    label: 'Article - Quantifiers',
    type: 'passage',
    id: 'article-quantifiers-reading',
    data: {
    title: 'Article - Quantifiers',
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
    My dad bought me *an (a, the)* iPad yesterday.
    Mrs.Bhavani is *the (a, an)* principal of our college.
    *The(A,An)* Ganges flows from *the (a, an)* Himalayas. 
    There is *an (a, the)* eucalyptus tree near my building.
    Manvi is *a (an, the)* small village in Karnataka.
    Mohan has *an (a, the)* interest in singing.
    *The (An, A)* building on the corner is under construction.`,
    
    `It is better to tell *the (a, an)* truth.
    India is *a (an, the)* country.
    Lakshadweep is *an (a, the)* island.
    He arrived *an (a, the)* hour later.
    Which bike do you like? *The (A, An)* blue one?
    Pass me *the (a, an)* slice of bread.
    I saw *an (a, the)* eagle flying near my fields.
    *The (A, An)* Tajmahal is in Agra.
    My mom bought *a (an, the)* pair of jeans and a shirt.
    There is *an (a, the)* umbrella in my bag.`,
    
    `He is *an (a, the)* honest man.
    His wife is *an (a, the)* American.
    My brother acted in *a (an, the)* movie.
    *The (A, An)* laptop that I bought is not very expensive.
    Rohit bought *a (an, the)* cup of tea.
    Copper is *an (a, the)* useful metal.
    He gave me *an (a, the)* inkpot and *a (an, the)* pen.
    *The (A, An)* rose is a beautiful flower.
    I saw *a (an, the)* baby hippo in *the (a, an)* zoo.
    I saw *an (a, the)* anthill in my garden.`,

    `Reading is *a (an, the)* good habit.
    *The (A, An)* school will remain closed for two days.
    My sister is *an (a, the)* English teacher.
    She bought *an (a, the)* orange dress.
    My husband is *a (an, the)* doctor.
    My neighbour bought *a (an, the)* new car.
    *The (A, An)* Birla planetarium is located in Hyderabad.
    My dad is *an (a, the)* engineer.
    Adi's brother bought *a (an, the)* new bicycle.
    Are you coming to *the (a, an)* library tomorrow?`
        ]
      },
      {
        type: 'selectWord',
        label: 'Identify - Article',
        id: '200',
        commonData: {
          title: 'Select the article in the sentence.'
        },
        data: [
`There is *a* snake. 
Mahi wants *an* iPad.
Tia has *a* cat.
I can see *a* blue car.
This is *an* easy question.
Piya is eating *an* apple.
Somnath is reading *a* book.
Karthik is sleeping on *the* sofa.
Mihir has *an* old bike.
My sister wants to be *an* astronaut.`,

`I had *an* egg for breakfast.
My son wants to be *an* architect.
My cousin is *a* pilot. 
There is *an* orange in the fridge.
Did you read *the* book I gave you?
Swati is *a* nice girl.
Manish was *the* first to arrive in class.
I have *a* little white kitten.
There is *a* beehive on neem tree.
Aladdin had *a* magic lamp.`,

`That's *an* easy question.
She is *a* pretty girl. 
Neil Armstrong was *an* American astronaut.
This is exactly *the* shirt I was looking for.
Mr.Iyer is *an* honorary member of our council.
My grandfather was *the* village chief.
*The* fruit market will be closed on Tuesday.
He gave me *a* call in the evening.
Reading is *a* good habit.
Mahesh bought *a* new watch.`
        ]
      },
      {
        label: 'Articles - Yes or No',
        id: '300',
        type: 'classifySentence',
        commonData: {
          title: 'Identify if the below sentences have conjunction or not.',
          types: ['Yes', 'No']
        },
        data: [
          [
            `I would like to have an orange.
            Donkey is an animal.
            I bought an umbrella.`,
    
            `Orange is fruit.
            Donkey is animal.
            Umbrella is useful thing.`
          ],
          [
            `Dog is a man's best friend.
            Sun rises in the east.
            Shannu is a nice boy.`,
    
            `Cross road carefully.
            Arya goes to missionary school.
            Read social textbook carefully.`
          ]
        ]
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
          At that time, *a (an, the)* large sandy lobster crawled out of *the (a, an)*sea water. 
          All *the (a, an)* sea animals tried to shake hands with me. 
          But, they pricked me till I was black and blue. 
          They taught me *a (an, the)* lesson not to hurt anyone. 
          Vishnu `,
          title: 'Fill in the correct article and complete the letter'
        }
      },
      {
        label: 'Fill up',
        type: 'matchByDragDrop',
        id: '500',
        commonData: {
          isPractice: false,
          title: 'Drag and drop the suitable quantifiers to make a meaningful sentence.',
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
  label: ' Article - letters with dual roles/quantifiers',
  type: 'passage',
  id: 'article-reading',
  data: {
  title: 'Article - letters with dual roles/quantifiers',
  text: `# Use of "a/an"
  It's understood that "a" is used for words beginning with consonant sound while "an" is used before the nouns beginning with vowel sounds. But for certain words like univeristy, unicorn, European, union, etc we use the article "a" as they sound as "you" i.e. they begin with a consonant sound and not with vowel sound.
  Similarly for words like hour, honest, heir, MBA, FIR, etc article "an" is used as they begin with a vowel sound, even though they start with consonants.
  # Use of "the"
  "the" is also used for things like - the sun, the moon, the sky, etc.
  "the" is also used for proper nouns like names of monuments, rivers, oceans, etc.
  "the" is also used for superlatives as the strongest, the longest, the smallest, etc.
  "the" is also used for number positions like the first, the fifth, the second, the third, etc.
  # Omission of Article or No article:
  We do not use articles in the following cases:
  Names of the persons - Mahita is my best friend (not The Mahita).
  Common nouns in the plural number - Birds live in trees (not The birds) Cows give milk (not The cows)
  Names of the days/Months- Saturday is a week off. (not The Saturday)
  Names of materials- We wear clothes made of cotton. ( not the cotton)
  # Quantifiers:
  We use indefinite article to certain quantifiers like - "few", "little" to show that the quantity of the thing is small, but it adds lot of value or is of great importance. When little and few are used, it is essential to consider whether the noun referred to is countable or not. The quantifier ‘a little’ (with and without the article ‘a’) is needed for small quantities with uncountable nouns. ‘A few’ (with and without the article ‘a’), on the other hand, requires countable nouns in the plural if the speaker wants to express a small number.
  For example:
  1. Mrudula was never lonely, she made " a few" good friends while she was in university.
  2. My grandfather needs "a little" help with sorting his medicines.
  Similarly, indefinite article is also used for words like "few", "little" when words like "only" or "just" are used.
  For example:
  1. Ramesh made "just a few" mistakes in his test.
  2. There is "only a little" icecream left in the fridge.`
      }
    },
      {
        label: 'Complete the sentence',
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
Can you pass me a *slice* of bread?
There was *an* elephant in the field.
Mahesh has an *interest* in painting.
We saw a tiger in *the* zoo.`
  ]
},
{
  id: '700',
  label: 'Choose the word',
  type: 'fillup',
  commonData: {
    title: `Select the appropriate word to complete the sentence.`
  },
  data: [
`Do you know how to play *the keyboard (keyboard)*?
This is my best friend *Vamshi (the vamshi)*.
My mother is *a doctor (the doctor)*. 
My brother is *an author (a author)*. 
Cow is *a domestic (an domestic)* animal.
Riyaan wanted *a new (an new)* watch for his birthday.
All students must obey *the rules (an rules)* of the school.
My mom is *an MBA (a MBA)* graduate.
My teacher read *an interesting (a interesting)* story from today's newspaper.
Mrs. Sunita is *an excellent (a excellent)* teacher.`,

`*The sun(A sun)* shines brightly.
One of my cousins is *an engineer(a engineer)*.
My son wants to be *a scientist (an scientist)*.
Do you have *a passport (an passport)*?
My grandmother is as wise an *an owl(a owl)*.
We have *an exam (a exam)* tomorrow.
My parents waited *an hour (a hour)* in the railway station.
Richa is *an honest (a honest)* student in the class.
Sumitra's father is *an advocate (the advocate)*. 
Ravi met with *an accident (the accident)* yesterday.`,

`There is a spider on *the roof(a roof)*.
Karthik can play *the guitar (a guitar)*.
*The AC (An, AC)* has stopped working.
Please open *the window (a window)*.
She is *an architect(a architect)*.
He can play *the flute (an flute)*.
*The Himalayas (A Himalayas)* lie to North of India.
Sanskrit is *a difficult (an difficult)* language.
The children found *an egg (a egg)* in the bird's nest.
I met him at *the hotel (a hotel)* yesterday.`
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
    title: 'Add the correct article to complete the conversation between two friends.'
  }
},
{
  label: 'Classify- Articles or No article',
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
    },
    {
      id: '1000',
      label: 'Fill up',
      type: 'fillup',
      commonData: {
        title: `Choose the appropriate option to complete the sentence.`
      },
      data: [
    `The roads are empty. There are only *a few (few)* cars on the road.
    I am very busy. I have *little (a little)* time to see the email.
    I'd like to have coffee with just *a little (little)* sugar.
    Anand can speak German because he lived in Berlin for *a few (few)* years.
    You look amazing! It seems like you have lost *a little (little)* weight.
    There is *little (a little)* noise in small villages.
    I have *a few (few)* good friends. I am not alone.
    Vihaan gave us *a few (few)* apples from his garden.
    I have got *a few (few)* chocolates to give away.
    Tina is lucky. She has *few (a few)* problems.`,
    
    `Sweden has *little (a little)* sunshine in winter. 
    He has *little (a little)* self-confidence. He has trouble talking to new people.
    There are only *a few (few)* people she really trusts. 
    There are *few (a few)* female bike riders in my city. 
    There is *a little (little)* milk left in the fridge. It should be enough for our tea.
    There are *a few (few)* horses grazing in front of the barn.
    Can you buy *a few (few)* apples?
    You have *a little (little)* time left.
    My neighbour let me pick *a few (few)* mangoes from the tree.
    There are *a few (few)* tables in the auditorium.`,
      ]
    }
  ]
};
