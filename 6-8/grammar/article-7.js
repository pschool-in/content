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
            text: `Eg: This is <i>the</i> boy who won the last match.`
          },
          `2. 'The' is used before common nouns which are names of things unique of their kind.`,
          {
            type: 'html',
            text: `Eg: <i>The</i> Earth is our planet.`
          },
          `3. 'The' is used before the name of directions and dates of months.`,
          {
            type: 'html',
            text: `Eg: <i>The</i> Sun sets in the West.`
          },
          `4. 'The' is used before the name of rivers, seas, canals, oceans, valleys, deserts and forests.`,
          {
            type: 'html',
            text: `Eg: <i>The</i> Atlantic Ocean`
          },
          `5. 'The' is used before the names of mountain ranges.`,
          {
            type: 'html',
            text: `Eg: <i>The</i> Himalayas`
          },
          `6. 'The' is used before the superlative degrees of an adjective.`,
          {
            type: 'html',
            text: `Eg: You are <i>the</i> best boy in my class.`
          },
          `7. 'The' is used before a whole class.`,
          {
            type: 'html',
            text: `Eg: <i>The</i> cow is a pet animal.`
          },
          `8. 'The' is used before names of races or nations.`,
          {
            type: 'html',
            text: `Eg: <i>The</i> English ruled over <i>the</i> Indians.`
          },
          `9. 'The' is used before names of newspapers, holy books, famous buildings, ships, and historical events.`,
          {
            type: 'html',
            text: `Eg: I read <i>the</i> Hindustan newspaper.<br>
<i>The</i> Ramayana is a famous book.`
          },
          `10. 'The' is used before proper nouns, common nouns, abstract nouns and material nouns to make them common nouns.`,
          {
            type: 'html',
            text: `Eg: Kalidas is <i>the</i> Shakespeare of India.`
          },
          `11. 'The' is used before the name of musical instruments.`,
          {
            type: 'html',
            text: `Eg: Rani plays <i>the</i> guitar.`
          },
          `12. 'The' is used before the name of inventions.`,
          {
            type: 'html',
            text: `Eg: Who invented <i>the</i> television?`
          },
          `13. 'The' is used before parts of the body.`,
          {
            type: 'html',
            text: `Eg: He got an injury in <i>the</i> head.`
          },
          `14. 'The' is used before political parties.`,
          {
            type: 'html',
            text: `Eg: <i>The</i> Congress Party; <i>The</i> Bhartiya Janata Party.`
          },
          `# Uses of 'A'
1. 'A' is used before words beginning with consonants.`,
          {
            type: 'html',
            text: `Eg: <i>a</i> piece of news, <i>a</i> patient, <i>a</i> cup`
          },
          `2. 'A' is used before words that begin with a vowel, but have a sound of a consonant.`,
          {
            type: 'html',
            text: `Eg: <i>A</i> university, <i>A</i> European`
          },
          `# Uses of 'An'
1. 'An' is used with words that begin with an alphabet (a, e, i, o, u).`,
          {
            type: 'html',
            text: `Eg: <i>an</i> orange, <i>an</i> egg, <i>an</i> octave`
          },
          `2. 'A/an' is used before the adjective, if the adjective comes with a noun.`,
          {
            type: 'html',
            text: `Eg: <i>a</i> nice book, <i>an</i> intelligent boy, <i>a</i> good prize`
          },
          `3. 'An' is used before words beginning with consonants having vowel sounds.`,
          {
            type: 'html',
            text: `Eg: <i>An</i> FIR, <i>An</i> MSc.`
          },
          `# Omission of Article
1. We should not use 'the' before proper nouns `,
          {
            type: 'html',
            text: `Eg: <s>The</s> Kolkata, <s>The</s> Rashmi, <s>The</s> Sunday.<br><br>
=> Here are some exceptions to this rule: <i>The</i> Punjab, <i>The</i> USA, <i>The</i> Deccan - (<i>Group of states</i>)`
          },
          `2. We should not use 'the' before subjects and arts.`,
          {
            type: 'html',
            text: `Eg: I don't like <s>the</s> Science.`
          },
          `3. When we use abstract nouns in a general sense, we omit 'the'.`,
          {
            type: 'html',
            text: `Eg: Health is <s>the</s> wealth.`
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
            options: `A, An, The, *All of the above are types of articles `
          },
          {
            qText: `Which of the following is a definite article?`,
            options: `The, A, An`
          },
          {
            qText: `When is 'the' NOT used?`,
            options: `Before subjects and arts
Before the name of inventions
Before the name of a musical instrument
Before a proper noun, common noun, abstract noun or material noun to make them common nouns`
          },
          {
            qText: `When do we use 'an' instead of 'a'?`,
            options: `*Before words beginning with a vowel but have a sound of a consonant, Before words beginning with consonants, Before words beginning with vowels, All of the above`
          },
          {
            qText: `When should we omit the article?`,
            options: `Before proper nouns, Before subjects and arts, When we use abstract nouns in a general sense, *All of the above`
          }
        ]
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
            text: ` "An" is used before words that start with a vowel sound.
"A" is used before words that start with a consonant sound.
"An" can be used before words that start with a silent "h".
"The" can be used with both countable and uncountable nouns. `
          },
          {
            name: 'False',
            text: `"The" is an indefinite article.
"A" can be used before words that start with a silent "h".
"The" can only be used with singular nouns. 
"A" can only be used with countable nouns.`
          }
        ]
      }
    },
    {
      id: 'fill-up-art',
      label: 'Filup',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks with suitable articles.`
      },
      data: [
        `*The (An)* dog barked at *the (-)* mailman.
*A (-)* cat jumped onto *the (an)* windowsill.
*An (A)* apple *a (the)* day keeps *the (a)* doctor away.
*The (-)* car honked loudly in traffic.
*A (-)* bird flew into *the (an)* tree.`,

        `*The (A)* ocean is vast and mysterious.
*A (An)* spider crawled across the ceiling.
The book on *the (-)* shelf caught my eye.
*An (a)* umbrella is useful on *a (the)* rainy day.
*The (A)* sun rose over the mountains.`,

        `A guitar player strummed *a (-)* melody.
The airplane flew *- (the)* overhead.
*An (A)* elephant trumpeted in the distance.
The waiter brought us *- (the)* menus to peruse.
A basketball bounced on *the (a)* court.`,

        `The lion roared in *the (-)* zoo enclosure.
An artist painted *a (the)* beautiful landscape.
*The (A)* coffee shop was bustling with activity.
*A (An)* frog hopped into the pond.
*The (A)* newspaper reported on the latest news.`,

        `*An (a)* actor was memorizing their lines for the play.
The chef cooked *a (-)* delicious meal.
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

        `She was not in *the* mood for cutting jokes.
This is *an* honor for me.
One cannot compare *an* orange with *an* apple.
Durian is *a* unique fruit native to Southeast Asia.`,

        `I saw *a* bird in the tree.
*An* apple *a* day keeps *the* doctor away.
*The* sun rises in *the* east and sets in *the* west.
I want to buy *a* car.
Can you pass me *the* salt?`,

        `I am going to *the* club.
*The* Gomati is a famous river.
Rashmi is *a* unique girl.
I know how to play *the* violin.`
      ]
    },
    {
      id: 'complete-para',
      label: 'Complete the paragraph ',
      type: 'fillup',
      lockAfter: 1,
      commonData: {
        title:
          'Complete the paragraph using articles. Mark `-` wherever articles are not used.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `Mr. Sheetal Das is my *- (a, an, the)* neighbor. He is *a (-, an, the)* businessman. He owns *a (-, an, the)* spacious bungalow and *a (-, an, the)* car. His house is well-furnished. It is equipped with all *the (a, an, -)* comforts of life. I am, however, sad to see that he does not have very good relations with his *- (a, an, the)* neighbors. Once he called *the (a, an, -)* police against one of his neighbors. It happened just because he thought that his neighbor's children had broken his window glass. *The (A, An, -)* children had of course denied it. He has *a (-, an, the)* servant. This poor boy is not given enough food to eat. He never donates money to any cause. I wonder why he behaves in such *an (a,the, -)* ignoble manner. May God grant him *- (a, an, the)* wisdom!`,

        `My school owns *a (-, an, the)* good library. It has two rooms. One of these rooms is called *the (a, an, -)* reading room. Here, *the (a, an, -)* students sit and study quietly. *The (A, An, -)* other room is bigger. In one of its parts, there are several cupboards full of *- (a, an, the)* books. Each cupboard has *a (-, an, the)* special branch of knowledge hidden within *the (a, an, -)* books. I am very fond of *the (a, an, -)* cupboard which contains story books. *The (A, An, -)* library has books suited to students of all age groups. *The (A, An, -)* library is *a (-, an, the)* great source of pleasure and knowledge. *A (-, An, The)* school without *a (-, an, the)* library is like *a (-, an, the)* kitchen without *- (a, an, the)* food.`,

        `My favorite season is *the (a, an, -)* Rainy season. In *- (a, an, the)* India it is *a (-, an, the)* very important season. *The (A, An, -)* agriculture in *- (a, an, the)* India depends largely on *the (a, an, -)* water given by *the (a, an, -)* rains. For me, it is *the (a, an, -)* most colorful of all *the (a, an, -)* seasons. One can see a lot of greenery around oneself. *The (A, An, -)* dark clouds are *a (-, an, the)* great blessing and are eagerly awaited after *the (a, an, -)* scorching summer heat. *The (A, An, -)* best part of *the (a, an, -)* season is that one gets a lot of unexpected holidays from school due to *the (a, an, -)* rains. It is *a (-, an, the)* pleasure to go out in *the (a, an, -)* rain and get wet.`,

        `*- (A, An, The)* Examinations are always fearful. They are *a (-, an, the)* great cause of fear, anxiety, tension and worry. *The (A, An, -)* night before *the (a, an, -)* examination is really painful. *The (A, An, -)* students have no sleep. They stop eating *- (a, an, the)* food. They want to read and revise everything. They are disturbed if someone tells them *an (a, the, -)* important question. They at once study for its answer. They are irritated if someone disturbs them. They pass *the (a, an, -)* whole night in tension. They do not take anything in *the (a, an, -)* morning. They go to *the (a, an, -)* examination hall on *- (a, an, the)* empty stomachs.`,

        `*The (A, An, -)* scene at *a (-, an, the)* Railway Platform is always enjoyable. It presents *a (-, an, the)* picture of *- (a, an, the)* mini India. Last Sunday I went to *the (a, an, -)* city Railway station to see my uncle off. *The (A, An, -)* platform was overcrowded. There were many stalls on *the (a, an, -)* platform. Small children were running here and there. Coolies in *- (a, an, the)* red dresses were going to and fro. Passengers were taking *- (a, an, the)* tea. Some people were reading *- (a, an, the)* newspapers. They were waiting for *the (a, an, -)* train. Soon *the (a, an, -)* train came. My uncle got *a (-, an, the)* seat and *the (a, an, -)* train started. I returned home.`,

        `Sam, Harry, Patrick and Henry are in *a (an, the)* beautiful city in Saudi Arabia. *The (A, An)* city is called Abha. They plan to take *a (an, the)* taxi from *the (a, an)* city to visit *the (a, an)* Red Sea. On their way, they will spend *an (a, the)* afternoon at Abha Palace Hotel.`,

        `Their tour guide tells them, “It is *an (a,the)* ideal place for *a (an, the)* trek through *the (a, an)* Green Mountain. We can spot magnificent purple Jacaranda trees. It is *a (an, the)* place where artists from all over *the (a, an)* country catch up to share their creativity. *The (A, An)* street is decorated with colorful pieces of art and is illuminated at night to offer *a (the, an)* serene ambiance.`,

        `*- (the, a)* Dudhsagar Falls is *a (an, the)* four-tiered waterfall located on *the (a, -)* Mandovi River in *the (an, -)* Indian state of *- (a, the)* Goa. It is 60 km from Panaji by road and is located on *the (a, an)* Belgavi-Vasco Da Gama rail route about 46 km east of Madgaon and 80 km south of Belgavi. Dudhsagar Falls is amongst *- (the, an)* India's tallest waterfalls with *a (an, the)* height of 310 m and *an (a, -)* average width of 30 metres.`,

        `*The (A, -)* falls are located in *the (-, a)* Bhagwan Mahaveer Sanctuary and Mollem National Park among *the (-, a)* Western Ghats. *The (-, a)* falls are a punctuation mark in *the (a, -)* journey of *the (a, -)* Mandovi River from *the (a, -)* Western Ghats to *- (the, a)* Panjim where it meets *the (a, -)* Arabian sea.`,

        `*The (-, an)* area is surrounded by deciduous forests with rich biodiversity. This waterfall is also known as *- (the, a)* Tambdi Surla to some of the local people. *The (a, -)* falls are not particularly spectacular during *the (a, -)* dry season but during *the (-, a)* monsoon season, however, *the (a, -)* falls are fed by rains and form *a (-, an)* huge force of water.`
      ]
    },
    {
      id: 'complete-conv',
      label: 'Complete the Conversation ',
      type: 'fillup',
      commonData: {
        title:
          'Complete the conversations using articles. Mark `-` wherever articles are not used.'
      },
      lockAfter: 1,
      data: [
        `Jay: Hey, did you see *the (a, an, -)* news article about *the (a, an, -)* new restaurant that opened downtown?
Jake: No, I haven't seen it yet. Is it *a (an, the, -)* fancy restaurant?
Jay: Yeah, it looks pretty upscale. They have *a (an, the, -)* menu with *a (an, the, -)* lot of unique dishes, like *an (a, the, -)* avocado and crab salad.
Jake: Hmm, that sounds interesting. Do they have *a (an, the, -)* website with *the (a, an, -)* menu?
Jay: Yeah, I think they do. Let me check on my *- (an, the, a)* phone.`,

        `Jake: Thanks. I want to see if they have *a (an, the, -)* vegetarian option. I don't eat meat.
Jay: Oh, I see. Yeah, they have *a (an, the, -)* few vegetarian options. They have *a (an, the, -)* roasted vegetable plate and *a (an, the, -)* spinach salad.
Jake: Perfect! Let's plan to go there for *- (an, the, a)* lunch tomorrow.
Jay: Sounds good to me. Should we make *a (an, the, -)* reservation?
Jake: Yeah, we should definitely make *a (an, the, -)* reservation to make sure we get *a (an, the, -)* table.`,

        `Amit: Hey, did you see *the (a, an, -)* article in *the (a, an, -)* newspaper today?
Rahul: No, I haven't had *a (an, the, -)* chance to read it yet. What was it about?
Amit: It was *an (a, the, -)* opinion piece about *the (a, an, -)* upcoming election.
Rahul: Oh, interesting. I'll have to take *a (an, the, -)* look. Did they mention any specific candidates?`,

        `Amit: Yeah, they talked about *the (a, an, -)* frontrunner and *the (a, an, -)* issues they're focusing on.
Rahul: Hmm, I wonder if they mentioned *the (a, an, -)* controversy surrounding *the (a, an, -)* candidate's past statements.
Amit: They did touch on it briefly, but mostly focused on *the (a, an, -)* candidate's current platform.
Rahul: Okay, got it. Thanks for *the (a, an, -)* summary. I'll definitely check it out later.`
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
            options: `No article, A, An, The`
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
