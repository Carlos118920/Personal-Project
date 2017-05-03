angular.module("DME", ["ui.router"]).config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state("loading", {
      url: "/",
      templateUrl: "./frontend/views/loading.html",
      controller: "mainCtrl"
    })
    .state("home", {
      url: "/home",
      templateUrl: "./frontend/views/home.html",
      controller: "homeCtrl"
    })
    .state("application",{
      url: "/application",
      templateUrl: "./frontend/views/application.html",
      controller: "applicationCtrl"
    })
    .state("courseSurvey", {
      url: "/coursesurvey/:id",
      templateUrl: "./frontend/views/courseSurvey.html",
      controller: "courseSurvey"
    })
    .state("locationChoice", {
      url: "/experience/locationchoice",
      templateUrl: "./frontend/views/locationChoice.html",
      controller: "locationChoiceCtrl"
    })
    // $urlRouterProvider.otherwise("/");
  })
