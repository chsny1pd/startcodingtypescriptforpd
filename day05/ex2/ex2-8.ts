// // --- 1. กำหนด Interface (Type) เพื่อความถูกต้องของ TypeScript ---
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

// // Interface ใหม่สำหรับผลลัพธ์ของ Exercise 8
// interface PurchaseSummary {
//   purchaseId: number;
//   customer: string;
// }

// // --- 2. รวมฟังก์ชัน Exercise 1 - 8 ---

// // Ex 1: นับจำนวน
// function loadPurchaseData(purchases: Purchase[]): number {
//   return purchases ? purchases.length : 0;
// }

// // Ex 2: รวมชื่อและราคา
// function mergePurchasesWithItems(itemDetails: ItemDetail[], purchases: Purchase[]): Purchase[] {
//   return purchases.map(purchase => ({
//     ...purchase,
//     items: purchase.items.map(pItem => {
//       // ระบุ Type (i: ItemDetail) เพื่อแก้ Error ในรูปของคุณ
//       const detail = itemDetails.find((i: ItemDetail) => i.itemId === pItem.itemId);
//       return {
//         ...pItem,
//         name: detail ? detail.name : "Unknown",
//         price: detail ? detail.price : 0
//       };
//     })
//   }));
// }

// // Ex 3: เพิ่มสินค้า
// function addItemToPurchase(purchase: Purchase, newItem: PurchaseItem): Purchase {
//   purchase.items.push(newItem);
//   return purchase;
// }

// // Ex 4: ลบสินค้า
// function removeItemFromPurchase(purchase: Purchase, itemId: number): Purchase {
//   purchase.items = purchase.items.filter(item => item.itemId !== itemId);
//   return purchase;
// }

// // Ex 5: แก้ไขจำนวน
// function replaceItemQuantity(purchase: Purchase, itemId: number, quantity: number): Purchase {
//   purchase.items = purchase.items.map(item => {
//     if (item.itemId === itemId) {
//       return { ...item, quantity };
//     }
//     return item;
//   });
//   return purchase;
// }

// // Ex 6: ค้นหาด้วย ID
// function findPurchaseById(purchases: Purchase[], purchaseId: number): Purchase | undefined {
//   return purchases.find(p => p.purchaseId === purchaseId);
// }

// // Ex 7: กรองตามชื่อลูกค้า
// function filterPurchasesByCustomer(purchases: Purchase[], customer: string): Purchase[] {
//   return purchases.filter(p => p.customer === customer);
// }

// // Ex 8: สรุปข้อมูล (Map Summary)
// function mapPurchaseSummary(purchases: Purchase[]): PurchaseSummary[] {
//   // แปลง Array จากข้อมูลใบเสร็จเต็มรูปแบบ ให้เหลือแค่รหัสและชื่อลูกค้า
//   return purchases.map(p => ({
//     purchaseId: p.purchaseId,
//     customer: p.customer
//   }));
// }

// const allPurchases: Purchase[] = [
//   { purchaseId: 1, customer: "Alice", items: [{ itemId: 1, quantity: 5 }] },
//   { purchaseId: 2, customer: "Charlie", items: [{ itemId: 2, quantity: 1 }] }
// ];

// const summary = mapPurchaseSummary(allPurchases);
// console.log(summary);
// // ผลลัพธ์: [ { purchaseId: 1, customer: "Alice" }, { purchaseId: 2, customer: "Charlie" } ]