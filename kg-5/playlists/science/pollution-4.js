export default {
  id: 'pollution-4',
  label: 'Pollution',
  lockAfter: 4,
  list: [
    {
      id: 'notes',
      label: 'Pollution',
      type: 'passage',
      data: {
        text: `# What is pollution?
We all depend on our surroundings for many things. We use the resources that we need and then discard the waste materials in the environmrent. This makes the environment dirty. The substances that make the environment dirty are called pollutants and the presence of these substances in the environment is called pollution.
# Air Pollution
The addition of pollutants like smoke, dust and gases in the air leads to air pollution. Smoke is the major cause of air pollution. It leads to breathing problems and serious diseases like asthma. Main sources of pollution are burning of garbage, smoke from factories, burning of forests, smoke from vehicles and materials at construction sites. Air pollution results in an increase in the temperature of the atmosphere leading to changes in the weather conditions.
# Land Pollution
The addition of pollutants in the land causes land pollution. It is also known as soil pollution. The most common sources of land pollution are use of fertilizers, throwing garbage in open spaces, overgrazing, unchecked mining and depositing animal wastes in the open. Land pollution reduces the fertility of the soil. It also results in loss of habitat for many plants and animals. To avoid land pollution we should generate less garbage and avoid use of polythene. The garbage generated should be disposed off properly.
# Water Pollution
Addition of harmful chemicals and unwanted substances in the water cause water pollution. The common sources of water pollution are washing of clothes and utensils in rivers, throwing of industrial wastes into rivers, seepage of pesticides into groundwater, oil spillage and disposal of human and animal wastes into rivers. Polluted water is unfit for drinking. Consumption of polluted water is the main reason for diseases in humans. Diseases like typhoid, cholera and dysentery are caused by polluted water. Polluted water also is harmful for fish and other aquatic animals.
# Noise Pollution
There are times when we get irritated by excessive honking and noise due to construction work going on in our surroundings. The presence of unwanted noise in the surrounding is called noise pollution. Some common sources of pollution are cars blowing horns, loudspeakers, burning of crackers and noise from construction machinery. Noise pollution causes headaches and earache. It can also cause deafness and mental illness. 
# Causes of pollution in villages
The main cause of pollution in villages is due to agricultural activities like burning of stubble in fields, threshing activities, grain dust, large scale use of tractor harvester, use of diesel operated tube wells, use of chemical products, wildfires, etc
# Causes of pollution in cities
The main causes of pollution in cities are burning of fossil fuels, industrial emission, emission from transportation, open burning of waste, construction and demolition, etc
# Prevention of pollution
Some measures to avoid pollution are: 
1. using bicycle for short distance travel
2. using renewable resources
3. using eco friendly chemicals
4. intelligent use of water
5. proper disposal of waste
6. planting of trees`,
        title: 'Pollution and its types'
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
            qText:
              'Which of the following diseases is caused due to regular drinking of polluted water?',
            options: `jaundice, malaria, headache`
          },
          {
            qText: 'Which form of pollution can cause hearing problems?',
            options: `noise, air, water`
          },
          {
            qText: 'Which of the following is released from vehicles?',
            options: `smoke, CNG, oxygen`
          },
          {
            qText: 'Which of the following activities cause pollution?',
            options: `construction of buildings, using solar energy, planting of trees`
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper place.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `During construction work, a lot of *dust* gets added into the environment.
*Noise* pollution irritates us instantly.
Polluted water causes *diseases* in humans.
*Fertility* of the soil is affected by soil pollution.`
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
            text: `Oil spill is a cause of water pollution.
Planting more trees reduce air pollution.`
          },
          {
            name: 'False',
            text: `Daily human activities like bathing in the river does not cause pollution.
We should use polythene bags to avoid land pollution.`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `noise, headache
polluted water, jaundice
air pollution, asthma
soil pollution, loss of crops`,
        title: 'Match with appropriate choice'
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper place.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `Smoke leads to *air* pollution.
Fish can die if the water they live in is *polluted*.
Rise in *temperature* of the atmosphere is caused by air pollution.
Headache and earache are caused due to *noise* pollution.
Washing clothes near the river causes *water* pollution.`
      }
    }
  ]
};
