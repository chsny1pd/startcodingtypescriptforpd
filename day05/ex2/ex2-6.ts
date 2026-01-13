// // --- 1. กำหนด Interface (Type) ---
// interface ItemDetail {
//   itemId: number;
//   name: string;
//   price: number;
// }

// interface PurchaseItem {
//   itemId: number;
//   quantity: number;
//   name?: string;
//   price?: number;
// }

// interface Purchase {
//   purchaseId: number;
//   customer: string;
//   date?: string;
//   items: PurchaseItem[];
// }

// // --- 2. ฟังก์ชัน Exercise 1 - 6 ---

// // Ex 1: นับจำนวน
// function loadPurchaseData(purchases: Purchase[]): number {
//   return purchases ? purchases.length : 0;
// }

// // Ex 2: รวมชื่อและราคา (แก้ Error ตรง i และ itemDetails)
// function mergePurchasesWithItems(itemDetails: ItemDetail[], purchases: Purchase[]): Purchase[] {
//   return purchases.map(purchase => ({
//     ...purchase,
//     items: purchase.items.map(pItem => {
//       const detail = itemDetails.find((i: ItemDetail) => i.itemId === pItem.itemId);
//       return {
//         ...pItem,
//         name: detail ? detail.name : "Unknown",
//         price: detail ? detail.price : 0
//       };
//     })
//   }));
// }

// // Ex 3: เพิ่มสินค้า (Push)
// function addItemToPurchase(purchase: Purchase, newItem: PurchaseItem): Purchase {
//   purchase.items.push(newItem);
//   return purchase;
// }

// // Ex 4: ลบสินค้า (Filter)
// function removeItemFromPurchase(purchase: Purchase, itemId: number): Purchase {
//   purchase.items = purchase.items.filter(item => item.itemId !== itemId);
//   return purchase;
// }

// // Ex 5: แก้ไขจำนวน (Replace)
// function replaceItemQuantity(purchase: Purchase, itemId: number, quantity: number): Purchase {
//   purchase.items = purchase.items.map(item => {
//     if (item.itemId === itemId) {
//       return { ...item, quantity };
//     }
//     return item;
//   });
//   return purchase;
// }

// // Ex 6: ค้นหาใบเสร็จด้วย ID (Find)
// function findPurchaseById(purchases: Purchase[], purchaseId: number): Purchase | undefined {
//   // หาใบเสร็จที่มี purchaseId ตรงกับที่ส่งมา
//   return purchases.find(p => p.purchaseId === purchaseId);
// }

// // --- 1. เตรียมข้อมูลสำหรับทดสอบ ---
// const mockItems: ItemDetail[] = [
//   { itemId: 1, name: "Notebook", price: 50 },
//   { itemId: 2, name: "Pen", price: 10 },
//   { itemId: 4, name: "Eraser", price: 5 }
// ];

// let mockPurchases: Purchase[] = [
//   {
//     purchaseId: 1,
//     customer: "Alice",
//     date: "2024-01-01",
//     items: [
//       { itemId: 1, quantity: 3 },
//       { itemId: 2, quantity: 5 }
//     ]
//   },
//   {
//     purchaseId: 4,
//     customer: "Bob",
//     date: "2024-02-03",
//     items: [{ itemId: 2, quantity: 1 }]
//   }
// ];

// // --- 2. เริ่มการทดสอบทีละข้อ ---

// console.log("--- Testing Exercise 1: Load Data ---");
// console.log("Total purchases:", loadPurchaseData(mockPurchases)); // ควรได้ 2

// console.log("\n--- Testing Exercise 3: Add Item (Add itemId 4 to Alice) ---");
// addItemToPurchase(mockPurchases[0], { itemId: 4, quantity: 1 });
// console.log("Alice's items count:", mockPurchases[0].items.length); // ควรได้ 3

// console.log("\n--- Testing Exercise 5: Replace Quantity (Change itemId 1 to 10) ---");
// replaceItemQuantity(mockPurchases[0], 1, 10);
// console.log("New quantity of item 1:", mockPurchases[0].items[0].quantity); // ควรได้ 10

// console.log("\n--- Testing Exercise 4: Remove Item (Remove itemId 2 from Alice) ---");
// removeItemFromPurchase(mockPurchases[0], 2);
// console.log("Items after removal:", mockPurchases[0].items.map(i => i.itemId)); // ไม่ควรมีเลข 2

// console.log("\n--- Testing Exercise 6: Find Purchase by ID (Find ID 4) ---");
// const found = findPurchaseById(mockPurchases, 4);
// console.log("Found customer:", found?.customer); // ควรได้ "Bob"

// console.log("\n--- Testing Exercise 2: Merge Data (Final Result) ---");
// const finalData = mergePurchasesWithItems(mockItems, mockPurchases);
// console.log(JSON.stringify(finalData, null, 2)); // ข้อมูลควรมี name และ price ครบ