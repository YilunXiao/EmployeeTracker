// Object to provide specific questions
class Questions {
    // Which CRUD the user wants to do
    crud() {
        return [{
            type: 'list',
            name: 'action',
            message: 'What do you want to do?',
            choices: [
                {
                    name: "Add department, role, or employee",
                    value: "create"
                }, 
                {
                    name: "View departments, roles, or employees",
                    value: "read"
                },
                {
                    name: "Update department, role, or employee",
                    value: "update"
                },
                {
                    name: "Delete departments, roles, or employees",
                    value: "delete"
                },
                {
                    name: "Exit application",
                    value: "exit"
                }
            ]
        }];
    }

    // Which table does the user want to change/view
    table() {
        return {
            type: 'list',
            name: 'table',
            message: 'Which do you want use?',
            choices: ["department", "role", "employee"]
        };
    }

    // CREATE
    createDep() {
        return [{
            type: 'input',
            name: 'name',
            message: 'What is the name of the department?',
        }];
    }
    createRol() {
        // title, salary, department id
        return [{
            type: 'input',
            name: 'title',
            message: 'What is the role?',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for the role?',
        },
        {
            type: 'input',
            name: 'depId',
            message: 'What is the ID of the department for the role?',
        }];
    }
    createEmp() {
        // first name, last name, role id, manager id (optional)
        return [{
            type: 'input',
            name: 'fname',
            message: 'What is the first name of the employee?',
        },
        {
            type: 'input',
            name: 'lname',
            message: 'What is the last name of the employee?',
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'What is the role ID of the employee?',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the ID of the manager of this employee?',
        }];
    }

    // READ
    // no questions needed

    // UPDATE
    
    // DELETE
}

module.exports = Questions;