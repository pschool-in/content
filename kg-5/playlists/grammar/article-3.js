export default {
    id: 'article-3',
    label: 'Article-3',
    pdf: '',
    list: [
    {
    label: 'Definite and Indefinite Article',
    type: 'passage',
    id: 'article-reading',
    data: {
    title: 'Definite and Indefinite Article',
    text: `Articles are of two types – the definite article (the) and the indefinite article (a/an).
# Indefinite articles:
The indefinite articles "a/an" are generally used to mention some person or thing.
These articles do not specify a particular person or a thing.
"A" and "An" are used to introduce noun words or naming words and are also used to mention singular countable nouns.
"a" is used before singular nouns beginning with consonant sounds.
"an" is used before singular nouns beginning with vowel sounds.

# Definite article:
We use definite article "the" when we are talking about a specific person or a thing.
"the" is used for countable and uncountable nouns/singular and plural nouns.`
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
*the (a)* wolves`,
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
She goes to temple in *the (a, an)* morning.
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
She is eating *a (an, the)* chocolate pastry.`,
        ]
      },
      {
        label: 'Yes or No',
        id: 'yes-or-no',
        type: 'classifySentence',
        data: {
          title: 'Write whether the article used for each word is correct or wrong.',
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
He asked, "Can I use your mobile, Manoj?". Sure, replied Suresh. 
When he searched, he could not find his mobile anywhere. He said, "I think someone stole it". 
Oh! I am so sorry, said Suresh. But Manoj smiled and said it is ok, as *the (a, an)* thief will not be able to use it as I have switched it off.`          
        ]
     }
    ]
};
