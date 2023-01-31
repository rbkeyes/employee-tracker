<<<<<<< HEAD:utils/inquirer/prompts.js
const prompts = {
    mainMenu: {
        name: 'mainMenu',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
    },
    addDepartment: {
        name: 'newDepartment',
        type: 'input',
        message: 'What is the name of the department?'
    },
    addRole: {
        newRole: {
            name: 'newRole',
            type: 'input',
            message: 'What is the name of the role?'
        },
        roleSalary: {
            name: 'roleSalary',
            type: 'input',
            message: 'What is the salary of the role?'
        },
        roleDepartment: {
            name: 'roleDepartment',
            type: 'list',
            message: 'What department does the role belong to?'
            // choices: get from department table
        },
    },
    addEmployee: {
        firstName: {
            name: 'firstName',
            type: 'input',
            message: "What is the employee's first name?"
        },
        lastName: {
            name: 'lastName',
            type: 'input',
            message: "What is the employee's last name?"
        },
        employeeRole: {
            name: 'employeeRole',
            type: 'list',
            message: "What is the employee's role?",
            // choices: [get from role table] 
        },
        employeeManager: {
            name: 'employeeManager',
            type: 'list',
            message: "Who is the employee's manager?",
            // choices: [get from employee table]
        },
    },
    updateEmployeeRole: {
        name: 'updateRole',
        type: 'list',
        message: "What is the employee's new role?",
        // choices: [get from role table]
    }
=======
const mainMenu = {
    name: 'mainMenu',
    type: 'list',
    message: 'What would you like to do?',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
>>>>>>> 9599b64ba593a51e1d8e1c8372931330f4ff2d7f:utils/prompts.js
};

const queryDept = {
    name: 'newDepartment',
    type: 'input',
    message: 'What is the name of the department?'
};

const queryRole = [ {
        name: 'newRole',
        type: 'input',
        message: 'What is the name of the role?'
    }, {
        name: 'roleSalary',
        type: 'input',
        message: 'What is the salary of the role?'
    // }, {
    //     name: 'roleDepartment',
    //     type: 'list',
    //     message: 'What department does the role belong to?'
    //     choices: get from department table
    }];

const queryEmployee = [
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

// updateEmployeeRole = {
//     name: 'updateRole',
//     type: 'list',
//     message: "What is the employee's new role?",
//     choices: [get from role table]
// };

module.exports = { mainMenu, queryDept, queryRole, queryEmployee };