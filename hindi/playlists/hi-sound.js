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
          audioOffset: 20,
          text: `hippo| जलहस्ती
rhino| गैंडा
fox| लोमड़ी
crocodile| मगरमच्छ
bear| भालू
camel| ऊंट
fish| मछली
frog| मेंडक
snake| साँप
tortoise| कछुआ`
        },
        {
          audioOffset: 40,
          text: `rat| चूहा
squirrel| गिलहरी
ant| चींटी
fly| मक्खी
bat| चमगादड़
buffalo| भेंस
butterfly| तितली `
        },
        {
          audioOffset: 54,
          text: `leopard| तेंदुआ
cow| गाय
donkey| गधा
mongoose| नेवला
mosquito| मच्छर
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
duck| बतख़
hen| मुर्गी
parrot| तोता
peacock| मोर
sparrow| गौरेया
chick| चूजा
myna| मैना`
        },
        {
          audioOffset: 16,
          text: `ostrich| शुतरमुर्ग
            owl| उल्लू
rooster| मुर्गा
woodpecker| कठफोड़वा
eagle| गिद्ध
crane| सारस
flamingo| मराल
kingfisher| नीलकंठ`
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
jasmine | चमेली
hibiscus | गुडहल`
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
foot| पैर
hair| बाल
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
spoon| चम्मच
knife| छुरी
pan|कड़ाही
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
orange| संतरा
papaya| पपीता `
        },
        {
          audioOffset: 18,
          text: `pineapple| अनानास
pomegranate| अनार
watermelon| तरबूज
fig| अंजीर
custard-apple| शरीफा
Plum| आलूबुखारा
dates| खजूर
muskmelon| खरबूज`
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
cauliflower| फूल गोभी
corn| भुट्टा
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
chilli| हरी मिर्च
coconut| नारियल`
        },
        {
          audioOffset: 40,
          text: `corianderleaf| धनिया पत्ता
curryleaf| करी पत्ता
drumstick| सहजन
greenpeas| मटर
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
      label: 'वाहन',
      commonData: {
        audio: 'hi-vehicles.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text: `aeroplane| हवाई जहाज
boat| नाव
bus| बस
car| गाड़ी 
ship| समुंद्री जहाज
tractor| ट्रैक्टर`
        },
        {
          audioOffset: 12,
          text: `train| रेल गाडी
ambulance| रोगी वाहन
cart| हाथगाडी
excavator| खोदक मशीन
fire-engine| दमकल`
        }
      ]
    },
    {
      type: 'slides',
      id: 'house',
      label: 'मकान',
      commonData: {
        audio: 'hi-house.mp3'
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
boy| लड़का`
        },
        {
          audioOffset: 16,
          text: `girl| लड़की
man| आदमी
woman| औरत
ball| गेंद
glasses| ऐनक
clock| दीवार घड़ी
watch| हाथ-घड़ी`
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
          text: `sun| सूर्य
moon| चांद
rain| बारिश
star| तारा
milk| दूध
ring| अंगूठी
brush| कूंचा
bone| हड्डी`
        },
        {
          audioOffset: 16,
          text: `bell| घंटी
bird| पक्षी
conch| शंख 
five| पांच
drums| ढोल
food| खाना
fruits| फल
king| राजा`
        },
        {
          audioOffset: 32,
          text: `kite| पतंग
ladder| सीढ़ी
ladoo| लड्डू
leaf| पत्ता
rishi| ऋषि मुनि
wheel| चक्का
whistle| सीटी
world| दुनिया`
        }
      ]
    },
    {
      type: 'slides',
      id: 'school',
      label: 'विद्यालय',
      data: {
        audio: 'hi-school.mp3',
        audioOffset: 0,
        text: `eraser| रबड़
pen| कलम 
pencil|पेंसिल 
ruler| पेमाना
schoolbag | बस्ता 
scissors| कैंची
sharpener| चोखा करनेवाला 
waterbottle| पानी की बोतल 
calculator | गणना यंत्र
book| किताब
color-pencils | रंग पेंसिल
crayons| चित्रांकनी `
      }
    },
    {
      type: 'slides',
      id: 'tools',
      label: 'उपकरण',
      commonData: {
        audio: 'hi-tools.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text: `axe| कुल्हाडी
balance| तराज़ू
blackboard | श्यामपट 
hose | रबर का पाइप
plier| प्‍लास
microscope| सूछ्म दर्शी
needle | सुई
oven | कुठला
plough | हल
saw| आरा`
        },
        {
          audioOffset: 20,
          text: `spade| कुदाल
stethescope|आला
telescope| दूरबीन
testtube | परखनली
thermometer| तापमान-यंत्र 
trowel| करनी
compass| दिशा सूचक यंत्र
easel| चित्रफलक
hacksaw| लोहा-आरी
scalpel| छुरी`
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'चित्र चुनें',
      id: 'pick-word',
      commonData: {
        title: 'ध्वनि सुनकर चित्र का चयन करें',
        type: 'image'
      },
      data: [
        {
          audio: 'hi-animals.mp3',
          words:
            'cat, dog, goat, sheep, horse, pig, elephant, lion, monkey, tiger'
        },
        {
          audio: 'hi-animals.mp3',
          audioOffset: 20,
          words:
            'hippo, rhino, fox, crocodile, bear, camel, fish, frog, snake, tortoise'
        },
        {
          audio: 'hi-animals.mp3',
          audioOffset: 40,
          words: 'rat, squirrel, ant, fly, bat, buffalo, butterfly'
        },
        {
          audio: 'hi-animals.mp3',
          audioOffset: 54,
          words: 'leopard, cow, donkey, mongoose, mosquito, lizard, rabbit'
        },
        {
          audio: 'hi-birds.mp3',
          words:
            'crow, duck, hen, parrot, peacock, sparrow, chick, myna, ostrich'
        },
        {
          audio: 'hi-birds.mp3',
          audioOffset: 18,
          words: 'owl, rooster, woodpecker, eagle, crane, flamingo, kingfisher'
        },
        {
          audio: 'hi-flowers-bodyParts-kitchen.mp3',
          audioOffset: 0,
          words: 'rose, lotus, sunflower, marigold, jasmine, hibiscus'
        },
        {
          audio: 'hi-flowers-bodyParts-kitchen.mp3',
          audioOffset: 12,
          words: 'ear, eye, foot, hair, hand, mouth, nose, tooth'
        },
        {
          audio: 'hi-flowers-bodyParts-kitchen.mp3',
          audioOffset: 28,
          words: 'stove, fork, spoon, knife, pan, pot, butter'
        },
        {
          audio: 'hi-fruits.mp3',
          audioOffset: 0,
          words:
            'apple, grapes, banana, strawberry, guava, jackfruit, mango, orange, papaya'
        },
        {
          audio: 'hi-fruits.mp3',
          audioOffset: 18,
          words:
            'pineapple, pomegranate, watermelon, fig, custard-apple, plum, dates, muskmelon'
        },
        {
          audio: 'hi-vegetables.mp3',
          audioOffset: 0,
          words:
            'carrot, beetroot, onion, tomato, potato, cabbage, cauliflower, corn, cucumber, garlic'
        },
        {
          audio: 'hi-vegetables.mp3',
          audioOffset: 20,
          words:
            'ginger, pumpkin, almond, beans, bitter-gourd, brinjal, capsicum, cashewnut, chilli, coconut '
        },
        {
          audio: 'hi-vegetables.mp3',
          audioOffset: 40,
          words:
            'corianderleaf, curryleaf, drumstick, greenpeas, ladies-finger, mintleaf, peanut, raddish, spinach'
        },
        {
          audio: 'hi-vehicles.mp3',
          audioOffset: 0,
          words: 'aeroplane, boat, bus, car, ship, tractor'
        },
        {
          audio: 'hi-vehicles.mp3',
          audioOffset: 12,
          words: 'train, ambulance, cart, excavator, fire-engine'
        },
        {
          audio: 'hi-house.mp3',
          audioOffset: 0,
          words: 'house, table, bed, candle, chair, shelf, baby, boy'
        },
        {
          audio: 'hi-house.mp3',
          audioOffset: 16,
          words: 'girl, man, woman, ball, glasses, clock, watch'
        },
        {
          audio: 'hi-others.mp3',
          audioOffset: 0,
          words: 'sun, moon, rain, star, milk, ring, brush, bone'
        },
        {
          audio: 'hi-others.mp3',
          audioOffset: 16,
          words: 'bell, bird, conch, five, drums, food,  fruits, king'
        },
        {
          audio: 'hi-others.mp3',
          audioOffset: 32,
          words: 'kite, ladder, ladoo, leaf, rishi, wheel, whistle, world'
        },
        {
          audio: 'hi-school.mp3',
          audioOffset: 0,
          words:
            'eraser, pen, pencil, ruler, schoolbag, scissors, sharpener, waterbottle, calculator, book, color-pencils, crayons '
        },
        {
          audio: 'hi-tools.mp3',
          audioOffset: 0,
          words:
            'axe, balance, black-board, hose, plier,  microscope, needle, oven, plough, saw'
        },
        {
          audio: 'hi-tools.mp3',
          audioOffset: 20,
          words:
            'spade, stethescope, telescope, testube, thermometer, trowel, compass, easel, hacksaw, scalpel '
        }
      ]
    }
  ]
};
