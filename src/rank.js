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
    if (asia.includes(voyage.zone)) {
        result += 4;
    }
    return result;
}

function hasChina(history) {
    return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk(voyage, history) {
    let result = 1;
    if (history.length < 5) {
        result += 4;
    }
    result += history.filter(v => v.profit < 0).length;
    if (voyage.zone === china && hasChina(history)) {
        result -= 2;
    }
    return Math.max(result, 0);
}

function voyageProfitFactor(voyage, history) {
    let result = 2;
    if (voyage.zone === china) {
        result += 1;
    }
    if (voyage.zone === eastIndies) {
        result += 1;
    }
    if (voyage.zone === china && hasChina(history)) {
        result += 3;
        if (history.length > 10) {
            result += 1;
        }
        if (voyage.length > 12) {
            result += 1;
        }
        if (voyage.length > 18) {
            result -= 1;
        }
    } else {
        if (history.length > 8) {
            result += 1;
        }
        if (voyage.length > 14) {
            result -= 1;
        }
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
