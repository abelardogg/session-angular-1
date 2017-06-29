app.run(function(loginFty, $cookies, $rootScope){
    var cookie = $cookies.get('userKey');
    console.log('cookie: ',!!cookie);
    //if is cookie exists
        if(!!cookie){
            console.log('cookie value: ', cookie);
            $rootScope.isLogged=true;
        }else{
            console.log('cookie not found.');
            $rootScope.isLogged=false;
        }
        return true;
});