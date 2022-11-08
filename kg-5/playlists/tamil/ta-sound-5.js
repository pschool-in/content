export default {
  label: 'ஓசை: விலங்குகளும் பறவைகளும் - 2',
  id: 'ta-sound-5',
  img: 'sound',
  list: [
    {
      type: 'slides',
      id: 'animals',
      label: 'விலங்குகள்',
      commonData: {
        audio: 'ta/ta-animals-birds-2.mp3',
        title: 'விலங்குகள்: படமும் ஒலியும்'
      },
      data: [
        {
          text: `sheep| செம்மறி ஆடு
hippo| நீர்யானை
giraffe| ஒட்டகச்சிவிங்கி
rhino| காண்டாமிருகம்
crocodile| முதலை
wolf| ஓநாய்
zebra| வரிக்குதிரை
hyena| கழுதைப் புலி
porcupine| முள்ளம்பன்றி
polarbear| பனிக்கரடி`
        },
        {
          audioOffset: 20,
          text: `boar| காட்டுப் பன்றி
python| மலைப்பாம்பு
bison| காட்டெருமை
chameleon| பச்சோந்தி
shark| சுறாமீன்
whale| திமிங்கிலம்
goldfish| தங்கமீன்
ladybug| பொன்வண்டு
seahorse| கடற்குதிரை`
        },
        {
          audioOffset: 38,
          text: `butterfly| வண்ணத்துப்பூச்சி
cockroach| கரப்பான் பூச்சி
mongoose| கீரிப்பிள்ளை
hamster| வெள்ளெலி
caterpillar| கம்பளிப்பூச்சி
starfish| நட்சத்திர மீன்
hedgehog| முள்ளெலி
stingray| திருக்கை மீன்`
        }
      ]
    },
    {
      type: 'slides',
      id: 'birds',
      label: 'பறவைகள்',
      data: {
        title: 'பறவைகள் : படமும் ஒலியும்',
        audio: 'ta/ta-animals-birds-2.mp3',
        audioOffset: 54,
        text: `kingfisher| மீன் கொத்தி
chick| கோழிக்குஞ்சு
ostrich| நெருப்புக்கோழி
woodpecker| மரங்கொத்தி
sparrow| சிட்டுக்குருவி
falcon| பருந்து
swan| அன்னப்பறவை
spotted-dove| மணிப்புறா
turkey| வான்கோழி
macaw| பஞ்சவர்ணக்கிளி`
      }
    },
    {
      type: 'rightOne',
      label: 'விலங்குகள் - தேர்வு செய்க',
      id: 'pick-animals',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-animals-birds-2.mp3'
      },
      data: [
        {
          words:
            'sheep, hippo, giraffe, rhino, crocodile, wolf, zebra, hyena, porcupine, polarbear'
        },
        {
          audioOffset: 20,
          words: `boar, python, bison, chameleon, shark, whale, goldfish, ladybug, seahorse`
        },
        {
          audioOffset: 38,
          words:
            'butterfly, cockroach, mongoose, hamster, caterpillar, starfish, hedgehog, stingray'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'பறவைகள் - தேர்வு செய்க',
      id: 'pick-birds',
      data: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-animals-birds-2.mp3',
        audioOffset: 54,
        words:
          'kingfisher, chick, ostrich, woodpecker, sparrow ,falcon, swan, spotted-dove, turkey, macaw'
      }
    }
  ]
};
