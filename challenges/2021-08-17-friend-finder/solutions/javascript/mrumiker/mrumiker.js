function friendGroups(classObj) {
  
  const students = Object.keys(classObj).map(num => +num),
        friends = []; //the array 'students' is a list of all students. We will remove students from this array when we figure out whih friend group they belong in.  The array 'friends' is currently empty and will be used to temporarily keep track of the friends in each group. 

  let counter = 0;

  while (students.length) {
    
    friends.push(...classObj[students.shift()]); //start by taking the first student currently in the students array and pushing her friends into the friends array. Since we've now checked her, we use the shift() method to remove this student from students.
    
    for (friend of friends) {//loop over the friends array
      if (students.includes(friend)) {  
        friends.push(...classObj[friend]);//if the current friend is still in the students array, he hasn't been checked yet, so add his friends to the end of the friends array, to be checked later

        students.splice(students.indexOf(friend), 1);//remove the current friend from the students array, since he has now been checked
      }//however, if the current friend is not in the students array, then we know we've already checked him, so we leave him alone and keep going through the array
    }
    friends.length = 0;
    counter++;//once we get to the end of the friends array, that means that we have run out of 'new' friends to add to this group, so our group is complete. Clear the friends array and add 1 to the counter.
  }//once a group is complete, check to see if there are still students waiting in the students array. If so, go back to line 8 and repeat. If not, we're done!
  return counter;
}


let friendList = {
  0: [1, 2], 1: [0, 5], 2: [0],
  3: [6]   , 4: []    , 5: [1],
  6: [3]
};
console.log(friendGroups(friendList)); //3

friendList = {
  0: [1, 2], 1: [0, 2], 2: [0, 1, 3],
  3: [2, 4], 4: [3, 5], 5: [3, 4]
};
console.log(friendGroups(friendList));
// 1

friendList = {
  0: [1], 1: [0], 2: [3], 3: [2],
  4: [5], 5: [4], 6: [7], 7: [6]
};

console.log(friendGroups(friendList));
//4
