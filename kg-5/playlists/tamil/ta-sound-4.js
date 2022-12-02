export default {
  label: 'ஓசை: நம் வீடு',
  id: 'ta-sound-4',
  img: 'sound',
  list: [
    {
      type: 'slides',
      id: 'house',
      label: 'நம் வீடு',
      commonData: {
        audio: 'ta/ta-house-dress-school.mp3',
        title: 'நம் வீடு : படமும் ஒலியும்'
      },
      data: [
        {
          text: `baby| குழந்தை
boy| சிறுவன்
girl| சிறுமி
man| ஆண்
woman| பெண்
grandfather| தாத்தா
grandma| பாட்டி`
        },
        {
          audioOffset: 14,
          text: `bucket| வாளி
ball| பந்து
house| வீடு
table| மேசை
bed| கட்டில்
chair| நாற்காலி
umbrella| குடை
door| கதவு 
window| ஜன்னல்
toilet| கழிப்பறை `
        },

        {
          audioOffset: 34,
          text: `candle| மெழுகுவர்த்தி
glasses| மூக்கு கண்ணாடி
clock| கடிகாரம்
watch| கைக்கடிகாரம்
flower-pot| பூந்தொட்டி 
broom| துடைப்பம்`
        },
        {
          audioOffset: 46,
          text: `shelf| அலமாரி
air-conditioner| குளிரூட்டி
pillow|தலையணை
basket| கூடை
dustbin| குப்பை தொட்டி
handbag| கைப்பை`
        }
      ]
    },
    {
      type: 'slides',
      id: 'dress',
      label: 'ஆடைகள்',
      data: {
        audio: 'ta/ta-house-dress-school.mp3',
        audioOffset: 58,
        title: 'ஆடைகள் : படமும் ஒலியும்',
        text: ` vetti| வேட்டி
saree| சேலை
shirt| சட்டை
hat| தொப்பி
trousers| கால்சட்டை
shoe| காலணி
sock|காலுறை
coat| மேலங்கி`
      }
    },
    {
      type: 'slides',
      id: 'school',
      label: 'பள்ளிக்கூடம்',
      commonData: {
        audio: 'ta/ta-house-dress-school.mp3',
        title: 'பள்ளிக்கூடம் : படமும் ஒலியும்'
      },
      data: [
        {
          audioOffset: 74,
          text: `pen| பேனா
pencil| எழுதுகோல்
ruler| அளவுகோல்
eraser| அழிப்பான்
book| புத்தகம்
ink| மை`
        },
        {
          audioOffset: 86,
          text: `schoolbag| புத்தகப்பை
scissors| கத்தரிக்கோல்
waterbottle| தண்ணீர் குடுவை
calculator| கணிப்பான்
globe| பூகோளம்`
        }
      ]
    },
    {
      type: 'slides',
      id: 'kitchen',
      label: 'சமையலறை',
      commonData: {
        audio: 'ta/ta-kitchen.mp3',
        title: 'சமையலறை : படமும் ஒலியும்'
      },
      data: [
        {
          text: `clay-stove| அடுப்பு
pot| பானை
ladle| கரண்டி
sembu| செம்பு
knife|கத்தி
plate| தட்டு
lid| மூடி
kudam| குடம்`
        },
        {
          audioOffset: 16,
          text: `cup| கோப்பை
bowl| கிண்ணம்
ammi | அம்மி
stone-grinder| ஆட்டுக்கல்
arivaal| அரிவாள்
arivaal-manai| அரிவாள்மனை
anjarai-petti| அஞ்சறைப்பெட்டி`
        },
        {
          audioOffset: 30,
          text: `dosaikal| தோசைக்கல்
tap| குழாய்
stove| எரிவாயு அடுப்பு
fork| முள் கரண்டி
pan| வாணலி
fridge| குளிர்சாதன பெட்டி`
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'நம் வீடு - தேர்வு செய்க',
      id: 'pick-house',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-house-dress-school.mp3'
      },
      data: [
        {
          words: 'baby, boy, girl, man, woman, grandfather, grandma'
        },
        {
          audioOffset: 14,
          words: `bucket, ball, house, table, bed, chair, umbrella, door, window, toilet`
        },
        {
          audioOffset: 34,
          words: 'candle, glasses, clock, watch, flower-pot, broom'
        },
        {
          audioOffset: 46,
          words: 'shelf, air-conditioner, pillow, basket, dustbin, handbag'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'ஆடைகள் - தேர்வு செய்க',
      id: 'pick-dress',
      data: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audioOffset: 58,
        audio: 'ta/ta-house-dress-school.mp3',
        words: 'vetti, saree, shirt, hat, trousers, shoe, sock, coat'
      }
    },

    {
      type: 'rightOne',
      label: 'பள்ளிக்கூடம் - தேர்வு செய்க',
      id: 'pick-school',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-house-dress-school.mp3'
      },
      data: [
        {
          audioOffset: 74,
          words: 'pen, pencil, ruler, eraser, book, ink'
        },
        {
          audioOffset: 86,
          words: `schoolbag, scissors, waterbottle, calculator, globe`
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'சமையலறை - தேர்வு செய்க',
      id: 'pick-kitchen',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-kitchen.mp3'
      },
      data: [
        {
          words: 'clay-stove, pot, ladle, sembu, knife, plate, lid, kudam'
        },
        {
          audioOffset: 16,
          words: `cup, bowl, ammi , stone-grinder, arivaal, arivaal-manai, anjarai-petti`
        },
        {
          audioOffset: 30,
          words: `dosaikal, tap, stove, fork, pan, fridge`
        }
      ]
    }
  ]
};
