export default {
  label: 'Teaching Modules',
  id: 'teaching-module',
  lockAfter: 2,
  list: [
    {
      id: 'cause',
      type: 'passage',
      label: 'Cause and Effect',
      data: {
        title: 'Cause and Effect',
        text: [
          `Cause and effect stories help students understand the concept of cause and effect in stories and develop their skills in identifying and analyzing cause and effect relationships.
Cause and effect stories are narratives that explore the relationship between actions or events (causes) and their consequences (effects). These stories typically illustrate how a particular action or event leads to specific outcomes, emphasizing the cause-and-effect connection. 
Here are a few examples of cause and effect stories:`,
          {
            type: 'html',
            text: `<i>1. "The Boy Who Cried Wolf":</i><br><br>
<b>Cause</b>: A young shepherd boy repeatedly cries out that a wolf is attacking his flock, causing the villagers to come running.<br><br>
<b>Effect</b>: After the boy falsely alarms the villagers multiple times, they stop believing him.<br><br>
<b>Moral</b>: The story highlights the consequences of lying and the loss of trust that follows.<br><br>
<i>2. "The Ant and the Grasshopper":</i><br><br>
<b>Cause</b>: The ant diligently works during the summer, gathering food and preparing for the winter.<br><br>
<b>Effect</b>: The grasshopper, who spends the summer singing and playing, faces hunger and hardship during the winter.<br><br>
<b>Moral</b>: The story teaches the importance of hard work, planning, and responsibility.<br><br>
<i>3. "The Tortoise and the Hare":</i><br><br>
<b>Cause</b>: The hare boasts about his speed and challenges the tortoise to a race.<br><br>
<b>Effect</b>: The overconfident hare takes a nap during the race, allowing the slow and steady tortoise to win.<br><br>
<b>Moral</b>: The story emphasizes the value of perseverance and steady progress over arrogance and complacency.<br><br>
<i>4. "The Three Little Pigs":</i><br><br>
<b>Cause</b>: Three pigs each build houses out of different materials: straw, sticks, and bricks.<br><br>
<b>Effect</b>: The wolf blows down the houses made of straw and sticks but fails to destroy the brick house.<br><br>
<b>Moral</b>: The story illustrates the importance of hard work, foresight, and making wise choices.`
          },
          `In each of these examples, there is a clear cause-and-effect relationship between the events, and the outcomes are a result of the initial actions or situations. Cause and effect stories are useful for illustrating the consequences of actions and can teach valuable lessons or demonstrate the importance of making responsible choices.`
        ]
      }
    },
    {
      id: 'cause-mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Identify Cause and Effect',
        questions: [
          {
            qText: `Jane misplaced her house key. Jane couldn't get into her house when she returned from work. Identify the cause.`,
            options: `Jane misplaced her house key.
Jane couldn't get into her house when she returned from work.`
          },
          {
            qText: `Jane's friend offered to lend her a spare key. Jane was able to enter her house and retrieve her belongings. Identify the effect.`,
            options: `Jane was able to enter her house and retrieve her belongings.
Jane's friend offered to lend her a spare key.`
          },
          {
            qText: `Tim was playing baseball in the backyard. Tim accidentally hit the baseball through the living room window. Identify the cause.`,
            options: `Tim was playing baseball in the backyard.
Tim accidentally hit the baseball through the living room window.`
          },
          {
            qText: `Tim's parents scolded him for not being careful. Tim felt guilty and promised to be more cautious next time. Identify the effect.`,
            options: `Tim felt guilty and promised to be more cautious next time.
Tim's parents scolded him for not being careful.`
          },
          {
            qText: `Tom stayed up very late studying for the exam. Tom felt tired and exhausted during the test. Identify the cause.`,
            options: `Tom stayed up very late studying for the exam.
Tom felt tired and exhausted during the test.`
          },
          {
            qText: `Tom struggled to concentrate due to lack of sleep. Tom didn't perform as well on the exam as he had hoped. Identify the effect.`,
            options: `Tom didn't perform as well on the exam as he had hoped.
Tom struggled to concentrate due to lack of sleep.`
          },
          {
            qText: `Sarah noticed her friend, Emily, was feeling sad. Sarah decided to surprise Emily with a thoughtful gift to cheer her up. Identify the cause.`,
            options: `Sarah noticed her friend, Emily, was feeling sad.
Sarah decided to surprise Emily with a thoughtful gift to cheer her up.`
          },
          {
            qText: ` Emily received the gift and felt loved and appreciated. Emily's mood improved, and she thanked Sarah for her kindness. Identify the effect.`,
            options: `Emily's mood improved, and she thanked Sarah for her kindness.
Emily received the gift and felt loved and appreciated.`
          },
          {
            qText: `Alex left the faucet running while getting distracted by a phone call. The bathtub overflowed, causing water to flood the bathroom floor. Identify the cause.`,
            options: `Alex left the faucet running while getting distracted by a phone call.
The bathtub overflowed, causing water to flood the bathroom floor.`
          }
        ]
      }
    },
    {
      id: 'reality',
      type: 'passage',
      label: 'Fantasy and Reality',
      data: {
        title: 'Fantasy and Reality',
        text: [
          `Fantasy and reality are two contrasting concepts often explored in literature and storytelling. While reality refers to the everyday world we live in, fantasy transports us into realms filled with magic, supernatural beings, and extraordinary events. 
Here are a few examples of stories that illustrate the difference between fantasy and reality:`,
          {
            type: 'html',
            text: `<i>1. "Harry Potter" series by J.K. Rowling:</i><br><br>
This beloved series takes place in a fantasy world where wizards and witches attend a magical school called Hogwarts. The story introduces us to a world of spells, potions, mythical creatures, and an ongoing battle between good and evil.<br><br>
<i>2. "To Kill a Mockingbird" by Harper Lee:</i><br><br>
Set in the 1930s, this novel portrays the harsh realities of racial prejudice and injustice in the southern United States. It follows the journey of Scout Finch as she navigates her childhood and observes the complexities of her society.<br><br>
<i>3. "The Chronicles of Narnia" by C.S. Lewis:</i><br><br>
In this fantasy series, a group of children stumbles upon a magical wardrobe that transports them to the land of Narnia. There, they encounter talking animals, mythical creatures, and witness an epic battle between good and evil.<br><br>
<i>4. "The Great Gatsby" by F. Scott Fitzgerald:</i><br><br>
This classic novel is set in the 1920s and explores the American Dream, wealth, and the emptiness of materialism. It provides a realistic portrayal of the Jazz Age, showcasing the lives of the wealthy elite and the disillusionment that lies beneath their extravagant lifestyles.<br><br>
<i>5. "The Lord of the Rings" trilogy by J.R.R. Tolkien:</i><br><br>
This epic fantasy tale takes place in the fictional world of Middle-earth and follows a diverse group of characters on a quest to destroy a powerful ring. It delves into themes of heroism, friendship, and the struggle between good and evil.<br><br>
<i>6. "The Catcher in the Rye" by J.D. Salinger:</i><br><br>
Set in the 1950s, this novel offers a glimpse into the mind of Holden Caulfield, a disillusioned teenager grappling with the phoniness of the adult world. It presents a raw and introspective exploration of teenage angst, identity, and the challenges of growing up.`
          },
          `These examples highlight the contrasting elements of fantasy and reality in storytelling. Fantasy stories transport us to magical worlds and push the boundaries of imagination, while reality-based narratives delve into the complexities of our own society and human experiences.`
        ]
      }
    },
    {
      label: 'Fantasy or Reality',
      id: 'fantasy-reality',
      lockAfter: 1,
      type: 'classifySentence',
      commonData: {
        title: 'Classify as Fantasy or Reality.',
        types: ['Fantasy', 'Reality']
      },
      data: [
        [
          `Dragons breathing fire and flying through the sky.
Magic spells and wizards casting them.
A mythical creature like a unicorn or mermaid.`,

          `Eating a meal and feeling satisfied.
Going for a walk in a park.`
        ],
        [
          `Traveling through time to the past or future.
Teleportation or instant transportation.`,

          `Having a conversation with a friend.
Reading a book and gaining knowledge.
Taking a nap and feeling refreshed afterwards.`
        ],
        [
          `Superhuman abilities, such as flying or teleportation.
Alternate dimensions or parallel universes.`,

          `Scientific discoveries and theories.
Physical laws and principles.
Technological advancements and inventions.`
        ],
        [
          `Talking animals or sentient objects.
Fairy tales and folklore.
Epic quests and heroic adventures.`,

          `Personal achievements and setbacks.
Cultural practices and traditions.`
        ],
        [
          `Supernatural beings like vampires or werewolves.
Mythological gods and goddesses.`,

          `Real-world locations and landmarks.
Natural phenomena like rain, sunlight, and gravity.
Historical events and figures.`
        ]
      ]
    },
    {
      id: 'compare',
      type: 'passage',
      label: 'Compare and Contrast',
      data: {
        title: 'Compare and Contrast',
        text: [
          `When we compare two things, we highlight their similarities, focusing on the common aspects they share. It helps to identify shared characteristics, qualities, or features between the two items being compared. The purpose of comparison is to bring out these similarities, which can help in understanding relationships, making choices, or drawing conclusions.`,
          {
            type: 'html',
            text: ` <i>Example:</i><br><br>
Let's compare apples and oranges. Both apples and oranges are fruits, round in shape, and have seeds inside. They are also both a good source of vitamins and minerals. By comparing them, we can recognize that they share these common attributes as fruits.<br><br>
When we contrast two things, we emphasize their differences, highlighting how they are distinct from each other. Contrasting helps to identify the unique characteristics, qualities, or features that set the two items apart. This comparison method is valuable for making informed decisions, understanding diversity, or recognizing individuality.<br><br>
Now, let's contrast apples and oranges. Apples have a thin, edible skin, while oranges have a thicker, peelable skin. Apples are typically sweeter and have a crunchier texture, whereas oranges are tangy and juicy. By contrasting them, we can understand the differences that make each fruit unique.<br><br>
In summary, comparing focuses on similarities between two things, while contrasting emphasizes their differences. Both methods provide valuable insights for understanding and categorizing information effectively.<br><br>
<i>Example: Lily and Mia's Adventure</i><br><br>
Listen to the story. How are Lily and Mia alike? How are they different?<br><br>
<i>Lily and Mia are best friends. Lily is 9 years old, and Mia is 10 years old. One sunny day, they decided to go on an adventure in their neighborhood. Lily wore her purple hat, and Mia wore her green hat. They set off on their bikes, exploring the streets and parks. Lily loved the colorful flowers in the park, while Mia enjoyed climbing on the playground equipment. They both had a great time playing and laughing together. As they continued their adventure, they came across an ice cream truck. Lily couldn't resist the temptation and chose a chocolate ice cream cone. Mia, on the other hand, preferred strawberry ice cream. They sat on a bench, savoring their treats and sharing stories. After their snack, they stumbled upon a small stream in the woods. Lily loved the sound of water and wanted to stay and play by the stream, but Mia was more interested in finding insects and observing nature. They compromised and spent some time exploring the stream before moving on. As the sun began to set, Lily and Mia realized it was time to head home. They hopped back on their bikes, feeling tired but happy. They knew they had experienced a wonderful adventure together and couldn't wait to plan their next one.</i>`
          },
          `In this story, Lily and Mia are alike in their love for outdoor activities and their enjoyment of each other's company. They both have a sense of curiosity and adventure. However, they differ in their preferences for ice cream flavors, age and their specific interests within nature (flowers vs. insects). Despite their differences, they respect each other's choices and find ways to compromise, making their friendship strong and their adventure memorable.`
        ]
      }
    },
    {
      id: 'main',
      type: 'passage',
      label: 'Main idea and Summary',
      data: {
        title: 'Main idea and Summary',
        text: [
          `The main idea of a story refers to the central concept or theme that the author is trying to convey to the reader. It captures the core message or purpose of the story. Summarizing a story involves providing a concise overview of the plot, characters, and key events, highlighting the most important elements without going into excessive detail. 
# Main Idea:
The main idea is the fundamental concept or lesson that the author wants readers to take away from the story. It is the overarching theme that ties all the elements of the narrative together. Identifying the main idea helps readers grasp the deeper meaning and purpose of the story.
# Summarizing:
Summarizing a story involves condensing its plot and key elements into a concise overview, capturing the main events and central characters. A well-crafted summary provides readers with a quick understanding of the story's content without getting into unnecessary details.
Here are a few examples of main ideas and summaries of well-known stories:`,
          {
            type: 'html',
            text: `<i>1. "The Lord of the Rings" by J.R.R. Tolkien:</i><br><br>
<b>Main Idea</b>: The triumph of good over evil, the power of friendship, and the importance of courage and sacrifice.<br><br>
<b>Summary</b>: Frodo Baggins embarks on a perilous journey to destroy the One Ring and prevent the dark lord Sauron from conquering Middle-earth. Along the way, he forms a fellowship with various characters who must confront their fears and make sacrifices to save their world.<br><br>
<i>2. "Pride and Prejudice" by Jane Austen:</i><br><br>
<b>Main Idea</b>: The exploration of love, social class, and the need to overcome personal biases and prejudices.<br><br>
<b>Summary</b>: The story revolves around Elizabeth Bennet, a young woman in 19th-century England, as she navigates the complexities of courtship, marriage, and societal expectations. It challenges societal norms and stereotypes while highlighting the importance of genuine love and personal growth.<br><br>
<i>3. "The Boy Who Cried Wolf"</i><br><br>
<b>Main Idea</b>: Honesty is essential because lying can lead to severe consequences.<br><br>
<b>Summary</b>: In this classic fable, a young shepherd boy repeatedly deceives his village by falsely claiming that a wolf is attacking his sheep. As a result, the villagers stop believing him, and when a real wolf eventually appears and threatens the flock, nobody comes to his aid.<br><br>
<i>4. "The Tortoise and the Hare":</i><br><br>
<b>Summary</b>: A speedy hare boasts about his swiftness, challenging a slow but determined tortoise to a race. The hare, overconfident in his abilities, takes a nap during the race, allowing the tortoise to steadily plod ahead and win.<br><br>
<b>Main Idea</b>: Slow and steady wins the race. It teaches the value of perseverance, patience, and humility.<br><br>
<i>5. "The Lion and the Mouse":</i><br><br>
<b>Summary</b>: A small mouse accidentally wakes up a mighty lion. In return for sparing the mouse's life, the lion is later saved by the mouse when it gnaws through a hunter's net, freeing the lion.<br><br>
<b>Main Idea</b>: Kindness is never wasted, no matter how small the act. It teaches the significance of compassion, gratitude, and the idea that even the weak can help the strong.<br><br>
<i>6. "The Ant and the Grasshopper":</i><br><br>
<b>Summary</b>: While an ant works diligently, storing food for the winter, a grasshopper spends his time singing and playing. When winter arrives, the grasshopper is left hungry, while the ant has enough to survive.<br><br>
<b>Main Idea</b>: Hard work and preparation lead to success. It emphasizes the importance of foresight, responsibility, and the consequences of laziness.`
          }
        ]
      }
    },
    {
      id: 'sequencing',
      type: 'passage',
      label: 'Sequencing',
      data: {
        title: 'Sequencing',
        text: [
          `Sequencing refers to organizing events or steps in a logical order based on their occurrence in time. It is a crucial skill for understanding stories, processes, and instructions. 
Sequencing involves arranging events in chronological order, indicating what happened first, what happened next, and what happened last. This helps create a clear and coherent narrative, ensuring that the reader or listener can follow the flow of events smoothly.`,
          {
            type: 'html',
            text: `<i>Example: Making a sandwich</i><br><br>
First: <i>Sarah gathered the ingredients for her sandwich - two slices of bread, lettuce, tomatoes, cheese, and mayonnaise.</i><br><br>
Next: <i>She placed the slices of bread on a plate and spread a layer of mayonnaise on one slice.</i><br><br>
Last: <i>Sarah then added lettuce, tomatoes, and cheese to the mayonnaise-covered slice, placed the other bread slice on top, and pressed the sandwich together.</i>`
          },
          `In this example, the sequence is as follows:
1. Gathering ingredients
2. Spreading mayonnaise
3. Assembling the sandwich
By using sequencing, the events are presented in a logical order, making it easier for the reader or listener to understand the process of making a sandwich step by step. This method can be applied to various contexts, such as telling a story, explaining a recipe, or describing a series of actions in a specific order.`
        ]
      }
    },
    {
      id: 'order-pigs',
      label: 'Order the sentences',
      type: 'sorting',
      data: {
        title: 'Order the sentences based on the story "The Three Little Pigs"',
        text: `The first pig builds a house of straw, the second pig builds a house of sticks, and the third pig builds a house of bricks.
The wolf comes and blows down the first two houses.
The wolf tries to enter the third pig's house but fails to blow it down.
The wolf attempts to enter the house through the chimney but ends up falling into a pot of boiling water.
The pigs celebrate their victory and live happily ever after.`
      }
    },
    {
      id: 'order-red',
      label: 'Order the sentences',
      type: 'sorting',
      data: {
        title:
          'Order the sentences based on the story "Little Red Riding Hood"',
        text: `Little Red Riding Hood is sent to deliver food to her sick grandmother.
Little Red Riding Hood meets the wolf in the forest, who learns about her destination and plans to reach there before her.
The wolf disguises himself as the grandmother and tricks Little Red Riding Hood into believing he is her relative.
A woodcutter hears the wolf snoring and saves Little Red Riding Hood and her grandmother by cutting open the wolf's stomach.
Little Red Riding Hood learns the importance of not talking to strangers.`
      }
    },
    {
      id: 'story',
      type: 'passage',
      label: 'Story Elements',
      data: {
        title: 'Story Elements',
        text: [
          {
            type: 'html',
            text: `The beginning of a story introduces the main characters and establishes the setting. For example:<br><br>
<i>"Once upon a time in a small village nestled in the mountains, there lived a young girl named Emily. She had a deep love for adventure and would often explore the lush forests that surrounded her village."</i><br><br>
The middle of a story is where the events and the plot unfold. These events can be exciting, suspenseful, or even challenging for the characters. For example:<br><br>
<i>"One day, while venturing deeper into the forest, Emily stumbled upon an ancient map hidden within a hollow tree. Intrigued, she embarked on a quest to uncover the long-lost treasure marked on the map. Along her journey, she encountered dangerous creatures, solved riddles, and faced unforeseen obstacles that tested her courage."</i><br><br>
The ending of a story reveals how the problem or conflict introduced in the plot is resolved. It provides closure to the narrative and often showcases the growth or transformation of the characters. For example:<br><br>
<i>"After countless trials and tribulations, Emily finally reached the hidden cave where the treasure lay. But to her surprise, she discovered that the true treasure wasn't gold or jewels but the knowledge and self-belief she had gained throughout her journey. With a newfound sense of purpose, she returned to her village, sharing her wisdom and inspiring others to embark on their own adventures."</i><br><br>
In this example, the problem solution was not just finding the treasure but also discovering personal growth and inspiring others.<br>
These are just basic elements of a story, and the actual structure and content can vary depending on the narrative style, genre, and author's creative choices.`
          }
        ]
      }
    }
  ]
};
