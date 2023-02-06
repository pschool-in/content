export default {
  id: 'science-4',
  label: 'Science General',
  list: [
    {
      data: {
        isPractice: false,
        styles: {
          dashWidth: 70,
          fontSize: '1rem'
        },
        text: `Shivaji assumed the title of *chhatrapati*in 1647.
  Akbar started a new religion called *Din-i-ilahi*
  Maharana Pratap was a *great* king.
  Gandhiji used the method of *Non-violence*to oppose the british rule.
  Kadambini Ganguly was one of the first female doctors in the whole of *British empire*`,
        title: 'Drag and drop the words at proper places.'
      },

      id: 'drag-drop',
      label: 'Fill up by drag - Template',
      type: 'matchByDragDrop'
    },
    {
      data: {
        questions: [
          {
            qText: 'Which is the hardest part of tooth?',
            options: 'Enamel, Pulp'
          },
          {
            qText: 'The introduction of our constitution is called the ______.',
            options: 'Preamble, Charter'
          },
          {
            qText: 'In India, freedom of speech is _______.',
            options: 'a fundamental right, not a right'
          },
          {
            qText: 'Winds called the Loo blow during _______',
            options: 'Summer, Spring'
          },
          {
            qText: 'The head of a Municipal Corporation is called the ______.',
            options: 'Sarpanch, Mayor'
          },
          {
            qText: 'Which empire did Shivaji establish ?',
            options: 'The Maratha Empire, The Gupta Empire'
          }
        ],
        title: 'Multiple Choice Questions'
      },
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq'
    },
    {
      data: {
        text: `Coal, fuel
Lever, Bottle opener
Sugar and salt, preservatives
Saliva , salivary gland
Aurangzeb, Mugal ruler
Shivaji,  Maratha Empire`,
        title: 'Match the following'
      },
      id: 'match',
      label: 'Match the Following',
      type: 'match'
    },
    {
      data: {
        text: `Father of our Nation, Gandhiji
Temple built by Rajaraja chola, Kadambini Temple
Capital of Magadha, Patliputra
Important part of blood, red blood cells
Ability to do work, energy
Moving air is called ,wind`,
        title: 'Match with correct answer'
      },

      id: 'match-2',
      label: 'Match - Template',
      type: 'match'
    },
    {
      data: {
        questions: [
          {
            options: '1000, 100',
            qText: 'To covert km to m ,multiply the value by ________.'
          },
          {
            options: 'pie, Bar graph',
            qText: 'A circle graph is also called________.'
          },
          {
            options: '144/12, 12/144',
            qText: 'The price of 12 pen is Rs 144.What is price of 1 pen?'
          },
          {
            options: 'Rectangle, Square',
            qText:
              'The perimeter of a _______ is the sum of the length of its four sides.'
          },
          {
            options: '24, 42',
            qText: 'How many hours are there in a day______.'
          },
          {
            options: '8, 9',
            qText: 'How many Rs 500 notes make Rs 40000'
          },
          {
            options: 'hundredths, tenths',
            qText: 'The place value of 5 in 7.45 is ________.'
          },
          {
            options: 'Circle, Triangle',
            qText: 'Pie chart shows data as parts of a full _______.'
          },
          {
            options: 'Proper, improper',
            qText:
              'Fractions in which the numerator is smaller than the denominator are called ______ fraction.'
          },
          {
            options: '00:00 , 00:10',
            qText: 'The day starts at 12 midnight,written as ______ hours.'
          }
        ],
        title: 'Multiple Choice Questions'
      },

      id: 'mcq-4',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq'
    },
    {
      data: {
        isPractice: false,
        styles: {
          dashWidth: 70,
          fontSize: '1rem'
        },
        text: `The quantity of liquid that a container can hold is called its *volume*.
Pie chart is used to compare *data*
2/3 of year in months = *8 months*
It is day or night at 2:00 am? *Night*
The *Perimeter* of figure is sum of length of its side.
1/2,1/4,1/5 are called *improper*fraction
How many 250g are there in 1 kg *4*
What is the area of rectangle that covers 10 unit square *10*`,
        title: 'choose the correct option'
      },

      id: 'fillup-2',
      label: 'Fill up by drag',
      type: 'matchByDragDrop'
    },
    {
      data: {
        text: `750m + 250m,1 km
        quarter an hour,15 minutes
1000mL,1L
500 cm,5m`,
        title: 'Match with correct choice'
      },

      id: 'match-6',
      label: 'Match ',
      type: 'match'
    }
  ]
};
