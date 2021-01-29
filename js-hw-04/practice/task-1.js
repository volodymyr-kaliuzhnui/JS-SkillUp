const biggerThan10 = (elem) => elem > 10;
const smallerThan10 = (elem) => elem < 10;
console.log([1, 2, 3, 4, 5].every(smallerThan10));
console.log([2, 45, 67, 34].every(biggerThan10));