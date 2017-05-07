angular.module("DME").controller("welcomeToProvo", function($scope, $stateParams, $timeout, $location, mainSrv){
  $scope.switchDown = () => {
    $timeout(() => {
      $location.path("experience/provohousing");
      $scope.$apply();
    }, 700);
  };
  $scope.switchUp = () => {
    $timeout(() => {
      $location.path("experience/locationchoice");
      $scope.$apply();
    }, 700);
  };
})
