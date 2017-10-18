(function() {
  function HomeCtrl(Room) {
    this.rooms = Room.all

    this.newRoom = function() {
      Room.add(this.roomName);
      this.roomName = '';
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
