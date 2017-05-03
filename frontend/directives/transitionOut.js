angular.module("DME").directive("transitionOut", function($location, $timeout){
  return {
    restrict: "A",
    link: (scope, element, attributes) => {
      element.on("click", () => {
        TweenMax.to(".transitionBlue", 0.50, {top: 0})
        TweenMax.to(".transitionBlue", 0.20, {transform: "rotate(15deg)"})
        TweenMax.to(".transitionBlue", 0.30, { delay: 0.20, transform: "rotate(0deg)"})
        TweenMax.to(".transitionWhite", 0.50, { delay: 0.10, top: 0})
        TweenMax.to(".transitionWhite", 0.20, { delay: 0.10, transform: "rotate(15deg)"})
        TweenMax.to(".transitionWhite", 0.30, { delay: 0.30, transform: "rotate(0deg)"})
      });
    }
  }
})
