export default {
  label: 'வார்த்தை',
  id: 'ta-word',
  img: 'word',
  list: [
    {
      id: 'jumbled',
      type: 'sequence',
      label: 'சொல் தேடல்',
      commonData: {
        title: 'எழுத்துக்களை சேர்த்து வார்த்தை அமைக்கவும்.',
        lang: 'ta'
      },
      data: [
        'வட்டம், ஊஞ்சல், எறும்பு, பட்டம், தூக்கம், இறைவன், கடவுள், முயற்சி, பயிற்சி, மல்லிகை',
        'ஞாயிறு, திங்கள், செவ்வாய், புதன், வியாழன், வெள்ளி',
        'திராட்சை, வாழைப்பழம், தர்பூசணி, பப்பாளி, மாம்பழம், பலாப்பழம், கொய்யாப்பழம், அன்னாசிப்பழம், மாதுளை, ஆப்பிள், ஆரஞ்சு',
        'தாமரை, சூரியகாந்தி, சாமந்தி, செம்பருத்தி, மல்லி',
        'விமானம், படகு, பேருந்து, மகிழுந்து, மிதிவண்டி , கப்பல், தொடர்வண்டி',
        'காரட், வெங்காயம், தக்காளி, உருளைக்கிழங்கு, முட்டைகோசு,சோளம், வெள்ளரிக்காய்,பூண்டு, இஞ்சி',
        'குதிரை, பன்றி, சிங்கம், குரங்கு, நீர்யானை, காண்டாமிருகம், முதலை, வரிக்குதிரை, கரடி, ஒட்டகம், திமிங்கிலம்',
        'தட்டான், தவளை, நண்டு, பாம்பு, அணில், ஈசல், எறும்பு, காகம், வாத்து, மயில், சிட்டுக்குருவி',
        'சித்திரை, வைகாசி, ஆவணி, புரட்டாசி, ஐப்பசி, கார்த்திகை, மார்கழி, பங்குனி'
      ]
    },
    {
      id: 'correct-spelling',
      type: 'rightOne',
      label: 'எழுத்துப்பிழை',
      commonData: {
        title: 'சரியான வார்த்தையை தேர்வு செய்க'
      },
      data: [
        `பறவை, பரவை
உலகம், உளகம்
எழுத்து, எலுத்து
சோளம் , சோலம்
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
பெண், பேன் 
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
உரல், உறல்`
      ]
    },
    {
      id: 'opposites',
      type: 'match',
      label: 'பொருத்துக -  எதிர்சொல்',
      commonData: {
        title: 'பொருத்துக -  எதிர்சொல் ',
        fontSize: '1rem'
      },
      data: [
        `பெரிய , சிறிய
வெற்றி, தோல்வி  
ஆம், இல்லை
பகை , நட்பு
இங்கே, அங்கே
இடது, வலது`,

        `இரவு, பகல்
இருள், ஒளி
இழு, தள்ளு
சேர்த்து, பிரித்து  
மண்ணில், விண்ணில்  
கீழ், மேல்`,

        `உயர்த்தி, தாழ்த்தி  
உள்ளே, வெளியே
பழைமை , புதுமை
நன்மைகள், தீமைகள்
இயற்கை, செயற்கை
இளமை, முதுமை`,

        `ஈரமான, காய்ந்த
உள்நாடு, அயல்நாடு
தோற்றம், மறைவு
உண்மை, பொய்
இனிப்பு, கசப்பு
இன்பம், துன்பம்`,

        `ஏற்றம், இரக்கம்
முடிவு, தொடக்கம் 
அருகில், தொலைவில்
அறிவாளி, முட்டாள்
அனுமதி, மறு
எடு, கொடு`,

        `எளிய, கடினம்
ஏற்றுமதி, இறக்குமதி
ஏழை, செல்வன்
ஒருமை, பன்மை
ஒற்றுமை, வேற்றுமை
கடந்தகாலம், எதிர்காலம்`,

        `கருப்பு, வெள்ளை
காலை, மாலை
கிழக்கு, மேற்கு
குளிர், வெப்பம்
கூட்டல், கழித்தல்
கேள்வி, பதில்`
      ]
    },
    {
      id: 'sorting',
      label: 'கிழமை - வரிசை படுத்துக ',
      type: 'sorting',
      data: {
        editable: true,
        title: 'கிழமை: வரிசை படுத்துக',
        text: 'ஞாயிறு, திங்கள், செவ்வாய், புதன், வியாழன், வெள்ளி, சனி'
      }
    },
    {
      id: 'months',
      label: 'தமிழ் மாதங்கள் - வரிசை படுத்துக',
      type: 'sorting',
      slug: 'sort',
      data: {
        editable: true,
        title: 'தமிழ் மாதங்கள்: வரிசை படுத்துக',
        text:
          'சித்திரை, வைகாசி, ஆனி, ஆடி, ஆவணி, புரட்டாசி, ஐப்பசி, கார்த்திகை, மார்கழி, தை, மாசி, பங்குனி'
      }
    },
    {
      id: 'sort-2',
      label: 'வரிசை படுத்துக ',
      type: 'sorting',
      data: {
        editable: true,
        title: 'எது முன்னே? எது பின்னே? அகர வரிசைப்படுத்துக ',
        text:
          'படை, பிண்ணாக்கு, பீரங்கி, புத்தகம், பூமி, பெட்டி, பைந்தமிழ், பொத்தான், போர்வை, பௌத்தம்'
      }
    },
    {
      id: 'complete-word2',
      label: 'விடுபட்ட எழுத்துக்களை நிரப்புக ',
      type: 'completeWord',
      data: {
        title: 'விடுபட்ட எழுத்துக்களை நிரப்புக',
        lang: 'ta',
        text: `வளையலின் வடிவம் | வட்டம் | வ__ம்
பூங்காவில் சிறுவர்கள் விளையாடுவது | ஊஞ்சல் | ஊ_சல்
வரிசை மாறாமல் நடைபோடும் சிறிய உயிரினம் | எறும்பு | எ_ம்பு
காற்றில் பறப்பது | பட்டம் | பட்_ம்
காட்டின் ராஜா | சிங்கம் | சி__ம்`
      }
    },
    {
      id: 'match',
      type: 'match',
      label: 'பொருத்துக',
      commonData: {
        title: 'பொருத்துக',
        fontSize: '1rem'
      },
      data: [
        `மயில் , பறவை
        நாய் , விலங்கு
        மல்லிகை , மலர்
        தை , மாதம்
        திங்கள் , கிழமை
        சென்னை , ஊர் `,

        `சரிகை, வேட்டி
        கருப்பு , கோட்டு
        வெள்ளை, சட்டை
        சோளக்கொல்லை, பொம்மை
        கனத்த, மழை`
      ]
    },
    {
      id: 'jobs',
      label: 'மனிதர்களும் தொழில்களும்',
      type: 'matchByDragDrop',
      commonData: {
        isPractice: false,
        title: 'மனிதர்களும் தொழில்களும் ',
        styles: {
          fontSize: '1rem',
          dashWidth: 60
        }
      },
      data: [
        `ஆடை நெய்பவர் = *நெசவாளர்* 
பானைகள் செய்பவர் = *குயவர்*
யானையைப் பழக்குபவர் = *பாகன்* 
மரவேலை செய்பவர் = *தச்சர் *
பொருள்களை விற்பவர் = *வணிகர்*
கப்பலைச் செலுத்துபவர் = *மாலுமி* `,

        `உழவுத் தொழில் செய்பவர் = *உழவர்*
வான் ஊர்தி ஓட்டுபவர் = *விமானி*
சிலை வடிப்பவர் = *சிற்பி*
தூய்மைப்பணி செய்பவர் = *துப்புரவாளர் *
ஊர்திகளை ஓட்டுபவர் = *ஓட்டுநர்*
கடிதங்களை சேர்ப்பவர் = *அஞ்சலகர்*`
      ]
    },
    {
      type: 'rightOne',
      label: 'ஓசை - வார்த்தை',
      id: 'sound',
      data: {
        title: 'ஓசை கேட்டு வார்த்தைகளை அடையாளம் காண்க.',
        type: 'words',
        audio: 'tamilWords.mp3',
        words:
          'அம்மா, அம்மி, அன்னம், ஆடு, ஆந்தை, ஆமை, இலை, இஞ்சி, இதயம், ஈட்டி, உரல், உதடு, உடுக்கை, ஊதல், ஊசி, ஊஞ்சல், எலி,  எறும்பு,  எருமை, ஏணி, ஏழு, ஐந்து , ஐவர், ஒட்டகம், ஒன்று, ஒன்பது, ஓடம், ஓநாய், ஓட்டம்'
      }
    }
  ]
};
