// interface Student2 {
//     name: string;
//     scores: number[];
// }

// function calculateStudentAverage(data: Student2): number {
//     if (data.scores.length === 0) return 0;
    
//     const totalScore = data.scores.reduce((sum, current) => sum + current, 0);

//     return totalScore / data.scores.length;
// }

// const exampleStudent: Student2 = {
//     name: "Fahsai",
//     scores: [80, 90, 85] // ตัวอย่างคะแนน
// };

// const average = calculateStudentAverage(exampleStudent);
// console.log(average); // Output: 85