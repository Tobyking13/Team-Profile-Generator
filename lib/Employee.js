// TODO: Write code to define and export the Employee class
class Employee {
    constructor(position, name, email, id) {
        this.position = position;
        this.name = name;
        this.email = email;
        this.id = id;
    }       

    // getPosition() {
    //     return this.position;
    // }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;