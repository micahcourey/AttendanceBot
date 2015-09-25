var attendanceBot = angular.module('attendanceBot', ['ui.router']);

attendanceBot.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });
});
