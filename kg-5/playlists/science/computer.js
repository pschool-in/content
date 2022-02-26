export default {
  id: 'computer',
  label: 'Computers',
  list: [
    {
      id: 'mcq',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              'The shortcut key to perform a slide show or run a presentation is ________.',
            options: 'F5, Ctrl + S, F1, Ctrl + C'
          },
          {
            qText:
              'In Ms word blank document opens with a default name ______.',
            options: 'Document 1, New Document'
          },
          {
            qText: '________ are resource for storing information.',
            options: 'Files, Subfolder'
          },
          {
            qText: 'The example for presentation software is________.',
            options: 'MS Power point, MS.Excel'
          },
          {
            qText: '________ controls the entire operation of computer',
            options: 'System software, Utility software'
          }
        ]
      }
    },
    {
      id: 'fillup',
      label: 'Fill up by drag - Template',
      type: 'matchByDragDrop',
      data: {
        fontSize: '1rem',
        text: `*Secondary memory* is called the auxiliary memory.
*Operating System* acts as mediator between computer and user hardware.
The keyboard shortcut for paste command is *Ctrl+V*.
*Glow effect*helps in highlighting the text.
A *Slide Show*is a series of slides or pages displayed in the presentation.`,
        title: 'Drag and drop the words at proper places.'
      }
    },

    //computer-3
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
Storage, hard disk
Mouse, point`,
        title: 'Match the following'
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
A device that stores data in digital format is called *optical disk*
A portable, soft magnetic disk with slow access is called *floppy*`
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
    },
    {
      label: 'Evolution of Computer',
      type: 'passage',
      id: 'evolution-computer',
      data: {
        title: 'Evolution of Computer',
        text: `# Evolution to computers
The first use of the word "computer" was recorded in 1613, referring to a person who carried out calculations, or computations.
1. Tally stick: A tally stick was an ancient memory aid device to record and document numbers, quantities, or even messages
2. Abacus: An abacus is a mechanical device used to aid an individual in performing mathematical calculations. It was invented in Babylonia in 2400 B.C.  It is used to perform basic arithmetic operations.
3. Napier’s Bones: Invented by John Napier in 1614. Allowed the operator to multiply, divide and calculate square and cube roots.
4. Slide Rule: Invented by William Oughtred in 1622. Not used for addition or subtraction. 
5. Pascaline: Invented by Blaise Pascal in 1642. It was limited to addition and subtraction. 
6. Stepped Reckoner: Invented by Gottfried Wilhelm Leibniz in 1672. The machine that can add, subtract, multiply and divide automatically. 
7. Jacquard Loom: The Jacquard loom is a mechanical loom, invented by Joseph-Marie Jacquard in 1881.  It is an automatic loom controlled by punched cards. 
8. Arithmometer: A mechanical calculator invented by Thomas de Colmar in 1820. The first reliable, useful, and commercially successful calculating machine.
9. Difference Engine and Analytical Engine: It is an automatic, mechanical calculator invented by Charles Babbage in 1822 and 1834. It was the first mechanical computer.
# Computer Generations         
There are five generations of computers.        
1. First-generation (1946 - 1958): The first computers used vacuum tubes and were very expensive. They relied on machine language and they could only solve one problem at a time.  The input was based on punched cards and paper tape, and the output was in form of printouts. Examples: ENIVAC and UNIVAC-1
2. Second-generation (1959 - 1964): Transistors replaced vacuum tubes. It allowed computers to become smaller, faster, cheaper, more energy-efficient, and more reliable. Second-generation computers used assembly languages. These were also the first computers that stored their instructions in their memory. Examples: IBM 1920, 1BM 1401, etc
3. Third-generation (1965 - 1970): The development of the integrated circuit increased the speed and efficiency of computers. Computers for the first time became accessible to a mass audience.
4. Fourth-generation (1971 - today): The microprocessor brought the fourth generation of computers. These small computers became more powerful. The concept of the Internet was introduced. 
5. Fifth-generation (Today to future): Based on Artificial Intelligence (AI). It is still in development. `
      }
    },
    {
      label: 'True or False',
      id: 'tf',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `A tally stick was an ancient memory aid device.
An abacus is a mechanical device used to aid an individual in performing mathematical calculations.
The Jacquard loom is a mechanical loom.`
          },
          {
            name: 'False',
            text: `We use first-generation computers nowadays.
AI is used in fourth-generation computers.`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `UNIVAC, first-generation
IBM 1920, second-generation
Internet, fourth-generation
AI, fifth-generation`,
        title: 'Match the following'
      }
    },
    {
      label: 'Choose the correct Answer(s)',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              'Vacuum tubes are used in _____________ generation computers.',
            options: 'first, second, third, fourth'
          },
          {
            qText: 'First-generation computer uses ______________ language.',
            options: 'machine, assembly, java'
          },
          {
            qText: 'The concept of IC increased computers ________________.',
            options: '*speed, *accuracy, size, all'
          },
          {
            qText: 'Primitive language is used to command __________________.',
            options: 'ENIVAC, EDAC, EDVAC'
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
        text: `The *first (second)* computers used vacuum tubes and were very expensive.
*Transistors (Capacitors)*replaced vacuum tubes.
The development of the integrated circuit increased the *speed (time)* and efficiency of computers. 
The microprocessor brought the *fourth (fifth)* generation of computers. 
Second-generation computers used *assembly (operating)* languages. `
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
        text: `An ancient memory aid device to record and document numbers, quantities, or even messages is called *tally stick*
A mechanical device used to aid an individual in performing mathematical calculations is called *abacus*
An automatic loom controlled by punched cards is called *jacquard loom*
A mechanical calculator is called *arithmometer*`
      }
    },
    {
      id: 'fillup-3',
      label: 'What does it stand for ?',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `AI - *Artificial (Automatic)* Intelligence
IC - *Integrated (Internet)* Circuit
CPU - Central *Processing (Programming)* Unit`
      }
    },
    {
      id: 'match-2',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `first, 1946
second, 1959
third, 1965
fourth, 1971
fifth, today`,
        title: 'Match the following'
      }
    },
    {
      label: 'Internet',
      type: 'passage',
      id: 'Inteernet',
      data: {
        title: 'Internet',
        text: `# Internet
Internet stands for International Network. It is a vast network that connects computers all over the world. The Internet can be used in various ways.
Uses: searching information, communication, shopping, entertainment, education, airline, and railway ticketing, etc
# Connecting to Internet
The basic requirement to access the internet includes a computer, a web browser, a modem, and a telephone line.
# Important terms
1. World Wide Web(www): it is a collection of websites or web pages stored in web servers. It can be accessed through the internet.
2. Web page: a document that can be displayed in a web browser.
3. Website: it is a collection of web pages. Examples: Wikipedia.org, Google.com, Amazon.com
4. Home page: the first page of a website.
5. Web browser: it is a software application that helps you to access websites on the internet. Examples: Google Chrome, Internet Explorer, Mozilla Firefox, Opera, Safari
6. URL: it stands for Uniform Resource Locator. It refers to the web address.
7. Search engine: it is a website used to search for information on the internet. Examples: Google, Yahoo, Bing, Ask
8. E-mail: it stands for Electronic mail. It is used to send and receive messages in electronic form. Examples: Gmail.com, Yahoo.com, Rediffmail.com
9. Instant messaging: it is used for online chat. It allows an instant response. Examples: Whatsapp, Viber, Line
10. Video conferencing: it is a face to face communication among people at distant locations through the internet. Examples: Skype, Google meet, Facetime, Zoom
11. Social networking: these are websites used to connect to friends and relatives. It allows you to share ideas, information, pictures, events, etc online. Examples: Facebook, Orkut, Twitter, Youtube`
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fill-up3',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `*World Wide Web* is a collection of websites or web pages stored in web servers.
*Web page* is a document that can be displayed in a web browser.
*Website* is a collection of web pages.
*Home page* is the first page of a website.
*Web browser* is a software application that helps you to access websites on the internet`
      }
    },
    {
      label: 'Answer in one word',
      type: 'matchByDragDrop',
      id: 'fill-up4',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `*Search engine* is a website used to search for information on the internet.
*Instant messaging* is used for online chat
*Video conferencing* is a face to face communication among people at distant locations through the internet.
*Social networking* sites are websites used to connect to friends and relatives. `
      }
    },
    {
      label: 'What does it stand for?',
      type: 'matchByDragDrop',
      id: 'fill-up5',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `*Internet* stands for International Network.
*URL* stands for Uniform Resource Locator. 
*E-mail* stands for Electronic mail`
      }
    }
  ]
};

let str = ```
Parts of Computer
1. CPU: It is the brain of the computer. It is the central processing unit. It helps in executing the instructions given by the user.   
2. Mouse:  It is used to pick items on the screen. When the mouse moves, the pointer also moves.
3. Keyboard: It has keys that we use to type numbers and letters. It helps in feeding information to the CPU. 
4. Monitor:  It displays words or pictures processed by a computer. It acts as a display screen.
5. Speaker:  It lets you to hear the sounds from a computer. Each notification has different tones.
6. Storage devices: It helps to store data. It is one of the core functions of the computer.
# Types of storage
1. Primary storage: these are also known as main memory. It includes RAM, ROM, Cache, etc
2. Secondary storage: The CPU cannot access the secondary storage directly. The computer's input or output channels are required to access it. Example: Hard disk
3. Tertiary storage: these are usually very slow and used to store data that is not used frequently. Examples: magnetic tape, optical disk, etc
4. Off-line storage: it is also known as disconnected storage. It is not under the control of the CPU. It must be inserted or connected by a human operator for the computer to access it. Examples: floppy disk, memory card, etc.



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
4. It is unable to make its own decisions.
```;
