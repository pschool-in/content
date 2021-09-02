export default {
  id: 'water-3',
  label: 'Water',
  pdf: 'water-3.pdf',
  lockAfter: 4,
  list: [
    {
      label: 'Water - Reading',
      type: 'passage',
      id: '100',
      data: {
        title: 'Water',
        text: [
          'Water is one of the most important resources on Earth. All living things like insects, plants and animals need water to survive. People use water for various purposes and rain is one of the main sources.',
          '# Potable Water',
          'Drinking water is known as potable water. It is healthy for drinking and cooking.',
          'Potable Water is:',
          '1. free from harmful chemicals.',
          '2. transparent.',
          '3. odourless and colourless.',
          '4. free from bacteria which cause diseases.',
          '# Sources of Drinking Water',
          'Water is available through many sources, but not all of them are suitable for drinking. It can be boiled to kill the germs and to make it suitable for drinking.',
          '# Saving Water',
          'Only 3% of the water in the entire Earth is freshwater. Thus, water is precious and we should never waste it.',
          'Some ways to prevent wastage of water:',
          '1. Never let water overflow from buckets.',
          '2. Wash fruits and vegetables in a bowl and not under running tap.',
          '3. Always close the taps while brushing your teeth.',
          '4. Pour left over water in a plant.',
          '5. Close the tap properly after use.',
          '6. Use a sprinkler to water the garden.',
          '# Conservation of Water Bodies',
          'Raining rises streams and rivers. Some water gets collected in low lying areas like ponds and lakes. The flow of rivers is blocked by building a dam. Some rainwater seeps into the ground as underground water.',
          '# Lake',
          'It is a large area filled with water and surrounded by land. It is usually a part of a river or some other water source.',
          '# Pond',
          'A pond is a body of stagnant water, either natural or artificial and is smaller than a lake.',
          '# Tanks',
          'A water tank is a container that stores water for our daily use.',
          '# Methods to Conserve Water Bodies',
          '1. Deepening of ponds and lakes',
          '2. Plant trees at the bank of water bodies',
          '3. Reduce water pollution',
          '4. Avoid digging too many wells in a region',
          '# Water borne diseases',
          'Stagnant water is breeding ground for mosquitoes that result in Malaria and Dengue Fever.',
          'Waterborne diseases such as cholera, dysentery, typhoid are caused by drinking unclean water.',
          '# Experiment',
          'Let us assemble a Simple Pump',
          { type: 'img', src: 'img/science/waterPumpExperiment.png' },
          '# Materials needed',
          'A hollow tube – PVC, metal or even a long papaya stem',
          '# Procedure',
          'Hold the tube with your left hand and move it up and down into a bucket of water. Keep your right palm on top of the tube and open and close it with each up and down reciprocation. Soon, water will start squirting out. Here the up-down motion of the left hand does the pumping while the right palm acts like a valve.',
          '# Do you know?',
          '1. A camel can drink 60 to 100 litres of water at a time and live without water for several days.',
          '2. World Water Day is on 22nd March.'
        ]
      }
    },
    {
      label: 'Choose the best Answer - Water',
      id: '200',
      type: 'MCQ',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' Which is the main source of water?',
            options: 'Rain,Lake,Sea'
          },
          {
            qText:
              ' Only _____ of the water in the entire Earth is freshwater.',
            options: '3%,0.3%,30%'
          },
          {
            qText: 'By __________ water, we can kill its germs.',
            options: 'boiling,cooling,filtering'
          },
          {
            qText: 'Which of these is not true?',
            options:
              'We should always waste water, Plants and animals need water,  We should use water carefully,  Water is precious'
          },
          {
            qText: 'Where does the rain water go?',
            options:
              '* Seeps into the ground, * Plants absorb the water, * Mingles with sea and ocean, * Mixes with lake and pond'
          },
          {
            qText: 'Which animal can live without water for several days?',
            options: 'camel, elephant, lion, tiger'
          },
          {
            qText: 'World water day is observed on _________.',
            options: 'March 22, March 2, May 2, May 22'
          },
          {
            qText: 'Which of the following can be man-made?',
            options: 'pond, sea, river, ocean'
          },
          {
            qText: 'Which of the following is responsible for water in a well?',
            options: 'ground water, river, water tank, stream'
          },
          {
            qText:
              'Which of the following does not relate to preserving water?',
            options:
              'taking umbrella while going out in rain,avoiding water pollution,planting more trees,saving rain water'
          }
        ]
      },
      slug: 'MCQ',
      editable: true
    },
    {
      type: 'rightOne',
      id: '300',
      label: 'Odd one out',
      data: {
        title: 'Odd one out',
        fontSize: '1.3rem',
        noCaps: true,
        text: `Hill,Lake,Pond, Sea
Rose, Lily, Lotus,Water Hyacinth   
Fish,Horse, Tiger, Cow
Combing, Swimming, Washing,Bathing
Water Tank, Sea, Ocean, Lake
Ice Cream, Water, Ice, Vapour`
      }
    },
    {
      label: 'True or False',
      id: '400',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Saving water is our duty.
Always close the tap while brushing.
Planting more trees lead to rainfall.
It is necessary to collect rain water.`
          },
          {
            name: 'False',
            text: `Living things do not need water.
A tank is a larger than a reservoir.
We should wash our vehicles everyday.
We should bathe in shower to save water.`
          }
        ]
      }
    },
    {
      id: '500',
      label: 'Fill Up',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Drinking water is known as *potable (pot)* water.
Water that collects in the low lying areas is called *lake (sea)*.
It is our *responsibility (work)* to keep the public water resources clean.
The largest source of water on the earth is *ocean (sea)*.
*All (Few)* living things need water.
*Malaria (Cholera)* is caused by mosquitoes.`
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: '600',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `We need water to *clean* our face.
We need water to *brush* our teeth.
We need water to *cook* our food.
We need water to *wash* our vessels.
We need water to *drink*.`
      }
    },
    {
      label: 'Activities needing water',
      id: '700',
      type: 'group',
      data: {
        title: 'Classify the activities that need water.',
        types: [
          {
            name: 'Needs Water',
            text:
              'grow plant, water coloring, row a boat, knead dough, wash dress'
          },
          {
            name: "Doesn't need",
            text: 'play game, sing a song, run fast, write'
          }
        ]
      }
    },
    {
      type: 'sequence',
      label: 'Jumbled word',
      id: '800',
      data: {
        title: 'Find out the different sources of water.',
        text: 'rain, lake, pond, stream, well, sea, ocean'
      }
    },
    {
      label: 'Size of water bodies',
      type: 'sorting',
      id: '900',
      data: {
        title:
          'Sort the water bodies based on their size. (Largest should come at the top)',
        text: 'ocean, sea, river, lake, pond, water tank'
      }
    },
    {
      id: '1000',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Sea, Salt Water
River, Fresh Water
Dengue, Mosquito
Typhoid, Unclean water
Well, Ground water`,
        title: 'Match the following'
      }
    },
    {
      id: 'notes-2',
      label: 'Our need For Water',
      type: 'passage',
      data: {
        title: 'Our need For Water',
        text: `# How do we know water is everywhere?
        Apart from the water bodies like rivers, lakes and seas, there's plenty of water around us that we don't notice. For example, tears, saliva, water running from our nose, blood, lemon juice, juicy fruits, cucumber, tomato and many other things.
        # Why do we feel thirsty?
        Our body is 70% made of water. Its doesn't mean that it has flowing water within. It means that 70% functioning of our body is dependent on water. For example:
        1. Water keeps our blood thin.
2. It helps to digest our food.
3. Urination of waste materials. 
Therefore, we must have sufficient water in our body for the easy performance of these functions. In case there's not enough water, we feel thirsty.
# Fun Fact!
There are some plants like Bulrushes, Lotus, Water chestnut, Hyacinth and Spider plant that grow only in water. If we try to grow them in soil, they simply don't.
# Importance of water
Water is important, not just for us, but also for the animals, plants and all other living beings. We need it for drinking, cleaning, bathing, cooking, agriculture, industries etc.
Water is very important in our lives!
`
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        text: `Water keeps the blood *thin (thick)*.
        Animals *bathe (sleep)* in water.
        Water is  * very (less )* important in the lives of people.
        Roots of the plant absorb rainwater that has *seeped (sowed)* into the soil.
        People take care to provide drinking water for the animals they *keep (don't keep)*.
        We go near a waterhole in a forest to see *wild (domestic)* animals.`,
        title: 'Fill in the blanks.'
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper place.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `Plants that grow in water are called *aquatic*.
Only *3%* of the earth's water is fresh.
Only *0.5%* of the fresh water is available to us.
Our body has *70%* of water in it.
We should drink *12* glasses of water everyday.
*Whale* is the largest animal.`
      }
    },
    {
      id: 'notes-3',
      label: 'Where does water come from?',
      type: 'passage',
      data: {
        title: 'Where does water come from?',
        text: `Simply put, it comes from THE RAIN.
        Rain water leads to rise in rivulets, streams and rivers.
        Still water forms lakes and ponds.
        Some water gets deposited under the ground and we usually extract it through wells, hand-pumps and bore-wells.
        # Fun fact!
        Dams are built to slower the flow of water, to save it and to generate energy.
        Rainwater harvesting is another good technique for conserving water in which the rainwater is collected from the roofs of the house and gets deposited in the tank.
        # How rivers are formed?
        When rain falls on the mountains, water flows down. Further, many rivulets combine to form a river.
        `
      }
    },
    {
      id: 'classify-2',
      label: 'Natural vs Man made.',
      type: 'group',
      data: {
        title: 'Classify the below.',
        types: [
          {
            name: 'Natural',
            text: 
            'springs, streams, rivers, lakes, creeks, seas, oceans, ponds'
          },
          {
            name: 'Man-made',
            text: 'wells, dams, bore-wells, hand-pumps, canals, taps, reservoirs' 
          }
        ]
      }
    },
    {
      id: 'notes-4',
      label: 'More About Water',
      type: 'passage',
      data: {
        title: 'More About Water',
        text: `# 3 stages of water
        Solid: At cold places in the form of ice and snow.
Liquid: The flowing state of water and the most commonly used one.
Gas/ Vapour: Formed at high temperatures.
# Fun fact!
1. Pure water has no shape, colour, taste or smell and is transparent.
2. Air also consists of water vapours. As a result of it, glass holding ice forms droplets of water on its outside surface.
# New words!
1. Transparent: Something that you can see through.
2. Transluscent: Something you can partially see through.
3. Opaque: Something you cannot see through.
`
      }
    },
    {
      id: 'true-false-3',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Water is transparent.
            Natural water bodies consist of living organisms.
            Starfish and Seahorse are aquatic animals.`
          },
          {
            name: 'False',
            text: `Pure water looks bluish in colour.
            When water is heated a lot, it turns into ice.
            Sugar does not dissolve in water.`
          }
        ]
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-3',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper place.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `*Pure* water has no colour, smell or taste.
        Water is *transparent*.
        Water does not have a *shape* of its own.
        Ice is the *solid* state of water.`
      }
    },
    {
      id: 'fillup-2',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        text: `India gets a lot of rain during *monsoon (summer, winter)* season. 
Water is a *transparent (opaque, transluscent)* body.       
Ice is formed at *cold (hot, room)* temperature.      
The process of evaporation talks about water turning into its *vapour (solid, liquid)* state.   
Humidity is caused due to the presence of *water (ice, blood)* in the air.     
Water takes the *shape (size, taste)* of the container it is kept in.`,
        title: 'Fill in the blanks.'
      }
    }
  ]
};
