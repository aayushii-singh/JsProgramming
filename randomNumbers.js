
let numbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 900) + 100);

console.log("Generated Numbers:", numbers);

let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log("Minimum Value:", min);
console.log("Maximum Value:", max);
