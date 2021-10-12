export default {
  label: 'GK Cities',
  id: 'gk-cities',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Notes: Cities and Special Names',
      data: {
        title: 'Cities and Special Names',
        text: [
          {
            type: 'hilight',
            text: `Jaipur - Pink city
Varanasi - City of light
Ahmedabad - Manchester Of India
Calicut - City of spices
Nagpur - Orange city`
          },
          {
            type: 'hilight',
            text: `Mysore - Sandalwood city
Udaipur - City of Lakes
Bengaluru - Garden City of India 
Jamshedpur - Steel City of India`
          }
         ]
      }
    },
       {
        id: 'match',
        type: 'match',
        label: 'Match the following',
        data: {
          title: 'match city with its sorbiquet',
          text: `Jaipur, Pink city
                 Varanasi, City of light
                 Udaipur, City of Lakes
                 Calicut, City of spices
                 Nagpur, Orange city`
               }
             },
          {
           label: "Multiple Choice Questions",
           id: "mcq",
           type: "mcq",
           data: {
           title: "Multiple Choice Questions",
           questions: [
          {
            qText: "Which city is called the Sandalwood city of India?",
            options: "Mysore, Delhi, Bengaluru",
          },
          {
            qText: "Which city is called the City of Lakes in India?",
            options: "Udaipur, Jaipur, Madurai",
          },
          {
            qText: "Which city is called the Garden City of India?",
            options: "Bengaluru, Mumbai, Hyderabad",
          },
          {
            qText: "Which city is called the Steel City of India?",
            options: "Jamshedpur, Jaipur, Agra",
          },
          {
            qText: "Which city is called the Manchester Of India?",
            options: "Ahmedabad, Madurai, Jaipur",
          },
        ],
      },
    },
    {
      label: "Fill in the blanks",
      type: "matchByDragDrop",
      id: "drag-1",
      data: {
        isPractice: false,
        title: "Drag and drop the given words at the right blanks.",
        styles: {
          fontSize: "1.3rem",
          dashWidth: 80,
        },
        text: `*Ahmedabad* city is Manchester of India.
        *Udaipur* city is the City of Lakes in India.
        *Varanasi* city is the City of light in India.
        *Nagpur* city is Orange city of India.
        *Calicut* city is the City of spices in India.`,
      },
    },
    {
      label: "True or False",
      id: "TF",
      type: "classifySentence",
      data: {
        title: "Classify the below sentences as true and false",
        types: [
          {
            name: "True",
            text: `Ahmedabad is known as Manchester of India.
            Calicut is known as the City of spices in India.
            Udaipur is known as City of Lakes.`,
          },
          {
            name: "False",
            text: `Nagpur is known as Apple city.
            Mysore is known as Diamond city.`,
          },
        ],
      },
    },
  ],
};
