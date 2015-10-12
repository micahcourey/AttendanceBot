attendanceBot.controller('StudentsCtrl', function StudentsCtrl($scope, $stateParams, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;
});
