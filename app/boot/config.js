app.config(function($routeProvider){
        
        $routeProvider
            .when('/',{
                templateUrl : 'views/home.html',
                controller : 'homeCtrl'
            })
            .otherwise({
                templateUrl : 'views/home.html'
            });
      
    });