export default {
  id: 'india-5',
  label: 'Incredible India',
  lockAfter: 4,
  list: [
    {
      id: 'notes',
      label: 'Notes',
      type: 'passage',
      data: {
        title: 'India',
        text: [
          `India is a democratic republic. The capital of India is New Delhi.  Considering the area, Rajasthan is the largest state in India. It is followed by Madhya Pradesh. Maharashtra is in the third place. Goa is the State with the smallest area.
Apart from the Indian mainland, several groups of islands are also included in the Indian territory.
1. The Lakshadweep islands in the Arabian Sea.
2. The Andaman and Nicobar islands in the Bay of Bengal.
3. The coastal islands near the Indian mainland.
All these islands have strategic locations from the defence point of view. Long ago, forts were built on some of these islands off the coast of Maharashtra to safeguard the coast. These historical forts are known as sea forts. We can see several such forts along the Konkan coast.
India is rich with many rivers, mountains, and plateaus. Our northern border is defined by the lofty Himalaya ranges. Our country has forests, plains and deserts.
The weather conditions change from region to region. This gives rise to a wide variety of plants, animals and birds. Similarly, there is also a difference in the crops cultivated. Wheat is a primary crop in the north. Rice is a primary crop in the south and along the coast. Jowar is produced on a large scale in central India. This diversity has a significant effect on our lifestyle, customs, traditions and culture.`,
          {
            type: 'table',
            title: ['Crops', 'Place'],
            text: [
              `Tea 
Apple 
Coffee 
Spices 
Orange`,

              `Assam
              Himachal Pradesh
              Karnataka
              Kerala
              Maharashtra`
            ]
          },
          `Many different languages are spoken. We also see differences in food, clothing and festivals and celebrations in the different regions.`
        ]
      }
    },
    {
      id: 'match',
      label: 'Match Crops and States',
      type: 'match',
      data: {
        title: 'Match the crops and states.',
        text: ` Coffee, Karnataka
        Spices, Kerala
        Orange, Maharashtra
        Tea, Assam
        Apple, Himachal Pradesh`
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: [
        `*Rice* is a primary crop in the south and along the coast. *Wheat* is a primary crop in the north. *Jowar* is produced on a large scale in central India. 
        *Apple* is mainly cultivated in Himachal Pradesh. *Orange* is mainly grown in Maharashtra. 
        *Tea* is cultivated in Assam.`,
        `*Rajasthan* is the largest State in India. It is followed by *Madhya Pradesh*. *Maharashtra* is in the third place. *Goa* is the smallest state.
        The *Lakshadweep* islands are present in the Arabian Sea.
        The *Andaman* islands are present in the Bay of Bengal.`,

        `India is protected by the Great Himalayas in the *north*, Bay of Bengal is the *east*, Indian Ocean in the *south*, and Arabian Sea in the *west*.`
      ]
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `Our country has forests, plains and deserts.
            The weather conditions change from region to region.`
          },
          {
            name: 'False',
            text: `Rice is a primary crop in the north India.
            All states in south India have same culture.
            In India, we can find only limited number of plants and animals.`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              'The Andaman and Nicobar islands are present in the _______.',
            options: 'Bay of Bengal, Indian Ocean, Arabian Sea'
          },
          {
            qText:
              'The historical sea forts were built along the ______ coast.',
            options: 'Konkan, Kerala, Coromandel'
          },
          {
            qText: 'What is the third largest state in India?',
            options: 'Maharashtra, Madya Pradesh, Tamil Nadu, Karnataka'
          },
          {
            qText:
              'Different types of plants are possible in India because of the _______.',
            options:
              'varied weather condition, many rivers that flow, long coastal regions'
          }
        ]
      }
    }
  ]
};
