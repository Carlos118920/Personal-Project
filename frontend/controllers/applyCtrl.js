angular.module("DME").controller("applyCtrl", function($scope, $timeout, $location, mainSrv){
  $scope.switchJobSearch = () => {
    $timeout(() => {
      $location.path("experience/jobsearch");
      $scope.$apply();
    }, 700);
  };
  $scope.switchApplication = () => {
    $timeout(() => {
      $location.path("application");
      $scope.$apply();
    }, 700);
  };
})
