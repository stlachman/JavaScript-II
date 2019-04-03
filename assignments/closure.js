// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const outerFunction = () => {
	const x = 2;

	const innerFunction = () => {
		const y = 2;
		return x + y;
	};

	return innerFunction();
};

outerFunction();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.
const counter = () => {
	let currentValue = 0;
	return function() {
		currentValue++;
		return currentValue;
	};
};
// Example usage: const newCounter = counter();

const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.

const counterFactory = () => {
	let currentValue = 0;
	let currentObj = {
		increment: function() {
			currentValue++;
			return currentValue;
		},
		decrement: function() {
			currentValue--;
			return currentValue;
		}
	};

	return currentObj;
};

const start = counterFactory();
const addOne = start.increment();
console.log(addOne);
const addTwo = start.increment();
console.log(addTwo);

const subtractOne = start.decrement();
console.log(subtractOne);
