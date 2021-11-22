export default {
  label: 'People and Jobs',
  id: 'people-jobs',
  lockAfter: 4,
  list: [
    {
      type: 'slides',
      id: 'tools',
      label: 'Tools',
      commonData: {
        audio: 'kg-5/tools.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text:
            'axe, balance, blackboard, hose, microscope, needle, oven, plier'
        },
        {
          audioOffset: 16,
          text:
            'plough, saw, spade, stethoscope, telescope, testtube, thermometer, trowel'
        },
        {
          audioOffset: 32,
          text: 'walkie-talkie, awl, compass, easel, hacksaw, scalpel'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Tools',
      id: 'pick-tool',
      commonData: {
        title: 'Listen to the sound and click on the right picture.',
        type: 'image',
        audio: 'kg-5/tools.mp3'
      },
      data: [
        {
          words:
            'axe, balance, blackboard, hose, microscope, needle, oven, plier'
        },
        {
          audioOffset: 16,
          words:
            'plough, saw, spade, stethoscope, telescope, testtube, thermometer, trowel'
        },
        {
          audioOffset: 32,
          words: 'walkie-talkie, awl, compass, easel, hacksaw, scalpel'
        }
      ]
    },
    {
      label: 'People and Jobs - Match',
      type: 'matchByDragDrop',
      id: '100',
      data: {
        isPractice: false,
        title: 'Drag and drop to match People and Jobs.',
        styles: {
          fontSize: '1rem',
          dashWidth: 60
        },
        text:
          'A *fireman* puts out fire. \n A *butcher* cuts meat and sell. \n A *policeman* prevents crime. \n A *veterinary doctor* looks after sick animal. \n A *postman* delivers letter to our house. \n A *tailor* makes clothes'
      }
    },
    {
      label: 'People and Workplace',
      type: 'matchByDragDrop',
      id: '200',
      data: {
        isPractice: false,
        title: 'Drag and drop to match People and workplace.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text:
          'Doctor → *Hospital* \n  Teacher → *School* \n Cashier → *Bank* \n Chef → *Restaurant* \n Lawyer → *Court* \n  Photographer → *Studio*'
      }
    },
    {
      label: 'People and Tools',
      type: 'matchByDragDrop',
      id: '300',
      data: {
        isPractice: false,
        title: 'Drag and drop to match People and the tools they use.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text:
          'Doctor → *Stethoscope* \n  Painter → *Brush* \n Fisherman → *Net*  \n Photographer → *Camera* \n Butcher → *Knife* \n  Farmer → *Plough* \n  Woodcutter → *Axe*'
      }
    },
    {
      label: 'Profession - MCQ',
      type: 'mcq',
      id: '400',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: '________ cuts the meat and sells it in their shop.',
            options: 'Butcher,Barber,Plumber,Chef'
          },
          {
            qText: '_________ makes wooden doors, windows and furnitures.',
            options: 'Carpenter,Mechanic,Waiter,Mason'
          },
          {
            qText: 'We go to _________ when we have toothache.',
            options: 'Dentist,Doctor,Nurse, Chemist'
          },
          {
            qText: '__________ prevents crime.',
            options: 'Police, Lawyer, Fireman'
          },
          {
            qText: '__________ drives a bus.',
            options: 'Driver, Pilot, Captain'
          },
          {
            qText: 'Who is the backbone of our country?',
            options: 'Farmer, Lawyer, Scientist, Police'
          },
          {
            qText: 'Sherlock Holmes is a famous _________ in stories.',
            options: 'Detective, Actor , Teacher, Police'
          }
        ]
      }
    },
    {
      label: 'Profession - MCQ - 2',
      id: '500',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Where can we buy a bouquet ?',
            options: 'florists, toy shop, bakery'
          },
          {
            qText: 'Where can we buy a book ?',
            options: 'book stall, chemist, green grocers'
          },
          {
            qText: 'Where can we buy a plane ticket ?',
            options: 'travel agency, book stall, dairy'
          },
          {
            qText:
              'Whom would your father approach when he has to get his car repaired?',
            options: 'mechanic, cobbler, plumber'
          },
          {
            qText:
              'Whom would your father approach if there is a leaking pipe?',
            options: 'plumber, mechanic, cobbler, carpenter'
          }
        ]
      }
    },
    //Newly added
    {
      label: 'Common Occupations-1',
      type: 'passage',
      id: 'common-occupations-1-reading',
      data: {
        title: 'Common Occupations-1',
        text: `# 1. Teacher
          A teacher helps us acquire knowledge. A good teacher has a very important role in a student's life. They lay foundation of their values, knowledge and principles. We must always respect our teachers.

# 2. Engineer
Engineers are experts in designing, analytics, machines, gadgets, software, etc. It is one of the most popular profession among science students. Engineers work in technology companies, start-ups, fields, etc.

# 3. Potter
A potter is a craftsman who is an expert in pottery. They shape their pottery on a potter's wheel. Pottery is anything that is made of clay.

# 4. Mechanic
A mechanic is an expert who repairs and maintains vehicles, television, refrigerator and other machines. We can go to a mechanic's shop for repairing or can call them at our home for the same.

# 5. Farmer
A farmer is the backbone of agriculture. Farmers work in fields and grow crops. They sell cultivated crops to the vendors and then we can buy them. Farmers are the reason we get food. Do you know that agriculture is a major occupation in India?

# 6. Photographer
A photographer is a person who is an expert at taking perfect pictures. There are different areas where photographers work like weddings, company events, wildlife, travel, film industry, modeling industry, etc.

# 7. Actor
An actor/actress is a person who has skills for acting. They can easily play the role of any character assigned to them. Actors work in performing arts like theatre, movies, plays, TV shows, street plays, etc.

# 8. Dancer
A dancer is a person who is very good at dancing. A dancer knows or can learn different forms of dancing such as Kathak, classical, hip-hop, pop, freestyle, contemporary, etc. Dancing is a part of performing arts.

# 9. Watchman
A watchman or a guard is a person who ensures the safety of a building. They carry a stick, a torch and sometimes a gun for safety. They work at banks, apartment buildings, bungalows, companies, etc. They protect the places from thieves and robbers.

# 10. Gardener
A gardener is a person who takes care of the gardens. They know exactly which plants can grow well in the garden, depending upon the season. They take good care of the plants by watering them with the right amount, adding necessary manures and fertilizers in the soil, etc. The credit for a good lawn always goes to the gardener.

# 11. Doctor
A doctor works in the health sector of the country. Doctors take care of our health and attend to any problems related to it. We can find doctors in clinics and hospitals. They're trained to do the best they can to make people healthy and disease-free.

# 12. Barber
We go to a barber each time we need a haircut. Barbers are experts who have the skills to cut our hair perfectly. They also help us style our hair better and make us look good. Barbers work at saloons.

# 13. Tailor
A tailor sews clothes. They can make shirts, pants, suits, salwar, uniforms, jeans and even skirts. They take our body measurements and start working on our clothes. We just need to give them a piece of cloth and tell them how we want it.

# 14. Weaver
A weaver is an expert in weaving. There are two types of weavers. Handweavers do weaving by hand. As a result, they have control over the quality of the final product. The second type of weaver is the operator. They operate the weaving machines in factories.

# 15. Goldsmith
A goldsmith is a person who specializes in working with gold and other precious metals. They mainly specialize in making jewelry and other decoratives. They do this by cutting, melting, beating and polishing the precious metals and stones.`
      }
    },
    {
      label: 'Common Occupations-2',
      type: 'passage',
      id: 'common-occupations-2-reading',
      data: {
        title: 'Common Occupations-2',
        text: `# 1. Nurse
A nurse provides care to the patients in the hospitals. They help them get rid of their pain and discomfort. They also educate them about their health condition and what they can do to get better. They also educate them on how to stay healthy.

# 2. Singer
A singer has a melodious voice. They are trained in the field of music. They know sounds and rythmns. They work in the film industry, temples, as music teachers, in schools etc. Many famous singers organize their concerts where people go to listen to them live.

# 3. Plumber
A plumber is a person who has the skills to repair and replace the taps and pipelines. They can fix the leaking or running taps, can change damaged pipelines, can detect the problems we're unaware of, etc.

# 4. Shepherd
This is one of the oldest occupations. A shepherd is a person who has a flock of sheep. He rears them for wool and milk. A shepherd works in the agriculture sector and animal husbandry.

# 5. Fisherman
A fisherman captures fishes and other animals from water bodies. They also gather shells from the shores. They sell the caught fishes in the market, to the local vendors, in the food industry or they simply keep it for themselves.

# 6. Police
The police are a group of policemen. They're trained to protect the citizens from threats, accidents, thieves, robbery, etc. They wear khaki clothes. It's their uniform. They maintain the law and order in the country.

# 7. Cobbler
A cobbler is a person who makes and repairs shoes. They replace torn soles. They can stitch the torn part of shoes. They can also repair heels and slippers.

# 8. Carpenter
Carpenters are people skilled with wooden framework. They are experts in making furniture, wooden roofs, wooden floors, tree houses, etc. Their work area is usually construction and furniture companies.

# 9. Shopkeeper
A shopkeeper is a person who owns a shop or works in a shop. They assist us each time we visit. They show us variety in what we want. They help us choose the products that would be best for us. They take care of the shop and maintain it.

# 10. Electrician
An electrician has complete knowledge about the electric wires. They help us each time we face fluctuations in current or powercut. Electricity can be very dangerous and therefore we must always contact an electrician if we face any problem.

# 11. Baker
A baker is a person who works at a bakery. They sell and bake food like cakes, pastries, pancakes, muffins, donuts, etc.

# 12. Writer
Being a writer is a very creative job. A writer is very innovative. Their choice of words makes the stories and poems very interesting. A good writer can have one or multiple styles of expressing their ideas. The most common styles are novels, poems, dramas, plays, and stories.

# 13. Driver
A driver is skilled in driving. They drive public vehicles like cabs, buses, trucks, tractors, trains, airplanes, etc. Many people hire drivers to drive their personal vehicles as well.

# 14. Salesman
A salesman is also called a sales representative. They basically sell services or products to businesses or customers. They can be door-to-door sellers or freelancers.

# 15. Blacksmith
A blacksmith is a person who makes different things out of scrap metals like iron or steel. They do this by hammering, melting, shaping, etc.`
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      commonData: {
        title: 'Match the pairs'
      },

      data: [
        `Doctor, Hospital
          Shopkeeper, Shop
          Fisherman, Sea
          Driver, Vehicles
          Teacher, School`,

        `Blacksmith, Scrap
          Salesman, Sells
          Writer, Books
          Baker, Bakery
          Electrician, Wires`,

        `Carpenter, Wood
          Cobbler, Shoes
          Police, Safety
          Shepherd, Flock
          Plumber, Pipes`,

        `Nurse, Hospital
          Singer, Melody
          Goldsmith, Gold
          Barber, Haircut
          Tailor, Clothes`,
        
        `Engineer, Software
          Mechanic, Machines
          Photographer, Camera
          Shephard, Sheep
          Fisherman, Sea shore`,


        `Weaver, Weaving
          Gardner, Lawns
          Potter, Clay
          Farmer, Field
          Dancer, Performance`
      ]
    },
    {
      label: 'True or False',
      id: 'tf',
      type: 'classifySentence',
      commonData: {
        title: 'State whether these statements are true or false.',
        types: ['True', 'False']
      },
      data: [
        [
          `A cobbler is a person who repairs shoes.
              Shepherd is one of the oldest occupations.
              A singer has a melodious voice.`,
          `Dancers work in hospitals.
    Shopkeeper helps the patients.
    An actor is an expert in dancing.`
        ],
        [
          `A farmer is the most important unit of agriculture.
              We have no threat of robbery if we have a watchman.
              A potter makes pottery on a spinning wheel.`,
          `Gardner takes care of the law.
     A weaver sews our clothes as per our demands.
    Goldsmith makes things out of scrap.`
        ],
        [
          `A driver is a person who drives cars.
              An electrician is an expert of wires and electricity.
              A nurse takes care of patients in the hospital.`,
          `A salesman helps us in shops.
      A write is a person who helps us in completing our homework.
      Police protects the theives.`
        ],
        [
          `Blacksmith moulds the scrap into usable products.
                 A tailor sews our clothes as per our demands.
                 Barber styles our hair.`,
          `A carpenter works with shoes.
    A baker serves people at a restaurant.
    A plumber helps to repair vehicles.`
        ]
      ]
    },
    {
      label: 'Multiple Choice Questions',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Choose the correct answer.',
        questions: [
          {
            qText: 'Who assists patients in the hospital?',
            options: 'Nurse, Teacher, Watchman'
          },
          {
            qText: 'Who is an expert in jewelry-making?',
            options: 'Goldsmith, Blacksmith, Cobbler'
          },
          {
            qText: 'Who is skilled with the wooden frameworks?',
            options: `Carpenter, Blacksmith, Cobbler`
          },
          {
            qText: 'Who makes cakes and pastries?',
            options: 'Baker, Nurse, Teacher'
          },
          {
            qText: 'Who maintains law and order?',
            options: 'Police, Conductor, Salesman'
          }
        ]
      }
    },
    {
      id: 'jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      commonData: {
        title: 'Identify these occupations.'
      },
      data: [
        'Police, Doctor, Driver, Tailor, Barber',
        'Weaver, Baker, Nurse, Writer, Actor'
      ]
    },
    {
        label: 'Fill in the blanks',
        type: 'matchByDragDrop',
        id: 'drag-and-drop',
        commonData: {
        isPractice: false,
        title: 'Drag the correct option in each blank to form an alliteration.',
        styles: {
        fontSize: '1rem',
        dashWidth: 80
          }
        },
         data: [
          `A *teacher* works in schools.
           A *singer* has a melodious voice.
           A *writer* is very creative.
           A *barber* styles our hair.
           A *salesman* sells products and services.`,

`An *electrician* is an expert of electricity.
A *nurse* takes care of the patients.
A *doctor* takes care of our health.
A *policeman* punishes the culprit.
A *dancer* is an entertainer.`,

`A *blacksmith* works with the metals.
A *farmer* works in agriculture.
An *actor* works in Tv shows and movies.
A *cobbler* repairs shoes.
A *baker* makes cakes and pastries.`,
           
`A *weaver* works in clothing industries.
A *potter* makes things of clay.
A *photographer* can work in many areas, including wildlife.
A *fisherman* catches fish and collects shells.
A *tailor* sews clothes.`,
           
`A *shephard* has a lot of sheep.
A *plumber* can fix running and leaking taps.
A *driver* drives vehicles.
A *carpenter* makes furniture.
A *shopkeeper* has a shop.`
        ]
      },
    {
      id: 'fillup',
      label: 'Fill up with options',
      type: 'fillupOptions',
      data: {
        text: `A *blacksmith (goldsmith)* works with scrap.
          A *doctor (nurse)* prescribes medicines.
          A *teacher (dancer)* teaches values.
          A *shopkeeper (salesman)* sells products in a shop.
          An *electrician (plumber)* deals with wires.`,
        title: 'Tap on each blank to view options.'
      }
    },
    {
      type: 'rightOne',
      label: 'Correct Spelling',
      id: 'correct-spelling',
      commonData: {
        title: 'Identify the correct spelling.',
      }
      data : [
      
        `Police, Poliece
          Dancer, Danser
          Barber, Barbar
          Writer, Riter
          Cobbler, Cobblar`,
      
        `Electrician, Electricean
          Salesman, Saleman
          Blacksmith, Blacksmit
          Singer, Singur
          Dancer, Dancur`,
      
        `Doctor, Docter
          Shopkeeper, Shopkeper
          Fisherman, Fishman
          Driver, Driiver
          Teacher, Teecher`,
      
        `Baker, Bakeir
          Carpenter, Carpent
          Shepherd, Shefard
          Plumber, Pumber
          Nurse, Nusze`
      
        `Goldsmith, Goldsmit
          Tailor, Taylor
          Weaver, Weavar
          Gardner, Gardnar
          Potter, Pottar`
        ]  
      },
    {
      id: '1635960563407',
      editable: true,
      type: 'wordsearch',
      label: 'WordSearch - occupations-1',
      data: {
        title: 'Find the given words from the table.',
        words: [
          {
            word: ['P', 'L', 'U', 'M', 'B', 'E', 'R'],
            marker: [6, 0, 6, 6]
          },
          {
            word: ['C', 'O', 'B', 'B', 'L', 'E', 'R'],
            marker: [0, 6, 6, 6]
          },
          {
            word: ['S', 'I', 'N', 'G', 'E', 'R'],
            marker: [1, 1, 6, 6]
          },
          {
            word: ['B', 'A', 'R', 'B', 'E', 'R'],
            marker: [3, 1, 8, 6]
          },
          {
            word: ['F', 'A', 'R', 'M', 'E', 'R'],
            marker: [8, 4, 8, 9]
          },
          {
            word: ['B', 'L', 'A', 'C', 'K', 'S', 'M', 'I', 'T', 'H'],
            marker: [0, 9, 0, 0]
          },
          {
            word: ['G', 'A', 'R', 'D', 'E', 'N', 'E', 'R'],
            marker: [1, 9, 8, 9]
          }
        ],
        table: [
          ['H', 'Q', 'G', 'K', 'N', 'Y', 'P', 'S', 'G'],
          ['T', 'S', 'W', 'B', 'Z', 'H', 'L', 'V', 'O'],
          ['I', 'E', 'I', 'Y', 'A', 'W', 'U', 'L', 'E'],
          ['M', 'O', 'L', 'N', 'H', 'R', 'M', 'Q', 'W'],
          ['S', 'E', 'Y', 'R', 'G', 'I', 'B', 'V', 'F'],
          ['K', 'Z', 'R', 'N', 'M', 'E', 'E', 'E', 'A'],
          ['C', 'O', 'B', 'B', 'L', 'E', 'R', 'J', 'R'],
          ['A', 'L', 'O', 'V', 'E', 'M', 'S', 'Z', 'M'],
          ['L', 'O', 'V', 'K', 'R', 'E', 'K', 'O', 'E'],
          ['B', 'G', 'A', 'R', 'D', 'E', 'N', 'E', 'R']
        ],
        lang: 'en',
        showWords: true
      }
    },
    {
      id: '1635960900264',
      editable: true,
      type: 'wordsearch',
      label: 'WordSearch - occupations-2',
      data: {
        title: 'Find the given words from the table.',
        words: [
          {
            word: ['S', 'A', 'L', 'E', 'S', 'M', 'A', 'N'],
            marker: [8, 0, 8, 7]
          },
          {
            word: ['C', 'A', 'R', 'P', 'E', 'N', 'T', 'E', 'R'],
            marker: [1, 3, 9, 3]
          },
          {
            word: ['B', 'A', 'K', 'E', 'R'],
            marker: [1, 2, 5, 6]
          },
          {
            word: ['T', 'E', 'A', 'C', 'H', 'E', 'R'],
            marker: [0, 8, 6, 8]
          },
          {
            word: ['D', 'O', 'C', 'T', 'O', 'R'],
            marker: [0, 0, 0, 5]
          },
          {
            word: ['D', 'R', 'I', 'V', 'E', 'R'],
            marker: [0, 0, 5, 0]
          },
          {
            word: ['W', 'E', 'A', 'V', 'E', 'R'],
            marker: [4, 9, 9, 9]
          }
        ],
        table: [
          ['D', 'R', 'I', 'V', 'E', 'R', 'H', 'L', 'S', 'S'],
          ['O', 'T', 'E', 'Q', 'K', 'I', 'S', 'E', 'A', 'J'],
          ['C', 'B', 'X', 'L', 'L', 'C', 'S', 'C', 'L', 'N'],
          ['T', 'C', 'A', 'R', 'P', 'E', 'N', 'T', 'E', 'R'],
          ['O', 'P', 'E', 'K', 'F', 'Y', 'I', 'V', 'S', 'O'],
          ['R', 'R', 'G', 'N', 'E', 'C', 'B', 'N', 'M', 'Q'],
          ['V', 'W', 'D', 'J', 'R', 'R', 'I', 'A', 'A', 'H'],
          ['J', 'Y', 'R', 'T', 'H', 'M', 'S', 'M', 'N', 'F'],
          ['T', 'E', 'A', 'C', 'H', 'E', 'R', 'E', 'N', 'L'],
          ['R', 'N', 'X', 'K', 'W', 'E', 'A', 'V', 'E', 'R']
        ],
        lang: 'en',
        showWords: true
      }
    }
  ]
};
