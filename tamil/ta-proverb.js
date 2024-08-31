export default {
  label: 'பழமொழிகள் ',
  id: 'ta-proverb',
  lockAfter: 100,
  lang: 'ta',
  list: [
    {
      id: 'notes',
      type: 'passage',
      label: 'குறிப்புகள்',
      data: {
        title: 'பழமொழிகள்',
        text: `அகத்தின் அழகு முகத்தில் தெரியும்.
        ஆழமறியாமல் காலை இடாதே.
        ஒரு பானைச் சோற்றுக்கு ஒரு சோறு பதம்.
        கடுகு சிறுத்தாலும் காரம் போகுமா?
        கூழுக்கும் ஆசை மீசைக்கும் ஆசை.
        விளையும் பயிர் முளையிலே தெரியும்.
          உப்பிட்டவரை உள்ளளவும் நினை.
          ஊக்கம் ஆக்கத்திற்கு அழகு.
          கரைப்பார் கரைத்தால் கல்லும் கரையும்.
          சேமிக்கும் பழக்கம் சிறப்பான பழக்கம்.
          ஏற்றம் காண எறும்பு போல் உழை.
சுத்தம் சோறு போடும்.
அளவிற்கு மிஞ்சினால் அமிழ்தமும் நஞ்சு. 
யானைக்கும் அடி சறுக்கும். 
காக்கைக்கும் தன் குஞ்சு பொன்குஞ்சு.
தனி மரம் தோப்பாகாது.
நுணலும் தன் வாயால் கெடும்.
சிறு துரும்பும் பல் குத்த உதவும்.
வல்லவனுக்கு புல்லும் ஆயுதம்.
ஐந்திலே வளையாதது ஐம்பதிலே வளையுமா?
ஆறிலுஞ் சாவு நூறிலுஞ் சாவு.
கற்றது கைம்மண்ணளவு கல்லாதது உலகளவு.
எய்தவன் இருக்க அம்பை நோவானேன்?
கண் கெட்ட பின்னர் சூரிய நமஸ்காரம்.
தம்பி உடையான் படைக்கு அஞ்சான்.
ஏட்டுச் சுரைக்காய் கறிக்கு உதவாது.
நெருப்பு இல்லாமல் நீள் புகை எழும்புமா?
ஆவும் தென்னையும் ஐந்து வருடத்தில் பலம் தரும்.
கழுதைக்குத் தெரியுமா கற்பூர வாசனை?
வெள்ளம் வரும் முன் அணைகோல வேண்டும்.
நொறுங்கத் தின்றால் நூறு வயது.
பூனைக்குக் கொண்டாட்டம் எலிக்குத் திண்டாட்டம்.
கூடி வாழ்ந்தால் கோடி நன்மை.
தன் கையே தனக்குதவி.`
      }
    },
    {
      label: 'சரியான படத்தை தேர்வு செய்யவும் ',
      id: 'mcq-leaders',
      type: 'mcq',
      commonData: {
        optionImages: true
      },
      data: [
        {
          questions: [
            {
              qText: 'தன் ______ தனக்குதவி.',
              options: 'wrist, foot, nose, ear'
            },
            {
              qText: 'ஏற்றம் காண ______ போல் உழை.',
              options: 'ant, cat, dog, cockroach'
            },
            {
              qText: '______க்குத் தெரியுமா கற்பூர வாசனை?',
              options: 'donkey, tiger, horse, lion'
            },
            {
              qText: '_______க்கும் அடி சறுக்கும்.',
              options: 'elephant, tiger, snake, hippo'
            },
            {
              qText: '_____க்கும் தன் குஞ்சு பொன்குஞ்சு.',
              options: 'crow, parrot, peacock, dove'
            }
          ]
        },
        {
          questions: [
            {
              qText: '______ வளையாதது ஐம்பதிலே வளையுமா?',
              options: 'five, wrist, stick, quill'
            },
            {
              qText: 'கற்றது கைம்மண்ணளவு கல்லாதது ____களவு.',
              options: 'world, ocean, river, volcano'
            },
            {
              qText: 'எய்தவன் இருக்க ______ நோவானேன்?',
              options: 'arrow, bow, stick, wheel'
            },
            {
              qText: '______ கெட்ட பின்னர் சூரிய நமஸ்காரம்.',
              options: 'eye, nose, ear, hair'
            },
            {
              qText: 'ஏட்டுச் ______ கறிக்கு உதவாது.',
              options: 'bottlegourd, raw-banana, ridgegourd, elephant-yam'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'அகத்தின் அழகு ______ தெரியும்.',
              options: 'face, eye, foot, knee'
            },
            {
              qText: 'ஆழமறியாமல் ______ இடாதே.',
              options: 'foot, wrist, shoulder, forehead'
            },
            {
              qText: 'ஒரு _____ சோற்றுக்கு ஒரு சோறு பதம்.',
              options: 'pot, plate, pan, bowl'
            },
            {
              qText: '______ சிறுத்தாலும் காரம் போகுமா?',
              options: 'mustard, rice, pattani, pepper'
            },
            {
              qText: 'கூழுக்கும் ஆசை _____க்கும் ஆசை.',
              options: 'mustache, beard, mouth, nose'
            }
          ]
        }
      ]
    },
    {
      id: 'match',
      type: 'match',
      label: 'பழமொழிகள் ',
      lockAfter: 2,
      commonData: {
        title: 'பழமொழிகள்',
        fontSize: '1rem'
      },
      data: [
        `விளையும் பயிர், முளையிலே தெரியும்
உப்பிட்டவரை, உள்ளளவும் நினை
ஊக்கம், ஆக்கத்திற்கு அழகு 
கரைப்பார் கரைத்தால், கல்லும் கரையும்
சேமிக்கும் பழக்கம், சிறப்பான பழக்கம்`,

        `ஏற்றம் காண, எறும்பு போல் உழை 
சுத்தம், சோறு போடும் 
அளவிற்கு மிஞ்சினால், அமிழ்தமும் நஞ்சு 
யானைக்கும், அடி சறுக்கும்  
காக்கைக்கும், தன் குஞ்சு பொன்குஞ்சு`,

        `தனி மரம், தோப்பாகாது
நுணலும் தன், வாயால் கெடும்
சிறு துரும்பும், பல் குத்த உதவும்
வல்லவனுக்கு, புல்லும் ஆயுதம்
ஐந்திலே வளையாதது, ஐம்பதிலே வளையுமா?`,

        `ஆறிலுஞ் சாவு, நூறிலுஞ் சாவு
கற்றது கைம்மண்ணளவு, கல்லாதது உலகளவு
எய்தவன் இருக்க, அம்பை நோவானேன்?
கண் கெட்ட பின்னர், சூரிய நமஸ்காரம்
தம்பி உடையான், படைக்கு அஞ்சான்`,

        `ஏட்டுச் சுரைக்காய், கறிக்கு உதவாது
நெருப்பு இல்லாமல், நீள் புகை எழும்புமா?
ஆவும் தென்னையும், ஐந்து வருடத்தில் பலம் தரும்
கழுதைக்குத் தெரியுமா, கற்பூர வாசனை?
வெள்ளம் வரும் முன், அணைகோல வேண்டும்`,

        `நொறுங்கத் தின்றால், நூறு வயது
பூனைக்குக் கொண்டாட்டம், எலிக்குத் திண்டாட்டம்
கூழுக்கும் ஆசை, மீசைக்கும் ஆசை
கூடி வாழ்ந்தால், கோடி நன்மை
தன் கையே, தனக்குதவி`
      ]
    },
    {
      label: 'பழமொழிகள் பூர்த்தி செய்க',
      type: 'matchByDragDrop',
      id: 'proverbs1',
      commonData: {
        title: 'பொருத்தமான விடையை கண்டுபிடி',
        fontSize: '1rem',
        dashWidth: 60
      },
      data: [
        `ஏட்டுச் சுரைக்காய் *கறிக்கு* உதவாது.
கூடி வாழ்ந்தால் *கோடி* நன்மை.
சிறு *துரும்பும்* பல் குத்த உதவும்.
ஏற்றம் காண *எறும்பு* போல் உழை.
விளையும் *பயிர்* முளையிலே தெரியும்.`,

        `உப்பிட்டவரை உள்ளளவும் *நினை*.
*ஊக்கம்* ஆக்கத்திற்கு அழகு. 
கரைப்பார் கரைத்தால் *கல்லும்* கரையும்.
சேமிக்கும் *பழக்கம்* சிறப்பான பழக்கம்.
சுத்தம் *சோறு* போடும்.`,

        `*அளவிற்கு* மிஞ்சினால் அமிழ்தமும் நஞ்சு. 
யானைக்கும் *அடி* சறுக்கும்.  
காக்கைக்கும் தன் *குஞ்சு* பொன்குஞ்சு.
தனி *மரம்* தோப்பாகாது.
நுணலும் தன் *வாயால்* கெடும்.`,

        `வல்லவனுக்கு *புல்லும்* ஆயுதம்.
*ஐந்திலே* வளையாதது ஐம்பதிலே வளையுமா?
ஆறிலுஞ் *சாவு* நூறிலுஞ் சாவு.
கற்றது கைம்மண்ணளவு *கல்லாதது* உலகளவு.
எய்தவன் இருக்க *அம்பை* நோவானேன்?`,

        `கண் கெட்ட *பின்னர்* சூரிய நமஸ்காரம்.
தம்பி *உடையான்* படைக்கு அஞ்சான்.
நெருப்பு இல்லாமல் நீள் *புகை* எழும்புமா?
ஆவும் *தென்னையும்* ஐந்து வருடத்தில் பலம் தரும்.
கழுதைக்குத் *தெரியுமா* கற்பூர வாசனை?`,

        `வெள்ளம் வரும் முன் *அணைகோல* வேண்டும்.
நொறுங்கத் *தின்றால்* நூறு வயது.
பூனைக்குக் *கொண்டாட்டம்* எலிக்குத் திண்டாட்டம்.
கூழுக்கும் *ஆசை* மீசைக்கும் ஆசை.
தன் *கையே* தனக்குதவி.`
      ]
    }
  ]
};
