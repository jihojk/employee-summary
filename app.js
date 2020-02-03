// Constructors 
const Employee = require('./.library/employee');
const Manager = require('.library/manager');
const Engineer = require('./library/engineer');
const Intern = require('./library/intern');

// NPMS 
const axios = require('axios');
const inquirer = require("inquirer");
const jest = require('jest');
const path = require('path');
const fs = require('fs');

// Arrays
 
let employeeArr = [];
let managerArr = [];
let engineerArr = [];
let internArr =[];

// Prompts

const adminPrompt =[
    {
        type: "list",
        message: "adminprompt"
        choices: [
            'Add an employee to team.',
            'Create the team HRML Page.'
        ]
    }
]

const adminQuestions = [
    {
        type ="input",
        
    }
]