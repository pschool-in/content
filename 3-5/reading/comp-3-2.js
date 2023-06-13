export default {
  label: 'Comprehension-2',
  id: 'comprehension-3-2',
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
            type: 'hilight',
            text: `Battle: Armed conflicts between opposing forces. Horses were used in warfare throughout history, carrying soldiers and providing them with an advantage on the battlefield.
Recreational: Activities done for enjoyment, relaxation, or fun. Horseback riding and racing are popular recreational activities that people of all ages enjoy.
Mane: The long, thick hair that grows from the top of a horse's neck. It adds to the horse's beauty and can be styled in different ways.
Trot: A gait in which a horse moves forward with two feet on the ground at the same time. It is a comfortable and steady pace.
Gallop: A fast and powerful gait where a horse moves with all four feet off the ground in a jumping motion. It is the fastest gait of a horse.`
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
            type: 'hilight',
            text: `Dinosaur: Prehistoric reptiles that lived millions of years ago.
Skeleton: The rigid framework of bones that supports the body of an organism.
Assume: To suppose or take for granted without evidence.
Herbivores: Animals that primarily eat plants and vegetation.
Carnivores: Animals that primarily eat other animals.
Omnivores: Animals that eat both plants and other animals.
Extinct: No longer in existence.
Meteor: A small celestial body that enters Earth's atmosphere and may reach the ground as a meteorite.
Species: A distinct type or category of organisms.`
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
            type: 'hilight',
            text: `Nectar: A sweet liquid produced by flowers, attracting insects for pollination.
Pollinate: The transfer of pollen from the male reproductive organs to the female reproductive organs of plants, resulting in fertilization.
Hive: A structure where bees live and store honey, consisting of cells and compartments.
Pollen: Fine powdery substance produced by the male reproductive organs of flowering plants.
Honey: A sweet, sticky substance produced by bees from flower nectar, used as food and stored in hives.
Pollination: The transfer of pollen from the male reproductive organs to the female reproductive organs of plants, resulting in fertilization.`
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
      id: 'friends',
      type: 'passage',
      label: 'The Beauty of Friendship',
      style: 'big',
      data: {
        title: 'The Beauty of Friendship',
        text: `In the African savannah, a mongoose and a hornbill formed an incredible friendship. Despite being different species, they shared an unbreakable bond that amazed everyone.
The mongoose was a small, agile mammal with excellent hunting skills. It would scurry through the grass, searching for prey like rodents and insects. The hornbill, a magnificent bird, soared through the sky, always on the lookout for food.
One day, the mongoose found itself in danger, cornered by a venomous snake. The hornbill quickly intervened, using its beak to distract the snake and save the mongoose. Together, they defeated the snake and became inseparable friends.
They explored the savannah, helping each other find food and stay safe. The mongoose dug up insects while the hornbill searched for fruits and seeds. They communicated through calls and chirps, a language unique to their friendship.
Their bond went beyond survival. They spent time grooming each other, strengthening their connection. They played together, hopping and flying in joy. Their friendship showed that differences don't matter when it comes to true connection.
The mongoose and hornbill taught us the beauty of friendship.`
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
            qText: 'What type of animal is the mongoose?',
            options: `Mammal, Reptile, Insect`
          },
          {
            qText:
              'How did the hornbill help the mongoose when it was in danger?',
            options: `It attacked the snake with its beak.
It ignored the situation.
It joined the snake in attacking the mongoose.`
          },
          {
            qText:
              'What did the mongoose and hornbill do to communicate with each other?',
            options: `They used calls and chirps.
They didn't communicate.
They used their sense of smell.`
          },
          {
            qText: `How did the mongoose and hornbill help each other find food?`,
            options: `The mongoose dug up insects while the hornbill searched for fruits and seeds.
The hornbill dug up insects.
They didn't help each other.`
          },
          {
            qText: "What did the mongoose and hornbill's friendship teach us?",
            options: `True connection can bridge differences.
Friends should always play together.
Friendship is not important.`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-friend',
      type: 'matchByDragDrop',
      data: {
        text: `The mongoose and hornbill shared an *unbreakable* bond.
The mongoose is known for its *agile* hunting skills.
The hornbill soared through the sky, always on the *lookout* for food.
The hornbill *intervened* when it saw the mongoose in danger.
Their friendship went beyond *survival*, as they spent time grooming each other.`
      }
    },
    {
      id: 'friend-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: `Unbreakable: Impossible to break or separate.
Prey: An animal that is hunted and eaten by another animal.
Agile: Able to move quickly and easily.
Magnificent: Extremely beautiful or impressive.
Intervened: To come between or interrupt something.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'friend-word',
      data: {
        text: `Impossible to break or separate.|UNBREAKABLE
An animal that is hunted and eaten by another animal.|PREY
Able to move quickly and easily.|AGILE
Extremely beautiful or impressive.|MAGNIFICENT
To come between or interrupt something.|INTERVENED`
      }
    },
    {
      id: 'match-10',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Magnificent, Splendid
Danger, Peril
Explore, Discover
Unique, Distinct
Division, Separation`
      }
    },
    {
      id: 'match-11',
      label: 'Match: Antonyms',
      type: 'match',
      data: {
        title: `Match the antonym pairs.`,
        text: ` Danger, Safety
Explore, Avoid
Unique, Common
Division, Unity`
      }
    },
    {
      id: 'donkey',
      type: 'passage',
      label: 'Donkey and Man',
      style: 'big',
      data: {
        title: 'Donkey and Man',
        text: `In a small village, there was a man who owned a donkey. The donkey helped the man with his work and carried heavy loads. However, the donkey often felt tired and longed for a break.
One hot day, they were walking together when the donkey saw a pond. Without thinking, the donkey ran towards it, leaving the man behind. The man became angry and tried to pull the donkey away, but the donkey refused to move and drank from the pond.
After some time, the man realized his anger was pointless. He decided to rest and observe the donkey. To his surprise, the donkey seemed refreshed after drinking and ready to work again.
The man approached the donkey with understanding. He promised to be kind and give the donkey breaks when needed. From that day on, they formed a deep bond based on compassion and empathy.
They continued their journey together, working as a team. The man made sure to give the donkey regular breaks and take care of its well-being. In return, the donkey remained loyal and dedicated.
The villagers noticed the strong partnership between the man and the donkey. They learned the importance of treating animals with kindness and understanding. The story became a timeless reminder of compassion for all creatures.`
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
            qText: "What was the man's relationship with the donkey?",
            options: `Coworkers, Strangers, Friends`
          },
          {
            qText: 'Why did the donkey run towards the pond?',
            options: `It was thirsty and wanted to drink.
It was scared of something nearby.
It was trying to escape from the man.`
          },
          {
            qText: "How did the man initially react to the donkey's actions?",
            options: `He scolded and tried to pull the donkey away.
He ignored the donkey and continued walking.
He felt happy for the donkey's enjoyment.`
          },
          {
            qText: `What did the man realize after observing the donkey?`,
            options: `He realized the donkey needed breaks and rest.
He realized the donkey didn't like working with him.
He realized the donkey needed more training.`
          },
          {
            qText:
              'What lesson did the villagers learn from the man and the donkey?',
            options: `The significance of taking breaks when needed.
The value of having animals as pets.
The necessity of always being in control.`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-3',
      type: 'matchByDragDrop',
      data: {
        text: `The donkey carried heavy *loads* for the man.
The donkey wanted to rest near the *pond*.
The man realized the importance of *compassion* and promised to be kind.
The donkey felt *refreshed* after drinking from the pond.
The villagers learned about the importance of treating animals with *kindness*.`
      }
    },
    {
      id: 'donkey-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: `Compassion: Feeling or showing concern and kindness towards others.
Loyal: Faithful and devoted.
Empathy: The ability to understand and share the feelings of others.
Refreshed: Feeling revitalized or reenergized.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'donkey-word',
      data: {
        text: `Feeling or showing concern and kindness towards others.|COMPASSION
Faithful and devoted.|LOYAL
The ability to understand and share the feelings of others.|EMPATHY
Feeling revitalized or reenergized.|REFRESHED`
      }
    }
  ]
};
