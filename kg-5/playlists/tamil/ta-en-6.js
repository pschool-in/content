export default {
  label: 'இணையான ஆங்கிலம்',
  id: 'ta-en-6',
  list: [
    {
      id: 'notes',
      type: 'passage',
      label: `குறிப்புகள்  `,
      data: {
        title: `பழங்கள்  `,
        text: [
          `sweet-potato,  சர்க்கரைவள்ளி கிழங்கு
jamun, நாவல் பழம்
pear, பேரிக்காய்
wood-apple, விளாம்பழம்
jujube, இலந்தைப்பழம்
sapotta, சப்போட்டா
tapioca, மரவள்ளிக்கிழங்கு
fig, அத்திப்பழம்
pears, பேரிக்காய்
muskmelon, முலாம்பழம்`,

          `# காய்கள்  `,
          `capsicum, குடைமிளகாய்
cucumber, வெள்ளரிக்காய்
corn, மக்காச்சோளம்
broad-beans, அவரைக்காய்
ridgegourd, பீர்க்கங்காய்
ivygourd, கோவைக்காய்
kohlrabi, நூல்கோல்
snake-gourd, புடலங்காய்
spring-onion, வெங்காயத்தாள்
banana-stem, வாழைத்தண்டு`,

          `cluster-beans, கொத்தவரங்காய்
beans, பீன்ஸ்
fenugreek, வெந்தயக்கீரை
drumstick-leaves, முருங்கைக்கீரை
greenpeas, பச்சை பட்டாணி
peanut, வேர்க்கடலை
tulsi, துளசி`,

          `# உணவு `,

          `pajji, பஜ்ஜி
fruits, பழங்கள்
vegetables, காய்கறிகள்
juice, பழச்சாறு
sweets,இனிப்பு
bread, ரொட்டி
soup, சூப்
laddu, லட்டு
murukku, முறுக்கு
adirasam, அதிரசம்`,

          `malli, மள்ளி
seeragam, சீரகம்
sombu, சோம்பு
pattani, பட்டாணி
mochai, மொச்சை
urad-dhal, உளுந்து
moong-dhal, பாசிப்பருப்பு
toor-dhal, துவரம்பருப்பு
kadalai-paruppu, கடலைப்பருப்பு
chickpea, கொண்டைக்கடலை`
        ]
      }
    },
    {
      id: 'match-fruits',
      type: 'match',
      label: 'பழங்கள் - பொருத்துக',
      commonData: {
        title: 'பழங்கள் - பொருத்துக',
        fontSize: '1rem'
      },
      data: [
        ` jamun, நாவல் பழம்
pear, பேரிக்காய்
wood-apple, விளாம்பழம்
jujube, இலந்தைப்பழம்
sapotta, சப்போட்டா`,

        `fig, அத்திப்பழம்
pears, பேரிக்காய்
muskmelon, முலாம்பழம்
tapioca, மரவள்ளிக்கிழங்கு
sweet-potato,  சர்க்கரைவள்ளி கிழங்கு`
      ]
    },
    {
      id: 'match-vegetables',
      type: 'match',
      label: 'காய்கள் - பொருத்துக',
      commonData: {
        title: 'காய்கள் - பொருத்துக',
        fontSize: '1rem'
      },
      data: [
        `capsicum, குடைமிளகாய்
cucumber, வெள்ளரிக்காய்
corn, மக்காச்சோளம்
broad-beans, அவரைக்காய்
ridgegourd, பீர்க்கங்காய்
ivygourd, கோவைக்காய்`,

        ` kohlrabi, நூல்கோல்
snake-gourd, புடலங்காய்
spring-onion, வெங்காயத்தாள்
banana-stem, வாழைத்தண்டு
cluster-beans, கொத்தவரங்காய்
beans, பீன்ஸ்`,

        ` fenugreek, வெந்தயக்கீரை
drumstick-leaves, முருங்கைக்கீரை
greenpeas, பச்சை பட்டாணி
peanut, வேர்க்கடலை
tulsi, துளசி`
      ]
    },
    {
      id: 'match-food',
      type: 'match',
      label: 'உணவு - பொருத்துக',
      commonData: {
        title: 'உணவு - பொருத்துக',
        fontSize: '1rem'
      },
      data: [
        `pajji, பஜ்ஜி
fruits, பழங்கள்
vegetables, காய்கறிகள்
juice, பழச்சாறு
sweets,இனிப்பு`,

        `bread, ரொட்டி
soup, சூப்
laddu, லட்டு
murukku, முறுக்கு
adirasam, அதிரசம்`,

        `malli, மள்ளி
seeragam, சீரகம்
sombu, சோம்பு
pattani, பட்டாணி
mochai, மொச்சை`,

        `urad-dhal, உளுந்து
moong-dhal, பாசிப்பருப்பு
toor-dhal, துவரம்பருப்பு
kadalai-paruppu, கடலைப்பருப்பு
chickpea, கொண்டைக்கடலை`
      ]
    }
  ]
};
