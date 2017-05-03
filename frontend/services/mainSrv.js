angular.module("DME").service("mainSrv", function($http){
  this.getCourses = () => {
    return $http.get("/courses/all").then((response) => {
      response = response.data;
      response.map((v,i) => {
        response[i].datestart = response[i].datestart.slice(5,10)
        response[i].dateend = response[i].dateend.slice(5,10)
        let startArr = response[i].datestart.split("-");
        let endArr = response[i].dateend.split("-");
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
      })
      return response;
    })
  }
  this.getCourse = (id) => {
    return $http.get("/courses/" + id).then((response) => {
      response.data[0].datestart = response.data[0].datestart.slice(5,10)
      response.data[0].dateend = response.data[0].dateend.slice(5,10)
      let startArr = response.data[0].datestart.split("-");
      let endArr = response.data[0].dateend.split("-");
      switch (startArr[0]) {
        case "01":
          response.data[0].datestart = "Jan " + startArr[1];
          break;
        case "02":
          response.data[0].datestart  = "Feb " + startArr[1];
          break;
        case "03":
          response.data[0].datestart  = "Mar " + startArr[1];
          break;
        case "04":
          response.data[0].datestart  = "Apr " + startArr[1];
          break;
        case "05":
          response.data[0].datestart  = "May " + startArr[1];
          break;
        case "06":
          response.data[0].datestart  = "Jun " + startArr[1];
          break;
        case "07":
          response.data[0].datestart  = "Jul " + startArr[1];
          break;
        case "08":
          response.data[0].datestart  = "Aug " + startArr[1];
          break;
        case "09":
          response.data[0].datestart  = "Sep " + startArr[1];
          break;
        case "10":
          response.data[0].datestart  = "Oct " + startArr[1];
          break;
        case "11":
          response.data[0].datestart  = "Nov " + startArr[1];
          break;
        case "12":
          response.data[0].datestart  = "Dec " + startArr[1];
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
    })
  }
  this.submitApplication = (survey, id) => {
    return $http({
      method: "POST",
      url: "/submit",
      data: {id, survey}
    })
  }
})
