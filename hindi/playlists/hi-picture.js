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
        goat| बकरी | _करी| ब, द, ध, थ
        sheep| भेड् | _ड्|  भे,अ, ख, पी   
        horse| घोडा | _डा | घो, ध, न, प  
        pig| सुअर | _अर | सु, य, र, ल 
        elephant| हाथी  | _थी | हा, घी, कै, ध 
        lion| शेर | _र | शे, डि ,थी , ढि  
        monkey| बंदर | _दर | बं, थि , झु, ठि 
        tiger| बाघ| _घ| बा, ता, थी, ची `,

        `fox| लोमड़ी | _मड़ी | लो, लै, डी , टा	 
        crocodile| मगरमच्छ | _गरमच्छ | म, डि, णी, झी	  
        zebra| धारीदार घोडा | _रीदार घोडा | धा, ति, णु,  चा	 
        bear| भालू | _लू | भा, तू,  घि, ग	
        camel| ऊंट | _ट | ऊं , छा,  तू , गा
        fish| मछली | _छली| म , खु,  झा , घा
        shark| हाँगर| _गर| हाँ, ढु,  ति , ठी	  
        whale| तिमिंगल | _मिंगल| ति , चु,  छा , धू  
        hippo| दरियाई घोड़ा|_रियाई घोड़ा | द , थो, जी, घु	 
        rhino| गैंडा| _डा| गैं , णू, तै ,  घा`,

        `buffalo|  भेंस| _स| भें, ख,  चि, गा	
        tortoise| कछुआ|  _छुआ| क, झा, घि, की	
        cow|  गाय| _य| गा, ढि, छी, खे
        donkey| गधा | _धा| ग, घा, झि, टा  
        kangaroo| कंगारू| गारू| कं, डी,  गू, टा 
        leopard| तेंदुआ| _दुआ| तें, थु, दि, तु	
        mongoose| नेवला| _वला| ने, खी, थी,  ठी
        rabbit| खरगोश| _रगोश| ख, तै, णी, का	
        wolf| भेड़िया| _ड़िया| भे, दी, फी, दै
        lizard| छिपकली| _पकली| छि, ठै, धु, यी `,

        `bat| चमगादड़ |_मगादड़ | च, धु, णा, बु	
        butterfly|  तितली| _तली| ति, यै, खि, खं
        mosquito| मच्छर | _च्छर| म, ढि, दै,  चा	
        cockroach| तिलचट्टा| _लचट्टा| ति, श्री, दी, तौ 
        chick| चूजा| _जा| चू, ढि, ठै, फि
        vulture| गिद्ध| _द्ध| गि, க,  यै, फी
        crane| सारस| _रस| सा, तै, यु, सी
        snake| सर्प | _र्प | स , खि,  श्री, चा	
        kingfisher| रामचिरैया| _मचिरैया| रा, जु, खं, तौ	
        ostrich| शुतरमुर्ग| _तरमुर्ग| शु, फि, तै, खि `,

        `owl| उल्लू| _ल्लू| उ, णू, थो, टी
        rooster| मुर्गा| _र्गा| मु, घ, झी, जु
        woodpecker| कठफोड़वा| _ठफोड़वा| क, त, यै, घ
        squirrel| गिलहरी| _लहरी| गि, ले, ची, द्वि
        duck| बतख़ | _तख़| ब , टौ, त , णा
        frog| मेंडक | _डक | में , गं, ठू , ख 
        crab| केकड़ा | _कड़ा | के , ठा , डि,  नि 
        rat| चूहा | _हा | चू , क्षु, षु , वू 
        fly| मक्खी| _क्खी |  म , थो, टौ , षि
        crow| कौवा |_वा|  कौ, वू, यु, षि `,

        `ant| दुनिया | _निया| दु , तै, छं , ची	 
        dove| कबूतर | _बूतर | क , षि,  डि, ப     
        hen| मुर्गी | _र्गी | मु , त्रि,  क्षु , वू 
        parrot| तोता | _ता| तो, षि,  षु, ठा
        peacock| मोर | _र | मो , टौ,  श्री , त्रि  
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
capsicum| शिमला मिर्च| _मला मिर्च| शि, णु, चु, ठे
chilli| मिर्च| _र्च| मि, झो	, जै, खा`,

        `coconut| नारियल| _रियल| ना, ठि, टी, तौ
corianderleaf|धनिएके पत्ते| _निएके पत्ते| ध, णी, थे, ट	
curryleaf| करी पत्ता| _री पत्ता| क, का, छ, ड	
mintleaf| पुदीना | _दीना| पु, गू, ढा, घौ	
greenpeas| हरी मटर | _री मटर | ह, च, ढि, का
peanut| मूंगफली| _गफली| मूं, आ, ई, तो
almond|  बादाम|  _दाम| बा, ढि, कौ, क	
cashewnut| काजू | _जू| का, झा, घै, जा	
spinach| पालक| _लक| पा, कु, खू, झो	
apple| सेब | _ब| से, घि, खे, च`,

        `grapes| अंगूर | _गू,र | अं, जा, टा, ढ
banana| केला |_ला| के, तं, को, डं
watermelon| तरबूज | _रबूज| त, झा, ठ, थौ
papaya|  पपीता |_पीता | प, गो, कु, तु
mango| आम | _म| आ, चू, डी, यि	
jackfruit| कटहल | _टहल| क, घे, थौ, डा
guava| अमरूद | _मरूद| अ, ण, शि, पू	
pineapple| अननास | _ननास| अ, पू,  त्रे, शि
pomegranate| अनार | _नार| अ, टु	, डा, ती	
muskmelon |खरबूजा | _रबूजा | ख, डी`,

        `orange| संतरा | _तरा | सं, डी, मी, क्षू
  fig| अंजीर| _जीर| अं, भि, व, क्षै
  custard-apple| शरीफा| _रीफा| श, ळो, क्षि, सा
  plum |बेर | _र| बे, या, फौ, शी	
  dates| खजूर| _जूर| ख, क्षै, वि, फे`
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
        `lotus| कमल| _मल| क, लू, ही, त्रु	
  Rose| गुलाब | _लाब|गु, ही, त्रु, भो	
  sunflower| सूरजमुखी | _रजमुखी| सू, त्रु, लू , भो	
  marigold| गेंदा | _दा | गें, सि, सै, नो	
  hibiscus| हिबिस्कुस | _बिस्कुस| हि, ही, त्रु, भो	
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
  hair| केश | _श|  के, यि, त्रै, मा	 
  hand| हाथ | _थ| हा , भि, मू , त्रौ 
  mouth| मुंह | _ह|  मुं, नि, क्षै, लि	
  nose| नाक | _क |  ना, मै, त्रा, क्षं 
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
  boat| नाव | _व | ना, हे, शं, पू
  car| गाड़ी | _ड़ी | गा, यी, हौ, नि	
  cycle| चक्र | _क्र | च, खु, ये, हा 
  motorbike| मोटरसाइकिल| _टरसाइकिल|मो, क, छा, जो		
  ship| समुंद्री जहाज | _मुंद्रीजहाज | स, झ, छे, झं	 
  train| रेल गाडी| _लगाडी| रे, झ, झू , खि
  excavator| खोदकमशीन| _ दकमशीन | खो, झी, क,अ
  fire-engine|दमकल | _मकल| द, खि, गा, कु 
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
        `Axe| कुल्हाडी| _ल्हाडी| कु, झो, फे, टू
        balance| तराज़ू| _राज़ू|  त, मि, फी, थी
        blackboard| श्यामपट| _यामपट| श्, मि, झं, मू 
        hose| नली| _ली| पु, थी, लौ, ठी
        needle| सु,ई| _ई| सु, झि, ठू, झं
        oven| तन्दूर| _न्दूर| त, झे, ण, णा
        saw| आरी| _री| आ, फु, थी, ने	
        spade| कुदाली| _दाली| कु, झै, झः, पी `,

        `telescope| दूरबीन| _रबीन|  दू, ची, जै, घू	
        easel| चित्रफलक | _त्रफलक| चि, थी, तो,दू	 
      scalpel| छुरी | _री| छु, तु, चि, गु	
      plough| हल| _ल| ह, टु, थी, चू	
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
        `house| मकान| _कान|  म, कि, घा, खू
  table| मेज| _ज| मे, गु, झे, णु	
  bed| बिस्तर| _स्तर| बि, खू, णौ, ठी
  candle| मोमबत्ती| _मबत्ती| मो, डे, ठी, झू	
  chair| कुर्सी| _र्सी| कु, झे, गु, ठी
  shelf| अलमारी|  _लमारी|  अ, चा, जि, टु
  baby| बच्चा| _चचा| ब, ल, झौ, आ
  boy| लड़का|  _ड़का| ल, ठा, झौ, कि
  girl| लड़की| _ड़की| ल, चू	, का,गु	
  man| आदमी | _दमी | आ, डि, ची, डे	
  woman| स्री| _री| स्, ठु, णा, तो`,

        `leaf| पत्ता | _त्ता | प, टा, ती, खी
  world| दुनिया| _निया | दु, टा, णू, दी	
  whistle| सीटी| _टी|  सी, णू, घी, था	
  ladder|  सीढ़ी |  _ढ़ी | सी, दी, ती, ढू
  five| पांच| _च| पां, ची, ख, घु
  sun| रवि| _वि| र, कि, ते, छा	  
  moon| चांद| _ द| चां, छी, टा, झा		
  rain| वर्षा| _र्षा|  व, टा, णू, ते	
  star| सितारा| _तारा|  सि, डा, घू, छि`,

        `milk| दूध| _ध| दू, टु, णी, णो	
  ring| अंगूठी |_गूठी |  अं, णु, थी, गो	 
  bone| हड्डी| _ड्डी | ह, खे, ट, तं
  bell| घंटी| _टी| घं, झो, गो, ड 
  bird| चिड़िया| चिड़िया| ती, कि, झि, ता
  conch| शंख | _ख |  शं, झि, ता, णु	
  food| खाना| _ना| खा, ठि, का, झो	
  fruits|  फल|  _ल| फ, चु, टी, झि
  king|  राजा|  _जा|  रा, गा, कि, चं`,

        `kite| पतंग| _तंग|  प, बै, नि, णे
rishi|  ऋषि|  _षि|  ऋ, मि, डो, टि	
wheel| पहिया| _हिया| प, ब, भि, बै,
ball| गेंद| _द| गें, ध, थी, ये
glasses| ऐनक| _नक|  ऐ, भ, मा, यि
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
        `eraser| रबड़| _बड़ | चौ, खा, कौ, घै	
pen| कलम|  _लम| क, घै, थो, दी
ruler| मापन| _पन|  मा, थौ, घै, थी	
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
क, jackfruit`,
        
        `आ, mango
सं, orange
प, papaya
अ, pineapple
अ, pomegranate`,

        `त, watermelon
अं, fig
श, custard-apple
बे, plum
ख, dates
ख, muskmelon`,

        `गा, carrot
चु, beetroot
प्, onion
ट, tomato
आ, potato`,
        
        `प, cabbage
गो, cauliflower
म, corn
खी, cucumber
ल, garlic`,

        `अ, ginger
क, pumpkin
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
स, ship`,
        
        `रे, train
रो, ambulance
का, cart
खो, excavator
द, fire-engine`,

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
सु, Needle`,
        
        `त, Oven
ह, plough 
आ, Saw
कु, Spade`,

        `दू, telescope 
क, trowel
टे, awl 
कु, compass
चि, easel
लो, hacksaw
छु, scalpel`,

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
च, bat`,

        `भें, buffalo
ति, butterfly 
गा, cow
ग, donkey 
कं, kangaroo`,
        
        `तें, leopard
ने, mongoose
म, mosquito
भे, wolf
ति, cockroach`,

        `छि, lizard
ख, rabbit
कौ, crow
क, dove
ब, duck`,
        
         `मु, hen
तो, parrot
मो, peacock
गौ, sparrow
चू, chick`,

        `सा, crane
रा, kingfisher
मै, myna
शु, ostrich`,
        
        `उ, owl
मु, rooster
गि, vulture
क, woodpecker`,

        `का, ear
आं, eye
टां, foot
के, hair`,
        
         `हा, hand
मुं, mouth
ना,nose
दां, tooth`,

        `र, sun
चां, moon
व, rain
सि, star
दू, milk`,
        
        `अं, ring
र, brush
ह, bone
घं, bell
चि, bird`,


        `शं, conch 
पां, five
खा, food
फ, fruits
रा, king
प, kite`,
        
         `सी, ladder 
प, leaf
ऋ, rishi
प, wheel
सी, whistle
दु, world`
      ]
    },
    {
      type: 'match',
      label: 'फलों का मिलान करें',
      data: {
        title: 'फलों को उनके पहले अक्षर से सुमेलित कीजिए',
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
