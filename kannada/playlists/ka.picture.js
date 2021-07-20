export default {
  label: 'படம்',
  id: 'ka-picture',
  img: 'image',
  list: [
    {
      type: 'completeWord',
      label: 'ಪ್ರಾಣಿಗಳು ಪಕ್ಷಿಗಳು',
      id: 'animals-birds',
      commonData: {
        images: 'custom',
        lang: 'ka'
      },
      data: [       
 
              `cat| ಬೆಕ್ಕು | ಬೆಕ್ಕು | பூ, பு , ப , கு 
      dog| ನಾಯಿ | ನಾಯಿ | நா, ன , னா , ண 
      goat| ಮೇಕೆ | ಮೇಕೆ| ஆ, அ,  இ, ஈ
      sheep| ಕುರಿ | ಕುರಿ| செ, சை , ச , சே   
      horse| ಕುದುರೆ | ಕುದುರೆ| கு, கூ , கே,  கை  
      pig| ಹಂದಿ| ಹಂದಿ| பா, ப, ம, மா
      elephant| ಆನೆ | ಆನೆ| யா, ய , ல, ழ 
      lion| ಸಿಂಹ| ಸಿಂಹ| சி, சு , சீ , சூ  
      monkey|ಕೋತಿ | ಕೋತಿ | கு, கூ , கே, கெ 
      tiger| ಹುಲಿ| ಹುಲಿ| பு, பி , பீ , பெ `,
      
              `fox| ನರಿ | ನರಿ | ந, நா, ன , னா 
      crocodile| ಮೊಸಳೆ| ಮೊಸಳೆ| மு, மூ , மீ , மே  
      zebra| ಹೇಸರಗತ್ತೆ| ಹೇಸರಗತ್ತೆ| வி, வீ, வ, வா 
      bear| ಕರಡಿ| ಕರಡಿ| க, ச , சே, கு
      tortoise| ಆಮೆ| ಆಮೆ|
      camel| ಒಂಟೆ| ಒಂಟೆ| ஒ, ஊ , ஓ , வ
      squirrel| ಅಳಿಲು| ಅಳಿಲು| த, ந , ட , தா
      shark| ಹುಲಿಮೀನು | ಹುಲಿಮೀನು| சு,கு, கூ , சூ  
      whale| ತಿಮಿಂಗಿಲ | ತಿಮಿಂಗಿಲ| தி, டி , டீ , தீ  
      hippo| ನೀರಾನೆ| ನೀರಾನೆ| நீ, நி ,னி , னீ 
      rhino| ಖಡ್ಗಮೃಗ | ಖಡ್ಗಮೃಗ| கா, க , தோ , சே `,
      
      `buffalo| ಎಮ್ಮೆ | ಎಮ್ಮೆ| எ, ஏ, ஐ, ஒ
      cow|  ಹಸು| ಹಸು| மா, ஆ, ஊ, ஔ
      donkey| ಕತ್ತೆ| ಕತ್ತೆ| வ, ச, ர, க 
      giraffe| ಜಿರಾಫೆ| ಜಿರಾಫೆ| எ, ஏ, ஐ, ஒ 
      leopard| ಚಿರತೆ | ಚಿರತೆ| உ, சி, எ, வ
      mongoose| ಮುಂಗುಸಿ| ಮುಂಗುಸಿ| ஐ, ஒ, ஓ, கீ
      rabbit| ಮೊಲ| ಮೊಲ| ஐ, மு, ஓ, ஔ
      wolf| ತೋಳ| ತೋಳ| ஐ, ஒ, ஓ, ஔ
      garden-lizard| ಓತಿಕ್ಯಾತ | ಓತಿಕ್ಯಾತ | ஐ, ஒ, ஓ, ஔ`,
      
           `lizard| ಹಲ್ಲಿ| ಹಲ್ಲಿ| ப, ஒ, ஓ, ஔ
      bat| ಬಾವುಲಿ | ಬಾವುಲಿ| வௌ, வொ, வை, வோ
      butterfly|  ಚಿಟ್ಟೆ| ಚಿಟ್ಟೆ| வ, ச, ர, க
      mosquito|  ಸೊಳ್ಳೆ|  ಸೊಳ್ಳೆ| ஐ, கொ, ஓ, ஔ
      cockroach| ಜಿರಳೆ| ಜಿರಳೆ| ஐ, ஒ, க, ஔ
      chick| ಮರಿ| ಮರಿ| ஐ, மு, ஓ, கோ
      snake| ಹಾವು| ಹಾವು | பா,  பீ , பெ, ப`,
      
            `owl| ಗೂಬೆ| ಗೂಬೆ| ஐ, ஆ, ஓ, ஔ
      rooster| ಹುಂಜ| ಹುಂಜ| ஐ, மு, சே, ஔ
      vulture| ವಲ್ಚರ್| ವಲ್ಚರ್| க, மு, ஓ, ஔ
      woodpecker| ಮರಕುಟಿಗ |ಮರಕುಟಿಗ | ம, மு, ஓ, ஔ
      fish|  ಮೀನು |  ಮೀನು| மீ, னி , னீ , மி  
      duck| ಬಾತುಕೋಳಿ| ಬಾತುಕೋಳಿ| வா, வ , ல , யா
      frog| ಕಪ್ಪೆ| ಕಪ್ಪೆ| த, ந , ட , தா 
      crab| ಏಡಿ| ಏಡಿ | ந , நா, ன , னா 
      rat| ಹೆಗ್ಗಣ| ಹೆಗ್ಗಣ| எ, ய , ய் , ஏ`,
      
              ` ant| ಇರುವೆ| ಇರುವೆ| எ, ஏ , யே , ய 
      crow| ಕಾಗೆ | ಕಾಗೆ |  கா, க, ப, ம
      dove| ಪಾರಿವಾಳ| ಪಾರಿವಾ| பு, பீ , பெ, ப     
      hen| ಕೋಳಿ | ಕೋಳಿ| கோ, கெ , கு , கை 
      parrot| ಗಿಣಿ | ಗಿಣಿ| கி, கோ, கெ, கீ
      peacock| నెమలి | నెమలి| ம, மு , மூ , மா  
      sparrow| ಗುಬ್ಬಚ್ಚಿ | ಗುಬ್ಬಚ್ಚಿ | சி, சீ , தி , டி`,
]
    },
{
        type: 'completeWord',
        label: 'ತರಕಾರಿ ಹಣ್ಣುಗಳು ',
        id: 'vegetables-fruits',
        commonData: {
          images: 'custom',
          lang: 'ka'
        },
        data: [
          
                `onion| ಈರುಳ್ಳಿ | _ಈರುಳ್ಳಿ| வெ,  வா, வே , வொ 
beans| ಹುರಳೀಕಾಯಿ | ಹುರಳೀಕಾಯಿ | 
potato| ಆಲೂ ಗಡ್ಡೆ | _ಆಲೂ ಗಡ್ಡೆ| உ, ஊ , ஓ , ஒ 
cabbage| ಎಲೆ ಕೋಸು | _ಎಲೆ ಕೋಸು | மு,  மூ, மெ, வை 
beetroot| ಕಂದು ಬೇರು| ಕಂದು ಬೇರು|
cauliflower| ಹೂ ಕೋಸು|ಹೂ ಕೋಸು|
corn| ಜೋಳ | ಜೋಳ | சோ, தோ , சே,  சொ
carrot| ಗಜ್ಜರಿ | ಗಜ್ಜರಿ | கா, க, ப, ம
cucumber| ಸೌತೇಕಾಯಿ | _ಸೌತೇಕಾಯಿ | வெ, வீ, வ, வா 
garlic| ಬೆಳ್ಳುಳ್ಳಿ |ಬೆಳ್ಳುಳ್ಳಿ | பூ, பு , ப , கு 
ginger| ಶುಂಠಿ | _ಶುಂಠಿ| இ, ஈ, பூ, பு`,

         `pumpkin| ಕುಂಬಳಕಾಯಿ| _ಕುಂಬಳಕಾಯಿ| ம, ப, ஓ, ஔ
brinjal| ಬದನೇಕಾಯಿ | _ಬದನೇಕಾಯಿ| ம, க, ஓ, ஔ
ladies-finger| ಬೆಂಡೇಕಾಯಿ|  ಬೆಂಡೇಕಾಯಿ| ம, மு, ஓ, வெ
raddish| ಮೂಲಂಗಿ| ಮೂಲಂಗಿ| ம, மு, ஓ, ஔ
bitter-gourd| ಹಾಗಲಕಾಯಿ|ಹಾಗಲಕಾಯಿ| பா, மு, ஓ, ஔ
capsicum| ದೊಣ್ಣೆ ಮೆಣಸಿನಕಾಯಿ| ದೊಣ್ಣೆ ಮೆಣಸಿನಕಾಯಿ| ம, கு, ஓ, ஔ
mintleaf|ಪುದಿನ ಸೊಪ್ಪು | ಪುದಿನ ಸೊಪ್ಪು| ம, அ, ஓ, ஔ
chilli| ಹಸಿರು ಮೆಣಸಿನಕಾಯಿ| ಹಸಿರು ಮೆಣಸಿನಕಾಯಿ| ப, மு, ஓ, ஔ
coconut| ತೆಂಗಿನಕಾಯಿ| ತೆಂಗಿನಕಾಯಿ| தே, மு, ஓ, ஔ
corianderleaf| ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು| ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು| ம, கொ, ஓ, ஔ`,

        `curryleaf| ಕರಿಬೇವು| ಕರಿಬೇವು| ம, மு, ஓ, க
greenpeas| ಬಟಾಣಿ| ಬಟಾಣಿ| ம, மு, ஓ, ப
peanut| ಕಡಲೆಕಾಯಿ| ಕಡಲೆಕಾಯಿ| ம, நி, ஓ, ஔ
almond| ಬಾದಾಮಿ| ಬಾದಾಮಿ| ம, மு, ஓ, பா
cashewnut| ಗೋಡಂಬಿ | ಗೋಡಂಬಿ| ம, மு, ஓ, ஔ
spinach| ಸೊಪ್ಪು| ಸೊಪ್ಪು| ம, மு, ஓ, கீ`,

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
muskmelon| ಖರ್ಬೂಜ| ಖರ್ಬೂಜ|  `,
        ]
},
 {
        type: 'completeWord',
        label: `ಹೂವುಗಳು',
        id: 'flowers',
        commonData: {
        images: 'custom',
        lang: 'ka'
        },
        data: [
        
       
           `lotus| ಕಮಲ| _ಕಮಲ ரு, தா, த, தி
rose| ಗುಲಾಬಿ | ಗುಲಾಬಿ |ரோ, சே, பா, மா
sunflower| ಸೂರ್ಯಕಾಂತಿ| _ಸೂರ್ಯಕಾಂತಿ| சூ, தோ, தி , ஆ
marigold| ಚೆಂಡು ಹೂವು |ಚೆಂಡು ಹೂವು | சா, ச, செ, சே
hibiscus|  ದಾಸವಾಳ|  ದಾಸವಾಳ| செ, சே, பா, மா
jasmine| ಮಲ್ಲಿಗೆ| ಮಲ್ಲಿಗೆ| ம, ப, பா, மா`,
                ]
        },
  {
        type: 'completeWord',
        label: 'ದೇಹದ ಭಾಗಗಳು',
        id: 'bodyparts',
        commonData: {
        images: 'custom',
        lang: 'ka'
        },
        data: [
                `ear| ಕಿವಿ | ಕಿವಿ| கா, த, தி, க 
eye| ಕಣ್ಣು| ಕಣ್ಣು | கா, த, தி, க  
foot|  ಪಾದ|  ಪಾದ|  பா, ப, ம, மா
hair| ಕೂದಲು| ಕೂದಲು| மு, ம, மா, மெ 
hand| ಕೈ |ಕೈ| கை, பை , சை , வை 
mouth| ಬಾಯಿ| ಬಾಯಿ|  வா, வி, வீ, வ
nose| ಮೂಗು| ಮೂಗು| மூ,  மு, மா, மெ 
tooth| ಹಲ್ಲು |ಹಲ್ಲು| பா, ப, ம, மா`,

        ]
},
 {
        type: 'completeWord',
        label: 'ವಾಹನಗಳು',
        id: 'vehicles',
        commonData: {
        images: 'custom',
        lang: 'ka'
        },
        data: [
                `aeroplane| ವಿಮಾನ | ವಿಮಾನ| வி, வீ, வ, வா 
boat| ದೋಣಿ| ದೋಣಿ| ம, ப, பா, மா
bus| ಬಸ್ | ಬಸ್| பே, பா, மா, மெ 
car| ಕಾರು| ಕಾರು| ம, ப, பா, மா
cycle| ಚಕ್ರ | ಚಕ್ರ | மி, வி, வீ, மீ  
train| ರೈಲು | ರೈಲು |தொ, தோ , து , தூ
excavator| ಅಗೆಯುವ ಯಂತ್ರ | ಅಗೆಯುವ ಯಂತ್ರ|வா, சா, ச, கா
auto| ಸ್ವಯಂ | ಸ್ವಯಂ | ஆ, மி, வி, மா
fire-engine| ಅಗ್ನಿ ಶಾಮಕ |  ಅಗ್ನಿ ಶಾಮಕ | தீ, ப, பா, மா
van| ನಿಂದ | ನಿಂದ | ச, மி, வி, மா`,

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
    `house| ಮನೆ | ಮನೆ|  வீ, கை, ச, கா
bed| ಹಾಸಿಗೆ | ಹಾಸಿಗೆ | மெ, கை, ச, கா
candle| ಮೋಂಬತ್ತಿ | ಮೋಂಬತ್ತಿ | மெ, வா, கை, ச
chair| ಕುರ್ಚಿ | ಕುರ್ಚಿ | நா, மெ, கை, ச
boy| ಹುಡುಗ | ಹುಡುಗ | சி, மெ, வா, கை
girl| ಹುಡುಗಿ| ಹುಡುಗಿ| சி, வா, கை, ச
man| ಮನುಷ್ಯ | ಮನುಷ್ಯ| ஆ, மே, வீ, கை
woman| ಮಹಿಳೆ | ಮಹಿಳೆ| பெ, அ, மே, வீ`,

        `leaf| ಎಲೆ| ಎಲೆ| அ, ஆ, இ, ஈ
world| ಪ್ರಪಂಚ| ಪ್ರಪಂಚ | உ, ஊ, எ, ஏ
whistle| ಶಿಳ್ಳೆ | ಶಿಳ್ಳೆ | உ, ஊ, எ, ஏ
ladder| ಏಣಿ| ಏಣಿ| உ, ஊ, எ, ஏ
five| ಐದು| ಐದು| ஐ, ஒ, ஓ, ஔ
sun| ಸೂರ್ಯ | ಸೂರ್ಯ | சூ,உ, ஊ, எ  
rain| ಮಳೆ | ಮಳೆ | உ, ஊ, எ, ம
moon| ಚಂದ್ರ | ಚಂದ್ರ |
star| ನಕ್ಷತ್ರ | ನಕ್ಷತ್ರ | ந, ஐ, ஒ, ஓ`,

`milk| ಹಾಲು| ಹಾಲು| பா, ஒ, ஓ, ஔ
bone| ಮೂಳೆ| ಮೂಳೆ|  எ, ஒ, ஓ, ஔ
bell| ಗಂಟೆ| ಗಂಟೆ|  ம, ஒ, ஓ, ஔ
bird|  ಹಕ್ಕಿ|  ಹಕ್ಕಿ| ப, ந, ஐ, ஒ
conch| ಶಂಖ | ಶಂಖ| ச, உ, ஊ, எ
food| ಆಹಾರ| ಆಹಾರ| உ, ஒ, ஓ, ஔ
fruits| ಹಣ್ಣುಗಳು| ಹಣ್ಣುಗಳು | ப, ந, ஐ, ஒ
king| ರಾಜ| ರಾಜ |  அ, உ, ஊ, எ`,

        `kite| ಗಾಳಿಪಟ| ಗಾಳಿಪಟ| ப, அ, ஆ, இ
wheel| ಚಕ್ರ| ಚಕ್ರ|ச, அ, ஆ, இ
ball| ಚೆಂಡು| ಚೆಂಡು| ப, க, மூ, கா
glasses| ಕನ್ನಡಕ| ಕನ್ನಡಕ| மூ, மே, க, கை
clock| ಗಡಿಯಾರ| ಗಡಿಯಾರ| கை, க, மூ, கா`,
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

        `Axe| ಕೊಡಲಿ | ಕೊಡಲಿ| கோ, தொ, மே, வீ
balance| ತುಲನೆ | ತುಲನೆ | த, நு, மே, வீ
blackboard| ಕಪ್ಪು ಹಲಗೆ | ಕಪ್ಪು ಹಲಗೆ |க,சி, வா, கை
hose| ಮೆದುಗೊಳವೆ | ಮೆದುಗೊಳವೆ | கு, நு, மே, வீ
microscope| ಸೂಕ್ಷ್ಮದರ್ಶಕ| ಸೂಕ್ಷ್ಮದರ್ಶಕ | நு, மே, வீ, கை
needle| ಸೂಜಿ| ಸೂಜಿ| ஊ, தொ, மே, வீ
plough| ನೇಗಿಲು | ನೇಗಿಲು| க, தொ, மே, வீ
saw| ಗರಗಸ | ಗರಗಸ| இ, சி, வா, கை`, 

        `telescope| ದೂರದರ್ಶಕ | ದೂರದರ್ಶಕ| தொ, மே, வீ, கை
testtube| ಪ್ರನಾಳ | ಪ್ರನಾಳ | சோ, ப, க, மூ 
compass| ದಿಕ್ಸೂಚಿ| ದಿಕ್ಸೂಚಿ | தி, சி, வா, கை`, 
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
