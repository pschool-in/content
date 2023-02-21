export default {
  id: 'clause',
  label: 'Clauses',
  pdf: '',
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'clauses-reading',
      data: {
        title: 'Clauses',
        text: [
          `A clause is a group of words that consists of a subject and a verb, but still not a complete sentence. Eg:
1. "I see you".
2. "She ran away".
3. "They sang beautifully".
4. "Ram won" a bicycle race.
#Types of Clauses
There are two types of clauses
1. Independent Clause
2. Dependent Clause
"Independent Clause" expresses a complete thought and can be used as a sentence. 
Examples:
1. I want some cereal.
2. Meena likes cats.
3. Karan is a good football player.
"Dependent Clause" doesn't express a complete thought and cannot be used as a sentence. A dependent clause is introduced by a dependent word. 
Below is the list of dependent words:
1. After, although, as, as if, because, before, even if, even though, ever since, how, if 
2. In order, that, since, so, so that, than, that, though, unless, until, what, whatever, when 
3. Whenever, where, whereas, wherever, whether, which, whichever, while, whom, whose, why 
Whenever a clause begins with one of the above dependent words it is called a dependent clause. 
For example:
1. After we finished the game
2. Although we finished the game. 
3. Before we finish the game.`
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Identify the clause',
      id: 'select-word',
      commonData: {
        title: 'Select the clause in the below sentence.',
        multiSelect: true
      },
      data: [
        `*He* *is* *standing* on the bench.
*The* *dog* *is* *sleeping* under the table.
*She* *is* *drawing* on the wall.
*He* *is* *standing* at the door.
*He* *is* *dancing* on the floor.
*The* *tiger* *is* *an* *animal* of great strength.
*Do* *not* *play* with older children.
*Hyderabad* *is* *a* *city* of pearls.
*She* *listened* *to* *me* with great curiosity.
*She* *is* *eating* on a plate.`,

        `*She* *arrived* *to* *work* *on* *time* despite leaving home so late.
*I* *was* *standing* near the gate.
*She* *made* *coffee* for the guests.
*He* *bought* *a* *scarf* for a friend.
*She* *was* *dancing* in the rain.
*Calcutta* *is* *a* *city* of thick population.
*Meera* *is* *singing* on the stage.
*Mahesh* *waited* *for* *Ram* at the bus stop.
*I* *am* *sleeping* on the mat.
*The* *dog* *barked* when I opened the gate.`,

        `*The* *people* *are* *dancing* at the party.
*He* *reached* *school* in time.
*I* *will* *meet* *him* in my office.
*She* *wrote* *a* *poem* on a piece of paper.
*Kiran* *poured* *the* *mango* *juice* in the bottle. 
*She* *sings* like a nightingale.
*They* *are* *dancing* to the disco song.
*She* *is* *cooking* in the kitchen.
*I* *saw* *a* *snake* in the street.
*The* *cat* *is* *sleeping* on the mat.`
      ]
    },
    {
      type: 'selectWord',
      label: 'Identify the independent clause',
      id: 'select-word-2',
      commonData: {
        title: 'Select the independent clause (IC) from each sentence',
        multiSelect: true
      },
      data: [
        `*I* *am* *saving* *my* *money* because I wanted to buy a new mobile. 
When I arrived, *Meera* *was* *surprised* *to* *see* *me*.
*Karan* *is* *a* *good* *football* *player*.
*Priya* *loves* *to* *read* before going to bed.
Although we were late, *we* *decided* *to* *watch* *the* *match* *anyway*.`,

        `*I* *forgot* *most* *of* *the* *items* *I* *needed* because I forgot my list. 
*She* *walked* *to* *the* *grocery* *store* to buy a box of chocolates. 
When Ramesh got home, *he* *ate* *lunch*.
*I* *like* *to* *sit* *in* *the* *balcony* while the warm breeze blows.
*I* *went* *to* *the* *park* in the evening.`
      ]
    },
    {
      type: 'selectWord',
      label: 'Identify the Dependent Clause',
      id: 'select-word-3',
      commonData: {
        title: 'Select the dependent clause from each sentence',
        multiSelect: true
      },
      data: [
        `My mother is a nurse *since* *she* *likes* *to* *help* *people*. 
*After* *the* *storm*, there were branches in the streets.
I asked the question *that* *no* *one* *else* *wanted* *to* *ask*.
Ravi eats carrots *when* *he* *wants* *to* *have* *a* *snack*.
*If* *you* *want* *to* *be* *my* *friend*, you will tell me the truth.`,

        `I am not cleaning the dishes *unless* *pavan* *helps*.
I made good money *until* *I* *lost* *my* *job*. 
*After* *swimming* *in* *the* *pool*. 
*Because* *he* *ran*, he was able to catch the bus. 
*Until* *the* *sun* *sets*, we are going to play.`,

        `*As* *the* *lights* *turn* *off*, I will go to sleep. 
*Wherever* *he* *might* *go*, I'll follow him. 
*Since* *I* *went* *back* *to* *school* I am feeling happy.
*Whenever* *you* *come* *to* *visit*, make sure to bring food. 
*Unless* *you* *have* *the* *right* *size* don't try it. 
*When* *it* *will* *start* *to* *snow* we will go skiing.
*If* *the* *dress* *is* *on* *sale* she will buy it.`
      ]
    },
    {
      type: 'classifySentence',
      label: 'Classify',
      id: 'identify-type',
      data: {
        title:
          'Classify the underlined part of the sentence as a dependent clause (DC) or independent clause (IC)',
        types: [
          {
            name: 'Dependent Clause',
            text: `Mahita bought some flowers *which she wanted to give her mother since morning*.
He drove fast *so that he could reach the airport on time*.
I don't know the reason *why she dislikes me*.
The gardener said *that all the plants had been pruned neatly*. 
I wondered *if she was free*.
The boys *who misbehaved in the class* were suspended.
This is the homework assignment *that you missed last week*.
*When I went to the zoo*, I looked at the animals
The teacher *who lives next door to Raj* is Mrs. Iyer.`
          },
          {
            name: 'Independent Clause',
            text: `*We went for a walk* after the rain stopped. 
Until the sun sets *I will stay out and play*. 
Because the heavy rains knocked out the power, *the school will be closed on Friday*.
*The movie was good* although it was too long. 
Though he didn't receive formal schooling, *he is clever and smart*.
*Our dog will run away* if the gate is left open.`
          }
        ]
      }
    }
  ]
};
