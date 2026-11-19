const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});
emitter.on("bell-ranged", (arg) => {
    console.log("Bell rang", arg);
});
