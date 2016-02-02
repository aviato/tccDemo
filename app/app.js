angular.module('tccDemo', ['msConfig'])
  .controller('MainAppCtrl', function($scope) {
    $scope.appData = {};
    $scope.checkMakeValue = function() {
      if ($scope.appData.make) {
        return true;
      }
      return false;
    };
  });




