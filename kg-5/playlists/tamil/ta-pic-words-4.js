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
    },
    {
      type: 'completeWord',
      label: 'நிரப்புக',
      id: 'complete-words',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க'
      },
      data: [
        `house| வீடு|__
        table| மேசை|__
        bed| கட்டில்|____
        chair| நாற்காலி|____
        umbrella| குடை|__
        door| கதவு|___`,

        `window| ஜன்னல்|____
        toilet| கழிப்பறை|_____
        baby| குழந்தை|____
boy| சிறுவன்|____
girl| சிறுமி|___
man| ஆண்|__`,

        `woman| பெண்|__
grandfather| தாத்தா|___
grandma| பாட்டி|___
bucket| வாளி|__
ball|  பந்து|___
candle| மெழுகுவர்த்தி|_______`,

        `glasses| மூக்குக்கண்ணாடி|________
clock| கடிகாரம்|_____
watch| கைக்கடிகாரம்|_______
flower-pot| பூத்தொட்டி|_____
broom| துடைப்பம்|_____
shelf| அலமாரி|____`,

        `air-conditioner| குளிரூட்டி|_____
pillow| தலையணை|____
basket| கூடை|__
dustbin| குப்பைத்தொட்டி|_______
handbag| கைப்பை|___`,
` vetti| வேட்டி|___
saree| சேலை|__
shirt| சட்டை|___
hat| தொப்பி|___`,

`trousers| கால்சட்டை|_____
shoe| காலணி|___
sock|காலுறை|___
coat| மேலங்கி|____`,

`pen| பேனா|__
pencil| எழுதுகோல்|_____
ruler| அளவுகோல்|_____
eraser| அழிப்பான்|_____
book| புத்தகம்|_____
ink| மை|_`,

`schoolbag| புத்தகப்பை|______
scissors| கத்தரிக்கோல்|_______
waterbottle| தண்ணீர்குடுவை|_______
calculator| கணிப்பான்|_____
globe| பூகோளம்|____`

`clay-stove| அடுப்பு|____
          pot| பானை|__
          ladle| கரண்டி|____
          sembu| செம்பு|___
          knife|கத்தி|___
          plate| தட்டு|___`,

        `lid| மூடி|__
          kudam| குடம்|___
          cup| கோப்பை|___
          bowl| கிண்ணம்|____
          ammi | அம்மி|___
          stone-grinder| ஆட்டுக்கல்|______`,

        `arivaal| அரிவாள்|____
          arivaal-manai| அரிவாள்மனை|______
          anjarai-petti| அஞ்சறைப்பெட்டி|________
          dosaikal| தோசைக்கல்|_____
          tap| குழாய்|___`,

        `stove| எரிவாயுஅடுப்பு|________
          fork| முள் கரண்டி|______
          pan| வாணலி|___
          fridge| குளிர்சாதன பெட்டி|__________`

      ]
    },
    {
      type: 'connectLetters',
      label: 'எழுத்துக்களை இணைக்கவும்',
      id: 'connect-words',
      commonData: {
        title: 'எழுத்துக்களை இணைத்து சொல் உருவாக்குக ',
        printTitle: 'Form the word using the letters.',
        type: 'image',
        lang: 'ta',
        fontSize: '1rem'
      },
      data: [
        `house, வீடு
        table, மேசை
        bed, கட்டில்
        chair, நாற்காலி
        umbrella, குடை
        door, கதவு`,

        `window, ஜன்னல்
        toilet, கழிப்பறை
        baby, குழந்தை
boy, சிறுவன்
girl, சிறுமி
man, ஆண்`,

        `woman, பெண்
grandfather, தாத்தா
grandma, பாட்டி
bucket, வாளி
ball,  பந்து
candle, மெழுகுவர்த்தி`,

        `glasses, மூக்கு கண்ணாடி
clock, கடிகாரம்
watch, கைக்கடிகாரம்
flower-pot, பூத்தொட்டி
broom, துடைப்பம்
shelf, அலமாரி`,

        `air-conditioner, குளிரூட்டி
pillow, தலையணை
basket, கூடை
dustbin, குப்பை தொட்டி
handbag, கைப்பை`,
` vetti, வேட்டி
saree, சேலை
shirt, சட்டை
hat, தொப்பி`,

`trousers, கால்சட்டை
shoe, காலணி
sock,காலுறை
coat, மேலங்கி`,

`pen, பேனா
pencil, எழுதுகோல்
ruler, அளவுகோல்
eraser, அழிப்பான்
book, புத்தகம்
ink, மை`,

`schoolbag, புத்தகப்பை
scissors, கத்தரிக்கோல்
waterbottle, தண்ணீர் குடுவை
calculator, கணிப்பான்
globe, பூகோளம்`

`clay-stove, அடுப்பு
          pot, பானை
          ladle, கரண்டி
          sembu, செம்பு
          knife,கத்தி
          plate, தட்டு`,

        `lid, மூடி
          kudam, குடம்
          cup, கோப்பை
          bowl, கிண்ணம்
          ammi , அம்மி
          stone-grinder, ஆட்டுக்கல்`,

        `arivaal, அரிவாள்
          arivaal-manai, அரிவாள்மனை
          anjarai-petti, அஞ்சறைப்பெட்டி
          dosaikal, தோசைக்கல்
          tap, குழாய்`,

        `stove, எரிவாயு அடுப்பு
          fork, முள் கரண்டி
          pan, வாணலி
          fridge, குளிர்சாதன பெட்டி`
      ]
    }
  ]
};
