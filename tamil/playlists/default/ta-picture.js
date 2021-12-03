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
cow|  பசு| _சு| ப, மா, ஆ, ஊ
donkey| கழுதை | _ழுதை| வ, ச, ர, க 
giraffe| ஒட்டகச்சிவிங்கி| _ட்டகச்சிவிங்கி| எ, ஏ, ஐ, ஒ
kangaroo| கங்காரு| _ங்காரு| உ,வொ, ர, க 
leopard| சிறுத்தை| _றுத்தை| உ, சி, எ, வ
mongoose| கீரிப்பிள்ளை| _ரிப்பிள்ளை| ஐ, ஒ, ஓ, கீ
mosquito| கொசு | _சு| ஐ, கொ, ஓ, ஔ`,

        `wolf| ஓநாய்| _நாய்| ஐ, ஒ, ஓ, ஔ
cockroach| கரப்பான் பூச்சி| _ரப்பான் பூச்சி| ஐ, ஒ, க, ஔ
garden-lizard| ஓணான்| _ணான்| ஐ, ஒ, ஓ, ஔ
lizard| பல்லி| _ல்லி| ப, ஒ, ஓ, ஔ
rabbit| முயல்| _யல்| ஐ, மு, ஓ, ஔ
boar| காட்டுப்பன்றி| _ட்டுப்பன்றி|கா, க, கி, ப
hyena| கழுதைப் புலி| _ழுதைப் புலி|க, கா, ம, இ
polarbear| பனிக்கரடி| _னிக்கரடி|ப, பி, பீ, பு
antelope| மான்| _ன்|மா, மி, மீ, மு
bug| வண்டு| _ண்டு| வ, வா, வி, வீ`,

`jackal| நரி| _ரி|ந, நா, நி, நீ
prawn| இறால்| _றால்|இ, ஈ, உ, எ
bull| காளை| _ளை| கா, கி, கு, க 
python| மலைப்பாம்பு| _லைப்பாம்பு|ம, மா, மி, மீ
hamster| வெள்ளெலி| _ள்ளெலி| வெ, செ, ரெ, நெ 
spider| சிலந்தி| _லந்தி|சி, ச, ர, க
bison| காட்டெருமை| _ட்டெருமை|கா, கி, கு, க
chameleon| பச்சோந்தி| _ச்சோந்தி|ப, பி, பீ, பு
porcupine| முள்ளம்பன்றி| _ள்ளம்பன்றி|மு, மா, மி, மீ
bee| தேனீ| _னீ|தே, தீ, து, தூ`,

`goldfish| தங்கமீன்| _ங்கமீன்|த, கி, மா, தி
seahorse| கடற்குதிரை| _டற்குதிரை|க, கா, கி, கு 
caterpillar| கம்பளிப்பூச்சி| _ம்பளிப்பூச்சி|க, கி, கு, க
dragonfly| தட்டான்| _ட்டான்|த, ச, ர, க
fish| மீன் | _ன் |மீ, மா, மி, மு
earthworm| மண்புழு| _ண்புழு|ம, மா, மி, மீ
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
        lang: 'ta'
      },
      data: [
        `crow| காகம் |_கம்|  கா, க, ப, ம
dove| புறா | _றா | பு, பீ , பெ, ப    
duck| வாத்து | _த்து| வா, வ , ல , யா 
hen| கோழி | _ழி | கோ, கெ , கு , கை 
parrot| கிளி | _ளி| கி, கோ, கெ, கீ
peacock| மயில் | _யில் | ம, மு , மூ , மா  
sparrow| சிட்டுக்குருவி| _ட்டுக்குருவி| சி, சீ , தி , டி
chick| கோழிக்குஞ்சு| _ழிக்குஞ்சு| கோ, ஐ, மு, ஓ
crane| கொக்கு| _க்கு| கொ, மு, ஓ, ஔ
eagle| கழுகு| _ழுகு| க, மு, ஓ, ஔ`,

        `kingfisher| மீன் கொத்தி| _ன் கொத்தி| மீ, ஐ, மு, ஓ
myna| மைனா| _னா| மை, ஐ, மு, ஔ
ostrich| நெருப்புக்கோழி | _ருப்புக்கோழி | நெ, தீ, மு, ஓ
owl| ஆந்தை| _ந்தை| ஆ, ஐ, ஓ, ஔ
koel| குயில்| _யில்|கு, ம, க, கா
swan| அன்னப்பறவை| _ன்னப்பறவை|அ, ஆ, க, இ 
spotted-dove| மணிப்புறா|ணிப்புறா| ம, பை, மா, மி
robin| கருஞ்சிட்டு| _ருஞ்சிட்டு| க, கா, கி, கீ
swallow|  தகைவிலாங் குருவி|  _கைவிலாங் குருவி|  த, து, தூ, தெ
seagull| கடற்பறவை| _டற்பறவை| க, கா, கி, கீ`,


`goose| வாத்து| _த்து| வா, ம, பை, மா
falcon| பருந்து| _ருந்து| ப, பி, பு, பூ
myna| மைனா| _னா| மை, ம, பை, மா
peacock| மயில்| _யில்| ம, மை, பை, மா
turkey| வான்கோழி| _ன்கோழி| வா,வீ, வு, வூ
macow| பஞ்சவர்ணக்கிளி| _ஞ்சவர்ணக்கிளி| ப, பீ, பே, பை
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
        `apple| ஆப்பிள்| _ப்பிள்| ஆ, வா, க, இ
        grapes| திராட்சை | _ராட்சை | தி, பூ, பா, ழ
banana| வாழைப்பழம் | _ழைப்பழம்| வா, பூ, பா, ழ
guava| கொய்யாப்பழம் | _ய்யாப்பழம்| கொ, தோ, தி, பூ
dates| பேரிச்சை | _ரிச்சை| ஆ,  பே, இ, வா
jackfruit| பலாப்பழம் | _லாப்பழம்| ப , பா, ழ, இ
mango| மாம்பழம் | _ம்பழம்| ம, மா, பா, ப
orange| ஆரஞ்சு| _ரஞ்சு| ஆ, வா, க, இ
papaya| பப்பாளி | _ப்பாளி| ம, மா, பா, ப
pineapple| அன்னாசி | _ன்னாசி | அ, ஆ,  மா, வா`,

        `pomegranate| மாதுளை | _துளை| மா, வா, பா, ழ
watermelon| தர்பூசணி | _ர்பூசணி| த, தி, பூ, வா
fig| அத்திப்பழம்| _த்திப்பழம்| ஆ,  அ, இ, வா
custard-apple| சீத்தாப்பழம்| _த்தாப்பழம்| ஆ,  தி, இ, சீ
jamun| நாவல் பழம்| _வல் பழம்| நா,ப, வ, ழ
pear| பேரிக்காய்| _ரிக்காய்| பே, பீ, கா, பை
jujube| இலந்தைப்பழம்| _லந்தைப்பழம்| இ, ஆ, ப, ழ
sapotta| சப்போட்டா| _ப்போட்டா| ச, சா, சி, சீ
sugarcane| கரும்பு | _ரும்பு| க, கு, ம, பு
tapioca| மரவள்ளிக்கிழங்கு| _ரவள்ளிக்கிழங்கு| ம, வ, கி, ழ`
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
  corn| மக்காச்சோளம் |_க்காச்சோளம் | ம, சோ, தோ, சொ
  garlic| பூண்டு | _ண்டு | பூ, பு , ப , கு 
  ginger| இஞ்சி | _ஞ்சி| இ, ஈ, பூ, பு
  pumpkin| பரங்கிக்காய்| _ரங்கிக்காய்|  ப, ம, ஓ, ஔ
  almond| பாதாம்| _தாம்| பா, ம, மு, ஓ
  bitter-gourd| பாகற்காய்| _கற்காய்| பா, மு, ஓ, ஔ`,

        `brinjal| கத்திரி | _த்திரி| க, ம, ஓ, ஔ
  capsicum| குடை மிளகாய்| _டை மிளகாய்| கு, ம, ஓ, ஔ
  cashewnut| முந்திரி | _ந்திரி| மு, ம, ஓ, ஔ
  chilli| பச்சைமிளகாய்| _ச்சைமிளகாய்| ப, மு, ஓ, ஔ
  coconut| தேங்காய்| _ங்காய்| தே, மு, ஓ, ஔ
  corianderleaf|கொத்தமல்லி| _த்தமல்லி| கொ, ம, ஓ, ஔ
  drumstick | முருங்கைக்காய் | _ருங்கைக்காய் | மு, ம, கு, ப
  greenpeas| பச்சை பட்டாணி| _ச்சை பட்டாணி| ப, ம, மு, ஓ
  ladies-finger| வெண்டைக்காய்| _ண்டைக்காய்|  வெ, ம, மு, ஓ
  mintleaf | புதினா | _தினா | பு , பூ, ப , கு`,

        ` peanut| வேர்க்கடலை| _ர்க்கடலை| வே, ம, ஓ, ஔ
  raddish| முள்ளங்கி| _ள்ளங்கி| மு, ம, ஓ, ஔ
  spinach| கீரை| _ரை| கீ, ம, மு, ஓ
  elephant-yam| சேனைக்கிழங்கு| _னைக்கிழங்கு| சே,கி, ழ, கு
  chickpea| கொண்டைக்கடலை| _ண்டைக்கடலை| கொ,
  turmeric| மஞ்சள்| _ஞ்சள்| ம,
  fenugreek| வெந்தயக்கீரை| _ந்தயக்கீரை| வெ,
  tamarind| புளி| _ளி| பு,
  mushroom| காளான்| _ளான்| கா,
  curryleaf| கருவேப்பிலை| _ருவேப்பிலை| க,`
     
  `broad-beans| அவரைக்காய்| _வரைக்காய்| அ, வ 
  ashgourd| பூசணிக்காய் | _சணிக்காய்| பூ, ச, கா, பீ 
  ridgegourd| பீர்க்கங்காய்| _ர்க்கங்காய்| பீ, க, கா, பூ
  raw-banana| வாழைக்காய்| _ழைக்காய்| வா,
  drumstick-leaves| முருங்கை கீரை| _ருங்கை கீரை| மு
  tulsi| துளசி| _ளசி| து,
  banana-flower| வாழைப்பூ | _ழைப்பூ| வா,
  bottlegourd| சுரைக்காய்|_ரைக்காய் | சு,
  ivygourd| கோவைக்காய்| _வைக்காய்| கோ,
  kohlrabi| நூல்கோல்| _ல்கோல்| நூ,`,

  `snake-gourd| புடலங்காய்| _டலங்காய்| பு,
  spring-onion| வெங்காயத்தாள்| _ங்காயத்தாள்| வெ,
  banana-stem| வாழைத்தண்டு| _ழைத்தண்டு| வா,
  cluster-beans| கொத்தவரங்காய்| _த்தவரங்காய்| கொ,
  cucumber| வெள்ளரிக்காய் | _ள்ளரிக்காய் | வெ, வீ, வ, வா 
  curryleaf| கருவேப்பிலை| _ருவேப்பிலை| க, ம, மு, ஓ`
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
jasmine| முல்லை| _ல்லை|மு, 
water-lily| அல்லி| _ல்லி|அ, 
mogra| குண்டுமல்லி| _ண்டுமல்லி|கு, ம, ப, பா
magnolia| செண்பகம்|_ண்பகம்|செ, `
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
ship| கப்பல் | _ப்பல் | க, சா, ச, கா 
train| தொடர்வண்டி| _டர்வண்டி| தொ, தோ , து , தூ
tractor| இழுவை இயந்திரம் |_ழுவை இயந்திரம் |இ, சா, ச, கா
ambulance| அவசர ஊர்தி |_வசர ஊர்தி |அ, ப, பா, மா
fire-engine| தீயணைப்பு வாகனம் |_யணைப்பு வாகனம்| தீ, ப, பா, மா`,


`lorry| சரக்குந்து | _ரக்குந்து | ச, மி, வி, மா
horse-carriage| குதிரைவண்டி| _திரைவண்டி| கு,
cart| கட்டைவண்டி| _ட்டைவண்டி| க,
rocket| ஏவுகனை| _வுகனை| ஏ,
submarine| நீர்மூழ்கிக்கப்பல்| _ர்மூழ்கிக்கப்பல்| நீ,
bullock-cart| மாட்டுவண்டி| _ட்டுவண்டி| மா,`
      ]
    },
    {
      type: 'completeWord',
      label: 'தொழில்',
      id: 'jobs',
      commonData: {
        images: 'custom',
        lang: 'ta'
      },
      data: [
        `astronaut|விண்வெளிவீரர்|_ண்வெளிவீரர்|வி,
        clown| கோமாளி| _மாளி| கோ,
        fisherman| மீனவர்| _னவர்| மீ,
        postman| தபால்காரர்| _பால்காரர்| த,
        teacher| ஆசிரியர்| _சிரியர்| ஆ,
        blacksmith| கொல்லர்| _ல்லர்| கொ,
        cobbler| செருப்புதைப்பவர்| _ருப்புதைப்பவர்| செ, 
        goldsmith| பொற்கொல்லர்| _ற்கொல்லர்| பொ,
        potter| குயவர்| _யவர்| கு,
        weaver| நெசவாளர்| _சவாளர்| நெ,`,
        
         `carpenter| தச்சர்| _ச்சர்| த,
          warrior| போர்வீரர்| _ர்வீரர்| போ,
          nurse| செவிலியர்| _விலியர்| செ,
          sailor| மாலுமி| _லுமி| மா,
          chef| சமையல்காரர்| _மையல்காரர்| ச,
          doctor| மருத்துவர்| _ருத்துவர்| ம,
          police| காவல்| _வல்| கா,
          soldier| சிப்பாய்| _ப்பாய்| சி,`
          ]
        },
        {
          type: 'completeWord',
          label: 'உடை',
          id: 'dress',
          data: {
            title: 'உடைகளின் படங்களுடன் பெயரைப் பொருத்துக',
            text: 
                  `dress| உடை| _டை| உ,
    shoe| காலணி| _லணி| கா,
    sock| காலுறை| _லுறை| கா,
    pyjama| இரவு உடுப்பு| _ரவு உடுப்பு| இ,
    gloves| கையுறைகள்| _யுறைகள்| கை,
    scarf| கழுத்துத்துண்டு| _ழுத்துத்துண்டு| க,
    sweater| கம்பளிச்சட்டை| _ம்பளிச்சட்டை| க,
    shirt| சட்டை| _ட்டை| ச,
    coat| மேலங்கி| _லங்கி| மே,
    hat| தொப்பி| _ப்பி| தொ,
    trousers| கால்சட்டை| _ல்சட்டை| கா,`
        }
        },
                {
      type: 'completeWord',
      label: 'உடல் உறுப்புகள்',
      id: 'bodyparts',
      data: {
        images: 'custom',
        lang: 'ta',
            text:
        `ear| காது | _து| கா, த, தி, க 
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
        lang: 'ta'
      },
      data: [
        `house| வீடு| _டு| வீ, கை, ச, கா
    table| மேசை| _சை| மே, வீ, கை, ச
    radio| வானொலி| _னொலி| வா
    chair| நாற்காலி| _ற்காலி| நா, மெ, கை, ச
    shelf| அலமாரி|  _லமாரி| அ, மே, வீ, கை
    door| கதவு| _தவு| க,
    grandfather| தாத்தா| _த்தா| தா,
    man| ஆண்|  _ண்| ஆ, மே, வீ, கை
    woman| பெண்| _ண்| பெ, அ, மே, வீ
    baby | குழந்தை  | _ழந்தை | கு , கூ, கே, கி`,

  `boy| சிறுவன்|  _றுவன்| சி, மெ, வா, கை
  girl| சிறுமி| _றுமி| சி, வா, கை, ச
  window| ஜன்னல்| _ன்னல்| ஜ,
  air-conditioner| குளிரூட்டி| _ளிரூட்டி| கு,
  fridge| குளிர்சாதன பெட்டி| _ளிர்சாதன பெட்டி| கு,
  toothpaste| பற்பசை | _ற்பசை | ப,
  bucket| வாளி| _ளி| வா,
  toilet| கழிப்பறை| _ழிப்பறை| க,
  candle| மெழுகுவர்த்தி| _ழுகுவர்த்தி| மெ, வா, கை, ச  
  ball| பந்து| _ந்து| ப, க, மூ, கா`,

`box| பெட்டி| _ட்டி| பெ,
coin| நாணயம்| _ணயம்| நா,
medicine| மருந்து| _ருந்து| ம,
balloon| பலூன்| _லூன்| ப,
glasses| மூக்கு கண்ணாடி| _க்கு கண்ணாடி| மூ, மே, க, கை
clock| கடிகாரம் | _டிகாரம் |  க, கை, மூ, கா
watch| கைக்கடிகாரம் |_க்கடிகாரம்| கை, வா, ச, கா
flower-pot| பூத்தொட்டி| _த்தொட்டி| பூத்தொட்டி
umbrella| குடை| _டை| கு,
broom| துடைப்பம்| _டைப்பம்| து,`,

`pillow| தலையணை| _லையணை| த,
bed| மெத்தை| _த்தை| மெ, கை, ச, கா
basket| கூடை| _டை| கூ,
dustbin| குப்பை தொட்டி| _ப்பை தொட்டி| கு,
handbag| கைப்பை| _ப்பை| கை,
soap| சவர்க்காரம்| _வர்க்காரம்| ச,
stove| அடுப்பு| _டுப்பு| அ,
fork| முள் கரண்டி| _ள் கரண்டி| மு,
knife |கத்தி| _த்தி | க,
pan| வாணலி| _ணலி| வா, `,

`pot| பானை| _னை| பா,
plate| தட்டு| _ட்டு| த,
tap| நீர்க்குழாய்| _ர்க்குழாய்| நீ,
lid| மூடி| _டி| மூ,
salt| உப்பு| _ப்பு| உ,
cup| கோப்பை| _ப்பை| கோ,
bowl| கிண்ணம்| _ண்ணம்| கி,
waterbottle| தண்ணீர் குடுவை| _ண்ணீர் குடுவை| த,
scissors| கத்தரிக்கோல்| _த்தரிக்கோல்| க,
calculator| கணிப்பான்| _ணிப்பான்| க,`,

`book| புத்தகம்| _த்தகம்| பு,
ink| மை| மை| மை
eraser| அழிப்பான்| _ழிப்பான்| அ,
pen| பேனா| _னா| பே,
pencil| எழுதுகோல்| _ழுதுகோல்| எ,
ruler| அளவுகோல்| _ளவுகோல்| அ,
schoolbag| புத்தகப்பை| _த்தகப்பை| பு, `
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
      lang: 'ta'
    },
    data: [
    `chocolate| மிட்டாய்| _ட்டாய்| மி,
    milk| பால்| _ல்| பா, மே, ப , மி 
    ladoo| லட்டு| _ட்டு| ல,
    cheese| பாலாடைக்கட்டி| _லாடைக்கட்டி| பா,
    butter| வெண்ணெய்| _ண்ணெய்| வெ,
    sugar|சர்க்கரை|_ர்க்கரை|ச,
    meat| இறைச்சி| _றைச்சி| இ,
    chicken| கோழி| _ழி| கோ,
    ice-cream| பனிக்கூழ்| _னிக்கூழ்| ப,
    sweets|இனிப்பு|_னிப்பு| இ,`,

        `bread| ரொட்டி| _ட்டி| ரொ,
        juice| பழச்சாறு| _ழச்சாறு| ப,
    flour| மாவு| _வு| மா,
    lentils| பருப்பு| _ருப்பு| ப,
    rice|அரிசி| _ரிசி|அ,
    soup| சாறு| _று| சா,`
    ]
  },
        {
      type: 'completeWord',
      label: 'இசைக்கருவிகள்',
      id: 'instruments',
      data: {
      title: 'படங்களுடன் பெயரைப் பொருத்துக',
      text:
          `conch| சங்கு| _ங்கு| ச, சா , சி , சு 
    drums|முரசு|_ரசு|மு,
    dhol| மத்தளம்| _த்தளம்| ம,
    flute| புல்லாங்குழல்| _ல்லாங்குழல்| பு,
    tabla| தபேலா| _பேலா| த,
    violin| நரம்பிசைக்கருவி| _ரம்பிசைக்கருவி| ந,
    yazl| யாழ்| _ழ்| யா, ஒ, ஓ, ஔ
    damaru| உடுக்கை| _டுக்கை| உ, ச,க, ரு`
      }   
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
  bird| பறவை| _றவை| ப, ந, ஐ, ஒ
  palanquin| பல்லக்கு| _ல்லக்கு| ப,
  vegetables| காய்கறிகள்| _ய்கறிகள்| கா,
  fruits| பழங்கள்| _ழங்கள்| ப, பா , பு , ம 
  leaf|  இலை| _லை| இ, அ, ஆ,  ஈ
  world| உலகம்| _லகம்| உ, ஊ, எ, ஏ`,

  `nest| கூடு| _டு| கூ,
  twig| கிளை| _ளை| கி,
  water-drop| நீர்த்துளி| _ர்த்துளி| நீ,
  waterfall| அருவி| _ருவி| அ,
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
  chariot| தேர்| _ர்| தே,
  park| பூங்கா| _ங்கா| பூ,
  garden| தோட்டம்| _ட்டம்| தோ,`,

  `touch-me-not| தொட்டாற்சிணுங்கி| _ட்டாற்சிணுங்கி| தொ,
  yagna| யாகம்| _கம்| யா,
  yarn-ball| நூல் கண்டு| _ல் கண்டு| நூ,
  bow| வில்| _ல்| வி,
  arrow| அம்பு| _ம்பு| அ,
  fountain| நீரூற்று| _ரூற்று| நீ,
  pouch| சுருக்குப்பை| _ருக்குப்பை| சு,
  top| பம்பரம்| _ம்பரம்| ப,
  hexagon| அறுகோணம்| _றுகோணம்| அ,
  trident| திரிசூலம்| _ரிசூலம்| தி,
  stick| குச்சி| _ச்சி| கு,`
        ]
      }
    ]
  };
      /*
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
    */
  
