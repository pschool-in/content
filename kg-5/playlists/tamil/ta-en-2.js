export default {
  label: 'உணவு வகைகள்',
  id: 'ta-en-2',
  list: [
    {
      id: 'notes',
      type: 'passage',
      label: `இணையான ஆங்கிலம்`,
      data: {
        title: `பழங்கள்  `,
        text: [
          `jackfruit, பலாப்பழம்
          mango, மாம்பழம்
          banana, வாழைப்பழம்
          guava, கொய்யாப்பழம்
          grapes, திராட்சை
          orange, ஆரஞ்சு
          papaya, பப்பாளி
          pineapple, அன்னாசிப்பழம்`,

          `apple, ஆப்பிள்
          pomegranate, மாதுளை
          watermelon, தர்பூசணி
          sugarcane, கரும்பு
          gooseberry, நெல்லிக்காய்
          lemon, எலுமிச்சம்
          custard-apple, சீதாப்பழம்
          dates, பேரிச்சம்பழம்`,

          `# காய்கள்  `,
          `onion, வெங்காயம்
          tomato, தக்காளி
          brinjal, கத்திரி
          raw-banana, வாழைக்காய்
          garlic, பூண்டு
          ginger, இஞ்சி
          radish, முள்ளங்கி
          bitter-gourd, பாகற்காய்
          banana-flower, வாழைப்பூ
          bottlegourd, சுரைக்காய்`,

          `carrot, காரட்
          beetroot, பீட்ரூட்
          cabbage, முட்டைகோசு
          potato, உருளைக்கிழங்கு
          coconut, தேங்காய்
          ladies-finger, வெண்டைக்காய்
          drumstick, முருங்கைக்காய்
          tamarind, புளி
          mushroom, காளான்
          elephant-yam, சேனைக்கிழங்கு`,

          `chilli, பச்சைமிளகாய்
          curryleaf, கருவேப்பிலை
          corianderleaf, கொத்தமல்லி
          mintleaf, புதினா
          spinach, கீரை
          turmeric, மஞ்சள்
          pumpkin, பரங்கிக்காய்
          ashgourd, பூசணிக்காய்`,

          `# உணவு `,
          `food, உணவு
          milk, பால்
          idly, இட்லி
          dosai, தோசை
          pongal, பொங்கல்
          vadai, வடை
          puttu-rice, புட்டு
          idiyappam, இடியாப்பம்
          porotta, புரோட்டா
          egg, முட்டை`,

          `almond, பாதாம்
          cashewnut, முந்திரி
          rice,அரிசி
          salt, உப்பு
          flour, மாவு
          paddy, நெல்
          wheat, கோதுமை
          pepper, மிளகு`
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
        `jackfruit, பலாப்பழம்
        mango, மாம்பழம்
        banana, வாழைப்பழம்
        guava, கொய்யாப்பழம்
        grapes, திராட்சை
        orange, ஆரஞ்சு`,

        `papaya, பப்பாளி
        pineapple, அன்னாசிப்பழம்
        apple, ஆப்பிள்
pomegranate, மாதுளை
watermelon, தர்பூசணி`,

        `sugarcane, கரும்பு
        gooseberry, நெல்லிக்காய்
        lemon, எலுமிச்சம்
        custard-apple, சீதாப்பழம்
        dates, பேரிச்சம்பழம்`
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
        `onion, வெங்காயம்
        tomato, தக்காளி
        brinjal, கத்திரி
        raw-banana, வாழைக்காய்
        garlic, பூண்டு`,

        `ginger, இஞ்சி
        radish, முள்ளங்கி
        bitter-gourd, பாகற்காய்
        banana-flower, வாழைப்பூ
        bottlegourd, சுரைக்காய்`,

        `carrot, காரட்
        beetroot, பீட்ரூட்
        cabbage, முட்டைகோசு
        potato, உருளைக்கிழங்கு
        coconut, தேங்காய்`,

        `ladies-finger, வெண்டைக்காய்
        drumstick, முருங்கைக்காய்
        tamarind, புளி
        mushroom, காளான்
        elephant-yam, சேனைக்கிழங்கு`,

        `chilli, பச்சைமிளகாய்
        curryleaf, கருவேப்பிலை
        corianderleaf, கொத்தமல்லி
        mintleaf, புதினா`,

        `spinach, கீரை
        turmeric, மஞ்சள்
        pumpkin, பரங்கிக்காய்
        ashgourd, பூசணிக்காய்`
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
        `food, உணவு
        milk, பால்
        idly, இட்லி
        dosai, தோசை
        pongal, பொங்கல்`,

        `vadai, வடை
        puttu-rice, புட்டு
        idiyappam, இடியாப்பம்
        porotta, புரோட்டா
        egg, முட்டை`,

        `almond, பாதாம்
        cashewnut, முந்திரி
        rice,அரிசி
        salt, உப்பு`,

        `flour, மாவு
        paddy, நெல்
          wheat, கோதுமை
          pepper, மிளகு`
      ]
    }
  ]
};
