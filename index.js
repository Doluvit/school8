function makeArray(firstArray, secondArray, maxLength) {
    return firstArray.concat(secondArray).slice(0, maxLength);
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
