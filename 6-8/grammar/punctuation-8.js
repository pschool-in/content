export default {
  id: 'punctuation-8',
  label: 'Punctuation',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Punctuation',
        text: [
          `1. Hyphen: Depicted by '-' is used between two words that are parts of a name or a compound word.`,
          {
            type: 'html',
            text: `For example, long<b>-</b>term, get<b>-</b>together`
          },
          `2. Dash: A dash (—) is a punctuation mark that resembles a hyphen, but is longer. A dash is used to separate parts of a sentence and indicate a break. It indicates a longer pause than a comma and a semicolon.
# Examples of hyphenated compound words
check-in; clean-cut
editor-in-chief; empty-handed; far-fetched
father-in-law, mother-in-law, sister-in-law,etc.
free-for-all; know-how; know-it-all
life-size; merry-go-round
long-distance; long-term
mind-blowing; nitty-gritty
one-sided; one-dimensional, two-dimensional, etc.
over-the-counter
run-in; runner-up
strong-arm
topsy-turvy; toss-up
up-to-date
well-being
word-of-mouth
# Examples of open compound words
black eye; cell phone; close call
common sense; cotton candy
dining room; first aid
full moon; French fry
heart attack; high school; hot dog
ice cream; life jacket; living room
no one; peanut butter; post office
prime minister; real estate; remote control
report card; rib cage; role model
roller coaster; salad dressing; search engine
slam dunk; sleeping bag; time capsule
vacuum cleaner; vending machine; video game
waiting room; washing machine; web page`
        ]
      }
    },
    {
      id: 'fill-up',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks in the following sentences with suitable Punctuations.`
      },
      data: [
        `One*- (—)*fourth of the students in the class have parents from another country.
My work timings are from 8*— (-)*5.
The trek will be organised from May 12*— (-)*15.
We will have a get*- (—)*together next weekend to celebrate your birthday.
The game started out as an organized game of tag, but it ended up a free*- (—)*for*- (—)*all.`,

        `We know one thing for sure *— (-)* something unexpected is coming our way.
Many children *— (-)* living in orphanages *— (-)* do not know what love feels like.
She wore a charcoal*- (—)*gray rain jacket.
People *— (-)* both young and old *— (-)* were advised to take vaccinations at the earliest.`,

        `The mathematician*— (-)*philosopher has won the Nobel Prize this year.
I like vanilla*- (—)*flavored ice cream.
Molotov*— (-)*Ribbentrop Pact was officially declared null in 1941.
A lot has changed since last year *— (-)* probably for the better.`,

        `Teresa preferred the red*- (-)*embroidered lace dress.
The Chennai*— (-)*Mumbai flight will leave at 10:00 a.m.
Dinesh *— (-)* the boy from Thanjavur *— (-)* has arrived.
The majority of you scored between eighty*- (—)*eight and ninety*- (—)*nine percent on the test.`
      ]
    },
    {
      label: 'Pick the Right Word',
      id: 'complete-2',
      type: 'completePuzzle',
      lockAfter: 1,
      commonData: {
        type: 'rightOpen',
        title: 'Drag and drop the right word to match the article.',
        printTitle: 'Pick the right word that goes with the article.',
        leftWidth: 75,
        rightWidth: 245
      },
      data: [
        `check-, in, ing
clean- cut, er
editor-in-, chief, charge
empty-, handed, space
far-, fetched, away
know-, how, where`,

        ` life-, size, like
merry-go-, round, around
long-, distance, life
long-, term, time
one-, sided, time
one-, dimensional, ce`,

        `over-the-, counter, horizon
run-, in, ning
strong-, arm, chair
toss-, up, coin
up-to-, date, me
well-, being, done
word-of-, mouth, devil`
      ]
    },
    {
      label: 'Correct or Incorrect',
      id: 'correct-incorrect',
      type: 'classifySentence',
      title:
        'Classify the below sentences based on the correct usage of punctuation.',
      data: {
        types: [
          {
            name: 'Correct',
            text: `We know one thing for sure — something unexpected is coming our way.
Many children — living in orphanages — do not know what love feels like.
She wore a charcoal-gray rain jacket.
People — both young and old — were advised to take vaccinations at the earliest.`
          },
          {
            name: 'Incorrect',
            text: `Teresa preferred the red — embroidered lace dress.
The Chennai-Mumbai flight will leave at 10:00 a.m.
Dinesh-the boy from Thanjavur-has arrived.
The majority of you scored between eighty — eight and ninety — nine percent on the test.`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `The first word of every word is _________.`,
            options: `capitalized, small case, noun`
          },
          {
            qText: `A _______ will be used to separate two sentences`,
            options: `comma, full stop, apostrophe`
          },
          {
            qText: `We use a __________ to make short form`,
            options: `apostrophe, question mark, dash`
          },
          {
            qText: `_______ is used to end an assertive sentence.`,
            options: `Full Stop, Comma, Exclamation mark`
          },
          {
            qText: `A ____ indicates a longer pause than a comma and a semicolon.`,
            options: `dash, hyphen, colon`
          }
        ]
      }
    }
  ]
};
