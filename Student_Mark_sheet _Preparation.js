const students = [
  { name: "Dhishan Debnath", Roll: 1 },
  { name: "Animesh Gupta", Roll: 2 },
  { name: "Tapas Sen", Roll: 3 },
  { name: "Misti Dutta", Roll: 4 },
  { name: "Chini Misra", Roll: 5 }
];

const details = [
  { Roll: 5, subjects: { math: 35, english: 56, chemistry: 76, computer: 68 } },
  { Roll: 3, subjects: { math: 33, chemistry: 12, computer: 50, english: 35 } },
  { Roll: 1, subjects: { math: 55, english: 75, chemistry: 76, computer: 94 } },
  { Roll: 4, subjects: { english: 12, chemistry: 85, computer: 68, math: 45 } },
  { Roll: 2, subjects: { math: 55, english: 56, computer: 48, chemistry: 12 } }
];

function generateStudentMarkSheets(students, details) {
  let output = "const studentsMarkSheets = [\n";

  students.forEach(student => {
    const { name, Roll } = student;
    const { subjects } = details.find(detail => detail.Roll === Roll) || { subjects: {} };
    const total = Object.values(subjects).reduce((sum, mark) => sum + mark, 0);
    const status = total >= 200 ? "pass" : "fail";

    output += `{ name: "${name}", Roll: ${Roll}, math: ${subjects.math || 0}, english: ${subjects.english || 0}, chemistry: ${subjects.chemistry || 0}, computer: ${subjects.computer || 0}, total: ${total}, status: "${status}" },\n`;
  });

  output += "];";

  console.log(output);
}
generateStudentMarkSheets(students, details);
