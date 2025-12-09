// function isNumber(value: string | number): value is number {
//   return !isNaN(Number(value));
// }

// function detectType(value: string) {
//   if (isNumber(value)) {
//     return "number";
//   }
//   return "string";
// }

// const args = process.argv.slice(2);

// args.forEach((item) => {
//   console.log(`${item} -> ${detectType(item)}`);
// });