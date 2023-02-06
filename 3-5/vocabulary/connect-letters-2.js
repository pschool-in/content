export default {
  label: 'Connect Letters 2',
  id: 'connect-letters-2',
  lockAfter: 3,
  list: [
    {
      type: 'connectLetters',
      id: 'flowers',
      label: 'Flowers',
      data: {
        title:
          'Connect the letters from left to right to form the word that represents the image.',
        type: 'image',
        text: 'rose,lotus,sunflower,marigold,hibiscus,jasmine,tulip,zinnia'
      }
    },
    {
      type: 'connectLetters',
      id: 'parts-body',
      label: 'Body Parts',
      data: {
        title:
          'Connect the letters from left to right to form the word that represents the image.',
        type: 'image',
        text: 'ear,eye,foot,hair,hand,mouth,nose,tooth'
      }
    },
    {
      type: 'connectLetters',
      id: 'vehicles',
      label: 'Vehicles',
      commonData: {
        title:
          'Connect the letters from left to right to form the word that represents the image.',
        type: 'image'
      },
      data: [
        'aeroplane,boat,bus,car,cycle,helicoptor,motorbike,ship,tractor',
        'train,ambulance,auto,cart,excavator,fire-engine,lorry,van'
      ]
    },
    {
      type: 'connectLetters',
      id: 'kitchen',
      label: 'Kitchen',
      data: {
        title:
          'Connect the letters from left to right to form the word that represents the image.',
        type: 'image',
        text: 'stove,fork,knife,pan,spoon,pot,butter'
      }
    },
    {
      type: 'connectLetters',
      id: 'nature',
      label: 'Nature',
      data: {
        title:
          'Connect the letters from left to right to form the word that represents the image.',
        type: 'image',
        text: 'sun,moon,rain,star,milk,bird,fruits,leaf,world'
      }
    },
    {
      type: 'connectLetters',
      id: 'pictures',
      label: 'Other Pictures',
      commonData: {
        title:
          'Connect the letters from left to right to form the word that represents the image.',
        type: 'image'
      },
      data: [
        'man,woman,boy,girl,baby,house,table,bed,candle,chair',
        'shelf,ball,coat,glasses,clock,watch',
        'pen,pencil,ruler,eraser,scissors,book',
        'crayons,bell,whistle,brush,bone,conch',
        'ring,drums,food,king,kite,ladder,wheel'
      ]
    },
    {
      type: 'connectLetters',
      id: 'gadgets',
      label: 'Gadgets',
      data: {
        title:
          'Connect the letters from left to right to form the word that represents the image.',
        type: 'image',
        text:
          'camera,headphone,pendrive,remote,smartphone | phone ,speaker,tablet,torch'
      }
    }
  ]
};
