angular.module("DME").directive("transitionIn", function($location, $timeout){
  return {
    restrict: "A",
    link: (scope, element, attributes) => {
      $timeout(() => {
        TweenMax.to(".transitionWhite", 0.50, {top: "100%"})
        TweenMax.to(".transitionWhite", 0.20, {transform: "rotate(15deg)"})
        TweenMax.to(".transitionWhite", 0.30, { delay: 0.20, transform: "rotate(0deg)"})
        TweenMax.to(".transitionBlue", 0.50, { delay: 0.15, top: "100%"})
        TweenMax.to(".transitionBlue", 0.20, { delay: 0.15, transform: "rotate(15deg)"})
        TweenMax.to(".transitionBlue", 0.30, { delay: 0.35, transform: "rotate(0deg)"})
      }, 100);
    }
  }
})
