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
        guava| अमरूद | _मरूद| अ, ण, शि, पू
        jackfruit| कटहल | _टहल| क, घे, थौ, डा`,
        
        `mango| आम | _म| आ, चू, डी, यि	
        orange| संतरा | _तरा | सं, डी, मी, क्षू
        papaya|  पपीता |_पीता | प, गो, कु, तु
        pineapple| अननास | _ननास| अ, पू,  त्रे, शि
        pomegranate| अनार | _नार| अ, टु	, डा, ती`,

        `watermelon| तरबूज | _रबूज| त, झा, ठ, थौ
        fig| अंजीर| _जीर| अं, भि, व, क्षै
        custard-apple| शरीफा| _रीफा| श, ळो, क्षि, सा
        plum |आलूबुखारा | _लूबुखारा| आ, या, फौ, शी	
        dates| खजूर| _जूर| ख, क्षै, वि, फे
        muskmelon |खरबूजा | _रबूजा | ख, डी, ब, मा`
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
        onion| प्याज | _याज| प्, जू, चु, झु	  
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
        coconut| नारियल| _रियल| ना, ठि, टी, तौ`,

        `corianderleaf|धनिएके पत्ते| _निएके पत्ते| ध, णी, थे, ट	
        curryleaf| करी पत्ता| _री पत्ता| क, का, छ, ड
        drumstick| सहजन| _हजन| स, ज, को, ब		
        greenpeas| मटर | _टर | म, च, ढि, का
        ladies-finger| भिन्डी| _न्डी| भि, ढे, टी, णि`,

        `mintleaf| पुदीना | _दीना| पु, गू, ढा, घौ
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
        title: 'लापता अक्षरों को भरें।',
        lang: 'hi',
        text: `rose| गुलाब | _लाब|गु, ही, त्रु, भो	
        lotus| कमल| _मल| क, लू, ही, त्रु	
        sunflower| सूरजमुखी | _रजमुखी| सू, त्रु, लू , भो	
        marigold| गेंदा | _दा | गें, सि, सै, नो	
        hibiscus| गुडहल | _डहल| गु, ही, त्रु, भो	
        jasmine| चमेली| _मेली | च, त्रु, सै, सि`
      }
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
        foot| टांग | _ग|  टां, बा, क्षौ, धं
        hair| केश | _श|  के, यि, त्रै, मा	`
      }
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
        `sun| सूर्य| _र्य| सू, कि, ते, छा
     moon| चांद| _द| चां, छी, टा, झा		
     rain| बारिश| _रिश|  बा, टा, णू, ते	
     star| तारा| _रा|  ता, डा, घू, छि
     milk| दूध| _ध| दू, टु, णी, णो	
     ring| अंगूठी |_गूठी |  अं, णु, थी, गो`,

        `bone| हड्डी| _ड्डी | ह, खे, ट, तं
     bell| घंटी| _टी| घं, झो, गो, ड 
     bird| पक्षी| _क्षी | प, कि, झि, ता
     conch| शंख | _ख |  शं, झि, ता, णु
     drums| ढोल|| _ल| ढो, णू, घी, था`,

     `five| पांच| _च| पां, ची, ख, घु
     food| खाना| _ना| खा, ठि, का, झो	
     fruits|  फल|  _ल| फ, चु, टी, झि
     king|  राजा|  _जा|  रा, गा, कि, चं
     kite| पतंग| _तंग|  प, बै, नि, णे`,

        `ladder|  सीढ़ी |  _ढ़ी | सी, दी, ती, ढू
     leaf| पत्ता | _त्ता | प, टा, ती, खी
     rishi|  ऋषि|  _षि|  ऋ, मि, डो, टि	
     wheel| चक्का| _क्का| च, ब, भि, बै
     whistle| सीटी| _टी|  सी, णू, घी, था	
     world| दुनिया| _निया | दु, टा, णू, दी`
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
ख, muskmelon`
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
ना, coconut`,

        `ध, corianderleaf
क, curryleaf
स, drumstick
म, greenpeas
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
      label: 'चित्र से मिलाओ - फूल',
      locked: 'true',
      data: {
        title: 'चित्र को उनके पेहले अक्षर से जोड़िए',
        rightImgType: 'custom',
        big: true,
        text: `गु, rose
        क, lotus
        सू, sunflower
        गें, marigold
        च, jasmine`
      }
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
        टां, foot
        के, hair`,

        `हा, hand
        मुं, mouth
        ना,nose
        दां, tooth`
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
        `सू, sun
चां, moon
बा, rain
ता, star
दू, milk`,

        `अं, ring
ह, bone
घं, bell
प, bird
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
च, wheel
दु, world`
      ]
    }
  ]
};
