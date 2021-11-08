export default [
  {
    qId: 1,
    classification: 0,
    question: "Please provide us a with a list of your current investments with their symbols separated by a comma. Example: amzn, tsla, nflx",
  }, {
    qId: 12,
    classification: 2,
    question: "Do you drink alcohol? How frequently?",
    options: ["Never", "Once a month", "Once a week", "Multiple times a week", "Everyday"],
    weightage: [0, 2, 5, 7, 10]
  }
];
