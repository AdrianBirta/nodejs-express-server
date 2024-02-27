const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');
const EventEmitter = require('events');
class Emitter extends EventEmitter {}
// initialize object
const myEmitter = new Emitter();

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  const extension = path.extname(req.url);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// myEmitter.on('log', (msg) => {
//   logEvents(msg);
// });

//   myEmitter.emit('log', 'Log event emitted!');
