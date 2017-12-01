This exercise is to understand how to test node.js code.

Following libraries/modules are used in this exercise:

Mocha
Supertest
Expect
Rewire


Notes on the folders and files insisde them:

Each folder contains a .test.js file, which contains the test script for that folder.

utils/utils.js - contains a regular multiplication function and an async add function.

server/server.js - Uses express' get method.

spies/app.test - code related to expect module's spy concept 


Notes on package.json file:

 "scripts": {
    "test": "mocha **/*.test.js",
    "test-watch": "nodemon --exec \"npm test\""
  }
  
The first line tells mocha to search for .test.js file in each directory. This test can be run via npm using the command - npm test.

The second line adds a watch script that executes a nodemon command to continuously monitor the changes in the code. To run the watch script use the command - npm run test-watch.
