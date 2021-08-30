export default {
    id: 'Air-2',
    label: 'Air-2',
    pdf: '',
    lockAfter: 4,
    list: [
        {
            label: 'Our Clothes',
            type: 'passage',
            id: '100',
            data: {
              title: 'Our Clothes',
              text: [
                  `# Why do we need clothes?`,

              `1. To cover our body.`,              
              `2. To protect ourselves from dust and dirt.`,              
              `3. To feel warm during winters.`,              
              `4. To avoid tanning from the sun.`,              
              `5. To look presentable.`,
              
              `...what else can you think of?`,              
              `# How do we know what to wear?`,              
              `There are three main seasons, namely, The Summer, The Winter and The Rainy Season. These seasons last for almost 4 months and after the completion of one cycle, they continue to follow each other. That’s why it’s called “cycle of seasons”. So, we can say that what we wear depends on the cycle of seasons.              
              In addition to this, we wear clothes of different designs, colors and tradition. So we can say that clothing style also depends on occupation, taste and occasion.`
                
              ]
            }
          },
          {
            label: 'Who wears what?',
            id: '200',
            type: 'classifySentence',
            data: {
              title: 'Classify the below sentences as true and false',
              types: [
                {
                  name: 'Men',
                  text: `Dhoti
                  pyjama
                  lungi
                  trousers
                  mundase
                  pheta
                  pagdi`
                },
                {
                  name: 'Women',
                  text: `Saris
                  salwar-suit
                  frocks
                  skirts
                  gowns
                  tops`
                },
                {
                    name: 'Common',
                    text: ` Shirts
                    pants
                    jeans
                    t-shirts
                    caps
                    hats`
                  },
              ]
            }
          },
          {
            label: 'Which clothes are suitable for which season?',
            id: '300',
            type: 'group',
            data: {
              title: 'Classify the below animals based on the presence of fur.',
              types: [
                {
                  name: 'Summer',
                  text:'Skirts, shorts, cotton clothes, kurtas'
                },
                {
                  name: 'Winter',
                  text: 'Coats, sweaters, mufflers, gloves, socks'
                }
              ]
            }
          },
          {
            label: 'Fun fact!',
            type: 'matchByDragDrop',
            id: '400',
            data: {
              isPractice: false,
              title: 'Guess what would they wear in the following surroundings',
              styles: {
                fontSize: '1.3rem',
                dashWidth: 80
              },
              text: `Soldiers wear *Khaki* clothes in deserts.
              Soldiers wear *Green* clothes in jungles.              
              Soldiers wear *White* clothes in The Himalayas`
            },
        },
        {
            label: 'Fun fact!',
            type: 'matchByDragDrop',
            id: '500',
            data: {
              isPractice: false,
              title: 'Guess what would they wear in the following surroundings',
              styles: {
                fontSize: '1.3rem',
                dashWidth: 80
              },
              text: `Soldiers wear *Khaki* clothes in deserts.
              Soldiers wear *Green* clothes in jungles.              
              Soldiers wear *White* clothes in The Himalayas`
            },
        },
        {
            label: 'Who am I',
            type: 'matchByDragDrop',
            id: '500',
            data: {
              isPractice: false,
              title: 'Guess who wears what!',
              styles: {
                fontSize: '1.3rem',
                dashWidth: 80
              },
              text: `I wear a white coat and examine patients. - *Doctor*
              I wear blue clothes and put out fires. - *Firefighter*
              You always see me in khaki clothes.
              I go wherever there is a fight. - *police*
              I work in a hospital and take care of patients. - *nurse*
              I am always ready to protect the country.- *soldier*`
            },
        },
        {
            id: '600',
            label: 'Season vs clothes',
            type: 'match',
            data: {
              text: `Summer,cotton clothes
              Winter, woolen clothes
              Rain, raincoat
              Polyester, artificial fiber
              Silk, silkworm`,
              title: 'Match the following'
            }
          },
          {
            label: 'What do we wear?',
            type: 'matchByDragDrop',
            id: '700',
            data: {
              isPractice: false,
              title: 'Guess when you wears what!',
              styles: {
                fontSize: '1.3rem',
                dashWidth: 80
              },
              text: `What do we wear to protect our feet - *shoes*
              What do we wear to keep ourselves dry in rain - *raincoat*
              What do we wear when we go to bed - *pyjamas*
              What do we wear to protect ourselves from cold - *sweater*
              What do we wear to provide shade from sunlight - *hat*
              What do we wear to go to school - *uniform*
              What do we wear to protect our hands from cold - *gloves*`
            },
        },
        {
            label: 'How clothes help us to protect ourselves?',
            type: 'matchByDragDrop',
            id: '800',
            data: {
              isPractice: false,
              title: 'Drag and drop the words at proper places.',
              styles: {
                fontSize: '1.3rem',
                dashWidth: 80
              },
              text: `Clothes *protect* us from heat, cold and rain.
              We wear *cotton* clothes in summer.
              Woollen clothes keeps us *warm*.
              We use *raincoat* or umbrella when it rains.`
            },
        },
        {
            label: 'True or False',
            id: '900',
            type: 'classifySentence',
            data: {
              title: 'Classify the below sentences as true and false',
              types: [
                {
                  name: 'True',
                  text: `We get wool from sheep.
                  We get silk from silkworm.
                  We wear woolen clothes in summer.
                  Lawyer wears black coat.`
                },
                {
                  name: 'False',
                  text: `We wear party wear to school.
                  Doctors wear yellow coats.`
                }
              ]
            }
          },
          {
            label: 'How & what about clothes- Reading',
            type: 'passage',
            id: '1000',
            data: {
              title: 'How & what about clothes',
              text: [`# How clothes are made?`,

              `In the past, a spinning wheel was used to make yarn from cotton; and then, these yarns were used to make fabrics and clothes. In the modern times, yarn is made through machinery; although the procedure is same.`,
              
              `# What to do with old clothes?`,
              
              `1. If they’re in a good condition, donate them to needy people.`,
              `2. They can be reused for making new clothes.`,
              `3. Torn clothes can be used in dusting, moping, doormats etc.`,
              `4. Some clothes can also be reused into paper making. Eg- paper plates, false flowers, models etc.`,
              
              `# Fun fact!`,
              
              `Mahatma Gandhi, during the struggle for independence, promoted the use of ‘Swasdeshi’ goods by making khadi yarn on his charakha. This led to formation of ‘Charakha Mandals’ throughout the nation.
              In case of unavailability of detergent, one can also use soap nuts, washing soda, ritha, hinganbet and limestone. All these are natural substances.`
                
              ]
            }
          },
          {
            label: 'Some more facts about clothes',
            type: 'matchByDragDrop',
            id: '1100',
            data: {
              isPractice: false,
              title: 'Drag and drop the words at proper places.',
              styles: {
                fontSize: '1.3rem',
                dashWidth: 80
              },
              text: `Gandhiji always wore clothes made of *khadi* yarn.
              It is unsafe to wear *nylon* clothes while cooking or burning crackers.
              People prefer wearing *cotton* clothes in summer.
              *Raincoats* protect us from rain.
              *Scarfs* protect our skin from the sun and *Mufflers* protect our ears and neck from cold.`
            },
        },
        {
            label: 'What are the sources of these clothes?',
            id: '1200',
            type: 'classifySentence',
            data: {
              title: 'Classify the below sentences as true and false',
              types: [
                {
                  name: 'Animal',
                  text: 'wool, silk',
                },
                {
                  name: 'Plant',
                  text: 'cotton, jute'
                },
                {
                    name: 'Synthetic',
                    text: 'nylon, rayon',
                  },
              ]
            }
          },
          {
            label: 'True or False',
            id: '1300',
            type: 'classifySentence',
            data: {
              title: 'Classify the below sentences as true and false',
              types: [
                {
                  name: 'True',
                  text: `Detergent is used to wash clothes.
                  Clothing styles vary according to gender, situation, occasion, season, ethnicity and one’s taste.                  
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
            id: '1400',
            label: 'Match the following',
            type: 'match',
            data: {
              text: `Sheep, wool
              Sweater, winter             
              Cotton, cotton yarn              
              Jute, fibres              
              Cap, summer              
              Raincoat, winter`,
              title: 'Match the following'
            }
          },
          {
            label: 'Some more facts about clothes -2',
            type: 'matchByDragDrop',
            id: '1100',
            data: {
              isPractice: false,
              title: 'Drag and drop the words at proper places.',
              styles: {
                fontSize: '1.3rem',
                dashWidth: 80
              },
              text: `Cloth or fabric is made by intertwining *threads* together. 
              Intertwining threads together is called *weaving*.
              The wad of *cotton* is twisted into a long wick.
              Sweaters, caps, etc. are woven with the help of *knitting needles* at home.
              *Handlooms* and powerlooms are used to weave cloth on a large scale.
              We must always have *clean* clothes in order to remain healthy and look neat and tidy.`
            },
        },
        {
            label: 'Natural Vs Artificial',
            id: '1200',
            type: 'group',
            data: {
              title: 'Arrange the materials based on their source of origin',
              types: [
                {
                  name: 'Natural',
                  text:'cotton, wool, silk, jute.'
                },
                {
                  name: 'Artificial',
                  text: 'nylon, rayon'
                }
              ]
            }
          },
          {
            id: '1300',
            label: 'Match the following',
            type: 'match',
            data: {
              text: `Ikkat saree, Andhra Pradesh
              Mekhela Chador, Assam
              Dhoti-kurta, Bihar
              Kachhora,  Chhattisgarh 
              Nav-vari, Goa
              Kediyu-chorno, Gujrat
              Daaman, Haryana
              Tussar silk saris ,  Jharkhand 
              Mundum Neriyathum, Kerala
              Puan, Mizoram`,
              title: 'Match the following'
            }
          },
          {
            label: 'Clothes - Our Necessity',
            type: 'passage',
            id: '1400',
            data: {
              title: 'Clothes - Our Necessity',
              text: [`# Want vs Need`,
              `We ‘Need’ clothes to cover and protect our body from dust and infection. But desire to have some clothes just because they look attractive is called ‘Want’. Want is something we can live without because it’s not a necessity. On the other hand, fulfilment of the need is important for our living.`,              
              `# Fun fact!`,              
              `Sarees from some states of India have special significance and great popularity among women. Those sarees are Lucknow chikan, Kashmir silk, Banarasi silk, Kadiyal, Pitambari, Pochampalli, Narayanpet, Kanjivaram, Patola and Mysore silk.`
                
              ]
            }
          },
          {
            label: 'Guess the speciality of these cities',
            type: 'matchByDragDrop',
            id: '1100',
            data: {
              isPractice: false,
              title: 'Drag and drop the words at proper places.',
              styles: {
                fontSize: '1.3rem',
                dashWidth: 80
              },
              text: `Paithan and Yeolla are famous for *Paithani*
              Aurangabad is famous for *Himroo shawls*              
              Solapur is known for *Bedsheets*              
              Ichalkaranji is well known for *Handloom*`
            },
        },
        {
            label: 'Additional questions in cloth',
            type: 'matchByDragDrop',
            id: '1100',
            data: {
              isPractice: false,
              title: 'Drag and drop the words at proper places.',
              styles: {
                fontSize: '1.3rem',
                dashWidth: 80
              },
              text: `*Mumbai (Goa)* is famous worldwide for its textile mills.
              Wanting things you do not need is *desire (want)*, not necessity.
              Several regions in our country have a tradition of producing fabrics
              *characteristic (traditional)* of the place.
              It is cold. Put on your *coat (umbrella)*.
              It is snowy. Put on your *gloves (skirt)*.`
            },
        },
        {
            label: 'Additional questions in cloth - 2',
            type: 'matchByDragDrop',
            id: '1100',
            data: {
              isPractice: false,
              title: 'Drag and drop the words at proper places.',
              styles: {
                fontSize: '1.3rem',
                dashWidth: 80
              },
              text: `It is sunny. Put on your *sunglasses (boots)*.
              I take my *umbrella (skirt)* on a rainy day.
              I wear my *hat (boot)* on sunny day.
              It is cool. Put on a *jacket (bag)*.
              It is cold. Put on a *scarf (skirt)*.
              It is *cold (rainy)*. Take your sweater.
              It is *rainy (cold)*. Take your umbrella.s`
            },
        },



    ]
};
