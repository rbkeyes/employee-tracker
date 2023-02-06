const { departments, roles, employees } = require('./queries')

const questions = [
    {
        name: 'mainMenu',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit'],
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
        choices: ['accounting', 'engineering', 'data science'],
        when: (answers) => answers.salary
    }, {
        name: 'firstName',
        type: 'input',
        message: "What is the employee's first name?",
        when: (answers) => answers.mainMenu === questions[0].choices[5]
    }, {
        name: 'lastName',
        type: 'input',
        message: "What is the employee's last name?",
        when: (answers) => answers.firstName
    }, {
        name: 'role',
        type: 'list',
        message: "What is the employee's role?",
        choices: ['accountant', 'engineer', 'data scientist', 'manager', 'intern'],
        when: (answers) => answers.lastName
    }, {
        name: 'manager',
        type: 'list',
        message: "Who is the employee's manager?",
        choices: ['Reed', 'Parker', 'Tatum', 'Lilly'],
        when: (answers) => answers.role
    }, {
        name: 'selectEmployee',
        type: 'list',
        message: "Which employee's role would you like to update?",
        choices: [1, 2, 3],
        when: (answers) => answers.mainMenu === questions[0].choices[6]
    }, {
        name: 'updateRole',
        type: 'list',
        message: "Select the employee's new role?",
        choices: ['accountant', 'engineer', 'data scientist', 'manager', 'intern'],
        when: (answers) => answers.selectEmployee
    }
];

module.exports = questions;