angular.module("DME").controller("welcomeToProvo", function($scope, $stateParams, $timeout, $location, mainSrv){
  $scope.switchHousing = () => {
    $timeout(() => {
      $location.path("experience/provohousing");
      $scope.$apply();
    }, 700);
  };
  $scope.switchChoice = () => {
    $timeout(() => {
      $location.path("experience/locationchoice");
      $scope.$apply();
    }, 700);
  };
})
