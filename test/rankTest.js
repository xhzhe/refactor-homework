const rankTest = require('ava');
const {rating} = require("../src/rank");
const {voyageProfitFactor} = require("../src/rank");
const {captainHistoryRisk} = require("../src/rank");
const {voyageRisk} = require("../src/rank");

const voyage = {
    zone: 'west-indies',
    length: 10,
};
const history = [
    {
        zone: 'east-indies',
        profit: 5,
    }, {
        zone: 'west-indies',
        profit: 15,
    }, {
        zone: 'china',
        profit: -2,
    },
    {
        zone: 'west-africa',
        profit: 7,
    },
];

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

rankTest('test captainHistoryRisk', t => {
    t.is(captainHistoryRisk({
        length: 10,
        zone: 'china'
    }, history), 4)
})

rankTest('test captainHistoryRisk', t => {
    t.is(captainHistoryRisk(voyage, history), 6)
})

rankTest('test voyageProfitFactor', t => {
    t.is(voyageProfitFactor(voyage, history), 2)
})

rankTest('test voyageProfitFactor', t => {
    t.is(voyageProfitFactor({
        length: 10,
        zone: 'china'
    }, history), 6)
})

rankTest('test rating', t => {
    t.is(rating({
        length: 10,
        zone: 'china'
    }, history), 'A')
})

rankTest('test rating', t => {
    t.is(rating(voyage, history), 'B')
})
