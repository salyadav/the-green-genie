export default [
  {
    qId: 1,
    classification: 0,
    question: "Please provide us a with a list of your current investments with their symbols separated by a comma. Example: amzn, tsla, nflx",
  }, {
    qId: 2,
    classification: 0,
    question: "Which State do you live in?",
  }, {
    qId: 3,
    classification: 1,
    question: "How often do you use the public transport?",
    options: ["Never", "Once a month", "Once a week", "Multiple times a week", "Everyday", "Always"],
    weightage: [15, 12, 9, 6, 3, 0],
  }, {
    qId: 4,
    classification: 2,
    question: "How many miles do you travel via personal car in a month?",
    options: ["I do not have a car", "< 500", "501 - 1,000", "1,000 - 1,500", "> 1,500"],
    weightage: [0, 3, 5, 7, 10],
  }, {
    qId: 5,
    classification: 1,
    question: "How much electricity (kWh) do you use every month?",
    options: ["< 500", "500 - 799", "800 - 1,099", "1,100 - 1,399", "1,400 - 1,699", "> 1,700"],
    weightage: [2, 5, 8, 11, 15, 17],
  }, {
    qId: 6,
    classification: 2,
    question: "What is your gas bill on average every month?",
    options: ["0", "1 - 25", "26 - 50", "51 - 75", "76 - 100", "101 - 125", "> 125"],
    weightage: [0, 3, 6, 9, 12, 15, 20],
  }, {
    qId: 7,
    classification: 1,
    question: "Do you have cryptocurrency? If yes, how many?",
    options: ["I do not own cryptocurrency", "1-2", "3-5", "6-8", "> 8"],
    weightage: [0, 4, 10, 15, 20],
  }, {
    qId: 8,
    classification: 2,
    question: "How many cars do you own?",
    options: ["None", "1", "2", "3", "4", "> 4"],
    weightage: [0, 3, 7, 11, 15, 20],
  }, {
    qId: 9,
    classification: 1,
    question: "What is your dietary restriction?",
    options: ["Vegan", "Vegetarian", "Non-Vegetarian (no red meat)", "Non-Vegetarian (red meat)"],
    weightage: [2, 4, 7, 10],
  }, {
    qId: 10,
    classification: 2,
    question: "Do you have an electric car?",
    options: ["I do not have a car", "I own an electric car", "I own a car but not electric"],
    weightage: [0, 3, 5],
  }, {
    qId: 12,
    classification: 2,
    question: "Do you drink alcohol? How frequently?",
    options: ["Never", "Once a month", "Once a week", "Multiple times a week", "Everyday"],
    weightage: [0, 2, 5, 7, 10]
  }, {
    qId: 13,
    classification: 2,
    question: "From which brands do you buy your clothes?",
  },
];