// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is the project title?',
        name: 'Title',

    },
    {
        type: 'input',
        message: 'Your Projects Description?',
        name: 'Description',

    },
    {
        type: 'input',
        message: 'Installation Process?',
        name: 'Installation',

    },
    {

        type: 'input',
        message: 'How do you use this project? Usage?',
        name: 'Usage',

    }, {
        type: 'list',
        message: 'What type of license would you like to add?',
        choices: [
            'MIT',
            'GPL 3.0',
            'Apache 2.0',
            'BSD 3',

        ],
        name: 'License'
    },
    {

        type: 'input',
        message: 'Any contributions to this project?',
        name: 'Contribution',

    },
    {

        type: 'input',
        message: 'If any, type of tests performed on this project?',
        name: 'Tests',

    }


];

// Displays questions within node

// TODO: Create a function to write README file
function writeToFile(_fileName, data) {
    fs.writeFile("./usertemp.md", generateMarkdown(data), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('Succesfully Made!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(reply) {
            const fileName = reply.Title
                // console.log('init');
            writeToFile(fileName, reply)
        })



}

// Function call to initialize app
init();