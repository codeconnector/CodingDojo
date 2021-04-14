// declare all variables and function
let key, obj = {};
const array = [1, 1, 2, 3, 3, 4, 5, 5];
function findLoneWolf(arr) {
    //iterate over array
    for (let i of arr) {
        //declare variable 'key' to current index of array
        key = i;
        //if obj has a key that matches current index of array add 1 to obj value, if key appears only once set obj[key] value to 1
        if (obj[key]) {
            obj[key]++;
        } else {
            obj[key] = 1;
        }
    }
    //iterate over container obj, set conditional to print if value is 1
    for (let k in obj) {
        if (obj[k] == 1)
            console.log(`${k} appears only one time in the provided array of numbers`)
    }
    return
}

findLoneWolf(array)