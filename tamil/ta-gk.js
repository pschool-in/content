export default {
  label: 'பொது அறிவு',
  id: 'ta-gk',
  img: 'gk',
  lang: 'ta',
  lockAfter: 100,
  list: [
    {
      id: 'mcq',
      label: 'சரியான பதிலை தேர்வு செய்க ',
      type: 'mcq',
      data: {
        title: 'பின்வரும் கேள்விகளுக்கு சரியான விடையை தேர்வு செய்க ',
        questions: [
          {
            qText: 'எதை அடிப்படையாக வைத்து மாநிலங்கள் பிரிக்க பட்டது ?',
            options: 'மொழி , மதம் , மக்கள்தொகை '
          },
          {
            qText: 'ராஜராஜ சோழன் கட்டிய பெரிய கோவில் எந்த ஊரில் உள்ளது?',
            options: 'தஞ்சாவூர்,  திருச்சி,  மதுரை '
          },
          {
            qText: 'காவிரி ஆறு எந்த நகரின் நடுவே பாய்கிறது?',
            options: 'திருச்சி , மதுரை , சென்னை , சேலம் '
          },
          {
            qText: 'வைகை ஆறு எந்த நகரின் நடுவே பாய்கிறது?',
            options: 'மதுரை , திருச்சி , சென்னை , சேலம் '
          },
          {
            qText: 'தமிழ் நாட்டின் வடக்கே அமைந்துள்ள மாநிலம் எது?',
            options: 'ஆந்திர பிரதேசம், கர்நாடகா , கேரளா '
          }
        ]
      }
    },
    {
      id: 'notes',
      type: 'passage',
      label: 'குறிப்பு: நூல்களும் ஆசிரியர்களும் ',
      data: {
        title: 'நூல் - ஆசிரியர்',
        text: `ஆத்திச்சூடி - ஔவையார் 
        ராமாயணம்  -  கம்பர் 
        பெரியபுராணம்  -  சேக்கிழார் 
        சிலப்பதிகாரம் -  இளங்கோ அடிகள்
        திருக்குறள்  -  திருவள்ளுவர் 
        
        
        மணிமேகலை  -  சீத்தலைச்சாத்தனார்
        கொன்றை வேந்தன் -  ஔவையார் 
        திருப்புகழ் -  அருணகிரிநாதர்
        நன்னெறி  -  சிவப்பிரகாசர்
        என் சரித்திரம் - சுவாமிநாத ஐயர்
        
        
        பாஞ்சாலி சபதம்  -  பாரதியார் 
        புரட்சிக்கவி  -  பாரதிதாசன் 
        என் இனிய இயந்திரா  -  சுஜாதா 
        பொன்னியின் செல்வன்  -  கல்கி 
        யானை டாக்டர் -  எஸ்.ராமகிருஷ்ணன்`
      }
    },
    {
      id: 'match',
      type: 'match',
      label: 'பொருத்துக',
      lockAfter: 2,
      commonData: {
        title: 'பொருத்துக',
        fontSize: '1rem'
      },
      data: [
        `ஆத்திச்சூடி, ஔவையார் 
        ராமாயணம் , கம்பர் 
        பெரியபுராணம் , சேக்கிழார் 
        சிலப்பதிகாரம், இளங்கோ அடிகள்
        திருக்குறள் , திருவள்ளுவர் `,

        `மணிமேகலை , சீத்தலைச் சாத்தனார்
        கொன்றை வேந்தன், ஔவையார் 
        திருப்புகழ், அருணகிரிநாதர்
        நன்னெறி , சிவப்பிரகாசர்
        என் சரித்திரம் , சுவாமிநாத ஐயர்`,

        `பாஞ்சாலி சபதம் , பாரதியார் 
        புரட்சிக்கவி , பாரதிதாசன் 
        என் இனிய இயந்திரா , சுஜாதா 
        பொன்னியின் செல்வன் , கல்கி 
        யானை டாக்டர், எஸ். ராமகிருஷ்ணன்`
      ]
    },
    {
      id: '600',
      label: 'வரிசை படுத்துக ',
      type: 'sorting',
      data: {
        title:
          'முதல்முறை பதவியேற்றதின் அடிப்படையில் தமிழக முதல்வர்களை வரிசை படுத்துக.',
        text: 'கு. காமராசர் , சி.என். அண்ணாதுரை, மு.கருணாநிதி, எம்.ஜி.ராமச்சந்திரன், ஜெ. ஜெயலலிதா, மு.க.ஸ்டாலின்'
      }
    }
  ]
};
