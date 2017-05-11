angular.module("DME").controller("applyCtrl", function($scope, $timeout, $location, mainSrv){
  $scope.switchUp = () => {
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
  // $scope.locationData = mainSrv.getLocationData().then(function(response){
  //   $scope.locationData = response;
  //
  //   mainSrv.getTravelData(response.city, response.regionName).then(function(response2){
  //     $scope.distance = response2.data.rows["0"].elements["0"].distance.text;
  //     $scope.time = response2.data.rows["0"].elements["0"].duration.text;
  //     console.log(response2.data.rows);
  //   })
  // });
})
