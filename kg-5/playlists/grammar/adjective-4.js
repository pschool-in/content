export default {
  id: 'adjective-4',
  label: 'More on Adjective',
  pdf: '',
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Other Types of Adjective',
        text: [
          `# Interrogative adjective
It is used in asking questions.`,
          {
            type: 'html',
            text: `Eg: <br>
<b>which</b> car <br>
<b>whose</b> book <br>
<b>what</b> place`
          },
          `# Demonstrative adjective
It is used to express the noun's position as near or far. It is also used to talk about the time.`,
          {
            type: 'html',
            text: `Eg: <br>
<b>those</b> mangoes <br>
<b>these</b> pencils <br>
<b>this</b> box <br>
<b>that</b> tap <br>
<b>this</b> morning`
          },
          `# Possessive Adjective
It tells us about, to whom something or someone belongs to.`,
          {
            type: 'html',
            text: `Eg:<br>
<b>their</b> room <br>
<b>my</b> uncle <br>
<b>our</b> farm`
          }
        ]
      }
    },
    {
      id: 'classify',
      label: 'Classify Adjective',
      type: 'classifySentence',
      data: {
        title: 'Classify the underlined adjective.',
        types: [
          {
            name: 'Demonstrative Adjective',
            text: `What is the cost of *these* books?
Give me *that* pen.
*This* is my last performance on stage.
*These* shoes are too expensive.`
          },
          {
            name: 'Possessive Adjective',
            text: `Mihir is driving in *his* new red sports car.
Samanvi has got a new car. *Her* car is very nice.
Mahesh, where is *your* mother?
This is my sister. *Her* name is Tanvi.`
          }
        ]
      }
    },
    {
      id: 'classify-2',
      label: 'Classify Adjective-2',
      type: 'classifySentence',
      data: {
        title: 'Identify the underlined adjective and state its kind.',
        types: [
          {
            name: 'Adjective of Number',
            text: `I have *twenty five* students in my class.
I have learned *six* chapters from Science for the exam.
Meena has *two* dogs in her house.
They have *two* carpets at the centre of the hall.`
          },
          {
            name: 'Interrogative adjective',
            text: `*Whose* bag was that?
*Which* mobile do you like more?
*Which* plate is yours?
*What* is your brother's name?`
          }
        ]
      }
    },
    {
      label: 'Identify the type of Adjective',
      type: 'mcq',
      id: 'mcq',
      data: {
        title:
          'See the underlined adjective and identify the kind of adjective.',
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
      id: 'fillup',
      label: 'Fill in the blanks.',
      type: 'fillup',
      commonData: {
        title: `Click on the blank and select the appropriate adjective.`
      },
      data: [
        `*Those (This)* sheep are running away.
*This (These)* is the last ticket to the movie.
*These (That)* dancers are very talented.
*This (These)* fruit is very sour than lemon.
*Those (This)* farmers are using biofertilizers for farming.
*This (Those)* time I won't fail my final examination for sure!
*These (That)* mangoes are rotting in the box faster than expected.
*This (Those)* shirt is too small for me.
*Those (That)* jeans are not very comfortable for mountain hiking.
*These (That)* puppies are very playful around children.`,

        `What was *that (these)* noise?
*This (Those)* shirt does not fit me now.
*Those (That)* children were playing in the park.
We will clean *this (those)* room.
Who completed *this (those)* science project?
Could you please pass me *that (those)* water bottle?
I want *those (that)* big flower pots for Diwali celebrations.
*Those (That)* birds are flying South as a part of migration.
My dad presented *that (those)* book on my birthday.
*These (That)* clothes are wet due to sudden drizzling in the afternoon.`,

        `Manisha is wearing a *beautiful (tall)* dress.
She loves to eat *fresh (rotten)* apples.
Rahul has *curly (deep)* hair.
A ball is *round (curly)* in shape.
Birds have *beautiful (high)* feathers.
The blanket is *soft (round)*.
There was very *little (huge)* water in the bottle.
I wore a *red (short)* saree for my friend's wedding.
Ravi is an *obedient (white)* student.
My dad is wearing a *black (square)* coat.`,

        `Harish saw a *funny (clumsy)* clown.
Jasmines have *white (black)* petals.
The Earth is *round (oval)*.
Grandma gave me a *sweet (sour)* chocolate.
The book is very *colorful (round)*.
Priya loves to eat *sweet (grey)* mangoes.
A dog is a *domestic (wild)* animal.
Neeta is a *clever (old)* girl.
Paddy fields are very *green (blue)*.
The *black (blue)* soil is rich in nutrients.`,

        `In the morning, the *heavy (plump)* snow was covering the ground.
Suresh is a *lazy (smart)* boy and always fails in the exam.
The *rich (poor)* man has got a lot of money.
The sums are *difficult (easy)* to solve in the given time.
The ball is *round (rectangle)* in shape.
These boxes are *heavy (light)* and I cannot lift them myself.
My mom bought a *pretty (ugly)* dress for my birthday.
Rabbits are *cute (dangerous)* animals.
My brother gave money to the *poor (rich)* beggar.
That *naughty (sincere)* boy broke our balcony window.`,

        `Coffee is hot but ice is *cold ( black)*.
I like to sleep on a *soft (hard)* bed.
The Indian team was *happy (sad)* when they won the match.
I saw some *black (green)* clouds.
An *angry (black)* tiger jumped out of the cage.
My mom cooks *tasty (beautiful)* payasam.
A squirrel is a *small (huge)* animal.
The earth is *round(square)* in shape.
My cousin's house is very *big (fat)*.`,

        `My mother packed *healthy (unhealthy)* snacks for the picnic.
I read an *interesting (rich)* book today in the library.
I washed my face with *cold (dirty)* water after playing.
I wore my *warm (hot)* mittens in the snow while skiing.
My mom helped me make *delicious (raw)* sweets for Diwali.
My *furry (curly)* cat made me sneeze.
The *untidy (neat)* man lived on the streets near my area.
Sangeeta is a *bright (tall)* student who does her work on time.
Students are *happy (lazy)* when lunchtime begins in school.
Mumbai has *huge (deep)* skyscrapers when compared to other cities.`
      ]
    },
    {
      id: 'match',
      label: 'Match - Adjectives with nouns',
      type: 'match',
      commonData: {
        title: 'Match the adjectives with suitable nouns.'
      },

      data: [
        `starry, night
tall, trees
naughty, boys
woolen, clothes
cold, weather`,

        `curly, hair
green, grass
hot, milk
angry, lion
sweet, mango`,

        `sick, boy
sour, grapes
slow, tortoise
calm, water
salted, peanuts`,

        `high, mountain
deep, sea
sharp, knife
old, man
round, table`
      ]
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      commonData: {
        isPractice: false,
        title: 'Fill in the blanks by moving the words given at the bottom.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        }
      },
      data: [
        `The *naughty* boy was sent out of the music class by his teacher.
Walking is a *healthy* exercise for everyone.
Savitha is a *beautiful* girl in our class.
Nupur likes *colorful* balloons.
A rabbit has *long* ears.`,

        `My nephew is very *cute*.
There is a *huge* tree in my garden.
Yesterday was a *windy* day in my town.
I have a *blue* phone in my bag.
The cheetah is the *fastest* mammal on the land.`,

        `An octopus has eight *long* arms.
My dog has a *fluffy* tail.
I found a *green* pencil on my teacher's desk.
This is a *beautiful* house in my colony.
My puppy is very *playful* around children.`,

        `My brother spends *most* of his time watching you-tube videos.
Add *a little* more salt to the curry to make it tastier.
Are there *any* sweets left in the kitchen?
I want to drink *some* coffee after I finish my work.
We had *a lot of* fun during the summer holidays.`,

        `I had *enough* of your advice! Please stop!
There were *not many* people present for Diwali pooja due to Covid.
*Many* people lost their lives during Tsunami in 2004.
These days *most* people sleep with their mobiles beside their pillows.
The chocolate cake had *a lot of* cream over it.`
      ]
    },
    {
      type: 'selectWord',
      label: 'Find Me',
      id: 'select-word',
      commonData: {
        title: 'Identify the adjective in the sentence.'
      },
      data: [
        `The tree is too *tall* to climb.
Sita got *good* marks in the exam. She is very happy.
The gold ring is *expensive*.
Tarun is wearing a *red* shirt.
The elephant is a *large* animal.
Ruchi has *curly* hair.
Mihir has *five* pens in his bag.
I have a *black* sweater in the cupboard.
Mahesh ate *tasty* samosas in the restaurant.`,

        `Ramya is a *brilliant* painter.
The music was *loud*.
The wolf has *sharp* teeth.
I lost my *new* anklet.
Coconut trees are *tall*.
My sofa is covered with *fluffy* cushions.
My sister tied her *long* hair into a bun.
The *little* kitten was sleeping under the sofa.
The students danced to the *loud* music.
My garden is filled with *green* grass.`,

        `My sister likes *soft* music.
*Colorful* butterflies fly by my window every morning.
The *white* car is my uncle's.
*Fast* driving is dangerous.
*Cold* weather makes me lazy.
Rahul baked a *delicious* apple pie.
My dad bought a *big* refrigerator yesterday.
Riyaan has a *beautiful* garden in his house.
My grandparents live in a *brick* house.`
      ]
    },
    {
      id: 'fillup-story',
      label: 'Fill up in Story',
      type: 'fillup',
      commonData: {
        title: `Click on the blanks and fill the right option.`
      },
      data: [
        `Once upon a time, an *old (new)* porcupine lived in a *large (tall)* wood with his sons. 
One day, one of the porcupines went into the *deep (long)* jungle to fetch some *fresh (spoiled)* vegetables. 
He was a slow walker and he had just reached a *huge (black)* cabbage, when from behind the *green (stale)* leaves, out popped a *big (stripped)* hare.
He said, I hope you are quicker at eating, or will it take a year to finish the cabbage! The porcupine paid little attention to the hare's words and left from there.`,

        `Once upon a time, there lived a *beautiful (new)* stag. Like all other stags, he had *long (brief)*, *slender (round)* legs. 
One day he was grazing peacefully on *tender (stern)* shoots. Suddenly, he heard the howling of *dangerous (pretty)* wolves! 
He knew, he had to escape. So he started running. Suddenly his *large (fluffy)* antlers got stuck in the low-hanging branch and he was unable to escape. Finally, the wolves caught the stag.`
      ]
    },
    {
      label: 'Identify the adjectives',
      type: 'selectWord',
      id: 'multi-select-word',
      commonData: {
        isPractice: false,
        title: 'Select the adjectives in the passage.',
        multiSelect: true,
        isPassage: true,
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        }
      },
      data: [
        `Trees are found everywhere. Some trees are *big* and some are trees *small*. 
Some trees have *broad* leaves while some have *narrow* leaves. 
Some trees produce *sweet* fruits like mango and apple, while some give *sour* fruits like lemon.`,

        `My cousin, Ram has a *large* farm. In that farm there are many plants and animals. 
The *playful* dog's name is Rocky. The *cute* kitten is called Ginger. 
Ram sells *fresh* fruits and vegetables in the *big* market every Sunday.`,

        `A shopkeeper sells *tasty* and *fresh* apples and mangoes in different boxes. 
There are *forty* mangoes in *large* box and *fifteen* mangoes in *small* box.
He sells these fruits in a *big* supermarket.`
      ]
    }
  ]
};
