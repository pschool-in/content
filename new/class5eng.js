export default {
  label: 'Class 5 English',
  id: 'class5eng',
  lockAfter: 100,
  list: [
    {
      type: 'selectWord',
      label: 'Object of Possessive Nouns',
      id: 'select-word',
      data: {
        title: 'Select the object of possessive nouns',
        text: `Kiran's *dog* is cute.
The boys' *kites* are colourful.
Rita's *house* is near the lake.
The doctors' *coats* are white in colour.
The babys' *frock* is so small.
The children's *team* won the match.
This monkey's *tail* is very long.
All the girls' *rooms* are neat.
A kite might get stuck in Sid's *tree*.`
      }
    },
    {
      label: 'Indefinite Possessive Pronouns',
      type: 'matchByDragDrop',
      id: 'fill-up',
      lockAfter: 1,
      data: {
        title:
          'Fill up the given indefinite possessive pronouns in the right place',
        fontSize: '1rem',
        text: `That's not Sita's watch; it must be *someone's* other than her.
Both the teams were playing well. It could be *anybody's* game.
The roads are closed. *Nobody's* car is allowed beyond this point.
One should love *one's* country.
Suma and Rama are good friends. They always share *each other's* problems.
It was an unexpected accident. It was *no one's* fault.`
      }
    },
    {
      id: 'fillup',
      label: 'Fillup: Auxiliary Verbs',
      type: 'fillup',
      data: {
        title: `Choose the correct basic auxiliary which completes each sentence or question appropriately.`,
        text: `I *am (being)* baking a cake.
I *have (was)* met them before.
Mahi always *does (do)* her homework on time.
*Do (Does)* you want to go to the party.
We *are (has)* playing cricket today.
*Did (Does)* you like the ice-cream?
Krish and Mohan *were (have)* happy with their results.`
      }
    },
    {
      label: 'Fill Up: Modal Verbs',
      type: 'matchByDragDrop',
      id: 'fill-up-2',
      data: {
        title: 'Complete the sentences with appropriate modal verbs',
        fontSize: '1rem',
        text: `You *should* wear a uniform to school.
He *cannot* come with us because he's broken his leg.
I *will* get an award for my performance.
*shall* I train you for the next week's match?
Arun *might* surely come to the school's annual day.
*would* you please help me solve this puzzle?`
      }
    }
  ]
};
