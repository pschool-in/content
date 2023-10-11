export default {
  label: 'ശാസ്ത്രം',
  id: 'ml-science',
  img: 'science',
  lockAfter: 3,
  list: [
    {
      id: 'parts-of-face',
      label: 'മുഖത്തിന്റ്റെ ഭാഗങ്ങൾ',
      type: 'dragAndDrop',
      data: {
        img: 'parts_face.jpg',
        title: 'മുഖത്തിന്റ്റെ ഭാഗങ്ങൾ തിരിച്ചറിയുക',
        width: 250,
        height: 296,
        wordWidth: 50,
        words: [
          {
            word: 'വായ',
            x: 13,
            y: 242
          },
          {
            word: 'ചെവി',
            x: 190,
            y: 18
          },
          {
            word: 'മുടി',
            x: 29,
            y: 18
          },
          {
            word: 'മൂക്ക്',
            x: 190,
            y: 231
          },
          {
            word: 'കണ്ണ്',
            x: 16,
            y: 188
          }
        ]
      }
    },
    {
      label: 'വന്യമൃഗങ്ങൾ - വളർത്തുമൃഗങ്ങൾ',
      type: 'group',
      id: 'ml-domestic-wild',
      data: {
        title: 'മൃഗങ്ങളെ വന്യമോ ഗാർഹികമോ ആയി തരംതിരിക്കുക',
        imageType: 'animals',
        types: [
          {
            name: 'വളർത്തുമൃഗങ്ങൾ',
            text: 'cat, dog, goat, horse, pig, sheep'
          },
          {
            name: 'വന്യമൃഗങ്ങൾ',
            text: 'elephant, lion, monkey, rhino, tiger, zebra'
          }
        ]
      }
    },
    {
      type: 'group',
      label: 'വന്യമൃഗങ്ങൾ vs വളർത്തുമൃഗങ്ങൾ',
      id: 'classify-animal-type',
      commonData: {
        title: 'മൃഗങ്ങളെ വന്യമോ ഗാർഹികമോ ആയി തരംതിരിക്കുക',
        fontSize: '1.5rem',
        printTitle:
          'Rewrite the words given at the bottom at approprate boxes.',
        types: ['വന്യമൃഗങ്ങൾ', 'വളർത്തുമൃഗങ്ങൾ']
      },
      data: [
        [`കടുവ,സിംഹം, കുറുക്കൻ, കംഗാരു`, `പശു, പോത്ത്, ആട്, കുതിര`],
        [`ആന, ജിറാഫ്, പാമ്പ്, മാൻ, ചെന്നായ`, `കഴുത, ഒട്ടകം, കാള, നായ`],
        [`കരടി, സീബ്ര, ചീറ്റ`, `പൂച്ച, കാള, പന്നി, താറാവ്, കോഴി`]
      ]
    },
    {
      type: 'dragAndDrop',
      id: 'ml-parts-plant',
      label: 'ചെടിയുടെ ഭാഗം',
      data: {
        img: 'parts_plant.jpg',
        title: 'ചെടിയുടെ ഭാഗങ്ങൾ തിരിച്ചറിയുക',
        width: 249,
        height: 235,
        wordWidth: 50,
        words: [
          { word: 'വേരുകൾ', x: 4, y: 139 },
          { word: 'തണ്ട്', x: 190, y: 10 },
          { word: 'ഇലകൾ', x: 197, y: 78 },
          { word: 'പൂവ്', x: 18, y: 16 },
          { word: 'മൊട്ട്', x: 4, y: 88 }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'ml-parts-dog',
      label: 'നായയുടെ ഭാഗങ്ങൾ',
      data: {
        img: 'parts_dog.jpg',
        title: 'നായയുടെ ഭാഗങ്ങൾ തിരിച്ചറിയുക',
        width: 250,
        height: 271,
        wordWidth: 50,
        words: [
          { word: 'വാൽ', x: 190, y: 70 },
          { word: 'ചെവി', x: 5, y: 6 },
          { word: 'കണ്ണ്', x: 60, y: 8 },
          { word: 'മൂക്ക്', x: 10, y: 140 },
          { word: 'കാൽ', x: 140, y: 238 },
          { word: 'മുതുക്', x: 146, y: 106 },
          { word: 'പാദം', x: 50, y: 236 }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'ml-parts-body',
      label: 'ശരീരഭാഗങ്ങൾ',
      data: {
        img: 'parts_boy.jpg',
        title: 'ശരീരഭാഗങ്ങൾ തിരിച്ചറിയുക',
        width: 250,
        height: 354,
        wordWidth: 70,
        words: [
          { word: 'കൈ', x: 12, y: 173 },
          { word: 'കാൽ', x: 24, y: 220 },
          { word: 'തല', x: 177, y: 70 },
          { word: 'തോൾ', x: 39, y: 78 },
          { word: 'മുട്ട്', x: 25, y: 261 },
          { word: 'നെഞ്ച്', x: 193, y: 111 }
        ]
      }
    }
  ]
};
