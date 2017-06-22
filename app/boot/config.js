app.config(function($routeProvider){
        
        $routeProvider
            .when('/',{
                templateUrl : 'views/home.html'
            })
            .when('/acc',{
                templateUrl : 'views/account.html'
            })
            .otherwise({
                templateUrl : 'views/home.html'
            });
      
    });