(function(){
  var app = angular.module('whereto', [], function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  });

  var latestLocations = [
    'San Francisco',
    'Seattle',
    'Arizona',
    'San Diego'
  ];

  app.controller('locatorController', function(){
    this.locations = latestLocations;
  });



})();
