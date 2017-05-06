angular.module("DME").controller("jobSearchCtrl", function($scope, $timeout, $location, mainSrv){
  $scope.switchLearn = () => {
    $timeout(() => {
      $location.path("experience/learn");
      $scope.$apply();
    }, 700);
  };
  $scope.switchApply = () => {
    $timeout(() => {
      $location.path("experience/apply");
      $scope.$apply();
    }, 700);
  };
})
