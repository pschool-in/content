export default {
  id: 'computer-4',
  label: 'Computer-2',
  pdf: '',
  lockAfter: 4,
  list: [
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
      label: 'Common Shortcuts',
      type: 'passage',
      id: 'evolution-computer-2',
      data: {
        title: 'Common Shortcuts',
        text: `# Shortcuts
1. Alt + F - File menu options in the current program.
2. Alt + E - Edits options in the current program.
3. F1 - Universal help 
4. Ctrl + A - Selects all text.
5. Ctrl + X - Cuts the selected item.
6. Ctrl + Del - Cut selected item.
7. Ctrl + C- Copy the selected item.
8. Ctrl + Ins -  Copy the selected item.
9. Ctrl + V - Paste the selected item.
10. Shift + Ins - Paste the selected item.
11. Home  - Takes the user to the beginning of the current line.
12. Ctrl + Home - Go to the beginning of the document.
13. End - Go to the end of the current line.
14. Ctrl + End - Go to the end of a document.
15. Shift + Home - Highlight from the current position to the beginning of the line.
16. Shift + End - Highlight from the current position to the end of the line.
17. Ctrl + (Left arrow) - Move one word to the left at a time.
18. Ctrl + (Right arrow) - Move one word to the right at a time.`
      }
    },
    {
      id: 'match-3',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `F1,  help 
Ctrl + A , Select all 
Ctrl + X , Cut
Ctrl + C, Copy
Ctrl + V, Paste`,
        title: 'Match the following'
      }
    },
    {
      label: 'Answer in one word',
      type: 'matchByDragDrop',
      id: 'fill-up3',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `*Alt + F* is the shortcut for File menu options in the current program.
*Alt + E* opens Edit options in the current program.
*Home* shortcut takes the user to the beginning of the current line.
*End* button take you to the end of the current line.
*Ctrl + End* shortcut takes you to the end of a document.`
      }
    }
  ]
};
