export default {
    id: 'verb-1',
    label: 'Verb-1',
    pdf: '',
    list: [
      {
        label: 'Verb-1',
        type: 'passage',
        id: 'verb-1-reading',
        data: {
          title: 'Action Words (Verbs)',
          text: `The words that describe what a person, an animal or a thing is doing are called action words. They express an action. For example
       1. Abhinav climbs
       2. Mihira plays
       3. Aarush eats
       4. Aadhya drinks
       5. Dog runs
       The words climbs, plays, eats, runs, drinks are known as action words.`
        }
      },
        {
        id: 'Jumbled-words',
        type: 'sequence',
        label: 'Identify',
        commonData: {
            title: 'Join the letters to form an action word'
          },
        data: [
            'read, plays, runs, take, tell',
    'jump, hop, cry, smile, sing',
    'walk, laugh, fly, eat, sit',
    'cook, sleep, catch, write, listen',
              ]
        },
        {
            type: 'rightOne',
            id: 'odd-one',
            label: 'Odd One Out',
            commonData: {
              title: "Identify the action words in the group"
            },
            data: [
              ` eat, dog, cat, bone
              talks, Neeta, the, mother
              tells, My, friend, happy
              walk, nice, baby, there
              closed, her, eyes, nose`,
      
              `write, book, paper, pen
              fly, table, chair, sofa
              sleep, blanket, pillow, bed
              hop, mouse, bird, snake
              jump, frame, board, ground`,

              `drink, coke, sweet, they
              brush, dentist, safe, good
              look, eye, cake, yummy
              run, ball, bat, goal  
              shop, money, rupees, paisa`,

              `paints, white, color, brush
              sit, sofa, cushion, cot
              hung, wall, paper, poster
              flows, water, jug, river
              throw, bat, pen, pencil`,
            ]
          },
          {
            type: 'selectWord',
            label: 'Pick out',
            id: 'select-word',
            commonData: {
              title: 'Identify the action word in the given sentence.'
            },
            data: [
              `Tarun *holds* his Teddy.
              Teju *eats* an apple.
              Mahesh *drinks* milk. 
              Raj *looks* sad.
              *Bring* me the pillow.`,
      
             `She is *eating* dinner.
             Loukya is *brushing* her teeth.
             They are *sleeping* on the floor.
             They are *riding* a bicycle.
             She is *singing* a song.`,
            ]
          },
        ]
      };
