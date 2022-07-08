function isGradeAPlus(examtype, marks) {
  let baseAPGradeMarks;
  if (examtype === "Final-exam") {
    baseAPGradeMarks = 90;
  } else {
    baseAPGradeMarks = 89;
  }

  if (marks >= baseAPGradeMarks && marks <= 100) {
    return true;
  } else {
    return false;
  }
}

console.log(isGradeAPlus("Final-exam", 89));
console.log(isGradeAPlus("Final-exam", 90));
console.log(isGradeAPlus("Internals", 89));
console.log(isGradeAPlus("Internals", 89));
console.log(isGradeAPlus("Normal-exam", 70));
console.log(isGradeAPlus("Normal-exam", 90));
