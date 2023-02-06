class Employee {
    constructor(answers) {
        this.firstName = answers.firstName;
        this.lastName = answers.lastName
        // this.employeeRole = answers.employeeRole;
        this.role_id = answers.roleId;
        // this.employeeManager = answers.employeeManager;
        this.manager_id = answers.manager_id;
    };

    // getFirstName() {
    //     return ;
    // };

    // getLastName() {
    //     return this.firstName;
    // };

    // getEmployeeRole() {
    //     return this.employeeRole;
    // };

    // getEmployeeManager() {
    //     return this.employeeManager;
    // }

    // fix this so it matches actual query
    addEmployee() {
        return `INSERT INTO employee (first_name, last_name, role, manager)
        VALUES(${this.firstName}, ${this.lastName}, ${this.role_id}, ${this.manager_id})`
    }

    updateRole() {
        return `UPDATE employee
SET role_id = ${this.role_id}
WHERE id = ${this.id}`
    }
};

module.exports = Department;