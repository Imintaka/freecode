function rangeOfNumbers(startNum, endNum) {
    // Only change code below this line
    if (endNum < startNum) {
        return [];
    } else {
        const countArray = rangeOfNumbers(startNum, endNum - 1);
        countArray.push(endNum);
        return countArray;
    }

};
console.log(rangeOfNumbers(4, 10))