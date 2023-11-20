export default {
  id: 'everyday-science-4',
  label: 'Everyday Science',
  pdf: 'everyday-science-4.pdf',
  lockAfter: 2,
  list: [
    {
      label: 'Gadgets - Passage',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Gadgets',
        text: `A gadget is a small electronic machine or device which does something useful. Some gadgets have changed our lives. They make our lives enjoyable. Examples: Laptop, Phone, Camera, Pen drive, Speaker
# Smart Phones
Apart from communication, smartphones can access the internet and store files, take photos, track location and much more.
# Portable Music Player
It stores and plays thousands of songs. We can listen to songs anywhere, anytime.
# Tablets
People use tablets to read books, play games and watch videos.
# Pen Drive
It is a small gadget used for storing and transferring any type of file in/from a computer.
# Electric Torch
Portable hand-held electric light. A torch is used to provide light in dark places when it is switched on.
There are many advantages to using gadgets. But too much of anything is not good. As responsible kids, we should put a time limit on using gadgets.
Watching the screen of a mobile or TV for long hours will affect our eyesight. It also makes us lazy and we get diseases like obesity.
In the previous generation, there were no gadgets like smartphones and tablets. Children used to play outdoor games which involved a lot of running and exercises. Keeping this in mind, kids should play a lot of outdoor games, rather than playing video games.
# Internet
The Internet allows us to connect with anyone in the world present in different places. Students can attend online classes only because of the internet.`
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Music Player, Songs
Smart Phone, Communication
Electric Torch, Light
Pen drive, Stores Data
Tablet, Read books`,
        fontSize: '1rem',
        title: 'Match the following'
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
            qText: ' What is essential for the working of gadgets?',
            options: 'Electricity, Sunlight, Clean house'
          },
          {
            qText: 'What do we use while going to unfamiliar places?',
            options: 'Google Map, Facebook, Youtube'
          },
          {
            qText: 'What is the best habit to have for kids?',
            options:
              "Have a time limit for using gadgets, Avoid using gadgets, Watch videos but don't play games."
          },
          {
            qText:
              'What is the most important requirement for attending online class?',
            options: 'Internet, Mic, Camera'
          },
          {
            qText: 'Which is the best gadget for reading books?',
            options: 'Tablet, Pen drive, Music Player, Smartwatch'
          }
        ]
      }
    },
    {
      type: 'completeWord',
      label: 'Complete the Word',
      data: {
        images: 'custom',
        text: `camera|CAMERA |_AME_A
headphone|HEADPHONE| _EAD_HONE
pendrive|PENDRIVE |_EN_RIVE
remote|REMOTE |_EMOTE
smartphone|SMARTPHONE |_MART_HONE
speaker|SPEAKER|_PEAKE_
tablet|TABLET |_AB_ET
torch|TORCH|_ORCH`
      }
    },
    {
      type: 'sequence',
      label: 'Jumbled Word',
      id: 'jumbled-words',
      data: {
        title: 'Find the word.',
        text: 'laptop, camera, smart, phone, speaker'
      }
    },
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `A gadget is a small *electronic (electric) * machine.
*Pen drive (Mouse) * is used to store files.
Watching the *screen (camera)* of mobile for a long hours will affect our eyesight.
In the *previous (current) * generation, there were not many gadgets.
*Internet (Websites)* connects the world.`
      }
    }
  ]
};
