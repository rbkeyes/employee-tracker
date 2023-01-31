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

const init = () => {
    runPrompts(mainMenu)
    .then((answers) => {
        action(answers.mainMenu)
    })
};

const runPrompts = (prompt) => {
    inquirer.prompt(prompt)
        .then((answers) => {
            return answers;
        });
};

const action = (act) => {
    switch (act) {
        case 'View all departments':
            sql = departments;
        case 'View all roles':
            sql = roles;
        case 'View all employees':
            sql = employees;
        queryDb(sql);
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
};

const queryDb = (sql) => {
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.table(result);
        mainMenu();
        return;
    });
};

// view all from specified table
// const viewAll = (sql) => {
//     db.query(sql, (err, result) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.table(result);
//         mainMenu();
//         return;
//     });
// };

// make a change to db table (add, update, drop)
const addUpdateDrop = (sql, action) => {

    db.query(sql, (err, results) => {
        if (err) {
            console.error(err)
            return;
        }
        console.log(`${action} successful`);
        console.log(results);
    });
};


init();


