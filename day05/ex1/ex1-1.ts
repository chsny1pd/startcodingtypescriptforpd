interface Student {
    id: number;
    name: string;
    // เพิ่ม field อื่นๆ ตามที่ข้อมูลจริงมี
}

function loadStudents(data: Student[]): number {
    return data.length;
}

// ตัวอย่างการใช้งาน (Example Usage)
const studentsJson: Student[] = [
    { id: 1, name: "FS" },
    { id: 2, name: "Fahs" },
    { id: 3, name: "Fahsai" },
    { id: 4, name: "piarfha" },
    { id: 5, name: "fahsai" },
    { id: 6, name: "Pordee" },
    { id: 7, name: "PD" },
    { id: 8, name: "pd" },
    { id: 9, name: "Pd" },
    { id: 10, name: "pordee" }
    
];

const total = loadStudents(studentsJson);
console.log(total); // Output: 10