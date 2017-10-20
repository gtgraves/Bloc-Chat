(function() {
  function ModalCtrl (Room, $uibModal, $uibModalInstance) {
    this.newRoom = function(roomName) {
      Room.add(roomName);
      this.roomName = '';
    }

    this.submit = function() {
      this.newRoom(this.roomName);
      $uibModalInstance.close();
    }

    this.cancel = function() {
      $uibModalInstance.close('cancel');
    }

  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', '$uibModal', '$uibModalInstance', ModalCtrl]);
})();
