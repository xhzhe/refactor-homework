const MA_CT = [
    'MA',
    'CT',
];

const NY_NH = [
    'NY',
    'NH',
];

const MA_CT_NY = [
    'MA',
    'CT',
    'NY',
];

const ME_NH = [
    'ME',
    'NH',
];

function generateRushTime(anOrder) {
    if (MA_CT.includes(anOrder.deliveryState)) {
        return 1
    }
    if (NY_NH.includes(anOrder.deliveryState)) {
        return 2
    }
    return 3
}

function rushDeliveryDate(anOrder) {
    return anOrder.placedOn.plusDays(1 + generateRushTime(anOrder));
}

function generateDefaultTime(anOrder) {
    if (MA_CT_NY.includes(anOrder.deliveryState)) {
        return 2
    }
    if (ME_NH.includes(anOrder.deliveryState)) {
        return 3
    }
    return 4
}

function defaultDeliveryDate(anOrder) {
    return anOrder.placedOn.plusDays(2 + generateDefaultTime(anOrder));
}

function deliveryDate(anOrder) {
    return anOrder.isRush ? rushDeliveryDate(anOrder) : defaultDeliveryDate(anOrder);
}

module.exports = {deliveryDate}