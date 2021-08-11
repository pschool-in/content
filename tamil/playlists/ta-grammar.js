export default {
  label: 'இலக்கணம்',
  id: 'ta-grammar',
  img: 'langGrammar',
  list: [
    {
      label: 'ஒருமை - பன்மை',
      id: 'plural',
      type: 'completePuzzle',
      commonData: {
        type: 'rightOpen',
        title: 'ஒருமை - பன்மை',
        leftWidth: 120,
        rightWidth: 200,
        fontSize: '1.4rem'
      },
      data: [
        `நண்பன், நண்பர்கள் , நண்பன்கள் 
பெண், பெண்கள், பெண்கல் 
சிறுமி, சிறுமிகள், சிறுவிகள் 
பகைவன், பகைவர்கள், பகைவன்கள் 
அமைச்சர், அமைச்சர்கள், அமைச்சற்கள் 
வேந்தன், வேந்தர்கள் , வேந்தன்கல் 
பூ , பூக்கள் ,  பூகள்
மீன், மீன்கள்,   மீன்கல்`,

        `நாள், நாட்கள் , நாள்கள்
ஆறு, ஆறுகள் , ஆறுகல்
மாடு, மாடுகள், மாடுக்கள் 
மரம், மரங்கள் , மரம்கள்
பழம், பழங்கள்,  பழங்கல்
சாலை, சாலைகள் , சாலைகல்
கனி, கனிகள், கனிகல்`,

        `தோட்டம், தோட்டங்கள் , தோட்டக்கள்
குதிரை, குதிரைகள்,  குதிரைகல்
மலர், மலர்கள்,  மலற்கள் 
காய், காய்கள், காய்க்கள்
கல், கற்கள் , கல்கள்
பல், பற்கள் , பல்கள்
கண், கண்கள், கண்கல்`
      ]
    },
    {
      type: 'selectWord',
      label: 'வினைச்சொல்',
      id: 'verb',
      data: {
        title: 'வினைச்சொல்லை தேர்வு செய்க',
        text: `நேற்று சுதா பள்ளிக்கு *வரவில்லை*.
சிவா சிறுத்தை போல் வேகமாக *ஓடுவான்*.
பூங்காவில் மயில் ஒன்று தோகை விரித்து *ஆடியது*.
1969 ஆம் ஆண்டு, மனிதன் நிலாவில் கால் *பதித்தான்*.
காலை நேரத்தில் கீதா ஓவியம் *வரைவாள்*.`
      }
    },
    {
      type: 'classifySentence',
      label: 'காலம்',
      id: 'tense',
      data: {
        title: 'பின்வரும் வாக்கியம் எந்த காலத்தை குறிக்கும்.',
        types: [
          {
            name: 'இறந்த காலம்',
            text: `நேற்று கனமழை பெய்தது.
கீதா வீட்டு பாடத்தை முடித்துவிட்டாள்.`
          },
          {
            name: 'நிகழ் காலம்',
            text: `சூரியன் உதிக்கும் திசை கிழக்கு.
நான் தோட்டத்தில் வேலை செய்து கொண்டு இருக்கிறேன்.
அம்மா கடைக்கு சென்றிருக்கிறார்.`
          }
        ]
      }
    },
    {
      label: 'உயர்திணை-அஃறிணை',
      type: 'group',
      id: 'group',
      editable: true,
      data: {
        title: 'உயர்திணை-அஃறிணை வகைப்படுத்துக ',
        types: [
          {
            name: 'உயர்திணை',
            text:
              'அம்மா, உழவன், செல்வன், கரிகாலன் , ஆசிரியர், மருத்துவர், பாட்டி, மக்கள், மாணவன், வியாபாரி, குழந்தை, அமைச்சர், தோழி, சிறுவன், பார்வதி'
          },
          {
            name: 'அஃறிணை',
            text:
              'புத்தகம், அணில், வயல், சூரியன், படகு, பள்ளி, பசு, பழம், மரம், வீடு, நகை, இலை, மேசை, செடி, கப்பல்'
          }
        ]
      }
    },
    {
      id: 'compound-word',
      label: 'சேர்த்து எழுதுக',
      type: 'completeWord',
      CommonData: {
        title: 'சேர்த்து எழுதுக',
        lang: 'ta',
        data: [
          `பெரிய+ஒலி | பேரொலி |  __லி 
    நுழைவு+சீட்டு |நுழைவுச்சீட்டு | நுழை___ட்டு
    தெரு+எங்கும்| தெருவெங்கும் |தெ___கும்
    ஒலி+எழுப்பி |ஒலியெழுப்பி | ஒ__ழுப்பி 
    இன்பம்+தமிழ்| இன்பத்தமிழ் | இன்__தமிழ்
    கருமை+குயில் | கருங்குயில் | கரு_குயில்
    படர்ந்து+இருக்கும்|படர்ந்திருக்கும் | படர்__ருக்கும்
    வண்ணம்+மலர் | வண்ணமலர் | வண்__லர்
    நெல்+கதிர் | நெற்கதிர் | நெ_கதிர்
    தேடி+சென்றன | தேடிச்சென்றன| தேடி__ன்றன`,

          `வேறு+எங்கும்| வேறெங்கும்| வே___ம்
    வான்+உயர்ந்த| வானுயர்ந்த | வா____த 
    நீர்+ஓசை | நீரோசை| நீ_சை
    மலையில்+இருந்து| மலையிலிருந்து| ம_____து
    மானை+கண்டு | மானைக்கண்டு| மா____டு
    நாடு+பற்று | நாட்டுப்பற்று| நா_____று
    விடுதலை+போராட்டம்| விடுதலைப்போராட்டம்| வி______டம்
    செம்மை+மொழி| செம்மொழி| செ__ழி 
    ஆறு+ஆயிரம் |ஆறாயிரம்| ஆ___ம்
    வடக்கு+மொழி| வடமொழி | வ__ழி`,

          `தொழில்+கல்வி |தொழிற்கல்வி|தொ____வி
    இயற்கை+அன்னை | இயற்கையன்னை | இய____னை
    நாடகம்+கல்வி| நாடகக்கல்வி| நா_____வி
    புதுமை+உயிர்| புத்துயிர் | பு___ர்
    நாடு+எல்லாம்| நாடெல்லாம் | நா___ம்
    சரிந்தது+அங்கே| சரிந்ததங்கே |சரி___ங்கே
    வளர்ந்து+ஓங்கும்| வளர்ந்தோங்கும்| வள____கும்
    என்+உயிர்| என்னுயிர்| எ__யிர்
    அறிவு+ஆயுதம்| அறிவாயுதம் | அ___தம் 
    அமர்ந்து + இருந்த| அமர்ந்திருந்த| அ____ருந்த`,

          `கண்+இமைக்கும்| கண்ணிமைக்கும்| கண்____ம்
    சூறை+காற்று| சூறைக்காற்று| சூ___ற்று
    மரம்+பொந்து| மரப்பொந்து| ம___ந்து
    கருமை+கடல் |கருங்கடல்| க____ல்  
    பழைமை+மொழி | பழமொழி| ப__ழி
    நன்மை+வழி | நல்வழி| ந__ழி
    செம்மை+தமிழ்| செந்தமிழ்| செ___ழ்
    கவி+அரங்கம்| கவியரங்கம்| க____கம்
    நன்மை+தமிழ்| நற்றமிழ்| ந___ழ்  
    என்+உயிர்| என்னுயிர்| எ___ர்`,

          `தெற்கு+மேற்கு| தென்மேற்கு| தெ___கு
    தமிழ்+சங்கம் | தமிழ்ச்சங்கம்| தமிழ்___ம்
    தொடக்கம்+விழா| தொடக்கவிழா| தொ___விழா
    மயில்+ஆட்டம் |மயிலாட்டம் |மயி___ம்
    குருவி+கூடு| குருவிக்கூடு| கு___கூடு
    பூ+பந்தல் |பூப்பந்தல் |பூப்___ல்
    வேலை+ஆள் | வேலையாள் | வே__ள்
    சமையல்+கலை| சமையற்கலை| ச___கலை
    அந்த+பெயர் | அந்தப்பெயர் | அந்___யர்
    இந்த+திருடன்| இந்தத்திருடன் |இந்த____ன்`,

          `எந்த+பக்கம் |எந்தப்பக்கம்  |எ_____கம்
    குட்டி+பையன்| குட்டிப்பையன் |கு____யன்
    தீ+பொறி| தீப்பொறி| தீ__றி
    நெசவு+தொழில் |நெசவுத்தொழில் |நெ_____ல் 
    விண் +உலகம்| விண்ணுலகம்| வி____ம்
    மரம்+கிளை |மரக்கிளை |ம___ளை
    வீதி+உலா |வீதியுலா |வீ__லா 
    வழி+எங்கும் |வழியெங்கும் | வ___கும்
    மரம்+பெட்டி |மரப்பெட்டி |மர___டி
    கல்+குவியல்| கற்குவியல்| க___யல்`,

          `நீர்+கோவை |நீர்க்கோவை| நீ___வை
    உயிர்+தோழன் |உயிர்த்தோழன்  |உ____ழன்
    நாடு+பற்று | நாட்டுப்பற்று| நா_____று 
    வரகு+அரிசி| வரகரிசி | வ___சி
    வாக்கு +உரிமை | வாக்குரிமை| வா___மை
    அமுது+என்று| அமுதென்று | அ___று
    சூரியன்+வழிபாடு| சூரியவழிபாடு| சூரி___டு
    வான்+ஒலி |வானொலி |வா_லி 
    கால் +ஆண்டு |காலாண்டு |கா__டு
    தமிழ் +சங்கம்| தமிழ்ச்சங்கம் | த_____கம் `,

          `மலை+கோட்டை |மலைக்கோட்டை  |ம____டை 
    வர+இல்லை |வரவில்லை |வ___லை 
    எலி+பொறி |எலிப்பொறி |எலி__றி 
    முன்+காலம்| முற்காலம் | மு___ம் 
    காலம்+சக்கரம் | காலச்சக்கரம் | கா_____ரம்
    உறுதி+உடன் |உறுதியுடன் |உ___டன்
    அளவு+இல்லாமல் |அளவில்லாமல் |அ____மல்
    இசை+ஒலி | இசையொலி | இசை_லி 
    ஓய்வு+எடுத்தார் |ஓய்வெடுத்தார் | ஓய்____ர்     
    மரம்+பொந்து|மரப்பொந்து|மர___து `,

          `மணி+துளி| மணித்துளி | ம___ளி 
    அறிவியல்+அறிஞர் |அறிவியலறிஞர் |அ_____ஞர் 
    பத்து+இரண்டு | பன்னிரண்டு | பன்_ரண்டு  
    அருகில்+இருந்து| அருகிலிருந்து | அ____ந்து
    பல்+பசை| பற்பசை | ப_பசை
    நாடு+பற்று| நாட்டுப்பற்று | நாட்டு_பற்று 
    ஓடி+ஆடி| ஓடியாடி| ஓடி_டி
    விருந்து+ஓம்பல்| விருந்தோம்பல்| வி____பல்
    கதர்+ஆடை| கதராடை | க__டை
    நன்மை+வழி| நல்வழி|ந__ழி `,

          `மூன்று+கனி | முக்கனி| மு__னி 
    மா+பழம் |மாம்பழம் |மா___ம்
    உழவு+தொழில் |உழவுத்தொழில் |உ____ழில்             
    காலை+பொழுது| காலைப்பொழுது| கா___ழுது
    வகுப்பு+அறை |வகுப்பறை| வ___றை
    அகம்+மகிழ்ந்து |அகமகிழ்ந்து |அ____ந்து
    இனிமை+ஆன| இனிமையான| இ___ன
    வெற்றி+கோப்பை| வெற்றிக்கோப்பை| வெ_____பை
    சீர்+அகம்| சீரகம்| சீ_கம்
    நிறைவு+அடைந்தது| நிறைவடைந்தது| நி____தது`
        ]
      }
    },
    {
      type: 'rightOne',
      label: 'பிரித்து எழுதுக',
      id: 'compoundword-2',
      commonData: {
        title: 'பிரித்து எழுதுக',
        hasHint: true
      },
      data: [
        `அச்செல்வம்=, அந்த+செல்வம் , அ+செல்வம் 
அந்நாடு=, அந்த+நாடு, அ+நாடு
இப்பிணி=, இந்த+பிணி, இ+பிணி
விலங்கினம்=, விலங்கு+இனம், விலங்கு+ஈனம்
வாழிடம்=, வாழ்+இடம், வாழி + இடம்  
அரும்பணி=, அருமை+பணி, அரும்+பணி 
ஓரிடம்=, ஓர் +இடம், ஒரு+இடம்   
பைங்குவளை=, பசுமை+குவளை, பை + குவளை
மின்னஞ்சல்=, மின்+அஞ்சல், மின்+னஞ்சல்
அமுதென்று=, அமுது+என்று, அமு+தென்று`,

        `நாட்குறிப்பு=, நாள்+குறிப்பு, நாட்+குறிப்பு
பன்மொழி=, பல+மொழி, பன்+மொழி
மூவாயிரம்=, மூன்று+ஆயிரம், மூவா+யிரம்
பொற்காசு=, பொன்+காசு, பொற்+காசு
கற்கண்டு=, கல்+கண்டு+ கற்+கண்டு
அரசாணை=, அரசு+ஆணை, அர+சாணை
பேச்சுக்கலை=, பேச்சு+கலை, பேச்சுக்+கலை
மணமென்று=, மணம்+என்று, மணம்+மென்று 
பேரிடர்=, பெரிய+இடர், பெருமை+இடர்
பெரும்பகுதி=, பெரிய+பகுதி, பெரும்+பகுதி`,

        `உடலுழைப்பு=, உடல்+உழைப்பு, உட+லுழைப்பு 
அறிவாற்றல்=, அறிவு+ஆற்றல், அறி+வாற்றல்
பதிவேடு=, பதிவு+ஏடு, பதி+வேடு
யாரவர்=, யார்+அவர், யா+ரவர்
அறனல்ல=, அறன்+அல்ல, அற+னல்ல 
படிப்பறிவு=, படிப்பு+அறிவு, படிப்+பறிவு
நீரமுது=, நீர்+அமுது, நீ+ரமுது
என்றுரைத்தல்=, என்று+உரைத்தல், என்+றுரைத்தல்
சண்டையில்லாமல்=, சண்டை+இல்லாமல், சண்டை+யில்லாமல்
முடிவெடுத்தன=, முடிவு+எடுத்தன, முடி+வெடுத்தன`,

        `உணவகம்=, உணவு+அகம், உணவு+வகம்
இடமின்றி=, இடம்+இன்றி,  இட+மின்றி
வந்திருந்த=, வந்து+இருந்த, வந்தி+ருந்த
ஏனென்றால்=, ஏன்+என்றால், ஏனென்+என்றால்
கண்ணுறங்கு=, கண்+உறங்கு, கண்+ணுறங்கு
ஒன்றையொன்று=, ஒன்றை+ஒன்று, ஒன்றை+யொன்று
ஆளுக்கொரு=, ஆளுக்கு+ஒரு, ஆளு+கொரு
பணியாற்றும்=, பணி +ஆற்றும், பணி+யாற்றும்
செடியில்லாத=, செடி+இல்லாத, செடி+யில்லாத
மலர்த்தொட்டி=, மலர்+தொட்டி, மலர்த்+தொட்டி`,

        `மக்களுண்டு=, மக்கள்+உண்டு, மக்க+ளுண்டு 
தமிழுண்டு=, தமிழ்+உண்டு, தமி+ழுண்டு
புகைப்படம்=, புகை+படம், புகைப்+படம்
மலைத்தொடர்=, மலை+தொடர், மலைத்+தொடர்
மலைக்குகை=, மலை+குகை, மலைக்+குகை
கனியுண்டு=, கனி+உண்டு, கனி+யுண்டு
கையொலி=, கை +ஒலி, கை+யொலி
விளைந்திருந்தன=, விளைந்து+இருந்தன, விளைந்+திருந்தன
நெடுநாள்=, நெடு+நாள், நெடுமை+நாள்
காலைச்சிற்றுண்டி=, காலை+சிற்றுண்டி, காலைச்+சிற்றுண்டி`,

        `எடுத்துவந்தார்=, எடுத்து+வந்தார், எடு+வந்தார் 
காட்டெருமை=, காடு+எருமை,  காட்+டெருமை
பெருஞ்சண்டை=, பெரும்+சண்டை, பெருஞ்+சண்டை
கட்டவிழ்த்து=, கட்டு+அவிழ்த்து,  கட்ட+விழ்த்து
கொள்வதேனோ=, கொள்வது+ஏனோ, கொள்வ+தேனோ  
நோக்கிப்போகவா=, நோக்கி+போகவா,  நோக்கிப்போகவா
கொள்ளலாயினன்=, கொள்ளல்+ஆயினன், கொள்ள+லாயினன் 
தொலைக்காட்சி=, தொலை+காட்சி, தொலைக்காட்சி 
அறுவடைக்காலம்=, அறுவடை+காலம்,  அறு+வடைக்காலம்
நச்சுப்பொருள்=, நச்சு+பொருள், நச்சுப்+பொருள்`,

        `பழச்சாறு =,  பழம்+சாறு, பழ+சாறு 
படக்கதை=,  படம்+கதை,  பட+கதை 
அறவழி=, அறம்+வழி,  அற+வழி
இரத்தமின்றி=,  இரத்தம்+இன்றி, இரத்த+மின்றி
கதராடை=, கதர்+ஆடை,  கத+ராடை
தொண்டர்படை=,  தொண்டர்+படை, தொண்டர்கள்+படை
பழமையான=,  பழமை+ஆன, பழமை+யான
செம்மொழி=, செம்மை+மொழி, செம்+மொழி
கடுஞ்சொல்=, கடுமை+சொல், கடுஞ்+சொல்
நூலாடை=, நூல் +ஆடை, நூல்+லாடை`,

        `தானென்று=, தான் +என்று, தா+னென்று
தன்னாடு=, தன்+நாடு, தன்+னாடு
பல்கலை=, பல+கலை, பல்+கலை
பன்மொழி=, பல+மொழி, பன்+மொழி
பதிவேடு=, பதிவு+ஏடு, பதி+வேடு
கடுங்காவல்=, கடுமை+காவல், கடுங்+காவல்
தளர்ந்திருந்த=, தளர்ந்து+இருந்த, தளர்ந்+திருந்த
இன்னுயிர்=, இனிமை+உயிர், இன்+உயிர்
நல்லொழுக்கம்=, நன்மை+ஒழுக்கம், நல்+ஒழுக்கம்
தோட்டக்கலை=, தோட்டம்+கலை, தோட்ட+கலை`,

        `காலமறிந்து=, காலம்+அறிந்து, கால+மறிந்து
பற்பல=, பல+பல, பற்+பல
முத்தமிழ்=, மூன்று+தமிழ், முத்+தமிழ்
நீராவி =, நீர்+ஆவி,  நீர்+ராவி 
புவியீர்ப்பு =, புவி+ஈர்ப்பு, புவி+யீர்ப்பு
தனக்கென்று =, தனக்கு+என்று, தனக்+கென்று
வீரக்கலை=, வீரம்+கலை, வீரக்+கலை
சிலம்பாட்டம் =, சிலம்பு+ஆட்டம், சிலம்+பாட்டம்
தீயொழுக்கம்=, தீய+ஒழுக்கம், தீமை+ஒழுக்கம்   
மாடித்தோட்டம்=, மாடி+தோட்டம், மாடித்+தோட்டம்`,

        `என்றென்றும்=, என்று+என்றும், என்+றென்றும்
ஐம்பால்=, ஐந்து+பால், ஐம்+பால்
ஒலியெழுப்பி=, ஒலி+எழுப்பி, ஒலி+யெழுப்பி
பதவியேற்று=, பதவி+ஏற்று, பதவி+யேற்று
ஆற்றுநீர்=, ஆறு+நீர், ஆற்றுநீர்
வாழைப்பழம்=, வாழை+பழம்,  வா+பழம் 
மாட்டுவண்டி=, மாடு+வண்டி, மாட்டு+வண்டி
மரக்கிளை=, மரம்+கிளை, மரக்கிளை
அன்புள்ளம்=, அன்பு+உள்ளம், அன்+புள்ளம்
பட்டாடை=, பட்டு+ஆடை, பட்டா+ஆடை`,

        `நீலக்கடல்=, நீலம்+கடல், நீல+கடல்
மரப்பலகை=, மரம்+பலகை, மர+பலகை 
பாடநூல்=, பாடம்+நூல், பாட+நூல்
அச்சுக்கலை=, அச்சு+கலை, அச்சுக்+கலை
தமிழெழுத்து=, தமிழ்+எழுத்து, தமி+ழெழுத்து
கண்ணெழுத்து=, கண்+எழுத்து, கண்+ணெழுத்து
அழகுணர்ச்சி=, அழகு+உணர்ச்சி, அழகு+ணர்ச்சி
ஓலைச்சுவடி=, ஓலை+சுவடி, ஓலைச்+சுவடி
பனித்துளி=, பனி+துளி, பனித்+துளி 
நல்லொழுக்கம்=, நன்மை+ஒழுக்கம், நல்+ஒழுக்கம்`
      ]
    },
    {
      id: 'gender',
      type: 'match',
      label: 'ஆண்பால் - பெண்பால்',
      commonData: {
        title: 'பொருத்துக: ஆண்பால் - பெண்பால்',
        fontSize: '1rem'
      },
      data: [
        `மாணவன், மாணவி 
சிறுவன், சிறுமி 
செல்வன், செல்வி 
தோழன், தோழி 
கிழவன், கிழவி`,

        `தந்தை, தாய் 
தம்பி, தங்கை 
தாத்தா, பாட்டி 
அண்ணன், அண்ணி 
மாமா, மாமி`,
      
        `நாயகன், நாயகி
தலைவன், தலைவி
நடிகன், நடிகை
பாடகர், பாடகி 
அழகன், அழகி`,
       
       `அப்பா , அம்மா 
ராஜா, ராணி 
ஆசிரியர், ஆசிரியை 
சகோதரன், சகோதரி 
குறவன், குறத்தி`,
        
    `மகன், மகள்
மருமகன், மருமகள் 
மணமகன், மணமகள் 
சேவகன், சேவகி 
கணவன், மனைவி`
      ]
    }
  ]
};
