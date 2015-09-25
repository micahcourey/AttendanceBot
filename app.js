var attendanceBot = angular.module('attendanceBot', ['ui.router']);

attendanceBot.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('students', {
    url:"/students",
    controller: "partials/students.html",
    controller: "StudentsCtrl"
  });
});
