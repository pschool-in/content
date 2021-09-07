export default {
  label: 'चित्र',
  id: 'hi-picture',
  img: 'image',
  list: [
    {
      type: 'completeWord',
      label: 'जानवर',
      id: 'animals',
      commonData: {
        images: 'custom',
        lang: 'hi'
      },
      data: [
        `cat| बिल्ली | _ल्ली | बि, इ, ऊ, घ 
        dog| कुत्ता | _त्ता | कु, ग, आ, इ 
        goat| बकरी | _करी| ब, द, ध, थ
        sheep| भेड् | _ड्|  भे,अ, ख, पी   
        horse| घोडा | _डा | घो, ध, न, प  
        pig| सुअर | _अर | सु, य, र, ल 
        elephant| हाथी  | _थी | हा, घी, कै, ध 
        lion| शेर | _र | शे, डि ,थी , ढि  
        monkey| बंदर | _दर | बं, थि , झु, ठि 
        tiger| बाघ| _घ| बा, ता, थी, ची `,

        `hippo| दरियाई घोड़ा|_रियाई घोड़ा | द , थो, जी, घु	 
        rhino| गैंडा| _डा| गैं , णू, तै ,  घा
        fox| लोमड़ी | _मड़ी | लो, लै, डी , टा	 
        crocodile| मगरमच्छ | _गरमच्छ | म, डि, णी, झी	  
        bear| भालू | _लू | भा, तू,  घि, ग	
        camel| ऊंट | _ट | ऊं , छा,  तू , गा
        fish| मछली | _छली| म , खु,  झा , घा
        frog| मेंडक | _डक | में , गं, ठू , ख 
        crab| केकड़ा | _कड़ा | के , ठा , डि,  नि
        snake | साँप | _प | साँ, सा, झा, ख  
        squirrel| गिलहरी| _लहरी| गि, ले, ची, द्वि`,

        `tortoise| कछुआ|  _छुआ| क, झा, घि, की
        rat| चूहा | _हा | चू , क्षु, षु , वू 
        ant| दुनिया | _निया| दु , तै, छं , ची
        fly| मक्खी| _क्खी |  म , थो, टौ , षि 
        bat| चमगादड़ |_मगादड़ | च, धु, णा, बु
        buffalo|  भेंस| _स| भें, ख,  चि, गा	
        butterfly|  तितली| _तली| ति, यै, खि, खं
        cow|  गाय| _य| गा, ढि, छी, खे
        donkey| गधा | _धा| ग, घा, झि, टा  
        kangaroo| कंगारू| गारू| कं, डी,  गू, टा 
        leopard| तेंदुआ| _दुआ| तें, थु, दि, तु`,

        `mongoose| नेवला| _वला| ने, खी, थी,  ठी
         mosquito| मच्छर | _च्छर| म, ढि, दै,  चा
         wolf| भेड़िया| _ड़िया| भे, दी, फी, दै
         cockroach| तिलचट्टा| _लचट्टा| ति, श्री, दी, तौ 	
         lizard| छिपकली| _पकली| छि, ठै, धु, यी 
         rabbit| खरगोश| _रगोश| ख, तै, णी, का`
      ]
    },
    {
      type: 'completeWord',
      label: 'पक्षी',
      id: 'birds',
      commonData: {
        images: 'custom',
        lang: 'hi'
      },
      data: [
        `crow| कौवा |_वा|  कौ, वू, यु, षि 
      dove| कबूतर | _बूतर | क , षि,  डि, ब
      duck| बतख़ | _तख़| ब , टौ, त , णा
      hen| मुर्गी | _र्गी | मु , त्रि,  क्षु , वू 
      parrot| तोता | _ता| तो, षि,  षु, ठा
      peacock| मोर | _र | मो , टौ,  श्री , त्रि  
      sparrow| गौरेया| _रेया| गौ, णा , सी , त्रि 
      chick| चूजा| _जा| चू, ढि, ठै, फि
      crane| सारस| _रस| सा, तै, यु, सी
      vulture| गिद्ध| _द्ध| गि, णा, यै, फी`,

        `flamingo| मराल |_राल | म, णू, थो, टी
      kingfisher| रामचिरैया| _मचिरैया| रा, जु, खं, तौ	
      myna| मैना | _ना | मै, तै, यै, गि
      ostrich| शुतरमुर्ग| _तरमुर्ग| शु, फि, तै, खि 
      owl| उल्लू| _ल्लू| उ, णू, थो, टी
      rooster| मुर्गा| _र्गा| मु, घ, झी, जु
      woodpecker| कठफोड़वा| _ठफोड़वा| क, त, यै, घ`
      ]
    },
    {
      type: 'completeWord',
      label: 'सब्जियां & फल ',
      id: 'fruits',
      commonData: {
        images: 'custom',
        lang: 'hi'
      },
      data: [
        `apple| सेब | _ब| से, घि, खे, च
        grapes| अंगूर | _गूर | अं, जा, टा, ढ
        banana| केला |_ला| के, तं, को, डं
        guava| अमरूद | _मरूद| अ, ण, शि, पू
        jackfruit| कटहल | _टहल| क, घे, थौ, डा
        mango| आम | _म| आ, चू, डी, यि	
        orange| संतरा | _तरा | सं, डी, मी, क्षू
        papaya|  पपीता |_पीता | प, गो, कु, तु
        pineapple| अननास | _ननास| अ, पू,  त्रे, शि
        pomegranate| अनार | _नार| अ, टु	, डा, ती`,

        `watermelon| तरबूज | _रबूज| त, झा, ठ, थौ
        fig| अंजीर| _जीर| अं, भि, व, क्षै
        custard-apple| शरीफा| _रीफा| श, ळो, क्षि, सा
        plum |बेर | _र| बे, या, फौ, शी	
        dates| खजूर| _जूर| ख, क्षै, वि, फे
        muskmelon |खरबूजा | _रबूजा | ख, डी, ब, मा`
      ]
    },
    {
      type: 'completeWord',
      label: 'सब्जियां & फल ',
      id: 'vegetables',
      commonData: {
        images: 'custom',
        lang: 'hi'
      },
      data: [
        `carrot| गाजर | _जर | गा, चा, टा, खा	
        beetroot| चुकंदर |_कंदर| चु, खु, झु, डु
        onion| प्याज | _याज| प्, जू, चु, झु	  
        tomato| टमाटर | _माटर| ट, टे, खु, ह	  
        potato| आलू | _लू| आ, कै, गू, टे, घा			 
        cabbage| पत्ता गोभी | _त्ता गोभी | प, घा, ख, ट	   
        cauliflower| गोभी| _ भी| गो, झौ, झा, टि  	
        corn| मक्का | _क्का | म, छी, चू, का
        cucumber| खीरा | _रा | खी, शी, से, यो 
        garlic| लहसुन | _हसुन | ल, र , हि, षु`,

        `ginger| अदरक | _दरक| अ, ऊ, ऐ, औ	  
        pumpkin| कददू   | _द्दू  | क, रे, षे, भ
        almond|  बादाम|  _दाम| बा, ढि, कौ, क
        beans| फलियां| _लियां| फ, ध, ब, य
        bitter-gourd| करेला| _रेला| क, भा, मू, घू
        brinjal| बैंगन | _गन| बैं, क, ओ, खौ
        capsicum| शिमला मिर्च| _मला मिर्च| शि, णु, चु, ठे
        cashewnut| काजू | _जू| का, झा, घै, जा
        chilli| मिर्च| _र्च| मि, झो, जै, खा
        coconut| नारियल| _रियल| ना, ठि, टी, तौ`,

        `corianderleaf|धनिएके पत्ते| _निएके पत्ते| ध, णी, थे, ट	
        curryleaf| करी पत्ता| _री पत्ता| क, का, छ, ड
        drumstick| ढोलकाछड़ी| _लकाछड़ी| ढो, ज, को, ब		
        greenpeas| हरी मटर | _री मटर | ह, च, ढि, का
        ladies-finger| भिन्डी| _न्डी| भि, ढे, टी, णि
        mintleaf| पुदीना | _दीना| पु, गू, ढा, घौ
        peanut| मूंगफली| _गफली| मूं, आ, ई, तो
        raddish| मूली| _ली| मू, मु, तु, खौ
        spinach| पालक| _लक| पा, कु, खू, झो`
      ]
    },

    {
      type: 'completeWord',
      label: 'फूल',
      id: 'flowers',
      data: {
        images: 'custom',
        lang: 'hi',
        text: `rose| गुलाब | _लाब|गु, ही, त्रु, भो	
        lotus| कमल| _मल| क, लू, ही, त्रु	
        sunflower| सूरजमुखी | _रजमुखी| सू, त्रु, लू , भो	
        marigold| गेंदा | _दा | गें, सि, सै, नो	
        hibiscus| हिबिस्कुस | _बिस्कुस| हि, ही, त्रु, भो	
        jasmine| चमेली| _मेली | च, त्रु, सै, सि`
      }
    },
    {
      type: 'completeWord',
      label: 'वाहन',
      id: 'vehicles',
      data: {
        images: 'custom',
        lang: 'hi',
        text: `aeroplane| विमान | _मान| वि, ळी, म, है 
        boat| नाव | _व | ना, हे, शं, पू
        car| गाड़ी | _ड़ी | गा, यी, हौ, नि	
        cycle| चक्र | _क्र | च, खु, ये, हा 
        motorbike| मोटरसाइकिल| _टरसाइकिल|मो, क, छा, जो		
        ship| समुंद्री जहाज | _मुंद्रीजहाज | स, झ, छे, झं	 
        train| रेल गाडी| _लगाडी| रे, झ, झू, खि
        ambulance| रोगीवाहन | _गीवाहन |रो, गी, गे, जी
        cart| हाथगाडी | _थगाडी | हा, अ,  खि, ळी
        excavator| खोदकमशीन| _ दकमशीन | खो, झी, क,अ
        fire-engine|दमकल | _मकल| द, खि, गा, कु`
      }
    },

    {
      type: 'completeWord',
      label: 'मकान',
      id: 'house',
      commonData: {
        images: 'custom',
        lang: 'hi'
      },
      data: [
        `house| मकान| _कान|  म, कि, घा, खू
        table| मेज| _ज| मे, गु, झे, णु	
        bed| बिस्तर| _स्तर| बि, खू, णौ, ठी
        candle| मोमबत्ती| _मबत्ती| मो, डे, ठी, झू	
        chair| कुर्सी| _र्सी| कु, झे, गु, ठी
        shelf| अलमारी|  _लमारी|  अ, चा, जि, टु
        baby| बच्चा| _च्चा| ब, ल, झौ, आ
        boy| लड़का|  _ड़का| ल, ठा, झौ, कि
        girl| लड़की| _ड़की| ल, चू, का,गु	
        man| आदमी | _दमी | आ, डि, ची, डे`,

        `woman| स्री| _री| स्, ठु, णा, तो
        ball| गेंद| _द| गें, ध, थी, ये
        glasses| ऐनक| _नक|  ऐ, भ, मा, यि
        clock| घड़ी | _ड़ी | घ, तू, ठ, थ`
      ]
    },
    {
      type: 'completeWord',
      label: 'विद्यालय',
      id: 'school',
      data: {
        images: 'custom',
        lang: 'hi',
        text: `eraser| रबड़| _बड़ | र, खा, कौ, घै	
        pen| कलम|  _लम| क, घै, थो, दी
        ruler| मापन| _पन|  मा, थौ, घै, थी	
        scissors| कैंची| _ची| कैं, थी, ता, दी
        sharpener| पेंसिल ताराश| _सिल ताराश| पें, घै, खा, कौ	
        book| किताब | _ताब | कि, फे, णू, घो	
        crayons| कडियापेंसिल| _डियापेंसिल | क, घि, त, झो`
      }
    },
    {
      type: 'completeWord',
      label: 'रसोईघर',
      id: 'kitchen',
      data: {
        images: 'custom',
        lang: 'hi',
        text: `stove| चूल्हा| _ल्हा |चू, चा, चे, चै	 
        fork| कांटा| _टा |कां, कै, को, कौ
        knife| छुरी| _री| छु, छा, छि, छे	
        pan| कड़ाही| _ड़ाही |क, कि, की, कु	
        spoon | चम्मच| _म्मच| च, चू, चा, चे
        pot| मटका| _टका |म, मू,	मे, मै
        butter| मक्खन| _क्खन| म, मा, मि, मी`
      }
    },
    {
      type: 'completeWord',
      label: 'शरीर के अंग',
      id: 'bodyparts',
      data: {
        images: 'custom',
        lang: 'hi',
        text: `ear| कान | _न| का, हू, क्षौ, त्रि	 
        eye| आंख | _ख| आं, य, भि, मु  
        foot| टांग | _ग|  टां, बा, क्षौ, धं
        hair| केश | _श|  के, यि, त्रै, मा	 
        hand| हाथ | _थ| हा , भि, मू , त्रौ 
        mouth| मुंह | _ह|  मुं, नि, क्षै, लि	
        nose| नाक | _क |  ना, मै, त्रा, क्षं 
        tooth| दांत | _त| दां, भी, क्षा, मु`
      }
    },

    {
      type: 'completeWord',
      label: 'उपकरण',
      id: 'tools',
      commonData: {
        images: 'custom',
        lang: 'hi'
      },
      data: [
        `axe| कुल्हाडी| _ल्हाडी| कु, झो, फे, टू
        balance| तराज़ू| _राज़ू|  त, मि, फी, थी
        blackboard| श्यामपट| _यामपट| श्, मि, झं, मू 
        hose| नली| _ली| न, थी, लौ, ठी
        microscope| सूछ्मदर्शी |_छ्मदर्शी | सू, भी, क्षा, मु
        needle| सुई| _ई| सु, झि, ठू, झं
        oven| तन्दूर| _न्दूर| त, झे, ण, णा
        plough| हल| _ल| ह, टु, थी, चू
        saw| आरी| _री| आ, फु, थी, ने	
        spade| कुदाली| _दाली| कु, झै, झः, पी`,

        `telescope| दूरबीन| _रबीन|  दू, ची, जै, घू
        testube | परखनली | _रखनली | प, दां, भी, क्षा
        trowel| करनी| _रनी| क, झा, णु, दै
        awl| टेकुआ | _कुआ | टे, धी, बी, फे
        compass| कुतुबनुमा| _तुबनुमा| कु, छै, फा, तौ	
        easel| चित्रफलक | _त्रफलक| चि, थी, तो,दू	 
        hacksaw| लोहा-आरी| _हा-आरी| लो, थी, रे, रौ
        scalpel| छुरी | _री| छु, तु, चि, गु`
      ]
    },

    {
      type: 'completeWord',
      label: 'चित्र और नाम',
      id: 'others',
      commonData: {
        images: 'custom',
        lang: 'hi'
      },
      data: [
        `sun| रवि| _वि| र, कि, ते, छा
     moon| चांद| _ द| चां, छी, टा, झा		
     rain| वर्षा| _र्षा|  व, टा, णू, ते	
     star| सितारा| _तारा|  सि, डा, घू, छि
     milk| दूध| _ध| दू, टु, णी, णो	
     ring| अंगूठी |_गूठी |  अं, णु, थी, गो`,

        `bone| हड्डी| _ड्डी | ह, खे, ट, तं
     bell| घंटी| _टी| घं, झो, गो, ड 
     bird| चिड़िया| _ड़िया | चि, कि, झि, ता
     conch| शंख | _ख |  शं, झि, ता, णु
     drums| ढोल|| _ल| ढो, णू, घी, था
     five| पांच| _च| पां, ची, ख, घु
     food| खाना| _ना| खा, ठि, का, झो	
     fruits|  फल|  _ल| फ, चु, टी, झि
     king|  राजा|  _जा|  रा, गा, कि, चं
     kite| पतंग| _तंग|  प, बै, नि, णे`,

        `ladder|  सीढ़ी |  _ढ़ी | सी, दी, ती, ढू
     leaf| पत्ता | _त्ता | प, टा, ती, खी
     rishi|  ऋषि|  _षि|  ऋ, मि, डो, टि	
     wheel| पहिया| _हिया| प, ब, भि, बै,
     whistle| सीटी| _टी|  सी, णू, घी, था	
     world| दुनिया| _निया | दु, टा, णू, दी`
      ]
    },

    {
      id: 'match-animals',
      type: 'match',
      label: 'चित्र से मिलाओ',
      commonData: {
        title: 'चित्र को उनके पहले अक्षर से सुमेलित करें',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `बि, cat
        कु, dog
        ब, goat
        भे, sheep
        घो, horse`,

        `सु, pig
        हा, elephant
        शे, lion
        बं, monkey
        बा, tiger`,

        `द, hippo
        गैं, rhino
        लो, fox
        म, crocodile
        धा, zebra`,

        `भा, bear
        ऊं, camel
        हाँ, shark
        ति, whale
        म, fish`,

        `में, frog
        के, crab
        स, snake
        गि, squirrel
        क, tortoise`,

        `चू, rat
        दु, ant
        म, fly
        च, bat
        भें, buffalo`,

        `ति, butterfly 
        गा, cow
        ग, donkey 
        कं, kangaroo
        तें, leopard`,

        `ने, mongoose
        म, mosquito
        भे, wolf
        ति, cockroach
        छि, lizard
        ख, rabbit`
      ]
    },

    {
      id: 'match-birds',
      type: 'match',
      label: 'चित्र से मिलाओ',
      commonData: {
        title: 'चित्र को उनके पहले अक्षर से सुमेलित करें',
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

        `रा, kingfisher
        मै, myna
        शु, ostrich
        उ, owl
        मु, rooster
        क, woodpecker`
      ]
    },

    {
      id: 'match-fruits',
      type: 'match',
      label: 'चित्र से मिलाओ',
      commonData: {
        title: 'चित्र को उनके पहले अक्षर से सुमेलित करें',
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
बे, plum
अ, pomegranate
ख, muskmelon`
      ]
    },
    {
      id: 'match-vegetables',
      type: 'match',
      label: 'चित्र से मिलाओ',
      commonData: {
        title: 'चित्र को उनके पहले अक्षर से सुमेलित करें',
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
म, corn
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
ना, coconut`,

        `ध, corianderleaf
क, curryleaf
ढो, drumstick
ह, greenpeas
भि, ladies-finger`,

        `पु, mintleaf
मूं, peanut
मू, raddish
पा, spinach`
      ]
    },
    {
      id: 'match-flowers',
      type: 'match',
      label: 'चित्र से मिलाओ',
      data: {
        title: 'चित्र को उनके पहले अक्षर से सुमेलित करें',
        rightImgType: 'custom',
        big: true,
        text: `गु, rose
        क, lotus
        सू, sunflower
        गें, marigold
        हि, hibiscus
        च, jasmine`
      }
    },
    {
      id: 'match-vehicles',
      type: 'match',
      label: 'चित्र से मिलाओ',
      commonData: {
        title: 'चित्र को उनके पहले अक्षर से सुमेलित करें',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `वि, aeroplane
                ना, boat
                गा, car
                च, cycle
                स, ship`,

        `रे, train
रो, ambulance
हा, cart
खो, excavator
द, fire-engine`
      ]
    },

    {
      id: 'match-house',
      type: 'match',
      label: 'चित्र से मिलाओ',
      commonData: {
        title: 'चित्र को उनके पहले अक्षर से सुमेलित करें',
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
ल, girl
आ, man`,

        `स्, woman
गें, ball
ऐ, glasses
घ, clock`
      ]
    },
    {
      id: 'match-school',
      type: 'match',
      label: 'चित्र से मिलाओ',
      commonData: {
        title: 'चित्र को उनके पहले अक्षर से सुमेलित करें',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `र, eraser
क, pen 
मा, ruler
ब, schoolbag`,

        `कैं, scissors
पें, sharpener 
कि, book
क, crayons`
      ]
    },
    {
      id: 'match-kitchen',
      type: 'match',
      label: 'चित्र से मिलाओ',
      commonData: {
        title: 'चित्र को उनके पहले अक्षर से सुमेलित करें',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `चू , stove
कां, fork
छु, knife
त, pan
च, spoon
म, pot`
      ]
    },
    {
      id: 'match-bodyparts',
      type: 'match',
      label: 'चित्र से मिलाओ',
      commonData: {
        title: 'चित्र को उनके पहले अक्षर से सुमेलित करें',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `का, ear
        आं, eye
        टां, foot
        के, hair`,

        `हा, hand
        मुं, mouth
        ना,nose
        दां, tooth`
      ]
    },

    {
      id: 'match-tools',
      type: 'match',
      label: 'चित्र से मिलाओ',
      commonData: {
        title: 'चित्र को उनके पहले अक्षर से सुमेलित करें',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `कु, axe
त, balance
श्, blackboard 
न, hose 
सु, needle`,

        `त, oven
        ह, plough 
आ, saw
कु, spade
दू, telescope`,

        `प, testube 
ता, thermometer
क, trowel
टे, awl `,

        `कु, compass
        चि, easel
लो, hacksaw
छु, scalpel`
      ]
    },

    {
      id: 'match-others',
      type: 'match',
      label: 'चित्र से मिलाओ',
      commonData: {
        title: 'चित्र को उनके पहले अक्षर से सुमेलित करें',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `र, sun
चां, moon
व, rain
सि, star
दू, milk`,

        `अं, ring
ह, bone
घं, bell
चि, bird
शं, conch`,

        `ढो, drums
पां, five
खा, food
फ, fruits
प, kite
रा, king`,

        `सी, ladder 
प, leaf
ऋ, rishi
प, wheel
सी, whistle
दु, world`
      ]
    }
  ]
};
