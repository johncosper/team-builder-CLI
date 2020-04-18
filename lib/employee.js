class Employee {
    constructor(role, name, id, email) {
        this.role = role;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(this.name)
    }
    
    getId() {
        console.log(this.id)
    }

    getEmail() {
        console.log(this.email)
    }

    getRole() {
        console.log('Employee')
    }
}

const employee = new Employee('Employee', 'Alice', 1, 'test@test.com');

module.exports = Employee;