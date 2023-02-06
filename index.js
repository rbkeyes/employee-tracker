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
    //     switch (questions) {
    //         case questions[0]:
    //             if ('View all departments') {viewTable(departments)}
    //             else if ('View all roles') 
    //             {viewTable(roles)}
    //             else if ('View all employees')
    //             {viewTable(employees)}
    //             break;
    //         case questions[1]:
    //             viewTable(roles);
    //             break;
    //         case questions[0].choices[2]:
    //             viewTable(employees);
    //             break;
    //         case questions[1].answers: 
    //             break;
    //         default:
    //             console.log("Goodbye")
    //             break;
    //     };
    } catch (err) {
        console.error(err);
    }
};

const getChoices = (sql) => {
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        // const resultsArr = (results.map(a => a.name));
        // return resultsArr;
        return results;
    }
    )
};

const viewTable = (sql) => {
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(' ');
        console.table(result);
        init();
    });
};

init();

