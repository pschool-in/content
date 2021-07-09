export default {
  label: 'Only for Testing',
  id: 'test',
  list: [
    {
      type: 'rightOne',
      label: 'எழுத்துக்களை அடையாளம் காண்க',
      id: 'sound-vowels',
      data: {
        title: 'ஓசை கேட்டு எழுத்துக்களை அடையாளம் காண்க.',
        type: 'letters',
        group: [
          { id: 'அ', audio: 0 },
          { id: 'ஆ', audio: 2 },
          { id: 'இ', audio: 4 },
          { id: 'ஈ', audio: 6 },
          { id: 'உ', audio: 8 },
          { id: 'ஊ', audio: 10 },
          { id: 'எ', audio: 12 },
          { id: 'ஏ', audio: 14 },
          { id: 'ஐ', audio: 16 },
          { id: 'ஒ', audio: 18 },
          { id: 'ஓ', audio: 20 },
          { id: 'ஔ', audio: 22 }
        ],
        audio: 'tamil.mp3'
      }
    },
    {
      type: 'rightOne',
      label: 'எழுத்துக்களை அடையாளம் காண்க - 2',
      id: 'sound-consonants',
      data: {
        title: 'ஓசை கேட்டு எழுத்துக்களை அடையாளம் காண்க.',
        type: 'letters',
        group: [
          { id: 'க', audio: 26 },
          { id: 'ங', audio: 28 },
          { id: 'ச', audio: 30 },
          { id: 'ஞ', audio: 32 },
          { id: 'ட', audio: 34 },
          { id: 'ண', audio: 36 },
          { id: 'த', audio: 38 },
          { id: 'ந', audio: 40 },
          { id: 'ப', audio: 42 },
          { id: 'ம', audio: 44 },
          { id: 'ய', audio: 46 },
          { id: 'ர', audio: 48 },
          { id: 'ல', audio: 50 },
          { id: 'வ', audio: 52 },
          { id: 'ழ', audio: 54 },
          { id: 'ள', audio: 56 },
          { id: 'ற', audio: 58 },
          { id: 'ன', audio: 60 }
        ],
        audio: 'tamil.mp3'
      }
    }
  ]
};
