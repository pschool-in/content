export default {
  id: 'communication-5',
  label: 'Communication',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Communication an Mass media ',
      type: 'passage',
      id: 'communication',
      data: {
        title: 'Communication and Mass media',
        text: `# Communication
Communication is simply the act of transferring information from one place, person, or group to another. Every communication involves at least a sender, a message and a recipient. Artificial satellites are used in modern methods of communication. The signals are delivered very quickly from one point to another. In India, we use artificial satellites for communication. These satellites are called the Indian National Satellites (INSAT).
# Audio-visual communication
We cannot see each other when we talk over the telephone. New communication technology has now made this possible on a mobile phone, to see the person we are talking to.
# Telecommunication
Telecommunications, also known as telecom, is the exchange of information over significant distances by electronic means. The information may be in the form of voice telephone calls, data, text, images, or video. 
# Mass media 
It is the means of communication that reaches large numbers of people in a short time. Example: newspaper, magazine, radio, television, etc.
# Advantages
1. We can easily contact people far away from us.
2. The time and effort spent in exchanging information can be saved.
3. They help to raise awareness about issues such as environmental balance, gender equality and cleanliness.
4. People can be forewarned about natural disasters like storms, tsunamis, floods, etc.
5. They build awareness about health, educational facilities, good things happening in society, etc.
6. They help in the successful implementation of government schemes launched for the benefit of people.
7. Awareness can be raised about matters related to food, clothes, shelter, education and health. This improves people’s way of life.
8. Mass media helps in the expansion of trade and industry.
# Disadvantages
1. Excessive use of the television, computer or mobile phones causes disorders of the eyes, ears and back. Psychological disorders and isolation, etc. are also possible.
2. We get all sorts of information through television channels and the internet. There are instances of this information being misused to disturb the peace and order in society.
3. Watching too much television leads to negligence of daily sports. This harms physical health.`
      }
    },
    {
      label: 'Modern Vs Traditional',
      id: 'modern-traditional',
      type: 'group',
      data: {
        title:
          'Classify the given items as modern or traditional means of communication.',
        types: [
          {
            name: 'Modern',
            text: 'e-mail, fax, television, mobile phones'
          },
          {
            name: 'Traditional',
            text: 'cave paintings, letters, telegram, notes'
          }
        ]
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Mass media help in the *expansion (diminishment)* of trade and industry.
Communication is simply the act of *transferring (translating)* information from one place, person, or group to another.
Information can be *misused (used)* to disturb peace and order in society. 
People can be *forewarned (distracted)* about natural disasters using mass media.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Excessive use of the television, computer or mobile phones causes disorders of the eyes, ears and back.
Every communication involves at least one sender, a message and a recipient.
Time spent on watching television leads to the neglect of outdoor sports and physical fitness.`
          },
          {
            name: 'False',
            text: `Mass media is the transferring of information between a small number of people.
Satellites are traditional means of communication.`
          }
        ]
      }
    },
    {
      label: 'Answer in one word',
      type: 'matchByDragDrop',
      id: 'drag-drop ',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The exchange of information over significant distances by electronic means is called *telecommunication*
The act of transferring information from one place, person, or group to another is called *communication*
Artificial satellites for communication in India is *INSAT*
The modern method of communication is *artificial satellite*
Means of communication that reach large numbers of people is called *mass media*`
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
        text: `We get all sorts of information through television channels and the *internet*.
Every communication involves at least one *sender*, a message and a recipient.
*Mass media* help in the successful implementation of government schemes.
Watching too much *television* leads to negligence of daily sports. This harms *physical health*.`
      }
    },
    {
      label: 'Choose the correct Answer(s)',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' What are the basic requirements of communication?',
            options: '*sender, *message, *receiver, none of the above'
          },
          {
            qText: 'Which is not a modern means of communication?',
            options: 'cave painting, telegram, fax, pager'
          },
          {
            qText:
              'Which organs are affected by excessive use of computers, television or phones? ',
            options: '*eyes, *ears, *back, nose'
          },
          {
            qText: 'Which of these is a misuse of mass media?',
            options: 'spread fake news, contact people, save time and effort'
          }
        ]
      }
    },
    {
      label: 'Advantage or Disadvantage',
      id: 'advantage-disadvantage',
      type: 'classifySentence',
      data: {
        title:
          'Classify the activities as an advantage or disadvantage of mass media.',
        types: [
          {
            name: 'Advantage',
            text: `We can easily contact people far away from us.
The time and effort spent in exchanging information can be saved.
They help to raise awareness about issues such as environmental balance, gender equality and cleanliness.
People can be forewarned about natural disasters like storms, tsunamis, floods, etc.`
          },
          {
            name: 'Disadvantage',
            text: `Excessive use of the television, computer or mobile phones causes disorders of the eyes, ears and back.
Information can be misused to disturb the peace and order in society.`
          }
        ]
      }
    }
  ]
};
