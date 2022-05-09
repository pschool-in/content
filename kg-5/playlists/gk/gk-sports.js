export default {
  label: 'GK Sports',
  id: 'gk-sports',
  lockAfter: 2,
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Notes: Important Sports Persons',
      data: {
        title: 'Important Sports Persons',
        text: [
          {
            type: 'hilight',
            text: `M.S. Dhoni - Cricket
Vasudevan Baskaran - Hockey
Viswanathan Anand - Chess
Rafael Nadal - Tennis
Virat Kohli - Cricket
Dhyan Chand - Hockey `
          },
          {
            type: 'hilight',
            text: `Magnus Carlsen - Chess
Diego Maradona - Football 
Serena Williams - Tennis
Sania Mirza - Tennis
PT Usha - Athletics
PV Sindhu - Badminton`
          },
          {
            type: 'hilight',
            text: `Abhinav Bindra - Shooting
Neeraj Chopra - javelin throw
Muhammad Ali - Boxing
Sachin Tendulkar - Cricket
Cristiano Ronaldo - Football`
          },
          {
            type: 'hilight',
            text: `Lionel Messi - Football
Michael Jordan - Basketbal
Usain Bolt - Sprinting
Roger Federer - Tennis
Tiger Woods - Golf`
          }
        ]
      }
    },
    {
      id: 'match-1',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `M.S. Dhoni, Cricket
Vasudevan Baskaran, Hockey
Viswanathan Anand, Chess
Usain Bolt, Sprinting
Roger Federer, Tennis`,
        title: 'Match the following with its correct one'
      }
    },
    {
      label: 'Multiple Choice Questions',
      id: 'mcq-1',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Dhyan Chand belongs to ________ sport. ',
            options: 'Hockey, Squash, Athletics'
          },
          {
            qText: 'Magnus Carlsen belongs to ___________ sport.',
            options: 'Chess, Carrom, Tennis'
          },
          {
            qText: 'Diego Maradona belongs to ___________ sport. ',
            options: 'Football, Gymnastics, Wrestling'
          },
          {
            qText: 'Serena Williams belongs to ___________ sport. ',
            options: 'Tennis, Weight Lifting, Gymnastics'
          },
          {
            qText: 'Sania Mirza belongs to ___________ sport.',
            options: 'Tennis, Cricket, Rugby'
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-1',
      data: {
        text: `*PT Usha* is associated with Athletics.
*PV Sindhu* is associated with Badminton sport. 
*Abhinav Bindra* is associated with Shooting sport.
*Neeraj Chopra* is associated with Javelin throw sport.
*Muhammad Ali* is associated with Boxing sport.`
      }
    },
    {
      label: 'True or False',
      id: 'TF-1',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Sachin Tendulkar is a prominent player in Cricket. 
Cristiano Ronaldo is a prominent player in Football. 
Usain Bolt is a prominent player in Sprinting. 
Roger Federer is a prominent player in Tennis.`
          },
          {
            name: 'False',
            text: ` Lionel Messi is a professional Swimmer. 
Tiger Woods is a Chess master.
Michael Jordan is a famous Cricket player.`
          }
        ]
      }
    }
  ]
};
