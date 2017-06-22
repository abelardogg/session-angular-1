app.factory('homeFactory', homeFactory);

function homeFactory(){
    return {
        ready : ()=>{console.log('home factory ready')}
    }
}