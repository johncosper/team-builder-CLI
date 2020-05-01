const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const generate = require('./generateHtml');

let employees = [];
async function promptUser() {
    return inquirer
        .prompt(
            {
                type: 'list',
                message: 'Select Role',
                name: 'role',
                choices: ["Manager", "Engineer", "Intern", "Exit"]
            },
        )
        .then(({ role }) => {
            if (role === "Manager") {
                return inquirer.prompt([
                    {
                        type: 'input',
                        message: 'Name',
                        name: 'name'
                    },
                    {
                        type: 'input',
                        message: 'Employee ID',
                        name: 'id'
                    },
                    {
                        type: 'input',
                        message: 'Email',
                        name: 'email'
                    },
                    {
                        type: 'input',
                        message: 'Office Number',
                        name: 'officeNumber'
                    }
                ])
                .then(({name, id, email, officeNumber}) => {
                    employees.push(new Manager(name, id, email, officeNumber))
                    promptUser();
                })
            }else if (role === "Engineer") {
                return inquirer.prompt([
                    {
                        type: 'input',
                        message: 'Name',
                        name: 'name'
                    },
                    {
                        type: 'input',
                        message: 'Employee ID',
                        name: 'id'
                    },
                    {
                        type: 'input',
                        message: 'Email',
                        name: 'email'
                    },
                    {
                        type: 'input',
                        message: 'Github Username',
                        name: 'github'
                    },
                ])
                .then(({name, id, email, github}) => {
                    employees.push(new Engineer(name, id, email, github))
                    promptUser();
                })
            }else if (role === "Intern"){
                return inquirer.prompt([
                    {
                        type: 'input',
                        message: 'Name',
                        name: 'name'
                    },
                    {
                        type: 'input',
                        message: 'Employee ID',
                        name: 'id'
                    },
                    {
                        type: 'input',
                        message: 'Email',
                        name: 'email'
                    },
                    {
                        type: 'input',
                        message: 'University',
                        name: 'school'
                    },
                ])
                .then(({name, id, email, school}) => {
                    employees.push(new Intern(name, id, email, school))
                    promptUser();
                })
            }else if (role === "Exit") {
                console.log(employees)
                const employeeHtml = generate(employees)
                fs.writeFile(outputPath, employeeHtml, function(err) {
                    if (err) {
                      throw err;
                    }
                    console.log("We did it boys!");
                  });
            }
        });
};
promptUser();