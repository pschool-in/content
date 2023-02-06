export default {
  label: 'படம்',
  id: 'ta-picture-2',
  img: 'image',
  lockAfter: 1,
  list: [
    {
      type: 'dragDropImgLabel',
      label: 'விலங்குகள்',
      id: 'dragDrop-animal',
      lockAfter: 2,
      commonData: {
        title: 'விலங்குகளின் படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `sheep| செம்மறி ஆடு  
hippo| நீர்யானை
rhino| காண்டாமிருகம்
crocodile| முதலை
zebra| வரிக்குதிரை
shark| சுறாமீன்`,

        `whale| திமிங்கிலம்
crab| நண்டு
winged-termites| ஈசல் 
ant| எறும்பு
bat| வௌவால்
kangaroo| கங்காரு`,

        `leopard| சிறுத்தை
mongoose| கீரிப்பிள்ளை
wolf| ஓநாய்
cockroach| கரப்பான்பூச்சி
garden-lizard| ஓணான்
lizard| பல்லி`,

        `rabbit| முயல்
boar| காட்டுப்பன்றி
hyena| கழுதைப் புலி
polarbear| பனிக்கரடி
antelope| மான்
bug| வண்டு`,

        `jackal| நரி
prawn| இறால்
bull| காளை
python| மலைப்பாம்பு
hamster| வெள்ளெலி
spider| சிலந்தி`,

        `bison| காட்டெருமை
chameleon|பச்சோந்தி
porcupine| முள்ளம்பன்றி
bee| தேனீ
goldfish| தங்கமீன்
seahorse| கடற்குதிரை`,

        `caterpillar| கம்பளிப்பூச்சி
dragonfly| தட்டான்
earthworm| மண்புழு
hedgehog| முள்ளெலி
stingray| திருக்கை மீன்`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'பறவைகள்',
      id: 'dragDropImgLabel1',
      commonData: {
        title: 'பறவைகளின் படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `sparrow| சிட்டுக்குருவி
chick| கோழிக்குஞ்சு
kingfisher| மீன்கொத்தி
ostrich| நெருப்புக்கோழி
woodpecker| மரங்கொத்தி
swan| அன்னப்பறவை`,

        `spotted-dove| மணிப்புறா
robin| கருஞ்சிட்டு
seagull| கடற்பறவை
falcon| பருந்து
turkey| வான்கோழி
macaw| பஞ்சவர்ணக்கிளி`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'பழங்கள்',
      id: 'dragDropImgLabel2',
      lockAfter: 2,
      commonData: {
        title: 'பழங்களின் படங்களுடன் பெய ரைப் பொருத்துக'
      },
      data: [
        `dates| பேரிச்சை
fig| அத்திப்பழம்
custard-apple| சீதாப்பழம்
jamun| நாவல் பழம்`,

        `pear| பேரிக்காய்
jujube| இலந்தைப்பழம்
sapotta| சப்போட்டா
tapioca| மரவள்ளிக்கிழங்கு`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'காய்கறிகள்',
      id: 'dragDropImgLabel3',
      commonData: {
        title: 'காய்கறிகளின் படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `corn| மக்காச்சோளம்
pumpkin| பரங்கிக்காய்
almond| பாதாம்
elephant-yam| சேனைக்கிழங்கு
capsicum| குடைமிளகாய்
cashewnut| முந்திரி`,

        `greenpeas| பச்சைபட்டாணி
peanut| வேர்க்கடலை
chickpea| கொண்டைக்கடலை
fenugreek| வெந்தயக்கீரை
broad-beans| அவரைக்காய் 
ashgourd| பூசணிக்காய்`,

        `ridgegourd| பீர்க்கங்காய்
drumstick-leaves| முருங்கை கீரை
banana-flower| வாழைப்பூ 
bottlegourd| சுரைக்காய்
ivygourd| கோவைக்காய்
kohlrabi| நூல்கோல்`,

        `snake-gourd| புடலங்காய்
spring-onion| வெங்காயத்தாள்
banana-stem| வாழைத்தண்டு
cluster-beans| கொத்தவரங்காய்
cucumber| வெள்ளரிக்காய்`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'பூக்கள்',
      id: 'dragDropImgLabel4',
      data: {
        title: 'பூக்களின் படங்களுடன் பெயரைப் பொருத்துக',
        text: `marigold| சாமந்தி
magnolia| செண்பகம்
water-lily| அல்லி
periwinkle| நித்தியகல்யாணி`
      }
    },
    {
      type: 'dragDropImgLabel',
      label: 'வாகனங்கள்',
      id: 'dragDropImgLabel5',
      data: {
        title: 'வாகனங்களின் படங்களுடன் பெயரைப் பொருத்துக',
        text: `tractor| இழுவை இயந்திரம்
ambulance| அவசரஊர்தி
fire-engine| தீயணைப்பு வாகனம்
cart| கட்டை வண்டி
lorry| சரக்குந்து
rocket| ஏவுகனை
submarine| நீர்மூழ்கிக் கப்பல்`
      }
    },
    {
      type: 'dragDropImgLabel',
      label: 'தொழில்',
      id: 'dragDropImgLabel6',
      commonData: {
        title: 'படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `astronaut|விண்வெளி வீரர்
clown| கோமாளி
blacksmith| கொல்லர்
cobbler| செருப்பு தைப்பவர் 
goldsmith| பொற்கொல்லர்`,

        `potter| குயவர்
warrior| போர்வீரர்
barber| முடி திருத்துபவர்
soldier| சிப்பாய்
washerman| சலவை செய்பவர்`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'உடை',
      id: 'dragDropImgLabel8',
      commonData: {
        title: 'உடைகளின் படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `dress| உடை
shoe| காலணி
sock| காலுறை
pyjama| இரவு உடுப்பு
gloves| கையுறைகள்
scarf| கழுத்துத்துண்டு`,

        `sweater| கம்பளிச்சட்டை
shirt| சட்டை
coat| மேலங்கி
hat| தொப்பி
trousers| கால்சட்டை`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'வீடு',
      id: 'dragDropImgLabel10',
      commonData: {
        title: 'படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `radio| வானொலி
fridge| குளிர்சாதன பெட்டி
toothpaste| பற்பசை 
box| பெட்டி
coin| நாணயம்`,

        `medicine| மருந்து
handbag| கைப்பை
stove| அடுப்பு
fork| முள் கரண்டி
knife|கத்தி`,

        `pan| வாணலி 
pot| பானை
plate| தட்டு
tap| நீர்க்குழாய்
lid| மூடி
salt| உப்பு`,

        `cup| கோப்பை
bowl| கிண்ணம்
waterbottle| தண்ணீர் குடுவை
scissors| கத்தரிக்கோல்
calculator| கணிப்பான்
book| புத்தகம்`,

        `ink| மை
eraser| அழிப்பான்
pen| பேனா
pencil| எழுதுகோல்
ruler| அளவுகோல்
schoolbag| புத்தகப்பை`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'கருவிகள்',
      id: 'dragDropImgLabel11',
      commonData: {
        title: 'படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `axe| கோடரி
balance| தராசு
blackboard| கரும்பலகை
hose| குழாய்
microscope| நுண்ணோக்கி
compass| திசைகாட்டி`,

        `needle| ஊசி
plier| இடுக்கி
plough| கலப்பை
saw| ரம்பம்
spade| மண்வெட்டி
screw| திருகு`,

        `telescope| தொலைநோக்கி
test-tube| சோதனை குழாய்
thermometer| வெப்பமானி
trowel| கரணை
awl| குத்தூசி
screwdriver| திருப்புளி`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'உணவுப்பொருட்கள்',
      id: 'dragDropImgLabel12',
      data: {
        title: 'படங்களுடன் பெயரைப் பொருத்துக',
        text: `butter| வெண்ணெய்
meat| இறைச்சி
flour| மாவு
lentils| பருப்பு
rice|அரிசி
soup| சாறு`
      }
    },
    {
      type: 'dragDropImgLabel',
      label: 'இசைக்கருவிகள்',
      id: 'dragDropImgLabel13',
      commonData: {
        title: 'படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `conch| சங்கு
drums|முரசு
dhol| மத்தளம்
flute| புல்லாங்குழல்`,

        `tabla| தபேலா
violin| வயலின் 
yazl| யாழ்
damaru| உடுக்கை`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'கூடுதல் பயிற்சி',
      id: 'dragDropImgLabel7',
      commonData: {
        title: 'படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `palanquin| பல்லக்கு
vegetables| காய்கறிகள்
nest| கூடு
twig| கிளை
dew | பனித்துளி 
waterfall| அருவி`,

        `brush| தூரிகை
bone| எலும்புத்துண்டு
bell| மணி
food| உணவு
rishi| முனிவர்`,

        `chariot| தேர்
park| பூங்கா
garden| தோட்டம்
touch-me-not| தொட்டாற்சிணுங்கி
yagna| யாகம்`,

        `yarn-ball| நூல் கண்டு
fountain| நீரூற்று
pouch| சுருக்குப்பை
hexagon| அறுகோணம்
trident| திரிசூலம்`
      ]
    },
    {
      type: 'completeWord',
      label: 'பறவைகள்',
      id: 'birds',
      data: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க',
        text: `kingfisher| மீன் கொத்தி| _ன் கொத்தி| மீ, ஐ, மு, ஓ
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
        `wood-apple| விளாம்பழம்| _ளாம்பழம்|வி, சீ, வா, நா
gooseberry| நெல்லிக்காய்| _ல்லிக்காய்|நெ, நா, கா, சா
lemon| எலுமிச்சை| _லுமிச்சை|எ, இ, ஆ, ச
custard-apple| சீதாப்பழம்| _தாப்பழம்| சீ, ஆ, தி, இ
dates| பேரிச்சை | _ரிச்சை| பே, ஆ, இ, வா
sweet-potato| சர்க்கரைவள்ளி கிழங்கு| _ர்க்கரைவள்ளி கிழங்கு| ச, சா, சி, சீ 
jamun| நாவல்பழம்| _வல்பழம்| நா, ப, வ, ழ`,

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
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க'
      },
      data: [
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
elephant-yam| சேனைக்கிழங்கு| _னைக்கிழங்கு| சே, கி, ழ, கு`
      ]
    },
    {
      type: 'completeWord',
      label: 'பூக்கள்',
      id: 'flowers',
      data: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க',
        text: `marigold| சாமந்தி | _மந்தி | சா, ச, செ, சே
magnolia| செண்பகம்|_ண்பகம்|செ, ச, சா, சி
periwinkle| நித்தியகல்யாணி| _த்தியகல்யாணி|நி, தி, தா, வி
water-lily| அல்லி| _ல்லி|அ, ஆ, உ, இ`
      }
    },
    {
      type: 'completeWord',
      label: 'வாகனங்கள்',
      id: 'vehicles',
      data: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க',
        text: `ambulance| அவசர ஊர்தி |_வசர ஊர்தி |அ, ப, பா, மா
tractor| இழுவை இயந்திரம் |_ழுவை இயந்திரம் |இ, சா, ச, கா
cart| கட்டைவண்டி| _ட்டைவண்டி| க, கா, கீ, கு
fire-engine| தீயணைப்பு வாகனம் |_யணைப்பு வாகனம்| தீ, ப, பா, மா
lorry| சரக்குந்து | _ரக்குந்து | ச, மி, வி, மா
rocket| ஏவுகனை| _வுகனை| ஏ, எ, ஐ, ஒ
submarine| நீர்மூழ்கிக்கப்பல்| _ர்மூழ்கிக்கப்பல்| நீ, ந, நா, நி`
      }
    },
    {
      type: 'completeWord',
      label: 'தொழில்',
      id: 'jobs',
      data: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க',
        text: `astronaut|விண்வெளிவீரர்|_ண்வெளிவீரர்|வி, வீ, வு, வூ
clown| கோமாளி| _மாளி| கோ, கெ, கே, கை
barber| முடி திருத்துபவர்| _டி திருத்துபவர்|மு, மா, ம, மி
washerman| சலவை செய்பவர்| _லவை செய்பவர்|ச, சி, செ, சா 
blacksmith| கொல்லர்| _ல்லர்| கொ, கா, கி, கீ
cobbler| செருப்புதைப்பவர்| _ருப்புதைப்பவர்| செ, ச, சா, சி
goldsmith| பொற்கொல்லர்| _ற்கொல்லர்| பொ, ப, பா, பி
potter| குயவர்| _யவர்| கு, க, கா, கீ
warrior| போர்வீரர்| _ர்வீரர்| போ, பொ, ப, பா
soldier| சிப்பாய்| _ப்பாய்| சி,செ, ச, சா`
      }
    },
    {
      type: 'completeWord',
      label: 'உடை',
      id: 'dress',
      data: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க ',
        text: `shoe| காலணி| _லணி| கா, கி, கீ, கு
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
      label: 'வீடு',
      id: 'house',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க '
      },
      data: [
        `radio| வானொலி| _னொலி| வா, வீ, வ, வு
fridge| குளிர்சாதன பெட்டி| _ளிர்சாதன பெட்டி| கு,  க, கா, கி
toothpaste| பற்பசை | _ற்பசை | ப, பா, ம, பூ
box| பெட்டி| _ட்டி| பெ, ப, பா, பூ
coin| நாணயம்| _ணயம்| நா, ந, நி, நீ
medicine| மருந்து| _ருந்து| ம, மூ, மே, மெ
handbag| கைப்பை| _ப்பை| கை, கூ, க, கு`,

        `stove| அடுப்பு| _டுப்பு| அ, ஆ, இ, ஒ
fork| முள் கரண்டி| _ள் கரண்டி| மு, ம, மா, மி
knife |கத்தி| _த்தி | க, கை, கூ, கு
pan| வாணலி| _ணலி| வா, வ, வி, வெ
pot| பானை| _னை| பா, ப, பி, பீ
plate| தட்டு| _ட்டு| த, து, தி, தொ
tap| நீர்க்குழாய்| _ர்க்குழாய்| நீ, ந, நா, நி`,

        `lid| மூடி| _டி| மூ, ம, மா, மி
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
      label: 'உணவுப்பொருட்கள்',
      id: 'snacks',
      data: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க',
        text: `flour| மாவு| _வு| மா, சா, பா, டா
lentils| பருப்பு| _ருப்பு| ப, அ, ம, ச
rice|அரிசி| _ரிசி|அ, ப, ம, ச
soup| சாறு| _று| சா, பா, டா, தி
meat| இறைச்சி| _றைச்சி| இ, ஈ, அ, ப
butter| வெண்ணெய்| _ண்ணெய்| வெ, வே, சா, பா`
      }
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
saw| ரம்பம்| _ம்பம்| ர, ற, வ, க
spade| மண்வெட்டி| _ண்வெட்டி| ம,ப, க, மூ
telescope| தொலைநோக்கி| _லைநோக்கி| தொ, மே, வீ, கை
test-tube| சோதனை குழாய்| _தனை குழாய்| சோ, தொ, க, மூ`,

        `thermometer| வெப்பமானி| _ப்பமானி| வெ, இ, சி, வா
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
        ` palanquin| பல்லக்கு| _ல்லக்கு| ப, பா, பு, பி  
vegetables| காய்கறிகள்| _ய்கறிகள்| கா, கூ, கை, கி
nest| கூடு| _டு| கூ, கை, சூ, கி
twig| கிளை| _ளை| கி, கூ, கை, சூ
dew| பனித்துளி | _னித்துளி | ப, பா, பு, பி  
waterfall| அருவி| _ருவி| அ, ஆ, இ, ஈ
brush| தூரிகை| _ரிகை| தூ, து, தா, மோ
bone| எலும்பு துண்டு| _லும்பு துண்டு| எ, ஒ, ஓ, ஔ
rishi| முனிவர்| _னிவர்| மு, ந, ஐ, ஒ
chariot| தேர்| _ர்| தே, தெ, நெ, நே`,

        `park| பூங்கா| _ங்கா| பூ, ப, பா, பி
garden| தோட்டம்| _ட்டம்| தோ, த, தா, தி
touch-me-not| தொட்டாற்சிணுங்கி| _ட்டாற்சிணுங்கி| தொ, தோ, த, தா
yagna| யாகம்| _கம்| யா, பா, டா, மா
yarn-ball| நூல் கண்டு| _ல் கண்டு| நூ, ரூ, று, ரி 
fountain| நீரூற்று| _ரூற்று| நீ, தி, ரி, பி
pouch| சுருக்குப்பை| _ருக்குப்பை| சு, சூ, ரு, ரூ
hexagon| அறுகோணம்| _றுகோணம்| அ, ஆ, இ, உ
trident| திரிசூலம்| _ரிசூலம்| தி, ரி, பி, நீ`
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
கா, rhino
மு, crocodile 
சு, shark`,

        `தி, whale
ந, crab
ஈ, winged-termites    
வௌ ,bat
க, kangaroo`,

        `சி, leopard
கீ, mongoose
ஓ, wolf
க, hyena
கா, boar`,

        `ஓ, garden-lizard
ப, polarbear
வ, bug
ந, jackal
இ, prawn`,

        `மு, porcupine
ம, python
வெ, hamster
கா, bison
ப, chameleon`,

        `கா, bull
தே, bee
த, goldfish
க, seahorse`,

        `க, caterpillar
த, dragonfly
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
        `சி, sparrow
கோ, chick
மீ, kingfisher
நெ, ostrich
ப, falcon`,

        `ம, woodpecker
அ, swan
ம, spotted-dove
வா, turkey
ப, macaw`
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
        `பே, dates
அ, fig
சீ, custard-apple
நா, jamun`,

        `பே, pear
இ, jujube
ச, sapotta
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
        `ம, corn
ப, pumpkin
பா, almond 
கு, capsicum
சே, elephant-yam`,

        `மு, cashewnut  
ப, greenpeas
வே, peanut 
கொ, chickpea
வெ, fenugreek`,

        `அ, broad-beans 
பூ,  ashgourd 
பீ, ridgegourd
மு, drumstick-leaves
வெ, cucumber`,

        `வா, banana-flower
சு, bottlegourd
கோ, ivygourd
நூ, kohlrabi`,

        `பு, snake-gourd
வெ, spring-onion
வா, banana-stem
கொ, cluster-beans`
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
        text: `சா, marigold
செ, magnolia
நி, periwinkle
அ, water-lily`
      }
    },
    {
      id: 'match-vehicles',
      type: 'match',
      label: 'பொருத்துக: வாகனங்கள்',
      data: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true,
        text: `அ, ambulance
இ, tractor
க, cart
தீ, fire-engine
ச, lorry
ஏ, rocket
நீ, submarine`
      }
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
மு, barber
ச, washerman
கொ, blacksmith`,

        `சி, soldier
செ, cobbler 
பொ, goldsmith
கு, potter
போ, warrior`
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
      data: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true,
        text: `வெ, butter
மா, flour
ப, lentils
அ, rice
சா, soup
இ, meat`
      }
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
        `வா, radio
கு, fridge
ப, toothpaste 
பெ, box
நா,  coin`,

        `ம, medicine
கை, handbag
அ, stove
க, knife
மு, fork`,

        `வா, pan
பா, pot
த, plate
நீ, tap
மூ, lid`,

        `பு, schoolbag
உ, salt
கோ, cup
கி, bowl
த, waterbottle`,

        `க, scissors
அ, ruler
க, calculator
பு, book`,

        `மை, ink 
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
        `ப, palanquin
கா, vegetables
கூ, nest
கி, twig
அ, waterfall`,

        `ப, dew
தூ, brush
எ, bone
மு, rishi
தே, chariot`,

        `பூ, park
தோ, garden
தொ, touch-me-not
யா, yagna
நூ, yarn-ball`,

        `நீ, fountain
சு, pouch
அ, hexagon
தி, trident`
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
