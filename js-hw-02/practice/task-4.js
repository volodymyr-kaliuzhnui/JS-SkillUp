const calculateAge = function (dogAge) {
    let humanAge = 7;
    let result = dogAge * humanAge;
    return `${dogAge} рік собачки це ${result} у людини`
}

console.log(calculateAge(1));