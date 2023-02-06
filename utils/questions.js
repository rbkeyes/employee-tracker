const { departments, roles, employees } = require('./queries')

const questions = [
    {
        name: 'mainMenu',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
    }, {
        name: 'newDept',
        type: 'input',
        message: 'What is the name of the department?',
        when: (answers) => answers.mainMenu === questions[0].choices[3]
    }, {
        name: 'newRole',
        type: 'input',
        message: 'What is the name of the role?',
        when: (answers) => answers.mainMenu === questions[0].choices[4]
    }, {
        name: 'salary',
        type: 'input',
        message: 'What is the salary of the role?',
        when: (answers) => answers.newRole
    }, {
        name: 'dept',
        type: 'list',
        message: 'What department does the role belong to?',
        choices: [], 
        when: (answers) => answers.salary
        },

];

module.exports = questions;