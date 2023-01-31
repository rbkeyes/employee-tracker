class Department {
    constructor(answers) {
        this.newDepartment = answers.newDepartment;
    };

    addDept() {
        return `INSERT INTO department (name)
    VALUES(${this.newDepartment})`;
    };
};

module.exports = Department;