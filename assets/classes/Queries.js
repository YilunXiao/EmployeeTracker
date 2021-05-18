// Object to provide specific mysql queries
class Queries {
    constructor() {

    }

    // CREATE
    create(table) {}
    // READ
    read(table) {
        return `SELECT * FROM ${table}`;
    }
    // UPDATE
    update(table) {}
    // DELETE
    delete(table) {}
}

module.exports = Queries;