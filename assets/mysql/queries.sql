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