angular.module("DME").controller("provoHousing", function($scope, $timeout, $location, mainSrv){
  $scope.switchUp = () => {
    $timeout(() => {
      $location.path("experience/welcometoprovo");
      $scope.$apply();
    }, 2000);
  };
  $scope.switchDown = () => {
    $timeout(() => {
      $location.path("experience/learn");
      $scope.$apply();
    }, 2000);
  };
})
