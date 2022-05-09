export default {
  id: 'clothes-4',
  label: 'Clothes',
  pdf: '',
  lockAfter: 2,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Our Clothes',
        text: `We wear clothes
1. To cover our body.
2. To protect ourselves from dust and dirt.
3. To feel warm during winters.
4. To avoid tanning from the sun.
5. To look presentable.
# How do we know what to wear?
We usually have three main seasons: summer, winter and the rainy season. These seasons last for almost 4 months and after the completion of one cycle, they continue to follow each other. That's why it's called 'cycle of seasons'. So, we can say that what we wear depends on the cycle of seasons.
In addition to this, we wear clothes of different designs, colors and tradition. So we can say that clothing style also depends on occupation, taste and occasion.
# Do you know?
Uniforms of soldiers are called 'camouflage' because it matches with their environment so that the enemies could not spot them easily.`
      }
    },
    /*
    {
      label: 'Who wears what?',
      id: 'men-women',
      type: 'classifySentence',
      data: {
        title: 'Who wears what?',
        types: [
          {
            name: 'Men',
            text: `Dhoti
Lungi
Pheta
Pagdi`
          },
          {
            name: 'Women',
            text: `Saris
Salwar-suit
Frocks
Skirts
Gowns
Tops`
          },
          {
            name: 'Common',
            text: ` Shirts
Pyjama
Trousers
Jeans
T-shirts
Hats`
          }
        ]
      }
    },
    */
    {
      label: 'Which clothes are suitable for which season?',
      id: 'summer-winter',
      type: 'group',
      data: {
        title: 'Classify the below clothings.',
        types: [
          {
            name: 'Summer',
            text: 'Skirts, Shorts, Cotton clothes, Kurtas'
          },
          {
            name: 'Winter',
            text: 'Coats, Sweaters, Mufflers, Gloves, Socks'
          }
        ]
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-1',
      data: [
        `Doctors wear a *white* coat and examine patients.
Police wear a *kaaki* uniform when doing their duty.
Lawyers wear a *black* coat while arguing in the court.
Students go to school in *uniform*.
Usually *teachers* don't have uniform, but they have *dress code*.`,

        `*Shoes* protect our feet.
*Raincoat* keep us dry in rain.
*Pyjamas* are weared at night.
*Sweater* helps us to protect ourselves from cold.
*Hat* provides shade from sunlight.
*Gloves* protect our hand from cold.`,

        `Clothes *protect* us from heat, cold and rain.
We wear *cotton* clothes in summer.
Woolen clothes keep us *warm*.
We use *raincoat* or umbrella when it rains.
We use different types of clothes during different *occasion*.`
      ]
    },
    {
      id: 'match',
      label: 'Season vs clothes',
      type: 'match',
      data: {
        text: `Summer, Cotton clothes
Winter, Woolen clothes
Rain, Raincoat
Polyester, Artificial fiber
Silk, Silkworm`,
        title: 'Match the following'
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
            text: `We get wool from sheep.
We get silk from silkworm.               
Lawyer wears black coat.
Usually teachers don't have uniform.`
          },
          {
            name: 'False',
            text: `We wear our favorite dress to school.
We wear woolen clothes in summer.
Usually nurses don't have uniform.`
          }
        ]
      }
    },
    {
      label: 'How clothes are made?',
      type: 'passage',
      id: 'passage-3',
      data: {
        title: 'How clothes are made?',
        text: `In the past, a spinning wheel was used to make yarn from cotton; and then, these yarns were used to make fabrics and clothes. In the modern times, yarn is made through machinery; although the procedure is same.
# What to do with old clothes?
1. If they’re in a good condition, donate them to needy people.
2. They can be reused for making new clothes.
3. Torn clothes can be used in dusting, moping, doormats etc.
4. Some clothes are reused in making other products.
# Fun fact!
Mahatma Gandhi, during the struggle for independence, promoted the use of Swasdeshi goods by making khadi yarn on his charakha. This led to formation of Charakha Mandals throughout the nation.
In case of unavailability of detergent, one can also use soap nuts, washing soda, ritha, hinganbet and limestone. All these are natural substances.`
      }
    },
    {
      label: 'Some more facts about clothes',
      type: 'matchByDragDrop',
      id: 'drag-drop-4',
      data: {
        text: `Gandhiji asked people to wear *swasdeshi* clothes.
It is unsafe to wear *nylon* clothes while cooking or burning crackers.
People prefer wearing *cotton* clothes in summer.
*Scarfs* protect our skin from the sun.
*Mufflers* protect our ears and neck from cold.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false-2',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Detergent is used to wash clothes.
Clothing styles vary according to gender, occasion, season and ethnicity.                  
Bamboo yarn is also used for making clothes.`
          },
          {
            name: 'False',
            text: `A person can wear same clothes forever.
Liquid handwashes are used to clean clothes.`
          }
        ]
      }
    },
    {
      label: 'Natural Vs Artificial',
      id: 'classify-2',
      type: 'group',
      data: {
        title: 'Arrange the materials based on their source of origin',
        types: [
          {
            name: 'Natural',
            text: 'Cotton, Wool, Silk, Jute'
          },
          {
            name: 'Artificial',
            text: 'Nylon, Rayon'
          }
        ]
      }
    }
  ]
};
