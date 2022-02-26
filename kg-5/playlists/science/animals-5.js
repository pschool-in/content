export default {
  id: 'animals-5',
  label: 'Adaptation in Animals',
  lockAfter: 4,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Adaptation in Animals',
        text: `Adaptation is the most essential factor of all living beings. The changes in an animal's behaviour to adjust with its habitat is called adaptation. If an organism fails to adapt to the particular environment, its survival is difficult.
All animals have special body parts to live in a particular place at a particular time. 
For example, giraffes have developed very long necks because of their environmental demands. Tigers and Zebras have lines so they can hide themselves. Camels have broad feet to walk in the desert. Fish have gills to breathe in the water and fins to swim.
There are three basic types of adaptations seen in animals. They are,
# Structural adaptations
Changes in the physical features of the animal are called structural adaptations. For example, polar bears living in cold climate have physical adaptations, such as thick fur and short ears to reduce heat loss.
# Physiological adaptations
Changes in the functions of the animal's body are called physiological adaptations. E.g. Dog shivers to generate more heat when it is cold and pants when it is hot.
# Behavioural adaptations
Changes in the activities of the animal are behavioural adaptations. Birds migrate to avoid adverse conditions.
Porcupines have thorns on their body to fight against their enemies. Alligators have sensitive skin which can feel even small vibrations in water.`
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-adapt',
      data: [
        `Thick fur in polar bears is a *structural* adaptation.
        Dogs panting is a *physiological* adaptation.
        Birds migrating is a *behavioural* adaptation.
        Fish have *gills* to breathe in the water and *fins* to swim.`,

        `*Camels* have broad feet.
        *Porcupines* have thorns on their body.
        *Alligators* have sensitive skin.
        *Birds* move from one place to another to avoid unfavourable climate.
        *Zebras* have stripes on their body.`
      ]
    },
    {
      id: 'match-adaptation',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Thorns, Porcupines
        Alligators, Sensitive skin
        Polar Bear, Short ears
        Giraffe, long neck
        Camels, broad feet`
      }
    },
    {
      label: 'True or False',
      id: 'true-false-adopt',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `Polar bear has short ears.
            Dog shivers to generate more heat.
            Adaptations can be classified into three basic types.
            If an organism fails to adapt to the particular environment, its survival is difficult.`
          },
          {
            name: 'False',
            text: `Fish have gills to swin.
            Alligators have thick skins and cannot feel the vibrations in water.`
          }
        ]
      }
    },
    {
      label: 'Choose the Right Answer',
      id: 'mcq-adapt',
      type: 'mcq',
      data: {
        questions: [
          {
            qText:
              'Dogs keeping its tongue out and panting is a _______ adaptation.',
            options: 'physiological, behavioural, structural'
          },
          {
            qText:
              'Porcupines have thorns on their body to fight against their enemies. It is a _______ adaptation.',
            options: 'structural, physiological, behavioural'
          },
          {
            qText: 'Why do polar bears have short ears?',
            options: `To keep the body heat within the body.
            To avoid insects from entering the ears.
            To protect themselves from cold weather.`
          },
          {
            qText: 'Which of the following can travel long distance?',
            options: 'Birds, Tiger, Deer, Fish'
          },
          {
            qText: 'Alligators have sensitive skin which can ______  in water.',
            options: `feel even small vibrations
            see even small objects
            feel even far away animals`
          }
        ]
      }
    },
    {
      label: 'Structure of Insects - Notes',
      type: 'passage',
      id: 'notes-2',
      data: {
        title: 'Structure of Insects',
        text: `Insects have three main body regions. They are head, thorax and abdomen. All parts of the insect are inside an exoskeleton.
        # Head
        The main visible parts on the head are the large compound eyes, the antennae (feelers) and the mouth parts.
        # Thorax
        The thorax is the middle region of the body. It bears three pairs of legs and two pairs of wings.
        # Abdomen
        The abdomen is the last part of the insect body. Abdomen of most of the insects have clear segmentation.
        # Many types of Insects
        Insects have differences in structures like wings, legs, antennae and mouthparts. The legs are modified for walking, jumping, digging or swimming.
        Most of the insects have wings which can be folded flat over their body. Eg: bug
        There are some insects which cannot fold their wings. Eg: dragonfly. Some insects are wingless. eg: ant, silverfish
        The compound eyes of insects are made up of small units called ommatidia.
        Insects use the antennae to smell and feel the surface.`
      }
    },
    {
      id: 'drag-drop',
      label: 'Parts of an Insect',
      type: 'dragAndDrop',
      data: {
        img: 'insect.jpg',
        title: 'Parts of an Insect',
        width: 350,
        height: 371,
        wordWidth: 70,
        words: [
          {
            word: 'antenna',
            x: 50,
            y: 30
          },
          {
            word: 'simple eye',
            x: 130,
            y: 70
          },
          {
            word: 'compound eye',
            x: 230,
            y: 60
          },
          {
            word: 'front wing',
            x: 260,
            y: 120
          },
          {
            word: 'hind wing',
            x: 260,
            y: 270
          },
          {
            word: 'leg',
            x: 200,
            y: 310
          },
          {
            word: 'abdomen',
            x: 10,
            y: 245
          },
          {
            word: 'thorax',
            x: 10,
            y: 170
          },
          {
            word: 'head',
            x: 10,
            y: 130
          }
        ]
      }
    },
    {
      label: 'Choose the Right Answer',
      id: 'mcq-insects',
      type: 'mcq',
      data: {
        questions: [
          {
            qText: 'Which body part in insects is usually segmented?',
            options: 'abdomen, thorax, head, wings'
          },
          {
            qText: 'The wings are connected to the body at ____.',
            options: 'thorax, abdomen, legs'
          },
          {
            qText: `Which insect doesn't have foldable wings?`,
            options: 'dragonfly, housefly, bug'
          },
          {
            qText:
              'What is the body part that connects the head and the abdomen?',
            options: 'thorax, ribs, legs, wings'
          }
        ]
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-insect',
      data: {
        text: `Like any insects, butterfly has *three* body parts. It has *four* wings and *six* legs, attched to the *throax*. It uses its two *antennae* to smell.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false-insect',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `The legs and wings are attached to thorax.
            All parts of an insect are inside an exoskeleton.`
          },
          {
            name: 'False',
            text: `All insects can fly.
            The thorax region is segmented.
            Insects use the antennae to drink water.`
          }
        ]
      }
    },
    {
      label: 'Special Senses - Notes',
      type: 'passage',
      id: 'notes-special-senses',
      data: {
        title: 'Special senses',
        text: `Some animals have well developed special senses. These special senses help the animals experience the world around them.
Ants have sense of sight, smell, taste and touch. Ants have organs of smell and taste in their antennae. They feel the vibrations in the ground through their feet.
Place a few sugar cubes in a plate. After sometime, you can see some ants visiting the plate.
Adding sugar to your cat's food is of no use, because cats cannot taste sweetness.
Most snakes have poor eyesight. Snakes use their tongue to smell their surrounding.
Bats have a good sense of hearing. They use sound navigation. They produce ultrasonic sound which helps the bats find their way at night and find out the objects on their path. This is called 'Echolocation'.
Vampire bats feed on the blood of their prey. Vampire bats have heat-detecting noses which allow them to find their prey.
# Nocturnal animals
Some animals sleep in the day time and are very active at night. A good example is cat at your home. Such animals are called Nocturnal animals. Eg: owl, bat, mouse, firefly, moth 
Animals that are active during day time are known as diurnal animals. Eg: hen, horse, camel
Lions are active both during day and night.
Nocturnal creatures generally have highly developed senses of hearing, smell, and specially adapted eyesight.`
      }
    },
    {
      label: 'Choose the Right Answer',
      id: 'mcq-sense',
      type: 'mcq',
      data: {
        questions: [
          {
            qText: 'Bats have good sense of _______.',
            options: 'hearing, smelling, seeing'
          },
          {
            qText: 'Snakes uses their ______ to smell their surrounding.',
            options: 'tongue, nose, ears, eyes'
          },
          {
            qText: 'For what purposes, an ant uses its antennae?',
            options: `* To smell
            * To taste
            To feel the vibrations in the ground`
          },
          {
            qText: 'Which animal is active both day and night?',
            options: 'lion, cow, owl'
          },
          {
            qText: 'Which animal produce ultrasonic sound?',
            options: 'Bat, Owl, Vampire'
          }
        ]
      }
    },
    {
      label: 'Nocturnal Animal',
      id: 'classify-1',
      type: 'group',
      data: {
        title: 'Classify the below animals.',
        types: [
          {
            name: 'Nocturnal',
            text: 'Owl, Bat, Mouse, Cat, Cockroach'
          },
          {
            name: `not a Nocturnal`,
            text: 'Horse, Cow, Donkey, Hen, Eagle'
          }
        ]
      }
    },
    {
      label: 'Parental Care - Notes',
      type: 'passage',
      id: 'notes-4',
      data: {
        title: 'Parental Care',
        text: `Efforts taken by the adult to take care of their young ones is called Parental care.
Parental care increases the survival rate and improves the quality of young one. It also increases the reproductive success of animals.
# Kangaroo
Kangaroo is best known for parental care. Female kangaroo carries its baby in its pouch. The pouch provides a safe place for the young ones to stay until they grow large enough to survive outside on their own.
# Cow
Cow gives milk and protects its calf from the enemies. Mother and calf communicate with each other through a sound. Calves respond to the calls from their own mother by calling back.
# Human beings
Humans promote and support the physical, emotional, social and intellectual development of their child. The human infant or baby is completely helpless at birth. Mother takes good care of the baby by feeding, helping to sleep and making comfortable with clothes etc. Through proper parenting the child is taught whatever needed to live successfully in the society.`
      }
    }
  ]
};
