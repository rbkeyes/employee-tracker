const allDepartments =
    `SELECT * FROM department`;

const allRoles =
    `SELECT role.id, role.title, department.name AS department, role.salary
        FROM role
        LEFT JOIN department 
        ON role.department_id = department.id`;

const allEmployees =
    `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT_WS(' ', m.first_name, m.last_name) AS manager
    FROM Employee e
    LEFT JOIN role AS r
    ON e.role_id = r.id
    LEFT JOIN department AS d
    ON r.department_id = d.id
    LEFT JOIN Employee m
    ON e.manager_id = m.id`;

const addDepartment =
    `INSERT INTO department (name)
    VALUES(answers.newDepartment)`;

const addRole =
    `INSERT INTO role (title, salary, department_id)`