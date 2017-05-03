angular.module("DME").controller("courseSurvey", function($scope, $stateParams, $timeout, $location, mainSrv){
  $scope.course = mainSrv.getCourse($stateParams.id).then((response) => {
      $scope.course = response[0];
    })
    $scope.switchApply = () => {
      $timeout(() => {
        $location.path("application");
        $scope.$apply();
      }, 700);
    };
  $scope.submitApplication = () => {
    mainSrv.submitApplication($scope.survey, $stateParams.id);
  }
})
