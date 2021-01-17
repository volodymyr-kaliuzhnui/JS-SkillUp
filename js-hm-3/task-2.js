const countProps = function(obj) {
    let result = 0;
    for (let kay in obj) {
        result +=1
    }
    return result;
};

console.log(countProps({})); // 0
console.log(countProps({ name: 'Mango', age: 2 })); // 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3