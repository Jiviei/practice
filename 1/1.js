"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a = 1.625;
const b = 1.625;
const r = 0.875;
const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('x1: ', (x) => {
    rl.question('y1: ', (y) => {
        if (Math.pow((parseFloat(x) - a), 2) + Math.pow((parseFloat(y) - b), 2) <= Math.pow(r, 2))
            console.log('true');
        else
            console.log('false');
        rl.close();
    });
});
//# sourceMappingURL=1.js.map