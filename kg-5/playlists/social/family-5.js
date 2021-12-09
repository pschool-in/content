export default {
  id: 'family-5',
  label: 'Family-5',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Family Values - Reading',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Family Values',
        text: `# Decision making
We live together in a family. Every person has their own likes and dislikes. Thoughts and opinions can also differ. So, when everyone has a role in decision making, each person gets the opportunity to say what they think. We feel like a more important part of the family when we see that our opinion is valued.
# Honesty
Everyone makes mistakes. When we realize that we have made a mistake, we should talk about it openly with our friends and family. It will help us correct our mistake. It will also teach us to be honest. It is necessary to be honest and sincere in our work. Because, if we are dishonest, we lose our self-confidence.
# Co-operation
Co-operation and teamwork help us communicate with more people, learn together and get work done easily and efficiently. For example, we co-operate in family, team sports, rallies and other gatherings.
# Tolerance
Tolerance is when you try to understand another person's point of view even if their opinion doesn't match with yours. It means you respect their ideas and thoughts.
# Gender Equality
Gender equality means considering boys and girls as equally capable in all aspects, like sports, education, jobs, opportunities, responsibilities, etc. Both genders must respect one another.
# Points to remember
1. Everyone in the family must have a say in decision-making.
2. We must be honest in our private and public life.
3. Tolerance and co-operation make our life peaceful.
4. A tolerant attitude makes it easy to preserve diversity.
5. Men and women are equal. It is not right to discriminate between them.
# Rules
Our society works according to certain rules. We make the rules ourselves. We follow these rules because they are meant for the common good. Sometimes laws have to be made to abolish unjust customs. In our country, customs such as sati and child marriage were abolished by making laws that banned them.
# Points to remember
1. Everyone has a responsibility to solve problems in civic life.
2. Problems can be solved if everyone co-operates.
3. Dialogue and discussion can help solve disputes.
4. Disputes can be solved peacefully.
5. If there is peace in the family, school and society, everyone benefits.
6. Peace is a social value.`
      }
    },
    {
      label: 'Rules',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Prohibition against loudspeakers in *public* places after 10 o’clock at night.
Free primary education for boys and *girls*.
Prohibition against dumping *garbage* in the river.
Protection against domestic violence for *women*.
*Ban* on child labour.
Ban on felling trees, *hunting* and poaching.`
      }
    },
    {
      label: 'Good or Bad',
      id: 'good-bad',
      type: 'classifySentence',
      data: {
        title: 'Classify the below activities as good or bad',
        types: [
          {
            name: 'Good',
            text: `Co-operating in community.
Following rules.
Treating girls and boys equally.`
          },
          {
            name: 'Bad',
            text: `Cheating on a test paper.
Not including your friend in your football team as she is a girl.
Deprive girls of good food or to prevent them from going to school.`
          }
        ]
      }
    },
    {
      id: 'fillup',
      label: 'Value - Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Honesty is our *strength (weakness)*.
Everyone needs *honesty (tolerance)* in public life.
*Tolerance (Diversity)* has a special significance in our country.
By developing a sense of equality, everyone gets to learn and make *progress (rules)*
Our society works according to certain *rules (agenda)*.
The Constitution of Independent India abolished *untouchability (sati)* .`
      }
    },
    {
      label: 'Honest or Dishonest',
      id: 'honest-dishonest',
      type: 'classifySentence',
      data: {
        title:
          'Classify the actions based on whether they are honest or dishonest.',
        types: [
          {
            name: 'Honest',
            text: `Arya borrowed a pencil from Mina. After she finished using it, she returned it.
Jerry took the bag she found in a rickshaw to a police station.
Renu accepted that she had broken her mother’s vase.`
          },
          {
            name: 'Dishonest',
            text: `Sheri fell from her bicycle. However, she told her mother,“Naira pushed me off the bicycle”.
Anjana found a lost toy and kept it for herself.
Vignesh broke a plate and blamed it on the cat.`
          }
        ]
      }
    },
    {
      label: 'What will you do?',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' You meet a boy who has lost his way. What will you do?',
            options:
              'Take him to the nearby police station, Leave him with a stranger, Do not pay attention to the crying boy'
          },
          {
            qText:
              'While on a trip, you realize that our friend has forgotten her tiffin at home. What will you do?',
            options:
              'Share your tiffin with her, Let her starve, Ask her to go back by herself.'
          },
          {
            qText:
              'Your teacher is punishing your friend for a mistake that you committed. What will you do?',
            options:
              'Accept your mistake, Let your friend get punished, Blame it on someone you don’t like.'
          },
          {
            qText:
              'Your friend tripped and fell while you were playing. What will you do?',
            options:
              'Help her get up, Laugh at her, Keep playing and don’t pay attention to her'
          }
        ]
      }
    }
  ]
};
