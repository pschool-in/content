export default {
  label: 'படம்',
  id: 'ka-picture',
  img: 'image',
  list: [
    {
      type: 'completeWord',
      label: 'விலங்குகளும் பறவைகளும் ',
      id: 'animals-birds',
      commonData: {
        images: 'custom',
        lang: 'ka'
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
      
      `buffalo|  எருமை| _ருமை| எ, ஏ, ஐ, ஒ
      cow|  மாடு| _டு| மா, ஆ, ஊ, ஔ
      donkey| கழுதை | _ழுதை| வ, ச, ர, க 
      giraffe| ஒட்டகச்சிவிங்கி| _ட்டகச்சிவிங்கி| எ, ஏ, ஐ, ஒ
      kangaroo| கங்காரு| _ங்காரு| உ,வொ, ர, க 
      leopard| சிறுத்தை| _றுத்தை| உ, சி, எ, வ
      mongoose| கீரிப்பிள்ளை| _ரிப்பிள்ளை| ஐ, ஒ, ஓ, கீ
      rabbit| முயல்| _யல்| ஐ, மு, ஓ, ஔ
      wolf| ஓநாய்| _நாய்| ஐ, ஒ, ஓ, ஔ
      garden-lizard| ஓணான்| _ணான்| ஐ, ஒ, ஓ, ஔ`,
      
              `lizard| பல்லி| _ல்லி| ப, ஒ, ஓ, ஔ
      bat| வௌவால் |_வால் | வௌ, வொ, வை, வோ
      butterfly|  வண்ணத்துப்பூச்சி| _ண்ணத்துப்பூச்சி| வ, ச, ர, க
      mosquito| கொசு | _சு| ஐ, கொ, ஓ, ஔ
      cockroach| கரப்பான் பூச்சி| _ரப்பான் பூச்சி| ஐ, ஒ, க, ஔ
      chick| கோழிக்குஞ்சு| _ழிக்குஞ்சு| ஐ, மு, ஓ, கோ
      crane| கொக்கு| _க்கு| கொ, மு, ஓ, ஔ
      snake| பாம்பு | _ம்பு | பா,  பீ , பெ, ப
      kingfisher| மீன் கொத்தி| _ன் கொத்தி| ஐ, மு, ஓ, மீ
      ostrich| தீக்கோழி| _க்கோழி| தீ, மு, ஓ, ஔ`,
      
            `owl| ஆந்தை| _ந்தை| ஐ, ஆ, ஓ, ஔ
      rooster| சேவல்| _வல்| ஐ, மு, சே, ஔ
      vulture| கழுகு| _ழுகு| க, மு, ஓ, ஔ
      Myna| மைனா| _னா| ஐ, மு, மை, ஔ
      woodpecker| மரங்கொத்தி| _ரங்கொத்தி| ம, மு, ஓ, ஔ
      fish| மீன் | _ன்| மீ, னி , னீ , மி  
      duck| வாத்து | _த்து| வா, வ , ல , யா
      frog| தவளை | _வளை | த, ந , ட , தா 
      crab| நண்டு | _ண்டு | ந , நா, ன , னா 
      rat| எலி | _லி | எ, ய , ய் , ஏ`,
      
              `winged-termites| ஈசல் | _சல்| ஈ, இ , ஐ , ய்  
      ant| எறும்பு | _றும்பு| எ, ஏ , யே , ய 
      octopus| ஆக்டோபஸ்| _க்டோபஸ்| ஐ, ஆ, ஓ, ஔ
      fly| ஈ| _ |  ஈ, இ , ஐ , ய்
      crow| காகம் |_கம்|  கா, க, ப, ம
      dove| புறா | _றா | பு, பீ , பெ, ப     
      hen| கோழி | _ழி | கோ, கெ , கு , கை 
      parrot| கிளி | _ளி| கி, கோ, கெ, கீ
      peacock| மயில் | _யில் | ம, மு , மூ , மா  
      sparrow| சிட்டுக்குருவி| _ட்டுக்குருவி| சி, சீ , தி , டி`,
]
    },
{
        type: 'completeWord',
        label: 'காய்களும் கனிகளும் ',
        id: 'vegetables-fruits',
        commonData: {
          images: 'custom',
          lang: 'ka'
        },
        data: [
          carrot, ಗಜ್ಜರಿ
beetroot,ಕಂದು ಬೇರು
onion, ಈರುಳ್ಳಿ
tomato
potato, ಆಲೂ ಗಡ್ಡೆ
cabbage, ಎಲೆ ಕೋಸು
cauliflower, ಹೂ ಕೋಸು
corn, ಜೋಳ
cucumber, ಸೌತೇಕಾಯಿ
garlic, ಬೆಳ್ಳುಳ್ಳಿ
ginger, ಶುಂಠಿ
pumpkin, ಕುಂಬಳಕಾಯಿ
almond, ಬಾದಾಮಿ
beans, ಹುರಳೀಕಾಯಿ
bitter-gourd, ಹಾಗಲಕಾಯಿ
brinjal, ಬದನೇಕಾಯಿ
capsicum, ದೊಣ್ಣೆ ಮೆಣಸಿನಕಾಯಿ
cashewnut, ಗೋಡಂಬಿ
chilli, ಹಸಿರು ಮೆಣಸಿನಕಾಯಿ
coconut,ತೆಂಗಿನಕಾಯಿ
corianderleaf, ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು
curryleaf, ಕರಿಬೇವು
drumstick
greenpeas, ಬಟಾಣಿ
ladies-finger, ಬೆಂಡೇಕಾಯಿ
mintleaf, ಪುದಿನ ಸೊಪ್ಪು
peanut, ಕಡಲೆಕಾಯಿ
radish, 
          spinach, 

                `onion| வெங்காயம் | _ங்காயம்| வெ,  வா, வே , வொ 
tomato| தக்காளி | _க்காளி| த, ந , ட , தா 
potato| உருளைக்கிழங்கு | _ருளைக்கிழங்கு| உ, ஊ , ஓ , ஒ 
cabbage| முட்டைகோசு | _ட்டைகோசு | மு,  மூ, மெ, வை 
corn| சோளம் | _ளம் | சோ, தோ , சே,  சொ
carrot| காரட் | _ரட் | கா, க, ப, ம
Beans| பீன்ஸ்| _ன்ஸ்| ம, மு, பீ, ஔ
cucumber| வெள்ளரிக்காய் | _ள்ளரிக்காய் | வெ, வீ, வ, வா 
garlic| பூண்டு | _ண்டு | பூ, பு , ப , கு 
ginger| இஞ்சி | _ஞ்சி| இ, ஈ, பூ, பு`,

         `pumpkin| பரங்கிக்காய்| _ரங்கிக்காய்| ம, ப, ஓ, ஔ
brinjal| கத்திரி | _த்திரி| ம, க, ஓ, ஔ
ladies-finger| வெண்டைக்காய்| _ண்டைக்காய்| ம, மு, ஓ, வெ
raddish| ಮೂಲಂಗಿ| ಮೂಲಂಗಿ| ம, மு, ஓ, ஔ
bitter-gourd| பாகற்காய்| _கற்காய்| பா, மு, ஓ, ஔ
capsicum| குடை மிளகாய்| _டை மிளகாய்| ம, கு, ஓ, ஔ
broad beans| அவரைக்காய்| _வரைக்காய்| ம, அ, ஓ, ஔ
chilli| பச்சைமிளகாய்| _ச்சைமிளகாய்| ப, மு, ஓ, ஔ
coconut| தேங்காய்| _ங்காய்| தே, மு, ஓ, ஔ
corianderleaf|கொத்தமல்லி இலை| _த்தமல்லி இலை| ம, கொ, ஓ, ஔ`,

        `curryleaf| கறிவேப்பிலை| _றிவேப்பிலை| ம, மு, ஓ, க
greenpeas| பச்சை பட்டாணி| _ச்சை பட்டாணி| ம, மு, ஓ, ப
peanut| நிலக்கடலை| _லக்கடலை| ம, நி, ஓ, ஔ
almond| பாதாம்| _தாம்| ம, மு, ஓ, பா
cashewnut| முந்திரி | _ந்திரி| ம, மு, ஓ, ஔ
spinach| ಸೊಪ್ಪು| ಸೊಪ್ಪು| ம, மு, ஓ, கீ
ash gourd| பூசணிக்காய்| _சணிக்காய்| பூ, மு, ஓ, ஔ
ridge Gourd| பீர்க்கங்காய்| _ர்க்கங்காய்| பீ, மு, ஓ, ஔ`,
           


        `grapes| ದ್ರಾಕ್ಷಿಗಳು | ದ್ರಾಕ್ಷಿಗಳು | தி, பூ, பா, ழ
banana| ಬಾಳೆಹಣ್ಣು | ಬಾಳೆಹಣ್ಣು| வா, பூ, பா, ழ
watermelon| ಕಲ್ಲಂಗಡಿ ಹಣ್ಣು | ಕಲ್ಲಂಗಡಿ ಹಣ್ಣು| த, தி, பூ, வா
papaya| ಪಪ್ಪಾಯಿ | ಪಪ್ಪಾಯಿ| ம, மா, பா, ப
mango| ಮಾವು | ಮಾವು| ம, மா, பா, ப
jackfruit| ಜ್ಯಾಕ್ಫುಟ್ | ಜ್ಯಾಕ್ಫುಟ್| ப , பா, ழ, இ
guava| ಸೀಬೆಹಣ್ಣು |ಸೀಬೆಹಣ್ಣು| கொ, தோ, தி, பூ
pineapple| ಅನಾನಸ್ | ಅನಾನಸ್| அ, ஆ,  மா, வா
pomegranate| ದಾಳಿಂಬೆ |ದಾಳಿಂಬೆ| மா, வா, பா, ழ
apple| ಸೇಬು| ಸೇಬು| ஆ,  தி, இ, வா
orange ಕಿತ್ತಳೆ|ಕಿತ್ತಳೆ| ஆ,  தி, இ, வா
avocado| ಬೆಣ್ಣೆ |ಹಣ್ಣು|
fig| ಅಂಜೂರ|ಅಂಜೂರ| ஆ,  அ, இ, வா
muskmelon| ಖರ್ಬೂಜ| ಖರ್ಬೂಜ|`,
        ]
},
 {
        type: 'completeWord',
        label: 'பூக்கள்',
        id: 'flowers',
        commonData: {
        images: 'custom',
        lang: 'ka'
        },
        data: [
           `lotus| தாமரை| _மரை| ரு, தா, த, தி
Rose| ரோஜா | _ஜா|ரோ, சே, பா, மா
sunflower| சூரியகாந்தி | _ரியகாந்தி| சூ, தோ, தி , ஆ
marigold| சாமந்தி | _மந்தி | சா, ச, செ, சே
hibiscus| செம்பருத்தி | _ம்பருத்தி| செ, சே, பா, மா
jasmine| மல்லி| _ல்லி | ம, ப, பா, மா `,
                ]
        },
  {
        type: 'completeWord',
        label: 'உடல் உறுப்புகள்',
        id: 'bodyparts',
        commonData: {
        images: 'custom',
        lang: 'ka'
        },
        data: [
                `ear| காது | _து| கா, த, தி, க 
eye| கண் | _ண்| கா, த, தி, க  
foot| பாதம் | _தம்|  பா, ப, ம, மா
hair| முடி | _டி| மு, ம, மா, மெ 
hand| கை | _| கை, பை , சை , வை 
mouth| வாய் | _ய்| வா, வி, வீ, வ
nose| மூக்கு | _க்கு | மூ,  மு, மா, மெ 
tooth| பல் | _ல்| பா, ப, ம, மா`,

        ]
},
 {
        type: 'completeWord',
        label: 'வாகனங்கள்',
        id: 'vehicles',
        commonData: {
        images: 'custom',
        lang: 'ka'
        },
        data: [
                `aeroplane| விமானம் | _மானம்| வி, வீ, வ, வா 
boat| படகு | _டகு | ம, ப, பா, மா
bus| பேருந்து | _ருந்து | பே, பா, மா, மெ 
car| மகிழுந்து | _கிழுந்து | ம, ப, பா, மா
cycle| மிதிவண்டி | _திவண்டி | மி, வி, வீ, மீ 
ship| கப்பல் | _ப்பல் | க, சா, ச, கா 
train| தொடர்வண்டி| _டர்வண்டி| தொ, தோ , து , தூ
helicoptor| வானூர்தி| _னூர்தி |வா, சா, ச, கா
tractor| இழுவை இயந்திரம் |_ழுவை இயந்திரம் |இ, சா, ச, கா
ambulance| அவசர ஊர்தி |_வசர ஊர்தி |அ, ப, பா, மா`,

        `auto| ஆட்டோ| _ட்டோ | ஆ, மி, வி, மா
fire-engine| தீயணைப்பு வாகனம் |_யணைப்பு வாகனம்| தீ, ப, பா, மா
lorry| சரக்குந்து | _ரக்குந்து | ச, மி, வி, மா`,

      ]
    },
    {
        type: 'completeWord',
        label: 'படங்களும் பெயர்களும்',
        id: 'others',
        commonData: {
        images: 'custom',
        lang: 'ka'
        },
        data: [

    `house| வீடு| _டு| வீ, கை, ச, கா
table| மேசை| _சை| மே, வீ, கை, ச
bed| மெத்தை| _த்தை| மெ, கை, ச, கா
candle| மெழுகுவர்த்தி| _ழுகுவர்த்தி| மெ, வா, கை, ச
chair| நாற்காலி| _ற்காலி| நா, மெ, கை, ச
shelf| அலமாரி|  _லமாரி| அ, மே, வீ, கை
boy| சிறுவன்|  _றுவன்| சி, மெ, வா, கை
girl| சிறுமி| _றுமி| சி, வா, கை, ச
man| ஆண்|  _ண்| ஆ, மே, வீ, கை
woman| பெண்| _ண்| பெ, அ, மே, வீ`,

        `leaf|  இலை| _லை| அ, ஆ, இ, ஈ
world| உலகம்| _லகம்| உ, ஊ, எ, ஏ
whistle| ஊதல்| _தல்| உ, ஊ, எ, ஏ
ladder| ஏணி| _ணி| உ, ஊ, எ, ஏ
five| ஐந்து| _ந்து| ஐ, ஒ, ஓ, ஔ
auvai| ஔவை| _வை| ஐ, ஒ, ஓ, ஔ
yazl| யாழ் | _ழ்| யா, ஒ, ஓ, ஔ
sun| சூரியன்| _ரியன்| சூ,உ, ஊ, எ  
rain| மழை| _ழை| உ, ஊ, எ, ம
star| நட்சத்திரம்| _ட்சத்திரம்| ந, ஐ, ஒ, ஓ`,

`milk| பால்| _ல்| பா, ஒ, ஓ, ஔ
ring| மோதிரம்| _திரம்| மோ, உ, ஊ, எ
brush| தூரிகை| _ரிகை| தூ, உ, ஊ, எ 
bone| எலும்பு துண்டு| _லும்பு துண்டு| எ, ஒ, ஓ, ஔ
bell| மணி| _ணி| ம, ஒ, ஓ, ஔ
bird| பறவை| _றவை| ப, ந, ஐ, ஒ
conch| சங்கு| _ங்கு| ச, உ, ஊ, எ
food| உணவு| _ணவு| உ, ஒ, ஓ, ஔ
fruits| பழங்கள்| _ழங்கள்| ப, ந, ஐ, ஒ
king| அரசன்| _ரசன்| அ, உ, ஊ, எ`,

        `kite| பட்டம்| _ட்டம்| ப, அ, ஆ, இ
ladoo| லட்டு| _ட்டு| ல, அ, ஆ, இ
rishi| முனிவர்| _னிவர்| மு, ந, ஐ, ஒ
wheel| சக்கரம்| _க்கரம்| ச, அ, ஆ, இ
ball| பந்து| _ந்து| ப, க, மூ, கா
coat| மேலங்கி| _லங்கி| மே, க, மூ, கா
glasses| மூக்கு கண்ணாடி| _க்கு கண்ணாடி| மூ, மே, க, கை
clock| கடிகாரம் | _டிகாரம் | கை, க, மூ, கா
watch| கைக்கடிகாரம் |_க்கடிகாரம்| வா, கை, ச, கா`,
        ]        
},    
{
type: 'completeWord',
label: 'கருவிகள்',
id: 'tools',
commonData: {
images: 'custom',
lang: 'ka'
},
data: [

        `Axe| கோடரி| _டரி| கோ, தொ, மே, வீ
balance| தராசு| _ராசு| த, நு, மே, வீ
blackboard| கரும்பலகை| _ரும்பலகை| க,சி, வா, கை
hose| குழாய்| _ழாய்| கு, நு, மே, வீ
microscope| நுண்ணோக்கி| _ண்ணோக்கி| நு, மே, வீ, கை
needle| ஊசி| _சி| ஊ, தொ, மே, வீ
plier| இடுக்கி| _டுக்கி| இ, சி, வா, கை
plough| கலப்பை| _லப்பை| க, தொ, மே, வீ
saw| இரம்பம்| _ரம்பம்| இ, சி, வா, கை
spade| மண்வெட்டி| _ண்வெட்டி| ம,ப, க, மூ`, 

        `telescope| தொலைநோக்கி| _லைநோக்கி| தொ, மே, வீ, கை
testtube| சோதனை குழாய்| _தனை குழாய்| சோ, ப, க, மூ 
thermometer| வெப்பமானி| _ப்பமானி| வெ, இ, சி, வா
trowel| கரணை| _ரணை| க, சி, வா, கை
walkie-talkie| நடந்துகொண்டே பேசும் கருவி| _டந்துகொண்டே பேசும் கருவி| ந,ப, க, மூ 
awl| குத்தூசி| _த்தூசி| கு, மே, வீ, கை
compass| திசைகாட்டி| _சைகாட்டி| தி, சி, வா, கை
hacksaw| வெட்டும் ரம்பம்| _ட்டும் ரம்பம்| வெ, ப, க, மூ`, 
]
},

    {
      id: 'match-animals',
      type: 'match',
      label: 'பொருத்துக',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `யா, elephant
சி, lion
கு, monkey
பு , tiger
வ, zebra
பூ, cat
நா, dog
ஆ, goat
ப, pig
கு, horse`,

`செ, sheep
நீ, hippo
கா, rhino
ந, fox
மு, crocodile
வ, zebra 
க, bear 
ஒ, camel
சு, shark
தி, whale`,

`த, dragonfly
மீ, fish
த, frog
ந, crab
பா, snake
அ, squirrel 
ஆ, tortoise
எ, rat
ஈ, winged-termites
எ, ant`,

`ஈ, fly 
வௌ, bat  
எ, buffalo
வ, butterfly  
மா, cow
க, donkey  
ஒ, giraffe 
க, kangaroo 
சி, leopard
கீ, mongoose`,

`கொ, mosquito
ஆ, octopus
ஓ, wolf  
க, cockroach
ஓ, garden-lizard
ப, lizard
மு, rabbit`, 


        `தி, grapes
வா, banana
த, watermelon
ப, papaya
மா, mango
ப, jackfruit
கொ, guava
அ, pineapple
மா, pomegranate
ஆ, apple
அ, fig
சீ, custard-apple
ஆ, orange
பே, dates`,

        `தா, lotus
சூ, sunflower
சா, marigold
செ, hibiscus
ம, jasmine
ரோ, rose`,

        `வி, aeroplane
ப, boat
பே, bus
ம, car
மி, cycle
க, ship
தொ, train 
வா, helicoptor
இ, tractor
அ, ambulance
தீ, fire-engine
ச, lorry`,

        `கா, ear
க, eye
மு, hair
கை, hand
வா, mouth
பா, foot
மூ, nose 
ப, tooth`,

        `வெ, onion
த, tomato
உ, potato
பூ, garlic
இ, ginger
கா, carrot
பீ, beetroot
மு, cabbage
கா, cauliflower
சோ, corn`,

`ப, pumpkin
பா, almond 
பீ, beans
பா, bitter-gourd  
கு, capsicum 
மு, cashewnut  
ப, chilli
தே, coconut 
கொ, corianderleaf
க, curryleaf`,

`பு, mintleaf
மு, drumstick
ப, greenpeas,  
நி, peanut 
மு, raddish
கீ, spinach 
க, brinjal 
வெ, ladies-finger
வெ, cucumber`,

        `கா, crow
பு, dove
வா, duck
கோ, hen
கி, parrot
ம, peacock
சி, sparrow 
கோ, chick
கொ, Crane 
மீ, kingfisher`,

`மை, myna
தீ, ostrich
ஆ, owl
சே, rooster
க, vulture
ம, woodpecker `,

`அ, eraser
பே, pen
எ, pencil 
அ, ruler
பு, schoolbag
க, scissors
த, water bottle
க, calculator
பு, book`,

        `அ, stove
        மு, fork
        க, knife
        பா, pot
        வெ, butter `,

        `கோ, axe
        த, balance, ராசு
        க, blackboard
        கு, hose
        நு, microscope
        ஊ, needle 
        இ, plier
        க, plough
        இர, Saw
        ம, spade`,

`தொ, telescope
சோ, testtube
வெ, thermometer
க, trowel, ரணை
ந, walkie-talkie
கு, awl
தி, compass
வெ, hacksaw`,

        `வீ, house
மே, table
மெ, bed
மெ, candle
நா, chair
அ, shelf
சி, boy
சி, girl
ஆ, man
பெ, woman`,
        
        `ப, ball
மே, coat
மூ, glasses
க, clock
கை, watch
சூ, sun  
ம, rain
ந, star
பா, milk
மோ, ring`,

        `தூ, brush
எ, bone
ஒள, auvai 
ம, bell
ப, bird
ச, conch
ஐ, five
உ, food
ப, fruits
அ, king`,

        `ப, kite
ஏ,ladder
ல, ladoo
இ, leaf
மு, rishi
ச, wheel
ஊ, whistle
உ, world
யா, yazl`,      
]
    },
    {
      type: 'connectLetters',
      label: 'சொல் உருவாக்குக',
      id: 'connect-letters',
      commonData: {
        title: 'எழுத்துக்களை இணைத்து சொல் உருவாக்குக ',
        printTitle: 'Form the word using the letters.',
        type: 'image',
        lang: 'ka'
      },
      data: [
        `grapes, திராட்சை
banana, வாழைப்பழம்
watermelon, தர்பூசணி
papaya, பப்பாளி
mango, மாம்பழம்
jackfruit, பலாப்பழம்
guava, கொய்யாப்பழம்
pineapple, அன்னாசிப்பழம் 
pomegranate, மாதுளை
apple, ஆப்பிள்
orange, ஆரஞ்சு`,

        `squirrel, அணில்
tortoise,  ஆமை
leaf,  இலை
winged-termites,  ஈசல்
world, உலகம்
whistle, ஊதல்
ant, எறும்பு
ladder, ஏணி
five, ஐந்து
camel, ஒட்டகம்
boat, ஓடம்
auvai, ஔவை`,

        `lotus, தாமரை
sunflower, சூரியகாந்தி
marigold, சாமந்தி
hibiscus, செம்பருத்தி
jasmine, மல்லி`,

        `aeroplane, விமானம்
boat, படகு
bus, பேருந்து
car, மகிழுந்து
cycle, மிதிவண்டி 
ship, கப்பல்
train, தொடர்வண்டி`,

        `ear, காது
eye, கண்
foot, பாதம்
hair, முடி
hand, கை
mouth, வாய்
nose, மூக்கு 
tooth, பல்`,

        `onion, வெங்காயம் 
tomato, தக்காளி
potato, உருளைக்கிழங்கு
cabbage, முட்டைகோசு
corn, சோளம் 
carrot, காரட்
cucumber, வெள்ளரிக்காய்
garlic, பூண்டு
ginger, இஞ்சி`,

        `cat, பூனை
dog, நாய்
goat, ஆடு
sheep, செம்மறி ஆடு  
horse, குதிரை
pig, பன்றி
elephant, யானை
lion, சிங்கம்
monkey, குரங்கு
tiger, புலி`,

        `fox, நரி 
crocodile, முதலை
zebra, வரிக்குதிரை
bear, கரடி
camel, ஒட்டகம்
shark, சுறா
whale, திமிங்கிலம்
hippo, நீர்யானை
rhino, காண்டாமிருகம்`,

        `fish, மீன்
frog, தவளை
crab, நண்டு
snake, பாம்பு
rat, எலி
winged-termites, ஈசல்
ant, எறும்பு
dragonfly, தட்டான்
fly, ஈ`,

        `crow, காகம்
dove, புறா
duck, வாத்து
hen, கோழி
parrot, கிளி
peacock, மயில்
sparrow, சிட்டுக்குருவி`
      ]
    },
    {
      type: 'completeWord',
      label: 'விடுபட்ட எழுத்துக்களை நிரப்புக ',
      id: 'write-word',
      commonData: {
        images: 'custom',
        lang: 'ka'
      },
      data: [
        `squirrel| அணில்
tortoise|  ஆமை
leaf|  இலை
winged-termites|  ஈசல்
world| உலகம்
whistle| ஊதல்
ant| எறும்பு
ladder| ஏணி
five| ஐந்து
camel| ஒட்டகம்
boat| ஓடம்
auvai| ஔவை`,

        `grapes| திராட்சை
banana| வாழைப்பழம்
watermelon| தர்பூசணி
papaya| பப்பாளி
mango| மாம்பழம்
jackfruit| பலாப்பழம்
guava| கொய்யாப்பழம்
pineapple| அன்னாசிப்பழம் 
pomegranate| மாதுளை
apple| ஆப்பிள்
orange| ஆரஞ்சு`,

        `lotus| தாமரை
sunflower| சூரியகாந்தி
marigold| சாமந்தி
hibiscus| செம்பருத்தி
jasmine| மல்லி`,

        `aeroplane| விமானம்
boat| படகு
bus| பேருந்து
car| மகிழுந்து
cycle| மிதிவண்டி 
ship| கப்பல்
train| தொடர்வண்டி`,

        `ear| காது
eye| கண்
foot| பாதம்
hair| முடி
hand| கை
mouth| வாய்
nose| மூக்கு 
tooth| பல்`,

        `onion| வெங்காயம் 
tomato| தக்காளி
potato| உருளைக்கிழங்கு
cabbage| முட்டைகோசு
corn| சோளம் 
carrot| காரட்
cucumber| வெள்ளரிக்காய்
garlic| பூண்டு
ginger| இஞ்சி`,

        `cat| பூனை
dog| நாய்
goat| ஆடு
sheep| செம்மறி ஆடு | 
horse| குதிரை
pig| பன்றி
elephant| யானை
lion| சிங்கம்
monkey| குரங்கு
tiger| புலி`,

        `fox| நரி 
crocodile| முதலை
zebra| வரிக்குதிரை
bear| கரடி
camel| ஒட்டகம்
shark| சுறா
whale| திமிங்கிலம்
hippo| நீர்யானை
rhino| காண்டாமிருகம்`,

        `fish| மீன்
frog| தவளை
crab| நண்டு
snake| பாம்பு
rat| எலி
winged-termites| ஈசல்
ant| எறும்பு
dragonfly| தட்டான்
fly| ஈ`,

        `crow| காகம்
dove| புறா
duck| வாத்து
hen| கோழி
parrot| கிளி
peacock| மயில்
sparrow| சிட்டுக்குருவி`
      ]
    }
  ]
};
