const test = require('ava');
const printOwing = require("../src/print");

test('test print', t => {
    t.is('***********************\n**** Customer Owes ****\n***********************\n' +
        'name: aaa\n' +
        'amount: 111\n' +
        'date: 9/27/2020\n', printOwing({
        customer: 'aaa',
        borderSpacing: [{
            amount: 111
        }]
    }))
})