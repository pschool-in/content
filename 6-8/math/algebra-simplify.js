export default {
  label: 'Simplify',
  id: 'algebra-simplify',
  list: [
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        fracFontSize: '1rem',
        types: [
          {
            name: 'True',
            text: `~3𝑥+3/3 = ~𝑥+1
~6𝑥 × 1/2 =  ~3𝑥
~3𝑥 × ~4𝑥 = ~12𝑥2`
          },
          {
            name: 'False',
            text: `~2𝑥+2/2 = ~𝑥+2
~6𝑥 × ~2𝑥 = ~12𝑥`
          }
        ]
      }
    }
  ]
};
