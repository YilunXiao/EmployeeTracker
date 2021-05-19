-- SEEDS --
-- -- DEPARTMENT --
INSERT INTO department (name)
VALUES ("HR"),
("Social Media"),
("Marketing"),
("Shipping"),
("IT");

-- -- ROLE --
INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 1200000.00, 1),
("Intern", 20000.00, 1);

-- -- EMPLOYEE --
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Brandon", "Sanderson", 1, NULL),
("Patrick", "Rothfuss", 2, 1);

-- VIEW TABLES --
-- view all --
SELECT * FROM department;
SELECT * FROM role; 
SELECT * FROM employee;
-- view all combined --
SELECT employee.id, first_name, last_name, title, department.name AS department, salary, manager_id FROM department
INNER JOIN role
INNER JOIN employee
ON role.department_id = department.id
AND employee.role_id = role.id;

-- -- DISABLE SAFE UPDATES --
-- SET SQL_SAFE_UPDATES = 0;