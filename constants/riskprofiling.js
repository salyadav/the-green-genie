export default [
  {
    qId: 1,
    question: "What is your current age?",
    options: ["Below 18", "18 - 30", "31 - 40", "41 - 50", "51 - 60", "Above 60"],
  }, {
    qId: 2,
    question: "Which of the following best describes your current stage in life?",
    options: ["A single individual with almost no financial burdens. Preparing to start to accumulate wealth in the short and long term.", "A young couple with no children. Your major expenses are a high purchase rate of consumer items and household items.","Young family with a home. You have to pay towards a single or two loans (home and car), and have childcare costs.", "You are a mature family with two working individuals and have a stable income. You are in your peak earning years and can easily make monthly EMI payments of your loans. You can start thinking about planning your retirement.", "You only have very limited financial burdens. You own our home and most of your loans are paid off or almost paid off. You are now preparing for your retirement.", "You are retired. You rely on existing funds and investments to maintain your retirement lifestyle. You maybe also receiving a pension from the government or have a superannuation pension."], 
  }, {
    qId: 3,
    question: "How many children do you have?",
    options: ["0", "1 - 2", "3 - 4", "Planning to have in 1 year", "Planning to have in 3 years", "Planning to have in 5 years"],
    weightage: [0, 3, 5, 7, 10],
  }, {
    qId: 4,
    question: "What is your annual income?",
    options: ["< $50,000", "$50,000 - $100,000", "$100,000 - $200,000", "$200,000 - $500,000", "$500,000 - $1,000,000", "> $1,000,000"],
    weightage: [2, 5, 8, 11, 15, 17],
  }, {
    qId: 5,
    question: "What is your employment status?",
    options: ["Salaried Personnel", "Entrepreneur", "Business Owner", "Freelancer", "Government Employee", "Not Employed"],
    weightage: [0, 3, 6, 9, 12, 15, 20],
  }, {
    qId: 6,
    question: "What is your current net-worth?",
    options: ["< $100,000", "$100,000 - $300,000", "$300,000 - $600,000", "$600,000 - $1,000,000", "$1,000,000 - $2,000,000", "> $2,000,000"],
    weightage: [0, 4, 10, 15, 20],
  }, {
    qId: 7,
    question: "What % of your total wealth are you planning to invest?",
    options: ["< 5%", "5% - 10%", "11% - 15%", "16% - 20%", "21% - 25%", "> 25%"],
    weightage: [0, 3, 7, 11, 15, 20],
  }, {
    qId: 8,
    question: "What is your objective for investing?",
    options: ["Compounding your money into a sizeable corpus", "Earning a passive source of income from interest, coupon, and/or dividend payments", "Attaining financial independence", "Having a steady source of income for your retirement", "Creating an educational fund for the future of your children", "Investing for a specific goal in the future"],
    weightage: [2, 4, 7, 10],
  }, {
    qId: 9,
    question: "How much experience do you have investing?",
    options: ["I have no experience", " I have a savings bank account and/or a fixed deposit", "I have a very limited experience in investing", "I have a reasonable amount of investment experience", "I am a seasoned investor"],
    weightage: [0, 3, 5],
  }, {
    qId: 10,
    question: "What type of asset class do you prefer to be in your portfolio?",
    options: ["Traditional Asset Class – Stocks and Bonds", "Alternative Asset Class – Real Estate, Artwork, Tradeable Collectibles, etc.", "A diversified combination of the above two classes", "Venture Capital, Crowdsourcing, Cryptocurrency"],
    weightage: [0, 2, 5, 7, 10]
  }, {
    qId: 11,
    question: "How would you characterise your behaviour towards risk?",
    options: ["Very Risk Averse", "Risk Averse", "Indifferent", "Risk Taking", "Risk Loving"],
  }, {
    qId: 12,
    question: "When do you plan to begin withdrawing money?",
    options: ["In 1 year", "In 3 years", "In 5 years", "In 10 years", "After 10 years"],
  }, {
    qId: 13,
    question: "How many peopel are dependent on you financially?",
    options: ["0", "1", "2", "3", "4", "> 4"],
  },
];
