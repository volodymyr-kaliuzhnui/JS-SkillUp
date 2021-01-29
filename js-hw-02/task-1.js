const logItems = function(array) {
    let item;
    for (item of array) {
        console.log(`Номер ${array.indexOf(item) + 1}, значення ${item}`);
    }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);