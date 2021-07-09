export default {
  label: 'Phrases',
  id: 'phrase',
  list: [
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
