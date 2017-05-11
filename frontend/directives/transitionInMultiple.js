angular.module("DME").directive("transitionInMultiple", function($location, $timeout){
  return {
    restrict: "A",
    link: (scope, element, attributes) => {

      $timeout(() => {
        TweenMax.staggerTo(".animationBoxWhite", 0.50, {top: "100%"}, 0.25)
        TweenMax.staggerTo(".animationBoxWhite", 0.20, {transform: "rotate(15deg)"}, 0.25)
        TweenMax.staggerTo(".animationBoxWhite", 0.30, { delay: 0.20, transform: "rotate(0deg)"}, 0.25)
        TweenMax.staggerTo(".animationBoxBlue", 0.50, { delay: 0.15, top: "100%"}, 0.25)
        TweenMax.staggerTo(".animationBoxBlue", 0.20, { delay: 0.15, transform: "rotate(15deg)"}, 0.25, fadeUpDown, )
        TweenMax.staggerTo(".animationBoxBlue", 0.30, { delay: 0.35, transform: "rotate(0deg)"}, 0.25)
      }, 100);


      let fadeUpDown = () => {
        TweenMax.set(".fadeUpDown", {y: "-10px"})
        TweenMax.set(".appear", {color: "white"})
        TweenMax.to(".fadeUpDown", 1.50, {opacity: 1});
        TweenMax.to(".fadeUpDown", 0.50, { delay: 0.10, y: "0px"})
        TweenMax.to(".fadeIn", 1, {opacity: 1});
        TweenMax.to(".appear", 1, { delay: 0.50, width: "100%"})
        TweenMax.to(".appear", 1, {delay: 0.50, color: "rgb(19, 182, 247)", ease: Power1.easeIn})
        TweenMax.to(".infoAppear1", 1, {delay: 0.75, opacity: 1});
        TweenMax.to(".infoAppear2", 1, {delay: 1.25, opacity: 1})
        TweenMax.to(".infoAppear3", 1, {delay: 1.50, opacity: 1});
        TweenMax.to(".infoAppear4", 1, {delay: 2, opacity: 1})
      }
    }
  }
})
