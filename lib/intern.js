const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, 'Intern');
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

}

//const intern = new Intern('Intern', 'Test School')

module.exports = Intern;