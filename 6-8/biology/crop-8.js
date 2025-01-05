export default {
  id: 'crop-8',
  label: 'Crop Production and Management',
  lockAfter: 4,
  list: [
    {
      label: 'Give two examples of each',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        text: `Kharif crop: *Paddy*, Maize
Rabi crop: Wheat, *Gram*
Fertilizer: NPK, *Urea*
Manure: *Cow dung*, Animal excreta`
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fillup-drag-drop',
      data: {
        text: `The same kind of plants grown and cultivated on a large scale at a place is called *crop*.
The first step before growing crops is *preparation* of the soil.
Damaged seeds would *float* on top of the water.
For growing a crop sufficient sunlight, water and *nutrients* from the *soil* are essential.`
      }
    },
    {
      label: 'Answer the following in one word',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        text: `Supply of water to crops at appropriate intervals is called *irrigation*.
*Weeding* involves the removal of unwanted and uncultivated plants called *weeds*.
*Harvesting* is the cutting of the mature crop manually or by machines.
Separation of the grains from the chaff is called *threshing*.`
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
            qText:
              'What is the process by which water is provided to the crops called?',
            options: `Irrigation, Fertilization, Pollination`,
            rightFb:
              'Supply of water to crops at appropriate intervals is called irrigation',
            wrongFb: {
              1: 'Fertilization is the fusion of two gametes.',
              2: 'Pollination is the act of transferring pollen grains from the male anther of a flower to the female stigma. '
            }
          },
          {
            qText:
              'Which of the following is not a modern method of irrigation?',
            options: `Moat, Sprinkler System, Drip System`
          },
          {
            qText:
              'What is the process of loosening and turning of the soil called?',
            options: `Tilling, Sowing, Weeding`
          },
          {
            qText: 'Which bacteria helps in nitrogen fixation?',
            options: `Rhizobium, Rhizobactor, Rhinobactor`
          },
          {
            qText:
              'What is the name of the machine that helps in harvesting only?',
            options: `Harvester, Sickle, Combine`,
            rightFb:
              'Harvesting is done with the help of a machine called a harvester.',
            wrongFb: {
              1: 'Harvesting is done manually using a sickle.',
              2: 'Combine is a harvester as well as a thresher.'
            }
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Kharif crop, Paddy
Rabi crop, Wheat
Chemical fertilizer, Urea
Organic manure, Cow dung`,
        title: 'Match the following.',
        fontSize: '1rem'
      }
    },
    {
      label: 'Sorting',
      type: 'sorting',
      id: 'sort',

      data: {
        title:
          'Arrange the steps in Crop Production in the sequence they are done.',
        text: `Preparation of soil, Sowing, Adding manure and fertilizer, Irrigation, Protecting from weeds, Harvesting, Storage`
      }
    },
    {
      label: 'Fertilizer or Manure',
      id: 'fertilizer-manure',
      type: 'classifySentence',
      data: {
        title: 'Classify the below as Fertilizer or Manure.',
        types: [
          {
            name: 'Fertilizer',
            text: `It is a man-made inorganic salt.
It is prepared in factories.
It does not provide any humus to the soil.
They are very rich in plant nutrients like nitrogen, phosphorus and potassium.`
          },
          {
            name: 'Manure',
            text: `It is a natural substance obtained by the decomposition of cattle dung and plant residues.
It can be prepared in fields.
It provides a lot of humus to the soil.
It is relatively less rich in plant nutrients.`
          }
        ]
      }
    }
  ]
};
