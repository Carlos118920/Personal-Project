angular.module("DME").directive("bubbleAnimation", function($location, $timeout){
  return {
    restrict: "A",
    link: (scope, element, attributes) => {
      $timeout(() => {
        TweenMax.staggerTo(".bubble", 0.50, {opacity: 1}, 0.15)
      }, 600);
    }
  }
})
