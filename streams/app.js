var fs = require('fs');

var readable = fs.createReadStream('./lipsum.txt', { encoding: 'utf8', highWaterMark: 8*1024 });

var writable = fs.createWriteStream('./lipsumcopy.txt', );

readable.on('data', (data) => {
    writable.write(data);
});

readable.on('end', () => {
    console.log('Lipsum copied.');
});
