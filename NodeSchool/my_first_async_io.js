// NodeSchool - LearnYouNode - Challenge #4

// https://github.com/workshopper/learnyounode/blob/master/exercises/my_first_io/problem.md

// Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console
// The full path to the file to read will be provided as the first command-line argument (i.e., process.argv[2]). You do not need to make your own test file.

var fs = require('fs');

fs.readFile(process.argv[2], (err, data) => {
  if (err) {
  	console.log(err);
  } 

  var newLineCount = data.toString().split("\n").length - 1;
  
  console.log(newLineCount);
});