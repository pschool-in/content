export default {
  id: 'computer-4',
  label: 'Input Devices',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Input Devices',
      type: 'passage',
      id: 'input-notes',
      data: {
        title: 'Input Devices',
        text: `We give instructions to a computer through input devices. 
        # Mouse
        A mouse is an easy to use tool to point and select things. They are widely available with desktop computers. With laptops also, mouse can be connected through an USB port.
        # Touch Screen
        Mouse is not available in smartphones and tablets because we can directly click on the screen and select things.
        # Keyboard
        It is a widely used input device where we can type words and sentences. We use it to type documents, write emails and fill forms.
        Apart from the letters and numbers, we can find lot of other keys in a keyboard. Backspace and Delete key are used to delete content.
        # Arrow Keys
        It is used to move the cursor up, down, left and right. It is also widely used in playing games.
        # Caps lock
        It is a toggleable key which can be turned 'on' or 'off'. If turned 'on', whatever we type, comes in capital letters.
        # Shift Key
        Most of the keys in the keyboard is used to input two characters. For example, '?' and '/' are present in the same key. So to input the other character, we use the Shift key.
        # Print Screen
        It is used to save the screen as an image, which can be stored or shared with others.
        # Ctrl Key
        It is used for giving special instruction to a computer. Some of the common instructions are
        1. ctrl + S : Save a file
        2. ctrl + C : Copy the selected text or file
        3. ctrl + V : Paste the copied content
        4. ctrl + X : Cut the selected text or file
        5. ctrl + P : Print a file
        6. ctrl + Z : Undo last action
        7. ctrl + Y : Redo last action
        8. ctrl + F : Search some text in a file
        9. ctrl + A : Select all content
        10. ctrl + N : Open a new file
        # Functional Keys
        These are special purpose keys present at the top of the keyboard. Usually, there are 12 keys. (from F1 to F12)
        1. F1 : Help
        2. F2 : Rename`
      }
    },
    {
      id: 'match',
      label: 'Match Shortcut keys',
      type: 'match',
      data: [
        `F1,  Help 
Ctrl + A , Select All 
Ctrl + X , Cut
Ctrl + C, Copy
Ctrl + V, Paste
F2, Rename`,

        `Ctrl + N, Open New
Ctrl + S, Save
Ctrl + P, Print
Ctrl + Y, Redo Last
Ctrl + Z, Undo Last
Ctrl + F, Search`
      ]
    },
    {
      label: 'Fill Up',
      type: 'matchByDragDrop',
      id: 'fill-up3',
      data: [
        `If I get confused, I will use *F1*.
        If I have to rename a file, I will use *F2*.
        If I made a mistake, and want to remove the last few changes, I will use *Ctrl + Z*.
        I took printout using *Ctrl + P*, and then I saved the file using *Ctrl + S*.`,

        `To move text from one place to another, first I need to select the text and use *Ctrl + X*, then place the cursor where I want to paste and use *Ctrl + V*.
        To search for the occurence of a particular text in a document, I use *Ctrl + F*.
        To open a new document, I use *Ctrl + N*.
        To select all text, I use *Ctrl + A*.`
      ]
    },
    {
      label: 'Multiple Choice Questions',
      id: 'mcq',
      type: 'mcq',
      data: {
        questions: [
          {
            qText: 'Without input devices, we cannot ________.',
            options: `give instruction to a computer
            use a computer
            see what is happening in a computer
            get an output`
          },
          {
            qText: 'Which of the keys are called special purpose keys?',
            options: 'Functional Keys, Shift and Control keys, Arrow Keys'
          },
          {
            qText: 'Which key is used to rename a file?',
            options: 'F2, F6, Ctrl + R, Shift + R'
          },
          {
            qText:
              'If you want to type every character in capital letter, which key do you use?',
            options:
              'Caps Lock, Shift, Ctrl, Combination of Shift and particular character key'
          },
          {
            qText: 'To duplicate a text, which keys do you use?',
            options: `Ctrl + C and Ctrl + V
            Ctrl + C and Ctrl + P
            Ctrl + X and Ctrl + V
            Ctrl + X and Ctrl + P`
          }
        ]
      }
    },
    {
      label: 'Sequence of Keys',
      type: 'sorting',
      id: 'sort-size',
      data: {
        title:
          'Order the keys: First create a new document, type some text, duplicate the text, search for some text and remove them, save the file and finally take a printout.',
        text: 'Ctrl + N, Ctrl + C, Ctrl + V, Ctrl + F, Ctrl + S, Ctrl + P'
      }
    },
    {
      label: 'Applications We Use',
      type: 'passage',
      id: 'applications-notes',
      data: {
        title: 'Applications We Use',
        text: `Applications are software programs we use in our computers and smartphones.
        # Internet Browsers
        They allow us to connect with the internet. Google Chrome, Mozilla Firefox, Safari are the commonly used browsers.
        # Google
        It is the most famous search engine that helps to search in the internet. For example, if you want to know more about a 'tiger', just google it. You will find lot of information about the tiger.
        # Online Meeting App
        People can conduct online meeting using softwares like Zoom, Skype or Google Meet. Multiple people can connect at the same time. We can talk through a microphone. We can show our face through a web camera. We can also share our screen.
        # Social Media
        It helps us to connect with our friends and also allow us to follow the activities of celebrities and other people. Facebook, Instagram, Twitter are the famous social media applications.
        # Messaging App
        We can easily share photos, videos or text messages through a messaging app like Whatsapp or Telegram.`
      }
    },
    {
      id: 'match-apps',
      label: 'Match the following',
      type: 'match',
      data: [
        `Google, Search Engine
        Whatsapp, Messaging App
        Facebook, Social Media
        Zoom, Online Meeting
        Chrome, Internet Browser`,

        `Skype, Online Meeting
        Instagram, Social Media
        Telegram, Messaging App
        Firefox, Internet Browser
        Amazon, Online Shopping`
      ]
    }
  ]
};
