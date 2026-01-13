// interface Purchase {
//   id: number;
//   productName: string;
//   amount: number;
// }

// function loadPurchaseData(purchases: Purchase[]): number {
//   // ตรวจสอบว่ามีข้อมูลส่งเข้ามาหรือไม่ (Optional - กันเหนียว)
//   if (!purchases) {
//     return 0;
//   }
  
//   // คืนค่าจำนวนรายการโดยใช้ property .length
//   return purchases.length;
// }

// // --- ตัวอย่างการเรียกใช้งาน (สำหรับทดสอบ) ---
// const mockPurchases: Purchase[] = 
// [ 
//   { id: 1, productName: 'Apple', amount: 100 },
//   { id: 2, productName: 'Banana', amount: 50 },
//   { id: 3, productName: 'Orange', amount: 100 },
//   { id: 4, productName: 'Papaya', amount: 50 },
//   { id: 5, productName: 'Grape', amount: 100 },
//   { id: 6, productName: 'Melon', amount: 50 },
//   { id: 7, productName: 'PineApple', amount: 100 },
//   { id: 8, productName: 'Coconut', amount: 50 },
//   { id: 9, productName: 'Strawberry', amount: 100 },
//   { id: 10, productName: 'TangMo', amount: 50 }
// ] 
// console.log(loadPurchaseData(mockPurchases)); // ผลลัพธ์จะแสดง: 10