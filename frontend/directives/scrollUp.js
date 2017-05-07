angular.module("DME").directive("scrollUp", function($location, $timeout){
  return {
    restrict: "A",
    link: (scope, element, attributes) => {
      $timeout(function () {
        $(".container").on('wheel', (e) => {
        	let delta = e.originalEvent.deltaY;
          console.log(delta);
        	if (Math.floor(delta) === -1){
            console.log("scroll up was invoked");
            TweenMax.staggerTo(".animationBoxBlue", 0.50, {top: 0, ease: Power1.easeIn}, 0.25)
            TweenMax.staggerTo(".animationBoxBlue", 0.20, {transform: "rotate(15deg)", ease: Power1.easeIn}, 0.25)
            TweenMax.staggerTo(".animationBoxBlue", 0.30, { delay: 0.20, transform: "rotate(0deg)", ease: Power1.easeIn}, 0.25)
            TweenMax.staggerTo(".animationBoxWhite", 0.50, { delay: 0.15, top: 0, ease: Power1.easeIn}, 0.25)
            TweenMax.staggerTo(".animationBoxWhite", 0.20, { delay: 0.15, transform: "rotate(15deg)", ease: Power1.easeIn}, 0.25)
            TweenMax.staggerTo(".animationBoxWhite", 0.30, { delay: 0.35, transform: "rotate(0deg)", ease: Power1.easeIn}, 0.25)
            delta = 0;
            scope.switchUp();
            $(".container").off("wheel");
          }
          return false;
        });
      }, 1000);
    }
  }
})
