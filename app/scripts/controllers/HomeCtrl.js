(function() {
  function HomeCtrl(Room, $uibModal) {
    this.rooms = Room.all;

    this.openModal = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl as modal',
        backdrop: 'static'
      });
    }

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
