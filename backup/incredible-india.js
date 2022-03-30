export default {
  id: 'india-5',
  label: 'Incredible India',
  lockAfter: 4,
  list: [
    {
      id: 'notes',
      label: 'Incredible India',
      type: 'passage',
      data: {
        text: `# Odisha 
  Odisha has a hot and humid climate. River Mahanadi drains this region. Other main rivers that flow in the region are Baitarani and Brahmini. The deltas formed by these rivers are very fertile. Odisha is gifted with nature's bounty. Its coastline stretches up to 482 km. The capital of Odisha is Bhubaneswar. The largest salt lake of India, Chilika Lake is in this state. The Konark Dance Festival is a famous event that is held every year from 1-5 December. Puri Beach Festival and Taratarini Mela are other important festivals.
  # Gujarat
  The capital of Gujarat is Gandhinagar. Gujarat is know for textile industries. Gujarat is one of the largest producers of cotton bales. The popular festivals celebrated here are Navratri, Diwali, Holi and Uttarayan. The popular dance forms are Garba and Dandiya.
  # Rajasthan 
  The capital of Rajasthan is Jaipur which is also known as The Pink City. Pichola Lake and Pushkar Lake are two famous lakes in this state. Rajasthan is famous for handicrafts. The famous festivals celebrated here are Teej, Gangur, Kite Festival, Elephant Festival and Jaipur Literature Festival. Ghoomar is the famous dance form in Rajasthan.
  # Haryana and Punjab 
  Chandigarh is the capital of Haryana and Punjab. Woolen textiles, machine industry and dairy are flourishing in both states. The famous Festivals celebrated here are Gurupurab, Baisakhi, Lohri, Diwali and Holi. Giddha is a popular dance form of Punjab performed by women. Bhangra is the male counterpart of Giddha.
  # Kerala 
  The capital of Kerala is Thiruvananthapuram. The Periyar river flows through Kerala. The spice, sandalwood and ivory industries are prevalent here. The popular festivals celebrated here are Onam, Vishu, Christmas and Eid. The popular dance forms are Kathakali, Mohiniyattam, Kaliyattam and Theyyam. 
  # The Seven Sisters
  The seven sisters is a name given to the states of Arunachal Pradesh, Assam, Nagaland, Manipur, Mizoram, Tripura and Meghalaya. This region is guarded by mountains. The only passage is a narrow stretch of land, which is about 30km wide, called Siliguri Corridor.`,
        title: 'Incredible India'
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Seven sisters, Assam
  Gujarat, Sabarmati
  Kerala, spices
  Punjab, Bhangra
  Pink City, Jaipur`,
        title: 'Match with appropriate choice'
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper place.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `The capital of Gujarat is *Gandhinagar*.
  Jaipur is known as *Pink City*.
  Giddha is famous dance form of *Punjab*.
  Capital of Odisha is *Bhubaneswar*.
  Kathakali is the dance form of *Kerala*.`
      }
    },
    {
      id: 'match2',
      label: 'Rivers and Lakes',
      type: 'match',
      data: {
        text: `Periyar, Kerala
  Mahanadi, Odisha
  Pushkar, Rajasthan
  Chilika, salt lake`,
        title: 'Match with appropriate choice'
      }
    },
    {
      label: 'Name the following',
      type: 'matchByDragDrop',
      id: 'drag-drop-3',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper place.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `Largest salt lake - *Chilika* Lake
  Capital of Punjab and Haryana - *Chandigarh*
  Coastline stretching upto 482 km - *Odisha*
  Capital of Gujrat - *Gandhinagar*
  Traditional dance form of Kerala - *Mohiniyattam*`
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
            qText: 'Which city is known as Pink City?',
            options: 'Jaipur, Haryana, Punjab'
          },
          {
            qText: 'Which of the following are part of the Seven Sisters?',
            options: 'Assam, Nagaland, Manipur, *all'
          },
          {
            qText: 'Where is Siliguri Corridor situated?',
            options: 'Seven Sisters, Odisha, Gujarat'
          },
          {
            qText:
              'Which of the following is the female counterpart of Bhangra?',
            options: 'Giddha, Goomar, Dandiya'
          }
        ]
      }
    }
  ]
};
