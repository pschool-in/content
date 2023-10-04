export default {
  label: 'உயிர்மெய் எழுத்துக்கள்',
  id: 'ta-letter-mixed',
  img: 'writing',
  lockAfter: 4,
  list: [
    {
      type: 'slides',
      id: 'slide-vowel',
      label: 'slide: உயிர்மெய் எழுத்துக்கள்',
      commonData: {
        audio: 'ta/ta-all-letters.mp3',
        audioWidth: 1,
        type: 'text',
        fontSize: '5rem',
        title: 'உயிர்மெய் எழுத்துக்கள்:'
      },
      data: [
        {
          microLabel: 'க',
          audioOffset: 30,
          text: `க, கா, கி, கீ, கு, கூ, கெ, கே, கை, கொ, கோ, கௌ`
        },
        {
          microLabel: 'ச',
          audioOffset: 42,
          text: `ச, சா, சி, சீ, சு, சூ, செ, சே, சை, சொ, சோ, சௌ`
        },
        {
          microLabel: 'ட',
          audioOffset: 54,
          text: `ட, டா, டி, டீ, டு, டூ, டெ, டே, டை, டொ, டோ, டௌ`
        },
        {
          microLabel: 'ண',
          audioOffset: 66,
          text: `ண, ணா, ணி, ணீ, ணு, ணூ, ணெ, ணே, ணை, ணொ, ணோ, ணௌ`
        },
        {
          microLabel: 'த',
          audioOffset: 78,
          text: `த, தா, தி, தீ, து, தூ, தெ, தே, தை, தொ, தோ, தௌ`
        },
        {
          microLabel: 'ந',
          audioOffset: 90,
          text: `ந, நா, நி, நீ, நு, நூ, நெ, நே, நை, நொ, நோ, நௌ`
        },
        {
          microLabel: 'ப',
          audioOffset: 102,
          text: `ப, பா, பி, பீ, பு, பூ, பெ, பே, பை, பொ, போ, பௌ`
        },
        {
          microLabel: 'ம',
          audioOffset: 114,
          text: `ம, மா, மி, மீ, மு, மூ, மெ, மே, மை, மொ, மோ, மௌ`
        },
        {
          microLabel: 'ய',
          audioOffset: 126,
          text: `ய, யா, யி, யீ, யு, யூ, யெ, யே, யை, யொ, யோ, யௌ`
        },
        {
          microLabel: 'ர',
          audioOffset: 138,
          text: `ர, ரா, ரி, ரீ, ரு, ரூ, ரெ, ரே, ரை, ரொ, ரோ, ரௌ`
        },
        {
          microLabel: 'ல',
          audioOffset: 150,
          text: `ல, லா, லி, லீ, லு, லூ, லெ, லே, லை, லொ, லோ, லௌ`
        },
        {
          microLabel: 'வ',
          audioOffset: 162,
          text: `வ, வா, வி, வீ, வு, வூ, வெ, வே, வை, வொ, வோ, வௌ`
        },
        {
          microLabel: 'ழ',
          audioOffset: 174,
          text: `ழ, ழா, ழி, ழீ, ழு, ழூ, ழெ, ழே, ழை, ழொ, ழோ, ழௌ`
        },
        {
          microLabel: 'ள',
          audioOffset: 186,
          text: `ள, ளா, ளி, ளீ, ளு, ளூ, ளெ, ளே, ளை, ளொ, ளோ, ளௌ`
        },
        {
          microLabel: 'ற',
          audioOffset: 198,
          text: `ற, றா, றி, றீ, று, றூ, றெ, றே, றை, றொ, றோ, றௌ`
        },
        {
          microLabel: 'ன',
          audioOffset: 210,
          text: `ன, னா, னி, னீ, னு, னூ, னெ, னே, னை, னொ, னோ, னௌ`
        }
      ]
    },
    {
      label: 'எழுத்து வரிசை',
      type: 'phonics',
      id: 'ka-row',
      commonData: {
        audio: 'ta/ta-all-letters.mp3',
        audioWidth: 1,
        lang: 'ta',
        title: 'எழுத்துக்களை தொட்டு ஓசையை கேளுங்கள்.'
      },
      data: [
        {
          microLabel: 'க',
          audioOffset: 30,
          text: `க, கா, கி, கீ, கு, கூ, கெ, கே, கை, கொ, கோ, கௌ`
        },
        {
          microLabel: 'ச',
          audioOffset: 42,
          text: `ச, சா, சி, சீ, சு, சூ, செ, சே, சை, சொ, சோ, சௌ`
        },
        {
          microLabel: 'ட',
          audioOffset: 54,
          text: `ட, டா, டி, டீ, டு, டூ, டெ, டே, டை, டொ, டோ, டௌ`
        },
        {
          microLabel: 'ண',
          audioOffset: 66,
          text: `ண, ணா, ணி, ணீ, ணு, ணூ, ணெ, ணே, ணை, ணொ, ணோ, ணௌ`
        },
        {
          microLabel: 'த',
          audioOffset: 78,
          text: `த, தா, தி, தீ, து, தூ, தெ, தே, தை, தொ, தோ, தௌ`
        },
        {
          microLabel: 'ந',
          audioOffset: 90,
          text: `ந, நா, நி, நீ, நு, நூ, நெ, நே, நை, நொ, நோ, நௌ`
        },
        {
          microLabel: 'ப',
          audioOffset: 102,
          text: `ப, பா, பி, பீ, பு, பூ, பெ, பே, பை, பொ, போ, பௌ`
        },
        {
          microLabel: 'ம',
          audioOffset: 114,
          text: `ம, மா, மி, மீ, மு, மூ, மெ, மே, மை, மொ, மோ, மௌ`
        },
        {
          microLabel: 'ய',
          audioOffset: 126,
          text: `ய, யா, யி, யீ, யு, யூ, யெ, யே, யை, யொ, யோ, யௌ`
        },
        {
          microLabel: 'ர',
          audioOffset: 138,
          text: `ர, ரா, ரி, ரீ, ரு, ரூ, ரெ, ரே, ரை, ரொ, ரோ, ரௌ`
        },
        {
          microLabel: 'ல',
          audioOffset: 150,
          text: `ல, லா, லி, லீ, லு, லூ, லெ, லே, லை, லொ, லோ, லௌ`
        },
        {
          microLabel: 'வ',
          audioOffset: 162,
          text: `வ, வா, வி, வீ, வு, வூ, வெ, வே, வை, வொ, வோ, வௌ`
        },
        {
          microLabel: 'ழ',
          audioOffset: 174,
          text: `ழ, ழா, ழி, ழீ, ழு, ழூ, ழெ, ழே, ழை, ழொ, ழோ, ழௌ`
        },
        {
          microLabel: 'ள',
          audioOffset: 186,
          text: `ள, ளா, ளி, ளீ, ளு, ளூ, ளெ, ளே, ளை, ளொ, ளோ, ளௌ`
        },
        {
          microLabel: 'ற',
          audioOffset: 198,
          text: `ற, றா, றி, றீ, று, றூ, றெ, றே, றை, றொ, றோ, றௌ`
        },
        {
          microLabel: 'ன',
          audioOffset: 210,
          text: `ன, னா, னி, னீ, னு, னூ, னெ, னே, னை, னொ, னோ, னௌ`
        }
      ]
    },
    {
      label: 'அனைத்து எழுத்துக்கள் ',
      type: 'phonics',
      id: 'all-row',
      onlyBigScreen: true,
      data: {
        audio: 'ta/ta-all-letters.mp3',
        audioWidth: 1,
        audioOffset: 30,
        padding: '0px',
        fontSize: '1rem',
        width: '55px',
        lang: 'ta',
        title: 'எழுத்துக்களை தொட்டு ஓசையை கேளுங்கள்.',
        text: `க, கா, கி, கீ, கு, கூ, கெ, கே, கை, கொ, கோ, கௌ
  ச, சா, சி, சீ, சு, சூ, செ, சே, சை, சொ, சோ, சௌ
  ட, டா, டி, டீ, டு, டூ, டெ, டே, டை, டொ, டோ, டௌ
  ண, ணா, ணி, ணீ, ணு, ணூ, ணெ, ணே, ணை, ணொ, ணோ, ணௌ
  த, தா, தி, தீ, து, தூ, தெ, தே, தை, தொ, தோ, தௌ
  ந, நா, நி, நீ, நு, நூ, நெ, நே, நை, நொ, நோ, நௌ
  ப, பா, பி, பீ, பு, பூ, பெ, பே, பை, பொ, போ, பௌ
  ம, மா, மி, மீ, மு, மூ, மெ, மே, மை, மொ, மோ, மௌ
  ய, யா, யி, யீ, யு, யூ, யெ, யே, யை, யொ, யோ, யௌ
  ர, ரா, ரி, ரீ, ரு, ரூ, ரெ, ரே, ரை, ரொ, ரோ, ரௌ
  ல, லா, லி, லீ, லு, லூ, லெ, லே, லை, லொ, லோ, லௌ
  வ, வா, வி, வீ, வு, வூ, வெ, வே, வை, வொ, வோ, வௌ
  ழ, ழா, ழி, ழீ, ழு, ழூ, ழெ, ழே, ழை, ழொ, ழோ, ழௌ
  ள, ளா, ளி, ளீ, ளு, ளூ, ளெ, ளே, ளை, ளொ, ளோ, ளௌ
  ற, றா, றி, றீ, று, றூ, றெ, றே, றை, றொ, றோ, றௌ
  ன, னா, னி, னீ, னு, னூ, னெ, னே, னை, னொ, னோ, னௌ `
      }
    }
  ]
};
