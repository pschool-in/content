export default {
  label: 'ध्वनि',
  id: 'hi-sound',
  img: 'sound',
  list: [
    {
      type: 'slides',
      id: 'animals',
      label: 'जानवर',
      commonData: {
        audio: 'hi-animals.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text: `cat| बिल्ली
dog| कुत्ता
goat| बकरी
sheep| भेड्
horse| घोडा
pig| सुअर
elephant| हाथी
lion| शेर
monkey| बंदर
tiger| बाघ`
        },
        {
            audioOffset: 0,
            text: `hippo| दरियाई घोड़ा
rhino| गैंडा
fox| लोमड़ी
crocodile| मगरमच्छ
zebra| धारीदार घोडा
bear| भालू
camel| ऊंट
shark| हाँगर
whale| तिमिंगल`
          },
          {
            audioOffset: 0,
            text: ` fish| मछली
frog| मेंडक
crab| केकड़ा
snake| सर्प
squirrel| गिलहरी
tortoise| कछुआ
rat| चूहा
winged-termites| पंखों वाला दीमक
ant| चींटी`
          },
          {
            audioOffset: 0,
            text: `fly| मक्खी
bat| चमगादड़
buffalo| भेंस
butterfly| तितली 
cow| गाय
donkey| गधा
kangaroo| कंगारू
leopard| तेंदुआ`
          },
          {
            audioOffset: 0,
            text: `mongoose| नेवला
mosquito| मच्छर
wolf| भेड़िया
cockroach| तिलचट्टा
garden-lizard| बिछकपडा 
lizard| छिपकली
rabbit| खरगोश`
          }
      ]
    },
    {
        type: 'slides',
        id: 'birds',
        label: 'चिड़िया',
        commonData: {
          audio: 'hi-birds.mp3'
        },
        data: [
          {
            audioOffset: 0,
            text: `crow| कौवा
dove| कबूतर
duck| बतख़
hen| मुर्गी
parrot| तोता
peacock| मोर
sparrow| गौरेया
chick| चूजा
crane| सारस`
          },
          {
            audioOffset: 18,
            text: `eagle| गिद्ध
flamingo| राज-हंस
kingfisher| राम चिरैया
myna| मैना
ostrich| शुतरमुर्ग
owl| उल्लू
rooster| मुर्गा
vulture| गिद्ध
woodpecker| कठफोड़वा`
          }
        ]
      },
    {
        type: 'slides',
        id: 'flowers',
        label: 'फूल',
        data: {
          audio: 'hi-flowers-bodyParts-kitchen.mp3',
          audioOffset: 0,
          text: `rose | गुलाब
lotus | कमल
sunflower | सूरजमुखी
marigold | गेंदा
hibiscus | हिबिस्कुस
jasmine | चमेली
zinnia | ज़िन्निया `
        }
      },
    {
        type: 'slides',
        id: 'bodyParts',
        label: 'शरीर के अंग',
        data: {
          audio: 'hi-flowers-bodyParts-kitchen.mp3',
          audioOffset: 12,
          text: `ear| कान
eye| आंख
foot| टांग
hair| केश
hand|  हाथ
mouth| मुंह
nose| नाक
tooth| दांत`
        }
      },
    {
        type: 'slides',
        id: 'kitchen',
        label: 'रसोई की सामग्री',
        data: {
          audio: 'hi-flowers-bodyParts-kitchen.mp3',
          audioOffset: 28,
          text: `stove| चूल्हा
fork| कांटा
knife| छुरी
pan| तवा
spoon| चमचा
pot| मटका
butter| मक्खन`
        }
      },
    {
        type: 'slides',
        id: 'fruits',
        label: 'फल',
        commonData: {
          audio: 'hi-fruits.mp3'
        },
        data: [
          {
            audioOffset: 0,
            text: `apple| सेब
grapes| अंगूर
banana| केला
strawberry| झरबेर
guava| अमरूद
jackfruit| कटहल
mango| आम
orange| संतरा`
          },
          {
            audioOffset: 16,
            text: `papaya| पपीता
pineapple| अनानास
pomegranate| अनार
watermelon| तरबूज
fig| अंजीर
custard apple| शरीफा
plum| बेर
dates| खजूर
muskmelon| खरबूजा`
          }
        ]
      },
    {
        type: 'slides',
        id: 'vegetables',
        label: 'सब्जियां',
        commonData: {
          audio: 'hi-vegetables.mp3'
        },
        data: [
          {
            audioOffset: 0,
            text: `carrot| गाजर
beetroot| चुकंदर
onion| प्याज
tomato| टमाटर
potato| आलू
cabbage| पत्ता गोभी
cauliflower| गोभी
corn| मक्का
cucumber| खीरा
garlic| लहसुन`
          },
          {
            audioOffset: 20,
            text: `ginger| अदरक
pumpkin| कद्दू
almond| बादाम
beans| फलियां
bitter-gourd| करेला
brinjal| बैंगन
capsicum| शिमला मिर्च
cashewnut| काजू
chilli| मिर्च
coconut| नारियल`
          },
          {
            audioOffset: 40,
            text: `corianderleaf| धनिए के पत्ते
curryleaf| करी पत्ता
drumstick| ढोल का छड़ी
greenpeas| हरी मटर
ladies-finger| भिन्डी
mintleaf| पुदीना
peanut| मूंगफली
raddish| मूली
spinach| पालक`
          }
        ]
      },
    {
        type: 'slides',
        id: 'vehicles',
        label: 'वाहनों',
        data: [  {
          audio: 'hi-vehicles.mp3',
          audioOffset: 0,
          text: `aeroplane| हवाई जहाज
boat| नाव
car| गाड़ी
cycle| चक्र
motorbike| मोटरसाइकिल
ship| समुंद्री जहाज
train| रेल गाडी`},
          {
            audioOffset: 16,
            text: `ambulance| रोगी वाहन
auto| ऑटो
cart| कार्ट
excavator| खोदक मशीन
fire-engine| दमकल`
          }
        ]
      },
     {
        type: 'slides',
        id: 'other-images',
        label: 'अन्य छवियां',
        commonData: {
          audio: 'hi-others.mp3'
        },
        data: [
          {
            audioOffset: 0,
            text: `house| मकान
table| मेज
bed| बिस्तर
candle| मोमबत्ती
chair| कुर्सी
shelf| अलमारी
baby| बच्चा
boy| लड़का
girl| लड़की
man| आदमी
woman| स्री
ball| गेंद
glasses| ऐनक
clock| दीवार घड़ी
watch| घड़ी`
          },
          {
            audioOffset: 18,
            text: `eraser| रबड़
pen| कलम 
ruler| मापन
schoolbag| बस्ता 
scissors| कैंची
sharpener| पेंसिल ताराश 
waterbottle| पानी की बोतल 
book| किताब
crayons| कडिया पेंसिल`
          },
          {
            audioOffset: 38,
            text: `sun| रवि
moon| चांद
rain| वर्षा
star| सितारा
milk| दूध
ring| अंगूठी
brush| ब्रश
bone| हड्डी
bell| घंटी`
          },
          {
            audioOffset: 58,
            text: `bird| चिड़िया
conch| शंख 
five| पांच
food| खाना
fruits| फल
king| राजा
kite, पतंग
ladder| सीढ़ी`
          },
          {
            audioOffset: 72,
            text: `leaf| पत्ता
rishi| ऋषि
wheel| पहिया
whistle| सीटी
world, दुनिया`
          }
        ]
      },
    {
      type: 'rightOne',
      label: 'Select Picture',
      id: 'pick-word',
      commonData: {
        title: 'Select Picture by listening to the Sound',
        type: 'image'
      },
      data: [
        {
          audio: 'hi-animals.mp3',
          words:
            'cat, dog, goat, sheep, horse, pig, elephant, lion, monkey, tiger'
        }
      ]
    }
  ]
};
