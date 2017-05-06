angular.module("DME").directive("transitionInMultiple", function($location, $timeout){
  return {
    restrict: "A",
    link: (scope, element, attributes) => {
      $timeout(() => {
        TweenMax.staggerTo(".animationBoxWhite", 0.50, {top: "100%"}, 0.25)
        TweenMax.staggerTo(".animationBoxWhite", 0.20, {transform: "rotate(15deg)"}, 0.25)
        TweenMax.staggerTo(".animationBoxWhite", 0.30, { delay: 0.20, transform: "rotate(0deg)"}, 0.25)
        TweenMax.staggerTo(".animationBoxBlue", 0.50, { delay: 0.15, top: "100%"}, 0.25)
        TweenMax.staggerTo(".animationBoxBlue", 0.20, { delay: 0.15, transform: "rotate(15deg)"}, 0.25)
        TweenMax.staggerTo(".animationBoxBlue", 0.30, { delay: 0.35, transform: "rotate(0deg)"}, 0.25)
      }, 100);
    }
  }
})
