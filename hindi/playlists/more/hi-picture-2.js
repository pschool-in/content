export default {
    label: 'चित्र',
    id: 'hi-picture-2',
    img: 'image',
    list: [
      // This is for class 3 and below
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
          ` leopard| तेंदुआ| _दुआ| तें, थु, दि, तु
           mongoose| नेवला| _वला| ने, खी, थी, ठी
           mosquito| मच्छर | _च्छर| म, ढि, दै,  चा
           wolf| भेड़िया| _,ड़िया| भे, दी, फी, दै
           cockroach| तिलचट्टा| _लचट्टा| ति, श्री, दी, तौ 	
           lizard| छिपकली| _पकली| छि, ठै, धु, यी 
           rabbit| खरगोश| _रगोश| ख, तै, णी, का`,

           `zebra| जेबरा| _बरा| जे, ने, खी, थी
           shark| हाँगर| _गर| हाँ, गा, ढि, छी
           dragonfly| व्याध-पतंग| _ध-पतंग| व्या, ख, तै, णी
           winged-termites| दीमक| _मक| दी, तौ, खी, थी
           kangaroo| कंगेरू| _गेरू| कं, ने, खी, थी
           garden-lizard| उद्यान छिपकली| _द्यान छिपकली| उ, ग, घा, टा`,

           `alligator| घड़ियाल| _,ड़ियाल| घ, ग, घा, टा
           baboon| लंगूर| _गूर| लं, ल, गू, र
           antelope| बारहसिंगा| _रहसिंगा| बा, ब, र, ह
           boar| जंगली सूअर| _गली सूअर| जं, ज, ग, सू
           bison| जंगली भैसा| _गली भैसा| जं, ज, ग, भै
           bull| सांड| _ड| सां, ड, सा, स`,

           `bug| खटमल| _टमल| ख, ट, म, ल
           cricket| झिंगुर| _गुर| झिं, झि, झ, गु
           chameleon| गिरगिट| _रगिट| गि, ग, ट, र
           hyena| लकड़बग्घा| _कड़बग्घा| ल, क, ड़, ग्धा
           jackal| सियार| _यार| सि, स, या, र
           polarbear| ध्रुवीय भालू| _वीय भालू| ध्रु, ध्र, ध्, व`,

           `porcupine| साही| _ही| सा, स, झ, गु
           prawn| झींगे| _गे| झीं, झी, झ, गे
           python| अजगर| _जगर| अ, ज, ग, र
           bee|मधुमक्खी| _धुमक्खी| म, ध, क, र
           goldfish|सुनहरी मछली| _नहरी मछली| सु, न, म, छ`,

           `seahorse|समुद्री घोड़े| _मुद्री घोड़े| स, न, म, छ
           mole|छछूँदर| _छूँदर| छ, स, न, म 
           spider|मकड़ी| _कड़ी| म, क, ड़, स
           caterpillar|इल्ली| _ल्ली| इ, क, ड़, स
           earthworm|केंचुआ| _चुआ| कें, के, क, चु`
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
          `rooster| मुर्गा| _र्गा| मु, घ, झी, जु
        woodpecker| कठफोड़वा| _ठफोड़वा| क, त, यै, घ
        eagle| चील| _ल| ची, च, ल, क
        cuckoo| कोयल| _यल| को, य, क, ची
        swan| हंस| _स| हं, ह, स, को`,

        `pheasant| तीतर| _तर| ती, त, र, क
        falcon| बाज़| _ज़| बा, ब, ती, त
        bulbul|बुलबुल| _लबुल| बु, बा, ब, ती
       spotted-dove| चित्तीदार कबूतर| _त्तीदार कबूतर| चि, ची, च, ल
       seagull|सामुद्रिक चिड़िया| _मुद्रिक चिड़िया| सा, म, ची, च`
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
          `corianderleaf|धनिएके पत्ते| _निएके पत्ते| ध, णी, थे, ट
          curryleaf| करी पत्ता| _री पत्ता| क, का, छ, ड
          drumstick| सहजन| _हजन| स, ज, को, ब    
          greenpeas| मटर | _टर | म, च, ढि, का
          ladies-finger| भिन्डी| _न्डी| भि, ढे, टी, णि`,
 
          `mintleaf| पुदीना | _दीना| पु, गू, ढा, घौ
          peanut| मूंगफली| _गफली| मूं, आ, ई, तो
          raddish| मूली| _ली| मू, मु, तु, खौ
          spinach| पालक| _लक| पा, कु, खू, झो
          tulsi|तुलसी| _लसी| तु, ल, कु, खू
          bottlegourd|लौकी| _की| लौ, की, तु, ल`,
 
          `turnip| शलगम| _लगम| श, ल, ग, म
          chickpea| चना| _ना| च, न, ग, म
          fenugreek| हरी मेथी| _री मेथी| ह, र, मे, थ
          mustard-greens| सरसों पत्ता| _रसों पत्ता| स, र, सो, प
          turmeric| हल्दी| _ल्दी| ह, ल्, सो, प
          sweet-potato| शकरकंद| _करकंद| श, क, र, कं`,

          `ashgourd|रखिया| _खिया| र, मे, थ, ह
          broad-beans|सेम फली| _म फली| से, स, र, सो
          snake-gourd|चिचिण्डा| _चिण्डा| चि, च, न, ग
          cluster-beans|गँवार फली| _वार फली| गँ, न, ग, म
          kohlrabi|बन्द-गोभी| _न्द-गोभी| ब, ह, र, मे
          ivygourd|कुंदरू| _दरू| कुं, कु, खू, झो
          ridgegourd|तुरई| _रई| तु, ल, कु, खू`
        ]
      },
      {
        type: 'completeWord',
        label: 'फूल',
        id: 'flowers',
        commonData: {
            images: 'custom',
            title: 'लापता अक्षरों को भरें।',
            lang: 'hi'
          },
          data: [
         `rose| गुलाब | _लाब|गु, ही, त्रु, भो
          lotus| कमल| _मल| क, लू, ही, त्रु  
          sunflower| सूरजमुखी | _रजमुखी| सू, त्रु, लू , भो  
          marigold| गेंदा | _दा | गें, सि, सै, नो
          hibiscus| गुडहल | _डहल| गु, ही, त्रु, भो  
          jasmine| चमेली| _मेली | च, त्रु, सै, सि`,
 
          `daisy| गुलबहार| _लबहार| गु, ल, ब, ह
          periwinkle| सदाबहार| _दाबहार| स, द, हा, र
          water-lily| नीलकमल| _लकमल| नी, न, क, म
          gulmohar| गुलमोहर| _लमोहर| गु, ल, मो, ग
          poppy| खसखस| _सखस| ख, स, मो, ग
          pansy| बनफूल| _नफूल| ब, फ, ल, ग`,
 
          `mogra| मोगरा| _गरा| मो, ग, रा, म
          lily| कुमुदनी| _मुदनी| कु, मु, द, क
          magnolia| चम्पा| _म्पा| च, क, लू, ह
          daffodil| नरगिस| _रगिस| न, र, ग, स`
        ]
    },
      {
        type: 'completeWord',
        label: 'वाहन',
        id: 'vehicles',
        commonData: {
            images: 'custom',
            title: 'लापता अक्षरों को भरें।',
            lang: 'hi'
        },
        data: [
          `aeroplane| हवाईजहाज | _वाईजहाज| ह, पू, म, है 
          boat| नाव | _व | ना, हे, शं, पू
          car| गाड़ी | _ड़ी | गा, यी, हौ, नि	
          motorbike| मोटरसाइकिल| _टरसाइकिल|मो, क, छा, जो		
          ship| समुंद्रीजहाज | _मुंद्रीजहाज | स, झ, छे, झं	 
          train| रेलगाडी| _लगाडी| रे, झ, झू, खि`,

          `ambulance| रोगीवाहन | _गीवाहन |रो, गी, गे, जी
          cart| हाथगाडी | _थगाडी | हा, अ,  खि, ळी
          excavator| खोदकमशीन| _दकमशीन | खो, झी, क,अ
          fire-engine|दमकल | _मकल| द, खि, गा, कु 
          cycle| साइकिल| _इकिल| सा, स, इ, कि
          helicoptor| घिरनीदार विमान| _रनीदार विमान| घि, नी, दा, र`,

          `lorry| लारी| _री| ला, ल, री, र
          auto| रिक्शा|  _क्शा|  रि, क्श, र, क्
          bullock-cart| बैलगाड़ी| _लगाड़ी| बै, ब, गा, ड़ी
          horse-carriage| घोड़ागाड़ी| _ड़ागाड़ी| घो, ड़ा, गा, ड़ी`
          
        ]
      },
      {
        type: 'completeWord',
        label: 'विद्यालय',
        id: 'school',
        data: {
          images: 'custom',
          title: 'लापता अक्षरों को भरें।',
          lang: 'hi',
          text: `eraser| रबड़| _बड़ | र, खा, कौ, घै	
          pen| कलम|  _लम| क, घै, थो, दी
          ruler| पेमाना| _माना| पे, मा, थौ, घै
          scissors| कैंची| _ची| कैं, थी, ता, दी
          book| किताब | _ताब | कि, फे, णू, घो	
          crayons| चित्रांकनी| _त्रांकनी | चि, घि, त, झो
          waterbottle| पानी की बोतल| _नी की बोतल| पा, न, क, बो
          calculator| गणना यंत्र| _णना यंत्र| ग, ण, ना, यं
          color-pencils | रंग पेंसिल| _ग पेंसिल| रं, र, यं, य`
        }
      },
      {
        type: 'completeWord',
        label: 'उपकरण',
        id: 'tools',
        commonData: {
          images: 'custom',
          title: 'लापता अक्षरों को भरें।',
          lang: 'hi'
        },
        data: [
          `axe| कुल्हाडी| _ल्हाडी| कु, झो, फे, टू
          balance| तराज़ू| _राज़ू|  त, मि, फी, थी
          blackboard| श्यामपट| _यामपट| श्, मि, झं, मू 
          microscope| सूक्ष्मदर्शी|_क्ष्मदर्शी | सू, भी, क्षा, मु
          needle| सुई| _ई| सु, झि, ठू, झं`,
  
          `plough| हल| _ल| ह, टु, थी, चू
          saw| आरा| _रा| आ, फु, थी, ने	
          spade| कुदाली| _दाली| कु, झै, झः, पी
          telescope| दूरबीन| _रबीन|  दू, ची, जै, घू
          trowel| करनी| _रनी| क, झा, णु, दै
          flute|बांसुरी| _सुरी| बां, बा, ब, र
          tabla|तबला| _बला| त, ब, ल, बा`,
  
          `awl| सूआ | _आ | सू, धी, बी, फे
          easel| चित्रफलक | _त्रफलक| चि, थी, तो,दू	 
          hacksaw| लोहा-आरी| _हा-आरी| लो, थी, रे, रौ
          scalpel| छुरी | _री| छु, तु, चि, गु
          screw| पेंच| _च| पें, पे, प, गु
          screwdriver| पेंचकस| _चकस| पें, पे, प, गु`
        ]
      },
      {
        type: 'completeWord',
        label: 'नौकरियां',
        id: 'jobs',
        commonData: {
          images: 'custom',
          title: 'लापता अक्षरों को भरें।',
          lang: 'hi'
        },
        data: [
          `astronaut|अंतरिक्ष यात्री| _तरिक्ष यात्री| अं, अ, त, य
          fisherman|मछुआरा| _छुआरा| म, छ, आ, रा 
          postman|डाकिया| _किया| डा, ड, क, या
          teacher|शिक्षक| _क्षक| शि, क्ष, श, या
          blacksmith|लोहार| _हार| लो, हा, र, त`,

          `cobbler|मोची| _ची| मो, ची, म, छ
          goldsmith|सुनार| _नार| सु, ना, र, स
          potter|कुम्हार| _म्हार| कु, ड, क, या
          weaver|जुलाहा| _लाहा| जु, ला, हा, ची
          carpenter|बढ़ई| _ढ़ई| ब, ढ़, ई, ची`,
          
         `nurse|दाई| _ई| दा, द, ढ़, ई
          chef|बावर्ची| _वर्ची| बा, व, र्, ब
          doctor|चिकित्सक| _कित्सक| चि, ची, म, छ
          soldier|सैनिक| _निक| सै, न, क, स
          barber|नाई| _ई| ना, ई, न, म
          washerman|धोबी| _बी| धो, ब, ध, बी`
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
         
       `bow| धनुष| _नुष| ध, न, ष, द
       arrow| बाण| _ण| बा, ब, ट, ण
       chariot| रथ| _थ| र, थ, ब, ट
       damaru| डमरू| _मरू| ड, म, र, ट
       flower-pot| गमला| _मला| ग, च, ब, भि
       hexagon| षटकोण| _टकोण| ष, ट, क, ण`,
 
       `warrior| योद्धा| _द्धा| यो, योद्, य, द
       park| बाग| _ग| बा, ग, ब, य
       garden| उद्यान | _द्यान | उ, द्न, द्य ,न  
       pouch| थैली| _ली| थै, ल, थ, द्य
       trident| त्रिशूल | _शूल| त्रि, त्र, त, त्
       umbrella| छतरी| _तरी| छ, त, र, च`,
 
       `vegetables| सब्ज़ियाँ| _ब्ज़ियाँ| स, म, र, ट
       yagna| यज्ञ| _ज्ञ| य, ज्ञ, झ, र
       touch-me-not| छुई मुई| _ई मुई| छु, मु, ई, छ
       dhol|ढोल| _ल| ढो, ल, छु, मु
       palanquin|पालकी| _लकी| पा, ल, क, प
       medicine|दवा| _वा| द, ढो, ल, छ`,

       `balloon|गुब्बारा| _ब्बारा| गु, ल, छु, मु 
       box|डिब्बा| _ब्बा| डि, ठे, ठ, ड
       coin|सिक्का| _क्का| सि, च, ब, भि 
       stick| डंडा| _डा| डं, डा, ड, ट`,

       `yarn-ball| ऊन| _न| ऊ, झ, र, न
       trolley| ठेला| _ला| ठे, ठ, ड, ट
       top| लट्टू| _ट्टू| ल, ठे, ठ, ड
       twig| टहनी| _हनी| ट, ह, न, त`
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
         
          `तें, leopard
          भे, wolf
          ने, mongoose
          म, mosquito
          ति, cockroach
          छि, lizard
          ख, rabbit`,

          `घ, alligator
          लं, baboon
          बा, antelope
          जं, boar
          सां, bison`,

         `ख, bug
         झिं, cricket
         गि, chameleon
         ल, hyena
         सि, jackal`,

         `ध्रु, polarbear
          सा, porcupine 
          झीं, prawn
          अ, python`,

          `स, seahorse
          छ, mole
          म, spider
          इ, caterpillar
          कें, earthworm`
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
          `क, woodpecker
          को, cuckoo
          हं, swan
          ती, pheasant
          बा, falcon`,

          `बु, bulbul
          चि, spotted-dove
          सा, seagull`
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
          `ध, corianderleaf
  क, curryleaf
  स, drumstick
  म, greenpeas
  भि, ladies-finger`,
 
          `पु, mintleaf
  मूं, peanut
  मू, raddish
  पा, spinach
  श, sweet-potato
  तु, tulsi`,
 
  `श, turnip
  च, chickpea
  ह, fenugreek
  स, mustard-greens
  लौ, bottlegourd`,

  `र, ashgourd 
  से, broad-beans
  चि, snake-gourd
  गँ, cluster-beans
  ब, kohlrabi
  कुं, ivygourd
  तु, ridgegourd`
        ]
      },
      {
        id: 'match-flowers',
        type: 'match',
        label: 'चित्र से मिलाओ - फूल',
        locked: 'true',
        commonData: {
          title: 'चित्र को उनके पेहले अक्षर से जोड़िए',
          rightImgType: 'custom',
          big: true
        },
        data: [
          `गु, rose
          क, lotus
          सू, sunflower
          गें, marigold
          च, jasmine`,
 
          `गु, daisy
          स, periwinkle
          नी, water-lily
          ख, poppy
          ब, pansy`,
 
          `मो, mogra
          कु, lily
          च, magnolia
          न, daffodil`
        ]
      },
      {
        id: 'match-vehicles',
        type: 'match',
        label: 'चित्र से मिलाओ - वाहन',
        commonData: {
          title: 'चित्र को उनके पेहले अक्षर से जोड़िए',
          rightImgType: 'custom',
          big: true
        },
        data: [
          `ह, aeroplane
                  ना, boat
                  गा, car
                  रे, train
                  स, ship`,
  
          `
  रो, ambulance
  हा, cart
  खो, excavator
  द, fire-engine
  रि, auto
  बै, bullock-cart
  घो, horse-carriage`
        ]
      },
      {
        id: 'match-school',
        type: 'match',
        label: 'चित्र से मिलाओ - विद्यालय',
        locked: 'true',
        commonData: {
          title: 'चित्र को उनके पेहले अक्षर से जोड़िए',
          rightImgType: 'custom',
          big: true
        },
        data: [
          `र, eraser
  क, pen 
  पे, ruler
  ब, schoolbag`,
  
          `कैं, scissors
  कि, book
  चि, crayons
  ग, calculator`
        ]
      },
      {
        id: 'match-tools',
        type: 'match',
        label: 'चित्र से मिलाओ - उपकरण',
        locked: 'true',
        commonData: {
          title: 'चित्र को उनके पेहले अक्षर से जोड़िए',
          rightImgType: 'custom',
          big: true
        },
        data: [
          `कु, axe
  त, balance
  श्, blackboard 
  सु, needle
  पें, screw`,
  
          `ता, thermometer
  क, trowel
  टे, awl 
  ह, plough 
  आ, saw
  बां, flute`,
  
          `चि, easel
  लो, hacksaw
  छु, scalpel
  कु, spade
  दू, telescope
  त, tabla`
        ]
      },
      {
        id: 'match-jobs',
        type: 'match',
        label: 'चित्र से मिलाओ - नौकरियां',
        locked: 'true',
        commonData: {
          title: 'चित्र को उनके पेहले अक्षर से जोड़िए',
          rightImgType: 'custom',
          big: true
        },
        data: [
          `अं, astronaut
          म, fisherman
          डा, postman
          शि, teacher
          लो, blacksmith`,

         `मो, cobbler
          सु, goldsmith
          कु, potter
          जु, weaver
          ब, carpenter`, 

          `दा, nurse
          बा, chef
          चि, doctor
          सै, soldier
          ना, barber
          धो, washerman`
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
  `ध, bow
  बा, arrow
  र, chariot
  ड, damaru
  ग, flower-pot
  ष, hexagon`,
 
  `यो, warrior
  बा, park
  उ, garden
  थै, pouch
  त्रि, trident
  छ, umbrella`,
 
  `स, vegetables
  ओ, water-drop
  झ, waterfall
  य, yagna
  छु, touch-me-not`,
 
  `घो, nest
  डं, stick
  ऊ, yarn-ball
  ठे, trolley
  ल, top
  ट, twig`,

  `ढो, dhol
  पा, palanquin
  द, medicine
  गु, balloon
  डि, box
  सि, coin`
        ]
      }

    ]
  };
