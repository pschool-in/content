export default {
  label: 'நம் வீடு',
  id: 'ta-en-4',
  list: [
    {
      id: 'notes',
      type: 'passage',
      label: `குறிப்புகள்  `,
      data: {
        title: `நம் வீடு`,
        text: [
          `house, வீடு
table, மேசை
bed, கட்டில்
chair, நாற்காலி
umbrella, குடை
door, கதவு
window, ஜன்னல்
toilet, கழிப்பறை`,

          `baby, குழந்தை
boy, சிறுவன்
girl, சிறுமி
man, ஆண்
woman, பெண்
grand father, தாத்தா
grand mother, பாட்டி
bucket, வாளி
ball, பந்து`,

          `candle, மெழுகுவர்த்தி
          spectacles, மூக்கு கண்ணாடி
clock, கடிகாரம்
watch, கைக்கடிகாரம்
flower pot, பூந்தொட்டி
broom, துடைப்பம்
shelf, அலமாரி
air conditioner, குளிரூட்டி
pillow,தலையணை
basket, கூடை
dustbin, குப்பை தொட்டி
handbag, கைப்பை`,
          `# ஆடைகள்   `,
          `shirt, சட்டை
hat, தொப்பி
trousers, கால்சட்டை
shoe, காலணி
sock,காலுறை
coat, மேலங்கி`,

          `# பள்ளிக்கூடம் `,
          `pen, பேனா
pencil, எழுதுகோல்
ruler, அளவுகோல்
eraser, அழிப்பான்
book, புத்தகம்
ink, மை
schoolbag, புத்தகப்பை
scissors, கத்தரிக்கோல்
water bottle, தண்ணீர் குடுவை
calculator, கணிப்பான்
globe, பூகோளம்`,

          '# சமையலறை',
          `clay stove, அடுப்பு
pot, பானை
ladle, கரண்டி
knife,கத்தி
plate, தட்டு
lid, மூடி
cup, கோப்பை
bowl, கிண்ணம்`,

          `stone grinder, ஆட்டுக்கல்
tap, குழாய்
stove, எரிவாயு அடுப்பு
fork, முள் கரண்டி
pan, வாணலி
fridge, குளிர்சாதன பெட்டி`
        ]
      }
    },
    {
      id: 'match-house',
      type: 'match',
      label: 'பொருத்துக',
      commonData: {
        title: 'பொருத்துக',
        fontSize: '1rem'
      },
      data: [
        `house, வீடு
table, மேசை
bed, கட்டில்
chair, நாற்காலி
umbrella, குடை`,

        `door, கதவு
window, ஜன்னல்
toilet, கழிப்பறை
bucket, வாளி
ball, பந்து`,

        `baby, குழந்தை
boy, சிறுவன்
girl, சிறுமி
man, ஆண்
woman, பெண்`,

        `grand father, தாத்தா
grand mother, பாட்டி
candle, மெழுகுவர்த்தி
spectacles, மூக்கு கண்ணாடி
clock, கடிகாரம்`,

        `watch, கைக்கடிகாரம்
flower pot, பூந்தொட்டி
broom, துடைப்பம்
shelf, அலமாரி
air conditioner, குளிரூட்டி`,

        `pillow,தலையணை
basket, கூடை
dustbin, குப்பை தொட்டி
handbag, கைப்பை`
      ]
    },
    {
      id: 'match-clothes',
      type: 'match',
      label: 'ஆடைகள் - பொருத்துக',
      data: {
        title: 'ஆடைகள் - பொருத்துக',
        fontSize: '1rem',
        text: `shirt, சட்டை
        hat, தொப்பி
        trousers, கால்சட்டை
        shoe, காலணி
        sock,காலுறை
        coat, மேலங்கி`
      }
    },
    {
      id: 'match-school',
      type: 'match',
      label: 'பள்ளிக்கூடம் - பொருத்துக',
      commonData: {
        title: 'பள்ளிக்கூடம் - பொருத்துக',
        fontSize: '1rem'
      },
      data: [
        `pen, பேனா
pencil, எழுதுகோல்
ruler, அளவுகோல்
eraser, அழிப்பான்
book, புத்தகம்
ink, மை`,

        `schoolbag, புத்தகப்பை
scissors, கத்தரிக்கோல்
water bottle, தண்ணீர் குடுவை
calculator, கணிப்பான்
globe, பூகோளம்`
      ]
    },
    {
      id: 'match-kitchen',
      type: 'match',
      label: 'சமையலறை - பொருத்துக',
      commonData: {
        title: 'சமையலறை - பொருத்துக',
        fontSize: '1rem'
      },
      data: [
        `clay stove, அடுப்பு
pot, பானை
ladle, கரண்டி
knife,கத்தி
plate, தட்டு`,

        `lid, மூடி
        cup, கோப்பை
bowl, கிண்ணம்
stone grinder, ஆட்டுக்கல்
tap, குழாய்`,

        `stove, எரிவாயு அடுப்பு
fork, முள் கரண்டி
pan, வாணலி
fridge, குளிர்சாதன பெட்டி`
      ]
    }
  ]
};
