// // --- 1. กำหนด Interface เพื่อแก้ Error 'any' type ---
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
//   customer: string; // ต้องระบุชื่อลูกค้าเพื่อใช้กรองใน Ex 7
//   date?: string;
//   items: PurchaseItem[];
// }

// // --- 2. ฟังก์ชัน Exercise 1 - 7 ---

// // Ex 1: นับจำนวน
// function loadPurchaseData(purchases: Purchase[]): number {
//   return purchases ? purchases.length : 0;
// }

// // Ex 2: รวมชื่อและราคา (ระบุ Type เพื่อแก้ Error เส้นแดง)
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

// // Ex 6: ค้นหาด้วย ID (Find)
// function findPurchaseById(purchases: Purchase[], purchaseId: number): Purchase | undefined {
//   return purchases.find(p => p.purchaseId === purchaseId);
// }

// // Ex 7: กรองตามชื่อลูกค้า (Filter)
// function filterPurchasesByCustomer(purchases: Purchase[], customer: string): Purchase[] {
//   // กรองเอาเฉพาะใบเสร็จที่ชื่อลูกค้าตรงกับที่ส่งมา
//   return purchases.filter(p => p.customer === customer);
// }

// const allPurchases: Purchase[] = [
//   { purchaseId: 1, customer: "Alice", items: [] },
//   { purchaseId: 4, customer: "Alice", items: [] },
//   { purchaseId: 7, customer: "Bob", items: [] }
// ];

// const alicesPurchases = filterPurchasesByCustomer(allPurchases, "Alice");
// console.log(alicesPurchases.length); // ควรได้ 2 (ใบเสร็จที่ 1 และ 4)