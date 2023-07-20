export default {
  label: 'Picture and Passage',
  id: 'comp-2',
  lockAfter: 3,
  list: [
    {
      id: 'goat',
      type: 'passage',
      label: 'Goat',
      style: 'big',
      data: {
        title: 'Goat',
        text: [
          { type: 'img', src: 'goat.jpg', width: 120, height: 120 },
          `Goats are domestic animals that have been tamed by humans for a long time due to their usefulness. Goats typically have four legs, a small tail, and horns on their head. They come in various sizes, ranging from small to medium. Goats have hooves on their legs, a long beard on their chin, and their skin is covered in fur.
Goats produce a sound called "bleat," which is similar to the sound of a human child. Goats are herbivorous animals, meaning they primarily eat grass, leaves, plants, fruits, and vegetables.
On average, a goat consumes 2 to 4 kilograms of fodder every day. When well cared for, goats can live up to 16 to 18 years. Male goats are called bucks, while female goats are called does. A young goat is called a "kid".`
        ]
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Goats are *domestic (wild)* animals that have been tamed by humans.
Goats produce a sound called *bleat (bleak)*.
Goats are *herbivore (carnivore)*, which means they primarily eat grass and plants.
A male goat is called a *buck (doe)*.
A female goat is called a *doe (buck)*.
The skin of a goat is covered in *fur (feathers)*.
A young goat is called a *kid (cub)*.`
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'goat-word',
      data: {
        text: `A young goat.|KID
The sound produced by goats, similar to a human child.|BLAET
A male goat.|BUCK
A female goat.|DOE
Food for goats, usually consisting of grass, leaves, and plants.|FODDER
An animal that has been tamed and lives with humans.|DOMESTIC
An animal that primarily eats grass, leaves, plants, fruits, and vegetables.|HERBIVOROUS`
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
            qText:
              'What is the main reason why goats have been tamed by humans for a long time?',
            options: 'Their usefulness, Their horns, Their size'
          },
          {
            qText: 'What sound do goats produce?',
            options: `Bleat, Bark, Roar, Meow`
          },
          {
            qText: 'What type of animals are goats in terms of their diet?',
            options: 'Herbivorous, Omnivorous, Insectivorous'
          },
          {
            qText: 'On average, how much fodder does a goat consume daily?',
            options: `2-4 kilograms
4-6 kilograms
6-8 kilograms`
          },
          {
            qText: 'How long can goats live when well cared for?',
            options: '16-18 years, 18-20 years, 12-14 years'
          }
        ]
      }
    },
    {
      id: 'sheep',
      type: 'passage',
      label: 'Sheep',
      style: 'big',
      data: {
        title: 'Sheep',
        text: [
          { type: 'img', src: 'sheep.jpg', width: 120, height: 120 },
          `Sheep are domestic animals that are reared for various purposes, including business ventures. Sheep are highly useful animals that provide resources such as wool and milk. Sheep breeds can be found across the globe, showcasing a wide variety of characteristics.
While some sheep breeds have horns, most sheep do not possess horns. Sheep have four legs, two eyes, ears, and a short tail. Their entire body is covered with thick hair, which continuously grows and is harvested as wool.
Sheep primarily feed on grass, leaves, and other vegetation. Sheep are known for their exceptional hearing abilities and strong memory. On average, sheep live for about 8 to 12 years.`
        ]
      }
    },
    {
      id: 'sheep-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Sheep are *domestic (wild)* animals that are often reared by humans for various purposes.
Sheep provide valuable *resources (powers)* such as wool and milk.
Different sheep *breeds (bred)* showcase a wide variety of traits.
While some sheep have *horns (beards)*, most do not possess them.
Sheep primarily feed on grass, leaves, and other *vegetation (animals)*.
Sheep are known for their exceptional hearing abilities and strong *memory (eyesight)*.
The entire *body (head)* of a sheep is covered with thick hair, which is harvested as wool.`
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'sheep-word',
      data: {
        text: `The traits or qualities that distinguish one thing from another.|CHARACTERISTICS
Animals that have been tamed or bred to live with humans.|DOMESTIC
The parts of the body that grow on the head of certain animals.|HORNS
The ability to recall information or experiences.|MEMORY
Useful substances or materials that can be used for various purposes.|RESOURCES`
      }
    },
    {
      id: 'sheep-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'Do most sheep have horns?',
            options: `Yes, all sheep have horns
*No, most sheep do not have horns
Only male sheep have horns
Only certain breeds have horns`
          },
          {
            qText:
              "Which part of a sheep's body is covered with thick hair that is harvested as wool?",
            options: 'Entire body, Head, Legs, Tail'
          },
          {
            qText: 'What do sheep primarily feed on?',
            options: 'Grass and vegetation, Meat, Fish'
          },
          {
            qText: 'How long is the average lifespan of a sheep?',
            options: '8 to 12 years, 15 to 20 years, 4 to 6 years'
          },
          {
            qText: 'What is one notable trait of sheep?',
            options: `Exceptional hearing abilities
Exceptional vision
Exceptional swimming skills
Exceptional climbing abilities`
          }
        ]
      }
    },
    {
      id: 'crow',
      type: 'passage',
      label: 'Crow',
      style: 'big',
      data: {
        title: 'Crow',
        text: [
          { type: 'img', src: 'crow.jpg', width: 120, height: 120 },
          `Crows, known for their intelligence, can be found in various habitats worldwide. They come from different species but share the common trait of being black in color. With two wings, two claws, two eyes, and a powerful beak, crows are well-equipped for their survival. Their beaks enable them to consume hard food efficiently. Crows produce a distinctive raspy and harsh sound.
While some crows may live individually, the majority of them form flocks. These flocks aid in the cleanup of the environment by consuming waste and debris. Interestingly, a group of crows is referred to as a "murder of crows."
Crows are renowned for their problem-solving abilities and impressive communication skills.`
        ]
      }
    },
    {
      id: 'crow-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Crows are *black (brown)* in color.
The crow's call is *raspy (sweet)* and harsh.
Crows help clean up the environment by consuming *debris (fruits)*.
Crows are known for their problem-*solving (creating)* abilities.
The crow's intelligence is *impressive (worthless)*.`
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'crow-word',
      data: {
        text: `Harsh and rough in sound.|RASPY
Scattered pieces of waste or remains.|DEBRIS
Finding solutions to challenges or puzzles.|PROBLEM-SOLVING|P__B___-S__V__G
Remarkable and deserving admiration.|IMPRESSIVE`
      }
    },
    {
      id: 'crow-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'What is a common trait shared by all crow species?',
            options: 'Long curved beak, Red eyes, Sharp talons'
          },
          {
            qText: 'What is the sound produced by crows commonly described as?',
            options: `Raspy and harsh
Whistling and soft
Melodic and soothing`
          },
          {
            qText: 'What is a group of crows called?',
            options: `A murder of crows
A congregation of crows
A swarm of crows`
          },
          {
            qText: 'What are crows known for in terms of their intelligence?',
            options: `Solving complex problems
Building intricate nests
Exceptional memory
Fastest flying speed among birds`
          },
          {
            qText: 'What type of habitat can crows be found in?',
            options: `Various habitats worldwide
Deserts only
Rainforests only
Grasslands only`
          }
        ]
      }
    },
    {
      id: 'cake',
      type: 'passage',
      label: 'Cake',
      style: 'big',
      data: {
        title: 'Cake',
        text: [
          { type: 'img', src: 'cake.jpg', width: 120, height: 120 },
          `Cakes are delicious baked desserts that are typically sweet and made from a combination of flour, sugar, eggs, and milk. They come in a variety of flavors, ranging from classic options like vanilla, chocolate, lemon, and strawberry to more unique choices. 
Various types of frostings are used to enhance the taste and appearance of cakes. Popular options include buttercream and cream cheese frostings. Cake is often served at celebrations such as birthdays, weddings, and anniversaries. The size and shape of cakes can vary widely, from small and individual cupcakes to large cakes.
In addition to the basic ingredients, many cakes incorporate extra elements to add flavor and texture. These can include fruits, nuts, and chocolate chips. Some cakes are also filled with various fillings, such as cream, jelly, or fruits.
Cakes bring joy and sweetness to any occasion.`
        ]
      }
    },
    {
      id: 'cake-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `*Vanilla (Lemon)* is a common flavor used in cakes, especially in combination with chocolate.
The sweet and creamy *frosting (topping)* adds a delicious touch to the cake's appearance and taste.
A *cupcake (cake)* is a small cake that is often decorated with frosting and toppings.
The *batter (dough)* is a mixture of ingredients that forms the base of the cake.
Some cakes have *toppings (frostings)* such as fruits, nuts, or chocolate chips for added texture and flavor.
*Fillings (Toppings)* are ingredients used to fill the inside of a cake, providing moisture and taste.`
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'cake-word',
      data: {
        text: `A small individual cake.|CUPCAKE
A mixture of ingredients, including flour, sugar, eggs, and milk, used as the base for a cake.|BATTER
Additional ingredients added to a cake for extra flavor or texture.|TOPPING
A sweet substance used to cover the surface of a cake.|FROSTING
Ingredients used to fill the inside of a cake, adding moisture and flavor.|FILLINGS`
      }
    },
    {
      id: 'cake-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'What are the main ingredients in a cake?',
            options: `Flour, sugar, eggs, and milk
Butter, sugar, salt, and water
Cornstarch, honey, vinegar, and baking powder
Oats, cocoa powder, bananas, and yogurt`
          },
          {
            qText: 'What types of frosting are often used on cakes?',
            options: `Buttercream and cream cheese
Tomato sauce and mayonnaise
Mustard and ketchup`
          },
          {
            qText:
              'What additional ingredients can be found in cakes for added flavor and texture?',
            options: `Fruits, nuts, and chocolate chips
Vegetables, cheese, and fish
Rice, beans, and lentils`
          },
          {
            qText: 'What are some common fillings for cakes?',
            options: `Cream, jelly, and fruits
Pickles and olives
Peanut butter, mayonnaise, and mustard`
          },
          {
            qText: 'Which of the following is not a common flavor for cakes?',
            options: 'Cabbage, Lemon, Chocolate, Vanilla'
          }
        ]
      }
    },
    {
      id: 'airplane',
      type: 'passage',
      label: 'Airplane',
      style: 'big',
      data: {
        title: 'Airplane',
        text: [
          { type: 'img', src: 'aeroplane.jpg', width: 120, height: 120 },
          `The airplane, invented by the Wright Brothers, is a remarkable invention resembling a large mechanical bird. Its graceful presence in the sky is truly majestic. Powered by a specialized fuel, airplanes rely on two wings for their flight.
The airplane is equipped with three wheels to facilitate smooth runway operations. The departure and arrival hub for airplanes is known as an airport. Airplanes serve various purposes, including the transportation of people and goods. Some airplanes are dedicated solely to carrying cargo, while others are designed for passenger travel. Additionally, airplanes play a crucial role in military operations, such as in the Air Force.
A skilled individual who operates an airplane is referred to as a pilot. The pilot holds the responsibility of safely navigating the aircraft and ensuring the well-being of the passengers on board. With the widespread use of airplanes, air travel has become accessible to people from all walks of life.`
        ]
      }
    },
    {
      id: 'airplane-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `The *pilot (master)* is responsible for flying and navigating the aircraft.
The *wings (tail)* of an airplane enable it to stay airborne.
An *airport (station)* is a hub where airplanes take off and land.
Some airplanes are specifically designed to transport *cargo (cars)*.
The *runway (airport)* is a smooth surface where airplanes perform takeoffs and landings.`
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'airplane-word',
      data: {
        text: `A skilled person who operates an aircraft.|PILOT
A hub for the departure and arrival of airplanes.|AIRPORT
The parts of an airplane that enable it to fly.|WINGS
Goods or items transported by an airplane.|CARGO
A remarkable invention resembling a large mechanical bird.|AIRPLANE
A smooth surface where airplanes take off and land.|RUNWAY`
      }
    },
    {
      id: 'airplane-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'Who is credited with inventing the airplane?',
            options: 'Wright Brothers, Thomas Edison, Alexander Graham Bell'
          },
          {
            qText: 'What is the primary source of power for airplanes?',
            options: 'Specialized fuel, Nuclear energy, Solar energy'
          },
          {
            qText: 'How many wings do airplanes typically have?',
            options: 'Two, One, Four'
          },
          {
            qText: 'What is the purpose of the three wheels on an airplane?',
            options: `To facilitate smooth runway operations
To control the altitude of the airplane
To help steer the airplane`
          },
          {
            qText:
              'What is the departure and arrival hub for airplanes called?',
            options: ' Airport, Seaport, Bus terminal, Train station'
          },
          {
            qText:
              'What is the term used to describe an individual who operates an airplane?',
            options: 'Pilot, Engineer, Naviator, Captain'
          },
          {
            qText:
              'In addition to transportation, what other purpose do airplanes serve?',
            options: 'Military operations, Space exploration, Medical research'
          },
          {
            qText: 'What is the responsibility of a pilot?',
            options: `Navigating the aircraft and ensuring passenger safety
Managing the airport operations
Repairing the airplane engine`
          }
        ]
      }
    },
    {
      id: 'grandma',
      type: 'passage',
      label: 'Grandma',
      style: 'big',
      data: {
        title: 'Grandma',
        text: [
          { type: 'img', src: 'grandma.jpg', width: 120, height: 120 },
          `My grandmother is seventy years old. She is a very kind woman. She is the first person to wake me up every morning, and every night she tucks me in bed and reads me a bedtime story. 
In the mornings, she helps me prepare for school by helping me arrange my school bag and packing my lunch. She also helps me study in the evenings before sitting with me to watch cartoons.
After sending me to school, she goes about her day helping my mother in the kitchen and maintaining the house. My grandmother is also an amazing cook. She knows old recipes for food that are delicious. My friends love to eat any dish that's prepared by my grandmother.  
I love her very much.`
        ]
      }
    },
    {
      id: 'grandma-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `My grandmother wakes me up every *morning (night)*.
My grandmother *helps (tells)* me arrange my school bag. She *packs (eats)* my lunch.
My grandmother is an *amazing (terrible)* cook. Her *old (new)* recipes for food are delicious.`
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
            qText: "How old is the narrator's grandmother?",
            options: `Seventy years old
Eighty years old
Ninety years old`
          },
          {
            qText:
              'What does the grandmother do for the narrator in the mornings?',
            options: 'Wakes them up, Reads a bedtime story, Have tea'
          },
          {
            qText:
              'What does the grandmother do after sending the narrator to school?',
            options: `Helps their mother in the kitchen
Studies with the narrator
Takes a nap`
          },
          {
            qText: "What is one of the grandmother's special skills?",
            options: `Cooking delicious food
Painting landscapes
Singing lullabies`
          },
          {
            qText:
              'What does the grandmother help the narrator with before school?',
            options: `Packing school bag
Cooking breakfast
Doing laundry`
          }
        ]
      }
    },
    {
      id: 'pyjama',
      type: 'passage',
      label: 'Pajama',
      style: 'big',
      data: {
        title: 'Pajama',
        text: [
          { type: 'img', src: 'pyjama.jpg', width: 120, height: 120 },
          `Pajamas are cozy and comfortable clothing that we wear for sleeping or relaxing at home. They come in various colors, patterns, and fabrics, making bedtime more fun. 
Pajamas are designed to keep us warm and snug during the night. They are usually made of soft materials like cotton or flannel, which feel gentle on our skin. Some pajamas even have cute prints of animals, cartoons, or superheroes, adding excitement to bedtime.
Putting on pajamas is a bedtime routine that helps us get ready for a good night's sleep. They provide a sense of comfort and relaxation, allowing us to unwind after a long day of activities.
Whether they have buttons, zippers, or elastic waistbands, pajamas are an essential part of our sleepwear. So, let's enjoy wearing our cozy pajamas and have sweet dreams!`
        ]
      }
    },
    {
      id: 'pyjama-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Pajamas are made of soft materials like cotton or *flannel (wool)*.
Putting on pajamas is a *bedtime (morning)* routine that helps us unwind after a long day.
Pajamas come in various colors, patterns, and fabrics, making *bedtime (mornings)* more *fun (sad)*.
Some *pajamas (uniforms)* have cute prints of animals, cartoons, or superheroes.`
      }
    },
    {
      id: 'pyjama-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'What are pajamas primarily worn for?',
            options: 'Sleeping or relaxing at home, Formal occasions, Swimming'
          },
          {
            qText: 'What materials are commonly used to make pajamas?',
            options: 'Cotton and flannel, Wool and polyester, Denim and leather'
          },
          {
            qText: 'Which of the following is NOT a characteristic of pajamas?',
            options: `Made of rough and uncomfortable materials
Available in various colors and patterns
Soft and gentle on the skin
Designed to keep us warm and snug`
          },
          {
            qText: 'What purpose does putting on pajamas serve?',
            options: `To maintain body temperature during sleep
To impress guests or family members
To exercise before going to bed`
          },
          {
            qText: 'What can pajamas feature to make bedtime more exciting?',
            options: `Cute prints of animals, cartoons, or superheroes
Inflatable pillows for added comfort
Built-in speakers for music
LED lights for illumination`
          }
        ]
      }
    },
    {
      id: 'giraffe',
      type: 'passage',
      label: 'Giraffe',
      style: 'big',
      data: {
        title: 'Giraffe',
        text: [
          { type: 'img', src: 'giraffe.jpg', width: 120, height: 120 },
          `Giraffes are the tallest animal on the planet. Even their legs are taller than most human beings. Giraffes love to live in dry climates where they can take the heat. They love to roam here and there in search of food to eat in bulk at a time. They love to eat leaves, herbs, and vines. They do not drink much water, despite having a large body.
Giraffes have a very long neck, and then they find it challenging to drink the water from the ground. They have to bend their legs to reach the ground and drink water. There have two horns.
Giraffes spend almost their lives in standing position. They sleep only 5-30 minutes in one day.`
        ]
      }
    },
    {
      id: 'giraffe-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Giraffes are known for their long *neck (trunk)*, which helps them reach leaves on tall trees.
Giraffes prefer to live in *dry (wet)* climates where they can tolerate the heat.
Giraffes have to *bend (straighten)* their legs to drink water from the ground.
Giraffes primarily eat *leaves (birds)*, herbs, and vines.
Despite their large bodies, giraffes do not consume much *water (food)*.
Giraffes spend most of their lives *standing (sleeping)*.
Giraffes sleep for only a short period of time, approximately *5-30 (2-10)* minutes per day.`
      }
    },
    {
      id: 'giraffe-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'Which animal is considered the tallest on the planet?',
            options: 'giraffe, elephant, camel'
          },
          {
            qText: 'Giraffes prefer to live in which type of climate?',
            options: 'Desert, Rainforest, Arctic'
          },
          {
            qText: 'How do giraffes drink water from the ground?',
            options: `They have to bend their legs to reach the ground.
They use their long necks to reach down.
They climb trees and drink rainwater.`
          },
          {
            qText: 'How long do giraffes typically sleep in one day?',
            options: '5-30 minutes, 8-10 hours, 4-6 hours'
          },
          {
            qText: 'How many horns do giraffes have?',
            options: 'two, one, none'
          }
        ]
      }
    },
    {
      id: 'rose',
      type: 'passage',
      label: 'Rose',
      style: 'big',
      data: {
        title: 'Rose',
        text: [
          { type: 'img', src: 'rose.jpg', width: 120, height: 120 },
          `Rose is one of the most beautiful flowers among several others. It has beautiful petals and a stem that is usually full of thorns. Roses can be found in many colors, out of which red and white are more common. There are pink and yellow roses too.
Apart from their beautiful look, roses have a wonderful fragrance that freshens up any space. Roses are so popular that they are one of the most preferred flowers for gifting.
The flower also has several beneficial properties, because of which many natural cosmetics use products derived from roses, like rose essence in soaps and perfumes, rose water and many more.
Rose is also an edible flower, thus the rose essence is added to many things like milk, sherbet, lassi, and even desserts and chocolates. Rose is rightfully called the king of flowers.`
        ]
      }
    },
    {
      id: 'rose-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `The *colors (texture)* of a rose can be red, white, pink, or yellow.
Roses have a delightful *fragrance (taste)* that can freshen up any space.
Many people consider roses to be one of their *preferred (hated)* flowers for gifting.
The *thorns (petals)* of a rose stem can prick your finger.
Rose *petals (sepals)* are used in making soaps, perfumes, and other natural *cosmetics (soups)*.
The *essence (leaves)* of roses is often added to desserts and chocolates for flavor.
Rose petals are *edible (unedible)* and can be consumed in various culinary creations.
Roses are known for their *beautiful (ugly)* look and pleasant *fragrance (taste)*.`
      }
    },
    {
      id: 'rose-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText:
              'What makes roses one of the most popular flowers for gifting?',
            options: `Their beautiful petals and thorny stem
Their wonderful fragrance
Their availability in various colors
*All of the above`
          },
          {
            qText:
              'Which of the following colors are more commonly found in roses?',
            options: `Red and white
Pink and yellow
Blue and green`
          },
          {
            qText:
              'In which of the following products is rose essence commonly used?',
            options: `Soaps and perfumes
Shampoos and conditioners
Toothpaste and mouthwash`
          },
          {
            qText: 'What are some of the beneficial properties of roses?',
            options: `They have a soothing fragrance
They are used in natural cosmetics
They are edible and can be used in food and beverages
*All of the above`
          },
          {
            qText:
              'Why is the rose often referred to as the "king of flowers"?',
            options: ` It is one of the most preferred flowers for gifting
It is edible and used in various culinary preparations
It has a wonderful fragrance and is used in natural cosmetics
*All of the above`
          }
        ]
      }
    },
    {
      id: 'fish',
      type: 'passage',
      label: 'Fish',
      style: 'big',
      data: {
        title: 'Fish',
        text: [
          { type: 'img', src: 'fish.jpg', width: 120, height: 120 },
          `A fish is an aquatic animal that lives underwater. It cannot breathe outside the water. It can breathe only in the water with the help of its gills. They can swim very fast underwater.
A normal fish has a lifespan of 20 years. A catfish has the longest lifespan of 60 years. More than 20,000 species of fish are found all over the world. They stay in groups, and their group is known as a shoal.
Sometimes groups of fish swim in the same direction, called schooling. They make different sounds and noises for communication. Some fish are carnivorous as they eat insects and other small fishes and some are herbivorous and eat weeds and sea plants.`
        ]
      }
    },
    {
      id: 'fish-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Fish have *gills (lungs)* to help them breathe underwater.
A catfish has the longest *lifespan (life)* among fish, living up to 60 years.
More than *20,000 (2000)* species of fish are found all over the world.
Fish swim together in groups known as a *shoal (school)*.
When fish swim in the same direction, it is called *schooling (shoaling)*.`
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'fish-word',
      data: {
        text: `Structures in fish that allow them to extract oxygen from water.|GILLS
The length of time a living organism is expected to live.|LIFESPAN
A group of fish swimming together.|SHOAL
When fish swim in the same direction in a coordinated manner.|SCHOOLING
Feeding on other animals as a primary source of nutrition.|CARNIVOROUS`
      }
    },
    {
      id: 'fish-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText:
              'What is the primary organ that enables fish to breathe underwater?',
            options: 'gills, nose, lungs'
          },
          {
            qText: 'Which type of fish has the longest lifespan?',
            options: 'Catfish, Clownfish, Salmon'
          },
          {
            qText:
              'What is the term for a group of fish swimming together in the same direction?',
            options: 'Schooling, Shoaling, Floating'
          },
          {
            qText: 'How do fish communicate with each other?',
            options: `By emitting sounds and noises
By using gestures
By releasing pheromones
By changing colors`
          },
          {
            qText: 'What do herbivorous fish primarily eat?',
            options: 'Weeds and sea plants, Other small fishes, Insects'
          }
        ]
      }
    }
  ]
};
