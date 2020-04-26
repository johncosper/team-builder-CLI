const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, 'Engineer');
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
}

//const engineer = new Engineer('Engineer', 'test@test.com');

module.exports = Engineer;