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
        when: (answers) => {
            answers.mainMenu === mainMenu.choices[3];
        }
    }
];

module.exports = questions;