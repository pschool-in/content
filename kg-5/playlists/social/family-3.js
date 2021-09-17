export default {
    id: 'family-3',
    label: 'Family-3',
    pdf: '',
    lockAfter: 4,
    list: [
      {
        label: 'My Family My Home - Reading',
        type: 'passage',
        id: '100',
        data: {
          title: 'My Family',
          text: `# Family

          We are born in our family and are brought up by our parents. They take care of us.
          In a family, we are secure in every way. Our family provides us with food, clothing and shelter. There is affection among family members.
          
          1. Small Family: Families consisting only of parents and one or two children.
          2. Big Family:  Families consisting of grandparents, aunts, uncles, brothers, sisters and cousins.
          3. Extended Family: Families are  linked with many other relatives. Aunts and uncles from the mother’s and father’s side, their children are all related to our family.
          4. Joint Family: Grandparents, aunts, uncles, parents, siblings and cousins all lived together and formed one big family.
          5. Nuclear Family: Members of a family start living separately, forming different families.
          
          # Festivals
          
          We celebrate many festivals in the family. In the same way, different kinds of festivals are celebrated in different regions of the country.
          
          1. Holi is the festival that marks the end of winter.
          2. In Punjab, Baisakhi is celebrated at harvest time.
          3. In Maharashtra, Bailpola is celebrated when the sowing of the crops is over.
          4. In Tamil Nadu, Pongal is celebrated during the harvest season.
          5. In Kerala, Onam is celebrated during the harvest season.
          6. Dasara, Diwali and Gudi Padwa are celebrated when the farm produce is ready.
          7. Makar Sankranti is a festival celebrated in winter.
          8. Paryushana Parva, Buddha Poornima, Ramzan Eid, Christmas and Pateti are important festivals.
          
          # National Festivals
          Independence Day and Republic Day are our national festivals. All citizens celebrate them. India gained independence from the British on 15th August, 1947. Hence that day is celebrated as Independence Day. The Indian Constitution came into effect from the 26th of January, 1950. So, this day is known as Republic Day.
          `
        }
      },
      {
        label: 'Fill in the blanks',
        type: 'matchByDragDrop',
        id: '600',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `In a family, we are *secure* in every way.
          Families are of different types – *small* families, big families, extended families.
          A family *tree* shows several generations of people.
          Every household chore is *important*.
          We must keep our house and surroundings *clean*.
          Many of our *festivals* are linked with agriculture and environment.
          Independence Day and Republic Day are our *national* festivals.
          Festivals increase the feeling of *togetherness* among people.
          During festivals, we meet each other, talk to each other and feel *connected*.`
        }
      },
      {
        label: 'True or False',
        id: '200',
        type: 'classifySentence',
        data: {
          title: 'Classify the below sentences as true and false',
          types: [
            {
              name: 'True',
              text: `Agriculture is the main occupation in our country.
              The Warli tribe lives in Thane district.
              Sesame is a good food for winter as it helps to keep us warm.`
            },
            {
              name: 'False',
              text: `Not every household chore is important.
              Sesame is a summer crop.
              Festivals are annoying.`
            }
          ]
        }
      },
      {
        label: 'Festivals',
        type: 'matchByDragDrop',
        id: '300',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `*Holi* is the festival that marks the end of winter.
          In Punjab, *Baisakhi* is celebrated at harvest time.
          In Maharashtra, *Bailpola* is celebrated when the sowing of the crops is over.
          In Tamil Nadu, *Pongal* is celebrated during the harvest season.
          In Kerala, *Onam* is celebrated during the harvest season.
          *Dasara*, Diwali and Gudi Padwa are celebrated when the farm produce is ready.
          *Makar Sankranti* is a festival celebrated in winter.`
        }
      },
      {
        id: '500',
        label: 'Match festival with states',
        type: 'match',
        data: {
          text: `Punjab, Baisakhi
          Maharashtra, Bailpola
          Tamil Nadu, Pongal
          Kerala, Onam`,
          title: 'Match the following'
        }
      },
      {
        label: 'Right or Wrong',
        id: '600',
        type: 'classifySentence',
        data: {
          title: 'Classify the below sentences as right or wrong',
          types: [
            {
              name: 'Right',
              text: `We must help each other in times of difficulty.
              All family members should share the household chores.
              Music should not be played so loud as to cause noise pollution.`
            },
            {
              name: 'Wrong',
              text: `Garbage should not be thrown in a garbage bin.
              Keeping the house clean and tidy is the responsibility of
              one person in the family.
              Joint family has only 3 - 4 members.`
            }
          ]
        }
      },
      {
        id: '700',
        label: 'Match the following',
        type: 'match',
        data: {
          text: `Independance day, Aug 15
          Republic day, Jan 26
          Gandhi Jayanti, Oct 2
          Makar Sankranti, winter
          Holi, colour`,
          title: 'Match the following'
        }
      },
      {
        label: 'Family - Reading',
        type: 'passage',
        id: '800',
        data: {
          title: 'Family',
          text: `# Family

          Animals also lives together in families like humans.
          1. Lions live together as families in caves.
          2. Birds live in nest build on trees.
          3. Group of elephants are called parade and they stay together.
          
          # Important terms
          
          1. Society: Individuals together make a family and families together make a society.
          2. Maternal relations: People who are related through our mother are called Maternal Relations.
          3. Paternal relations: People who are related through our father are called Paternal Relations.
          4. Neighbour:  Many families live near our home. We call them neighbours.
          
          # Points to remember
          
          1. Basic unit of the society is family.
          2. Basic needs like food, dress and shelter are fulfilled by the family.
          3. Inter dependence of family members help in becoming good citizens and develop harmony.
          4. Family gives us the values of discipline, morals and the habit of sharing.
          5. A family must run according to the budget systems to ensure economical security.
          6. Family helps us to feel safe and secure.`
        }
      },
      {
        id: '900',
        label: 'Match the following',
        type: 'match',
        data: {
          text: `Character, improve relation
          Sharing work, unity
          Maternal relation, uncle
          Outsiders, vendors
          Neighbours,  respect`,
          title: 'Match the following'
        }
      },
      {
        id: 'fillup',
        label: 'Fill in the blanks',
        type: 'fillupOptions',
        data: {
          title: 'Click the blanks and fill it with the right word.',
          text: `Individuals together make a family and families together make a *society (extended family)*.
          People who are related through our mother are called *Maternal (paternal)* Relations.
          People who are related through our father are called *Paternal (maternal)*Relations.
          Many families live near our home. We call them *neighbour (outsider)*.`
        }
      },
      {
        label: 'True or False',
        id: '1000',
        type: 'classifySentence',
        data: {
          title: 'Classify the below sentences as true and false',
          types: [
            {
              name: 'True',
              text: `A family fulfills all our basic needs.
              We must keep our things in their respective places.
              Simplicity is the best policy for every family.`
            },
            {
              name: 'False',
              text: `Our neighbours are our relatives.
              Our economy improves when expenditure exceeds income.`
            }
          ]
        }
      },
      {
        label: 'Choose the correct answer',
        type: 'matchByDragDrop',
        id: 'drag-drop ',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `Basic unit of the society is *family*.
          Basic needs like food, dress and *shelter* are fulfilled by the family.
          Inter dependence of family members help in becoming good citizens and develop *harmony*.
          Family gives us the values of *discipline*, morals and the habit of *sharing*.
          A family must run according to the *budget* systems to ensure *economical* security.
          Family helps us to feel safe and *secure*.`
        }
      },
      {
        label: 'Choose the best Answer',
        id: '1700',
        type: 'mcq',
        data: {
          title: 'Multiple Choice Questions',
          questions: [
            {
              qText:
                'The basic unit of the society is_____________',
              options: 'family, village, town'
            },
            {
              qText: '_____________ is one of our basic needs.',
              options: 'shelter, car, sofa'
            },
            {
              qText: 'If only father mother and children live together is called_________.',
              options: 'small family,  big family, joint family'
            },
            {
              qText: 'Running the family by preparing ______________________ is the best way to improve economy.',
              options: 'Budget, money, wealth'
            }
          ]
        }
      }
    ]
  };
