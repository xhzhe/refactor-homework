class Employee {
    constructor(name, type) {
        this.typeValid = ['engineer', 'manager', 'salesman']
        this.validateType(type);
        this._name = name;
        this._type = type;
    }

    validateType(type) {
        if (!this.typeValid.includes(type)) {
            throw new Error(`Employee cannot be of type ${type}`);
        }
    }

    toString() {
        return `${this._name} (${this._type})`;
    }
}
module.exports = Employee;