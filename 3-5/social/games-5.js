export default {
  id: 'games-5',
  label: 'Games',
  lockAfter: 4,
  list: [
    {
      id: 'notes',
      label: 'Traditional Games and Martial Arts',
      type: 'passage',
      data: {
        text: `# Traditional games
People in India have enjoyed playing traditional games such as kabaddi, kho-kho, gilli-danda, wrestling, boat racing, shatranj, pachisi, etc for thousands of years. Similarly, there are some forms of martial arts, like kalaripayatu, thang-ta and thoda that are a part of India's proud and ancient culture.
# Martial arts of India
Martial arts are a form of mock fights that have been developed into a form of art by people who practise them. It also improves a person's physical and mental strength.
Thang-ta: It is the traditional martial art from Manipur. It is a fight against one or more opponents using a sword and a spear. Both men and women practice this martial arts form. It teaches breathing techniques, meditation and involves rituals.
Kalaripayattu: It is one of the oldest art forms in the world. A kalaripayattu demonstration includes physical exercises and mock fights both armed and unarmed. It is a silent combat and women practice it too. It is very similar to Karate and Kung fu, the martial art forms of Japan and China.
Thoda: It is the martial arts from Himachal Pradesh. It uses a bow and arrow. The name thoda comes from the round piece of wood that is fixed to the head of the arrow to prevent injuries while fighting. The archers aim at the leg of the opponent, below the knee.
# Traditional sports of India
Boat race: Snake boat race is held as a part of Onam celebration in parts of Kerala. The boats used in this thrilling contest of Vallamkali, are kite-tailed and shaped like a swan.
Wrestling: Also called kushti, wrestling as a sport has a long history in India. Since ancient times wrestling has been practiced for bodybuilding. 
# Did you know?
1. Thoda is held at Baisakhi festival.
2. Manipuri originated from thang-da
3. The trainer of kalaripayattu is called gurukal`,
        title: 'Games of India'
      }
    },
    {
      label: 'Name the following',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        title: 'Drag and drop the words at proper place.',
        fontSize: '1rem',
        text: `A dance form which originated from thang-da - *Manipuri*
The kalaripayattu trainer - *Gurukal*
The state where onam is celebrated - *Kerala*
Wrestling also called - *kushti*`
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `vallamkali, boat
thang-da, spear
thoda, bow
pachisi, dice
kalaripayattu, sword`,
        title: 'Match with appropriate choice'
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        title: 'Drag and drop the words at proper place.',
        fontSize: '1rem',
        text: `Thoda is the martial art form from *Himachal Pradesh*.
Kalaripayattu is similar to *Kung fu*.
Karate is the martial art form of *Japan*.
*Kabaddi* is a traditional Indian game.`
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              'Which form of martial art originated from Himachal Pradesh?',
            options: 'thoda, kalaripayattu, thang-ta'
          },
          {
            qText: 'What is another name for wrestling?',
            options: 'kushti, akada, kabaddi'
          },
          {
            qText: 'Which game is an ancient form of cricket?',
            options: 'gilli-danda, kho-kho, shatranj'
          },
          {
            qText: 'Kung-fu is the martial art form of which country?',
            options: 'China, Japan, Korea'
          }
        ]
      }
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Martial arts is a form of mock fights.
In thoda, the archers aim at the legs of the  opponents below the knee.
Vallamkali is a part of Onam celebration.`
          },
          {
            name: 'False',
            text: `Kung-fu originated from Japan.
Karate originated from China.
Kalaripayattu is played with spears.`
          }
        ]
      }
    }
  ]
};
