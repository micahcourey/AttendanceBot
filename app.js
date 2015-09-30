var attendanceBot = angular.module('attendanceBot', ['ui.router']);

attendanceBot.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('students', {
    url: "/students",
    templateUrl: "partials/students.html",
    controller: "StudentsCtrl"
  });

  $stateProvider.state('teachers', {
    url: "/teachers",
    templateUrl: "partials/teachers.html",
    controller: "TeachersCtrl"
  });
});
