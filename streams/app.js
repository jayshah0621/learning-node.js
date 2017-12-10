var fs = require('fs');

var readable = fs.createReadStream('./lipsum.txt');

var writable = fs.createWriteStream('./lipsumcopy.txt', );

readable.pipe(writable);

console.log('Lipsum copied.');
