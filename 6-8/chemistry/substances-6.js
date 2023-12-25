export default {
  id: 'substances-6',
  label: 'Substances',
  lockAfter: 4,
  list: [
    {
      id: 'notes',
      label: 'Separation of Substances - Reading',
      type: 'passage',
      data: {
        text: `# Methods of separation
Handpicking, winnowing, sieving, sedimentation, decantation and filtration are some of the methods of separating substances from their mixtures.
# Handpicking
Handpicking is used for separating slightly larger-sized impurities like pieces of dirt, stone and husk from wheat, rice or pulses. The quantity of such impurities is usually not very large.
# Threshing
The process used to separate grain from stalks is called threshing. The stalks are beaten to free the grains. Machines and bullocks are sometimes used for the process.
# Winnowing
Winnowing is used to separate heavier and lighter components of a mixture by wind or by blowing air. It is commonly used by farmers to separate lighter husk particles from heavier seeds of grain. The husk particles are carried away by the wind. The seeds of the grain get separated and form a heap.
# Sieving
Sieving allows the fine flour particles to pass through the holes of the sieve while the bigger impurities remain on the sieve.
# Sedimentaion, Decantation and Filtration
When the heavier component in a mixture settles after water is added to it, the process is called sedimentation. Removal of water along with the dust is called decantation. Filtration can be used to separate components of a mixture of an insoluble solid and a liquid.
# Evaporation
The process of conversion of water into its vapor is called evaporation. The process of evaporation takes place continuously wherever water is present.
# Condensation
The process of conversion of water vapor into its liquid form is called condensation.
# Use of more than one method of separation.
Some mixtures require more than one separation method to completely separate the substances. For example, to separate sand and salt from the water collected from an ocean we need to use decantation, filtration, evaporation and condensation.
# Saturated solution
A saturated solution is one in which no more of that substance can be dissolved. More of a substance can be dissolved in a solution by heating it.
# Can water dissolve any amount of a substance?
Water dissolves different amounts of soluble substances in it.`,
        title: 'Separation of Substances'
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'match-drag-drop-1',
      data: {
        fontSize: '1rem',
        text: `Husk and stones could be separated from grains by *handpicking*.
Husk is separated from heavier seeds of grain by *winnowing*.
The difference in the size of particles in a mixture is utilized to separate them by the process of *sieving* and filtration.
*Filtration* can be used to separate components of a mixture of an insoluble solid and a liquid.`
      }
    },
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `*Evaporation (Condensation)* is the process in which a liquid gets converted into its vapour.
Evaporation can be used to separate a *solid (liquid)* dissolved in a liquid.
A *saturated (unsaturated)* solution is one in which no more of that substance can be dissolved.
More of a substance can be dissolved in a solution by *heating (cooling)* it.
Water dissolves different amounts of *soluble (insoluble)* substances in it.`
      }
    },
    {
      label: 'Answer in one word',
      type: 'matchByDragDrop',
      id: 'match-drag-drop-2',
      data: {
        fontSize: '1rem',
        text: `The method of separating seeds of paddy from its stalks is called: *threshing*
The process of separating cream from milk is an example of: *filtration*
Salt is obtained from seawater by the process of: *evaporation*
The process of separation of clear water from a settled mixture is called: *decantation*`
      }
    },
    {
      id: 'saturated-unsaturated',
      label: 'Saturated or Unsaturated',
      type: 'classifySentence',
      data: {
        title: 'Classify the given solutions based on level of saturation.',
        types: [
          {
            name: 'Saturated',
            text: `Water with a cup of salt.
Coffee with 10 packets of sugar.
Milk with a cup of chocolate powder `
          },
          {
            name: 'Unsaturated',
            text: `Water with a pinch of salt.
ORS made with a pinch of salt and sugar in a cup of water.`
          }
        ]
      }
    },
    {
      id: 'filtration-sieving',
      label: 'Filtration or Sieving',
      type: 'classifySentence',
      data: {
        title: 'Classify based on the method of separation used.',
        types: [
          {
            name: 'Filtration',
            text: `Air filter that removes impurities from the air.
Water filter that removes impurities from water.`
          },
          {
            name: 'Sieving',
            text: `Flour is passed through the sieve in baking processes.
Cement is sifted before mixing.
Tea leaves are separated from tea using a strainer.`
          }
        ]
      }
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Seeds of paddy can be separated from husk by threshing.
Stones can be separated by handpicking.`
          },
          {
            name: 'False',
            text: `A mixture of water and milk can be separated by filtration.
The separation of sugar from tea can be done by filtration.
Salt is obtained from seawater by decantation.`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Salt and camphor, Sublimation
Wheat and husk, Winnowing
Iron and sawdust, Magnetic 
Coconut oil and water, Separating funnel`,
        title: 'Match the method of separation to the mixture.'
      }
    },
    {
      id: 'handpicking-winnowing',
      label: 'Handpicking or Winnowing',
      type: 'classifySentence',
      data: {
        title: 'Classify based on the method of separation used.',
        types: [
          {
            name: 'Handpicking',
            text: `Separating a mixture of chilies and ladies finger.
Separation of stone from rice, pulses and wheat.
Separating rotten potatoes from fresh ones.`
          },
          {
            name: 'Winnowing',
            text: `Separation of dirt from grains.
Remove corn from straw.`
          }
        ]
      }
    },
    {
      label: 'Name the following',
      type: 'matchByDragDrop',
      id: 'match-drag-drop-3',
      data: {
        fontSize: '1rem',
        text: `The process used to separate grain from stalks is called *threshing*.
When the heavier component in a mixture settles after water is added to it, the process is called *sedimentation*. 
Removal of water along with the dust is called *decantation*.
The process of conversion of water into its vapor is called *evaporation*.
The process of conversion of water vapor into its liquid form is called *condensation*.`
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Why are mixtures separated?',
            options: `to remove undesirable substances, to get desirable substances, to obtain highly pure substances, *all of the above`
          },
          {
            qText:
              'The method of separation used to separate stones from rice is',
            options: `handpicking, threshing, winnowing, all of these`
          },
          {
            qText: 'Butter is separated from milk by',
            options: `churning, sedimentation, filtration, decantation`
          },
          {
            qText:
              'The separation of grains from the husk is done by the process of',
            options: `winnowing, handpicking, sieving, threshing`
          },
          {
            qText: 'Threshing is done by',
            options: `beating, animals, machines, *all of these`
          },
          {
            qText:
              'Filtration is a method to separate the components of a ____________________.',
            options: `mixture of a liquid and an insoluble substance, solution, pure substance`
          },
          {
            qText:
              'A solid is dissolved in water. Which one of the following methods can be used to separate it?',
            options: `Evaporation, Decantation, Distillation, Filtration`
          },
          {
            qText:
              'Which of the following methods is used when there is a difference in size and colour of desirable and undesirable constituents?',
            options: `Handpicking, Threshing, Filtration, Decantation`
          }
        ]
      }
    }
  ]
};
