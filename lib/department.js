class Department {
    constructor(answers) {
        this.newDepartment = answers.newDepartment;
    };

    getName() {
        return this.newDepartment;
    };
};

module.exports = Department;