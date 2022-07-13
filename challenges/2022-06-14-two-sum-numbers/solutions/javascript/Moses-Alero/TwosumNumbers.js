const TwoSumNumbers = function (number, numbersArray){

    while(numbersArray.length > 0){
        const difference = number - numbersArray[0];
        numbersArray.shift();
        if(numbersArray.includes(difference)){
            return true;
        }
    }
    return false;
    }

const testArr = [
    {
    number: 2,
    numbersArray: [1, 1],
    expected: true,
    },
    {
    number: 2,
    numbersArray: [1, 100, 1000, 100000, 1, 55, 8000000, 6],
    expected: true,
    },
    {
    number: 17,
    numbersArray: [10, 15, 3, 8],
    expected: false,
    },
    {
    number: 17,
    numbersArray: [10, 15, 3, 7],
    expected: true,
    },
    {
    number: 16,
    numbersArray: [10, 15, 8, 7],
    expected: false,
    },
    {
    number: 16,
    numbersArray: [10, 15, 8, 8],
    expected: true,
    },
    {
    number: 32,
    numbersArray: [],
    expected: false,
    },
    {
    number: 32,
    numbersArray: [32],
    expected: false,
    },
    {
    number: 32,
    numbersArray: [32, 0],
    expected: true,
    },
    {
    number: -32,
    numbersArray: [32, 0],
    expected: false,
    },
    {
    number: -32,
    numbersArray: [32, -64],
    expected: true,
    },
    ]
    testArr.forEach((test, i) => {
    const actual = TwoSumNumbers(test.number, test.numbersArray);
    const expected = test.expected;
    console.assert(actual === expected, `Test ${i} failed. Expected ${expected}, got ${actual}.`)
    });
    console.log("Tests complete")
    