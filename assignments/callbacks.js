// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// getLength(items, function(length) {
//   console.log(length);
// });

getLength(items, length => {
  console.log(length);
});


function last(arr, cb) {
  return cb(arr[arr.length - 1]);
}

// last(items, function(lastItem) {
//   console.log(lastItem);
// });

last(items, (lastItem) => {
  console.log(lastItem);
})


// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  return cb(x + y);
}

// sumNums(2, 4, function(sum) {
//   console.log(sum);
// });

sumNums(2,4, sum => {
  console.log(sum);
});

 // multiplyNums multiplies two numbers and passes the result to the callback.
 function multiplyNums(x, y, cb) {
  return cb(x * y);
}

// multiplyNums(2, 4, function(product) {
//   console.log(product);
// });

multiplyNums(2, 4, product => {
  console.log(product);
});



// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
  return cb(list.includes(item));
}

// contains('Notebook', items, function(containedItem) {
//   console.log(containedItem);
// });


contains('Notebook', items, containedItem => {
  console.log(containedItem);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
