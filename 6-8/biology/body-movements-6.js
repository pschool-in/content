export default {
  id: 'body-movements-6',
  label: 'Body Movements',
  lockAfter: 4,
  list: [
    {
      id: 'notes',
      label: 'Body Movements - Reading',
      type: 'passage',
      data: {
        text: `# Human body and its movements
We are able to move some parts of our body easily in various directions, some can only be moved in a single direction and some parts cannot be moved at all. We are able to bend or rotate our body in places where two parts of our body seem to be joined together like the elbow, shoulder or neck. These places are called joints. It is not one long bone from the upper arm to our wrist. It is different bones joined together at the elbow. Similarly, there are many bones present in each part of the body. We can bend or move our body only at those points where bones meet. There are different types of joints in our body to help us carry out different movements and activites.

# Ball and socket joints
When the rounded end of one bone fits into the cavity or hollow space of the other bone it forms the ball and socket joint. Such a joint allows movements in all directions.

# Pivotal joint
The joint where our neck joins the head is a pivotal joint. It allows us to bend our head forward and backward and turn the head to our right and left. In a pivotal joint a cylindrical bone rotates in a ring.

# Hinge joints
Hinge joints only allow back and forth movements. The elbow has a hinge joint.

# Fixed joints
Some joints between bones in our head are different from the other joints . The bones cannot move at these joints. Such joints are called fixed joints. The joint between the upper jaw and the rest of the head is a fixed joint.

# Skeleton
All the bones in our body form a framework that gives shape to our body. This frame work is called the skeleton. We can get an idea about the shape and number of bones in some parts of our body by feeling them. One away to know the shape better would be to look at X-ray images of the human body. When we are hurt, or have an accident, doctors use X-ray images to find out about any possible injuries that might have happened to the bones.
The skeleton is made  up of many bones, joints and cartilages.

# Different types of bones
1. Several small bones that forms the framework of our hand are called *carpals*.
2.  Our rib bones are bent to join the chestbone and the backbone together to form a box. This is called the *rib cage*. There are 12 ribs on each side of the chest. They protect some important internal organs.
3. The *back bone* is made up of many small bones called *vertebrae*. The back bone consists of 33 vertebrae. The rib cage is joined to these bones. 
4. The are two prominent bones on the back where the shoulders lie. They are called *shoulder bones*.
5. *Pelvic bones* enclose the portion of body below the stomach. This is the part you sit on. 
6. The *skull* is made up of many bones joined together. It encloses and protects the brain.

# Cartilage
Some parts of the skeleton are not as hard as the bones and can be bent. These are called cartilage. Our ear is composed of cartilage. Cartilages are also found in the joints of the body.

# Muscle movement
The bone is covered by muscles. The muscle work together to move a bone. When you bent your hand, The muscle is bulged due to contraction. That is it became smaller in length. When contracted, the muscle becomes shorter, stiffer and thicker. It pulls the bone. Muscles work in pairs. When one of them contracts, the bone is pulled in that direction. The other muscle of the pair relaxes. To move the bone in the opposite direction, the relaxed muscle contracts to pull the bone towards its  original position, while the first relaxes. A muscle can only pull. It cannot push. Thus, two muscles have to work together to move a bone. `,
        title: 'Body Movements'
      }
    },
    {
      label: 'Answer in one word',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `What is the framework that gives shape to the body called? - *skeleton*
Additional parts of skeleton that are not as hard as the bones and can be bent - *cartilage*
They work in pairs and help in movement of bones - *muscles*
The hollow space in the bone in which another bone rotates - *cavity*
Joint that allows only back and forth motion - *hinge joint*
Joint that does not allow motion - *fixed joint*`
      }
    },
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `*Ball and socket (Hinge)* joint allows movements in all direction.
*Pivotal (Fixed)* joint allows to move our neck.
*Hinge (Pivotal)* joint allows only back and forth movement.
*Fixed (Hinge)* joint does not allow movement.`
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Neck, Pivotal
Shoulder, Ball and socket
Hinge, Elbow
Fixed, Upper jaw 
Skull, Brain`,
        title: 'Match with appropriate choice'
      }
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: ` The forearm has two bones.
Cockroaches have an outer skeleton.`
          },
          {
            name: 'False',
            text: `The movement and locomotion of all animals are the same.
The finger bones do not have joints.
The cartilages are harder than the bones.`
          }
        ]
      }
    },
    {
      label: 'Match the following',
      type: 'matchByDragDrop',
      id: 'match-drag-drop',
      data: {
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `Have fins on the body - *Fish*
Has an outer skeleton - *Cockroach*
Is an immovable joint - *Upper jaw*
Protect the heart - *Ribs*
Slithers - *Snake*`
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'How many ribs do we have in total?',
            options: `24, 12, 42`
          },
          {
            qText: 'What is not a part of skeleton?',
            options: `Heart, Bone, Cartilage`
          },
          {
            qText: 'What protects the brain?',
            options: `Skull, Ribcage, Pelvis`
          },
          {
            qText: 'Which bone encloses the portion of body below the stomach?',
            options: `Pelvic bones, Backbones, Shoulder bones`
          },
          {
            qText: 'How many vertebraes do we have?',
            options: `33, 22, 11`
          },
          {
            qText: 'Which of the following is a ball and socket joint?',
            options: `Shoulder, Neck, Elbow`
          },
          {
            qText: 'What are the small joints in our hand called?',
            options: `Carpals, Tarples, Pattela`
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fillup-drag-drop',
      data: {
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `Joints of the bones help in the *movement* of the body.
A combination of bones and cartilages forms the *skeleton* of the body.
The bones at the elbow are joined by a *hinge* joint.
The contraction of the *muscles* pulls the bones during movement.
The *bones* are moved by two sets of muscles.`
      }
    },
    {
      id: 'notes-2',
      label: 'Gait of Animals - Reading',
      type: 'passage',
      data: {
        text: `# Gait of an earthworm
The body of an earthworm is made up of many rings joined end to end. An earthworm does not have bones. It has muscles which help to extend and shorten the body. During movement, the earthworm first extends the front part of the body, keeping the rear portion fixed to the ground. Then it fixes the front end and releases the rear end. It then shortens the body and pulls the rear end forward. This makes it move forward by a small distance. Repeating this the earthworm moves through the soil. Its body secretes a slimy susbstance to help the movement. Under its body, it has a large number of tiny bristles projecting out. The bristles are connected with muscles. The bristles help to get a good grip on the ground. The earthworm, actually, eats its way through the soil. Its body then throws away the undigested part of the material that it eats. This activity of an earthworm makes the soil more useful for plants.

# Gait of a snail
The snail has a rounded structure it carries on its back. This is called the shell and it is the outer skeleton of the snail, but is not made of bones. The shell is a single unit and does not help in moving from place to place. It has to be dragged along. A thick structure and the head of the snail may come out of an opening in the shell. The thick structure is its foot, made of strong muscles.

# Gait of a cockroach
Cockroaches walk and climb as well as fly in the air. They have three pairs of legs. These help in walking. The body is covered with a hard outer skeleton. This outer skeleton is made of number of plates joined together and that permits movement. There are two pairs of wings attached to the body behind head. The cockroaches have distinct muscles near the legs move the legs for walking. The body muscles move the wings when the cockroach flies.

# Gait of birds
Birds fly in the air and walk on the ground. Some birds like ducks and swans also swim in water. The birds can fly because their bodies are well suited for flying. Their bones are hollow and light. The bones of the hind limbs are typical for walking and perching. The bony parts of the forelimbs are modified as wings. The shoulder bones are strong. The breastbones are modified to hold muscles of flight which are used to move the wings up and down.

# Gait of a fish
The head and tail of the fish are smaller than the middle portion of the body. The body tapers at both ends. This body shape is called streamlined. The shape is such that water can flow around it easily and allow the fish to move in water.The skeleton of the fish is covered with strong muscles. During swimming, muscles make the front part of the body curve to one side and the tail part swings towards the opposite side. Then, quickly, the body and tail curve to the other side. This makes a jerk and pushes the body forward. A series of such jerks make the fish swim ahead. This is helped by the fins of the tail. Fish also have other fins on their body which mainly help to keep the balance of the body and to keep direction, while swimming.

# How do snakes move?
Snakes have a long backbone. They have many thin muscles. They are connected to each other even though they are far from one another. Muscles also interconnect the backbone, ribs and skin. The snake’s body curves into many loops. Each loop of the snake gives it a forward push by pressing against the ground. Since its long body makes many loops and each loop gives it this push, the snake moves forward very fast and not in a straightline.

# Did you know?
The Gait of Animals is a book written by the ancient Greek philosopher Aristotle. `,
        title: 'Gait of Animals'
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fillup-drag-drop-2',
      data: {
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `Snakes have a long *backbone*.
Strong muscles and light bones work together to help the *birds* fly.
*Snakes* slither on the ground by looping sideways. 
Tiny *bristles* on the underside of the body of the earthworm help in gripping the ground.
*Snails* move with the help of a muscular foot.`
      }
    },
    {
      id: 'mcq-2',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Which of the following animal has a long backbone?',
            options: `Snake, Earthworm, Snail`
          },
          {
            qText: 'Which animal has a body made of rings?',
            options: `Earthworm, Snail, Cockroach`
          },
          {
            qText: 'Who wrote the book "The Gait of Animals"?',
            options: `Aristotle, Martin, Scrooge`
          },
          {
            qText: 'Which bone encloses the portion of body below the stomach?',
            options: `Pelvic bones, Backbones, Shoulder bones`
          },
          {
            qText: 'Which animal loops itself to move forward?',
            options: `Snake, Snail, Lizard`
          },
          {
            qText: 'Which of the following can not fly?',
            options: `Penguin, Crow, Cocckroach`
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fillup-drag-drop-3',
      data: {
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `The body of an *earthworm* is made up of many rings joined end to end.
The *snail* has a rounded structure it carries on its back.
*Cockroaches* walk and climb as well as fly in the air.
The head and tail of the *fish* are smaller than the middle portion of the body.
*Snakes* have a long backbone.`
      }
    },
    {
      id: 'match-2',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Turtle, Crawl
Dolphin, Swim
Cow, Walk
Parrot, Fly
Snake, Slither`,
        title: 'Match animals with their type of locomotion'
      }
    },
    {
      id: 'skeleton',
      label: 'Skeletal System',
      type: 'dragAndDrop',
      data: {
        img: 'skeleton.jpg',
        title: 'Skeletal System',
        width: 350,
        height: 448,
        wordWidth: 70,
        fontSize: '1.2rem',
        words: [
          {
            word: 'vertebrae',
            x: 70,
            y: 160
          },
          {
            word: 'pelvis',
            x: 70,
            y: 200
          },
          {
            word: 'skull',
            x: 60,
            y: 30
          },
          {
            word: 'ribs',
            x: 60,
            y: 110
          },
          {
            word: 'femur',
            x: 70,
            y: 300
          }
        ]
      }
    }
  ]
};
