export default {
    id: 'nature-5',
    label: 'Nature-5',
    pdf: '',
    lockAfter: 4,
    list: [
      {
        label: 'Nature - Reading',
        type: 'passage',
        id: 'reading',
        data: {
          title: 'Environment and Us',
          text: `The population of the world is now close to six hundred crores. Man is developing new technology to meet the needs of all these people, and is using up more and more land and water resources for this purpose. There are inter-relationships between all living and non-living things in the environment. Different kinds of plants, animals and micro-organisms are found in different regions. The balance between the cycles of the various gases in the atmosphere, the water cycle and food chains has been maintained for thousands of years. Pollution is a major thread to the environment. We should make efforts to stop the degradation of the environmental balance caused by human intervention. Eg: Devrais, National Parks and Sanctuaries are created for the conservation of plants and animals.`
        }
      },
      {
        label: 'Answer in one word',
        type: 'matchByDragDrop',
        id: 'drag-drop',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `An area which is reserved for the purpose of protecting and conserving the biodiversity of a region - *Biodiversity park*
Reserved areas for the protection and conservation of wildlife - *National park*
Certain forest areas reserved for the protection and conservation
of a particular animal or plant. - *Sanctuary*
Jungle reserved for God - *Devrais*`
        }
      },
      {
        label: 'Yes or No',
        id: 'yes-no',
        type: 'classifySentence',
        data: {
          title: 'Classify the belowthe activities based on if they cause pollution or not. ',
          types: [
            {
              name: 'Yes',
              text: `Factory waste released into water bodies.
Smoke from factories and vehicles.
Use of pesticides.
Use of chemical fertilizer.
Burning of fossil fuel.`
            },
            {
              name: 'No',
              text: `Planting of trees.
Rain water harvesting.
Use of natural fertilizer.
Using alternate energy source.`
            }
          ]
        }
      },
      {
        id: 'fillup',
        label: 'Environment - Fill Up',
        type: 'fillupOptions',
        data: {
          title: 'Click the blanks and fill it with the right word.',
          text: `The population of the world is now close to *six (seven)* hundred crore.
Man is developing new technology to meet the *needs (greed)* of all these people.
There are *inter-relationships (balance)* between all living and non-living things in the environment.
The *balance (harmony)* between the cycles of the various gases in the atmosphere, the water cycle and food chains is termed environmental balance.
*Pollution (Man)* is a major thread to the environment.
We *should (should not)* make efforts to stop the degradation of the environmental balance caused by human intervention.`
        }
      },
      {
        label: 'Name the following',
        type: 'matchByDragDrop',
        id: 'drag-drop-2',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `Extinct bird - *Dodo*
Extinct animal - *Dinosaur*
Endangered animal - *Red panda*
Mayani lake - *Satara district*
Hunted for meat and eggs - *Great Indian Bustard*
Sanctuaries of ancient times - *Devrais*`
        }
      }
    ]
  }; 
