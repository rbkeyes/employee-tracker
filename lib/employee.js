class Employee {
    constructor(answers) {
        this.firstName = answers.firstName;
        this.lastName = answers.lastName
        this.employeeRole = answers.employeeRole;
        this.employeeManager = answers.employeeManager;
    };

    getFirstName() {
        return this.firstName;
    };

    getLastName() {
        return this.firstName;
    };

    getEmployeeRole() {
        return this.employeeRole;
    };

    getEmployeeManager() {
        return this.employeeManager;
    }
};

module.exports = Department;