var attendanceBot = angular.module('attendanceBot', ['ui.router']);

attendanceBot.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
          templateUrl: "partials/header.html",
          controller: "HeadersCtrl"
      },
      'home': {
        templateUrl: "partials/home.html"
      }
    }
  });

  $stateProvider.state('students', {
    url: "/students",
      views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: "HeadersCtrl"
      },
      'body': {
        templateUrl: "partials/students.html",
        controller: "StudentsCtrl"
      }
    }
  });

  $stateProvider.state('teachers', {
    url: "/teachers",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: "HeadersCtrl"
      },
      'body': {
        templateUrl: "partials/teachers.html",
        controller: "TeachersCtrl"
      }
    }
  });
});
