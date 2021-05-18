// DEPENDENCIES
const inquirer = require("inquirer");


class Inquire {
    constructor(arg) {
        this.arg = arg;
    }


    // Example methos
    start() {
        inquirer
        .prompt([
            this.getQuestion("start")
        ])
        .then(answers => {
            switch(answers.action) {
                case "create":
                    this.create();
                    break;
                case "read":
                    // code block
                    console.log("1");
                    break;
                case "update":
                    // code block
                    console.log("1");
                    break;
                case "delete":
                    // code block
                    console.log("1");
                    break;
                case "exit":
                    console.log("1");
                    return "exit";
            }
        })
        .catch(error => {
            if(error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            } else {
            // Something else went wrong
            }
        });
    }

    create() {
        inquirer
        .prompt([
            this.getQuestion("create")
        ])
        .then(answers => {
            // Use user feedback for... whatever!!
        })
        .catch(error => {
            if(error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            } else {
            // Something else went wrong
            }
        });
    }

    // Returns a specified inquirer question
    getQuestion(type) {
        switch (type) {
            case "start":
                return {
                    // questions[0], which CRUD the user wants to do
                    type: 'list',
                    name: 'action',
                    message: 'What do you want to do?',
                    choices: [
                        {
                            name: "ADD department, role, or employee",
                            value: "create"
                        }, 
                        {
                            name: "UPDATE departments, roles, or employees",
                            value: "read"
                        },
                        {
                            name: "ADD department, role, or employee",
                            value: "update"
                        },
                        {
                            name: "DELETE departments, roles, or employees",
                            value: "delete"
                        },
                        {
                            name: "Exit application",
                            value: "exit"
                        }
                    ]
                };
            case "create":
                return {
                    // questions[1], which does user want to CREATE
                    type: 'list',
                    name: 'action',
                    message: 'Which do you want to add data to?',
                    choices: ["Department", "Role", "Employee"]
                };
            case "read":
                return {
                    // questions[2], which does user want to READ
                    type: 'list',
                    name: 'action',
                    message: 'Which do you want to view?',
                    choices: ["Department", "Role", "Employee"]
                };
            case "update":
                return {
                    // questions[3], which does user want to UPDATE
                    type: 'list',
                    name: 'action',
                    message: 'Which do you want to update?',
                    choices: ["Department", "Role", "Employee"]
                };
            case "delete":
                return {
                    // questions[4], which does user want to DELETE
                    type: 'list',
                    name: 'action',
                    message: 'Which do you want to delete?',
                    choices: ["Department", "Role", "Employee"]
                };
        }
    }
}

module.exports = Inquire;