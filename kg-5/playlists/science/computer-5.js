export default {
  id: 'computer-5',
  label: 'Computer-3',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Computer System',
      type: 'passage',
      id: 'computersystem',
      data: {
        title: 'Computer System',
        text: `# What is a computer?
A computer is an electronic device that accepts data, stores it and processes it to give a result. It uses the input data to give desired outputs based on the instruction that is given. A  computer is made up of hardware and software devices.
# Hardware
All the parts of the computer that can be touched or connected to the computer include hardware devices.
Examples of hardware devices are a monitor, keyboard, CPU, mouse, printer, and speaker.
The computer hardware is classified into two.
1. Internal Hardware: the parts that are inside the CPU comprise internal hardware. They include the motherboard, hard disc drive, microprocessor, RAM, etc
2. External Hardware: the parts that are connected to the outside of the computer system include external hardware. They include monitor, keyboard, speaker, etc
# Software
It is a set of instructions or programs on which the computer works. Some examples are web browsers, games, Windows OS, Microsoft Word, etc
The software can be classified into two groups.
1. System software: these are programs that control and manage all the activities of a computer. Operating system (OS) is an example of system software. It is the interface between a user and the computer.
2. Application software: it is run by the system software. It allows users to perform specific tasks.
# Working of a computer
A computer accepts raw data as input and processes it with help of programs and gives an output. A computer has four functions.
1. Accepts data (Input): it is the raw information entered into a computer from the input devices.
2. Processes data (Process): it is the work done on input data. It is done by CPU.
3. Produce result (Output): it is the final result a computer gives out.
4. Store result (Storage): computer stores data in storage devices for later use.
# Input devices
They are used to provide data and instruction to the computer. Commonly used input devices are: Keyboard, Microphone, Scanner, Barcode reader, Webcam, Light pen, Joystick, Touchpad, Light pen, Digital camera, etc
# Output Devices 
They provide output. Output can be of two formats. The output we see on the monitor is softcopy. The printed copy of the output is the hard copy. Commonly used output devices are: Monitor, Printer, Speakers, Headphone, etc
# Central Processing Unit (CPU)
It is the brain of the computer. It is made of three components.
1. Control unit
2. Arithmetic logic unit
3. Memory unit
# Storage devices
It is used to store data. The most common storage devices are: Hard disc, Compact disc, Digital versatile disc, Blu-ray disc, USB flash drive, Memory card, etc`
      }
    },
    {
      label: 'External Vs Internal',
      id: 'external-internal',
      type: 'group',
      data: {
        title: 'Classify the below devices as internal or external hardware.',
        types: [
          {
            name: 'External',
            text: 'scanner, monitor, mouse, speaker'
          },
          {
            name: 'Internal',
            text: 'motherboard, hard disc, microprocessor, RAM'
          }
        ]
      }
    },
    {
      label: 'System Vs Application',
      id: 'system-application',
      type: 'group',
      data: {
        title: 'Classify the below software as system or application software.',
        types: [
          {
            name: 'System',
            text: 'MS-DOS, Windows, Unix, Linux'
          },
          {
            name: 'Application',
            text: 'MS Word, Google Chrome, MS Powerpoint'
          }
        ]
      }
    },
    {
      label: 'Input Vs Output',
      id: 'input-output',
      type: 'group',
      data: {
        title: 'Classify the below devices as input or output devices.',
        types: [
          {
            name: 'Input',
            text: 'keyboard, mouse, scanner, webcam'
          },
          {
            name: 'Output',
            text: 'printer, speaker, monitor'
          }
        ]
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
Output device display result.`
          },
          {
            name: 'False',
            text: `The monitor is an input device.
Input is the processed data.
Printed data is called soft copy.`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Monitor, output
Keyboard, input
Processing, CPU
Storage, memory unit
Linux, system software`,
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
            qText: 'CPU is known as ______________.',
            options: 'Microprocessor, Microcontrolller, Microphone'
          },
          {
            qText: 'Which is not a storage device?',
            options: 'Scanner, DVD, Hard disc'
          },
          {
            qText: 'Which is not an operating system?',
            options: 'MS word, Linux, Windows'
          },
          {
            qText: 'Which unit carries out arithmetic operations?',
            options: 'ALU, CPU, VDU '
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
        text: `*Software (Hardware)* is a set of instructions on which computer works.
The *control (memory)* unit controls everything that happens inside the computer.
*ALU (CPU)* performs arithmetic operations.
CPU is the *brain (heart)* of the computer.
Computer works on the *principle (process)* of Input- Process-Output cycle.`
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
        text: `An input device used to point and access items on the computer - *mouse*
A unit that performs logical operations - *ALU*
An output device that prints output on paper - *printer*
A device that helps to listen to music - *speaker*
A device that is known as VDU - *monitor*`
      }
    },
    {
      label: 'Answer in one word',
      type: 'matchByDragDrop',
      id: 'fill-up2',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The devices that provide data - *input* devices
Storage unit in CPU - *memory* unit
The brain of the computer - *CPU*
The output that is seen on the computer - *softcopy*
Also known as Visual Display Unit - *monitor*`
      }
    },
    {
      id: 'match-2',
      label: 'What does it stand for ?',
      type: 'match',
      data: {
        text: `Control unit, CU
Compact disc, CD
Memory unit, MU
Microsoft, MS`,
        title: 'Match the following'
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fill-up-4',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `*Operating* system is an example of system software.
A hard disc is a *storage* device.
The devices that provide raw data to the computer are called *input* devices
Application software is run by *system* software.
*Software* controls the working of the computer.`
      }
    },
    {
      label: 'Working of computer',
      type: 'sorting',
      data: {
        title: 'Arrange processes in the sequence they occur.',
        text: 'Accepts data, Processes data, Produces results, Stores results.'
      },
      id: 'sort'
    },
    {
      type: 'rightOne',
      id: 'odd-one-out',
      label: 'Odd one out',
      data: {
        title: 'Pick the odd one out.',
        fontSize: '1.3rem',
        noCaps: true,
        text: `monitor, keyboard, mouse, scanner 
touchscreen, printer, speaker, headphones
MS word, Linux, Unix, MS-DOS`
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
