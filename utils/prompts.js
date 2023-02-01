const mainMenu = {
    name: 'mainMenu',
    type: 'list',
    message: 'What would you like to do?',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
};

const promptDept = {
    name: 'newDepartment',
    type: 'input',
    message: 'What is the name of the department?'
};

const promptRole = [ {
        name: 'newRole',
        type: 'input',
        message: 'What is the name of the role?'
    }, {
        name: 'salary',
        type: 'input',
        message: 'What is the salary of the role?'
    // }, {
    //     name: 'roleDept',
    //     type: 'list',
    //     message: 'What department does the role belong to?'
    //     choices: get from department table
    }];

const promptEmployee = [
    {
        name: 'firstName',
        type: 'input',
        message: "What is the employee's first name?"
    }, {
        name: 'lastName',
        type: 'input',
        message: "What is the employee's last name?"
    // }, {
    //     name: 'employeeRole',
    //     type: 'list',
    //     message: "What is the employee's role?",
    //     choices: [get from role table] 
    // }, {
    //     name: 'employeeManager',
    //     type: 'list',
    //     message: "Who is the employee's manager?",
    //     choices: [get from employee table]
    }
];

// promptUpdate = {
//     name: 'updateRole',
//     type: 'list',
//     message: "What is the employee's new role?",
//     choices: [get from role table]
// };

module.exports = { mainMenu, promptDept, promptRole, promptEmployee };