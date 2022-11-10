export default {
  label: 'எழுதுக: விலங்குகளும் பறவைகளும்',
  id: 'ta-pic-words',
  img: 'sound',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'வார்த்தைகள்',
      data: {
        title: 'வார்த்தைகள்',
        text: [
          `# விலங்குகள்`,
          {
            type: 'sitewords',
            text:
              'பூனை,  நாய்,  ஆடு,  குதிரை,  பசு,  பன்றி,  எருமை,  கழுதை,  காளை,  ஒட்டகம், யானை,  குரங்கு,  சிங்கம்,  புலி,  கங்காரு,  சிறுத்தை,  நரி,  முயல்,  மான்,  கரடி, மீன்,  தவளை,  பாம்பு,  அணில்,  ஆமை,  எலி,  ஈ,  எறும்பு,  பல்லி,  நண்டு, கொசு,  தட்டான்,  மண்புழு,  வண்டு,  இறால்,  தேனீ,  சிலந்தி,  ஈசல்,  வௌவால்,  ஓணான்',
            width: 115
          },
          `# பறவைகள்`,
          {
            type: 'sitewords',
            text:
              'காகம்,  புறா,  வாத்து,  கோழி,  கிளி,  மயில்,  கொக்கு,  சேவல்,  குயில்,  கழுகு,  மைனா,  ஆந்தை',
            width: 115
          }
        ]
      }
    },
    {
      type: 'rightOne',
      label: 'ஓசை - வார்த்தை',
      id: 'sound',
      lockAfter: 2,
      commonData: {
        title: 'ஓசை கேட்டு வார்த்தைகளை அடையாளம் காண்க.',
        type: 'words',
        audio: 'ta/ta-animals-birds.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'பூனை,  நாய்,  ஆடு,  குதிரை,  பசு,  பன்றி,  எருமை,  கழுதை,  காளை,  ஒட்டகம்'
        },
        {
          audioOffset: 20,
          words:
            ' யானை,  குரங்கு,  சிங்கம்,  புலி,  கங்காரு,  சிறுத்தை,  நரி,  முயல்,  மான்,  கரடி'
        },
        {
          audioOffset: 40,
          words:
            'மீன்,  தவளை,  பாம்பு,  அணில்,  ஆமை,  எலி,  ஈ,  எறும்பு,  பல்லி,  நண்டு'
        },
        {
          audioOffset: 60,
          words:
            'கொசு,  தட்டான்,  மண்புழு,  வண்டு,  இறால்,  தேனீ,  சிலந்தி,  ஈசல்,  வௌவால்,  ஓணான்'
        },
        {
          audioOffset: 80,
          words: 'காகம்,  புறா,  வாத்து,  கோழி,  கிளி,  மயில்'
        },
        {
          audioOffset: 92,
          words: 'கொக்கு,  சேவல்,  குயில்,  கழுகு,  மைனா,  ஆந்தை'
        }
      ]
    },
    {
      type: 'completeWord',
      label: 'நிரப்புக',
      id: 'complete-words',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க'
      },
      data: [
        `cat| பூனை | __ 
  dog| நாய் | __
  goat| ஆடு | __
  horse| குதிரை | ___
  cow|  பசு| __
  pig| பன்றி | ___
  buffalo| எருமை| ___
  donkey| கழுதை | ___
  bull| காளை | __ 
  camel| ஒட்டகம் | _____`,

        `elephant| யானை | __
  lion| சிங்கம் | ____
  monkey| குரங்கு | ____
  tiger| புலி| __
  kangaroo| கங்காரு| ____
  leopard| சிறுத்தை| ____
  fox| நரி | __
  rabbit| முயல்| ___
antelope| மான்| __
bear| கரடி | ___ `,

        `fish| மீன் | __
  frog| தவளை | ___
  snake| பாம்பு | ___
  squirrel| அணில் | ___
  tortoise| ஆமை | __
  rat| எலி| __
  fly| ஈ| _ 
  ant| எறும்பு | ____
  lizard| பல்லி| ___
  crab| நண்டு | ___`,

        `mosquito| கொசு | __
  dragonfly| தட்டான்| ____
  earthworm| மண்புழு| ____
  bug| வண்டு| ___
  prawn| இறால்| ___
  bee| தேனீ| __
  spider| சிலந்தி| ____
  winged-termites| ஈசல் | ___
  bat| வௌவால் |___ 
  garden-lizard| ஓணான்| ___`,

        `crow| காகம் | ___
  dove| புறா | __
  duck| வாத்து | ___
  hen| கோழி | __
  parrot| கிளி | __
  peacock| மயில் | ___`,

        `crane| கொக்கு| ___
  rooster| சேவல்| ___
  koel| குயில்| ___
  eagle| கழுகு| ___
  myna| மைனா| __
  owl| ஆந்தை| ___`
      ]
    },
    {
      type: 'connectLetters',
      label: 'எழுத்துக்களை இணைக்கவும்',
      id: 'connect-fruits',
      commonData: {
        title: 'எழுத்துக்களை இணைத்து சொல் உருவாக்குக ',
        printTitle: 'Form the word using the letters.',
        type: 'image',
        lang: 'ta',
        fontSize: '1rem'
      },
      data: [
        `cat, பூனை
  dog, நாய்
  goat, ஆடு
  horse, குதிரை
  cow,  பசு
  pig, பன்றி
  buffalo, எருமை
  donkey, கழுதை
  bull, காளை
  camel, ஒட்டகம்`,

        `elephant, யானை
  lion, சிங்கம் 
  monkey, குரங்கு 
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

        `crow, காகம்
  dove, புறா
  duck, வாத்து
  hen, கோழி
  parrot, கிளி
  peacock, மயில்`,

        `crane, கொக்கு
  rooster, சேவல்
  koel, குயில்
  eagle, கழுகு
  myna, மைனா
  owl, ஆந்தை`
      ]
    },
    {
      type: 'dictation',
      label: 'ஓசை கேட்டு எழுதுக',
      id: 'dictation',
      commonData: {
        title: 'ஓசை கேட்டு எழுதுக',
        audio: 'ta/ta-animals-birds.mp3',
        lang: 'ta'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'பூனை,  நாய்,  ஆடு,  குதிரை,  பசு,  பன்றி,  எருமை,  கழுதை,  காளை,  ஒட்டகம்'
        },
        {
          audioOffset: 20,
          words:
            ' யானை,  குரங்கு,  சிங்கம்,  புலி,  கங்காரு,  சிறுத்தை,  நரி,  முயல்,  மான்,  கரடி'
        },
        {
          audioOffset: 40,
          words:
            'மீன்,  தவளை,  பாம்பு,  அணில்,  ஆமை,  எலி,  ஈ,  எறும்பு,  பல்லி,  நண்டு'
        },
        {
          audioOffset: 60,
          words:
            'கொசு,  தட்டான்,  மண்புழு,  வண்டு,  இறால்,  தேனீ,  சிலந்தி,  ஈசல்,  வௌவால்,  ஓணான்'
        },
        {
          audioOffset: 80,
          words: 'காகம்,  புறா,  வாத்து,  கோழி,  கிளி,  மயில்'
        },
        {
          audioOffset: 92,
          words: 'கொக்கு,  சேவல்,  குயில்,  கழுகு,  மைனா,  ஆந்தை'
        }
      ]
    }
  ]
};
