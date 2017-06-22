app.controller('homeCtrl', homeCtrl);

function homeCtrl($scope, homeFactory){
    console.log('home ctrl');
    homeFactory.ready();
}
