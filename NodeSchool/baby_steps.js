// NodeSchool - LearnYouNode - Challenge #2

// https://github.com/workshopper/learnyounode/blob/master/exercises/baby_steps/problem.md

// Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console.

// You can access command-line arguments via the global process object. 
// The process object has an argv property which is an array containing the complete command-line. i.e. process.argv.
// The first element of the process.argv array is always 'node', 
// and the second element is always the path to your program.js file.
// So you need to start at the 3rd element (index 2), adding each item to the total until you reach the end of the array.
// Also be aware that all elements of process.argv are strings and you may need to coerce them into numbers. 
// You can do this by prefixing the property with + or passing it to Number(). e.g. +process.argv[2] or Number(process.argv[2]).

var sum = 0;

for(var i = 2; i<process.argv.length; i++){
	sum += +process.argv[i]; 
	// or sum += Number(process.argv[i]);
}

console.log(sum);
