angular.module("DME").controller("provoHousing", function($scope, $timeout, $location, mainSrv){
  $scope.switchWelcome = () => {
    $timeout(() => {
      $location.path("experience/welcometoprovo");
      $scope.$apply();
    }, 1700);
  };
  $scope.switchLearn = () => {
    $timeout(() => {
      $location.path("experience/learn");
      $scope.$apply();
    }, 1700);
  };
})
