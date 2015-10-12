attendanceBot.controller('HeadersCtrl', function HeadersCtrl($scope, $location) {
  $scope.currentPath = $location.path();
});
