export default {
  label: "Let's Speak",
  id: 'conversation-5',
  lockAfter: 2,
  list: [
    {
      id: 'hobby',
      type: 'passage',
      label: 'Hobbies',
      style: 'big',
      data: {
        title: 'Hobbies',
        text: [
          {
            type: 'html',
            text: `<b>Teacher</b>: Good morning, class!<br>
<b>Students</b>: Good morning, teacher!<br>
<b>Teacher</b>: How are you all doing today?<br>
<b>Students</b>: We're doing well, thank you!<br>
<b>Teacher</b>: That's great to hear. Today, let's talk about our favorite hobbies. Can each of you share what you enjoy doing in your free time?<br>
<b>Ravi</b>: I like playing football. I often play with my friends in the park.<br>
<b>Teacher</b>: That sounds like a fun hobby, and it's a great way to stay active. Who else would like to share?<br>
<b>Veena</b>: I enjoy painting and drawing. I spend a lot of time creating colorful pictures.<br>
<b>Teacher</b>: Wonderful! Artistic hobbies like painting can be very relaxing and help you express your creativity. Anyone else?<br>
<b>Sara</b>: I love reading books. Whenever I have free time, I like to dive into different stories and adventures.<br>
<b>Teacher</b>: Reading is an excellent hobby. It allows you to explore new worlds and learn new things. Does anyone else have a favorite hobby to share?<br>
<b>Abdul</b>: I enjoy playing the piano. I take lessons and practice regularly. It's challenging but also rewarding.<br>
<b>Teacher</b>: That's impressive! Playing a musical instrument can bring joy to both the player and those who listen. Thank you all for sharing your hobbies.`
          }
        ]
      }
    },
    {
      label: 'Choose the correct answer',
      type: 'mcq',
      id: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: "What is Ravi's favorite hobby?",
            options: `Playing football, Reading books, Playing the piano`
          },
          {
            qText: 'What does Veena enjoy doing in her free time?',
            options: `Painting and drawing, Reading books, Playing the piano`
          },
          {
            qText: 'Which hobby does Sara love?',
            options: `Reading books, Playing the piano, Playing football`
          },
          {
            qText: `What is Abdul's favorite hobby?`,
            options: `Playing the piano, Playing football, Painting and drawing`
          }
        ]
      }
    },
    {
      label: 'Who Said?',
      type: 'completeWord',
      id: 'hobby-word',
      data: {
        title: `Identify the speaker of the following dialogues.`,
        text: `"I like playing football. I often play with my friends in the park."|RAVI
"I enjoy painting and drawing. I spend a lot of time creating colorful pictures."|VEENA
"I love reading books. Whenever I have free time, I like to dive into different stories and adventures."|SARA
"I enjoy playing the piano. I take lessons and practice regularly. It's challenging but also rewarding."|ABDUL`
      }
    },
    {
      label: 'Word Matching',
      id: 'fillup-drag',
      type: 'matchByDragDrop',
      data: {
        title: `Match the hobbies mentioned by the students with their corresponding descriptions.`,
        text: `A hobby that involves creating colorful pictures → *Painting and Drawing*
A hobby that involves playing a musical instrument → *Playing the piano*
A hobby that involves playing a sport with friends → *Football*
A hobby that involves exploring stories and adventures → *Reading books*`
      }
    },
    {
      label: 'What Am I?',
      type: 'completeWord',
      id: 'riddle-word',
      data: {
        title: `Solve the riddles.`,
        text: `I have strings but I'm not a puppet. I make beautiful music when you touch me. What am I?|GUITAR
I have a net and a ball, and I'm played on a court. People hit me back and forth, in a game of skill and sport. What am I?|TENNIS
I have colors and brushes, and a canvas to create. With strokes and imagination, masterpieces I make. What am I?|PAINTING
I have pages filled with words, and characters that come to life. Adventure and knowledge, within me they thrive. What am I?|BOOK
I have dice and a board, and pieces to move. Strategy and luck, the game will improve. What am I?|BOARD GAME| B__R_ G_M_
I have pedals and wheels, and I'm ridden for fun. On streets or in parks, under the shining sun. What am I?|BICYCLE
I have hooks and lines, and a river or sea. Catching fish is the thrill, for people like me. What am I?|FISHING
I have a stage and a script, and lines to rehearse. Acting and performing, where dreams immerse. What am I?|THEATER
I have needles and yarn, and stitches to sew. Creating scarves and sweaters, warmth I bestow. What am I?|KNITTING`
      }
    },
    {
      id: 'catching',
      type: 'passage',
      label: 'Catching Up',
      style: 'big',
      data: {
        title: 'Catching Up',
        text: [
          {
            type: 'html',
            text: `<b>Peter</b>: Hey there! How was your day at school?<br>
<b>John</b>: Hi! It was good. We had a really fun math game today. How about you?<br>
<b>Peter</b>: Oh, that sounds interesting! My day was great too. We had an art class and painted some beautiful landscapes.<br>
<b>John</b>: That's awesome! I love art. What colors did you use?<br>
<b>Peter</b>: I used lots of different colors like green, blue, and yellow to create a sunny scene. It was so much fun!<br>
<b>John</b>: Wow, I bet it looks amazing! I can't wait to see it. By the way, have you finished reading the new storybook our teacher gave us?<br>
<b>Peter</b>: Not yet, but I started reading it yesterday. It's about a magical adventure with talking animals. I'm really enjoying it so far.<br>
<b>John</b>: That sounds like a fantastic book! I'll make sure to finish it too, so we can discuss it later.<br>
<b>Peter</b>: Definitely! I can't wait to hear your thoughts. By the way, did you practice for the upcoming school play?<br>
<b>John</b>: Yes, I did! I have my lines memorized, and we had a rehearsal today. It's going to be so much fun performing on stage!<br>
<b>Peter</b>: That's great! I can't wait to watch you perform. You'll do an amazing job, I'm sure.<br>
<b>John</b>: Thanks for the encouragement! I'm a little nervous, but I'm also excited. We've been working hard to make it a great show.`
          }
        ]
      }
    },
    {
      label: 'Choose the correct answer',
      type: 'mcq',
      id: 'mcq-2',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'What subject did Peter have today?',
            options: `Art, Math, Science, English`
          },
          {
            qText: 'What colors did Peter use in his painting?',
            options: `Green, blue, and yellow
Black, white, and gray
Pink, brown, and gray`
          },
          {
            qText: 'What is the book Peter is reading about?',
            options: `Talking animals in a magical adventure
Mystery and detective stories
Science experiments`
          },
          {
            qText: `How does John feel about the upcoming school play?`,
            options: `Excited, Anxious, Bored, Indifferent`
          },
          {
            qText: `What did John do to prepare for the school play?`,
            options: `Memorized his lines
Designed the costumes
Painted backdrops
Wrote the script`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-2',
      type: 'matchByDragDrop',
      data: {
        text: `Peter: Hey there! How was your day at *school*?
John: Hi! It was good. We had a really fun math *game* today.
Peter: Oh, that sounds interesting! My day was great too. We had an *art* class and painted some beautiful landscapes.
John: That's awesome! I love art. What *colors* did you use?
Peter: I used lots of different colors like green, blue, and yellow to create a *sunny* scene.
John: Wow, I bet it looks amazing! I can't wait to *see* it.`
      }
    },
    {
      id: 'match',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Fun, Enjoyable
Beautiful, Pretty
Create, Make
Nervous, Worried
Encouragement, Praise`
      }
    },
    {
      id: 'talent',
      type: 'passage',
      label: 'Friends Forever',
      style: 'big',
      data: {
        title: 'Friends Forever',
        text: [
          {
            type: 'html',
            text: `<b>Peter</b>: Hey, have you heard about the upcoming talent show?<br> 
<b>John</b>: Yes, I have! I'm thinking of participating. I've been practicing my dance moves. What about you?<br>
<b>Peter</b>: That's awesome! I'm planning to sing a song. I've been practicing with my guitar at home.<br>
<b>John</b>: That's fantastic! I can't wait to see your performance. We'll both rock the stage!<br>
<b>Peter</b>: Absolutely! We'll give it our best shot and have a blast. It's going to be an unforgettable event.<br>
<b>John</b>: Definitely! I'm so glad we have these opportunities to showcase our talents and have fun together.<br>
<b>Peter</b>: Me too! Our class is the best. We're not only learning but also having so many wonderful experiences.<br>
<b>John</b>: You said it! We're making memories that we'll cherish for a long time. I'm grateful to have friends like you.<br>
<b>Peter</b>: Aww, same here! Friends make everything better. Let's always support each other and make more amazing memories.<br>
<b>John</b>: Absolutely! Friends forever!`
          }
        ]
      }
    },
    {
      label: 'Choose the correct answer',
      type: 'mcq',
      id: 'mcq-3',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What is John's reaction to Peter's upcoming performance?`,
            options: `He is excited to see it
He is nervous about it
He is not interested`
          },
          {
            qText: 'How does Peter describe the upcoming talent show?',
            options: `Exciting and unforgettable
Stressful and overwhelming
Dull and monotonous`
          },
          {
            qText: 'What does John appreciate about their class?',
            options: `The supportive environment
The strict rules
The challenging assignments`
          },
          {
            qText:
              'How do Peter and John feel about the opportunities to showcase their talents?',
            options: `They are grateful
They are disappointed
They are uninterested`
          },
          {
            qText: `What do Peter and John vow to do for each other?`,
            options: `Support each other
Criticize each other's talents
Compete against each other`
          },
          {
            qText: `How do Peter and John describe their friendship?`,
            options: `Strong and lasting
Superficial and shallow
Distant and cold`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-3',
      type: 'matchByDragDrop',
      data: {
        text: `Peter and John are *excited* about the upcoming talent show.
After *practicing* his dance moves, John feels confident.
The students practiced *playing* their instruments for weeks.
The audience's response to their performance was *fantastic*.
The memories of the talent show will be *unforgettable* and *cherished* by Peter and John.`
      }
    },
    {
      id: 'friend-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'html',
            text: `<b>Showcase</b>: To display or exhibit something in order to demonstrate its qualities or features.<br><br>
<b>Opportunity</b>: Favorable circumstances or situations that offer possibilities for progress, development, or success.<br><br>
<b>Cherish</b>: To hold or treat something dear; to value or appreciate something greatly.<br><br>
<b>Grateful</b>: Feeling or expressing thanks or appreciation for something received or done.<br><br>
<b>Memory</b>: Recollections or impressions of past experiences that are stored in the mind.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'friend-word',
      data: {
        text: `To display or exhibit something in order to demonstrate its qualities or features.|SHOWCASE
Favorable circumstances or situations that offer possibilities for progress, development, or success.|OPPORTUNITY
To hold or treat something dear; to value or appreciate something greatly.|CHERISH
Feeling or expressing thanks or appreciation for something received or done.|GRATEFUL
Recollections or impressions of past experiences that are stored in the mind.|MEMORY`
      }
    },
    {
      id: 'match-2',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Talented, Gifted
Participating, Engaging
Practicing, Rehearsing
Fantastic, Wonderful
Unforgettable, Memorable`
      }
    },
    {
      id: 'match-3',
      label: 'Match: Antonyms',
      type: 'match',
      data: {
        title: `Match the antonym pairs.`,
        text: `Talented, Untalented
Participating, Withdrawing
Practicing, Neglecting
Fantastic, Terrible
Unforgettable, Forgettable`
      }
    },
    {
      id: 'school',
      type: 'passage',
      label: 'A Day at School',
      style: 'big',
      data: {
        title: 'A Day at School',
        text: [
          {
            type: 'html',
            text: `<b>Mom</b>: How was your day at school?<br>
<b>Child</b>: It was great! We had a science experiment in class today. We mixed different colors to create new ones. It was so much fun!<br>
<b>Dad</b>: That sounds like a lot of fun! What colors did you mix, and what new colors did you create?<br>
<b>Child</b>: We mixed red and yellow to make orange, blue and yellow to make green, and red and blue to make purple. It was amazing to see how different colors can be combined to create new ones.<br>
<b>Dad</b>: That's wonderful! Science experiments are always exciting. Did you learn anything else interesting in class?<br>
<b>Child</b>: Yes, we also learned about animals and their habitats. We discussed different environments like the forest, ocean, and desert, and the animals that live in each of them. I even drew a picture of a lion in its natural habitat.<br>
<b>Mom</b>: That's fantastic! I'm glad you're learning about different animals and their habitats. It's important to understand and appreciate the diversity of nature. Is there anything else you'd like to share from your day?<br>
<b>Child</b>: Well, during recess, my friends and I played a game of soccer. We had a mini-tournament, and my team won! I scored two goals, and we all had a great time cheering each other on.<br>
<b>Mom</b>: Congratulations on your victory! Sports are a fantastic way to have fun and stay active. It's great to hear that you had a successful game and enjoyed playing with your friends. Do you have any homework or projects to work on tonight?<br>
<b>Child</b>: Yes, I have a math worksheet to complete, and I need to practice my spelling words. I'll get started on them right after dinner.<br>
<b>Dad</b>: That sounds like a plan. Remember, if you need any help with your homework, we're here for you. It's important to stay on top of your schoolwork. Afterward, we can spend some time together reading a story before bedtime. How does that sound?<br>
<b>Child</b>: That sounds wonderful! I love when we read together. Thank you, Mom and Dad!<br>
<b>Mom</b>: You're welcome, sweetheart. We're always here to support you and make sure you have a great day at school. Now let's get started on that homework so we can have some fun reading time later.`
          }
        ]
      }
    },
    {
      label: 'Choose the correct answer',
      type: 'mcq',
      id: 'mcq-4',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'What did the child do in science class?',
            options: `Conducted a science experiment
Learned about animals
Played soccer`
          },
          {
            qText: 'Which colors were mixed to create orange?',
            options: `Red and yellow
Red and green
Red and blue`
          },
          {
            qText: 'What did the child learn about in class?',
            options: `Animals and their habitats
Soccer tactics
Science experiments`
          },
          {
            qText: `How many goals did the child score in the soccer game?`,
            options: `Two, Three, One`
          },
          {
            qText: `What subjects did the child have homework in?`,
            options: `Spelling and math
Reading and math
Science and spelling`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-4',
      type: 'matchByDragDrop',
      data: {
        text: `In the science experiment, we *mixed* different colors to create new ones.
We mixed red and yellow to make the color *orange*.
The *forest* is a place covered with trees and is home to many animals.
During recess, we played a game of *soccer* and my team *won*.
After dinner, we will spend time *reading* a story together.`
      }
    },
    {
      id: 'match-4',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Happy, Joyful
Small, Tiny
Brave, Courageous
Delicious, Tasty`
      }
    },
    {
      id: 'grandma',
      type: 'passage',
      label: "Grandma's Interview",
      style: 'big',
      data: {
        title: "Grandma's Interview",
        text: [
          {
            type: 'html',
            text: `<b>Child</b>: Hi Grandma! How are you today?<br>
<b>Grandma</b>: Oh, hello, my dear! I'm doing well, thank you. How about you?<br>
<b>Child</b>: I'm good too, Grandma. I have a school assignment to interview a grandparent, and I thought it would be fun to interview you. Is that okay?<br>
<b>Grandma</b>: Of course, my sweet grandchild! I'd be delighted to help you with your assignment. What would you like to know?<br>
<b>Child</b>: Thank you, Grandma! First, can you tell me about your childhood? What was it like when you were my age?<br>
<b>Grandma</b>: Well, when I was your age, life was quite different compared to today. We didn't have fancy gadgets or technology like you do now. Instead, we spent a lot of time playing outdoors with our friends. We enjoyed games like hopscotch, marbles, and hide-and-seek. We had fewer toys, but we still had a lot of fun using our imagination.<br>
<b>Child</b>: That sounds exciting, Grandma! What was your favorite game to play?<br>
<b>Grandma</b>: Oh, there were so many! One of my favorites was playing with paper dolls. We used to cut out different characters from paper and create our own stories and adventures with them. It was like having our own little theater at home.<br>
<b>Child</b>: That sounds really fun, Grandma! Nowadays, I play video games and watch cartoons. Did you have any favorite books or TV shows when you were my age?<br>
<b>Grandma</b>: We didn't have as many TV shows back then, but we did have some classic cartoons like Mickey Mouse and Tom and Jerry. As for books, I loved reading adventure stories, especially ones with pirates and explorers. I remember being transported to different worlds through the pages of those books.<br>
<b>Child</b>: Wow, that's cool, Grandma! I also enjoy reading adventure stories. Did you have any special family traditions or celebrations when you were young?<br>
<b>Grandma</b>: Yes, we had several family traditions. One of my favorites was gathering together for Sunday dinners at my grandparents' house. The whole family would come together, and we would share a delicious meal and talk about our week. It was a time for laughter, storytelling, and bonding with my relatives.<br>
<b>Child</b>: That sounds lovely, Grandma. We have family dinners too, but not every Sunday. What about school, Grandma? Did you enjoy going to school?<br>
<b>Grandma</b>: Yes, I did! I always looked forward to going to school. We had wonderful teachers who taught us different subjects like math, science, and history. We had recess too, where we could play with our friends. One thing I really enjoyed was when the teacher would read stories aloud to the class. It was magical!<br>
<b>Child</b>: It sounds like you had a great time at school, Grandma. Is there any advice you can give me for my own school journey?<br>
<b>Grandma</b>: Absolutely, my dear! First and foremost, always be curious and eager to learn. Pay attention in class, ask questions, and don't be afraid to make mistakes. Remember to be kind to your classmates and help others when you can. And most importantly, believe in yourself and your abilities. With hard work and determination, you can achieve anything you set your mind to.<br>
<b>Child</b>: Thank you so much, Grandma, for sharing your experiences and advice with me. I really enjoyed talking with you.<br>
<b>Grandma</b>: You're very welcome, my dear. I had a wonderful time too. Remember, I'm always here for you whenever you need me.`
          }
        ]
      }
    },
    {
      label: 'Choose the correct answer',
      type: 'mcq',
      id: 'mcq-5',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'What games did Grandma enjoy playing when she was young?',
            options: ` *Hopscotch, marbles, and hide-and-seek
Paper dolls and theater
None of the above`
          },
          {
            qText:
              'Which classic cartoons did Grandma watch when she was a child?',
            options: `Mickey Mouse and Tom and Jerry
SpongeBob SquarePants and Pokémon
The Flintstones and The Jetsons`
          },
          {
            qText:
              "What was one of Grandma's favorite activities during family gatherings?",
            options: `Sharing a delicious meal
Playing video games
Watching movies`
          },
          {
            qText: `What did Grandma enjoy most about going to school?`,
            options: `The magical stories read aloud by the teacher
Skipping classes to have fun
Playing video games during recess`
          },
          {
            qText: `What advice did Grandma give for the child's school journey?`,
            options: `Believe in yourself and be eager to learn
Don't pay attention in class
Avoid asking questions and making mistakes`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-5',
      type: 'matchByDragDrop',
      data: {
        text: `When I was a *child*, I used to play *games* like hopscotch and hide-and-seek.
My favorite game was playing with *paper dolls*, where we would create our own stories.
I enjoyed reading adventure stories about *pirates* and explorers.
Our family had a special *tradition* of gathering together for Sunday dinners.
In school, I learned different subjects like math, *science*, and history.`
      }
    },
    {
      id: 'match-5',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Childhood, Youth
Outdoors, Outside
Imagination, Creativity
Adventure, Expedition
Traditions, Customs`
      }
    }
  ]
};
