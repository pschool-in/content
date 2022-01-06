export default {
  label: 'Goods and Services',
  id: 'goods-services',
  list: [
    {
      label: 'Goods and Services - Passage',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Goods and Services',
        text: [
          `Human beings cannot live alone, on our own. We interact with many people and do transactions and get our requirements done. For example, we cannot produce the food we eat on our own. We go to a store and buy different items, and come home and cook. Here the items what we bought from the store are known as 'goods'. 
 If we don't have time to cook on our own, then we go to a restaurant, where our ordered food will be delivered by a waiter. Here, what the restaurant provides is 'service'. 
 Why the food is not usually considered as 'goods' and rather considered as 'service'? Because, apart from the food, they also provide good atmosphere, tables and chairs for us to sit, waiter to take orders, and a chef to cook. If we buy service, we usually don't have to worry about internal workings and the service provider will take care of it. 
 Doctor, police, lawyer, Carpenter provides service to us. They don't sell anything to us. But their service is very important when we are in need. All kinds of stores, say super market,  provision stores, medicals, stationery stores etc sells 'goods' to us. 
  With little bit of thinking, we can figure out whether something is 'goods' or 'service'.`
        ]
      }
    },
    {
      label: 'Identify Goods and Services',
      id: 'goods-services',
      type: 'group',
      data: {
        title: 'Drag and drop: Goods vs Services.',
        printTitle: 'Rewrite the below words in the right boxes.',
        types: [
          {
            name: 'Goods',
            text: 'ice cream, toys, cake, selling used items'
          },
          {
            name: 'Services',
            text: 'police officer, teacher, hair cut, airplane trip, gardening'
          }
        ]
      }
    },
    {
      label: 'Identify Producer and Consumer',
      id: 'producer-consumer',
      type: 'group',
      data: {
        title: 'Drag and drop: Producer vs Consumer.',
        printTitle: 'Rewrite the below words in the right boxes.',
        types: [
          {
            name: 'Producer',
            text:
              'making dress, teaching, painting, fixing roof, selling candy, delivering pizza'
          },
          {
            name: 'Consumer',
            text: 'going to movies, buying shoes, ordering pizza, watching TV '
          }
        ]
      }
    }
  ]
};
