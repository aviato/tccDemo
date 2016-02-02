/*
  Some clarifications (only listed here as they may influence your design):
  1) There's typically a short (up to 4) list of "preferred" vehicle makes depending on dealership (such as Ford /  Lincoln / Mercury); in 95% of all cases customer will pick one of those.
  2) Model years are sorted from newest to older; in most cases customer will pick one of 5 most recent years.
  3) Model depends on make / model year chosen and thus cannot be selected before those 2 are selected.
  4) Similarly, Vehicle Configuration (Trim) cannot be selected before make / year / model are selected.
  5) Mileage and Vehicle Configuration are optional, but customer cannot proceed to the next page until make / year / model are selected.
*/

var generateNewSelect = function() {

};

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




