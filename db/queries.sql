-- view all departments
SELECT * FROM department;

-- view all roles
SELECT role.id, role.title, department.name AS department, role.salary
FROM role
LEFT JOIN department 
ON role.department_id = department.id;

-- view all employees
SELECT e.id, 
    e.first_name, 
    e.last_name, 
    r.title, 
    d.name AS department, 
    r.salary, 
    CONCAT_WS(' ', m.first_name, m.last_name) AS manager
FROM Employee e
LEFT JOIN role AS r
ON e.role_id = r.id
LEFT JOIN department AS d
ON r.department_id = d.id
LEFT JOIN Employee m
ON e.manager_id = m.id;

-- add department
INSERT INTO department (name)
VALUES ('product development');

INSERT INTO role (title, salary, department_id)
VALUES ('intern', 30, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Lilly', 'Dog', 2, null)
