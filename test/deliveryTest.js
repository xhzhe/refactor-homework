const test = require('ava');
const {deliveryDate} = require("../src/delivery");


test('test deliveryDate', t => {
    const anOrder = {
        deliveryState: 'ELSE',
        placedOn: {
            plusDays: (param) => {
                return param;
            }
        }
    };
    t.is(4, deliveryDate(anOrder, true))
})

test('test deliveryDate', t => {
    const anOrder = {
        deliveryState: 'MA',
        placedOn: {
            plusDays: (param) => {
                return param;
            }
        }
    };
    t.is(2, deliveryDate(anOrder, true))
})

test('test deliveryDate', t => {
    const anOrder = {
        deliveryState: 'ELSE',
        placedOn: {
            plusDays: (param) => {
                return param;
            }
        }
    };
    t.is(6, deliveryDate(anOrder, false))
})

test('test deliveryDate', t => {
    const anOrder = {
        deliveryState: 'NY',
        placedOn: {
            plusDays: (param) => {
                return param;
            }
        }
    };
    t.is(3, deliveryDate(anOrder, true))
})

test('test deliveryDate', t => {
    const anOrder = {
        deliveryState: 'MA',
        placedOn: {
            plusDays: (param) => {
                return param;
            }
        }
    };
    t.is(4, deliveryDate(anOrder, false))
})

test('test deliveryDate', t => {
    const anOrder = {
        deliveryState: 'ME',
        placedOn: {
            plusDays: (param) => {
                return param;
            }
        }
    };
    t.is(5, deliveryDate(anOrder, false))
})

test('test deliveryDate', t => {
    const anOrder = {
        deliveryState: 'lkkkk',
        placedOn: {
            plusDays: (param) => {
                return param;
            }
        }
    };
    t.is(6, deliveryDate(anOrder, false))
})