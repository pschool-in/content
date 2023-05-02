export default {
  label: 'Science',
  id: 'science-3-sc',
  img: 'science',
  grade: '3-5',
  list: [
    {
      id: 'water-cyle',
      label: 'Water Cycle',
      type: 'dragAndDrop',
      data: {
        img: 'water-cycle.jpg',
        title: 'Water Cycle',
        width: 400,
        height: 218,
        wordWidth: 80,
        fontSize: '1.2rem',
        words: [
          {
            word: 'collection',
            x: 20,
            y: 190
          },
          {
            word: 'precipitation',
            x: 10,
            y: 80
          },
          {
            word: 'evaporation',
            x: 300,
            y: 100
          },
          {
            word: 'condensation',
            x: 160,
            y: 5
          }
        ]
      }
    },
    {
      type: 'dragDropImgLabel',
      label: 'Identify Organs ',
      id: 'drag-drop-organs',
      data: {
        title: 'Drag the organ names and drop on the images.',
        text: `brain | Brain
heart | Heart
kidney | Kidney
liver | Liver
lungs | Lungs
stomach | Stomach`
      }
    },
    {
      type: 'dragDropImgLabel',
      label: 'Types of Teeth',
      id: 'drag-drop-teeth',
      data: {
        title: 'Drag the names and drop on the images.',
        text: `incisor | Incisor
canine | Canine
premolar | Premolar
molar | Molar`
      }
    },
    {
      id: 'flower',
      label: 'Parts of a Flower',
      type: 'dragAndDrop',
      data: {
        img: 'flower.jpg',
        title: 'Parts of a Flower',
        width: 380,
        height: 336,
        wordWidth: 50,
        fontSize: '1.2rem',
        words: [
          {
            word: 'petal',
            x: 30,
            y: 100
          },
          {
            word: 'stigma',
            x: 50,
            y: 40
          },
          {
            word: 'style',
            x: 30,
            y: 170
          },
          {
            word: 'sepal',
            x: 40,
            y: 250
          },
          {
            word: 'ovary',
            x: 100,
            y: 300
          },
          {
            word: 'receptacle',
            x: 280,
            y: 290
          },
          {
            word: 'anther',
            x: 280,
            y: 20
          },
          {
            word: 'filament',
            x: 320,
            y: 200
          }
        ]
      }
    },
    {
      id: 'skeleton',
      label: 'Skeletal System',
      type: 'dragAndDrop',
      data: {
        img: 'skeleton.jpg',
        title: 'Skeletal System',
        width: 350,
        height: 448,
        wordWidth: 70,
        fontSize: '1.2rem',
        words: [
          {
            word: 'vertebrae',
            x: 70,
            y: 160
          },
          {
            word: 'pelvis',
            x: 70,
            y: 200
          },
          {
            word: 'skull',
            x: 60,
            y: 30
          },
          {
            word: 'ribs',
            x: 60,
            y: 110
          },
          {
            word: 'femur',
            x: 70,
            y: 300
          }
        ]
      }
    },
    {
      id: 'organs',
      label: 'Organs',
      type: 'dragAndDrop',
      data: {
        img: 'organs.jpg',
        title: 'Match the Organs',
        width: 304,
        height: 354,
        wordWidth: 60,
        fontSize: '1.2rem',
        words: [
          {
            word: 'heart',
            x: 230,
            y: 140
          },
          {
            word: 'liver',
            x: 10,
            y: 160
          },
          {
            word: 'brain',
            x: 50,
            y: 10
          },
          {
            word: 'lungs',
            x: 230,
            y: 70
          },
          {
            word: 'kidney',
            x: 0,
            y: 210
          },
          {
            word: 'stomach',
            x: 220,
            y: 220
          },
          {
            word: 'small-intestine',
            x: 0,
            y: 250
          },
          {
            word: 'large-intestine',
            x: 210,
            y: 270
          }
        ]
      }
    },
    {
      id: 'bicycle',
      label: 'Parts of a Bicycle',
      type: 'dragAndDrop',
      data: {
        img: 'bicycle.jpg',
        title: 'Parts of a Bicycle',
        width: 380,
        height: 276,
        wordWidth: 60,
        fontSize: '0.9rem',
        words: [
          {
            word: 'seat',
            x: 40,
            y: 30
          },
          {
            word: 'crossbar',
            x: 160,
            y: 40
          },
          {
            word: 'handlebar',
            x: 170,
            y: 10
          },
          {
            word: 'brake-lever',
            x: 290,
            y: 40
          },
          {
            word: 'tyre',
            x: 0,
            y: 70
          },
          {
            word: 'wheel',
            x: 300,
            y: 70
          },
          {
            word: 'hub',
            x: 340,
            y: 100
          },
          {
            word: 'chain',
            x: 130,
            y: 240
          },
          {
            word: 'pedal',
            x: 200,
            y: 230
          }
        ]
      }
    },
    {
      id: 'filtration',
      label: 'Filtration',
      type: 'dragAndDrop',
      data: {
        img: 'filtration.jpg',
        title: 'Filtration',
        width: 350,
        height: 317,
        wordWidth: 70,
        fontSize: '1.2rem',
        words: [
          {
            word: 'Beaker',
            x: 50,
            y: 40
          },
          {
            word: 'Filter Paper',
            x: 240,
            y: 120
          },
          {
            word: 'Residue',
            x: 20,
            y: 140
          },
          {
            word: 'Funnel',
            x: 210,
            y: 170
          },
          {
            word: 'Conical Flask',
            x: 240,
            y: 250
          },
          {
            word: 'Filtrate',
            x: 10,
            y: 280
          }
        ]
      }
    },
    {
      id: 'guess-animal',
      label: 'Guess the Animals',
      type: 'dragAndDrop',
      onlyBigScreen: true,
      data: {
        img: 'guess-animal.jpg',
        title: 'Guess the Animals',
        width: 700,
        height: 382,
        wordWidth: 70,
        fontSize: '1.2rem',
        words: [
          {
            word: 'Snail',
            x: 410,
            y: 255
          },
          {
            word: 'Parrot',
            x: 50,
            y: 235
          },
          {
            word: 'Crocodile',
            x: 600,
            y: 350
          },
          {
            word: 'Dragonfly',
            x: 170,
            y: 235
          },
          {
            word: 'Tiger',
            x: 350,
            y: 160
          },
          {
            word: 'Fish',
            x: 490,
            y: 350
          }
        ]
      }
    },
    {
      id: 'parts-mouth',
      label: 'Parts of Open Mouth',
      type: 'dragAndDrop',
      data: {
        img: 'open-mouth.jpg',
        title: 'Parts of Open Mouth',
        width: 350,
        height: 329,
        wordWidth: 100,
        fontSize: '1rem',
        words: [
          {
            word: 'Molar',
            x: 0,
            y: 130
          },
          {
            word: 'Premolar',
            x: 20,
            y: 230
          },
          {
            word: 'Canine',
            x: 30,
            y: 270
          },
          {
            word: 'Incisor',
            x: 60,
            y: 300
          },
          {
            word: 'Hard Palate',
            x: 270,
            y: 80
          },
          {
            word: 'Soft Palate',
            x: 280,
            y: 110
          },
          {
            word: 'Uvula',
            x: 40,
            y: 55
          },
          {
            word: 'Tongue',
            x: 290,
            y: 220
          },
          {
            word: 'Gum',
            x: 270,
            y: 280
          }
        ]
      }
    },
    {
      label: 'Force - Reading',
      type: 'passage',
      id: '3-force-passage',
      data: {
        title: `Force: Push and Pull`,
        text: `In everyday life, we push or pull things to move them. A push or pull is called force. This force helps us to do many things. It can make an object move. It can  stop a moving object. It can change the shape of an object, change the speed of the moving object and change the size of the object. There are different types of forces that act on a body.
When you throw a ball up, no matter how high it goes, it is sure to come down. This is because of gravitational force. This force attracts objects to the center of the earth.
When two objects touch each other, a special type of force develops between them. This special force is called friction. Friction slows down movements. When friction is very less, things move easily. When frictions is more, it becomes difficult to move things. A wet floor is slippery because there is very little friction. Friction makes it possible for you to write. You cannot hold a pencil in your hand without friction. It would slip out from your hands. The pencil cannot make a mark on the paper without friction.`
      }
    },
    {
      label: 'Force - MCQ',
      type: 'mcq',
      id: '3-force-mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `_________ helps to pull big and heavy things?`,
            options: `engine, computer, television`
          },
          {
            qText: `Kicking a ball is an example of a _________`,
            options: `push, pull, speed`
          },
          {
            qText: `A ball is pushed to the top of a hill. When it rolls down, it will _____________`,
            options: `go faster, go slower, stop`
          },
          {
            qText: `Picking up a ball is an example of _______`,
            options: `pull, push, stretch`
          },
          {
            qText: `When I ____________________, I move it away from me.`,
            options: `kick a ball, pull a chair`
          },
          {
            qText: `A push or pull cannot change an object's _________ .`,
            options: `weight, direction, shape `
          }
        ]
      }
    },
    {
      label: 'Push and Pull - Classify',
      type: 'group',
      id: '3-push-pull',
      data: {
        title: 'Drag and drop: Classify push and pull.',
        types: [
          {
            name: 'Push',
            text: `kicking a ball, Switching on light, pedalling cycle `
          },
          {
            name: 'Pull',
            text: `putting on gloves, lifting weights`
          }
        ]
      }
    },
    {
      label: 'Water, Ice & Vapor',
      type: 'matchByDragDrop',
      id: '3-water-ice-vapor',
      data: {
        styles: {
          dashWidth: 60
        },
        text: `If you *heat* water to a temperature of *100 °C*, it *evaporates* to form water vapour.
If you *cool* water to a temparature of *0 °C*, it *freezes* to form ice.`
      }
    },
    {
      label: 'Summer vs Winter',
      type: 'group',
      id: '3-summer-winter',
      data: {
        title: 'Summer vs Winter',
        types: [
          {
            name: 'Summer',
            text: `cotton clothes, sun-glass, cool-drinks, ice-cream`
          },
          {
            name: 'Winter',
            text: `woolen clothes, umbrella, sweater, raincoats`
          }
        ]
      }
    },
    {
      label: 'Seasons - MCQ',
      id: '3-seasons-mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `India gets lot of rain during ________.`,
            options: `monsoon, winter, summer`
          },
          {
            qText: `We need to drink lot of water during ______.`,
            options: `summer, winter, monsoon`
          },
          {
            qText: `What season India has during May month?`,
            options: `Summer, Winter, Monsoon, Spring`
          },
          {
            qText: `What season India has during January month?`,
            options: `Winter, Monsoon, Spring, Summer`
          },
          {
            qText: `________ helps in predicting weather.`,
            options: `Satellites, Rockets, Aeroplane, Astrology`
          }
        ]
      }
    },
    {
      label: 'Solar System - Reading',
      id: '4-solor-system-passage',
      type: 'passage',
      data: {
        title: `Solar System`,
        text: `We  can  see  numerous  stars  in  a  clear  sky at night.  The  sun  we  see  everyday  is  also a star and it is the  nearest  star  to  the earth.  The planets  revolve  around  the  sun  at  different  distances  in different orbits.  This  is  called solar system. 
The sun is a ball of fire. It is very  hot.  Living  organisms  cannot  exist  on the earth  in the absence  of  the  sun.           
1. Mercury is the smallest and the nearest planet to the sun.
2. Venus is the second planet. It is  very hot.  It  is  the  brightest  planet. 
3. Earth is the third  planet and it  has  air  and  water.  It  supports  life and we all live here. 
4. Mars  is  the  fourth  planet. It  is  red  in  colour.
5. Jupiter  is the fifth planet. It is the largest planet in the  solar  system. 
6. Saturn is the sixth planet. There are big rings around it. 
7. Uranus  is the seventh planet. It is made up of gases. It  also  has  rings. It  is  the  coldest  planet.
8. Neptune is  the  eighth  planet. It  is  bluish  green in  colour  and  it  is  surrounded  by  clouds.
9. Upto 2006, Pluto was considered as the ninth planet. Since  it does not have the  properties of a  planet,  it  is  now  regarded  as  a  dwarf  planet. `
      }
    },
    {
      label: 'Solar System - Fillup',
      id: '4-solor-system-fillup',
      type: 'matchByDragDrop',
      data: {
        dashWidth: 70,
        text: `*Sun* is the center of solar system.
*Jupiter* is the biggest planet.
*Saturn* has a big ring around it.
*Venus* is the bright and hottest planet.
*Uranus* is the coldest planet.
*Pluto* is a dwarf planet.`
      }
    },
    {
      label: 'Air',
      id: '4-air-fillup',
      type: 'matchByDragDrop',
      data: {
        dashWidth: 80,
        text: `We inhale *oxygen* and exhale *carbon-dioxide*.
The air present in Earth, is majorly made up of *nitrogen*.
Air has *weight* but it doesn't have *shape*.`
      }
    },
    {
      label: 'Plants Function',
      id: '4-plants-fillup',
      type: 'matchByDragDrop',
      data: {
        dashWidth: 50,
        text: `The *root* absorbs water from the soil and helps hold the plant in the soil.
The *leaf* uses the sun and air to make food for the plant.
The *stem* helps the plant to stand straight.
The *flower* makes the seeds and fruits.
All plants start as a *seed*.`
      }
    },
    {
      label: 'Digestive System - Reading',
      id: '4-digestive-system-passage',
      type: 'passage',
      data: {
        title: `Digestive System`,
        text: `We need energy to do our daily activities. We get energy from the food we eat. If we don't take food for some time, we will feel hungry.
A group of our body parts work together and convert the food we eat into fuel that body needs to function. While eating we first chew the food in our mouth. Saliva present in our mouth helps in breaking the food into small pieces. Your tongue does the work of pushing the food around, and your teeth will do the work of chewing.
The esophagus is like a flexible pipe and it takes the food from mouth to stomach. Stomach is the place where digestion happens. Acidic fluids present in stomach helps in breaking down the food further. Energy present in our food, is absorbed from the walls of stomach and passed through blood stream. 
Then the food is passed to small intestine. Bile is a digestive juice helps in breaking down the fats when the food passes through small intestine. Bile is created in liver, which is the largest human organ. 
After extracting fats and other nutrients, the waste is passed to large intestine, and finally reaches rectum.
All the body parts we discussed above, together form the digestive system. It is an important function of our body. Always eat healthy food even if they are less tasty, so that your digestive system will be happy.`
      }
    },
    {
      label: 'Digestive System - Parts',
      id: '4-digestive-system-parts',
      type: 'dragAndDrop',
      data: {
        img: 'digestive.jpg',
        title: `Drag and drop the parts of digestive sytem at appropriate places.`,
        width: 310,
        height: 380,
        wordWidth: 100,
        words: [
          { word: 'esophagus', x: 190, y: 90 },
          { word: 'stomach', x: 215, y: 186 },
          { word: 'liver', x: 100, y: 210 },
          { word: 'small intestine', x: 0, y: 310 },
          { word: 'large intestine', x: 220, y: 280 },
          { word: 'rectum', x: 190, y: 350 }
        ]
      }
    },
    {
      label: 'Digestive System - MCQ',
      type: 'mcq',
      id: '4-digestive-system-mcq',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText: `If we don't take food for a long time, we will feel ________`,
            options: `hungry, sleepy, angry, boring`
          },
          {
            qText: `Which is the biggest organ in our body?`,
            options: `Liver, Lungs, Heart, Kidney`
          },
          {
            qText: `Bile helps in breaking ______.`,
            options: `Fat, Glucose, Protein`
          },
          {
            qText: `What is the final destination of the food we eat?`,
            options: `rectum, large intestine, small intestine, stomach`
          },
          {
            qText: `What is the digestive juice generated by Liver.`,
            options: `Bile, Enzyme, Acidic acid`
          }
        ]
      }
    },
    {
      label: 'Brain - Reading',
      type: 'passage',
      id: '5-brain-passage',
      data: {
        title: `The Brain`,
        text: `Brain is the decision maker of our body. It controls all the movements of the body. It is responsible for human intelligence, memory and imagination.
Brain is the most important organ for us. That is why, we should wear a helmet when you ride a two wheeler.
# Structure of the Human brain
The brain is kept in a bony case called Skull. Skull is made up of eight immovable bones. The brain is protected by three membranes called meninges. The brain is made up of tiny nerve cells called neurons. The brain is the centre of the nervous system.
The brain is made up of three parts.             
1. Cerebrum
2. Cerebellum
3. Medulla oblongata

# Cerebrum
1. It is the largest part of the brain.
2. It is responsible for our memory.
3. We are able to learn languages, understand signs and symbols with the help of cerebrum.
4. The right side of the Cerebrum controls the left side of our body and vice versa.
5. Cerebrum is responsible for intelligence, imagination and reasoning.
# Cerebellum
1. It co-ordinates the movements of the muscles of our body.
2. It helps to maintain the balance of the body.

# Medulla oblongata
1. It is also called the brain stem.
2. It controls the breathing, heart beat and other involuntary muscles.
3. It connects the brain to the spinal cord.`
      }
    },
    {
      label: 'Parts of Brain - Practice',
      type: 'dragAndDrop',
      id: '5-brain-parts',
      data: {
        img: 'brain.jpg',
        title: `Drag and drop the parts of the brain at appropriate places.`,
        width: 271,
        height: 368,
        wordWidth: 120,
        words: [
          { word: 'Cerebrum', x: 20, y: 10 },
          { word: 'Medulla oblongata', x: 125, y: 270 },
          { word: 'Cerebellum', x: 10, y: 310 }
        ]
      }
    },
    {
      label: 'Brain - MCQ',
      type: 'mcq',
      id: '5-brain-mcq',

      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText: `What is the largest part of the brain?`,
            options: `Cerebrum, Cerebellum, Medulla oblongata`
          },
          {
            qText: `Brain is protected by ________.`,
            options: `skull, hair, neurons, spinal cord`
          },
          {
            qText: `Which part of the brain controls the movement of muscles?`,
            options: `Cerebellum, Medulla oblongata, Cerebrum`
          },
          {
            qText: `Which part of the brain controls heart beat?`,
            options: `Medulla oblongata, Cerebrum, Cerebellum`
          },
          {
            qText: `Which part of the brain connects the brain to the spinal cord?`,
            options: `Medulla oblongata, Cerebrum, Cerebellum`
          },

          {
            qText: `Medulla oblongata is also known as _________.`,
            options: `brain stem, neck, root of brain`
          },
          {
            qText: `The brain is made up of tiny nerve cells called _______.`,
            options: `neurons, meninges, nerves`
          },
          {
            qText: `Which part of the brain helps in learning a language?`,
            options: `Cerebrum, Cerebellum, Medulla oblongata`
          }
        ]
      }
    },
    {
      label: 'Types of  Houses - Reading',
      type: 'passage',
      id: '5-houses-type-passage',
      data: {
        title: `Types of  Houses`,
        text: `A  house is the dwelling place for human beings. Ancient men lived in caves. The caves protected them from wild animals, air, sun, rain and cold weather. 
# Igloo
Igloos are snow houses that can be found in Arctic parts. Here the temperate remains below -40 deg C throughout the year. Igloos look like a shell of tortoise.
# Bamboo houses
This type of houses are mainly found in earthquake prone places. They are mainly found in Indonesia, Japan and Andaman Islands. People will not get injured during earthquake due to the light weight of these houses.
# Tents
They are temporary houses. They are built using cloth, ropes and nylon. The soldiers, scouts, NCC students make these type of houses for their stay during camps. They are also called mobile houses.
# Tree house
These houses are built by the people in jungles to protect them from wild animals. They are built on trees. A platform is first constructed on the tree at the required height. The trunk of the tree itself becomes the pillar for the platform. The light-weight wood is used for building the rest of the house. A ladder is used to enter the house. During the night, the ladder is removed to protect from animals.
# Apartment
Many families can reside together in this type of houses. These are concrete houses with many floors.  They are built on strong foundation. Pillars are raised from the foundation and the building will stand on the strength of pillars. This type of houses are usually found in cities where there is large population and less space. Some buildings have too many floors and they are called skyscrapers. They look as if they are touching the sky.
The tallest building in the world is in Dubai and it is known as Burj khalifa.  The height of this building is 828 meters. It has got 160 floors. `
      }
    },
    {
      label: 'Types of  Houses - MCQ',
      type: 'mcq',
      id: '5-houses-type-mcq',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText: `The world's tallest building is present in _________`,
            options: `Dubai, New York, London`
          },
          {
            qText: `Which of the following is a temporary house?`,
            options: `tent, bamboo house, hut`
          },
          {
            qText: `Which type of house is usually build in jungle?`,
            options: `tree house, tent, bamboo house`
          },
          {
            qText: `Which type of house is usually build in earth-quake prone regions?`,
            options: `bamboo house, hut, tent, apartment`
          },
          {
            qText: `Which type of house is build in regions where there is high population? `,
            options: `apartment, tent, tree house`
          }
        ]
      }
    },
    {
      label: 'Satellites - Reading',
      type: 'passage',
      id: '5-satellite-passage',
      data: {
        title: `Satellites`,
        text: `Moon is called the natural satellite of Earth, because it revolves around the earth. Apart from moon, there are many man-made satellites that revolve around the earth. Satellites are send to space and put it on an orbit with the help of rockets. 
Man-made satellites helps us in many ways.
1. Satellites help in predicting weather. We get forecast about rains and storms because of them.
2. They guide us in transportation. They take photos of Earth from high distance and help us in preparing maps.
3. They are helpful in information and communciation technology.
4. They are helpful in studying the resources in ocean.
In India, ISRO is responsible for sending rockets and satellites to space. ISRO stands for Indian Space Research Organization. Usually rockets are launched from Sriharikota in Andhra Pradesh.
There are some man-made satellites, in which human beings live, to conduct scientific experiments. They are called space stations. Life in space station is very different from Earth, because there is no gravity in space. So people will keep floating in the space.`
      }
    },
    {
      label: 'Satellites - MCQ',
      id: '5-satellite-mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText: `_________ is the earth's natural satellite.`,
            options: `Moon, Sun, Space Station`
          },
          {
            qText: `Satellites of earth orbits around the ________.`,
            options: `Earth, Moon, Sun, Solar System`
          },
          {
            qText: `Life in space station is very different from earth, because of lack of ___________.`,
            options: `gravity, food, light, electricity`
          },
          {
            qText: `People go to space _____________`,
            options: `to do scientific experiments, for fun and adventure , to collect things from space`
          },
          {
            qText: `People go to space with the help of a ________. `,
            options: `rocket, satellite, airplane, hot air balloon`
          }
        ]
      }
    }
  ]
};
