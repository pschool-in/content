export default {
  label: 'Festivals',
  id: 'festivals',
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Festivals',
        text: `We celebrate many festivals in the family. In the same way, different kinds of festivals are celebrated in different regions of the country.
1. Holi is the festival that marks the end of winter.
2. In Punjab, Baisakhi is celebrated at harvest time.
4. In Tamil Nadu, Pongal is celebrated during the harvest season.
5. In Kerala, Onam is celebrated during the harvest season.
6. Dasara, Diwali are celebrated when the farm produce is ready.
7. Makar Sankranti is a festival celebrated in winter.
8. Buddha Poornima, Ramzan, Eid, Christmas, Easter are important religious festivals.
# National Festivals
Independence Day and Republic Day are our national festivals. All citizens celebrate them. India gained independence from the British on 15th August, 1947. Hence that day is celebrated as Independence Day. The Indian Constitution came into effect from the 26th of January, 1950. So, this day is known as Republic Day.
`
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Independence day is celebrated on *15th (26th, 2nd)*, *August (October)*.
Republic day is celebrated on *26th (2nd, 15th)*, *January(May, August)*.
*Pongal (Dasara)* is a regional festival.
*Diwali (Ugadi, Onam)* is a religious festival.
*Independence (Women's)* day is a national festival.`
      }
    },
    {
      label: 'What festival brings?',
      type: 'group',
      id: 'classify',
      data: {
        title: 'What festival brings?',
        types: [
          {
            name: 'Brings',
            text: 'joy, celebrations, blessings, happiness, greetings'
          },
          {
            name: "Doesn't Bring",
            text: ' worry, jealousy, hatred'
          }
        ]
      }
    },
    {
      label: 'National and Religious Festivals',
      type: 'group',
      id: 'classify-2',
      data: {
        title: 'National vs Religious Festivals',
        types: [
          {
            name: 'National',
            text:
              "Independence Day, Republic Day, Gandhi Jayanthi, Children's Day, Teacher's Day"
          },
          {
            name: 'Religious',
            text: 'Ramzan, Bakrid, Christmas, Easter, Diwali, Shivratri, Holi'
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        text: `Many of our *festivals* are linked with agriculture and environment.
Independence Day and Republic Day are our *national* festivals.
Festivals increase the feeling of *togetherness* among people.
During festivals, we meet each other, talk to each other and feel *connected*.`
      }
    },
    {
      id: 'match',
      label: 'Match Festivals and Places',
      type: 'match',
      data: {
        text: `Durga Puja, West Bengal
Dasara, Mysore
Pongal, Tamil Nadu
Baisakhi, Punjab
Ugadi, Andra Pradesh
Kerala, Onam`,
        title: 'Match Festivals and Places'
      }
    },
    {
      label: 'National Festivals - Month',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        text: `Independence Day → *August* 
Republic Day → *January* 
Gandhi Jayanthi → *October* 
Children's Day → *November* 
Teacher's Day → *September*`
      }
    }
  ]
};
