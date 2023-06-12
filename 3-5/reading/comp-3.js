export default {
  label: 'Comprehension',
  id: 'comprehension-3',
  lockAfter: 2,
  list: [
    {
      id: 'lunchbox',
      type: 'passage',
      label: 'The Adventures of a Lunchbox',
      style: 'big',
      data: {
        title: 'The Adventures of a Lunchbox',
        text: `Once upon a time, in a factory far away, I came to life as a lunchbox. It has been a year since my creation, and I remember the process vividly. Red and violet plastic sheets were carefully molded together to form my sturdy body. To add some character, a friendly lady adorned my lid with a vibrant sticker. I felt proud and ready for my purpose.
Soon, I found myself wrapped in a protective plastic sheet and placed in a bustling shop. The shop was filled with an array of boxes like me, as well as bottles, plates, glasses, and cups. We eagerly awaited our new owners, hoping to be chosen for a grand adventure.
One fortunate day, a little boy named Abdul entered the shop with his father. His eyes sparkled when he noticed my sticker, and he pleaded with his father to purchase me. The joy that surged through me was immeasurable. I couldn't wait to join Abdul on his journey.
At Abdul's home, his caring mother took exceptional care of me. Each day, she would lovingly wash me with warm water and soap, ensuring my cleanliness. Then, she would fill me with delicious food and gently place me inside Abdul's school bag. Abdul treated me with kindness and respect, making me feel valued and cherished. For seven wonderful months, I was Abdul's faithful companion.
However, fate had a different plan for me. One day, while Abdul and his friends were playing in the field, an unexpected turn of events occurred. A ball struck me with great force, causing me to plummet to the ground. I suffered a massive crack, leaving me in pain.
Abdul was devastated by my unfortunate fate, but he had no choice but to bid me farewell and dispose of me in a trash bin. From the bin, I was transported to a vast recycling ground, where my plastic would be transformed into a new existence.
And now, here I am, ready to transform. My plastic will be recycled, allowing me to contribute to the creation of a brand-new lunchbox.`
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
            qText:
              'What were the colors of the plastic sheets used to create the lunchbox?',
            options: `Red and violet, Green and orange, Black and white`
          },
          {
            qText: "Who adorned the lunchbox's lid with a vibrant sticker?",
            options: `A friendly lady, Abdul's father, Abdul's mother`
          },
          {
            qText: "How did Abdul's mother take care of the lunchbox?",
            options: `She washed it with warm water and soap.
She sprayed it with disinfectant.
She didn't take care of it.`
          },
          {
            qText: `How long was the lunchbox Abdul's faithful companion?`,
            options: ` 7 months, 7 years, 7 days`
          },
          {
            qText: 'What caused the lunchbox to crack?',
            options: `It was struck by a ball.
Abdul's friend stepped on it.
It fell off a table.`
          },
          {
            qText: 'What happened to the lunchbox after it cracked?',
            options: ` Abdul threw it away.
Abdul gifted it to his friend.
Abdul sold it at a yard sale.`
          }
        ]
      }
    },
    {
      label: 'Arrange the Events',
      type: 'sorting',
      id: 'sort',

      data: {
        title: 'Arrange the events in the correct order.',
        text: `Lunchbox made from plastic sheets, Adorned with vibrant sticker, Wrapped and displayed in a shop, Bought by a little boy, Formed a massive crack, Disposed of in the bin, Recycled`
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag',
      type: 'matchByDragDrop',
      data: {
        text: `The lunchbox's lid was *adorned* with a vibrant sticker.
The shop was filled with an *array* of boxes, bottles, plates, and cups.
The lunchbox *plunged* to the ground after being struck by the ball.
Abdul was *devastated* by the lunchbox's unfortunate fate.
Abdul had no choice but to *dispose* of the lunchbox in a trash bin.
The plastic would be *transformed* into a new lunchbox through recycling.`
      }
    },
    {
      id: 'dolphin-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: `Adorned: To decorate or add beauty to something.
Array: A large number or variety of things.
Plunge: To fall suddenly or quickly.
Devastated: To feel extreme sadness or grief.
Dispose: To get rid of or throw away.
Transform: To change the form, appearance, or nature of something.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'box-word',
      data: {
        text: `To decorate or add beauty to something.| ADORNED
A large number or variety of things.| ARRAY
To fall suddenly or quickly.| PLUNGE
To feel extreme sadness or grief.| DEVASTATED
To get rid of or throw away.| DISPOSE
To change the form, appearance, or nature of something.| TRANSFORM`
      }
    },
    {
      id: 'match',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Sturdy, Strong
Adorned, Decorated
Array, Assortment
Immeasurable, Boundless`
      }
    },
    {
      id: 'match-2',
      label: 'Match: Antonyms',
      type: 'match',
      data: {
        title: `Match the antonym pairs.`,
        text: `Sturdy, Fragile
Adorned, Bare
Array, Single
Immeasurable, Limited`
      }
    },
    {
      id: 'cake',
      type: 'passage',
      label: 'Topsy-Turvy Triumph',
      style: 'big',
      data: {
        title: 'Topsy-Turvy Triumph',
        text: `Once upon a time in a small town lived a talented baker named John. Known for his exceptional skills and creativity, John was always filled with excitement whenever he had the opportunity to showcase his baking masterpieces. Today was a particularly special day for him as he had entered the prestigious cake competition of the year.
John had poured his heart and soul into creating the most magnificent cakes anyone had ever laid eyes on. His imagination ran wild as he designed a truly awe-inspiring creation. The centerpiece of his cake was a white square-shaped layer. On top of the square layer, he carefully placed a pink circular cake. He added a generous amount of red jam infused with juicy chunks of strawberries. John adorned the cake with delicate white chocolate pearls and tied a beautiful ribbon around it.
With great care, John lifted the stunning creation and placed it onto a trolley, ready to transport it to the competition hall. He pushed the trolley down a long corridor. However, the trolley suddenly caught on the carpet and veered off course, causing the cake to tumble and twist upon impact.
The once-impeccable arrangement was now turned upside down, with the circular layer on top and the square layer at the bottom. Despite his disappointment, John refused to give up.
John collected the fallen cake and proceeded to the competition hall. However, the judges' faces lit up with intrigue and excitement. They marveled at the unexpected transformation of his cake, praising the unique topsy-turvy arrangement. The judges awarded him the first prize. He realized that sometimes, even accidents can lead to extraordinary outcomes.
From that day forward, John's topsy-turvy cake became his signature creation, earning him a reputation as a visionary baker.`
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
            qText: "What was the centerpiece of John's cake?",
            options: `A pink circular layer.
A white square-shaped layer.
A red jam infused with strawberries.`
          },
          {
            qText: 'What caused the cake to tumble and twist?',
            options: `The carpet catching the trolley.
A sudden gust of wind.
The weight of the cake.`
          },
          {
            qText: 'How did the judges react to the fallen cake?',
            options: `They praised the unique topsy-turvy arrangement.
They deducted points for the damaged cake.
They were disappointed and discouraged John.`
          },
          {
            qText: 'What prize did John receive at the cake competition?',
            options: `First Prize, Second Prize, Third Prize`
          },
          {
            qText: "What did John's topsy-turvy cake become known as?",
            options: `John's Signature Creation, The Fallen Masterpiece, The Accidental Creation`
          }
        ]
      }
    },
    {
      id: 'match-5',
      label: 'Match the following',
      type: 'match',
      data: {
        title: `Match the following`,
        text: `Competition, Challenge
Trolley, Cart
Impact, Collision
Signature, Distinctive
Accident, Mishap`
      }
    },
    {
      id: 'cake-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: `Baker: A person who bakes goods, such as bread, pastries, and cakes.
Creativity: The ability to think imaginatively and come up with original ideas.
Trolley: A wheeled cart or platform used for transporting items.
Carpet: A floor covering made of thick woven fabric, typically used in homes or commercial spaces.
Impact: The forceful collision or contact between two objects.
Upside down: Reversed or inverted from the normal or expected position.
Judges: Individuals responsible for evaluating and rating the cakes in a competition based on predetermined criteria.
Topsy-turvy: A state of disarray or disorder, referring to the rearrangement of the cake layers.
Visionary: Someone who has original and creative ideas, often associated with forward-thinking and innovation.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'cake-word',
      data: {
        text: `A person who bakes goods, such as bread, pastries, and cakes.| BAKER
The ability to think imaginatively and come up with original ideas.|CREATIVITY
A wheeled cart or platform used for transporting items.|TROLLEY
A floor covering made of thick woven fabric, typically used in homes or commercial spaces.|CARPET
The forceful collision or contact between two objects.|IMPACT
Reversed or inverted from the normal or expected position.|UPSIDE DOWN| U_____ D___
Individuals responsible for evaluating and rating the cakes in a competition based on predetermined criteria.|JUDGES
A state of disarray or disorder, referring to the rearrangement of the cake layers.|TOPSY-TURVY| T____-T____
Someone who has original and creative ideas, often associated with forward-thinking and innovation.|VISIONARY `
      }
    },
    {
      id: 'match-6',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Talented, Skilled
Creativity, Imagination
Magnificent, Splendid
Intrigue, Fascination
Visionary, Innovative`
      }
    },
    {
      id: 'match-7',
      label: 'Match: Antonyms',
      type: 'match',
      data: {
        title: `Match the antonym pairs.`,
        text: `Filled, Empty
Opportunity, Misfortune
Disappointment, Satisfaction
Expected, Unexpected
Praise, Criticize
Reputation, Infamy`
      }
    },
    {
      id: 'view',
      type: 'passage',
      label: 'A Journey of Discovery',
      style: 'big',
      data: {
        title: 'A Journey of Discovery',
        text: `On a sunny afternoon, Meera and Rahul strolled through the park. They sat down on a bench, enjoying the warmth of the sun on their faces. Meera spotted a rock covered in vibrant green moss. "Look at that mossy rock!" she exclaimed. Rahul chuckled and replied, "That's not just a rock, Meera. It's a cozy hideout for tiny creatures." Just then, a tiny snail crept onto the rock, seeking shelter and nibbling on the moss.
Meera's eyes widened as she noticed a beautifully shaped leaf nearby. "Look at that gorgeous golden leaf!" she marveled. Rahul shook his head gently and said, "That's not just a leaf, Meera. It's a comfy blanket for little beetles." A small beetle scurried under the leaf, seeking solace from the sun.
As they continued their walk, Meera pointed excitedly to a vibrant red flower. "Look at that stunning red flower!" she exclaimed. Rahul smiled and responded, "That's not merely a flower, Meera. It's a refreshing shower for earthworms." A curious earthworm wiggled through the damp soil beneath the flower, relishing the cool droplets falling from its petals.
Meera's gaze then fell upon a peculiarly shaped mushroom. "Look at that wild mushroom!" she called out. Rahul chuckled again and said, "That's not just a mushroom, Meera. It's a perfect umbrella for spiders." A spider deftly spun its web under the mushroom, taking cover from any impending rain or mist.
Finally, Meera noticed a stick lying on the ground. She hesitated for a moment, considering how to describe it. Then, with a mischievous grin, she said, "Look at that whimsical twirly branch!" Rahul chuckled heartily and replied, "Now you're looking at things from a different perspective, Meera!"
From that day forward, Meera and Rahul continued their adventures, always ready to see the world with fresh eyes and embrace different points of view.`
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
            qText: 'What did Meera and Rahul find in the park?',
            options: `A mossy rock, A sunny bench, A cozy hideout`
          },
          {
            qText: 'What did Rahul compare the mossy rock to?',
            options: `A hideout for tiny creatures.
A cozy blanket for beetles.
A refreshing shower for earthworms.`
          },
          {
            qText: 'What creature sought shelter on the mossy rock?',
            options: `A snail, A beetle, An earthworm`
          },
          {
            qText: `What did Rahul compare the red flower to?`,
            options: ` A refreshing shower for earthworms.
An umbrella for spiders.
A hideout for tiny creatures.`
          },
          {
            qText: 'What creature enjoyed the cool droplets from the flower?',
            options: `An earthworm, A spider, A beetle`
          },
          {
            qText: 'What did Rahul compare the mushroom to?',
            options: ` An umbrella for spiders.
A hideout for tiny creatures.
A cozy blanket for beetles.`
          }
        ]
      }
    },
    {
      id: 'view-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: ` Mossy: Covered in or resembling moss.
Marvel: To be amazed or astonished by something.
Relishing: To take pleasure in or enjoy something greatly.
Peculiarly: In a strange or unusual manner.
Perspective: The way someone sees or understands something.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'view-word',
      data: {
        text: `Covered in or resembling moss.|MOSSY
To be amazed or astonished by something.|MARVEL
To take pleasure in or enjoy something greatly.|RELISHING
In a strange or unusual manner.|PECULIARLY
The way someone sees or understands something.|PERSPECTIVE`
      }
    },
    {
      id: 'match-8',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Cozy, Comfortable
Shelter, Refuge
Marvel, Wonder
Refreshing, Rejuvenating
Deftly, Skillfully`
      }
    },
    {
      id: 'match-9',
      label: 'Match: Antonyms',
      type: 'match',
      data: {
        title: `Match the antonym pairs.`,
        text: `Vibrant, Dull
Hideout, Exposure
Comfy, Uncomfortable
Curious, Indifferent
Impending, Remote`
      }
    },
    {
      id: 'panda',
      type: 'passage',
      label: 'Panda',
      style: 'big',
      data: {
        title: 'Panda',
        text: `Pandas are amazing animals! They are big, cuddly bears that live in a country called China. Pandas have a unique black and white fur that makes them look so cute and special. They have round faces with black patches around their eyes, which make them look like they're wearing masks. 
Pandas are very good at climbing trees, even though they are quite heavy. They have strong paws and sharp claws that help them grip onto branches. 
But do you know what pandas love to eat the most? Bamboo! They munch on bamboo all day long. It's their favorite food. 
Pandas are also known for being peaceful and calm animals. They spend most of their time relaxing and sleeping. Sometimes, they even roll around and play with each other. 
Sadly, pandas are an endangered species, which means there aren't many of them left in the world. That's why it's important for us to protect them and their habitats. 
Pandas are truly incredible creatures, and we should do our best to help them survive and thrive in the wild.`
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
            qText: "What feature makes pandas look like they're wearing masks?",
            options: `Black patches around their eyes, Long tail, Sharp claws`
          },
          {
            qText: 'What do pandas love to eat the most?',
            options: `Bamboo, Fruits, Grass`
          },
          {
            qText: 'What is one of the unique abilities of pandas?',
            options: `Climbing trees, Burrowing underground, Swimming`
          },
          {
            qText: `Why are pandas considered endangered?`,
            options: `Their habitat is being destroyed.
They reproduce too quickly.
They have no natural predators.`
          },
          {
            qText: 'What is an important role for humans in protecting pandas?',
            options: `Supporting conservation efforts.
Selling panda products.
Adopting pandas as pets.`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-2',
      type: 'matchByDragDrop',
      data: {
        text: `Pandas have a unique black and white *fur* that makes them look cute and special.
Pandas love to eat *bamboo*.
Pandas are known for being peaceful and calm *animals*.
Sadly, pandas are an *endangered* species.
It's important to protect pandas and their *habitats*.`
      }
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Pandas have black patches around their eyes. 
Pandas are an endangered species. `
          },
          {
            name: 'False',
            text: `Pandas are good at swimming.
Pandas spend most of their time eating bamboo.
Panda sleep for 12 hours a day.`
          }
        ]
      }
    },
    {
      id: 'pand-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: `Endangered: Animals that are at risk of becoming extinct.
Habitat: The natural home or environment of an animal.
Fur: The thick hair covering the body of an animal.
Bamboo: A type of plant that pandas eat.
Pand: Large, cuddly bears that live in China.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'panda-word',
      data: {
        text: `Animals that are at risk of becoming extinct.|ENDANGERED
The natural home or environment of an animal.|HABITAT
The thick hair covering the body of an animal.|FUR
A type of plant that pandas eat.|BAMBOO
Large, cuddly bears that live in China.|PANDA`
      }
    },
    {
      id: 'flamingo',
      type: 'passage',
      label: 'Flamingo',
      style: 'big',
      data: {
        title: 'Flamingo',
        text: `Flamingos are fascinating birds that live in different parts of the world. These beautiful creatures are known for their vibrant pink feathers and long, slender legs. Flamingos can be found in places like Africa, Asia, the Americas, and even parts of Europe. They love to live near lakes, lagoons, and other bodies of water where they can find their favorite food, such as shrimp and algae.
One of the most amazing things about flamingos is their unique way of standing. They balance on one leg while tucking the other leg up against their body. It may seem strange, but this position helps them conserve energy and stay balanced on uneven surfaces. Flamingos also use their long, curved beaks to catch food from the water. They filter out the small organisms they eat and swallow the water.
Did you know that flamingos love to socialize? They often gather in large groups called colonies or flocks. These flocks can sometimes include hundreds or even thousands of flamingos! When they gather together, they communicate with each other by making loud calls and performing special dances. It's a spectacular sight to see!
Flamingos are also excellent parents. They build nests out of mud and sticks, usually in shallow water. The female flamingo lays a single egg, and both the male and female take turns keeping it warm until it hatches. Once the chick is born, the parents feed it a special milk-like substance that they produce in their bodies.
Flamingos are truly remarkable creatures. Their bright pink feathers, graceful stance, and social behavior make them a favorite bird for many people. Next time you see a picture of a flamingo or spot one in a zoo, remember how incredible these birds are and all the unique things they can do!`
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
            qText: 'What color are flamingos known for?',
            options: `Pink, Blue, Yellow`
          },
          {
            qText: 'How do flamingos stand?',
            options: `On one leg, On their wings, On all fours`
          },
          {
            qText: 'What do flamingos eat?',
            options: `Shrimp and algae, Nectar and pollen, Fish and insects`
          },
          {
            qText: `Where do flamingos build their nests?`,
            options: `On the ground, In caves, Underwater`
          },
          {
            qText: 'How do flamingo parents take care of their eggs?',
            options: `They sit on them all the time.
They throw them in the water.
They roll them around.`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-3',
      type: 'matchByDragDrop',
      data: {
        text: `Flamingos are known for their *vibrant* pink feathers.
Flamingos balance on one *leg* while tucking the other leg up against their body.
Flamingos use their long, curved *beaks* to catch food from the water.
Flamingos often gather in large *colonies* or flocks.
Female flamingos lay a single egg in their *nests*.`
      }
    },
    {
      id: 'flamingo-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: `Colony: A group of animals or birds living together
Slender: Thin or slim in shape
Vibrant: Bright and intense in color
Nest: A structure built by birds to lay eggs and raise their young
Algae: Simple plants that grow in water or moist environments`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'flamingo-word',
      data: {
        text: `A group of animals or birds living together.|COLONY
Thin or slim in shape.|SLENDER
Bright and intense in color.|VIBRANT
A structure built by birds to lay eggs and raise their young.|NEST
Simple plants that grow in water or moist environments.|ALGAE`
      }
    }
  ]
};
