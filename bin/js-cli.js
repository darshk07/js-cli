#!/usr/bin/env node

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Simple Math CLI");
rl.question("Enter two numbers separated by space: ", (input) => {
  const [a, b] = input.split(" ").map(Number);
  console.log(`Sum: ${a + b}`);
  rl.close();
});
