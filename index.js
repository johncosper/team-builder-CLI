const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const generateHtml = require('./generateHtml');


async function promptRole(roleName) {
    return await inquirer.prompt([
        {
            type: 'list',
            message: 'Select Role',
            choices: [{ name: 'Manager'}, { name: 'Engineer'}, { name: 'Intern'}, { name: 'Exit'}],
            name: 'role'
        },
    ]);
}

async function promptInfo(roleName) {
    if (roleName === 'Manager') {
        const response = await inquirer.prompt([
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
        return new Manager(response.name, response.id, response.email, response.office);
    } else if (roleName === 'Engineer') {
        const response = await inquirer.prompt([
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
        ]);
        return new Engineer(response.name, response.id, response.email, response.github);
    } else if (roleName === 'Intern') {
        const response = await inquirer.prompt([
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
        ]);
        return new Intern(response.name, response.id, response.email, response.school);
    };
};

async function a() {
    let response1 = {role: 'Manager'};
    let response2 = await promptInfo(response1.role);
    let empArr = [];
    empArr.push(response2);

    console.log(response2);

    while (response1.role !== "Exit") {
        response1 = await promptRole();
        response2 = await promptInfo(response1.role);

        if (response2) {
            empArr.push(response2);
            
        };
    };
    console.log(empArr);
    let roster = '';
    let manager = fs.readFileSync('./template/manager.html', 'utf8');
    let engineer = fs.readFileSync('./templates/engineer.html', 'utf8');
    let intern = fs.readFileSync('./templates/intern.html', 'utf8');
    roster += manager 
    roster += engineer
    roster += intern;
    console.log(roster);
}

a();

console.log(empArr);
let roster = '';
let manager = fs.readFileSync('./template/manager.html', 'utf8');
let engineer = fs.readFileSync('./templates/engineer.html', 'utf8');
let intern = fs.readFileSync('./templates/intern.html', 'utf8');
roster += manager 
roster += engineer
roster += intern;
console.log(roster);

for (i = 0; i < empArr.length; i++) {

}


/*.then(async function() {

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
*/