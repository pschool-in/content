export default {
  label: 'Word',
  id: 'ml-word-2',
  lang: 'ml',
  lockAfter: 100,
  list: [
    {
      type: 'match',
      label: 'പര്യായപദങ്ങൾ',
      id: 'synonyms',
      commonData: {
        title: 'വാക്കുകളെ അവയുടെ പര്യായപദങ്ങളുമായി പൊരുത്തപ്പെടുത്തുക.'
      },
      data: [
        `അപവാദം, ആക്ഷേപം
അനുഗ്രഹം, ആശീർവാദം
അഭിലാഷം, ആഗ്രഹം
അലങ്കാരം, ആഭരണം
അശു, കണ്ണീർ`,

        `അശ്വം, കുതിര
അസുരൻ, ദൈത്യൻ
അസ്ഥി, എല്ല്
അളി, വണ്ട്
അതിര്, അതിർത്തി`,

        `അടയാളം, ചിഹ്നം
അളകം, കുറുനിര
ആകാരം, രൂപം
ആകാശം, മാനം
ആജ്ഞ, നിർദ്ദേശം`,

        `ആമ്പൽ, കുമുദം 
ആഢ്യൻ, കുബേരൻ
ആരാമം, പൂന്തോട്ടം,
ഇന്ദ്രൻ, ദേവേന്ദ്രൻ
ഇരുട്ട്, അന്ധകാരം`,

        `ഇല, പത്രം
ഇഷ്ടം, ഹൃദ്യം
ഈച്ച്, മക്ഷിക
ഉത്തരം, പ്രതിവചനം
ഉക്തി, വാക്ക്`,

        `ഉച്ചം, ഉന്നതം
ഉടജം, ആശ്രമം
ഉറക്കം, നിദ്ര
ഉഡു, നക്ഷത്രം
ഉത്തമം, പ്രമുഖം`,

        `ഉദരം, വയറ്,
ഉപ്പൻ, ചകോരം
ഋഷഭം, കാള 
ഋഷി, മുനി,
എപ്പോഴും, അനാരതം`,

        `എലി, മൂഷികൻ
ഏണി, ഗോവണി
ഐരാവതം, ഐരാവണം
ഐശ്വര്യം, ഭൂതി
ഒച്ച, രവം`,

        `ഓടക്കുഴൽ, വേണു
ഔഷധം, മരുന്ന് 
കടൽ, സമുദ്രം 
കച്ചവടം, വാണിജ്യം
കടം, വായ്പ `,

        `കഠിനം, കൂരം 
കട്ടിൽ, മഞ്ചം 
കണം, കഴുത്ത് 
കണ്ണ്, അക്ഷി 
കണ്ണാടി, ദർപ്പണം `,

        `കരുണ, അനുകമ്പ 
കപാലം, തലയോട്
കര, തീരം
കരച്ചിൽ, രോദനം
കല്ല്, അശ്ശം`,

        `കലപ്പ്, സീരം
കാക്ക, ബലിഭുക്ക്
കാൽ, പാദം 
കാട്, വനം 
കാലൻ, യമൻ`,

        `കാരണം, മൂലം
കിണർ, കൂപം
കിരീടം, മകുടം
കീർത്തി, യശസ് 
കുയിൽ, കോകിലം`,

        `കുട, ഛത്രം
കുട്ടി, ശിശു 
കുട്, നീഢം 
കൃഷിക്കാരൻ, കർഷകൻ
കെ, കരം `,

        `കൊക്ക്, ബകം
കൊടുമുടി, ശിഖരം 
കൊടി, പതാക
ക്ഷമ, സഹനം
ഗംഗ, ഭാഗീരഥി `,

        `ഗണപതി, വിനായകൻ 
ഗൃഹം, വീട്
ചന്ദ്രൻ, ഇന്ദു
ചന്ദ്രിക, നിലാവ്
ചാട്, വണ്ടി`,

        `ചാരം, ഭസ്മം
ചിരി, ഹാസം 
ചിറ, സേതു 
ചീങ്കണ്ണി, ഗ്രാഹം
ചുണ്ട്, അധരം`,

        `ചെരുപ്പ്, പാദരക്ഷ 
ചോര, നിണം
ജലം, വെള്ളം
ജനം, പ്രജ 
ജീവൻ, പ്രാണൻ`,

        `തടാകം, സരസി 
തരുണൻ, യുവാവ് 
താപസൻ, സന്ന്യാസി 
താമര, കമലം 
തീരം, തടം`,

        `തുല്യം, സമം
തേൻ, മധു
ദയ, കൃപ
ദുഃഖം, പീഢ 
ദുഷ്ടൻ, നീചൻ`,

        `ദ്വാരം, സുഷിരം
നാമം, പേര് 
പകൽ, ദിനം 
പട്ടി, നായ് 
പണ്ഡിതൻ, വിദ്വാൻ`,

        `പത്നി, ഭാര്യ
പന്നി, വരാഹം
പരിമളം, വാസന 
പല്ല്, ദന്തം 
പശു, ധേനു `,

        `പഴം, ഫലം
പരാക്രമി, വീരൻ 
പുഷ്പം, കുസുമം 
പ്രഭാതം, പുലരി 
ഭിക്ഷ, യാചന`,

        `ഭൂമി, ധര,
മഞ്ഞ്, തുഷാരം
മനസ്, മാനസം
മനുഷ്യൻ, നരൻ
മരണം, മൃത്യു`,

        `മഴ, മാരി
മാൻ, ഏണം 
മാല, ഹാരം
രാതി, നിശ
വില്ല്, ധനുസ്സ്`,

        `വേദം, മറ 
വേര്, ജഡ 
ശബ്ദം, നാദം 
ശരം, അമ്പ്
ശരീരം, മെയ്യ്`,

        `ശവം, ജഡം
ശിവൻ, പശുപതി
ശുഭം, മംഗളം
ശോഭ, കാന്തി 
സഖി, തോഴി`,

        `സന്തോഷം, മോദം
സന്ധ്യ, സായാഹ്നം
സമുദ്രം, കടൽ
സഹോദരൻ, സഹജൻ
സിംഹം, കേസരി`,

        `സുഖം, ആമോദം
സുന്ദരി, സുലോചന 
സ്വർണം, കനകം`
      ]
    },
    {
      type: 'match',
      label: 'വിപരീത പദങ്ങൾ',
      id: 'antonyms',
      commonData: {
        title: 'വാക്കുകൾ അവയുടെ വിപരീതപദവുമായി പൊരുത്തപ്പെടുത്തുക.'
      },
      data: [
        `അർഹൻ, അനർഹൻ
അസാധു, സാധു
അനാഥ, സനാഥ
അസ്വസ്ഥം, സ്വസ്ഥം
അനുകൂലം, പ്രതികൂലം`,

        `അഘം, അനഘം
അപരാധി, നിരപരാധി
അന്തം, അനന്തം
അബദ്ധം, സുബദ്ധം
അടിമ, ഉടമ`,

        `അതിശയോക്തി, ന്യൂനോക്തി
അനുഗ്രഹം, ശാപം
അപര്യാപ്തം, പര്യാപ്തം
അർഹം, അനർഹം
അഭിലാഷം, നിരഭിലാഷം`,

        `അത്ര, തത്ര
അഹങ്കാരം, നിരഹങ്കാരം
അവ്യക്തം, വ്യക്തം
അചിന്ത്യം, ചിന്ത്യം
അകലുഷം, കലുഷം`,

        `പകൽ, രാത്രി
അശരീരി, ശരീരി
അവിനയം, വിനയം
അനാദരം, ആദരം
അനാദി, ആദി`,

        `അമർത്യം, മർത്യം
അഗണ്യം, ഗണ്യം
അതുല്യം, തുല്യം
അനിവാര്യം, നിവാര്യം
അപ്രത്യക്ഷം, പ്രത്യക്ഷം`,

        `അവർണ്യം, വർണ്യം
അപരിമിതം, പരിമിതം
അനിയന്ത്രിതം, നിയന്ത്രിതം
ആരംഭം, അവസാനം
ആപത്ത്സ, സമ്പത്ത്`,

        `ആഹാരം, നിരാഹാരം
ആലസ്യം, അനാലസ്യം
ആചാരം, അനാചാരം
ആഘാതം, പ്രത്യാഘാതം
ആകർഷണം,  വികർഷണം`,

        `ആകുലം, അനാകുലം
ആശാസ്യം, അനാശാസ്യം
ആന്തരികം, ബാഹ്യം
ആശ, നിരാശ
ആതുരം, അനാതുരം`,

        `ആഗമനം, നിർഗമനം
ആശങ്ക, നിരാശങ്ക
ആയം, വ്യയം
ആകർഷകം, അനാകർഷകം
ആഗതം, നിർഗതം`,

        `ആദരം, അനാദരം
ആദ്ധ്യാത്മികം, ഭൗതികം
ആദി, അനാദി
ആദിമം, അന്തിമം
ആരോഹണം, അവരോഹണം`,

        `ആവിർഭാവം, തിരോഭാവം
ആശ്രയം, നിരാശ്രയം
ഇകഴ്ത്തൽ, പുകഴ്ത്തൽ
ഇച്ഛ, അനിച്ഛ
ഇഹലോകം, പരലോകം`,

        `ഇണങ്ങുക, പിണങ്ങുക
ഇമ്പം, തുമ്പം
ഇഷ്ടം, അനിഷ്ടം
ഇതരം, അനിതരം
ഉടമ, അടിമ`,

        `ഉത്ഭവം, പതനം
ഉക്തി, പ്രത്യുക്തി
ഉത്തമം, അധമം
ഉന്നതം, നിമ്നം
ഉപകാരം, അപകാരം`,

        `ഉച്ചം, നീചം
ഉഗ്രം, ശാന്തം
ഉപമം, അനുപമം
ഉപമ, നിരുപമ
ഉപായം, നിരുപായം`,

        `ഉത്സാഹം, നിരുത്സാഹം
ഉന്മേഷം, നിരുന്മേഷം
ഉചിതം, അനുചിതം
ഊഷ്മളം, ശീതളം
നൃതം, അനൃതം`,

        `ഏകം, അനേകം
ഏകത്ര, സർവ്വത
ഏകവചനം, ബഹുവചനം
ഐക്യം, അനൈക്യം
ഐഹികം, അനൈഹികം`,

        `ഐശ്വര്യം, അനൈശ്വര്യം
ഒന്നിക്കുക, ഭിന്നിക്കുക
ഔചിത്യം, അനൗചിത്യം
ഔദ്ധത്യം, അനൗദ്ധത്യം
കഠിനം, മൃദു`,

        `കൃതജ്ഞത, കൃതഘ്നത
ക്രയം, വിക്രയം
കൃത്യം, അകൃത്യം
കൃത്രിമം, അകൃത്രിമം
കൃശം, മേദുരം`,

        `ഖണ്ഡം, അഖണ്ഡം
ഗമനം, ആഗമനം
ഗാഢം, ശിഥിലം
ഗ്രാഹ്യം, ത്യാജ്യം
ചരം, അചരം`,

        `ചിന്ത്യം, അചിന്ത്യം
ജംഗമം, സ്ഥാവരം
തിക്തം, മധുരം
തിരസ്കരിക്കുക, സ്വീകരിക്കുക
ത്യാജ്യം, ഗ്രാഹ്യം`,

        `ദുസ്സാദ്ധ്യം, സുസ്സാദ്ധ്യം
ദുഷ്കൃതം, സുകൃതം
ദുർഗ്ഗമം, സുഗമം
ദുരൂഹം, ഊഹം
ദുസ്സഹം, സുസ്സഹം`,

        `ദുർഗതി, സത്ഗതി
ദുർലളിതം, സുലളിതം
ദൃശ്യം, അദൃശ്യം
ദൗർലഭ്യം, സൗലഭ്യം
ദൃഢം, ശിഥിലം`,

        `ധാരാളം, വിരളം
ധീരൻ, ഭീരു
നവീനം, പുരാതനം
നശ്വരം, അനശ്വരം
നിരാകരണം, സ്വീകരണം`,

        `നിരാലംബം, ആലംബം
നിവൃത്തി, പ്രവൃത്തി
നിഷ്പന്ദം, സ്പന്ദം
നിന്ദ, സ്തുതി
നിശ്ചലം, ചഞ്ചലം`,

        `പരകീയം, സ്വകീയം
പുരോഗതി, അധോഗതി
പുരാതനം, അധുനാതനം
പോഷണം, ശോഷണം
പ്രഭാതം, പ്രദോഷം`,

        `പ്രയോജനം, നിഷ്പ്രയോജന
പ്രസിദ്ധം, അപസിദ്ധം
പ്രസക്തം, കുപ്രസക്തം
പ്രത്യാഘാതം, ആഘാതം
പ്രശംസ, അധിക്ഷേപം`,

        `പ്രഗത്ഭൻ, അപ്രഗത്ഭൻ
പ്രാചീനം, നവീനം
ഭയം, നിർഭയം
ഭാവി, ഭൂതം
ഭിന്നം, അഭിന്നം`,

        `ഭീരു, ധീരൻ
മലിനം, നിർമ്മലം
മാനുഷികം, അമാനുഷികം
മിത്രം, ശത്രു
യത്നം, അയത്നം`,

        `യുക്തം, അയുക്തം
രഹസ്യം, പരസ്യം
രക്ഷ, ശിക്ഷ
രസം, നീരസം
രക്തി, വിരക്തി`,

        `ലഘു, ഗുരു
ലഭ്യം, അലഭ്യം
ലാഘവം, ഗൗരവം
വധ്യൻ, അവധ്യൻ
വാചാലൻ, നിശബ്ദൻ`,

        `വികലം, അവികലം
വിനയം, സവിനയം
വിയോഗം, സംയോഗം
വിമുഖം, ഉന്മുഖം
വിരക്തി, ആസക്തി`,

        `വിദിതം, അവിദിതം
വിദ്യ, അവിദ്യ
വൃഷ്ടി, സമഷ്ടി
ശീതം, ഉഷ്ണം
സദാചാരം, ദുരാചാരം`,

        `സഹിതം, രഹിതം
സനാതനം, നശ്വരം
സത്കീർത്തി, ദുഷ്കീർത്തി
സഫലം, വിഫലം
സങ്കീർണം, അസങ്കീർണം`,

        `സങ്കുചിതം, വികസിതം
സുന്ദരം, വിരൂപം
സുഗന്ധം, ദുർഗന്ധം
സുഗ്രഹം, ദുർഗ്രഹം
സുലഭം, ദുർലഭം`,

        `സൂക്ഷ്മം, സ്ഥലം
സുസ്ഥിതി, ദുസ്ഥിതി
സൃഷ്ടി, സംഹാരം
ഹിതം, അഹിതം
ക്ഷതം, അക്ഷതം`
      ]
    },
    {
      type: 'match',
      label: 'നാനാർത്ഥങ്ങൾ',
      id: 'homonyms',
      commonData: {
        title: 'വാക്കുകൾ അവയുടെ നാനാർത്ഥങ്ങകളുമായി പൊരുത്തപ്പെടുത്തുക'
      },
      data: [
        `അംശം, പങ്ക്
അകം, മനസ്സ് 
അക്രൂരൻ, ഒരു യാദവൻ
അക്ഷം, വണ്ടി 
അക്ഷമം, കുരികിൽപ്പക്ഷി `,

        `അക്ഷരം, മോക്ഷം
അക്ഷി, താന്നിമരം 
അഗം, പർവ്വതം 
അഗ്രം, അറ്റം
അഗ്രജൻ, ജ്യേഷ്ഠൻ `,

        `അഗ്രണി, പ്രമാണി 
അഘം, പാപം
അങ്കം, അടയാളം
അങ്കുരം, മുള
അങ്കുശം, തോട്ടി `,

        `അംഗം, ശരീരം
അംഗജം, രോമം
അങ്ങാടി, കച്ചവടസ്ഥലം
അചലം, പർവ്വതം
അച്ഛം, അഭിമുഖം `,

        `അച്ഛൻ, പ്രസന്നൻ
അജം, ആട്
അജൻ, ബ്രഹ്മാവ്
അഞ്ജനം, മഷി
അട, ഒരു പലഹാരം `,

        `കമലം, താമര 
കമ്പം, വിറയൽ 
കരി, ആന
കരം, നികുതി
കലാപം, കുഴപ്പം 
കല്പന, അനുഷ്ഠാനം `,

        `കുട, കുടയുക 
കുടം, വൃക്ഷം 
കുംഭം, മലയാളമാസം                          
കുശം, വെള്ളം
കുറി, നിശ്ചയം`,

        `ഗണം, സംഖ്യ 
ഗോത്രം, വംശം
ഘടം, കുടം
ചട്ടം, നിയമം
ചിത്രം, പടം,`,

        `ജ്യോതിസ്, പ്രകാശം 
തല, ശിരസ്
താരം, നടൻ 
തിമിരം, ഇരുട്ട് 
തുണ, സഹായം `,

        `മതം, അഭിപ്രായം
മാനം, ആകാശം 
മൃഗം, മാൻ
യുഗം, നുകം
യോഗം, പ്രയോഗം `,

        `പദം, വാക്ക് 
പാണി, കെ 
പാദം, നാലിലൊന്ന്
പിടി, പെണ്ണാന 
ബലം, ശരീരം `,

        `വക്രം, കപടമായ 
വചനം, സംഭാഷണം 
വർഗ്ഗം, സമുദായം
വർണ്ണം, അക്ഷരം 
വർഷം, ആണ്ട് `,

        `വിധി, കർമ്മം
ശുകം, തത്ത
ശുഭം, ഐശ്വര്യം
ശൃംഗം, കൊമ്പ്
ശ്രുതി, ചെവി `,

        `സമയം, അവസരം
സാധനം, നിർവ്വഹണം
സാധു, സന്ന്യാസി
സാരം, അർത്ഥം
സിദ്ധി, സാധന`,

        `സുഖം, ക്ഷേമം 
സ്ഥാനം, പാർപ്പിടം 
ഹരി, വിഷ്ണു
ഹസ്തം, കൈ
ഹേമം, സ്വർണ്ണം `,

        `ആകരം, സ്ഥലം 
ആഗമം, വരവ് 
ആതപം, ചൂട്
ആദർശം, കണ്ണാടി
ആയ, വളർത്തമ്മ`,

        `കല്യാണം, വിവാഹം
കവചം, കുപ്പായം 
കവനം, കവിത
കളി, വിഹരിക്കുക
കളഭം, ആന`,

        `ധർമ്മം, പുണ്യം 
ധാതി, അമ്മ 
ധൂമം, പുക
നവം, ഒൻപത് 
പക്ഷം, ചിറക്`
      ]
    }
  ]
};
