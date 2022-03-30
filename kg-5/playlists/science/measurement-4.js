export default {
  id: 'measurement-4',
  label: 'Measurement',
  lockAfter: 4,
  list: [
    {
      id: 'notes',
      label: 'Measurement',
      type: 'passage',
      data: {
        text: `Measurement is the process of finding out the size or quantity of anything around us by comparing it with a standard time. Length, mass, volume, temperature and time are some of the basic things we measure daily.
# Measurement of Length
Length of something means its measurement from end to end. In early days, when there were no rulers, people used their body parts to measure the length. They measured length in terms of hand span, foot span, cubit or paces. But the length of body parts are different for different people, so these method never gave accurate results.
The standard unit of measuring length is metre(m). The smaller unit of length is centimetre(cm). To measure long distances on roads we use a bigger unit called kilometre(km). We use a ruler to measure the length of objects such as a pencil, a thread, a book, etc. To measure bigger lengths such as the length of a cloth we use a  measuring rod or a measuring tape.
# Measurement of Mass
The mass of an object is the measurement of matter contained in it. The standard unit of mass is kilogram(kg). The smaller units of mass are gram(g) and milligram(mg). Mass of heavier objects are measured in quintal and tonnes. Mass can be measured using a physical balance, a spring balance and an electronic balance.
# Measurement of Volume
Volume or capacity of an object is the measurement of space occupied by it. The standard unit used for measuring volume is millilitre(ml). Measuring cylinders are used to measure small volumes of liquids.
# Measurement of Temperature
Temperature of an object is the measurement of how hot or cold an object is. Temperature is commonly measured in degree Celsius or degree Fahrenheit. Temperature of a body is measured using an instrument called thermometer. 
# Measurement of Time
Time is usually measured in seconds, minutes, hours, days, months and years. There are 60 seconds in a minute, 60 minutes in an hour and 24 hours in a day. In earlier times when there were no clocks, movements of the sun and the moon were used to know the estimated time of the day. Then sundials were designed. After sundials came the sand clock. Later, pendulum clocks were used.`,
        title: 'Measurement'
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
            qText: 'Which of the following is the unit of volume?',
            options: `litre, metre, second`
          },
          {
            qText:
              'Which of the following is measured using a physical balance?',
            options: `mass, time, length`
          },
          {
            qText: 'Which of the following is measured using measuring tape?',
            options: `length, time, volume`
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        text: `A minute contains *60* seconds.
Thermometer is used to measure the *temperature*.
If you measure how much water a glass can hold, then you are measuring its *volume*.
Standard unit of mass is *kilogram*.
*Time* is measured using a clock or a watch.`
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
            text: `Millimetre is the smallest unit of length.
Months and years are units for measuring time.`
          },
          {
            name: 'False',
            text: `In early time, scale was used to measure length.
Digital balance is used to measure volume.`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `length, metre
mass, kilogram
volume, litre
temperature, celsius
time, seconds`,
        title: 'Match with appropriate choice'
      }
    },
    {
      label: 'Answer in one word',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        fontSize: '1rem',
        text: `Distance between two points is measured as *length*.
        Amount of matter present in a thing is measured as *mass*.
        The space occupied by an object is measured as *volume*.
        The hotness or coldness is measured as *temperature*.
        The duration of any process is measured as *time*.`
      }
    }
  ]
};
