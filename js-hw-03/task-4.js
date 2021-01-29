const countTotalSalary = function(employees) {
    let totalSum = 0;
    for (let money in employees) {
        totalSum += employees[money]
    }
    let workersNames = Object.keys(employees).join(',');

    return `Загальна сума зарплат для ${workersNames} становить ${totalSum}`;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0
console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    }),
); // 330
console.log(
    countTotalSalary({
        kiwi: 200,
        lux: 50,
        chelsy: 150,
    }),
); // 400