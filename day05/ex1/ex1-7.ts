// interface Student7 {
//     name: string;
//     age: number; 
//     average : number;
// }

// function filterStudentsByAverage(students: Student7[],minAverage: number): Student7[] {
//     // ใช้ [...students] เพื่อสร้าง Array ใหม่ (ไม่ให้ข้อมูลต้นฉบับเสียหาย)
//     // แล้วใช้ .sort() ในการจัดเรียง
//     return students.filter((student) => {
//         // เงื่อนไข: คะแนนเฉลี่ยต้อง >= ค่า minAverage ที่รับมา
//         return student.average >= minAverage;
//     });   
// }

// const exampleStudent: Student7[] = [
//   { name: "Fahsai",age: 18,average: 85 },
//   { name: "Fahs",age: 19,average: 95 },
//   { name: "Pordee",age: 20,average: 80 },
//   { name: "Pordee",age: 20,average: 90 },
// ]

// const filterList = filterStudentsByAverage(exampleStudent,85);
// console.log(filterList);