export default {
  label: 'விலங்குகளும் பறவைகளும்',
  id: 'ta-picture',
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
        `cat| பூனை
              dog| நாய்
              goat| ஆடு
              horse| குதிரை
              cow| பசு
              pig| பன்றி`,

        `buffalo| எருமை
              donkey| கழுதை
              bull| காளை
              camel| ஒட்டகம்
              elephant| யானை
monkey| குரங்கு`,

        `lion| சிங்கம்
tiger| புலி
kangaroo| கங்காரு
leopard| சிறுத்தை
fox| நரி
rabbit| முயல்`,

        `antelope| மான்
bear| கரடி
fish| மீன்
frog| தவளை
snake| பாம்பு
squirrel| அணில்`,

        `tortoise| ஆமை
rat| எலி
fly| ஈ
ant| எறும்பு
lizard| பல்லி
crab| நண்டு`,

        `mosquito| கொசு
dragonfly| தட்டான்
earthworm| மண்புழு
bug| வண்டு
prawn| இறால்`,

        `bee| தேனீ
spider| சிலந்தி
winged-termites| ஈசல்
bat| வௌவால்
garden-lizard| ஓணான்`
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
        `crow| காகம்
        dove| புறா
        duck| வாத்து
        hen| கோழி
        parrot| கிளி
        peacock| மயில்`,

        `crane| கொக்கு
        rooster| சேவல்
        koel| குயில்
        eagle| கழுகு
        myna| மைனா
        owl| ஆந்தை`
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
        `பூ, cat
        நா, dog
        ஆ, goat
        கு, horse
        ப, cow`,

        `ப, pig
        எ, buffalo, 
        க, donkey
        கா, bull
        ஒ, camel`,

        `யா, elephant
        கு, monkey
        சி, lion
        பு, tiger
        க, kangaroo`,

        `சி, leopard
ந, fox
மு, rabbit
மா, antelope,
க, bear`,

        ` மீ, fish
த, frog
பா, snake
அ, squirrel
ஆ, tortoise`,

        `எ, rat
ஈ, fly
கொ, mosquito
ப, lizard
ந, crab`,

        `எ, ant
த, dragonfly
ம, earthworm
வ, bug
இ, prawn`,

        `தே, bee
சி, spider
ஈ, winged-termites
வௌ, bat
ஓ, garden-lizard`
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
        `கா, crow
  பு, dove
  வா, duck
  கோ, hen`,

        `கி, parrot
  ம, peacock
  கொ, crane
  சே, rooster`,

        `கு, koel
  க, eagle
  மை, myna
  ஆ, owl`
      ]
    },
    {
      type: 'completeWord',
      label: 'நிரப்புக: விலங்குகள்',
      id: 'complete-animals',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க'
      },
      data: [
        `cat| பூனை | _னை | பூ, பு, ப , கு 
  dog| நாய் | _ய் | நா, ன, னா, ண 
  goat| ஆடு | _டு| ஆ, அ, இ, ஈ
  horse| குதிரை | _திரை | கு, கூ, கே, கை  
  cow|  பசு| _சு| ப, மா, ஆ, ஊ
  pig| பன்றி | _ன்றி | ப, பா, ம, மா
  buffalo| எருமை| _ருமை| எ, ஏ, ஐ, ஒ
  donkey| கழுதை | _ழுதை| க, வ, ச, ர
  bull| காளை | _ளை | கா, க, த , தா 
  camel| ஒட்டகம் | _ட்டகம் | ஒ, ஊ, ஓ, வ`,

        `elephant| யானை | _னை | யா, ய, ல, ழ 
  lion| சிங்கம் | _ங்கம் | சி, சு, சீ, சூ  
  monkey| குரங்கு | _ரங்கு| கு, கூ, கே, கெ 
  tiger| புலி| _லி| பு, பி, பீ, பெ
  kangaroo| கங்காரு| _ங்காரு| க, உ, வொ, ர
  leopard| சிறுத்தை| _றுத்தை| சி, உ, எ, வ
  fox| நரி | _ரி | ந, நா, ன, னா
  rabbit| முயல்| _யல்| மு, ஐ, ஓ, ஔ
antelope| மான்| _ன்|மா, மி, மீ, மு
bear| கரடி | _ரடி | க, ச, சே, கு`,

        `fish| மீன் | _ன்| மீ, னி, னீ, மி  
  frog| தவளை | _வளை | த, ந, ட, தா 
  snake| பாம்பு | _ம்பு | பா, பீ, பெ, ப
  squirrel| அணில் | _ணில் | அ, ஆ, ஊ, தி
  tortoise| ஆமை | _மை | ஆ, அ, ஊ, தி
  rat| எலி| _லி | எ, ய, ய், ஏ
  fly| ஈ| _ |  ஈ, இ, ஐ, ய்
  ant| எறும்பு | _றும்பு| எ, ஏ, யே, ய
  lizard| பல்லி| _ல்லி| ப, பி, பா, பு
  crab| நண்டு | _ண்டு | ந, நா, ன, னா `,

        `mosquito| கொசு | _சு| கொ, ஐ, ஓ, ஔ
  dragonfly| தட்டான்| _ட்டான்| த, ந, ட, தா
  earthworm| மண்புழு| _ண்புழு|ம, மா, மி, மீ
  bug| வண்டு| _ண்டு| வ, வா, வி, வீ
  prawn| இறால்| _றால்|இ, ஈ, உ, எ
  bee| தேனீ| _னீ|தே, தீ, து, தூ
  spider| சிலந்தி| _லந்தி|சி, ச, ர, க
  winged-termites| ஈசல் | _சல்| ஈ, இ, ஐ, ய்  
  bat| வௌவால் |_வால் | வௌ, வொ, வை, வோ
  garden-lizard| ஓணான்| _ணான்| ஓ, ஐ, ஒ, ஔ`
      ]
    },
    {
      type: 'completeWord',
      label: 'நிரப்புக: பறவைகள்',
      id: 'complete-birds',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க '
      },
      data: [
        `crow| காகம் |_கம்|  கா, க, ப, ம
  dove| புறா | _றா | பு, பீ , பெ, ப    
  duck| வாத்து | _த்து| வா, வ, ல, யா 
  hen| கோழி | _ழி | கோ, கெ, கு, கை 
  parrot| கிளி | _ளி| கி, கோ, கெ, கீ
  peacock| மயில் | _யில் | ம, மு, மூ , மா`,

        `crane| கொக்கு| _க்கு| கொ, மு, ஓ, ஔ
  rooster| சேவல்| _வல்| சே, ஐ, மு, ஔ
  koel| குயில்| _யில்|கு, ம, க, கா
  eagle| கழுகு| _ழுகு| க, மு, ஓ, ஔ
  myna| மைனா| _னா| மை, ஐ, மு, ஔ
  owl| ஆந்தை| _ந்தை| ஆ, ஐ, ஓ, ஔ`
      ]
    }
  ]
};
