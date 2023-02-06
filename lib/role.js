class Role {
    constructor(answers) {
        this.newRole = answers.newRole;
        this.salary = answers.salary
        this.roleDept = answers.roleDept;
        this.dept_id = answers.dept_id;
    };

    // getTitle() {
    //     return this.newRole;
    // };

    // getSalary() {
    //     return this.roleSalary;
    // };

    // getRoleDept() {
    //     return this.roleDepartment;
    // };

    addRole() {
        return `INSERT INTO role (title, salary, department_id)
        VALUES(${this.newRole}, ${this.salary}, ${this.roleDept})`
    }
};

module.exports = Department;