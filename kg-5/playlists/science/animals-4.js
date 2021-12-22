export default {
  id: 'animals-4',
  label: 'Animals 4',
  lockAfter: 4,
  list: [
    {
      label: 'The Life Cycle of Animals - Reading',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'The Life Cycle of Animals',
        text: `In animals, the babies either grow in their mother's tummy or hatch out of the eggs. Some animals like crows, spiders, and lizards lay eggs. Unlike a chicken, their eggs are tiny. Some animals lay eggs that are too tiny to be observed with naked eyes.
  # Hen
  A hen lays eggs. The warmth which is provided by the hen to her eggs helps the chick inside the egg to grow. After the full growth, the chick breaks the eggshell and comes out.
  Unlike, a chick which does not look very different from a hen, in some animals, the young one grows into an adult animal that looks very different from the young one. This change of form is called metamorphosis.
  # Butterfly
  A butterfly has to go through various stages of growth, unlike other animals. These stages are egg, larva, pupa, and adult. The adult stage is called the butterfly. All the butterflies have to go through these four stages.`,
      },
    },
    {
      label: 'Egg-laying Vs Non-egg laying',
      id: 'classify-1',
      type: 'group',
      data: {
        title:
          'Classify the below animals on the basis of whether they lay eggs or not',
        types: [
          {
            name: 'Lay eggs',
            text: 'Hen, Spider, Frog, Snake, Crow',
          },
          {
            name: 'do not lay eggs',
            text: 'Cat, Dog, Horse, Cow, Donkey',
          },
        ],
      },
    },
    {
      id: 'match',
      label: 'Animals & their babies - Match the following',
      type: 'match',
      data: {
        text: `Cat, Kitten
Dog, Puppy
Butterfly, Caterpillar
Goat, Lamb
Lion, Cub
Horse, Foal`,

        title: 'Match the babies',
      },
    },
    {
      label: 'Choose the best Answer - Animal life cycle',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              ' Which one of the following is not the stage of butterfly growth?',
            options: 'None of the options, Egg, Larva, Pupa, Adult',
          },
          {
            qText: 'Where does Plain Tiger Butterfly lay her egg?',
            options:
              'Milkweed (Rui) leaf, Mulberry leaf, Mango leaf, Maple leaf',
          },
          {
            qText: 'What is the pupa of a butterfly called?',
            options: 'Chrysalis, Shell, Budding, Larva',
          },
          {
            qText: 'The process of the change of form is known as ___________.',
            options:
              'Metamorphosis, Photosynthesis, Metagenesis, Crystallization',
          },
          {
            qText: 'The larva of a butterfly is called?',
            options: 'Caterpillar, Pupa, Worm, Stalk',
          },
        ],
      },
    },
    {
      label: 'Drag and Drop - Animals Lifecycle',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80,
        },
        text: `The four stages of butterfly growth are egg, larva, *pupa*, and adult.
In some animals, the young ones look very different from the adult form, this change in the form is called *metamorphosis*.
Animals like *ants*, snakes, frogs, and crow lay eggs.
There are many *differences* between the caterpillar and butterfly.
A butterfly lays eggs on the *leaves* of a plant.
*Moult* means to shed old skin to make way for new growth.`,
      },
    },
    {
      id: 'fillup',
      label: 'Animal Lifecycle - Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `All the butterflies have to undergo *four (five)* stages of growth.
It takes *six to eight weeks (nine to twelve)* for the larva to emerge from the egg.
When the caterpillar comes out of the egg it *is (is not)* very hungry.
A Spider lays *tiny (big)* eggs.
A butterfly during its growth remains in the caterpillar stage for *ten to twelve days (two to three days)*.`,
      },
    },
    {
      label: 'Animal Lifecycle - True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `The pupa of a butterfly is also called a chrysalis.
A butterfly has four attractive wings and six long legs.
Different types of caterpillars are of different colors.`,
          },
          {
            name: 'False',
            text: `For each type of butterfly, the type of plant on whose leaves its female will lay eggs is not fixed.
In three to four days, the larva emerges from the egg.`,
          },
        ],
      },
    },
    {
      label: 'Complete the life cycle',
      type: 'sorting',
      id: 'sorting',
      commonData: {
        title: 'Sort the lifecycle starting with Egg',
        multiple: true,
        fontSize: '2rem',
      },
      data: [
        `Egg, Tadpole, Tadpole with legs, Young frog, Adult frog`,
        `Egg, Caterpillar, Chrysalis, Butterfly`,
        `Egg, Embryo, Hatching, Chick, Chicken`,
      ],
    },
    {
      label: 'Life Journey of Animals - Reading',
      type: 'passage',
      id: 'reading-2',
      data: {
        title: 'Life Journey of Animals',
        text: `Each animal has some unique behaviour. Animal behaviour includes the activities of an animal and its interaction with other organisms.
  # Group Behaviour in Animals
  Animals gain a lot of benefits from spending time together with other members of the same species. This is called group behaviour. Honey bees live together in a group and follow a hierarchy. Bees have one queen bee in every hive. There are a few male bees called drones. There are hundreds of female bees, which are the worker bees.
  In birds, Some birds permanently live in groups while others come together only during the breeding season. Not all the bird species build nests. Some of them lay their eggs on the ground or in gap between rocks.
  Elephant group is called Herd or Parade. For each group there is a female head, which leads the group towards the availability of food, water and safety.
  # Adaptation in Animals
  The changes in an animal's behaviour to adjust with its habitat is called adaptation. There are three types of adaptations:
  Changes in the physical features of the animal are called structural adaptations. Changes in the functions of the animal‛s body are called physiological adaptations. Changes in the activities of the animal are behavioural adaptations.
  # Structure of Insects
  Insects have three main body regions. They are:
  The main visible parts on the head are the large compound eyes, the antennae (feelers) and the mouth parts. The thorax is the middle region of the body. Abdomen The abdomen is the last part of the insect body. `,
      },
    },
    {
      label: 'Lives Alone Vs Group',
      id: 'classify-3',
      type: 'group',
      data: {
        title:
          'Classify the below animals on whether they live alone or in groups.',
        types: [
          {
            name: 'Alone',
            text: 'Tiger, Bear, Leopard, Mole, Sloth',
          },
          {
            name: 'Group',
            text: 'Elephants, Wolf, Whale, Sheep, Deer',
          },
        ],
      },
    },
    {
      label: 'Nocturnal Vs Diurnal',
      id: 'classify-4',
      type: 'group',
      data: {
        title:
          'Classify the below animals on the basis of their nocturnal behaviour..',
        types: [
          {
            name: 'Nocturnal',
            text: 'Cat, Mouse, Firefly, Owl, Bat, Moth',
          },
          {
            name: 'Diurnal',
            text: 'Dog, Cow, Horse, Sheep, Sparrow, Crow',
          },
        ],
      },
    },
    {
      label: 'Fur Vs No Fur',
      id: 'classify-5',
      type: 'group',
      data: {
        title: 'Classify the below animals based on the presence of fur.',
        types: [
          {
            name: 'Fur',
            text: 'Fox, Rabbit, Sheep, Polar Bear, Beaver',
          },
          {
            name: 'No Fur',
            text: 'Zebra, Dog, Fish, Frog, Snake',
          },
        ],
      },
    },
    {
      id: 'match-2',
      label: 'Animals & their groups - Match the following',
      type: 'match',
      data: {
        text: `Lion, Pride
Wolf, Pack
Sheep, Flock
Ant, Colony
Owl, Parliament`,
        title: 'Match the Animal with their group name',
      },
    },
    {
      label: 'Drag and Drop - Interesting facts about animals',
      type: 'matchByDragDrop',
      id: 'drag-drop-3',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80,
        },
        text: `The animals which are active at night are called *Nocturnal* animals.
*Kangaroo* is best known for parental care.
*Honeybees* lives in hives.
The human *baby* is completely helpless at birth.
Animals that are active during day time are known as *Diurnal* animals.`,
      },
    },
    {
      id: 'fillup-3',
      label: 'Animal Shelter - Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `*Nocturnal (Diurnal)* creatures have highly developed senses of hearing, smell, and eyesight.
*Cow (Sheep)* gives milk and protects its calf from the enemies.
*Humans (Kangaroo)* support the physical, emotional, social and intellectual development of their child.
The compound eyes of insects are made up of small units called *ommatidia (proboscis)*.
The *thorax (abdomen)* is the middle region of an insect body.`,
      },
    },
    {
      label: 'Choose the best Answer - Some Animal facts ',
      id: 'mcq-3',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' What is the group of parrots called?',
            options: 'Flock, Pride, Parliament, herd',
          },
          {
            qText: 'Which of the following is associated with group of cranes?',
            options: 'Stare, Hive, Shoal, Pack',
          },
          {
            qText:
              'The changes in an animal behaviour to adjust with its habitat is called _________.',
            options: 'Adaptation, Metamorphosis, Fertilisation, Parenting',
          },
          {
            qText: 'Which organ does a fish use to breathe in water?',
            options: 'Gills, Lungs, Skin, Tougue',
          },
          {
            qText:
              'Bats use ultrasonic sounds to find their way in dark and detect objects. This is called ____.',
            options: 'Echolocation, Navigation, Adaptation, Nocturnal',
          },
        ],
      },
    },
    {
      label: 'Interesting facts on animals  - True or False',
      id: 'true-false-3',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Vampire bats feed on the blood of their prey.
Female kangaroo carries its baby in its pouch.
Ants have organs of smell and taste in their antennae.`,
          },
          {
            name: 'False',
            text: `Birds do not migrate from their shelters to avoid adverse conditions.
A group of elephants is known as herd.
All the species of birds build nests for their shelters.`,
          },
        ],
      },
    },
    {
      id: 'words',
      type: 'sequence',
      label: 'Words related to Animal world',
      commonData: {
        title: 'connect the letter to create word',
      },
      data: [`PRIDE , THORAX , DIURNAL , FLOCK , TRUNK`],
    },
  ],
};
