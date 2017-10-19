(function() {
  function HomeCtrl(Room, $uibModal) {
    this.rooms = Room.all;

    this.newRoom = function() {
      Room.add(this.roomName);
      this.roomName = '';
    }

    this.openModal = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl as modal'
      });
      console.log('modal opened');
    }

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
