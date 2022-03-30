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
With little bit of thinking, we can figure out whether something is 'goods' or 'service'.
Goods and services are part of what makes up a society's economy. People and companies make goods and provide services. Other people pay for those goods and services with money.
Goods are things that are produced. They are physical objects that can be touched. Goods are also called products or commodities. Goods include food, clothing, cars, houses, roads, electronics, and any other product that can be bought or sold.
Services are not physical objects that can be touched. Instead, services are things that people do for others in exchange for money. Services include medical care, banking, and entertainment, such as musical concerts or sporting events.`
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
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `Goods can be seen and touched.
Carpenter and plumber provide us service.`
          },
          {
            name: 'False',
            text: `As doctors give us medicines, they sell goods.
Buying a movie ticket is an example for goods.
Buying mobile phone online is a service.`
          }
        ]
      }
    },
    {
      label: 'Choose the correct Answer',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `Anything that is produced is ______.`,
            options: 'goods, service, either goods or service'
          },
          {
            qText: `Goods can be _____.`,
            options: 'seen and touched, money, saves time'
          },
          {
            qText: 'Who will offer the money?',
            options: 'Goods seller, Service provider, Customer'
          },
          {
            qText: 'Everybody is a ________ in someway or other.',
            options: 'customer, goods seller, service provider'
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
