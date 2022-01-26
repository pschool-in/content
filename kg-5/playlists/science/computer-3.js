export default {
  id: 'computer-3',
  label: 'Computer',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Computer',
      type: 'passage',
      id: 'intro-computer',
      data: {
        title: 'Introduction to Computer',
        text: `# Introduction to computers
A computer is an advanced electronic device that performs both arithmetic and logical operations.
1. CPU: It is the brain of the computer. It is the central processing unit. It helps in executing the instructions given by the user.   
2. Mouse:  It is used to pick items on the screen. When the mouse moves, the pointer also moves.
3. Keyboard: It has keys that we use to type numbers and letters. It helps in feeding information to the CPU. 
4. Monitor:  It displays words or pictures processed by a computer. It acts as a display screen.
5. Speaker:  It lets you to hear the sounds from a computer. Each notification has different tones.
6. Storage devices: It helps to store data. It is one of the core functions of the computer.
# Types of storage
1. Primary storage: these are also known as main memory. It includes RAM, ROM, Cache, etc
2. Secondary storage: The CPU cannot access the secondary storage directly. The computer's input or output channels are required to access it. Example: Hard disk
3. Tertiary storage: these are usually very slow and used to store data that is not used frequently. Examples: magnetic tape, optical disc, etc
4. Off-line storage: it is also known as disconnected storage. It is not under the control of the CPU. It must be inserted or connected by a human operator for the computer to access it. Examples: floppy disc, memory card, etc.
# Uses of computer
1. type document
2. listen to music
3. use the internet
4. send an e-mail
5. play games
6. draw a picture
7. watch movies
8. chat with a friend
# Starting the computer
1. Plugin the computer and all the attached devices.
2. Switch on your UPS to provide an uninterrupted power supply to your computer.
3. Press the power button of the CPU to boot up the computer.
# Shutting down the computer
1. To turn off the computer click on the start button.
2. Then click shut down in the lower right corner of the start button.
# Different keys on the keyboard
Alphabetical keys: There are 26 alphabetical keys on the keyboard.
Numerical keys: There are 10 numerical keys on the keyboard.
Special keys: There are various special keys used to perform different functions.
# Different Special keys
Capslock: This key is used when we want to type a capital letter.
Enter key: It is used to finish a line and move to the next line on the page.
Shift key: It is a modifier key present on both sides of the keyboard. It is used to type capital letters and other alternate 'upper' characters.
# Different buttons on the mouse 
Left mouse button: It is used to point to any menu tool, icon, or for selection of text. We can select multiple entities using this button.
Scroll button: It is used to scroll the page up and down.
Right mouse button: It is used to invoke the shortcut menu.
# Advantages of Computer
1. It is much faster when compared to human beings.
2. It can perform all calculations accurately.
3. It can store large amounts of data.
4. It is more reliable than humans.
5. It can perform a variety of operations on the same set of data.
# Limitations of Computer
1. It has no IQ level.
2. It works on electricity.
3. It cannot think by itself.
4. It is unable to make its own decisions.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `A computer is an electronic device.
A memory card is a storage device.
Off-line storage requires human assistance`
          },
          {
            name: 'False',
            text: `ROM is a secondary storage device.
Monitor feeds information to the CPU.
Tertiary storage is connected to the CPU directly.`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Monitor, display
Keyboard, type
Processing, CPU
Storage, hard disc
Mouse, point`,
        title: 'Match the following'
      }
    },
    {
      label: 'Choose the best Answer',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'What is a cursor?',
            options:
              'a pointer on the screen, noise from the speaker, ink in a printer'
          },
          {
            qText: 'Which is not a storage device?',
            options: 'Scanner, DVD, Hard disc'
          },
          {
            qText: 'What is the use of a joystick?',
            options: 'to play games, to enter data, to listen to music'
          },
          {
            qText: 'Keyborad is used to __________________.',
            options: 'enter data, produce output, see characters'
          }
        ]
      }
    },
    {
      id: 'fillup',
      label: 'Computer- Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `The *control (memory)* unit controls everything that happens inside the computer.
CPU is the *brain (heart)* of the computer.
Off-line storage is also known as *disconnected (connected)* storage.
The CPU *cannot (can)* access the secondary memory directly.
RAM is an example of *primary (secondary)* storage.`
      }
    },
    {
      label: 'Strength or Limitation',
      id: 'strength-limitation',
      type: 'classifySentence',
      data: {
        title:
          'Classify the below sentences as strength or limitation of computer',
        types: [
          {
            name: 'Strength',
            text: `The computer can store large amounts of data.
The computer is more reliable than humans.
The computer can perform a variety of operations on the same set of data.`
          },
          {
            name: 'Limitation',
            text: `It works on electricity.
It is unable to make its own decisions.`
          }
        ]
      }
    },
    {
      label: 'Name the following',
      type: 'matchByDragDrop',
      id: 'name-them',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `A high-speed access area in memory unit is called *cache*
A tape  with data encoded on the magnetic strip is called *magnetic tape*
A device that stores data in digital format is called *optical disc*
A portable, soft magnetic disc with slow access is called *floppy*`
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fill-up2',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The *capslock* key is used when we want to type a capital letter.
*Enter* key is used to finish a line and move to the next line on the page.
The *shift* key is a modifier key present on both sides of the keyboard.
The *left* mouse button is used to point to any menu tool, icon, or for the selection of text. 
The *scroll* button is used to scroll the page up and down.
The *right* mouse button is used to invoke the shortcut menu.`
      }
    },
    {
      id: 'fillup-3',
      label: 'What does it stand for ?',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `RAM - *Random (Read)* Access Memory
ROM - *Read (Random)* Only Memory
CPU - Central *Processing (Programming)* Unit`
      }
    },
    {
      label: 'Strating the Computer',
      type: 'sorting',
      data: {
        title:
          'Arrange the steps in starting the computer in the correct order.',
        text:
          'plugin computer, switch on UPS, press power button on CPU, boot up '
      },
      id: 'sort'
    }
  ]
};
