export default {
  label: 'GK Culture',
  id: 'gk-culture',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Notes: Temples and Religious Places',
      data: {
        title: 'Temples and Religious Places',
        text: [
          {
            type: 'hilight',
            text: `Badrinath Temple -  Uttarakhand
Kedarnath Temple -  Uttarakhand
Kashi Vishwanath Temple -  Varanasi, Uttar Pradesh
Golden Temple  -  Amritsar, Punjab       
Jagannath Temple -  Puri, Odisha
Nataraja Temple -  Chidambaram, Tamil Nadu
Meenakshi Temple -  Madurai, Tamil Nadu
Khajuraho Temple -  Chhatarpur, Madhya Pradesh`
          },
          {
            type: 'hilight',
            text: `Sree Padmanabhaswamy Temple - Thiruvananthapuram, Kerala
Amarnath Temple  -  Pahalgam, Jammu & Kashmir
Ranganathaswamy Temple -  Srirangam, Tamil Nadu
Jama Masjid  -  New Delhi
Somnath Temple  -  Gujarat
Ramanathaswamy Temple  - Rameswaram, Tamil Nadu
Mecca Masjid  -   Hyderabad, Telangana`
          }
        ]
      }
    },
    {
       id: "match-1",
       label: "Match the following",
       type: "match",
       data: {
              text: `Badrinath Temple, Uttarakhand
              Jama Masjid, New Delhi
              Kashi Vishwanath Temple, Varanasi 
              Golden Temple, Amritsar
              Jagannath Temple, Puri`,
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
            qText: "Ranganathaswamy Temple is dedicated to which deity?",
            options: "Lord Vishnu, Lord Shiva, Lord Brahma",
          },
          {
            qText: "Nataraja Temple is located at___________.",
            options: "Tamil Nadu, Gujarat, Kerala",
          },
          {
            qText: "____________ is famous temple in Madurai.",
            options: "Meenakshi Temple, Jagannath Temple, Vaishno Devi Temple",
          },
          {
            qText: "Khajuraho Temple is located at___________.",
            options: "Chhatarpur, Pahalgam, Thiruvananthapuram",
          },
          {
            qText: "Sree Padmanabhaswamy Temple is situated in ___________.",
            options: "Thiruvananthapuram, Chennai, Calicut",
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
        text: `Jama masjid is sitauted at *New Delhi*.
        Somnath Temple is situated in *Gujarat*.
        *Amarnath Temple* is located in Jammu & Kashmir.
        Ramanathaswamy Temple is situated in *Rameswaram*.
        *Mecca Masjid* is located in Telangana.`,
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
            text: `Ranganathaswamy Temple is located in Srirangam.
            Mecca Masjid is located in Hyderabad.
             Kashi Vishwanath Temple is dedicated to the deity Lord Shiva.`,
          },
          {
            name: "False",
            text: `Golden temple is located in the Andaman Islands.
            Somnath Temple is situated in Kerala.`,
          }
        ]
       }
      },
    {
      id: 'reading-2',
      type: 'passage',
      label: 'Notes: States and Festivals',
      data: {
        title: 'States and Festivals',
        text: [
          {
            type: 'hilight',
            text: `Andhra Pradesh - Ugadi
Gujarat  - Makar Sankranti
Karnataka -  Dasara
Kerala  -  Onam
Punjab  -  Lohri
Tamil Nadu  - Pongal
West Bengal - Durga Puja`
          }
        ]
      }
    },
    {
        id: "match-2",
        label: "Match the following",
        type: "match",
        data: {
        text: `Andhra Pradesh, Ugadi
               Gujarat, Makar Sankranti
               Karnataka, Dussehra
               Kerala, Onam
               Punjab, Lohri`,
              title: "Match the following with its correct one",
            }
          },
    {
      label: "Multiple Choice Questions",
      id: "mcq-2",
      type: "mcq",
      data: {
        title: "Multiple Choice Questions",
        questions: [
          {
            qText: "________ is the famous festival celebrated at Andhra Pradesh.",
            options: "Ugadi, Onam, Ambubachi",
          },
          {
            qText: "___________ is the famous festival celebrated at Gujarat.",
            options: "Makar Sankranti, Dussehra, Hornbill festival",
          },
          {
            qText: "Durga Puja is the famous festival celebrated at __________.",
            options: "West Bengal, Tamil Nadu, Kerala",
          },
          {
            qText: "Pongal is the famous festival celebrated at __________.",
            options: "Tamil Nadu, Arunachal Pradesh, Sikkim",
          },
          {
            qText: "_______ is the famous festival celebrated at Karnataka.",
            options: "Dussehra, Onam, Wangla",
          },
        ],
      },
    },
    {
      label: "Fill in the blanks",
      type: "matchByDragDrop",
      id: "drag-2",
      data: {
        isPractice: false,
        title: "Drag and drop the given words at the right blanks.",
        styles: {
          fontSize: "1.3rem",
          dashWidth: 80,
        },
        text: `The  famous festival of Kerala is *Onam*.
        The  famous festival of  Punjab  is *Lohri*.
        The  famous festival of Andhra Pradesh is *Ugadi*.
        The  famous festival of Karnataka is *Dussehra*.
        The  famous festival of Gujarat is *Makar Sankranti*.`,
      },
    },
    {
      label: "True or False",
      id: "TF-2",
      type: "classifySentence",
      data: {
        title: "Classify the below sentences as true and false",
        types: [
          {
            name: "True",
            text: `Pongal is the famous festival celebrated at Tamil Nadu.
            Lohri is the famous festival celebrated at Punjab.
            Makar Sankranti is the famous festival celebrated at Gujarat.`,
          },
          {
            name: "False",
            text: `Saga Dawa is famous festival celebrated at Kerala.
            Durga Puja is the famous festival celebrated at Tripura.`,
          }
        ]
       }
   },
    {
      id: 'reading-3',
      type: 'passage',
      label: 'Notes: States and Dances',
      data: {
        title: 'States and Dances',
        text: [
          {
            type: 'hilight',
            text: `Andhra Pradesh - Kuchipudi
Gujarat - Dandiya Raas
Kerala - Mohiniyattam
Manipur - Manipuri
Odisha - Odissi
Punjab - Bhangra
Tamil Nadu - Bharatnatyam`
           }
        ]
    }
},
   {
     id: "match-3",
     label: "Match the following",
     type: "match",
     data: {
            text: `Andhra Pradesh, Kuchipudi
              Gujarat, Dandiya Raas
              Kerala, Mohiniyattam
              Manipur, Manipuri
              Odisha, Odissi`,
              title: "Match the following with its correct one",
            }
          },
     {
      label: "Multiple Choice Questions",
      id: "mcq-3",
      type: "mcq",
      data: {
        title: "Multiple Choice Questions",
        questions: [
          {
            qText: "_________ is the famous state dance of Tamil Nadu.",
            options: "Bharatnatyam, kaligopal, Gaur Maria",
          },
          {
            qText: "__________ is the famous state dance of Punjab.",
            options: "Bhangra, Panwariya, Popir",
          },
          {
            qText: "__________ is the famous state dance of Odisha.",
            options: "Odissi, Chalo, Wancho",
          },
          {
            qText: "________ is the famous state dance of Manipur.",
            options: "Manipuri, Dandiya Raas, Jata-Jatin",
          },
          {
            qText: "________ is the famous state dance of Kerala. ",
            options: "Mohiniyattam, Kavadi, Hojagiri",
          },
        ],
      },
    },
    {
      label: "Fill in the blanks",
      type: "matchByDragDrop",
      id: "drag-3",
      data: {
        isPractice: false,
        title: "Drag and drop the given words at the right blanks.",
        styles: {
          fontSize: "1.3rem",
          dashWidth: 80,
        },
        text: `The famous state dance of *Manipur*is Manipuri.
        The famous state dance of *Kerala* is Mohiniyattam.
        The famous state dance of *Punjab * is Bhangra.
        The famous state dance of *Andhra Pradesh* is Kuchipudi.
        The famous state dance of *Odisha* is Odissi.`,
      },
    },
    {
      label: "True or False",
      id: "TF-3",
      type: "classifySentence",
      data: {
        title: "Classify the below sentences as true and false",
        types: [
          {
            name: "True",
            text: `Dandiya Raas is the famous state dance of Gujarat.
            Manipuri is the famous state dance of Manipur.
            Bharatnatyam is the famous dance of Tamil Nadu.`,
          },
          {
            name: "False",
            text: `Kumi is the famous dance of Punjab.
            Kuchipudi is the famous dance of Goa.`,
          },
        ],
      },
    },
  ],
};
