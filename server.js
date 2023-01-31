// import dependencies
// const express = require('express');
const mysql = require('mysql2');
const cTable = require('console.table');

// const { mainMenu, } = require('./utils/index')
// const inquirer = require('inquirer');
// const prompts = require('./prompts');

// const app = express();

// set PORT
const PORT = process.env.PORT || 3001;

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

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

const viewAllDepts = () => {
    
    db.query(allDepartments, (err, rows) => {
        if (err) {
            console.status(500)
            return;
        }
        return console.table(rows)
    });
};
viewAllDepts();

const viewAllRoles = () => {
    

    db.query(allRoles, (err, rows) => {
        if (err) {
            console.status(500)
            return;
        }
        console.table(rows)
    });
};
viewAllRoles();

const viewAllEmployees = () => {
    

    db.query(allEmployees, (err, rows) => {
        if (err) {
            console.status(500)
            return;
        }
        console.table(rows)
    });
};
viewAllEmployees();



db.query(addDepartment, (err, result) => {
    if (err) {
        console.status(400)
        return;
    }
    console.info(`Department added`)
    console.table(result)
});




