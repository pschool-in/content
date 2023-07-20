export default {
  label: 'Picture and Passage - 2',
  id: 'comp-2-2',
  lockAfter: 3,
  list: [
    {
      id: 'cow',
      type: 'passage',
      label: 'Cow',
      style: 'big',
      data: {
        title: 'Cow',
        text: [
          { type: 'img', src: 'cow.jpg', width: 120, height: 120 },
          `Cows are common domestic animals found worldwide, varying in sizes, shapes, and colors. They possess two ears, two eyes, a big nose, a long tail, four limbs, and two sharp horns. Their adaptable nature enables them to inhabit jungles, villages, pastures, and even cities. 
Known for their gentle and quiet nature, cows are herbivores, consuming fresh grass, grains, husks, and vegetables.
Cows are valued for their milk, which is highly nutritious and offers numerous health benefits. Humans commonly consume cow's milk, and it serves as a base for various dairy products, including curd, ghee, and cheese. 
In addition to their milk-producing abilities, cows are also utilized for farming and cart pulling. Male cows, known as ox, fulfill these roles in agricultural activities.`
        ]
      }
    },
    {
      id: 'cow-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Cows are *dommestic (wild)* animals found worldwide.
Cows are *herbivores (carnivores)*, consuming fresh grass and vegetables.
Cows have the ability to *adapt (live)* to different environments.
Cow's milk is highly *nutritious (sweet)* and offers numerous health benefits.
Male cows, known as *ox (buffalo)*, are used in agricultural activities.`
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'cow-word',
      data: {
        text: `Able to adjust to different environments or conditions.|ADAPT
Animals that eat plants as their primary source of food.|HERBIVORES
Tamed or cultivated by humans.|DOMESTIC
Providing essential nutrients and promoting good health.|NUTRITIOUS
The practice of farming and cultivating land.|AGRICULTURE`
      }
    },
    {
      id: 'cow-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'What is the primary diet of cows?',
            options: `Fresh grass, grains, husks, and vegetables
Meat
Fish`
          },
          {
            qText: 'How many horns do cows typically have?',
            options: `Two, One, None`
          },
          {
            qText:
              "Which of the following dairy products is not derived from cow's milk?",
            options: 'Soy milk, Yogurt, Ghee, Cheese'
          },
          {
            qText: 'What is the primary use of cows in farming activities?',
            options: `Plowing fields
Providing transportation
Hunting
Harvesting crops`
          },
          {
            qText: 'Which environment do cows typically inhabit?',
            options: `Jungles, villages, pastures, and cities
Oceans
Mountains
Deserts`
          }
        ]
      }
    },
    {
      id: 'buffalo',
      type: 'passage',
      label: 'Buffalo',
      style: 'big',
      data: {
        title: 'Buffalo',
        text: [
          { type: 'img', src: 'buffalo.jpg', width: 120, height: 120 },
          `Buffaloes are fascinating creatures found in domesticated and wild forms. Domesticated buffaloes are calm and not as strong, while wild buffaloes are more powerful and fast. They have four legs, two eyes, two horns, and a tail, giving them a distinctive appearance. 
Most buffaloes are black in color. They love water and often live in aquatic environments. Interestingly, during rainy days, while other animals seek shelter, they enjoy being in the water. 
Buffaloes provide milk, particularly domesticated ones. Buffalo milk is nutritious, high in calcium, and thicker than cow's milk. However, cow's milk is generally considered better than buffalo's milk.`
        ]
      }
    },
    {
      id: 'buffalo-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Buffaloes have *four (six)* legs.
Domesticated buffaloes are *calm (powerful)* and not as strong.
Wild buffaloes are more *powerful (calm)* and fast.
Buffaloes have *two (three)* eyes.
Buffalo milk is *nutritious (thin)* and high in calcium.`
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-buffalo',
      type: 'matchByDragDrop',
      data: {
        text: `Wild buffaloes are known for their *power* and speed.
Buffaloes use their *horns* for defense and territorial disputes.
During the rainy season, buffaloes enjoy being in the *water*.
Buffalo milk is known for its *calcium* content, making it a nutritious choice.
It is important to provide *shelter* for animals during extreme weather conditions. `
      }
    },
    {
      id: 'buffalo-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText:
              'Which type of buffalo is known for being more powerful and fast?',
            options: `Wild, Domestic, Male, Female`
          },
          {
            qText: 'What color are most buffaloes?',
            options: 'Black, White, Brown, Grey'
          },
          {
            qText: 'What do buffaloes love and often live in?',
            options: 'Aquatic environments, Deserts, Forests'
          },
          {
            qText: "How does buffalo milk compare to cow's milk?",
            options: `Buffalo milk is thicker than cow's milk.
Buffalo milk has no difference in thickness compared to cow's milk.
Buffalo milk is thinner than cow's milk.
Buffalo milk is equally thick as cow's milk.`
          },
          {
            qText: 'Which type of milk is generally considered better?',
            options: `Cow's milk, Buffalo milk, Goat milk, Sheep milk`
          }
        ]
      }
    },
    {
      id: 'pigeon',
      type: 'passage',
      label: 'Pigeon',
      style: 'big',
      data: {
        title: 'Pigeon',
        text: [
          { type: 'img', src: 'dove.jpg', width: 120, height: 120 },
          `Pigeons are fascinating birds that can be found in various parts of the world. They come in different colors, such as white, gray, and black, adding to their beauty. Pigeons possess distinctive features, including two eyes, two wings, two claws, and small feathers that cover their bodies. Their feet are typically dark red in color.
Pigeons are social creatures and often live in flocks, ranging in size from around 10 to 22 pigeons. They have a diverse diet consisting of wheat, cereals, pulses, and other similar food items. Interestingly, pigeons are known for their excellent hearing and memory abilities, which are considered superior to those of many other bird species.
Throughout history, pigeons have played significant roles, such as being used as messengers in ancient times. Their remarkable navigational skills and reliable homing instincts made them ideal for delivering messages over long distances. The average lifespan of a pigeon is short, ranging from 3 to 4 years.`
        ]
      }
    },
    {
      id: 'pigeon-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Pigeons are often seen flying in large *flocks (herds)*.
The homing *instincts (direction)* of pigeons allows them to return to their home even from faraway places.
Pigeons have remarkable *navigational (memory)* skills, enabling them to find their way over long distances.
Their diet includes a variety of grains, such as wheat and oats, which are classified as *cereals (grains)*.
A pigeon is a bird with two eyes, two wings, two claws, and *small (large)* feathers covering its body.`
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'pigeon-word',
      data: {
        text: `Groups of birds that live and travel together.|FLOCK
The ability of pigeons to find their way back to their home or roosting place.|HOMING INSTINCT|H_M__G I__T__C_
The ability of pigeons to understand and follow directions to reach a specific destination.|NAVIGATIONAL SKILL|N__I__T__NA_ S__L_
Grains, like wheat, oats, or corn, used as food.|CEREAL`
      }
    },
    {
      id: 'pigeon-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'What are some common colors of pigeons?',
            options: `White, gray, and black
Yellow, purple, and orange
Brown, pink, and teal`
          },
          {
            qText: "What color are pigeon's feet typically?",
            options: `Dark red, Blue, Green`
          },
          {
            qText: 'What is included in the diet of pigeons?',
            options: `Wheat, cereals, and pulses
Nectar and pollen
Meat and fish`
          },
          {
            qText: 'In the past, pigeons were commonly used as:',
            options: `Messengers, Pets, Hunting companions`
          },
          {
            qText: 'What is the average lifespan of a pigeon?',
            options: `3-4 years
5-7 years
1-2 years
10-15 years`
          }
        ]
      }
    },
    {
      id: 'lotus',
      type: 'passage',
      label: 'Lotus',
      style: 'big',
      data: {
        title: 'Lotus',
        text: [
          { type: 'img', src: 'lotus.jpg', width: 120, height: 120 },
          `The lotus flower holds great significance in India and is regarded as the country's National Flower. It is associated with several symbolic meanings, including beauty, purity, and knowledge. The lotus plant typically grows in freshwater lakes and shallow ponds.
The lotus leaves are known for their ability to float on the surface of the water. They are large and have a dark green color. The stem of the lotus is thick and has a glowing yellow center. The flower petals are round-shaped and come in various colors, most commonly white or light pink.
The lotus plant has practical uses as well. The juice extracted from the stem is used in traditional medicine for its therapeutic properties.`
        ]
      }
    },
    {
      id: 'lotus-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `The lotus leaves have a *green (yellow)* color and can be seen *floating (submerged)* on the surface of the water.
The *stem (leaves)* of the lotus is thick and has a glowing yellow center.
The lotus flower is associated with *knowledge (peace)* and *beauty (wealth)* in Indian culture.
The *juice (nectar)* extracted from the lotus stem is used for its therapeutic properties.`
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'lotus-word',
      data: {
        text: ` To remove or take out, especially by effort or force.|EXTRACT
Referring to something that represents or stands for something else.|SYMBOLIC
The brightly colored, often fragrant parts of a flower that surround the reproductive organs.|PETALS
The state or quality of being pure or free from contaminants.|PURITY`
      }
    },
    {
      id: 'lotus-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'What is the significance of the lotus flower in India?',
            options: `It is associated with beauty, purity, and knowledge.
It represents prosperity and wealth.
It symbolizes strength and power.
It signifies love and affection.`
          },
          {
            qText: 'Where does the lotus plant typically grow?',
            options: `Freshwater lakes and shallow ponds, Dense forests, Deep sea`
          },
          {
            qText: 'Which part of the lotus plant has medicinal properties?',
            options: `Stem juice, Flower petals, Leaves, Seeds`
          },
          {
            qText: 'What is the shape of the lotus flower petals?',
            options: `Round-shaped, Heart-shaped, Triangle-shaped`
          },
          {
            qText:
              'In which country is the lotus flower regarded as the National Flower?',
            options: 'India, China, Japan, Thailand'
          }
        ]
      }
    },
    {
      id: 'train',
      type: 'passage',
      label: 'Train',
      style: 'big',
      data: {
        title: 'Train',
        text: [
          { type: 'img', src: 'train.jpg', width: 120, height: 120 },
          `Trains are a significant mode of transportation that operates using either coal or electricity. They travel along railway tracks, propelled by an engine and consist of numerous bogies. The train itself has an iron body and is equipped with iron wheels.
There are two primary types of trains: passenger trains and goods trains. Passenger trains cater to transporting people, while goods trains are responsible for carrying various types of cargo. Both play crucial roles in transportation.
Train journeys are known for their comfort and efficiency. They offer a smooth ride, allowing passengers to relax and enjoy the scenery.`
        ]
      }
    },
    {
      id: 'train-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Trains can operate using either *coal (vegetable oil)* or *electricity (natural gas)* as sources of power.
Passenger trains are designed to transport *people (goods)*.
Goods trains are responsible for carrying various types of *cargo (food)*.
Train journeys are known for their comfort and *efficiency (bumpy ride)*.
While traveling by train, passengers can enjoy the beautiful *scenery (picnic)* along the way.`
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'train-word',
      data: {
        text: `A type of train that carries cargo.|GOODS TRAIN| G___S TRAIN
The material used to make the body of a train.|IRON
A part of a train consisting of wheels and axles.|BOGIE
The path on which trains travel.|RAILWAY TRACK|R___W__ TR___
A type of train that transports people.|PASSENGER TRAIN| P___E__E_ TRAIN`
      }
    },
    {
      id: 'train-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'What material are train bodies typically made of?',
            options: 'Iron, Aluminum, Stainless steel, Fiberglass'
          },
          {
            qText: 'Which part of a train is responsible for carrying cargo?',
            options: 'Bogies, Engine, Wheels'
          },
          {
            qText: 'Which type of train is designed for transporting people?',
            options: 'Passenger trains, Goods trains, Freight trains'
          },
          {
            qText: 'What is one of the advantages of train journeys?',
            options: `Smooth rides and scenic views
Uncomfortable seating
Bumpy rides`
          },
          {
            qText: 'Which energy source is commonly used by steam trains?',
            options: 'Coal, Electricity, Diesel'
          },
          {
            qText: 'What is the primary purpose of goods trains?',
            options:
              'Carrying cargo, Providing luxury travel, Commuting within a city'
          },
          {
            qText: 'What are the wheels of a train typically made of?',
            options: 'Iron, Rubber, Aluminum, Plastic'
          }
        ]
      }
    },
    {
      id: 'grandfather',
      type: 'passage',
      label: 'Grandfather',
      style: 'big',
      data: {
        title: 'Grandfather',
        text: [
          { type: 'img', src: 'grandfather.jpg', width: 120, height: 120 },
          `My grandfather is a remarkable individual who holds a special place in my heart. With his wise and gentle nature, he gives a sense of warmth and comfort whenever he is around. 
His silver hair and wrinkled face tell tales of a life well-lived, filled with experiences and wisdom. Whenever I spend time with him, he shares stories from his youth, transporting me to a different era. 
He has taught me valuable life lessons and shown me the importance of perseverance. Beyond his wisdom, my grandfather is a constant source of love and support, always ready to lend an ear or offer a helping hand. 
His presence in my life is a true blessing, and I cherish every moment spent with him.`
        ]
      }
    },
    {
      id: 'match',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Remarkable, Extraordinary
Gentle, Mild
Nature, Character
Well-lived, Eventful
Perseverance, Persistence
Blessing, Gift`
      }
    },
    {
      id: 'match-2',
      label: 'Match: Antonyms',
      type: 'match',
      data: {
        title: `Match the antonym pairs.`,
        text: `Wise, Foolish
Comfort, Discomfort
Filled, Empty
Youth, Age
Valuable, Worthless`
      }
    },
    {
      id: 'grandma-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText:
              'What quality does the grandfather possess that gives a sense of warmth and comfort?',
            options: `Wise and gentle nature, Remarkable experiences, Wrinkled face, Silver hair`
          },
          {
            qText:
              'What do the silver hair and wrinkled face of the grandfather represent?',
            options:
              'A life well-lived, Youthful appearance, Fashion statement, Lack of care'
          },
          {
            qText:
              'What does the grandfather do when spending time with the person?',
            options: `Shares captivating stories, Plays games, Gives lectures, Remains silent`
          },
          {
            qText: 'What has the grandfather taught the person?',
            options: `Value of perseverance
Art of cooking
Techniques for sports`
          },
          {
            qText: 'Apart from wisdom, what else does the grandfather provide?',
            options: `Emotional support
Academic tutoring
Physical training`
          }
        ]
      }
    },
    {
      id: 'schoolbag',
      type: 'passage',
      label: 'Schoolbag',
      style: 'big',
      data: {
        title: 'Schoolbag',
        text: [
          { type: 'img', src: 'schoolbag.jpg', width: 120, height: 120 },
          `I have an orange schoolbag that I find incredibly useful for keeping my belongings secure. It was a special gift from my parents on my last birthday.
Inside my schoolbag, I always carry my textbooks, notebooks, lunchbox, water bottle, and pencil case. It has plenty of space to accommodate everything I need for school, and there are a couple of convenient side pockets for storing smaller items. Each day, I carefully pack my schoolbag with all the essential supplies I'll need.
Thanks to my reliable schoolbag, all my books and belongings remain safe from any potential damage caused by dust, rain, or the sun. I make it a point to regularly clean my schoolbag to ensure it stays neat and tidy.`
        ]
      }
    },
    {
      id: 'schoolbag-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `I always *pack (take)* my schoolbag with all the necessary supplies for school.
My schoolbag has enough space to *accommodate (put)* my textbooks, notebooks, lunchbox, water bottle, and pencil case.
The *convenient (uncomfortable)* side pockets of my schoolbag are perfect for storing smaller items.
I take care of my schoolbag to ensure it remains *neat (dirty)* and *tidy (tiny)*.
The special gift from my parents provides a *secure (insecure)* place for keeping my belongings *safe (clean)*.
I make it a habit to *regularly (yearly)* clean my schoolbag to maintain its condition.
I'm grateful for my schoolbag because it protects my books and belongings from *damage (dirt)* caused by dust, rain, or the sun.`
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'schoolbag-word',
      data: {
        text: `To fit or provide enough space for something.|ACCOMMODATE
Harm or injury that impairs the value, usefulness, or normal function of something.|DAMAGE
Doing something on a consistent basis or at fixed intervals.|REGULARLY
Easily accessible and useful.|CONVENIENT
Free from danger or risk.|SECURE
Arranged in a clean and orderly manner.|TIDY`
      }
    },
    {
      id: 'schoolbag-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'What color is the schoolbag mentioned in the passage?',
            options: 'Orange, Green, Blue, Red'
          },
          {
            qText: 'What occasion was the schoolbag given as a gift?',
            options: 'Last birthday, Graduation, Christmas, First day of school'
          },
          {
            qText: 'What items are typically carried inside the schoolbag?',
            options: `Textbooks, notebooks, lunchbox, water bottle, and pencil case
Textbooks, toys, snacks, wallet, and headphones
Art supplies, calculator, laptop, snacks, and umbrella
Sports equipment, musical instruments, lunchbox, and water bottle`
          },
          {
            qText:
              'What is one special feature of the schoolbag mentioned in the passage?',
            options: `It has a hidden compartment for valuables.
It has a GPS tracker for location monitoring.
It has a built-in laptop compartment.
It has wheels for easy rolling.`
          },
          {
            qText:
              'How does the schoolbag protect its contents from potential damage?',
            options: `It is made of a durable material.
It has a solar-powered cooling system.
It has a waterproof coating.
It has a built-in umbrella.`
          }
        ]
      }
    },
    {
      id: 'kangaroo',
      type: 'passage',
      label: 'Kangaroo',
      style: 'big',
      data: {
        title: 'Kangaroo',
        text: [
          { type: 'img', src: 'kangaroo.jpg', width: 120, height: 120 },
          `Kangaroos are herbivores that primarily feed on grass, leaves, and fruits. Kangaroos possess four legs, with their hind legs being longer. Kangaroos move by hopping on their powerful hind legs. Their jumps can cover impressive distances.
A distinct feature of kangaroos is the presence of a pouch on their stomachs. Within this pouch, female kangaroos nurture and protect their young. The baby kangaroo, called a joey, spends a significant portion of its early life within the safety of its mother's pouch, where it receives milk and gradually grows stronger.
Kangaroos are predominantly found in Australia, their native land. They are considered the national animal of Australia, symbolizing the unique wildlife and natural heritage of the country. They are rarely found in other parts of the world.`
        ]
      }
    },
    {
      id: 'kangaroo-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Kangaroos are *herbivores (carnivores)* that primarily feed on grass, leaves, and fruits.
Kangaroos move by *hopping (crawling)* on their powerful hind legs.
The baby kangaroo is called a *joey (fawn)*.
Female kangaroos nurture and protect their young in a *pouch (cot)* on their stomachs.
Kangaroos are predominantly found in *Australia (America)*.`
      }
    },
    {
      id: 'match-3',
      label: 'Match the following',
      type: 'match',
      data: {
        title: `Match the following.`,
        text: `Herbivores, Eat plants 
Hopping, Jumping 
Joey, Baby kangaroo 
Pouch, Protective bag 
Australia, Native land `
      }
    },
    {
      id: 'kangaroo-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'What do kangaroos primarily feed on?',
            options: `Grass, leaves, and fruits
Insects
Fish`
          },
          {
            qText: 'How do kangaroos move?',
            options: `By hopping on their hind legs
By swimming
By crawling`
          },
          {
            qText: 'Where do female kangaroos nurture and protect their young?',
            options: `In their pouches
In underground burrows
On their backs`
          },
          {
            qText: 'What is a baby kangaroo called?',
            options: 'Joey, Calf, Fawn'
          },
          {
            qText: 'Which country is the native land of kangaroos?',
            options: 'Australia, South Africa, Canada'
          }
        ]
      }
    },
    {
      id: 'camel',
      type: 'passage',
      label: 'Camel',
      style: 'big',
      data: {
        title: 'Camel',
        text: [
          { type: 'img', src: 'camel.jpg', width: 120, height: 120 },
          `Camels are enormous mammals. They weigh around 600 kilos. They live in deserts where food and water are scarce.
Camels are adapted to live in difficult desert environments and are known as the ship of the desert. They have a hump where they store fat deposits and use them when they can't find food.
Camels can drink as much as 100 liters of water at a time. Their thick mouth helps them eat thorny bushes. They have heavily padded feet, which help them walk in the sandy terrain.
Camels move in packs, known as caravans. They live for 40-50 years.`
        ]
      }
    },
    {
      id: 'camel-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Camels are adapted to live in *difficult (easy)* environments.
Camels have a *hump (bump)* where they store fat deposits.
Camels can drink as much as *100 (10)* liters of water at a time.
Camels have heavily *padded (fur)* feet to help them walk in the sandy terrain.
Camels move in packs known as *caravans (flock)*.
Camels are often called the *ship (kings)* of the desert.
Camels can live for *40-50 (50-100)* years.`
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'camel-word',
      data: {
        text: `Packs in which camels move.|CARAVANS
Storage of fat deposits in camels.|HUMP
Insufficient or lacking in quantity.|SCARCE
Thick covering or cushioning.|PADDED`
      }
    },
    {
      id: 'camel-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'How much do camels typically weigh?',
            options: `600 kilos, 300 kilos, 100 kilos`
          },
          {
            qText: "What is the purpose of the hump on a camel's back?",
            options: `To store fat deposits for energy
To regulate body temperature
To provide cushioning during long journeys`
          },
          {
            qText: 'How much water can camels drink at one time?',
            options: `100 liters, 50 liters, 10 liters`
          },
          {
            qText: 'What advantage do camels have with their thick mouth?',
            options: `Capability to eat thorny bushes
Ability to eat large prey
Resistance to extreme temperatures`
          },
          {
            qText: 'What is the purpose of heavily padded feet in camels?',
            options: `To walk comfortably on sandy terrain
To camouflage their footprints from predators
To reduce heat absorption from the ground`
          }
        ]
      }
    },
    {
      id: 'squirrel',
      type: 'passage',
      label: 'Squirrel',
      style: 'big',
      data: {
        title: 'Squirrel',
        text: [
          { type: 'img', src: 'squirrel.jpg', width: 120, height: 120 },
          `Squirrels are cute little animals with bushy tails. They are known for their love of nuts. Squirrels are excellent climbers and can jump very far. They have sharp claws that help them grip trees.
Squirrels are active during the day and sleep at night. They are known to be very agile and quick on their feet.
Squirrels use their tails to communicate with each other. They build nests called dreys out of leaves and twigs. Squirrels are found in many different colors, including gray, brown, and red.`
        ]
      }
    },
    {
      id: 'squirrel-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Squirrels are known for their love of nuts and their *bushy (fluffy)* tails.
They have *sharp (long)* claws that help them grip trees.
Squirrels build *nests (homes)* called *dreys (dries)* out of leaves and twigs.
Squirrels can be found in different colors, including gray, brown, and *red (purple)*.`
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'squirrel-word',
      data: {
        text: `Move quickly and easily.|AGILE
Nests made of leaves and twigs.|DREYS
Convey information or exchange ideas.|COMMUNICATE
Color intermediate between black and white.|GREY`
      }
    },
    {
      id: 'squirrel-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'What is a characteristic feature of squirrels?',
            options: 'Bushy tail, Long ears, Fluffy paws'
          },
          {
            qText: 'What makes squirrels excellent climbers?',
            options: 'Sharp claws, Bushy tail, Long ears'
          },
          {
            qText: 'How do squirrels communicate with each other?',
            options: 'Tail movements, Scent marking, Body language'
          },
          {
            qText: 'Which of the following quality describes squirrels?',
            options: `Swift and agile
Slow and clumsy
Cautious and timid`
          },
          {
            qText: 'How far can squirrels jump?',
            options: 'Several feet, Up to one meter, Over ten meters'
          }
        ]
      }
    }
  ]
};
