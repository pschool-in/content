export default {
  label: 'Technical Words',
  id: 'tech-words',
  list: [
    {
      id: 'branches-science',
      type: 'passage',
      label: 'Branches of Science',
      data: {
        title: 'Branches of Science',
        text: `Study of Blood - Haematology
Study of Liver - Hepatology
Study of Fungi - Mycology
Study of Algae - Phycology
Study of Virus - Virology

Study of Kidney - Nephrology
Study of Cancer - Oncology
Study of Universe - Cosmology
Study of Fruits - Pomology
Study of Birds - Ornithology

Study of Bones - Osteology
Study of Eggs - Oology
Study of Dreams - Oneirology
Study of Hairs - Trichology
Study of Eyes - Ophthalmology`
      }
    },

    {
      label: 'Drag & Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      commonData: {
        dashWidth: 100,
        fontSize: '1rem'
      },
      data: [
        `Study of Blood : *Haematology*
Study of Liver : *Hepatology*
Study of Fungi : *Mycology*
Study of Algae : *Phycology*
Study of Virus : *Virology`,

        `Study of Kidney : *Nephrology*
Study of Cancer : *Oncology*
Study of Universe : *Cosmology*
Study of Fruits : *Pomology*
Study of Birds : *Ornithology*`,

        `Study of Bones : *Osteology*
Study of Eggs : *Oology*
Study of Dreams : *Oneirology*
Study of Hairs : *Trichology*
Study of Eyes : *Ophthalmology*`
      ]
    }
  ]
};
