

// CONTROLLERS

weatherApp.controller('homeController', ['$scope', '$log', '$location', 'weatherSvc', function($scope, $log, $location, weatherSvc) {
    $scope.city = weatherSvc.city;   
    
   $scope.$watch('city', function(){
      weatherSvc.city = $scope.city;       
   });    
    
    $scope.submit = function(){        
        $location.path('/forecast');
    }
    
}]);


weatherApp.controller('forecastController', ['$scope', '$log', '$resource', '$routeParams', 'weatherSvc', function($scope, $log, $resource, $routeParams, weatherSvc) 
{ 
    $scope.city = weatherSvc.city;
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
        callback: "JSON_CALLBACK" }, {get: {method: "JSONP"}});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt:$scope.days, appid:'a083edf41e5d46d58f5655dcbdd1b9cd'});
    
   $scope.convertToFaren = function(degK){
       
       return Math.round((1.8 * (degK - 273)) + 32);
   };
   
   $scope.convertToDate = function(dt){
       return new Date(dt *1000);
   };
    
}]);
