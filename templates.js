export const templates = [
  {
    type: 'passage',
    label: 'Passage - Template',
    id: 'passage-template',

    data: {
      title: `Passage Title`,
      text: `This is a paragraph
  #heading
  This is another para.
  1. list item 1
  2. list item 2
  3. list item 3`
    }
  },
  {
    type: 'sequence',
    label: 'Jumbled - Template',
    id: 'find-word-template',

    data: {
      title: 'Connect the blocks to form meaningful word.',
      text: `first, two, nice, fine, third`
    }
  },
  /*{
      type: "sequence",
      label: "Find Sentence Template",
      data: {
        
        title: "Connect the blocks to form meaningful sentence.",
        text: `this is the first sentence
  second sentence goes here`,
      },
    },*/
  {
    type: 'rightOne',
    label: 'Correct Spelling - Template',
    id: 'correct-spelling-template',

    data: {
      title: 'Pick the Correct Spelling',
      text: `cat, kat
  apple, aple
  box, bok
  cattle, catle
  wheat, wheet
  meals, meels
  doctor, doktor`
    }
  },
  {
    type: 'completeWord',
    id: 'complete-word',
    label: 'Complete the Word - Template',

    data: {
      title: 'Find the word',
      questions: [
        {
          word: 'BOAT',
          display: 'B__T',
          hint: 'A small vehicle that moves in water.'
        },
        {
          word: 'AXE',
          display: 'A_E',
          hint: 'The tool of a wood cutter'
        },
        {
          word: 'BIRD',
          display: 'B__D',
          hint: 'A living thing that can fly.'
        },
        {
          word: 'TIGER',
          display: '_I_E_',
          hint: 'A wild animal with stripes'
        },
        {
          word: 'EARTH',
          display: 'E_R_H',
          hint: 'The only home for man.'
        }
      ]
    }
  },
  {
    label: 'Fill up by drag - Template',
    type: 'matchByDragDrop',
    id: 'drag-and-drop-blanks-template',

    data: {
      isPractice: false,
      title: 'Drag and drop the words at proper places.',
      styles: {
        fontSize: '1rem',
        dashWidth: 70
      },
      text: `*Sun* is the center of solar system.
  Jupiter is the *biggest* planet.
  *Saturn* has a big ring around it.
  Venus is the bright and *hottest* planet.
  Uranus is the *coldest* planet.
  *Pluto* is a dwarf planet.`
    }
  },
  {
    label: 'Select Word - Template',
    type: 'selectWord',
    id: 'select-word',

    data: {
      title: `Click on the preposition in the below sentence.`,
      text: `Radha was sitting *under* a tree. 
  The school will start *at* nine o'clock.
  We will meet *during* the lunch time.
  I cooked dinner *for* my mother.
  Monday comes *after* Sunday.`
    }
  },
  {
    label: 'Fillup - Template',
    type: 'fillup',
    id: 'fillup',

    data: {
      noOptions: true,
      title: `Fill in the blanks with proper article`,
      text: `Picasso was *an* artist.
  He is *an* honest man.
  I study at *a* small university in London.
  We used to live in *the* city centre.
  Are you *a* teacher?
  It takes me *an* hour to get to work.
  My cousin is *a* surgeon.
  It looks like it's going to rain. Do you have *an* umbrella?`
    }
  },
  {
    label: 'Fillup with Options - Template',
    type: 'fillup',
    id: 'fillup-fixed-options',

    data: {
      title: `Fill in the blanks with proper article`,
      text: `Picasso was *an* artist.
  He is *an* honest man.
  I study at *a* small university in London.
  We used to live in *the* city centre.
  Are you *a* teacher?
  It takes me *an* hour to get to work.
  My cousin is *a* surgeon.
  It looks like it's going to rain. Do you have *an* umbrella?`,
      options: 'a, an, the'
    }
  },
  /* {
      label: "Fillup (Variable options) Template",
      type: "fillup",
      
      data: {
       
        title: `Fill in the blanks with proper article`,
        text: `I am *a (the) * boy. 
  She went to *the (a) * library and had *an (a) * ice-cream.`,
      },
    },*/
  {
    type: 'match',
    label: 'Match - Template',
    id: 'match',

    data: {
      title: 'Match the words with same meaning.',
      text: `huge, large
  quick, fast
  ill, sick
  friendly, kind
  silent, quiet
  speak, talk
  large, big`
    }
  },
  {
    label: 'Sorting - Template',
    type: 'sorting',
    id: 'sort',

    data: {
      title:
        'Sort the planets based on its distance from sun. (Nearest planet at top)',
      text: `Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune`
    }
  },
  {
    label: 'Multiple Choice Questions - MCQ',
    type: 'mcq',
    data: {
      title: 'Multiple Choice Questions',
      questions: [
        {
          qText: `India gets lot of rain during ________.`,
          options: `monsoon, winter, summer`
        },
        {
          qText: `We need to drink lot of water during ______.`,
          options: `summer, winter, monsoon`
        },
        {
          qText: `What season India has during May month?`,
          options: `Summer, Winter, Monsoon, Spring`
        },
        {
          qText: `What season India has during January month?`,
          options: `Winter, Monsoon, Spring, Summer`
        },
        {
          qText: `________ helps in predicting weather.`,
          options: `Satellites, Rockets, Aeroplane, Astrology`
        }
      ]
    }
  },
  {
    label: 'Drag and Drop : Classify - Template ',
    type: 'group',
    id: 'group',

    data: {
      title: 'Above ground and Below ground',
      types: [
        {
          name: 'Above ground',
          text: 'grapes, cabbage, coconut, mango, rose'
        },
        {
          name: 'Below ground',
          text: 'potato, garlic, onion, carrot, beetroot'
        }
      ]
    }
  },
  {
    label: 'Classify Sentence - Template ',
    type: 'classifySentence',
    id: 'classify',

    data: {
      title: 'Classify the below sentences as Facts and Opinions',
      types: [
        {
          name: 'Fact',
          text: `Sun rises in the East.
  Modi is the Prime Minister of India.
  The Ganges is the longest river in India.
  There are 60 seconds in a minute.
  Christmas comes in December.`
        },
        {
          name: 'Opinion',
          text: `Blue is a better color than red.
  Balu is the best person in my class.
  No one can hit six like Dhoni.
  I think it will rain tomorrow.
  Sometimes he behave like a fool.`
        }
      ]
    }
  }
];
