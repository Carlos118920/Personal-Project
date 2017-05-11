angular.module("DME").controller("homeCtrl", function($scope, $timeout, $location, mainSrv){
  $scope.switchApply = () => {
    $timeout(() => {
      $location.path("application");
      $scope.$apply();
    }, 700);
  };
  $scope.switchDown = () => {
    $timeout(() => {
      $location.path("experience/locationchoice");
      $scope.$apply();
    }, 700);
  };
})
