angular.module("DME").directive("showSlides", function($location, $timeout){
  return {
    restrict: "A",
    link: (scope, element, attributes) => {
      let $slides	= $(".learnSlides");
      let currentSlide = 0;
      console.log("in showSlides")
			TweenMax.set($slides.filter(":gt(0)"), {left:"960px"});
			TweenMax.delayedCall(4, nextSlide);

			function nextSlide(){
					TweenMax.to( $slides.eq(currentSlide), 1, {left:"-960px"} );
					if (currentSlide < $slides.length - 1) {
						currentSlide++;
					}
					else {
						currentSlide = 0;
					}
					TweenMax.fromTo( $slides.eq(currentSlide), 1, {left: "960px"}, {left:"0px"} );
					TweenMax.delayedCall(4, nextSlide);
			}
    }
  }
})
