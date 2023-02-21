export default {
  label: 'ஓசை: விலங்குகளும் பறவைகளும்',
  id: 'ta-sound',
  img: 'sound',
  lang: 'ta',
  list: [
    {
      type: 'slides',
      id: 'animals',
      label: 'விலங்குகள்',
      commonData: {
        audio: 'ta/ta-animals-birds.mp3',
        title: 'விலங்குகள்: படமும் ஒலியும்'
      },
      data: [
        {
          text: `cat | பூனை
dog | நாய்
goat | ஆடு
horse | குதிரை
cow | பசு
pig | பன்றி
buffalo| எருமை
donkey| கழுதை
bull| காளை
camel| ஒட்டகம்`
        },
        {
          audioOffset: 20,
          text: `elephant| யானை
monkey| குரங்கு
lion| சிங்கம்
tiger| புலி
kangaroo| கங்காரு
leopard| சிறுத்தை
fox| நரி
rabbit| முயல்
antelope| மான்
bear| கரடி`
        },
        {
          audioOffset: 40,
          text: `fish| மீன்
frog| தவளை
snake| பாம்பு
squirrel| அணில்
tortoise| ஆமை
rat| எலி
fly| ஈ
ant| எறும்பு
lizard| பல்லி
crab| நண்டு`
        },
        {
          audioOffset: 60,
          text: `mosquito| கொசு
dragonfly| தட்டான்
earthworm| மண்புழு
bug| வண்டு
prawn| இறால்
bee| தேனீ
spider| சிலந்தி
winged-termites| ஈசல்
bat| வௌவால்
garden-lizard| ஓணான்`
        }
      ]
    },
    {
      type: 'slides',
      id: 'birds',
      label: 'பறவைகள்',
      commonData: {
        title: 'பறவைகள் : படமும் ஒலியும்',
        audio: 'ta/ta-animals-birds.mp3'
      },
      data: [
        {
          audioOffset: 80,
          text: `crow| காகம்
dove| புறா
duck| வாத்து
hen| கோழி
parrot| கிளி
peacock| மயில்`
        },
        {
          audioOffset: 92,
          text: `crane| கொக்கு
rooster| சேவல்
cuckoo| குயில்
eagle| கழுகு
myna| மைனா
owl| ஆந்தை`
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'விலங்குகள் - தேர்வு செய்க',
      id: 'pick-animals',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-animals-birds.mp3'
      },
      data: [
        {
          words: 'cat, dog, goat, horse, cow, pig, buffalo, donkey, bull, camel'
        },
        {
          audioOffset: 20,
          words:
            'elephant, monkey, lion, tiger, kangaroo, leopard, fox, rabbit, antelope, bear'
        },
        {
          audioOffset: 40,
          words:
            'fish, frog, snake, squirrel, tortoise, rat, fly, ant, lizard, crab'
        },
        {
          audioOffset: 60,
          words:
            'mosquito, dragonfly, earthworm, bug, prawn, bee, spider, winged-termites, bat, garden-lizard'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'பறவைகள் - தேர்வு செய்க',
      id: 'pick-birds',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-animals-birds.mp3'
      },
      data: [
        {
          audioOffset: 80,
          words: 'crow, dove, duck, hen, parrot, peacock'
        },
        {
          audioOffset: 92,
          words: 'crane, rooster, cuckoo, eagle, myna, owl'
        }
      ]
    }
  ]
};
