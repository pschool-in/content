export default {
  label: 'wordsearch',
  id: 'hi-wordsearch',
  img: 'wordsearch',
  list: [
    {
      id: '100',
      label: 'WordSearch - Hindi',
      type: 'wordsearch',
      data: {
        lang: 'hi',
        showWords: true,
        table: [
          ['र', 'वि', 'वा', 'र', 'ऊ', 'अ', 'त', 'सो'],
          ['ड', 'गु', 'ऊ', 'ज', 'ञ', 'ढ', 'द', 'म'],
          ['ऐ', 'ड', 'रु', 'ज्ञ', 'थ', 'द', 'ब', 'वा'],
          ['म', 'श', 'प', 'वा', 'त', 'ज', 'अ', 'र'],
          ['बु', 'ऊ', 'नि', 'य', 'र', 'ऊ', 'ङ', 'ल'],
          ['ध', 'घ', 'र', 'वा', 'शु', 'क्र', 'वा', 'र'],
          ['वा', 'झ', 'ड', 'ई', 'र', 'आ', 'ध', 'स'],
          ['र', 'ठ', 'ड', 'मं', 'ग', 'ल', 'वा', 'र']
        ],
        title: 'Find the given words from the table.',
        words: [
          {
            marker: [0, 0, 3, 0],
            word: 'रविवार'
          },
          {
            marker: [7, 0, 7, 3],
            word: 'सोमवार'
          },
          {
            marker: [3, 7, 7, 7],
            word: 'मंगलवार'
          },
          {
            marker: [0, 4, 0, 7],
            word: 'बुधवार'
          },
          {
            marker: [1, 1, 4, 4],
            word: 'गुरुवार'
          },
          {
            marker: [1, 3, 4, 6],
            word: 'शनिवार'
          },
          {
            marker: [4, 5, 7, 5],
            word: ['शु', 'क्र', 'वा', 'र']
          }
        ]
      }
    }
  ]
};
