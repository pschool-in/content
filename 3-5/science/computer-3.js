export default {
  id: 'computer-3',
  label: 'Introduction to Computer',
  pdf: '',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'intro-computer',
      data: {
        title: 'Introduction to Computer',
        text: `A computer is an advanced electronic device. There are different types of computers and it can be used at home, office, laboratory etc.
# Uses of computer
At home we can use a computer to
1. type documents
2. draw pictures
3. browse the internet 
4. send an e-mail
5. play games
7. watch videos
8. chat with a friend
And we can do many more things using a computer.
Below are some of the important characteristics of a computer.
# Speed
A computer can do lot of tasks in few seconds.
# Accuracy
Computers give correct output for every correct input. It doesn't make mistakes like humans.
# Diligence
A computer works for hours without any break. It won't get tired quickly.
# Versatility
A computer performs different types of work at the same time. It is commonly known as multi-tasking.
# Storage
A computer can store lot of data.
# Human vs Computer
Computers don't have feelings and cannot take any decision on its own. It can work only based on the input.`
      }
    },
    {
      label: 'Human vs Computer',
      id: 'true-false-human-computer',
      type: 'classifySentence',
      data: {
        title: 'Read the sentence and identify who it represents.',
        types: [
          {
            name: 'Human',
            text: `I can take my own decision.
            I have feelings.
            I can work without electricity or battery.`
          },
          {
            name: 'Computer',
            text: `I can work for many hours without getting tired.
            I can do lot of works within few seconds.
            I never make mistakes in calculation.
            I can store billions of data.
            I can work on different tasks at the same time without getting confusion.`
          }
        ]
      }
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `We can watch movies using a computer.
            Computers can do lot of work without getting tired.`
          },
          {
            name: 'False',
            text: `Computers are used only in laboratory.
            We cannot listen to songs from a computer.
            Computers are slow in doing calculation.`
          }
        ]
      }
    },
    {
      label: 'Parts of Computer - Notes',
      type: 'passage',
      id: 'notes-parts',
      data: {
        title: 'Parts of Computer',
        text: `The working of a computer can be explained in three steps.
        1. It takes input from an input device.
        2. It does the work by processing the input.
        3. It gives the output through the output device.
        # Input devices
        Keyboard, Mouse, Web camera, Microphone, Scanner, Joystick
        # Output devices
        Monitor, Printer, Speakers
        # Parts of CPU
        CPU is a complex machine present inside the computer and not visible to our eyes.
        `
      }
    },
    {
      label: 'Multiple Choice Questions',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'We give instructions to a computer through ______.',
            options: 'input devices, CPU, hard disk, output devices'
          },
          {
            qText: 'Which of the following is not a character of a computer?',
            options: `It can think on their own and correct our mistakes.
            It can do lot of work without getting tired.
            It can store lot of data.
            It can work on multiple tasks at the same time.`
          },
          {
            qText: 'Which of the following is not an input device?',
            options: 'Speaker, Microphone, Keyboard, Web Camera'
          },
          {
            qText: 'What we cannot do using a computer?',
            options: 'Cooking Food, Taking Photo, Playing Song, Drawing Images'
          },
          {
            qText: 'We can give text input to a computer through a ______.',
            options: 'keyboard, mouse, scanner, printer'
          }
        ]
      }
    },
    {
      label: 'Input vs Output Devices',
      id: 'classify',
      type: 'group',
      data: {
        title: 'Classify the below devices.',
        types: [
          {
            name: 'Input',
            text: 'Keyboard, Mouse, Web camera, Microphone, Scanner'
          },
          {
            name: 'Output',
            text: 'Monitor, Printer, Speakers'
          }
        ]
      }
    },
    {
      label: 'Types of Computer - Notes',
      type: 'passage',
      id: 'notes-types',
      data: {
        title: 'Types of Computer',
        text: `There are many types of computers based on their size, shape and how they work.
        # Desktop
        A desktop computer is big in size. It is kept at a fixed place. It works on electricity. Different parts like CPU, monitor, keyboard, mouse, speaker are connected through wires.
        # Laptop
        It is a small computer and can be placed on one's lap, and hence got its name. It works on batteries and light to carry. So we can easily carry it anywhere. The CPU, monitor, keyboard, and mouse are all in-built. The screen can be folded when not in use.
        # Smartphone
        It is also a computer, also known by the name mobile phone. We can make phone calls, chat with others, take photo, play games, send email etc. It comes with a large display which also takes user input through touches.
        # Tablet
        In terms of size and operation, it comes between smartphone and laptop. It has big screen but cannot be carried freely like smartphone. But it is very light weight when compared to laptop.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false-2',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `We can easily carry a laptop.
            Smartphones work on batteries.`
          },
          {
            name: 'False',
            text: `We can easily carry a desktop.
            Desktop computers work on batteries.
            All data stored in computer are lost once we shutdown.`
          }
        ]
      }
    },
    {
      label: 'Arrange by Size',
      type: 'sorting',
      id: 'sort-size',
      data: {
        title: 'Rearrange the below from the smallest to the biggest.',
        text: 'Smartphone, Tablet, Laptop, Desktop'
      }
    }
  ]
};
