export default {
    id: 'job-3',
    label: 'Job-3',
    pdf: '',
    lockAfter: 4,
    list: [
      {
        label: 'Occupation- Reading',
        type: 'passage',
        id: '100',
        data: {
          title: 'Who fulfills our needs? ',
          text: `People work to fulfill their needs; some people's work tends to fulfill the needs of other people as well. These different types of work are called occupations.
          
          # Types of occupations
          
          1. Nature-based: agriculture, fishing, etc.
          2. Manufacture: clothes, automobiles, etc.
          3. Trade: shopkeeping, selling products, etc.
          4. Providing services: teacher, doctor, etc.
          
          # Importance of agriculture
          
          1. Food is available to us because many people are farmers by occupation.
          2. Many of the nutritious food items like bhakri, sugar, fruits, chapati, jowar, bajra, wheat, rice, dals, vegetables, etc. are produced by agriculture.
          3. Not just food, cotton yarn for textiles; plants for medicines; fodder for cattle; grains for chickens; are obtained through agriculture.
          4. Occupations like sheep rearing, poultry, animal husbandry and fruit processing are dependent on agriculture.
          
          # Industry
          
          Raw materials are processed into finished products in industries. For example,
          1. Pottery industry: Clay is the raw material and pots are finished products.
          2. Cottage industry: Wood is the raw material and furniture is the finished product.
          3. Some factories are so big that it requires many people to operate the machines.
          
          # Do you know?
          
          Early men used to search and hunt for food. They eventually discovered the technique to grow all crops that yield food in one place. It saved their time and effort. This is how agriculture started.
          
          Certain occupations run on a large scale in some cities and thus, such cities become famous for those products. For example, 
          1. Solhapur- Solhapuri bedsheets
          2. Kolhapur- Kolhapuri Chappals
          3. Paithan- Paithanis
          
          # Conclusion
          
          Although human beings have developed many occupations, we rely on nature to provide us raw materials for the same. Therefore, we can conclude that nature fulfills our needs.`
        }
      },
      {
        label: 'Occupation',
        type: 'matchByDragDrop',
        id: '600',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `Produces crops in the field- *Farmer*
          Takes care of our health- *Doctor*
          Brings us milk- *Milkman*
          Sells us goods- *Shopkeeper*
          Runs industry- *Businessman*
          Helps us gain knowledge- *Teacher*
          Provides justice- *Judge*`
        }
      },
      {
        label: 'Classify the Occupations',
        id: '200',
        type: 'classifySentence',
        data: {
          title: 'Which industry these occupations belong to?',
          types: [
            {
              name: 'Nature-based',
              text: `Agriculture
              Fishing
              Poultry.`
            },
            {
              name: 'Providing service',
              text: `Farmer
              Teacher
              Doctor`
            }
          ]
        }
      },
      {
        label: 'Raw materials Vs Finished products',
        id: '201',
        type: 'group',
        data: {
          title: 'Classify the given items as follows.',
          types: [
            {
              name: 'Raw materials',
              text: 'Sugarcane, Cotton, Bamboo, Wheat, Fruits, Iron, Clay'
            },
            {
              name: 'Finished products',
              text: 'Cars, Clothes, Tyres, Pots, Omelet, Chairs, Fans'
            }
          ]
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
              qText: ' Sugarcane',
              options: 'Sugar industry, Cloth industry, Poultry industry'
            },
            {
              qText:
                'Cotton',
              options: 'Garment industry, Sugar industry, Food industry'
            },
            {
              qText: 'Bamboo',
              options: 'Basket-weaving, Garment industry, Food industry'
            },
            {
              qText: 'Maida',
              options: 'Bakery industry, Garment industry, Poultry industry'
            },
            {
                qText: 'Wheat',
                options: 'Food industry, Sugar industry, Basket-weaving'
            }
          ]
        }
      },
      {
        label: 'Our Friends - Reading',
        type: 'passage',
        id: '400',
        data: {
          title: 'Our Friends',
          text: `# Firefighters

          They are trained to save people when there's a fire accident. They wear protective jackets and extinguish fire with water and foam. They also move people and property to a safer place.
          
          # Ambulance
          
          It is an emergency vehicle that has a facility for first aid. It helps to treat the patient first hand until they reach the hospital.
          
          # Good Samaritan Law
          
          It states that any person can help the victim to reach the hospital, without revealing their name or pay for the treatment. This law was introduced so people can help the victims without fearing the police, law, rules etc.
          
          # Engineers
          
          They design buildings like houses, offices and schools as per the requirements of people who will live, work or study there.
          
          # Road workers
          
          They lay roads to make travel easy for pedestrians and vehicles. They also repair the old and damaged roads.
          
          # Farmers
          
          They are the reason that we are getting food. They work in fields all year long for everyone to get food.
          
          # Drivers and Conductors
          
          They're usually seen in huge and heavy vehicles like buses and trucks. A driver drives the vehicle and the conductor guides and instructs him.
          
          # Police
          
          They take charge of maintaining law and order. They help us whenever we are in trouble (robbery, public disputes, accidents etc.).
          
          # Soldiers
          
          They fight at the border to protect our country from foreign attacks, terrorists, enemies and invaders. They form the Army.
          
          # Teachers
          
          They enlighten us with knowledge and values. They help us become good citizens and good human beings.
          
          # Traffic police
          
          They control the vehicles coming from all sides to avoid accidents and protect pedestrians.
          
          # Court
          
          It resolves all the issues and problems as per the laws of our country. It protects our rights and provides justice.`
        }
      },
      {
        id: '500',
        label: 'Match the following',
        type: 'match',
        data: {
          text: `Doctor, Hospital
          Teacher, School
          Firefighter, Fire brigade
          Postman, Letters
          Engineer, Buildings`,
          title: 'Match the following'
        }
      },
      {
        id: 'fillup',
        label: 'Who am I?',
        type: 'fillupOptions',
        data: {
          title: 'Click the blanks and fill it with the right word.',
          text: `I stitch and sew clothes. *Tailor (Teacher)*
          I paint walls. *Painter (Artist)*
          I repair pipes and taps. *Plumber (Cobbler)*
          I guard houses and people. *Watchman (Milkman)*`
        }
      },
      {
        label: 'True or False',
        id: '700',
        type: 'classifySentence',
        data: {
          title: 'Classify the below sentences as true and false',
          types: [
            {
              name: 'True',
              text: `A tailor stitches the clothes.
              Traffic police controls traffic.
              Supreme court is the guardian of the constitution.`
            },
            {
              name: 'False',
              text: `An electrician fits pipes and tubes.
              Doctors protect people and properties.`
            }
          ]
        }
      },
      {
        label: 'Fill by drag',
        type: 'matchByDragDrop',
        id: 'drag-drop ',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `*First aid* is a lifesaving treatment that is given before the actual treatment to a victim.
          Nurse assists the *doctor*.
          *Judge* gives justice to the people in various cases.
          *Teacher* enlightens us with knowledge.
          Road workers lay *roads*.`
        }
      }
    ]
  };