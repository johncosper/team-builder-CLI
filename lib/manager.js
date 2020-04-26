const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email, 'Manager');
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
    }

    getOfficeNumber() {
        return this.office;
    }
}

//const manager = new Manager('Manager', 'Offce #4');

module.exports = Manager;