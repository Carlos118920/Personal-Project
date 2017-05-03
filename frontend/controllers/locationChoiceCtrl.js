angular.module("DME").controller("locationChoiceCtrl", function($scope, mainSrv){


  TweenMax.staggerTo(".animationBoxWhite", 0.50, {top: "100%"}, 0.25)
  TweenMax.staggerTo(".animationBoxWhite", 0.20, {transform: "rotate(15deg)"}, 0.25)
  TweenMax.staggerTo(".animationBoxWhite", 0.30, { delay: 0.20, transform: "rotate(0deg)"}, 0.25)
  TweenMax.staggerTo(".animationBoxBlue", 0.50, { delay: 0.10, top: "100%"}, 0.25)
  TweenMax.staggerTo(".animationBoxBlue", 0.20, { delay: 0.10, transform: "rotate(15deg)"}, 0.25)
  TweenMax.staggerTo(".animationBoxBlue", 0.30, { delay: 0.30, transform: "rotate(0deg)"}, 0.25)
})
