const asia = [
    'china',
    'east-indies',
];
const eastIndies = 'east-indies';
const china = 'china';
const A = 'A';
const B = 'B';

function voyageRisk(voyage) {
    let result = 1;
    result += voyage.length > 4 ? 2 : 0
    result += Math.max(0, voyage.length - 8);
    result += asia.includes(voyage.zone) ? 4 : 0;
    return result;
}

function hasChina(history) {
    return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk(voyage, history) {
    let result = 1;
    result += history.length < 5 ? 4 : 0;
    result += history.filter(v => v.profit < 0).length;
    result += voyage.zone === china && hasChina(history) ? -2 : 0;
    return Math.max(result, 0);
}

function voyageProfitFactor(voyage, history) {
    let result = 2;
    result += voyage.zone === china ? 1 : 0;
    result += voyage.zone === eastIndies ? 1 : 0;
    if (voyage.zone === china && hasChina(history)) {
        result += 3;
        result += history.length > 10 ? 1 : 0;
        result += voyage.length > 12 > 1 ? 1 : 0;
        result += voyage.length > 18 ? -1 : 0;
    } else {
        result += history.length > 8 ? 1 : 0;
        result += voyage.length > 14 ? -1 : 0;
    }
    return result;
}

function rating(voyage, history) {
    return voyageProfitFactor(voyage, history) * 3 > (voyageRisk(voyage) + captainHistoryRisk(voyage, history) * 2) ? A : B;
}

module.exports = {
    voyageRisk,
    captainHistoryRisk,
    rating,
    voyageProfitFactor
};
