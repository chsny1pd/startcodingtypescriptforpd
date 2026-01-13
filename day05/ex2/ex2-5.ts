// // --- Interfaces ---
// interface PurchaseItem {
//   itemId: number;
//   quantity: number;
//   name?: string;
//   price?: number;
// }

// interface Purchase {
//   purchaseId: number;
//   customer?: string;
//   items: PurchaseItem[];
// }

// interface ItemDetail {
//   itemId: number;
//   name: string;
//   price: number;
// }

// // --- ฟังก์ชันทั้งหมด ---

// // Ex 1: นับจำนวนรายการการซื้อ
// function loadPurchaseData(purchases: Purchase[]): number {
//   return purchases ? purchases.length : 0;
// }

// // Ex 2: รวมชื่อและราคาสินค้า
// function mergePurchasesWithItems(itemDetails: ItemDetail[], purchases: Purchase[]): Purchase[] {
//   return purchases.map(purchase => ({
//     ...purchase,
//     items: purchase.items.map(pItem => {
//       const detail = itemDetails.find(i => i.itemId === pItem.itemId);
//       return {
//         ...pItem,
//         name: detail ? detail.name : "Unknown",
//         price: detail ? detail.price : 0
//       };
//     })
//   }));
// }

// // Ex 3: เพิ่มสินค้าใหม่ (Push)
// function addItemToPurchase(purchase: Purchase, newItem: PurchaseItem): Purchase {
//   purchase.items.push(newItem);
//   return purchase;
// }

// // Ex 4: ลบสินค้าออก (Remove)
// function removeItemFromPurchase(purchase: Purchase, itemId: number): Purchase {
//   purchase.items = purchase.items.filter(item => item.itemId !== itemId);
//   return purchase;
// }

// // Ex 5: แก้ไขจำนวนสินค้า (Replace)
// function replaceItemQuantity(purchase: Purchase, itemId: number, quantity: number): Purchase {
//   purchase.items = purchase.items.map(item => {
//     // ถ้าเจอ itemId ที่ตรงกัน ให้เปลี่ยนจำนวน (quantity) เป็นค่าใหม่
//     if (item.itemId === itemId) {
//       return { ...item, quantity: quantity };
//     }
//     return item;
//   });
//   return purchase;
// }

// // --- ตัวอย่างการทดสอบ Ex 5 ---
// const myPurchase: Purchase = {
//   purchaseId: 1,
//   items: [
//     { itemId: 1, quantity: 3 },
//     { itemId: 22, quantity: 5 }
//   ]
// };

// // เปลี่ยนสินค้า itemId: 1 ให้เป็น 10 ชิ้น
// replaceItemQuantity(myPurchase, 1, 10);

// console.log(myPurchase.items); 
// // Output: [{ itemId: 1, quantity: 10 }, { itemId: 22, quantity: 5 }]