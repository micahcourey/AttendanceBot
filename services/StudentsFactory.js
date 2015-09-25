attendanceBot.factory("StudentsFactory", function StudentsFactory() {
  var factory = {};
  factory.students = [];
  factory.addStudent = function() {
    factory.students.push({["Micah Courey", "Micah"]});
  };
});
