// Define the add function
function add(a, b) {
  return a + b;
}

// Convert arguments to integers and print result
const first = parseInt(process.argv[2]);
const second = parseInt(process.argv[3]);

console.log(add(first, second));