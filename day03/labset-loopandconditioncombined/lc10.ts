// let x = 0;
// let y = 0;

// function isNumber(value: string | number): value is number {
//   return !isNaN(Number(value));
// }

// function detectType(value: string): boolean {
//   if (isNumber(value)) {
//     const num = Number(value);

//     if (num >= 0) {
//       x += num;
//       y++;
//       return true;  // ยังทำต่อได้
//     } else {
//       return false; // เจอลบ → หยุด
//     }
//   }
//   return true;
// }

// const args = process.argv.slice(2);

// for (const item of args) {
//   const ok = detectType(item);
//   if (!ok) break;   // ← หยุดตรงนี้
// }

// console.log("Sum until negative:", x);
// console.log("Stopped at index:", y);