export default {
  id: 'computer-5',
  label: 'Computer System',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Computer System',
      type: 'passage',
      id: 'notes-computersystem',
      data: {
        title: 'Computer System',
        text: `A  computer is made up of software and  hardware.
# Hardware
All physical parts of a computer that can be touched or connected to the computer is called hardware. Eg: monitor, keyboard, CPU, mouse, printer, and speaker
Hardwares can be internal or external.
# External Hardware:
They are visible components connected to a computer. Eg: mouse, keyboard, pendrive, printer. 
# Internal Hardware:
The parts present inside the CPU are called internal hardware. They include motherboard, microprocessor, RAM, Hard disk etc.
# Motherboard
It is an electronic board that holds all other internal hardwares like RAM, microprocessor etc.
# Microprocessor
This is the most important part of a computer and called the brain of a computer. This is responsible for running a software in your computer.
# RAM
It stands for Random Access Memory. It is often called the main memory of the computer. It holds the data and instructions on which computer is currently working. Once we turn off the computer, the data stored in RAM will be lost.
# Hard Disk
It is used to store data permanently. Even if we turn off the computer, the data stored in a hard disk is retained. Usually harddisk have hundreds of times more capacity than RAM.
# Software
It is a set of instructions or programs on which the computer works. Eg: Operating System (OS), Anti Virus, Internet Browser, Search Engine
# Operating System (OS)
It is the most important software in your computer. It is the first software that runs when you start a computer. It manages all the activities of a computer. It is reponsible of running other softwares.  The three famous OS on laptops and desktops are Windows, MacOS and Linux. The two famous OS on smartphones are Android and iOS.`
      }
    },
    {
      label: 'External Vs Internal Hardware',
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
            text: 'motherboard, hard disk, microprocessor, RAM'
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
A pen drive is a storage device.
Output device displays result.`
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
      commonData: {
        fontSize: '1rem'
      },
      data: [
        `Monitor, Output Device
Keyboard, Input Device
Processing, CPU
Storage, Hard Disk
Linux, Operating System`,

        `Windows, Operating System
Keyboard, External Hardware
Motherboard, Internal Hardware
Hard Disk, Permanent Memory
RAM, Temporary Memory`,

        `macOS, Desktop OS
Android, Mobile OS
Image to Paper, Printer
Paper to Image, Scanner
Smartphone, Touch
Desktop, Mouse`
      ]
    },
    {
      label: 'Choose the best Answer',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'CPU has a ______________.',
            options: 'Microprocessor, Microcontrolller, Microphone'
          },
          {
            qText: 'Which is not a storage device?',
            options: 'Scanner, DVD, Hard disk'
          },
          {
            qText: 'Which is not an operating system?',
            options: 'MS word, Linux, Windows'
          },
          {
            qText: 'What is the software that manages other softwares?',
            options: 'Operating System, Anti Virus, Micro Processor, CPU'
          },
          {
            qText: 'Which is not a part of our computer?',
            options: 'Server, Hardware, Software'
          }
        ]
      }
    },
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `*Software (Hardware)* is a set of instructions on which computer works.
CPU is the *brain (heart)* of the computer.
*Windows (MS Word)* is an example of operating system.
*Motherboard (RAM)* helps in keeping all the internal hardwares together.
*Hard Disk (RAM)* is used to store data permanently.
Hardware components that are visible to our eyes are called *external (internal)* hardware.
To get hard copy of a computer output, we use *printer (scanner)*.`
      }
    },
    {
      label: 'Connect',
      type: 'sequence',
      id: 'name-them',
      data: {
        title: 'Based on the below clue, connect letters and form the word.',
        printTitle: 'Form the word using the letters.',
        type: 'clue',
        text: `An input device used to select items on the computer screen.|MOUSE
An output device that gives output on paper.|PRINTER
A device that helps to listen music.|SPEAKER
A device to view images and videos.|MONITOR
A device to convert the content of paper into soft copy. | SCANNER`
      }
    }
  ]
};
