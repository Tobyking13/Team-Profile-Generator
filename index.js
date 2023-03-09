const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employeesArray = [];

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { default: generate } = require("@babel/generator");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

function questions(position) {
    return [{
        type: 'text',
        message: `What\'s is the ${position}'s name?`,
        name: 'name',
        validate: function(position) {
            if (position !== "") {
                return true;
            }
            console.log('|  Please enter a name');
        }
    }, {
        type: 'text',
        message: `What\'s the ${position}'s email?`,
        name: 'email',
        validate: function(position) {
            if (position.includes('@') ===  true && position !== "") {
                return true;
            }
            console.log('|  This is not a valid email address');
        }
    }, {
        type: 'text',
        message: `What\'s the ${position}'s id?`,
        name: 'id',
        validate: function(position){
            if(+position > 0) {
                return true;
            }
            console.log('|  The ID must be greater than 0');
        }
}]
}

const promptForNextEmployee = () => {
    inquirer.prompt([{
        type: 'list',
        message: 'What type of employee?',
        name: 'position',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
    }]).then(response => {
        switch(response.position) {
            case 'Add an engineer':
                promptForEngineer(response.position);
                break;
            case 'Add an intern':
                promptForIntern(response.position);
                break;
            default:
                buildPage();
                return;
        }
    })
}

const promptForManager = () => {
    inquirer
    .prompt([...questions("manager"), {
            type: 'text',
            message: 'What\'s the managers office number?',
            name: 'officeNum'
    }])
    .then(response => {
        employeesArray.push(new Manager(
            response.name,
            response.id,
            response.email,
            response.officeNum
            ));
        promptForNextEmployee();
    })
}

const promptForEngineer = () => {
    inquirer
    .prompt([...questions("engineer"), {
        type: 'text',
        message: 'What\'s the engineers GitHub username?',
        name: 'github'
    }])
    .then(response => {
        employeesArray.push(new Engineer(
            response.name,
            response.id,
            response.email,
            response.github
            ));
        promptForNextEmployee();
    })
}

const promptForIntern = () => {
    inquirer
    .prompt([...questions("intern"), {
        type: 'text',
        message: 'What\'s the interns school?',
        name: 'school'
    }])
    .then(response => {
        employeesArray.push(new Intern(
            response.name,
            response.id,
            response.email,
            response.school
            ));
        promptForNextEmployee();
    })
}

const buildPage = () => {
    fs.writeFile(outputPath, render(employeesArray), (err) => {
        err ? console.error(err) : console.log('team.html created.')
    } )
}

promptForManager();