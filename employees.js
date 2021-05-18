// DEPENDENCIES
const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');
const Questions = require('./assets/classes/Questions')
const Queries = require('./assets/classes/Queries');

// VARIABLES
const questions = new Questions();
const queries = new Queries();

const querys = [
  "SELECT * FROM songs",
  "SELECT * FROM songs WHERE genre = 'R&B'",
  `SELECT employee.id, first_name, last_name, title, department.name, salary, manager_id FROM department
  INNER JOIN role
  INNER JOIN employee
  WHERE role.department_id = department.id
  AND employee.role_id = role.id;`
]

// Create connection with sql server
const connection = mysql.createConnection({
  host: 'localhost',

  // Your port, if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'abc123',
  database: 'trackemployees_db',
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  // connectQuery();
  start();
});

// Make a query with connection
const connectQuery = () => {
    connection.query(querys[2], (err, res) => {
        if (err) throw err;
        console.table(res);
        // ends connection
        connection.end();
    });
};

// Start inquiries 
const start = () => {
  inquirer
  .prompt([
    // What CRUD user wants to perform
    questions.crud()
  ])
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
  .prompt([
    // What table (department, role, employee) user wants to change
    questions.table()
  ])
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

// Create
const createData = (table) => {
  // department
    // department name
  // role
    // title
    // salary
    // department id
  // employee
    // first name
    // last name
    // role id
    // manager id (optional)
}

// Read
const readData = (table) => {
  connection.query(queries.read(table), (err, res) => {
    if (err) throw err;
    console.table(res);
    // ends connection
    connection.end();
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
