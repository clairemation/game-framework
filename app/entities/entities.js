const EventEmitter = require('../events/event-emitter.js');
const Stack = require('../libraries/stack.js');

var list = {};
var count = 0;

function Entity(args){
  this.id = args.id;
  list[this.name] = this;
  this.components = [];
};

Entity.list = list;
Entity.count = count;

Entity.prototype.on = function(sender, event, response){
  EventEmitter.sub(sender, event, response);
}

Entity.prototype.pub = function(eventId, info = {}){
  EventEmitter.pub(this.id, eventId, info);
}

module.exports = Entity;