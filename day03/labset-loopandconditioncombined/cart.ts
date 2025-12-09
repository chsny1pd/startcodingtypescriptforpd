// let total = 0;
// let discountNext = false;

// function isNumber(value: string | number): value is number {
//   return !isNaN(Number(value));
// }

// function detectType(value: string): number {
//   // กรณีเป็นตัวเลข
//   if (isNumber(value)) {
//     let price = Number(value);

//     // ถ้ามีส่วนลดจาก item ก่อนหน้า
//     if (discountNext) {
//       price = price * 0.9;
//       discountNext = false;
//       console.log(`Item: ${price} (after discount)`);
//     } 
//     else {
//       console.log(`Item: ${price}`);
//     }

//     total += price;
//     return price;
//   }

//   // กรณี free
//   if (value === "free") {
//     console.log(`Item: 0 (free)`);
//     return 0;
//   }

//   // กรณี discount
//   if (value === "discount") {
//     discountNext = true;
//     return 0;
//   }

//   return 0;
// }

// const args = process.argv.slice(2);

// args.forEach((item) => {
//   detectType(item);
// });

// console.log(`Total: ${total}`);