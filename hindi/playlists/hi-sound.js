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
