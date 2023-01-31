// import dependencies
const mysql = require('mysql2');
const cTable = require('console.table');
const { allDepartments, allRoles, allEmployees, addDepartment, addRole } = require('./utils/queries');

const inquirer = require('inquirer');
const prompts = require('./prompts');

// set PORT
const PORT = process.env.PORT || 3001;

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

// view all from specified table
const viewAll = (sql) => {
    db.query(sql, (err, rows) => {
        if (err) {
            console.status(500)
            return;
        }
        console.table(rows)
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
