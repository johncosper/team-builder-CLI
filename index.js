const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const generateHtml = require('./generateHtml');

async function promptUser() {
    const response1 = await inquirer.prompt([
        {
            type: 'list',
            message: 'Select Role',
            choices: [{ name: 'Manager', value: 0}, { name: 'Engineer', value: 1}, { name: 'Intern', value: 2}, { name: 'Exit', value: 3}],
            name: 'role'
        },
    ]);

    let response2 = null;

    if (response1.role === 0) {
        response2 = await inquirer.prompt([
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
                name: 'office'
            },
            {
                type: 'list',
                message: 'Create Additional Employees?',
                choices: [{ name: 'Yes', value: 0 }, { name: 'No', value: 1 }],
                name: 'continue'
            }
        ])
    } else if (response1.role === 1) {
        response2 = await inquirer.prompt([
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
            {
                type: 'list',
                message: 'Create Additional Employees?',
                choices: [{ name: 'Yes', value: 0 }, { name: 'No', value: 1 }],
                name: 'continue'
            }
        ])
    } else if (response1.role === 2) {
        response2 = await inquirer.prompt([
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
            {
                type: 'list',
                message: 'Create Additional Employees?',
                choices: [{ name: 'Yes', value: 0 }, { name: 'No', value: 1 }],
                name: 'continue'
            }
        ])
    };
    
    if (response2.continue === 0) {
        return response1;
    } else if (response1.role === 3 || response2.continue === 1) {
        return;
    }
}

promptUser();

// const empArray = [];

// let team = managerTemplate + engineerTemplate + internTemplate;

// let managerTemplate = fs.readFileSync('./templates/manager.html', 'utf8');
// let engineerTemplate = fs.readFileSync('./templates/engineer.html', 'utf8');
// let internTemplate = fs.readFileSync('./templates/intern.html', 'utf8');



    // const arryEmp = [new Employee(), new Employee];

    // let managerTemp = fs.readFileSync('./templates/manager.html', "utf8");
    // let engineerTemp = fs.readFileSync('./templates/engineer.html', "utf8");

    // let team = managerTemp + engineerTemp +....;

    //  = replacePlaceholders(managerTemp, "{{ name }}", manager.name);

    // function replacePlaceholders(template, placholder, value) {
    //     return template.replace(placholder, value);
    // }
