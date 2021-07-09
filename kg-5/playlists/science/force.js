export default {
  label: 'Force',
  id: 'force',
  list: [
    {
      label: 'Force - Reading',
      type: 'passage',
      slug: '3-force-passage',
      data: {
        title: 'Force: Push and Pull',
        text:
          'In everyday life, we push or pull things to move them. A push or pull is called force. This force helps us to do many things. It can make an object move. It can  stop a moving object. It can change the shape of an object, change the speed of the moving object and change the size of the object. There are different types of forces that act on a body. \n  When you throw a ball up, no matter how high it goes, it is sure to come down. This is because of gravitational force. This force attracts objects to the center of the earth. \n When two objects touch each other, a special type of force develops between them. This special force is called friction. Friction slows down movements. When friction is very less, things move easily. When friction is more, it becomes difficult to move things. A wet floor is slippery because there is very little friction. Friction makes it possible for you to write. You cannot hold a pencil in your hand without friction. It would slip out from your hands. The pencil cannot make a mark on the paper without friction.'
      },
      id: '100'
    },
    {
      label: 'Force - MCQ',
      type: 'mcq',
      slug: '3-force-mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: '_________ helps to pull big and heavy things?',
            options: 'engine, computer, television'
          },
          {
            qText: 'Kicking a ball is an example of a _________',
            options: 'push, pull, speed'
          },
          {
            qText:
              'A ball is pushed to the top of a hill. When it rolls down, it will _____________',
            options: 'go faster, go slower, stop'
          },
          {
            qText: 'Picking up a ball is an example of _______',
            options: 'pull, push, stretch'
          },
          {
            qText: 'When I ____________________, I move it away from me.',
            options: 'kick a ball, pull a chair'
          },
          {
            qText: "A push or pull cannot change an object's _________ .",
            options: 'weight, direction, shape '
          }
        ]
      },
      id: '200'
    },
    {
      label: 'Push and Pull - Classify',
      type: 'group',
      slug: '3-push-pull',
      data: {
        title: 'Drag and drop: Classify push and pull.',
        types: [
          {
            name: 'Push',
            text: 'kicking a ball, Switching on light, pedaling cycle '
          },
          {
            name: 'Pull',
            text: 'putting on gloves, lifting weights'
          }
        ]
      },
      id: '300'
    }
  ]
};
