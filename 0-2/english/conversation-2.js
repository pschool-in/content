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
        text: `Emily: Look, Sarah! I found a little kitten outside our gate.
Sarah: Oh, it's so adorable! But it looks lost. We should find its owner.
Emily: Yes, let's knock on our neighbors' doors and ask if it belongs to anyone.
[After knocking on a few doors]
Neighbor: That's my kitten! Thank you for finding her. She must have slipped out of the house.
Emily: You're welcome! We're glad we could help.`
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
        text: `Alex: Hey, Lisa! Have you seen my pencil? It's special.
Lisa: Special? What do you mean?
Alex: Well, whenever I use it to draw, my drawings come to life!
Lisa: That's amazing! Can I see it?
[Alex hands over the pencil]
Lisa: Wow, look at this flower! It looks so real. Can you draw a horse too?
Alex: Sure, here you go. Be careful, it might run away!`
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
        text: `Mary: Hey, Priya, have you seen the ant hill in the garden?
Priya: Yes, it's huge! But why is everyone gathering around it?
Mary: There's an obstacle in their way. They're trying to figure out how to cross it.
Priya: Oh, look! That ant just climbed on top of the obstacle and made a bridge with its body.
Mary: Wow, that ant is so clever! The others can now walk across the bridge.`
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
        text: `Peter: Lily, have you heard about the magical forest behind our school?
Lily: No, really? What's so magical about it?
Peter: Legend has it that if you enter the forest and make a wish, it comes true!
Lily: That's incredible! Let's go and try it out after school.
[In the forest]
Lily: I wish for a pet puppy!
Peter: And I wish for an endless supply of ice cream!
[Suddenly, a cute puppy appears and an ice cream cart rolls by]
Lily and Peter: It worked!`
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
        text: `Meera: Mom, have you seen the key to my diary? I can't find it anywhere.
Mom: I haven't touched it, dear. Did you check your room properly?
Meera: Yes, I searched everywhere. Maybe it fell out of my bag at school.
[The next day at school]
Meera: Hi, Lily. Did you find a key yesterday? It's for my diary.
Lily: Yes, I did! I found it near the library. I thought it looked important.
Meera: Thank you so much, Lily. I was worried. Now my diary is safe again.`
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
    }
  ]
};
