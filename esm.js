import os from 'node:os';

console.log(`esm preload: ${os.platform()}`);

globalThis.wasPreloaded = true;
