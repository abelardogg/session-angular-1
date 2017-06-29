app.controller('homeCtrl', homeCtrl);

function homeCtrl($window, $scope, homeFactory){
    /*TODO
    * since the ng-if create a new child $scope, the value of
    * $scope.usr is missed, so, we need to create an specific object
    * in this case obj, and we will use their values we wouldn't
    * loose the new values!*/
    $scope.obj = {
        usr:''
    };
    $scope.createUsr = () =>{
        if($scope.obj.usr!==null && $scope.obj.usr !== undefined && $scope.obj.usr!== '')
        {
            console.log('user input value\n',$scope.obj.usr);
            homeFactory.createUser($scope.obj.usr);
            $window.location.reload();
        } else {
            alert('dude, don\'t be like that... fill the input');
        }
    }


}
