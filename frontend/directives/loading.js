angular.module("DME").directive("loading", function($location){
  return {
    restrict: "A",
    link: (scope, element, attributes) => {
      function switchView(){
        $location.path('home');
        scope.$apply();
      };
        TweenMax.to(element, 6, {rotation:-540, transformOrigin:"50% 50%", ease: Power0.easeNone, onComplete: switchView});
        TweenMax.to(".loadingAnimationContainer2", 6, {rotation:720, transformOrigin:"50% 50%", ease: Power0.easeNone});
        TweenMax.to(element, 2, {opacity: 1});
        TweenMax.to(element, 2, {opacity: 0, delay: 4});
    }
  }
})
