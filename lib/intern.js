const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
    super('joe', 3, 'test@test.com', school);
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    }

    getRole() {
        return 'Intern'
    }

    getSchool() {
        return this.school
    }

}

//const intern = new Intern('Intern', 'Test School')

module.exports = Intern;