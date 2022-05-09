export default {
  label: 'About Us',
  id: 'about-us',
  lockAfter: 1,
  list: [
    {
      label: 'Pick the correct option.',
      type: 'mcq',
      id: 'mcq',
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
      id: 'match',
      data: {
        title: 'Match smiley with emotion.',
        text: `🙂, Happy
😆, Laugh
😢, Sad
😠, Angry
😮, Surprise
😱, Fear`,
        leftSingle: true
      }
    },
    {
      label: 'School: Good or Bad',
      id: 'good-bad',
      type: 'classifySentence',
      data: {
        title: 'Good or Bad',
        types: [
          {
            name: 'Good',
            text: `Covering our mouth while sneezing.
Wearing clean clothes.
Following the class teacher's instruction.`
          },
          {
            name: 'Bad',
            text: `Shouting in the classroom.
Going late for the school.
Roaming in the classroom.
Tearing papers from notebook.`
          }
        ]
      }
    },
    {
      label: 'Home: Good or Bad',
      id: 'good-bad-2',
      type: 'classifySentence',
      data: {
        title: 'Good or Bad',
        types: [
          {
            name: 'Good',
            text: `Helping mom with small works.
Eating healthy foods.
Turn off the tap when not using.`
          },
          {
            name: 'Bad',
            text: `Watching TV for a long time.
Keeping the TV volume high.
Waking up late in the morning.
Eating before brushing the teeth.`
          }
        ]
      }
    }
  ]
};
