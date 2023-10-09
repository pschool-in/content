export default {
  label: 'எழுத்துக்கூட்டி படிக்கவும்  - 2',
  id: 'ta-read-words-2',
  lockAfter: 4,
  list: [
    {
      label: 'மக்கள்',
      type: 'phonics',
      id: 'people',
      data: {
        type: 'words',
        wordsAudio: 'ta/ta-people.mp3',
        audioOffset: 0,
        lang: 'ta',
        text: 'சிறுவன், சிறுமி, ஆண், பெண், குழந்தை, அம்மா, அப்பா, தாத்தா, பாட்டி'
      }
    },
    {
      label: 'வீடு',
      type: 'phonics',
      id: 'house',
      commonData: {
        type: 'words',
        lang: 'ta',
        wordsAudio: 'ta/ta-house.mp3'
      },
      data: [
        {
          text: 'வீடு, பொம்மை, மேசை, மெத்தை, பாய், குவளை, பூட்டு, சாவி, வலை, கயிறு',
          audioOffset: 0
        },
        {
          text: 'குடை, கதவு, துடைப்பான், மின்விசிறி, பந்து, கரடிபொம்மை', //கூஜா,
          audioOffset: 20
        },
        {
          text: 'மின்விளக்கு, மெழுகுவர்த்தி, நாற்காலி, அலமாரி, மூக்குக்கண்ணாடி, கடிகாரம், கைக்கடிகாரம், பூந்தொட்டி, துடைப்பம்', // ஜன்னல்
          audioOffset: 34
        },
        {
          text: 'சோபா, கூடை, வாளி, கம்பளம், கால்மிதி, கைத்தடி, கழிப்பறை',
          audioOffset: 54
        }
      ]
    },
    {
      label: 'ஆடை',
      type: 'phonics',
      id: 'dress',
      commonData: {
        type: 'words',
        lang: 'ta',
        wordsAudio: 'ta/ta-dress.mp3'
      },
      data: [
        {
          text: 'ஆடை, வேட்டி, சேலை, சட்டை, கால்சட்டை, துண்டு, கைக்குட்டை, தொப்பி, சீருடை, இடுப்புவார்',
          audioOffset: 0
        },
        {
          text: 'காலணி, காலுறை, கையுறை,  கொலுசு, வளையல், சங்கிலி',
          audioOffset: 20
        },
        {
          text: 'காதணி, சலங்கை, சீப்பு, கண்ணாடி, குங்குமம் ',
          audioOffset: 32
        }
      ]
    },
    {
      label: 'பள்ளிக்கூடம்',
      type: 'phonics',
      id: 'school',
      commonData: {
        type: 'words',
        lang: 'ta',
        wordsAudio: 'ta/ta-school.mp3'
      },
      data: [
        {
          text: 'பேனா, பென்சில், அளவுகோல், கரும்பலகை, புத்தகம், மை, பூகோளம், காந்தம், அழிப்பான், பசை',
          audioOffset: 0
        },
        {
          text: 'அடையாளஅட்டை, கத்தரிக்கோல், கூர்மையாக்கி, கணிப்பான், முத்திரை, புத்தகப்பை, தண்ணீர் குடுவை, குறிப்பேடு',
          audioOffset: 20
        }
      ]
    },
    {
      label: 'சமையலறை',
      type: 'phonics',
      id: 'kitchen',
      commonData: {
        type: 'words',
        lang: 'ta',
        wordsAudio: 'ta/ta-kitchen.mp3'
      },
      data: [
        {
          text: 'கத்தி, கிண்ணம், வாணலி, பானை, கோப்பை, கரண்டி, தட்டு, மூடி, அடுப்பு, அரிவாள்',
          audioOffset: 0
        },
        {
          text: 'ஆட்டுக்கல், அம்மி, தோசைக்கல், குடம், செம்பு, குழாய்',
          audioOffset: 24
        }
      ]
    },
    {
      label: 'உணவுப் பொருட்கள்',
      type: 'phonics',
      id: 'eatables',
      commonData: {
        type: 'words',
        lang: 'ta',
        wordsAudio: 'ta/ta-eatables.mp3'
      },
      data: [
        {
          text: 'இட்லி, தோசை, இடியாப்பம், புட்டு, அடை, ஆப்பம், சப்பாத்தி, பூரி, சாம்பார், ரசம்',
          audioOffset: 0
        },
        {
          text: 'வறுவல், கூட்டு, பொரியல், அப்பளம், பாயாசம், வடை, லட்டு, முறுக்கு, அதிரசம்', //பஜ்ஜி
          audioOffset: 20
        },
        {
          text: 'பொங்கல், பரோட்டா, குளிர்பானம், பனிக்கூழ், பீட்சா, குச்சி மிட்டாய், இனிப்புகள், ரொட்டி, சூப், பழச்சாறு',
          audioOffset: 40
        }
      ]
    },
    {
      label: 'செயல்கள்',
      type: 'phonics',
      id: 'actions',
      commonData: {
        type: 'words',
        lang: 'ta',
        wordsAudio: 'ta/ta-actions.mp3'
      },
      data: [
        {
          text: 'குடி, சாப்பிடு, குனி, ஏறு, குதி, மண்டியிடு, இழு, தள்ளு, பாடு, நடனமாடு',
          audioOffset: 0
        },
        {
          text: ' ஓடு, நடைபோடு, உட்கார், பிடி, கைமாற்று, நீந்து, ஊஞ்சல், எறி, எடுத்துச்செல், தூக்குதல்',
          audioOffset: 20
        },
        {
          text: 'கொண்டாட்டம், துடைத்தல், சவாரி, பெருக்கு, இருமல், சுகமின்மை, தும்மல், கொட்டாவி, தூக்கம்',
          audioOffset: 40
        }
      ]
    }
  ]
};
