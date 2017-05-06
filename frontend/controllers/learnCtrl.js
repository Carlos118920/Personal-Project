angular.module("DME").controller("learnCtrl", function($scope, $timeout, $location, mainSrv){
  let $slides	= $(".learnSlides");
  let currentSlide = 0;
  TweenMax.set($slides.filter(":gt(0)"), {left:"100%"});

  $scope.nextSlide = () => {
      TweenMax.to( $slides.eq(currentSlide), 1, {left:"-100%"} );
      if (currentSlide < $slides.length - 1) {
        currentSlide++;
      }
      else {
        currentSlide = 0;
      }
      TweenMax.fromTo( $slides.eq(currentSlide), 1, {left: "100%"}, {left:"0px"} );
  }

  $scope.prevSlide = () => {
    TweenMax.to( $slides.eq(currentSlide), 1, {left:"100%"} );
    if (currentSlide >  0) {
      currentSlide--;
    }
    else {
      currentSlide = $slides.length - 1;
    }
    TweenMax.fromTo( $slides.eq(currentSlide), 1, {left: "-100%"}, {left:"0px"} );
  }

  $scope.switchHousing = () => {
    $timeout(() => {
      $location.path("experience/provohousing");
      $scope.$apply();
    }, 1075);
  };
  $scope.switchJobSearch = () => {
    $timeout(() => {
      $location.path("experience/jobsearch");
      $scope.$apply();
    }, 1075);
  };
})
