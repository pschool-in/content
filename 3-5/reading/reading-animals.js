export default {
  label: 'Reading Lessons',
  id: 'reading-animals',
  lockAfter: 3,
  list: [
    {
      id: 'dogs',
      type: 'passage',
      label: 'Dogs',
      style: 'big',
      data: {
        title: 'Dogs',
        text: [
          { type: 'img', src: 'dog.jpg', width: 120, height: 120 },
          `Dogs are wonderful pets and our loyal friends. 
          They are domestic animals that bring joy to our lives. With their wagging tails and friendly nature, they always make us smile. 
          Dogs have sharp teeth and live for about 10-13 years. They love to eat bones and playing 'fetch' is their favorite game. 
          Baby dogs are called puppies, and they are super cute! Dogs are always there for us, ready to play and cuddle. 
          They are the best companions anyone could ask for, and we are lucky to have them in our lives.`
        ]
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Dogs are known as man's *best (worst)* friends? 
        *Dogs (Cats)* are wonderful pets and our loyal friends. 
Dogs are *domestic (wild)* animals. 
Dogs live for *10-13 (5-10)* years. 
Dogs love eating bones *and (hand)* they love to play. 
We can *always (alway)* play 'fetch' games with dogs. 
Dogs move *their (there)* tails rapidly whenever they want to play. 
The baby dogs are called *puppies (cubs)*.`,
        title: 'Tap on the blanks for options.'
      }
    },
    {
      id: 'dog-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: `Domestic: relating to or suitable for home or family life
            Companions: people or animals who are friendly and provide company
            Wagging: moving or swinging from side to side, as a dog's tail does
            Sharp: having a fine or pointed edge or tip`
          }
        ]
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
    /*{
      id: 'jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      data: [
        {
          title: 'Relating to or suitable for home or family life.',
          text: 'Domestic'
        },
        {
          title: 'People or animals who are friendly and provide company.',
          text: 'Companions'
        },
        {
          title: "Moving or swinging from side to side, as a dog's tail does.",
          text: 'Wagging'
        },
        {
          title: 'Having a fine or pointed edge or tip.',
          text: 'Sharp'
        }
      ]
    },*/
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'Dogs have _____ teeth.',
            options: 'sharp, conical, yellow'
          },
          {
            qText: "A dog is a man's _____ friend.",
            options: 'best, worst, honest'
          },
          {
            qText: 'Dogs love to play _____ game.',
            options: 'fetch, dug, dumb'
          },
          {
            qText: 'Dog babies are called _____ .',
            options: 'puppies, pomeranian, cubs'
          },
          {
            qText: 'Dogs are _____ .',
            options: 'fun, boring, annoying'
          }
        ]
      }
    },
    /*{
      id: 'cats',
      type: 'passage',
      label: 'Cats',
      style: 'big',
      data: {
        title: 'Cats',
        text: [
          { type: 'img', src: 'cat.jpg', width: 120, height: 120 },
          `Cats are lazy. They also have whiskers around their nose. They spend 70% of their lives sleeping. But they also spend a lot of time cleaning themselves and remaining tidy. Cats love eating fish and milk. So if cats sneak into your house often, keep your milk and fish safe. Do you know that cats belong to the same family as tigers?`
        ]
      }
    },*/
    {
      id: 'cats',
      type: 'passage',
      label: 'Cats',
      style: 'big',
      data: {
        title: 'Cats',
        text: [
          { type: 'img', src: 'cat.jpg', width: 120, height: 120 },
          `Cats, both domestic and wild, are fascinating creatures known for their unique characteristics. 
          While they are often associated with laziness, spending up to 70% of their lives sleeping, cats also possess a strong sense of cleanliness. They meticulously groom themselves to maintain their tidiness and hygiene. 
          With their whiskers surrounding their nose, cats possess an extraordinary sensory system, aiding them in navigating their surroundings with precision. 
          Additionally, cats share a common ancestry with majestic creatures like tigers. So, it's no wonder that cats, with their love for fish and milk, may be tempted to sneak into our homes to secure these delectable treats. 
          If you wish to protect your milk and fish, it's wise to keep them safely stored away.`
        ]
      }
    },
    {
      id: 'cats-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Cats are *lazy (active)* creatures. 
Cats also have whiskers *around (round)* their nose. 
Cats spend *70% (20%)* of *their (there)* lives sleeping. 
Cats also spend a lot of time cleaning *themselves (himself)* and remaining tidy. 
Cats *love (loves)* eating fish *and (hand)* milk. 
If cats sneak *into (onto)* your house often, keep *your (their)* milk and fish safely stored away. 
Cats belong to the same family as *tigers (dogs)*`,
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
            qText: 'Cats have _____ around their nose.',
            options: 'whiskers, hair, pores'
          },
          {
            qText: 'Cats love _____ .',
            options: 'milk, hay, food'
          },
          {
            qText: 'Cats love to _____ .',
            options: 'sleep, eat, repeat'
          },
          {
            qText: 'Cat babies are called _____ .',
            options: 'kittens, mittens, littens'
          },
          {
            qText: 'Cat family includes _____ .',
            options: 'tigers, wolves, dogs'
          }
        ]
      }
    },
    {
      id: 'polar-bears',
      type: 'passage',
      label: 'Polar Bears',
      style: 'big',
      data: {
        title: 'Polar Bears',
        text: [
          { type: 'img', src: 'polarbear.jpg', width: 120, height: 120 },
          `Polar bears live in very cold areas, covered in snow. They look the same as normal bears, only they are white and bigger. They have a thick layer of fat on their body. It protects them from the cold. 
          Polar bears can weigh equal to 10 humans. They’re very strong and powerful. An amazing thing about polar bears is that they look white. But in reality, their skin is black. It is covered with a lot of white fur.`
        ]
      }
    },
    {
      id: 'polar-bears-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Polar *bears (bares)* live in very cold areas, *covered (hovered)* in snow. 
Polar bears look *the (a)* same as normal bears, only they are white *and (hand)* bigger. 
Polar bears have a *thick (rhuck)* layer of fat on *their (there)* body. It protects them from the *cold (hold)*. 
Polar bears can weigh equal to *10 (50)* humans. 
Polar bears are *very (vary)* strong and powerful. 
An amazing thing *about (of)* polar bears is that they look white *in (inn)* color. But *in (under)* reality, *their (there)* skin is black.`,
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
            qText: 'Polar bears live in _____ regions.',
            options: 'cold, warm, dense'
          },
          {
            qText: 'Polar bears are similar to _____ bears.',
            options: 'brown, dark, blue'
          },
          {
            qText: 'Polar bears have _____ fur.',
            options: 'white, black, brown'
          },
          {
            qText: 'Polar bears have _____ skin.',
            options: 'black, white, blue'
          },
          {
            qText: 'Polar bears are found in _____ .',
            options: 'Antarctica, Africa, Asia'
          }
        ]
      }
    },
    /*{
      id: 'horses',
      type: 'passage',
      label: 'Horses',
      style: 'big',
      data: {
        title: 'Horses',
        text: [
          { type: 'img', src: 'horse.jpg', width: 120, height: 120 },
          `Horses can almost see in all directions without turning their necks. They run very fast. Horse racing is a very popular sport. Horseshoes are attached under their feet. It helps them run faster. Horses eat grass, hay, grains, and solid food. They're also domesticated on farms. They are useful for different farming activities.`
        ]
      }
    },*/
    {
      id: 'horses',
      type: 'passage',
      label: 'Horses',
      style: 'big',
      data: {
        title: 'Horses',
        text: [
          { type: 'img', src: 'horse.jpg', width: 120, height: 120 },
          `The horse is a magnificent creature that gallops gracefully across vast meadows. They can almost see in all directions without turning their necks.
          With its strong legs and flowing mane, it is a symbol of power and beauty. Horses come in different colors like brown, black, and white, and they have a long, swishing tail. They love to eat hay and grass and enjoy running and jumping. 
          People ride horses for transportation and participate in exciting horse races. Horses also help humans by pulling heavy carts and plowing fields. They are loyal and friendly animals that can be our trusted companions. 
          The horse truly is a remarkable and majestic animal.`
        ]
      }
    },
    {
      id: 'horses-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Horses can *almost (utmost)* see in all directions without turning their necks. 
Horses run *very (vary)* fast. 
Horse racing is *a (an)* very popular sport. 
Horses *eat (heat)* grass, hay, grains, and solid food. 
Horses are domesticated on *farms (harms)*. 
Horses are useful for different *farming (harming)* activities.`,
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
            qText: 'Horses are domesticated in _____ .',
            options: 'farms, houses, barns'
          },
          {
            qText: 'Horses usually eat _____ .',
            options: 'hay, bay, say'
          },
          {
            qText: 'Horses are good at _____ .',
            options: 'running, sitting, climbing'
          },
          {
            qText: 'People ride horses for ___________.',
            options: 'transportation, fun, free'
          },
          {
            qText: 'Horses can _____ in all directions.',
            options: 'see, eat, swing'
          }
        ]
      }
    },
    {
      id: 'tigers',
      type: 'passage',
      label: 'Tigers',
      style: 'big',
      data: {
        title: 'Tigers',
        text: [
          { type: 'img', src: 'tiger.jpg', width: 120, height: 120 },
          `Tigers are the largest animals in the cat family. They have vertical strips over their body. They’re usually orange, black and white. But some tigers are just white and black. Tiger babies are called cubs. Tigers’ eyesights are 6 times better than humans. Do you know that tigers is that they can survive without food for 2 weeks? They are predators, which means that they hunt their prey. They only eat flesh, which means they're carnivores.`
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
They’re usually orange, black *and (or)* white.
But *some (hum)* tigers are just white and black.
Tiger’s eyesights *are (hare)* 6 times better than humans.
Do you know that tigers is that they can survive without food for 2 weeks?
They are predators, *which (witch)* means that they hunt their prey.
They only eat flesh, which means they're *carnivores (herbivores)*.`,
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
            qText: 'Tigers are _____ .',
            options: 'predators, preys, pals'
          },
          {
            qText: 'Tigers are _____ .',
            options: 'carnivores, omnivores, herbivores'
          },
          {
            qText: 'Tigers _____ their prey.',
            options: 'hunt, run, dump'
          },
          {
            qText: 'Tigers babies are called _____ .',
            options: 'cubs, lambs, kittens'
          },
          {
            qText: 'Tigers have _____ strips all over their body.',
            options: 'vertical, horizontal, zig-zag'
          }
        ]
      }
    },
    {
      id: 'rabbits',
      type: 'passage',
      label: 'Rabbits',
      style: 'big',
      data: {
        title: 'Rabbits',
        text: [
          { type: 'img', src: 'rabbit.jpg', width: 120, height: 120 },
          `Rabbits love eating carrots and hay. They chew 120 times in a minute. It helps them to digest food easily.  Do you know how many times humans should chew their food?`,
          `Rabbits have a few things in common with other animals. Just like horses, they can see in almost all directions without turning their heads. Just like cats, they like to keep themselves tidy.`,
          `Rabbits live in burrows. They're also called bunnies. Do you know that sometimes rabbits eat their own poop?`
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
Rabbits live in *burrows (tunnels)*.
They're also called *bunnies (buddies)*.
Do you know that sometimes rabbits eat their own poop?`,
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
            qText: 'Rabbits live in _____ .',
            options: 'burrows, dens, holes'
          },
          {
            qText: 'Rabbits are also called _____ .',
            options: 'bunny, sunny, lamb'
          },
          {
            qText: 'Rabbits also eat their _____ .',
            options: 'poop, ears, tail'
          },
          {
            qText: 'Rabbits love _____ .',
            options: 'carrots, radish, corriander'
          },
          {
            qText: 'Rabbits usually eat _____ .',
            options: 'hay, may, clay'
          }
        ]
      }
    },
    {
      id: 'dolphins',
      type: 'passage',
      label: 'Dolphins',
      style: 'big',
      data: {
        title: 'Dolphins',
        text: [
          { type: 'img', src: 'dolphin.jpg', width: 120, height: 120 },
          `Dolphins are very playful and intelligent. Just like whales, they breathe air from a blowhole on their back. They swim very fast. They jump out of the water to breathe and it looks like they’re hopping on the water. Dolphin baabies are called calves. Dolphins are very attentive even while they’re asleep. Some dolphins have two stomachs. This helps them to store food.`
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
Dolphin baabies are called *calves (cubs)*.
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
            qText: 'Dolphins have _____ stomach(s).',
            options: 'two, one, zero'
          },
          {
            qText: 'Dolphins _____ on the water.',
            options: 'hop, swim, dance'
          },
          {
            qText: 'Dolphins are very _____ .',
            options: 'intelligent, dumb, pretty'
          },
          {
            qText: 'Dolphins are attentive while _____ .',
            options: 'sleeping, eating, swimming'
          },
          {
            qText: 'Dolphins babies are called _____ .',
            options: 'calves, halves, baby dolphins'
          }
        ]
      }
    },
    {
      id: 'monkeys',
      type: 'passage',
      label: 'Monkeys',
      style: 'big',
      data: {
        title: 'Monkeys',
        text: [
          { type: 'img', src: 'monkey.jpg', width: 120, height: 120 },
          `Monkey babies are called 'infants'. Monkeys can be easily seen in India. We usually find them on top of buildings and trees. Their favorite food is bananas. They eat it just like humans, by removing the peels in the same manner. Do you know that monkeys’ families are our ancestors? Their hands and legs are very similar to humans. A few years ago, there used to be street plays, in which monkeys danced and did tricks.`
        ]
      }
    },
    {
      id: 'monkeys-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Monkey babies are called *infants (babies)*.
Monkeys can be *easily (peasily)* seen in India. 
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
            qText: 'Monkeys babies are called _____ .',
            options: 'infants, cubs, bugs'
          },
          {
            qText: 'Monkey are our _____ .',
            options: 'ancestors, enemies, slaves'
          },
          {
            qText: 'Monkeys love eating _____ .',
            options: 'bananas, chocolates, apples'
          },
          {
            qText: 'Monkeys _____ from one tree to another.',
            options: 'climb, hop, walk'
          },
          {
            qText: 'Monkeys did _____ in the past.',
            options: 'street tricks, talking, theatre'
          }
        ]
      }
    },
    {
      id: 'bees',
      type: 'passage',
      label: 'Bees',
      style: 'big',
      data: {
        title: 'Bees',
        text: [
          { type: 'img', src: 'bee.jpg', width: 120, height: 120 },
          `Bees live in beehives where they produce honey. Baby bees are called broods. The beehive consists of a queen bee and worker bees. They feed on flower nectar. The lifespan of worker bees is usually around one year. 
          But the lifespan of an adult queen bee is around 2 to 5 years. Only the worker bees can sting. It is usually advised not to tease the bees. This is because the worker bees can sting us. Stings cause a lot of pain.`
        ]
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
The lifespan of worker *bees (Bs)* is usually *around (round)* one year. 
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
            qText: 'Bees live in _____ .',
            options: 'beehives, trees, canals'
          },
          {
            qText: 'A beehive is also called a _____ .',
            options: 'honeycomb, beecomb, queens palace'
          },
          {
            qText: 'Only _____ bees can sting.',
            options: 'worker, queen, king'
          },
          {
            qText: 'Baby bees are called _____ .',
            options: 'broods, croods, infants'
          },
          {
            qText: 'Bees feed on _____ .',
            options: 'flower nectar, honey, leaves'
          }
        ]
      }
    },
    {
      id: 'pigs',
      type: 'passage',
      label: 'Pigs',
      style: 'big',
      data: {
        title: 'Pigs',
        text: [
          { type: 'img', src: 'pig.jpg', width: 120, height: 120 },
          `Pigs have small eyes, large ears, and a flat snout. Snouts give them an excellent sense of smell. They make an ‘oink’ sound and usually like to stay in mud and dirt. They’re one of the most populous mammals. Do you know that the stiff hair on pigs’ bodies is called bristles? Those bristles were very commonly used to make paintbrushes and shoe brushes.`
        ]
      }
    },
    {
      id: 'pigs-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Pigs *have (shave)* small eyes, large ears, and a flat snout. 
Snouts *give (gives)* them an excellent sense of smell. 
They make an ‘*oink (horn)*’ sound and usually like to stay in mud and *dirt (hurt)*. 
*They’re (Their're)* one of the most populous mammals. 
Do you know that the stiff hair on pigs’ bodies are called bristles? 
Those bristles were very commonly *used (abused)* to make paintbrushes and shoes.`,
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
            qText: 'A pigs nose is elongated and is called a _____ .',
            options: 'snout, nose, flat, nose'
          },
          {
            qText: 'Pigs body has stiff hair, called _____ ',
            options: 'bristles, braces, thorns'
          },
          {
            qText: 'A baby pig is called a _____ .',
            options: 'piglet, infant, brood'
          },
          {
            qText: 'Pigs like to stay in _____ .',
            options: 'mud, ponds, drains'
          },
          {
            qText: 'Pig hair was used to make _____ .',
            options: 'paintbrushes, toothbrushes, cloth brushes'
          }
        ]
      }
    },
    {
      id: 'lions',
      type: 'passage',
      label: 'Lions',
      style: 'big',
      data: {
        title: 'Lions',
        text: [
          { type: 'img', src: 'lion.jpg', width: 120, height: 120 },
          `Lions are very powerful and strong. They look like a very big cat with hair all around their face. Lions live together in caves or dens. Baby lions are called cubs. They usually roar at night. The sound of their roar can be heard 8kms away. They eat by hunting their prey, which means they're predators. Do you know that lions can eat up to 30kgs in one meal?`
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
Do you know that lions can eat up to 30kgs in one meal?`,
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
            qText: 'Lions are known as the _____ of the Jungle.',
            options: 'King, Coward, Cat'
          },
          {
            qText: 'Lions live in _____ .',
            options: 'caves, carnivals, trees'
          },
          {
            qText: 'Caves are also called _____ .',
            options: 'dens, forests, pathways'
          },
          {
            qText: 'Lions are _____ .',
            options: 'predators, preys, herbivores'
          },
          {
            qText: 'A lions baby is called a _____ .',
            options: 'cub, calf, kitten'
          }
        ]
      }
    },
    {
      id: 'sharks',
      type: 'passage',
      label: 'Sharks',
      style: 'big',
      data: {
        title: 'Sharks',
        text: [
          { type: 'img', src: 'shark.jpg', width: 120, height: 120 },
          `Sharks are predators. It means that they hunt other fishes as their food. A baby shark is called a pup. Sharks have an overall 30,000 pointed teeth in their life span. Their skin is the thickest of all the animals. Sharks show their presence by swimming on the upper layer of water. The horn-like fin on their upper body is visible outside the water.`
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
A baby shark is called a *pup (pug)*.
Sharks have an overall 30,000 pointed teeth in their *life (live)* span. 
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
            qText: 'Sharks are _____ .',
            options: 'predators, preys, mammals'
          },
          {
            qText: 'Sharks have _____ teeth.',
            options: 'pointed, blunt, human-like'
          },
          {
            qText: 'A baby shark is called a _____ .',
            options: 'pup, bub, baby'
          },
          {
            qText: 'Sharks move _____ their prey before attacking.',
            options: 'around, away, forward'
          },
          {
            qText: 'Sharks are _____ .',
            options: 'dangerous, friendly, non-friendly'
          }
        ]
      }
    },
    {
      id: 'snakes',
      type: 'passage',
      label: 'Snakes',
      style: 'big',
      data: {
        title: 'Snakes',
        text: [
          { type: 'img', src: 'snake.jpg', width: 120, height: 120 },
          `A fascinating fact about snakes is that they don’t have legs. They move by creeping. They are reptiles. Snake babies are called snakelets. People are generally scared of snakes. This is because they’re poisonous. But, not all snakes are poisonous. Their food is usually frogs and small animals. Snakes can swallow their food without chewing. They shed their skin 3 to 6 times per year. Do you know that some snakes can fly?`
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
They are reptiles.
Snake babies are called *snakelets (scales)*.
People are generally *scared (playful)* of snakes. 
This is *because (became)* they’re poisonous. 
But, not all snakes are poisonous. 
*Their (There)* food is usually frogs and small animals. 
Snakes can swallow their food without *chewing (chasing)*. 
They shed their skin 3 to 6 times *per (par)* year.
Do you know that some snakes can *fly (run)*?`,
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
            qText: 'Snake babies are called _____ .',
            options: 'snakelets, snakies, scalies'
          },
          {
            qText: 'Snakes are _____ .',
            options: 'carnivores, omnivores, herbivores'
          },
          {
            qText: 'Some snakes can also _____ .',
            options: 'fly, hop, walk'
          },
          {
            qText: 'Snakes shed their _____ .',
            options: 'skin, tongue, cheeks'
          },
          {
            qText: 'Snakes are _____ .',
            options: 'reptiles, amphibians, mammals'
          }
        ]
      }
    },
    {
      id: 'dinosaurs',
      type: 'passage',
      label: 'Dinosaurs',
      style: 'big',
      data: {
        title: 'Dinosaurs',
        text: [
          { type: 'img', src: 'dinosaur.jpg', width: 120, height: 120 },
          `Dinosaurs lived on earth millions of years ago. No one knows what they looked like. But based on bones and skeletons from the past, scientists assumed their body structure. They were of different sizes. Some were very small while some were very huge. Some of them even had wings to fly. Some also lived in the sea. 
We still have no idea what sounds dinosaurs used to make. Based on their body sizes, scientists have also assumed their voices. We can hear their voices in a lot of movies made about dinosaurs. For example, the Jurassic Park series, Jurassic World, Godzilla, etc.       
Apart from being diverse in their body structures, the species were also different in their eating habits. Some were herbivores, some were carnivores and some were omnivores. It has been found that dinosaurs became extinct about 65 million years ago. A meteor from space hit the earth. It led to the death of the species.`
        ]
      }
    },
    {
      id: 'dinosaurs-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Dinosaurs lived on earth millions of years *ago (later)*. 
No one knows what *they (them)* looked like. 
But based on bones *and (hands)* skeletons from the past, scientists assumed their body *structure (shape)*. 
They were of *different (diffarent)* sizes. 
Some were very small while some were *very (vary)* huge. 
Some of them even had *wings (bings)* to fly. 
Some also lived in the sea. 

We still have no idea what *sounds (screams)* dinosaurs used to make. 
Based on their body sizes, scientists have also *assumed (assured)* their voice. 
We can hear their voices in a *lot (let)* of movies made about dinosaurs. 
For example, the Jurassic Park series, Jurassic World, Godzilla, etc.

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
            qText: 'Dinosaurs died _____ years ago.',
            options: '65 million, 65 billion, 65 thousand'
          },
          {
            qText: 'Dinosaurs _____ .',
            options: 'laid eggs, gave birth, were infertile'
          },
          {
            qText: 'There were _____ species of dinosaurs.',
            options: 'many, only one, fifteen'
          },
          {
            qText: 'Dinosaurs became extinct because of _____ .',
            options: 'meteor shower, draught, flood'
          },
          {
            qText: 'We are not sure about dinosaurs _____ .',
            options: 'voices, bodies, wings'
          }
        ]
      }
    }
  ]
};
