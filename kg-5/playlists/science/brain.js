export default {
  label: 'Brain',
  id: 'brain',
  pageBreaks: '5',
  list: [
    {
      label: 'Brain - Reading',
      type: 'passage',
      slug: '5-brain-passage',
      data: {
        title: 'The Brain',
        text:
          'Brain is the decision maker of our body. It controls all the movements of the body. It is responsible for human intelligence, memory and imagination. \n Brain is the most important organ for us. That is why, we should wear a helmet when you ride a two wheeler. \n # Structure of the Human brain. \n The brain is kept in a bony case called Skull. Skull is made up of eight immovable bones. The brain is protected by three membranes called meninges. The brain is made up of tiny nerve cells called neurons. The brain is the centre of the nervous system. \n The brain is made up of three parts. \n 1. Cerebrum \n 2. Cerebellum \n 3. Medulla oblongata \n # Cerebrum \n 1. It is the largest part of the brain. \n 2. It is responsible for our memory. \n 3. We are able to learn languages, understand signs and symbols with the help of cerebrum. \n 4. The right side of the Cerebrum controls the left side of our body and vice versa. \n 5. Cerebrum is responsible for intelligence, imagination and reasoning. \n # Cerebellum \n 1. It co-ordinates the movements of the muscles of our body. \n 2. It helps to maintain the balance of the body. \n # Medulla oblongata \n 1. It is also called the brain stem. \n 2. It controls the breathing, heart beat and other involuntary muscles. \n 3. It connects the brain to the spinal cord.'
      },
      id: '100'
    },
    {
      label: 'Parts of Brain - Practice',
      type: 'dragAndDrop',
      data: {
        img: 'brain.jpg',
        title: 'Drag and drop the parts of the brain at appropriate places.',
        width: 271,
        height: 368,
        wordWidth: 120,
        words: [
          {
            word: 'Cerebrum',
            x: 20,
            y: 10
          },
          {
            word: 'Medulla oblongata',
            x: 125,
            y: 270
          },
          {
            word: 'Cerebellum',
            x: 10,
            y: 310
          }
        ]
      },
      id: '200'
    },
    {
      label: 'Brain - MCQ',
      type: 'mcq',
      slug: '5-brain-mcq',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText: 'What is the largest part of the brain?',
            options: 'Cerebrum, Cerebellum, Medulla oblongata'
          },
          {
            qText: 'Brain is protected by ________.',
            options: 'skull, hair, neurons, spinal cord'
          },
          {
            qText: 'Which part of the brain controls the movement of muscles?',
            options: 'Cerebellum, Medulla oblongata, Cerebrum'
          },
          {
            qText: 'Which part of the brain controls heart beat?',
            options: 'Medulla oblongata, Cerebrum, Cerebellum'
          },
          {
            qText:
              'Which part of the brain connects the brain to the spinal cord?',
            options: 'Medulla oblongata, Cerebrum, Cerebellum'
          },
          {
            qText: 'Medulla oblongata is also known as _________.',
            options: 'brain stem, neck, root of brain'
          },
          {
            qText: 'The brain is made up of tiny nerve cells called _______.',
            options: 'neurons, meninges, nerves'
          },
          {
            qText: 'Which part of the brain helps in learning a language?',
            options: 'Cerebrum, Cerebellum, Medulla oblongata'
          }
        ]
      },
      id: '300'
    }
  ]
};
