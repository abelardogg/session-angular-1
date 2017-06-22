app.run(appRun);

function appRun(loginFty){
    console.log('run');
    var isLoged = loginFty.isLogged();
    console.log('login service test from run \n expected true: \n',isLoged);
}