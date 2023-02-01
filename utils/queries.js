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

// role_id = answers.employeeRole


module.exports = { departments, roles, employees, addRole, addEmployee, updateRole };