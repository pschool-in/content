export default {
  id: 'ta-spell',
  label: 'எழுத்துப்பிழை',
  img: 'word',
  lockAfter: 2,
  list: [
    {
      id: 'correct-spelling',
      type: 'rightOne',
      label: 'சரியான வார்த்தையை தேர்வு செய்க',
      lockAfter: 2,
      commonData: {
        title: 'சரியான வார்த்தையை தேர்வு செய்க'
      },
      data: [
        `எழுத்து, எலுத்து
அரசன், அறசன்
அறிவு , அரிவு
வணிகர், வனிகர்
வெள்ளை, வெல்ளை
வரிசை, வறிசை
விசிறி , விசரி`,

        `பெரிய, பெறிய
சிறுமி, சிருமி 
மீன், மீண் 
சாலை, சாளை 
குதிரை, குதிறை 
கண், கன் 
பெண், பென் 
அண்ணன், அண்னன் 
அழகன், அலகன் 
கவலை, கவளை `,

        `சேர்த்து, சேற்த்து 
இயற்கை, இயற்க்கை 
இளமை, இலமை 
வெந்நீர், வென்னீர் 
உண்மை, உன்மை 
இனிப்பு, இணிப்பு 
சேவல், சேவள் 
எறும்பு, எரும்பு 
நிலம், நிளம் 
உரல், உறல்`,

        `மழை, மளை
களம், கழம் 
பழம், பளம்
மரம், மறம்
அருகில், அறுகில்
மகிழ்ச்சி, மகிள்ச்சி
தோழன், தோலன்
மனம், மநம்
குறிப்பு, குரிப்பு
முயற்சி, முயர்சி`,

        `நலம், நளம்
தலை, தளை 
தோல்வி, தோள்வி 
ஜன்னல், ஜண்ணல் 
பொருள், பொருல் 
கருவி, கறுவி  
சோறு, சோரு 
கோலம், கோழம் 
வெள்ளி, வெல்லி 
கணிப்பொறி, கணிப்பொரி`,

        `தொலைக்காட்சி, தொளைக்காட்சி  
உள்ளம், உல்லம்  
வானொலி, வானொளி
மொழி, மொலி 
பருப்பு, பறுப்பு
கிளை, கிலை      
வண்ணம், வன்னம் 
தூரம், தூறம் 
கற்பனை, கர்பனை  
துணிச்சல், துனிச்சல் 
வீரம், வீறம்`
      ]
    },
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
