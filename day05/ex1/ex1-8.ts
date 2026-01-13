interface Student {
    name: string;
    age: number;
    province: string;
    scores: number[]; // คะแนนดิบ
}

interface StudentSummary {
    name: string;
    age: number;
    province: string;
    averageScore: number; // คะแนนที่คำนวณแล้ว
}

function printStudentSummary(students: Student[]): StudentSummary[] {
    // ใช้ .map() เพื่อสร้าง Array ใหม่ที่มีโครงสร้างตามที่ต้องการ
    return students.map((student) => {
        // คำนวณค่าเฉลี่ย (อิงจาก Exercise 2)
        const total = student.scores.reduce((sum, s) => sum + s, 0);
        const average = total / student.scores.length;

        // ส่งคืน Object ชุดใหม่ที่มีแค่ข้อมูลที่โจทย์สั่ง
        return {
            name: student.name,
            age: student.age,
            province: student.province,
            averageScore: average
        };
    });
}

// --- ตัวอย่างการใช้งาน ---
const studentData: Student[] = [
    { name: "Fahsai", age: 20, province: "Bangkok", scores: [80, 90] },
    { name: "Pordee", age: 22, province: "Chiang Mai", scores: [70, 75] }
];

const summaries = printStudentSummary(studentData);
console.log(JSON.stringify(summaries, null, 2));