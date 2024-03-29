export default {
  label: 'Inventions and Discoveries',
  id: 'inventions',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Notes: Inventions and Discoveries',
      data: {
        title: 'Inventions and Discoveries',
        text: [
          {
            type: 'hilight',
            text: `Aeroplane − Wright Brothers
Dynamite − Alfred B. Nobel
Electric Battery − Volta
Light Bulb − Thomas Edison
Penicillin − Alexander Fleming
Radio − Marconi`
          },
          {
            type: 'hilight',
            text: `Thermometer − Galileo
Telephone − Graham Bell
Theory of Evolution − Charles Darwin
X-ray − Roentgen
Calculator − Pascal
Computer − Charles Babbage`
          },
          {
            type: 'hilight',
            text: `Electricity − Benjamin Franklin
Theory of Relativity − Albert Einstein
Gravity − Issac Newton
Telescope − Galileo
Barometer − Torricelli 
Electric Motor − Michael Faraday`
          },
          {
            type: 'notes',
            text: 'Barameter is used to measure atmospheric pressure.'
          },
          {
            type: 'notes',
            text:
              'Penicillin is used to treat certain bacterial infections (Antibiotic).'
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match',
      id: 'match',
      lockAfter: 1,
      commonData: {
        title: 'Match'
      },
      data: [
        `Aeroplane, Wright Brothers
Dynamite, Alfred B. Nobel
Electric Battery, Volta
Light Bulb, Thomas Edison
Penicillin, Alexander Fleming
Radio, Marconi`,

        `Thermometer, Galileo
Telephone, Graham Bell
Theory of Evolution, Charles Darwin
X-ray, Roentgen
Calculator, Pascal
Computer, Charles Babbage`,

        `Electricity, Benjamin Franklin
Theory of Relativity, Albert Einstein
Gravity, Issac Newton
Telescope, Galileo
Barometer, Torricelli 
Electric Motor, Michael Faraday`
      ]
    },

    {
      type: 'completeWord',
      label: 'Write the Answer',
      id: 'write',
      lockAfter: 1,
      commonData: {
        lang: 'en',
        title: 'Write the Answer'
      },
      data: [
        `Wright Brothers invented| Aeroplane
Alfred B. Nobel invented| Dynamite
Electric Battery was invented by| Volta
Thomas Edison invented| Light Bulb| L____ ____
Alexander Fleming invented | Penicillin
Radio was invented by| Marconi`,

        `Thermometer was invented by| Galileo
Graham Bell invented| Telephone
Theory of Evolution was presented by| Charles Darwin| C______ D_____
X-ray was invented by| Roentgen
Calculator was invented by| Pascal
Charles Babbage invented| Computer`,

        `Benjamin Franklin discovered| Electricity
Theory of Relativity was presented by| Albert Einstein| A_____ E_______
Issac Newton discovered| Gravity
Telescope was invented by| Galileo
Torricelli invented| Barometer
Michael Faraday invented| Electric Motor| E_______ _____`
      ]
    }
  ]
};
