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

let deptName = 'childcar';
// const addDepartment =
//     `INSERT INTO department (name)
//     VALUES (?)`;

    db.query(addDepartment, deptName, (err, result) => {
        if (err) {
            console.error(err);
        }
        console.log('success');
    });

    db.query(`SELECT * FROM department`, (err, table) => {
        console.table(table);
    });

// const mainMenu = () => {
//     inquirer.prompt(prompts.mainMenu)
//         .then((answers) => {
//             const execute = answers.mainMenu
//             switch (execute) {
//                 case 'View all departments':
//                     viewAll(departments);
//                     break;
//                 case 'View all roles':
//                     viewAll(roles);
//                     break;
//                 case 'View all employees':
//                     viewAll(employees);
//                     break;
//                 case 'Add a department':
//                     addUpdateDrop(addDepartment, prompts.addDepartment, 'Department added');
//                     break;
//                 case 'Add a role':
//                     addUpdateDrop(addRole, prompts.addRole, 'Role added');
//                     break;
//                 case 'Add an employee':
//                     addUpdateDrop(addEmployee, prompts.addEmployee, 'Employee added');
//                     break;
//                 case 'Update an employee role':
//                     addUpdateDrop(updateEmployeeRole, prompts.updateEmployeeRole, 'Employee role updated');
//                     break;
//                 default:
//                     console.log("goodbye")
//                     break;
//             };
//         });
// };

// // view all from specified table
// const viewAll = (sql) => {
//     db.query(sql, (err, table) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.table(table);
//         mainMenu();
//         return;
//     });
// };

// // make a change to db table (add, update, drop)
// const addUpdateDrop = (sql, prompt, action) => {
//     inquirer.prompt(prompt).then((answers) => {
//         db.query(sql, answers.addDepartment, (err, result) => {
//             if (err) {
//                 console.error(err)
//                 return;
//             }
//             console.log(action);
//             console.log(result);
//         });
//     });
// };


// mainMenu();


