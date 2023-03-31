export default {
  id: "noun-7",
  label: "Noun",
  lockAfter: 3,
  list: [
    {
      label: "Notes",
      type: "passage",
      id: "noun",
      data: {
        title: "Noun",
        text: [
          `Nouns are words used to refer to objects, places and living things. Some nouns also refer to feelings and emotions. Nouns can be divided into several categories:
1. Common Noun: A common noun is a general, ordinary name of a person, place, animal, thing or event.
2. Proper Noun: A name used for an individual person, place, or organization, spelled with an initial capital letter.
3. Collective Noun: Used for a collection of people or things.
4. Abstract Noun: Describes a concept, feeling or emotion.
5. Countable Noun: Anything that can be counted with numbers is called countable nouns.
6. Uncountable Noun: Anything that cannot be counted is known as an uncountable noun.
7. Singular Noun: A noun that consists of only one person, animal, or thing is called a singular noun.
8. Plural Noun: A noun that is having more than one person, place, thing, or animal is called a plural noun.
9. Masculine Noun: A noun that refers to the 'male' is called a masculine noun. The word masculine means male, so all the words with male gender, be it a person's name, an animal's name, or a bird's name, it is all said to be masculine.
10. Feminine Noun: A noun that refers to the 'female' is called a feminine noun. The word feminine means female, so all the words with female gender, be it a person's name, an animal's name or a bird's name, it is all said to be feminine.
11. Common Gender Noun: A noun that belongs to both males and females.`,
        ],
      },
    },
    {
      label: "Collective Noun",
      type: "matchByDragDrop",
      id: "drag-drop-collective",
      lockAfter: 1,
      data: [
        `an *army* of soldiers
a *band* of musicians
a *bevy* of ladies
a *body* of directors`,

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

        `an *army* of ants
a *board* of chicken
a *catch* of fish
a *cloud* of insects
a *flight* of birds`,

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
      ],
    },
    {
      id: "fill-up",
      label: "Fill up",
      type: "fillup",
      commonData: {
        title: `Fill in the blanks with the most appropriate form of words.`,
      },
      data: [
        `A cat *likes (like)* to drink milk.
A *patrol (staff)* of police was having a grand party on the lawn.
The teacher *told (tells)* us to maintain silence.
John *loves (love)* to read American stories.
Gangtok is the capital of *Sikkim (sikkim)*.`,

        `A Royal Bengal tiger *looks (look)* great.
A *team (group)* of players was playing cricket.
*Cherries (Cherry's)* are red in color.
*Eggs (Egg)* were broken by Rahul.
London is the home for the *London Eye (london eye)*.`,
      ],
    },
    {
      id: "classify-sentence",
      label: "Identify-2",
      type: "Countable vs Uncountable",
      data: {
        title:
          "Identify whether the underlined nouns are countable or uncountable.",
        types: [
          {
            name: "Countable",
            text: `Toyota is having a *car* sale tomorrow.
Many *trees* were cut down last year.
*Students* work hard for their exams.
Vatsal loves to eat *sweets*.
He bought tasty *mangoes* from the market.
There are several ways to solve a *question*.
My mom loves to chop *vegetables*.`,
          },
          {
            name: "Uncountable",
            text: `Parth bought *rice and pulse* from a supermarket.
Goat *milk* is very healthy.
*Water* is a renewable resource.`,
          },
        ],
      },
    },
    {
      id: "masculine-feminine",
      label: "Match the following",
      type: "match",
      commonData: {
        title: "Match the masculine gender with corresponding feminine gender.",
      },
      data: [
        `Heir, Heiress
Host, Hostess
Manager, Manageress
Peer, Peeress
God, Goddess`,

        `Priest, Priestess
Shepherd, Shepherdess
Lion, Lioness
Waiter, Waitress
Conductor, Conductress`,

        `Duke, Duchess
Emperor, Empress
Governor, Governess
Hunter, Huntress
Master, Mistress`,

        `Prince, Princess
Tiger, Tigress
Hunter, Huntress
Traitor, Traitress
Bachelor, Maid`,

        `Brother, Sister
Gentleman, Lady
King, Queen
Monk, Nun
Lord, Lady`,

        `Nephew, Niece
Son, Daughter
Uncle, Aunt
Wizard, Witch
Buck, Doe`,

        `Bull, Cow
Cock, Hen
Drake, Duck
Fox, Vixen`,

        `Hart, Roe
Horse, Mare
Peacock, Peahen`,
      ],
    },
    {
      label: "Choose the Correct Answer",
      id: "mcq-gender",
      type: "mcq",
      commonData: {
        title: "Choose the most appropriate option.",
      },
      data: [
        {
          questions: [
            {
              qText: "The opposite for Priest would be?",
              options: "Priestess, Priestes, Priesting, Prieston",
            },
            {
              qText: "The opposite for nun will be?",
              options: "Monk, Honk, Priest, Mother",
            },
            {
              qText: "The masculine for a mother would be?",
              options: "Father, Player, Anchor, Brother",
            },
            {
              qText: "The feminine for man-servant would be?",
              options:
                "Maid-servant, Madam-Servant, Pupil-servant, Bull-servant",
            },
            {
              qText: `The feminine for wizard would be?`,
              options: "Witch, Wonk, Witty, Wicht",
            },
          ],
        },
        {
          questions: [
            {
              qText: "The masculine for madam would be?",
              options: "Sir, Sir-Madam, Brother, Father",
            },
            {
              qText: "The opposite for bull would be?",
              options: "Cow, Beef, Buffalo, Goat",
            },
            {
              qText: "The feminine for the prince would be?",
              options: "Princess, Queen, Princes, Princees",
            },
            {
              qText: "The opposite for vixen would be?",
              options: "Fox, Peacock, Lion, Lamb",
            },
            {
              qText: "Write the opposite for duchess?",
              options: "Duke, Prince, King, Queen",
            },
          ],
        },
      ],
    },
    {
      label: "Collective Noun",
      type: "matchByDragDrop",
      id: "drag-drop-collective-2",
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
      ],
    },
    {
      type: "completeWord",
      id: "complete-word",
      label: "Complete Word - Collective Noun",
      data: [
        `A number of people listening to a lecture/concert | AUDIENCE
A group of people who sing in the church or public platforms | CHOIR
A number of judges who are engaged in a case | JURY
A collection of tools | SET
A collection of poems | ANTHOLOGY`,

        `A collection of different types of books | LIBRARY
A number of grapes or nuts on a bunch | CLUSTER
A collection of ducks, chickens or fowls | POULTRY
A number of directors of any institution | BOARD
A number of lions | PRIDE`,

        `A number of stars in the sky | CONSTELLATION
A group of bacteria | CULTURE
A group of penguins | COLONY
A group of fish | SCHOOL
A number of cards | DECK`,
      ],
    },
    {
      type: "selectWord",
      label: "Identify Abstract Noun",
      id: "abstractnoun",
      commonData: {
        title: "Identify the abstract noun from the following sentences.",
      },
      data: [
        `His wife resented his *devotion* to his job.
If she had more *determination*, she could be a *success* at anything.
The bad *weather* detained us for several hours.
*Punishment* is not necessarily a deterrent.
I finally overcame the *difficulty* of meeting people.`,

        `The doctor's *dilemma* was whether he should tell the patient the *truth*.
We must respect the *dignity* of the high court.
She spoke with *confidence*.
We were frightened by her ominous *prediction*.`,

        `That was a splendid *performance*.
His *happiness* knew no bounds.
There is some *misunderstanding* between the two brothers.`,
      ],
    },
    {
      type: "completeWord",
      id: "complete-word",
      label: "Complete Word - Gender",
      title: "Change the words in bold from feminine to masculine.",
      data: [
        `The *girl* looks very much like her mother. | BOY
The girl looks very much like her *mother*. | FATHER
The mistress gave her *maidservant* a present. | MANSERVANT
The *mistress* gave her maidservant a present. | MASTER
The *nun* is talking to my grandmother. | MONK`,

        `The nun is talking to my *grandmother*. | GRANDFATHER
My aunt was an airplane *stewardess* once. | STEWARD
The *cow* was chased by the vixen. | BULL
The cow was chased by the *vixen*. | FOX
My maternal *aunt* is a spinster. | UNCLE`,

        `My *niece* has a pet tabby-cat. | NEPHEW
This *actress* played the part of the heroine in the movie. | ACTOR
This actress played the part of the *heroine* in the movie. | HERO
This girl is the *bride*. | GROOM
Ms. Lee is our *headmistress*. | HEADMASTER`,
      ],
    },
    {
      label: "Countable or Uncountable",
      type: "classifySentence",
      id: "countable-uncountable",
      commonData: {
        title: "Classify the underlined noun as countable or uncountable.",
        types: ["Countable", "Uncountable"],
      },
      data: [
        [
          `The *children* are playing in the garden.
*Scientists* say that the environment is threatened by pollution.
There are a lot of *windows* in our classroom.
The *waiters* in this restaurant are very professional.`,

          `I don't like *milk*.
I prefer *tea*.
My mother uses *butter* to prepare cakes.`,
        ],
        [
          `My father drinks two big *glasses* of water every morning.
*Drivers* must be careful; the road is slippery.
Some *policemen* are organizing road traffic to avoid any accidents.
I bought three *bottles* of mineral water for our picnic.`,

          `We need some *glue* to fix this vase.
The *bread* my mother prepares is delicious.
I'd like some *juice* please!`,
        ],
        [
          `Successful *candidates* will join the camp later this year.
The *exercises* on this website are interesting.
I met some nice *people* when I was walking along the beach.`,

          `A rise in *oil* prices is inevitable since there is more and more world demand for energy.
Dehydrated babies must drink a lot of *water*.`,
        ],
      ],
    },
    {
      label: "Notes",
      type: "passage",
      id: "plural",
      data: {
        title: "Making Plurals",
        text: [
          `There are some rules for changing a singular noun to plural form.
1. The plural of most nouns is formed when -s are added to them.`,
          {
            type: "html",
            text: `<b>Examples</b> - Ball - Ball<b>s</b><br>
Book - Book<b>s</b><br>
Car - Car<b>s</b><br>
Ear - Ear<b>s</b>`,
          },
          `2. Nouns ending in -ch,-s,-sh,-ss, and -x form plural if -es is added to them.`,
          {
            type: "html",
            text: `<b>Examples</b> -Ben<b>ch</b> - Bench<b>es</b><br>
Bru<b>sh</b> - Brush<b>es</b><br>
Bo<b>x</b> - Box<b>es</b><br>
Cla<b>ss</b> - Class<b>es</b>`,
          },
          `3. Most of the nouns ending with -o form their plural when -es is added to their singular.`,
          {
            type: "html",
            text: `<b>Examples</b> - Buffal<b>o</b> - Buffalo<b>es</b><br>
Carg<b>o</b> - Cargo<b>es</b><br>
Her<b>o</b> - Hero<b>es</b><br>
<b>Exemptions</b>: Bambo<b>o</b>- Bambo<b>os</b><br>
Dynam<b>o</b>- Dynam<b>os</b><br>
Mement<b>o</b>- Mement<b>os</b><br>
Phot<b>o</b>- Phot<b>os</b><br>
Pian<b>o</b>- Pian<b>os</b>`,
          },
          `4. If the noun ends with -f or -fe, its plural is formed by adding -ves to its singular.`,
          {
            type: "html",
            text: `<b>Examples</b> - Cal<b>f</b> - cal<b>ves</b><br>
El<b>f</b> - El<b>ves</b><br>
Hal<b>f</b> - Hal<b>ves</b><br>
<b>Exemptions</b>: Belie<b>f</b> - Belief<b>s</b><br>
Chie<b>f</b> - Chief<b>s</b><br>
Clif<b>f</b> - Cliff<b>s</b><br>
Roo<b>f</b> - Roof<b>s</b><br>
Proo<b>f</b> - Proof<b>s</b>`,
          },
          `5. If a noun ends with -y and has a consonant before it, to make it plural we add -ies in place of -y.`,
          {
            type: "html",
            text: `<b>Examples</b> - Arm<b>y</b> - Arm<b>ies</b><br>
Bab<b>y</b> - Bab<b>ies</b><br>
Cit<b>y</b> - Cit<b>ies</b><br>
<b>Exemptions</b>: Bo<b>y</b> - Boy<b>s</b><br>
Da<b>y</b> - Day<b>s</b><br>
Ke<b>y</b> - Key<b>s</b><br>
Monke<b>y</b> - Monkey<b>s</b><br>
Valle<b>y</b> - Valley<b>s</b>.`,
          },
          `6. Some nouns are formed plural by changing the vowels inside them.`,
          {
            type: "html",
            text: `<b>Examples</b> - F<b>oo</b>t - F<b>ee</b>t<br>
G<b>oo</b>se - G<b>ee</b>se<br>
M<b>a</b>n - M<b>e</b>n<br>
T<b>oo</b>th - T<b>ee</b>th<br>
Wom<b>a</b>n - Wom<b>e</b>n`,
          },
          `7. Some nouns don't follow any rules. We need to keep in mind their singular as well as the plural form.`,
          {
            type: "html",
            text: `<b>Examples</b> - Child - <b>Children</b><br>
Mouse - <b>Mice</b><br>
Louse - <b>Lice</b><br>
Ox - <b>Oxen</b>`,
          },
          `8. Some nouns do not differ in their singular and plural.`,
          {
            type: "html",
            text: `<b>Examples</b> - Deer - <b>Deer</b><br>
Fish - <b>Fish</b><br>
Hundred - <b>Hundred</b><br>
Sheep - <b>sheep</b><br>
Score - <b>Score</b>`,
          },
          `9. A noun consisting of 2 or more words, forms its plural by adding -s to its principal word.`,
          {
            type: "html",
            text: `<b>Examples</b> - Brother in law - Brother<b>s</b> in law<br>
Commander in chief - Commander<b>s</b> in chief<br>
Foot Man - Foot M<b>e</b>n`,
          },
          `10. Name of certain apparel/clothing is used as plural.`,
          {
            type: "html",
            text: `<b>Examples</b> - Aryan's <b>trousers</b> are new.<br>
Her <b>shorts</b> are dirty.<br>
Only white <b>socks</b> are allowed on Saturday in school.<br>`,
          },
          `11. Name of some subjects sound plural but they are singular.`,
          {
            type: "html",
            text: `<b>Examples</b> - <b>Mathematics</b> is a tough subject.<br>
<b>Politics</b> is a gloomy subject.<br>
Few laws of <b>physics</b> are written by Einstein.<br>
<b>Economics</b> is a subject that deals with the operations of the financial system.<br>`,
          },
        ],
      },
    },
    {
      id: "fill-up-plural",
      label: "Plurals",
      type: "fillup",
      lockAfter: 1,
      commonData: {
        title: `Fill in the blanks correctly using plural forms of words given in the bracket.`,
        noOptions: true,
      },
      data: [
        `The old man went to the doctor to get his wobbling *teeth* out. (tooth)
The *theives* got scared of the howling of the *dogs* and ran away from the street. (thief, dog)
The *maid-servants* washed the dishes in the house. (maid-servant)
Riya's book was kept on the *shelves* in the living room. (shelf)
These *cities* are famous for tulips. (city)`,

        `The man-servant is picking *flowers* from the pot. (flower)
The passer-by was attacked by an armed *men*. (man)
The *geese* killed a *mice* in the field. (goose, mouse)
These *pizzas* were prepared in the hotel. (pizza)
The *commanders*-in-chief ordered the army for the attack. (commander-in-chief)`,
      ],
    },
    {
      id: "fill-up-singularplural",
      label: "Fill in the blanks",
      type: "fillup",
      lockAfter: 1,
      commonData: {
        title: `Fill in the blanks correctly using singular or plural forms of words given in the bracket.`,
        noOptions: true,
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
This year John topped in *Physics* exam. (physics)`,
      ],
    },
    {
      label: "Notes",
      type: "passage",
      id: "case",
      data: {
        title: "Case of Nouns",
        text: [
          `1. Nominative Case: When a noun is used as the subject of the verb, it is said to be a nominative case.`,
          {
            type: "html",
            text: `<b>Example</b> - <b>Karan</b> won the match.`,
          },
          `2. Objective Case: When the noun is used as an object of the verb, is called the objective case.`,
          {
            type: "html",
            text: `<b>Example</b> - Chetan Bhagat writes <b>novels</b>. (The word novel is the object of verb writes)`,
          },
          `3. The noun that shows possession/indicating to something is called possessive case.`,
          {
            type: "html",
            text: `<b>Example</b> - <b>Pari's</b> book is kept on the bed.`,
          },
        ],
      },
    },
    {
      label: "Identify Case of Noun",
      type: "classifySentence",
      id: "identify-case",
      commonData: {
        title:
          "Given below are a few sentences, identify the case of the noun for them.",
        types: ["Possessive", "Nominative", "Objective"],
      },
      data: [
        [
          `*Pari's* book is kept on the bed.
The *farmer's* crops yielded a good profit.`,

          ` *President* is going to Japan today.
*Dessert* smells so good.
The *mother* teaches the child in the morning.`,

          `The mother teaches the *child* in the morning.
Chetan Bhagat writes *novels*.
The teacher punished the *boy*.`,
        ],
        [
          `*Student's* ID card lost.
*Uncle's* wallet was found by the police.
This is my mother's *watch*.`,

          `*Priyanka* is busy with school work.
The *lawyer* will talk to the judge later.`,

          `The plate is on the *table.
Gagan has lost his *wallet*.
The river flows into the *sea*.`,
        ],
      ],
    },
  ],
};