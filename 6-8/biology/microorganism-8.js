export default {
  id: 'microorganism-8',
  label: 'Microorganisms: Friend and Foe',
  lockAfter: 4,
  list: [
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fillup-drag-drop',
      data: {
        fontSize: '1rem',
        text: `Microorganisms can be seen with the help of a *microscope*.
Blue green algae fix *nitrogen* directly from the air and enhance the fertility of the soil.
Alcohol is produced with the help of *yeast*.
Cholera is caused by *bacteria*.
The process of conversion of sugar into alcohol is known as *fermentation*.`
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Yeast is used in the production of ___________.',
            options: `alcohol, sugar, hyaluronic acid`
          },
          {
            qText: 'Which of the following is an antibiotic?',
            options: `Streptomycin, Sodium bicarbonate, Alcohol`
          },
          {
            qText:
              'What of the following is a carrier of malaria-causing protozoan?',
            options: `female Anopheles mosquito, housefly, rat`
          },
          {
            qText:
              'The most common carrier of communicable diseases is ______.',
            options: `housefly, ant, spider`
          },
          {
            qText: 'The bread or idli dough rises because of ___________.',
            options: `growth of yeast cells, kneading, heat`
          },
          {
            qText:
              'The process of conversion of sugar into alcohol is called ___________.',
            options: `fermentation, infection, nitrogen fixation`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Bacterium, Measles
Rhizobium, fix nitrogen
Lactobacillus, set curd
Yeat, alcohol
Virus, AIDS
Protozoa, Malaria
Fungi, Wheat rust`,
        title: 'Match the following.'
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fillup-drag-drop-2',
      data: {
        fontSize: '1rem',
        text: `Microorganisms are too *small* and are not visible to the unaided eye.
Microorganisms are found in air, *water* and in the *bodies* of plants and animals.
Microorganisms include bacteria, *fungi*, protozoa and some algae. 
*Viruses*, though different from living organisms, are considered microbes.
Some microorganisms are useful for the commercial production of *medicines* and alcohol.
*Protozoans* cause serious diseases like dysentery and malaria.
Some of the microorganisms grow in our food and cause *food poisoning*.`
      }
    },
    {
      id: 'match-2',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Alexander Fleming, Penicillin
Loius Pasteur, Pasteurization
Edward Jenner, Smallpox
Robert Koch, Anthrax bacterium`,
        title: 'Match the following.'
      }
    },
    {
      label: 'Causative Organism',
      id: 'organism',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'Bacteria',
            text: `Cholera
Typhoid`
          },
          {
            name: 'Virus',
            text: `Tuberculosis
Measles
Chicken Pox
Polio
Hepatitis A`
          },
          {
            name: 'Protozoa',
            text: `Malaria`
          }
        ]
      }
    },
    {
      label: 'Mode of Transmission',
      id: 'mode',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'Air',
            text: `Tuberculosis
Measles
Chicken Pox`
          },
          {
            name: 'Water',
            text: `Cholera
Typhoid
Hepatitis A`
          }
        ]
      }
    },
    {
      id: 'match-3',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Salt, Amla
Sugar, Jam
Vinegar, Pickle
Pasturization, Milk`,
        title: 'Match the following.'
      }
    }
  ]
};
