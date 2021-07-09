export default {
  label: 'Adjective',
  id: 'adjective',
  list: [
    {
      label: 'Appropriate Adjective',
      type: 'matchByDragDrop',
      id: 'right-word',
      commonData: {
        title: 'Put the adjectives given in the bottom at the right place.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `An ostrich lays the *biggest* eggs!
The clown in the circus wore *colourful* clothes.
I have an *orange* persian cat.
Our neighbours have a *beautiful* garden.
Puja’s school is on a *wide* road.`,

        ` Did you know that giraffes have *blue* tongues?
The boy was wearing a sweater of *soft* wool.
My mother’s *favourite* ice cream is vanilla.
The blue whale is the *largest* mammal.
The lime juice is very *sour*.`,

        `This road is very *wide*.
These books are very *old*.
Where are you going, my *pretty* maid?
The *brave* soldier died fighting for his country.
The *thirsty* crow could not reach the water in the pot.`,

        `This *short* path will lead right into the forest.
Her cupboard has *many* shelves.
The farmer’s geese walked in a *straight* line!
The children are sitting on the *green* grass.
Please wear a *clean* shirt before you go out.`
      ]
    }
  ]
};
