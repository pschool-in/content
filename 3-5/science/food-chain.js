export default {
  label: 'Food Chain',
  id: 'food-chain',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Food Chain',
        text: [
          `Grass is food for deer and deer is food for tiger. Plants are food for grasshoppers and grasshoppers are bird food. Studying the food chain helps us understand how living things are related to one another by the food they eat. 
# Examples of Food Chain
Leaves > Caterpillar > Hen > Hawk
Grass > Grasshopper > Rat > Owl
# Food Web
Every organism can feed on different kinds of food. So a single organism will be part of many food chains. These food chains are interconnected to form a web.`,
          { type: 'img', src: 'science/food-web.jpg' },
          `A food web is an interconnection of multiple food chains. Transfer of energy between organisms of different energy sources occurs through the food web.`
        ]
      }
    },
    {
      label: 'Choose the Best Answer',
      id: 'mcq-food-chain',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              'In a food chain, ______ can be placed immediately before a snake.',
            options: 'a frog, an eagle, grass'
          },
          {
            qText:
              'Select the animal that has similar eating habits like a bear.',
            options: 'Hen, Deer, Camel'
          },
          {
            qText: 'Which of the following represents the right food chain?',
            options: `leaf ---> insect ---> bird
leaf ---> bird ---> insect
insect ---> leaf ---> bird`
          },
          {
            qText:
              'In a food chain, ______ can be placed immediately after a snake.',
            options: 'an eagle, a frog, grass'
          }
        ]
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        title: 'Fill in the blanks and complete the food chain.',
        text: `grass ---> *zebra* ---> lion
*grain* ---> rat ---> *cat*
insect ---> frog ---> *snake*
*grass* ---> deer ---> *tiger*`
      }
    },
    {
      id: 'guess-animal',
      label: 'Guess the Animals',
      type: 'dragAndDrop',
      onlyBigScreen: true,
      data: {
        img: 'guess-animal-2.jpg',
        title: 'Guess the Animals',
        width: 600,
        height: 627,
        wordWidth: 160,
        fontSize: '1.5rem',
        wordHeight: 55,
        labelHidden: true,
        words: [
          {
            word: 'hawk',
            x: 430,
            y: 265
          },
          {
            word: 'wolf',
            x: 255,
            y: 265
          },
          {
            word: 'snail',
            x: 35,
            y: 265
          },
          {
            word: 'squirrel',
            x: 235,
            y: 535
          },
          {
            word: 'caterpillar',
            x: 35,
            y: 535
          },
          {
            word: 'earthworm',
            x: 265,
            y: 435
          }
        ]
      }
    },
    {
      label: 'Group Behaviour',
      type: 'passage',
      id: 'group-behaviour',
      data: {
        title: 'Group Behaviour',
        text: [
          `Animals gain a lot of benefits from spending time together with other members of the same species. This is called group behavior. Animals like elephants and lions live in groups. But some animals like tigers and bears, live in solitary (alone). 
Group behavior is also called social behavior. Members of the group work together to find food, defend themselves and look after the young ones. For example,  all the fish in a school move together, following their leader in the front. The main purpose of group behavior is to help animals survive in nature.
# Bees
When insects live together, they often follow a hierarchy. For example, bees have one queen bee in every hive. There are a few male bees called drones. There are hundreds of female bees, which are the worker bees.  
# Social Nesting
Different birds have different behaviors. Some social nesting birds do not build individual nests. All males work together and build a common nest in which hundreds of birds can be housed.
# Elephants
The elephant group is called herd or parade. For each group, there is a female head, who leads the group towards the availability of food, water and safety. The leader fights for their group. All animals in a group obey the command of their leader. Older animals teach manners and life skills to young ones.
# Advantages of group behavior
1. It is easy to procure food. Lions hunt together and share the prey.
2. It helps take care of young ones. The female elephant takes care of its calf.
3. It helps to protect from predators. When an animal finds a danger, it alerts the others in the group.
4. Work can be divided. Honey bees collect nectar, build comb and clean hives by splitting the work
5. Energy Conservation. Birds fly in "V" shape to reduce wind resistance.`
        ]
      }
    },
    {
      id: 'match',
      label: 'Animals & their Group',
      type: 'match',
      data: [
        `a pride of, lions
a school of, fish
a colony of, ants
a pack of, wolves
a flock of, sheep
a herd of, cows`,

        `a herd of, elephants
a parliament of, owl
a school of, dolphins
a swarm of, bees
a pack of, dogs
a troop of, monkeys`
      ]
    },
    {
      label: 'Choose the Best Answer',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'The male bees are called _____.',
            options: 'drones, workers, queen, king'
          },
          {
            qText: 'Each elephant herd, has _______.',
            options:
              'one female leader, one male leader, two female leaders, two male leaders'
          },
          {
            qText: 'Why does a school of fish move together?',
            options: `To defend themselves.
To feed their young one.
To search for food.`
          },
          {
            qText: 'Solitary animals _________.',
            options:
              'live alone, live in forests, live in plains, live in groups'
          },
          {
            qText: 'Why birds fly in a V-formation?',
            options: `To reduce wind resistance.
They like the letter 'V'.
To protect from eagles.`
          }
        ]
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-group',
      data: [
        `Lions *hunt* together and share the *prey*.
Bees *split* the work among them. There are a few male bees called *drones* and hundreds of female bees called *workers*.
The main purpose of group behavior is to help animals *survive* in *nature*.`,
        `Animals that live alone are called *solitary* animals.
Group behavior is also called *social* behavior.
All animals in a group, *obey* the command of their *leader*.
When an animal finds a *danger*, it *alerts* the other animals.`
      ]
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `Different birds have different behaviors.
Lions live in groups.
All birds lay eggs.`
          },
          {
            name: 'False',
            text: `All animals like to live in groups.
Tigers live in groups.
Only the leader lion will hunt.
Animals that live in groups are called solitary animals.`
          }
        ]
      }
    }
  ]
};
