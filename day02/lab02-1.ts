export {};
const num1 = Number(process.argv[2]);

if (!isNaN(num1)) {
    const square = num1 * num1;
    console.log("Square:", square);
} else {
    console.log("Please provide a valid number.");
}