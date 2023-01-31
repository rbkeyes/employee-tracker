class Role {
    constructor(answers) {
        this.newRole = answers.newRole;
        this.roleSalary = answers.roleSalary
        this.roleDepartment = answers.roleDepartment;
    };

    getTitle() {
        return this.newRole;
    };

    getSalary() {
        return this.roleSalary;
    };

    getRoleDept() {
        return this.roleDepartment;
    };
};

module.exports = Department;