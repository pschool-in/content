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
          donkey| गधा | _धा| ग, घा, झि, टा  
          leopard| तेंदुआ| _दुआ| तें, थु, दि, तु`,
  
          `mongoose| नेवला| _वला| ने, खी, थी, ठी
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
           hyena| लकड़बग्धा| _कड़बग्धा| ल, क, ड़, ग्धा
           jackal| सियार| _यार| सि, स, या, र
           polarbear| ध्रुवीय भालू| _वीय भालू| ध्रु, ध्र, ध्, व`,

           `pocupine| साही| _ही| सा, स, झ, गु
           prawn| झींगे| _गे| झीं, झी, झ, गे
           python| अजगर| _जगर| अ, ज, ग,र`
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
        rooster| मुर्गा| _र्गा| मु, घ, झी, जु`,

        `woodpecker| कठफोड़वा| _ठफोड़वा| क, त, यै, घ
        eagle| चील| _ल| ची, च, ल, क
        cuckoo| कोयल| _यल| को, य, क, ची
        swan| हंस| _स| हं, ह, स, को
        pheasant| तीतर| _तर| ती, त, र, क
        falcon| बाज़| _ज़| बा, ब, ती, त`
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
          helicopter| घिरनीदार विमान| _रनीदार विमान| घि, नी, दा, र`,

          `lorry| लारी| _री| ला, ल, री, र
          auto| रिक्शा|  _क्शा|  रि, क्श, र, क्
          bullock-cart| बैलगाड़ी| _लगाड़ी| बै, ब, गा, ड़ी
          horse-carriage| घोड़ागाड़ी| _ड़ागाड़ी| घो, ड़ा, गा, ड़ी`
          
        ]
      },
  
      {
        type: 'completeWord',
        label: 'मकान',
        id: 'house',
        commonData: {
          images: 'custom',
          title: 'लापता अक्षरों को भरें।',
          lang: 'hi'
        },
        data: [
          `house| मकान| _कान|  म, कि, घा, खू
          table| मेज| _ज| मे, गु, झे, णु	
          bed| बिस्तर| _स्तर| बि, खू, णौ, ठी
          candle| मोमबत्ती| _मबत्ती| मो, डे, ठी, झू	
          chair| कुर्सी| _र्सी| कु, झे, गु, ठी`,
  
          `baby| बच्चा| _च्चा| ब, ल, झौ, आ
          boy| लड़का|  _ड़का| ल, ठा, झौ, कि
          girl| लड़की| _ड़की| ल, चू, का,गु	
          man| आदमी | _दमी | आ, डि, ची, डे`,
  
          `shelf| अलमारी|  _लमारी|  अ, चा, जि, टु
          ball| गेंद| _द| गें, ध, थी, ये
          glasses| ऐनक| _नक|  ऐ, भ, मा, यि
          clock| घड़ी | _ड़ी | घ, तू, ठ, थ
          door| दरवाजा| _रवाजा| द, र, वा, जा
          broom| झाड़ू| _ड़ू| झा, झ, ड़, जा`
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
          ruler| मापन| _पन|  मा, थौ, घै, थी	
          scissors| कैंची| _ची| कैं, थी, ता, दी
          book| किताब | _ताब | कि, फे, णू, घो	
          crayons| चित्रांकनी| _त्रांकनी | चि, घि, त, झो`
        }
      },
      {
        type: 'completeWord',
        label: 'रसोईघर',
        id: 'kitchen',
        data: {
          images: 'custom',
          title: 'लापता अक्षरों को भरें।',
          lang: 'hi',
          text: `stove| चूल्हा| _ल्हा |चू, चा, चे, चै	 
          fork| कांटा| _टा |कां, कै, को, कौ
          knife| छुरी| _री| छु, छा, छि, छे	
          pan| कड़ाही| _ड़ाही |क, कि, की, कु	
          spoon | चम्मच| _म्मच| च, चू, चा, चे
          pot| मटका| _टका |म, मू,	मे, मै
          butter| मक्खन| _क्खन| म, मा, मि, मी
          lid| ढक्कन| _क्कन| ढ, क, न, ध
          tap| नल| _ल| न, ल, भ, ब
          plate| थाली| _ली| था, ल, वा, जा`
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
          trowel| करनी| _रनी| क, झा, णु, दै`,
  
          `awl| सूआ | _आ | सू, धी, बी, फे
          easel| चित्रफलक | _त्रफलक| चि, थी, तो,दू	 
          hacksaw| लोहा-आरी| _हा-आरी| लो, थी, रे, रौ
          scalpel| छुरी | _री| छु, तु, चि, गु
          screw| पेंच| _च| पें, पे, प, गु
          screwdriver| पेंचकस| _चकस| पें, पे, प, गु`
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
          ग, donkey 
          तें, leopard
          भे, wolf`,
  
          `ने, mongoose
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
          सा, pocupine 
          झीं, prawn
          अ, python`
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
          मु, rooster
          क, woodpecker`,

          `को, cuckoo
          हं, swan
          ती, pheasant
          बा, falcon`
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
  घो, horse-carriage
  `
        ]
      },
  
      {
        id: 'match-house',
        type: 'match',
        label: 'चित्र से मिलाओ - मकान',
        commonData: {
          title: 'चित्र को उनके पेहले अक्षर से जोड़िए',
          rightImgType: 'custom',
          big: true
        },
        data: [
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
  न, tap`
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
  मा, ruler
  ब, schoolbag`,
  
          `कैं, scissors
  कि, book
  चि, crayons`
        ]
      },
      {
        id: 'match-kitchen',
        type: 'match',
        label: 'चित्र से मिलाओ - रसोईघर',
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
  झा, broom`
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
  आ, saw`,
  
          `चि, easel
  लो, hacksaw
  छु, scalpel
  कु, spade
  दू, telescope`
        ]
      }
    ]
  };
