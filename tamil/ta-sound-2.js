export default {
  label: 'ஓசை: உணவு வகைகள்',
  id: 'ta-sound-2',
  img: 'sound',
  list: [
    {
      type: 'slides',
      id: 'fruits',
      label: 'பழங்கள்',
      commonData: {
        audio: 'ta/ta-fruits-foods.mp3',
        title: 'பழங்கள்: படமும் ஒலியும்'
      },
      data: [
        {
          text: `jackfruit| பலாப்பழம்
mango| மாம்பழம்
banana| வாழைப்பழம்
guava| கொய்யாப்பழம்
grapes| திராட்சை
orange| ஆரஞ்சு
papaya| பப்பாளி
pineapple| அன்னாசிப்பழம்`
        },
        {
          audioOffset: 16,
          text: `apple| ஆப்பிள்
pomegranate| மாதுளை
watermelon| தர்பூசணி
sugarcane| கரும்பு
gooseberry| நெல்லிக்காய்
lemon| எலுமிச்சம்
custard-apple| சீதாப்பழம்
dates| பேரிச்சம்பழம்`
        }
      ]
    },
    {
      type: 'slides',
      id: 'vegetables',
      label: 'காய்கள்',
      commonData: {
        title: 'பறவைகள் : படமும் ஒலியும்',
        audio: 'ta/ta-vegetables.mp3'
      },
      data: [
        {
          text: `onion| வெங்காயம்
tomato| தக்காளி
brinjal| கத்திரி
raw-banana| வாழைக்காய்
garlic| பூண்டு
ginger| இஞ்சி
radish| முள்ளங்கி
bitter-gourd| பாகற்காய்
banana-flower| வாழைப்பூ
bottlegourd| சுரைக்காய்`
        },
        {
          audioOffset: 20,
          text: `carrot| காரட்
beetroot| பீட்ரூட்
cabbage| முட்டைகோசு
potato| உருளைக்கிழங்கு
coconut| தேங்காய்
ladies-finger| வெண்டைக்காய்
drumstick| முருங்கைக்காய்
tamarind| புளி
mushroom| காளான்
elephant-yam| சேனைக்கிழங்கு`
        },
        {
          audioOffset: 40,
          text: `chilli| பச்சைமிளகாய்
curryleaf| கருவேப்பிலை
corianderleaf| கொத்தமல்லி
mintleaf| புதினா
spinach| கீரை
turmeric| மஞ்சள்
pumpkin| பரங்கிக்காய்
ashgourd| பூசணிக்காய்`
        }
      ]
    },
    {
      type: 'slides',
      id: 'foods',
      label: 'உணவு',
      commonData: {
        title: 'உணவு : படமும் ஒலியும்',
        audio: 'ta/ta-fruits-foods.mp3'
      },
      data: [
        {
          audioOffset: 32,
          text: `food| உணவு
milk| பால்
idly| இட்லி
dosai| தோசை
pongal| பொங்கல்
vadai| வடை
puttu-rice| புட்டு
idiyappam| இடியாப்பம்
porotta| புரோட்டா
egg| முட்டை`
        },
        {
          audioOffset: 52,
          text: `almond| பாதாம்
cashewnut| முந்திரி
rice|அரிசி
salt| உப்பு
flour| மாவு
paddy| நெல்
wheat| கோதுமை
pepper| மிளகு`
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'பழங்கள் - தேர்வு செய்க',
      id: 'pick-fruits',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-fruits-foods.mp3'
      },
      data: [
        {
          words:
            'jackfruit, mango, banana, guava, grapes, orange, papaya, pineapple'
        },
        {
          audioOffset: 16,
          words:
            'apple, pomegranate, watermelon, sugarcane, gooseberry, lemon, custard-apple, dates'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'காய்கள் - தேர்வு செய்க',
      id: 'pick-vegetables',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-vegetables.mp3'
      },
      data: [
        {
          words:
            'onion, tomato, brinjal, raw-banana, garlic, ginger, radish, bitter-gourd, banana-flower, bottlegourd'
        },
        {
          audioOffset: 20,
          words:
            'carrot, beetroot, cabbage, potato, coconut, ladies-finger, drumstick, tamarind, mushroom, elephant-yam'
        },
        {
          audioOffset: 40,
          words:
            'chilli, curryleaf, corianderleaf, mintleaf, spinach, turmeric, pumpkin, ashgourd'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'உணவு - தேர்வு செய்க',
      id: 'pick-foods',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-fruits-foods.mp3'
      },
      data: [
        {
          audioOffset: 32,
          words:
            'food, milk, idly, dosai, pongal, vadai, puttu-rice, idiyappam, porotta, egg'
        },
        {
          audioOffset: 52,
          words: 'almond, cashewnut, rice, salt, flour, paddy, wheat, pepper'
        }
      ]
    }
  ]
};
