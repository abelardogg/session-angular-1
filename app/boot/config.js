app.config(function($routeProvider){
        
        $routeProvider
            .when('/',{
                templateUrl : 'views/home.html',
                controller : 'homeCtrl'
            })
            .when('/acc',{
                templateUrl : 'views/account.html',
                controller : 'accountCtrl'
            })
            .otherwise({
                templateUrl : 'views/home.html'
            });
      
    });