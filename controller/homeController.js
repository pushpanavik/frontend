app.controller('homeCtrl',function($state,$scope,$window,$rootScope){

  if (localStorage.getItem('token')===null) {
    $state.go('Login');
  }


$scope.mdIconProvider=function(){
  $mdIconProvider
     .iconSet('call', 'img/icons/sets/communication-icons.svg', 24);
}
})
