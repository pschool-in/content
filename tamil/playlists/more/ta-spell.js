export default {
  id: 'ta-spell',
  label: 'எழுத்துப்பிழை',
  img: 'word',
  list: [
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
      id: 'la-sound',
      label: 'ல,ள,ழ வேறுபாடுகள்',
      type: 'fillupOptions',
      commonData: {
        title: 'சரியான விடையை தேர்ந்தெடு'
      },
      data: [
        `கடலில் *அலை(அளை)* வேகமாக வீசுகிறது.
*குழந்தை(குலந்தை)* இருக்கும் இடம் கலகலப்பாக இருக்கும்.
அப்பா என்னை *அழை(அலை)*த்தார். 
ராதா மிகவும் *அழகு(அலகு)* வாய்ந்தவள். 
நான் *அவல்(அவழ்)* சாப்பிட்டேன்.
இந்த *வழி(வலி)* கரடுமுரடாக உள்ளது. 
காற்றை *வளி(வழி)* என்றும் கூறலாம்.`,

        `*அவள்(அவல்)* என் தோழி.
மாமா எனக்கு ஒரு பரிசு *அளி(அலி)*த்தார். 
பாண்டியர்கள் பகைவரை *அழி(அளி)*த்தனர்.
தச்சருக்கு தேவைப்படும் கருவி *உளி (உலி)*.
குரங்கின் *வால்(வாழ்)* நீளமாக இருந்தது.
வீரர்கள் கையில் கூர்மையான *வாள்(வால்)* வைத்திருந்தனர்.
நீண்ட தூரம் நடந்ததால் காலில் *வலி(வளி)* ஏற்பட்டது.`,

        `உயிர் கொடுப்பான் *தோழன்  (தோலன்)*.
கொடுத்து *மகிழ்வது(மகிள்வது)* இன்பம்.
கிளியின் *அலகு(அளகு)* சிவப்பாக இருக்கும்.
அம்மா வாசலில் *கோலம்(கோளம்)*  போட்டாள். 
மரம் வளர்ப்போம்,*மழை(மலை)* பெறுவோம்.
உயர்ந்து நிற்பது *மலை (மளை)*.
பாதையை குறிப்பது *வழி(வலி)*.`,

        `*அல்லி(அள்ளி)* மலர் மாலையில் மலர்கிறது.
உடல் காயத்தினால் ஏற்படுவது *வலி(வளி)*.
அம்மா குழந்தையை கொஞ்சி *குலவி(குளவி)*னர்.
தாத்தாவை *குளவி(குலவி)* கொட்டியது.
ராமன் கடையில் *பழம் (பலம்)* வாங்கினான்.
கனத்த மழை பெய்ததால் *வெள்ளம்(வெல்லம்)* ஏற்பட்டது. 
வீரனின் கையில் நீண்ட *வாள் (வால்)* இருந்தது.`,

        `அண்ணன் தொழிற்சாலையில் *வேலை (வேளை)* செய்கிறார்.
ஆடுகள் இலை *தழை (தலை)* களைத் தின்றன. 
சிறுவர்கள் ஆர்வத்துடன் *கோலி (கோழி)* விளையாடினர். 
தாத்தா தினமும் அதி *காலை(காளை)*யில் நடைப்பயிற்சி செய்வார். 
அன்பரசன் சிற்பக்*கலை(களை)*யில் சிறந்தவன்.  
வெள்ளை நிறத்*தாள்(தால்)* ஒன்றில் கபிலன் படம் வரைந்தான்.
*ஆழி(ஆளி)*ப்பேரலை கடலோர மாவட்டங்களில் அதிக பாதிப்பை ஏற்படுத்தியது.`
      ]
    },
    {
      id: 'ra-sound',
      label: 'ர, ற வேறுபாடுகள்',
      type: 'fillupOptions',
      commonData: {
        title: 'சரியான விடையை தேர்ந்தெடு'
      },
      data: [
        `வீட்டுக்கு ஒரு *மரம்(மறம்)* வளர்ப்போம்.
ஒன்றில் பாதி *அரை (அறை)*.
என் வீட்டில் எனக்கென்று ஓர் *அறை(அரை)*உள்ளது.
ஆடு புற்களை *இரை(இறை)*யாக எடுத்துக்கொள்ளும்.
எந்த செயல் தொடங்கும்போதும் *இறை(இரை)* வனை வேண்டுகிறேன்.`,

        `நிலவு வரும் நேரம் *இரவு (இறவு)*.
ஆற்றின் ஓரங்களை *கரை(கறை)* என்கிறோம்.
பள்ளி சீருடையில்  *கறை(கரை)* படிந்து விட்டது.
ஆண்டு விழாவில் நான் நன்றி *உரை(உறை)* ஆற்றினேன். 
அம்மா தலையணை *உறை(உரை)* தைக்கிறாள்.`
      ]
    },
    {
      id: 'na-sound',
      label: 'ந, ன, ண வேறுபாடுகள்',
      type: 'fillupOptions',
      commonData: {
        title: 'சரியான விடையை தேர்ந்தெடு'
      },
      data: [
        `நேர்மை எப்போதும் *நன்மை (நண்மை)* தரும்.
ஐம்புலன்களில் ஒன்று *கண்(கன்)*. 
பூக்களில் இருப்பது *தேன்(தேண்)*.
மார்கழி மாதத்தில் *பனி(பணி)* பெய்யும்.  
*பனை(பணை)* மரத்தில் நுங்கு கிடைக்கும்.`,

        `உயரத்தில் ஏற பயன்படுவது *ஏணி (ஏனி)*. 
*பணம்(பனம்)* பத்தும் செய்யும்.
சுவரில் அடிப்பது *ஆணி (ஆனி)*.
தமிழ் மாதங்களில் ஒன்று  *ஆனி(ஆணி)*.
வீட்டை காக்கும் விலங்கு *நாய்(னாய்)* .`,

        `தேனை சேகரிப்பது *தேனீ(தேநீ)*.
*பன்றி(பண்றி)* கூட்டமாக வாழும்.
பள்ளியில் சதந்திர தின *கொண்டாட்டம்(கொன்டாட்டம்)* நடந்தது. 
திருமண *மண்டபம்(மன்டபம்)* கோலாகலமாக இருந்தது.     
தம்பி *பந்து(பன்து)* விளையாடுகிறான்.
*வெந்தயம்(வெண்தயம்)* உடலுக்கு குளிர்ச்சி தரும்.`
      ]
    }
  ]
};
