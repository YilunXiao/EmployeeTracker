// DEPENDENCIES
require('dotenv').config();
const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');
const Questions = require('./assets/classes/Questions')
const Queries = require('./assets/classes/Queries');

// VARIABLES
const questions = new Questions();
const queries = new Queries();


// Create connection with sql server
const connection = mysql.createConnection({
  host: process.env.DB_HOST,

  // Your port, if not 3306
  port: 3306,

  // Your username
  user: process.env.DB_USER,

  // Be sure to update with your own MySQL password!
  password: process.env.DB_PASS,
  database: 'trackemployees_db',
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  // connectQuery();
  start();
});


// Start inquiries 
const start = () => {
  inquirer
  .prompt(
    // What CRUD user wants to perform
    questions.crud()
  )
  .then(answers => {
    if (answers.action === "exit") {
      // Exit
      connection.end();
    } else {
      // Pass action chosen to next question
      chooseTable(answers.action);
    }
  })
  .catch(error => console.log(error));
}

const chooseTable = (action) => {
  inquirer
  .prompt(
    // What table (department, role, employee) user wants to change
    questions.table()
  )
  .then(answers => {
    switch (action) {
      case "create":
        createData(answers.table);
        break;
      case "read":
        readData(answers.table);
        break;
      case "update":
        updateData(answers.table);
        break;
      case "delete":
        deleteData(answers.table);
        break;
    }
  })
  .catch(error => console.log(error));
}

// Create to a given table
const createData = (table) => {
  // console.log(table);
  switch (table) {
    case "department":
      inquirer 
      .prompt(
        // What is name of new department
        questions.createDep()
      )
      .then(answers => {
        connection.query(queries.createDep(answers.name), (err, res) => {
          if (err) throw err;
          console.table(res);
          // go back to beginning
          start();
        });
      })
      .catch(error => console.log(error))
      break;
    case "role":
      inquirer
      .prompt(
        // title, salary, department id
        questions.createRol()
      )
      .then(answers => {
        connection.query(queries.createRol(answers.title, answers.salary, answers.depId), (err, res) => {
          if (err) throw err;
          console.table(res);
          // go back to beginning
          start();
        });
      })
      .catch(error => console.log(error));
      break;
    case "employee":
      // first name, last name, role id, manager id (optional)
      break;
  }
}

// Read from given table
const readData = (table) => {
  connection.query(queries.read(table), (err, res) => {
    if (err) throw err;
    console.table(res);
    // go back to beginning
    start();
  });
}

// Update
const updateData = (table) => {
  //
}

// Delete
const deleteData = (table) => {
  //
}
