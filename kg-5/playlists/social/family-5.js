export default {
  id: 'family-5',
  label: 'Family Values',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Notes',
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
Our society works according to certain rules. We make the rules ourselves. We follow these rules because they are meant for the common good. Sometimes laws have to be made to abolish unjust customs. In our country, customs such as child labour and child marriage were abolished by making laws that banned them.
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
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        text: `Boys and girls should have equal rights. It is called *equality*.
If we are *honest*, people will trust us.
Everyone should be given an opportunity to share their *opinion*. 
Doing a work together is *team work*.
Children are protected from child labour though *laws*, and whoever employs children at work will be *punished*.`
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
            text: `Sharing work with others in the family.
Following rules while walking on the road.
Treating girls and boys equally.`
          },
          {
            name: 'Bad',
            text: `Kids avoiding work given by the parents.
Not including your friend in your football team as she is a girl.`
          }
        ]
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
Jerry found a purse in the park, and hand it over to the police station.
Renu accepted that she had broken the flower vase.`
          },
          {
            name: 'Dishonest',
            text: `Selvi fell from her bicycle. However, she told her mother, 'Ravi pushed me off the bicycle'.
Anjana found a toy in the garden and kept it for herself.`
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
            options: `Take him to the nearby police station.
Leave him with a stranger.
Do not pay attention to the crying boy.`
          },
          {
            qText:
              'While on a trip, you realize that our friend has forgotten her tiffin at home. What will you do?',
            options: `Share your tiffin with her.
Let her starve.
Ask her to go back by herself.`
          },
          {
            qText:
              'Your teacher is punishing your friend for a mistake that you committed. What will you do?',
            options: `Accept your mistake. 
Let your friend get punished. 
Blame it on someone you don’t like.`
          },
          {
            qText:
              'Your friend tripped and fell while you were playing. What will you do?',
            options: `Help her get up. 
Laugh at her. 
Keep playing and don't pay attention to her.`
          }
        ]
      }
    }
  ]
};
