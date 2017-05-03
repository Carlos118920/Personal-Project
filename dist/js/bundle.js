"use strict";
"use strict";

angular.module("DME", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state("loading", {
    url: "/",
    templateUrl: "./frontend/views/loading.html",
    controller: "mainCtrl"
  }).state("home", {
    url: "/home",
    templateUrl: "./frontend/views/home.html",
    controller: "homeCtrl"
  }).state("application", {
    url: "/application",
    templateUrl: "./frontend/views/application.html",
    controller: "applicationCtrl"
  }).state("courseSurvey", {
    url: "/coursesurvey/:id",
    templateUrl: "./frontend/views/courseSurvey.html",
    controller: "courseSurvey"
  }).state("locationChoice", {
    url: "/experience/locationchoice",
    templateUrl: "./frontend/views/locationChoice.html",
    controller: "locationChoiceCtrl"
  });
  // $urlRouterProvider.otherwise("/");
});
"use strict";

angular.module("DME").controller("applicationCtrl", function ($scope, $timeout, $location, mainSrv) {
  $scope.courses = mainSrv.getCourses().then(function (response) {
    $scope.courses = response;
  });
  $scope.surveySwitch = function (id) {
    $timeout(function () {
      console.log(id);
      $location.path("coursesurvey/" + id);
      $scope.$apply();
    }, 700);
  };
});
"use strict";

angular.module("DME").controller("courseSurvey", function ($scope, $stateParams, $timeout, $location, mainSrv) {
  $scope.course = mainSrv.getCourse($stateParams.id).then(function (response) {
    $scope.course = response[0];
  });
  $scope.switchApply = function () {
    $timeout(function () {
      $location.path("application");
      $scope.$apply();
    }, 700);
  };
  $scope.submitApplication = function () {
    mainSrv.submitApplication($scope.survey, $stateParams.id);
  };
});
"use strict";

angular.module("DME").controller("homeCtrl", function ($scope, $timeout, $location, mainSrv) {
  TweenMax.to(".homeTitle", 1, { delay: 0.60, color: "rgb(19, 182, 247)" });
  $scope.switchApply = function () {
    $timeout(function () {
      $location.path("application");
      $scope.$apply();
    }, 700);
  };
  $scope.switchExperience = function () {
    $timeout(function () {
      $location.path("experience/locationchoice");
      $scope.$apply();
    }, 700);
  };
});
"use strict";

angular.module("DME").controller("locationChoiceCtrl", function ($scope, mainSrv) {

  TweenMax.staggerTo(".animationBoxWhite", 0.50, { top: "100%" }, 0.25);
  TweenMax.staggerTo(".animationBoxWhite", 0.20, { transform: "rotate(15deg)" }, 0.25);
  TweenMax.staggerTo(".animationBoxWhite", 0.30, { delay: 0.20, transform: "rotate(0deg)" }, 0.25);
  TweenMax.staggerTo(".animationBoxBlue", 0.50, { delay: 0.10, top: "100%" }, 0.25);
  TweenMax.staggerTo(".animationBoxBlue", 0.20, { delay: 0.10, transform: "rotate(15deg)" }, 0.25);
  TweenMax.staggerTo(".animationBoxBlue", 0.30, { delay: 0.30, transform: "rotate(0deg)" }, 0.25);
});
"use strict";

angular.module("DME").controller("mainCtrl", function ($scope, mainSrv) {

  // USE ES6


  $scope.nextPage = function () {
    console.log("NextPage clicked!");
  };

  $scope.prevPage = function () {
    console.log("PrevPage clicked!");
  };
  // function switchView(){
  //   $location.path('home');
  //   $scope.$apply();
  // };
});
"use strict";

angular.module("DME").directive("loading", function ($location) {
  return {
    restrict: "A",
    link: function link(scope, element, attributes) {
      function switchView() {
        $location.path('home');
        scope.$apply();
      };
      TweenMax.to(element, 6, { rotation: -540, transformOrigin: "50% 50%", ease: Power0.easeNone, onComplete: switchView });
      TweenMax.to(".loadingAnimationContainer2", 6, { rotation: 720, transformOrigin: "50% 50%", ease: Power0.easeNone });
      TweenMax.to(element, 2, { opacity: 1 });
      TweenMax.to(element, 2, { opacity: 0, delay: 4 });
    }
  };
});
"use strict";

angular.module("DME").directive("transitionIn", function ($location, $timeout) {
  return {
    restrict: "A",
    link: function link(scope, element, attributes) {
      $timeout(function () {
        TweenMax.to(".transitionWhite", 0.50, { top: "100%" });
        TweenMax.to(".transitionWhite", 0.20, { transform: "rotate(15deg)" });
        TweenMax.to(".transitionWhite", 0.30, { delay: 0.20, transform: "rotate(0deg)" });
        TweenMax.to(".transitionBlue", 0.50, { delay: 0.10, top: "100%" });
        TweenMax.to(".transitionBlue", 0.20, { delay: 0.10, transform: "rotate(15deg)" });
        TweenMax.to(".transitionBlue", 0.30, { delay: 0.30, transform: "rotate(0deg)" });
      }, 100);
    }
  };
});
"use strict";

angular.module("DME").directive("transitionOut", function ($location, $timeout) {
  return {
    restrict: "A",
    link: function link(scope, element, attributes) {
      element.on("click", function () {
        TweenMax.to(".transitionBlue", 0.50, { top: 0 });
        TweenMax.to(".transitionBlue", 0.20, { transform: "rotate(15deg)" });
        TweenMax.to(".transitionBlue", 0.30, { delay: 0.20, transform: "rotate(0deg)" });
        TweenMax.to(".transitionWhite", 0.50, { delay: 0.10, top: 0 });
        TweenMax.to(".transitionWhite", 0.20, { delay: 0.10, transform: "rotate(15deg)" });
        TweenMax.to(".transitionWhite", 0.30, { delay: 0.30, transform: "rotate(0deg)" });
      });
    }
  };
});
"use strict";

angular.module("DME").service("mainSrv", function ($http) {
  this.getCourses = function () {
    return $http.get("/courses/all").then(function (response) {
      response = response.data;
      response.map(function (v, i) {
        response[i].datestart = response[i].datestart.slice(5, 10);
        response[i].dateend = response[i].dateend.slice(5, 10);
        var startArr = response[i].datestart.split("-");
        var endArr = response[i].dateend.split("-");
        switch (startArr[0]) {
          case "01":
            response[i].datestart = "Jan " + startArr[1];
            break;
          case "02":
            response[i].datestart = "Feb " + startArr[1];
            break;
          case "03":
            response[i].datestart = "Mar " + startArr[1];
            break;
          case "04":
            response[i].datestart = "Apr " + startArr[1];
            break;
          case "05":
            response[i].datestart = "May " + startArr[1];
            break;
          case "06":
            response[i].datestart = "Jun " + startArr[1];
            break;
          case "07":
            response[i].datestart = "Jul " + startArr[1];
            break;
          case "08":
            response[i].datestart = "Aug " + startArr[1];
            break;
          case "09":
            response[i].datestart = "Sep " + startArr[1];
            break;
          case "10":
            response[i].datestart = "Oct " + startArr[1];
            break;
          case "11":
            response[i].datestart = "Nov " + startArr[1];
            break;
          case "12":
            response[i].datestart = "Dec " + startArr[1];
            break;
        }
        switch (endArr[0]) {
          case "01":
            response[i].dateend = "Jan " + endArr[1];
            break;
          case "02":
            response[i].dateend = "Feb " + endArr[1];
            break;
          case "03":
            response[i].dateend = "Mar " + endArr[1];
            break;
          case "04":
            response[i].dateend = "Apr " + endArr[1];
            break;
          case "05":
            response[i].dateend = "May " + endArr[1];
            break;
          case "06":
            response[i].dateend = "Jun " + endArr[1];
            break;
          case "07":
            response[i].dateend = "Jul " + endArr[1];
            break;
          case "08":
            response[i].dateend = "Aug " + endArr[1];
            break;
          case "09":
            response[i].dateend = "Sep " + endArr[1];
            break;
          case "10":
            response[i].dateend = "Oct " + endArr[1];
            break;
          case "11":
            response[i].dateend = "Nov " + endArr[1];
            break;
          case "12":
            response[i].dateend = "Dec " + endArr[1];
            break;
        }
      });
      return response;
    });
  };
  this.getCourse = function (id) {
    return $http.get("/courses/" + id).then(function (response) {
      response.data[0].datestart = response.data[0].datestart.slice(5, 10);
      response.data[0].dateend = response.data[0].dateend.slice(5, 10);
      var startArr = response.data[0].datestart.split("-");
      var endArr = response.data[0].dateend.split("-");
      switch (startArr[0]) {
        case "01":
          response.data[0].datestart = "Jan " + startArr[1];
          break;
        case "02":
          response.data[0].datestart = "Feb " + startArr[1];
          break;
        case "03":
          response.data[0].datestart = "Mar " + startArr[1];
          break;
        case "04":
          response.data[0].datestart = "Apr " + startArr[1];
          break;
        case "05":
          response.data[0].datestart = "May " + startArr[1];
          break;
        case "06":
          response.data[0].datestart = "Jun " + startArr[1];
          break;
        case "07":
          response.data[0].datestart = "Jul " + startArr[1];
          break;
        case "08":
          response.data[0].datestart = "Aug " + startArr[1];
          break;
        case "09":
          response.data[0].datestart = "Sep " + startArr[1];
          break;
        case "10":
          response.data[0].datestart = "Oct " + startArr[1];
          break;
        case "11":
          response.data[0].datestart = "Nov " + startArr[1];
          break;
        case "12":
          response.data[0].datestart = "Dec " + startArr[1];
          break;
      }
      switch (endArr[0]) {
        case "01":
          response.data[0].dateend = "Jan " + endArr[1];
          break;
        case "02":
          response.data[0].dateend = "Feb " + endArr[1];
          break;
        case "03":
          response.data[0].dateend = "Mar " + endArr[1];
          break;
        case "04":
          response.data[0].dateend = "Apr " + endArr[1];
          break;
        case "05":
          response.data[0].dateend = "May " + endArr[1];
          break;
        case "06":
          response.data[0].dateend = "Jun " + endArr[1];
          break;
        case "07":
          response.data[0].dateend = "Jul " + endArr[1];
          break;
        case "08":
          response.data[0].dateend = "Aug " + endArr[1];
          break;
        case "09":
          response.data[0].dateend = "Sep " + endArr[1];
          break;
        case "10":
          response.data[0].dateend = "Oct " + endArr[1];
          break;
        case "11":
          response.data[0].dateend = "Nov " + endArr[1];
          break;
        case "12":
          response.data[0].dateend = "Dec " + endArr[1];
          break;
      }
      return response.data;
    });
  };
  this.submitApplication = function (survey, id) {
    return $http({
      method: "POST",
      url: "/submit",
      data: { id: id, survey: survey }
    });
  };
});
//# sourceMappingURL=bundle.js.map
