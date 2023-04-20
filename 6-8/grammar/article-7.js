export default {
  id: 'article-7',
  label: 'Articles',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'articles',
      data: {
        title: 'Articles',
        text: [
          `Articles are a type of determiner. It includes 'a', 'an' and 'the'. These three articles can be divided into two groups: Definite article (the) and Indefinite article (a, an). 'The' is a definite article because it points to a specific person or thing. 'A' and 'an' is considered indefinite article because they do not point to a specific noun.
# Uses of 'The'
1. 'The' is used before a particular or specific person, place or thing.`,
          {
            type: 'html',
            text: `<b>Example</b>: This is <b>the</b> boy who won the last match.`
          },
          `2. 'The' is used before common nouns which are names of things unique of their kind.`,
          {
            type: 'html',
            text: `<b>Example</b>: <b>The</b> Earth is our planet.`
          },
          `3. 'The' is used before the name of directions and dates of months.`,
          {
            type: 'html',
            text: `<b>Example</b>: <b>The</b> Sun sets in the West.`
          },
          `4. 'The' is used before the name of rivers, seas, canals, oceans, valleys, deserts and forests.`,
          {
            type: 'html',
            text: `<b>Example</b>: <b>The</b> Atlantic Ocean`
          },
          `5. 'The' is used before the names of mountain ranges.`,
          {
            type: 'html',
            text: `<b>Example</b>: <b>The</b> Himalayas`
          },
          `6. 'The' is used before the superlative degrees of an adjective.`,
          {
            type: 'html',
            text: `<b>Example</b>: You are <b>the</b> best boy in my class.`
          },
          `7. 'The' is used before a whole class.`,
          {
            type: 'html',
            text: `<b>Example</b>: <b>The</b> cow is a pet animal.`
          },
          `8. 'The' is used before names of races or nations.`,
          {
            type: 'html',
            text: `<b>Example</b>: <b>The</b> English ruled over <b>the</b> Indians.`
          },
          `9. 'The' is used before names of newspapers, holy books, famous buildings, ships, and historical events.`,
          {
            type: 'html',
            text: `<b>Examples</b>: I read <b>the</b> Hindustan newspaper.<br>
<b>The</b> Ramayana is a famous book.`
          },
          `10. 'The' is used before proper nouns, common nouns, abstract nouns and material nouns to make them common nouns.`,
          {
            type: 'html',
            text: `<b>Example</b>: Kalidas is <b>the</b> Shakespeare of India.`
          },
          `11. 'The' is used before the name of musical instruments.`,
          {
            type: 'html',
            text: `<b>Example</b>: Rani plays <b>the</b> guitar.`
          },
          `12. 'The' is used before the name of inventions.`,
          {
            type: 'html',
            text: `<b>Example</b>: Who invented <b>the</b> television?`
          },
          `13. 'The' is used before parts of the body.`,
          {
            type: 'html',
            text: `<b>Example</b>: He got an injury in <b>the</b> head.`
          },
          `14. 'The' is used before political parties.`,
          {
            type: 'html',
            text: `<b>Examples</b>: <b>The</b> Congress Party; <b>The</b> Bhartiya Janata Party.`
          },
          `# Uses of 'A'
1. 'A' is used before words beginning with consonants.`,
          {
            type: 'html',
            text: `<b>Examples</b>: <b>a</b> piece of news, <b>a</b> patient, <b>a</b> cup`
          },
          `2. 'A' is used before words that begin with a vowel, but have a sound of a consonant.`,
          {
            type: 'html',
            text: `<b>Examples</b>: <b>A</b> university, <b>A</b> European`
          },
          `# Uses of 'An'
1. 'An' is used with words that begin with an alphabet (a, e, i, o, u).`,
          {
            type: 'html',
            text: `<b>Examples</b>: <b>an</b> orange, <b>an</b> egg, <b>an</b> octave`
          },
          `2. 'A/an' is used before the adjective, if the adjective comes with a noun.`,
          {
            type: 'html',
            text: `<b>Examples</b>: <b>a</b> nice book, <b>an</b> intelligent boy, <b>a</b> good prize`
          },
          `3. 'An' is used before words beginning with consonants having vowel sounds.`,
          {
            type: 'html',
            text: `<b>Examples</b>: <b>An</b> FIR, <b>An</b> MSc.`
          },
          `# Omission of Article
1. We should not use 'the' before proper nouns `,
          {
            type: 'html',
            text: `<b>Examples</b>: Kolkata, Rashmi, Sunday and so on.
=> Here are some <b>exceptions</b> to this rule: <b>The</b> Punjab, <b>The</b> USA, <b>The</b> Deccan - (<b>Group of states</b>)`
          },
          `2. We should not use 'the' before subjects and arts.`,
          {
            type: 'html',
            text: `<b>Example</b>: I don't like Science.`
          },
          `3. When we use abstract nouns in a general sense, we omit 'the'.`,
          {
            type: 'html',
            text: `<b>Example</b>: Health is wealth.`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-art',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `Which of the following is not a type of article?`,
            options: `All of the above are types of articles, A, An, The `
          },
          {
            qText: `Which of the following is a definite article?`,
            options: `The, A, An, None of the above`
          },
          {
            qText: `When is 'the' used?`,
            options: `Before the name of rivers, seas, canals, oceans, valleys, deserts, forests
Before the name of a single mountain or hill
Before the name of a musical instrument
Before a proper noun, common noun, abstract noun or material noun to make them common nouns`
          },
          {
            qText: `When do we use 'an' instead of 'a'?`,
            options: `Before words beginning with a vowel but have a sound of a consonant, Before words beginning with consonants, Before words beginning with vowels, All of the above`
          },
          {
            qText: `When should we omit the article?`,
            options: `Before proper nouns, Before subjects and arts, When we use abstract nouns in a general sense, *All of the above`
          }
        ]
      }
    },
    {
      label: 'True or False',
      type: 'classifySentence',
      id: 'true-false',
      commonData: {
        title: 'Classify the following sentences as True or False',
        types: ['True', 'False']
      },
      data: [
        [
          `"An" is used before words that start with a vowel sound.
"A" is used before words that start with a consonant sound.
"An" can be used before words that start with a silent "h". `,

          `"The" is an indefinite article.
"A" can be used before words that start with a silent "h". `
        ],
        [
          `"The" can be used with both countable and uncountable nouns. `,

          `"The" can only be used with singular nouns. 
"An" can only be used with plural nouns.
"A" can only be used with countable nouns.
"A" can be used with both countable and uncountable nouns.`
        ],
        [
          `"The" is always used before a specific noun.
"The" can be used with abstract nouns.`,

          `"An" is always used before a vowel.
"A" and "an" are interchangeable. 
"A" and "an" are both definite articles.`
        ],
        [
          `"The" can be used with superlative adjectives.
"A" and "an" are both indefinite articles.
"The" can be used before a proper noun.
"The" can be used before a possessive pronoun.`,

          `"A" can be used before an adjective.`
        ],
        [
          `"The" can be used before a singular noun that represents a whole class of things.
"An" can be used before an acronym.`,

          `"An" can be used before an uncountable noun.
"A" can be used before an uncountable noun. 
"A" can be used before a singular noun that represents a whole class of things.`
        ],
        [
          `"A" can be used before a proper noun.`,

          `"The" is always used before a plural noun.
"The" is always used before a common noun.
"The" is always used before an adjective.
"An" can be used before a noun that starts with a consonant sound.`
        ]
      ]
    },
    {
      id: 'fill-up-art',
      label: 'Articles',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks with suitable articles.`
      },
      data: [
        `*The (an)* dog barked at *the (x)* mailman.
*A (x)* cat jumped onto *the (an)* windowsill.
*An (A)* apple *a (the)* day keeps *the (a)* doctor away.
*The (x)* car honked loudly in traffic.
*A (x)* bird flew into *the (an)* tree.`,

        `*The (A)* ocean is vast and mysterious.
*A (An)* spider crawled across the ceiling.
The book on *the (x)* shelf caught my eye.
*An (a)* umbrella is useful on *a (the)* rainy day.
*The (A)* sun rose over the mountains.`,

        `A guitar player strummed *a (x)* melody.
The airplane flew *x (the)* overhead.
*An (A)* elephant trumpeted in the distance.
The waiter brought us *x (the)* menus to peruse.
A basketball bounced on *the (a)* court.`,

        `The lion roared in *the (x)* zoo enclosure.
An artist painted *a (the)* beautiful landscape.
*The (a)* coffee shop was bustling with activity.
*A (an)* frog hopped into the pond.
*The (a)* newspaper reported on the latest news.`,

        `*An (a)* actor was memorizing their lines for the play.
The chef cooked *a (x)* delicious meal.
A scientist conducted *an (the)* experiment.
The flower bloomed in *the (a)* garden.
*An (A)* athlete was training hard for the competition.`
      ]
    },
    {
      id: 'a-an-the',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Fill in the blanks using a/an/the.'
      },
      data: [
        `I want to ask *a* question now.
It is *a* nice day today.
Mohini works in *an* office.
*A* man was crossing the road.
She works in *a* factory.`,

        `There is *a* huge statue of Rani Lakshmibai at the square.
Yours is *an* inspiring story.
Where is *the* Statue of Liberty situated?
He belongs to *a* different school of thought.
Do you know where *the* library is?`,

        `I am going to *the* club.
*The* Gomati is a famous river.
Rashmi is *a* unique girl.
I know how to play *the* violin.`,

        `She was not in *the* mood for cutting jokes.
This is *an* honor for me.
One cannot compare *an* orange with *an* apple.
Durian is *a* unique fruit native to Southeast Asia.`,

        `I saw *a* bird in the tree.
*An* apple *a* day keeps *the* doctor away.
*The* sun rises in *the* east and sets in *the* west.
I want to buy *a* car.
Can you pass me *the* salt?`
      ]
    },
    {
      id: 'complete-para',
      label: 'Complete the paragraph ',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Complete the paragraph using articles. Mark `x` wherever articles are not used.'
      },
      lockAfter: 1,
      data: [
        `Mr. Sheetal Das is my *x* neighbor. He is *a* businessman. He owns *a* spacious bungalow and *a* car. His house is well-furnished. It is equipped with all *the* comforts of life. I am, however, sad to see that he does not have very good relations with his *x* neighbors. Once he called *the* police against one of his neighbors. It happened just because he thought that his neighbor's children had broken his window glass. *The* children had of course denied it. He has *a* servant. This poor boy is not given enough food to eat. He never donates money to any cause. I wonder why he behaves in such *an* ignoble manner. May God grant him *x* wisdom!`,

        `My school owns *a* good library. It has two rooms. One of these rooms is called *the* reading room. Here, *the* students sit and study quietly. *The* other room is bigger. In one of its parts, there are several cupboards full of *x* books. Each cupboard has *a* special branch of knowledge hidden within *the* books. I am very fond of *the* cupboard which contains story books. *The* library has books suited to students of all age groups. *The* library is *a* great source of pleasure and knowledge. *A* school without *a* library is like *a* kitchen without *x* food.`,

        `My favorite season is *the* Rainy season. In *x* India it is *a* very important season. *The* agriculture in *x* India depends largely on *the* water given by *the* rains. For me, it is *the* most colorful of all *the* seasons. One can see a lot of greenery around oneself. *The* dark clouds are *a* great blessing and are eagerly awaited after *the* scorching summer heat. *The* best part of *the* season is that one gets a lot of unexpected holidays from school due to *the* rains. It is *a* pleasure to go out in *the* rain and get wet.`,

        `*x* Examinations are always fearful. They are *a* great cause of fear, anxiety, tension and worry. *The* night before *the* examination is really painful. *The* students have no sleep. They stop eating *x* food. They want to read and revise everything. They are disturbed if someone tells them *an* important question. They at once study for its answer. They are irritated if someone disturbs them. They pass *the* whole night in tension. They do not take anything in *the* morning. They go to *the* examination hall on *x* empty stomachs.`,

        `*The* scene at *a* Railway Platform is always enjoyable. It presents *a* picture of *x* mini India. Last Sunday I went to *the* city Railway station to see my uncle off. *The* platform was overcrowded. There were many stalls on *the* platform. Small children were running here and there. Coolies in *x* red dresses were going to and fro. Passengers were taking *x* tea. Some people were reading *x* newspapers. They were waiting for *the* train. Soon *the* train came. My uncle got *a* seat and *the* train started. I returned home.`
      ]
    },
    {
      id: 'complete-conv',
      label: 'Complete the Conversation ',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Complete the conversations using articles. Mark `x` wherever articles are not used.'
      },
      lockAfter: 1,
      data: [
        `Jay: Hey, did you see *the* news article about *the* new restaurant that opened downtown?
Jake: No, I haven't seen it yet. Is it *a* fancy restaurant?`,

        `Jay: Yeah, it looks pretty upscale. They have *a* menu with *a* lot of unique dishes, like *an* avocado and crab salad.
Jake: Hmm, that sounds interesting. Do they have *a* website with *the* menu?`,

        `Jay: Yeah, I think they do. Let me check on my *x* phone.
Jake: Thanks. I want to see if they have *a* vegetarian option. I don't eat meat.`,

        `Jay: Oh, I see. Yeah, they have *a* few vegetarian options. They have *a* roasted vegetable plate and *a* spinach salad.
Jake: Perfect! Let's plan to go there for *x* lunch tomorrow.`,

        `Jay: Sounds good to me. Should we make *a* reservation?
Jake: Yeah, we should definitely make *a* reservation to make sure we get *a* table.`,

        `Amit: Hey, did you see *the* article in *the* newspaper today?
Rahul: No, I haven't had *a* chance to read it yet. What was it about?`,

        `Amit: It was *an* opinion piece about *the* upcoming election.
Rahul: Oh, interesting. I'll have to take *a* look. Did they mention any specific candidates?`,

        `Amit: Yeah, they talked about *the* frontrunner and *the* issues they're focusing on.
Rahul: Hmm, I wonder if they mentioned *the* controversy surrounding *the* candidate's past statements.`,

        `Amit: They did touch on it briefly, but mostly focused on *the* candidate's current platform.
Rahul: Okay, got it. Thanks for *the* summary. I'll definitely check it out later.`
      ]
    },
    {
      id: 'mcq-article',
      label: 'Multiple Choice Questions ',
      type: 'mcq',
      data: {
        title: 'Choose the correct alternative',
        questions: [
          {
            qText: 'When is "the" not used?',
            options: `with proper noun, with mountain ranges, with rivers, with the name of a newspaper`
          },
          {
            qText:
              'With which of the following words it is incorrect to use "the"?',
            options: `Kolkata, Punjab, Deccan, USA`
          },
          {
            qText: 'When is an article used before an adjective?',
            options: `when the adjective is accompanied by a noun, when an adjective is accompanied by a verb, when an adjective is accompanied by an adverb`
          },
          {
            qText:
              'Which of the following sentence has the correct usage of articles?',
            options: `Who invented the radio?, Riya can play a guitar, A cow is a pet animal`
          },
          {
            qText: '"She is an MSc in Physics.": Is this sentence correct?',
            options: `Yes, No`
          },
          {
            qText:
              '"___ examinations are always fearful.": Which of the following is the most suitable answer?',
            options: `x, A, An, The`
          },
          {
            qText:
              '"A representative from each state including the Rajasthan, the Tamil Nadu and the Assam were gathered for the meeting." : Is the above sentence correct?',
            options: `No, Yes`
          },
          {
            qText:
              '"A representative from each state including the Rajasthan, the Tamil Nadu and the Assam were gathered for the meeting." : What is the incorrect usage in the above sentence?',
            options: `Use of 'the' before the states, Use of 'A' before representative, Use of 'the' before meeting`
          }
        ]
      }
    }
  ]
};
