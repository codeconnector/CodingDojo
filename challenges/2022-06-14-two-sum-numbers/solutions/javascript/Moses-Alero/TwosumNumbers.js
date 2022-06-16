const TwoSumNumbers = function (number, numbersArray){

    for(let i = 0; i< numbersArray.length; i++){
        const summation = number - numbersArray[i];
        numbersArray.shift(numbersArray[i]);
        if(numbersArray.includes(summation)) {
            return true;
        }
    }
    return false;
}