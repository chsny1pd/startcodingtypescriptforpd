function validateUsername(username : string) {
  // 1. ตรวจสอบว่า username เป็นค่าว่างหรือไม่
  // ใช้ .trim() เพื่อเช็คกรณีที่มีแต่ช่องว่าง (Space) ด้วย
  if (username.trim() === "") {
    
    // 2. สร้าง Error object ขึ้นมาใหม่
    const error = new Error();
    
    // 3. กำหนด Custom Name และ Message ตามโจทย์ (โดยไม่ใช้ class)
    error.name = "ValidationError"; // หรือชื่ออื่นที่ต้องการ
    error.message = "username cannot be empty";
    
    // 4. พ่น (throw) error ออกไป
    throw error;
  }

  // ถ้าไม่ว่าง ก็ทำงานต่อตามปกติ
  return "Username is valid!";
}

// --- การนำไปใช้งาน (Test) ---
try {
  validateUsername(""); // ลองใส่ค่าว่าง
} catch (err) {
  if (err instanceof Error) {
  console.log(`${err.name}: ${err.message}`); // ใช้ if (err instanceof Error) เพื่อยืนยันกับ TS ว่า "เฮ้ย นี่คือ Error ของจริงนะ"
  // Output: ValidationError: username cannot be empty
  }
}