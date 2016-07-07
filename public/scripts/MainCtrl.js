angular
    .module('avengers')
    .controller('MainCtrl', function($scope, dataService) {

        $scope.avengers = dataService.getAvengers();

        $scope.test = 'hey';

    });