// interface Student9 {
//     name: string;
//     province: string;
// }

// function countStudentsByProvince(students: Student9[]): Record<string, number> {
//     return students.reduce((summary, student) => {
//         const province = student.province;
        
//         // ถ้าจังหวัดนี้ยังไม่มีใน summary ให้เริ่มที่ 0 แล้วบวก 1
//         // ถ้ามีอยู่แล้ว ก็ให้บวกเพิ่มจากค่าเดิม
//         summary[province] = (summary[province] || 0) + 1;
        
//         return summary;
//     }, {} as Record<string, number>); // เริ่มต้นด้วย Object ว่าง {}
// }

// // --- ตัวอย่างการใช้งาน ---
// const studentList: Student9[] = [
//     { name: "Fahsai", province: "Bangkok" },
//     { name: "Pordee", province: "Chiang Mai" },
//     { name: "Somchai", province: "Bangkok" },
//     { name: "Somsri", province: "Phuket" }
// ];

// const provinceCount = countStudentsByProvince(studentList);
// console.log(JSON.stringify(provinceCount, null, 2));