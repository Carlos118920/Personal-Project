angular.module("DME").controller("locationChoiceCtrl", function($scope, $timeout, $location, mainSrv){
  $scope.switchProvo = () => {
    $timeout(() => {
      $location.path("experience/welcometoprovo");
      $scope.$apply();
    }, 1200);
  };
  $scope.switchUp = () => {
    $timeout(() => {
      $location.path("home");
      $scope.$apply();
    }, 1200);
  };
})
