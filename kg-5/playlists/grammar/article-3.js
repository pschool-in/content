export default {
  id: 'article-3',
  label: 'No Article Rules',
  pdf: '',
  list: [
    {
      label: 'Reading',
      type: 'passage',
      id: 'article-reading',
      data: {
        title: 'No Article Rules',
        text: [
          `To talk about things in general.`,
          {
            type: 'hilight',
            text: `Fried foods are unhealthy.
Boys are usually fond of outdoor games.`
          },
          `No article is used before plural and uncountable nouns.`,
          { type: 'hilight', text: 'cars, people, life, water' },
          `No article is used before abstract nouns.`,
          { type: 'hilight', text: 'education, happiness, music' },
          `No article is used before single countable nouns.`,
          {
            type: 'html',
            text: `<b>People</b>: Mary, Ashok<br><b>Places</b>: Jupiter, Russia, Oxford street<br><b>Language</b>: English, Hindi<br><b>Subjects</b>: History, Law, Science<br><b>Days, months</b>: Monday, November<br><b>Games</b>: football, chess<br><b>Meals</b>: breakfast, dinner<br><b>Routine Places</b>: in bed, at home, to school, to work<br><b>Movement or Transport</b>: on foot, by car, by air`
          }
        ]
      }
    },
    {
      id: 'fill-up-1',
      label: 'Pick-Correct Article',
      type: 'fillup',
      commonData: {
        title: `Write the correct article before each naming word or noun.`
      },
      data: [
        `*an (a)* apple
*a (an)* cage 
*a (an)* doctor 
*an (a)* inkpot
*a (an)* train`,

        `*an (a)* orange
*an (a)* owl
*an (a)* elephant
*the (a)* bananas
*a (an)* cat`,

        `*the (an)* cats
*the (a)* dogs
*an (a)* eagle
*a (an)* baboon
*the (a)* wolves`
      ]
    },
    {
      id: 'fill-up-2',
      label: 'Complete the following',
      type: 'fillup',
      commonData: {
        title: `Fill in the sentences with correct articles.`
      },
      data: [
        `He ate *an (a, the)* apple.
I will meet *the (a, an)* President today.
The mangoes cost thirty rupees *a (an, the)* piece.
I have *an (a, the)* exam today. 
*A (an, the)* dog is barking.
She goes to temple in *the (a, an)* mornings.
Abhinav is *the (a, an)* best singer in the class.
*The (A, An)* camel is the ship of the desert.
Aarav is sleeping on *the (a, an)* grey sofa.
*The (An, A)* sun is shining bright today!
He is holding *a (an, the)* bag.`,

        `There is *a (an, the)* cat in my room. 
My brother bought *a (an, the)* gift for me. 
He is eating *an (the, a)* apple. 
I saw *an (a, the)* elephant.
My sister poured honey on *the (a, an)* fruits. 
I saw *a (an, the)* snake in my garden.
My uncle is *a (the, an)* policeman.
Are you going to *the (a, an)* park this evening?
There is *a (the, an)* fountain at the entrance of the temple.
My cousins visited *the (a, an)* Tajmahal last year.`,

        `I am reading *a (an, the)* novel.
It is *a (the, an)* sweet memory.
I want *a (the, an)* burger.
She wants to buy *an (the, a)* umbrella. 
We can see *the (a, an)* stars at night.
*The (A, An)* elephants are very big animals.
That is *an (a, the)* interesting book.
My brother has *a (an, the)* headache.
I have *a (an, the)* test today.
She is eating *a (an, the)* chocolate pastry.`
      ]
    },
    {
      label: 'Yes or No',
      id: 'yes-or-no',
      type: 'classifySentence',
      data: {
        title:
          'Write whether the article used for each word is correct or wrong.',
        types: [
          {
            name: 'Yes',
            text: `A friend
              A gun
              The postcard
              An hour
              An octopus`
          },
          {
            name: 'No',
            text: `An basket
              A eagle
              A owl
              A ice-cream
              A inkpot`
          }
        ]
      }
    },

    {
      type: 'selectWord',
      label: 'Select - Article-2',
      id: 'select-word-2',
      commonData: {
        title: 'Select the articles in the paragraph.',
        multiSelect: true
      },
      data: [
        `I live in Hyderabad. It is *a* big city. *The* Charminar is *a* famous monument in our city. 
*The* Birla Planetarium is *the* most frequently visited place by many students every year.
Nehru Zoological park is *a* famous zoo in Hyderabad which consists of different kinds of animals.`,

        `My neighborhood is *a* very nice place. There is *a* big supermarket at *the* end of *the* road. 
There is also *a* small park near my home. Also we have *a* health center in *the* colony. 
In addition, there is *a* preschool where my little sister studies.`,

        `Once upon *a* time *a* women had *an* only son whose name was Aladdin. 
One day as he was looking for wild figs out in the desert, he came across *a* dungeon.
Aladdin went in to *the* dungeon and found *a* magic lamp.
When Aladdin rubbed *the* magic lamp *a* genie arrived and asked him to wish for something.`
      ]
    },
    {
      id: 'fill-up-3',
      label: 'Complete the Story',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks with appropriate articles to complete the story.`
      },
      data: [
        `Once upon a time, in *a (the, an)* thick forest, *a (the, an)* lion was sleeping under *a (an, the)* tree. *A (the, an)* cheerful mouse came there and saw *the (a, an)* lion. *The (a, an)* mouse climbed onto the body of the lion and started playing. He pulled *the (a, an)* lion’s whiskers. Suddenly the lion woke up and roared in anger and caught the mouse. *The (a, an)* mouse trembled in fear. The lion took pity on it and let it go. The mouse thanked and promised the lion that it would help in times of need. One day *a (an, the)* hunter trapped *the (an, a)* lion. *The (a, an)* poor lion roared for help. The mouse heard the cries and came there and cut *the (a, an)* net with its sharp teeth. The lion came out and they became good friends.`,

        `One afternoon *a (the, an)* fox was walking through *the (a, an)* forest and spotted *a (the, an)* bunch of grapes hanging from over *a (an, the)* lofty branch. “Just *the (a, an)* right thing to quench my thirst,” he thought. Taking a few steps back, *the (a, an)* fox jumped and just missed *the (a, an)* hanging grapes. Again *the (a, an)* fox took a few paces back and tried to reach them but still failed.After *an (a, the)* hour finally *the (a, an)* fox gave up and turned up his nose and said, “They’re probably sour anyway,” and walked away.`,

        `One hot day, *a (an, the)* thirsty crow flew all over the fields looking for water. For a long time, he could not find any. He felt very weak, almost lost all hope. Suddenly, he saw *a (an, the)* water jug below *the (a, an)* tree. He flew straight down to see if there was any water inside. Yay! he could see some water inside the jug! *The (a, an)* crow tried to push his head into the jug. Sadly, he found that *the (a, an)* neck of the jug was too narrow. Then he tried to push *the (a, an)* jug to tilt for the water to flow out, but the jug was too heavy.
*The (a, an)* crow thought hard for a while. Then, looking around it, he saw some pebbles. He suddenly had *a (an, the)* good idea. 
He started picking up *the (a, an)* pebbles one by one, dropping each into the jug. As more and more pebbles filled *the (a, an)* jug, the water level kept rising. Soon it was high enough for *the (a, an)* crow to drink. His plan had worked!`,

        `Once upon a time there was *an (a, the)* old farmer who had a horse and a donkey. 
He was fond of both of them but he took better care of *the (a, an)* horse.
*The (A, An)* donkey always carried heavy load to the market. 
One day, the donkey moaned and said: I am so weak! Couldn't you take some of my load.
*The (A, An)* horse said no, I won't carry your load. So, the poor donkey carried on. 
But soon he had to stop again and said: please help me or I will never reach *the (a, an)* market alive.
But *the (a, an)* horse replied: Rubbish! Come on, you will manage this time too. 
After *a (the, an)* few steps the donkey dropped dead on the ground. 
*The (a, an)* master saw donkey dead and felt vey sad and later transferred all *the (a, an)* load to the horse.`,

        `One night Manoj and his friend Suresh were travelling by train. 
They spoke for sometime and after *a (the, an)* while they switched off *the (a, an)* light and fell asleep. 
Soon, *a (an, the)* thief entered the compartment. 
He saw Manoj's mobile lying beside him. 
*The (A, An)* thief carefully took it away without disturbing him. *The (A, An)* next morning Suresh wanted to use Manoj's mobile.
He asked, "Can I use your mobile, Manoj?". Sure, replied suresh. 
When he searched, he could not find his mobile anywhere. He said, "I think someone stole it". 
Oh! I am so sorry, said suresh. But Manoj smiled and said it is ok, as *the (a, an)* thief will not be able to use it as I have switched it off.`
      ]
    },
    {
      id: 'no-article',
      label: 'No Article - Fill up',
      type: 'fillupOptions',
      commonData: {
        title: `Click on the blanks and pick the correct Article. Select ' - ' for no article.`,
        options: '-, a, an'
      },
      data: [
        `*-* man is mortal.
  Can you tell me *a* story?
  She goes to the temple in *-* mornings.
  I am fond of *-* music.
  I will go to school by *-* walk.
  Ashoka was *an* honest king.
  I left my book at *-* home.
  I saw *a* snake in my garden.
  He likes to read *-* short stories.
  A teacher is *an* important person in everyone's life.`,

        `I bought *a* pair of shoes.
  *-* elephants are very intelligent animals.
  I saw *a* movie last night.
  They are staying at *a* hostel.
  Ram played with *-* determination.
  *-* penguins live in the South Pole.
  I could see *-* clouds in the sky.
  There was *-* milk on the table.
  I gave it to *-* Jhonny.
  She arrived in *-* India yesterday.`,

        `She is *a* famous actress.
  Do you speak *-* English?
  He is good at *-* cricket.
  People will travel to *-* Mars soon.
  I do not like *-* basketball.
  Shall we play *a* game of chess?
  My grandma was sick. We took her to *-* hospital. Now she is good.
  We saw *an* elephant in the zoo.
  Do you eat *-* rice everyday?
  My brother does not like *-* chicken.`
      ]
    }
  ]
};
