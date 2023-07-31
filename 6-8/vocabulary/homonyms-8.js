export default {
  id: 'homonyms-8',
  label: 'Homophones, Homographs and Homonyms',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Homophones, Homographs and Homonyms',
        text: [
          `# Homophones
Homophones are words pronounced alike but different in meaning or derivation or spelling. These words may be spelled differently from each other, or they may be spelled the same way.
Eg: to, too, and two (spelled differently)
quail meaning 'to cower' and a 'type of bird' (spelled same)
# List of Homophones
1. Their, There
2. To, Too, Two
3. It's, Its
4. You're, Your
5. Who's, Whose
6. By, Buy, Bye
7. I, Eye
8. See, Sea
9. Dear, Deer
10. Bare, Bear
11. Hair, Hare
12. Here, Hear
13. Air, Heir
14. Where, Wear 
15. Pair, Pear, Pare
16. Fair, Fare
17. Right, Write, Rite
18. Sight, Site, Cite
19. Steal, Steel
20. Plain, Plane
21. Sale, Sail
22. Break, Brake
23. Know, No 
24. Week, Weak
25. Add, Ad 
26. Meet, Meat
27. Sell, Cell
28. Great, Grate
29. Piece, Peace
30. Eight, Ate
31. One, Won
32. Flower, Flour
33. For, Four, Fore
34. Our, Hour
35. Wait, Weight
36. Night, Knight
37. Male, Mail
38. Son, Sun
39. Board, Bored
40. Hole, Whole
41. Sweet, Suite
42. Tail, Tale
# Homographs
Homographs are words that are spelled alike but are different in meaning or derivation or pronunciation. Sometimes these words sound different, and sometimes these words sound the same.
Eg: the bow of a ship and the bow that shoots arrows (sound different)
quail meaning 'to cower' and a 'type of bird' (sound same)
# List of Homographs
1. Minute:
- Noun meaning "60 seconds"
- Adjective meaning "very small"
2. Bass:
- The fish
- The instrument
3. Polish:
- From Poland
- To make something shiny
4. Bow:
- Noun referring to a ribbon tied in a decorative way
- Verb meaning to bend reverently
5. Close:
- Adjective meaning "nearby"
- Verb meaning "to shut"
6. Lead:
- The metal
- Verb meaning "to act as a leader"
7. Bear:
- The animal
- Verb meaning "to carry"
8. Ring:
- A circle
- A type of jewelry
- What a phone does
9. Fan:
- The appliance that makes wind
- An admirer/appreciator
10. Band:
- Music group
- A ring or strap
11. Bat:
- The animal
- A baseball bat
12. Kind:
- Adjective meaning "nice"
- Noun meaning "type"
13. Part:
- A component of something
- A line in one's hair
- Verb meaning "to separate"
14. Park:
- Noun meaning an outdoor space
- Verb meaning what you do to a car
15. Class:
- Lesson
- Category
- Classiness
16. Fair:
- Equitable or according to the rules
- A carnival
# Homonyms
Homonyms may be used to refer to either homophones or homographs.`
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'complete-word',
      label: 'Complete the Homophones ',
      commonData: {
        title: `Find the homophones.`,
        hintFontSize: '2rem'
      },
      data: [
        `there |THEIR 
to, too |TWO
it's |ITS
you're |YOUR 
who's |WHOSE 
by, buy |BYE`,

        `I |EYE
see |SEA
dear |DEER
bare |BEAR
hair |HARE`,

        `here |HEAR
air |HEIR| _E__
where |WEAR| __A_
pair, pear |PARE
fair |FARE`,

        `right, write |RITE 
sight, site |CITE
steal |STEEL
plain |PLANE
sale |SAIL`,

        `break |BRAKE
know |NO| __
week |WEAK
add |AD| __
meet |MEAT`,

        `sell |CELL
great |GRATE
piece |PEACE
eight |ATE
one |WON`,

        `flower |FLOUR
for, four |FORE
our |HOUR
wait |WEIGHT
night |KNIGHT`,

        `male |MAIL
son |SUN
board |BORED
hole |WHOLE
sweet |SUITE
tail |TALE`
      ]
    },
    {
      type: 'completeWord',
      id: 'complete-word-2',
      label: 'Find the Homograph',
      commonData: {
        title: `Find the homograph based on the meanings given below.`
      },
      data: [
        `the noun meaning “60 seconds”; the adjective meaning “very small” |MINUTE
the fish; the instrument |BASS
from Poland; to make something shiny |POLISH
the noun referring to a ribbon tied in a decorative way; the verb meaning to bend reverently |BOW
the adjective meaning “nearby”; the verb meaning “to shut” |CLOSE
the metal; the verb meaning “to act as a leader” |LEAD`,

        `the animal; the verb meaning “to carry” |BEAR
a circle; a type of jewelry; what a phone does |RING
the appliance that makes wind; an admirer/appreciator |FAN 
music group; a ring or strap |BAND
the animal; a baseball bat |BAT 
the adjective meaning “nice”; the noun meaning “type” |KIND`,

        `a component of something; a line in one's hair; the verb meaning “to separate” |PART
a noun meaning an outdoor space; a verb meaning what you do to a car |PARK
lesson; category; classiness |CLASS
equitable or according to the rules; a carnival |FAIR`
      ]
    },
    {
      id: 'fill-up',
      label: 'Homophones',
      type: 'fillup',
      commonData: {
        title: `Complete the following sentences using suitable homophones.`
      },
      data: [
        `Please try not to *waste (waist)* paper.
Can I go to the party *too (to, two)*?
This is my favorite *pair (pare, pear)* of jeans.
I *sent (scent, cent)* a letter to my aunt in Canada.
The children got *bored (board)* during the lecture.`,

        `Mr. and Mrs. Mehta like to work in *their (there, they're)* garden.
Alex is going to *wear (ware)* his work boots today.
Do you think it is going to *rain (rein, reign)* this afternoon?
I saw a restaurant just off the *road (rode)* about a mile back.
Diana's brother is in a *band (banned)* which plays African music. `,

        `Jane wants her socks because her *toes (tows)* are cold.
The teacher walked down the *aisle (isle)* between the rows of desks.
Harry has *pain (pane)* in her shoulder.
The school *principal (principle)* spoke to the parents.
The clerk wants to *sell (cell)* as many equipments as possible.`,

        `I don't want to talk about the *past (passed)* anymore.
Nobody *knows (nose)* what you are thinking.
I have *four (for, fore)* dollars in my pocket.
I need to take a *break (brake)* from dieting.
Humans have hands. Dogs have *paws (pause)*.
*He'll (Heel, Heal)* be here in five minutes. `
      ]
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title:
          'Choose the correct meaning of the homograph based on its use in the sentence.',
        questions: [
          {
            qText: 'I will be back in twenty *minutes*.',
            options: `the noun meaning 60 seconds, the adjective meaning very small`
          },
          {
            qText:
              'The *bass* you cooked for me was really fresh and delicious.',
            options: `the fish, the instrument`
          },
          {
            qText: "Jake *polished* his dad's shoes and made them shine.",
            options: `to make something shiny, from Poland`
          },
          {
            qText: 'The kitten had a cute little *bow* on its neck.',
            options: `the noun referring to a ribbon tied in a decorative way, the verb meaning to bend reverently`
          },
          {
            qText: 'Please *close* the door when you you leave.',
            options: `the verb meaning to shut, the adjective meaning nearby`
          },
          {
            qText: 'Rohan *lead* his troup to the base camp.',
            options: `the verb meaning to act as a leader, the metal `
          }
        ]
      }
    },
    {
      id: 'mcq-2',
      label: 'Pick the correct sentence',
      type: 'mcq',
      data: {
        title:
          'Choose the sentence that conveys the meaning mentioned in the question.',
        questions: [
          {
            qText: 'Band - Music group',
            options: `The band was playing a pop song at the function, Jake tied a red band on his forehead`
          },
          {
            qText: 'Fair - Carnival',
            options: `The food fair even had Korean dishes that everyone was eager to try, The judge was not fair in choosing the winner`
          },
          {
            qText: 'Park - Outdoor space',
            options: `We go to the park to play on Sundays, Rohan had parked the car in a no parking zone`
          },
          {
            qText: 'Fan - an admirer or appreciator',
            options: `BTS fans are termed as ARMY, The fan in the bedroom seems to be broken`
          },
          {
            qText: 'Bow - the verb meaning to bend reverently',
            options: `In Korea it is customary to bow to elders, The baby had a big red bow on her hairband.`
          },
          {
            qText: 'Kind - the adjective meaning nice',
            options: `Reem is always kind to her siblings, You can see different kinds of party wears for toddlers in shops nowadays`
          }
        ]
      }
    }
  ]
};
