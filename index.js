const sum = require("./helpers/sum.js");

const entries = [
    { a: 1, b: 2, result: 3 },
    { a: 2, b: 3, result: 5 },
    { a: 3, b: 4, result: 7 },
    { a: 4, b: 5, result: 9 },
    { a: 5, b: 6, result: 11 },
]

entries.forEach(entry => {
    console.log(sum(entry.a, entry.b) === entry.result ? `PASSED ✅` : `FAILED ❌`)
});



