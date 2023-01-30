// import dependencies
const express = require('express');
const mysql = require('mysql2');

// set PORT
const PORT = process.env.PORT || 3001;

const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

app.get('/api/departments', (req, res) => {
    const allDepartments =
        `SELECT * FROM department`;

    db.query(allDepartments, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

app.get('/api/roles', (req, res) => {
    const allRoles =
        `SELECT role.id, role.title, department.name AS department, role.salary
    FROM role
    LEFT JOIN department 
    ON role.department_id = department.id`;

    db.query(allRoles, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

app.get('/api/employees', (req, res) => {
    const allEmployees =
        `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT_WS(' ', m.first_name, m.last_name) AS manager
    FROM Employee e
    LEFT JOIN role AS r
    ON e.role_id = r.id
    LEFT JOIN department AS d
    ON r.department_id = d.id
    LEFT JOIN Employee m
    ON e.manager_id = m.id`;

    db.query(allEmployees, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});