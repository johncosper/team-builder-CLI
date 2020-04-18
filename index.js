const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/generateHTML");

function promptUser() {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Select Role',
            choices: [{ name: 'manager', value: 0}, { name: 'engineer', value: 1}, { name: 'intern', value: 2}],
            name: 'role'
        },
    ]).then((response) => {
        if (response.role === 0) {
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
                    name: 'office'
                },
            ])
        } else if (response.role === 1) {
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
        } else if (response.role === 2) {
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
        }
    });
};

promptUser()