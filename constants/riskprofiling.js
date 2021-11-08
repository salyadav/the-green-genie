export default [
  {
    qId: 1,
    question: "What is your current age?",
    options: ["Below 18", "18 - 30", "31 - 40", "41 - 50", "51 - 60", "Above 60"],
    weightage: [0, 2, 4, 6, 8, 10],
  }, {
    qId: 2,
    question: "Which of the following best describes your current stage in life?",
    options: ["A single individual with almost no financial burdens. Preparing to start to accumulate wealth in the short and long term.", "A young couple with no children. Your major expenses are a high purchase rate of consumer items and household items.","Young family with a home. You have to pay towards a single or two loans (home and car), and have childcare costs.", "You are a mature family with two working individuals and have a stable income. You are in your peak earning years and can easily make monthly EMI payments of your loans. You can start thinking about planning your retirement.", "You only have very limited financial burdens. You own our home and most of your loans are paid off or almost paid off. You are now preparing for your retirement.", "You are retired. You rely on existing funds and investments to maintain your retirement lifestyle. You maybe also receiving a pension from the government or have a superannuation pension."],
    weightage: [2, 4, 6, 8, 10, 12],
  }
];
