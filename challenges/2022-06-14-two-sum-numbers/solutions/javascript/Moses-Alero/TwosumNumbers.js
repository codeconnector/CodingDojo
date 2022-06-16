const TwoSumNumbers = function (number, numbersArray){

   for(let i = 0; i < numbersArray.length;i++){
        const summation = number - numbersArray[0];
        numbersArray.splice(0,1);
        console.log(numbersArray);
        if(numbersArray.includes(summation)){
            return true;
        } 
    }
    return false;
}