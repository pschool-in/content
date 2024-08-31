export default {
  label: 'Social',
  id: 'social',
  img: 'social',
  grade: '3-5',
  lockAfter: 100,
  list: [
    {
      type: 'dragDropImgLabel',
      label: 'Road Signs',
      id: 'road-signs',
      lockAfter: 2,
      commonData: {
        title: 'Drag the names and drop on the images.',
        path: 'img/social/road-sign'
      },
      data: [
        `2-way-traffic | 2 Way Traffic
one-way | One Way
give-way | Give Way
no-left-turn | No Left Turn
no-overtaking | No Overtaking
no-u-turn | No U-Turn`,

        `narrow-bridge | Narrow Bridge
no-parking | No Parking
no-right-turn | No Right Turn
t-junction | T-Junction
u-turn| U-Turn
zebra-crossing| Zebra Crossing`,

        `bicycle-crossing | Bicycle Crossing
horn-prohibited | Horn Prohibited
max-speed | Maximum Speed
men-at-work | Men at Work
parking | Parking
railroad | Rail Road`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Land Forms',
      id: 'land-forms',
      data: {
        title: 'Drag the names and drop on the images.',
        text: `desert | Desert
forest | Forest
grassland | Grassland
ocean | Ocean
polar | Polar Region
valley | Valley`
      }
    },
    {
      type: 'dragDropImgLabel',
      label: 'Monuments in India',
      id: 'monuments',
      onlyBigScreen: true,
      data: {
        title: 'Drag the names and drop on the images.',
        path: 'img/social/monument',
        text: `charminar | Charminar
indiagate | India Gate
qutub-minor | Qutub Minar
redfort | Red Fort
tajmahal |Taj Mahal
tanjore | Tanjore`
      }
    },
    {
      id: 'atmosphere-layers',
      label: 'Layers of Atmosphere',
      type: 'dragAndDrop',
      data: {
        img: 'atmosphere-layers.jpg',
        title: 'Layers of Atmosphere',
        width: 350,
        height: 350,
        wordWidth: 80,
        color: '#d16aef',
        fontSize: '0.9rem',
        words: [
          {
            word: 'Troposphere',
            x: 10,
            y: 240
          },
          {
            word: 'Stratosphere',
            x: 20,
            y: 170
          },
          {
            word: 'Mesosphere',
            x: 20,
            y: 130
          },
          {
            word: 'Thermosphere',
            x: 20,
            y: 70
          },
          {
            word: 'Exosphere',
            x: 20,
            y: 10
          },
          {
            word: 'Ozone Layer',
            x: 150,
            y: 250
          }
        ]
      }
    },
    {
      id: 'latitude',
      label: 'Latitude',
      type: 'dragAndDrop',
      data: {
        img: 'latitude.jpg',
        title: 'Latitude',
        width: 350,
        height: 344,
        wordWidth: 90,
        fontSize: '0.9rem',
        color: '#d16aef',
        words: [
          {
            word: 'Equator',
            x: 270,
            y: 160
          },
          {
            word: 'Tropic of Cancer',
            x: 270,
            y: 115
          },
          {
            word: 'Tropic of Capricorn',
            x: 270,
            y: 200
          },
          {
            word: 'Arctic Circle',
            x: 240,
            y: 45
          },
          {
            word: 'Antarctic Circle',
            x: 230,
            y: 270
          },
          {
            word: 'North Pole',
            x: 110,
            y: 15
          },
          {
            word: 'South Pole',
            x: 110,
            y: 310
          },
          {
            word: 'Northern Hemisphere',
            x: 90,
            y: 80
          },
          {
            word: 'Southern Hemisphere',
            x: 90,
            y: 250
          }
        ]
      }
    },
    {
      label: 'People and Workplace',
      type: 'matchByDragDrop',
      id: '3-people-workplace',
      data: {
        text: `Doctor → *Hospital*
Teacher → *School*
Cashier → *Bank* 
Chef → *Restaurant*
Lawyer → *Court*
Photographer → *Studio*`
      }
    },
    {
      label: 'People and Tools',
      type: 'match',
      id: '3-people-tools',
      data: {
        title: 'Match People and the Tools they use.',
        fontSize: '1rem',
        text: `Doctor, Stethoscope
Painter, Brush
Fisherman, Net
Photographer, Camera
Butcher, Knife
Woodcutter, Axe`
      }
    },
    {
      label: 'Profession - MCQ',
      type: 'mcq',
      id: '3-profession-mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `________ cuts the meat and sells it in their shop.`,
            options: `Butcher,Barber,Plumber,Chef`
          },
          {
            qText: `_________ makes wooden doors, windows and furnitures.`,
            options: `Carpenter,Mechanic,Waiter,Mason`
          },
          {
            qText: `We go to _________ when we have toothache.`,
            options: `Dentist,Doctor,Nurse, Chemist`
          },
          {
            qText: `__________ prevents crime.`,
            options: `Police, Lawyer, Fireman`
          },
          {
            qText: `__________ drives a bus.`,
            options: `Driver, Pilot, Captain`
          },
          {
            qText: `Who is the backbone of our country?`,
            options: `Farmer, Lawyer, Scientist, Police`
          },
          {
            qText: `Sherlock Holmes is a famous _________ in stories.`,
            options: `Detective, Actor , Teacher, Police`
          }
        ]
      }
    },
    {
      label: `What festival brings?`,
      type: 'group',
      id: '3-festival-brings',
      data: {
        title: 'What festival brings?',
        types: [
          {
            name: 'Brings',
            text: `joy, celebrations, blessings, happiness, greetings`
          },
          {
            name: "Doesn't Bring",
            text: ` worry, jealousy, hatred`
          }
        ]
      }
    },
    {
      label: 'Road Manners - Reading',
      type: 'passage',
      id: '3-road-manners-passage',
      data: {
        title: `Road Manners`,
        text: `Zebra Crossing is the black and white lines on the road. It is the safest place to cross the road. They are also known as pedestrian crossing. Pedestrians are people who walks on the road. 
At zebra crossing, we have to wait for green signal to cross the road. At some places, traffic police will help you to cross the road.
Apart from zebra crossings, subways and footbridges are provided on big roads, where there is heavy traffic. These are present only in big cities and towns. At small towns and villages, it is our responsibility to cross the road with care.
We should not rush to cross the road. We have to wait till the road is clear. We have to be patient for our own safety. Never cross the road at a corner or curve, because we cannot see the approaching vehicle.
We have to cross road by walking and should not run. If we run, we may fall. 
We have to follow some good habits when travelling in bus. Always follow the queue while entering or leaving the bus. Don't rush or push other people while getting into the bus. While waiting for bus, stand on the pavement and don't block the road. Do not play at the bus stop. Never board or alight from the bus when it is moving. Shouting and making noise is definitely bad manners, and it will distract the driver. If you are sitting in window seat, do not put any part of your body outside. If you are travelling by standing always hold the handrail.
It is always cool to have good manners. We can feel proud about ourself, and others also will have high opinion on us.`
      }
    },
    {
      label: 'Road Manners - MCQ',
      type: 'mcq',
      id: '3-road-manners-mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `Who are pedestrians?`,
            options: `people who walk on the road, people who cross the road, people riding bicycle, people who are waiting for bus.`
          },
          {
            qText: `We can go forward when the signal turns ______`,
            options: `green, orange, red`
          },
          {
            qText: `True or False: It is safe to run while crossing the road, because we can cross the road fast.`,
            options: `False, True`
          },
          {
            qText: `True or False: It is alright to cross the road at the curve`,
            options: `False, True`
          },
          {
            qText: `We should not make noise inside bus because _________`,
            options: `it will disturb the driver, friends will not like it, we will get throat pain`
          },
          {
            qText: `True or False: It is alright to put our hand outside the window and experience the wind.`,
            options: `False, True`
          }
        ]
      }
    },
    {
      label: 'States in South India',
      type: 'dragAndDrop',
      id: '4-map-south-states',
      data: {
        img: 'southIndiaStates.jpg',
        width: 342,
        height: 368,
        wordWidth: 100,
        words: [
          { word: 'Karnataka', x: 50, y: 180 },
          { word: 'Andhra Pradesh', x: 115, y: 130 },
          { word: 'Telangana', x: 140, y: 60 },
          { word: 'Tamil Nadu', x: 110, y: 240 },
          { word: 'Kerala', x: 40, y: 280 },
          { word: 'Goa', x: 6, y: 120 },
          { word: 'Maharashtra', x: 30, y: 10 }
        ]
      }
    },
    {
      label: 'States and Capitals',
      type: 'matchByDragDrop',
      id: '4-south-states-capital',
      data: {
        title: 'Drag and drop to match states and capitals.',
        id: '3-map-south-rivers',
        fontSize: '1rem',
        dashWidth: 70,
        text: `Andhra Pradhesh → *Amaravati*
Karnataka → *Bengaluru*
Kerala → *Thiruvananthapuram*
Tamil Nadu → *Chennai*
Goa → *Panaji*
Maharashtra → *Mumbai*`
      }
    },
    {
      label: 'Rivers',
      type: 'dragAndDrop',
      id: '4-map-south-rivers',

      data: {
        img: 'southIndianRivers.jpg',
        width: 253,
        height: 286,
        wordWidth: 85,
        words: [
          { word: 'Cauvery', x: 70, y: 180 },
          { word: 'Krishna', x: 125, y: 76 },
          { word: 'Godavari', x: 60, y: 10 },
          { word: 'Vaigai', x: 110, y: 240 },
          { word: 'Tungabhadra', x: 40, y: 140 },
          { word: 'Periyar', x: 26, y: 220 },
          { word: 'Penner', x: 130, y: 126 }
        ]
      }
    },
    {
      label: 'Languages',
      type: 'match',
      id: '4-south-state-language',
      data: {
        title: 'Match states and language spoken.',
        fontSize: '1rem',
        text: `Andhra Pradhesh, Telugu
Karnataka, Kannada
Kerala, Malayalam
Tamil Nadu, Tamil
Goa, Konkani
Maharashtra, Marathi`
      }
    },
    {
      label: 'Quiz',
      type: 'mcq',
      id: '4-south-state-mcq',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText: `Which is the recently formed state?`,
            options: `Telangana, Goa, Andhra Pradesh, Kerala`
          },
          {
            qText: `Which place is famous for Dasara?`,
            options: `Mysore, Bengaluru, Madurai, Kochi`
          },
          {
            qText: `Which city is the capital of more than one state?`,
            options: `Hyderabad, Bengaluru, Chennai, Thiruvananthapuram`
          },
          {
            qText: `Which state is called "God's own country"?`,
            options: `Kerala, Telangana, Goa, Andhra Pradesh`
          },
          {
            qText: `Which town is present at the meeting point of Arabian Sea, Bay of Bengal and Indian Ocean?`,
            options: `Kanyakumari, Madurai, Trichy, Kochi`
          },
          {
            qText: `Which town is an Island?`,
            options: `Rameswaram, Kanyakumari, Madurai, Kochi`
          },
          {
            qText: `Which place is not a hill station?`,
            options: `Cochin, Ooty, Kodaikanal, Coorg`
          },
          {
            qText: `Which city has cool climate?`,
            options: `Bengaluru, Chennai, Hyderabad, Vishakapatnam`
          }
        ]
      }
    },
    {
      label: 'Map - Cities ',
      type: 'dragAndDrop',
      id: '4-india-cities',
      data: {
        img: 'indiaOutline.jpg',
        title: `Drag and drop the cities at appropriate places.`,
        width: 333,
        height: 433,
        wordWidth: 70,
        words: [
          { word: 'Mumbai', x: 40, y: 240 },
          { word: 'Kolkata', x: 215, y: 210 },
          { word: 'Hyderabad', x: 110, y: 280 },
          { word: 'New Delhi', x: 100, y: 110 },
          { word: 'Bhopal', x: 100, y: 210 },
          { word: 'Srinagar', x: 76, y: 35 },
          { word: 'Itanagar', x: 260, y: 136 },
          { word: 'Chennai', x: 130, y: 340 }
        ]
      }
    },
    {
      label: 'Goods and Services - Passage',
      type: 'passage',
      id: '4-goods-services-passage',
      data: {
        title: 'Goods and Services',
        text: `We, human beings cannot live alone, on our own. We interact with many people and do transations and get our requirements done. For example, we cannot produce the food we eat on our own. We go to a store and buy different items, and come home and cook. Here the items what we bought from the store are known as 'goods'.
If we don't have time to cook on our own, then we go to a restaurant, where our ordered food will be delivered by a waiter. Here, what the restaurant provides is 'service'.
Why the food is not usually considered as 'goods' and rather considered as 'service'? Because, apart from the food, they also provide good atmosphere, tables and chairs for us to sit, waiter to take orders, and a chef to cook. If we buy service, we usually don't have to worry about internal workings and the service provider will take care of it.
Doctor, police, lawyer, Carpenter provides service to us. They don't sell anything to us. But their service is very important when we are in need. All kinds of stores, say super market,  provision stores, medicals, stationery stores etc sells 'goods' to us.
With little bit of thinking, we can figure out whether something is 'goods' or 'service'.`
      }
    },
    {
      label: 'Profession - MCQ',
      id: '4-profession-mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `Where can we buy a bouquet ?`,
            options: `florists, toy shop, bakery`
          },
          {
            qText: `Where can we buy a book ?`,
            options: `book stall, chemist, green grocers`
          },
          {
            qText: `Where can we buy a plane ticket ?`,
            options: `travel agency, book stall, dairy`
          },
          {
            qText: `Whom would your father approach when he has to get his car repaired?`,
            options: `mechanic, cobbler, plumber`
          },
          {
            qText: `Whom would your father approach if there is a leaking pipe?`,
            options: `plumber, mechanic, cobbler, carpenter`
          }
        ]
      }
    },
    {
      label: 'Identify Goods and Services',
      id: '4-identify-goods-services',
      type: 'group',
      data: {
        title: 'Drag and drop: Goods vs Services.',
        types: [
          {
            name: 'Goods',
            text: `ice cream, toys, cake, selling used items`
          },
          {
            name: 'Services',
            text: `police officer, teacher, hair cut, airplane trip, gardening`
          }
        ]
      }
    },
    {
      label: 'Identify Producer and Consumer',
      id: '4-identify-producer-consumer',
      type: 'group',
      data: {
        title: 'Drag and drop: Producer vs Consumer.',
        types: [
          {
            name: 'Producer',
            text: `making dress, teaching, painting, fixing roof, selling candy, delivering pizza`
          },
          {
            name: 'Consumer',
            text: `going to movies, buying shoes, ordering pizza, watching TV `
          }
        ]
      }
    },
    {
      label: 'Map - Continents',
      type: 'dragAndDrop',
      id: '5-map-continents',
      data: {
        img: 'worldContinents.jpg',
        title: `Drag and drop the continents at appropriate places.`,
        width: 352,
        height: 260,
        wordWidth: 75,
        words: [
          { word: 'N America', x: 40, y: 80 },
          { word: 'S America', x: 75, y: 176 },
          { word: 'Europe', x: 160, y: 70 },
          { word: 'Africa', x: 140, y: 150 },
          { word: 'Asia', x: 210, y: 100 },
          { word: 'Australia', x: 256, y: 200 }
        ]
      }
    },
    {
      label: 'Map - Oceans',
      type: 'dragAndDrop',
      id: '5-map-oceans',
      data: {
        img: 'worldContinents.jpg',
        title: `Drag and drop the Oceans at appropriate places.`,
        width: 352,
        height: 260,
        wordWidth: 70,
        words: [
          { word: 'Indian', x: 210, y: 160 },
          { word: 'Pacific', x: 15, y: 176 },
          { word: 'Atlantic', x: 120, y: 180 },
          { word: 'Arctic', x: 270, y: 10 },
          { word: 'Southern', x: 150, y: 230 }
        ]
      }
    },
    {
      label: 'Water bodies - MCQ',
      type: 'mcq',
      id: '5-water-bodies-mcq',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText: `What is the biggest water source?`,
            options: `Ocean, Sea, River, Lake`
          },
          {
            qText: `What is the biggest ocean?`,
            options: `Pacific, Atlantic, Indian, Artic`
          },
          {
            qText: `What is the usual starting point of rivers?`,
            options: `Mountains, Lake, Sea, Water Falls`
          },
          {
            qText: `Which source of water, human beings majorly depend upon?`,
            options: `River, Ocean, Sea, Lake`
          },
          {
            qText: `What is the major threat to water bodies?`,
            options: `Water pollution, Evaporation, Animals that drinks water, Fishes`
          }
        ]
      }
    },
    {
      label: 'Our Government - Reading',
      id: '5-our-government-passage',
      type: 'passage',
      data: {
        title: `Our Government`,
        text: `We need different facilities like roads, water, electricity, transport, schools and hostipals. A lot of people have to work together to provide these facilities. And we have lot of rules to follow for the facilities to work properly. Government makes common rules into laws. It is the responsibility of the government to make laws and ensure the laws are followed by people. The service what the government provides is known as governance.
India follows a democratic form of governance. It means, the people of the country cast their vote and select their representatives. There are different levels of governance. India is the largest democratic country in the world.
At country level, we select our Member of Parliament (MP), who goes to Parliament present in New Delhi to represent us. The selected MPs again vote among themselves and elect the Prime Minister. And the elected Prime Minister will pick other ministers.
Though the President is considered as the head of the government, Prime Minister is the most important person in running the government.
At state level, the people vote for their Member of Legislative Assembly (MLA), who goes to the Assembly present in their state capital to represent them. Just like how MPs select the Prime Minister of the country, MLAs select the Cheif Minister of the state.
We also have Local Body election to select our representative at locality level. Children are not allowed to vote. Only people who are above 18 years are allowed to vote. `
      }
    },
    {
      label: 'Our Government - MCQ',
      id: '5-our-government-mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText: `Which is the largest democracy in the world?`,
            options: `India, China, Russia, USA`
          },
          {
            qText: `Who is the head of the government?`,
            options: `President, Prime Minister, Chief Minister , Governor`
          },
          {
            qText: `The Prime Minster is elected by __________.`,
            options: `Members of Parliament, President, People of the country`
          },
          {
            qText: `We are a democratic country because ________.`,
            options: `we select our representative, we select our Governor, we select our President`
          },
          {
            qText: `Who can vote in election?`,
            options: `above 18 years old, everyone, who have passport`
          }
        ]
      }
    },
    {
      label: 'Responsibility of Government',
      id: '5-our-government-responsibiity',
      type: 'group',
      data: {
        title:
          'Classify whether the government is responsible or not responsible for the below.',
        types: [
          {
            name: 'Responsible',
            text: `school, hospital, roads, electricity`
          },
          {
            name: 'Not responsible',
            text: `breakfast, homework, garden, picnic`
          }
        ]
      }
    },
    {
      label: 'Types of Forests in India - Reading',
      id: '5-forest-types',
      type: 'passage',
      data: {
        title: `Types of Forests in India`,
        text: `Plants and trees that grows naturally in a region of land is known as vegetation. Forests are large area of land, covered by naturally grown plants and trees. 
Vegetation in India is not uniform. Climate, soil and rainfall influence the growth of plants. 
Indian forests are broadly classified into five types. They are 
1. Evergreen Forests
2. Monsoon Forests
3. Mangrove Forests 
4. Thorn Forests
5. Himalayan Forests
# Evergreen Forests
These forests are found in the areas of the Western Ghats, the eastern parts of Himalayas and the Andaman and Nicobar Islands. These forests get lots of rain. Bamboo, Rosewood and Sandalwood are common trees here.
# Monsoon Forests
Peninsular India and the northern parts of India are covered by monsoon forests. These forests get moderate rains. The trees shed their leaves during summer because of less rainfall. 
# Mangrove Forests
These are seen in the Indian coastal line, in the Ganga delta and Brahmaputra region, in some backwater areas and salt marshes.  The roots of the trees of most forests are found usually under the ground. But salt water trees like Avicennia, have aerial roots which are above the water in  order to survive in the salt water. These prevent soil erosion  and prevent fertile soil from being washed away into the ocean. 
# Thorn Forests 
They are found in the areas which receive less than 50 cm rainfall. Parts of the Deccan Plateau and Rajasthan have thorny trees like Acacia, Babul and Palmyra.
# Himalayan Forests
You can find trees like  Pine, Cedar, Oak,  Walnut and Apple. We can also see some on these trees in Nilgiris and Kodi Hills.`
      }
    },
    {
      type: 'match',
      id: '5-forest-trees',
      label: 'Forest and Trees',
      data: {
        title: 'Match forests with their common tree.',
        text: `Mangrove, Avicennia
Monsoon, Teak
Himalayan, Pine
Thorn, Acacia,
Evergreen, Bamboo`
      }
    },
    {
      label: 'Forests - MCQ',
      type: 'mcq',
      id: '5-forest-mcq',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText: `Which forest shed leaves during summer?`,
            options: `Monsoon, Mangrove, Thorn, Himalayan`
          },
          {
            qText: `Which forest gets maximum rain?`,
            options: `Evergreen, Monsoon, Mangrove, Himalayan`
          },
          {
            qText: `Which forest gets minimum rain?`,
            options: `Thorn, Monsoon, Mangrove, Himalayan`
          },
          {
            qText: `Andaman and Nicobar Islands is mainly made up of ______.`,
            options: `Evergreen, Monsoon, Mangrove, Himalayan`
          },
          {
            qText: `Which forest is present in coastal regions (near sea)?`,
            options: `Mangrove, Thorn, Monsoon, Himalayan`
          },
          {
            qText: `Trees of which forest have aerial roots?`,
            options: `Mangrove, Thorn, Monsoon, Himalayan`
          }
        ]
      }
    },
    {
      label: 'Wealth under the Ground - Reading',
      type: 'passage',
      id: '5-minerals-passage',
      data: {
        title: `Wealth under the Ground`,
        text: `Lot of things we use are extracted from ground and they are generally known as minerals. The activity of extracting minerals from earth is known as mining. 
Minerals are of two kinds, namely metallic and non-metallic. Iron, copper and gold are the important metallic minerals. Petroleum and coal are the important non-metallic minerals.
India is rich in mineral wealth. Iron ore are present in large quantity and India is a major exporter of Iron. It is used in industries, and making machine parts.
Aluminium is light-weight in nature, and it is extracted from Bauxite ore. Aluminium is used in making aircraft, vessels, etc. 
Copper was the first  metal used by human beings. It is widely used in electrical equipments .
Coal is primarily used as fuel and also used in generating electricity.
Petroleum is a natural resource. The by-products of petroleum are petrol, diesel and kerosene. They are mainly used as fuel and generating energy. In India petroleum is found under sea near Mumbai. But we majorly import petroleum from other countries.
Indians love gold ornaments and objects made of gold. India majorly imports gold.
# Conserving our minerals
Our minerals are being consumed so rapidly that there is a danger of their running out. We must save them and use them wisely. 
Alternate sources of energy and fuel are being considered.  Chief among them are solar and wind energy. This aims at conserving the available mineral resources from being rapidly depleted. `
      }
    },
    {
      label: 'Minerals - MCQ',
      type: 'mcq',
      id: '5-minerals-mcq',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText: `Which metal is used in constucting bridges?`,
            options: `Iron, Copper, Gold, Aluminium`
          },
          {
            qText: `Which mineral is found under sea, near Mumbai?`,
            options: `Petroleum, Goal, Coal, Iron`
          },
          {
            qText: `Which of the following is a natural resourse?`,
            options: `Petroleum, Disel, Petrol, Kerosene`
          },
          {
            qText: `Which metal was first discovered by human beings?`,
            options: `Copper, Stone, Iron, Aluminium`
          },
          {
            qText: `Aircrafts are made using ________.`,
            options: `Aluminium, Steel, Iron, Plastic`
          },
          {
            qText: `Which mineral is used in generating electricity? `,
            options: `Coal, Petroleum, Iron, Wood`
          }
        ]
      }
    },
    {
      label: 'Minerals vs Non-minerals',
      type: 'group',
      id: '5-minerals-or-not',
      data: {
        label: 'Minerals vs Non-minerals',
        types: [
          {
            name: 'Minerals',
            text: `petroleum, gold, copper, coal`
          },
          {
            name: 'Non-minerals',
            text: `cotton, wool, leather, carrot`
          }
        ]
      }
    },
    {
      label: 'The Story of a Seed - Reading',
      id: '5-story-of-seed-passage',
      type: 'passage',
      data: {
        title: `The Story of a Seed`,
        text: `I am a small bajra seed. I want to tell you my story. It is not my story alone, it is also to story of my farmer and his family. I refer my farmer as my master.
I was born in a small village in Gujarat. Each year, my master kept aside some seeds from a good crop. That way our bajra family went on from one generation to another. Good seeds were stored in dried gourd coated with mud. Later, my master made a strong wooden box to store us. He put in neem leaves to protect us from insects. This was how I ended up in this wooden box.
Over the years, many changes took place in the village. Some places could get water from the canal. They said the canal brought water from far away – where a dam had been built on a big river. Then electricity came. Switch on the button and there was light! People found that only one or two crops, like wheat and cotton, got better prices in the market. So most farmers began to grow only these. So my master never used me on field.
My master got old and his son took over the farming activity. He used an electric motor to pump water from ground. He also bought a tractor to plough the field. The tractor could do in a day, what the bullocks would take many days to do. Master's son made good money. 
After twenty years, again there were many changes. Without cows and buffaloes, there was no cow dung, to be used in the fields as fertilizer. So the son bought expensive fertilizer. The new seeds were easily affected by harmful insects. Pesticides had to be sprayed on the crops to keep away the insects. To meet all these expenses, loans had to be taken from the bank.
Due to pumping, the ground water also depleted. Whatever little profit was made, was used to repay the loan.
And today is my last day. My master's family is selling the old things which they consider as useless. They are going to dispose me of my home. The seed box is going to be used as a toolbox for keeping mechanical tools, screws, nuts and bolts.`
      }
    },
    {
      label: 'The Story of a Seed - MCQ',
      type: 'mcq',
      id: '5-story-of-seed-mcq',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText: `The seed was not planted because _________.`,
            options: `farmer preferred other crops like wheat and cotton, the seed was bad, farmer didn't has time`
          },
          {
            qText: `Dam is build across ________`,
            options: `river, canel, sea, lake`
          },
          {
            qText: `The seed was protected from insects by _________`,
            options: `neem leaves, wooden box, mud, dried gourd`
          },
          {
            qText: `The ground water was depleted due to _______`,
            options: `pumping of water, lack of rain, crops that needed lot of water`
          },
          {
            qText: `The story of the seed is a _______`,
            options: `sad story, happy story, adventurous story`
          }
        ]
      }
    },
    {
      label: 'Food and its Life-time - Reading',
      type: 'passage',
      id: '5-food-passage',
      data: {
        title: `Food and its Life-time`,
        text: `My mother asked me to buy a pack of bread from nearby store. I went to the store, bought the bread and gave the money. Before leaving the store I got alert and thought that, I need to check something. I checked the expiry date printed on the packet. And the date was two days before today. I informed the store owner and he asked sorry, and gave me a new packet of bread.
I know that all packed food items come printed with manufactured and expiry date. Food items will get spoiled after some time. Even the food prepared by mother also get spoiled after some time.
If any bad smell come from food items, then we should not eat it. If the color of food item changes or any fungal growth, then we should not eat it.             
We follow different methods to keep food items safe for some time. Mother keeps all green vegetables and tomato in fridge, so that they are good for some time. But she keeps onion and potato in open space as open air helps them to be good for some time.          
Mother makes pickle from mango and lemon which we can have with food for a couple of months. She adds lot of salt and oil which prevents spoiling. If I put my hands into it, or if I add some water to it, then it will spoil fast.      
Industries uses preservatives to keep food items edible for a long time. Mango is a seasonal fruit. But we can get bottled mango juice around the year. Eating preserved food is generally not considered healthy.`
      }
    },
    {
      label: 'Food - MCQ',
      type: 'mcq',
      id: '5-food-mcq',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText: `Food prepared in industries does not get spoiled because of _____________.`,
            options: `preservatives, fridge, clean environment`
          },
          {
            qText: `True or False: Usually mother keeps onion and potato in fridge.`,
            options: `False, True`
          },
          {
            qText: `True or False: Adding salt keeps food item safe for long time.`,
            options: `True, False`
          },
          {
            qText: `True or False: Manufactured date always come after expiry date.`,
            options: `False, True`
          },
          {
            qText: `True or False: Industry made foods are always healthy.`,
            options: `False, True`
          }
        ]
      }
    }
  ]
};
