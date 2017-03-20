var EventEmitter = {
  registry: {},
  sub: function(senderId, eventId, callback){
    if (!this.registry.hasOwnProperty(senderId)){
      this.registry[senderId] = {};
    }
    this.registry[senderId][eventId] = [];
    return this.registry[senderId][eventId].push(callback);
  },
  pub: function(senderId, eventId, info){
    if (this.registry.hasOwnProperty(senderId) && this.registry[senderId].hasOwnProperty(eventId)){
      var e = this.registry[senderId][eventId];
      for (let i = 0; i < e.length; i++){
        e[i]({senderId, eventId, info});
      }
    }
  }
}

module.exports = EventEmitter;