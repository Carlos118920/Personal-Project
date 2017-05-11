angular.module("DME").directive("circleHover", function($location){
  return {
    restrict: "A",
    link: (scope, element, attributes) => {
      $(".homeBigCircle").mouseover(() => {
        $(".homeBigCircleDouble").css({"top":"100px", "left": "0px"});
      })
      $(".homeBigCircle").mouseout(() => {
        $(".homeBigCircleDouble").css({"top":"94px", "left": "-6px"});
      })
      $(".homeSmallCircle").mouseover(() => {
        $(".homeSmallCircleDouble").css({"top":"0px", "left": "275px"});
      })
      $(".homeSmallCircle").mouseout(() => {
        $(".homeSmallCircleDouble").css({"top":"-6px", "left": "269px"});
      })
      $(".experienceApplyButton").mouseover(() => {
        $(".experienceApplyButtonDouble").css({"top": "0px", "left": "0px"});
      })
      $(".experienceApplyButton").mouseout(() => {
        $(".experienceApplyButtonDouble").css({"top": "-6px", "left": "-6px"});
      })
      $(".mainCircle").mouseover(function() {
        TweenMax.to($(this).children(".animationCircle"), 1.5, { transformOrigin: "85.5% 85.5%", rotation: 180, ease: Bounce.easeOut});
        TweenMax.to($(this).children("h3"), 1.5, {color: "black"})
      });
      $(".mainCircle").mouseout(function(){
        TweenMax.to($(this).children(".animationCircle"), 1.5, { transformOrigin: "85.5% 85.5%", rotation: 0, ease: Power1.easeOut});
        TweenMax.to($(this).children("h3"), 1.5, {color: "white"})
      })
    }
  }
})
