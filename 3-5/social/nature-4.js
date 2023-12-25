export default {
  id: 'nature-4',
  label: 'Nature-4',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Natural Disasters - Reading',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Natural Disasters',
        text: `# Natural Disasters
A natural event such as an earthquake or flood that causes great damage and loss of life is termed a Natural Disaster. 
1. Untimely rains: When it rains at other times besides the monsoon or pre-monsoon period, such rain is said to be untimely rain.
2. Flood: An overflow of a large amount of water beyond its normal limits.
3. Earthquake: A sudden violent shaking of ground causing great damage and destruction.
4. Tsunami: A long, high sea wave caused by earthquake or other disturbance.`
      }
    },
    {
      label: 'Choose the correct answer',
      type: 'matchByDragDrop',
      id: 'drag-drop-1',
      data: {
        title: 'Drag and drop the given words at the right blanks.',
        text: `Rain the comes in non-rainy season is called *untimely* rain.
*Hailstorms* can injure people as well as animals.
Sometimes *flood* waters enter areas where people are living.
One should go to a place at a *height* till floods recede.
Some movements in the bowels of the earth give rise to *waves*.
During an *earthquake* one should sit under a table or bed or stand under a doorframe.
When an earthquake has its starting point in the *sea* it gives rise to *gigantic* waves.`
      }
    },
    {
      label: 'Natural or Man-made',
      id: 'classify',
      type: 'classifySentence',
      data: {
        title: 'Classify the disasters as Natural or Man-made',
        types: [
          {
            name: 'Natural',
            text: `Cyclone
Death due to lightning
Lives disturbed due to heavy snowfall
Earthquake
Tsunami`
          },
          {
            name: 'Man-made',
            text: `Collision of two trains.
Air crash due to mechanical fault.
Fire due to explosion of gas cylinder.
Collapse of old house.`
          }
        ]
      }
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        title: 'Classify the sentence as true or false',
        types: [
          {
            name: 'True',
            text: `In every city and district headquarters, there is a fixed drill to be followed in case of a natural disaster.
During an earthquake, one should sit under a table or bed or stand under a doorframe.
Fields become waterlogged and crops rot during flood.`
          },
          {
            name: 'False',
            text: `During an earthquake move to an open space.
During flood sit under a table.
Hailstorm is a man-made disaster.`
          }
        ]
      }
    },
    {
      label: 'Answer in one word',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        title: 'Drag and drop the given words at the right blanks.',
        text: `Overflow of large amount of water - *flood*
Sudden violent shaking of ground - *earthquake*
Earthquake under sea - *tsunami*
Rain other than in monsoon - *untimely rain*
Storm of heavy hail - *hailstorm*`
      }
    },

    {
      label: 'Harming the Environment - Reading',
      type: 'passage',
      id: 'reading-2',
      data: {
        title: 'How we harm our Environment ?',
        text: `1. Vehicles like motor-cars, buses and scooters that run on mineral oil were invented to make transport easier.
2. We build trains.
3. We build dams, roads and railways.
4. We set up factories and build houses.
5. We release waste water from factories into rivers. 
6. Cities became crowded as people left their villages in search for work.
7. Trees were cut down to build new houses.
8. The number of vehicles increased.
9. Smoke began to cause breathing disorders.
10. As trees are felled, birds do not find nesting places.
11. Greater is the demand for food grain.
12. The demand for water is increased.
13. Previously, the waterwheel was used to draw well water. Now, pumps are used, so groundwater gets used up rapidly.
All these activities harm the environment either directly or indirectly.`
      }
    },
    {
      id: 'match-pollution',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Cutting trees, build houses
Factory waste, pollution
Smoke, disorders
Pump, groundwater
Vehicles, smoke`,
        title: 'Match the following'
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `*Cities (Villages)* became crowded as people left their villages in search of work.
Trees were *cut (planted)* down to build new houses.  
*Smoke (Mist)* began to cause breathing disorders.
As trees are felled, *birds (insects)* do not find nesting places.  
Previously, the *waterwheel (hand pump)* was used to draw well water.
When *pumps (waterwheel)* are used groundwater gets used up rapidly.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false-2',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Vehicles that run on mineral oil were invented to make transport easier.
Smoke pollutes the environment.
Cutting of trees leads to disappearance of birds.`
          },
          {
            name: 'False',
            text: `Man is not the most intelligent animal.
An increase in vehicles does not harm the environment.
Clearing of fields to construct factories is a good practice.`
          }
        ]
      }
    },
    {
      label: 'Choose the correct answer.',
      type: 'matchByDragDrop',
      id: 'drag-drop-3',
      data: {
        title: 'Drag and drop the given words at the right blanks.',
        text: `In summer, there is a *shortage* of water in many villages and cities.
A bullock or a male buffalo is used to turn the *waterwheel*.
*Man* is more intelligent than all other animals.
A mot is a large *leather* bag.
People leave their villages for the *cities* in search of better jobs.
Vehicles that run on *mineral oil* were invented to make transport easier.`
      }
    }
  ]
};
