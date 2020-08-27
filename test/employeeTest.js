import Employee from "../src/employee";


const test = require('ava');

test('test toString', t => {
    const employee = new Employee('alex', 'engineer');
    t.is('alex (engineer)', employee.toString());
})

test('test validateType', t => {
    try {
        new Employee('alex', 'kkk');
        t.fail()
    } catch (e) {
        t.is(e.message, 'Employee cannot be of type kkk')
    }
})