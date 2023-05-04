export default {
  id: 'noun-7',
  label: 'Noun',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'noun',
      data: {
        title: 'Noun',
        text: [
          `Nouns are words used to refer to objects, places and living things. Some nouns also refer to feelings and emotions. Nouns can be classified in different ways.
1. Common Noun: A common noun is a general, ordinary name of a person, place, animal, thing or event.`,
          {
            type: 'html',
            text: `Eg: <i>girl</i>, <i>school</i>, <i>pencil</i>, <i>city</i>, <i>bag</i>, <i>cat</i>, <i>driver</i>, <i>festival</i>`
          },
          `2. Proper Noun: A proper noun is a name used for an individual person, place, or organization, spelled with an initial capital letter.`,
          {
            type: 'html',
            text: `Eg: <i>John</i>, <i>the Himalayas</i>, <i>the WHO</i>, <i>India</i>`
          },
          `3. Collective Noun: A collective noun is used to describe a collection of people or things.`,
          {
            type: 'html',
            text: `Eg: <i>bundle</i>, <i>basket</i>, <i>crew</i>, <i>team</i>, <i>pack</i>`
          },
          `4. Abstract Noun: An abstract noun describes a concept, feeling or emotion.`,
          {
            type: 'html',
            text: ` Eg: <i>success</i>, <i>wealth</i>, <i>calm</i>, <i>fear</i>, <i>courage</i>`
          },
          `Nouns can also be classified as countable and uncountable nouns.
1. Countable Noun: Anything that can be counted with numbers is called a countable noun.`,
          {
            type: 'html',
            text: `Eg: <i>child</i>, <i>dog</i>, <i>egg</i>, <i>room</i>, <i>chair</i>`
          },
          `2. Uncountable Noun: Anything that cannot be counted is known as an uncountable noun.`,
          {
            type: 'html',
            text: ` Eg: <i>sugar</i>, <i>oil</i>, <i>milk</i>, <i>rain<i>, <i>faith</i>`
          }
        ]
      }
    },
    {
      id: 'fill-up',
      label: 'Fill up',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks with the right option.`
      },
      data: [
        `A cat *likes (like)* to drink milk.
A *patrol (staff)* of police was having a grand party on the lawn.
The teacher *told (tells)* us to maintain silence.
John *loves (love)* to read American stories.
Gangtok is the capital of *Sikkim (sikkim)*.
A Royal Bengal tiger *looks (look)* great.
A *team (group)* of players was playing cricket.
*Cherries (Cherry's)* are red in color.
*Eggs (Egg)* were broken by Rahul.
London is the home for the *London Eye (london eye)*.`,

        `I have a *bunch (cluster)* of keys on the mat.
Our *team (group)* lost the match.
*Dhoni (dhoni)* is a famous cricketer.
A *fish (Fish)* can stay alive just in water.
The *thieves (thiefs)* ran away with all the ornaments.
A *mouse (mice)* scurried across the kitchen floor.
An apple a day keeps the *doctor (Doctor)* away.
The *children (child)* are laughing and playing together.
*Apples (Apple)* are a good source of fiber and vitamins.
My sister *bought (brings)* a new dress for the party.`,

        `A *child (children)* is playing in the park alone.
The *book (books)* on the table is mine.
My car *needs (need)* an oil change.
She *gave (gives)* me a beautiful flower as a gift, yesterday.
The concert was packed with enthusiastic *fans (fan)*.`
      ]
    },
    {
      type: 'selectWord',
      label: 'Identify Abstract Noun',
      id: 'abstractnoun',
      commonData: {
        title: 'Identify the abstract noun from the following sentences.'
      },
      data: [
        `He is very *honest* in his work.
As he is working hard, his *success* is not far away.
The bad *weather* doesn't allow us to play.
*Punishment* does not stop crimes, but it reduces them.
I finally overcame the *difficulty* in speaking English.`,

        `She showed great *courage* in the face of danger.
*Determination* is key to achieving your goals.
She spoke with *confidence*.
*Beauty* is in the eye of the beholder.
That was a splendid *performance*.`,

        `His *happiness* knew no bounds.
There is some *misunderstanding* between the two brothers.
*Freedom* is a fundamental right that should be enjoyed by all human beings.
*Happiness* is a state of mind.
The *beauty* of nature can inspire us positively.`,

        `*Happiness* is often elusive, but can be found in the simplest of things.
*Wisdom* is gained through experience and reflection.
*Courage* is the willingness to face *fear* and *danger* in order to acheive a goal.
*Patience* is a virtue that will serve you well in life.
She felt a deep sense of *joy* when she saw her children.`,

        `The *beauty* of the sunset took my breath away.
The *power* of music can bring people together.
*Honesty* is the best policy.
*Education* is the key to improving one's life.
Everyone changes with *time*.`
      ]
    },
    {
      label: 'Countable or Uncountable',
      type: 'classifySentence',
      id: 'countable-uncountable',
      commonData: {
        title: 'Classify the underlined noun as countable or uncountable.',
        types: ['Countable', 'Uncountable']
      },
      data: [
        [
          `The *children* are playing in the garden.
*Scientists* say that pollution is a great threat to the environment.
There are a lot of *windows* in our classroom.
The *waiters* in this restaurant are very professional.`,

          `I don't like *milk*.
I prefer *tea*.
My mother uses *butter* to prepare cakes.`
        ],
        [
          `My father drinks two big *glasses* of water every morning.
*Drivers* must be careful; the road is slippery.
Some *policemen* are organizing road traffic to avoid any accidents.
I bought three *bottles* of mineral water for our picnic.`,

          `We need some *glue* to fix this vase.
The *bread* my mother prepares is delicious.
I'd like some *juice* please!`
        ],
        [
          `Successful *candidates* will join the camp later this year.
The *exercises* on this website are interesting.
I met some nice *people* when I was walking along the beach.`,

          `A rise in *oil* prices is inevitable since there is more and more world demand for energy.
Dehydrated babies must drink a lot of *water*.`
        ],
        [
          `My aunt is selling her *car* tomorrow.
Many *trees* were cut down last year.
*Students* work hard for their exams.
Vatsal loves to eat *sweets*.`,

          `Parth bought *rice and pulse* from a supermarket.`
        ],
        [
          `He bought tasty *mangoes* from the market.
There are several ways to solve a *problem*.
My mom loves to chop *vegetables*.`,

          `Goat *milk* is very healthy.
*Water* is a renewable resource.`
        ]
      ]
    },
    {
      label: 'Collective Noun - Notes',
      type: 'passage',
      id: 'collective-noun',
      data: {
        title: 'Collective Noun',
        text: [
          `# Collective Nouns for Animals`,
          {
            type: 'html',
            text: `a <i>swarm</i> of bees <br>  
a <i>shoal/school</i> of fish <br>  
a <i>herd</i> of sheep  <br> 
a <i>fleet</i> of ships <br>  
a <i>flock</i> of birds <br>  
a <i>pride</i> of lions <br>  
a <i>pack</i> of wolves <br>  
a <i>colony</i> of ants   `
          },
          `# Collective Nouns for People`,
          {
            type: 'html',
            text: `a <i>troupe/company/cast</i> of actors <br>    
an <i>army</i>  of soldiers <br>   
a <i>band</i>  of musicians <br>   
a <i>troop</i>  of warriors <br>   
a <i>board</i>  of directors <br>   
a <i>crew</i>  of sailors <br>   
a <i>choir</i>  of singers <br>   
a <i>group</i>  of dancers <br>   
a <i>pack</i>  of thieves <br>   
a <i>team</i>  of players <br>   
a <i>panel/bench</i>  of judges <br>`
          },

          `# Collective Nouns for Objects/Things`,
          {
            type: 'html',
            text: `a <i>deck/pack</i>  of cards <br>  
a <i>packet</i>  of cigarettes <br>  
a <i>range</i>  of mountains <br>  
a <i>bunch</i>  of grapes <br>  
a <i>bouquet</i> of flowers <br>  
a <i>grove</i> of trees`
          }
        ]
      }
    },
    {
      label: 'Fillup with the right collective noun.',
      type: 'matchByDragDrop',
      id: 'drag-drop-collective',
      lockAfter: 1,
      data: [
        `a *flock* of sheep
a *pride* of lions
a *swarm* of bees
a *zoo* of animals
an *album* of photographs`,

        `a *basket* of fruit
a *bunch* of keys
a *galaxy* of stars
a *bundle* of sticks
a *harvest* of wheat`,

        `a *forest* of trees
a *pack* of cards
a *library* of books
a *loaf* of bread
a *shower* of rain`,

        `an *army* of ants
a *board* of chicken
a *catch* of fish
a *cloud* of insects
a *flight* of birds`,

        `a *body* of men
a *choir* of singers
a *class* of students
a *company* of actors
a *crew* of sailors`,

        `a *crowd* of people
a *gang* of prisoners
a *group* of dancers
a *host* of angels
a *pack* of thieves`,

        `a *panel* of experts
a *party* of friends
a *patrol* of police
a *staff* of employees
a *team* of players`,

        `an *army* of soldiers
a *band* of musicians
a *bevy* of ladies
a *body* of directors`
      ]
    },
    {
      label: 'Fill in the blanks.',
      type: 'matchByDragDrop',
      id: 'drag-drop-collective-2',
      lockAfter: 1,
      data: [
        `The captain guided the *team* to play better.
The *flock* of sheep was grazing in the fields.
My father brought a *bouquet* of lilies for my mother.
A *pack* of wolves howled at night.
A *swarm* of bees flew into the garden.`,

        `The hunter carries a *quiver* of arrows.
Our cat gave birth to a *litter* of kittens.
The *army* marched forward on the battlefield.
Can you pass me the *bunch* of keys?
The French destroyed the Armenian *fleet*.`,

        `Do you know about the *cast* of this movie?
The *crew* struggled to lead the ship past the stormy waves.
The *board* decided to appoint Riya as the Manager.
Please clean the *pile* of garbage.
The entire medical *staff* got infected by the Coronavirus.`,

        `The Beatles is a famous *band*.
The *troupe* performed the Macbeth drama.
The Andaman and Nicobar Islands comprise a *group* of 573 islands.
The *jury* passed a unanimous decision.
A *cloud* of dust swirled up during the storm.`,

        `The *herd* of cattle was grazing peacefully in the field.
The *team* of scientists worked tirelessly to find a cure for the disease.
The *flock* of birds flew in a formation across the sky.
The *swarm* of bees buzzed around the hive.
The *group* of tourists took a guided tour of the ancient ruins.`
      ]
    },
    {
      type: 'completeWord',
      id: 'complete-word',
      label: 'Complete Word - Collective Noun',
      data: [
        `A number of people listening to a lecture/concert | AUDIENCE
A group of people who sing in the church or public platforms | CHOIR
A number of judges who are engaged in a case | JURY
A collection of tools | SET
A collection of poems | ANTHOLOGY`,

        `A collection of different types of books | LIBRARY
A group of grapes or nuts on a bunch | CLUSTER
A collection of ducks, chickens or fowls | POULTRY
A number of directors of any institution | BOARD
A number of lions | PRIDE`,

        `A group of stars in the sky | CONSTELLATION
A group of bacteria | CULTURE
A group of penguins | COLONY
A group of fish | SCHOOL
A number of cards | DECK`,

        `A large group of soldiers| ARMY
A group of cow or sheep| HERD
A large group of bees or mosquitoes | SWARM
A group of people who are appointed to make decisions or take action on a particular issue| COMMITTEE
A group of employees| STAFF `,

        `A group of students who are taught together| CLASS
A group of dogs or wolves| PACK
A group of ships or vehicles| FLEET
A large group of people gathered together in one place| CROWD
A group of criminals| GANG`
      ]
    },
    {
      label: 'Types of Nouns - Notes',
      type: 'passage',
      id: 'noun-2',
      data: {
        title: 'Noun',
        text: [
          `Nouns can also be classified as:
1. Singular Noun: A noun that consists of only one person, animal, or thing is called a singular noun.
2. Plural Noun: A noun that is having more than one person, place, thing, or animal is called a plural noun.
3. Masculine Noun: A noun that refers to the 'male' is called a masculine noun. The word masculine means male, so all the words with male gender, be it a person's name, an animal's name, or a bird's name, it is all said to be masculine.
4. Feminine Noun: A noun that refers to the 'female' is called a feminine noun. The word feminine means female, so all the words with female gender, be it a person's name, an animal's name or a bird's name, it is all said to be feminine.
5. Common Gender Noun: A noun that belongs to both males and females.
# Gender Nuetered Language
With growing awareness, people are moving away from gendered terms and embracing gender-neutral language.
Examples of gendered terms	and their gender-neutral terms:`,
          {
            type: 'html',
            text: `Mankind => <i>Humankind</i>  <br>
Policeman, policewoman =>	<i>Police</i> <br>
Fireman =>	<i>Firefighter</i>  <br>
Chairman => <i>Chairperson</i>  <br>
Stewardess, Steward	=> <i>Flight attendant</i>  <br>
Actor, actress	=> <i>Actor</i>  <br>
Common man	=> <i>Common person</i> `
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-n',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What is a collective noun?`,
            options: `A noun that refers to a group of people or things, A noun that describes a concept or idea, A noun that refers to a specific individual or organization`
          },
          {
            qText: `What is a countable noun?`,
            options: `A noun that can be counted with numbers, A noun that cannot be counted, A noun that refers to a group of people or things, A noun that refers to a specific individual or organization`
          },
          {
            qText: `What is a singular noun?`,
            options: `A noun that consists of only one person, animal, or thing.
A noun that refers to both males and females.
A noun that refers to a group of people or things.
A noun that is not specific to any gender.`
          },
          {
            qText: `Which of the following is an example of a plural noun?`,
            options: `Trees, Desk, Cat, House`
          },
          {
            qText: `What is a common gender noun?`,
            options: `A noun that refers to both males and females.
A noun that refers to the 'male'.
A noun that refers to the 'female'.
A noun that is not specific to any gender.`
          }
        ]
      }
    },
    {
      id: 'masculine-feminine',
      label: 'Match the following',
      type: 'match',
      commonData: {
        title:
          'Match the masculine gender with the corresponding feminine gender.'
      },
      data: [
        `Host, Hostess
God, Goddess
Lion, Lioness
Waiter, Waitress
Duke, Duchess`,

        `Emperor, Empress
Governor, Governess
Master, Mistress
Prince, Princess
Tiger, Tigress`,

        `Bachelor, Maid
Brother, Sister
Gentleman, Lady
King, Queen
Monk, Nun
Horse, Mare`,

        `Lord, Lady
Nephew, Niece
Son, Daughter
Uncle, Aunt
Wizard, Witch
Peacock, Peahen`,

        `Buck, Doe
Bull, Cow
Cock, Hen
Drake, Duck
Fox, Vixen`
      ]
    },
    {
      type: 'completeWord',
      id: 'complete-word-gender',
      label: 'Complete Word - Gender',
      commonData: {
        title: 'Complete the masculine word for the given feminine word.'
      },
      data: [
        `girl | BOY
mother | FATHER
maidservant | MANSERVANT
mistress | MASTER
nun | MONK`,

        `grandmother | GRANDFATHER
stewardess | STEWARD
cow | BULL
vixen | FOX
aunt | UNCLE`,

        `niece | NEPHEW
actress | ACTOR
heroine | HERO
bride | GROOM
headmistress | HEADMASTER`,

        `princess| PRINCE
wife| HUSBAND
sister| BROTHER
daughter| SON
queen| KING`,

        `madam| SIR
lady| GENTLEMEN
mare| STALLION
ewe| RAM
cow| BULL`
      ]
    },
    {
      label: 'Making Plurals - Notes',
      type: 'passage',
      id: 'plural',
      data: {
        title: 'Making Plurals',
        text: [
          `There are some rules for changing a singular noun to plural form.
1. The plural of most nouns is formed when -s are added to them.`,
          {
            type: 'html',
            text: `Eg - Ball - Ball<b>s</b><br>
Book - Book<b>s</b><br>
Car - Car<b>s</b><br>
Ear - Ear<b>s</b>`
          },
          `2. Nouns ending in -ch,-s,-sh,-ss, and -x form plural if -es is added to them.`,
          {
            type: 'html',
            text: `Eg -Ben<b>ch</b> - Bench<b>es</b><br>
Bru<b>sh</b> - Brush<b>es</b><br>
Bo<b>x</b> - Box<b>es</b><br>
Cla<b>ss</b> - Class<b>es</b>`
          },
          `3. Most of the nouns ending with -o form their plural when -es is added to their singular.`,
          {
            type: 'html',
            text: `Eg - Buffal<b>o</b> - Buffalo<b>es</b><br>
Carg<b>o</b> - Cargo<b>es</b><br>
Her<b>o</b> - Hero<b>es</b><br>
<i>Exemptions</i>: Bambo<b>o</b> - Bambo<b>os</b><br>
Dynam<b>o</b> - Dynam<b>os</b><br>
Mement<b>o</b> - Mement<b>os</b><br>
Phot<b>o</b> - Phot<b>os</b><br>
Pian<b>o</b> - Pian<b>os</b>`
          },
          `4. If the noun ends with -f or -fe, its plural is formed by adding -ves to its singular.`,
          {
            type: 'html',
            text: `Eg - Cal<b>f</b> - cal<b>ves</b><br>
El<b>f</b> - El<b>ves</b><br>
Hal<b>f</b> - Hal<b>ves</b><br>
<i>Exemptions</i>: Belie<b>f</b> - Belief<b>s</b><br>
Chie<b>f</b> - Chief<b>s</b><br>
Clif<b>f</b> - Cliff<b>s</b><br>
Roo<b>f</b> - Roof<b>s</b><br>
Proo<b>f</b> - Proof<b>s</b>`
          },
          `5. If a noun ends with -y and has a consonant before it, to make it plural we add -ies in place of -y.`,
          {
            type: 'html',
            text: `Eg - Arm<b>y</b> - Arm<b>ies</b><br>
Bab<b>y</b> - Bab<b>ies</b><br>
Cit<b>y</b> - Cit<b>ies</b><br>
<i>Exemptions</i>: Bo<b>y</b> - Boy<b>s</b><br>
Da<b>y</b> - Day<b>s</b><br>
Ke<b>y</b> - Key<b>s</b><br>
Monke<b>y</b> - Monkey<b>s</b><br>
Valle<b>y</b> - Valley<b>s</b>.`
          },
          `6. Some nouns are formed plural by changing the vowels inside them.`,
          {
            type: 'html',
            text: `Eg - F<b>oo</b>t - F<b>ee</b>t<br>
G<b>oo</b>se - G<b>ee</b>se<br>
M<b>a</b>n - M<b>e</b>n<br>
T<b>oo</b>th - T<b>ee</b>th<br>
Wom<b>a</b>n - Wom<b>e</b>n`
          },
          `7. Some nouns don't follow any rules. We need to keep in mind their singular as well as the plural form.`,
          {
            type: 'html',
            text: `Eg - Child - <i>Children</i><br>
Mouse - <i>Mice</i><br>
Louse - <i>Lice</i><br>
Ox - <i>Oxen</i>`
          },
          `8. Some nouns do not differ in their singular and plural.`,
          {
            type: 'html',
            text: `Eg - Deer - <i>Deer</i><br>
Fish - <i>Fish</i><br>
Hundred - <i>Hundred</i><br>
Sheep - <i>sheep</i><br>
Score - <i>Score</i>`
          },
          `9. A noun consisting of 2 or more words, forms its plural by adding -s to its principal word.`,
          {
            type: 'html',
            text: `Eg - Brother in law - Brother<b>s</b> in law<br>
Commander in chief - Commander<b>s</b> in chief<br>
Foot Man - Foot M<b>e</b>n`
          },
          `10. Name of certain apparel/clothing is used as plural.`,
          {
            type: 'html',
            text: `Eg - Aryan's <i>trousers</i> are new.<br>
Her <i>shorts</i> are dirty.<br>
Only white <i>socks</i> are allowed on Saturday in school.<br>`
          },
          `11. Name of some subjects sound plural but they are singular.`,
          {
            type: 'html',
            text: `Eg - <i>Mathematics</i> is a tough subject.<br>
<i>Politics</i> is a gloomy subject.<br>
<i>Economics</i> is a subject that deals with the operations of the financial system.<br>`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-noun',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What is the rule for making plural nouns that end in -ch, -s, -sh, -ss, and -x?`,
            options: `Add -es to the noun, Add -s to the noun, Add -ies to the noun, Add -ves to the noun `
          },
          {
            qText: `What is the rule for making plural nouns that end in -f or -fe?`,
            options: `Add -ves to the noun, Add -es to the noun, Add -s to the noun, Add -ies to the noun`
          },
          {
            qText: `What is the rule for making plural nouns that end in -y and have a consonant before it?`,
            options: `Add -ies to the noun, Change the vowels inside the noun, The singular and plural forms are the same`
          },
          {
            qText: `What is the rule for making plural nouns that consist of 2 or more words?`,
            options: `Add -s to the principal word of the phrase, Add -s to the entire phrase, Add -es to the last word of the phrase,  Change the vowels inside the phrase`
          },
          {
            qText: `Which of the following is an example of a noun that does not differ in its singular and plural form?`,
            options: `Sheep, Mouse, Belief, Valley`
          }
        ]
      }
    },
    {
      id: 'fill-up-singularplural',
      label: 'Fill in the blanks',
      type: 'fillup',
      lockAfter: 1,
      commonData: {
        title: `Fill in the blanks correctly using singular or plural forms of words given in the bracket.`,
        noOptions: true
      },
      data: [
        `This music player needs ten *batteries*.(battery)
All the boys received their new *uniforms* for the match. (uniform)
There are two *lipsticks* in her bag. (lipstick)
*Mice* and *lice* are pests. (mouse, louse)
Some kings had many *wives*. (wife)`,

        `They clicked many *photos*  during their trip to Paris. (photo)
He is wearing a nice pair of *jeans*. (jeans)
Sana got three *dresses* as her birthday present. (dress)
There are five *boxes* filled with sweets. (box)
This year John topped the *Physics* exam. (physics)`,

        `The maid-*servant* washed the dishes in the house. (maid-servant)
These *cities* are famous for tulips. (city)
The man-servant is picking *flowers* from the pot. (flower)
The passer-by was attacked by armed *men*. (man)`,

        `The *children* were playing in the park for hours. (child)
She received a *gift* from her parents on her birthday. (gift)
The *books* on the shelf were all in alphabetical order. (book)
I need to buy some new *shoes* for the upcoming event. (shoe)
The *cars* in the parking lot were all different colors and models. (car)`,

        `The goose killed all the *mice* in the field. (mouse)
These *samosas* were prepared in the hotel. (samosa)
The *commanders*-in-chief of different countries attended the meeting. (commander-in-chief)
The *teachers* at the school were all highly qualified. (teacher)
The *trees* in the park were all different shapes and sizes. (tree)`
      ]
    },
    {
      label: 'Correct or Incorrect',
      type: 'classifySentence',
      id: 'correct-incorrect-noun',
      commonData: {
        title: 'Classify the sentences as correct or incorrect.',
        types: ['Correct', 'Incorrect']
      },
      data: [
        [
          `The men are coming.
The cats ate the fish.
I saw a deer in the park.`,

          `The man are coming.
The cat's ate the fishes.
I saw a deers in the park.`
        ],
        [
          `I need to buy some furniture for my house.
The children are playing in the park.
The people in the room were talking loudly.`,

          `I need to buy some furnitures for my house.
The childrens are playing in the park.
The peoples in the room were all talking loudly.`
        ],
        [
          `The car's tires were all flat.
The food at the restaurant was delicious.
The dogs barking woke up all the neighbors.`,

          `The cars tires were all flat.
The foods at the restaurent were deliciuos.
The dog's barking woke up all the neighbors.`
        ],
        [
          `The girl looks very much like her mother. 
The mistress gave her maidservant a present. 
My aunt was an airplane stewardess once.`,

          `The girl looks very much like his mother. 
The mistress gave his maidservant a present. 
My aunt was an airplane steward once.`
        ],
        [
          `This actress played the part of the heroine in the movie. 
This girl is the bride.
Ms. Lee is our headmistress.`,

          `This actress played the part of the hero in the movie. 
This girl is the groom.
Ms. Lee is our headmaster.`
        ]
      ]
    },
    {
      label: 'Noun Cases - Notes',
      type: 'passage',
      id: 'case',
      data: {
        title: 'Case of Nouns',
        text: [
          `1. Nominative Case: When a noun is used as the subject of the verb, it is called the nominative case.`,
          {
            type: 'html',
            text: `Eg - <i>Karan</i> won the match.`
          },
          `2. Objective Case: When the noun is used as an object of the verb, it is called the objective case.`,
          {
            type: 'html',
            text: `Eg - Chetan Bhagat writes <i>novels</i>. (The word novel is the object of verb writes)`
          },
          `3. Possessive Case: When the noun shows possession, it is called the possessive case.`,
          {
            type: 'html',
            text: `Eg - <i>Pari's</i> book is kept on the bed.`
          }
        ]
      }
    },
    {
      label: 'Identify Case of Noun',
      type: 'classifySentence',
      id: 'identify-case',
      commonData: {
        title:
          'Identify the case of the highlighted noun in the below sentence.',
        types: ['Possessive', 'Nominative', 'Objective']
      },
      data: [
        [
          `*John's* car is in the driveway.
The *teacher's* lesson was informative.`,

          `*John* drove the car to work.
The *teacher* explained the lesson clearly.`,

          `The car hit a *pothole* on the way to work.
The students understood the *lesson*.`
        ],
        [
          `The *cat's* food bowl is empty.
My *sister's* phone is ringing.`,

          `My *sister* answered the phone.
The *cat* meowed for more food.`,

          `My sister hung up the *phone*.
I filled the cat's food *bowl*.`
        ],
        [
          `The *company's* profits are up this year.
Her *father's* car is very fast.`,

          `The *company* announced the profits at the meeting.
*Jack* drove his father's car to the store.`,

          `The employees celebrated the *profits*.
He parked his father's *car* in the parking lot.`
        ],
        [
          `*Pari's* book is kept on the bed.
The *farmer's* crops yielded a good profit.`,

          `The *President* is going to Japan today.
*Dessert* smells so good.
The *mother* teaches the child in the morning.`,

          `The mother teaches the *child* in the morning.
Chetan Bhagat writes *novels*.
The teacher punished the *boy*.`
        ],
        [
          `*Student's* ID card was lost.
*Uncle's* wallet was found by the police.
This is my *mother's* watch.`,

          `*Priyanka* is busy with school work.
The *lawyer* will talk to the judge later.`,

          `The plate is on the *table*.
Gagan has lost his *wallet*.
The river flows into the *sea*.`
        ]
      ]
    }
  ]
};
