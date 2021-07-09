export default {
  label: 'Seasons',
  id: 'seasons',
  list: [
    {
      label: 'Summer vs Winter',
      type: 'group',
      id: '100',
      data: {
        label: 'Summer vs Winter',
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
      id: '200',
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
          }
        ]
      }
    }
  ]
};
