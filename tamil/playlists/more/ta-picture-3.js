export default {
  label: 'மீண்டும் படம் 2',
  id: 'ta-picture-3',
  img: 'image',
  list: [
    {
      type: 'dragDropImgLabel',
      label: 'விலங்குகள்',
      id: 'dragDrop-animal',
      commonData: {
        title: 'Drag and Drop the name on the images.'
      },
      data: [
        `cat| பூனை 
dog| நாய் 
goat| ஆடு
sheep| செம்மறி ஆடு  
horse| குதிரை 
pig| பன்றி`
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation - Tamil',
      id: 'dictation-2',
      data: {
        title: 'Listen to the sound and type the word.',
        audio: 'ta/ta-animals.mp3',
        audioOffset: 2,
        lang: 'ta',
        words: 'பூனை, நாய், ஆடு, செம்மறி ஆடு, குதிரை'
      }
    }
  ]
};
