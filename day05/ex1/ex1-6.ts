// interface Student6 {
//     name: string;
//     age: number; 
//     average : number;
// }

// function sortStudentsByAge(students: Student6[]): Student6[] {
//     // ใช้ [...students] เพื่อสร้าง Array ใหม่ (ไม่ให้ข้อมูลต้นฉบับเสียหาย)
//     // แล้วใช้ .sort() ในการจัดเรียง
//     return [...students].sort((a, b) => {
//         if (a.age !== b.age){
//         return a.age - b.age;} 
//         else {
//           return b.average - a.average
//         }
//     });
// }

// const exampleStudent: Student6[] = [
//   { name: "Fahsai",age: 18,average: 95 },
//   { name: "Fahs",age: 19,average: 95 },
//   { name: "Pordee",age: 20,average: 95 },
//   { name: "Pordee",age: 20,average: 90 },
// ]

// const sortedList = sortStudentsByAge(exampleStudent);
// console.log(sortedList);