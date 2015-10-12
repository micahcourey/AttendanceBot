attendanceBot.controller('TeachersCtrl', function TeachersCtrl($scope, $stateParams, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;
});
