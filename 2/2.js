"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('-1 < x < 1: x = ', (x) => {
    x = parseFloat(x);
    if (x >= 1 || x <= -1) {
        console.log('x is outside the bounds of values');
    }
    else {
        let LogTrue = Math.log(1 + x);
        let LogNear = x;
        for (var i = 2; Math.abs(LogNear - LogTrue) > 0.001; i++) {
            LogNear -= Math.pow(-1, i) * Math.pow(x, i) / i;
        }
        console.log('The exact value:' + LogTrue);
        console.log(`Calculated value: ${LogNear.toFixed(3)}`);
    }
});
//# sourceMappingURL=2.js.map