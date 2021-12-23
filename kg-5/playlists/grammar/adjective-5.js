export default {
  id: 'adjective-5',
  label: 'Order of Adjective',
  pdf: '',
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Order of Adjective',
        text: [
          `Very often we use more than one adjective with the noun.
          In that case, the order of adjectives is very important.`,
          {
            type: 'html',
            text: `Eg: <br>
five beautiful puppies: correct <br>
beautiful five puppies: incorrect <br>
<br>
nine red balls: correct <br>
red nine balls: incorrect`
          },
          `Given below is the order of adjectives:
1. number
2. opinion
3. appearance (size, shape)
4. age
5. condition
6. color
7. pattern (checkered, stripped)
8. proper adjective (Nationality, place of origin, or material)
9. function or purpose
10. Noun`,
          {
            type: 'html',
            text: `<b>A strange, little, yellow</b> leaf. Here the arrangement of the adjectives is as
follows: <b>a</b> is an article, <b>strange</b> is an opinion or quality, <b>little</b> is the
size, <b>yellow</b> is the color.`
          }
        ]
      }
    },
    {
      label: 'Select the Right Option',
      id: 'mcq',
      type: 'mcq',
      commonData: {
        title: 'Choose the appropriate options to complete the sentence.'
      },
      data: [
        {
          questions: [
            {
              qText: 'I bought a pair of _____ sandals.',
              options: 'red leather, leather red'
            },
            {
              qText: 'It was a ____ bike.',
              options: 'fast blue, blue fast'
            },
            {
              qText: `It's a _______ hut.`,
              options: 'small round, round small'
            },
            {
              qText: `It's a _____ song.`,
              options: 'beautiful old, old beautiful'
            },
            {
              qText: `It's a ___ village.`,
              options: 'lovely green, green lovely'
            }
          ]
        },
        {
          questions: [
            {
              qText: `It's a _______ watch.`,
              options: 'cute Swiss, Swiss cute'
            },
            {
              qText: 'There are two _____ lamps.',
              options: 'big glass, glass big'
            },
            {
              qText: 'It is a ______ bug.',
              options: 'tiny black, black tiny'
            },
            {
              qText: 'That is a ____ beach.',
              options: 'wonderful Goan, Goan wonderful'
            },
            {
              qText: 'This is an _______ job.',
              options: 'exciting new, new exciting'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'This is a _____ island.',
              options: 'beautiful small, small beautiful'
            },
            {
              qText: 'I saw a ____ whale in the ocean.',
              options: 'big black, black big'
            },
            {
              qText: 'I have a ______ shirt.',
              options: 'pink cotton, cotton pink'
            },
            {
              qText: 'He is a _________ man.',
              options: 'silly old, old silly'
            },
            {
              qText: 'I ate a ________ pizza today.',
              options: 'delicious Italian, Italian delicious'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'This is an ________story.',
              options: 'amazing short, short amazing'
            },
            {
              qText: 'This is a ______ bag.',
              options: 'cotton sleeping, sleeping cotton'
            },
            {
              qText: 'Lata Mangeshkar is a _____ singer.',
              options: 'famous Indian, Indian famous'
            },
            {
              qText: 'I have a ______ dress.',
              options: 'beautiful blue, blue beautiful'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'I bought ______ tomatoes.',
              options: 'big red, red big'
            },
            {
              qText: 'I have a _____ dog.',
              options: 'small white, white small'
            },
            {
              qText: 'Those are ________ flowers.',
              options: 'beautiful yellow, yellow beautiful'
            },
            {
              qText: 'My aunt has a  _______ table.',
              options: 'round brown, brown round'
            },
            {
              qText: 'He is a ____ man.',
              options: 'kind old, old kind'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'She gave her a _____ scarf.',
              options: 'tiny soft, soft tiny'
            },
            {
              qText: 'She wore a _____ hat.',
              options: 'silly pink, pink silly'
            },
            {
              qText: 'I have _______ pencils.',
              options: 'five big, big five'
            },
            {
              qText: 'The _______ kitten was lost.',
              options: 'little pink, pink little'
            },
            {
              qText: 'I have ______ rose plants in my garden.',
              options: 'five beautiful, beautiful five'
            }
          ]
        }
      ]
    },
    {
      label: 'True or False',
      id: '500',
      type: 'classifySentence',
      commonData: {
        title:
          'True or False: The order of adjective is correct in the below sentence.',
        types: ['True', 'False']
      },
      data: [
        [
          `Two tiny, brown squirrels ate all the peanuts.
Ram and Mahesh went to the market to buy ten large, fresh, red apples.
Mani left his small, white, striped shirt at home.`,

          `The principal said that we could go on a tropical, long vacation.
Does the Indian, young actor win a lot of awards?
The white, comfortable sofa was very expensive.`
        ],
        [
          `That big, black car goes really fast.
A round, black ball
Five, little children`,

          `little, five children.
Full, three boxes.
two red, square tables`
        ]
      ]
    },
    {
      type: 'selectWord',
      label: 'Identify Adjectives',
      id: '1100',
      commonData: {
        title:
          'Identify the adjectives given in the passage. There can be zero or more. Select all and Submit.',
        multiSelect: true
      },
      data: [
        `Once upon a time... there lived a woman who had no children. 
She dreamed of having a *little* girl. 
But time went by and her dream never came true. 
So, she visited an *ugly* witch who gave her a *magic* grain of barley.
She planted the grain in a *big* flower pot. 
The next morning, the *magic* grain turned into a *lovely* tulip.`,

        `The women kissed the *soft* petals and the flower opened. 
Inside the flower sat a *tiny* girl, no bigger than a thumb.
She was named Thumbelina. She had a walnut shell for the bed, *violet* petals for the mattress. 
One night, as Thumbelina was fast asleep, a *large* frog hopped in through the window.
She said to herself, how *pretty* Thumbelina is!
Later, she picked up Thumbelina and hopped back into the wetlands.`
      ]
    },
    {
      label: 'Appropriate Adjective',
      type: 'matchByDragDrop',
      id: 'right-word',
      commonData: {
        title: 'Put the adjectives given in the bottom at the right place.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `An ostrich lays the *biggest* eggs!
The clown in the circus wore *colorful* clothes.
I have an *orange* Persian cat.
Our neighbors have a *beautiful* garden.
Puja's school is on a *wide* road.`,

        `Did you know that giraffes have *blue* tongues?
The boy was wearing a sweater of *soft* wool.
My mother's *favorite* ice cream is vanilla.
The blue whale is the *largest* mammal.
The lime juice is very *sour*.`,

        `This road is very *wide*.
These books are very *old*.
Where are you going, my *pretty* maid?
The *brave* soldier died fighting for his country.
The *thirsty* crow could not reach the water in the pot.`,

        `This *short* path will lead right into the forest.
Her cupboard has *many* shelves.
The farmer's geese walked in a *straight* line!
The children are sitting on the *green* grass.
Please wear a *clean* shirt before you go out.`
      ]
    },
    {
      label: 'Appropriate Adjective - 2',
      type: 'matchByDragDrop',
      id: 'right-word-2',
      commonData: {
        isPractice: false,
        title: 'Fill in the blanks by moving the words given at the bottom.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        }
      },
      data: [
        `The mangoes are *sweet*.
The lion has *sharp* claws.
The car is moving *fast*.
Can you give me *some* water?
The dress is very *colorful*.`,

        `The *tall* man bought apples.
We have a *tough* exam tomorrow.
The *red* ball rolled down the stairs.
These are *blunt* scissors.
This is a *sweet* mango.`
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

        `We learned an *Italian* recipe in the cooking class today.
Aditya has *four* books on his shelf which he borrowed from the library.
Bhavya wore a *traditional* dress for Diwali celebrations in the society.
Mahesh was very *gentle* while cleaning his laptop.
Mihira is a *naughty* girl in her class.`
      ]
    }
  ]
};
