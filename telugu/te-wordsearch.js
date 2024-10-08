export default {
  label: 'పద శోధన',
  lang: 'te',
  id: 'te-wordsearch',
  lockAfter: 100,
  list: [
    {
      data: {
        lang: 'te',
        showWords: true,
        table: [
          ['సో', 'ఉ', 'ఉ', 'ఆ', 'ది', 'వా', 'ర', 'ము'],
          ['బ', 'మ', 'ఢ', 'ఊ', 'బు', 'ౠ', 'భ', 'ఆ'],
          ['గు', 'ష', 'వా', 'ఙ', 'ద', 'ధ', 'య', 'ఇ'],
          ['రు', 'ఇ', 'ధ', 'రం', 'ట', 'ఊ', 'వా', 'అః'],
          ['వా', 'ళ', 'ఙ', 'ఞ', 'ఠ', 'అ', 'శ', 'రం'],
          ['రం', 'ఠ', 'శు', 'క్ర', 'వా', 'రం', 'ని', 'మ'],
          ['ఫ', 'బ', 'భ', 'ఠ', 'శ', 'త', 'వా', 'జ'],
          ['మం', 'గ', 'ళ', 'వా', 'రం', 'ణ', 'రం', 'ఈ']
        ],
        title: 'Find the given words from the table.',
        words: [
          {
            marker: [3, 0, 7, 0],
            word: 'ఆదివారము'
          },
          {
            marker: [0, 0, 3, 3],
            word: 'సోమవారం'
          },
          {
            marker: [0, 7, 4, 7],
            word: 'మంగళవారం'
          },
          {
            marker: [4, 1, 7, 4],
            word: 'బుధవారం'
          },
          {
            marker: [0, 2, 0, 5],
            word: 'గురువారం'
          },
          {
            marker: [6, 4, 6, 7],
            word: 'శనివారం'
          },
          {
            marker: [2, 5, 5, 5],
            word: ['శు', 'క్ర', 'వా', 'రం']
          }
        ]
      },
      id: 'wordsearch',
      label: 'WordSearch - Telugu',
      type: 'wordsearch'
    }
  ]
};
