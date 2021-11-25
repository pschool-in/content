export default {
    label: 'चित्र',
    id: 'hi-picture',
    img: 'image',
    list: [ // This is for class 2 and below
      {
        type: 'completeWord',
        label: 'फल ',
        id: 'fruits',
        commonData: {
          images: 'custom',
          title: 'लापता अक्षरों को भरें।',
          lang: 'hi'
        },
        data: [
          `apple| सेब | _ब| से, घि, खे, च
          grapes| अंगूर | _,गूर | अं, जा, टा, ढ
          banana| केला |_ला| के, तं, को, डं
          strawberry| झरबेर| _रबेर| झ, र, जा, च
          guava| अमरूद | _मरूद| अ, ण, शि, पू
          jackfruit| कटहल | _टहल| क, घे, थौ, डा`,
          
          `mango| आम | _म| आ, चू, डी, यि	
          orange| संतरा | _तरा | सं, डी, मी, क्षू
          papaya|  पपीता |_पीता | प, गो, कु, तु
          pineapple| अननास | _ननास| अ, पू,  त्रे, शि
          pomegranate| अनार | _नार| अ, टु, डा, ती`,
  
          `watermelon| तरबूज | _रबूज| त, झा, ठ, थौ
          fig| अंजीर| _जीर| अं, भि, व, क्षै
          custard-apple| शरीफा| _रीफा| श, ळो, क्षि, सा
          plum |आलूबुखारा | _लूबुखारा| आ, या, फौ, शी	
          dates| खजूर| _जूर| ख, क्षै, वि, फे
          muskmelon |खरबूजा | _रबूजा | ख, डी, ब, मा`,

          `sapotta| चीकू| _कू| ची, च, ख, डी
          jamun| जामुन| _मुन| जा, ज, मु, न
          pear| नाशपाती| _शपाती| ना, रि, न, ल
          tamarind| इमली| _मली| इ, म, ली, ल
          sugarcane| ईख| _ख| ई, इ, म, ली
          water-chesnut| सिंघाड़ा| _घाड़ा| सिं, सि, स, घा`,

          `blueberry| नीलबदरी| _लबदरी| नी, ल, ब, न
          peach| सतालू| _तालू| स, ता, लू, ल
          jujube| बेर| _र| बे, ब, म, ली
          passion-fruit| कृष्णा फल| _ष्णा फल| कृ, फ, ल, ली
          star-fruit| कमरख| _मरख| क, म, र, ख
          dragon-fruit| पिताया| _ताया| पि, ता, या, प`
        ]
      },
      {
        type: 'completeWord',
        label: 'सब्जियां',
        id: 'vegetables',
        lockAfter:4,
        commonData: {
          images: 'custom',
          title: 'लापता अक्षरों को भरें।',
          lang: 'hi'
        },
        data: [
          `carrot| गाजर | _जर | गा, चा, टा, खा	
          beetroot| चुकंदर |_कंदर| चु, खु, झु, डु
          onion| प्याज़ | _याज़| प्, जू, चु, झु	  
          tomato| टमाटर | _माटर| ट, टे, खु, ह	  
          potato| आलू | _लू| आ, कै, गू, टे, घा	`,		 
          
          `cabbage| पत्ता गोभी | _त्ता गोभी | प, घा, ख, ट	   
          cauliflower| गोभी| _भी| गो, झौ, झा, टि  	
          corn| भुट्टा | _ट्टा | भु, छी, चू, का
          cucumber| खीरा | _रा | खी, शी, से, यो 
          garlic| लहसुन | _हसुन | ल, र , हि, षु`,
  
          `ginger| अदरक | _दरक| अ, ऊ, ऐ, औ	  
          pumpkin| कद्दू   | _द्दू  | क, रे, षे, भ
          almond|  बादाम|  _दाम| बा, ढि, कौ, क
          beans| फलियां| _लियां| फ, ध, ब, य
          bitter-gourd| करेला| _रेला| क, भा, मू, घू`,
  
          `brinjal| बैंगन | _गन| बैं, क, ओ, खौ
          capsicum| शिमला मिर्च| _मला मिर्च| शि, णु, चु, ठे
          cashewnut| काजू | _जू| का, झा, घै, जा
          chilli| मिर्च| _र्च| मि, झो, जै, खा
          coconut| नारियल| _रियल| ना, ठि, टी, तौ`
  
        ]
      },
      {
        type: 'completeWord',
        label: 'जानवर',
         lockAfter:4,
        id: 'animals',
        commonData: {
          images: 'custom',
          title: 'लापता अक्षरों को भरें।',
          lang: 'hi'
        },
        data: [
          `cat| बिल्ली | _ल्ली | बि, इ, ऊ, घ 
          dog| कुत्ता | _त्ता | कु, ग, आ, इ 
          goat| बकरी | _करी| ब, द, ध, थ
          sheep| भेड् | _ड्|  भे,अ, ख, पी   
          horse| घोडा | _डा | घो, ध, न, प`,
  
          `pig| सूअर | _अर | सू, य, र, ल 
          elephant| हाथी  | _थी | हा, घी, कै, ध 
          lion| शेर | _र | शे, डि ,थी , ढि  
          monkey| बंदर | _दर | बं, थि , झु, ठि 
          tiger| बाघ| _घ| बा, ता, थी, ची `,
  
          `hippo| जलहस्ती| _लहस्ती | ज , थो, जी, घु	 
          rhino| गैंडा| _डा| गैं , णू, तै ,  घा
          fox| लोमड़ी | _मड़ी | लो, लै, डी , टा	 
          crocodile| मगरमच्छ | _गरमच्छ | म, डि, णी, झी	  
          bear| भालू | _लू | भा, तू,  घि, ग	
          camel| ऊंट | _ट | ऊं , छा,  तू , गा`,
  
          `fish| मछली | _छली| म , खु,  झा , घा
          frog| मेंडक | _डक | में , गं, ठू , ख 
          crab| केकड़ा | _कड़ा | के , ठा , डि,  नि
          snake | साँप | _प | साँ, सा, झा, ख  
          squirrel| गिलहरी| _लहरी| गि, ले, ची, द्वि`,
  
          `tortoise| कछुआ|  _छुआ| क, झा, घि, की
          rat| चूहा | _हा | चू , क्षु, षु , वू 
          ant| चींटी | _टी | चीं , तै, छं , ची
          fly| मक्खी| _क्खी |  म , थो, टौ , षि 
          bat| चमगादड़ |_मगादड़ | च, धु, णा, बु`,
  
          `buffalo|  भेंस| _स| भें, ख,  चि, गा	
          butterfly|  तितली| _तली| ति, यै, खि, खं
          cow|  गाय| _य| गा, ढि, छी, खे
          donkey| गधा | _धा| ग, घा, झि, टा`
        ]
      },
      {
        type: 'completeWord',
        label: 'पक्षी',
         lockAfter:2,
        id: 'birds',
        commonData: {
          images: 'custom',
          title: 'लापता अक्षरों को भरें।',
          lang: 'hi'
        },
        data: [
          `crow| कौवा |_वा|  कौ, वू, यु, षि 
        dove| कबूतर | _बूतर | क , षि,  डि, ब
        duck| बतख़ | _तख़| ब , टौ, त , णा
        hen| मुर्गी | _र्गी | मु , त्रि,  क्षु , वू 
        parrot| तोता | _ता| तो, षि,  षु, ठा`,
  
          `peacock| मोर | _र | मो , टौ,  श्री , त्रि  
        sparrow| गौरेया| _रेया| गौ, णा , सी , त्रि 
        chick| चूज़ा| _ज़ा| चू, ढि, ठै, फि
        crane| सारस| _रस| सा, तै, यु, सी
        vulture| गिद्ध| _द्ध| गि, णा, यै, फी`,
  
          `flamingo| मराल |_राल | म, णू, थो, टी
        kingfisher|नीलकंठ| _लकंठ| नी, जु, खं, तौ	
        myna| मैना | _ना | मै, तै, यै, गि
        ostrich| शुतरमुर्ग| _तरमुर्ग| शु, फि, तै, खि 
        owl| उल्लू| _ल्लू| उ, णू, थो, टी
        rooster| मुर्गा| _र्गा| मु, घ, झी, जु`
        ]
      },
      {
        type: 'completeWord',
        label: 'शरीर के अंग',
        id: 'bodyparts',
        data: {
          images: 'custom',
          title: 'लापता अक्षरों को भरें।',
          lang: 'hi',
          text: `ear| कान | _न| का, हू, क्षौ, त्रि	          
          hand| हाथ | _थ| हा , भि, मू , त्रौ 
          mouth| मुंह | _ह|  मुं, नि, क्षै, लि	
          nose| नाक | _क |  ना, मै, त्रा, क्षं 
          tooth| दांत | _त| दां, भी, क्षा, मु
          eye| आंख | _ख| आं, य, भि, मु  
          foot| पैर | _र|  पै, बा, क्षौ, धं
          hair| बाल| _ल| बा, क्षौ, धं, टां `
        }
      },
      {
        type: 'completeWord',
        label: 'मकान',
        id: 'house',
        lockAfter:4,
        commonData: {
          images: 'custom',
          title: 'लापता अक्षरों को भरें।',
          lang: 'hi'
        },
        data: [
          `man| आदमी| _दमी| आ, अ, ला, प
          woman| औरत| _रत| औ, आ, अ, ला 
          boy| लड़का| _ड़का| ल, ड़, क, ला
          girl| लड़की| _ड़की| ल, ड़, क, ला
          house| मकान| _कान| म, क, न, प
          grandfather| दादा| _दा| दा, द, न, प `,

          `table| मेज| _ज| मे, गु, झे, णु	
          bed| बिस्तर| _स्तर| बि, खू, णौ, ठी
          candle| मोमबत्ती| _मबत्ती| मो, डे, ठी, झू	
          chair| कुर्सी| _र्सी| कु, झे, गु, ठी
          shelf| अलमारी|  _लमारी|  अ, चा, जि, टु
          baby| बच्चा| _च्चा| ब, ल, झौ, आ
          ball| गेंद| _द| गें, ध, थी, ये`,

          `glasses| ऐनक| _नक|  ऐ, भ, मा, यि
          clock| दीवार घड़ी | _वार घड़ी | दी, घ, तू, थ
          watch| घड़ी | _ड़ी | घ, तू, ठ, थ
          flower-pot| गमला| _मला| ग, च, ब, भि
          umbrella| छतरी| _तरी| छ, त, र, च
          door| दरवाजा| _रवाजा| द, र, वा, जा
          broom| झाड़ू| _ड़ू| झा, झ, ड़, जा`,

          `window|खिड़की| _ड़की| खि, ड़, की, ख 
          bucket|बाल्टी| _ल्टी| बा, ग, ब, भि
          soap|साबुन| _बुन| सा, स, र, च
          pillow|तकिया| _किया| त, क, य, थ
          basket|टोकरी| _करी| टो, क, री, ट
          dustbin|कचरे का डिब्बा| _चरे का डिब्बा| क, झे, गु, ठी`
        ]
      },
      {
        type: 'completeWord',
        label: 'पोशाक',
        id: 'dress',
        data: {
          images: 'custom',
          title: 'लापता अक्षरों को भरें।',
          lang: 'hi',
          text: `shoe|जूता| _ता| जू, ता, ज, 
          sock|मौज़ा| _ज़ा| मौ, म, जू, ज
          pyjama|पजामा| _जामा| प, ज, म, मौ
          gloves|दस्ताने| _स्ताने| द, ने, गु, ठी
          scarf|दुपट्टा| _पट्टा| दु, द, गु, ठी
          shirt|कमीज| _मीज| क, झे, गु, ठी
          hat|टोपी| _पी| टो,  तू, ठ, थ
          trousers|पतलून| _तलून| प, त, ल, न`
        }
      },
      {
        type: 'completeWord',
        label: 'रसोईघर',
        id: 'kitchen',
        commonData: {
          images: 'custom',
          title: 'लापता अक्षरों को भरें।',
          lang: 'hi'
        },
        data: [
         `stove| चूल्हा| _ल्हा |चू, चा, चे, चै	 
          fork| कांटा| _टा |कां, कै, को, कौ
          knife| छुरी| _री| छु, छा, छि, छे	
          pan| कड़ाही| _ड़ाही |क, कि, की, कु	
          spoon | चम्मच| _म्मच| च, चू, चा, चे
          pot| मटका| _टका |म, मू,	मे, मै
          butter| मक्खन| _क्खन| म, मा, मि, मी`,

          `lid| ढक्कन| _क्कन| ढ, क, न, ध
          tap| नल| _ल| न, ल, भ, ब
          plate| थाली| _ली| था, ल, वा, जा
          sugar|चीनी| _नी| ची, नी, चा, चे
          bowl|कटोरा| _टोरा| क, कै, को, कौ
          meat|मांस| _स| मां, मा, म, स
          salt|नमक| _मक|न, म, क, स`,

          `sweets|मिठाइयाँ| _ठाइयाँ| मि, मां, मा, म
          bread|रोटी| _टी| रो, ट, र, टी
          juice|रस| _स| र, रो, ट, टी
          flour|आटा| _टा| आ, फु, थी, ने
          lentils|दाल| _ल| दा, ल, थी, ने
          rice|चावल| _वल| चा, व, ची, नी,`
        ]
      },
      {
        type: 'completeWord',
        label: 'प्रकृति',
        id: 'nature',
        commonData: {
          images: 'custom',
          title: 'लापता अक्षरों को भरें।',
          lang: 'hi'
        },
        data: [
         `sun| सूर्य| _र्य| सू, कि, ते, छा
         moon| चांद| _द| चां, छी, टा, झा		
         rain| बारिश| _रिश|  बा, टा, णू, ते	
         star| तारा| _रा|  ता, डा, घू, छि
         milk| दूध| _ध| दू, टु, णी, णो
         bird| पक्षी| _क्षी | प, कि, झि, ता`,

         `fruits|  फल|  _ल| फ, चु, टी, झि
          leaf| पत्ता | _त्ता | प, टा, ती, खी
          world| दुनिया| _निया | दु, टा, णू, दी
          nest| घोसला| _सला| घो, घ, स, ल
          water-drop| ओस| _स| ओ, ऊ, न, ट 
          waterfall| झरना| _रना| झ, र, न, छ
          rainbow|इंद्रधनुष| _द्रधनुष| इं, झ, र, न`
        ]
      },
      {
        type: 'completeWord',
        label: 'चित्र और नाम',
        id: 'others',
        commonData: {
          images: 'custom',
          title: 'लापता अक्षरों को भरें।',
          lang: 'hi'
        },
        data: [
        `ring| अंगूठी |_गूठी |  अं, णु, थी, गो
        bone| हड्डी| _ड्डी | ह, खे, ट, तं
        bell| घंटी| _टी| घं, झो, गो, ड 
       conch| शंख | _ख |  शं, झि, ता, णु
       drums| ढोल|| _ल| ढो, णू, घी, था`,
  
       `five| पांच| _च| पां, ची, ख, घु
       food| खाना| _ना| खा, ठि, का, झो	
       king|  राजा|  _जा|  रा, गा, कि, चं
       kite| पतंग| _तंग|  प, बै, नि, णे`,
  
      `ladder|  सीढ़ी |  _ढ़ी | सी, दी, ती, ढू
       rishi|  ऋषि|  _षि|  ऋ, मि, डो, टि	
       wheel| चक्का| _क्का| च, ब, भि, बै
       whistle| सीटी| _टी|  सी, णू, घी, था`
        ]
      },
      {
    id: 'match-vowels',
    type: 'match',
    label: 'चित्र से मिलाओ - स्वर',
    commonData: {
      title: 'नीचे दिए गए चित्रों को उनके  सही स्वर  से मिलाये',
      rightImgType: 'custom',
      big: true
    },
    data: [
      `अ, pomegranate 
      आ, mango
      इ, tamarind
      ई, sugarcane
      उ, owl
      ऊ, yarn-ball`,

      `ऋ, rishi
      ऐ, glasses
      ओ, water-drop
      औ, woman
      अं, grapes`
    ]
},
{
    id: 'match-consonents',
    type: 'match',
    label: 'चित्र से मिलाओ - व्यंजन',
    commonData: {
      title: 'चित्र पहचान  कर व्यंजन से मिलाये',
      rightImgType: 'custom',
      big: true
    },
    data: [
      `क, lotus
      ख, rabbit
      ग, flower-pot
      घ, watch`,
     
     `च, jasmine 
      छ, umbrella
      ज, ship
      झ, waterfall `,
      
      `ट, tomato
      ठ, trolley 
      ड, damaru, 
      ढ, lid `,

      `त, watermelon
      थ, pouch
      द, door
      ध, bow
      न, tap`,

      `प, wheel 
      फ, fruits
      ब, goat 
      भ, bear
      म, crocodile`,

      `य, yagna 
      र, chariot
      ल, top
      श, turnip`,

      `ष, hexagon
      स, vegetables
      ह, plough
      त्र, trident`
    
    ]
  },
      {
        id: 'match-fruits',
        type: 'match',
        label: 'चित्र से मिलाओ - फल',
        commonData: {
          title: 'चित्र को उनके पेहले अक्षर से जोड़िए',
          rightImgType: 'custom',
          big: true
        },
        data: [
          `से, apple
  अं, grapes 
  के, banana
  अ, guava
  क, jackfruit
  ख, dates`,
  
          `आ, mango
  सं, orange
  प, papaya
  अ, pineapple
  त, watermelon`,
  
          `अं, fig
  श, custard-apple
  आ, plum
  अ, pomegranate
  ख, muskmelon`,

  `ची, sapotta
  जा, jamun
  ना, coconut 
  इ, tamarind
  ई, sugarcane`,

  `सिं, water-chesnut
  नी, blueberry
  स, peach
  बे, jujube`,

  `कृ, passion-fruit
  क, star-fruit 
  पि, dragon-fruit`

        ]
      },
      {
        id: 'match-vegetables',
        type: 'match',
        label: 'चित्र से मिलाओ- सब्जियां',
         lockAfter:4,
        commonData: {
          title: 'चित्र को उनके पेहले अक्षर से जोड़िए',
          rightImgType: 'custom',
          big: true
        },
        data: [
          `गा, carrot
  चु, beetroot
  प्, onion
  ट, tomato
  आ, potato`,
  
          `प, cabbage
  गो, cauliflower
  भु, corn
  खी, cucumber
  क, pumpkin`,
  
          `अ, ginger
  ल, garlic
  बा, almond
  फ, beans
  क, bitter-gourd`,
  
          `बैं, brinjal
  शि, capsicum
  का, cashewnut
  मि, chilli
  ना, coconut`
        ]
      },
      {
        id: 'match-animals',
        type: 'match',
        label: 'चित्र से मिलाओ - जानवर',
         lockAfter:4,
        commonData: {
          title: 'चित्र को उनके पेहले अक्षर से जोड़िए',
          rightImgType: 'custom',
          big: true
        },
        data: [
          `बि, cat
          कु, dog
          ब, goat
          भे, sheep
          घो, horse`,
  
          `हा, elephant
          शे, lion
          बं, monkey
          बा, tiger`,
  
          `ज, hippo
          गैं, rhino
          लो, fox
          म, crocodile`,
  
          `भा, bear
          ऊं, camel
          सू, pig
          म, fish`,
  
          `में, frog
          के, crab
          स, snake
          गि, squirrel
          क, tortoise`,
  
          `चू, rat
          चीं, ant
          म, fly
          च, bat
          भें, buffalo`,
  
          `ति, butterfly 
          गा, cow
          ग, donkey`
        ]
      },
  
      {
        id: 'match-birds',
        type: 'match',
        label: 'चित्र से मिलाओ - पक्षी',
         locked: 'true',
        commonData: {
          title: 'चित्र को उनके पेहले अक्षर से जोड़िए',
          rightImgType: 'custom',
          big: true
        },
        data: [
          ` कौ, crow
          क, dove
          ब, duck
          मु, hen
          तो, parrot`,
  
          `मो, peacock
          गौ, sparrow
          चू, chick
          सा, crane
          गि, vulture`,
  
          `नी, kingfisher
          मै, myna
          शु, ostrich
          उ, owl
          मु, rooster`
        ]
      },
      {
        id: 'match-bodyparts',
        type: 'match',
        label: 'चित्र से मिलाओ - शरीर के अंग',
        locked: 'true',
        commonData: {
          title: 'चित्र को उनके पेहले अक्षर से जोड़िए',
          rightImgType: 'custom',
          big: true
        },
        data: [
          `का, ear
          आं, eye
          पै, foot
          बा, hair`,
  
          `हा, hand
          मुं, mouth
          ना,nose
          दां, tooth`
        ]
      },
      {
        id: 'match-house',
        type: 'match',
        label: 'चित्र से मिलाओ - मकान',
        locked: 'true',
        commonData: {
          title: 'चित्र को उनके पेहले अक्षर से जोड़िए',
          rightImgType: 'custom',
          big: true
        },
        data: [
          `आ, man
          औ, woman
         दा, grandfather
         ग, flower-pot
         छ, umbrella`,

         `द, door
         झा, broom
         खि, window 
         बा,  bucket`,

         `सा, soap
         त,  pillow
         टो,  basket
         क,  dustbin`,
         
          `म, house
          मे, table
          बि, bed
          मो, candle
          कु, chair`,
          
          `अ, shelf
          ब, baby
          ल, boy
          आ, man`,
          
                  `गें, ball
          ऐ, glasses
          घ, clock
          द, door
          न, tap
        `
        ]
      },
      {
        id: 'match-dress',
        type: 'match',
        label: 'चित्र से मिलाओ - पोशाक',
        locked: 'true',
        commonData: {
          title: 'चित्र को उनके पेहले अक्षर से जोड़िए',
          rightImgType: 'custom',
          big: true
        },
        data: [
          ` जू, shoe
          मौ, sock
          प,  pyjama
          द, gloves`, 

          `दु, scarf
          क, shirt
          टो, hat
          प, trousers`
        ]
      },
      {
        id: 'match-kitchen',
        type: 'match',
        label: 'चित्र से मिलाओ - रसोईघर',
        locked: 'true',
        commonData: {
          title: 'चित्र को उनके पेहले अक्षर से जोड़िए',
          rightImgType: 'custom',
          big: true
        },
        data: [
          `चू , stove
          कां, fork
          छु, knife
          क, pan`, 
        
          `च, spoon
          म, pot
          झा, broom
          था, plate
          न, tap`,

          `ढ, lid
          ची, sugar
          क, bowl
          मां, meat
          न, salt`,

          `मि, sweets
          रो, bread
          र, juice
          आ, flour
          दा, lentils
          चा, rice`
        ]
      },
      {
        id: 'match-nature',
        type: 'match',
        label: 'चित्र से मिलाओ - प्रकृति',
         lockAfter:2,
        commonData: {
          title: 'चित्र को उनके पेहले अक्षर से जोड़िए',
          rightImgType: 'custom',
          big: true
        },
        data: [
          `सू, sun
  चां, moon
  बा, rain
  ता, star
  दू, milk`,
  
          `अं, ring
  ह, bone
  घं, bell
  प, bird
  फ, fruits`, 

  `प, leaf
  दु, world
  ओ, water-drop
  झ, waterfall
  घो, nest`
        ]
      },
      {
        id: 'match-others',
        type: 'match',
        label: 'चित्र से मिलाओ',
         lockAfter:2,
        commonData: {
          title: 'चित्र को उनके पेहले अक्षर से जोड़िए',
          rightImgType: 'custom',
          big: true
        },
        data: [
          `अं, ring
  ह, bone
  घं, bell
  शं, conch`,
  
          `ढो, drums
  पां, five
  खा, food
  प, kite
  रा, king`,
  
          `सी, ladder 
  प, leaf
  ऋ, rishi
  च, wheel`
        ]
      }
    ]
  };
