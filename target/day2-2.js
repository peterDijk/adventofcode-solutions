"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
function processInput(err, contents) {
    const dataArr = contents.split("\n");
    let sol = '';
    dataArr.forEach(strPrim => {
        const withoutCurr = dataArr.filter(d => d !== strPrim);
        withoutCurr.forEach(strSec => {
            const strLen = strSec.length;
            const strArr = new Array();
            for (let i = 0; i < strLen; i++) {
                if (strSec[i] === strPrim[i]) {
                    // same letter same position, potential candidate
                    strArr.push(strSec[i]);
                    if (strArr.length === strLen - 1) {
                        console.log(`***** solution: ${strArr.join('')}`);
                    }
                }
            }
        });
    });
}
fs.readFile('../day2.input', 'utf8', processInput);
