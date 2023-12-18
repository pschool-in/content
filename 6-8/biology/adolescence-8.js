export default {
  id: 'adolescence-8',
  label: 'Reaching the Age of Adolescence',
  lockAfter: 4,
  list: [
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fillup-drag-drop',
      data: {
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `The onset of *puberty* brings about the growth of the reproductive organs. 
*Hair* grows at various places on the body. 
Breasts develop in *girls* and facial hair appears in *boys*. 
Voice of boys becomes hoarse as the *voice box* enlarges during adolescence.
Children gain *height* during adolescence.
The onset of puberty and maturity of reproductive parts are controlled by *hormones*.`
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              'Adolescents should be careful about what they eat, because ___________',
            options: ` proper diet is needed for the rapid growth taking place in their body.
proper diet develops their brains.
adolescents feel hungry all the time.`
          },
          {
            qText: 'Reproductive age in women starts when their _________',
            options: `menstruation starts, breasts start developing, body weight increases.`
          },
          {
            qText: 'The right meal for adolescents consists of ___________',
            options: `chapati, dal, vegetables
chips, noodles, coke
rice, noodles and burger`
          },
          {
            qText:
              'Sex of the unborn child depends on whether the zygote has ________ chromosomes.',
            options: `XX or XY, XXX or XXY, ZW or ZZ`
          },
          {
            qText:
              'Children between the ages of ________ years are called adolescents',
            options: `11 and 19, 21 and 29, 5 and 10`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Pancreas, insulin
Thyroid, thyroxine
Adrenals, adrenalin
Testosterone, male hormone
Estrogen, female hormone. `,
        title: 'Match the following.'
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fillup-drag-drop-2',
      data: {
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `*Pituitary* gland secretes hormones which include *growth* hormone and hormones that make other glands secrete hormones.
*Pancreas* secretes insulin, *thyroid* produces thyroxine and *adrenals* produce adrenalin.
*Testosterone* is the male hormone and *estrogen*, the female hormone. 
The *uterine* wall in females prepares itself to receive the developing fertilized egg. 
In case there is no fertilization, the thickened lining of the uterine wall breaks down and goes out of the body along with blood. This is called *menstruation*.`
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'complete-word',
      data: {
        text: `Protruding voice box in boys|ADAMS APPLE| A____ A____
Glands without ducts|ENDOCRINE
Endocrine gland attached to brain|PITUTARY
Secretion of endocrine glands|ENZYME
Pancreatic hormone|INSULIN
Female hormone|ESTROGEN
Male hormone|TESTOSTERONE
Secretes thyroxine|THYROID
Another term for teenage|ADOLESCENCE
Hormone reaches here through blood stream|TARGET SITE|T_____ S___
Voice box|LARYNX
Term for changes at adolescence|PUBERTY`
      }
    }
  ]
};
