export default {
  label: 'மீண்டும் படம்',
  id: 'ta-picture-2',
  img: 'image',
  list: [
    {
      type: 'connectLetters',
      label: 'சொல் உருவாக்குக',
      id: 'connect-letters',
      commonData: {
        title: 'எழுத்துக்களை இணைத்து சொல் உருவாக்குக ',
        printTitle: 'Form the word using the letters.',
        type: 'image',
        lang: 'ta'
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
        lang: 'ta'
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
sheep| செம்மறி ஆடு | ____ __
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
