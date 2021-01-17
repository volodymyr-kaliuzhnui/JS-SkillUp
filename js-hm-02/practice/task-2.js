const countVowels = function (str) {
    let search = str.match(/[aeiou]/gi);
    return search === null ? 0 : search.length;
}

console.log(countVowels('the quick brown fox')) // 5