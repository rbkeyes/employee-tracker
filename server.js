// import dependencies
const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer');
const { list, mainMenu, newDept, newRole, newEmployee, updateEmployeeRole } = require('./utils/prompts');
const { departments, roles, employees, addDepartment, addRole, addEmployee, updateRole } = require('./utils/queries');

// const Department = require('./lib/department')

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
    inquirer.prompt([mainMenu, newDept])
        .then((answers) => {
            switch (answers.mainMenu) {
                case 'View all departments':
                    viewTable(departments);
                    break;
                case 'View all roles':
                    viewTable(roles);
                    break;
                case 'View all employees':
                    viewTable(employees);
                    break;
                case 'Add a department':
                    addNewDept(newDept);
                    break;
                case 'Add a role':
                    addNewRole(newRole);
                    break;
                case 'Add an employee':
                    addNewEmployee(newEmployee);
                    break;
                case 'Update an employee role':
                    update(updateEmployeeRole);
                    break;
                default:
                    console.log("goodbye")
                    break;
            };
        });
};


const viewTable = (sql) => {
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.table(result);
        init();
    });
};

// make a change to db table (add, update, drop)
const addNewDept = (prompt) => {
    inquirer.prompt(prompt)
        .then((answers) => {
            db.query(`INSERT INTO department (name)
            VALUES(?)`, answers.newDept, (err, result) => {
                if (err) {
                    console.error(err)
                    return;
                }
                console.log(`Department added`);
                init();
            })
        })
};


const addNewRole = (prompt, sql) => {
    inquirer.prompt(prompt)
        .then((answer) => {
            console.log(answer.dept);
            getDeptID(answer.dept);
            db.query(sql, answer.newRole, answer.salary, (err, results) => {
                if (err) {
                    console.error(err)
                    return;
                }
                console.log(`Role added`);
                init();
            })
        })
};

const getDeptID = (answer) => {
    db.query(`SELECT id FROM department WHERE name = ?`, answer.dept, (err, results) => {
        if (err) {
            console.error(err)
            return;
        }
        console.log(results);
        return results;
    });
}

const addNewEmployee = (prompt, sql) => {
    inquirer.prompt(prompt)
        .then((answer) => {
            db.query(sql, answer.newDept, (err, results) => {
                if (err) {
                    console.error(err)
                    return;
                }
                console.log(`Employee added`);
                init();
            })
        })
};

const update = (prompt, sql) => {
    inquirer.prompt(prompt)
        .then((answer) =>
            db.query(sql, answer.newDept, (err, results) => {
                if (err) {
                    console.error(err)
                    return;
                }
                console.log(`Role updated`);
                init();
            })
        )
};

init();


