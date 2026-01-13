// // --- 1. กำหนด Interface (Type) ---
// interface ItemDetail {
//   itemId: number;
//   name: string;
//   price: number;
// }

// interface PurchaseItem {
//   itemId: number;
//   quantity: number;
//   name?: string; // สำคัญสำหรับ Ex 9
//   price?: number;
// }

// interface Purchase {
//   purchaseId: number;
//   customer: string;
//   items: PurchaseItem[];
// }

// // Interface ใหม่สำหรับผลลัพธ์ของ Exercise 8
// interface PurchaseSummary {
//   purchaseId: number;
//   customer: string;
// }

// // Interface สำหรับผลลัพธ์ของ Exercise 9
// interface ItemHistory {
//   purchaseId: number;
//   customer: string;
//   quantity: number;
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

// // Exercise 9: ดูประวัติการซื้อของสินค้าชิ้นหนึ่ง
// function getItemPurchaseHistory(purchases: Purchase[], itemName: string): ItemHistory[] {
//   const history: ItemHistory[] = [];

//   purchases.forEach(purchase => {
//     // หาว่าในใบเสร็จนี้ มีสินค้าชื่อที่ตรงกันไหม
//     const matchedItem = purchase.items.find(item => item.name === itemName);
    
//     if (matchedItem) {
//       // ถ้าเจอ ให้เก็บข้อมูลรหัสใบเสร็จ, ชื่อลูกค้า และจำนวนที่ซื้อ
//       history.push({
//         purchaseId: purchase.purchaseId,
//         customer: purchase.customer,
//         quantity: matchedItem.quantity
//       });
//     }
//   });

//   return history;
// }

// //  Exercise 10 (หัวใจหลัก) ---
// function buildPurchasesSnapshot(purchases: Purchase[], customer?: string): PurchaseSummary[] {
//   // กรองข้อมูลตามเงื่อนไข (ถ้ามีชื่อลูกค้าให้กรอง ถ้าไม่มีให้เอาทั้งหมด)
//   const filtered = customer 
//     ? purchases.filter(p => p.customer === customer) 
//     : purchases;

//   // แปลงข้อมูลให้เหลือเฉพาะ ID และชื่อลูกค้า (เหมือน Ex 8)
//   return filtered.map(p => ({
//     purchaseId: p.purchaseId,
//     customer: p.customer
//   }));
// }

// const mockItems = [
//   { itemId: 1, name: "Mouse", price: 500 },
//   { itemId: 2, name: "Keyboard", price: 1000 }
// ];

// const mockPurchases: Purchase[] = [
//   { purchaseId: 1, customer: "Alice", items: [{ itemId: 1, quantity: 3 }] },
//   { purchaseId: 4, customer: "Alice", items: [{ itemId: 2, quantity: 1 }] },
//   { purchaseId: 7, customer: "Bob", items: [{ itemId: 1, quantity: 2 }] }
// ];

// // --- 5. ทดสอบการใช้งาน Exercise 10 ---
// const mergedData = mergePurchasesWithItems(mockItems, mockPurchases);

// // แบบที่ 1: ระบุชื่อลูกค้า "Alice"
// const aliceSnapshot = buildPurchasesSnapshot(mergedData, "Alice");
// console.log("Alice Snapshot:", aliceSnapshot); 

// // แบบที่ 2: ไม่ระบุชื่อลูกค้า (จะมาทั้งหมด)
// const allSnapshot = buildPurchasesSnapshot(mergedData);
// console.log("All Snapshot:", allSnapshot);