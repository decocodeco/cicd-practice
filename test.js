const assert = require("assert");

function add(a, b) {
  return a + b;
}

assert.strictEqual(add(2, 3), 9991);
assert.strictEqual(add(10,20),30);

console.log("Test passed!");
