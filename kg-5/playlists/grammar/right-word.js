export default {
  label: 'Right Word',
  id: 'right-word',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Notes',
        text: [
          `# was vs were`,
          {
            type: 'html',
            text: `<b>was</b> -  past tense for singular subject <br>
  <b>were</b> - past tense for plural subject`
          },
          `# they vs them`,
          {
            type: 'html',
            text: `<b>they</b> -  used as subject<br>
  <b>them</b> - used as object`
          },
          `# my vs mine`,
          {
            type: 'html',
            text: `<b>my</b> -  used as subject<br>
  <b>mine</b> -  used as object`
          },
          `# he vs his`,
          {
            type: 'html',
            text: `<b>he</b> - masculine pronoun <br>
  <b>his </b> - to show belonging`
          },
          `# had vs have`,
          {
            type: 'html',
            text: `<b>had</b> -  past tense<br>
  <b>have</b> - present tense with plural subject`
          },
          `# your vs you're`,
          {
            type: 'html',
            text: `<b>you're</b> -  contraction of 'you are' <br>
<b>your </b> - belonging to the person or people spoken to`
          },
          `# its vs it's`,
          {
            type: 'html',
            text: `<b>it's</b> -  contraction of 'it is' <br>
<b>its </b> - belongs to a thing`
          },
          `# who's vs whose`,
          {
            type: 'html',
            text: `<b>who's</b> -  contraction of 'who is' <br>
<b>whose </b> - to whom something belongs to`
          },
          `# there, their vs they're`,
          {
            type: 'html',
            text: `<b>there</b> -  the opposite of here<br>
<b>their</b> - belongs to them<br>
<b>they're</b> - contraction of 'they are'`
          },
          `# you vs yours`,
          {
            type: 'html',
            text: `<b>you</b> -  second person pronoun <br>
  <b>yours </b> -  belongs to you.`
          },
          `# when vs where`,
          {
            type: 'html',
            text: `<b>when</b> - to define time<br>
  <b>where</b> - to define place`
          },
          `# this vs those`,
          {
            type: 'html',
            text: `<b>this</b> - close to the speaker or very recent (singular). <br>
    <b>those</b> - far to the speaker or far in time`
          }
        ]
      }
    },
    {
      id: 'was-were',
      label: 'was vs were',
      type: 'fillupOptions',
      data: {
        title: 'was vs were',
        text: `The cat *was* sleeping in the cupboard.
The children *were*  eating when a monkey entered the room.
Suraj and Pinky *were* waiting for the school bus when it started raining.
The giant *was* very kind to Jack.
The frogs *were* croaking in the garden.`,
        options: 'was, were'
      }
    },
    {
      id: 'they-them',
      label: 'they vs them',
      type: 'fillupOptions',
      data: {
        title: 'they vs them',
        text: `My friend’s  family is very rich and *they* live in the biggest house on the street.
Sheela has known *them* all her life.
The grapes are so sour that *they* cannot be eaten.
Tell *them* to be on time.
I told *them* to be quiet.`,
        options: 'they, them'
      }
    },
    {
      id: 'my-mine',
      label: 'my vs mine',
      type: 'fillupOptions',
      data: {
        title: 'my vs mine',
        text: `This doll is *mine*.
Both *my* parents studied in Chennai.
The blue bicycle is *mine*.
This is *my* storybook, but you may borrow it. 
The room with the yellow door is *mine*.`,
        options: 'my, mine'
      }
    },
    {
      id: 'he-his',
      label: 'he vs his',
      type: 'fillupOptions',
      data: {
        title: 'he vs his',
        text: `This is Mr Sharma, *he* is a writer.
*His* leather shoes need to be polished.
Ankit is my friend, *he* loves ice cream.
My father is always busy with *his* work.
Saurav is quite scared of *his* strict tutor!`,
        options: 'he, his'
      }
    },
    {
      id: 'had-have',
      label: 'had vs have',
      type: 'fillupOptions',
      data: {
        title: 'had vs have',
        text: `To *have* good health is the greatest wealth!
Sunita *had* gone to visit her grandmother yesterday.
Priya *had* a pizza with lots of cheese.
I love to *have* idli for breakfast.
Vijay and Ajay *have* just got a pet kitten.`,
        options: 'had, have'
      }
    },
    {
      id: `your-you're`,
      label: "your vs you're",
      type: 'fillupOptions',
      data: {
        title: "Fill in the blanks with the right word: your, you're",
        text: `Did you tell *your* parents where *you're* going?
Did you brush *your* teeth?
When *you're*  finished with the dishes, you can watch TV.
Where did you put *your* lunchbox?
If *you're* going to be late, please let me know.
I like *your* red bike.
Let's go play when *you're* ready.`,
        options: "your, you're"
      }
    },
    {
      id: `its-it's`,
      label: "its vs it's",
      type: 'fillupOptions',
      data: {
        title: "Fill in the blanks with the right word: its, it's",
        text: `The cat licked *its* paw.
The hamster is so cute. What is *its* name?
*It's* going to rain tomorrow.
My toy is not in *its* box. Where could it be?
*It's* time to give the dog its dinner.
*It's* a  good idea to put on your helmet when you ride your bike.
The spacecraft fired *its* rockets.`,
        options: "its, it's"
      }
    },
    {
      id: `who's-whose`,
      label: "who's vs whose",
      type: 'fillupOptions',
      data: {
        title: "Fill in the blanks with who's and whose.",
        text: `He is an artist *whose* work I really admire.
*Who's* that man in the white shirt?
*Who's* the prime minister of India?
*Whose* keys are on the table?
I want someone *who's* loyal to me.`,
        options: "who's, whose"
      }
    },
    {
      id: 'there-their',
      label: "there, their vs they're",
      type: 'fillupOptions',
      data: {
        title: "Fill in the blanks with the right word: there, their, they're",
        text: `The kids went to visit *their* grandparents.
*They're* all eating cake together.
What do you see over *there* ?
Tomorrow, *they're* having a party.
The library book is over *there*.
The students handed in *their* homework.`,
        options: "there, their, they're"
      }
    },
    {
      id: 'you-yours',
      label: 'you vs yours',
      type: 'fillupOptions',
      data: {
        title: 'you vs yours',
        text: `Does this book belong to *you*?
Is this water bottle *yours*, Meera?
Sita,*you* are capable of doing excellently!
The choice is *yours*, Iqbal.
Can *you* help me carry these books?`,
        options: 'you, yours'
      }
    },
    {
      id: 'when-where',
      label: 'when vs where',
      type: 'fillupOptions',
      data: {
        title: 'when vs where',
        text: `Is this *where* Anand found the puppy?
Seema was out *when* the guests arrived.
My father was very naughty *when* he was a little boy!
*Where* was the farmer’s cow?
This is the school *where* my sisters studied.`,
        options: 'when, where'
      }
    },
    {
      id: 'this-those',
      label: 'this vs those',
      type: 'fillupOptions',
      data: {
        title: 'this vs those',
        text: `*This* is the house that my father built.
*Those* horses belong to the zamindar.
*This* blue pen is mine.
Please water *those* plants before they die!
Why are *those* girls laughing?`,
        options: 'this, those'
      }
    },
    {
      id: 'reading-2',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Confusing Words',
        text: [
          `# can vs could`,
          {
            type: 'html',
            text: `<b>can</b> - to seek permission to do or say something<br>
  <b>could</b> - past tense of 'can', to ask question politely`
          },
          `# than vs then`,
          {
            type: 'html',
            text: `<b>than</b> -  used when making a comparison <br>
<b>then </b> - while refering something related to time`
          },
          `# better vs best`,
          {
            type: 'html',
            text: `<b>better</b> - comparative degree<br>
  <b>best</b> - superlative degree`
          },
          `# shall vs should`,
          {
            type: 'html',
            text: `<b>shall</b> - express ideas in future tense<br>
  <b>should</b> - past tense of 'shall'`
          },
          `# will vs would`,
          {
            type: 'html',
            text: `<b>will </b> -  to refer a future event<br>
              <b>would</b> -  to refer to a future event that may occur under specific conditions <br>`
          },
          `# much vs many`,
          {
            type: 'html',
            text: `<b>much</b> - used with uncountable noun<br>
    <b>many</b> - used with countable noun`
          },
          `# more vs most`,
          {
            type: 'html',
            text: `<b>more</b> - comparative degree<br>
    <b>most</b> - superlative degree`
          },
          `# was vs would`,
          {
            type: 'html',
            text: `<b>was</b> -  past tense<br>
    <b>would</b> - to express a desire, a hope of something being fulfilled`
          },
          `# were vs where`,
          {
            type: 'html',
            text: `<b>were</b> -  past tense (plural)<br>
    <b>where</b> - to define a place`
          },
          `# there vs their`,
          {
            type: 'html',
            text: `<b>there</b> - opposite of here <br>
    <b>their </b> - to show possession`
          },

          `# begin vs began`,
          {
            type: 'html',
            text: `<b>begin</b> - present tense<br>
    <b>began</b> - past tense`
          }
        ]
      }
    },
    {
      id: 'can-could',
      label: 'can vs could',
      type: 'fillupOptions',
      data: {
        title: 'can vs could',
        text: `Sujatha *can* draw well.
I wish I *could* fly like a bird!
Anita *can* surely excel in the Board Exams!
Where *could* the dog be hiding?
*Can* you give this bag to your mother?`,
        options: 'can, could'
      }
    },
    {
      id: 'than-then',
      label: 'than vs then',
      type: 'fillupOptions',
      data: {
        title: 'Fill in the blanks with either than or then.',
        text: `He can run faster *than* I can.
First buy bread and butter *then* eat them.
Nothing worse *than* a familiar enemy.
First think, and *then* speak.
Peter is smarter *than* Mathew.`,
        options: 'than, then'
      }
    },

    {
      id: 'better-best',
      label: 'better vs best',
      type: 'fillupOptions',
      data: {
        title: 'better vs best',
        text: `Children like juice *better* than lassi.
Sheetal has the *best* handwriting in the class.
My sister makes the *best* milkshake!
Geeta and Jyothi are *best* friends.
Girish felt much *better* after taking a nap.`,
        options: 'better, best'
      }
    },
    {
      id: 'shall-should',
      label: 'shall vs should',
      type: 'fillupOptions',
      data: {
        title: 'shall vs should',
        text: `What time *shall* we meet tomorrow?
Mitha *should* eat on time.
I *shall* go to the party next week.
Sarah *should* be taking care of her health.
You *should* have seen the sunrise this morning, it was beautiful!`,
        options: 'shall, should'
      }
    },
    {
      id: 'will-would',
      label: 'will vs would',
      type: 'fillupOptions',
      data: {
        title: 'will vs would',
        text: `Manya wished that her mother *would* bake a cake.
My uncle *will* surely visit us next year.
Students are wondering if exams *will* be held this month.
*Would* you like some more chocolate in your milk? 
I wonder who *will* win the IPL cup this year?`,
        options: 'will, would'
      }
    },
    {
      id: 'much-many',
      label: 'much vs many',
      type: 'fillupOptions',
      data: {
        title: 'much vs many',
        text: `Last night, I saw the sky sprinkled with *many* stars.
How *many* mangoes can you count in a dozen?
How *much* milk does Mrs Banerjee require tomorrow?
*Much* time is required to take care of my pets. 
Anup feeds *many* stray dogs every day.`,
        options: 'much, many'
      }
    },
    {
      id: 'more-most',
      label: 'more vs most',
      type: 'fillupOptions',
      data: {
        title: 'more vs most',
        text: `Oliver asked for *more* soup.
My father is on the phone *most* of the day.
The librarian told Ashwin that he could borrow *more* than one book.
Do you want *more* milk in your coffee?
Who is *most* likely to win the match?`,
        options: 'more, most'
      }
    },
    {
      id: 'was-would',
      label: 'was vs would',
      type: 'fillupOptions',
      data: {
        title: 'was vs would',
        text: `Shilpa *was* excited about the school trip to Goa.
Vasu hoped that the weather *would* be favourable for the match.
Heidi *was* thrilled to see that it *was* snowing.
The beggar hoped that the people in the big house *would* give him some food.
The farmer prayed that the rain *would* water his crop.`,
        options: 'was, would'
      }
    },
    {
      id: 'were-where',
      label: 'were vs where',
      type: 'fillupOptions',
      data: {
        title: 'were vs where',
        text: `This is *where* Mr Rao comes to fish every year.
Two teachers *were* supervising the distribution of books. 
*Where* is my mother?" The little child asked.
Those two cats *were* fighting last night.
There was a power cut when the students *were* writing their exam.`,
        options: 'were, where'
      }
    },
    {
      id: 'there-their-2',
      label: 'there vs their',
      type: 'fillupOptions',
      data: {
        title: 'there vs their',
        text: `Those boys you see *there* are very good athletes.
My grandparents sold *their* ancestral home last year.
*There* is a red boat sailing on the river.
Sonali and Mona are sisters. *Their* parents are doctors.
*There* is a good team of dedicated staff at Sarojini Hospital.`,
        options: 'there, their'
      }
    },
    {
      id: 'begin-began',
      label: 'begin vs began',
      type: 'fillupOptions',
      data: {
        title: 'begin vs began',
        text: `It *began* to rain, as soon as Ritu reached the bus stop.
My mother *began* cooking early this morning for our guests. 
When does your party *begin*?
The meeting needs to *begin* soon.
Suddenly, the two dogs *began* to bark loudly.`,
        options: 'begin, began'
      }
    }
  ]
};
