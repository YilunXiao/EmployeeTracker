// Object to provide specific mysql queries
class Queries {
    constructor() {

    }

    // CREATE
    createDep(name) {
        return `INSERT INTO department (name) VALUES ("${name}");`
    }
    createRol(title, salary, depId) {
        // title, salary, department id
        return `INSERT INTO role (title, salary, department_id) VALUES ("${title}", ${salary}, ${depId})`
    }
    createEmp(fname, lname, roleId, manId) {
        // first name, last name, role id, manager id (optional)
    }

    // READ
    read(table) {
        return `SELECT * FROM ${table};`;
    }

    // UPDATE
    update(table) {}
    // DELETE
    delete(table) {}
}

module.exports = Queries;