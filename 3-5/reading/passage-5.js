export default {
  label: 'Passage',
  id: 'passage-5',
  lockAfter: 2,
  list: [
    {
      id: 'horse',
      type: 'passage',
      label: 'Horse',
      style: 'big',
      data: {
        title: 'Horse',
        text: `Horses are magnificent creatures that have been our loyal companions for centuries. They are large, strong animals with a graceful and elegant presence.
Horses have a long history of working alongside humans. In the past, they were used for transportation, farming, and even in battles. Nowadays, they are mainly kept for recreational purposes such as horseback riding and racing. People of all ages enjoy spending time with horses, learning to ride and care for them.
A horse has a powerful body with four sturdy legs that help it run swiftly. It has a beautiful mane flowing down its neck and a long tail that swishes from side to side. Horses come in various colors and patterns, such as brown, black, white, and even spotted coats.
Riding a horse can be an exhilarating experience. It gives you a sense of freedom as you gallop through fields or trot along a forest trail. It's important to remember that horses are living beings and should always be treated with kindness and respect.`
      }
    },
    {
      label: 'Choose the correct answer',
      type: 'mcq',
      id: 'mcq-2',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'What were horses primarily used for in the past?',
            options: `Farming, Racing, Petting`
          },
          {
            qText: 'What is one characteristic of horses?',
            options: ` Graceful and elegant presence, Small and fragile body, Slow movement`
          },
          {
            qText:
              'What are some recreational purposes for keeping horses today?',
            options: `Horseback riding and racing
Farming and petting
Transportation and battles`
          },
          {
            qText: `Which of the following is NOT a common horse coat color?`,
            options: `Purple, Brown, Black, White`
          },
          {
            qText:
              'What should be the attitude towards horses when interacting with them?',
            options: `Kindness and respect
Indifference and neglect
Fear and avoidance`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag',
      type: 'matchByDragDrop',
      data: {
        text: `Horses are *elegant* creatures that have been our loyal *companions* for centuries. They are large, strong animals with a graceful and *powerful* presence. Riding a horse can be an exhilarating experience as you gallop through *fields* or trot along a forest trail. It's important to remember that horses should always be treated with kindness and *respect*.`
      }
    },
    {
      id: 'horse-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'html',
            text: `<b>Battle</b>: Armed conflicts between opposing forces. Horses were used in warfare throughout history, carrying soldiers and providing them with an advantage on the battlefield.<br><br>
<b>Recreational</b>: Activities done for enjoyment, relaxation, or fun. Horseback riding and racing are popular recreational activities that people of all ages enjoy.<br><br>
<b>Mane</b>: The long, thick hair that grows from the top of a horse's neck. It adds to the horse's beauty and can be styled in different ways.<br><br>
<b>Trot</b>: A gait in which a horse moves forward with two feet on the ground at the same time. It is a comfortable and steady pace.<br><br>
<b>Gallop</b>: A fast and powerful gait where a horse moves with all four feet off the ground in a jumping motion. It is the fastest gait of a horse.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'horse-word',
      data: {
        text: `Armed conflicts between opposing forces. Horses were used in warfare throughout history, carrying soldiers and providing them with an advantage on the battlefield.|BATTLE
Activities done for enjoyment, relaxation, or fun. Horseback riding and racing are popular recreational activities that people of all ages enjoy.|RECREATIONAL
The long, thick hair that grows from the top of a horse's neck. It adds to the horse's beauty and can be styled in different ways.|MANE
A gait in which a horse moves forward with two feet on the ground at the same time. It is a comfortable and steady pace.|TROT
A fast and powerful gait where a horse moves with all four feet off the ground in a jumping motion. It is the fastest gait of a horse.|GALLOP`
      }
    },
    {
      id: 'match',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Magnificent, Majestic
Loyal, Faithful
Companion, Friend
Farming, Agriculture
Recreational, Leisure`
      }
    },
    {
      id: 'match-2',
      label: 'Match: Antonyms',
      type: 'match',
      data: {
        title: `Match the antonym pairs.`,
        text: `Magnificent, Ordinary
Loyal, Disloyal
Companion, Enemies
Working, Idle
Recreational, Tedious`
      }
    },
    {
      id: 'dinosaur',
      type: 'passage',
      label: 'Dinosaur',
      style: 'big',
      data: {
        title: 'Dinosaur',
        text: `Dinosaurs lived on earth millions of years ago. No one knows what they looked like. But based on bones and skeletons from the past, scientists assumed their body structure. 
They were of different sizes. Some were very small while some were very huge. Some of them even had wings to fly. Some also lived in the sea. 
We still have no idea what sounds dinosaurs used to make. Based on their body sizes, scientists have also assumed their voices. We can hear their voices in a lot of movies made about dinosaurs.      
Apart from being diverse in their body structures, the species were also different in their eating habits. Some were herbivores, some were carnivores and some were omnivores. 
It has been found that dinosaurs became extinct about 65 million years ago. A meteor from space hit the Earth. It led to the death of the species.`
      }
    },
    {
      label: 'Choose the correct answer',
      type: 'mcq',
      id: 'mcq-4',
      data: {
        title: 'Multiple Choice Questions',
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
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-dino',
      type: 'matchByDragDrop',
      data: {
        text: `Dinosaurs had diverse *structures* and sizes.
Some dinosaurs were herbivores, which means they only ate *plants*.
Scientists have assumed the body *assumed* of dinosaurs based on bones and skeletons.
The meteor impact caused the dinosaurs to go *extinct*.
Carnivores are animals that primarily eat *meat*.`
      }
    },
    {
      id: 'dino-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'html',
            text: `<b>Dinosaur</b>: Prehistoric reptiles that lived millions of years ago.<br><br>
<b>Skeleton</b>: The rigid framework of bones that supports the body of an organism.<br><br>
<b>Assume</b>: To suppose or take for granted without evidence.<br><br>
<b>Herbivores</b>: Animals that primarily eat plants and vegetation.<br><br>
<b>Carnivores</b>: Animals that primarily eat other animals.<br><br>
<b>Omnivores</b>: Animals that eat both plants and other animals.<br><br>
<b>Extinct</b>: No longer in existence.<br><br>
<b>Meteor</b>: A small celestial body that enters Earth's atmosphere and may reach the ground as a meteorite.<br><br>
<b>Species</b>: A distinct type or category of organisms.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'dino-word',
      data: {
        text: `Prehistoric reptiles that lived millions of years ago.|DINOSAUR
The rigid framework of bones that supports the body of an organism.|SKELRTON
To suppose or take for granted without evidence.|ASSUME
Animals that primarily eat plants and vegetation.|HERBIVORES
Animals that primarily eat other animals.|CARNIVORES
Animals that eat both plants and other animals.|OMNIVORES
No longer in existence.|EXTINCT
A small celestial body that enters Earth's atmosphere and may reach the ground as a meteorite.|METEOR
A distinct type or category of organisms.|SPECIES`
      }
    },
    {
      id: 'match-6',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Assumed, Speculated
Huge, Enormous
Voice, Sound
Look, See
Prehistoric, Ancient`
      }
    },
    {
      id: 'match-7',
      label: 'Match: Antonyms',
      type: 'match',
      data: {
        title: `Match the antonym pairs.`,
        text: `Assumed, Verified
Huge, Tiny
Winged, Wingless
Soft, Hard
Prehistoric, Modern`
      }
    },
    {
      id: 'bee',
      type: 'passage',
      label: 'Busy Bee',
      style: 'big',
      data: {
        title: 'Busy Bee',
        text: `The busy bee is a small but remarkable insect that plays a vital role in our ecosystem. Bees are known for their hard work and industrious nature. They are constantly buzzing around, gathering nectar from flowers and pollinating plants as they go.
Bees live in organized colonies called hives. Within the hive, each bee has a specific role to fulfill. The worker bees, which are all females, are responsible for gathering nectar, pollen, and water. They fly from flower to flower, collecting nectar using their long tongues. 
Back at the hive, worker bees convert the nectar into honey. Honey serves as their main food source and is also stored for future use. These incredible insects can produce and store a substantial amount of honey, which not only sustains their colony but also provides us with a sweet treat.
Unfortunately, bees face numerous challenges, including habitat loss, pesticide exposure, and diseases. It's important for us to protect and support these amazing creatures. Planting bee-friendly flowers, avoiding the use of harmful pesticides, and creating bee-friendly habitats can all contribute to their well-being.`
      }
    },
    {
      label: 'Choose the correct answer',
      type: 'mcq',
      id: 'mcq-4',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'What is the main role of bees in the ecosystem?',
            options: `Pollinating plants, Building hives, Creating honey`
          },
          {
            qText: 'Where do bees live?',
            options: `Hives, Nests, Caves, Trees`
          },
          {
            qText: 'What creature sought shelter on the mossy rock?',
            options: `A snail, A beetle, An earthworm`
          },
          {
            qText: `Which bees are responsible for gathering nectar, pollen, and water?`,
            options: ` Worker bees, Drones, Male bees`
          },
          {
            qText: 'How do bees collect nectar from flowers?',
            options: `By using their long tongues
By biting the flowers
By sucking the flowers' petals`
          },
          {
            qText: 'What do worker bees convert nectar into?',
            options: `Honey, Royal Jelly, Wax`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-bee',
      type: 'matchByDragDrop',
      data: {
        text: `Bees play a crucial role in *pollinating* plants by transferring pollen from flower to flower.
The worker bees in a colony are incredibly *industrious*, constantly gathering nectar and pollen.
Bees store their food, such as *honey*, in the *hive*.
Bees are highly dependent on a healthy *habitat* to survive.
It's important to avoid using harmful *pesticides* that can harm bees and other pollinators.`
      }
    },
    {
      id: 'bee-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'html',
            text: `<b>Nectar</b>: A sweet liquid produced by flowers, attracting insects for pollination.<br><br>
<b>Pollinate</b>: The transfer of pollen from the male reproductive organs to the female reproductive organs of plants, resulting in fertilization.<br><br>
<b>Hive</b>: A structure where bees live and store honey, consisting of cells and compartments.<br><br>
<b>Pollen</b>: Fine powdery substance produced by the male reproductive organs of flowering plants.<br><br>
<b>Honey</b>: A sweet, sticky substance produced by bees from flower nectar, used as food and stored in hives.<br><br>
<b>Pollination</b>: The transfer of pollen from the male reproductive organs to the female reproductive organs of plants, resulting in fertilization.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'bee-word',
      data: {
        text: `A sweet liquid produced by flowers, attracting insects for pollination.|NECTAR
The transfer of pollen from the male reproductive organs to the female reproductive organs of plants, resulting in fertilization.|POLLINATE
A structure where bees live and store honey, consisting of cells and compartments.|HIVE
Fine powdery substance produced by the male reproductive organs of flowering plants.|POLLEN
A sweet, sticky substance produced by bees from flower nectar, used as food and stored in hives.|HONEY
The transfer of pollen from the male reproductive organs to the female reproductive organs of plants, resulting in fertilization.|POLLINATION`
      }
    },
    {
      id: 'match-8',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Small, Tiny
Remarkable, Extraordinary
Insect, Bug
Gather, Collect
Hard work, Diligent`
      }
    },
    {
      id: 'match-9',
      label: 'Match: Antonyms',
      type: 'match',
      data: {
        title: `Match the antonym pairs.`,
        text: `Small, Large
Remarkable, Ordinary
Gather, Disperse
Organized, Chaotic`
      }
    },
    {
      id: 'vulture',
      type: 'passage',
      label: 'Vulture',
      style: 'big',
      data: {
        title: 'Vulture',
        text: `The vulture, often overlooked and misunderstood, plays a vital role in our ecosystem as nature's unassuming recycler. These magnificent birds, are known for their scavenging habits and distinct appearance. With a wingspan that can reach up to 10 feet and a bald head, vultures are uniquely adapted to their scavenger lifestyle.
They possess excellent eyesight, allowing them to spot carcasses from great distances. Once they locate a meal, vultures use their powerful beaks to tear through tough animal hides, exposing the decaying flesh. Their bald heads are a practical adaptation, preventing bacteria-infested remains from sticking to their feathers.
These scavengers serve a crucial ecological role by preventing the spread of disease. By efficiently disposing of animal carcasses, they reduce the risk of pathogens contaminating the environment. Their stomachs are highly acidic, enabling them to digest bacteria, viruses, and toxins that would prove fatal to other animals.
Despite their vital contributions, vultures face numerous threats. Habitat loss, poisoning from toxic chemicals used in agriculture, and illegal wildlife trade have led to a decline in vulture populations worldwide. This decline is alarming, as it disrupts the balance of ecosystems and poses risks to human health.`
      }
    },
    {
      label: 'Choose the correct answer',
      type: 'mcq',
      id: 'mcq-5',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'What is the primary role of vultures in the ecosystem?',
            options: `Scavenging and recycling
Preying on small mammals
Seed dispersal`
          },
          {
            qText: 'How do vultures locate carcasses?',
            options: `Excellent eyesight
Echo-location
Magnetic field detection`
          },
          {
            qText: 'What is the purpose of vultures bald heads?',
            options: `A practical adaptation to prevent bacteria-infested remains from sticking to their feathers
Enhanced hearing capabilities
Protection against predators`
          },
          {
            qText: `What do vultures do to reduce the spread of disease?`,
            options: `Dispose of animal carcasses efficiently
Prey on insects that carry diseases
Spread carcasses over a large area`
          },
          {
            qText: 'What are the threats faced by vultures?',
            options: `Climate change and habitat loss
Overpopulation leading to resource scarcity
Predation by larger birds of prey`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-vulture',
      type: 'matchByDragDrop',
      data: {
        text: `Vultures are *scavenging* birds that feed on carrion.
Vultures excellent *eyesight* allows them to spot carcasses from great distances.
With their powerful beaks, vultures can tear through tough animal hides and expose the *decaying* flesh.
Vultures' stomachs are highly *acidic*, enabling them to digest bacteria, viruses, and toxins.
The decline in vulture populations is a result of habitat *loss*, poisoning, and illegal wildlife *trade*.`
      }
    },
    {
      id: 'vulture-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'html',
            text: `<b>Scavenging</b>: Act of finding and consuming dead animals.<br><br>
<b>Eyesight</b>: Ability to see.<br><br>
<b>Decaying</b>: Breaking down or rotting.<br><br>
<b>Acidic</b>: Having a high level of acid.<br><br>`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'vulture-word',
      data: {
        text: `Act of finding and consuming dead animals.|SCAVENGING
Ability to see.|EYESIGHT
Breaking down or rotting.|DECAYING
Having a high level of acid.|ACIDIC`
      }
    },
    {
      id: 'parrot',
      type: 'passage',
      label: 'Parrot',
      style: 'big',
      data: {
        title: 'Parrot',
        text: `Parrots are captivating creatures that have long held a special place in human society. With their vibrant plumage and impressive ability to mimic speech, they are both beautiful and intelligent companions. 
One of the most striking features of parrots is their colorful appearance. With feathers ranging from brilliant blues and vibrant yellows to fiery reds and lush greens, parrots are nature's own vibrant palette.
Another remarkable aspect of parrots is their ability to imitate sounds and human speech. Their vocal talents are unparalleled in the animal kingdom. Parrots can mimic various sounds, from the ringing of a telephone to the melody of a favorite song.
Beyond their visual and vocal appeal, parrots are highly intelligent creatures. They possess a remarkable capacity for problem-solving and learning. Their intelligence enables them to adapt to their surroundings and form social bonds with humans. 
Parrots thrive on mental stimulation, which is why they require engaging toys and regular interaction with their human caregivers. The bond between a parrot and its owner can be incredibly strong, creating a lifelong companionship.`
      }
    },
    {
      label: 'Choose the correct answer',
      type: 'mcq',
      id: 'mcq-6',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'What makes parrots captivating companions?',
            options: `Their ability to mimic speech
Their colorful appearance
Their intelligence
*All of the above`
          },
          {
            qText: 'What is one of the most striking features of parrots?',
            options: `Their vibrant plumage
Their intelligence
Their adaptability`
          },
          {
            qText: "What is unique about parrots' vocal talents?",
            options: `They can mimic various sounds
They can speak multiple languages
They have the loudest voice among birds`
          },
          {
            qText: `What enables parrots to form social bonds with humans?`,
            options: `Their intelligence, Their colorful appearance, Speech`
          },
          {
            qText: 'What do parrots thrive on?',
            options: `Mental stimulation
Social interaction with other birds
Solitary activities`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-parrot',
      type: 'matchByDragDrop',
      data: {
        text: `Parrots have the unique ability to *mimic* human speech.
The intelligence of parrots is *unparalleled* in the animal kingdom.
Parrots are known for their * problem-solving* skills, always finding clever solutions.
Parrots require mental *stimulation* to stay engaged and entertained.
The *companionship* between a parrot and its owner can be very strong.`
      }
    },
    {
      id: 'parrot-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'html',
            text: `<b>Captivating</b>: Extremely interesting and attractive.<br><br>
<b>Plumage</b>: The feathers or covering of a bird.<br><br>
<b>Mimic</b>: Imitating or copying someone or something.<br><br>
<b>Unparalleled</b>: Without equal or parallel; incomparable.<br><br>
<b> Adapt</b>: Adjusting or changing to fit new circumstances.<br><br>
<b>Remarkable</b>: Extraordinary; deserving attention or admiration.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'parrot-word',
      data: {
        text: `Extremely interesting and attractive.|CAPTIVATING
The feathers or covering of a bird.|PLUMAGE
Imitating or copying someone or something.|MIMIC
Without equal or parallel; incomparable.|UNPARALLELED
Adjusting or changing to fit new circumstances.|ADAPT
Extraordinary; deserving attention or admiration.|REMARKABLE`
      }
    }
  ]
};
