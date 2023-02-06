const list = [];

const mainMenu = {
    name: 'mainMenu',
    type: 'list',
    message: 'What would you like to do?',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
};

const newDept = {
    name: 'newDept',
    type: 'input',
    message: 'What is the name of the department?',
    when: (answers) => {
        answers.mainMenu === mainMenu.choices[3];
    }
};

const newRole = [
    {
        name: 'newRole',
        type: 'input',
        message: 'What is the name of the role?',
    }, {
        name: 'salary',
        type: 'input',
        message: 'What is the salary of the role?',
    }, {
        name: 'dept',
        type: 'list',
        message: 'What department does the role belong to?',
        choices: ['accounting', 'engineering', 'data science'],
    }
];

const newEmployee = [
    {
        name: 'firstName',
        type: 'input',
        message: "What is the employee's first name?",
    }, {
        name: 'lastName',
        type: 'input',
        message: "What is the employee's last name?",
    }, {
        name: 'role',
        type: 'list',
        message: "What is the employee's role?",
        choices: ['accountant', 'engineer', 'data scientist', 'manager', 'intern'],
    }, {
        name: 'manager',
        type: 'list',
        message: "Who is the employee's manager?",
        choices: ['Reed', 'Parker', 'Tatum', 'Lilly'],
    }
];

const updateEmployeeRole = [
    {
        name: 'selectEmployee',
        type: 'list',
        message: "Which employee's role would you like to update?",
        list: [1, 2, 3]
    }, {
        name: 'updateRole',
        type: 'list',
        message: "Select the employee's new role?",
        choices: ['accountant', 'engineer', 'data scientist', 'manager', 'intern'],
    }
];

module.exports = { list, mainMenu, newDept, newRole, newEmployee, updateEmployeeRole };