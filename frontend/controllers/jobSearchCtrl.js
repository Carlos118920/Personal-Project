angular.module("DME").controller("jobSearchCtrl", function($scope, $timeout, $location, mainSrv){
  $scope.switchUp = () => {
    $timeout(() => {
      $location.path("experience/learn");
      $scope.$apply();
    }, 700);
  };
  $scope.switchDown = () => {
    $timeout(() => {
      $location.path("experience/apply");
      $scope.$apply();
    }, 700);
  };
})
