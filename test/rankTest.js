const rankTest = require('ava');
const {voyageRisk} = require("../src/rank");

rankTest('test voyageRisk', t => {
    t.is(voyageRisk({
        length: 4,
        zone: 'china'
    }), 5)
})

rankTest('test voyageRisk', t => {
    t.is(voyageRisk({
        length: 8,
        zone: 'china'
    }), 7)
})

rankTest('test voyageRisk', t => {
    t.is(voyageRisk({
        length: 10,
        zone: 'china'
    }), 9)
})