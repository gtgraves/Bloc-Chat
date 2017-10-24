(function() {
  function LoginCtrl ($cookies, $uibModal, $uibModalInstance) {
    this.username = function(name) {
      if (!name || name === '') {
        $uibModal.open({
          templateUrl: '/templates/login.html',
          controller: 'LoginCtrl as login',
          backdrop: 'static'
        });
      } else {
        $cookies.put('blocChatCurrentuser', name);
        var welcomeUser = $cookies.get('blocChatCurrentuser');
        console.log(welcomeUser)
      };
    }

    this.setUser = function() {
      this.username(this.userName);
      $uibModalInstance.close();
    }

  }

  angular
    .module('blocChat')
    .controller('LoginCtrl', ['$cookies', '$uibModal', '$uibModalInstance', LoginCtrl]);
})();
