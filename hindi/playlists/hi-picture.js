export default {
  label: 'चित्र',
  id: 'hi-picture',
  img: 'image',
  list: [
    {
      type: 'completeWord',
      label: 'जानवरों & चिड़िया ',
      id: 'animals-birds',
      commonData: {
        images: 'custom',
        lang: 'hi'
      },
      data: [
        `cat| बिल्ली | _ल्ली | बि, इ, ऊ, घ 
        dog| कुत्ता | _त्ता | कु, ग, आ, इ 
        goat| बकरी | _करी| थ, द, ध, ब
        sheep| भेड् | _ड्| अ, भे , ख, पी   
        horse| घोडा | _डा | घो, ध, न, प  
        pig| सुअर | _अर | य, र, ल, सु
        elephant| हाथी  | _थी | हा, घी, कै, ध 
        lion| शेर | _र | शे, डि ,थी , ढि  
        monkey| बंदर | _दर | बं, थि , झु, ठि 
        tiger| बाघ| _घ| ता, थी ,बा , ची `,

        `fox| लोमड़ी | _मड़ी | लो, लै, डी , टा	 
        crocodile| मगरमच्छ | _गरमच्छ | डि, म , णी, झी	  
        zebra| धारीदार घोडा | _रीदार घोडा | ति, णु	, धा, चा	 
        bear| भालू | _लू | तू, भा, घि, ग	
        camel| ऊंट | _ट | छा, ऊं , तू , गा
        fish| मछली | _छली| खु, म , झा , घा
        shark| हाँगर| _गर| ढु, हाँ, ति , ठी	  
        whale| तिमिंगल | _मिंगल| चु, ति , छा , धू  
        hippo| दरियाई घोड़ा|_रियाई घोड़ा | थो, द ,जी, घु	 
        rhino| गैंडा| _डा| णू, तै , गैं , घा`,

        `buffalo|  भेंस| _स| ख, भें, चि, गा	
        tortoise| कछुआ|  _छुआ| क, झा, घि, की	
        cow|  गाय| _य| गा, ढि, छी, खे
        donkey| गधा | _धा| घा, झि, टा, गु 
        kangaroo| कंगारू| गारू| डी, कं, गू, टा 
        leopard| तेंदुआ| _दुआ| थु, तें, दि, तु	
        mongoose| नेवला| _वला| खी, थी, ने, ठी
        rabbit| खरगोश| _रगोश| ख, तै, णी, का	
        wolf| भेड़िया| _ड़िया| भे, दी, फी, दै
        lizard| छिपकली| _पकली| छि, ठै, धु, यी `,

        `bat| चमगादड़ |_,मगादड़ | च, धु, णा, बु	
        butterfly|  तितली| _तली| ति, यै, खि, खं
        mosquito| मच्छर | _च्छर| ढि, दै, म, चा	
        cockroach| तिलचट्टा| _लचट्टा| श्री, दी, तौ, ति
        chick| चूजा| _जा| ढि, चू, ठै, फि
        vulture| गिद्ध| _द्ध| க, गि, यै, फी
        crane| सारस| _रस| तै, सा, यु, सी
        snake| सर्प | _र्प | खि,  स , श्री, चा	
        kingfisher| रामचिरैया| _मचिरैया| जु, खं, रा, तौ	
        ostrich| शुतरमुर्ग| _तरमुर्ग| शु, फि, तै, खि `,

        `owl| उल्लू| _ल्लू| णू, उ, थो, टी
        rooster| मुर्गा| _र्गा| घ, मु, झी, जु
        woodpecker| कठफोड़वा| _ठफोड़वा| त, क, यै, घ
        squirrel| गिलहरी| _लहरी| गि
        duck| बतख़ | _तख़| टौ, ब , त , णा
        frog| मेंडक | _डक | गं, में , ठू , ख 
        crab| केकड़ा | _कड़ा | ठा , डि, के , नि 
        rat| चूहा | _हा | क्षु, चू , षु , वू 
        fly| मक्खी| _क्खी |  थो, म , टौ , षि
        crow| कौवा |_वा|  कौ, वू, यु, षि `,

        `ant| दुनिया | _निया| तै, दु , छं , ची	 
        dove| कबूतर | _बूतर | षि, क , डि, ப     
        hen| मुर्गी | _र्गी | त्रि, मु , क्षु , वू 
        parrot| तोता | _ता| षि, तो, षु, ठा
        peacock| मोर | _र | टौ, मो , श्री , त्रि  
        sparrow| गौरेया| _रेया| गौ, णा , सी , त्रि `
      ]
    },
    {
      type: 'completeWord',
      label: 'सब्जियां & फल ',
      id: 'vegetables-fruits',
      commonData: {
        images: 'custom',
        lang: 'hi'
      },
      data: [
        `onion| प्याज | _याज| प्, जू, चु, झु	  
  tomato| टमाटर | _माटर| ट, टे, खु, 	  
  potato| आलू | _लू| आ, कै, गू, टे, घा			 
  drumstick| ढोलकाछड़ी| _लकाछड़ी| ढो, ज
  cabbage| पत्ता गोभी | _त्ता गोभी | प, घा, ख, ट	   
  cauliflower| गोभी| _ भी| गो, झौ, झा, टि  	
  corn| मक्का | _क्का | म, छी, चू, का	
  carrot| गाजर | _जर | गा, चा, टा, खा	
  beetroot| चुकंदर |_कंदर| चु, खु, झु, डु 
  Beans| फलियां| _लियां| फ, ध, ब, य	 `,

        `cucumber| खीरा | _रा | खी, शी, से, यो 
garlic| लहसुन | _हसुन | ल, र , हि	 , षु 
ginger| अदरक | _दरक| अ, ऊ, ऐ, औ	  
pumpkin| कददू   | _द्दू  | क, रे, षे	, भ	
brinjal| बैंगन | _गन| बैं, क, ओ, खौ	
ladies-finger| भिन्डी| _न्डी| भि, ढे, टी, णि
raddish| मूली| _ली| मू, मु, तु, खौ	
bitter-gourd| करेला| _रेला| क, भा, मू, घू	
capsicum| शिमला मिर्च| _मला मिर्च| णु, चु, शि, ठे
chilli| मिर्च| _र्च| मि, झो	, जै, खा`,

        `coconut| नारियल| _रियल| ना, ठि, टी, तौ
corianderleaf|धनिएके पत्ते| _, निएके पत्ते| ध, णी, थे, ट	
curryleaf| करी पत्ता| _री पत्ता| क, का, छ, ड	
mintleaf| पुदीना | _दीना| पु, गू, ढा, घौ	
greenpeas| हरी मटर | _री मटर | ह, च, ढि, का
peanut| मूंगफली| _गफली| मूं, आ, ई, तो
almond|  बादाम|  _दाम| बा, ढि, कौ, क	
cashewnut| काजू | _जू| का, झा, घै, जा	
spinach| पालक| _लक| पा, कु, खू, झो	
apple| सेब | _ब| से, घि, खे, च`,

        `grapes| अंगूर | _,गू,र | अं, जा, टा, ढ
banana| केला |_ला| के, तं, को, डं
watermelon| तरबूज | _रबूज| त, झा, ठ, थौ
papaya|  पपीता |_पीता | प, गो, कु, तु
mango| आम | _म| चू, आ, डी, यि	
jackfruit| कटहल | _टहल| क, घे, थौ, डा
guava| अमरूद | _मरूद| अ, ण, शि, पू	
pineapple| अननास | _ननास| अ, पू,  त्रे, शि
pomegranate| अनार | _नार| अ, टु	, डा, ती	
muskmelon |खरबूजा | _रबूजा | ख, डी`,

        `orange| संतरा | _तरा | सं,  डी, मी, क्षू
  fig| अंजीर| _जीर| अं, भि, व, क्षै
  custard-apple| शरीफा| _, री, फा| श,  ळो, क्षि, सा
  plum |बेर | _र| बे, या, फौ, शी	
  dates| खजूर| _जूर| क्षै, ख, वि, फे`
      ]
    },
    {
      type: 'completeWord',
      label: 'फूल',
      id: 'flowers',
      commonData: {
        images: 'custom',
        lang: 'hi'
      },
      data: [
        `lotus| कमल| _मल| लू, क, ही, त्रु	
  Rose| गुलाब | _लाब|गु, ही, त्रु, भो	
  sunflower| सूरजमुखी | _रजमुखी| त्रु, सू, लू , भो	
  marigold| गेंदा | _दा | गें, सि, सै, नो	
  hibiscus| हिबिस्कुस | _बिस्कुस| ही, हि, त्रु, भो	
  jasmine| चमेली| _मेली | च, त्रु, सै, सि`
      ]
    },
    {
      type: 'completeWord',
      label: 'Complete the word',
      id: 'complete-words',
      data: {
        images: 'custom',
        text: `bell|घं, टी|_, टी|घं, दू, प, र
milk|दू, ध |_, ध |दू, प, र, रा
leaf|प, त्ता |_, त्ता |प, र, रा, मो
wheel|प, हि, या |_, हि, या |प, र, रा, मो
five|पां , च |_ , च |पां , रा, मो, र
king|रा, जा |_, जा |रा, मो, पां , र
peacock|मो , र |_ , र |मो, मु, प , पां
hen|मु, र्गी |_, र्गी |मु, मो, पां , र`
      }
    },
    {
      type: 'completeWord',
      label: 'शरीर के अंग',
      id: 'bodyparts',
      commonData: {
        images: 'custom',
        lang: 'hi'
      },
      data: [
        `ear| कान | _न| का, हू, क्षौ, त्रि	 
  eye| आंख | _ख| आं, य, भि, मु  
  foot| टांग | _ग|  टां, बा, क्षौ, धं
  hair| केश | _श| यि, त्रै, के, मा	 
  hand| हाथ | _थ| भि, हा , मू , त्रौ 
  mouth| मुंह | _ह| नि,  क्षै, मुं, लि	
  nose| नाक | _क | मै, ना, त्रा, क्षं 
  tooth| दांत | _त| दां, भी, क्षा, मु`
      ]
    },

    {
      type: 'completeWord',
      label: 'वाहनों',
      id: 'vehicles',
      commonData: {
        images: 'custom',
        lang: 'hi'
      },
      data: [
        `aeroplane| विमान | _मान| वि, ळी, म, है 
  boat| नाव | _व | हे, ना, शं, पू
  car| गाड़ी | _ड़ी | गा, यी, हौ, नि	
  cycle| चक्र | _क्र | च, खु, ये, हा 
  motorbike| मोटरसाइकिल| _टरसाइकिल|मो, क, छा, जो		
  ship| समुंद्री जहाज | _मुंद्रीजहाज | स, झ, छे, झं	 
  train| रेल गाडी| _लगाडी| रे, झ, झू , खि
  excavator| खोदकमशीन| _ दकमशीन | खो, झी, क,अ
  fire-engine|दमकल | _मकल| खि, गा, कु, द
  ambulance| रोगीवाहन | _गीवाहन |रो, गी, गे, जी`
      ]
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
        `Axe| कुल्हाडी| _, ल्,हा,डी| झो, कु, फे, टू
        balance| तराज़ू| _राज़ू| मि, त, फी, थी
        blackboard| श्यामपट| _यामपट| मि, झं, मू, श्
        hose| नली| _ली| पु, थी, लौ, ठी
        needle| सु,ई| _ई| सु, झि, ठू, झं
        oven| तन्दूर| _न्दूर| त, झे, ण, णा
        saw| आरी| _री| फु, आ, थी, ने	
        spade| कुदाली| _दाली| कु, झै, झः, पी `,

        `telescope| दूरबीन| _,र,बी,न| ची, दू, जै, घू	
        easel| चित्रफलक | _त्रफलक| चि, थी, तो,दू	 
      scalpel| छुरी | _री| छु, तु, चि, गु	
      plough| हल| _ल| टु, ह, थी, चू	
      trowel| करनी| _रनी| क, झा, णु, दै	 
      awl| टेकु आ | _कु आ | टे, धी, बी, फे
      compass| कुतुबनुमा| _तुबनुमा| कु, छै, फा, तौ	
      hacksaw| लोहा-आरी| _हा-आरी| लो, थी, रे, रौ`
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
        `house| मकान| _,का,न| कि, म, घा, खू
  table| मेज| _ज| गु, मे, झे, णु	
  bed| बिस्तर| _स्तर| बि, खू, णौ, ठी
  candle| मोमबत्ती| _मबत्ती| मो, डे, ठी, झू	
  chair| कुर्सी| _,र्सी| कु, झे, गु, ठी
  shelf| अलमारी|  _लमारी| चा, अ, जि, टु
  baby| बच्चा| _चचा| ब, ल, झौ, आ
  boy| लड़का|  _ड़का| ल, ठा, झौ, कि
  girl| लड़की| _ड़की| ल, चू	, का,गु	
  man| आदमी | _दमी | आ, डि, ची, डे	
  woman| स्री| _री| स्, ठु, णा, तो`,

        `leaf| पत्ता | _त्,ता | प, टा, ती, खी
  world| दुनिया| _निया | दु, टा, णू, दी	
  whistle| सीटी| _टी| णू, सी, घी, था	
  ladder|  सीढ़ी |  _ढ़ी | सी, दी, ती, ढू
  five| पांच| _च| पां, ची, ख, घु
  sun| रवि| _वि| र, कि, ते, छा	  
  moon| चांद| _ द| चां, छी, टा, झा		
  rain| वर्षा| _र्षा| टा, व, णू, ते	
  star| सितारा| _तारा| डा, घू, सि, छि`,

        `milk| दूध| _ध| दू, टु, णी, णो	
  ring| अंगूठी |_गूठी | णु, अं, थी, गो	 
  bone| हड्डी| _ड्डी | खे, ह, ट, तं
  bell| घंटी| _टी| झो, गो, ड, घं
  bird| चिड़िया| चिड़िया| ती, कि, झि, ता
  conch| शंख | _ख | झि, ता, शं, णु	
  food| खाना| _ना| खा, ठि, का, झो	
  fruits|  फल|  _ल| फ, चु, टी, झि
  king|  राजा|  _जा| गा, रा, कि, चं`,

        `kite| पतंग| _तंग| बै, नि, प, णे
rishi|  ऋषि|  _षि| मि, ऋ, डो, टि	
wheel| पहिया| _हिया| ब, भि, बै, प
ball| गेंद| _द| गें, ध, थी, ये
glasses| ऐनक| _नक| भ, ऐ, मा, यि
clock| घड़ी | _ड़ी | घ, तू, ठ	, थ`
      ]
    },

    {
      type: 'completeWord',
      label: 'विद्यालय',
      id: 'school',
      commonData: {
        images: 'custom',
        lang: 'hi'
      },
      data: [
        `eraser| रबड़| _,ब,ड़ | चौ, खा, कौ, घै	
pen| कलम|  _लम| क, घै, थो, दी
ruler| मापन| _पन| थौ, घै, मा, थी	
scissors| कैंची| _ची| कैं, थी, ता, दी
sharpener| पेंसिल ताराश| _सिल ताराश| पें, घै, खा, कौ	
book| किताब | _ताब | कि, फे, णू, घो	
crayons| कडियापेंसिल| _डियापेंसिल | क, घि, त, झो`
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
        `से, apple
अं, grapes 
के, banana
अ, guava
क, jackfruit
आ, mango
सं, orange
प, papaya
अ, pineapple
अ, pomegranate`,

        `त, watermelon
अं, fig
श, custard apple
बे, plum
ख, dates
ख, muskmelon`,

        `गा, carrot
चु, beetroot
प्, onion
ट, tomato
आ, potato
प, cabbage
गो, cauliflower
म, corn
खी, cucumber
ल, garlic`,

        `अ, ginger
क, pumpkin
बा, almond
फ, beans
क, bitter-gourd
बैं, brinjal
शि, capsicum
का, cashewnut
मि, chilli
ना, coconut`,

        `ध, corianderleaf
क, curryleaf
ढो, drumstick
ह, greenpeas
भि, ladies-finger
पु, mintleaf
मूं, peanut
मू, raddish
पा, spinach`,

        `गु, rose
क, lotus
सू, sunflower
गें, marigold
हि, hibiscus
च, jasmine`,

        `वि, aeroplane
ना, boat
गा, car
च, cycle
मो, motorbike
स, ship
रे, train
रो, ambulance
का, cart
खो, excavator
द, fire-engine`,

        `म, house
मे, table
बि, bed
मो, candle
कु, chair
अ, shelf
ब, baby
ल, boy
ल, girl
आ, man`,

        `स्, woman
गें, ball
ऐ, glasses
घ, clock`,

        `र, eraser
क, pen 
मा, ruler
कैं, scissors
पें, sharpener 
कि, book
क, crayons`,

        `चू, stove
कां, fork
छु, knife
त, pan
च, spoon
म, pot
म, butter`,

        `कु, Axe
त, balance
श्, Black board 
न, hose 
सु, Needle
त, Oven
ह, plough 
आ, Saw
कु, Spade`,

        `दू, telescope 
क, trowel
टे, awl 
कु, Compass
चि, easel
लो, hacksaw
छु, scalpel`,

        `बि, cat
कु, dog
ब, goat
भे, sheep
घो, horse
सु, pig
हा, elephant
शे, lion
बं, monkey
बा, tiger`,

        `द, hippo
गैं, rhino
लो, fox
म, crocodile
धा, zebra
भा, bear
ऊं, camel
हाँ, shark
ति, whale
म, fish`,

        `में, frog
के, crab
स, snake
गि, squirrel
क, tortoise
चू, rat
दु, ant
म, fly
च, bat`,

        `भें, buffalo
ति, butterfly 
गा, cow
ग, donkey 
कं, kangaroo
तें, leopard
ने, mongoose
म, mosquito
भे, wolf
ति, cockroach`,

        `छि, lizard
ख, rabbit
कौ, crow
क, dove
ब, duck
मु, hen
तो, parrot
मो, peacock
गौ, sparrow
चू, chick`,

        `सा, crane
रा, kingfisher
मै, myna
शु, ostrich
उ, owl
मु, rooster
गि, vulture
क, woodpecker`,

        `का, ear
आं, eye
टां, foot
के, hair
हा, hand
मुं, mouth
ना,nose
दां, tooth`,

        `र, sun
चां, moon
व, rain
सि, star
दू, milk
अं, ring
र, brush
ह, bone
घं, bell
चि, bird`,

        `शं, conch 
पां, five
खा, food
फ, fruits
रा, king
प, kite
सी, ladder 
प, leaf
ऋ, rishi
प, wheel
सी, whistle
दु, world`
      ]
    },
    {
      type: 'match',
      label: 'Match Fruits',
      data: {
        title: 'Match Fruits with their first letter.',
        text: `अं, grapes
के, banana
आ, mango
प, papaya
त, watermelon
अ, pomegranate`,
        rightImgType: 'fruits',
        big: true
      },
      id: 'match-fruits'
    }
  ]
};
