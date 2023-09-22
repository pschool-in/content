export default {
  id: 'ta-spell-1',
  label: 'எழுத்துப்பிழை',
  img: 'word',
  lockAfter: 2,
  list: [
    {
      label: 'சரியான வார்த்தையை பொருத்துக ',
      id: 'find',
      type: 'completePuzzle',
      commonData: {
        type: 'rightOpen',
        title: 'ஒத்த ஓசையுள்ள வார்த்தையை பொருத்துக ',
        leftWidth: 150,
        rightWidth: 150,
        fontSize: '2.5rem'
      },
      data: [
        {
          leftWidth: 100,
          rightWidth: 200,
          type: 'leftOpen',
          text: `மை, ஆ, அ
            ருமை, எ, ஏ 
            ண்டு, ந, ண 
            க்கு, கொ, கோ 
            வல், சே, செ`
        },

        `விசி, றி, ரி
        மீ, ன், ண் 
        க, ண், ன் 
        பெ, ண், ன் 
        கவ, லை, ளை`,

        `பட, கு, கூ 
        கப்ப, ல், ள் 
        தே, ர் , ற் 
        பன், றி , ரி 
        தக்கா, ளி, லி`
      ]
    }
  ]
};
