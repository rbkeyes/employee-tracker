// import dependencies
const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer')
const queries = require('./utils/sequel/queries');

const prompts = require('./utils/inquirer/prompts');

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
    inquirer.prompt(prompts.mainMenu)
        .then((answers) => {
            selectAction(answers.mainMenu)
        })
        .then((sql) => {
            queryDb(sql)
        })
};

const queryDb = (sql) => {
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        return result;
    });
};

const selectAction = (action) => {
    switch (action) {
        case 'View all departments':
            queryDb(departments);
            break;
        case 'View all roles':
            queryDb(roles);
            break;
        case 'View all employees':
            queryDb(employees);
            break;
        case 'Exit':
            console.log('goodbye');
            break;
        default:
            nextPrompt(aswers.mainMenu);
            break;
    };
};




// view all from specified table
// const viewAll = (sql) => {
//     db.query(sql, (err, table) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.table(table);
//         init();
//         return;
//     });
// };

// const nextPrompt = (answer) => {
//     switch (answer) {
//         case 'Add a department':
//             addUpdateDrop(addDepartment, prompts.addDepartment);
//             break;
//         case 'Add a role':
//             addUpdateDrop(addRole, prompts.addRole, 'Role added');
//             break;
//         case 'Add an employee':
//             addUpdateDrop(addEmployee, prompts.addEmployee, 'Employee added');
//             break;
//         case 'Update an employee role':
//             addUpdateDrop(updateEmployeeRole, prompts.updateEmployeeRole, 'Employee role updated');
//             break;
//     }
// }

// // make a change to db table (add, update, drop)
// const runPrompt = (prompt) => {
//     inquirer.prompt(prompt).then((answers) => {
//         db.query(sql, answers,
//             (err, result) => {
//                 if (err) {
//                     console.error(err)
//                     return;
//                 }
//                 console.log(answers)
//                 console.log(action);
//                 console.log(result);
//                 init();
//             });
//     });
// };

// const getInput = (prompt, input) => {
//     switch (prompt) {
//         case prompts.addDepartment:

//             break;
//         case 'View all roles':
//             viewAll(roles);
//             break;
//         case 'View all employees':
//             viewAll(employees);
//             break;
//         case 'Add a department':
//             addUpdateDrop(addDepartment, prompts.addDepartment, 'Department added');
//             break;
//         case 'Add a role':
//             addUpdateDrop(addRole, prompts.addRole, 'Role added');
//             break;
//         case 'Add an employee':
//             addUpdateDrop(addEmployee, prompts.addEmployee, 'Employee added');
//             break;
//         case 'Update an employee role':
//             addUpdateDrop(updateEmployeeRole, prompts.updateEmployeeRole, 'Employee role updated');
//             break;
//         default:
//             console.log("goodbye")
//             break;
//     };
// };


init();

