export default {
  id: 'social-living-3',
  label: 'Social Living',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'My School',
      type: 'passage',
      id: 'my-school',
      data: {
        title: 'My School',
        text: `# Olden day Schools
In the olden days in our country, students used to go to their teacher’s house to receive an education. They lived there for a few years and completed their education. In the later period, a teacher and students of different ages came together. The teacher would then teach the students. Students traced letters and numbers on the ground. In this period, opportunities for girls’ education were very rare. When the British introduced the present school system, Mahatma Phule and Krantijyoti Savitribai Phule began in Pune, to educate girls.
# Changes in School System
Earlier, schools were held in every town and village. In villages, students gathered under a large banyan tree or in a shady place, where one teacher taught students of different ages. They were taught reading, writing and simple arithmetic. When the British came to India, they introduced the modern school system. Our people realized that there can be no progress without education. People began to come forward to send their children to school. This is how the present-day schools were formed.
# School
In school, we learn how to keep ourselves clean. We also learn the importance of keeping public places clean. Personal and public hygiene helps to keep us healthy. We all like school. A school has facilities like a library, playground and computer lab which we all use. Everyone should be able to use these facilities. We should follow certain rules while using these facilities. We should wait in queues. Books borrowed from the library should be returned on time. We should not tear or damage the pages of the books. We must keep the walls and benches in the classroom clean. We must return the sports equipment to its proper place after using it. 
Quarrels may arise between friends, but they should be resolved amicably. Every person who is quarreling should get a chance to present their side. Quarrels should not lead to physical fights. The teacher should be asked to help if a quarrel cannot be resolved. Resolving quarrels peacefully is a good way to end them. It teaches us to solve problems in community life amicably. If issues in community life are resolved peacefully, many of our problems will be solved.
Each child must get the opportunity to attend school. School is for everyone. We learn how to get along with others at school. We get to know a lot of people. At school, we realize that we are a part of society.`
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
            text: `We learn how to get along with others at school.
Pages of books should not be torn.
Books borrowed from the library should be returned on time.`
          },
          {
            name: 'False',
            text: `Sports equipment should not be put back in its place after use.
School is not for everyone.`
          }
        ]
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
        text: `Personal and public *hygiene* helps to keep us healthy.
Issues arising in community life should be *resolved* amicably.
*Each child* must have the opportunity to attend school.
Quarrels should not lead to *physical fights*.
In the olden days in our country, students used to go to their teacher’s *house* to receive an education. `
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
            qText: ' What should you do if a quarrel can not be resolved?',
            options:
              'ask for help from a teacher, fight, do not let them present their side'
          },
          {
            qText: 'What facilities does a school offer?',
            options: 'library, playground, computer lab, *all'
          },
          {
            qText: 'Who was the first Education Minister of independent India?',
            options: 'Maulana Azad, Nehru, Mahatma Gandhi'
          },
          {
            qText: 'When is National Education Day celebrated?',
            options: '11 Nov, 5 Nov, 5 Sept'
          }
        ]
      }
    },
    {
      label: 'Our Community Life',
      type: 'passage',
      id: 'our-community-life',
      data: {
        title: 'Our Community Life',
        text: `# Community
We like the company of other people. At home, we live with our parents. We also have neighbors. We miss our friends if we can’t meet them. We miss even our pets when they are not around. People like to live in groups. Living in the company of our family, neighbors and other people means living in a community. In a community, we get companions. We feel secure in their company. We help them and they, too, help us. This is known as co-operation. Mutual co-operation is the greatest benefit of community life. Rules are needed to build this co-operation.
Our daily needs are fulfilled in a community. Education and health facilities for everyone can be developed in a community. Goods have to be produced to satisfy needs. This is called the production of goods. The process of reaching those goods to people is called service. Production and service are both necessary to satisfy needs. Many people contribute to this. One person cannot produce everything; neither can he give all services by himself. Community life is interdependent.
# Rules in a Community
Before playing any game, we must first understand its rules. The rules of the game are the same for everybody. Every player has to follow the rules. Only then does the game go on smoothly. Similarly, to make sure that community life also goes on smoothly, we must follow the rules. Games have an important place in our lives. We imbibe the qualities of cooperation and unity through games. Participation, determination and passion are more important in games than winning or losing.`
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop3',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `People like to live in a *community*.
Mutual *co-operation* is the greatest benefit of community life.
Our daily *needs* are fulfilled in community life.
*Rules* are needed for the smooth running of community life.
Games teach us co-operation and *unity*.
Sports keep us *healthy*.`
      }
    },
    {
      label: 'Right or Wrong',
      id: 'right-wrong',
      type: 'classifySentence',
      data: {
        title: 'Classify the activities as right or wrong',
        types: [
          {
            name: 'Right',
            text: `Cross the road on the zebra crossing.
If injured, go to a doctor or Primary Health Centre at once.
Report a leaking tap in a public place to the gram panchayat or the local government body. `
          },
          {
            name: 'Wrong',
            text: `Jump the queue and climb on the bus.
Travel without a ticket.`
          }
        ]
      }
    },
    {
      id: 'match',
      type: 'match',
      label: 'Match the Following',
      data: {
        title: 'Match the Following',
        text: `Helping each other, co-operation
good community, follow rules
rules, same for everybody
sports, healthy`
      }
    },
    {
      label: 'Choose the correct Answer',
      id: 'mcq2',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' With whom do we live at home?',
            options: 'family, friends, neighbors'
          },
          {
            qText: 'When do we feel secure?',
            options:
              'in the company of companions, being alone, at a police station '
          },
          {
            qText: 'Why should we follow rules?',
            options:
              'for the smooth running of community life, to avoid quarrels, to avoid conflicts, *all'
          }
        ]
      }
    }
  ]
};
