export default {
    id: 'social-living-5',
    label: 'Social Living 3',
    pdf: '',
    lockAfter: 4,
    list: [
      {
        label: 'Public Facilities and My School',
        type: 'passage',
        id: 'public-facilities',
        data: {
          title: 'Public Facilities and My School',
          text: `# Public Facilities 
Various facilities are available to us in our school. Similar facilities are also available outside the school. Bus and railway are public facilities of transport. We also use several other public services and facilities such as the postal service, telephone, fire brigade, police, banks, theatres, parks, gardens and swimming pools. We must use these facilities responsibly. The school is our world outside our house. We like our school just as we like our home. Each school has its own unique identity.
# Development of a School
Many people and institutions help to set up a school. Many parents, past students, writers, artists, sportspersons, scientists and industrialists lend a hand in the growth of a school. A school is assisted in the construction of classrooms, libraries, laboratories, and procurement of sports equipment by various sections of society. The community has a role in the development of a school.
A school can also help in the development of a community or solve a problem. All schools have a Parent Teacher Association and a Mata Palak Sangh. They bring about a dialogue between parents and teachers. Parents can help in various activities of the school. The school respects all parents alike. We must also inform our parents about the happenings in the school. We learn with the help of both teachers and parents. Their interactions are to our benefit.`
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
              text: `Schools lend a hand in the development of the community.
              Every child has the right to go to school and learn.
              The school is our world outside the home.`
            },
            {
              name: 'False',
              text: `We must not inform our parents about the happenings in the school.
              Every school looks the same.`
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
          text: `We must use facilities *responsibly*.
The school is our *world* outside our house.
The *community* has a role in the development of a school.
*Schools* lend a hand in the development of the community.
Every child has the *right* to go to school and learn.`
        }
      },
      {
        label: 'Private vs Public',
        id: 'private-public',
        type: 'group',
        data: {
          title: 'Classify the services as available to the public or as a private service.',
          types: [
            {
              name: 'Private',
              text: 'financial service, law firm, aviation, magazines'
            },
            {
              name: 'Public',
              text: 'water supply, electricity, health care, education, postal service'
            }
          ]
        }
      }
    ]
  };
