function generateOwes(invoice, outstanding) {
    let result = "***********************\n**** Customer Owes ****\n***********************\n";
    result += `name: ${invoice.customer}\n`;
    result += `amount: ${outstanding}\n`;
    result += `date: ${invoice.dueDate.toLocaleDateString()}\n`;
    return result;
}

function printOwing(invoice) {
    let outstanding = invoice.borderSpacing.reduce((pre, cur) => pre + cur.amount, 0)
    // record due date
    const today = new Date();
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    return generateOwes(invoice, outstanding);
}
module.exports = printOwing