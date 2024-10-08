export default {
  label: 'काळ',
  id: 'mr-tense',
  lockAfter: 100,
  list: [
    {
      label: 'काळ',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'काळ',
        text: `एखाद्या वाक्यामध्ये ज्याप्रमाणे क्रियापदावरून आपल्याला क्रियेचा बोध होतो त्याचप्रमाणे ती क्रिया कोणत्या वेळी घडत आहे याचाही बोध होतो त्याला काळ म्हणतात.
काळाचे प्रमुख 3 प्रकार आहेत:
# वर्तमान काळ 
क्रियापदाच्या रूपावरून क्रिया आता घडते आहे असे जेव्हा समजते तेव्हा तो काळ ‘वर्तमानकाळ’ असतो.
उदा.
मी आंबा खातो.
आम्ही क्रिकेट खेळतो.
आनंद पत्र लिहीत आहे.
विधार्थ्यांनी अभ्यास केला आहे.
#भूतकाळ
जेव्हा क्रियापदाच्या रूपावरून क्रिया पूर्वी घडून गेलेली आहे असा बोध होतो तेव्हा त्या काळाला ‘भूतकाळ’ असे म्हणतात.
उदा.
रामने जेवण केले.
मी अभ्यास केला.
मी आंबा खात होतो.
त्यांनी पेपर लिहिला होता.
#भविष्यकाळ
वाक्यातील क्रियापदाच्या रुपावरून जेव्हा एखादी क्रिया ही पुढे घडणार आहे असा बोध होतो तेव्हा त्याला 'भविष्यकाळ' असे म्हणतात.
उदा.
मी सिनेमाला जाईल.
आम्ही क्रिकेट खेळायला जाऊ.
मी आंबा खात असेल.
मी गावाला गेलो असेल.`
      }
    },
    {
      id: 'match',
      label: 'जोड्या लावा ',
      type: 'match',
      commonData: {
        title: 'वर्तमानकाळ आणि भूतकाळाच्या योग्य जोड्या लावा '
      },
      data: [
        {
          text: `खेळतो, खेळला
लिहितो, लिहलं
नाचते, नाचली
वाचतो, वाचले
खातो, खाल्ले `
        },
        {
          fontSize: '1rem',
          text: `वाचत आहे, वाचत होतो
लिहित आहे, लिहित होतो
खेळत आहे, खेळत होतो
नाचते आहे, नाचत होते
खाते आहे, खात होते `
        },
        {
          fontSize: '1rem',
          title: 'भूतकाळ आणि भविष्यकाळाच्या योग्य जोड्या लावा',
          text: `वाचत होतो, वाचत असेन
लिहित होतो, लिहित असेन
खेळत होतो, खेळत असेन
नाचत होते, नाचत असेन
खात होते, खात असेन `
        }
      ]
    },
    {
      type: 'selectWord',
      label: 'काळ दर्शविणारे शब्द ओळखा ',
      id: 'select-word',
      data: {
        title: ' खालील वाक्यांतील काळ दर्शवणाऱ्या शब्दांना अधोरेखित करा ',
        text: `शामला घरी जावे *लागेल*.
रवी उशिरा घरी *आला होता*.
टीना पुस्तक *वाचत आहे*
आज पाऊस *आला*.
बाबा मुलांना *ओरडतील*.`
      }
    },
    {
      id: 'fillup',
      label: ' रिकाम्या जागा भरा ',
      type: 'fillup',
      commonData: {},
      data: [
        {
          title: ` रिकाम्या जागी वर्तमानकाळ दर्शविणारा योग्य शब्द लिहा `,
          text: `श्रुती उत्तम केशभूषा *करते (करेल)*.
तो वर्तमानपत्र *वाचतो (वाचले)*.
आई चहा *पिते (पिणार)*.
मुले क्रिकेट *खेळत (खेळणार)* आहेत. 
राम शाळेत *गेला (जाणार)* आहे.`
        },
        {
          title: ` रिकाम्या जागी भूतकाळ दर्शविणारा योग्य शब्द लिहा `,
          text: `सचिन क्रिकेट *खेळला (खेळतो)*.
मनिषाने रांगोळी *काढली (काढेल)*.
राधाने गोष्ट *वाचली (वाचेल)*.
काकांनी सफरचंद *कापले (कापणार)* होते.
ती सायकल *चालवत (चालवणार)* होती.`
        },
        {
          title: `  रिकाम्या जागी भविष्यकाळ दर्शविणारा योग्य शब्द लिहा`,
          text: `मी सिनेमाला *जाईल (जाणार होतो)*.
भारत क्रिकेटचा सामना *जिंकेल (जिंकला)*.
श्याम डोंगर *चढत (चढला)*असेल.
राम ने आंबा *खाल्ला (खातो)* असेल.
मी रोज व्यायाम *करत जाईल (करतो)*. `
        }
      ]
    },
    {
      label: 'काळाचे प्रकार ओळखा ',
      type: 'mcq',
      id: 'mcq',
      data: {
        title: ' खालील वाक्यांतील काळाचे प्रकार ओळखा ',
        questions: [
          {
            qText: `रश्मी तबला वाजवते.`,
            options: `वर्तमानकाळ , भूतकाळ, भविष्यकाळ `
          },
          {
            qText: ` रश्मी तबला वाजवेल.`,
            options: ` भविष्यकाळ , वर्तमानकाळ , भूतकाळ `
          },
          {
            qText: `  वंदना अभ्यास करते. `,
            options: `वर्तमानकाळ, भूतकाळ, भविष्यकाळ `
          },
          {
            qText: `रश्मी तबला वाजवत होती. `,
            options: `  भूतकाळ , वर्तमानकाळ, भविष्यकाळ `
          },
          {
            qText: `मी पोहायला शिकणार आहे.`,
            options: `  भविष्यकाळ , वर्तमानकाळ , भूतकाळ `
          }
        ]
      }
    },
    {
      label: ' कथा पूर्ण करा ',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        title: `रिकाम्या जागेत योग्य शब्द भरून कथा पूर्ण करा `,
        text: `आईचा स्वयंपाक *झाला होता*. तिने मला लगेच जेवायला *वाढले* कारण मला शाळेत *जायचे होते*. माझा अभ्यास झाला होता. मी शाळेत *गेलो* आणि आई मंदिरात *गेली*. `
      }
    }
  ]
};
