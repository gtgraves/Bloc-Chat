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

    this.currentUser = function() {
      var user = $cookies.get('blocChatCurrentuser');
      return user;
    }

    this.sendMessage = function(newMessage) {
      Message.send(newMessage);
      this.messageContent = '';
    }

    this.send = function() {
      if (this.currentRoom == null) {
        alert("Please select a chat room first!");
        this.messageContent = '';
      } else {
        var currentUser = $cookies.get('blocChatCurrentuser');
        var newMessage = {
          username: this.currentUser(),
          content: this.messageContent,
          sentAt: firebase.database.ServerValue.TIMESTAMP,
          roomId: this.currentRoom.$id
        };
        this.sendMessage(newMessage);
      };
    }

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', 'Message', '$cookies', HomeCtrl]);
})();
