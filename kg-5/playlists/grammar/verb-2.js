export default {
  label: 'Verb',
  id: 'verb-2',
  list: [
    {
      label: 'Clue Me In!',
      type: 'matchByDragDrop',
      id: 'right-word',
      commonData: {
        title: 'Drag and drop the words at the right blanks.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `Leaves *rustle* in the breeze.
A pressure cooker *whistles*.
Trees *sway* in the wind.
The river *flows*.
The refrigerator *hums*.
The timer in the oven *pings*.`,

        `Water *drips* from a leaking tap.
Fans *rotate*.
A kite *flies*.
The Sun *shines*.
The waves *crashed* on the beach.
The brook *bubbled* joyfully.`,

        `The clock *stopped* suddenly.
The program *fizzled out* like a damp squib!
The car *honked* noisily.
The sea *roared* angrily.
The *fury* of the storm was scary.`,

        `The rain *beat* down relentlessly.
The pages *rustled* softly.
The candle *melted* into a puddle.
The logs *float* on the river.
The crown *sat* on the king’s head.`
      ]
    }
  ]
};
