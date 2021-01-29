const capitalize = function (str) {
    let arrStr = str.split(' ');
    // console.log(arrStr);
    let firstUpCase = [];
    for (let elem of arrStr) {
        firstUpCase.push(elem[0].toLocaleUpperCase() + elem.slice(1));
    }
    let newArr = firstUpCase.join(' ')
    // console.log(newArr)
    return newArr;
}

console.log(capitalize('the quick brown fox')) // 'The Quick Brown Fox '