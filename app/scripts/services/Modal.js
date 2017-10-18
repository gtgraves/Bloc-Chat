(function() {
  function Modal() {
    this.open = $uibModal.open({
      templateUrl: '/templates/modal.html',
      controller: 'ModalCtrl as modal'
    });

  }

  angular
    .module('blocChat')
    .factory('Modal', ['$uibModal', Modal]);
})();
