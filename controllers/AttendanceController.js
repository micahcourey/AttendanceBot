attendanceBot.controller('AttendeanceCtrl', function AttendanceCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.addStudentsHere = function(student) {
    students.isHere = true;
  };
});
