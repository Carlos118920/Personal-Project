angular.module("DME").directive("carousel", function($location){
  return {
    restrict: "A",
    link: (scope, element, attributes) => {
      let $next = $(".nextSlide");
      let $prev = $(".prevSlide");
      let $slides	= $(".learnSlides");
      let currentSlide = 0;
      TweenMax.set($slides.filter(":gt(0)"), {left:"100%"});

      $prev.on("click", () => {
        TweenMax.to( $slides.eq(currentSlide), 1, {left:"100%"} );
        if (currentSlide >  0) {
          currentSlide--;
        }
        else {
          currentSlide = $slides.length - 1;
        }
        TweenMax.fromTo( $slides.eq(currentSlide), 1, {left: "-100%"}, {left:"0px"} );
      })

      $next.on("click", () => {
        TweenMax.to( $slides.eq(currentSlide), 1, {left:"-100%"} );
        if (currentSlide < $slides.length - 1) {
          currentSlide++;
        }
        else {
          currentSlide = 0;
        }
        TweenMax.fromTo( $slides.eq(currentSlide), 1, {left: "100%"}, {left:"0px"} );
      })
    }
  }
})
