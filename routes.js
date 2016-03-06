// Routes

weatherApp.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider
    .when('/', {
        templateUrl: 'pages/homePage.html',
        controller: 'homeController'        
    })
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    .when('/forecast/:days', {        
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    .when('/liveVideo', {        
        templateUrl: 'pages/liveVideo.html',
        //controller: 'forecastController'
    })
    .otherwise({        
       redirectTo: '/' 
    }); 
    
}]);