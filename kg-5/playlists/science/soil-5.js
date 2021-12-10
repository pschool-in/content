export default {
    id: 'soil-5',
    label: 'Soil',
    lockAfter: 4,
    list: [
      {
        id: 'notes',
        label: 'Soil',
        type: 'passage',
        data: {
          text: `# What is a soil profile?
The soil is the topmost layer of the earths surface. It is mainly composed of organic minerals and rock particles that support life. A soil profile is a vertical cross-section of the soil. The different layers seen in a soil profile are called as soil horizons.
# Soil Profile
There are three different layers in soil namely, topsoil, subsoil and parent rock.
Topsoil: It is the top most layer and is composed of dried leaves, grasses, dead leaves, small rocks, twigs, surface organisms, fallen trees and decomposed organic matter. It is often black or dark brown in colour due to the presence of organic matter in the form of humus.
Subsoil: It is the layer of soil just beneath the topsoil. It is comparitively harder and compact. It has less humus, soluble minerals and organic matter. It is the site of deposition of certain mineral and metal salts.
Parent rock: It is the compacted and cemented layer made of various types of rocks seen just beneath the subsoil layer. Rocks such as granite, basalt and limestone are found here.
# Types of soil
Soil can be classified into four types namely, sandy soil, clayey soil, silt soil and loamy soil. Each type of soil support growth of different crops and plants. For example, plants such as cactus, melon, coconut, maize, barley, millet, etc grow well in sandy soil. But silt soil support growth of shrubs and some trees like cypress, willow and birch only. Clayey soil is good for growing paddy crops and has other uses such as making toys and pots. Loamy soil supports growth of plants like wheat, sugar cane, cotton, jute, pulses and oilseeds.
# Soil Erosion 
The natural process of wearing away of topsoil is called soil erosion. It is a continous process and results in loss of the fertile topsoil. Soil erosion maybe caused due to excessive rainfall, flooding, overgrazing by cattle, heavy winds, mining activities, etc.
# Soil conservation
Soil conservation is the prevention of the loss of topsoil. The best method for soil conservation is by afforestation. It is the planting of trees on a large scale. This prevents soil erosion. Soil cover is another effective method. In this method sfter harvesting one crop, farmers plant grass or dried vegetation till sowing the next crop to prevent soil erosion. Shelter belts such as hedges and trees can be used as windbreakers to reduce windspeed.They are grown along the edges of a farm land to prevent soilerosion. Terrace farming is used in hilly areas to prevent soil erosion. It is the farming done on the cut slopes of hills. Due to the cut slopes the speed of water flowing down the hills is reduced.The soil get carried and deposited from one step to the other,reducing soil erosion.`,
          title: 'Soil'
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
              qText: 'Which of the following does not prevent soil erosion?',
              options: `deforestation, afforestation, terrace farming`
            },
            {
              qText: 'Which of the following does not cause soil erosion?',
              options: `afforestation, over grazing, heavy winds`
            },
            {
              qText: 'Which layer of soil contains humus?',
              options: `topsoil, subsoil, bedrock`
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
              text: `Topsoil contains humus.
Subsoil has mineral deposits.
Soil Erosion is a natural process.`
            },
            {
              name: 'False',
              text: `Afforestation is the cutting down of trees.
Layers in soil profile are called horizontals.
Parent rock has dead leaves.`
            }
          ]
        }
      },
      {
        id: 'match',
        label: 'Match the following',
        type: 'match',
        data: {
          text: `sandy, melon
silt, shrub
clay, paddy
loamy, cotton
topsoil, fertile`,
          title: 'Match with appropriate choice'
        }
      },
      {
        label: 'Name the following',
        type: 'matchByDragDrop',
        id: 'drag-drop',
        data: {
          isPractice: false,
          title: 'Drag and drop the words at proper place.',
          styles: {
            fontSize: '1rem',
            dashWidth: 80
          },
          text: `The topmost layer of soil - *topsoil*
The layer of soil beneath topsoil - *subsoil*
The compacted and cemented layer made of rocks - *parent rock*
The wearing away of topsoil - soil *erosion*
The prevention of loss of topsoil - soil *conservation*`
        }
      },
      {
        label: 'Fill in the blanks',
        type: 'matchByDragDrop',
        id: 'drag-drop',
        data: {
          isPractice: false,
          title: 'Drag and drop the words at proper place.',
          styles: {
            fontSize: '1rem',
            dashWidth: 80
          },
          text: `Natural process of wearing away of topsoil is called soil *erosion*.
Rocks like basalt and limestone are seen in *parent rock* layer.
Topsoil is black or dark *brown* in colour.
*Clay* is used to make pots.`
        }
      }
    ]
  };
  