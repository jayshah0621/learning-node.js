var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Greet event emitted.');
});

emtr.on('greet', () => {
    console.log('Greet event emitted another time.');
});

emtr.emit('greet');
