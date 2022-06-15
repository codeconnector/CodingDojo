const TwoSumNumbers = function (number, numbersArray){
    const arraySet = [...new Set(numbersArray)]
    
    for(let i = 0; i< arraySet.length; i++){
        const summation = number - arraySet[i];
        if(arraySet.includes(summation) && summation != arraySet[i]) {
            return true
        }
    }
    return false
}
