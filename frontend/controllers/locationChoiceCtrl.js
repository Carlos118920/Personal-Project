angular.module("DME").controller("locationChoiceCtrl", function($scope, $timeout, $location, mainSrv){
  $scope.switchProvo = () => {
    $timeout(() => {
      $location.path("experience/welcometoprovo");
      $scope.$apply();
    }, 1200);
  };
  $scope.switchUp = () => {
    $timeout(() => {
      $location.path("home");
      $scope.$apply();
    }, 1200);
  };
  mainSrv.getLocationData().then(function(response){
    $scope.dallasDistance = response.data.rows["0"].elements["0"].distance.text;
    $scope.dallasTime = response.data.rows["0"].elements["0"].duration.text;
    $scope.provoDistance = response.data.rows["0"].elements["1"].distance.text;
    $scope.provoTime = response.data.rows["0"].elements["1"].duration.text;
    $scope.saltLakeCityDistance = response.data.rows["0"].elements["2"].distance.text;
    $scope.saltLakeCityTime = response.data.rows["0"].elements["2"].duration.text;
  });
})
