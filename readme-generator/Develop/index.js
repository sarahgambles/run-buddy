// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');

const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
   
    {
        type: 'input',
        name: 'name',
        message: 'What is the title of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide a description of your projects!');
            }
        }

    },
    {
        type: 'confirm',
        name: 'table',
        message: 'Would you like to provide a Table of Contents?',
        default: true
    },
    {
        type: 'input', 
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Let other developers know what they can and cannot do with this project.'
    },
    {
        type: 'input', 
        name: 'contributing',
        message: 'If you would like other developers to be able to contribute to your project, add guidelines for how to do so.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write tests for your application and provide examples how to run them.'
    },
    {
        type: 'confirm',
        name: 'questions',
        message: 'Do you have any questions you have about this project?',
        default: true
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response => {
        writeToFile("README.md", generateMarkdown(response));
    })
}

// function call to initialize program
init();
