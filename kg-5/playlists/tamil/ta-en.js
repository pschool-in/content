export default {
  label: 'விலங்குகளும் பறவைகளும்',
  id: 'ta-en',
  list: [
    {
      id: 'notes',
      type: 'passage',
      label: `குறிப்புகள்  `,
      data: {
        title: `விலங்குகள்  `,
        text: [
          `cat, பூனை
dog, நாய்
goat, ஆடு
horse, குதிரை
cow, பசு
pig, பன்றி
buffalo, எருமை
donkey, கழுதை
bull, காளை
camel, ஒட்டகம்`,

          `elephant, யானை
monkey, குரங்கு
lion, சிங்கம்
tiger, புலி
kangaroo, கங்காரு
leopard, சிறுத்தை
fox, நரி
rabbit, முயல்
antelope, மான்
bear, கரடி`,

          `fish, மீன்
frog, தவளை
snake, பாம்பு
squirrel, அணில்
tortoise, ஆமை
rat, எலி
fly, ஈ
ant, எறும்பு
lizard, பல்லி
crab, நண்டு`,

          `mosquito, கொசு
dragonfly, தட்டான்
earthworm, மண்புழு
bug, வண்டு
prawn, இறால்
bee, தேனீ
spider, சிலந்தி
winged-termites, ஈசல்
bat, வௌவால்
garden-lizard, ஓணான்`,

          `# பறவைகள் `,
          `crow, காகம்
dove, புறா
duck, வாத்து
hen, கோழி
parrot, கிளி
peacock, மயில்
crane, கொக்கு
rooster, சேவல்
cuckoo, குயில்
eagle, கழுகு
myna, மைனா
owl, ஆந்தை`
        ]
      }
    },
    {
      id: 'match-animals',
      type: 'match',
      label: 'விலங்குகள் - பொருத்துக',
      commonData: {
        title: 'விலங்குகள் - பொருத்துக',
        fontSize: '1rem'
      },
      data: [
        `cat, பூனை
dog, நாய்
goat, ஆடு
horse, குதிரை
cow, பசு`,

        `pig, பன்றி
buffalo, எருமை
donkey, கழுதை
bull, காளை
camel, ஒட்டகம்`,

        `elephant, யானை
monkey, குரங்கு
lion, சிங்கம்
tiger, புலி
kangaroo, கங்காரு`,

        `leopard, சிறுத்தை
fox, நரி
rabbit, முயல்
antelope, மான்
bear, கரடி`,

        `fish, மீன்
frog, தவளை
snake, பாம்பு
squirrel, அணில்
tortoise, ஆமை`,

        `rat, எலி
fly, ஈ
ant, எறும்பு
lizard, பல்லி
crab, நண்டு`,

        `mosquito, கொசு
dragonfly, தட்டான்
earthworm, மண்புழு
bug, வண்டு
prawn, இறால்`,

        `bee, தேனீ
spider, சிலந்தி
winged-termites, ஈசல்
bat, வௌவால்
garden-lizard, ஓணான்`
      ]
    },
    {
      id: 'match-birds',
      type: 'match',
      label: 'பறவைகள் - பொருத்துக',
      commonData: {
        title: 'பறவைகள் - பொருத்துக',
        fontSize: '1rem'
      },
      data: [
        `crow, காகம்
dove, புறா
duck, வாத்து
hen, கோழி
parrot, கிளி
peacock, மயில்`,

        `crane, கொக்கு
rooster, சேவல்
cuckoo, குயில்
eagle, கழுகு
myna, மைனா
owl, ஆந்தை`
      ]
    }
  ]
};
