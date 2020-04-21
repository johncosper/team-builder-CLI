const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
    super('Micheal', 4, 'test@test.com', office);
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office;
    }

    getRole() {
        return 'Manager'
    }

    getOfficeNumber() {
        return this.office
    }
}

//const manager = new Manager('Manager', 'Offce #4');

module.exports = Manager;