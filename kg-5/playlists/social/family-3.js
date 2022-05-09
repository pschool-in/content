export default {
  id: 'family-3',
  label: 'My Family My Home',
  pdf: '',
  lockAfter: 2,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'My Family',
        text: `We are born in our family and are brought up by our parents. They take care of us.
In a family, we are secure in every way. Our family provides us food, clothing and shelter. There is affection among family members.
# Joint Family
It is a big family. Grandparents, aunts, uncles, parents, siblings and cousins all live together in one house.
# Nuclear Family
It is a small family and it consists of only parents and children.
# Extended Family
Families are linked with many other relatives. Aunts and uncles from the mother's and father's side, their children are all related to our family. People who are related through our mother are called maternal relations. People who are related through our father are called paternal relations. Family tree diagram shows how different people are related to us and also captures different generations.
# Neighbours and society
Many families live near our home. We call them neighbours. All the families together form the society.
# Money and Budget
The earnings vary from family to family. Some live in own house and some live in rented house. Some families have car some don't. We should not complain about things we don't have and we should not compare with others. Education can improve the financial situation of a family. Planning and budget can help the family from running out of money. We should not spend more than what we earn. We have to keep a part of our income as savings.
# Why we need Family
Family gives us the values of discipline, morals and the habit of sharing. Inter dependence of family members help in becoming good citizens and develop harmony.  Family helps us to feel safe and secure. 
Not just human beings, even animals have family. Animals like lion and elephant live together as one big joint family. Animals and birds take care of the young ones and teach them how to live in this world.`
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: [
        `Education can improve the *financial* situation of a family. Planning and *budget* can help the family from running out of *money*. We should not spend more than what we *earn*. We have to keep a part of our income as *savings*.`,

        `In a family, we are *secure* in every way.
        Nuclear families are *small* and joint families are *big*.
A family *tree* shows several generations of people.
Every household chore is *important*. We should share the work.
We must keep our house and surroundings *clean*. `
      ]
    },
    {
      label: 'Right or Wrong',
      id: 'right-wrong',
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
Keeping the house clean and tidy is the responsibility of one person in the family.
Joint family has upto 4 members.
Only human beings have family.`
          }
        ]
      }
    },
    {
      id: 'match-3',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Character, improve relation
Sharing work, Unity
Maternal relation, Uncle
Outsiders, Vendors
Neighbours,  Next House`
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `All the families together form the  *society (neighbours)*.
My mom's sister is my *maternal (paternal)* relation.
My dad's brother-in-law is my *maternal (paternal)* relation.
My dad's uncle is my *paternal  (maternal)* relation.
The person living in our opposite house is our *neighbour (uncle)*.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false-3',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `A family fulfills all our basic needs.
We must keep our things in their respective places.
We have to support each other in a family.`
          },
          {
            name: 'False',
            text: `Our neighbours are our relatives.
We have to spend more than our income.`
          }
        ]
      }
    },
    {
      label: 'Choose the correct answer',
      type: 'matchByDragDrop',
      id: 'drag-drop-3',
      data: {
        text: `Basic unit of the society is *family*.
Basic needs like food, dress and *shelter* are fulfilled by the family.
Inter dependence of family members help in becoming good citizens and develop *harmony*.
Family gives us the values of *discipline*, morals and the habit of *sharing*.`
      }
    },
    {
      label: 'Choose the best Answer',
      id: 'mcq-2',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'The basic unit of the society is_____________',
            options: 'family, village, town'
          },
          {
            qText: '_____________ is one of our basic needs.',
            options: 'shelter, car, sofa'
          },
          {
            qText:
              'If only father mother and children live together is called_________.',
            options: 'nuclear family,  big family, joint family'
          },
          {
            qText: 'Planning how we spend our money is called _______.',
            options: 'budget, earnings, wealth'
          }
        ]
      }
    }
  ]
};
