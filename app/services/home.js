app.factory('homeFactory', function($cookies){
    return {
        ready : ()=>{
            console.log('home factory ready')
        },
        createUser : (userName)=>{
            $cookies.put('userKey', userName);
        }
    }
});