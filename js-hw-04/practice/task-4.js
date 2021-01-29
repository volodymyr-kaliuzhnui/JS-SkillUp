const ordersA = [
    {name: 'Phone', price: 12300, deliveryProgress: 50, type: 0},
    {name: 'Computer', price: 230000, deliveryProgress: 100, type: 1},
    {name: 'Tablet', price: 5000, deliveryProgress: null, type: 2},
]

const ordersB = [
    {name: 'Phone', price: 12300, deliveryProgress: 50, type: 0},
    {name: 'Tablet', price: 5000, deliveryProgress: null, type: 2},
]

const showDeliveryStatus = function (orders) {
    let result = [];
    for (let order of orders) {
        const {deliveryProgress} = order;
        if (deliveryProgress === 100) {
            result.push('Done');
        }

        if (deliveryProgress < 100 && !!deliveryProgress) {
            result.push('In progress');
        }

        if (!deliveryProgress) {
            result.push('Ready for delivery');

        }
    }
    return result.join(', ')
}

console.log(showDeliveryStatus(ordersA))
console.log(showDeliveryStatus(ordersB))
