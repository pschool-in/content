export default {
  label: 'GK India',
  id: 'gk-india',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Notes: States and Languages',
      data: {
        title: 'States and Languages',
        text: [
          {
            type: 'hilight',
            text: `Andhra Pradesh - Telugu
Assam - Assamese
Goa - Konkani
Gujarat - Gujarati
Jammu & Kashmir - Kashmiri
Karnataka - Kannada`
          },
          {
            type: 'hilight',
            text: `Kerala - Malayalam
Madhya Pradesh - Hindi
Maharashtra - Marathi
Manipur - Manipuri
Mizoram - Mizo
Tamil Nadu - Tamil`
          },
          {
            type: 'hilight',
            text: `Odisha - Odia
Punjab - Punjabi
Telangana - Telugu 
Uttar Pradesh - Hindi
West Bengal - Bengali`
        }
        ]
      }
    },
    {
        id: "match-1",
        label: "Match the following",
        type: "match",
        data: {
               text: `Andhra Pradesh, Telugu
               Assam, Assamese
               Goa, Konkani
               Gujarat, Gujarati
               Jammu & Kashmir, Kashmiri`,
               title: "Match the following with its correct one",
             }
           },
         {
          label: "Multiple Choice Questions",
          id: "mcq-1",
          type: "mcq",
          data: {
          title: "Multiple Choice Questions",
         questions: [
           {
             qText: "__________ is the official language of Madhya Pradesh.",
             options: "Hindi, Tamil, Malayalam",
           },
           {
             qText: "_________ is the official language of Maharashtra.",
             options: "Marathi, Odia, Kannada",
           },
           {
             qText: "_________ is the official language of Manipur.",
             options: "Manipuri, Urdu, Malayalam",
           },
           {
             qText: "_________ is the official language of Karnataka.",
             options: "Kannada, Tamil, English",
           },
           {
             qText: "___________ is the official language of Kerala.",
             options: "Malayalam, Odia, Kannada",
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
         text: `People in Mizoram speak *Mizo*.
         People in Tamil Nadu speak *Tamil*.
         People in Odisha speak *Odia*.
         People in Punjab speak *Punjabi*.
         People in Telangana speak *Telugu*.`,
       },
     },
     {
       label: "True or False",
       id: "TF -1",
       type: "classifySentence",
       data: {
         title: "Classify the below sentences as true and false",
         types: [
           {
             name: "True",
             text: `Hindi is the official language of Uttar Pradesh.
             Bengali is the official language of West Bengal.`,
           },
           {
             name: "False",
             text: `Hindi is the official language of Karnataka.
             Tamil is the official language of Kerala.`,
            },
        ],
      },
    },
  ],
};
