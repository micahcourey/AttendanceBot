attendanceBot.factory("StudentsFactory", function StudentsFactory() {
  var factory = {};
  factory.students = [
    { name: "Sam Schmidt" },
    { name: "Jessica Martin" },
    { name: "Sandy Smith" },
    { name: "Ryan Samuels" },
    { name: "Brentwood Davis" }
  ];
  factory.addStudent = function() {
    factory.students.push({ name: factory.studentName });
  };

  return factory;
});
