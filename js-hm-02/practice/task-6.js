let nonUniqueElements = function(arr){

    let result = arr.filter(function (elem,index,array){
        let count = 0;

        for (const iterator of array) {
            if(iterator === elem){
                count++;
            };
        }
        return count>1;
    });
    return result;
};

console.log(nonUniqueElements([1, 2, 3, 1, 3])); // [1, 3, 1, 3]
console.log(nonUniqueElements([1, 2, 3, 4, 5])); // []
console.log(nonUniqueElements([5, 5, 5, 5, 5])); // [5, 5, 5, 5, 5]
console.log(nonUniqueElements([10, 9, 10, 10, 9, 8])); // [10, 9, 10, 10, 9]