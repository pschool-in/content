export default {
  label: 'படம்',
  id: 'ta-picture',
  img: 'image',
  list: [
    {
      type: 'completeWord',
      label: 'விலங்குகள்',
      id: 'animals',
      commonData: {
        images: 'custom',
        lang: 'ta'
      },
      data: [
        `cat| பூனை | _னை | பூ, பு , ப , கு 
dog| நாய் | _ய் | நா, ன , னா , ண 
goat| ஆடு | _டு| ஆ, அ,  இ, ஈ
sheep| செம்மறி ஆடு | _ம்மறி ஆடு| செ, சை , ச , சே   
horse| குதிரை | _திரை | கு, கூ , கே,  கை  
pig| பன்றி | _ன்றி | பா, ப, ம, மா
elephant| யானை | _னை | யா, ய , ல, ழ 
lion| சிங்கம் | _ங்கம் | சி, சு , சீ , சூ  
monkey| குரங்கு | _ரங்கு| கு, கூ , கே, கெ 
tiger| புலி| _லி| பு, பி , பீ , பெ `,

        `fox| நரி | _ரி | ந, நா, ன , னா 
crocodile| முதலை | _தலை | மு, மூ , மீ , மே  
zebra| வரிக்குதிரை | _ரிக்குதிரை | வி, வீ, வ, வா 
bear| கரடி | _ரடி | க, ச , சே, கு
camel| ஒட்டகம் | _ட்டகம் | ஒ, ஊ , ஓ , வ
dragonfly| தட்டான்| _ட்டான்| த, ந , ட , தா
shark| சுறாமீன்| _றாமீன்| சு,கு, கூ , சூ  
whale| திமிங்கிலம் | _மிங்கிலம்| தி, டி , டீ , தீ  
hippo| நீர்யானை| _ர்யானை | நீ, நி ,னி , னீ 
rhino| காண்டாமிருகம்| _ண்டாமிருகம்| கா, க , தோ , சே `,

        `fish| மீன் | _ன்| மீ, னி , னீ , மி  
frog| தவளை | _வளை | த, ந , ட , தா 
crab| நண்டு | _ண்டு | ந , நா, ன , னா 
snake| பாம்பு | _ம்பு | பா,  பீ , பெ, ப
squirrel| அணில் | _ணில் | அ, ஆ, ஊ,தி
tortoise| ஆமை | _மை | ஆ, அ, ஊ,தி
rat| எலி | _லி | எ, ய , ய் , ஏ
winged-termites| ஈசல் | _சல்| ஈ, இ , ஐ , ய்  
ant| எறும்பு | _றும்பு| எ, ஏ , யே , ய 
fly| ஈ| _ |  ஈ, இ , ஐ , ய்`,

        `bat| வௌவால் |_வால் | வௌ, வொ, வை, வோ
buffalo|  எருமை| _ருமை| எ, ஏ, ஐ, ஒ
butterfly|  வண்ணத்துப்பூச்சி| _ண்ணத்துப்பூச்சி| வ, ச, ர, க
cow|  மாடு| _டு| மா, ஆ, ஊ, ஔ
donkey| கழுதை | _ழுதை| வ, ச, ர, க 
giraffe| ஒட்டகச்சிவிங்கி| _ட்டகச்சிவிங்கி| எ, ஏ, ஐ, ஒ
kangaroo| கங்காரு| _ங்காரு| உ,வொ, ர, க 
leopard| சிறுத்தை| _றுத்தை| உ, சி, எ, வ`,

        `mongoose| கீரிப்பிள்ளை| _ரிப்பிள்ளை| ஐ, ஒ, ஓ, கீ
mosquito| கொசு | _சு| ஐ, கொ, ஓ, ஔ
wolf| ஓநாய்| _நாய்| ஐ, ஒ, ஓ, ஔ
cockroach| கரப்பான் பூச்சி| _ரப்பான் பூச்சி| ஐ, ஒ, க, ஔ
garden-lizard| ஓணான்| _ணான்| ஐ, ஒ, ஓ, ஔ
lizard| பல்லி| _ல்லி| ப, ஒ, ஓ, ஔ
rabbit| முயல்| _யல்| ஐ, மு, ஓ, ஔ`
      ]
    },
    {
      type: 'completeWord',
      label: 'பறவைகள்',
      id: 'birds',
      commonData: {
        images: 'custom',
        lang: 'ta'
      },
      data: [
        `crow| காகம் |_கம்|  கா, க, ப, ம
dove| புறா | _றா | பு, பீ , பெ, ப    
duck| வாத்து | _த்து| வா, வ , ல , யா 
hen| கோழி | _ழி | கோ, கெ , கு , கை 
parrot| கிளி | _ளி| கி, கோ, கெ, கீ
peacock| மயில் | _யில் | ம, மு , மூ , மா  
sparrow| சிட்டுக்குருவி| _ட்டுக்குருவி| சி, சீ , தி , டி`,

        `chick| கோழிக்குஞ்சு| _ழிக்குஞ்சு| கோ, ஐ, மு, ஓ
crane| கொக்கு| _க்கு| கொ, மு, ஓ, ஔ
eagle| கழுகு| _ழுகு| க, மு, ஓ, ஔ
kingfisher| மீன் கொத்தி| _ன் கொத்தி| மீ, ஐ, மு, ஓ
myna| மைனா| _னா| மை, ஐ, மு, ஔ
ostrich| நெருப்புக்கோழி | _ருப்புக்கோழி | நெ, தீ, மு, ஓ
owl| ஆந்தை| _ந்தை| ஆ, ஐ, ஓ, ஔ
rooster| சேவல்| _வல்| சே, ஐ, மு,  ஔ 
woodpecker| மரங்கொத்தி| _ரங்கொத்தி| ம, மு, ஓ, ஔ`
      ]
    },
    {
      type: 'completeWord',
      label: 'பழங்கள்',
      id: 'fruits',
      commonData: {
        images: 'custom',
        lang: 'ta'
      },
      data: [
        `grapes| திராட்சை | _ராட்சை | தி, பூ, பா, ழ
banana| வாழைப்பழம் | _ழைப்பழம்| வா, பூ, பா, ழ
guava| கொய்யாப்பழம் | _ய்யாப்பழம்| கொ, தோ, தி, பூ
jackfruit| பலாப்பழம் | _லாப்பழம்| ப , பா, ழ, இ
mango| மாம்பழம் | _ம்பழம்| ம, மா, பா, ப
papaya| பப்பாளி | _ப்பாளி| ம, மா, பா, ப`,

        `pineapple| அன்னாசி | _ன்னாசி | அ, ஆ,  மா, வா
pomegranate| மாதுளை | _துளை| மா, வா, பா, ழ
watermelon| தர்பூசணி | _ர்பூசணி| த, தி, பூ, வா
fig| அத்திப்பழம்| _த்திப்பழம்| ஆ,  அ, இ, வா
custard-apple| சீத்தாப்பழம்| _த்தாப்பழம்| ஆ,  தி, இ, சீ
dates| பேரிச்சை | _ரிச்சை| ஆ,  பே, இ, வா`
      ]
    },
    {
      type: 'completeWord',
      label: 'காய்கறிகள்',
      id: 'vegetables',
      commonData: {
        images: 'custom',
        lang: 'ta'
      },
      data: [
        `onion| வெங்காயம் | _ங்காயம்| வெ,  வா, வே , வொ 
  tomato| தக்காளி | _க்காளி| த, ந , ட , தா 
  potato| உருளைக்கிழங்கு | _ருளைக்கிழங்கு| உ, ஊ , ஓ , ஒ 
  cabbage| முட்டைகோசு | _ட்டைகோசு | மு,  மூ, மெ, வை 
  corn| சோளம் | _ளம் | சோ, தோ , சே,  சொ
  cucumber| வெள்ளரிக்காய் | _ள்ளரிக்காய் | வெ, வீ, வ, வா 
  garlic| பூண்டு | _ண்டு | பூ, பு , ப , கு 
  ginger| இஞ்சி | _ஞ்சி| இ, ஈ, பூ, பு
  pumpkin| பரங்கிக்காய்| _ரங்கிக்காய்|  ப, ம, ஓ, ஔ
  almond| பாதாம்| _தாம்| பா, ம, மு, ஓ`,

        `  bitter-gourd| பாகற்காய்| _கற்காய்| பா, மு, ஓ, ஔ
  brinjal| கத்திரி | _த்திரி| க, ம, ஓ, ஔ
  capsicum| குடை மிளகாய்| _டை மிளகாய்| கு, ம, ஓ, ஔ
  cashewnut| முந்திரி | _ந்திரி| மு, ம, ஓ, ஔ
  chilli| பச்சைமிளகாய்| _ச்சைமிளகாய்| ப, மு, ஓ, ஔ
  coconut| தேங்காய்| _ங்காய்| தே, மு, ஓ, ஔ
  corianderleaf|கொத்தமல்லி| _த்தமல்லி| கொ, ம, ஓ, ஔ
  curryleaf| கருவேப்பிலை| _ருவேப்பிலை| க, ம, மு, ஓ`,

        `drumstick | முருங்கைக்காய் | _ருங்கைக்காய் | மு, ம, கு, ப
  greenpeas| பச்சை பட்டாணி| _ச்சை பட்டாணி| ப, ம, மு, ஓ
  ladies-finger| வெண்டைக்காய்| _ண்டைக்காய்|  வெ, ம, மு, ஓ
  mintleaf | புதினா | _தினா | பு , பூ, ப , கு 
  peanut| வேர்க்கடலை| _ர்க்கடலை| நி, ம, ஓ, ஔ
  raddish| முள்ளங்கி| _ள்ளங்கி| மு, ம, ஓ, ஔ
  spinach| கீரை| _ரை| கீ, ம, மு, ஓ`
      ]
    },
    {
      type: 'completeWord',
      label: 'பூக்கள்',
      id: 'flowers',
      commonData: {
        images: 'custom',
        lang: 'ta'
      },
      data: [
        `lotus| தாமரை| _மரை| தா, ரு, த, தி
rose| ரோஜா | _ஜா|ரோ, சே, பா, மா
sunflower| சூரியகாந்தி | _ரியகாந்தி| சூ, தோ, தி , ஆ
marigold| சாமந்தி | _மந்தி | சா, ச, செ, சே
hibiscus| செம்பருத்தி | _ம்பருத்தி| செ, சே, பா, மா
jasmine| மல்லி| _ல்லி | ம, ப, பா, மா `
      ]
    },
    {
      type: 'completeWord',
      label: 'உடல் உறுப்புகள்',
      id: 'bodyparts',
      commonData: {
        images: 'custom',
        lang: 'ta'
      },
      data: [
        `ear| காது | _து| கா, த, தி, க 
eye| கண் | _ண்| க , கா, த, தி
foot| பாதம் | _தம்|  பா, ப, ம, மா
hair| முடி | _டி| மு, ம, மா, மெ 
hand| கை | _| கை, பை , சை , வை 
mouth| வாய் | _ய்| வா, வி, வீ, வ
nose| மூக்கு | _க்கு | மூ,  மு, மா, மெ 
tooth| பல் | _ல்| ப, பா, ம, மா`
      ]
    },
    {
      type: 'completeWord',
      label: 'வாகனங்கள்',
      id: 'vehicles',
      commonData: {
        images: 'custom',
        lang: 'ta'
      },
      data: [
        `aeroplane| விமானம் | _மானம்| வி, வீ, வ, வா 
boat| படகு | _டகு | ம, ப, பா, மா
bus| பேருந்து | _ருந்து | பே, பா, மா, மெ 
car| மகிழுந்து | _கிழுந்து | ம, ப, பா, மா
cycle| மிதிவண்டி | _திவண்டி | மி, வி, வீ, மீ 
ship| கப்பல் | _ப்பல் | க, சா, ச, கா `,

        `train| தொடர்வண்டி| _டர்வண்டி| தொ, தோ , து , தூ
        tractor| இழுவை இயந்திரம் |_ழுவை இயந்திரம் |இ, சா, ச, கா
        ambulance| அவசர ஊர்தி |_வசர ஊர்தி |அ, ப, பா, மா
fire-engine| தீயணைப்பு வாகனம் |_யணைப்பு வாகனம்| தீ, ப, பா, மா
lorry| சரக்குந்து | _ரக்குந்து | ச, மி, வி, மா`
      ]
    },

    {
      type: 'completeWord',
      label: 'கருவிகள்',
      id: 'tools',
      commonData: {
        images: 'custom',
        lang: 'ta'
      },
      data: [
        `axe| கோடரி| _டரி| கோ, தொ, மே, வீ
  balance| தராசு| _ராசு| த, நு, மே, வீ
  blackboard| கரும்பலகை| _ரும்பலகை| க,சி, வா, கை
  microscope| நுண்ணோக்கி| _ண்ணோக்கி| நு, மே, வீ, கை
  needle| ஊசி| _சி| ஊ, தொ, மே, வீ
  plough| கலப்பை| _லப்பை| க, தொ, மே, வீ
  saw| இரம்பம்| _ரம்பம்| இ, சி, வா, கை
  spade| மண்வெட்டி| _ண்வெட்டி| ம,ப, க, மூ`,

        `telescope| தொலைநோக்கி| _லைநோக்கி| தொ, மே, வீ, கை
  testtube| சோதனை குழாய்| _தனை குழாய்| சோ, தொ, க, மூ 
  thermometer| வெப்பமானி| _ப்பமானி| வெ, இ, சி, வா
  trowel| கரணை| _ரணை| க, சி, வா, கை
  compass| திசைகாட்டி| _சைகாட்டி| தி, சி, வா, கை`
      ]
    },

    {
      type: 'completeWord',
      label: 'படங்களும் பெயர்களும்',
      id: 'others',
      commonData: {
        images: 'custom',
        lang: 'ta'
      },
      data: [
        `sun| சூரியன்| _ரியன்| சூ,உ, ஊ, எ  
moon | நிலா | _லா | நி, ந, வீ, கை
rain| மழை| _ழை| ம, மா , ந , நி 
star| நட்சத்திரம்| _ட்சத்திரம்| ந, ஐ, ஒ, ஓ
milk| பால்| _ல்| பா, மே, ப , மி 
ring| மோதிரம்| _திரம்| மோ, உ, ஊ, எ
brush| தூரிகை| _ரிகை| தூ, து, தா, மோ
bone| எலும்பு துண்டு| _லும்பு துண்டு| எ, ஒ, ஓ, ஔ
auvai| ஔவை| _வை| ஔ, ஐ, ஒ, ஓ
bell| மணி| _ணி| ம, மா , ந , நி `,

        `bird| பறவை| _றவை| ப, ந, ஐ, ஒ
conch| சங்கு| _ங்கு| ச, சா , சி , சு 
five| ஐந்து| _ந்து| ஐ, ஒ, ஓ, ஔ
food| உணவு| _ணவு| உ, ஒ, ஓ, ஔ
fruits| பழங்கள்| _ழங்கள்| ப, பா , பு , ம 
king| அரசன்| _ரசன்| அ, உ, ஊ, ஆ 
kite| பட்டம்| _ட்டம்| ப, பா , ம , மா
ladder| ஏணி| _ணி| ஏ, உ, ஊ, எ`,

        `ladoo| லட்டு| _ட்டு| ல, அ, ஆ, இ
leaf|  இலை| _லை| இ, அ, ஆ,  ஈ
rishi| முனிவர்| _னிவர்| மு, ந, ஐ, ஒ
wheel| சக்கரம்| _க்கரம்| ச, அ, ஆ, இ
whistle| ஊதல்| _தல்| ஊ, உ, எ, ஏ
world| உலகம்| _லகம்| உ, ஊ, எ, ஏ
yazl| யாழ் | _ழ்| யா, ஒ, ஓ, ஔ`,

        `house| வீடு| _டு| வீ, கை, ச, கா
table| மேசை| _சை| மே, வீ, கை, ச
bed| மெத்தை| _த்தை| மெ, கை, ச, கா
candle| மெழுகுவர்த்தி| _ழுகுவர்த்தி| மெ, வா, கை, ச
chair| நாற்காலி| _ற்காலி| நா, மெ, கை, ச
shelf| அலமாரி|  _லமாரி| அ, மே, வீ, கை
baby | குழந்தை  | _ழந்தை | கு , கூ, கே, கி 
boy| சிறுவன்|  _றுவன்| சி, மெ, வா, கை
girl| சிறுமி| _றுமி| சி, வா, கை, ச`,

        `man| ஆண்|  _ண்| ஆ, மே, வீ, கை
woman| பெண்| _ண்| பெ, அ, மே, வீ
ball| பந்து| _ந்து| ப, க, மூ, கா
glasses| மூக்கு கண்ணாடி| _க்கு கண்ணாடி| மூ, மே, க, கை
clock| கடிகாரம் | _டிகாரம் |  க, கை, மூ, கா
watch| கைக்கடிகாரம் |_க்கடிகாரம்| கை, வா, ச, கா`
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
செ, sheep
கு, horse
ப, pig`,

        `யா, elephant
சி, lion
கு, monkey
பு , tiger
ந, fox
மு, crocodile`,

        `வ, zebra 
க, bear 
ஒ, camel
த, dragonfly
சு, shark
தி, whale`,

        `நீ, hippo
கா, rhino
மீ, fish
ஈ, winged-termites
எ, ant
பா, snake`,

        `அ, squirrel 
ஆ, tortoise
எ, rat
த, frog
ந, crab
ஈ, fly `,

        `ஓ, garden-lizard
எ, buffalo
வ, butterfly  
மா, cow
க, donkey`,

        `ஒ, giraffe
க, kangaroo 
சி, leopard
கீ, mongoose
கொ, mosquito`,

        `ஓ, wolf  
க, cockroach
வௌ, bat  
ப, lizard
மு, rabbit`
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
கோ, hen
கி, parrot
ம, peacock`,

        `சி, sparrow 
கோ, chick
கொ, crane 
மீ, kingfisher
மை, myna`,

        `நெ, ostrich
ஆ, owl
சே, rooster
க, eagle
ம, woodpecker `
      ]
    },
    {
      id: 'match-fruits',
      type: 'match',
      label: 'பொருத்துக : பழங்கள்',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `தி, grapes
வா, banana
கொ, guava
ப, jackfruit
மா, mango
அ, pineapple`,

        `ப, papaya
மா, pomegranate
த, watermelon
அ, fig
சீ, custard-apple
பே, dates`
      ]
    },
    {
      id: 'match-vegetables',
      type: 'match',
      label: 'பொருத்துக : காய்கறிகள்',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `வெ, onion
த, tomato
உ, potato
பூ, garlic
இ, ginger`,

        `மு, cabbage
சோ, corn
ப, pumpkin
பா, almond 
கு, capsicum`,

        `மு, cashewnut  
பா, bitter-gourd  
ப, chilli
தே, coconut 
கொ, corianderleaf`,

        `க, curryleaf
பு, mintleaf
மு, drumstick
வெ, ladies-finger
நி, peanut `,

        `மு, raddish
கீ, spinach 
க, brinjal 
ப, greenpeas 
வெ, cucumber`
      ]
    },
    {
      id: 'match-flowers',
      type: 'match',
      label: 'பொருத்துக : பூக்கள்',
      data: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true,
        text: `தா, lotus
சூ, sunflower
சா, marigold
செ, hibiscus
ம, jasmine
ரோ, rose`
      }
    },
    {
      id: 'match-bodyparts',
      type: 'match',
      label: 'பொருத்துக : உடல் உறுப்புகள்',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `கா, ear
                க, eye
                மு, hair
                கை, hand`,

        `வா, mouth
                பா, foot
                மூ, nose 
                ப, tooth`
      ]
    },
    {
      id: 'match-vehicles',
      type: 'match',
      label: 'பொருத்துக: வாகனங்கள்',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `வி, aeroplane
ப, boat
பே, bus
ம, car
மி, cycle
க, ship`,

        `தொ, train 
இ, tractor
அ, ambulance
தீ, fire-engine
ச, lorry`
      ]
    },
    {
      id: 'match-tools',
      type: 'match',
      label: 'பொருத்துக: கருவிகள்',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `கோ, axe
த, balance
க, blackboard
நு, microscope
ஊ, needle`,

        `க, plough
இர, saw
ம, spade
தொ, telescope`,

        `சோ, testtube
வெ, thermometer
க, trowel
தி, compass`
      ]
    },
    {
      id: 'match-others',
      type: 'match',
      label: 'பொருத்துக: படங்கள்',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `சூ, sun  
நி, moon
ம, rain
ந, star
பா, milk
மோ, ring`,

        `தூ, brush
எ, bone
ஒள, auvai 
ம, bell
ப, bird
ச, conch`,

        `ஐ, five
உ, food
ப, fruits
அ, king
ல, ladoo
ஏ,ladder`,

        `ப, kite
இ, leaf
மு, rishi
ச, wheel
உ, world
யா, yazl`,

        `வீ, house
மே, table
மெ, bed
நா, chair
அ, shelf
கு, baby
`,

        `மெ, candle
ஆ, man
பெ, woman
ப, ball
சி, girl
க, scissors`,

        `சி, boy
க, clock
கை, watch
ஊ, whistle
அ, eraser
பே, pen`,

        `மூ, glasses
பு, book
அ, stove
க, knife
பா, pot
வெ, butter`
      ]
    }
  ]
};
