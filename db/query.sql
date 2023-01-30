-- JOIN role and department at department.id
-- show id, title, dept. name, salary
SELECT role.id, role.title, department.name AS department, role.salary
FROM role
JOIN department 
ON role.department_id = department.id;

-- JOIN employee & role + department (via role)
SELECT employee.id, 
    employee.first_name, 
    employee.last_name, 
    role.title, 
    department.name AS department, 
    role.salary, 
    CONCAT_WS(' ', manager.first_name, manager.last_name) as manager
FROM Employee employee
JOIN role
ON employee.role_id = role.id
JOIN department 
ON role.department_id = department.id
JOIN Employee manager
ON employee.manager_id = manager.id;

