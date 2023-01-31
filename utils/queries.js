const departments =
            `SELECT * FROM department`;

const roles =
    `SELECT role.id, role.title, department.name AS department, role.salary
        FROM role
        LEFT JOIN department 
        ON role.department_id = department.id`;

const employees =
    `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT_WS(' ', m.first_name, m.last_name) AS manager
    FROM Employee e
    LEFT JOIN role AS r
    ON e.role_id = r.id
    LEFT JOIN department AS d
    ON r.department_id = d.id
    LEFT JOIN Employee m
    ON e.manager_id = m.id`;

const addRole =
    `INSERT INTO role (title, salary, department_id)
    VALUES(?)`

const addEmployee = 
`INSERT INTO employee (first_name, last_name, role, manager)
VALUES(?)`

// role_id = answers.employeeRole
const updateEmployeeRole = 
`UPDATE employee
SET role_id = ?
WHERE id = ?`

module.exports = { departments, roles, employees, addRole, addEmployee, updateEmployeeRole };