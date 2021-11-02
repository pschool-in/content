export default {
    id: 'child-rights-4',
    label: 'Child Rights',
    pdf: '',
    lockAfter: 4,
    list: [
      {
        label: 'Rights and Duties of Children',
        type: 'passage',
        id: 'rights-and-duties-of-children',
        data: {
          title: 'Rights and Duties of Children',
          text: `# Citizen
          A citizen is a person who is a member of a country. A citizen enjoys the rights given to him/her by the country.
          
          # Constitution
          There are rules that all citizens of the country have to follow. The constitution of India sets these rules. The set of rules of a country is known as the constitution. The constitution lays down certain rules to help the country work together smoothly. 
          The Indian constitution is the lengthiest in the world. The original document was handwritten. If a foreigner stays in India for 12 years, they can get Indian citizenship.
          
          # Child Rights
          All over the world, there are different policies and rights. Children have certain rights to ensure that every child is treated the same. These are practiced to create a healthy environment for the children to live in.
          All over the world, there are many countries which have agreed to make some basic rights for children. India is one of them.
          The four major child rights are: 
          1. Right to survival 
          2. Right to development 
          3. Right to protection 
          4. Right to participation
          
          # Right to Survival
          It is to ensure every child has access to minimum standards of food. This helps in healthy growth in all children. There are different rights for children below the age of 6 and between the age of 6-14 years. This is because both age groups have different needs for their growth and development.
          
          #  WASH program
          It is a part of the right to survival act. WASH stands for Water, Sanitation and Hygiene. It means there should be access to clean water for drinking and other needs. Many diseases spread through water. To avoid these, having access to safe water is very important. Spreading awareness to washing hands with soap is also a part of the WASH program. 
          
          # Right to Development
          Every child has the right to go to school and develop life skills. All children below 14 years have the right to go to school. The government is responsible for providing free education to all. 
          
          # Child Labour
          Children are sometimes involved in different works at different places. This is called Child Labour. It is illegal to force children below the age of 14 to work. If we see any children forced to work around us then we should call the Childline number 1098 [Ten Nine Eight] and inform. 
          You can call at any time and it is free of cost. If you see child labor, talk to him/ her first. If they are forced to do the job, you can call the number and inform them. They will come and help the child.
          
          # Right to Protection
          Children have the right to be protected in all circumstances. The Indian government has set laws for the same. There are laws to punish people who touch children inappropriately. All you need to do is, keep an eye out for danger and be confident. There is another rule, no person should hit or harm children. It is wrong to hit children, as it affects their well-being. 
          Elders should help to create a safe environment for children to live in.
          
          # Right to Participate
          Children have the right to participate in matters related to them. This includes asking questions, giving suggestions and making decisions in things that affect them.
          Children have the right to participate in discussions and implementation of all things related to them.`
        }
      },
      {
        id: 'fillup',
        label: 'Fill in the blanks',
        type: 'fillupOptions',
        data: {
          title: 'Click the blanks and fill it with the right word.',
          text: `WASH stands for Water, Sanitation and *Hygiene (Health)*.
          There are *different (same)* rights for children of all age groups.
          Children have certain rights to ensure that every child is treated the *same (different)*. 
          The Indian constitution is the *lengthiest (shortest)* in the world. 
          If a foreigner stays in India for *12 (5)* years, they can get Indian citizenship.`
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
              text: `The child has the basic right to get polio drops.
              Hitting children is wrong.
              Children should be aware of bad touch.`
            },
            {
              name: 'False',
              text: `There are the same rights for all age groups of children.
              All children of age 6- 14 years should be employed.`
            }
          ]
        }
      },
      {
        label: 'Fill in the Blanks',
        type: 'matchByDragDrop',
        id: 'drag-drop ',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `Every *citizen* of the country can enjoy the rights and do duties. 
          *Children* also have special rights. 
          Children have the right to have *healthy food* for growth and development. 
          Children have the right to go to school and have a good *education*. 
          Children have the right to be *protected* against danger. 
          Children have the right to *participate* in the matters related to them.`
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
              qText: ' Which of the following is against Indian law?',
              options: 'Children below 14 years working in industries, Children participating in school activities, Children getting nutritious food, Children studying in school'
            },
            {
              qText:
                'Who is given polio drops?',
              options: 'children, senior citizens, men, women '
            },
            {
              qText: 'What is the set of rules of a country called?',
              options: 'constitution, textbook, storybook, rule book '
            },
            {
              qText: 'Which of the following is not a right of children? ',
              options: 'Getting a driving license, Getting an education, Getting adequate food, Living in a healthy manner '
            },
            {
                qText: 'What are the parts of your body where no one should touch?',
                options: '*lips, *chest, *between legs, hands '
            },
            {
                qText: 'What are the different rights you have as a child? ',
                options: '* Right to survival, *Right to development, *Right to protection, *Right to participate '
            }
          ]
        }
      },
      {
        type: 'match',
        label: 'Match the Following ',
        id: 'match',
        data: {
          title: 'Match the following.',
          text: `Childline number, 1098
          Vaccines, protect from diseases 
          WASH, sanitation 
          Citizen, member of a country
          Child labour, illegal`
        }
      },
      {
        label: 'Right or Wrong',
        id: 'right-wrong',
        type: 'classifySentence',
        data: {
          title: 'Classify the below actions as right or wrong.',
          types: [
            {
              name: 'Right',
              text: `Allowing children to go to school.
              Allowing children to participate in matters related to them.
              Do not allow anyone to touch the children inappropriately.`
            },
            {
              name: 'Wrong',
              text: `Hitting children.
              Child labour.
              Not allowing children to go to school.
              Starving children.`
            }
          ]
        }
      },
      {
        label: 'Answer in one word',
        type: 'matchByDragDrop',
        id: 'drag-drop2 ',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `*Survival* - the state or fact of continuing to live.
          *Development* - the process in which someone or something grows and becomes more advanced.
          *Protect* - keep safe from harm or injury. 
          *Inappropriately* - not correct.`
        }
      },
        {
      type: 'rightOne',
      id: 'spell',
      label: 'Right Spelling',
      data: {
        title: 'Pick the word with the right spelling',
        noCaps: true,
        text: `vaccine, vacine, vaccene
          adequate, adiquate, adequete
          survival, sarvival, sarvivel
          protection, protaction, protecsion
          constitution, constitusion, canstitution
          participation, partisipation, participetion
          sanitation, sanetation, sanitasion`
      }
    }
    ]
  };
