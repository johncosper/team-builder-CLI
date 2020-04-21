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

let response1 = null;
let response2 = null;

async function promptUser() {
    response1 = await inquirer.prompt([
        {
            type: 'list',
            message: 'Select Role',
            choices: [{ name: 'Manager'}, { name: 'Engineer'}, { name: 'Intern'}],
            name: 'role'
        },
    ]);

    if (response1.role === 'Manager') {
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
            }
        ])
    } else if (response1.role === 'Engineer') {
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
            }
        ])
    } else if (response1.role === 'Intern') {
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
            }
        ])
    };
};

promptUser().then(async function() {

    console.log(response1);
    console.log(response2);

    const render = generateHtml(response1, response2)

    async function i() {
        let user = fs.writeFileSync('test.html', render, function(error) {
            if (error) {
                return console.log(error);
            } else {
                console.log('success')
            }
        });
    }

    i();

    async function e() {
        let team = fs.readFileSync('./templates/main.html', 'utf8');
        let user = fs.readFileSync('./test.html', 'utf8');
        console.log(typeof user);
        var result = team.replace('{team}', user);
        fs.writeFileSync('./team.html', result, 'utf8');
    }

    e();

});
