export default {
  id: "clothes-4",
  label: "Clothes",
  pdf: "",
  lockAfter: 4,
  list: [
    {
      label: "Our Clothes",
      type: "passage",
      id: "passage",
      data: {
        title: "Our Clothes",
        text: `# Why do we need clothes?
1. To cover our body.
2. To protect ourselves from dust and dirt.
3. To feel warm during winters.
4. To avoid tanning from the sun.
5. To look presentable.
...what else can you think of?
# How do we know what to wear?
We usually have three main seasons: summer, winter and the rainy season. These seasons last for almost 4 months and after the completion of one cycle, they continue to follow each other. That’s why it’s called “cycle of seasons”. So, we can say that what we wear depends on the cycle of seasons.
In addition to this, we wear clothes of different designs, colors and tradition. So we can say that clothing style also depends on occupation, taste and occasion.`,
      },
    },
    {
      label: "Who wears what?",
      id: "men-women",
      type: "classifySentence",
      data: {
        title: "Who wears what?",
        types: [
          {
            name: "Men",
            text: `Dhoti
Lungi
Pheta
Pagdi`,
          },
          {
            name: "Women",
            text: `Saris
Salwar-suit
Frocks
Skirts
Gowns
Tops`,
          },
          {
            name: "Common",
            text: ` Shirts
Pyjama
Trousers
Jeans
T-shirts
Hats`,
          },
        ],
      },
    },

    {
      label: "Which clothes are suitable for which season?",
      id: "summer-winter",
      type: "group",
      data: {
        title: "Classify the below clothings.",
        types: [
          {
            name: "Summer",
            text: "Skirts, Shorts, Cotton clothes, Kurtas",
          },
          {
            name: "Winter",
            text: "Coats, Sweaters, Mufflers, Gloves, Socks",
          },
        ],
      },
    },
    {
      label: "Do you know?",
      type: "passage",
      id: "passage-2",
      data: {
        title: "Fun Fact!",
        text: `Uniforms of soldiers are called ‘camouflage’ because it matches with their environment so that the enemies could not spot them easily.`,
      },
    },
    {
      label: "Fun fact!",
      type: "matchByDragDrop",
      id: "fun-fact",
      data: {
        isPractice: false,
        title: "Guess what would they wear in the following surroundings",
        styles: {
          fontSize: "1.3rem",
          dashWidth: 80,
        },
        text: `Soldiers wear *khaki* clothes in deserts.
Soldiers wear *green* clothes in jungles.              
Soldiers wear *white* clothes in The Himalayas`,
      },
    },
    {
      label: "Who am I ?",
      type: "matchByDragDrop",
      id: "drag-drop-1",
      data: {
        isPractice: false,
        title: "Guess who are they!",
        styles: {
          fontSize: "1.3rem",
          dashWidth: 80,
        },
        text: `I wear a white coat and examine patients. - *Doctor*
I wear blue clothes and put out fires. - *Firefighter*
You always see me in khaki clothes. I go wherever there is a fight. - *Police*
I work in a hospital and take care of patients. - *Nurse*
I am always ready to protect the country.- *Soldier*`,
      },
    },
    {
      id: "match",
      label: "Season vs clothes",
      type: "match",
      data: {
        text: `Summer, Cotton clothes
Winter, Woolen clothes
Rain, Raincoat
Polyester, Artificial fiber
Silk, Silkworm`,
        title: "Match the following",
      },
    },
    {
      label: "What do we wear?",
      type: "matchByDragDrop",
      id: "drag-drop-2",
      data: {
        isPractice: false,
        title: "Guess when you wears what!",
        styles: {
          fontSize: "1rem",
          dashWidth: 80,
        },
        text: `What do we wear to protect our feet - *Shoes*
What do we wear to keep ourselves dry in rain - *Raincoat*
What do we wear when we go to bed - *Pyjamas*
What do we wear to protect ourselves from cold - *Sweater*
What do we wear to provide shade from sunlight - *Hat*
What do we wear to go to school - *Uniform*
What do we wear to protect our hands from cold - *Gloves*`,
      },
    },
    {
      label: "How clothes help us to protect ourselves?",
      type: "matchByDragDrop",
      id: "drag-drop-3",
      data: {
        isPractice: false,
        title: "Drag and drop the words at proper places.",
        styles: {
          fontSize: "1.3rem",
          dashWidth: 80,
        },
        text: `Clothes *protect* us from heat, cold and rain.
We wear *cotton* clothes in summer.
Woollen clothes keeps us *warm*.
We use *raincoat* or umbrella when it rains.`,
      },
    },
    {
      label: "True or False",
      id: "true-false",
      type: "classifySentence",
      data: {
        title: "Classify the below sentences as true and false",
        types: [
          {
            name: "True",
            text: `We get wool from sheep.
We get silk from silkworm.               
Lawyer wears black coat.`,
          },
          {
            name: "False",
            text: `We wear party wear to school.
We wear woolen clothes in summer.
Doctors wear yellow coats.`,
          },
        ],
      },
    },
    {
      label: "How & what about clothes- Reading",
      type: "passage",
      id: "passage-3",
      data: {
        title: "How & what about clothes",
        text: `# How clothes are made?
In the past, a spinning wheel was used to make yarn from cotton; and then, these yarns were used to make fabrics and clothes. In the modern times, yarn is made through machinery; although the procedure is same.
# What to do with old clothes?
1. If they’re in a good condition, donate them to needy people.
2. They can be reused for making new clothes.
3. Torn clothes can be used in dusting, moping, doormats etc.
4. Some clothes can also be reused into paper making. Eg- paper plates, false flowers, models etc.
# Fun fact!
Mahatma Gandhi, during the struggle for independence, promoted the use of Swasdeshi goods by making khadi yarn on his charakha. This led to formation of Charakha Mandals throughout the nation.
In case of unavailability of detergent, one can also use soap nuts, washing soda, ritha, hinganbet and limestone. All these are natural substances.`,
      },
    },
    {
      label: "Some more facts about clothes",
      type: "matchByDragDrop",
      id: "drag-drop-4",
      data: {
        isPractice: false,
        title: "Drag and drop the words at proper places.",
        styles: {
          fontSize: "1.3rem",
          dashWidth: 80,
        },
        text: `Gandhiji always wore clothes made of *khadi* yarn.
It is unsafe to wear *nylon* clothes while cooking or burning crackers.
People prefer wearing *cotton* clothes in summer.
*Raincoats* protect us from rain.
*Scarfs* protect our skin from the sun.
*Mufflers* protect our ears and neck from cold.`,
      },
    },
    {
      label: "What are the sources of these clothes?",
      id: "sources-clothes",
      type: "group",
      data: {
        title: "Identify the source of the clothe",
        types: [
          {
            name: "Animal",
            text: "Wool, Silk",
          },
          {
            name: "Plant",
            text: "Cotton, Jute",
          },
          {
            name: "Synthetic",
            text: "Nylon, Rayon",
          },
        ],
      },
    },
    {
      label: "True or False",
      id: "true-false-2",
      type: "classifySentence",
      data: {
        title: "Classify the below sentences as true and false",
        types: [
          {
            name: "True",
            text: `Detergent is used to wash clothes.
Clothing styles vary according to gender, situation, occasion, season, ethnicity and one’s taste.                  
Bamboo yarn is also used for making clothes.`,
          },
          {
            name: "False",
            text: `A person can wear same clothes forever.
Liquid handwashes are used to clean clothes.`,
          },
        ],
      },
    },
    {
      id: "match-2",
      label: "Match the following",
      type: "match",
      data: {
        text: `Sheep, Wool
Sweater, Winter             
Cotton, Cotton yarn              
Jute, Fibres              
Cap, Summer              
Raincoat, Rain`,
        title: "Match the following",
      },
    },
    {
      label: "Some more facts about clothes -2",
      type: "matchByDragDrop",
      id: "drag-drop-6",
      data: {
        isPractice: false,
        title: "Drag and drop the words at proper places.",
        styles: {
          fontSize: "1.1rem",
          dashWidth: 80,
        },
        text: `Cloth or fabric is made by intertwining *threads* together. 
Intertwining threads together is called *weaving*.
The wad of *cotton* is twisted into a long wick.
Sweaters, caps, etc. are woven with the help of *knitting needles* at home.
*Handlooms* and powerlooms are used to weave cloth on a large scale.
We must always have *clean* clothes in order to remain healthy and look neat and tidy.`,
      },
    },
    {
      label: "Natural Vs Artificial",
      id: "classify-2",
      type: "group",
      data: {
        title: "Arrange the materials based on their source of origin",
        types: [
          {
            name: "Natural",
            text: "Cotton, Wool, Silk, Jute",
          },
          {
            name: "Artificial",
            text: "Nylon, Rayon",
          },
        ],
      },
    },
    {
      label: "Clothes - Our Necessity",
      type: "passage",
      id: "notes-4",
      data: {
        title: "Clothes - Our Necessity",
        text: `# Want vs Need
We need clothes to cover and protect our body from dust and infection. But desire to have some clothes just because they look attractive is called ‘want’. Want is something we can live without because it’s not a necessity. On the other hand, fulfilment of the need is important for our living.
# Fun fact!
Sarees from some states of India have special significance and great popularity among women. Those sarees are Lucknow chikan, Kashmir silk, Banarasi silk, Kadiyal, Pitambari, Pochampalli, Narayanpet, Kanjivaram, Patola and Mysore silk.`,
      },
    },
    {
      label: "Guess the speciality of these cities",
      type: "matchByDragDrop",
      id: "drag-drop-9",
      data: {
        isPractice: false,
        title: "Drag and drop the words at proper places.",
        styles: {
          fontSize: "1.3rem",
          dashWidth: 80,
        },
        text: `Paithan and Yeolla are famous for *paithani*
Goa is famous for *shell jewellery*.
Banaras/ Varanasi is famous for * silk sarees*.
Punjab is famous for *patiala salwars*.
Kolkata is famous for *tant bengali sarees*.`,
      },
    },
    {
      label: "Additional questions in cloth",
      type: "fillup",
      id: "drag-drop-7",
      data: {
        isPractice: false,
        title: "Drag and drop the words at proper places.",
        styles: {
          fontSize: "1.3rem",
          dashWidth: 80,
        },
        text: `*Mumbai (Goa)* is famous worldwide for its textile mills.
Wanting things you do not need is *want (desire)*, not necessity.
It is cold. Put on your *coat (umbrella)*.
It is snowy. Put on your *gloves (skirt)*.`,
      },
    },
    {
      label: "Additional questions in cloth - 2",
      type: "fillup",
      id: "drag-drop-8",
      data: {
        isPractice: false,
        title: "Drag and drop the words at proper places.",
        styles: {
          fontSize: "1rem",
          dashWidth: 80,
        },
        text: `It is sunny. Put on your *sunglasses (boots)*.
I take my *umbrella (skirt)* on a rainy day.
I wear my *hat (boot)* on sunny day.
It is cool. Put on a *jacket (bag)*.
It is cold. Put on a *scarf (skirt)*.
It is *cold (rainy)*. Take your sweater.
It is *rainy (cold)*. Take your umbrella.`,
      },
    },
    {
      id: "wordsearch",
      type: "wordsearch",
      label: "WordSearch ",
      data: {
        title: "Find 20 clothing items from the table.",
        showWords: true,
        words: [
          {
            word: ["S", "K", "I", "R", "T"],
            marker: [0, 0, 4, 0],
          },
          {
            word: ["T", "S", "H", "I", "R", "T"],
            marker: [4, 0, 4, 5],
          },
          {
            word: ["P", "A", "N", "T"],
            marker: [7, 0, 4, 0],
          },
          {
            word: ["D", "R", "E", "S", "S"],
            marker: [0, 4, 0, 0],
          },
          {
            word: ["G", "O", "W", "N"],
            marker: [1, 4, 1, 1],
          },
          {
            word: ["S", "A", "R", "E", "E"],
            marker: [2, 4, 6, 4],
          },
          {
            word: ["T", "I", "E"],
            marker: [5, 2, 5, 4],
          },
          {
            word: ["G", "L", "O", "V", "E"],
            marker: [7, 1, 7, 5],
          },
          {
            word: ["B", "O", "W"],
            marker: [2, 3, 2, 1],
          },
          {
            word: ["S", "H", "O", "E", "S"],
            marker: [0, 6, 4, 6],
          },
          {
            word: ["S", "C", "A", "R", "F"],
            marker: [0, 7, 4, 7],
          },
          {
            word: ["B", "O", "O", "T"],
            marker: [1, 5, 4, 5],
          },
          {
            word: ["T", "R", "O", "U", "S", "E", "R"],
            marker: [8, 0, 8, 6],
          },
          {
            word: ["S", "O", "C", "K"],
            marker: [5, 7, 8, 7],
          },
          {
            word: ["C", "O", "A", "T"],
            marker: [0, 8, 3, 8],
          },
          {
            word: ["J", "E", "A", "N", "S"],
            marker: [4, 8, 8, 8],
          },
          {
            word: ["S", "W", "E", "A", "T", "E", "R"],
            marker: [9, 0, 9, 6],
          },
          {
            word: ["J", "A", "C", "K", "E", "T"],
            marker: [0, 9, 5, 9],
          },
          {
            word: ["V", "E", "S", "T"],
            marker: [6, 9, 9, 9],
          },
          {
            word: ["H", "A", "T"],
            marker: [3, 1, 3, 3],
          },
        ],
        table: [
          ["S", "K", "I", "R", "T", "N", "A", "P", "T", "S"],
          ["S", "N", "W", "H", "S", "B", "G", "G", "R", "W"],
          ["E", "W", "O", "A", "H", "T", "F", "L", "O", "E"],
          ["R", "O", "B", "T", "I", "I", "V", "O", "U", "A"],
          ["D", "G", "S", "A", "R", "E", "E", "V", "S", "T"],
          ["P", "B", "O", "O", "T", "H", "A", "E", "E", "E"],
          ["S", "H", "O", "E", "S", "S", "I", "T", "R", "R"],
          ["S", "C", "A", "R", "F", "S", "O", "C", "K", "R"],
          ["C", "O", "A", "T", "J", "E", "A", "N", "S", "E"],
          ["J", "A", "C", "K", "E", "T", "V", "E", "S", "T"],
        ],
        lang: "en",
      },
    },
    {
      id: "crossword",
      label: "Crossword",
      type: "crossword",
      data: {
        words: [
          {
            word: "blanket",
            marker: {
              x: 0,
              y: 0,
            },
            hint: "covers your body while you sleep.",
            direction: "down",
          },
          {
            word: "sweater",
            marker: {
              x: 7,
              y: 1,
            },
            hint: "protects your body from cold.",
            direction: "down",
          },
          {
            word: "muffler",
            marker: {
              x: 1,
              y: 7,
            },
            hint: "covers your neck and is also fashionable.",
            direction: "across",
          },
          {
            word: "socks",
            marker: {
              x: 3,
              y: 1,
            },
            hint: "covers your feet.",
            direction: "across",
          },
          {
            word: "coat",
            marker: {
              x: 5,
              y: 1,
            },
            hint: "worn in occasions and professional meetings.",
            direction: "down",
          },
          {
            word: "gloves",
            marker: {
              x: 1,
              y: 1,
            },
            hint: "protect your hands.",
            direction: "down",
          },
        ],
        title: "Winter clothings.",
        lang: "en",
        table: [
          ["B", "", "", "", "", "", "", ""],
          ["L", "G", "", "S", "O", "C", "K", "S"],
          ["A", "L", "", "", "", "O", "", "W"],
          ["N", "O", "", "", "", "A", "", "E"],
          ["K", "V", "", "", "", "T", "", "A"],
          ["E", "E", "", "", "", "", "", "T"],
          ["T", "S", "", "", "", "", "", "E"],
          ["", "M", "U", "F", "F", "L", "E", "R"],
        ],
      },
      editable: true,
    },
  ],
};
