'use strict';

// Node.JS specific handler

process.on('uncaughtException', (err) => console.log(`Uncaught exception handler - caught exception ${err.name}`));

lalala;

