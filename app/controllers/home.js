app.controller('homeCtrl', homeCtrl);

function homeCtrl($scope, homeFactory){
    $scope.createUsr = () =>{
        console.log('user input value\n',$scope.usr);
        homeFactory.createUser($scope.usr);
    }


}
