const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
    super('bob', 2, 'test@test.com', github);
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
    }

    getRole() {
        return 'Engineer'
    }

    getGithub() {
        return this.github
    }
}

//const engineer = new Engineer('Engineer', 'test@test.com');

module.exports = Engineer;