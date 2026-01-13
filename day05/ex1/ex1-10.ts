interface Student {
    name: string;
    age: number;
    scores: number[];
}

interface RankedStudent {
    name: string;
    age: number;
    averageScore: number;
    rank: number; // เพิ่มฟิลด์อันดับ
}

function rankStudents(students: Student[]): RankedStudent[] {
    // 1. คำนวณค่าเฉลี่ยและเก็บไว้ในรูปแบบใหม่ก่อน
    const studentWithAverage = students.map(s => ({
        name: s.name,
        age: s.age,
        averageScore: s.scores.reduce((sum, score) => sum + score, 0) / s.scores.length
    }));

    // 2. เรียงลำดับตามคะแนนเฉลี่ยจาก มาก -> น้อย (Descending)
    studentWithAverage.sort((a, b) => b.averageScore - a.averageScore);

    // 3. กำหนดอันดับ (Handling Ties: ถ้าคะแนนเท่ากัน อันดับต้องเหมือนกัน)
    let currentRank = 1;
    return studentWithAverage.map((student, index, array) => {
        // ถ้าไม่ใช่คนแรก และคะแนนเท่ากับคนก่อนหน้า ให้ใช้อันดับเดิม
        if (index > 0 && student.averageScore === array[index - 1].averageScore) {
            // อันดับไม่ต้องเปลี่ยน
        } else {
            // ถ้าคะแนนไม่เท่า ให้ลำดับเป็นตำแหน่งจริงใน Array (index + 1)
            currentRank = index + 1;
        }

        return {
            ...student,
            rank: currentRank
        };
    });
}

// --- ตัวอย่างการใช้งาน ---
const studentData: Student[] = [
    { name: "Fahsai", age: 20, scores: [90, 95] }, // Avg: 92.5
    { name: "Pordee", age: 22, scores: [80, 85] }, // Avg: 82.5
    { name: "Somchai", age: 21, scores: [90, 95] }  // Avg: 92.5 (เท่ากับ Fahsai)
];

const ranked = rankStudents(studentData);
console.log(JSON.stringify(ranked, null, 2));