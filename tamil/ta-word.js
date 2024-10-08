export default {
  label: 'வார்த்தை',
  id: 'ta-word',
  img: 'word',
  lockAfter: 100,
  list: [
    {
      label: 'எழுத்துக்கூட்டி படிக்கவும்',
      type: 'phonics',
      id: 'spell-words',
      commonData: {
        type: 'words',
        lang: 'ta',
        wordsAudio: 'ta/tamilWords.mp3'
      },
      data: [
        {
          text: 'அம்மா, அம்மி, அன்னம், ஆடு, ஆந்தை, ஆமை, இலை, இஞ்சி, இதயம், ஈட்டி',
          audioOffset: 0
        },
        {
          text: 'உரல், உதடு, உடுக்கை, ஊதல், ஊசி, ஊஞ்சல், எலி,  எறும்பு,  எருமை, ஏணி',
          audioOffset: 20
        },
        {
          text: 'ஏழு, ஐந்து , ஐவர், ஒட்டகம், ஒன்று, ஒன்பது, ஓடம், ஓநாய், ஓட்டம்',
          audioOffset: 40
        }
      ]
    },
    {
      type: 'classifySentence',
      label: 'படம் சொல்லும் சொல்',
      id: 'tense',
      commonData: {
        title: 'சரியான சொல்லைத் தேர்வு செய்க.',
        variableOptions: true,
        imageType: 'stockimg'
      },
      data: [
        `house | வீடு , விடு 
ship | கப்பல், காப்பல்
man | ஆண், அண்
woman | பெண், பென் 
cloud | மேகம் , மெகம்
tortoise | ஆமை , அமை 
mosquito | கொசு, கெசு 
ginger | இஞ்சி, இங்சி
lotus | தாமரை , தமரை  
squirrel | அணில் , அனில் `,

        `rooster | சேவல் , செவல் 
koel | குயில் , கூயில் 
tiger | புலி, புளி 
rat | எலி , எளி 
turmeric | மஞ்சள் , மஞ்சல் 
lizard | பல்லி, பள்ளி 
frog | தவளை, தவலை 
stone | கல் , கள் 
bull | காளை, காலை 
crocodile | முதலை, முதளை`,

        `tree | மரம் , மறம் 
fox | நரி , நறி 
waterfall |அருவி , அறிவி 
sleep | துாக்கம், துக்கம்
veenai | வீணை, வீனை 
clown | கோமாளி, கோமாலி 
teacher | ஆசிரியர், ஆசிறியர் 
farmer | விவசாயி, விவசாஇ 
kolam | கோலம், கோளம் 
king | அரசன், அறசன் `
      ]
    },
    {
      id: '2-letter-words',
      type: 'sequence',
      label: 'ஈரெழுத்து சொற்கள்',
      lockAfter: 2,
      commonData: {
        title: 'எழுத்துக்களை சேர்த்து வார்த்தை அமைக்கவும்.',
        lang: 'ta'
      },
      data: [
        'அது,  ஆடு, இலை, ஏன், யார், பல், வடை, நெல், சொல், நிலா',
        'ஆணி, எது, பால், நடை, மதி, பாடு, கரை, காலை, நில், படி',
        'இது, தடை, மாலை, மாடு, வலி, மண், குதி, நீர், கிளை, படை',
        'காடு, சூடு, மான், விழா, செல், வழி, மழை, மடி',
        'மலை, மேல், கீழ், மாடி, இடி, நதி, கறை, கலை, புறா, கிளி',
        `தூண், காளை, கூலி, கோழி, கூழ், பாதை, காசு, தேன், புலி`,
        `நாளை, பானை, நூறு, ஊது, கோடு, கொடு, சுவை, தோல், தோள், தெரு`
      ]
    },
    {
      id: '3-letter-words',
      type: 'sequence',
      label: 'மூன்றெழுத்து சொற்கள்',
      lockAfter: 2,
      commonData: {
        title: 'எழுத்துக்களை சேர்த்து வார்த்தை அமைக்கவும்.',
        lang: 'ta'
      },
      data: [
        'கதவு, கோலம், மாதம், கிழமை, கவிதை, மூலிகை, தொலைவு, தாமரை, கரடி, இட்லி',
        'மரம், மனம், குளம், நீளம், வளம், ஈரம், பள்ளி, பல்லி, நகம், நாகம்',
        'கழுகு, நீலம், பாம்பு, முகம், பரிசு, உப்பு, குருவி, பிறகு, பணம், பாசம்',
        'தமிழ், கஞ்சி, இஞ்சி, அம்மா, தபால், தவறு, நத்தை, பச்சை, நாக்கு, தட்டு',
        'படம், பானம், உள்ளே, வெளியே, முத்து, தகுதி, தொகுதி, உரம், உண்மை, குயில்',

        'மல்லி, வாத்து, தளிர், அல்லி , ஆந்தை, படகு,  தவளை, நண்டு, மயில், குதிரை',
        'பன்றி, காரட், மாதுளை, பாம்பு, அணில், ஈசல், காகம், கரடி, பூண்டு, முதலை',
        'வண்டி, வண்டு, முட்டை, மூட்டை, முயல், வயல், பயிர், உயிர், தயிர், கயிறு',
        'சோளம், காலம், தாளம், மணல், கழுகு,  கோபம், பூச்சி , ஐந்து, காற்று',
        'கிணறு, குளிர், குச்சி, பூட்டு, பூண்டு, இறகு, கடல்,  இரவு, பகல், இருள்',

        'இளமை, முதுமை, சங்கு, நுங்கு, விரல், குறள், விறகு, பகுதி, பிறகு, கல்வி'
      ]
    },
    {
      id: '3-letter-words-2',
      type: 'sequence',
      label: 'மூன்றெழுத்து சொற்கள் - 2',
      lockAfter: 2,
      commonData: {
        title: 'எழுத்துக்களை சேர்த்து வார்த்தை அமைக்கவும்.',
        lang: 'ta'
      },
      data: [
        'குரல், சிறகு, குண்டு, மூன்று, பலன், நன்றி, நிஜம், கணினி , மிளகு, அரிசி',
        'கொக்கு, இடம்,  கவிஞர்,  சட்டை, சந்தை, சினம், கடுகு, உடல், வயது, பெருமை',
        'வெற்றி, பதம்,  பாடல், சாதனை,  அன்பு, அழகு, பழம், விருது, எழில், ஆவல்',
        'ஆழம், பாதம், தோல்வி, புகழ், கத்தி, புத்தி, பந்து, தாழ்வு, தேசம், பயம்',
        'சிறுமி, கேள்வி, பதில், நன்றி, நிழல், தொப்பி, மொட்டு, தோப்பு, மேளம், பொருள்',

        'வாரிசு, திறமை, குணம்,  தீர்வு, பூந்தி, தொழில், வரவு, நேசம், நேர்மை, பாரதி',
        'மயில், மேகம், தேர்வு, சூடம், பலம், சண்டை, மூக்கு, பெயர், தனிமை, குப்பை',
        'அச்சு, பொட்டு, பக்தி, கூண்டு, பாட்டி, தாத்தா, தம்பி, அக்கா, காயம், அண்ணி',
        'தையல், வானம், வாசல், தூரம், செயல், சாட்டை, கட்சி, சாயம், தங்கை,  தண்டு',
        'என்ன, மனைவி, பொறுமை, கனவு, தெளிவு, தென்னை, செலவு, பார்வை, வேட்டை'
      ]
    },
    {
      id: '4-letter-words',
      type: 'sequence',
      label: 'நான்கு எழுத்து  சொற்கள்',
      lockAfter: 2,
      commonData: {
        title: 'எழுத்துக்களை சேர்த்து வார்த்தை அமைக்கவும்.',
        lang: 'ta'
      },
      data: [
        'விண்வெளி, புலவர்,  மனிதன், அச்சம், நிலையம், எண்ணம், கிண்ணம், கணவன், அண்ணன், மருந்து',
        'பின்னல், பின்னால், கணிதம், ஆதாரம், விளக்கு, மடிப்பு, வறட்சி, துடுப்பு, ஆப்பிள், கிழங்கு',
        'தந்தம், சங்கம், தங்கம், பூரிப்பு, நெய்தல்,  சிரிப்பு, உட்கார், ஞாபகம், பஞ்சம், முன்னால்',
        'வட்டம், ஊஞ்சல், எறும்பு, பட்டம், தூக்கம், இறைவன், கடவுள், முயற்சி, பயிற்சி, கருத்து',

        'நித்திரை, கண்ணீர்,  திராட்சை, சிங்கம், குரங்கு, சாமந்தி, தட்டான், எறும்பு, பேருந்து, கப்பல்',
        'தக்காளி, கச்சேரி, பயணம், சிறப்பு, தோட்டம், களைப்பு, வானவில், உயரம், முடியும், நகரம்',
        'உள்ளம், முடியாது, இருட்டு, இந்தியா, வளாகம், புரியாது, வடகம், சாப்பாடு, பதிவேடு, எழுத்து',
        'மின்னல், விமானம், அன்னாசி,  துடிப்பு, விவாதம்  பப்பாளி, மல்லிகை, யாத்திரை, வரைமுறை, காகிதம்',
        'விருந்து, தேங்காய், அனுமதி, இணைப்பு, கிராமம், வண்ணம், நீர்யானை, உலகம், உருவம், சிறுவன்',

        'வியாபாரி, ஆரஞ்சு, குயவர், இன்னல், படிப்பு, புரட்சி, தொகுப்பு, பருத்தி, தொட்டில், சொந்தம்',
        'சத்தம், நெருப்பு, மஞ்சள், வடிவம், வாழ்த்து, நிமிடம், வாகனம், சிலந்தி, இதயம், எப்படி, உங்கள்'
      ]
    },
    {
      id: '5-letter-words',
      type: 'sequence',
      label: 'ஐந்து எழுத்து  சொற்கள்',
      commonData: {
        title: 'எழுத்துக்களை சேர்த்து வார்த்தை அமைக்கவும்.',
        lang: 'ta'
      },
      data: [
        'திருமணம், பதக்கம், கூழாங்கல், மத்தளம், ஆலமரம், நாள்கட்டி, கருவிகள், மீன்தொட்டி, உண்டியல், விவசாயம்',
        'பறவைகள், கட்டிடம், நம்பிக்கை, மதிப்பெண், மகிழ்ச்சி, உணர்ச்சி, புத்தகம், வில்வித்தை, விளையாட்டு, பழக்கம்',

        'குடும்பம், சம்பளம், வணக்கம், அறிவியல், சப்பாத்தி, வள்ளுவர், முள்ளங்கி, நிறுத்தம், கண்டுபிடி, கேழ்வரகு',
        'தர்பூசணி, மாம்பழம், பலாப்பழம், மகிழுந்து, மிதிவண்டி, வெங்காயம், ஒட்டகம், வாழைப்பழம், கணிப்பொறி, தமிழ்நாடு'
      ]
    },
    {
      id: 'jumbled',
      type: 'sequence',
      label: 'சொல் தேடல்',
      commonData: {
        title: 'எழுத்துக்களை சேர்த்து வார்த்தை அமைக்கவும்.',
        lang: 'ta'
      },
      data: [
        'ஞாயிறு, திங்கள், செவ்வாய், புதன், வியாழன், வெள்ளி',
        'சித்திரை, வைகாசி, ஆனி, ஆடி, ஆவணி, புரட்டாசி, ஐப்பசி, கார்த்திகை, மார்கழி, மாசி, பங்குனி',
        'ஜனவரி, பிப்ரவரி, மார்ச், ஏப்ரல், ஆகஸ்ட், செப்டம்பர், அக்டோபர், நவம்பர், டிசம்பர்',
        'செய்திகள், தொலைதூரம், வெளிச்சம், கரிகாலன், வெந்தயம், சமையலறை, தொழிற்சாலை, பொழுதுபோக்கு, பிறந்தநாள், சிட்டுக்குருவி',
        'விலங்குகள், தின்பண்டம், அஞ்சலகம்,  பகுத்தறிவு, குளிர்பானம், கலாச்சாரம், மடிக்கணினி, போர்க்களம், மேகமூட்டம், பள்ளிக்கூடம்',
        'கொய்யாப்பழம், சூரியகாந்தி, செம்பருத்தி, தொடர்வண்டி, உருளைக்கிழங்கு, முட்டைகோசு, வெள்ளரிக்காய், காண்டாமிருகம்,வரிக்குதிரை, திமிங்கிலம்'
      ]
    },
    {
      id: 'meanings',
      type: 'match',
      label: 'பொருத்துக - பொருள் தருக ',
      commonData: {
        title: 'பொருத்துக -  பொருள் தருக  ',
        fontSize: '1rem'
      },
      data: [
        `அறிவு, ஞானம் 
அங்கம், உறுப்பு 
அங்கி, சட்டை 
அசதி, சோர்வு
அறை, வீட்டின் பகுதி `,

        `கலம், கருவி 
களம், இடம்
வலம், வலது 
வளம், வளமை
சந்திரன், நிலா`,

        `பலம், வலிமை
பழம், கனி
அறம், தர்மம்
அரம், ரம்பம் 
அருகில், பக்கத்தில் `,

        `பரி, குதிரை
பறி, பூ பறித்தல்
கழை, கரும்பு 
ஒளி, வெளிச்சம் 
ஒலி, சத்தம் `,

        `அகிலம், உலகம் 
அதிகம், மிகுதி 
ஆணை, கட்டளை 
ஆயுதம், கருவி 
ஆவல், விருப்பம் `,

        `ஆனந்தம், மகிழ்ச்சி 
இரவல், கடன் 
இன்னல், துன்பம் 
எழில், அழகு 
கலகம், சண்டை `,

        `சன்மானம், வெகுமதி 
சாதனை, வெற்றி 
சிந்தை, எண்ணம் 
செல்வந்தர், பணக்காரர் 
திடம், உறுதி `,

        `துயர், துன்பம் 
நங்கை, பெண் 
பஞ்சம், வறட்சி 
பாதிப்பு, விளைவு 
பார், உலகம் `,

        `புரவி, குதிரை
பேழை , பெட்டி 
மாரி, மழை 
மைதானம், திடல் 
மேனி, உடல் `,

        `வியாபாரி, வணிகர் 
விவசாயி, உழவர் 
வையம், உலகம் 
தந்திரம், சூழ்ச்சி 
துளிர், இளம் இலை `,

        `சுத்தம், தூய்மை 
தைரியம், துணிவு 
தொலைவு, தூரம் 
நித்தம், நாள்தோறும்
பரம்பரை, தலைமுறை `,

        `உற்சாகம், ஊக்கம் 
கதிரவன், சூரியன் 
பொதி, மூட்டை 
வன்சொல், கடுஞ்சொல் 
மெய், உண்மை `,

        `வேளை, பொழுது  
பொறை, அடக்கம் 
போற்றுதல், வாழ்த்துதல் 
குனிந்து, வளைந்து 
கோபம், சினம் 
சவாரி,பயணம் 
சிந்தை, மனம் `
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
        `இளமை, முதுமை  
பிறப்பு,  இறப்பு
ஜனனம், மரணம் 
பகல்,  இரவு  
பலம், பலவீனம்`,

        `காய், கனி 
விழுந்து, எழுந்து 
அரிது, எளிது 
அழுகை, சிரிப்பு 
நிறை, குறை`,

        `அதிகம், குறைவு
குனிந்து, நிமிர்ந்து
ஏறு, இறங்கு
இடது, வலது
கீழ், மேல்`,

        `வா, போ
வடக்கு, தெற்கு 
வரவு, செலவு 
வினா, விடை 
குழப்பம், தெளிவு`,

        `பெரிய , சிறிய
வெற்றி, தோல்வி  
ஆம், இல்லை
பகை , நட்பு
இங்கே, அங்கே`,

        `இரவு, பகல்
இருள், ஒளி
இழு, தள்ளு
சேர்த்து, பிரித்து  
மண்ணில், விண்ணில்`,

        `உயர்த்தி, தாழ்த்தி  
உள்ளே, வெளியே
பழைமை , புதுமை
நன்மைகள், தீமைகள்
இயற்கை, செயற்கை`,

        `ஆதி, அந்தம் 
ஈரமான, காய்ந்த
உள்நாடு, அயல்நாடு
தோற்றம், மறைவு
உண்மை, பொய்`,

        `இனிப்பு, கசப்பு
இன்பம், துன்பம்
ஏற்றம், இறக்கம்
முடிவு, தொடக்கம் 
அருகில், தொலைவில்`,

        `அறிவாளி, முட்டாள்
அனுமதி, மறு
எடு, கொடு
எளிய, கடினம்
ஏற்றுமதி, இறக்குமதி`,

        `ஏழை, செல்வன்
ஒருமை, பன்மை
ஒற்றுமை, வேற்றுமை
கடந்தகாலம், எதிர்காலம்
கருப்பு, வெள்ளை`,

        `காலை, மாலை
கிழக்கு, மேற்கு
குளிர், வெப்பம்
கூட்டல், கழித்தல்
கேள்வி, பதில்`,

        `சிற்றிலக்கியம், பேரிலக்கியம்
பகட்டு, எளிமை
நீதி, அநீதி
நிறை, குறை
முதுகலை, இளங்கலை`,

        `நல்வினை, தீவினை
நஞ்சு, அமிழ்தம்
சோம்பல், சுறுசுறுப்பு
இணைந்து , பிரிந்து
ஆண்மை, பெண்மை`,

        `கலைத்தல், சேர்த்தல்
அமைதி, ஆரவாரம்
சத்ரு, நண்பன்
சுருக்கம், விரிவு
மேடு , பள்ளம்`
      ]
    },
    {
      id: 'sorting',
      label: 'கிழமை - வரிசை படுத்துக ',
      type: 'sorting',
      data: {
        title: 'கிழமை: வரிசை படுத்துக',
        text: 'ஞாயிறு, திங்கள், செவ்வாய், புதன், வியாழன், வெள்ளி, சனி'
      }
    },
    {
      id: 'months',
      label: 'தமிழ் மாதங்கள் - வரிசை படுத்துக',
      type: 'sorting',
      data: {
        title: 'தமிழ் மாதங்கள்: வரிசை படுத்துக',
        text: 'சித்திரை, வைகாசி, ஆனி, ஆடி, ஆவணி, புரட்டாசி, ஐப்பசி, கார்த்திகை, மார்கழி, தை, மாசி, பங்குனி'
      }
    },
    {
      id: 'sort-2',
      label: 'வரிசை படுத்துக ',
      type: 'sorting',
      commonData: {
        title: 'எது முன்னே? எது பின்னே? அகர வரிசைப்படுத்துக'
      },
      data: [
        `அன்பு,  ஆறு,  இளமை,  ஈட்டி,  உண்டு, ஊறுகாய், எருது, ஏடு, ஐவர், ஒருமை, ஓடு`,
        `கண், காலை, கீதா, கூடை, கேள்வி, கைமணம், கொக்கு, கோலம்`,
        `சரிகை, சித்தி, சீரகம், சூரியன், செவ்வந்தி,   சேவல், சோளம், சௌகரியம்`,
        `நரி, நாரை , நிலம், நுரை, நூல், நேரம், நொண்டி, நோன்பு`,
        `படை, பாடம், பிண்ணாக்கு, பீரங்கி, புத்தகம், பூமி, பெட்டி, பேச்சு, பைந்தமிழ், பொத்தான், போர்வை, பௌத்தம்`,
        `மல்லிகை, மின்னல், மீன், முள்ளங்கி , மூடி, மேளம், மொட்டு, மோதிரம், மௌனம்`
      ]
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
      label: 'பொருத்துக-சின்னங்கள்',
      commonData: {
        title: 'தமிழ்நாடு',
        fontSize: '1rem'
      },
      data: [
        `சின்னம், திருவில்லிப்புத்தூர் கோவில் கோபுரம் 
பறவை, மரகதப்புறா 
பாடல், தமிழ்த்தாய் வாழ்த்து 
மலர்,  செங்காந்தள்`,

        `நடனம், பரதநாட்டியம் 
மரம், பனை 
விலங்கு, வரையாடு 
விளையாட்டு, கபடி`
      ]
    },
    {
      id: 'match-symbols',
      type: 'match',
      label: 'பொருத்துக-தேசிய சின்னங்கள்',
      commonData: {
        title: 'இந்தியா',
        fontSize: '1rem'
      },
      data: [
        ` சின்னம், அசோகத் தூண் 
பறவை, மயில் 
மலர், தாமரை 
விலங்கு, புலி 
விளையாட்டு,  ஹாக்கி`,

        `பாடல்,  ஜன கண மன
மொழி, ஹிந்தி 
மரம், ஆலமரம்
நதி, கங்கை
கனி, மாம்பழம்`
      ]
    },
    {
      id: 'match-young',
      type: 'match',
      label: 'பறவை,விலங்குகளின் இளமைப் பெயர்கள்',
      commonData: {
        title: 'பறவை, விலங்குகளின் இளமைப் பெயர்கள்',
        fontSize: '1rem'
      },
      data: [
        `கோழி, குஞ்சு     
நாய், குட்டி
புலி, பறழ்        
அணில், பிள்ளை     
யானை, கன்று `,

        `கிளி, குஞ்சு 
சிங்கம், குருளை     
கீரிப்பிள்ளை , பிள்ளை     
பசு,கன்று`
      ]
    },
    {
      id: 'match-place',
      type: 'match',
      label: 'பொருத்துக-வாழிடம் ',
      commonData: {
        title: 'பொருத்துக-வாழிடம் ',
        fontSize: '1rem'
      },
      data: [
        `கரையான், புற்று 
மாடு, தொழுவம்  
ஆடு, பட்டி 
கோழி, பண்ணை 
சிலந்தி, வலை`,

        `குதிரை,  லாயம்  
குருவி, கூடு 
யானை, கூடம்
முயல் , பொந்து 
தேனீ , தேன் கூடு`,

        `மீன், நீர் 
சிங்கம், குகை  
குரங்கு, மரம் 
எறும்பு, புற்று
பன்றி, கொட்டில்`
      ]
    },

    {
      id: 'match-general',
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
        title: 'மனிதர்களும் தொழில்களும் ',
        fontSize: '1rem',
        dashWidth: 60
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
ஊர்திகளை ஓட்டுபவர் = *ஓட்டுநர்*`,

        `பொன்வேலை செய்பவர் = *பொற்கொல்லர்*
மீன் பிடிப்பவர் = *மீனவர்*
வேட்டையாடுபவர் = *வேடர்*
நாடகங்களில் நடிப்பவர் = *நடிகர்* 
கதை, கட்டுரை எழுதுபவர் = *எழுத்தாளர்*`,

        `வழக்குகளை எடுத்துரைப்பவர் = *வழக்குரைஞர்*   
நீதி வழங்குபவர் = *நீதிபதி* 
கடிதங்களை சேர்ப்பவர் = *அஞ்சலகர்* 
மருத்துவம் பார்ப்பவர் = *மருத்துவர்*
பாடல்களை பாடுபவர் = *பாடகர்* `
      ]
    },

    {
      id: 'birdsound',
      label: 'பறவைகளின் ஒலிகள்',
      type: 'matchByDragDrop',
      commonData: {
        title: 'பறவைகளின் ஒலிகள் ',
        fontSize: '1rem',
        dashWidth: 60
      },
      data: [
        `ஆந்தை = *அலறும்*
காகம் = *கரையும்*
சேவல் = *கூவும்*
குருவி = *கீச்சிடும்*
வாத்து = *கத்தும்*
கோழி = *கொக்கரிக்கும்*`,

        `புறா = *குனுகும்*
மயில் = *அகவும்*
கிளி = *பேசும்*
குயில் = *கூவும்*
வானம்பாடி = *பாடும்*`
      ]
    }
  ]
};
