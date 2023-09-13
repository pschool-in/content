export default {
  label: 'ಪದಗಳ ಹುಡುಕಾಟ',
  id: 'kn-wordsearch',
  img: 'wordsearch',
  list: [
    {
      data: {
        lang: 'kn',
        showWords: true,
        table: [
          ['ಭಾ', 'ಠ', 'ಫ', 'ಶು', 'ಒ', 'ಐ', 'ಯ', 'ಮಂ'],
          ['ಅಃ', 'ನು', 'ಕ್ರ', 'ಬು', 'ಧ', 'ವಾ', 'ರ', 'ಗ'],
          ['ಙ', 'ವಾ', 'ವಾ', 'ವ', 'ಎ', 'ಶ', 'ಭ', 'ಳ'],
          ['ರ', 'ಅಂ', 'ಒ', 'ರ', 'ಲ', 'ನಿ', 'ಌ', 'ವಾ'],
          ['ಙ', 'ಆ', 'ಲ', 'ಜ', 'ದ', 'ವಾ', 'ಮ', 'ರ'],
          ['ಗು', 'ರು', 'ವಾ', 'ರ', 'ಥ', 'ರ', 'ಫ', 'ಐ'],
          ['ಅಃ', 'ಅಂ', 'ಅಃ', 'ಜ', 'ಫ', 'ಶ', 'ಷ', 'ಞ'],
          ['ಪ', 'ಭ', 'ಥ', 'ಌ', 'ಸೋ', 'ಮ', 'ವಾ', 'ರ']
        ],
        title: 'Find the given words from the table.',
        words: [
          {
            marker: [0, 0, 3, 3],
            word: ['ಭಾ', 'ನು', 'ವಾ', 'ರ']
          },
          {
            marker: [4, 7, 7, 7],
            word: ['ಸೋ', 'ಮ', 'ವಾ', 'ರ']
          },
          {
            marker: [7, 0, 7, 4],
            word: ['ಮಂ', 'ಗ', 'ಳ', 'ವಾ', 'ರ']
          },
          {
            marker: [3, 1, 6, 1],
            word: ['ಬು', 'ಧ', 'ವಾ', 'ರ']
          },
          {
            marker: [0, 5, 3, 5],
            word: ['ಗು', 'ರು', 'ವಾ', 'ರ']
          },
          {
            marker: [3, 0, 0, 3],
            word: ['ಶು', 'ಕ್ರ', 'ವಾ', 'ರ']
          },
          {
            marker: [5, 2, 5, 5],
            word: ['ಶ', 'ನಿ', 'ವಾ', 'ರ']
          }
        ]
      },
      id: 'wordsearch',
      label: 'WordSearch',
      type: 'wordsearch'
    }
  ]
};