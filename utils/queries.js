const viewAllDepts = () => {
    const allDepartments =
        `SELECT * FROM department`;
    db.query(allDepartments, (err, rows) => {
        if (err) {
            console.status(500)
            return;
        }
        return console.table(rows)
    });
};

const viewAllRoles = () => {
    const allRoles =
        `SELECT role.id, role.title, department.name AS department, role.salary
        FROM role
        LEFT JOIN department 
        ON role.department_id = department.id`;

    db.query(allRoles, (err, rows) => {
        if (err) {
            console.status(500)
            return;
        }
        console.table(rows)
    });
};

const viewAllEmployees = () => {
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
            console.status(500)
            return;
        }
        console.table(rows)
    });
};

const addDepartment =
    `INSERT INTO department (name)
    VALUES(answers.newDepartment)`;
db.query(addDepartment, (err, result) => {
    if (err) {
        console.status(400)
        return;
    }
    console.info(`Department added`)
    console.table(result)
});