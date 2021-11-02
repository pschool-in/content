export default {
    id: 'child-rights-5',
    label: 'Child Rights-2',
    pdf: '',
    lockAfter: 4,
    list: [
      {
        label: 'Good Citizen',
        type: 'passage',
        id: 'good-citizen',
        data: {
          title: 'Good Citizen',
          text: `# Who is human?
          Man is a social animal. Human beings are bestowed with senses. Human beings think and act using their senses. They are born free but bound in the social web. They cannot live alone. They need social and emotional support. To live in society they need to develop some good values.
          
          # Aim of Education
          We are born with few values and rights. These values are further polished in educational institutions. Education aims to change a person into a valuable person. 
          
          # Good Values
          Good values are the qualities of a person that keep society running. These qualities can be developed by all. People should live together in unity. Living together in harmony despite all the disparities is a significant value. Helping others is also an important value. There should be no disparity among people and all are one. Moral and good values have to be grown among children so that they may become valuable citizens.
          The five major values are: 
          1. Personal Value: Personal value is the basic value for every individual. We must bring out the hidden values of a person that they acquire from their experiences. This leads to their overall development. Love, mercy, generosity, honesty, truth, friendship, hospitality, peace, tolerance, faith, etc. are personal values.
          2. Cultural Value: To become well-mannered and cultured is an essence of society. Irrespective of language and religion people live together in harmony. This helps to maintain cultural values.
          3. Social Value: We can maintain good values in public places by maintaining good relations with people, respecting elders, respecting nature, being tolerant and maintaining friendship.
          4. Disciplinary Value: Punctuality, involvement, treating everyone as equal, doing work on time, holding your morals, doing duties without fail, etc. are disciplinary values.
          5. Constitutional Value: Safeguard the public properties. Maintain the unity and integrity of the nation. Develop a scientific attitude. Protect the natural resources. Care for the environment. Honor the national symbols. Respect martyrs and their sacrifices. Preserve our culture and heritage. Develop patriotism.
          
          # Factors affecting values.
          1. Extreme faith in religion leads to communalism.
          2. Break the queue/rules.
          3. Spitting and dumping garbage anywhere.
          4. Polluting land and water.
          In the name of faith and worship, people violate rules and values. For example:
          1. Burning the old objects.
          2. Submerging idols in water bodies.
          3. Bursting crackers causes pollution.
          In the name of modernization polythene, plastics and non-decomposable things are used which causes various problems in the environment.
          
          #  Factors enriching values
          1. Literacy
          2. Creating awareness and interests
          3. Trying hard till success
          4. One’s evaluation
          5. Acceptance
          6. Self-confidence
          One main feature of good value is to preserve hygiene. Each person should be taught to be hygienic and follow the routine given below:
          1. Wake up early in the morning
          2. Brush your teeth
          3. Have a bath
          4. Wear clean clothes
          5. Wear slippers/shoes
          6. Trim hair and cut the nails
          7. Wash hands before and after meals.`
        }
      },
      {
        id: 'fillup',
        label: 'Fill in the blanks',
        type: 'fillupOptions',
        data: {
          title: 'Click the blanks and fill it with the right word.',
          text: `The word civic means *citizen (human)* of a nation.
          The main objective of education is to change a person into a *valuable (arrogant)* person.
          United we *stand (live)* divided we fall.
          *Mannerism (Generosity)* is an important feature of social values.
          Good values are developed by *practicing (ignoring)* them.`
        }
      },
      {
        label: 'Affect or Enrich',
        id: 'affect-enrich',
        type: 'classifySentence',
        data: {
          title: 'State whether these actions affect or enrich our good values.',
          types: [
            {
              name: 'Affect',
              text: `Break the queue/rules.
              Spitting and dumping garbage anywhere.
              Polluting land and water.`
            },
            {
              name: 'Enrich',
              text: `Trying hard till success
              Acceptance
              Self-confidence`
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
          text: `*Honesty* is the best policy.
          The best relationship is *friendship*.
          We show *hospitality* to our guests.
          Always speak the *truth*.
          We must maintain *tolerance* in public.`
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
              qText: ' Which of these are personal values?',
              options: '*Love, *mercy, *generosity, *honesty'
            },
            {
              qText:
                'Which of these is not a social value?',
              options: 'Spitting in public, Respect elders, Respect nature, Be tolerant '
            },
            {
              qText: 'What is the soul of disciplinary value?',
              options: 'protect equality, love, mercy, peace '
            },
            {
              qText: 'Which of the following does not enrich good values? ',
              options: 'Polluting land and water, Literacy, Creating awareness and interests, Trying hard till success'
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
          text: `National symbol, flag
          Environment, tree
          Public property, bus
          Harmony, India`
        }
      },
      {
        label: 'Hygiene',
        type: 'fillupOptions',
        id: 'fillup2 ',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `Wake up *early (late)* in the morning
          Brush your *teeth (hair)*.
          Wear *clean (dirty)* clothes.
          Trim hair and *cut (grow)* the nails.
          Wash hands *before and after (before)* meals.`
        }
      },
      {
        type: 'match',
        label: 'Match the Following ',
        id: 'match2',
        data: {
          title: 'Match the following.',
          text: `Natural character, Affecting factor 
          Culture, Language
          Society, Tolerance
          Discipline, Punctuality`
        }
      },
      {
        label: 'Educational Rights ',
        type: 'passage',
        id: 'educational-rights ',
        data: {
          title: 'Educational Rights',
          text: `# Importance of Education 
          Education is important for people as well as the nation. Education is the first step for a child‛s development. Education improves knowledge, skills, values and the quality of one‛s life. It also helps in the overall development of a country. 
          Education doesn‛t mean that one should be literate. It is more than literacy. Education helps to analyze the reason, build skills to live, know what is right and wrong, lead a moral life.
          Education helps in broadening one‛s mind. It removes superstitious beliefs. Education helps in increasing awareness of surroundings, social and political issues. It develops wisdom.
          
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
          4. Higher secondary
          
          # Sarva Shiksha Abhiyan (SSA)
          The Sarva Shiksha Abhiyan (SSA), the Right to Education Act (RTE) Act have improved educational performance. Sarva Shiksha Abhiyan (SSA) (Education for All) was launched in the year 2001.
          # Objectives of Sarva Shiksha Abhiyan
          1. Increasing the enrolment in primary schools
          2. Getting access to free and compulsory education for children up to age 14.
          3. Improving the quality of education.
        
          # Rashtriya Madhyamik Shiksya Abhiyan (RMSA)
          Rashtriya Madhyamik Shiksya Abhiyan (RMSA) was launched in 2009. This program aims to raise the minimum level of education to class X.
          
          # Samagra Shiksha (SS)
          In 2018, the government of India wanted to provide a single scheme for school education starting from pre-school to Class XII. This scheme is known as Samagra Shiksha (SS).
          # Objectives of Samagra Shiksha
          1. Providing quality education and improving learning outcomes of students.
          2. Supporting all state governments in implementing RTE.
          3. Focusing on girl education.
          4. Focusing on digital education.
          In the past two decades, India has achieved a maximum enrollment of students in schools.
          
          # Words of Wisdom
          
          “Literacy in itself is no education. Literacy is not the end of education.” “Real education consists in drawing the best out of yourself.” ~ Mahatma Gandhi
          “Sisters and brothers of America.” “ Education is the manifestation of the perfection already in man.” ~ Swami Vivekananda
          
          # More to Know
          Gurukulam is the system of education that was practiced in ancient India. Guru (teacher) and the Shishya (student) lived in Ashram.
          The legislative section is divided into three lists: Union List, State List and Concurrent List. Education comes under the Concurrent List.
          The first National Education Policy was implemented in 1968 followed by the second one in 1986.
          Samagra Shiksha subsumes the three Schemes of Sarva Shiksha Abhiyan
          (SSA), Rashtriya Madhyamik Shiksha Abhiyan (RMSA) and Teacher Education (TE).`
        }
      },
      {
        id: 'fillup3',
        label: 'Fill in the blanks',
        type: 'fillupOptions',
        data: {
          title: 'Click the blanks and fill it with the right word.',
          text: `Gurukulam is the system of education that was practiced in *ancient (modern)* India. 
          Guru and the Shishya lived in *Ashram (Bangalow)*.
          Education comes under the *Concurrent (Union)* List.
          The first NEP was implemented in *1968 (1908)* followed by the second one in 1986.
          Samagra Shiksha subsumes the *three (four)* Schemes of SSA, RMSA and Teacher Education.`
        }
      },
      {
        label: 'True or False',
        id: 'true-false',
        type: 'classifySentence',
        data: {
          title: 'Classify statements as true or false',
          types: [
            {
              name: 'True',
              text: `Every child has the right to have free and compulsory education.
              Education helps in increasing awareness of surroundings, social and political issues.
              The former Chief Minister of Tamil Nadu, K.Kamaraj has implemented a Free mid-day meal program.`
            },
            {
              name: 'False',
              text: `Right to School Act describes the importance of free and compulsory education for children.
              Numeracy is the first step towards making one educated.`
            }
          ]
        }
      },
      {
        label: 'Fill in the Blanks',
        type: 'matchByDragDrop',
        id: 'drag-drop2 ',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `*Education* is very important for every individual.
          Every child has the *right* to have free and compulsory education.
          Education should be *affordable* to common people.
          The *Right to Education* Act (2009) describes the importance of free and compulsory education for children between 6 to 14 years of age.
          *Samagra Shiksha Scheme* improves the quality of education and the learning of students.`
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
              qText: ' What is the first step for a child‛s development?',
              options: 'Education, Exploration, Excavation'
            },
            {
              qText:
                '“Education is the manifestation of the perfection already in man”. To whom do these words of wisdom belong?',
              options: 'Swami Vivekananda, Mahatma Gandhi, Dr. Radhakrishnan '
            },
            {
              qText: 'Which Act describes the importance of free and compulsory education for children?',
              options: 'The Right to Education Act, The Right to School Act, The Right to Literacy Act '
            },
            {
              qText: 'Which policy was formed to promote education? ',
              options: 'National Education Policy, National Policy on Elementary Education, National Policy on Literacy'
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
          text: `Gurukulam, ancient 
          K. Kamaraj, free mid-day meal
          RTE, 2009 
          Education, wisdom
          Samagra Shiksha, 2018 `
        }
      },
      {
        label: 'Who am I?',
        type: 'matchByDragDrop',
        id: 'drag-drop3',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `I am white when I am dirty and black when I am clean. Who am I? - *blackboard*
          I am tall when I am young and I am short when I am old. Who am I? - *pencil*
          I am wet when I am drying. Who am I? - *towel*
          I have a neck but no head. Who am I? - *bottle*`
        }
      }
    ]
  };
