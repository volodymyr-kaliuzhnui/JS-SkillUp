const compact = function (arr) {
    return  arr.filter(item => Boolean(item));
}

console.log(compact([1,0,'', null, 'Hello'])); // [1,'Hello']