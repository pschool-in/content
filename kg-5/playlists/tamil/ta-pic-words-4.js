export default {
  label: 'எழுதுக: நம் வீடு',
  id: 'ta-pic-words-4',
  img: 'sound',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'வார்த்தைகள்',
      data: {
        title: 'வார்த்தைகள்',
        text: [
          `# நம் வீடு`,
          {
            type: 'sitewords',
            text:
              'குழந்தை,  சிறுவன்,  சிறுமி,  ஆண்,  பெண்,  தாத்தா,  பாட்டி, வாளி,  பந்து,  வீடு,  மேசை,  கட்டில்,  நாற்காலி,  குடை,  கதவு,  ஜன்னல்,  கழிப்பறை,  மெழுகுவர்த்தி,  மூக்கு கண்ணாடி,  கடிகாரம்,  கைக்கடிகாரம்,  பூந்தொட்டி,  துடைப்பம், அலமாரி,  குளிரூட்டி, தலையணை,  கூடை,  குப்பை தொட்டி,  கைப்பை',
            width: 115
          },
          `# ஆடைகள்`,
          {
            type: 'sitewords',
            text:
              'வேட்டி,  சேலை,  சட்டை,  தொப்பி,  கால்சட்டை,  காலணி, காலுறை,  மேலங்கி',
            width: 115
          },
          `# பள்ளிக்கூடம்`,
          {
            type: 'sitewords',
            text:
              'பேனா,  எழுதுகோல்,  அளவுகோல்,  அழிப்பான்,  புத்தகம்,  மை,  புத்தகப்பை,  கத்தரிக்கோல்,  தண்ணீர் குடுவை,  கணிப்பான்,  பூகோளம்',
            width: 115
          },
          `# சமையலறை`,
          {
            type: 'sitewords',
            text:
              'அடுப்பு,  பானை,  கரண்டி,  செம்பு, கத்தி,  தட்டு,  மூடி,  குடம், கோப்பை,  கிண்ணம்,  அம்மி,  ஆட்டுக்கல்,  அரிவாள்,  அரிவாள்மனை,  அஞ்சறைப்பெட்டி, தோசைக்கல்,  குழாய்,  எரிவாயு அடுப்பு,  முள் கரண்டி,  வாணலி,  குளிர்சாதன பெட்டி',
            width: 115
          }
        ]
      }
    },
    {
      type: 'rightOne',
      label: 'ஓசை - வார்த்தை',
      id: 'sound',
      lockAfter: 2,
      commonData: {
        title: 'ஓசை கேட்டு வார்த்தைகளை அடையாளம் காண்க.',
        type: 'words',
        fontSize: '1.5rem'
      },
      data: [
        {
          audioOffset: 0,
          audio: 'ta/ta-house-dress-school.mp3',
          words: 'குழந்தை,  சிறுவன்,  சிறுமி,  ஆண்,  பெண்,  தாத்தா,  பாட்டி'
        },
        {
          audioOffset: 14,
          audio: 'ta/ta-house-dress-school.mp3',
          words:
            'வாளி,  பந்து,  வீடு,  மேசை,  கட்டில்,  நாற்காலி,  குடை,  கதவு,  ஜன்னல்,  கழிப்பறை'
        },
        {
          audioOffset: 34,
          audio: 'ta/ta-house-dress-school.mp3',
          words:
            'மெழுகுவர்த்தி,  மூக்கு கண்ணாடி,  கடிகாரம்,  கைக்கடிகாரம்,  பூந்தொட்டி,  துடைப்பம்'
        },
        {
          audioOffset: 46,
          audio: 'ta/ta-house-dress-school.mp3',
          words: 'அலமாரி,  குளிரூட்டி, தலையணை,  கூடை,  குப்பை தொட்டி,  கைப்பை'
        },
        {
          audioOffset: 58,
          audio: 'ta/ta-house-dress-school.mp3',
          words:
            'வேட்டி,  சேலை,  சட்டை,  தொப்பி,  கால்சட்டை,  காலணி, காலுறை,  மேலங்கி'
        },
        {
          audioOffset: 74,
          audio: 'ta/ta-house-dress-school.mp3',
          words: 'பேனா,  எழுதுகோல்,  அளவுகோல்,  அழிப்பான்,  புத்தகம்,  மை'
        },
        {
          audioOffset: 86,
          audio: 'ta/ta-house-dress-school.mp3',
          words:
            'புத்தகப்பை,  கத்தரிக்கோல்,  தண்ணீர் குடுவை,  கணிப்பான்,  பூகோளம்'
        },
        {
          audio: 'ta/ta-kitchen.mp3',
          words:
            'அடுப்பு,  பானை,  கரண்டி,  செம்பு, கத்தி,  தட்டு,  மூடி,  குடம்'
        },
        {
          audioOffset: 16,
          audio: 'ta/ta-kitchen.mp3',
          words:
            'கோப்பை,  கிண்ணம்,  அம்மி,  ஆட்டுக்கல்,  அரிவாள்,  அரிவாள்மனை,  அஞ்சறைப்பெட்டி'
        },
        {
          audioOffset: 30,
          audio: 'ta/ta-kitchen.mp3',
          words:
            'தோசைக்கல்,  குழாய்,  எரிவாயு அடுப்பு,  முள் கரண்டி,  வாணலி,  குளிர்சாதன பெட்டி'
        }
      ]
    },
    {
      type: 'dictation',
      label: 'ஓசை கேட்டு எழுதுக',
      id: 'dictation',
      commonData: {
        title: 'ஓசை கேட்டு எழுதுக',
        lang: 'ta'
      },
      data: [
        {
          audioOffset: 0,
          audio: 'ta/ta-house-dress-school.mp3',
          words: 'குழந்தை,  சிறுவன்,  சிறுமி,  ஆண்,  பெண்,  தாத்தா,  பாட்டி'
        },
        {
          audioOffset: 14,
          audio: 'ta/ta-house-dress-school.mp3',
          words:
            'வாளி,  பந்து,  வீடு,  மேசை,  கட்டில்,  நாற்காலி,  குடை,  கதவு,  ஜன்னல்,  கழிப்பறை'
        },
        {
          audioOffset: 34,
          audio: 'ta/ta-house-dress-school.mp3',
          words:
            'மெழுகுவர்த்தி,  மூக்கு கண்ணாடி,  கடிகாரம்,  கைக்கடிகாரம்,  பூந்தொட்டி,  துடைப்பம்'
        },
        {
          audioOffset: 46,
          audio: 'ta/ta-house-dress-school.mp3',
          words: 'அலமாரி,  குளிரூட்டி, தலையணை,  கூடை,  குப்பை தொட்டி,  கைப்பை'
        },
        {
          audioOffset: 58,
          audio: 'ta/ta-house-dress-school.mp3',
          words:
            'வேட்டி,  சேலை,  சட்டை,  தொப்பி,  கால்சட்டை,  காலணி, காலுறை,  மேலங்கி'
        },
        {
          audioOffset: 74,
          audio: 'ta/ta-house-dress-school.mp3',
          words: 'பேனா,  எழுதுகோல்,  அளவுகோல்,  அழிப்பான்,  புத்தகம்,  மை'
        },
        {
          audioOffset: 86,
          audio: 'ta/ta-house-dress-school.mp3',
          words:
            'புத்தகப்பை,  கத்தரிக்கோல்,  தண்ணீர் குடுவை,  கணிப்பான்,  பூகோளம்'
        },
        {
          audio: 'ta/ta-kitchen.mp3',
          words:
            'அடுப்பு,  பானை,  கரண்டி,  செம்பு, கத்தி,  தட்டு,  மூடி,  குடம்'
        },
        {
          audioOffset: 16,
          audio: 'ta/ta-kitchen.mp3',
          words:
            'கோப்பை,  கிண்ணம்,  அம்மி,  ஆட்டுக்கல்,  அரிவாள்,  அரிவாள்மனை,  அஞ்சறைப்பெட்டி'
        },
        {
          audioOffset: 30,
          audio: 'ta/ta-kitchen.mp3',
          words:
            'தோசைக்கல்,  குழாய்,  எரிவாயு அடுப்பு,  முள் கரண்டி,  வாணலி,  குளிர்சாதன பெட்டி'
        }
      ]
    }
  ]
};
