app.controller('accountCtrl', accountCtrl);

function accountCtrl(accountFty){
    console.log('account ready');
    accountFty.ready();
}