const biggerThan10 = (elem) => elem > 10;
const smallerThan10 = (elem) => elem < 10;
console.log([1,2,3,23,5].some(biggerThan10));
console.log([12,45,67,34].some(smallerThan10));