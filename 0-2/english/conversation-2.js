export default {
  label: "Let's Speak",
  id: 'conversation-2',
  lockAfter: 2,
  list: [
    {
      id: 'kitten',
      type: 'passage',
      label: 'The Lost Kitten',
      style: 'big',
      data: {
        title: 'The Lost Kitten',
        text: [
          {
            type: 'html',
            text: `<b>Emily</b>: Look, Sarah! I found a little kitten outside our gate.<br>
<b>Sarah</b>: Oh, it's so adorable! But it looks lost. We should find its owner.<br>
<b>Emily</b>: Yes, let's knock on our neighbors' doors and ask if it belongs to anyone.<br><br>
[After knocking on a few doors]<br><br>
<b>Neighbor</b>: That's my kitten! Thank you for finding her. She must have slipped out of the house.<br>
<b>Emily</b>: You're welcome! We're glad we could help.`
          }
        ]
      }
    },
    {
      id: 'kitten-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: 'What did Emily find outside their gate?',
            options:
              'A little kitten, A lost puppy, A lost bird, A stray squirrel'
          },
          {
            qText: `Why did Sarah suggest finding the kitten's owner?`,
            options: `Because the kitten looked lost
Because she wanted to sell the kitten
Because she wanted to keep the kitten
Because she was scared of the kitten`
          },
          {
            qText: `What did Emily and Sarah do to find the kitten's owner?`,
            options: `They knocked on their neighbors' doors
They put up posters around the neighborhood
They took the kitten to an animal shelter
They called their friends to ask if they owned the kitten`
          },
          {
            qText:
              'How did the neighbor react when they found out the kitten belonged to them?',
            options: `They thanked Emily and Sarah for finding the kitten
They asked Emily and Sarah to keep the kitten
They ignored Emily and Sarah`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'kitten-word',
      data: {
        text: `Very cute or lovable.|ADORABLE
Unable to find one's way.|LOST
Slide unintentionally.|SLIP
People who live close to each other.|NEIGHBOR`
      }
    },
    {
      id: 'pencil',
      type: 'passage',
      label: 'The Magic Pencil',
      style: 'big',
      data: {
        title: 'The Magic Pencil',
        text: [
          {
            type: 'html',
            text: `<b>Alex</b>: Hey, Lisa! Have you seen my pencil? It's special.<br>
<b>Lisa</b>: Special? What do you mean?<br>
<b>Alex</b>: Well, whenever I use it to draw, my drawings come to life!<br>
<b>Lisa</b>: That's amazing! Can I see it?<br><br>
[Alex hands over the pencil]<br><br>
<b>Lisa</b>: Wow, look at this flower! It looks so real. Can you draw a horse too?<br>
<b>Alex</b>: Sure, here you go. Be careful, it might run away!`
          }
        ]
      }
    },
    {
      id: 'pencil-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: `What makes Alex's pencil special?`,
            options: `It brings drawings to life.
It never needs sharpening.
It has a unique design.
It can draw realistic flowers.`
          },
          {
            qText: `How does Lisa react when she sees Alex's flower drawing?`,
            options: `She finds it unbelievable.
She dislikes the drawing style.
She wants to draw her own flower.`
          },
          {
            qText: `What does Alex warn Lisa about when he gives her the pencil?`,
            options: `The drawings might come to life and run away.
The pencil might break easily.
The pencil might be too sharp.
The drawings might disappear.`
          },
          {
            qText: `Alex's pencil has a __________ feature that brings his drawings to life.`,
            options: `special, spacial, spetial`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'pencil-word',
      data: {
        text: `To go or escape suddenly.|RUN AWAY|_U_ A_A_
Extraordinary or incredible.|UNBELIEVABLE|U__E_I__A__E
To cease to be visible.|DISAPPEAR|_I__P_E_R
One of a kind or without equal.|UNIQUE`
      }
    },
    {
      id: 'ant',
      type: 'passage',
      label: 'The Clever Ant',
      style: 'big',
      data: {
        title: 'The Clever Ant',
        text: [
          {
            type: 'html',
            text: `<b>Mary</b>: Hey, Priya, have you seen the ant hill in the garden?<br>
<b>Priya</b>: Yes, it's huge! But why is everyone gathering around it?<br>
<b>Mary</b>: There's an obstacle in their way. They're trying to figure out how to cross it.<br>
<b>Priya</b>: Oh, look! That ant just climbed on top of the obstacle and made a bridge with its body.<br>
<b>Mary</b>: Wow, that ant is so clever! The others can now walk across the bridge.`
          }
        ]
      }
    },
    {
      id: 'ant-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: `What are the ants trying to do near the ant hill?`,
            options: `Cross an obstacle
Create a gathering spot
Build a bridge
Find food`
          },
          {
            qText: `The ants are trying to figure out how to ________ the obstacle.`,
            options: `cross, create, find, skip`
          },
          {
            qText: `What did the ant do to help the others cross the obstacle?`,
            options: `Made a bridge with its body
Called for help
Climbed over it
Removed the obstacle`
          },
          {
            qText: `The ants ___________ leaves and twigs to construct the bridge.`,
            options: `gather, get together, move`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'ant-word',
      data: {
        text: `A structure that connects two points over an obstacle.|BRIDGE
The physical structure of a living organism.|BODY
To come together in one place.|GATHER
Something that blocks or hinders progress.|OBSTACLE
Quick-witted or intelligent.|CLEVER`
      }
    },
    {
      id: 'forest',
      type: 'passage',
      label: 'The Magical Forest',
      style: 'big',
      data: {
        title: 'The Magical Forest',
        text: [
          {
            type: 'html',
            text: `<b>Peter</b>: Lily, have you heard about the magical forest behind our school?<br>
<b>Lily</b>: No, really? What's so magical about it?<br>
<b>Peter</b>: Legend has it that if you enter the forest and make a wish, it comes true!<br>
<b>Lily</b>: That's incredible! Let's go and try it out after school.<br><br>
[In the forest]<br><br>
<b>Lily</b>: I wish for a pet puppy!<br>
<b>Peter</b>: And I wish for an endless supply of ice cream!<br><br>
[Suddenly, a cute puppy appears and an ice cream cart rolls by]<br><br>
<b>Lily and Peter</b>: It worked!`
          }
        ]
      }
    },
    {
      id: 'forest-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: `Which of the following best describes the magical forest?`,
            options: `A place where wishes come true.
A forest behind the school.
A mysterious place with hidden treasures.
A forest filled with enchanted creatures.`
          },
          {
            qText: `The __________ forest was filled with sparkling lights and mystical creatures.`,
            options: `enchanted, cursed, mysterious, haunted`
          },
          {
            qText: `According to the __________, anyone who finds the hidden treasure will be granted eternal happiness.`,
            options: `legend, book, map, fable`
          },
          {
            qText: `Lily closed her eyes and made a silent __________ for her dream to come true.`,
            options: `wish, whisper, spell, cry`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'forest-word',
      data: {
        text: `Having special powers or properties beyond the realm of nature.|MAGICAL
A traditional story or narrative handed down through generations.|LEGEND
A desire or longing for something to happen or be true.|WISH
Under the influence of magic or possessing magical qualities.|ENCHANTED`
      }
    },
    {
      id: 'key',
      type: 'passage',
      label: 'The Mystery of the Missing Key',
      style: 'big',
      data: {
        title: 'The Mystery of the Missing Key',
        text: [
          {
            type: 'html',
            text: `<b>Meera</b>: Mom, have you seen the key to my diary? I can't find it anywhere.<br>
<b>Mom</b>: I haven't touched it, dear. Did you check your room properly?<br>
<b>Meera</b>: Yes, I searched everywhere. Maybe it fell out of my bag at school.<br><br>
[The next day at school]<br><br>
<b>Meera</b>: Hi, Lily. Did you find a key yesterday? It's for my diary.<br>
<b>Lily</b>: Yes, I did! I found it near the library. I thought it looked important.<br>
<b>Meera</b>: Thank you so much, Lily. I was worried. Now my diary is safe again.`
          }
        ]
      }
    },
    {
      id: 'key-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Choose the correct option',
        questions: [
          {
            qText: `Where did Meera find her missing key?`,
            options: `At school near the library
In Lily's bag
Her mom had it all along`
          },
          {
            qText: `Meera was ___________ about her missing key.`,
            options: `worried, scared, happy, sad`
          },
          {
            qText: `Where did Meera think she might have lost the key to her diary?`,
            options: `At school, In her bag, In her room, In the library`
          },
          {
            qText: `Whom did Meera ask about the key?`,
            options: `Her mom, Her teacher, The librarian, School staff`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'key-word',
      data: {
        text: `A book for recording personal experiences and thoughts.|DIARY
A place where books are kept for borrowing or reference.|LIBRARY
Having great value or significance.|IMPORTANT
Feeling anxious or concerned about something.|WORRIED`
      }
    },
    {
      id: 'cafeteria',
      type: 'passage',
      label: 'At the School Cafeteria:',
      data: {
        title: 'At the School Cafeteria:',
        text: [
          {
            type: 'html',
            text: `<b>Student A</b>: Hi, can I sit here?<br>
<b>Student B</b>: Of course! This seat is free. What's your name?<br>
<b>Emma</b>: My name is Emma. What's yours?<br>
<b>Alex</b>: I'm Alex. Nice to meet you, Emma!`
          }
        ]
      }
    },
    {
      id: 'hobbies',
      type: 'passage',
      label: 'Hobbies and Favourites',
      data: {
        title: 'Hobbies and Favourites',
        text: [
          {
            type: 'html',
            text: `<b>Emma</b>: What do you like to do in your free time?<br>
<b>Alex</b>: I love drawing and painting. What about you?<br>
<b>Emma</b>: I enjoy playing soccer with my friends. It's a lot of fun!<br><br>
<b>Emma</b>: What's your favorite animal?<br>
<b>Alex</b>: I really like dolphins. They're so smart and playful. What about you?<br>
<b>Emma</b>: I love elephants. They're big and gentle. They're my favorite!`
          }
        ]
      }
    },
    {
      id: 'family',
      type: 'passage',
      label: 'Family',
      data: {
        title: 'Family',
        text: [
          {
            type: 'html',
            text: `<b>Emma</b>: How many people are there in your family?<br>
<b>Alex</b>: In my family, there are four people—my mom, dad, sister, and me. What about you?<br>
<b>Emma</b>: I have a big family. I live with my parents, two brothers, and my grandparents.<br><br>
<b>Emma</b>: Which season do you like the most?<br>
<b>Alex</b>: I love spring because the weather is nice, and flowers bloom. What about you?<br>
<b>Emma</b>: I enjoy summer because I can go swimming and play outside all day.`
          }
        ]
      }
    },
    {
      id: 'weekend',
      type: 'passage',
      label: 'Weekend Plans',
      data: {
        title: 'Weekend Plans',
        text: [
          {
            type: 'html',
            text: `<b>Emma</b>: What are you doing this weekend?<br>
<b>Alex</b>: I'm going to the park with my family. We'll have a picnic and play games. How about you?<br>
<b>Emma</b>: I'm going to visit my grandma. We'll bake cookies together and watch a movie.`
          }
        ]
      }
    },
    {
      id: 'playground',
      type: 'passage',
      label: 'The School Playground',
      data: {
        title: 'The School Playground',
        text: [
          {
            type: 'html',
            text: `[The school playground on a sunny day.]<br><br>
<b>Sarah</b>: (running towards Tim) Hi, Tim! Let's play on the swings!<br>
<b>Tim</b>: Sure, Sarah! I love swinging high!<br>
<b>Emma</b>: (approaching Sarah and Tim) Hi, guys! Can I join you?<br>
<b>Sarah</b>: Of course, Emma! We're happy to have you here.<br><br>
[Children playing on the swings.]<br><br>
<b>Tim</b>: Look, Sarah! I can go higher than you!<br>
<b>Sarah</b>: Oh no, you don't! I'll swing higher than anyone!<br>
<b>Emma</b>: Wow, you guys are amazing! I'll try to swing higher too!`
          }
        ]
      }
    },
    {
      id: 'slides',
      type: 'passage',
      label: 'Slide Race',
      data: {
        title: 'Slide Race',
        text: [
          {
            type: 'html',
            text: `[Children playing on the slide.]<br><br>
<b>Jack</b>: (slyly) Hey, Sarah! Want to see who can slide down the fastest?<br>
<b>Sarah</b>: (excitedly) Sure, Jack! Let's do it!<br><br>
[They line up on the slides.]<br><br>
<b>Jack</b>: Ready... Set... Go!<br><br>
[They slide down, Sarah wins.]<br><br>
<b>Sarah</b>: (cheering) I won, Jack! That was so much fun!<br>
<b>Jack</b>: (grinning) You got me this time, Sarah. Let's play something else! `
          }
        ]
      }
    },
    {
      id: 'teacher',
      type: 'passage',
      label: 'Mrs. Johnson',
      data: {
        title: 'Mrs. Johnson',
        text: [
          {
            type: 'html',
            text: `[Children playing on the seesaw.]<br><br>
<b>Emma</b>: (giggling) I love the seesaw! Who wants to join me?<br>
<b>Sarah</b>: I'm in, Emma!<br>
<b>Tim</b>: Count me in too! Let's go!<br><br>
[They balance on the seesaw, laughing and having fun.]<br>
[Mrs. Johnson approaches the children.]<br><br>
<b>Mrs. Johnson</b>: Hi, everyone! Having a great time, I see.<br>
<b>Sarah</b>: Yes, Mrs. Johnson! We're having a blast!<br>
<b>Emma</b>: We played on the swings, slid down the slide, and now we're on the seesaw!<br>
<b>Mrs. Johnson</b>: That's wonderful to hear. Remember to take turns and play safely, okay?<br>
<b>Tim</b>: Yes, Mrs. Johnson! We'll be careful! `
          }
        ]
      }
    },
    {
      id: 'tag',
      type: 'passage',
      label: 'Game of Tag',
      data: {
        title: 'Game of Tag',
        text: [
          {
            type: 'html',
            text: `[Children playing together.]<br><br>
<b>Sarah</b>: Let's play a game of tag, everyone!<br>       
<b>Emma</b>: Oh, I love tag! I'll be the first to chase!<br>          
<b>Jack</b>: (excitedly) Run, run, run!<br><br>    
[They run around, chasing and laughing.]<br>
[Playtime ends.]<br><br>
<b>Sarah</b>: (catching her breath) Phew, that was so much fun!<br>
<b>Tim</b>: We had a great time, Sarah. Thanks for playing with us, Emma!<br>
<b>Emma</b>: Thank you both for being such good friends. I had a blast!`
          }
        ]
      }
    },
    {
      id: 'classroom',
      type: 'passage',
      label: 'Back to the Classroom',
      data: {
        title: 'Back to the Classroom',
        text: [
          {
            type: 'html',
            text: `[Children walking back to the classroom.]<br><br>
<b> Mrs. Johnson</b>: I hope you all had a fantastic time at the playground!<br>
<b>Sarah</b>: Yes, Mrs. Johnson! We played and laughed so much!<br>
<b>Tim</b>: Emma joined us too. We made a new friend!<br>
<b>Mrs. Johnson</b>: That's lovely to hear. Remember, recess is a time for fun and friendship.<br>
<b>Emma</b>: We'll always remember that, Mrs. Johnson!<br><br>
[Children happily chatting while walking back to the classroom.]`
          }
        ]
      }
    }
  ]
};
