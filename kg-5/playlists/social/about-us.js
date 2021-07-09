export default {
  label: 'About Us',
  id: 'about-us',
  list: [
    {
      label: 'Pick the correct option.',
      type: 'mcq',
      id: '100',
      data: {
        title: 'Pick the correct option.',
        questions: [
          {
            qText: 'We live in a ________.',
            options: 'family, school, zoo'
          },
          {
            qText: 'True or False: All families have pet.',
            options: 'False, True'
          },
          {
            qText: 'True or False: In a family, we should support each other.',
            options: 'True, False'
          },
          {
            qText: "Which room, we usually don't have in our house?",
            options: 'Pet Room, Kitchen , Living Room, Bed Room'
          },
          {
            qText: 'We spend most of our time in ________.',
            options: 'Living Room, Bed Room, Kitchen'
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match Smiley',
      id: '200',
      data: {
        title: 'Match smiley with emotion.',
        text:
          '🙂, Happy \n  😆, Laugh \n  😢, Sad \n 😠, Angry \n 😮, Surprise \n  😱, Fear',
        leftSingle: true
      }
    },
    {
      label: 'School: Good or Bad',
      id: '300',
      type: 'classifySentence',
      data: {
        title: 'Good or Bad',
        types: [
          {
            name: 'Good',
            text:
              "Covering our mouth while sneezing.\nWearing clean clothes.\nFollowing the class teacher's instruction."
          },
          {
            name: 'Bad',
            text:
              'Shouting in the classroom.\nGoing late for the school.\nRoaming in the classroom.\nTearing papers from notebook.'
          }
        ]
      }
    },
    {
      label: 'Home: Good or Bad',
      id: '400',
      type: 'classifySentence',
      data: {
        title: 'Good or Bad',
        types: [
          {
            name: 'Good',
            text:
              'Helping mom with small works.\nEating healthy foods.\nTurn off the tap when not using.'
          },
          {
            name: 'Bad',
            text:
              'Watching TV for a long time.\nKeeping the TV volume high.\nWaking up late in the morning.\nEating before brushing the teeth.'
          }
        ]
      }
    }
  ]
};
