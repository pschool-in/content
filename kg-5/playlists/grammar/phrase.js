export default {
  label: 'Phrases',
  id: 'phrase',
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Phrase',
        text: [
          `A phrase is a collection of related words, but not a complete sentence. It does not have a verb. In the below sentences, the highlighted group of words can be called a phrase.`,
          {
            type: 'html',
            text: `His house is <b>next to mine</b>.<br>
He is a person <b>with good character</b>.<br>
The teacher spoke <b>to the parents</b>.`
          },
          `# Noun Phrase
Some phrases play the role of a noun. It can be the subject or object in a sentence. eg:
1. A little boy
2. The happy puppy
3. The house an the corner
4. A shart pencil with an eraser
5. your old clothes`,
          `# Adjective Phrase
Some phrases play the role of an adjective. Eg:
1. tired and hungry
2. very costly but beautiful 
3. not very healthy
4. dark chocolate brown
# Adverbial Phrase
Some phrases play the role of an adverb. Eg:
1. in the morning
2. in a minute
3. very quickly
4. in the middle of the city`
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the Pairs',
      type: 'match',
      commonData: {
        title: 'Match the related pairs'
      },

      data: [
        `a street, filled with mud
a man, of great wealth
a day, of nice weather
a team, of strong players
the tops, of the mountains`,

        `a group, of evil thieves
a dress, of nice colour
a dinner, of many dishes
a cow, with spots
a tree, of many fruits`,

        `a man, of courage
a carpet, made of wool
walls, made of stone
an object, of great weight
a fruit, with a lot of juice
a country, with many mountains`
      ]
    },
    {
      id: 'mcq',
      label: 'One instead of Many!',
      type: 'mcq',
      commonData: {
        title: 'Which one word will replace the underlined phrase.'
      },
      data: [
        {
          questions: [
            {
              qText: 'The principal spoke *in a loud voice*.',
              options: 'loudly, louder, loudness'
            },
            {
              qText: 'This old bag is *of no use*.',
              options: 'useless, waste, useful'
            },
            {
              qText: 'Deepa lived *in a foreign country*.',
              options: 'abroad, America, broad, happily'
            },
            {
              qText: 'The accident occurred *at this spot*.',
              options: 'here, there, this'
            },
            {
              qText: 'He was speaking *in a rude way*.',
              options: 'rudely, rudeness, rapidly'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The judge *took no notice of* the lawyer’s statement.',
              options: 'ignored, present, remember'
            },
            {
              qText:
                'The children carefully *went to the other side of* the road.',
              options: 'crossed, ignored, obeyed'
            },
            {
              qText: `You must *do what you are told to do by* your parents.`,
              options: 'obey, remember, ignore'
            },
            {
              qText: 'A dictionary tries to *make clear* the meaning of words.',
              options: 'explain, find, present'
            },
            {
              qText:
                'My brother finds it difficult to *make known* his feelings.',
              options: 'express, whisper, appear'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'The mother *said in a loud voice*  to her two children to stop fighting at once.',
              options: 'shouted, laughed, talked'
            },
            {
              qText:
                'The little girl *spoke very softly* into her father’s ear.',
              options: 'whispered, shouted, talked'
            },
            {
              qText: `The plane *came into view* in the sky.`,
              options: 'appeared, visible, examine'
            },
            {
              qText:
                'Preethi couldn’t *think back of*  her last visit to her grandmother’s house.',
              options: 'remember, count, appear'
            },
            {
              qText:
                'The detective *looked carefully* at the fingerprints on the glass.',
              options: 'examined, thought, whispered'
            }
          ]
        }
      ]
    }
  ]
};
