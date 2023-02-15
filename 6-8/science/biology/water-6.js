export default {
    id: 'water-6',
    label: 'Water',
    lockAfter: 4,
    list: [
      {
        id: 'notes',
        label: 'Water - Reading',
        type: 'passage',
        data: {
          text: `# How much water do we use?
          In our daily life we use a lot of water for many activities. We need water for drinking, brushing, bathing, washing utensils, washin clothes, cleaning floors etc. Water is used in industries for producing almost all the things that we use. So, we need water not only for our daily activities but also for producing many things. Water is an essential part of our life so it is important to use water carefully and conserve water.
          
          # Where do we get water from?
          Each of us may be getting water into our homes in different ways. But, finally, all of us get water from the same sources such as ponds, lakes, rivers and wells.
          
          # Water Cycle
          The circulation of water between ocean and land is known as the water cycle. 
          
          # Loss of Water by Plants
          Plants use a part of the water they absorb to prepare their food and retain some of it in their different parts. Remaining part of this water is released by the plants into air, as water vapour through the process of transpiration.
          
          # How are clouds formed? 
          At sufficient heights, the air becomes so cool that the water vapour present in it condenses to form tiny drops of water called droplets. It is these tiny droplets that remain floating in air and appear to us as clouds. Many drops of water join together to faorm large drops of water. Some drops of water become so heavy that they begin to fall to form rain.
          
          # Back to the ocean
          Most of the water that falls on the land as rain and snow sooner or later goes back to the oceans. This happens in many ways. Snow in the mountains melts into water. This water flows down the mountains in the form of streams and rivers. Some of the water that falls on land as rain, also flows in the form of rivers and streams. Most of the rivers cover long distances on land and ultimately fall into a sea or an ocean. However, water of some rivers flows into lakes. A part of the rainwater gets absorbed by the ground and seems to disappear in the soil. Some of this water is brought back to the air by the process of evaporation and transpiration. The rest seeps into the ground. Most of this water becomes available to us as ground water. Excessive rains may cause floods while lack of it for long periods may cause droughts.
          
          # Conservation of water
          The demand for water is increasing day-by-day. The number of people using water is increasing with rising population. In many cities, long queues for collection of water are a common site. Also, more and more water is being used for producing food and by the industries. These factors are leading to shortage of water in many parts of the world. Hence, it is very important that water is used carefully. We should take care not to waste water.
          
          # Rainwater Harvesting
          One way of increasing the availability of water is to collect rainwater and store it for later use. Collecting rainwater in this way is called rainwater harvesting.
          
          1. Rooftop rainwater harvesting: In this system the rainwater is collected from the rooftop to a storage tank, through pipes. This water may contain soil from the roof and need filtering before it is used. Instead of collecting rainwater in the tank, the pipes can go directly into a pit in the ground. This then seeps into the soil to recharge or refill the ground water.
          2. Another option is to allow water to go into the ground directly from the roadside drains that collect rainwater.
           `,
          title: 'Water'
        }
      },
      {
        label: 'Fill in the blanks',
        type: 'matchByDragDrop',
        id: 'match-drag-drop-1',
        data: {
          styles: {
            fontSize: '1rem',
            dashWidth: 80
          },
          text: `The process of changing of water into its vapour is called *evapouration*.
          The process of changing water vapour into water is called *condensation*.
          No rainfall for a year or more may lead to *drought* in that region.
          Excessive rains may cause *floods*.
          The circulation of water between ocean and land is known as the *water cycle*.
          Rain, hail and snow *replenish* water in rivers, lakes, ponds, wells and soil.`
        }
      },
      {
        id: 'fillup',
        label: 'Fill Up',
        type: 'fillup',
        data: {
          title: 'Click the blanks and fill it with the right word.',
          text: `Water vapour gets added to air by *evaporation (rain)* and transpiration.
          The water vapour in the air condenses to form tiny droplets of water, which appear as *clouds (mist)*. 
          Many tiny water droplets come together and fall down as *rain (cloud)*, snow or hail.
          Rain, hail and snow *replenish (diminish)* water in rivers, lakes, ponds, wells and soil.
          The circulation of water between ocean and land is known as the *water (vapour)* cycle.
          Excessive rains may cause *floods (droughts)*.
          The amount of usable water on earth is *limited (unlimited)* so it needs to be used carefully.`
        }
      },
      {
        id: 'evapouration-condensation',
        label: 'Evapouration or Condensation',
        type: 'classifySentence',
        data: {
          title: 'Classify based on the cause of the events as evapouration or condensation.',
          types: [
            {
              name: 'Evapouration',
              text: `Steam risisng from a hot girdle when water is sprinkled on it.
              Steam rising from weat clothes while they are ironed.
              Blackboard dries up after wiping it.`
            },
            {
              name: 'Condensation',
              text: `Water drops appear on the outer surface of a glass containing cold water.
              Fog appearing on a cold winter morning.`
            }
          ]
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
              text: ` The process of water changing into its vapour is called evaouration.
              Rainwater harvesting helps to conserve water.`
            },
            {
              name: 'False',
              text: `Water vapour is present in air only during the monsoon. 
              Water evaporates into air from oceans, rivers and lakes but not from the soil.`
            }
          ]
        }
      },
      {
        label: 'Back to the ocean',
        type: 'matchByDragDrop',
        id: 'match-drag-drop',
        data: {
          styles: {
            fontSize: '1rem',
            dashWidth: 80
          },
          text: `Most of the water that falls on the land as rain and snow sooner or later goes back to the *oceans*.
          Snow in the mountains *melts* into water which flows down the mountains in the form of streams and *rivers*.
          A part of the *rainwater* gets absorbed by the ground and seems to disappear in the soil.
          *Groundwater* is brought back to the air by the process of evaporation and transpiration. 
          Excessive rains may cause *floods* while lack of it for long periods may cause *droughts*.`
        }
      },
      {
        label: 'Water Cycle',
        type: 'sorting',
        data: {
          title:
            'Arrange the processes occuring in water cycle in correct order',
          text: 'Evapouration, Condensation, Sublimation, Precipitation'
        },
        id: 'sorting'
      },
      
  {
    type: 'completeWord',
    id: 'complete-word',
    label: 'Water Cycle',

    data: {
      title: 'Find the word',
      questions: [
        {
          word: 'WATER CYCLE',
          display: 'W_T__ _Y__E',
          hint: 'The continuous movement of water from the Earth to the atmosphere and back to the Earth.'
        },
        {
          word: 'EVAPOURATION',
          display: 'E____R____N',
          hint: 'The process in which water is changed into water vapour by the heat of the sun.'
        },
        {
          word: 'CONDENSATION',
          display: 'C___E___T___',
          hint: 'The process of converting water vapour into water on cooling.'
        },
        {
          word: 'CLOUDS',
          display: 'C___D_',
          hint: 'The water droplets join together to form _____.'
        }
      ]
    }
  },
  
  {
    type: 'completeWord',
    id: 'complete-word-2',
    label: 'Water Sources',

    data: {
      title: 'Find the word',
      questions: [
        {
          word: 'BUNDS',
          display: 'B____',
          hint: 'Made on the banks of river to save water.'
        },
        {
          word: 'PIPES',
          display: 'P_P__',
          hint: 'Responsible for water availability across the city.'
        },
        {
          word: 'BOREWELL',
          display: 'B_R__E__',
          hint: 'Extracts ground water through motors'
        },
        {
          word: 'DAMS',
          display: 'D___',
          hint: 'Stores water as well as generates energy.'
        },
        {
          word: 'TANKS',
          display: 'T___S',
          hint: 'Most common storage in big buildings.'
        }
      ]
    }
  },
      {
        id: 'mcq',
        label: 'Multiple Choice Questions - MCQ',
        type: 'mcq',
        data: {
          title: 'Multiple Choice Questions',
          questions: [
            {
              qText: 'What is formed when the water vapour in air condenses to form droplets of water?',
              options: `Cloud, Hail, Snow`
            },
            {
              qText: 'What will happen when there is excessive rainfall?',
              options: `Flood, Drought, Hailstrom`
            },
            {
              qText: 'What will happen when there is no rainfall for a long period of time?',
              options: `Drought, Flood, Eartquake`
            },
            {
                qText: 'Which process leads to loss of water from plants?',
                options: `Transpiration, Respiration, Evapouration `
              }
          ]
        }
      }
    ]
  };
  