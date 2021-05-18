// Object to provide specific questions
class Questions {
    // Which CRUD the user wants to do
    crud() {
        return {
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
    }

    // Which table does the user want to change/view
    table() {
        return {
            type: 'list',
            name: 'table',
            message: 'Which do you want use?',
            choices: ["Department", "Role", "Employee"]
        };
    }

}

module.exports = Questions;