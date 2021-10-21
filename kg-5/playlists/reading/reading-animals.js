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
        type: 'fillupOptions',
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
        editable: true,
        title: 'These words are linked with dog. Identify.',
        text: 'Dog, Bone, Puppy, Play, Tail, Friend'
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        editable: true,
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
            qText:
              'Dog babies are called_________.',
            options: 'puppies, pomerarians, parrots'
          },
          {
            qText: 'Dogs are_______.',
            options: 'fun, boring, annoying'
          },
        ]
      }
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
        id: 'fillup',
        label: 'Fill in the blanks',
        type: 'fillupOptions',
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
      id: 'Jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        editable: true,
        title: 'These words are linked with cat. Identify.',
        text: 'Tail, Kitten, Milk, Fish, Cat, Lazy'
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        editable: true,
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
            qText:
              'Cat babies are called_________.',
            options: 'kittens, mittens, littens'
          },
          {
            qText: 'Cat family includes_______.',
            options: 'tigers, wolves, dogs'
          },
        ]
      }
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
        id: 'fillup',
        label: 'Fill in the blanks',
        type: 'fillupOptions',
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
      id: 'Jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        editable: true,
        title: 'These words are linked with polar bears. Identify.',
        text: 'Cold, Snow, Polar, Bears, White, Fur'
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        editable: true,
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
            qText:
              'Polar bears have_______skin.',
            options: 'black, white, blue'
          },
          {
            qText: 'Polar bears are found in_______.',
            options: 'Antarctica, Arctic, Asia'
          },
        ]
      }
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
        id: 'fillup',
        label: 'Fill in the blanks',
        type: 'fillupOptions',
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
      id: 'Jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        editable: true,
        title: 'These words are linked with horses. Identify.',
        text: 'Horse, Hay, Shoe, Run, Racing, Food'
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        editable: true,
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
            qText:
              '_________are attached under Horses feet.',
            options: 'Horseshoes, Shoes, Sandles'
          },
          {
            qText: 'Horses can_______in all directions.',
            options: 'see, run, swing'
          },
        ]
      }
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
        id: 'fillup',
        label: 'Fill in the blanks',
        type: 'fillupOptions',
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
      id: 'Jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        editable: true,
        title: 'These words are linked with tigers. Identify.',
        text: 'Tiger, Cubs, Bengal, Flesh, Cats'
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        editable: true,
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
            qText:
              'Tigers babies are called_______.',
            options: 'cubs, lambs, kittens'
          },
          {
            qText: 'Tigers are also found in_______.',
            options: 'Tigers are also found in_______.'
          },
        ]
      }
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
        id: 'fillup',
        label: 'Fill in the blanks',
        type: 'fillupOptions',
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
      id: 'Jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        editable: true,
        title: 'These words are linked with rabbits. Identify.',
        text: 'Hay, Burrow, Carrot, Ears, Teeth, Bunny'
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        editable: true,
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
            qText:
              'Rabbits love________.',
            options: 'carrots, radish, corriander'
          },
          {
            qText: 'Rabbits usually eat______.',
            options: 'hay, may, clay'
          },
        ]
      }
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
        id: 'fillup',
        label: 'Fill in the blanks',
        type: 'fillupOptions',
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
      id: 'Jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        editable: true,
        title: 'These words are linked with dolphins. Identify.',
        text: 'Hopping, Play, Smart, Swim, Hole, Blow'
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        editable: true,
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
            qText:
              'Dolphins are attentive while__________.',
            options: 'sleping, eating, swimming'
          },
          {
            qText: 'Dolphins babies are called________.',
            options: 'calves, halves, baby dolphins'
          },
        ]
      }
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
        id: 'fillup',
        label: 'Fill in the blanks',
        type: 'fillupOptions',
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
      id: 'Jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        editable: true,
        title: 'These words are linked with monkeys. Identify. ',
        text: 'Monkey, Banana, Trees, Infant, Climb, Street'
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        editable: true,
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
            qText:
              'Monkeys_________from one tree to another.',
            options: 'climb, hop, walk'
          },
          {
            qText: 'Monkeys did________in the past.',
            options: 'street tricks, talking, theatre'
          },
        ]
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
        id: 'fillup',
        label: 'Fill in the blanks',
        type: 'fillupOptions',
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
      id: 'Jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        editable: true,
        title: 'These words are linked with bees. Identify.',
        text: 'Bees, Queen, Worker, Honey, Sting, Hive'
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        editable: true,
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
            qText:
              'Baby bees are called_________.',
            options: 'broods, croods, infants'
          },
          {
            qText: 'Bees feed on_______.',
            options: 'flower nectar, honey, leaves'
          },
        ]
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
        id: 'fillup',
        label: 'Fill in the blanks',
        type: 'fillupOptions',
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
      id: 'Jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        editable: true,
        title: 'These words are linked with pigs. Identify.',
        text: 'Pig, Piglet, Mud, Oink, Dirty, Snout'
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        editable: true,
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
            qText:
              'Pigs like to stay in_______.',
            options: 'mud, ponds, drains'
          },
          {
            qText: 'Pig hair was used to make_________.',
            options: 'paintbrushes, toothbrushes, cloth brushes'
          },
        ]
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
        id: 'fillup',
        label: 'Fill in the blanks',
        type: 'fillupOptions',
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
      id: 'Jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        editable: true,
        title: 'These words are linked with lions. Identify.',
        text: 'Lions, Cubs, Caves, Dens, Roar, Meat'
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        editable: true,
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
            qText:
              'Lions are__________.',
            options: 'predators, preys, herbivores'
          },
          {
            qText: 'A lions baby is called a______.',
            options: 'cub, calf, kitten'
          },
        ]
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
        id: 'fillup',
        label: 'Fill in the blanks',
        type: 'fillupOptions',
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
      id: 'Jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        editable: true,
        title: 'These words are linked with sharks. Identify.',
        text: 'Shark, Pup, Ocean, Attack, Fish, Fins'
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        editable: true,
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
            qText:
              'Sharks move_________their prey before attacking.',
            options: 'around, away, forward'
          },
          {
            qText: 'Sharks are_________.',
            options: 'dangerous, friendly, non-friendly'
          },
        ]
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
        id: 'fillup',
        label: 'Fill in the blanks',
        type: 'fillupOptions',
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
      id: 'Jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: {
        editable: true,
        title: 'These words are linked with snakes. Identify.',
        text: 'Snakes, Crawl, Flying, Frogs, Skin, Scales'
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        editable: true,
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
            qText:
              'Snakes shed their________.',
            options: 'skin, tongue, cheeks'
          },
          {
            qText: 'Snakes are__________.',
            options: 'reptiles, amphibians, mammals'
          },
        ]
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
  id: 'fillup',
  label: 'Fill in the blanks',
  type: 'fillupOptions',
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
id: 'Jumbled-words',
type: 'sequence',
label: 'Jumbled Words',
data: {
  editable: true,
  title: 'These words are linked with dinosaurs. Identify.',
  text: 'Eggs, Flight, Era, Old, Animal, Lizard'
  }
},
{
id: 'mcq',
label: 'Multiple Choice Questions',
type: 'mcq',
data: {
  editable: true,
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
      qText:
        'Dinosaurs became extinct because of_________.',
      options: 'meteor shower, draught, flood'
    },
    {
      qText: 'We are not sure about dinosaurs__________.',
      options: 'voices, bodies, wings'
    },
       ]
     }
   }
  ]
};
