const os = require('node:os');

console.log(`cjs preload: ${os.platform()}`);

globalThis.wasPreloaded = true;
