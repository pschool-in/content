export default {
  id: 'affixation-8',
  label: 'Affixation',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Affixation',
        text: [
          `# Affixation
An affix is a word element of English grammar used to alter the meaning or form of a word and comes in the form of either a prefix or a suffix. 
# Affixation in Comparative and Superlative Degree
1. Most comparative and superlative degrees are made by adding -er and -est. If the adjective ends in -e, only then -r and -st are added.`,
          {
            type: 'html',
            text: `<b>Examples</b>: sweet -> sweet<b>er</b> -> sweet<b>est</b>; safe -> saf<b>er</b> -> saf<b>est</b>; dark -> dark<b>er</b> -> dark<b>est</b>`
          },
          `2. Adjectives ending in y, drop the -y and take -ier and -iest.`,
          {
            type: 'html',
            text: `<b>Examples</b>: crazy -> craz<b>ier</b> -> craz<b>iest</b>; early  -> earl<b>ier</b> -> earl<b>iest</b>; happy -> happ<b><ier</b> -> happ<b>iest</b>`
          },
          `3. In some adjectives that have just one syllable, the last consonant is doubled.`,
          {
            type: 'html',
            text: `<b>Examples</b>: thin —> thi<b>nner</b> —> thi<b>nnest</b>; sad —> sa<b>dder</b> -> sa<b>ddest</b>; dim -> di<b>mmer</b> -> di<b>mmest</b>`
          },
          `4. Adjectives that have more than two or three syllables take more and most to make comparative and superlative degrees. These include adjectives that end in -ed, -ful, -less, -ing, etc.`,
          {
            type: 'html',
            text: `<b>Examples</b>: excited -> <b>more</b> excited —> <b>most</b> excited; useful —> <b>more</b> useful -> <b>most</b> useful`
          }
        ]
      }
    },
    {
      id: 'fill-up',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks with the most appropriate degree of comparison in the following sentences.`
      },
      data: [
        `Athiya is *smarter (smartest)* than most of her friends.
Nobody is as *good (best)* as you.
Priya was the *most elegant (more elegant)* of all.
Harminder is *taller (tallest)* than her brother.
The most recent movie was *excellent (excellenter)*.`,

        `Mount Everest is the *highest (higher)* peak.
Woody is the *most watched (watched more)* series.
Sreya is *happier (happy)* than Tina.
Arhan is a *patient (patienter)* kid.
These maths problems are *easy (easiest)*.`
      ]
    },
    {
      id: 'fillup-2',
      label: 'Degrees of Comparisson',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Fill in the missing blanks with the most appropriate degree of comparison.'
      },
      lockAfter: 2,
      data: [
        `Big, *Bigger*, Biggest
Thin, Thinner, *Thinnest*
Fat, *Fatter*, Fattest
Dim, Dimmer, *Dimmest*
Hot, *Hotter*, Hottest`,

        `Sad, Sadder, *Saddest*
Slim, *Slimmer*, Slimmest
Red, Redder, *Reddest*
Bright, *Brighter*, Brightest
Short, Shorter, *Shortest*
Weak, *Weaker*, Weakest`,

        `Long, Longer, *Longest*
Smart, *Smarter*, Smartest
Cool, Cooler, *Coolest*
Dark, *Darker*, Darkest
Small, Smaller, *Smallest*`,

        `Bold, *Bolder*, Boldest
Humble, Humbler, *Humblest*
Simple, *Simpler*, Simplest
Fine, Finer, *Finest*
Noble, *Nobler*, Noblest`,

        `Brave, Braver, *Bravest*
Wealthy, *Wealthier*, Wealthiest
*Healthy*, Healthier, Healthiest
Costly, *Costlier*, Costliest`,

        `Busy, Busier, *Busiest*
*Cosy*, Cosier, Cosiest
Little, *Less*, *Least*
Many, *More*, Most`
      ]
    },
    {
      id: 'fillup-1',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Fill in the blanks with the most appropriate degree of comparison in the following sentences.'
      },
      lockAfter: 2,
      data: [
        `Mira works hard. Her sister works *harder*. Her brother works the *hardest*.
You should do well in your test. It should be *better* than last time. In fact you should do the *best* this time.
Ben is crazy. Zen is *crazier* than Ben. But Ron is the *craziest* of them all.`,

        `Rabab is thin. Her sister Rehab is *thinner*. But Rhea is the *thinnest* of them.
Kartik did badly in his entrance test. Hemant did *worse* than him. Sachin did the *worst*.
Sangita draws sketches as good as Sanchi does. Sanjay does *better* than his sister. But their mother can draw pictures the *best*.`,

        `Shilpa is tall.	Sheena is *taller* than Shilpa.	Samira is the *tallest* of all the girls.
She is pretty. Reem is *prettier* than her sister. Riya is the *prettiest* of them.
Sam is intelligent.	Sam is *more intelligent* than Tina. Sam is the *most intelligent* kid in class.`,

        `He is smart. He is *smarter* than Geetha. He is the *smartest* among them.
Rinita has a big house.	Rinita has a *bigger* house than Seena.	Roshini has the *biggest* house among them.
My friend, Bindhu looks happy. Bindhu looks *happier* than my other friends. Bindhu, looks the *happiest* while playing.`
      ]
    }
  ]
};
