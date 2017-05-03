angular.module("DME").controller("homeCtrl", function($scope, $timeout, $location, mainSrv){
  TweenMax.to(".homeTitle", 1, {delay: 0.60, color: "rgb(19, 182, 247)"})
  $scope.switchApply = () => {
    $timeout(() => {
      $location.path("application");
      $scope.$apply();
    }, 700);
  };
  $scope.switchExperience = () => {
    $timeout(() => {
      $location.path("experience/locationchoice");
      $scope.$apply();
    }, 700);
  };
})
