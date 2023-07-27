export default {
  label: 'പഴങ്ങളും പച്ചക്കറികളും',
  id: 'ml-picture-2',
  list: [
    {
      type: 'dragDropImgLabel',
      id: 'drag-fruits',
      label: 'Drag & Drop: പഴങ്ങൾ',
      commonData: { title: 'Drag the names and drop on the images.' },
      data: [
        'apple|ആപ്പിൾ\ngrapes|മുന്തിരി\nbanana|വാഴപ്പഴം\ncherry|ചെറി\navocado|അവോക്കാഡോ\nstrawberry|ഞാവൽപ്പഴം',
        'guava|പേരക്ക\njackfruit|ചക്ക\nmango|മാമ്പഴം\norange|ഓറഞ്ച്\npapaya|പപ്പായ\npineapple|കൈതച്ചക്ക',
        'watermelon|തണ്ണിമത്തൻ\npomegranate|മാതളനാരകം\nfig|അത്തിപ്പഴം\ncustard-apple|സീതപ്പഴം',
        'plum|പ്ലം\ndates|ഈന്തപ്പഴം\nmuskmelon|തൈക്കുമ്പലം'
      ]
    },
    {
      type: 'dragDropImgLabel',
      id: 'drag-vegetables',
      label: 'Drag & Drop: പച്ചക്കറികൾ',
      commonData: { title: 'Drag the names and drop on the images.' },
      data: [
        'carrot|കാരറ്റ്\nbeetroot|ബീറ്റ്റൂട്ട്\nonion|ഉള്ളി\ntomato|തക്കാളി\npotato|ഉരുളക്കിഴങ്ങ്\ncabbage|മുട്ടക്കോസ്',
        'corn|ചോളം\ncucumber|വെള്ളരിക്ക\ngarlic|വെളുത്തുള്ളി\nginger|ഇഞ്ചി\ncauliflower|കോളിഫ്ലവർ\npumpkin|മത്തങ്ങ',
        'almond|ബദാം\nbeans|പയർ\nbitter-gourd|പാവയ്ക്ക\nbrinjal|വഴുതന\ncapsicum|കാപ്സിക്കം\ncashewnut|കശുവണ്ടി',
        'chilli|മുളക്\ncoconut|നാളികേരം\nlemon|നാരങ്ങ\ncorianderleaf|മല്ലിയില\ncurryleaf|കറിവേപ്പില\ndrumstick|മുരിങ്ങ',
        'greenpeas|ഗ്രീൻ പീസ\nladies-finger|വെണ്ടക്ക\nmintleaf|പുതിന\npeanut|കപ്പലണ്ടി',
        'radish|മുള്ളങ്കി\nspinach|ചീര\nvegetables|പച്ചക്കറികൾ'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: പഴങ്ങൾ',
      id: 'fill-fruits',
      commonData: {
        images: 'stockImgs',
        title: 'Find the missing letters and complete the word.',
        lang: 'ml'
      },
      data: [
        'apple|ആപ്പിൾ|_പ്പിൾ|ആ,ജ,ഷ,ഥ\ngrapes|മുന്തിരി|_ന്തിരി|മു,ഋ,ഞ,ല\nbanana|വാഴപ്പഴം|_ഴപ്പഴം|വാ,ഫ,ഌ,ഥ\ncherry|ചെറി|_റി|ചെ,ന,ല,ജ\navocado|അവോക്കാഡോ|_വോക്കാഡോ|അ,ഫ,ഌ,ണ\nstrawberry|ഞാവൽപ്പഴം|_വൽപ്പഴം|ഞാ,ഥ,ഋ,ഞ\nguava|പേരക്ക|_രക്ക|പേ,ണ,ഥ,ജ\njackfruit|ചക്ക|_ക്ക|ച,ഫ,ഥ,ഋ\nmango|മാമ്പഴം|_മ്പഴം|മാ,ല,ഫ,ന\norange|ഓറഞ്ച്|_റഞ്ച്|ഓ,ഷ,ല,ഞ',
        'papaya|പപ്പായ|_പ്പായ|പ,ന,ണ,ല\npineapple|കൈതച്ചക്ക|_തച്ചക്ക|കൈ,ന,ഌ,ണ\nwatermelon|തണ്ണിമത്തൻ|_ണ്ണിമത്തൻ|ത,ഥ,ഞ,ഫ\npomegranate|മാതളനാരകം|_തളനാരകം|മാ,ഋ,ഥ,ഫ\nfig|അത്തിപ്പഴം|_ത്തിപ്പഴം|അ,ഷ,ണ,ഞ\ncustard-apple|സീതപ്പഴം|_തപ്പഴം|സീ,ഋ,ഌ,ഷ\nplum|പ്ലം|_ലം|പ്,ഋ,ഞ,ജ\ndates|ഈന്തപ്പഴം|_ന്തപ്പഴം|ഈ,ല,ഞ,ണ\nmuskmelon|തൈക്കുമ്പലം|_ക്കുമ്പലം|തൈ,ഋ,ഌ,ഫ'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: പച്ചക്കറികൾ',
      id: 'fill-vegetables',
      commonData: {
        images: 'stockImgs',
        title: 'Find the missing letters and complete the word.',
        lang: 'ml'
      },
      data: [
        'carrot|കാരറ്റ്|_രറ്റ്|കാ,ഌ,ഞ,ഫ\nbeetroot|ബീറ്റ്റൂട്ട്|_റ്റ്റൂട്ട്|ബീ,ന,ല,ഋ\nonion|ഉള്ളി|_ള്ളി|ഉ,ഋ,ഞ,ഥ\ntomato|തക്കാളി|_ക്കാളി|ത,ന,ഫ,ജ\npotato|ഉരുളക്കിഴങ്ങ്|_രുളക്കിഴങ്ങ്|ഉ,ഷ,ഫ,ജ\ncabbage|മുട്ടക്കോസ്|_ട്ടക്കോസ്|മു,ജ,ഋ,ഥ\ncorn|ചോളം|_ളം|ചോ,ഌ,ജ,ഫ\ncucumber|വെള്ളരിക്ക|_ള്ളരിക്ക|വെ,ഋ,ഌ,ന\ngarlic|വെളുത്തുള്ളി|_ളുത്തുള്ളി|വെ,ജ,ഥ,ഋ\nginger|ഇഞ്ചി|_ഞ്ചി|ഇ,ഌ,ഫ,ന',
        'cauliflower|കോളിഫ്ലവർ|_ളിഫ്ലവർ|കോ,ഥ,ഋ,ഞ\npumpkin|മത്തങ്ങ|_ത്തങ്ങ|മ,ഥ,ന,ഋ\nalmond|ബദാം|_ദാം|ബ,ല,ന,ഌ\nbeans|പയർ|_യർ|പ,ഫ,ഥ,ണ\nbitter-gourd|പാവയ്ക്ക|_വയ്ക്ക|പാ,ഋ,ഞ,ഌ\nbrinjal|വഴുതന|_ഴുതന|വ,ഋ,ഌ,ന\ncapsicum|കാപ്സിക്കം|_പ്സിക്കം|കാ,ഞ,ഋ,ഫ\ncashewnut|കശുവണ്ടി|_ശുവണ്ടി|ക,ന,ഫ,ണ\nchilli|മുളക്|_ളക്|മു,ഷ,ല,ഥ\ncoconut|നാളികേരം|_ളികേരം|നാ,ഞ,ഌ,ണ',
        'lemon|നാരങ്ങ|_രങ്ങ|നാ,ണ,ന,ഷ\ncorianderleaf|മല്ലിയില|_ല്ലിയില|മ,ഫ,ന,ണ\ncurryleaf|കറിവേപ്പില|_റിവേപ്പില|ക,ഫ,ന,ഞ\ndrumstick|മുരിങ്ങ|_രിങ്ങ|മു,ഞ,ല,ഋ\ngreenpeas|ഗ്രീൻ പീസ|_രീൻ പീസ|ഗ്,ഋ,ഌ,ന\nladies-finger|വെണ്ടക്ക|_ണ്ടക്ക|വെ,ല,ഫ,ണ\nmintleaf|പുതിന|_തിന|പു,ജ,ന,ഌ',
        'peanut|കപ്പലണ്ടി|_പ്പലണ്ടി|ക,ഌ,ഥ,ജ\nradish|മുള്ളങ്കി|_ള്ളങ്കി|മു,ഷ,ഋ,ജ\nspinach|ചീര|_ര|ചീ,ഋ,ല,ഞ\nvegetables|പച്ചക്കറികൾ|_ച്ചക്കറികൾ|പ,ഞ,ഋ,ജ'
      ]
    },
    {
      type: 'match',
      label: 'Match: പഴങ്ങൾ',
      id: 'match-fruits',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'Connect image with its first letter.'
      },
      data: [
        'മാ,mango\nസീ,custard-apple\nപേ,guava\nഞാ,strawberry\nഓ,orange',
        'മാ,pomegranate\nവാ,banana\nപ,papaya\nചെ,cherry\nഈ,dates',
        'അ,avocado\nമു,grapes\nതൈ,muskmelon\nച,jackfruit\nആ,apple',
        'അ,fig\nപ്,plum\nത,watermelon\nകൈ,pineapple'
      ]
    },
    {
      type: 'match',
      label: 'Match: പച്ചക്കറികൾ',
      id: 'match-vegetables',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'Connect image with its first letter.'
      },
      data: [
        'മു,cabbage\nക,cashewnut\nനാ,coconut\nബീ,beetroot\nഗ്,greenpeas',
        'മു,chilli\nക,curryleaf\nനാ,lemon\nബ,almond\nകോ,cauliflower',
        'മു,drumstick\nക,peanut\nകാ,carrot\nപു,mintleaf\nഇ,ginger',
        'മു,radish\nമ,pumpkin\nകാ,capsicum\nപാ,bitter-gourd',
        'വെ,cucumber\nമ,corianderleaf\nഉ,onion\nത,tomato',
        'വെ,garlic\nപ,beans\nഉ,potato\nചോ,corn',
        'വെ,ladies-finger\nപ,vegetables\nവ,brinjal\nചീ,spinach'
      ]
    }
  ]
};
