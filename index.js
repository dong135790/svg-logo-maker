// For collecting user input
const inquirer = require('inquirer');
// Generating/Writing File system
const fs = require('fs');

// Links the function from shapes.js
// const {Enter function name here (remove brackets)} = require('./library/shapes');

const prompt = inquirer.createPromptModule();
// const jests = jest.createTestScheduler();

const questions = [
    {
        name: 'characters',
        type: 'input',
        message: 'Enter up to three characters that will be displayed on the SVG',
        default: 'SVG'
    },
    {
        name: 'textColor',
        message: 'Which color would you like the text in?',
        default: 'white'
    },
    {
        name: 'shape',
        type: 'list',
        message: 'What is your desired logo shape?',
        choices: ['Circle','Triangle','Square']
    },
    {
        name: 'shapeColor',
        message: 'What color is the background of the shape?',
        default: 'green',
    }
]

// TODO Create a function to write SVG file
// function writeToFile(fileName, data) {
    // fs.writeFileSync('./examples/logo.svg', data)
// }

// TODO Create a function to initialize app
function init () {
    prompt(questions).then((data) => {
        console.table(data);
        const fileName = 'logo.svg';
        // writeToFile('examples/logo.svg', data);
// TODO generate SVG file named "logo.svg". Make sure output text "Generated logo.svg is printed on CL"
    })
} 

init();