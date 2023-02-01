// import dependencies
const mysql = require('mysql2');
const cTable = require('console.table');
const { departments, roles, employees, addRole, addEmployee, updateRole } = require('./utils/queries');

const Department = require('./lib/department')

const inquirer = require('inquirer');
const { mainMenu, promptDept, promptRole, promptEmployee, promptUpdate } = require('./utils/prompts');

// set PORT
// const PORT = process.env.PORT || 3001;

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Sackopotatum',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

const init = (prompt) => {
    inquirer.prompt(prompt)
    .then((answers) => {
        if (prompt === mainMenu) {
            console.log(answers.mainMenu);
            actOnChoice(answers.mainMenu)
        } else {
            console.log(answers);

            init(mainMenu);
            // return answers;
        }
    })
};    

const actOnChoice = (choice) => {
    switch (choice) {
        case 'View all departments':
            viewTableData(departments);
            break;
        case 'View all roles':
            viewTableData(roles);
            break;
        case 'View all employees':
            viewTableData(employees);
            break;
        case 'Add a department':
            init(promptDept);
            break;
        case 'Add a role':
            init(promptRole);
            break;
        case 'Add an employee':
            init(promptEmployee);
            break;
        case 'Update an employee role':
            init(promptUpdate);
            break;
        default:
            console.log("goodbye")
            break;
    };
};

const viewTableData = (sql) => {
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.table(result);
        init(mainMenu);
    });
};

// make a change to db table (add, update, drop)
const addUpdateDrop = (prompt, sql) => {

    db.query(sql, (err, results) => {
        if (err) {
            console.error(err)
            return;
        }
        console.log(`${action} successful`);
        console.log(results);
    });
};


init(mainMenu);


