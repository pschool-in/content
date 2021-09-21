export default {
    id: 'houses-5',
    label: 'Houses-5',
    pdf: '',
    lockAfter: 4,
    list: [
      {
        label: 'Houses - Reading',
        type: 'passage',
        id: '100',
        data: {
          title: 'Home',
          text: `# What is House?

          It shelters us, protects us from almost all threats, gives us protection against wild animals, global warming, anti-social elements, etc., and is a relaxing place to live. In ancient times, humans lived in caves. As time passed, they slowly evolved and constructed their houses according to their comfort.
          
          # Different types of houses
          
          Different types of houses are built according to the climate and region. For example, house structure varies in plains, marshy areas, heavy rainfall regions, mountains, deserts, etc.  The structure of the houses varies from the region to region. So, people build houses that are suitable for the climate and natural resources. Building materials for construction differ for each type of house.  Moreover, one can see the different types of houses in cities and villages.  For example, you can see houses like mud houses, huts, bungalows, apartments, independent houses, etc. 
          
          # People and their houses
          
          Food, water, clothing, and shelter are more important basic things for human beings. The shelter is needed for every living thing. Due to some reason, some people lack their basic needs. These people live the homeless life. They are seeking shelter in subways, roadside pathways, under bridges, open grounds, etc. It is a serious social problem, that these kinds of people leading their life with insufficient livelihood. To eradicate this problem, our government is introducing  many schemes and taking huge steps to fulfill the basic needs of these people. 
          
          # Depletion of natural resources
          
          The world population is increasing day by day. As a result, the number of houses is increasing. Natural resources are used in large amounts to fulfill mankind’s needs. For example, extracting sand from riverbeds, cutting down trees to clear the land, digging more hills for quarrying, and using exhaustible sources of energy. Using plenty of natural resources for a long time will put our world in danger. For urbanization development, many agricultural lands, forests are destroyed and natural resources are getting wasted. Usually, to form the exhaustible sources in nature, it will lakhs of time. So, it is in our hands, to protect our environment and natural resources.
          
          # Home Sweet Home
          
          It is our responsibility to save and protect natural resources and the environment. So that future generations can use this utility well. It is necessary to construct eco–friendly houses and should increase the use of non-exhaustible sources of energy.  Recycling water, garbage, avoiding plastics, artificial materials, and colors will help in the protection of our environment.`
        }
      },
      {
        label: 'Exhaustible  Vs Non - exhaustible',
        id: '300',
        type: 'group',
        data: {
          title:
            'Classify the below things based on the category of exhaustible sources and non - exhaustible sources.',
          types: [
            {
              name: 'Exhaustible',
              text: 'Iron, Oil, Coal, Fuel'
            },
            {
              name: 'Non - exhaustible',
              text: ' Solar energy, Wind energy, Hydro energy, Biogas'
            }
          ]
        }
      },
      {
        label: 'Fill in the blanks',
        type: 'matchByDragDrop',
        id: '600',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `Houseboats are commonly seen in *Kerala*.
          *Tents* are lightweight and it is easy to carry along with us on travel.
          *Cottages* are widely seen in hilly areas.
          Prehistoric humans were lived in *caves*.
          *Tiles* are used for covering floors, walls, etc.`
        }
      },
      {
        label: 'True or False',
        id: '200',
        type: 'classifySentence',
        data: {
          title: 'Classify the below sentences as true and false',
          types: [
            {
              name: 'True',
              text: `Tents are made up of nylon or canvas.
              House helps us to protect from the anti-social elements.
              Ventilation is a more important factor in the house.`
            },
            {
              name: 'False',
              text: `Quarrying helps to protect natural sources.
              Fuel is a non-exhaustible source.`
            }
          ]
        }
      },
      {
        id: '500',
        label: 'Match the following',
        type: 'match',
        data: {
          text: `Drilling machine, Noise pollution
          Bungalow, Luxury house
          Fuel, Fossil
          Forest, Woodhouse
          Cement, Limestone`,
          title: 'Match the following'
        }
      },
      {
        id: 'fillup',
        label: 'Fill in the blanks',
        type: 'fillupOptions',
        data: {
          title: 'Click the blanks and fill it with the right word.',
          text: `*Caravan (wooden house)* is a temporary house, that helps to navigate to all places.
          *Pucca house (Kutcha house)* is made up of stone, concrete, clay tiles, etc.
          Apartments are widely seen in *urban (rural)* areas.
          *Flat roofs (Hip roofs )*are commonly seen on commercial buildings.
          *Eco-friendly houses (Cottages)* requires less energy consumption.`
        }
      },
      {
        label: 'Choose the best Answer ',
        id: '1000',
        type: 'mcq',
        data: {
          title: 'Multiple Choice Questions',
          questions: [
            {
              qText: ' ________  are  found in the polar region.',
              options: 'Igloos, Apartments, Bamboo houses, Tents'
            },
            {
              qText:
                '____________ are made up of silica sand.',
              options: 'Glasses, Cements, Bricks, Tiles'
            },
            {
              qText: 'Stilt houses are found in ___________ ',
              options: 'marshy region, dessert region, mountain region, plains'
            },
            {
              qText: '__________ help to build the Kutcha house.',
              options: 'Straw and wood, Bricks and cement, Sand and steel, Cement and wood'
            },
            {
                qText: 'Mansion is a example of _________',
                options: 'pucca house, kutcha house, wooden house, mudhouse'
            }
          ]
        }
      }
    ]
  };
