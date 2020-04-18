const Employee = require('./employee');

class Intern extends Employee {
    constructor(role, school) {
    super('Intern', 'joe', 3, 'test@test.com');
    this.school = school;
    }

    getRole() {
        console.log(this.role)
    }

    getSchool() {
        console.log(this.school)
    }

}

const intern = new Intern('Intern', 'Test School')

module.exports = Intern;