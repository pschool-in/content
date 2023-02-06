export default {
  label: 'விலங்குகளும் பறவைகளும் - 2',
  id: 'ta-picture-5',
  img: 'image',
  lockAfter: 3,
  list: [
    {
      type: 'dragDropImgLabel',
      label: 'விலங்குகள்',
      id: 'drag-drop-animals',
      commonData: {
        title: 'விலங்குகளின் படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `sheep| செம்மறி ஆடு
hippo| நீர்யானை
giraffe| ஒட்டகச்சிவிங்கி
rhino| காண்டாமிருகம்
crocodile| முதலை
wolf| ஓநாய்`,

        `zebra| வரிக்குதிரை
hyena| கழுதைப் புலி
|porcupine| முள்ளம்பன்றி
polarbear| பனிக்கரடி
boar| காட்டுப் பன்றி
python| மலைப்பாம்பு`,

        ` bison| காட்டெருமை
chameleon| பச்சோந்தி
shark| சுறாமீன்
whale| திமிங்கிலம்
goldfish| தங்கமீன்
ladybug| பொன்வண்டு`,

        ` seahorse| கடற்குதிரை
butterfly| வண்ணத்துப்பூச்சி
cockroach| கரப்பான் பூச்சி
mongoose| கீரிப்பிள்ளை
hamster| வெள்ளெலி`,

        `caterpillar| கம்பளிப்பூச்சி
starfish| நட்சத்திர மீன்
hedgehog| முள்ளெலி
stingray| திருக்கை மீன்`
      ]
    },

    {
      type: 'dragDropImgLabel',
      label: 'பறவைகள்',
      id: 'drag-drop-birds',
      commonData: {
        title: 'பறவைகளின் படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `kingfisher| மீன்கொத்தி
chick| கோழிக்குஞ்சு
ostrich| நெருப்புக்கோழி
woodpecker| மரங்கொத்தி
sparrow| சிட்டுக்குருவி
falcon| பருந்து`,

        `swan| அன்னப்பறவை
spotted-dove| மணிப்புறா
turkey| வான்கோழி
macaw| பஞ்சவர்ணக்கிளி`
      ]
    },
    {
      id: 'match-animals',
      type: 'match',
      label: 'பொருத்துக : விலங்குகள்',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `செ, sheep
நீ, hippo
ஒ, giraffe
கா, rhino
மு, crocodile`,

        `ஓ, wolf
வ, zebra
க, hyena
மு, |porcupine
ப, polarbear`,

        `கா, boar
ம, python
கா, bison
ப, chameleon
சு, shark`,

        `தி, whale
த, goldfish
பொ, ladybug
க, seahorse`,

        `வ, butterfly
க, cockroach
கீ, mongoose
வெ, hamster`,

        `க, caterpillar
ந, starfish
மு, hedgehog
தி, stingray`
      ]
    },
    {
      id: 'match-birds',
      type: 'match',
      label: 'பொருத்துக : பறவைகள்',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `மீ, kingfisher
கோ, chick
நெ, ostrich
ம, woodpecker
ப, falcon`,

        `சி, sparrow
அ, swan
ம, spotted-dove
வா, turkey
ப, macaw`
      ]
    },
    {
      type: 'completeWord',
      label: 'நிரப்புக: விலங்குகள்',
      id: 'complete-animal',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க'
      },
      data: [
        `sheep| செம்மறி ஆடு | _ம்மறி ஆடு| செ, சை, ச , சே
hippo| நீர்யானை| _ர்யானை | நீ, நி, னி, னீ 
giraffe| ஒட்டகச்சிவிங்கி| _ட்டகச்சிவிங்கி| ஒ, எ, ஏ, ஐ
rhino| காண்டாமிருகம்| _ண்டாமிருகம்| கா, க, தோ, சே
crocodile| முதலை | _தலை | மு, மூ, மீ, மே 
wolf| ஓநாய்| _நாய்| ஓ, ஐ, ஒ, ஔ
zebra| வரிக்குதிரை | _ரிக்குதிரை | வ, வி, வீ, வா
hyena| கழுதைப் புலி| _ழுதைப் புலி|க, கா, ம, இ
porcupine| முள்ளம்பன்றி| _ள்ளம்பன்றி|மு, மா, மி, மீ
polarbear| பனிக்கரடி| _னிக்கரடி|ப, பி, பீ, பு`,

        `boar| காட்டுப்பன்றி| _ட்டுப்பன்றி|கா, க, கி, ப
python| மலைப்பாம்பு| _லைப்பாம்பு|ம, மா, மி, மீ
bison| காட்டெருமை| _ட்டெருமை|கா, கி, கு, க
chameleon| பச்சோந்தி| _ச்சோந்தி|ப, பி, பீ, பு
shark| சுறாமீன்| _றாமீன்| சு, கு, கூ, சூ  
whale| திமிங்கிலம் | _மிங்கிலம்| தி, டி, டீ, தீ  
goldfish| தங்கமீன்| _ங்கமீன்|த, கி, மா, தி
ladybug| பொன்வண்டு| _ன்வண்டு | பொ, பெ , பே , போ 
seahorse| கடற்குதிரை| _டற்குதிரை|க, கா, கி, கு`,

        `butterfly| வண்ணத்துப்பூச்சி| _ண்ணத்துப்பூச்சி| வ, ச, ர, க
cockroach| கரப்பான் பூச்சி| _ரப்பான் பூச்சி| க, ஐ, ஒ, ஔ
mongoose| கீரிப்பிள்ளை| _ரிப்பிள்ளை| கீ, ஐ, ஒ, ஓ
hamster| வெள்ளெலி| _ள்ளெலி| வெ, செ, ரெ, நெ 
caterpillar| கம்பளிப்பூச்சி| _ம்பளிப்பூச்சி|க, கி, கு, சி
starfish | நட்சத்திர மீன் | _ட்சத்திர மீன் | ந, நா , ன , ண 
hedgehog| முள்ளெலி| _ள்ளெலி|மு, மா, மி, மீ
stingray| திருக்கை மீன்| _ருக்கை மீன்|தி, தே, தீ, து`
      ]
    },
    {
      type: 'completeWord',
      label: 'நிரப்புக: பறவைகள்',
      id: 'complete-bird',
      data: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க',
        text: `kingfisher| மீன்கொத்தி| _ன்கொத்தி| மீ, ஐ, மு, ஓ
chick| கோழிக்குஞ்சு| _ழிக்குஞ்சு| கோ, ஐ, மு, ஓ
ostrich| நெருப்புக்கோழி | _ருப்புக்கோழி | நெ, தீ, மு, ஓ
woodpecker| மரங்கொத்தி| _ரங்கொத்தி| ம, மு, ஓ, ஔ
sparrow| சிட்டுக்குருவி| _ட்டுக்குருவி| சி, சீ, தி , டி
falcon| பருந்து| _ருந்து| ப, பி, பு, பூ
swan| அன்னப்பறவை| _ன்னப்பறவை|அ, ஆ, க, இ 
spotted-dove| மணிப்புறா|_ணிப்புறா| ம, பை, மா, மி
turkey| வான்கோழி| _ன்கோழி| வா,வீ, வு, வூ
macaw| பஞ்சவர்ணக்கிளி| _ஞ்சவர்ணக்கிளி| ப, பீ, பே, பை`
      }
    }
  ]
};
