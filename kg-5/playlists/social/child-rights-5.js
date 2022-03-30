export default {
  id: 'child-rights-5',
  label: 'Child Rights-2',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Educational Rights ',
      type: 'passage',
      id: 'educational-rights ',
      data: {
        title: 'Educational Rights',
        text: `Education is important for people as well as for the nation. Education is the first step for a child's development. Education improves knowledge, skills, values and the quality of one's life. It also helps in the overall development of a country. 
Education doesn't mean that one should be literate. It is more than literacy. Education helps to analyze the reason, build skills to live, know what is right and wrong, lead a moral life.
Education helps in broadening one's mind. It removes superstitious beliefs. Education helps in increasing awareness of surroundings, social and political issues. It develops wisdom.
# Educational Rights
The Right to Education Act (RTE) specifies different responsibilities to the local authorities and government to ensure free and compulsory education. Right to Education Act (2009) describes the importance of free and compulsory education for children between 6 to 14 years of age. The child should be at the center of the education system.
# Features of RTE
1. Until the completion of elementary education, no student is stopped from school.
2. Twenty-five percent reservation is given to the economically underprivileged people in all private schools.
3. Improvement in the quality of education.
4. School infrastructure should be improved every three years.
5. Finances will be shared between the state and the central government.
# National Education Policy (NEP)
In 2019, the Government of India has framed the National Education Policy (NEP) to promote education among the people of India. The NPE covers all educational systems from primary to college levels. 
#  Educational Schemes
The most important milestone in education is the free mid-day meal program which was implemented by the former Chief Minister of Tamil Nadu, K.Kamaraj.
Indian educational system is mainly divided into four stages. They are:
1. Lower primary
2. Upper primary
3. Secondary
4. Higher secondary`
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
            text: `Every child has the right to have free and compulsory education.
Education helps in increasing awareness of surroundings, social and political issues.
The quality of education should be improved.`
          },
          {
            name: 'False',
            text: `Free food is not provided in any of the schools.
           Education is only about learning to read and write. `
          }
        ]
      }
    },
    {
      label: 'Fill in the Blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop2 ',
      data: {
        text: `*Education* is very important for every individual.
Every child has the *right* to have free and compulsory education.
Education should be *affordable* to common people.
*RTE* describes the importance of free and compulsory education for children between 6 to 14 years of age.
*NEP* is framed to improve the quality of education.
Education is provided in schools through *teachers*.`
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
            qText: ` What is the first step for a child's development?`,
            options: 'Education, Exploration, Excavation'
          },
          {
            qText: `What is the purpose of education?`,
            options: 'Overall development, '
          },
          {
            qText:
              'Which Act describes the importance of free and compulsory education for children?',
            options:
              'The Right to Education Act, The Right to School Act, The Right to Literacy Act '
          },
          {
            qText: 'Which policy was formed to promote education? ',
            options:
              'National Education Policy, National Policy on Elementary Education, National Policy on Literacy'
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match the Following ',
      id: 'match3',
      data: {
        title: 'Match the following.',
        text: `Gurukulam, Ancient 
K. Kamaraj, Free mid-day meal
RTE, 2009 
Education, wisdom
NEP, 2019 `
      }
    },
    {
      label: 'Who am I?',
      type: 'matchByDragDrop',
      id: 'drag-drop3',
      data: {
        text: `I am white when I am dirty and black when I am clean. Who am I? - *blackboard*
I am tall when I am young and I am short when I am old. Who am I? - *pencil*
I am wet when I am drying. Who am I? - *towel*
I have a neck but no head. Who am I? - *bottle*`
      }
    }
  ]
};
