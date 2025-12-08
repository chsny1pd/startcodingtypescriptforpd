export {};
const a = Number(process.argv[2]);
const b = Number(process.argv[3]);

if (!isNaN(a) && !isNaN(b)) {
    const remainder = a % b;
    console.log("Remainder:", remainder);
} else {
    console.log("Please provide two valid numbers.");
}