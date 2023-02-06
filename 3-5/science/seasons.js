export default {
  label: 'Seasons',
  id: 'seasons',
  lockAfter: 2,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      data: {
        title: 'Seasons',
        text: `We know that our Earth rotates around the Sun. The time taken to complete one full rotation is called as an year. Based on the position of the Earth and the distance of the Sun, we get different seasons. There are four main seasons.
        # Rainy season
        During rainy season, it rains very frequently. Different parts of the world get rains at different time of the year. For example, Kerala and Karnataka get major rain in June to August, due to south-west monsoon. But Tamil Nadu and Andhra Pradesh get major rain in October to December, due to north-east monsoon. India gets maximum rain due to monsoon winds.
        # Winter season
        We feel very cold during winter season. We wear sweaters, caps, gloves and scarfs to keep us warm. In some part of the world, we can find snowfall during winter.
        # Summer season
        Summer season is very hot. We usually have it between April and June. Schools will be closed during summer. We should not roam in the Sun during the day time, and we should drink lot of water. We get fruits like mangoes and watermelon during summer.
        # Spring Season
        It is considered as a beautiful season, because it is neither hot, nor cold. Leaves and flowers will bloom during this season. 
        Some places on Earth are cooler than other places irrespectivie of seasons. For example, mountains are cooler than deserts.
        # Climate vs Weather
        Though both look similar words, they have different meaning. Climate is fixed for a place, but weather can change on daily basis. Bengaluru has cooler climate than Chennai. 
        But everyday, the temperature in a town will be different. It can be watched in News as weather report.`
      },
      id: 'passage'
    },
    {
      label: 'Summer vs Winter',
      type: 'group',
      id: 'group',
      data: {
        title: 'Summer vs Winter',
        types: [
          {
            name: 'Summer',
            text: 'cotton clothes, sun-glass, cool-drinks, ice-cream'
          },
          {
            name: 'Winter',
            text: 'woolen clothes, umbrella, sweater, raincoats'
          }
        ]
      }
    },
    {
      label: 'Seasons - MCQ',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'India gets lot of rain during ________.',
            options: 'monsoon, winter, summer'
          },
          {
            qText: 'We need to drink lot of water during ______.',
            options: 'summer, winter, monsoon'
          },
          {
            qText: 'What season India has during May month?',
            options: 'Summer, Winter, Monsoon, Spring'
          },
          {
            qText: 'What season India has during January month?',
            options: 'Winter, Monsoon, Spring, Summer'
          },
          {
            qText: '________ helps in predicting weather.',
            options: 'Satellites, Rockets, Aeroplane, Astrology'
          },
          {
            qText: 'In which season do animals move in search of warmth?',
            options: 'winter, summer, spring'
          },
          {
            qText: 'Which season is seen in India from July to September?',
            options: 'rainy, summer, winter'
          },
          {
            qText: 'In which season do the flowers bloom?',
            options: 'spring, rain, winter'
          }
        ]
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: [
        `Flowers bloom during *spring*.
        We can see snowfall during *winter*.
        *Climate* is fixed for a place.
        *Weather* changes on daily basis.
        *Bengaluru* has cooler climate than *Chennai*.`,

        `Kerala gets lot of rain due to *south*-*west* monsoon, between *June* and *August*.
        Tamil Nadu gets lot of rain due to *north*-*east* monsoon, between *October* and *December*.`
      ]
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `Weather changes very frequently.
            Kerala gets lot of rain due to north-east monsoon.
            Schools will remain closed during summer.`
          },
          {
            name: 'False',
            text: `We wear light clothes during winter.
            We can find snowfall in south India, during winter.`
          }
        ]
      }
    }
  ]
};
