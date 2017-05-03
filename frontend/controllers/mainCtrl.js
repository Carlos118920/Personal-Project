angular.module("DME").controller("mainCtrl", function($scope, mainSrv){




  // USE ES6





  $scope.nextPage = function(){
    console.log("NextPage clicked!")
  }

  $scope.prevPage = function(){
    console.log("PrevPage clicked!")
  }
  // function switchView(){
  //   $location.path('home');
  //   $scope.$apply();
  // };
})
