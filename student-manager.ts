interface Course {
  id: string;
  name: string;
  score: number;
}

class Student {
  id: string;
  name: string;
  courses: Course[];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.courses = [];
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  getAverageScore(): number {
    if (this.courses.length === 0) {
      return 0;
    }
    const totalScore = this.courses.reduce((sum, course) => sum + course.score, 0);
    return totalScore / this.courses.length;
  }
}

const student1 = new Student('S001', 'David');
student1.addCourse({ id: 'C101', name: 'Math', score: 85 });
student1.addCourse({ id: 'C102', name: 'Physics', score: 90 });
student1.addCourse({ id: 'C103', name: 'English', score: 78 });

const student2 = new Student('S002', 'Eve');
student2.addCourse({ id: 'C201', name: 'History', score: 92 });
student2.addCourse({ id: 'C202', name: 'Art', score: 88 });


console.log('\n--- การจัดการนักเรียน ---');
console.log(`\nข้อมูลของนักเรียน: ${student1.name}`);
student1.courses.forEach(course => {
  console.log(`- ${course.name} (คะแนน: ${course.score})`);
});
console.log(`คะแนนเฉลี่ย: ${student1.getAverageScore().toFixed(2)}`);

console.log(`\nข้อมูลของนักเรียน: ${student2.name}`);
student2.courses.forEach(course => {
  console.log(`- ${course.name} (คะแนน: ${course.score})`);
});
console.log(`คะแนนเฉลี่ย: ${student2.getAverageScore().toFixed(2)}`);
