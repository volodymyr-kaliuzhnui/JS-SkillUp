const converter = function (rem, px) {
    let result = parseInt(rem.match(/\d+/)) * parseInt(px.match(/\d+/));
    return result;
}

console.log(converter('2rem','20px'));