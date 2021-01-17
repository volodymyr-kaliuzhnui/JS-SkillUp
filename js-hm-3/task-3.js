const findBestEmployee = function(employees) {
   let result = 0;
   for (let kay in employees) {
      if (result < employees[kay]) {
          result = employees[kay];
      }
   }
    let bestWorkerName;
    let workersNames = Object.keys(employees);
    // console.log(workersNames);
    for (let workerName of workersNames) {
        if (employees[workerName] === result) {
            bestWorkerName = workerName;
        }
    }

    return `${bestWorkerName} : ${result}`;

};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence
console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango
console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux