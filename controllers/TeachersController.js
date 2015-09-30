attendanceBot.controller('TeachersCtrl', function TeachersCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;
});
