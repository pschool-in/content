export default {
  label: 'ஒத்த ஓசை சொற்கள்',
  id: 'ta-rhyme-words',
  img: 'science',
  list: [
    {
      label: 'சரியான வார்த்தையை பொருத்துக ',
      id: 'find',
      type: 'completePuzzle',
      commonData: {
        type: 'rightOpen',
        title: 'ஒத்த ஓசையுள்ள வார்த்தையை பொருத்துக ',
        leftWidth: 120,
        rightWidth: 200,
        fontSize: '1.4rem'
      },
      data: [
        `கூடி, மாடி, மாடு 
எடு, கொடு, கடுகு 
கடை, குடை, கட்டை 
கொசு, காசு, கொக்கு 
ஆசை, ஓசை, ஆமை`,

        `அது, இது, ஊர் 
பணி, துணி, தூண் 
நதி , மதி, எது 
காது, தூது, ஆசை 
கதை, விதை, பாறை `,

        `வண்டு , நண்டு, எறும்பு
எறும்பு, கரும்பு , பல்லி 
சட்டை, பட்டை, வட்டம் 
வட்டம், பட்டம், பம்பரம் 
அருவி, குருவி, மயில்`,

        `சிறகு, விறகு, விரல்
குளிர், துளிர், மரம் 
உறவு, உணவு, பணம் 
பருத்து, விருந்து, செல்வம் 
ஆடு, மாடு, புலி `
      ]
    },
    {
      type: 'rightOne',
      label: 'பொருந்தாத சொல்',
      id: 'odd-one',
      commonData: {
        title: 'வேறுபட்ட ஓசை கொண்ட சொல்லை தேர்வு செய்க ',
        fontSize: '1.3rem'
      },
      data: [
        `மாடு, கூடி, கோடி, மாடி
கடுகு, எடு, கொடு, தொடு
கட்டை, கடை, உடை, குடை
கொக்கு, கொசு, காசு, தூசு 
ஆமை, ஆசை, ஓசை, தோசை `,

        `ஊர், அது, இது, எது 
தூண், பணி, மணி, துணி  
எது, நதி, மதி, விதி 
ஆசை, காது, தூது, மோது 
பாறை, கதை, விதை, பாதை`,

        `எறும்பு, செண்டு, வண்டு, நண்டு
பல்லி, எறும்பு, கரும்பு, துரும்பு 
வட்டம், சட்டை, பட்டை, மட்டை 
பம்பரம், வட்டம், பட்டம், மட்டம்  
மயில், அருவி, கருவி, குருவி`,

        `விரல், சிறகு, இறகு, விறகு 
மரம், குளிர், துளிர் , தளிர் 
பணம், உறவு, உணவு, கதவு 
செல்வம், பருத்து, விருந்து, மருந்து
புலி, ஆடு, மாடு, காடு`
      ]
    },
    {
      id: 'match',
      type: 'match',
      label: 'பொருத்துக',
      lockAfter: 2,
      commonData: {
        title: 'பொருத்துக: ஒத்த ஓசை சொற்களை இணைக்கவும் ',
        fontSize: '1.5rem'
      },
      data: [
        `கூடி, மாடி
        எடு, கொடு
        கடை, குடை
        கொசு, காசு,
        ஆசை, ஓசை`,

        `அது, இது
பணி, துணி
நதி , மதி
காது, தூது 
கதை, விதை`,

        `வண்டு, நண்டு
எறும்பு, கரும்பு
சட்டை, பட்டை
வட்டம், பட்டம்
அருவி, குருவி`,

        `சிறகு, விறகு
குளிர், துளிர்
உறவு, உணவு
பருத்து, விருந்து
ஆடு, மாடு`
      ]
    }
  ]
};
