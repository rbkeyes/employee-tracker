// import dependencies
const mysql = require('mysql2');
const cTable = require('console.table');
const { departments, roles, employees, addRole, addEmployee, updateEmployeeRole } = require('./utils/queries');
const Department = require('./lib/department')

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

const init = async () => {
    inquirer.prompt(prompts.mainMenu)
        .then((answers) => {
            if (answers.mainMenu === 
                prompts.mainMenu.choices[0] || prompts.mainMenu.choices[1] || prompts.mainMenu.choices[3])
            console.log(answers.mainMenu)
        })

}

const action = (act) => {
    switch (act) {
        case 'View all departments':
            queryDb(departments);
            break;
        case 'View all roles':
            queryDb(roles);
            break;
        case 'View all employees':
            queryDb(employees);
            break;
        // case 'Add a department':
        //     inquirer.prompt
        //     addUpdateDrop(addDepartment);
        //     break;
        // case 'Add a role':
        //     addUpdateDrop(addRole);
        //     break;
        // case 'Add an employee':
        //     addUpdateDrop(addEmployee);
        //     break;
        // case 'Update an employee role':
        //     addUpdateDrop(updateEmployeeRole);
        //     break;
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
        init();
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


