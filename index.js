// import dependencies
const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer');
const questions = require('./utils/questions');
const { departments, roles, employees, addDepartment, addRole, addEmployee, updateRole } = require('./utils/queries');

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
    try {
        const answers = await inquirer.prompt(questions);
        console.log(answers);
    } catch (err) {
        console.error(err);
    }
};

const selectAll = async (sql) => {
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        const resultsArr = (results.map(a => a.name));
        return resultsArr;
        }
    )};

init();

