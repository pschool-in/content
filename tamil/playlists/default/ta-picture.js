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
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க '
      },
      data: [
        `cat| பூனை | _னை | பூ, பு , ப , கு 
dog| நாய் | _ய் | நா, ன , னா , ண 
goat| ஆடு | _டு| ஆ, அ,  இ, ஈ
horse| குதிரை | _திரை | கு, கூ, கே, கை  
pig| பன்றி | _ன்றி | ப, பா, ம, மா
elephant| யானை | _னை | யா, ய, ல, ழ 
lion| சிங்கம் | _ங்கம் | சி, சு, சீ, சூ  
monkey| குரங்கு | _ரங்கு| கு, கூ, கே, கெ 
tiger| புலி| _லி| பு, பி, பீ, பெ
fox| நரி | _ரி | ந, நா, ன, னா`,

`bear| கரடி | _ரடி | க, ச, சே, கு
camel| ஒட்டகம் | _ட்டகம் | ஒ, ஊ, ஓ, வ
fish| மீன் | _ன்| மீ, னி, னீ, மி  
frog| தவளை | _வளை | த, ந, ட, தா 
snake| பாம்பு | _ம்பு | பா, பீ, பெ, ப
squirrel| அணில் | _ணில் | அ, ஆ, ஊ, தி
tortoise| ஆமை | _மை | ஆ, அ, ஊ, தி
rat| எலி | _லி | எ, ய, ய், ஏ
buffalo|  எருமை| _ருமை| எ, ஏ, ஐ, ஒ
butterfly|  வண்ணத்துப்பூச்சி| _ண்ணத்துப்பூச்சி| வ, ச, ர, க`,

`cow|  பசு| _சு| ப, மா, ஆ, ஊ
donkey| கழுதை | _ழுதை| க, வ, ச, ர
giraffe| ஒட்டகச்சிவிங்கி| _ட்டகச்சிவிங்கி| ஒ, எ, ஏ, ஐ
mosquito| கொசு | _சு| கொ, ஐ, ஓ, ஔ
fly| ஈ| _ |  ஈ, இ, ஐ, ய்
earthworm| மண்புழு| _ண்புழு|ம, மா, மி, மீ
ant| எறும்பு | _றும்பு| எ, ஏ, யே, ய 
lizard| பல்லி| _ல்லி| ப, பி, பா, பு
rabbit| முயல்| _யல்| மு, ஐ, ஓ, ஔ
cockroach| கரப்பான் பூச்சி| _ரப்பான் பூச்சி| க, ஐ, ஒ, ஔ`,

`antelope| மான்| _ன்|மா, மி, மீ, மு
spider| சிலந்தி| _லந்தி|சி, ச, ர, க
zebra| வரிக்குதிரை | _ரிக்குதிரை | வ, வி, வீ, வா`,


` sheep| செம்மறி ஆடு | _ம்மறி ஆடு| செ, சை, ச , சே
hippo| நீர்யானை| _ர்யானை | நீ, நி, னி, னீ 
rhino| காண்டாமிருகம்| _ண்டாமிருகம்| கா, க, தோ, சே
crocodile| முதலை | _தலை | மு, மூ, மீ, மே 
shark| சுறாமீன்| _றாமீன்| சு, கு, கூ, சூ  
whale| திமிங்கிலம் | _மிங்கிலம்| தி, டி, டீ, தீ  
dragonfly| தட்டான்| _ட்டான்| த, ந, ட, தா
crab| நண்டு | _ண்டு | ந, நா, ன, னா 
winged-termites| ஈசல் | _சல்| ஈ, இ, ஐ, ய்  
bat| வௌவால் |_வால் | வௌ, வொ, வை, வோ`,

`kangaroo| கங்காரு| _ங்காரு| க, உ, வொ, ர
leopard| சிறுத்தை| _றுத்தை| சி, உ, எ, வ
mongoose| கீரிப்பிள்ளை| _ரிப்பிள்ளை| கீ, ஐ, ஒ, ஓ
wolf| ஓநாய்| _நாய்| ஓ, ஐ, ஒ, ஔ
garden-lizard| ஓணான்| _ணான்| ஓ, ஐ, ஒ, ஔ
boar| காட்டுப்பன்றி| _ட்டுப்பன்றி|கா, க, கி, ப
hyena| கழுதைப் புலி| _ழுதைப் புலி|க, கா, ம, இ
polarbear| பனிக்கரடி| _னிக்கரடி|ப, பி, பீ, பு
bug| வண்டு| _ண்டு| வ, வா, வி, வீ
jackal| நரி| _ரி|ந, நா, நி, நீ`,

`prawn| இறால்| _றால்|இ, ஈ, உ, எ
bull| காளை| _ளை| கா, கி, கு, க 
python| மலைப்பாம்பு| _லைப்பாம்பு|ம, மா, மி, மீ
bison| காட்டெருமை| _ட்டெருமை|கா, கி, கு, க
chameleon| பச்சோந்தி| _ச்சோந்தி|ப, பி, பீ, பு
porcupine| முள்ளம்பன்றி| _ள்ளம்பன்றி|மு, மா, மி, மீ
bee| தேனீ| _னீ|தே, தீ, து, தூ
goldfish| தங்கமீன்| _ங்கமீன்|த, கி, மா, தி
seahorse| கடற்குதிரை| _டற்குதிரை|க, கா, கி, கு`,

`hamster| வெள்ளெலி| _ள்ளெலி| வெ, செ, ரெ, நெ 
caterpillar| கம்பளிப்பூச்சி| _ம்பளிப்பூச்சி|க, கி, கு, சி
hedgehog| முள்ளெலி| _ள்ளெலி|மு, மா, மி, மீ
stingray| திருக்கை மீன்| _ருக்கை மீன்|தி, தே, தீ, து`
      ]
    },
    {
      type: 'completeWord',
      label: 'பறவைகள்',
      id: 'birds',
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
owl| ஆந்தை| _ந்தை| ஆ, ஐ, ஓ, ஔ`,

 `kingfisher| மீன் கொத்தி| _ன் கொத்தி| மீ, ஐ, மு, ஓ
chick| கோழிக்குஞ்சு| _ழிக்குஞ்சு| கோ, ஐ, மு, ஓ
ostrich| நெருப்புக்கோழி | _ருப்புக்கோழி | நெ, தீ, மு, ஓ
woodpecker| மரங்கொத்தி| _ரங்கொத்தி| ம, மு, ஓ, ஔ
sparrow| சிட்டுக்குருவி| _ட்டுக்குருவி| சி, சீ, தி , டி
falcon| பருந்து| _ருந்து| ப, பி, பு, பூ
swan| அன்னப்பறவை| _ன்னப்பறவை|அ, ஆ, க, இ 
spotted-dove| மணிப்புறா|_ணிப்புறா| ம, பை, மா, மி
turkey| வான்கோழி| _ன்கோழி| வா,வீ, வு, வூ
macow| பஞ்சவர்ணக்கிளி| _ஞ்சவர்ணக்கிளி| ப, பீ, பே, பை`
      ]
    },
    {
      type: 'completeWord',
      label: 'பழங்கள்',
      id: 'fruits',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க '
      },
      data: [
        `apple| ஆப்பிள்| _ப்பிள்| ஆ, வா, க, இ
        grapes| திராட்சை | _ராட்சை | தி, பூ, பா, ழ
banana| வாழைப்பழம் | _ழைப்பழம்| வா, பூ, பா, ழ
guava| கொய்யாப்பழம் | _ய்யாப்பழம்| கொ, தோ, தி, பூ
jackfruit| பலாப்பழம் | _லாப்பழம்| ப, பா, ழ, இ
mango| மாம்பழம் | _ம்பழம்| மா, ம, பா, ப`,

`orange| ஆரஞ்சு| _ரஞ்சு| ஆ, வா, க, இ
papaya| பப்பாளி | _ப்பாளி| ப, ம, மா, பா
pineapple| அன்னாசி | _ன்னாசி | அ, ஆ, மா, வா
pomegranate| மாதுளை | _துளை| மா, வா, பா, ழ
watermelon| தர்பூசணி | _ர்பூசணி| த, தி, பூ, வா
sugarcane| கரும்பு | _ரும்பு| க, கு, ம, பு`,

`wood-apple| விளாம்பழம்| _ளாம்பழம்|வி, சீ, வா, நா
gooseberry| நெல்லிக்காய்| _ல்லிக்காய்|நெ, நா, கா, சா
lemon| எலுமிச்சை| _லுமிச்சை|எ, இ, ஆ, ச
custard-apple| சீத்தாப்பழம்| _த்தாப்பழம்| சீ, ஆ, தி, இ
dates| பேரிச்சை | _ரிச்சை| பே, ஆ, இ, வா
sweet-potato| சர்க்கரைவள்ளி கிழங்கு| _ர்க்கரைவள்ளி கிழங்கு| ச, சா, சி, சீ 
jamun| நாவல் பழம்| _வல் பழம்| நா, ப, வ, ழ`,

`pear| பேரிக்காய்| _ரிக்காய்| பே, பீ, கா, பை
jujube| இலந்தைப்பழம்| _லந்தைப்பழம்| இ, ஆ, ப, ழ
sapotta| சப்போட்டா| _ப்போட்டா| ச, சா, சி, சீ
tapioca| மரவள்ளிக்கிழங்கு| _ரவள்ளிக்கிழங்கு| ம, வ, கி, ழ
fig| அத்திப்பழம்| _த்திப்பழம்| அ, ஆ, இ, வா
muskmelon| முலாம்பழம்|  _லாம்பழம்| மு, ம, வ, கி`
      ]
    },
    {
      type: 'completeWord',
      label: 'காய்கறிகள்',
      id: 'vegetables',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க '
      },
      data: [
        `carrot| காரட்| _ரட்|கா, தா, வா, பா
        beetroot| பீட்ரூட்| _ட்ரூட்|பீ, வீ, ஊ, ஓ
        onion| வெங்காயம் | _ங்காயம்| வெ, வா, வே, வொ 
  tomato| தக்காளி | _க்காளி| த, ந, ட, தா 
  potato| உருளைக்கிழங்கு | _ருளைக்கிழங்கு| உ, ஊ, ஓ , ஒ 
  cabbage| முட்டைகோசு | _ட்டைகோசு | மு, மூ, மெ, வை 
  raw-banana| வாழைக்காய்| _ழைக்காய்| வா, உ, வி, வீ
  garlic| பூண்டு | _ண்டு | பூ, பு, ப, கு `,

  `ginger| இஞ்சி | _ஞ்சி| இ, ஈ, பூ, பு
  raddish| முள்ளங்கி| _ள்ளங்கி| மு, ம, ஓ, ஔ
  bitter-gourd| பாகற்காய்| _கற்காய்| பா, மு, ஓ, ஔ
  brinjal| கத்திரி | _த்திரி| க, ம, ஓ, ஔ
  chilli| பச்சைமிளகாய்| _ச்சைமிளகாய்| ப, மு, ஓ, ஔ
  coconut| தேங்காய்| _ங்காய்| தே, மு, ஓ, ஔ
  ladies-finger| வெண்டைக்காய்| _ண்டைக்காய்|  வெ, ம, மு, ஓ
  drumstick | முருங்கைக்காய் | _ருங்கைக்காய் | மு, ம, கு, ப`,

  `tamarind| புளி| _ளி| பு, ப, பா, பி
  mushroom| காளான்| _ளான்| கா, க, கி, கீ
  curryleaf| கருவேப்பிலை| _ருவேப்பிலை| க, கு, கூ, கெ
  corianderleaf|கொத்தமல்லி| _த்தமல்லி| கொ, ம, ஓ, ஔ
  mintleaf | புதினா | _தினா | பு, பூ, ப, கு
  spinach| கீரை| _ரை| கீ, ம, மு, ஓ
  tulsi| துளசி| _ளசி| து, ம, கோ, வு
  turmeric| மஞ்சள்| _ஞ்சள்| ம, மு, மெ, மி`,


  `chickpea| கொண்டைக்கடலை| _ண்டைக்கடலை| கொ, க, கு, கி
  almond| பாதாம்| _தாம்| பா, ம, மு, ஓ
  cashewnut| முந்திரி | _ந்திரி| மு, ம, ஓ, ஔ
  pumpkin| பரங்கிக்காய்| _ரங்கிக்காய்|  ப, ம, ஓ, ஔ
  capsicum| குடை மிளகாய்| _டை மிளகாய்| கு, ம, ஓ, ஔ
  cucumber| வெள்ளரிக்காய் | _ள்ளரிக்காய் | வெ, வீ, வ, வா
  corn| மக்காச்சோளம்| _க்காச்சோளம்| ம, அ, வ, ச
  broad-beans| அவரைக்காய்| _வரைக்காய்| அ, வ, ஆ, மு`,

  `ashgourd| பூசணிக்காய் | _சணிக்காய்| பூ, ச, கா, பீ 
  ridgegourd| பீர்க்கங்காய்| _ர்க்கங்காய்| பீ, க, கா, பூ
  banana-flower| வாழைப்பூ | _ழைப்பூ| வா, வி, வீ, வு
  bottlegourd| சுரைக்காய்|_ரைக்காய் | சு, கு, டு, மு
  ivygourd| கோவைக்காய்| _வைக்காய்| கோ, கு, கூ, கெ
  kohlrabi| நூல்கோல்| _ல்கோல்| நூ, ந, நா, நி
  snake-gourd| புடலங்காய்| _டலங்காய்| பு, ப, பா, பி
  spring-onion| வெங்காயத்தாள்| _ங்காயத்தாள்| வெ, வா, வி, வீ`,

  `banana-stem| வாழைத்தண்டு| _ழைத்தண்டு| வா, வ, வி, வீ
  cluster-beans| கொத்தவரங்காய்| _த்தவரங்காய்| கொ, க, கா, பூ
  cauliflower| காலிப்பிளார்| _லிப்பிளார்|கா, வா, பா, நா
  beans| பீன்ஸ்| _ன்ஸ்|பீ, வி, வீ, கி
  fenugreek| வெந்தயக்கீரை| _ந்தயக்கீரை| வெ, வா, வி, வீ
  drumstick-leaves| முருங்கை கீரை| _ருங்கை கீரை| மு, ம, பு, து
  greenpeas| பச்சை பட்டாணி| _ச்சை பட்டாணி| ப, ம, மு, ஓ
  peanut| வேர்க்கடலை| _ர்க்கடலை| வே, ம, ஓ, ஔ
  elephant-yam| சேனைக்கிழங்கு| _னைக்கிழங்கு| சே, கி, ழ, கு`,
      ]
    },
    {
      type: 'completeWord',
      label: 'பூக்கள்',
      id: 'flowers',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க '
      },
        data:  [
          `rose| ரோஜா | _ஜா|ரோ, சே, பா, மா
        lotus| தாமரை| _மரை| தா, ரு, த, தி
        sunflower| சூரியகாந்தி | _ரியகாந்தி| சூ, தோ, தி , ஆ
        hibiscus| செம்பருத்தி | _ம்பருத்தி| செ, சே, பா, மா
        mogra| குண்டுமல்லி| _ண்டுமல்லி|கு, ம, ப, பா
        jasmine| முல்லை| _ல்லை|மு, ம, மா, மே`,
        
        `marigold| சாமந்தி | _மந்தி | சா, ச, செ, சே
        magnolia| செண்பகம்|_ண்பகம்|செ, ச, சா, சி
        periwinkle| நித்தியகல்யாணி| _த்தியகல்யாணி|நி, தி, தா, வி
        water-lily| அல்லி| _ல்லி|அ, ஆ, உ, இ`
      ]
    },
    {
      type: 'completeWord',
      label: 'வாகனங்கள்',
      id: 'vehicles',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க '
      },
      data: [
        `bus| பேருந்து | _ருந்து | பே, பா, மா, மெ 
car| மகிழுந்து | _கிழுந்து | ம, ப, பா, மா
cycle| மிதிவண்டி | _திவண்டி | மி, வி, வீ, மீ 
aeroplane| விமானம் | _மானம்| வி, வீ, வ, வா 
boat| படகு | _டகு | ம, ப, பா, மா
bullock-cart| மாட்டுவண்டி| _ட்டுவண்டி| மா, மீ, ம, மெ
horse-carriage| குதிரைவண்டி| _திரைவண்டி| கு, கூ, கி, கா 
ship| கப்பல் | _ப்பல் | க, சா, ச, கா 
train| தொடர்வண்டி| _டர்வண்டி| தொ, தோ , து , தூ`,

`ambulance| அவசர ஊர்தி |_வசர ஊர்தி |அ, ப, பா, மா
tractor| இழுவை இயந்திரம் |_ழுவை இயந்திரம் |இ, சா, ச, கா
cart| கட்டைவண்டி| _ட்டைவண்டி| க, கா, கீ, கு
fire-engine| தீயணைப்பு வாகனம் |_யணைப்பு வாகனம்| தீ, ப, பா, மா
lorry| சரக்குந்து | _ரக்குந்து | ச, மி, வி, மா
rocket| ஏவுகனை| _வுகனை| ஏ, எ, ஐ, ஒ
submarine| நீர்மூழ்கிக்கப்பல்| _ர்மூழ்கிக்கப்பல்| நீ, ந, நா, நி`
      ]
    },
    {
      type: 'completeWord',
      label: 'தொழில்',
      id: 'jobs',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க '
      },
      data: [
        `postman| தபால்காரர்| _பால்காரர்| த, தி, தீ, து
        teacher| ஆசிரியர்| _சிரியர்| ஆ, அ, இ, உ
        nurse| செவிலியர்| _விலியர்| செ, ச, சா, சி
        chef| சமையல்காரர்| _மையல்காரர்| ச, சா, சி, செ
        doctor| மருத்துவர்| _ருத்துவர்| ம, மீ, மா, மி
        police| காவல்| _வல்| கா, கொ, கி, கீ
        fisherman| மீனவர்| _னவர்| மீ, ம, மா, மி
        sailor| மாலுமி| _லுமி| மா, ம, மி, மீ
        carpenter| தச்சர்| _ச்சர்| த, தி, தீ, து
        weaver| நெசவாளர்| _சவாளர்| நெ, நா, நி, நீ`,



        `astronaut|விண்வெளிவீரர்|_ண்வெளிவீரர்|வி, வீ, வு, வூ
        clown| கோமாளி| _மாளி| கோ, கெ, கே, கை
        barber| முடி திருத்துபவர்| _டி திருத்துபவர்|மு, மா, ம, மி
        washerman| சலவை செய்பவர்| _லவை செய்பவர்|ச, சி, செ, சா 
        blacksmith| கொல்லர்| _ல்லர்| கொ, கா, கி, கீ
        cobbler| செருப்புதைப்பவர்| _ருப்புதைப்பவர்| செ, ச, சா, சி
        goldsmith| பொற்கொல்லர்| _ற்கொல்லர்| பொ, ப, பா, பி
        potter| குயவர்| _யவர்| கு, க, கா, கீ
        warrior| போர்வீரர்| _ர்வீரர்| போ, பொ, ப, பா
        soldier| சிப்பாய்| _ப்பாய்| சி,செ, ச, சா`,
      ]
    },
    {
      type: 'completeWord',
      label: 'உடை',
      id: 'dress',
      data: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க ',
        text: 
        `shoe| காலணி| _லணி| கா, கி, கீ, கு
        shirt| சட்டை| _ட்டை| ச, சா, சி, செ
        hat| தொப்பி| _ப்பி| தொ, த, தி, தீ
        trousers| கால்சட்டை| _ல்சட்டை| கா, க, கி, கீ
        dress| உடை| _டை| உ, ஊ, எ, ஏ
        sock| காலுறை| _லுறை| கா, கீ, கி, கு
        coat| மேலங்கி| _லங்கி| மே, ம, மா, மி`
      }
    },
    {
      type: 'completeWord',
      label: 'உடல் உறுப்புகள்',
      id: 'bodyparts',
      data: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க ',
        text: `ear| காது | _து| கா, த, தி, க 
eye| கண் | _ண்| க , கா, த, தி
foot| பாதம் | _தம்|  பா, ப, ம, மா
hair| முடி | _டி| மு, ம, மா, மெ 
hand| கை | _| கை, பை , சை , வை 
mouth| வாய் | _ய்| வா, வி, வீ, வ
nose| மூக்கு | _க்கு | மூ,  மு, மா, மெ 
tooth| பல் | _ல்| ப, பா, ம, மா`
      }
    },
    {
      type: 'completeWord',
      label: 'வீடு',
      id: 'house',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க '
      },
      data: [
        `house| வீடு| _டு| வீ, கை, ச, கா
    table| மேசை| _சை| மே, வீ, கை, ச
    radio| வானொலி| _னொலி| வா, வீ, வ, வு
    chair| நாற்காலி| _ற்காலி| நா, மெ, கை, ச
    shelf| அலமாரி|  _லமாரி| அ, மே, வீ, கை
    door| கதவு| _தவு| க, கா, கி, கீ
    grandfather| தாத்தா| _த்தா| தா, த, தி, க
    man| ஆண்|  _ண்| ஆ, மே, வீ, கை
    woman| பெண்| _ண்| பெ, அ, மே, வீ
    baby | குழந்தை  | _ழந்தை | கு, கூ, கே, கி`,

        `boy| சிறுவன்|  _றுவன்| சி, மெ, வா, கை
  girl| சிறுமி| _றுமி| சி, வா, கை, ச
  window| ஜன்னல்| _ன்னல்| ஜ, ச, சா, சி
  air-conditioner| குளிரூட்டி| _ளிரூட்டி| கு, க, கா, கி
  fridge| குளிர்சாதன பெட்டி| _ளிர்சாதன பெட்டி| கு,  க, கா, கி
  toothpaste| பற்பசை | _ற்பசை | ப, பா, ம, பூ
  bucket| வாளி| _ளி| வா, வி, வீ, வு
  toilet| கழிப்பறை| _ழிப்பறை| க, கை, கா, ப
  candle| மெழுகுவர்த்தி| _ழுகுவர்த்தி| மெ, வா, கை, ச  
  ball| பந்து| _ந்து| ப, க, மூ, கா`,

        `box| பெட்டி| _ட்டி| பெ, ப, பா, பூ
coin| நாணயம்| _ணயம்| நா, ந, நி, நீ
medicine| மருந்து| _ருந்து| ம, மூ, மே, மெ
balloon| பலூன்| _லூன்| ப, பா, ம, பூ
glasses| மூக்கு கண்ணாடி| _க்கு கண்ணாடி| மூ, மே, க, கை
clock| கடிகாரம் | _டிகாரம் |  க, கை, மூ, கா
watch| கைக்கடிகாரம் |_க்கடிகாரம்| கை, வா, ச, கா
flower-pot| பூத்தொட்டி| _த்தொட்டி| பூ, ப, பா, பு
umbrella| குடை| _டை| கு, க, கை, கா
broom| துடைப்பம்| _டைப்பம்| து, த, தி, தொ`,

        `pillow| தலையணை| _லையணை| த, து, தி, தொ
bed| மெத்தை| _த்தை| மெ, கை, ச, கா
basket| கூடை| _டை| கூ, க, கை, கா
dustbin| குப்பை தொட்டி| _ப்பை தொட்டி| கு, கூ, க, கை
handbag| கைப்பை| _ப்பை| கை, கூ, க, கு
soap| சவர்க்காரம்| _வர்க்காரம்| ச, சா, சி, சீ
stove| அடுப்பு| _டுப்பு| அ, ஆ, இ, ஒ
fork| முள் கரண்டி| _ள் கரண்டி| மு, ம, மா, மி
knife |கத்தி| _த்தி | க, கை, கூ, கு
pan| வாணலி| _ணலி| வா, வ, வி, வெ`,

        `pot| பானை| _னை| பா, ப, பி, பீ
plate| தட்டு| _ட்டு| த, து, தி, தொ
tap| நீர்க்குழாய்| _ர்க்குழாய்| நீ, ந, நா, நி
lid| மூடி| _டி| மூ, ம, மா, மி
salt| உப்பு| _ப்பு| உ, அ, ஆ, ஊ
cup| கோப்பை| _ப்பை| கோ, கை, கூ, க
bowl| கிண்ணம்| _ண்ணம்| கி, கோ, கை, கூ
waterbottle| தண்ணீர் குடுவை| _ண்ணீர் குடுவை| த, து, தி, தொ
scissors| கத்தரிக்கோல்| _த்தரிக்கோல்| க, கோ, கை, கூ
calculator| கணிப்பான்| _ணிப்பான்| க, கை, கூ, கு`,

        `book| புத்தகம்| _த்தகம்| பு, பூ, ப, பா
ink| மை| _| மை, பை, கை, வை 
eraser| அழிப்பான்| _ழிப்பான்| அ, ஆ, உ, ஊ
pen| பேனா| _னா| பே, வெ, பெ, செ
pencil| எழுதுகோல்| _ழுதுகோல்| எ, ஏ, அ, ஐ
ruler| அளவுகோல்| _ளவுகோல்| அ, எ, ஏ, ஐ
schoolbag| புத்தகப்பை| _த்தகப்பை| பு, பூ, ப, பா`
      ]
    },
    {
      type: 'completeWord',
      label: 'கருவிகள்',
      id: 'tools',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க '
      },
      data: [
        `axe| கோடரி| _டரி| கோ, தொ, மே, வீ
  balance| தராசு| _ராசு| த, நு, மே, வீ
  blackboard| கரும்பலகை| _ரும்பலகை| க, சி, வா, கை
  microscope| நுண்ணோக்கி| _ண்ணோக்கி| நு, மே, வீ, கை
  needle| ஊசி| _சி| ஊ, தொ, மே, வீ
  plough| கலப்பை| _லப்பை| க, தொ, மே, வீ
  saw| இரம்பம்| _ரம்பம்| இ, சி, வா, கை
  spade| மண்வெட்டி| _ண்வெட்டி| ம,ப, க, மூ
  telescope| தொலைநோக்கி| _லைநோக்கி| தொ, மே, வீ, கை
  test-tube| சோதனை குழாய்| _தனை குழாய்| சோ, தொ, க, மூ`,

        ` thermometer| வெப்பமானி| _ப்பமானி| வெ, இ, சி, வா
  trowel| கரணை| _ரணை| க, சி, வா, கை
  compass| திசைகாட்டி| _சைகாட்டி| தி, சி, வா, கை
  awl| குத்தூசி| _த்தூசி| கு, கை, க, சி
  screwdriver| திருப்புளி| _ருப்புளி| தி, தா, தை, பா
  plier| இடுக்கி| _டுக்கி| இ, சி, வா, தா
  hose| குழாய்| _ழாய்| கு, க, கை, தா
  screw| திருகு| _ருகு| தி, தொ, தா, தை`
      ]
    },
    {
      type: 'completeWord',
      label: 'உணவுப்பொருட்கள்',
      id: 'snacks',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க '
      },
      data: [
        `chocolate| மிட்டாய்| _ட்டாய்| மி, மே, மீ, மு
    milk| பால்| _ல்| பா, மே, ப , மி 
    ladoo| லட்டு| _ட்டு| ல, லா, லி, லீ
    cheese| பாலாடைக்கட்டி| _லாடைக்கட்டி| பா, ப, டா, கோ
    butter| வெண்ணெய்| _ண்ணெய்| வெ, வே, சா, பா 
    sugar|சர்க்கரை|_ர்க்கரை|ச, சா, சி, சீ
    meat| இறைச்சி| _றைச்சி| இ, ஈ, அ, ப
    chicken| கோழி| _ழி| கோ, கொ, கெ, கே
    ice-cream| பனிக்கூழ்| _னிக்கூழ்| ப, பா, ம, ச
    sweets|இனிப்பு|_னிப்பு| இ, அ, ஈ, ப`,

        `bread| ரொட்டி| _ட்டி| ரொ, கோ, று, வெ
        juice| பழச்சாறு| _ழச்சாறு| ப, பா, ம, ச
    flour| மாவு| _வு| மா, சா, பா, டா
    lentils| பருப்பு| _ருப்பு| ப, அ, ம, ச
    rice|அரிசி| _ரிசி|அ, ப, ம, ச
    soup| சாறு| _று| சா, பா, டா, தி`
      ]
    },
    {
      type: 'completeWord',
      label: 'இசைக்கருவிகள்',
      id: 'instruments',
      data: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க ',
        text: `conch| சங்கு| _ங்கு| ச, சா, சி , சு 
    drums|முரசு|_ரசு|மு,பு, ரு, சு 
    dhol| மத்தளம்| _த்தளம்| ம, க, ந, ச
    flute| புல்லாங்குழல்| _ல்லாங்குழல்| பு, பூ, ப, பி
    tabla| தபேலா| _பேலா| த,  ந, தா, தி
    violin| வயலின்| _யலின் | வ, த, நா, நி
    yazl| யாழ்| _ழ்| யா, ஒ, ஓ, ஔ
    damaru| உடுக்கை| _டுக்கை| உ, ச, க, ரு`
      }
    },
    {
      type: 'completeWord',
      label: 'படங்களும் பெயர்களும்',
      id: 'others',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க '
      },
      data: [
        `sun| சூரியன்| _ரியன்| சூ,உ, ஊ, எ  
  moon | நிலா | _லா | நி, ந, வீ, கை
  rain| மழை| _ழை| ம, மா , ந , நி 
  star| நட்சத்திரம்| _ட்சத்திரம்| ந, ஐ, ஒ, ஓ
  bird| பறவை| _றவை| ப, ந, ஐ, ஒ
  palanquin| பல்லக்கு| _ல்லக்கு| ப, பா, பு, பி  
  vegetables| காய்கறிகள்| _ய்கறிகள்| கா, கூ, கை, கி
  fruits| பழங்கள்| _ழங்கள்| ப, பா , பு , ம 
  leaf|  இலை| _லை| இ, அ, ஆ, ஈ
  world| உலகம்| _லகம்| உ, ஊ, எ, ஏ`,

        `nest| கூடு| _டு| கூ, கை, சூ, கி
  twig| கிளை| _ளை| கி, கூ, கை, சூ
  water-drop| நீர்த்துளி| _ர்த்துளி| நீ, ந, நி, நூ 
  waterfall| அருவி| _ருவி| அ, ஆ, இ, ஈ
  ring| மோதிரம்| _திரம்| மோ, உ, ஊ, எ
  brush| தூரிகை| _ரிகை| தூ, து, தா, மோ
  bone| எலும்பு துண்டு| _லும்பு துண்டு| எ, ஒ, ஓ, ஔ
  auvai| ஔவை| _வை| ஔ, ஐ, ஒ, ஓ
  bell| மணி| _ணி| ம, மா , ந , நி 
  five| ஐந்து| _ந்து| ஐ, ஒ, ஓ, ஔ`,

        `food| உணவு| _ணவு| உ, ஒ, ஓ, ஔ
  king| அரசன்| _ரசன்| அ, உ, ஊ, ஆ 
  kite| பட்டம்| _ட்டம்| ப, பா , ம , மா
  ladder| ஏணி| _ணி| ஏ, உ, ஊ, எ
  rishi| முனிவர்| _னிவர்| மு, ந, ஐ, ஒ
  wheel| சக்கரம்| _க்கரம்| ச, அ, ஆ, இ
  whistle| ஊதல்| _தல்| ஊ, உ, எ, ஏ
  chariot| தேர்| _ர்| தே, தெ, நெ, நே
  park| பூங்கா| _ங்கா| பூ, ப, பா, பி
  garden| தோட்டம்| _ட்டம்| தோ, த, தா, தி`,

        `touch-me-not| தொட்டாற்சிணுங்கி| _ட்டாற்சிணுங்கி| தொ, தோ, த, தா
  yagna| யாகம்| _கம்| யா, பா, டா, மா
  yarn-ball| நூல் கண்டு| _ல் கண்டு| நூ, ரூ, று, ரி 
  bow| வில்| _ல்| வி, தி, நீ, ரி
  arrow| அம்பு| _ம்பு| அ, ஊ, உ, எ
  fountain| நீரூற்று| _ரூற்று| நீ, தி, ரி, பி
  pouch| சுருக்குப்பை| _ருக்குப்பை| சு, சூ, ரு, ரூ
  top| பம்பரம்| _ம்பரம்| ப, கு, று, ண
  hexagon| அறுகோணம்| _றுகோணம்| அ, ஆ, இ, உ
  trident| திரிசூலம்| _ரிசூலம்| தி, ரி, பி, நீ
  stick| குச்சி| _ச்சி| கு, சு, சூ, று`
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
        கு, horse`,

        `ப, pig
        யா, elephant 
        சி, lion
        கு, monkey
        பு, tiger`,

        `நீ, hippo
        கா, rhino
        ந, fox
        மு, crocodile 
        வ, zebra`,

        `க, bear
        ஒ, camel
        சு, shark
        தி, whale
        த, frog`,

        `ந, crab
        பா, snake
        அ, squirrel
        ஆ, tortoise
        எ, rat`,

        `ஈ, winged-termites 
        எ, ant
        ப, cow 
        வௌ ,bat
        க, kangaroo`,

        `வ, butterfly
        ஈ, fly
        க, donkey
        ஒ, giraffe
        எ, buffalo`,

        `சி, leopard
        கீ, mongoose
        கொ, mosquito
        ஓ, wolf
        க, cockroach`,

        `ஓ, garden-lizard
        ப, lizard
        மு, rabbit
        கா, boar
        க, hyena`,

        `ப, polarbear
        மா, antelope
        வ, bug
        ந, jackal
        இ, prawn`,

        `மு, porcupinel
        ம, python
        வெ, hamster
        சி, spider
        கா, bison`,

        `ப, chameleon
        கா, bul
        தே, bee
        த, goldfish
        க, seahorse`,

        `க, caterpillar
      த, dragonfly
      மீ, fish 
      ம, earthworm
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
        `கா, crow
பு, dove
வா, duck
கோ, hen
கி, parrot`,

        `சி, sparrow
கோ, chick
கொ, crane
க, eagle
மீ, kingfisher`,

        `நெ, ostrich
ஆ, owl
சே, rooster
ம, woodpecker
கு, koel`,

        `அ, swan
ம, spotted-dove
க, robin
ப, falcon`,

        `மை, myna
  வா, turkey
  ப, macow
ம, peacock
க, seagull`
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
        `ஆ, apple
        தி, grapes
வா, banana
கொ, guava
பே, dates`,

        `ப, jackfruit
மா, mango
ஆ, orange
அ, pineapple
த, watermelon`,

        `மா, pomegranate
ப, papaya
அ, fig
சீ, custard-apple
நா, jamun`,

        `பே, pear
இ, jujube
ச, sapotta
க, sugarcane 
ம, tapioca`
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
மு, cabbage
ம, corn`,

        `பூ, garlic
இ, ginger
ப, pumpkin
பா, almond 
கு, capsicum`,

        `க, brinjal
சே, elephant-yam
மு, cashewnut  
ப, chilli
பா, bitter-gourd`,

        `தே, coconut 
கொ, corianderleaf
மு, drumstick
ப, greenpeas
வெ, ladies-finger`,

        `பு, mintleaf
வே, peanut 
மு, raddish
கீ, spinach 
கொ, chickpea`,

        `ம, turmeric
வெ, fenugreek
பு, tamarind
கா, mushroom
க, curryleaf`,

        `அ, broad-beans 
பூ,  ashgourd 
பீ, ridgegourd
வா, raw-banana
மு, drumstick-leaves`,

        `வெ, cucumber
வா, banana-flower
சு, bottlegourd
கோ, ivygourd
நூ, kohlrabi`,

        `பு, snake-gourd
வெ, spring-onion
வா, banana-stem
கொ, cluster-beans
து, tulsi`
      ]
    },
    {
      id: 'match-flowers',
      type: 'match',
      label: 'பொருத்துக : பூக்கள்',
      CommonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `தா, lotus
        ரோ, rose
சூ, sunflower
சா, marigold
செ, hibiscus`,

        `மு, jasmine
செ, magnolia
அ, water-lily
கு,  mogra`
      ]
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
ம, car
மி, cycle
மா, bullock-cart`,

        `க, ship
தொ, train 
இ, tractor
அ, ambulance
தீ, fire-engine`,

        `கு, horse-carriage
க, cart
ச, lorry
ஏ, rocket
நீ, submarine
பே, bus`
      ]
    },
    {
      id: 'match-jobs',
      type: 'match',
      label: 'பொருத்துக: தொழில்',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `வி, astronaut
    கோ, clown
    மீ, fisherman
    த, postman
    ஆ, teacher
    சி, soldier`,

        `கொ, blacksmith
    செ, cobbler 
    பொ, goldsmith
    கு, potter
    நெ, weaver
    கா, police`,

        `த, carpenter
    போ, warrior
    செ, nurse
    மா, sailor
    ச, chef 
    ம, doctor`
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
கு, hose
நு, microscope
தி, compass`,

        `கு, awl
ஊ, needle
இ, plier
க, plough
இர, saw
தி, screwdriver`,

        `ம, spade
தி, screw
தொ, telescope
சோ, test-tube
வெ, thermometer
க, trowel`
      ]
    },
    {
      id: 'match-snacks',
      type: 'match',
      label: 'பொருத்துக: உணவுப்பொருட்கள்',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `ப, juice
      பா, milk
      ல, ladoo
      இ, sweets
      வெ, butter`,

        `ச, sugar
      இ, meat
      கோ, chicken
      ப, ice-cream
      பா, cheese`,

        `ரொ, bread
      மி, chocolate
      மா, flour
      ப, lentils
      அ, rice
      சா, soup`
      ]
    },
    {
      id: 'match-home',
      type: 'match',
      label: 'பொருத்துக: வீடு ',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `வீ, house
        மே, table
        வா, radio
        நா, chair
அ, shelf`,

        `க, door
தா, grandfather
ஆ, man
பெ, woman
சி, boy`,

        `சி, girl
கு, baby
ஜ, window
மோ, ring
கு, air-conditioner`,

        `கு, fridge
ப, toothpaste 
வா, bucket
க, toilet
மெ, candle`,

        `ப, ball
பெ, box
நா,  coin
ம, medicine
மூ, glasses`,

        `ப, balloon
    க, clock
கை, watch
பூ, flower-pot
கு, umbrella`,

        `து, broom
    த, pillow
    மெ, bed
    கூ, basket
    கு, dustbin`,

        `கை, handbag
    ச, soap
    அ, stove
க, knife
மு, fork`,

        `வா, pan
பா, pot
த, plate
நீ, tap
மூ, lid
பு, schoolbag`,

        `உ, salt
      கோ, cup
      கி, bowl
      த, waterbottle
      க, scissors
      அ, ruler`,

        `க, calculator
      பு, book
      மை, ink 
      அ, eraser
      பே, pen
      எ, pencil`
      ]
    },
    {
      id: 'match-others',
      type: 'match',
      label: 'பொருத்துக: கூடுதல் பயிற்சி',
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
      ப, bird
      கா, vegetables`,

        `ப, palanquin
  ஔ, auvai
  இ, leaf
  உ, world
  கூ, nest
  கி, twig`,

        `நீ, water-drop
  ப, fruits
  அ, waterfall
  மோ, ring
  தூ, brush
  எ, bone`,

        `ம, bell
  ஐ, five
  உ, food
  அ, king
  ப, kite
  ஏ, ladder`,

        `மு, rishi
  ச, wheel
ஊ, whistle
தே, chariot
பூ, park`,

        `தோ, garden
  தொ, touch-me-not
  யா, yagna
  நூ, yarn-ball
வி, bow
அ, arrow`,

        `நீ, fountain
  சு, pouch
ப, top
அ, hexagon
தி, trident
கு, stick`
      ]
    },
    {
      id: 'match-instruments',
      type: 'match',
      label: 'பொருத்துக:இசைக்கருவிகள்',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `ச, conch
மு, drums
ம, dhol
பு, flute`,

        `த, tabla
வ, violin
யா, yazl
உ, damaru`
      ]
    }
  ]
};
pyjama| இரவு உடுப்பு| _ரவு உடுப்பு| இ, ஈ, உ, ஊ
    gloves| கையுறைகள்| _யுறைகள்| கை, க, கா, கி
    scarf| கழுத்துத்துண்டு| _ழுத்துத்துண்டு| க, கா, கி, கீ
    sweater| கம்பளிச்சட்டை| _ம்பளிச்சட்டை| க, கா, கி, கீ
    