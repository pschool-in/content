export default {
  id: 'agriculture',
  label: 'Agriculture',
  pdf: '',
  lockAfter: 1,
  list: [
    {
      label: 'Agriculture- Reading',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Agriculture ',
        text: `Agriculture is our necessity and includes the preparation of soil for cultivation, growing crops, and raising livestock. Since our country is an agricultural country, agricultural development is important for the country's economic growth.
# Farmers
They cultivate crops and rear animals. Our country is a land of farmers and they're the backbone of our economy.
# Subsistence farming
In this, crops are cultivated and they are only used by the farmer's family. Small and marginal farmers practice this on small pieces of land they own. The method of farming is generally archaic.
# Commercial farming
In this type of farming, crops are cultivated and are used for commercial purposes. This is done using modern techniques, tools, and machines.
# Plantation farming
It is practiced on lands where single cash crops are cultivated on a large scale. For example, tea, coffee, rubber, etc.
# Mixed farming
It means, rearing of animals along with cultivation. It is very economical.
# Do you know?
1. Farmers who cultivate in areas less than 1 hectare are called micro farmers.
2. The government has established the Food Corporation of India (FCI) for purchasing farm products directly from the farmers, at reasonable rates.`
      }
    },
    {
      label: 'Irrigation - Reading',
      type: 'passage',
      id: 'reading-2',
      data: {
        title: 'Irrigation',
        text: `In agriculture, sufficient water is supplied to the crops in the fields through irrigation.
# Well irrigation
This is a less expensive method in which water is drawn out from nearby wells for irrigation.
# Canal irrigation
It is the most important type and in this, canals of water are dug as stripes between the crops. These canals carry water from a nearby river or a reservoir to the field of crops.
# Sprinkler irrigation
This is similar to a waterfall. In this, water is sprayed over the crops through sprinklers.
# Drip irrigation
This method conserves both water and soil nutrients. In this, water drips slowly into the roots of plants through pipes.
# Do you know?
1. Central Ground Water Board (CGWB) monitors the level and nature of groundwater.
2. Green Revolution increased crop production as a result of a variety of seeds, pesticides, and new agricultural techniques.
3. Horticulture is the science of cultivating fruits, vegetables, flowers, or ornamental plants.`
      }
    },
    {
      label: 'Fiil by drag',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        title: 'Drag and drop the given words at the right blanks.',
        text: `*CGWB* monitors the level and nature of groundwater.
*Horticulture* is the science of cultivating fruits, vegetables, flowers, or ornamental plants.
*Green Revolution* increased crop production.
Farmers who cultivate in areas less than 1 hectare are called *micro farmers*.
The government has established *FCI*for purchasing farm products.`
      }
    },
    {
      label: 'Choose the best Answer ',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Which industry do these raw materials belong to?',
        questions: [
          {
            qText: ' __________ is the cultivation of crops.',
            options: 'Agriculture, Irrigation, Excavation'
          },
          {
            qText: 'A __________ is a person who is engaged in agriculture.',
            options: 'farmer, doctor, teacher'
          },
          {
            qText:
              '__________ farming refers to the raising of animals along with the crops.',
            options: 'Mixed, Commercial, Subsistence'
          },
          {
            qText: '__________ monitors the level and nature of groundwater.',
            options:
              'Central Ground Water Board, Metro Water Board, Sewage Water Board'
          },
          {
            qText: '__________saves water and soil nutrients.',
            options: 'Drip irrigation, Sprinkler system, Well irrigation'
          }
        ]
      }
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Rice is the leading food crop in Tamil Nadu.
Drip irrigation is a type of micro-irrigation system.
CGWB monitors the level and nature of groundwater.`
          },
          {
            name: 'False',
            text: `Plantation farming is very economical.
Drip irrigation is similar to a waterfall.
Subsistence farming means the rearing of animals along with cultivation.`
          }
        ]
      }
    }
  ]
};
