export {};
const name: string = process.argv[2];
const height: number = Number(process.argv[3]);
const age: number = Number(process.argv[4]);

// Check if all values exist and valid
if (name && !isNaN(height) && !isNaN(age)) {
    console.log("Name:", name);
    console.log("Height:", height);
    console.log("Age:", age);
} else {
    console.log("Please provide valid inputs.");
    console.log("Example: ts-node index.ts John 170 70");
}