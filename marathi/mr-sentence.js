export default {
  label: 'वाक्य',
  id: 'mr-sentence',
  img: 'sentence',
  list: [
    {
      type: 'match',
      label: 'Match Words',
      id: 'match',
      lockAfter: 1,
      commonData: {
        title: 'Match the words that form a sentence.',
        fontSize: '1.2rem'
      },
      data: [
        `किती, वाजले?
अजून, काही?
कसा, आहेस?
पण, का?
कोणास, माहित?`,

        `नवीन, काय?
काय, झालं?
खरं, सांग.
उत्तर, दे.
ओरडू, नकोस.
माझ्याकडे, बघ.`,

        `आभारी, आहे.
मागे, फिर.
हलू , नका.
सावध , रहा.
मी , निघतोय.
वेळ , संपली.`,

        `बाहेर , जा.
कमीत , कमी.
आत , ये.
काळजी , घे.
उद्या , भेटू.
खूप , छान!`,

        `अजून , एक.
काढून , टाक.
ठीक , आहे.
शांत , बस.
अजिबात , नाही.`,

        `तयार , व्हा.
सोबत , चल.
विषय , संपला.
आता , नको.`
      ]
    },
    {
      type: 'sequence',
      label: 'Order Sentence',
      id: 'order-sentence',
      lockAfter: 2,
      data: [
        `तू कोण आहेस
तुझं नाव काय
तुम्ही कसे आहात
तुम्ही कुठे राहता
काय चालले आहे
हे काय आहे
तू जेवलास का
मी करू शकतो
हे करू नकोस
पुन्हा प्रयत्न करा`,

        `मला फोन कर
मला माहित नाही
माझ्या मागे ये
काळजी करू नको
काही हरकत नाही
माझं ऐकून घे
मला जाऊ द्या
वाक्य काळजीपुर्वक वाचा
कृपया आत या
दरवाजा बंद करा`,

        `मला समजले नाही
मला असं वाटत
स्वतःवर विश्वास ठेवा
त्याने शिकवलं नव्हतं
शब्दांशी खेळणं थांबवा
बोलण्याआधी विचार करा
मला माफ करा
लवकर बरा हो`,

        `तिला राग आला
दु:खी होऊ नका
आपण नंतर बोलू
मी आजारी होतो
वाढदिवसाच्या हार्दिक शुभेच्छा`,

        `तो माणूस कोण आहे
मी पाहू शकतो का
तुम्ही इंग्रजी बोलता का
तुमचे वय किती आहे
तुम्हाला उशीर का झाला
ताज्या बातम्या काय आहेत
तू नोकरी का सोडलीस
त्याचे डोळे निळे आहेत
तिचे स्मित सुंदर होते
माझा तुझ्यावर विश्वास आहे`,

        `आपला प्रवास सुखाचा होवो
तुम्हाला भेटून आनंद झाला
तुझ्याशी बोलून छान वाटलं
आम्ही रोज स्वयंपाक करतो
तुमचा दिवस चांगला जावो
मी त्याला सोडणार नाही
त्याचा चेहरा लाल झाला
मला सर्दी झाली आहे
मला तुझी आठवण येते
आई सकाळी लवकर उठते`,

        `वेळ वाया घालवू नका
भींतीला देखील कान असतात
आपल्या जिभेवर नियंत्रण ठेवा
मला त्रास देऊ नका
कोणाला वाईट बोलु नका
तुमचे कपडे व्यवस्थित ठेवा
कपडे वॉशिंग मशिनमध्ये टाका`,

        `तुमचे सामान घेऊन जा
मी नियमित व्यायाम करतो
मला तुझी काळजी वाटते
मी दररोज इंग्रजी बोलतो
माझे वडील डॉक्टर आहेत`
      ]
    }
  ]
};
