(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentuser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/login.html',
        controller: 'LoginCtrl as login',
        backdrop: 'static'
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
