export default {
  label: 'Forests in India',
  id: 'forests-india',
  list: [
    {
      label: 'Types of Forests in India - Reading',
      id: 'reading',
      type: 'passage',
      data: {
        title: 'Types of Forests in India',
        text:
          'Plants and trees that grows naturally in a region of land is known as vegetation. Forests are large area of land, covered by naturally grown plants and trees. \n Vegetation in India is not uniform. Climate, soil and rainfall influence the growth of plants. \n Indian forests are broadly classified into five types. They are \n 1. Evergreen Forests \n 2. Monsoon Forests \n 3. Mangrove Forests \n 4. Thorn Forests \n 5. Himalayan Forests \n # Evergreen Forests \n These forests are found in the areas of the Western Ghats, the eastern parts of Himalayas and the Andaman and Nicobar Islands. These forests get lots of rain. Bamboo, Rosewood and Sandalwood are common trees here. \n # Monsoon Forests\n Peninsular India and the northern parts of India are covered by monsoon forests. These forests get moderate rains. The trees shed their leaves during summer because of less rainfall. \n # Mangrove Forests \n These are seen in the Indian coastal line, in the Ganga delta and Brahmaputra region, in some backwater areas and salt marshes.  The roots of the trees of most forests are found usually under the ground. But salt water trees like Avicennia, have aerial roots which are above the water in  order to survive in the salt water. These prevent soil erosion  and prevent fertile soil from being washed away into the ocean. \n # Thorn Forests \n They are found in the areas which receive less than 50 cm rainfall. Parts of the Deccan Plateau and Rajasthan have thorny trees like Acacia, Babul and Palmyra.\n # Himalayan Forests \n You can find trees like  Pine, Cedar, Oak,  Walnut and Apple. We can also see some on these trees in Nilgiris and Kodi Hills.'
      }
    },
    {
      type: 'match',
      id: 'match',
      label: 'Forest and Trees',
      data: {
        title: 'Match forests with their common tree.',
        text:
          'Mangrove, Avicennia \n  Monsoon, Teak \n  Himalayan, Pine \n Thorn, Acacia, \n Evergreen, Bamboo'
      }
    },
    {
      label: 'Forests - MCQ',
      type: 'mcq',
      id: 'mcq',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText: 'Which forest shed leaves during summer?',
            options: 'Monsoon, Mangrove, Thorn, Himalayan'
          },
          {
            qText: 'Which forest gets maximum rain?',
            options: 'Evergreen, Monsoon, Mangrove, Himalayan'
          },
          {
            qText: 'Which forest gets minimum rain?',
            options: 'Thorn, Monsoon, Mangrove, Himalayan'
          },
          {
            qText: 'Andaman and Nicobar Islands is mainly made up of ______.',
            options: 'Evergreen, Monsoon, Mangrove, Himalayan'
          },
          {
            qText: 'Which forest is present in coastal regions (near sea)?',
            options: 'Mangrove, Thorn, Monsoon, Himalayan'
          },
          {
            qText: 'Trees of which forest have aerial roots?',
            options: 'Mangrove, Thorn, Monsoon, Himalayan'
          }
        ]
      }
    }
  ]
};
