export default {
    id: 'communication-3',
    label: 'Communication',
    lockAfter: 4,
    list: [
      {
        id: 'notes',
        label: 'Communication - Reading',
        type: 'passage',
        data: {
          text: `# Communication 
Human beings are the most intelligent creatures. They can communicate with one another in a number of ways. In the olden times, humans communicated through sounds. Later, they communicated through the spoken word, smoke signals and homing pigeons. This led to the use of written symbols on leaves and rocks, till paper was invented. Expression and exchange of information, messaging, talking, chatting, etc are all termed as communication. Personal communication occurs between two people and mass communication is used to reach many people at the same time.
# Types of Personal Communication
Postal services: It is the oldest means of communication. We get postcards, stamps and envelopes from the post office. Letters posted in the letter box are taken by the postman to the post office. In the post office these letters are sorted and then send by air, rail and ships to their destinations. We can send money orders also from the post office. To send urgent letters quickly, we can use the speed post facility. We can also use courier services to send parcels.
Telephone:  It is the fastest means of communication. Landlines are still used in some places. But the majority of the people now use cellular or mobile phones. We can use internet in mobiles and send photographs and documents instantly.
Computers: We can get information on any subject using computers. We can send e-mails, photographs, check weather, play games, download films and songs, watch live shows, etc on a computer. Tablets and e-books are the latest developments in the field of communication. We can save a lot of paper by using e-books. Video call is a quick way to connect with those that stay far away.`,
          title: 'Communication'
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
          text: `Graham Bell, telephone
kindle, e-reader
letter, personal
e-mail, internet
radio, mass`,
          title: 'Match with appropriate choice'
        }
      },
      {
        label: 'Fill in the blanks',
        type: 'matchByDragDrop',
        id: 'drag-drop',
        data: {
          isPractice: false,
          title: 'Drag and drop the words at proper place.',
          styles: {
            fontSize: '1rem',
            dashWidth: 80
          },
          text: `Communication has become more *easier* and faster.
Communication can be divided into *personal* communication and mass communication.
Urgent letters can be send by *speed post*.
*Postal service* is the oldest means of personal communication.`
        }
      },
      {
        label: 'Multiple Choice Questions',
        type: 'mcq',
        id: 'mcq',
        data: {
          title: 'Multiple Choice Questions',
          questions: [
            {
              qText: 'Who invented the telephone?',
              options: 'Alexander Graham Bell, Gallelio Gallili, Marconi'
            },
            {
              qText: 'Which of these is not a means of personal communication?',
              options: 'radio, postal service, telephone'
            },
            {
              qText: 'Which of the following is not a means of mass communication?',
              options: 'postal service, newspaper, radio'
            },
            {
              qText: 'How can we sent urgent letters?',
              options: `by speed post, by normal post, using postcards`
            }
          ]
        }
      },
      {
        label: 'Name the following',
        type: 'matchByDragDrop',
        id: 'drag-drop',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `The fastest means of communication - *telephone*
We need it for instant sharing of pictures and videos - *internet*
Save paper by using - *e-books*
Quick way to connect with those that live far away - *video call*`
        }
      }
    ]
  };
  