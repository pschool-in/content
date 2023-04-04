export default {
  id: 'british-american-8',
  label: 'British and American English',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'British and American English',
        text: [
          `# British and American English
1. Pronunciation: British English and American sound noticeably different. The most obvious difference is the way the letter r is pronounced. In British English, when r comes after a vowel in the same syllable (as in car, hard, or market), the r is not pronounced. In American English, the r is pronounced.
2. Vocabulary: There are many differences between American and British English vocabulary. Here are 10 common words in American English followed by their British English equivalents:
American - British
antenna - aerial; mad - angry
anyplace - anywhere; fall - autumn
bill - bank note; attorney - barrister
cookie - biscuit; hood - bonnet
trunk - boot; movies - cinema
patrolman - constable; stove - cooker
crib - cot; wreck - crash
intersection - crossroads; drapes - curtains
thumbtack - drawing pin; generator - dynamo
movie - film; apartment - flat
overpass - flyover; yard - garden
boiler - grill; purse - handbag
billboard - hoarding; vacation - holiday
vacuum cleaner - hoover; sick - ill
intermission - interval; sweater - jumper
pitcher - jug; elevator - lift
truck - lorry; baggage - luggage
raincoat - mackintosh; highway - main road
corn - maize; diaper - nappy
vicious - nasty; noplace - nowhere
optometrist - optician; sidewalk - pavement
peek - peep; mail - post
mailbox - postbox; mailman - postman
baby carriage - pram; restroom - public toilet
blow-out - puncture; line - queue
traffic circle - roundabout; eraser - rubber
Scotch tape - cellotape; store - shop
wrench - spanner; faculty - staff 
candy - sweets; faucet - tap
cab - taxi; dish-towel - tea-towel
semester - term; schedule - timetable
can - tin; flashlight - torch
pants - trousers; vest - waistcoat
closet - wardrobe; windshield - windscreen
fender - wing; zipper - zip 
3. Spelling: Below are three rules you can follow.
a) Most words ending in -our in British English are spelled without the u in American English `,
          {
            type: 'html',
            text: `arbo<b>u</b>r/arbor; ardo<b>u</b>r/arbor <br>
armo<b>u</b>r/armor; behavio<b>u</b>r/behavior <br>
cando<b>u</b>r/candor; clamo<b>u</b>r/clamor <br>
colo<b>u</b>r/color; demeano<b>u</b>r/demeanor <br>
endeavo<b>u</b>r/endeavor; favo<b>u</b>r/favor <br>
flavo<b>u</b>r/flavor; harbo<b>u</b>r/habor <br>
hono<b>u</b>r/honor; humo<b>u</b>r/humor <br>
labo<b>u</b>r/labor; neighbo<b>u</b>r/neighbor <br>
odo<b>u</b>r/odor; parlo<b>u</b>r/parlor <br>
ranco<b>u</b>r/rancor; rigo<b>u</b>r/rigor <br>
rumo<b>u</b>r/rumor; savio<b>u</b>r/savior <br>
savo<b>u</b>r/savor; splendo<b>u</b>r/splendor <br>
tumo<b>u</b>r/tumor; valo<b>u</b>r/valor <br>
vigo<b>u</b>r/vigor`
          },
          `b) Most words ending in -re in British English are spelled with -er in American English`,
          {
            type: 'html',
            text: `calib<b>re</b>/calib<b>er</b>; cent<b>re</b>/cent<b>er</b> <br>
fib<b>re</b>/fib<b>er</b>; lit<b>re</b>/lit<b>er</b> <br>
lust<b>re</b>/lust<b>er</b>; meag<b>re</b>/meag<b>er</b> <br>
met<b>re</b>/met<b>er</b>; sab<b>re</b>/sab<b>er</b> <br>
scept<b>re</b>/scept<b>er</b>; sepulch<b>re</b>/sepulch<b>er</b> <br>
somb<b>re</b>/somb<b>er</b>; theat<b>re</b>/theat<b>er</b>`
          },
          `c) Many British English verbs ending in -ise are spelled with -ize in American English `,
          {
            type: 'html',
            text: `reali<b>s</b>e/reali<b>z</b>e, organi<b>s</b>e/organi<b>z</b>e, etc.`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      lockAfter: 1,
      commonData: {
        title:
          'Match the word used in American English with it British English alternative.'
      },
      data: [
        `antenna, aerial
mad, angry
anyplace, anywhere
fall, autumn
bill, bank note`,

        `cookie, biscuit
hood, bonnet
trunk, boot
movies, cinema
patrolman, constable`,

        `stove, cooker
crib, cot
wreck, crash
drapes, curtains
movie, film`,

        `apartment, flat
overpass, flyover
yard, garden
boiler, grill
purse, handbag`,

        `sick, ill
sweater, jumper
pitcher, jug
elevator, lift
truck, lorry`,

        `baggage, luggage
raincoat, mackintosh
highway, main road
corn, maize
diaper, nappy`,

        `vicious, nasty
noplace, nowhere
optometrist, optician
peek, peep
mail, post`,

        `mailbox, postbox
mailman, postman
baby carriage, pram
restroom, public toilet
blow-out, puncture`,

        `line, queue
eraser, rubber
Scotch tape, cellotape
store, shop
wrench, spanner`,

        `faculty, staff 
candy, sweets
faucet, tap
cab, taxi
dish-towel, tea-towel`,

        `semester, term
schedule, timetable
can, tin
flashlight, torch
zipper, zip`,

        `pants, trousers
vest, waistcoat
closet, wardrobe
windshield, windscreen
fender, wing`,

        `attorney, barrister
intersection, crossroads
traffic circle, roundabout
thumbtack, drawing pin
generator, dynamo`,

        `sidewalk, pavement
billboard, hoarding
intermission, interval
vacation, holiday
vacuum cleaner, hoover`
      ]
    },
    {
      label: 'British or American',
      id: 'british-american',
      type: 'group',
      commonData: {
        title: 'Classify the below words as American or British English'
      },
      data: [
        {
          types: [
            {
              name: 'American',
              text: 'antenna, mad, anyplace, fall, bill'
            },
            {
              name: 'British',
              text: 'aerial, angry, anywhere, autumn, bank note'
            }
          ]
        },
        {
          types: [
            {
              name: 'American',
              text: 'attorney, cookie, hood, trunk, movies'
            },
            {
              name: 'British',
              text: 'barrister, biscuit, bonnet, boot, cinema'
            }
          ]
        },
        {
          types: [
            {
              name: 'American',
              text: 'patrolman, stove, crib, wreck'
            },
            {
              name: 'British',
              text: 'constable, cooker, cot, crash'
            }
          ]
        },
        {
          types: [
            {
              name: 'American',
              text: 'intersection, drapes, thumbtack, generator'
            },
            {
              name: 'British',
              text: 'crossroads, curtains, drawing pin, dynamo'
            }
          ]
        },
        {
          types: [
            {
              name: 'American',
              text: 'movie, apartment, overpass, yard'
            },
            {
              name: 'British',
              text: 'film, flat, flyover, garden'
            }
          ]
        }
      ]
    },
    {
      id: 'fill-up',
      label: 'American English',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks using words in American English`
      },
      data: [
        `I'd like to hang the *drapes (curtains)* tonight. Do you have time?
We took the *elevator (lift)* to the 10th floor.
Would you like to see a *movie (film)* tonight?
Have you seen Tom's new *apartment (flat)* yet? It's very nice.`,

        `I'll take the *garbage (rubbish)* out before I leave tomorrow morning.
Take the second exit at the *traffic circle (roundabout)*.
Let's get have some *potato chips (crisps)* with lunch. 
Could you hand me the *flashlight (torch)* so I can take a look in the closet?`,

        `Peter wore a pair of slim fitting *pants (trousers)* to the party.
She opened the *tap (spigot)* and watered the garden.
Have you ever worn a *vest (waistcoat)* with a suit?
I'll pick up the *mail (post)* on the way home from work.`
      ]
    },
    {
      id: 'fill-up-2',
      label: 'British English',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks using words in British English`
      },
      data: [
        `We need to find a *public toilet (restroom)* soon.
Let's get the *pram (baby carriage)* and take a walk with Jennifer. 
I'm afraid I had a *puncture (blow-out)* and had to get it fixed.
Could you bring in that *tin (can)* of tuna over there?`,

        `She's very *mean (stingy)* with her money. Don't ask her for any help.
I generally don't wear a suit with a *waistcoat (vest)*.
We should ask a *constable (patrolman)* for help. 
Get on *queue (line)* and I'll get us something to eat.`,

        `Grab a *tea-towel (dish towel)* and clean that up.
Look at the *schedule (time table)* and see when the train leaves.
The car has a dent in the *wing (fender)*.
Choose a *jumper (sweater)* from the *wardrobe (closet)* and let's get going.
The lights have gone out, and we'll need a *torch (flashlight)*.`
      ]
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage-2',
      data: {
        title: 'British and American English Grammar',
        text: [
          `# Grammar Rules
1. Collective nouns are singular in American English Grammar. British English usually treats collective nouns as plural nouns, so the verb must agree with the plural form. 
British English: The staff are taking the day off.
American English: The staff is taking the day off.
British English: The committee are making the decision today.
American English: The committee is making the decision today.

2. Americans don't use the present perfect tense much. However, British speakers sometimes use the present perfect tense instead of the simple past.
American English: He ate his lunch.
British English: He has eaten his lunch.
American English: I went to the store.
British English: I have gone to the store.

3. Transitive and Intransitive verbs flip in American and British English.
British English: He appealed against the decision. (Intransitive)
American English: He appealed the decision. (Transitive)

4. American English verbs simply need an “-ed” at the end in order to transform them into the past tense. However, British English often adds a “-t” at the end instead of the “-ed.”
British English: learnt, dreamt, dwelt
American English: learned, dreamed, dwelled

5. The use of “have” vs “have got” varies in American and British English.
British English: I have got a dog.
American English: I have a dog.
British English: My job has got better.
American English: My job has gotten better.

6. The usage of modal verbs differs between British and American English. For example, shall and shan’t are almost exclusively used by British speakers, as American speakers find these words extremely formal. Americans use will and won’t instead.
British English: I shall go.
American English: I will go.
British English: I shan't attend.
American English: I won't attend.

7. American English changes the position of adverbs quite easily, sometimes placing them before the verb and sometimes after it. On the other hand, British speakers usually place the adverb after the verb.
American English: She drank quickly./She quickly drank.
British English: She drank quickly.

8. In American English grammar, the word “well” is only used as an adverb to mean “good.”
However, in British English, the word “well” can also be used to mean “very.”
British English: I'm well sleepy.
American English: I'm very sleepy.`
        ]
      }
    },
    {
      label: 'British or American',
      type: 'classifySentence',
      id: 'british-american',
      commonData: {
        title:
          'Classify the sentences as British English or American English based on the grammar usage.',
        types: ['British', 'American']
      },
      data: [
        [
          `The staff are taking the day off.
The committee are making the decision today.
He has eaten his lunch.
I have gone to the store.`,

          `The staff is taking the day off.
The committee is making the decision today.
He ate his lunch.
I went to the store.`
        ],
        [
          `He appealed against the decision.
I have got a dog.
My job has got better.
I'm well sleepy.`,

          `He appealed the decision.
I have a dog.
My job has gotten better.
I'm very sleepy.`
        ]
      ]
    },
    {
      id: 'spelling',
      label: 'Spelling',
      type: 'match',
      lockAfter: 1,
      commonData: {
        title: 'Match the British spelling with the American counterpart.'
      },
      data: [
        `aeon, eon
aesthetic, esthetic
appal, appall
carburettor, carburetor
counsellor, counselor`,

        `dishevelled, disheveled
distil, distill
enrol, enroll
fulfil, fufill
instalment, installment`,

        `instil, instill
skilful, skillful
programme, program
tonne, ton
colour, color`,

        `demeanour, demeanor
endeavour, endeavor
favour, favor
flavour, flavor
harbour, habor`,

        `honour, honor
humour, humor
labour, labor
neighbour, neighbor
odour, odor`,

        `parlour, parlor
rancour, rancor
rigour, rigor
rumour ,rumor
saviour, savior`,

        `savour, savor
splendour, splendor
tumour, tumor
valour, valor
vigour, vigor`,

        `calibre, caliber
centre, center
fibre, fiber
litre, liter
lustre, luster`,

        `meagre, meager
metre, meter
sabre, saber
sceptre, scepter
sepulchre, sepulcher`,

        `sombre, somber
theatre, theater
aeroplane, airplane
artefact, artifact
grey, gray`,

        `jewellery, jewelry
kerb, curb
plough, plow
sceptical, skeptical
sulphur, sulfur`,

        `chequered, checkered
cosy, cozy
doughnut, donut
draught, draft
gaol, jail`
      ]
    },
    {
      type: 'rightOne',
      label: 'British English',
      id: 'biggest',
      commonData: {
        title: `Pick the british spelling.`,
        printTitle: 'Circle the british spelling.',
        fontSize: '1.3rem'
      },
      data: [
        `arbour, arbor
ardour, ardor
armour, armor
behaviour, behavior
candour, candor
clamour, clamor
colour, color
demeanour, demeanor
endeavour, endeavor
favour, favor`,

        `flavour, flavor
harbour, habor
honour, honor
humour, humor
labour, labor
neighbour, neighbor
odour, odor
parlour, parlor
rancour, rancor
rigour, rigor`,

        `rumour, rumor
saviour, savior
savour, savor
splendour, splendor
tumour, tumor
valour, valor
vigour, vigor
calibre, caliber
centre, center
fibre, fiber`,

        `litre, liter
lustre, luster
meagre, meager
metre, meter
sabre, saber
sceptre, scepter
sepulchre, sepulcher
sombre, somber
theatre, theater`
      ]
    },
    {
      label: 'British or American',
      id: 'british-american',
      type: 'group',
      commonData: {
        title: 'Classify the below spellings as American or British English'
      },
      data: [
        {
          types: [
            {
              name: 'American',
              text: 'arbor, ardor, armor, behavior, candor'
            },
            {
              name: 'British',
              text: 'arbour, ardour, armour, behaviour, candour'
            }
          ]
        },
        {
          types: [
            {
              name: 'American',
              text: 'clamor, color, demeanor, endeavor, favor'
            },
            {
              name: 'British',
              text: 'clamour, colour, demeanour, endeavour, favour'
            }
          ]
        },
        {
          types: [
            {
              name: 'American',
              text: 'flavor, habor, honor, humor'
            },
            {
              name: 'British',
              text: 'flavour, harbour, honour, humour'
            }
          ]
        },
        {
          types: [
            {
              name: 'American',
              text: 'rumor, savior, savor, splendor, tumor'
            },
            {
              name: 'British',
              text: 'rumour, saviour, savour, splendour, tumour'
            }
          ]
        },
        {
          types: [
            {
              name: 'American',
              text: 'liter, luster, meager, meter, saber'
            },
            {
              name: 'British',
              text: 'litre, lustre, meagre, metre, sabre'
            }
          ]
        }
      ]
    }
  ]
};
