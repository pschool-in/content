export default {
  id: 'misc-grammar-6-1',
  label: 'Misc Grammar 6',
  lockAfter: 3,
  list: [
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      lockAfter: 1,
      data: [
        {
          title: 'Match words and roles: What is your name?',
          text: `what, pronoun
is, verb
your, adjective
name, noun`
        },
        {
          title: 'Match words and roles: Ramya is singing a beautiful song.',
          text: `Ramya, proper noun
is singing, verb
a beautiful, adjective
song, common noun`
        },
        {
          title: 'Match words and roles: The cat is sleeping under the chair.',
          text: `is, helping verb
sleeping, main verb
under, preposition
chair, object
cat, subject`
        }
      ]
    },
    {
      id: 'direct-indirect',
      label: 'Find my speech - back',
      type: 'classifySentence',
      commonData: {
        title: 'Identify the parts of speech for the underlined word'
      },
      data: [
        {
          types: [
            {
              name: 'Noun',
              text: `The heavy load broke his *back*.`
            },
            {
              name: 'Adjective',
              text: `He entered through the *back* door.`
            },
            {
              name: 'Verb',
              text: `Do not *back* out on your promise.`
            },
            {
              name: 'Adverb',
              text: `Go *back* and never come again.`
            }
          ]
        }
      ]
    }
  ]
};
