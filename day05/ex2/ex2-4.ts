
// --- 1. กำหนด Interface สำหรับทั้งโปรเจกต์ ---
interface PurchaseItem {
  itemId: number;
  quantity: number;
  name?: string;
  price?: number;
}

interface Purchase {
  purchaseId: number;
  customer?: string;
  items: PurchaseItem[];
}

interface ItemDetail {
  itemId: number;
  name: string;
  price: number;
}

// --- 2. ฟังก์ชันแต่ละ Exercise ---

// Exercise 1: นับจำนวนรายการการซื้อ
function loadPurchaseData(purchases: Purchase[]): number {
  return purchases ? purchases.length : 0;
}

// Exercise 2: รวมชื่อและราคาสินค้า
function mergePurchasesWithItems(itemDetails: ItemDetail[], purchases: Purchase[]): Purchase[] {
  return purchases.map(purchase => ({
    ...purchase,
    items: purchase.items.map(pItem => {
      const detail = itemDetails.find(i => i.itemId === pItem.itemId);
      return {
        ...pItem,
        name: detail ? detail.name : "Unknown",
        price: detail ? detail.price : 0
      };
    })
  }));
}

// Exercise 3: เพิ่มสินค้าใหม่ (Push)
function addItemToPurchase(purchase: Purchase, newItem: PurchaseItem): Purchase {
  purchase.items.push(newItem);
  return purchase;
}

// Exercise 4: ลบสินค้าออก (Remove)
function removeItemFromPurchase(purchase: Purchase, itemId: number): Purchase {
  // กรองเอาเฉพาะสินค้าที่ itemId "ไม่ตรงกับ" ตัวที่ต้องการลบ
  purchase.items = purchase.items.filter(item => item.itemId !== itemId);
  return purchase;
}

// --- 3. ตัวอย่างการใช้งานตามโจทย์ Ex 4 ---
const myPurchase: Purchase = {
  purchaseId: 1,
  items: [
    { itemId: 1, quantity: 3 },
    { itemId: 2, quantity: 5 }
  ]
};

// สั่งลบสินค้าที่มี itemId เท่ากับ 2
removeItemFromPurchase(myPurchase, 2);

console.log(myPurchase.items); // ผลลัพธ์จะเหลือแค่รายการ itemId: 1