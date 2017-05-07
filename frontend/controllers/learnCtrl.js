angular.module("DME").controller("learnCtrl", function($scope, $timeout, $location, mainSrv){
  $scope.switchUp = () => {
    $timeout(() => {
      $location.path("experience/provohousing");
      $scope.$apply();
    }, 700);
  };
  $scope.switchDown = () => {
    $timeout(() => {
      $location.path("experience/jobsearch");
      $scope.$apply();
    }, 700);
  };
})
