// import dependencies
const mysql = require('mysql2');
const cTable = require('console.table');
const { departments, roles, employees, addDepartment, addRole, addEmployee } = require('./utils/queries');

const inquirer = require('inquirer');
const prompts = require('./utils/prompts');

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

const mainMenu = () => {
    inquirer.prompt(prompts.mainMenu)
        .then((answers) => {
            const execute = answers.mainMenu
            switch (execute) {
                case 'View all departments':
                    viewAll(departments);
                    break;
                case 'View all roles':
                    viewAll(roles);
                    break;
                case 'View all employees':
                    viewAll(employees);
                    break;
                case 'Add a department':
                    addUpdateDrop(addDepartment);
                    break;
                case 'Add a role':
                    addUpdateDrop(addRole);
                    break;
                case 'Add an employee':
                    addUpdateDrop(addEmployee);
                    break;
                case 'Update an employee role':
                    addUpdateDrop(updateEmployeeRole);
                    break;
                default:
                    console.log("goodbye")
                    break;
            };
        });
};

// view all from specified table
const viewAll = (sql) => {
    db.query(sql, (err, table) => {
        if (err) {
            console.status(500);
            return;
        }
        console.table(table);
        mainMenu();
        return;
    });
};

// make a change to db table (add, update, drop)
const addUpdateDrop = (sql, action) => {
    db.query(sql, (err, results) => {
        if (err) {
            console.status(400)
            return;
        }
        console.log(`${action} successful`);
        console.log(results);
    });
};


mainMenu();


