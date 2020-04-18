const Employee = require('./employee');

class Manager extends Employee {
    constructor(role, office) {
    super('Manager', 'Micheal', 4, 'test@test.com');
    this.office = office;
    }

    getRole() {
        console.log(this.role)
    }

    getOffice() {
        console.log(this.office)
    }
}

const manager = new Manager('Manager', 'Offce #4');

module.exports = Manager;