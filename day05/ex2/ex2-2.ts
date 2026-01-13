// interface Item {
//   itemId: number;
//   name: string;
//   price: number;
// }

// interface PurchaseItem {
//   itemId: number;
//   quantity: number;
//   name?: string;  // จะเพิ่มเข้ามาหลัง Merge
//   price?: number; // จะเพิ่มเข้ามาหลัง Merge
// }

// interface Purchase {
//   purchaseId: number;
//   customer: string;
//   items: PurchaseItem[];
// }

// function mergePurchasesWithItems(items: Item[], purchases: Purchase[]) {
//   return purchases.map(purchase => {
//     return {
//       ...purchase,
//       // เข้าไปในแต่ละรายการสินค้าของลูกค้าคนนั้น
//       items: purchase.items.map(pItem => {
//         // หาข้อมูลสินค้าที่ itemId ตรงกัน
//         const detail = items.find(i => i.itemId === pItem.itemId);
        
//         // ส่งคืนข้อมูลเดิม + ข้อมูลชื่อและราคาที่หาเจอ
//         return {
//           ...pItem,
//           name: detail ? detail.name : "Unknown",
//           price: detail ? detail.price : 0
//         };
//       })
//     };
//   });
// }

// const items: Item[] = [
//   { itemId: 1, name: "Notebook", price: 50 },{ itemId: 2, name: "Pen", price: 10 }
// ];

// const purchases: Purchase[] = [
//   {
//     purchaseId: 1,
//     customer: "Alice",
//     items: [{ itemId: 1, quantity: 3 }]
//   },
//   {
//     purchaseId: 2,
//     customer: "Bob",
//     items: [{ itemId: 1, quantity: 1 }, { itemId: 2, quantity: 5 }]
//   }
// ];

// const result = mergePurchasesWithItems(items, purchases);
// console.log(JSON.stringify(result, null, 2));