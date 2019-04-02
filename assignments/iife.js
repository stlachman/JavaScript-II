// IIFE (Immediately Invoked Function Expression) used to protect variables within the scope of the function.
// The code is invoked immediately and never run again.

// The parentheses around the function turn it a function expression.
(function() {
  var x = 2;
  var y = 20;
  var answer = x * y;
  console.log(answer);
  // 40
})();

console.log(answer);
// error 


// Passing in arguments
(function(str1, str2) {
  console.log(`${str1}  ${str2}`);
})("hello", "friend");

