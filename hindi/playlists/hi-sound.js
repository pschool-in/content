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
            text: `hippo, दरियाई घोड़ा
rhino, गैंडा
fox, लोमड़ी
crocodile, मगरमच्छ
zebra, धारीदार घोडा
bear, भालू
camel, ऊंट
shark, हाँगर
whale, तिमिंगल`
          },
          {
            audioOffset: 0,
            text: ` fish, मछली
frog, मेंडक
crab, केकड़ा
snake, सर्प
squirrel, गिलहरी
tortoise, कछुआ
rat, चूहा
winged-termites, पंखों वाला दीमक
ant, चींटी`
          },
          {
            audioOffset: 0,
            text: `fly,मक्खी
bat, चमगादड़
buffalo, भेंस
butterfly, तितली
cheetah, 
cow, गाय
donkey, गधा
kangaroo, कंगारू
leopard, तेंदुआ`
          },
          {
            audioOffset: 0,
            text: `mongoose, नेवला
mosquito, मच्छर
wolf, भेड़िया
cockroach, तिलचट्टा
garden-lizard, बिछकपडा 
lizard, छिपकली
rabbit, खरगोश`
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
