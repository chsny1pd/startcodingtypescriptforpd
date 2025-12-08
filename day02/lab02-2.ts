export {};
const Radius = Number(process.argv[2]);

if (!isNaN(Radius)) {
    const area = Math.PI * Math.pow(Radius, 2);
    console.log("Area of circle:", area);
} else {
    console.log("Please provide a valid radius.");
}const radius = Number(process.argv[2]);

if (!isNaN(Radius)) {
    const area = Math.PI * Math.pow(Radius, 2);
    console.log("Area of circle:", area);
} else {
    console.log("Please provide a valid radius.");
}