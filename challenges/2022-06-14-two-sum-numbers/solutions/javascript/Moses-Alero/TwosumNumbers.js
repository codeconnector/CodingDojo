const TwoSumNumbers = function (number, numbersArray){

   while(numbersArray.length > 0){
        const summation = number - numbersArray[0];
        numbersArray.splice(0,1);
        if(numbersArray.includes(summation)){
            return true;
        } 
    }
    return false;
}