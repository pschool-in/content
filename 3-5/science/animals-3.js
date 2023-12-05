export default {
  id: 'animals-3',
  label: 'Animals',
  lockAfter: 2,
  list: [
    {
      label: 'Domestic Animals - Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Domestic Animals',
        text: `People love to keep animals. The dog guards our house. People like to keep cats, too. Cows, buffaloes and goats give us milk. Some people keep hens. We get meat, milk and eggs from animals.
Bullocks help with farm work. Hitched to a cart, they can draw heavy burdens, too. Horses and donkeys too, are used to carry burdens.
We look after the animals we keep. We feed them. We take care of them when they are ill. The animals we keep become very dear to us.`
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        text: `The dog *guards* our house.
Cows, buffaloes and goats give us *milk*.
Bullocks help with *farm* work.
Horses and donkeys are used to carry *weights*.
Hen gives us *egg*.
*Goat* gives us meat.`
      }
    },
    {
      label: 'Uninvited Guests - Notes',
      type: 'passage',
      id: 'uninvited-notes',
      data: {
        title: 'Uninvited Guests',
        text: `Some animals enter our houses even though we don't want them.
Mice and rats destroy stored grain, besides gnawing other things in the house.
Mosquitoes and bedbugs suck our blood.
Spiders make cobwebs in the house. Flies, gnats and cockroaches are a nuisance too.`
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fillup-drag-drop',
      data: [
        `Bedbugs suck our *blood*.
Spiders make *cobwebs* in the house.
Rats destroy stored *grains*.
Though we can see *lizards* in our house, they are not our *pet* animals. They are *uninvited* guests.`,

        `Birds have *two* wings.
*Ox* is used as a draft animal.
Rats and mice *trouble* us.
Bedbugs suck *blood* from our body
*Kangaroos* have a special pouch in their body, to carry their young ones.`
      ]
    },
    {
      id: 'match-uninvited',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Spider, Cobweb
Rats, Gnaw things
Mosquito, Suck Blood
Snake, Poison
Dog, Friendly`
      }
    },
    {
      label: 'So Many Kinds of Animals - notes',
      type: 'passage',
      id: 'notes-kind-of-animals',
      data: {
        title: 'So many kinds of Animals',
        text: `The crow is black. The buffalo too is black. A swan is white. But the peacock has many different colors.
The horse and the bullock are large in size. The goat and the dog are of medium size. The mouse and the squirrel are small. The earthworm and the cockroach are smaller still. Gnats and ants are very tiny, indeed!
A squirrel is a small animal. It climbs up a tree quickly and runs along its branch.  
An elephant's body is bulky. Its legs are heavy. So it cannot run at great speed.  
A deer has thin legs, so it can run very fast. A frog's hind legs are long. So it can easily hop, jump, and leap.  
Birds have only two legs. They have two wings to fly with. Their body is covered with feathers. Different birds have different flying abilities. An eagle can soar high into the sky and stay in the air for a long time. But a hen does not fly high, and comes down soon.`
      }
    },
    {
      type: 'completeWord',
      id: 'complete-word',
      label: 'Find the Animal',
      data: {
        title: 'Find the animal based on the hint.',
        text: `My legs are thin, so I can run fast. | DEER | D___
I am huge and I cannot run fast. | ELEPHANT | E_______
I am a bird of many colors. | PEACOCK | P______
We are tiny animals and we move in a line.| ANTS | A__S
My hind legs are long. So I can easily hop. | FROG | ____
I can fly too high for a long time. | EAGLE | E____
I make cobwebs in your house. | SPIDER | S_____`
      }
    },
    {
      label: 'Not a bird! - notes',
      type: 'passage',
      id: 'notes-insect',
      data: {
        title: 'Not a Bird!',
        text: `Butterflies have wings and they can fly. Still we don't call them birds. They are insects. They are smaller than birds and they have six legs. 
Animals that have six legs are called insects. So, butterflies are insects.
Mosquitoes, houseflies and cockroaches are insects, too.
Bats have wings but they don't have feathers on their body. Bats give birth to young ones. Young ones feed on their mother's milk.
Bats are not birds like the crow, sparrow etc. They are included in the group of the cow, deer, mouse etc.
We have seen that animals around us can be grouped in different ways. We formed these groups using our everyday observations. However, when scientists classify animals, they look at more important characteristics.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Butterflies have six legs.
Fishes have fins, and scales in their body.
Eagle flies higher than the pigeon.
Spiders are insects with eight legs.
Bats are not birds.`
          },
          {
            name: 'False',
            text: `Butterflies are not insects.
Bats have feathers.
Dogs have scales in their body.
Cows are always black or white.`
          }
        ]
      }
    },
    {
      label: 'Choose the Right Answer',
      id: 'mcq-types',
      type: 'mcq',
      data: {
        questions: [
          {
            qText: 'Who classify animals?',
            options: 'Scientists, Teachers, Doctors'
          },
          {
            qText:
              'Which of the following animals is not used to carry weights?',
            options: 'dog, bullock, horse, donkey'
          },
          {
            qText: 'All insects have _____.',
            options: '6 legs, 4 legs, 8 legs'
          },
          {
            qText: 'Which animal can live both in land and water?',
            options: 'Crocodile, Cockroach, Butterfly, Bat'
          },
          {
            qText: 'Which is the biggest animal?',
            options: 'Whale, Elephant, Giraffe, Shark'
          }
        ]
      }
    },
    {
      label: 'Animal Shelters - Reading',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Animal Shelters',
        text: `House is a safe place where one is protected from any danger. A place where one is protected from the sun, rain, wind, etc. A house also protects us from thefts.
Do you know, like us, animals also need shelters to protect themselves? Some animals build a shelter for themselves while others find them ready in the surroundings.
# Build House
Birds build nests as they are afraid of the animals that eat eggs. Nests protect the young birds as they are too weak to protect themselves. Nests are made up of grass, straw, and twigs. They may even contain cotton, wool, and pieces of thread and string.
Some birds don't make nests. Instead, they make holes and make it their house. Eg: Parrot, Woodpecker.
# Tailor Bird
It is smaller than a sparrow. It selects a plant with bigger leaves and builds its nest by stitching the leaves together. It uses a fine tendril to stitch them together. This little nest is big enough for the little tailor bird.
# Honeycomb
Some insects also build their own shelters. For eg, honey bees build their honeycombs on trees or under the roof of an overhanging cliff.
# Rats
Rats and mice live underground in fields. They dig into the soil and make holes and burrows to live in.
# Find House
Some animals do not make any effort to build a shelter. They simply look around for a safe place. Some live in small hollows on high cliffs or live near our houses. They find shelter in gaps in walls.
# Fun Fact
It is believed that a cobra lives in an anthill. But anthills are built by ants, not by a cobra. The cobras live in holes.
For domestic animals, we build their shelters. `
      }
    },
    {
      label: 'Build House vs Find House',
      id: 'classify',
      type: 'group',
      data: {
        title: 'Classify the below animals based on their shelter.',
        types: [
          {
            name: 'Build House',
            text: 'Crow, Honey bees, Rats, Mice, Ants, Spider'
          },
          {
            name: 'Find House',
            text: 'Doves, Tiger, Bats, Cobra'
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: [
        `House, Shelter
Coop, Bird
Stable, Horse
Shed, Cow
Parrot, Tree holes`,

        `Bird, Nest
Honey Bee, Honeycomb
Rat, Hole
Leopard, Cave
Bat, Old Building
Lion, Den`
      ]
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-shelter',
      data: {
        text: `*Birds* use grass, straw, twigs and even cotton and wool, to build their *nests*.
Tailorbird selects a plant with *big* leaves and builds its nest by *stitching* the leaves together.
Tigers and hyenas live in *caves*.
*Bats* live in tall trees or old, deserted buildings.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false-shelter',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `Every human being needs a house.
A house protects us from thieves.
Honey bees build their own shelter.`
          },
          {
            name: 'False',
            text: `Anthills are built by snakes as their shelters.
Doves and pigeons make their shelters and live in caves.
Bats build nests in old buildings.`
          }
        ]
      }
    }
  ]
};
