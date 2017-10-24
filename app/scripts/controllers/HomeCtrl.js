(function() {
  function HomeCtrl(Room, $uibModal, Message, $cookies) {
    this.rooms = Room.all;
    this.messages = Message.all;

    this.setCurrentRoom = function(room) {
      this.currentRoom = room;
      this.roomMessages = Message.getByRoomId(room.$id);
    }

    this.openModal = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl as modal',
        backdrop: 'static'
      });
    }

    //this.currentUser = function() {
      //return $cookies.get('blocChatCurrentuser');
    //}
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', 'Message', '$cookies', HomeCtrl]);
})();
