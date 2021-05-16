const mysql = require('mysql');
const cTable = require('console.table');

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
  connectQuery();
});

const connectQuery = () => {
    connection.query(querys[2], (err, res) => {
        if (err) throw err;
        console.table(res);
        connection.end();
    });
};

