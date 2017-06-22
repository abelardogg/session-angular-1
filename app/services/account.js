app.factory('accountFty', accountFty);

function accountFty(){
    return {
        ready : () => {console.log('account factory ready')}
    }
}