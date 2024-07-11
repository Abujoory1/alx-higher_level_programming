#!/usr/bin/node
/* This script prints a message depending of the number of arguments */
const args = process.argv;
let message;
if (args.length === 0) {
  message = "No argument";
} else if (args.length === 1) {
  message = "Argument found";
} else {
  message = "Arguments found";
}
console.log(message);
