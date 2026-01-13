// interface Student5 {
//     name: string;
//     age: number; 
// }

// function sortStudentsByAge(students: Student5[]): Student5[] {
//     // ใช้ [...students] เพื่อสร้าง Array ใหม่ (ไม่ให้ข้อมูลต้นฉบับเสียหาย)
//     // แล้วใช้ .sort() ในการจัดเรียง
//     return [...students].sort((a, b) => {
//         return a.age - b.age; // ถ้าผลลัพธ์เป็นลบ a จะมาก่อน b (น้อยไปมาก)
//     });
// }

// const exampleStudent: Student5[] = [
//   { name: "Fahsai",age: 18 },
//   { name: "Fahs",age: 19 },
//   { name: "Pordee",age: 20 },
// ]

// const sortedList = sortStudentsByAge(exampleStudent);
// console.log(sortedList);