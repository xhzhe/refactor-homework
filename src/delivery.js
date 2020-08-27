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
    let deliveryTime;
    if (MA_CT.includes(anOrder.deliveryState)) {
        deliveryTime = 1;
    } else if (NY_NH.includes(anOrder.deliveryState)) {
        deliveryTime = 2;
    } else {
        deliveryTime = 3;
    }
    return deliveryTime;
}

function rushDeliveryDate(anOrder) {
    return anOrder.placedOn.plusDays(1 + generateRushTime(anOrder));
}

function generateDefaultTime(anOrder) {
    let deliveryTime;
    if (MA_CT_NY.includes(anOrder.deliveryState)) {
        deliveryTime = 2;
    } else if (ME_NH.includes(anOrder.deliveryState)) {
        deliveryTime = 3;
    } else {
        deliveryTime = 4;
    }
    return deliveryTime;
}

function defaultDeliveryDate(anOrder) {
    return anOrder.placedOn.plusDays(2 + generateDefaultTime(anOrder));
}

function deliveryDate(anOrder, isRush) {
    if (isRush) {
        return rushDeliveryDate(anOrder);
    } else {
        return defaultDeliveryDate(anOrder);
    }
}

module.exports = {deliveryDate}