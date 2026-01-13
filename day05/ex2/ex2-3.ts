// --- 1. Definition of Interfaces (โครงสร้างข้อมูล) ---

interface Item {
  itemId: number;
  name: string;
  price: number;
}

interface PurchaseItem {
  itemId: number;
  quantity: number;
  name?: string;  // รองรับข้อมูลที่จะ Merge เข้ามาใน Ex 2
  price?: number;
}

interface Purchase {
  purchaseId: number;
  customer: string;
  items: PurchaseItem[];
}

// --- 2. Exercise Functions ---

/**
 * Exercise 1: นับจำนวนรายการการซื้อ
 */
function loadPurchaseData(purchases: Purchase[]): number {
  if (!purchases) return 0;
  return purchases.length;
}

/**
 * Exercise 2: รวมข้อมูลชื่อและราคาสินค้าเข้ากับรายการซื้อ
 */
function mergePurchasesWithItems(items: Item[], purchases: Purchase[]): Purchase[] {
  return purchases.map(purchase => {
    return {
      ...purchase,
      items: purchase.items.map(pItem => {
        const detail = items.find(i => i.itemId === pItem.itemId);
        return {
          ...pItem,
          name: detail ? detail.name : "Unknown",
          price: detail ? detail.price : 0
        };
      })
    };
  });
}

/**
 * Exercise 3: เพิ่มสินค้าใหม่เข้าไปในรายการซื้อเดิม
 */
function addItemToPurchase(purchase: Purchase, newItem: PurchaseItem): Purchase {
  // ใช้ .push เพื่อเพิ่มข้อมูลใหม่ต่อท้าย Array เดิม
  purchase.items.push(newItem);
  return purchase;
}

// --- 3. ตัวอย่างการรันโค้ด (Testing) ---

const items: Item[] = [
  { itemId: 1, name: "Notebook", price: 50 },
  { itemId: 2, name: "Pen", price: 10 }
];

let purchases: Purchase[] = [
  {
    purchaseId: 1,
    customer: "Alice",
    items: [{ itemId: 1, quantity: 3 }]
  }
];

// ทดสอบ Ex 1
console.log("Total records:", loadPurchaseData(purchases)); // Output: 1

// ทดสอบ Ex 3: เพิ่มสินค้าใหม่รหัส 4 (ยังไม่มีในคลัง)
addItemToPurchase(purchases[0], { itemId: 4, quantity: 1 });

// ทดสอบ Ex 2: Merge ข้อมูลเพื่อดูชื่อและราคา
const finalResult = mergePurchasesWithItems(items, purchases);
console.log(JSON.stringify(finalResult, null, 2));