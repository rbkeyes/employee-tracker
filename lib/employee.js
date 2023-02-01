class Employee {
    constructor(answers) {
        this.firstName = answers.firstName;
        this.lastName = answers.lastName
        this.employeeRole = answers.employeeRole;
        this.employeeManager = answers.employeeManager;
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
        VALUES(${this.firstName}, ${this.lastName}, ${this.role}, ${this.manager})`
    }
};

module.exports = Department;