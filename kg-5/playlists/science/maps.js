export default {
  id: 'maps',
  label: 'Maps-1',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Directions and Maps - Reading',
      type: 'passage',
      id: '100',
      data: {
        title: 'Directions and maps',
        text: [
          `How to find the directions?

              There are mainly four directions: East, West, North and South.
              
              The direction in which sun rises is east.
              The direction in which sun sets is west.
              East and west are opposite to each other.
              When we face east, the north is to our left and the south is to our right.
              Do you know, because the sun rises and sets every day, it is used to determine directions.`,

          `#Use of directions in maps`,

          `Directions are always shown in a map. They are indicated with an arrow pointing north. Before reading the map, make sure the directions on the map match the directions on the ground. This method will help you to read the maps.`,

          `# District, state and country`,

          `1. We live in a house. Our houses are contructed on land.`,
          `2. A continent is the vast section of land on the earth.`,
          `3. The earth's surface is also occupied by the salt water. This part is called Ocean.`,
          `4. Earth is also known as the world.`,

          `World is made up of many countries and countries are made up of states.
                Our country is India. 'Brihanmumbai' is one of our country's biggest cities. The ‘Mumbai City District' and the ‘Mumbai Suburban District' are the two districts of Brihanmumbai. Mumbai is one of India's most populous cities. Mumbai is the state capital of Maharashtra.
                Do you know? The information in a map is presented via symbols, drawings, signs, and various shades of colour. Along with the map, there is a list of these symbols and other information. This list is known as Index. Index helps us to understand the map.`
        ]
      }
    },
    {
      label: 'Drag and drops the words at the right places',
      type: 'matchByDragDrop',
      id: '200',
      data: {
        isPractice: false,
        title: 'Drag and drops the words at the right places',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `*South* direction is opposite to north direction.
              A vast section of land on the earth is called *continent*.
              Sun rises from *east* and sets in *west* direction.
              *Ocean* is the part of earth's surface occupied by salt water.
              *Index* helps us to understand map through symbols and signs.`
      }
    },
    {
      label: 'Choose the best Answer - Maps',
      id: '300',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' What is the name of the country we live in?',
            options: 'India, Spain, Earth, United States'
          },
          {
            qText: 'Earth is also known as ___________.',
            options: 'World, Ocean, Continent, State'
          },
          {
            qText: 'Which direction is to our left when we face east?',
            options: 'North, South, East, West'
          },
          {
            qText: '____________ is the capital of Maharashtra.',
            options: 'Mumbai, Nagpur, Pune, Nashik'
          },
          {
            qText: 'Which direction does the magnetic needle shows?',
            options: 'North, South, East, West'
          }
        ]
      }
    },
    {
      label: 'Maps & Direction - Few facts',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        isPractice: false,
        title: 'Drag and drops the words at the right places',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Type of map which shows boundary lines for states. *Physical map*
              The colour which  is used to indicate mountains and hills on the map. *Brown*
              The tool which is used for determining directions. *Compass*
              The direction between north and east. *North east*
              Kerala is situated in which part of India. *Southwestern*`
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
            text: `We can make a globe for small part of India.
                  Plains and mountains are shown in different colour.`
          },
          {
            name: 'False',
            text: `Picture that stands for different features on a map is Index.
                  The name of map is known as map key.
                  There are three main directions east, west and south.`
          }
        ]
      }
    },
    {
      label: 'Understanding of direction',
      type: 'matchByDragDrop',
      id: '400',
      data: {
        isPractice: false,
        title: 'Drag and drops the words at the right places',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Kaveri walks towards north, then she turns left. *West*
              Prakash drove towards east and then turned right. *South*
              Raja walks towards south, then turns left and again turns left. *North*
              I am facing west, now I am facing the opposite direction. *East*`
      }
    },
    {
      label: 'Understanding maps',
      type: 'matchByDragDrop',
      id: '500',
      data: {
        isPractice: false,
        title: 'Drag and drops the words at the right places',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `*Moving objects* are not included on a map.
              An area is shown to take exactly the same turns on a map is a *winding road*.
              The largest river basin of India is the *Ganga basin*.
              Andhra pradesh is located in the *southern* region of India.
              *Ajanta caves* are situated in Aurangabad district.`
      }
    },
    {
      id: '600',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Maharashtra, Mumbai
              Telangana, Hyderabad
              Odisha, Bhubaneshwar
              West bengal, Kolkata`,
        title: 'Match the following'
      }
    },
    {
      label: 'Places in India',
      type: 'matchByDragDrop',
      id: '700',
      data: {
        isPractice: false,
        title: 'Drag and drops the words at the right places',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `River originated from Gomukh. *Ganga river*
              State in which Bhimbhetika caves are situated. *Madhya pradesh*
              Where the source of Kaveri is located? *Western ghats*
              India's largest port by size. *Mumbai port*
              Port known for handling bulk Cargo on the eastern coast. *Visakhapatnam*`
      }
    },
    {
      label: 'Connect logically',
      type: 'matchByDragDrop',
      id: '800',
      data: {
        isPractice: false,
        title:
          'Connect logically, Drag and drops the words at the right places',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Jaipur : Rajasthan :: Shimla : *Himachal Pradesh*
              Godavari : Maharashtra :: Narmada : *Madhya Pradesh*
              Cotton : Natural :: Plastic : *Man-made*
              Northeast : Southeast :: Northwest : *Southwest*`
      }
    },
    {
      id: '900',
      label: 'Monuments & location',
      type: 'match',
      data: {
        text: `Taj Mahal, Agra
              India Gate, Delhi
              Hawa Mahal, Jaipur
              Victoria Memorial, Kolkata
              Golden Temple, Punjab`,
        title: 'Match the following'
      }
    }
  ]
};
