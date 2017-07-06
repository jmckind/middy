var middyApp = angular.module('middyApp', ['ui.router']);

middyApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  var states = [
    {
      name: 'dashboard',
      url: '/',
      component: 'dashboardController'
    }
  ];

  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});
