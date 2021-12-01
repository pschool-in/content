export default {
  id: 'solar-system-4',
  label: 'Solar System 3',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Day and Night',
      type: 'passage',
      id: 'day-and-night',
      data: {
        title: 'Day and Night',
        text: `# Day and Night 
          We live on the earth and the earth gets light from the sun. The earth’s shape is like that of a very large ball. Therefore, light from the sun does not reach the entire earth at the same time. Half the earth gets sunlight while the other half remains dark.
          We say that it is day in the half of the earth that gets light, while in the other half where sunlight does not reach, it is night. Every day we see day chasing night and then night chasing day. Night comes after day and then day follows night. This cycle goes on without stopping.
          
          # Points to remember
          
          The sun rises in the east in the morning and moves towards the west. In the evening, the sun sets in the west. So we feel that the sun goes around the earth. But that is only an impression. The earth actually turns around itself. That is why we have day and night on the earth.
          This spinning of the earth around itself is called the rotation of the earth.
          
          # Duration of Day and Night
          
          In November, the days become shorter and shorter, while nights become longer. 
          In May, the days become longer and longer while the nights become shorter and shorter.
          On March 22, day and night are both 12 hours long. Then, in our part of the earth, daytime increases slowly and night time decreases. This goes on till June 21. 
          On June 21, our day is the longest and the night is the shortest. From June 21, in our part of the earth, daytime becomes shorter and shorter and nights become longer. This goes on till September 22. 
          On September 22, our day is of 12 hours and the night too is of 12 hours. After that, the days continue to become shorter. The nights become longer. This goes on till December 22.
          On December 22, our night is the longest and the day is the shortest. From December 22, the day grows longer and the night, shorter. This goes on till March 22. 
          From March 22, this cycle repeats itself.
          
          # Points to remember
          
          In the whole year, 22 March and 22 September are the only dates on which day and night are of equal length of 12 hours each.
          When the days are longer and the nights are shorter, it is summer.
          When the nights are longer and the days are shorter, it is winter.`
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `The whole day has *24 (27)*hours.
          The sun appearing in the sky in the morning is called sun *rise (set)*.
          The disappearance of the sun from the sky in the evening is called sun *set (rise)*.
          From March 22 till *June 21 (December 22)*our days become longer and the nights shorter.
          When the days are longer and the nights are shorter, it is *summer (winter)*.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true or false',
        types: [
          {
            name: 'True',
            text: `In November, the days become shorter and shorter, while nights become longer. 
              In the whole year, 22 March and 22 September are the only dates on which day and night are of equal length of 12 hours each.
              On December 22, our night is the longest and the day is the shortest.`
          },
          {
            name: 'False',
            text: `In July, the days become longer and longer while the nights become shorter and shorter.
              When the nights are longer and the days are shorter, it is summer.`
          }
        ]
      }
    },
    {
      label: 'Name the Month',
      type: 'matchByDragDrop',
      id: 'drag-drop ',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `A month with shorter days and longer nights - *November*
          A month with longer days and shorter nights - *May*
          A month with the longest day and shortest nights - *June*
          A month with the shortest day and longest nights - *December*`
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop2',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `In the whole year, *22 March* and 22 September are the only dates on which day and night are of equal length of *12* hours each.
          When the days are longer and the nights are shorter, it is *summer*.
          When the nights are longer and the days are shorter, it is *winter*.
          The sun rises in the *east* in the morning and moves towards the *west*.`
      }
    },
    {
      label: 'Choose the correct Answer',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' From where does the earth get light?',
            options: 'sun, moon, satellite'
          },
          {
            qText: 'What is the earth shaped like?',
            options: 'large ball, large bowl, small ball, small bowl'
          },
          {
            qText: 'When do we say that it is daytime?',
            options:
              'when we get sunlight, when we do not get sunlight, none of the above'
          },
          {
            qText: 'When do we say that it is night time?',
            options:
              'when it gets dark, when it gets bright, when the sun rises'
          },
          {
            qText: 'When do we say that it is summer?',
            options:
              'longer days and shorter nights, longer nights and shorter days, equal days and nights'
          },
          {
            qText: 'When do we say that it is winter?',
            options:
              'Longer nights and shorter days, equal days and nights, shorter nights and longer days'
          }
        ]
      }
    },
    {
      label: 'Choose the correct Answer',
      id: 'mcq-2',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' From where does the earth get light?',
            options: 'sun, moon, satellite'
          },
          {
            qText: 'What is the earth shaped like?',
            options: 'large ball, large bowl, small ball, small bowl'
          },
          {
            qText: 'When do we say that it is daytime?',
            options:
              'when we get sunlight, when we do not get sunlight, none of the above'
          },
          {
            qText: 'When do we say that it is night time?',
            options:
              'when it gets dark, when it gets bright, when the sun rises'
          },
          {
            qText: 'When do we say that it is summer?',
            options:
              'longer days and shorter nights, longer nights and shorter days, equal days and nights'
          },
          {
            qText: 'When do we say that it is night?',
            options:
              'Longer nights and shorter days, equal days and nights, shorter nights and longer days'
          }
        ]
      }
    }
  ]
};
