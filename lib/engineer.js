const Employee = require('./employee');

class Engineer extends Employee {
    constructor(role, github) {
    super('Engineer', 'Bob', 2, 'test@test.com');
    this.github = github;
    }

    getRole() {
        console.log(this.role)
    }

    getGithub() {
        console.log(this.github)
    }
}

const engineer = new Engineer('Engineer', 'test@test.com');

module.exports = Engineer;