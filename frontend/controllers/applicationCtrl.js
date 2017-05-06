angular.module("DME").controller("applicationCtrl", function($scope, $timeout, $location, mainSrv){
  $scope.courses = mainSrv.getCourses().then((response) => {
        $scope.courses = response;
    })
  $scope.surveySwitch = (id) => {
    $timeout( () => {
      $location.path("coursesurvey/" + id);
      $scope.$apply();
    }, 700);
  }
})
