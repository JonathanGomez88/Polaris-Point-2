// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var morgan = require("morgan");

// Sets up the Express App
// =============================================================
var app = express();
app.use(morgan('dev'))
var PORT = process.env.PORT || 3001;

// Requiring our models for syncing
var db = require("./routes/models");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Send every request to the React app
// Define any API routes before this runs


// Routes
// =============================================================
// this is from an old exercise
const routes = require("./routes/api");
app.use('/api', routes)

// Syncing our sequelize models and then starting our Express app
// =============================================================
// const force = process.env.NODE_ENV !== "production";
const Answer = require("./routes/models/answer.js")
const Question = require("./routes/models/question.js")

db.sequelize.sync({ force: false }).then(function () {
  // var seeds = [];

  // // Table created
  // seeds.push(
  //   db.Question.create({
  //     text: "In mythology which planet was known as the God of Agriculture?",
  //     category: "Astronomy"
  //   })
  //     .then(question => {
  //       const answers = [];

  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Jupiter',
  //           isCorrect: true,
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Mars',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Mercury',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Venus',
  //           isCorrect: false
  //         })
  //       );
  //       return Promise.all(answers);
  //     })
  // );
  // seeds.push(
  //   db.Question.create({
  //     text: "Between which two planets do most asteroids orbit the sun?",
  //     category: "Astronomy"
  //   })
  //     .then(question => {
  //       const answers = [];

  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Venus and Earth',
  //           isCorrect: false,
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Earth and Mars',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Mars and Jupiter',
  //           isCorrect: true
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Jupiter and Saturn',
  //           isCorrect: false
  //         })
  //       );
  //       return Promise.all(answers);
  //     })
  // );
  // seeds.push(
  //   db.Question.create({
  //     text: "Earth's atmosphere is composed primarily of _____________.",
  //     category: "Astronomy"
  //   })
  //     .then(question => {
  //       const answers = [];

  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Hydrogen and Nitrogen',
  //           isCorrect: false,
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Oxygen and Methane',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Carbon Dioxide and Nitrogen',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Oxygen and Nitrogen',
  //           isCorrect: true
  //         })
  //       );
  //       return Promise.all(answers);
  //     })
  // );
  // seeds.push(
  //   db.Question.create({
  //     text: "About how many satellites or moons are there orbiting the planets of our solar system?",
  //     category: "Astronomy"
  //   })
  //     .then(question => {
  //       const answers = [];

  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: '60',
  //           isCorrect: false,
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: '80',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: '110',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: '140',
  //           isCorrect: true
  //         })
  //       );
  //       return Promise.all(answers);
  //     })
  // );
  // seeds.push(
  //   db.Question.create({
  //     text: "Who discovered that Earth and the other planets in our solar system orbit our sun?",
  //     category: "Astronomy"
  //   })
  //     .then(question => {
  //       const answers = [];

  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Galileo',
  //           isCorrect: false,
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Copernicus',
  //           isCorrect: true
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Newton',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Einstein',
  //           isCorrect: false
  //         })
  //       );
  //       return Promise.all(answers);
  //     })
  // );
  // seeds.push(
  //   db.Question.create({
  //     text: "Which planet has the largest ring system in our solar system?",
  //     category: "Astronomy"
  //   })
  //     .then(question => {
  //       const answers = [];

  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Saturn',
  //           isCorrect: true,
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Jupiter',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Neptune',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Uranus',
  //           isCorrect: false
  //         })
  //       );
  //       return Promise.all(answers);
  //     })
  // );
  // seeds.push(
  //   db.Question.create({
  //     text: "Which is not a Jovian planet?",
  //     category: "Astronomy"
  //   })
  //     .then(question => {
  //       const answers = [];

  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Jupiter',
  //           isCorrect: false,
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Mars',
  //           isCorrect: true
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Neptune',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Uranus',
  //           isCorrect: false
  //         })
  //       );
  //       return Promise.all(answers);
  //     })
  // );
  // seeds.push(
  //   db.Question.create({
  //     text: "Which planet is closet to the sun?",
  //     category: "Astronomy"
  //   })
  //     .then(question => {
  //       const answers = [];

  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Venus',
  //           isCorrect: false,
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Mars',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Earth',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Mercury',
  //           isCorrect: true
  //         })
  //       );
  //       return Promise.all(answers);
  //     })
  // );
  // seeds.push(
  //   db.Question.create({
  //     text: "Which of the following planets is considred an ice giant?",
  //     category: "Astronomy"
  //   })
  //     .then(question => {
  //       const answers = [];

  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Jupiter',
  //           isCorrect: false,
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Saturn',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Uranus',
  //           isCorrect: true
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Pluto',
  //           isCorrect: false
  //         })
  //       );
  //       return Promise.all(answers);
  //     })
  // );
  // seeds.push(
  //   db.Question.create({
  //     text: "How long ago did the Milky Way come into existence?",
  //     category: "Astronomy"
  //   })
  //     .then(question => {
  //       const answers = [];

  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: '2 billion years ago',
  //           isCorrect: false,
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: '3.5 billion years ago',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: '4.5 billion years ago',
  //           isCorrect: true
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: '5 billion years ago',
  //           isCorrect: false
  //         })
  //       );
  //       return Promise.all(answers);
  //     })
  // );
  // seeds.push(
  //   db.Question.create({
  //     text: "What is the Oort Cloud?",
  //     category: "Astronomy"
  //   })
  //     .then(question => {
  //       const answers = [];

  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'The home of comets in our solar system',
  //           isCorrect: true,
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'The rings of Saturn',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'The asteroid belt',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'The area of asteroids where Pluto orbits',
  //           isCorrect: false
  //         })
  //       );
  //       return Promise.all(answers);
  //     })
  // );
  // seeds.push(
  //   db.Question.create({
  //     text: "Which of the following is a characteristic of terrestrial planets?",
  //     category: "Astronomy"
  //   })
  //     .then(question => {
  //       const answers = [];

  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Relatively small in size',
  //           isCorrect: true,
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Rings',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Many moons',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Mostly made of gas',
  //           isCorrect: false
  //         })
  //       );
  //       return Promise.all(answers);
  //     })
  // );
  // seeds.push(
  //   db.Question.create({
  //     text: "Which one of the following is a characteristic of Jovian planets?",
  //     category: "Astronomy"
  //   })
  //     .then(question => {
  //       const answers = [];

  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Orbit close to the sun',
  //           isCorrect: false,
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Normally contain rings',
  //           isCorrect: true
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Relatively small in size',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'Mostly made of rocky material',
  //           isCorrect: false
  //         })
  //       );
  //       return Promise.all(answers);
  //     })
  // );
  // seeds.push(
  //   db.Question.create({
  //     text: "What percent of stars in our galaxy have planetary systems?",
  //     category: "Astronomy"
  //   })
  //     .then(question => {
  //       const answers = [];

  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: '15%',
  //           isCorrect: true,
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: '30%',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: '45%',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: '60%',
  //           isCorrect: false
  //         })
  //       );
  //       return Promise.all(answers);
  //     })
  // );
  // seeds.push(
  //   db.Question.create({
  //     text: "What is a magentosphere?",
  //     category: "Astronomy"
  //   })
  //     .then(question => {
  //       const answers = [];

  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'A magnetic field created by solar flares',
  //           isCorrect: false,
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'A magnetic field created by iron asteroids',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'A magnetic ring created by rotating moons',
  //           isCorrect: false
  //         })
  //       );
  //       answers.push(
  //         db.Answer.create({
  //           QuestionId: question.get('id'),
  //           text: 'A magnetic field created by spinning planets',
  //           isCorrect: true
  //         })
  //       );
  //       return Promise.all(answers);
  //     })
  // );
  // seeds.push(
  //   db.Question.create({
  //     text: "What is Geology?",
  //     category: "Geology"
  //   })
  //   .then(question => {
  //     const answers = [];
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Geology is the study of the Earth and everything that makes up the planet',
  //         isCorrect: true,
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'The study of the stars',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'The study of the weather',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'The study of the moon phases',
  //         isCorrect: false
  //       })
  //     );
  //     return Promise.all(answers);
  //   })
  // );
  // // ===============================================
  // seeds.push(
  //   db.Question.create({
  //     text: "What is the first layer of the Earth called?",
  //     category: "Geology"
  //   })
  //   .then(question => {
  //     const answers = [];
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'The Crust',
  //         isCorrect: true,
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'The Mantle',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'The Core',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'The Atmosphere',
  //         isCorrect: false
  //       })
  //     );
  //     return Promise.all(answers);
  //   })
  // );
  // //================================================
  // seeds.push(
  //   db.Question.create({
  //     text: "What is the core Made out of?",
  //     category: "Geology"
  //   })
  //   .then(question => {
  //     const answers = [];
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Iron',
  //         isCorrect: true,
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Steel',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Copper',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Rock',
  //         isCorrect: false
  //       })
  //     );
  //     return Promise.all(answers);
  //   })
  // );
  // // ===================================================
  // seeds.push(
  //   db.Question.create({
  //     text: "What is the theory to describe how the Earth's Crust moves?",
  //     category: "Geology"
  //   })
  //   .then(question => {
  //     const answers = [];
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Theory of plate tectonics',
  //         isCorrect: true,
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Theory of earthquakes',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Theory of relativity',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Theory of land movements',
  //         isCorrect: false
  //       })
  //     );
  //     return Promise.all(answers);
  //   })
  // );
  // // =============================================
  // seeds.push(
  //   db.Question.create({
  //     text: "How do geologists measure the age of The Earth?",
  //     category: "Geology"
  //   })
  //   .then(question => {
  //     const answers = [];
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Studying rocks and fossils',
  //         isCorrect: true,
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Studying microbes',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Studying the oceans',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Studying acient trees and plants',
  //         isCorrect: false
  //       })
  //     );
  //     return Promise.all(answers);
  //   })
  // );
  // // ===============================================
  // seeds.push(
  //   db.Question.create({
  //     text: "How old is the earth in years?",
  //     category: "Geology"
  //   })
  //   .then(question => {
  //     const answers = [];
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: '4 Billion',
  //         isCorrect: true,
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: '40 Billion',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: '400 Billion',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: '4 Million',
  //         isCorrect: false
  //       })
  //     );
  //     return Promise.all(answers);
  //   })
  // );
  // // =================================================================
  // seeds.push(
  //   db.Question.create({
  //     text: "How many types of rocks are there?",
  //     category: "Geology"
  //   })
  //   .then(question => {
  //     const answers = [];
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Three',
  //         isCorrect: true,
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Five',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Four',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Two',
  //         isCorrect: false
  //       })
  //     );
  //     return Promise.all(answers);
  //   })
  // );
  // // ================================================
  // seeds.push(
  //   db.Question.create({
  //     text: "What is the Rock Cylce?",
  //     category: "Geology"
  //   })
  //   .then(question => {
  //     const answers = [];
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Way to describe how rocks transform into one another',
  //         isCorrect: true,
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'When rocks are moved from the ground',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'When rocks move from place to place',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'How old the rocks are',
  //         isCorrect: false
  //       })
  //     );
  //     return Promise.all(answers);
  //   })
  // );
  // // ==================================================
  // seeds.push(
  //   db.Question.create({
  //     text: "How are landforms created?",
  //     category: "Geology"
  //   })
  //   .then(question => {
  //     const answers = [];
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'The rocks and minerals found on earth',
  //         isCorrect: true,
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Erosion',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Theory of Plate Tectonics',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Human interference',
  //         isCorrect: false
  //       })
  //     );
  //     return Promise.all(answers);
  //   })
  // );
  // // ===============================================
  // seeds.push(
  //   db.Question.create({
  //     text: "What type of landforms do plate tectonics create?",
  //     category: "Geology"
  //   })
  //   .then(question => {
  //     const answers = [];
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Mountains and Trenches',
  //         isCorrect: true,
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Rivers',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Oceans',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Valleys',
  //         isCorrect: false
  //       })
  //     );
  //     return Promise.all(answers);
  //   })
  // );
  // // =======================================================
  // seeds.push(
  //   db.Question.create({
  //     text: "What are types of weathering?",
  //     category: "Geology"
  //   })
  //   .then(question => {
  //     const answers = [];
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Wind and rain',
  //         isCorrect: true,
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Humans',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Aniamls',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Plate Tectonics',
  //         isCorrect: false
  //       })
  //     );
  //     return Promise.all(answers);
  //   })
  // );
  // // ==============================================
  // seeds.push(
  //   db.Question.create({
  //     text: "Why do landslides occur?",
  //     category: "Geology"
  //   })
  //   .then(question => {
  //     const answers = [];
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Changes in fault lines',
  //         isCorrect: true,
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Too much sediment',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Bad Weathering',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Human interference',
  //         isCorrect: false
  //       })
  //     );
  //     return Promise.all(answers);
  //   })
  // );
  // // ==============================================
  // seeds.push(
  //   db.Question.create({
  //     text: "In what ways do we use Rocks and Minerals?",
  //     category: "Geology"
  //   })
  //   .then(question => {
  //     const answers = [];
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'All correct',
  //         isCorrect: true,
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Energy',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Tools',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Jewelry',
  //         isCorrect: false
  //       })
  //     );
  //     return Promise.all(answers);
  //   })
  // );
  // // ===============================================
  // seeds.push(
  //   db.Question.create({
  //     text: "Which mineral is part of our daily diet?",
  //     category: "Geology"
  //   })
  //   .then(question => {
  //     const answers = [];
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Salt',
  //         isCorrect: true,
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Calcium',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Zinc',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Potasium',
  //         isCorrect: false
  //       })
  //     );
  //     return Promise.all(answers);
  //   })
  // );
  // // =========================================
  // seeds.push(
  //   db.Question.create({
  //     text: "Which types of natural disasters can occur due to the geological makeup of the land?",
  //     category: "Geology"
  //   })
  //   .then(question => {
  //     const answers = [];
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'All correct',
  //         isCorrect: true,
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Tsunamis',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Earthquakes',
  //         isCorrect: false
  //       })
  //     );
  //     answers.push(
  //       db.Answer.create({
  //         QuestionId: question.get('id'),
  //         text: 'Volcanoes',
  //         isCorrect: false
  //       })
  //     );
  //     return Promise.all(answers);
  //   })
  // );
  // =========================================================
  app.listen(PORT, function () {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});
