export default {
  label: 'വാചകം',
  id: 'ml-sentence',
  img: 'sentence',
  lockAfter: 100,
  list: [
    {
      id: 'form-sentence',
      label: 'ശരിയായ വാക്യങ്ങൾ ഉണ്ടാക്കുക',
      lockAfter: 2,
      type: 'sequence',
      commonData: {
        title: 'അർത്ഥവത്തായ വാക്യങ്ങൾ ഉണ്ടാക്കാൻ വാക്കുകൾ സംയോജിപ്പിക്കുക',
        lang: 'ml'
      },
      data: [
        `ശുഭ രാത്രി
എനിക്ക് സുഖമാണ്
നിന്റ്റെ പേരെന്താണ്
ഒത്തിരി നന്ദി
ഇത് എവിടെയാണ്`,

        `എനിക്ക് വിശക്കുന്നു
എനിക്ക് മനസ്സിലാകുന്നില്ല
എവിടെ പോകുന്നു
നമുക്ക് പോകാം
അകത്തേയ്ക്ക് വരൂ`,

        `മുന്നോട്ട് പോകുക
നേരെ പോകുക
അടുത്ത സ്റ്റോപ്പ്
വീണ്ടും വരിക
എന്നോട് ക്ഷമിക്കൂ`,

        `അത് ഭയങ്കരമാണ്
നന്ദി സർ
ഒരു പ്രശ്നവുമില്ല
വളരെ നല്ലത് 
നന്നായി ചെയ്തു`
      ]
    },
    {
      id: 'form-sentence-2',
      label: 'ശരിയായ വാക്യങ്ങൾ ഉണ്ടാക്കുക',
      lockAfter: 2,
      type: 'sequence',
      commonData: {
        title: 'അർത്ഥവത്തായ വാക്യങ്ങൾ ഉണ്ടാക്കാൻ വാക്കുകൾ സംയോജിപ്പിക്കുക',
        lang: 'ml'
      },
      data: [
        `നിങ്ങളെ കണ്ടതിൽ സന്തോഷം
നിങ്ങൾക്ക് എന്നെ സഹായിക്കാമോ
നിങ്ങൾ എവിടെ പോകുന്നു
എനിക്ക് ഇവിടെ ഇറങ്ങണം
ഇത്ര വേഗത്തിൽ സംസാരിക്കില്ലേ`,

        `എന്നെ ഒറ്റയ്ക്ക് വിടുക
വേഗം സുഖം ആകട്ടെ
ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു
അത് വളരെ മോശമാണ് 
അത് വളരെ അധികമാണ്`,

        `ആ മനുഷ്യൻ ആരാണ്
ആരാണ് ഇത് നിർമ്മിച്ചത്
അവൾക്ക് ദേഷ്യം വന്നു
അവള് ഒരു അധ്യാപികയാണ്
ഞാൻ വളരെ സന്തോഷത്തിലാണ്`,

        `എനിക്ക് ഓടാൻ കഴിയും
എനിക്ക് നീന്താന് കഴിയും
എനിക്ക് വരാൻ കഴിയില്ല
അവൻ നീന്താൻ ഇഷ്ടപ്പെടുന്നു
എനിക്ക് നിങ്ങളെ സഹായിക്കാനാകുമോ`,

        `ഈ റോഡ് എങ്ങോട്ടാണ് പോകുന്നത്
നിങ്ങൾ എപ്പോഴാണ് തിരികെ പോകുന്നത്
ഈ മാന്യൻ പണം നൽകും
എനിക്ക് നിങ്ങളെ കേൾക്കാൻ കഴിയില്ല
നിനക്ക് ഇത് ചെയ്യാൻ കഴിയുമോ`,

        `എനിക്ക് വേഗത്തിൽ ഓടാൻ കഴിയും
എനിക്ക് ജോലി ചെയ്യാൻ കഴിയും
എനിക്ക് വേഗത്തിൽ ഓടാൻ കഴിയും
എനിക്ക് ഇത് വിശ്വസിക്കാൻ കഴിയുന്നില്ല
ഈ പക്ഷിക്ക് പറക്കാൻ കഴിയില്ല`,

        `നീ ഒരു യാത്ര പോകുമോ
നീ എന്നെ സ്നേഹിക്കുന്നുണ്ടോ ഇല്ലയോ
എനിക്ക് ശരിക്കും നിന്നെ മിസ്സാകുന്നു
നിങ്ങൾക്ക് ഈ പുസ്തകം ആവശ്യമുണ്ടോ
നിങ്ങൾ ഒരു കത്ത് എഴുതുകയാണോ`,

        `ഇപ്പോൾ വന്നു എന്നെ കാണൂ
ഞാൻ ഈ ആഴ്ച തിരക്കിലാണ് 
ഞങ്ങൾക്ക് കുറച്ച് പണം വേണം
ഇന്ന് നീ എന്താണ് ചെയ്യുന്നത്
എനിക്ക് നിനക്കായി എന്തുചെയ്യാൻ കഴിയൂം`
      ]
    },
    {
      type: 'makeSentence',
      label: 'മലയാളത്തിൽ വിവർത്തനം ചെയ്യുക',
      id: 'make-sentence',
      commonData: {
        title: 'താഴെയുള്ള ഇംഗ്ലീഷ് വാക്യങ്ങൾ മലയാളത്തിലേക്ക് വിവർത്തനം ചെയ്യുക',
        extras: ' '
      },
      data: [
        `How is the weather today?| ഇന്നത്തെ കാലാവസ്ഥ എങ്ങനെയുണ്ട്
My sister's name is Priya.| എന്റ്റെ സഹോദരിയുടെ പേര് പ്രിയ എന്നാണ് 
What is your name?| എന്താണ് നിന്റ്റെ പേര്
My name is Meera. | എന്റ്റെ പേര് മീര എന്നാണ് 
Where are you from?| നീ എവിടെ നിന്ന് വരുന്നു
I am pleased to meet you. | നിങ്ങളെ കണ്ടതില് സന്തോഷം
What are you doing?| നീ എന്ത് ചെയ്യുന്നു
How much does this cost? | ഇതിനു എന്ത് വില വരും
I want to go to the market.|എനിക്ക് ചന്തയിൽ പോകണം
I want to make a phone call. | എനിക്ക് ഒരു ഫോൺ കോൾ ചെയ്യണം`,

        `Do you speak English?| നീ ഇംഗ്ലീഷ് സംസാരിക്കുമോ
I did't understand what you just said. | നിങ്ങൾ ഇപ്പോൾ പറഞ്ഞത് എനിക്ക് മനസ്സിലായില്ല
I don't know where he is?| അവൻ എവിടെയാണെന്ന് എനിക്കറിയില്ല
Why didn't you go to school today? | നീ എന്ത് കൊണ്ട് ഇന്ന് സ്കൂളിൽ പോയില്ല
Can I help you? | എനിക്ക് നിങ്ങളെ സഹായിക്കാനാകുമോ
Thank you for helping me.| എന്നെ സഹായിച്ചതിന് നന്ദി
Today is a good day. |ഇന്ന് നല്ല ദിവസമാണ് 
I saw him, yesterday.| ഞാൻ ഇന്നലെ അവനെ കണ്ടു
I wish you well.|ഞാൻ നിങ്ങൾക്ക് ആശംസകൾ നേരുന്നു
May God bless you.|ദൈവം നിങ്ങളെ അനുഗ്രഹിക്കട്ടെ`,

        `I love singing.|എനിക്ക് പാടുന്നത് ഇഷ്ടമാണ്
I did as I was told. |ഞാൻ പറഞ്ഞത് പോലെ ചെയ്തു
I will see you this evening.|ഇന്ന് വൈകുന്നേരം കാണാം
I have a lot to talk about.|എനിക്ക് ഒരുപാട് സംസാരിക്കാനുണ്ട്
Walk carefully on the bridge.|പാലത്തിലൂടെ ശ്രദ്ധയോടെ നടക്കുക
I am studying in second standard.|ഞാൻ രണ്ടാം ക്ലാസ്സിൽ പഠിക്കുന്നു
I have a complaint against him.|അദ്ദേഹത്തിനെതിരെ എനിക്ക് പരാതിയുണ്ട്
I said many things to him.|ഞാൻ അവനോട് പലതും പറഞ്ഞു
All my calculations went wrong.|എന്റ്റെ എല്ലാ കണക്കുകൂട്ടലുകളും തെറ്റി
Has the school bus left?|സ്കൂൾ ബസ് പോയോ`
      ]
    }
  ]
};
