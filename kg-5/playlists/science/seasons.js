export default {
  label: 'Seasons',
  id: 'seasons',
  list: [
    {
      label: 'Seasons - Reading',
      type: 'passage',
      data: {
        title: 'Seasons',
        text:
`One day, the seasons had an argument. Each one of them said, “I am the best!”. Spring said, “I am when flowers bloom and there is greenery everywhere. The sweet scent of the flowers and melodies of birds are spread everywhere.” Summer said, “Yes, but I am when the sun shines brightly. It feels so hot that everyone takes rest and enjoys lots of ice cream, cold drinks, and delicious watermelon." Rain said, “I am when there are puddles everywhere and kids enjoy playing in the rain.” Winter said, “I am when people wear sweaters, caps, gloves and scarfs to keep them warm.”
Since they couldn’t decide who was best, they agreed that they were all important because one could not do without the other.
# Duration of seasons
1. Summer season is from April to June. 
2. Rainy season is from July to September. 
3. Winter season is from October to January. 
4. Spring season is from February to March
# Effects of Seasons on living things
1. In spring the buds start to form flowers and animals wake up from their winter sleep. 
2. In summer fruits grow and summer vacation starts.
3. In winter some animals move to other places in search of warmth.
4. During rain, plants begin to grow and water bodies fill up.`
      },
      id: 'passage'
    },
    {
      label: 'Summer vs Winter',
      type: 'group',
      id: 'group',
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
    }
  ]
};
