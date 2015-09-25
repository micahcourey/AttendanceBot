attendanceBot.controller('AttendanceCtrl', function AttendanceCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.addStudentsHere = function(student) {
    student.isHere = true;
  };
});
