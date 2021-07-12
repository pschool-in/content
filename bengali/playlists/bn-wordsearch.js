export default {
  label: 'Word Search',
  id: 'bn-wordsearch',
  img: 'wordsearch',
  list: [
    {
      id: 'fruits',
      type: 'wordsearch',
      label: 'Fruits',
      data: {
        title: 'Find the given words from the table.',
        words: [
          {
            word: ['আ', 'পে', 'ল'],
            marker: [3, 0, 5, 2]
          },
          {
            word: ['আ', 'ঙু', 'র'],
            marker: [3, 0, 3, 2]
          },
          {
            word: ['ক', 'লা'],
            marker: [0, 3, 1, 3]
          },
          {
            word: ['ক', 'ম', 'লা'],
            marker: [0, 3, 2, 5]
          }
        ],
        table: [
          ['থ', 'য়', 'ঢ়', 'আ', 'ঠ', 'ঙ'],
          ['ল', 'অ', 'ঢ', 'ঙু', 'পে', 'ঝ'],
          ['অ', 'ঢ', 'উ', 'র', 'গ', 'ল'],
          ['ক', 'লা', 'ফ', 'ই', 'থ', 'য়'],
          ['উ', 'ম', 'ত', 'দ', 'ঋ', 'চ'],
          ['ষ', 'ঊ', 'লা', 'ক', 'থ', 'ল']
        ],
        lang: 'bn',
        showWords: true
      }
    }
  ]
};
