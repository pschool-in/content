export default {
  id: 'communication-3',
  label: 'Communication',
  lockAfter: 4,
  list: [
    {
      id: 'notes',
      label: 'Before the Internet',
      type: 'passage',
      data: {
        title: 'Before the Internet',
        text: `In the beginning, human beings used gestures and facial expressions to communicate. Later they used different kinds of sounds. Slowly the spoken language was developed. 
        They began to carve their thoughts onto the walls of caves and pieces of wood. Communication began in this way in very ancient times. After many years, they developed proper writing using letters, words and sentences.
To convey a message to people far away, they used homing pigeons. Messages were sent by tying a letter to the foot of a pigeon. Messages were also sent through runners who physically travel to handover the message. These are very riskly and there is no 100% guarantee that the message was received by the right people. 
With the development of technology and transportation, the way distant communication happen had changed.
# Postal Services
It is the oldest means of communication. We get postcards, stamps and envelopes from the post office. Letters posted in the letter box are taken by the postman to the post office. In the post office, these letters are sorted and then send by air, rail and ships to their destinations. We can send money orders also from the post office. To send urgent letters quickly, we can use the speed post facility. We can also use courier services to send parcels.
# Telegram Services
Telegram was the fastest mode of communication before the arrival of telephone. People can communicate 'few words' which will reach the target people in the paper format by a person physically delivering it. In India, telegram service was stopped in 2013.
Do you know?
Cats, dogs, sparrows and crows make different sounds in different circumstances. You will find that other animals also make such sounds. This means that animals also communicate with each other. They also send and receive messages.`
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `In olden days, people used *pigeons (crow, peacock)* to send message. They tie the message to its *legs (feather, beak)*.
Post office sells *stamps (pencils, notebook)*.
Through telegram, we can send *words (photos, videos)*.
Telegram service was closed in *2013(2003, 2009, 2019)*.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `We can send money through Post Office.
In olden methods, there was no 100% guarantee the message was delivered.
Through postal service, we can send letters to other states and countries.`
          },
          {
            name: 'False',
            text: `We can send photos and videos through telegram.
Even now, we can send message through telegram.
Only human beings can communicate. Animals cannot.`
          }
        ]
      }
    },
    {
      id: 'notes',
      label: 'Present Day Communication',
      type: 'passage',
      data: {
        title: 'Types of Communication',
        text: `Postal and Telegram cummunication are very slow when compared today's technology. Modern day communication is classified into two types - personal and mass communication.
# Personal communication 
If you want to communicate with a friend, or a group of friends or family and relatives, we use personal communication. Eg: phone call, letter, zoom video call
# Mass communication
If any communication reaches thousands or millions of people, it is called mass communication. Eg: TV, radio, newspaper, movie
# Telephone
It is the fastest means of communication. Landlines are still used in some places. But the majority of the people now use cellular or mobile phones. We can use internet in mobiles to send photographs and documents instantly.
# Computers
We can get information on any subject using computers. We can send e-mails, photographs, check weather, play games, watch films and songs, watch live shows, etc on a computer. Tablets and e-books are the latest developments in the field of communication. We can save a lot of paper by using e-books. Amazon Kindle is one of the famous e-book reader. Video call is a quick way to connect with those that stay far away.  We can talk with them looking at their face.
# Do you know?
Graham Bell invented telephone.
Marconi invented radio.`
      }
    },
    {
      label: 'Arrange in order',
      type: 'sorting',
      commonData: {
        title:
          'Rearrange the following based on the time of invention, from the earliest to the latest.',
        text:
          'Asia, Africa, North America, South America, Antarctica, Europe, Australia'
      },
      data: [
        `Gestures and expression
Using Sound
Spoken Language
Written Language`,

        `Writing symbols on the caves.
Writing letters on stones and leaves.
Writing on Paper.
Typing on Computer.
Typing on Mobile Phone.`,

        `Sending message through a runner.
Sending message through a pigeon.
Talking through a landline phone.
Talking through a mobile phone.
Video calling through mobile phone.`
      ],
      id: 'sort'
    },
    {
      label: 'Personal vs Mass Communication',
      id: 'classify-2',
      type: 'group',
      data: {
        types: [
          {
            name: 'Personal Communication',
            text: 'landline phone, zoom call, letter, whatsapp message'
          },
          {
            name: 'Mass Communication',
            text: 'newspaper, tv news, books, internet'
          }
        ]
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
            text: `Letters are used for personal communication.
Mobile phones are the fastest means for communication.`
          },
          {
            name: 'False',
            text: `Radio is used for personal communication.
Mass communication reaches only a few people.
Alexander Graham Bell invented the radio.`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Graham Bell, Telephone
Kindle, e-reader
Letter, Personal communication
Marconi, Radio
e-mail, Internet
Radio, Mass communication`
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: [
        `In *modern* time, communication was *easier* and faster.
In *olden* time, communication was *risky* and slower.
Fewer people are reached in *personal* communication.
Lots of people are reached in *mass* communication.`,

        `Graham Bell invented *telephone*.
Marconi invented *radio*.
Newspaper is an example for *mass* communication.
SMS is an example for *personal* communication.
*Postbox* came much before *Mobile phone*.`
      ]
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Which of the following is not a mass communication?',
            options: 'Telephone, Radio, TV'
          },
          {
            qText: 'Which of the following is not a personal communication?',
            options: 'Newspaper, Speed Post, Whatsapp Chat'
          },
          {
            qText: 'Which of the following is not possible with internet?',
            options: `Sharing toys, Sharing photo, Sharing images`
          },
          {
            qText:
              'Which of the following cannot be used to attend online class?',
            options: `Telephone, Mobile phone, Tablet, Laptop`
          },
          {
            qText: 'Video calls are possible because of the ______.',
            options: `Internet, SIM card, Battery, E-mail`
          }
        ]
      }
    }
  ]
};
