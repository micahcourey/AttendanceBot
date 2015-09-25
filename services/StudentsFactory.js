attendanceBot.factory("StudentsFactory", function StudentsFactory() {
  var factory = {};
  factory.students = [
    { name: "Sam Schmidt", here: false },
    { name: "Jessica Martin", here: false },
    { name: "Sandy Smith", here: false},
    { name: "Ryan Samuels", here: false },
    { name: "Brentwood Davis", here: false }
  ];

  return factory;
});
