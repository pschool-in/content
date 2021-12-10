export default {
  label: 'Reading Lessons',
  id: 'reading-animals',
  lockAfter: 3,
  list: [
    {
      id: 'dogs',
      type: 'passage',
      label: 'Dogs',
      data: {
        title: 'Dogs',
        text: [
          { type: 'img', src: 'dog.jpg' },
          `Do you know that dogs are known as man’s best friends? This is because a dog is fun and friendly. Dogs are domestic animals. They live for 10-13 years. Dogs love eating bones and they love to play. We can always play ‘fetch’ games with dogs. They move their tails rapidly whenever they want to play. The baby dogs are called puppies.`
        ]
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Do you know *that (this)* dogs are known as man’s *best (worst)* friends? 
This is *because (became)* a dog is fun and friendly. 
Dogs are *domestic (wild)* animals. 
They *live (life)* for 13-14 years. 
Dogs love eating bones *and (hand)* they love to play. 
We can *always (alway)* play ‘fetch’ games with dogs. 
They move *their (there)* tails rapidly whenever they want to play. 
The baby dogs *are (is)* called puppies.`,
        title: 'Tap on the blanks for options.'
      }
    },
    {
      id: 'Jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        title: 'These words are linked with dog. Identify.',
        text: 'Dog, Bone, Puppy, Play, Tail, Friend'
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'Dogs have _______teeth.',
            options: 'pointed, conical, yellow'
          },
          {
            qText: 'A dog is a man _______friend.',
            options: 'best, worst, honest'
          },
          {
            qText: 'Dogs love to play_______game.',
            options: 'fetch, dug, dumb'
          },
          {
            qText: 'Dog babies are called_________.',
            options: 'puppies, pomerarians, parrots'
          },
          {
            qText: 'Dogs are_______.',
            options: 'fun, boring, annoying'
          }
        ]
      }
    },
    {
        "id": "wordSearch-dogs",
        "label": "WordSearch - Dogs",
        "type": "wordsearch",
        "data": {
          "words": [
            {
              "word": ["B", "O", "N", "E", "S"],
              "marker": [4, 5, 8, 5]
            },
            {
              "word": ["D", "O", "G", "S"],
              "marker": [5, 4, 5, 7]
            },
            {
              "word": ["P", "U", "P", "P", "I", "E", "S"],
              "marker": [7, 0, 7, 6]
            },
            {
              "word": ["D", "O", "G", "H", "O", "U", "S", "E"],
              "marker": [1, 1, 8, 8]
            },
            {
              "word": ["D", "O", "G", "F", "O", "O", "D"],
              "marker": [2, 1, 2, 7]
            },
            {
              "word": ["B", "E", "S", "T", "F", "R", "I", "E", "N", "D"],
              "marker": [9, 0, 9, 9]
            },
            {
              "word": ["F", "U", "N"],
              "marker": [6, 1, 8, 1]
            },
            {
              "word": ["F", "U", "R"],
              "marker": [2, 4, 4, 6]
            },
            {
              "word": ["F", "E", "T", "C", "H"],
              "marker": [0, 0, 4, 0]
            },
            {
              "word": ["F", "R", "I", "E", "N", "D", "L", "Y"],
              "marker": [0, 0, 0, 7]
            }
          ],
          "title": "Find the given words from the table.",
          "lang": "en",
          "table": [
            ["F", "E", "T", "C", "H", "C", "N", "P", "Z", "B"],
            ["R", "D", "D", "L", "W", "G", "F", "U", "N", "E"],
            ["I", "U", "O", "O", "P", "Y", "X", "P", "W", "S"],
            ["E", "A", "G", "G", "W", "Q", "I", "P", "H", "T"],
            ["N", "H", "F", "T", "H", "D", "N", "I", "K", "F"],
            ["D", "X", "O", "U", "B", "O", "N", "E", "S", "R"],
            ["L", "R", "O", "K", "R", "G", "U", "S", "N", "I"],
            ["Y", "T", "D", "N", "R", "S", "V", "S", "E", "E"],
            ["R", "W", "N", "W", "L", "W", "T", "H", "E", "N"],
            ["Y", "A", "R", "J", "L", "B", "I", "T", "H", "D"]
          ],
          "showWords": true
        },
        "editable": true
      },
    {
      id: 'cats',
      type: 'passage',
      label: 'Cats',
      data: {
        title: 'Cats',
        text: [
          { type: 'img', src: 'cat.jpg' },
          `Cats are lazy. They also have whiskers around their nose. They spend 70% of their lives sleeping. But they also spend a lot of time cleaning themselves and remain tidy. Cats love eating fish and milk. So if cats sneak into your house often, keep your milk and fish safe. Cats belong to the same family as tigers.`
        ]
      }
    },
    {
      id: 'cats-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Cats *are (hour)* lazy. 
They also *have (has)* whiskers *around (round)* their nose. 
They *spend (spent)* 70% of their *lives (lifes)* sleeping. 
But they also spend a lot of time cleaning *themselves (himself)* and remain tidy. 
Cats *love (loves)* eating fish *and (hand)* milk. 
So if cats sneak *into (onto)* your house often, keep *your (their)* milk and fish safe. 
Cats belong to the same family *as (has)*tigers.`,
        title: 'Tap on the blanks for options.'
      }
    },
    {
      id: 'cats-jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        title: 'These words are linked with cat. Identify.',
        text: 'Tail, Kitten, Milk, Fish, Cat, Lazy'
      }
    },
    {
      id: 'cats-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'Cats have_______around their nose.',
            options: 'whiskers, hair, pores'
          },
          {
            qText: 'Cats love______.',
            options: 'milk, hay, food'
          },
          {
            qText: 'Cats love to______.',
            options: 'sleep, eat, repeat'
          },
          {
            qText: 'Cat babies are called_________.',
            options: 'kittens, mittens, littens'
          },
          {
            qText: 'Cat family includes_______.',
            options: 'tigers, wolves, dogs'
          }
        ]
      }
    },
     {
        "id": "wordSearch-cats",
        "label": "WordSearch - Cats",
        "type": "wordsearch",
        "data": {
          "words": [
            {
              "word": ["W", "H", "I", "S", "K", "E", "R", "S"],
              "marker": [0, 0, 7, 7]
            },
            {
              "word": ["K", "I", "T", "T", "E", "N", "S"],
              "marker": [1, 2, 7, 2]
            },
            {
              "word": ["C", "A", "T", "S"],
              "marker": [4, 7, 7, 7]
            },
            {
              "word": ["F", "U", "R"],
              "marker": [8, 4, 6, 6]
            },
            {
              "word": ["M", "I", "L", "K"],
              "marker": [2, 1, 2, 4]
            },
            {
              "word": ["S", "L", "E", "E", "P"],
              "marker": [2, 5, 6, 5]
            },
            {
              "word": ["S", "O", "F", "T", "N", "E", "S", "S"],
              "marker": [0, 9, 7, 9]
            },
            {
              "word": ["P", "A", "W", "S"],
              "marker": [0, 6, 0, 9]
            }
          ],
          "title": "Find the given words from the table.",
          "lang": "en",
          "table": [
            ["W", "K", "P", "C", "H", "Q", "T", "H", "K"],
            ["M", "H", "M", "A", "I", "K", "C", "Y", "O"],
            ["R", "K", "I", "T", "T", "E", "N", "S", "R"],
            ["R", "L", "L", "S", "U", "H", "B", "I", "Q"],
            ["N", "M", "K", "M", "K", "R", "W", "C", "F"],
            ["H", "C", "S", "L", "E", "E", "P", "U", "X"],
            ["P", "P", "E", "U", "I", "L", "R", "W", "A"],
            ["A", "E", "X", "N", "C", "A", "T", "S", "I"],
            ["W", "G", "Y", "M", "C", "F", "P", "Z", "K"],
            ["S", "O", "F", "T", "N", "E", "S", "S", "Y"]
          ],
          "showWords": true
        },
        "editable": true
      },
    {
      id: 'polar-bears',
      type: 'passage',
      label: 'Polar Bears',
      data: {
        title: 'Polar Bears',
        text: `Polar bears live in very cold areas, covered in snow. They look the same as normal bears, only they are white and bigger. They have a thick layer of fat on their body. It protects them from the cold. Polar bears can weigh equal to 10 humans. They’re very strong and powerful. An amazing thing about polar bears is that they look white in colour. But in reality, their skin is black. It is covered with a lot of white fur.`
      }
    },
    {
      id: 'polar-bears-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Polar *bears (bares)* live in very cold areas, *covered (hovered)* in snow. 
They look *the (a)* same as normal bears, only they are white *and (hand)* bigger. 
They have a *thick (rhuck)* layer of fat on *their (there)* body. 
It protects them from the *cold (hold)*. 
Polar bears *can (could)* weigh equal to 10 humans. 
They’re *very (vary)* strong and powerful. 
An amazing thing *about (of)* polar bears is that they look white *in (inn)* colour. 
But *in (under)* reality, *their (there)* skin is black. 
It is covered with a lot of white fur.`,
        title: 'Tap on the blanks for options.'
      }
    },
    {
      id: 'polar-bears-jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        title: 'These words are linked with polar bears. Identify.',
        text: 'Cold, Snow, Polar, Bears, White, Fur'
      }
    },
    {
      id: 'polar-bears-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'Polar bears live in_______regions.',
            options: 'cold, warm, dense'
          },
          {
            qText: 'Polar bears are similar to_______bears.',
            options: 'brown, dark, blue'
          },
          {
            qText: 'Polar bears have______fur.',
            options: 'white, black, brown'
          },
          {
            qText: 'Polar bears have_______skin.',
            options: 'black, white, blue'
          },
          {
            qText: 'Polar bears are found in_______.',
            options: 'Antarctica, Arctic, Asia'
          }
        ]
      }
    },
     {
        "id": "wordSearch-polar-bears",
        "label": "WordSearch - Polar Bears",
        "type": "wordsearch",
        "data": {
          "words": [
            {
              "word": ["P", "O", "L", "A", "R", "B", "E", "A", "R"],
              "marker": [9, 0, 1, 8]
            },
            {
              "word": ["R", "U", "S", "S", "I", "A"],
              "marker": [5, 4, 5, 9]
            },
            {
              "word": ["C", "A", "R", "N", "I", "V", "O", "R", "E"],
              "marker": [1, 1, 1, 9]
            },
            {
              "word": ["S", "N", "O", "W"],
              "marker": [6, 1, 9, 1]
            },
            {
              "word": ["W", "H", "I", "T", "E"],
              "marker": [9, 1, 9, 5]
            },
            {
              "word": ["B", "I", "G"],
              "marker": [0, 5, 2, 5]
            },
            {
              "word": ["F", "I", "S", "H"],
              "marker": [4, 8, 7, 8]
            },
            {
              "word": ["F", "U", "R"],
              "marker": [3, 2, 5, 2]
            },
            {
              "word": ["H", "E", "A", "V", "Y"],
              "marker": [1, 0, 5, 0]
            }
          ],
          "title": "Find the given words from the table.",
          "lang": "en",
          "table": [
            ["Y", "H", "E", "A", "V", "Y", "F", "G", "W", "P"],
            ["J", "C", "B", "W", "M", "A", "S", "N", "O", "W"],
            ["P", "A", "G", "F", "U", "R", "Y", "L", "X", "H"],
            ["B", "R", "Q", "R", "Q", "N", "A", "W", "X", "I"],
            ["N", "N", "R", "E", "O", "R", "Y", "Z", "N", "T"],
            ["B", "I", "G", "L", "B", "U", "Z", "A", "L", "E"],
            ["Y", "V", "D", "E", "U", "S", "M", "X", "L", "O"],
            ["B", "O", "A", "T", "M", "S", "A", "D", "P", "U"],
            ["A", "R", "W", "O", "F", "I", "S", "H", "F", "S"],
            ["W", "E", "N", "P", "K", "A", "K", "X", "T", "H"]
          ],
          "showWords": true
        },
        "editable": true
      },
    {
      id: 'horses',
      type: 'passage',
      label: 'Horses',
      data: {
        title: 'Horses',
        text: [
          { type: 'img', src: 'horse.jpg' },
          `Horses can almost see in all directions without turning their necks. They run very fast. Horse racing is a very popular sport. Horseshoes are attached under their feet. It helps them run faster. Horses eat grass, hay, grains and solid food. They're also domesticated in farms. They are useful for different farming activities.`
        ]
      }
    },
    {
      id: 'horses-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Horses can *almost (utmost)* see in all directions without turning their necks. 
They run *very (vary)* fast. 
Horse racing is *a (an)* very popular sport. 
Horseshoes are attached *under (thunder)* their feet. 
It helps them *run (running)* faster. 
Horses *eat (heat)* grass, hay, grains and solid food. 
They're also domesticated in *farms (harms)*. 
They are useful for different *farming (harming)* activities.`,
        title: 'Tap on the blanks for options.'
      }
    },
    {
      id: 'horses-jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        title: 'These words are linked with horses. Identify.',
        text: 'Horse, Hay, Shoe, Run, Racing, Food'
      }
    },
    {
      id: 'horses-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'Horses are domesticated in_________.',
            options: 'farms, houses, barns'
          },
          {
            qText: 'Horses usually eat________.',
            options: 'hay, bay, say'
          },
          {
            qText: 'Horses are good at_________.',
            options: 'running, sitting, climbing'
          },
          {
            qText: '_________are attached under Horses feet.',
            options: 'Horseshoes, Shoes, Sandles'
          },
          {
            qText: 'Horses can_______in all directions.',
            options: 'see, run, swing'
          }
        ]
      }
    },
     {
        "id": "wordSearch-horses",
        "label": "WordSearch - Horses",
        "type": "wordsearch",
        "data": {
          "words": [
            {
              "word": ["H", "O", "R", "S", "E", "S"],
              "marker": [9, 0, 9, 5]
            },
            {
              "word": ["H", "A", "Y"],
              "marker": [9, 0, 7, 2]
            },
            {
              "word": ["H", "O", "R", "S", "E", "S", "H", "O", "E"],
              "marker": [0, 9, 8, 9]
            },
            {
              "word": ["K", "N", "I", "G", "H", "T"],
              "marker": [1, 3, 6, 3]
            },
            {
              "word": ["N", "E", "I", "G", "H"],
              "marker": [2, 3, 6, 7]
            },
            {
              "word": ["R", "A", "C", "I", "N", "G"],
              "marker": [0, 6, 5, 6]
            },
            {
              "word": ["R", "U", "N", "N", "I", "N", "G"],
              "marker": [0, 6, 0, 0]
            },
            {
              "word": ["F", "A", "R", "M", "H", "O", "U", "S", "E"],
              "marker": [8, 0, 8, 8]
            }
          ],
          "title": "Find the given words from the table.",
          "lang": "en",
          "table": [
            ["G", "A", "X", "B", "Y", "Q", "G", "Q", "F", "H"],
            ["N", "P", "R", "P", "R", "K", "N", "X", "A", "O"],
            ["I", "M", "D", "G", "H", "Z", "J", "Y", "R", "R"],
            ["N", "K", "N", "I", "G", "H", "T", "F", "M", "S"],
            ["N", "C", "W", "E", "E", "D", "I", "C", "H", "E"],
            ["U", "U", "G", "X", "I", "E", "P", "E", "O", "S"],
            ["R", "A", "C", "I", "N", "G", "F", "G", "U", "Y"],
            ["X", "M", "P", "Z", "W", "A", "H", "Y", "S", "U"],
            ["W", "Q", "I", "T", "Z", "B", "I", "G", "E", "M"],
            ["H", "O", "R", "S", "E", "S", "H", "O", "E", "F"]
          ],
          "showWords": true
        },
        "editable": true
      },
    {
      id: 'tigers',
      type: 'passage',
      label: 'Tigers',
      data: {
        title: 'Tigers',
        text: [
          { type: 'img', src: 'tiger.jpg' },
          `Tigers are the largest animals in the cat family. They have vertical strips over their body. They’re usually orange, black and white in colour. But some tigers are just white and black. Tigers’ eyesights are 6 times better than humans. An amazing fact about the tigers is that they can survive without food for 2 weeks.`
        ]
      }
    },
    {
      id: 'tigers-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Tigers are the largest animals in the *cat (hat)* family.
They have vertical strips *over (hover)* their body.
They’re usually orange, black *and (or)* white in colour.
But *some (hum)* tigers are just white and black.
Tiger’s eyesights *are (hare)* 6 times better than humans.
An amazing fact about the tigers is that they can survive without food for 2 weeks.`,
        title: 'Tap on the blanks for options.'
      }
    },
    {
      id: 'tigers-jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        title: 'These words are linked with tigers. Identify.',
        text: 'Tiger, Cubs, Bengal, Flesh, Cats'
      }
    },
    {
      id: 'tigers-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'Tigers are_________.',
            options: 'predators, preys, pals'
          },
          {
            qText: 'Tigers are________.',
            options: 'carnivores, omnivores, herbivores'
          },
          {
            qText: 'Tigers________their prey.',
            options: 'hunt, run, dump'
          },
          {
            qText: 'Tigers babies are called_______.',
            options: 'cubs, lambs, kittens'
          },
          {
            qText: 'Tigers are also found in_______.',
            options: 'Tigers are also found in_______.'
          }
        ]
      }
    },
    {
        "id": "wordSearch-tigers",
        "label": "WordSearch - Tigers",
        "type": "wordsearch",
        "data": {
          "words": [
            {
              "word": ["C", "A", "R", "N", "I", "V", "O", "R", "E", "S"],
              "marker": [0, 0, 9, 9]
            },
            {
              "word": ["T", "I", "G", "E", "R", "S"],
              "marker": [3, 4, 8, 4]
            },
            {
              "word": ["D", "E", "N"],
              "marker": [7, 8, 9, 8]
            },
            {
              "word": ["C", "U", "B", "S"],
              "marker": [8, 1, 8, 4]
            },
            {
              "word": ["P", "R", "E", "D", "A", "T", "O", "R", "S"],
              "marker": [0, 1, 0, 9]
            },
            {
              "word": ["B", "E", "N", "G", "A", "L"],
              "marker": [9, 0, 9, 5]
            },
            {
              "word": ["W", "H", "I", "T", "E"],
              "marker": [4, 2, 4, 6]
            },
            {
              "word": ["F", "O", "R", "E", "S", "T"],
              "marker": [2, 9, 7, 9]
            },
            {
              "word": ["S", "T", "R", "I", "P", "E", "S"],
              "marker": [2, 0, 8, 0]
            },
            {
              "word": ["P", "R", "E", "Y"],
              "marker": [2, 1, 2, 4]
            }
          ],
          "title": "Find the given words from the table.",
          "lang": "en",
          "table": [
            ["C", "P", "S", "T", "R", "I", "P", "E", "S", "B"],
            ["P", "A", "P", "N", "Y", "W", "R", "S", "C", "E"],
            ["R", "H", "R", "B", "W", "V", "N", "R", "U", "N"],
            ["E", "V", "E", "N", "H", "J", "P", "U", "B", "G"],
            ["D", "A", "Y", "T", "I", "G", "E", "R", "S", "A"],
            ["A", "W", "H", "K", "T", "V", "M", "B", "K", "L"],
            ["T", "Q", "K", "F", "E", "N", "O", "D", "M", "V"],
            ["O", "P", "Y", "H", "P", "J", "M", "R", "E", "M"],
            ["R", "R", "Z", "A", "M", "Q", "N", "D", "E", "N"],
            ["S", "H", "F", "O", "R", "E", "S", "T", "U", "S"]
          ],
          "showWords": true
        },
        "editable": true
      },
    {
      id: 'rabbits',
      type: 'passage',
      label: 'Rabbits',
      data: {
        title: 'Rabbits',
        text: [
          { type: 'img', src: 'rabbit.jpg' },
          `Rabbits love eating carrots and hay. They chew 120 times in a minute. It helps them to digest food easily.  Do you know how many times humans should chew their food?`,
          `Rabbits have a few things in common with other animals. Just like horses, they can see in almost all directions without turning their heads. Just like cats, they like to keep themselves tidy.`
        ]
      }
    },
    {
      id: 'rabbits-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Rabbits love eating carrots and *hay (bay)*. 
They *chew (sew)* 120 times in a minute. 
It helps them to digest food easily.
*Do (Did)* you know how many times humans should chew their food?
Rabbits have a few things in common with *other (another)* animals. 
Just like horses, they can see in *almost (allmost)* all directions without *turning (tuning)* their heads. 
Just like cats, they like to *keep (heep)* themselves tidy. 
One weird thing about rabbits is that they sometimes eat their own poop.`,
        title: 'Tap on the blanks for options.'
      }
    },
    {
      id: 'rabbits-jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        title: 'These words are linked with rabbits. Identify.',
        text: 'Hay, Burrow, Carrot, Ears, Teeth, Bunny'
      }
    },
    {
      id: 'rabbits-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'Rabbits live in_________.',
            options: 'burrows, dens, holes'
          },
          {
            qText: 'Rabbits are also called________.',
            options: 'bunny, sunny, lamb'
          },
          {
            qText: 'Rabbits also eat their________.',
            options: 'poop, ears, tail'
          },
          {
            qText: 'Rabbits love________.',
            options: 'carrots, radish, corriander'
          },
          {
            qText: 'Rabbits usually eat______.',
            options: 'hay, may, clay'
          }
        ]
      }
    },
     {
        "id": "wordSearch-rabbits",
        "label": "WordSearch - Rabbits",
        "type": "wordsearch",
        "data": {
          "words": [
            {
              "word": ["R", "U", "N", "N", "I", "N", "G"],
              "marker": [0, 0, 0, 6]
            },
            {
              "word": ["R", "A", "B", "B", "I", "T"],
              "marker": [0, 0, 5, 5]
            },
            {
              "word": ["B", "U", "R", "R", "O", "W"],
              "marker": [3, 3, 8, 3]
            },
            {
              "word": ["B", "U", "N", "N", "Y"],
              "marker": [3, 3, 3, 7]
            },
            {
              "word": ["H", "A", "Y"],
              "marker": [1, 7, 3, 7]
            },
            {
              "word": ["F", "A", "R", "M"],
              "marker": [2, 6, 2, 9]
            },
            {
              "word": ["W", "H", "I", "T", "E"],
              "marker": [8, 3, 8, 7]
            },
            {
              "word": ["C", "A", "R", "R", "O", "T"],
              "marker": [6, 0, 6, 5]
            },
            {
              "word": ["H", "O", "P", "P", "I", "N", "G"],
              "marker": [7, 2, 7, 8]
            },
            {
              "word": ["E", "A", "R", "S"],
              "marker": [0, 8, 3, 8]
            }
          ],
          "title": "Find the given words from the table.",
          "lang": "en",
          "table": [
            ["R", "C", "U", "P", "Y", "X", "C", "T", "P"],
            ["U", "A", "F", "J", "R", "D", "A", "L", "P"],
            ["N", "V", "B", "H", "K", "J", "R", "H", "D"],
            ["N", "J", "K", "B", "U", "R", "R", "O", "W"],
            ["I", "P", "D", "U", "I", "H", "O", "P", "H"],
            ["N", "X", "F", "N", "U", "T", "T", "P", "I"],
            ["G", "K", "F", "N", "Q", "Y", "R", "I", "T"],
            ["Z", "H", "A", "Y", "A", "W", "J", "N", "E"],
            ["E", "A", "R", "S", "G", "N", "U", "G", "V"],
            ["T", "R", "M", "Q", "B", "N", "L", "N", "X"]
          ],
          "showWords": true
        },
        "editable": true
      },
    {
      id: 'dolphins',
      type: 'passage',
      label: 'Dolphins',
      data: {
        title: 'Dolphins',
        text: [
          { type: 'img', src: 'dolphin.jpg' },
          `Dolphins are very playful and intelligent. Just like whales, they breathe air from a blowhole on their back. They swim very fast. They jump out of the water to breathe and it looks like they’re hopping on the water. Dolphins are very attentive even while they’re asleep. Some dolphins have two stomachs. This helps them to store food.`
        ]
      }
    },
    {
      id: 'dolphins-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Dolphins are *very (berry)* playful *and (hand)* intelligent. 
Just like whales, they *breathe (breath)* air from a blowhole on their back. 
They swim very *fast (fist)*. 
They jump out of the water to breathe and it looks like they’re *hopping (happing)* on the water. 
Dolphins are very *attentive (attractive)* even while they’re asleep. 
Some dolphins have two stomachs. 
This helps them to *store (shore)* food.`,
        title: 'Tap on the blanks for options.'
      }
    },
    {
      id: 'dolphins-jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        title: 'These words are linked with dolphins. Identify.',
        text: 'Hopping, Play, Smart, Swim, Hole, Blow'
      }
    },
    {
      id: 'dolphins-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'Dolphins have________stomach(s).',
            options: 'two, one, zero'
          },
          {
            qText: 'Dolphins_______on the water.',
            options: 'hop, swin, dance'
          },
          {
            qText: 'Dolphins are very_______.',
            options: 'intelligent, dumb, pretty'
          },
          {
            qText: 'Dolphins are attentive while__________.',
            options: 'sleping, eating, swimming'
          },
          {
            qText: 'Dolphins babies are called________.',
            options: 'calves, halves, baby dolphins'
          }
        ]
      }
    },
     {
        "id": "wordSearch-dolphins",
        "label": "WordSearch - Dolphins",
        "type": "wordsearch",
        "data": {
          "words": [
            {
              "word": ["D", "O", "L", "P", "H", "I", "N"],
              "marker": [2, 0, 2, 6]
            },
            {
              "word": ["C", "A", "L", "F"],
              "marker": [0, 0, 3, 3]
            },
            {
              "word": ["H", "O", "P", "P", "I", "N", "G"],
              "marker": [1, 0, 7, 6]
            },
            {
              "word": ["P", "L", "A", "Y", "I", "N", "G"],
              "marker": [4, 3, 4, 9]
            },
            {
              "word": ["S", "W", "I", "M", "M", "I", "N", "G"],
              "marker": [9, 0, 9, 7]
            },
            {
              "word": ["R", "A", "C", "I", "N", "G"],
              "marker": [0, 8, 5, 8]
            },
            {
              "word": ["A", "T", "T", "E", "N", "T", "I", "V", "E"],
              "marker": [6, 1, 6, 9]
            },
            {
              "word": ["B", "L", "U", "E"],
              "marker": [3, 1, 0, 4]
            },
            {
              "word": ["F", "R", "I", "E", "N", "D", "L", "Y"],
              "marker": [8, 1, 8, 8]
            }
          ],
          "title": "Find the given words from the table.",
          "lang": "en",
          "table": [
            ["C", "H", "D", "U", "A", "L", "L", "U", "P", "S"],
            ["M", "A", "O", "B", "U", "A", "A", "K", "F", "W"],
            ["T", "Z", "L", "P", "H", "C", "T", "O", "R", "I"],
            ["K", "U", "P", "F", "P", "E", "T", "D", "I", "M"],
            ["E", "E", "H", "O", "L", "I", "E", "F", "E", "M"],
            ["C", "X", "I", "B", "A", "A", "N", "T", "N", "I"],
            ["I", "Y", "N", "O", "Y", "O", "T", "G", "D", "N"],
            ["P", "L", "H", "C", "I", "U", "I", "T", "L", "G"],
            ["R", "A", "C", "I", "N", "G", "V", "O", "Y", "Q"],
            ["P", "U", "T", "Y", "G", "I", "E", "J", "B", "M"]
          ],
          "showWords": true
        },
        "editable": true
      },
    {
      id: 'monkeys',
      type: 'passage',
      label: 'Monkeys',
      data: {
        title: 'Monkeys',
        text: [
          { type: 'img', src: 'monkey.jpg' },
          `Monkeys can be easily seen in India. We usually find them on top of buildings and on trees. Their favourite food is bananas. They eat it just like humans, by removing the peels in the same manner. Do you know that monkeys’ families are our ancestors? Their hands and legs are very similar to humans. A few years ago, there used to be street plays, in which monkeys danced and did tricks.`
        ]
      }
    },
    {
      id: 'monkeys-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Monkeys can be *easily (peasily)* seen in India. 
We usually find them on top *of (on)* buildings and on trees. 
*Their (There)* favourite food is bananas. 
They eat it just like humans, by removing the *peels (heels)* in the same manner. 
Do you know that *monkeys’ (monkey's)* families are our ancestors?
Their hands and legs *are (hair)* very similar to humans. 
A few years ago, there used to be street plays, in which monkeys danced and did tricks.`,
        title: 'Tap on the blanks for options.'
      }
    },
    {
      id: 'monkeys-jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        title: 'These words are linked with monkeys. Identify. ',
        text: 'Monkey, Banana, Trees, Infant, Climb, Street'
      }
    },
    {
      id: 'monkeys-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'Monkeys babies are called________.',
            options: 'infants, cubs, bugs'
          },
          {
            qText: 'Monkey are our_________.',
            options: 'ancestors, enemies, slaves'
          },
          {
            qText: 'Monkeys love eating________.',
            options: 'bananas, chocolates, apples'
          },
          {
            qText: 'Monkeys_________from one tree to another.',
            options: 'climb, hop, walk'
          },
          {
            qText: 'Monkeys did________in the past.',
            options: 'street tricks, talking, theatre'
          }
        ]
      }
    },
    {
        "id": "wordSearch-monkeys",
        "editable": true,
        "type": "wordsearch",
        "label": "WordSearch - Monkeys",
        "data": {
          "title": "Find the given words from the table.",
          "words": [
            {
              "word": ["T", "R", "I", "C", "K", "S", "T", "E", "R", "S"],
              "marker": [0, 0, 0, 9]
            },
            {
              "word": ["C", "L", "I", "M", "B", "E", "R"],
              "marker": [0, 3, 6, 9]
            },
            {
              "word": ["T", "R", "E", "E", "S"],
              "marker": [5, 9, 9, 9]
            },
            {
              "word": ["I", "N", "F", "A", "N", "T", "S"],
              "marker": [9, 3, 9, 9]
            },
            {
              "word": ["M", "O", "N", "K", "E", "Y"],
              "marker": [3, 6, 8, 6]
            },
            {
              "word": ["A", "N", "C", "E", "S", "T", "O", "R"],
              "marker": [1, 0, 8, 0]
            },
            {
              "word": ["B", "A", "N", "A", "N", "A"],
              "marker": [4, 1, 9, 6]
            },
            {
              "word": ["H", "U", "M", "A", "N", "S"],
              "marker": [3, 4, 3, 9]
            },
            {
              "word": ["S", "T", "R", "E", "E", "T"],
              "marker": [4, 3, 9, 8]
            },
            {
              "word": ["T", "A", "I", "L"],
              "marker": [2, 3, 2, 6]
            }
          ],
          "table": [
            ["T", "A", "N", "C", "E", "S", "T", "O", "R", "D"],
            ["R", "M", "S", "S", "B", "E", "Z", "H", "X", "E"],
            ["I", "I", "V", "I", "H", "A", "Y", "E", "O", "R"],
            ["C", "E", "T", "F", "S", "Q", "N", "U", "J", "I"],
            ["K", "L", "A", "H", "O", "T", "I", "A", "C", "N"],
            ["S", "T", "I", "U", "Z", "T", "R", "L", "N", "F"],
            ["T", "Y", "L", "M", "O", "N", "K", "E", "Y", "A"],
            ["E", "T", "V", "A", "B", "J", "W", "I", "E", "N"],
            ["R", "L", "J", "N", "Y", "E", "H", "U", "G", "T"],
            ["S", "P", "B", "S", "S", "T", "R", "E", "E", "S"]
          ],
          "lang": "en",
          "showWords": true
        }
      },
    {
      id: 'bees',
      type: 'passage',
      label: 'Bees',
      data: {
        title: 'Bees',
        text: `Bees live in beehives where they produce honey. The beehive consists of a queen bee and worker bees. They feed on flower nectar. Lifespan of worker bees is usually around one year. But the lifespan of an adult queen bee is around 2 to 5 years. Only the worker bees can sting. It is usually advised not to tease the bees. This is because the worker bees can sting us. Stings cause a lot of pain.`
      }
    },
    {
      id: 'bees-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Bees *live (life)* in beehives where they produce honey. 
The beehive consists of a queen *bee (be)* and worker bees. 
They *feed (fed)* on flower nectar. 
Lifespan of worker *bees (Bs)* is usually *around (round)* one year. 
But the lifespan of an adult queen bee is around 2 to 5 years. 
*Only (lonely)* the worker bees can sting. 
It is usually *advised (adviced)* not to tease the bees. 
This is *because (cause)* the worker bees can sting us. 
Stings cause a lot of pain.`,
        title: 'Tap on the blanks for options.'
      }
    },
    {
      id: 'bees-jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        title: 'These words are linked with bees. Identify.',
        text: 'Bees, Queen, Worker, Honey, Sting, Hive'
      }
    },
    {
      id: 'bees-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'Bees live in_________.',
            options: 'beehives, trees, canals'
          },
          {
            qText: 'A beehive is also called a_________.',
            options: 'honeycomb, beecomb, queens palace'
          },
          {
            qText: 'Only________bees can sting.',
            options: 'worker, queen, king'
          },
          {
            qText: 'Baby bees are called_________.',
            options: 'broods, croods, infants'
          },
          {
            qText: 'Bees feed on_______.',
            options: 'flower nectar, honey, leaves'
          }
        ]
      }
    },
     {
        "id": "wordSearch-bees",
        "editable": true,
        "type": "wordsearch",
        "label": "WordSearch - Bees",
        "data": {
          "title": "Find the given words from the table.",
          "words": [
            {
              "word": ["B", "E", "E", "S"],
              "marker": [1, 1, 4, 4]
            },
            {
              "word": ["B", "R", "O", "O", "D", "S"],
              "marker": [1, 1, 6, 1]
            },
            {
              "word": ["H", "O", "N", "E", "Y", "C", "O", "M", "B"],
              "marker": [0, 3, 8, 3]
            },
            {
              "word": ["B", "E", "E", "H", "I", "V", "E"],
              "marker": [8, 3, 8, 9]
            },
            {
              "word": ["S", "T", "I", "N", "G"],
              "marker": [4, 4, 4, 8]
            },
            {
              "word": ["H", "O", "N", "E", "Y"],
              "marker": [2, 7, 6, 7]
            },
            {
              "word": ["W", "O", "R", "K", "E", "R"],
              "marker": [2, 0, 7, 0]
            },
            {
              "word": ["Q", "U", "E", "E", "N"],
              "marker": [0, 5, 0, 9]
            },
            {
              "word": ["N", "E", "C", "T", "A", "R"],
              "marker": [0, 9, 5, 9]
            }
          ],
          "table": [
            ["K", "V", "W", "O", "R", "K", "E", "R", "Z"],
            ["M", "B", "R", "O", "O", "D", "S", "S", "M"],
            ["K", "I", "E", "C", "A", "C", "L", "E", "F"],
            ["H", "O", "N", "E", "Y", "C", "O", "M", "B"],
            ["P", "X", "P", "L", "S", "T", "F", "Z", "E"],
            ["Q", "L", "C", "S", "T", "N", "P", "I", "E"],
            ["U", "L", "R", "R", "I", "A", "C", "T", "H"],
            ["E", "S", "H", "O", "N", "E", "Y", "Z", "I"],
            ["E", "W", "N", "P", "G", "Y", "A", "O", "V"],
            ["N", "E", "C", "T", "A", "R", "K", "G", "E"]
          ],
          "lang": "en",
          "showWords": true
        }
      },
    {
      id: 'pigs',
      type: 'passage',
      label: 'Pigs',
      data: {
        title: 'Pigs',
        text: [
          { type: 'img', src: 'pig.jpg' },
          `Pigs have small eyes, large ears and a flat snout. Snouts give them an excellent sense of smell. They make an ‘oink’ sound and usually like to stay in mud and dirt. They’re one of the most populous mammals. Do you know that the stiff hair on pigs’ bodies are called bristles? Those bristles were very commonly used to make paintbrushes and shoe brushes.`
        ]
      }
    },
    {
      id: 'pigs-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Pigs *have (shave)* small eyes, large ears and a flat snout. 
Snouts *give (gives)* them an excellent sense of smell. 
They make an ‘*oink (horn)*’ sound and usually like to stay in mud and *dirt (hurt)*. 
*They’re (Their're)* one of the most populous mammals. 
Do you know that the stiff hair on pigs’ bodies are called bristles? 
Those bristles were very commonly *used (abused)* to make paintbrushes and shoe`,
        title: 'Tap on the blanks for options.'
      }
    },
    {
      id: 'pigs-jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        title: 'These words are linked with pigs. Identify.',
        text: 'Pig, Piglet, Mud, Oink, Dirty, Snout'
      }
    },
    {
      id: 'pigs-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'A pigs nose is elongated and is called a_______.',
            options: 'snout, nose, flat, nose'
          },
          {
            qText: 'Pigs body has stiff hair, called________.',
            options: 'bristles, braces, thorns'
          },
          {
            qText: 'A baby pig is called a_________.',
            options: 'piglet, infant, brood'
          },
          {
            qText: 'Pigs like to stay in_______.',
            options: 'mud, ponds, drains'
          },
          {
            qText: 'Pig hair was used to make_________.',
            options: 'paintbrushes, toothbrushes, cloth brushes'
          }
        ]
      }
    },
    {
        "id": "wordSearch-pigs",
        "editable": true,
        "type": "wordsearch",
        "label": "WordSearch - Pigs",
        "data": {
          "title": "Find the given words from the table.",
          "words": [
            {
              "word": ["P", "I", "G", "S"],
              "marker": [3, 1, 6, 1]
            },
            {
              "word": ["P", "I", "G", "L", "E", "T", "S"],
              "marker": [3, 1, 9, 7]
            },
            {
              "word": ["S", "N", "O", "U", "T"],
              "marker": [9, 7, 5, 7]
            },
            {
              "word": ["B", "R", "I", "S", "T", "L", "E", "S"],
              "marker": [2, 2, 9, 2]
            },
            {
              "word": ["S", "T", "I", "F", "F"],
              "marker": [0, 0, 0, 4]
            },
            {
              "word": ["M", "U", "D"],
              "marker": [5, 6, 7, 8]
            },
            {
              "word": ["D", "I", "R", "T"],
              "marker": [0, 5, 3, 8]
            },
            {
              "word": ["P", "I", "N", "K"],
              "marker": [0, 6, 3, 6]
            },
            {
              "word": ["F", "A", "R", "M"],
              "marker": [0, 7, 3, 7]
            },
            {
              "word": ["S", "M", "E", "L", "L"],
              "marker": [4, 7, 8, 3]
            }
          ],
          "table": [
            ["S", "T", "V", "G", "E", "R", "V", "R", "V", "F"],
            ["T", "V", "Y", "P", "I", "G", "S", "H", "O", "E"],
            ["I", "D", "B", "R", "I", "S", "T", "L", "E", "S"],
            ["F", "W", "L", "J", "N", "G", "M", "N", "L", "I"],
            ["F", "C", "I", "M", "H", "J", "L", "L", "A", "E"],
            ["D", "T", "V", "E", "O", "N", "E", "E", "K", "S"],
            ["P", "I", "N", "K", "J", "M", "R", "B", "T", "Q"],
            ["F", "A", "R", "M", "S", "T", "U", "O", "N", "S"],
            ["I", "N", "M", "T", "J", "J", "P", "D", "Z", "F"]
          ],
          "lang": "en",
          "showWords": true
        }
      },
    {
      id: 'lions',
      type: 'passage',
      label: 'Lions',
      data: {
        title: 'Lions',
        text: [
          { type: 'img', src: 'lion.jpg' },
          `Lions are very powerful and strong. They look like a very big cat with hair all around their face. Lions live together in caves. They usually roar at night. The sound of their roar can be heard 8kms away. They eat by hunting their prey. Do you know that lions can eat upto 30kgs in one meal?`
        ]
      }
    },
    {
      id: 'lions-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Lions are very *powerful (powerless)* and *strong (weak)*. 
They look like a very *big (small)* cat with *hair (hare)* all around their face. 
Lions live together in *caves (canes)*. 
They usually *roar (meow)* at night. 
The sound of their *roar (meow)* can be heard 8kms away. 
They eat by hunting their prey. 
Do you know that lions can eat upto 30kgs in one meal?`,
        title: 'Tap on the blanks for options.'
      }
    },
    {
      id: 'lions-jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        title: 'These words are linked with lions. Identify.',
        text: 'Lions, Cubs, Caves, Dens, Roar, Meat'
      }
    },
    {
      id: 'lions-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'Lions are known as the______of the Jungle.',
            options: 'King, Coward, Cat'
          },
          {
            qText: 'Lions live in______.',
            options: 'caves, carnivals, trees'
          },
          {
            qText: 'Caves are also called________.',
            options: 'dens, forests, pathways'
          },
          {
            qText: 'Lions are__________.',
            options: 'predators, preys, herbivores'
          },
          {
            qText: 'A lions baby is called a______.',
            options: 'cub, calf, kitten'
          }
        ]
      }
    },
    {
        "id": "wordSearch-lions",
        "editable": true,
        "type": "wordsearch",
        "label": "WordSearch - Lions",
        "data": {
          "title": "Find the given words from the table.",
          "words": [
            {
              "word": ["L", "I", "O", "N", "E", "S", "S"],
              "marker": [0, 0, 0, 6]
            },
            {
              "word": ["L", "I", "O", "N"],
              "marker": [0, 0, 3, 3]
            },
            {
              "word": ["D", "E", "N"],
              "marker": [5, 1, 3, 3]
            },
            {
              "word": ["P", "R", "E", "D", "A", "T", "O", "R"],
              "marker": [7, 2, 0, 9]
            },
            {
              "word": ["C", "A", "V", "E", "S"],
              "marker": [5, 5, 5, 9]
            },
            {
              "word": ["C", "U", "B"],
              "marker": [5, 5, 7, 5]
            },
            {
              "word": ["F", "O", "R", "E", "S", "T"],
              "marker": [1, 9, 6, 9]
            },
            {
              "word": ["J", "U", "N", "G", "L", "E"],
              "marker": [3, 0, 8, 0]
            },
            {
              "word": ["R", "O", "A", "R", "I", "N", "G"],
              "marker": [8, 2, 8, 8]
            },
            {
              "word": ["K", "I", "N", "G"],
              "marker": [1, 3, 4, 3]
            }
          ],
          "table": [
            ["L", "U", "B", "J", "U", "N", "G", "L", "E"],
            ["I", "I", "S", "D", "Q", "D", "G", "Q", "H"],
            ["O", "S", "O", "O", "E", "Y", "I", "P", "R"],
            ["N", "K", "I", "N", "G", "G", "R", "H", "O"],
            ["E", "J", "I", "B", "W", "E", "J", "S", "A"],
            ["S", "S", "J", "Y", "D", "C", "U", "B", "R"],
            ["S", "I", "A", "A", "Y", "A", "G", "G", "I"],
            ["H", "S", "T", "A", "Z", "V", "N", "O", "N"],
            ["X", "O", "Y", "D", "J", "E", "J", "N", "G"],
            ["R", "F", "O", "R", "E", "S", "T", "J", "B"]
          ],
          "lang": "en",
          "showWords": true
        }
      },
    {
      id: 'sharks',
      type: 'passage',
      label: 'Sharks',
      data: {
        title: 'Sharks',
        text: [
          { type: 'img', src: 'shark.jpg' },
          `Sharks are predators. It means that they hunt other fishes as their food. Sharks have overall 30,000 pointed teeth in their life span. Their skin is the thickest of all the animals. Sharks show their presence by swimming on the upper layer of water. The horn-like fin on their upper body is visible outside the water.`
        ]
      }
    },
    {
      id: 'sharks-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Sharks *are (were)* predators. 
It means that they hunt other *fishes (fish)* as their food. 
Sharks have overall 30,000 pointed teeth in their *life (live)* span. 
Their skin is the thickest of all the *animals (humans)*. 
Sharks show their *presence (absence)* by swimming on the upper layer of water. 
The horn-like *fin (thorn)* on their upper body is visible outside the water.`,
        title: 'Tap on the blanks for options.'
      }
    },
    {
      id: 'sharks-jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        title: 'These words are linked with sharks. Identify.',
        text: 'Shark, Pup, Ocean, Attack, Fish, Fins'
      }
    },
    {
      id: 'sharks-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'Sharks are________.',
            options: 'predators, preys, mammals'
          },
          {
            qText: 'Sharks have_______teeth.',
            options: 'pointed, blunt, human-like'
          },
          {
            qText: 'A baby shark is called a________.',
            options: 'pup, bub, baby'
          },
          {
            qText: 'Sharks move_________their prey before attacking.',
            options: 'around, away, forward'
          },
          {
            qText: 'Sharks are_________.',
            options: 'dangerous, friendly, non-friendly'
          }
        ]
      }
    },
    {
        "id": "wordSearch-sharks",
        "editable": true,
        "type": "wordsearch",
        "label": "WordSearch - Sharks",
        "data": {
          "title": "Find the given words from the table.",
          "words": [
            {
              "word": ["P", "R", "E", "D", "A", "T", "O", "R", "S"],
              "marker": [0, 0, 8, 0]
            },
            {
              "word": ["A", "T", "T", "A", "C", "K", "E", "R", "S"],
              "marker": [4, 0, 4, 8]
            },
            {
              "word": ["S", "H", "A", "R", "K"],
              "marker": [1, 4, 5, 8]
            },
            {
              "word": ["P", "U", "P", "S"],
              "marker": [8, 3, 8, 0]
            },
            {
              "word": ["O", "C", "E", "A", "N"],
              "marker": [3, 3, 7, 7]
            },
            {
              "word": ["W", "A", "T", "E", "R"],
              "marker": [5, 2, 5, 6]
            },
            {
              "word": ["F", "I", "S", "H"],
              "marker": [1, 2, 1, 5]
            },
            {
              "word": ["P", "R", "E", "Y"],
              "marker": [0, 5, 0, 8]
            }
          ],
          "table": [
            ["P", "R", "E", "D", "A", "T", "O", "R", "S"],
            ["H", "Y", "V", "K", "T", "O", "V", "S", "P"],
            ["L", "F", "J", "C", "T", "W", "J", "F", "U"],
            ["Y", "I", "K", "O", "A", "A", "T", "T", "P"],
            ["S", "S", "O", "A", "C", "T", "T", "F", "Y"],
            ["P", "H", "H", "U", "K", "E", "T", "C", "A"],
            ["R", "K", "F", "A", "E", "R", "A", "Y", "M"],
            ["E", "Z", "C", "W", "R", "D", "X", "N", "S"],
            ["Y", "O", "K", "D", "S", "K", "H", "H", "Y"]
          ],
          "lang": "en",
          "showWords": true
        }
      },
    {
      id: 'snakes',
      type: 'passage',
      label: 'Snakes',
      data: {
        title: 'Snakes',
        text: [
          { type: 'img', src: 'snake.jpg' },
          `A fascinating fact about snakes is that they don’t have legs. They move by creeping. People are generally scared of snakes. This is because they’re poisonous. But, not all snakes are poisonous. Their food is usually frogs and small animals. Snakes can swallow their food without chewing. They shed their skin 3 to 6 times per year.`
        ]
      }
    },
    {
      id: 'snakes-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `A fascinating fact about snakes is that they don’t have *legs (face)*. 
They move by *creeping (crawling)*. 
People are generally *scared (playful)* of snakes. 
This is *because (became)* they’re poisonous. 
But, not all snakes are poisonous. 
*Their (There)* food is usually frogs and small animals. 
Snakes can swallow their food without *chewing (chasing)*. 
They shed their skin 3 to 6 times *per (par)* year.`,
        title: 'Tap on the blanks for options.'
      }
    },
    {
      id: 'snakes-jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        title: 'These words are linked with snakes. Identify.',
        text: 'Snakes, Crawl, Flying, Frogs, Skin, Scales'
      }
    },
    {
      id: 'snakes-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'Snake babies are called________.',
            options: 'snakelets, snakies, scalies'
          },
          {
            qText: 'Snakes are_________.',
            options: 'carnivores, omnivores, herbivores'
          },
          {
            qText: 'Some snakes can also______.',
            options: 'fly, hop, walk'
          },
          {
            qText: 'Snakes shed their________.',
            options: 'skin, tongue, cheeks'
          },
          {
            qText: 'Snakes are__________.',
            options: 'reptiles, amphibians, mammals'
          }
        ]
      }
    },
     {
        "id": "wordSearch-snakes",
        "editable": true,
        "type": "wordsearch",
        "label": "WordSearch - Snakes",
        "data": {
          "title": "Find the given words from the table.",
          "words": [
            {
              "word": ["S", "N", "A", "K", "E", "L", "E", "T", "S"],
              "marker": [0, 8, 8, 8]
            },
            {
              "word": ["R", "E", "P", "T", "I", "L", "E"],
              "marker": [1, 0, 7, 0]
            },
            {
              "word": ["C", "R", "A", "W", "L", "E", "R"],
              "marker": [1, 6, 1, 0]
            },
            {
              "word": ["V", "E", "N", "O", "M"],
              "marker": [0, 0, 4, 4]
            },
            {
              "word": ["A", "N", "A", "C", "O", "N", "D", "A"],
              "marker": [2, 1, 2, 8]
            },
            {
              "word": ["P", "Y", "T", "H", "O", "N"],
              "marker": [3, 0, 8, 5]
            },
            {
              "word": ["S", "K", "I", "N"],
              "marker": [8, 2, 8, 5]
            },
            {
              "word": ["S", "N", "A", "K", "E"],
              "marker": [4, 6, 8, 6]
            },
            {
              "word": ["C", "O", "B", "R", "A"],
              "marker": [3, 2, 3, 6]
            },
            {
              "word": ["S", "H", "E", "D"],
              "marker": [7, 2, 4, 5]
            }
          ],
          "table": [
            ["V", "R", "E", "P", "T", "I", "L", "E", "J"],
            ["R", "E", "A", "K", "Y", "M", "U", "G", "W"],
            ["Y", "L", "N", "C", "D", "T", "B", "S", "S"],
            ["H", "W", "A", "O", "K", "R", "H", "D", "K"],
            ["M", "A", "C", "B", "M", "E", "Z", "O", "I"],
            ["N", "R", "O", "R", "D", "O", "I", "C", "N"],
            ["Y", "C", "N", "A", "S", "N", "A", "K", "E"],
            ["H", "A", "D", "M", "E", "G", "Y", "Y", "C"],
            ["S", "N", "A", "K", "E", "L", "E", "T", "S"]
          ],
          "lang": "en",
          "showWords": true
        }
      },
    {
      id: 'dinosaurs',
      type: 'passage',
      label: 'Dinosaurs',
      data: {
        title: 'Dinosaurs',
        text: `Dinosaurs lived on earth millions of years ago. No one knows what they looked like. But on the basis of bones and skeletons from the past, scientists assumed their body structure. They were of different sizes. Some were very small while some were very huge. Some of them even had wings to fly. Some also lived in the sea. 
We still have no idea what sounds dinosaurs used to make. But based on their body sizes, scientists have also assumed their voice. We can hear their voices in a lot of movies made on dinosaurs. For example, Jurassic Park series, Jurassic World, Godzilla, etc.       
Apart from being diverse in their body structures, the species were also different in their eating habits. Some were herbivores, some were carnivores and some were omnivores. It has been found that dinosaurs became extinct about 65 million years ago. A meteor from space hit the earth. It led to the death of the species.`
      }
    },
    {
      id: 'dinosaurs-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Dinosaurs lived on earth millions of years *ago (later)*. 
No one knows what *they (them)* looked like. 
But on the basis of bones *and (hands)* skeletons from the past, scientists assumed their body *structure (shape)*. 
They were of *different (diffarent)* sizes. 
Some were very small while some were *very (vary)* huge. 
Some of them even had *wings (bings)* to fly. 
Some also lived in the sea. 

We still have no idea what *sounds (screams)* dinosaurs used to make. 
But based on their body sizes, scientists have also *assumed (assured)* their voice. 
We can hear their voices in a *lot (let)* of movies made on dinosaurs. 
For example, Jurassic Park series, Jurassic World, Godzilla, etc.

Apart from being diverse in *their (there)* body structures, the species were also different in their eating habits. 
Some were *herbivores (harabivores)*, some were carnivores and some were *omnivores (omnipotent)*. 
It has been found that dinosaurs became *extinct (estinguished)* about 65 million years ago. 
A meteor from space *hit (hitted)* the earth. 
It led to the death of the species.`,
        title: 'Tap on the blanks for options.'
      }
    },
    {
      id: 'dinosaurs-jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        title: 'These words are linked with dinosaurs. Identify.',
        text: 'Eggs, Flight, Era, Old, Animal, Lizard'
      }
    },
    {
      id: 'dinosaurs-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'Dinosaurs died________years ago.',
            options: '65 million, 65 billion, 65 thousand'
          },
          {
            qText: 'Dinosaurs_________.',
            options: 'laid eggs, gave birth, were infertile'
          },
          {
            qText: 'There were_______species of dinosaurs.',
            options: 'worker, queen, kingmany, only one, fifteen'
          },
          {
            qText: 'Dinosaurs became extinct because of_________.',
            options: 'meteor shower, draught, flood'
          },
          {
            qText: 'We are not sure about dinosaurs__________.',
            options: 'voices, bodies, wings'
          }
        ]
      }
    },
    {
        "id": "wordSearch-dinosaurs",
        "editable": true,
        "type": "wordsearch",
        "label": "WordSearch - Dinosaurs",
        "data": {
          "title": "Find the given words from the table.",
          "words": [
            {
              "word": ["D", "I", "N", "O", "S", "A", "U", "R", "S"],
              "marker": [2, 0, 2, 8]
            },
            {
              "word": ["J", "U", "R", "A", "S", "S", "I", "C"],
              "marker": [0, 7, 7, 7]
            },
            {
              "word": ["M", "E", "T", "E", "O", "R"],
              "marker": [6, 3, 1, 3]
            },
            {
              "word": ["M", "E", "S", "O", "Z", "O", "I", "C"],
              "marker": [9, 0, 9, 7]
            },
            {
              "word": ["E", "N", "O", "R", "M", "O", "U", "S"],
              "marker": [9, 8, 2, 8]
            },
            {
              "word": ["L", "I", "V", "I", "N", "G"],
              "marker": [1, 1, 6, 1]
            },
            {
              "word": ["S", "C", "R", "E", "A", "M"],
              "marker": [0, 0, 0, 5]
            },
            {
              "word": ["A", "N", "C", "I", "E", "N", "T"],
              "marker": [0, 9, 6, 9]
            },
            {
              "word": ["S", "P", "E", "C", "I", "E", "S"],
              "marker": [7, 0, 7, 6]
            },
            {
              "word": ["E", "X", "T", "I", "N", "C", "T"],
              "marker": [8, 1, 8, 7]
            }
          ],
          "table": [
            ["S", "B", "D", "C", "A", "M", "F", "S", "V", "M"],
            ["C", "L", "I", "V", "I", "N", "G", "P", "E", "E"],
            ["R", "P", "N", "I", "Z", "R", "I", "E", "X", "S"],
            ["E", "R", "O", "E", "T", "E", "M", "C", "T", "O"],
            ["A", "W", "S", "Y", "V", "T", "A", "I", "I", "Z"],
            ["M", "Z", "A", "R", "W", "Z", "L", "E", "N", "O"],
            ["X", "J", "U", "H", "F", "V", "A", "S", "C", "I"],
            ["J", "U", "R", "A", "S", "S", "I", "C", "T", "C"],
            ["F", "D", "S", "U", "O", "M", "R", "O", "N", "E"],
            ["A", "N", "C", "I", "E", "N", "T", "C", "B", "K"]
          ],
          "lang": "en",
          "showWords": true
        }
      }
   ]
};
